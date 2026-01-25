export type GithubRepoStats = {
  stars: number;
  forks: number;
  openIssues: number;
  updatedAt: string;
};

export type GithubReleaseStats = {
  name: string;
  tag: string;
  publishedAt: string;
  downloads: number;
};

type GithubStats = {
  repo: GithubRepoStats | null;
  release: GithubReleaseStats | null;
  error: boolean;
};

const OWNER = 'Ch4r0ne';
const REPO = 'ARK-Ascended-Server-Manager';

function safeNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function ghHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'asa-manager-site',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function fetchJson(url: string): Promise<{ ok: boolean; json: unknown }> {
  const response = await fetch(url, { headers: ghHeaders() });
  let json: unknown = null;

  try {
    json = await response.json();
  } catch {
    json = null;
  }

  return { ok: response.ok, json };
}

async function fetchTotalDownloadsAllReleases(): Promise<number> {
  let total = 0;
  let page = 1;
  const MAX_PAGES = 10;

  while (page <= MAX_PAGES) {
    const { ok, json } = await fetchJson(
      `https://api.github.com/repos/${OWNER}/${REPO}/releases?per_page=100&page=${page}`,
    );

    if (!ok || !Array.isArray(json)) {
      break;
    }

    for (const release of json) {
      const assets = Array.isArray(release?.assets) ? release.assets : [];
      for (const asset of assets) {
        total += safeNumber(asset?.download_count, 0);
      }
    }

    if (json.length < 100) {
      break;
    }

    page += 1;
  }

  return total;
}

export async function getGithubStats(): Promise<GithubStats> {
  try {
    const [repoRes, latestRelRes] = await Promise.all([
      fetchJson(`https://api.github.com/repos/${OWNER}/${REPO}`),
      fetchJson(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`),
    ]);

    const repo =
      repoRes.ok && repoRes.json
        ? {
            stars: safeNumber((repoRes.json as { stargazers_count?: number })
              .stargazers_count),
            forks: safeNumber((repoRes.json as { forks_count?: number }).forks_count),
            openIssues: safeNumber(
              (repoRes.json as { open_issues_count?: number }).open_issues_count,
            ),
            updatedAt: String(
              (repoRes.json as { updated_at?: string }).updated_at ?? '',
            ),
          }
        : null;

    const latest =
      latestRelRes.ok && latestRelRes.json
        ? {
            name: String(
              (latestRelRes.json as { name?: string }).name ?? 'Latest Release',
            ),
            tag: String((latestRelRes.json as { tag_name?: string }).tag_name ?? ''),
            publishedAt: String(
              (latestRelRes.json as { published_at?: string }).published_at ?? '',
            ),
            downloads: 0,
          }
        : null;

    if (latest) {
      latest.downloads = await fetchTotalDownloadsAllReleases();
    }

    return { repo, release: latest, error: false };
  } catch {
    return { repo: null, release: null, error: true };
  }
}
