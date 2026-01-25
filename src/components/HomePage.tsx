import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Menu,
  X,
  Github,
  ShieldCheck,
  ServerCog,
  Settings,
  Terminal,
  Database,
  CheckCircle,
  Lock,
  Network,
  Users,
  BookOpen,
  LifeBuoy,
} from 'lucide-react';
import { useState, useEffect, type ReactNode } from 'react';

const DOWNLOAD_LATEST_URL =
  'https://github.com/Ch4r0ne/ARK-Ascended-Server-Manager/releases/latest';
const REPO_URL = 'https://github.com/Ch4r0ne/ARK-Ascended-Server-Manager';
const ISSUE_URL =
  'https://github.com/Ch4r0ne/ARK-Ascended-Server-Manager/issues/new/choose';
const LICENSE_URL =
  'https://github.com/Ch4r0ne/ARK-Ascended-Server-Manager/blob/main/LICENSE';
const PUBLISHER_URL = 'https://github.com/Ch4r0ne';

type GithubStats = {
  repo: { stars: number; forks: number; openIssues: number; updatedAt: string } | null;
  release: { name: string; tag: string; publishedAt: string; downloads: number } | null;
  error: boolean;
};

const formatNumber = (value: number) => value.toLocaleString('de-DE');

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'story',
        'features',
        'quickstart',
        'multi-instance',
        'security',
        'faq',
        'cta',
      ];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#story', label: 'Story', id: 'story' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#quickstart', label: 'Quickstart', id: 'quickstart' },
    { href: '#multi-instance', label: 'Multi-Instance', id: 'multi-instance' },
    { href: '#security', label: 'Security', id: 'security' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className="bg-background/80 border-border/40 relative sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
      <a
        href="/"
        className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <img
          src="/images/favicon.png"
          alt="ARK ASA Server Manager Icon"
          className="h-8 w-8"
        />
        <span className="font-heading text-foreground text-2xl font-bold">
          ARK ASA Server Manager
        </span>
      </a>

      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            data-testid={`link-${link.id}`}
            className={`relative w-fit transition-colors ${
              activeSection === link.id
                ? 'text-primary font-bold'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="bg-primary absolute right-0 bottom-0 left-0 h-1 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          </a>
        ))}
        <a href={DOWNLOAD_LATEST_URL} target="_blank" rel="noreferrer">
          <button
            data-testid="button-download-nav"
            className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Download Latest
          </button>
        </a>
      </div>

      <button
        className="text-foreground bg-primary/10 hover:bg-primary/25 rounded-full p-2 transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-card border-border/60 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                data-testid={`link-${link.id}-mobile`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                whileHover={{ x: 4 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary font-bold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="border-border/40 border-t pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: navLinks.length * 0.08 + 0.1,
                duration: 0.25,
              }}
            >
              <a
                href={DOWNLOAD_LATEST_URL}
                className="block w-full"
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noreferrer"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    data-testid="button-download-mobile"
                    className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full py-4 font-medium shadow-lg transition-all hover:shadow-xl"
                  >
                    Download Latest
                  </button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ github }: { github: GithubStats }) => {
  const repo = github.repo;
  const release = github.release;
  const hasError = github.error;

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center overflow-hidden px-6 py-12 md:flex-row md:px-12 lg:px-24"
    >
      <div className="bg-primary/10 absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-accent/30 absolute right-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="relative z-10 w-full space-y-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-hand text-primary mb-4 inline-block -rotate-2 text-2xl">
            Professionelle Windows-GUI für ARK: Survival Ascended
          </span>
          <h1 className="font-heading text-foreground mb-6 text-5xl leading-[1.1] font-bold md:text-7xl">
            ASA Server Manager{' '}
            <span className="text-primary relative inline-block">
              für Windows
              <svg
                className="text-accent absolute -bottom-1 left-0 -z-10 h-3 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed md:text-xl">
            Klare Workflows für Deployments, Updates und tägliche Ops – stabil,
            nachvollziehbar und auf Windows optimiert.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href={DOWNLOAD_LATEST_URL} target="_blank" rel="noreferrer">
              <button className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-6 py-3 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <Download className="h-5 w-5" />
                Download Latest
              </button>
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              <button className="font-heading border-border text-foreground hover:border-primary flex items-center gap-2 rounded-full border px-6 py-3 font-bold shadow-sm transition-all hover:scale-105">
                <Github className="h-5 w-5" />
                GitHub Repo
              </button>
            </a>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              {
                icon: ShieldCheck,
                label: 'Safe Start & Safe Stop',
                color: 'text-green-600',
              },
              {
                icon: Terminal,
                label: 'SteamCMD Updates',
                color: 'text-blue-600',
              },
              {
                icon: Lock,
                label: 'SHA256 Checksums',
                color: 'text-purple-600',
              },
              {
                icon: Settings,
                label: 'Staged INI Workflow',
                color: 'text-orange-600',
              },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-secondary/30 border-border/40 flex items-center justify-center gap-2 rounded-full border px-3 py-2"
              >
                <badge.icon className={`h-4 w-4 flex-shrink-0 ${badge.color}`} />
                <span className="text-foreground text-xs font-semibold">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <img
            src="/images/ASA_Server_Manager_Preview_2.png"
            alt="ARK ASA Server Manager UI preview"
            className="h-auto w-full transform rounded-xl shadow-2xl transition-transform duration-700 hover:rotate-0 md:rotate-2"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="bg-card absolute -bottom-8 -left-4 flex max-w-[220px] items-center gap-3 rounded-2xl p-4 shadow-lg md:left-10"
          >
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <Github size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">GitHub Live-Status</p>
              {repo ? (
                <p className="text-muted-foreground text-xs">
                  {formatNumber(repo.stars)} Stars · {formatNumber(repo.forks)} Forks ·{' '}
                  {formatNumber(repo.openIssues)} Issues
                </p>
              ) : (
                <p className="text-muted-foreground text-xs">
                  {hasError
                    ? 'Live-Daten derzeit nicht verfügbar.'
                    : 'Live-Daten werden geladen.'}
                </p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            whileHover={{ y: 4 }}
            className="bg-card absolute -top-4 -right-4 flex max-w-[220px] items-center gap-3 rounded-2xl p-4 shadow-lg md:-right-8"
          >
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <Download size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Latest Release</p>
              {release ? (
                <p className="text-muted-foreground text-xs">
                  {release.tag} · {formatDate(release.publishedAt)} ·{' '}
                  {formatNumber(release.downloads)} Gesamt-Downloads
                </p>
              ) : (
                <p className="text-muted-foreground text-xs">
                  {hasError
                    ? 'Release-Daten derzeit nicht verfügbar.'
                    : 'Release-Daten werden geladen.'}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  desc,
  icon,
  delay,
  testId,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
  delay: number;
  testId: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    data-testid={testId}
  >
    <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col p-0">
        <div className="bg-secondary/30 flex h-32 items-center justify-center p-8">
          <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
            {icon}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center p-8 text-center">
          <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section
      id="features"
      className="relative bg-white/50 px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            ARK Dedicated Server Manager Features
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Entwickelt für professionelle ASA-Operations
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Klar strukturierte Tools für stabile Windows-Deployments und
            nachvollziehbare Prozesse.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Safe start and safe stop"
            desc="Controlled shutdown path to reduce save loss and config drift."
            icon={<ShieldCheck className="text-primary h-8 w-8" />}
            delay={0.1}
            testId="card-feature-safe"
          />
          <FeatureCard
            title="Staged INI workflow"
            desc="Edit safely, apply on start, restore baseline on safe stop."
            icon={<Settings className="text-primary h-8 w-8" />}
            delay={0.2}
            testId="card-feature-ini"
          />
          <FeatureCard
            title="Predictable maintenance"
            desc="SteamCMD install, update, and validate in one workflow."
            icon={<Terminal className="text-primary h-8 w-8" />}
            delay={0.3}
            testId="card-feature-steamcmd"
          />
          <FeatureCard
            title="Operator tooling"
            desc="RCON-driven admin tasks with guardrails for daily ops."
            icon={<ServerCog className="text-primary h-8 w-8" />}
            delay={0.4}
            testId="card-feature-rcon"
          />
          <FeatureCard
            title="Backups and retention"
            desc="Structured backups and retention logic for fast restores."
            icon={<Database className="text-primary h-8 w-8" />}
            delay={0.5}
            testId="card-feature-backups"
          />
          <FeatureCard
            title="Release integrity"
            desc="SHA256 checksums make every download verifiable."
            icon={<Lock className="text-primary h-8 w-8" />}
            delay={0.6}
            testId="card-feature-sha"
          />
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-white/70 p-10 shadow-lg md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <span className="font-hand text-primary text-xl">
            Unsere Entstehungsgeschichte
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Vom PowerShell-Skript zur professionellen Manager-Suite
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Angefangen hat alles mit einem kleinen PowerShell-Skript, das unsere
            ersten Serverstarts automatisierte. Durch Community-Feedback wurde
            daraus Schritt für Schritt ein vollständiger Manager – heute als
            Python-basierte Lösung, die Enterprise-Prozesse auf Windows abbildet.
          </p>
          <p className="text-muted-foreground">
            Dieser Weg prägt unsere Prioritäten: stabile Releases, klare
            Workflows und nachvollziehbare Updates für Teams, die täglich mit
            ASA-Servern arbeiten.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            {
              title: 'Phase 1 · PowerShell',
              detail: 'Automatisierte erste Starts und Updates.',
            },
            {
              title: 'Phase 2 · Community',
              detail: 'Wünsche aus der Community wurden zu Features.',
            },
            {
              title: 'Phase 3 · Python',
              detail: 'Skalierbarer Manager mit klaren Ops-Prozessen.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card border-border/40 rounded-2xl border p-5 shadow-sm"
            >
              <p className="text-primary text-sm font-semibold">{item.title}</p>
              <p className="text-muted-foreground text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Quickstart = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Download & Start',
      detail:
        'Aktuelle EXE aus den GitHub Releases laden und ARK-ASA-Manager.exe starten.',
      icon: <Download className="text-primary h-8 w-8" />,
    },
    {
      step: 'Step 2',
      title: 'Ersteinrichtung',
      detail:
        'Einmalig „First Install“ ausführen und Pfade, Ports sowie Settings setzen.',
      icon: <Settings className="text-primary h-8 w-8" />,
    },
    {
      step: 'Step 3',
      title: 'Betrieb',
      detail:
        'Server starten, sicher stoppen, Änderungen kontrolliert ausrollen.',
      icon: <ServerCog className="text-primary h-8 w-8" />,
    },
  ];

  return (
    <section id="quickstart" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">Quickstart</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            ASA-Server in wenigen Minuten produktiv
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-card h-full rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="flex h-full flex-col gap-4 p-8">
                  <div className="bg-primary/15 flex h-14 w-14 items-center justify-center rounded-full">
                    {step.icon}
                  </div>
                  <p className="text-primary text-sm font-semibold">
                    {step.step}
                  </p>
                  <h3 className="font-heading text-foreground text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground flex-1 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MultiInstance = () => {
  return (
    <section
      id="multi-instance"
      className="bg-secondary/20 flex items-center justify-center px-6 py-24"
    >
      <motion.div
        className="relative mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-heading text-foreground mb-6 text-center text-3xl font-bold md:text-4xl">
          Multi-Instance & Cluster-ready
        </h3>
        <p className="text-muted-foreground mb-8 text-center text-lg">
          Mehrere Instanzen ohne Kollisionen dank klarer Trennung pro Server.
        </p>
        <div className="grid gap-4 rounded-[2rem] bg-white/80 p-8 shadow-lg">
          <div className="flex items-start gap-3">
            <Network className="text-primary mt-1 h-6 w-6" />
            <p className="text-muted-foreground">
              Unique ports pro Instance: game, query und RCON.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Database className="text-primary mt-1 h-6 w-6" />
            <p className="text-muted-foreground">
              AltSaveDirectoryName nutzen, um Saves sauber zu isolieren.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Users className="text-primary mt-1 h-6 w-6" />
            <p className="text-muted-foreground">
              Cluster IDs konsistent halten für zuverlässige Transfers.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Security = () => {
  return (
    <section id="security" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Trust & Security
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Verifizierte Releases, sichere Abläufe
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Quelle der Wahrheit: GitHub Releases. Jede Datei vor dem Einsatz
            verifizieren.
          </p>
        </div>

        <div className="grid gap-8 rounded-[2rem] bg-white/80 p-8 shadow-lg md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-heading text-foreground text-2xl font-bold">
              SHA256 Verify Command
            </h3>
            <div className="bg-secondary/30 text-foreground rounded-xl p-4 text-sm">
              <code>Get-FileHash -Algorithm SHA256 ".\\ARK-ASA-Manager.exe"</code>
            </div>
            <p className="text-muted-foreground text-sm">
              Ausgabe mit der SHA256-Checksumme der Release vergleichen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-foreground text-2xl font-bold">
              Security best practices
            </h3>
            <ul className="text-muted-foreground space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Lock className="text-primary mt-0.5 h-4 w-4" />
                RCON nicht ins Public Internet exponieren.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="text-primary mt-0.5 h-4 w-4" />
                Firewall allow lists oder VPN für Admin Access.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-primary mt-0.5 h-4 w-4" />
                Updates über SteamCMD install/update/validate.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: 'Welche Ports werden typischerweise genutzt? ',
      answer:
        'UDP 7777 (game), UDP 27015 (query), TCP 27020 (RCON wenn aktiviert).',
    },
    {
      question: 'Was muss ich bei Multi-Instance beachten?',
      answer:
        'Unique ports + AltSaveDirectoryName + configs separieren, staged INI workflow nutzen.',
    },
    {
      question: 'Was bedeutet staged INI workflow?',
      answer:
        'Änderungen werden sicher vorbereitet, beim Start angewendet und beim Safe Stop zurückgesetzt.',
    },
    {
      question: 'RCON exposure?',
      answer: 'No. RCON niemals öffentlich ins Internet stellen.',
    },
    {
      question: 'Wie laufen Updates?',
      answer: 'Über SteamCMD install/update/validate.',
    },
  ];

  return (
    <section id="faq" className="relative bg-white/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">FAQ</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Antworten für ASA Server Manager Ops
          </h2>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-card rounded-[1.5rem] p-6 shadow-md"
            >
              <h3 className="font-heading text-foreground mb-2 text-lg font-bold">
                {faq.question}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="from-secondary/5 via-background to-primary/5 border-border/40 relative border-t bg-gradient-to-br px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-3"
          >
            <div className="flex items-center gap-3">
              <img
                src="/images/favicon.png"
                alt="ARK ASA Server Manager Icon"
                className="h-7 w-7"
              />
              <h3 className="font-heading text-foreground text-lg font-bold">
                ARK ASA Server Manager
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Windows GUI für ARK: Survival Ascended Dedicated Server mit klaren
              Ops-Workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Resources</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href={DOWNLOAD_LATEST_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Latest
                </a>
                <a
                  href={REPO_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
                <a
                  href={ISSUE_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Issues / Feature Requests
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Legal</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href={LICENSE_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  License
                </a>
                <a
                  href="/imprint"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Imprint
                </a>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h4 className="font-heading text-foreground font-bold">
                Publisher
              </h4>
              <p className="text-muted-foreground text-sm">
                Link to the official publisher profile.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={PUBLISHER_URL}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Users className="h-4 w-4" />
                Publisher
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-border/40 my-8 border-t" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 flex flex-col items-center justify-between gap-4 text-center text-xs md:flex-row"
        >
          <p>&copy; {new Date().getFullYear()} Ch4r0ne. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with <LifeBuoy className="h-3 w-3 text-red-400" /> for ASA
            server operators
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function HomePage({ github }: { github: GithubStats }) {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero github={github} />
      <Story />
      <Features />
      <Quickstart />
      <MultiInstance />
      <Security />
      <Faq />
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4 text-center"
          >
            <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              Bereit für saubere ASA-Operations?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Lade den ARK Ascended Server Manager oder teile Wünsche auf
              GitHub.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: 'cta-download',
                title: 'Download',
                description:
                  'Neueste Windows-Version aus den GitHub Releases.',
                href: DOWNLOAD_LATEST_URL,
                testId: 'button-cta-download',
                icon: <Download className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-repo',
                title: 'GitHub Repo',
                description:
                  'Source, Roadmap und kommende Verbesserungen.',
                href: REPO_URL,
                testId: 'button-cta-repo',
                icon: <Github className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-issue',
                title: 'Issue / Feature',
                description: 'Feedback teilen oder neue Funktionen vorschlagen.',
                href: ISSUE_URL,
                testId: 'button-cta-issue',
                icon: <LifeBuoy className="text-primary h-8 w-8" />,
              },
            ].map((cta, idx) => (
              <motion.div
                key={cta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-card flex h-full flex-col items-center gap-4 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
                  {cta.icon}
                </div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  {cta.title}
                </h3>
                <p className="text-muted-foreground flex-1">
                  {cta.description}
                </p>
                <a href={cta.href} target="_blank" rel="noreferrer">
                  <button
                    data-testid={cta.testId}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer rounded-full px-6 py-2 text-sm font-bold shadow-md transition-colors"
                  >
                    Get Started
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
