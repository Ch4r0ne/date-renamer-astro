import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Menu,
  X,
  Github,
  ShieldCheck,
  Layers,
  Zap,
  Server,
  RotateCcw,
  Info,
  Video,
  Image,
  Archive,
  LayoutDashboard,
  BookOpen,
  LifeBuoy,
} from 'lucide-react';
import { useState, useEffect, type ReactNode } from 'react';

const DOWNLOAD_LATEST_URL =
  'https://github.com/Ch4r0ne/date-renamer/releases/latest';
const RELEASES_URL = 'https://github.com/Ch4r0ne/date-renamer/releases';
const REPO_URL = 'https://github.com/Ch4r0ne/date-renamer';
const ISSUE_URL = 'https://github.com/Ch4r0ne/date-renamer/issues';
const CHANGELOG_URL =
  'https://github.com/Ch4r0ne/date-renamer/compare/v5.0...v6.0';
const LICENSE_URL =
  'https://github.com/Ch4r0ne/date-renamer/blob/main/LICENSE';
const DOCS_URL = 'https://github.com/Ch4r0ne/date-renamer#readme';
const PUBLISHER_URL = 'https://github.com/Ch4r0ne';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'story',
        'problem',
        'how-it-works',
        'features',
        'use-cases',
        'download',
        'open-source',
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
    { href: '#problem', label: 'Problem', id: 'problem' },
    { href: '#how-it-works', label: 'How it works', id: 'how-it-works' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#use-cases', label: 'Use cases', id: 'use-cases' },
    { href: '#download', label: 'Download', id: 'download' },
  ];

  return (
    <nav className="bg-background/80 border-border/40 relative sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
      <a
        href="/"
        className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <img
          src="/images/favicon.png"
          alt="Date Renamer Toolkit Icon"
          className="h-8 w-8"
        />
        <span className="font-heading text-foreground text-2xl font-bold">
          Date Renamer Toolkit
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

const Hero = () => {
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
            Deterministic media renaming for professional archives
          </span>
          <h1 className="font-heading text-foreground mb-6 text-5xl leading-[1.1] font-bold md:text-7xl">
            Rename media with the{' '}
            <span className="text-primary relative inline-block">
              timestamp you can trust
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
            Date Renamer Toolkit aligns photos and videos to the most reliable
            capture time, with clear source diagnostics and a live rename
            preview. It is built for media libraries, professional editing
            workflows, and long term archive stability.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href={DOWNLOAD_LATEST_URL} target="_blank" rel="noreferrer">
              <button className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-6 py-3 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <Download className="h-5 w-5" />
                Download Latest Release
              </button>
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              <button className="font-heading border-border text-foreground hover:border-primary flex items-center gap-2 rounded-full border px-6 py-3 font-bold shadow-sm transition-all hover:scale-105">
                <BookOpen className="h-5 w-5" />
                View Documentation
              </button>
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              <button className="font-heading border-border text-foreground hover:border-primary flex items-center gap-2 rounded-full border px-6 py-3 font-bold shadow-sm transition-all hover:scale-105">
                <Github className="h-5 w-5" />
                GitHub Repository
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
                label: 'Windows · macOS',
                color: 'text-green-600',
              },
              {
                icon: Zap,
                label: 'ExifTool first',
                color: 'text-blue-600',
              },
              {
                icon: RotateCcw,
                label: 'Undo (last session)',
                color: 'text-purple-600',
              },
              {
                icon: Layers,
                label: 'Parallel scan',
                color: 'text-orange-600',
              },
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
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
            src="/images/date-renamer.png"
            alt="Date Renamer Toolkit UI preview"
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
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Audit-ready operations</p>
              <p className="text-muted-foreground text-xs">
                Deterministic logs, verifiable rename trails, and controlled access.
              </p>
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
              <Info size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Enterprise-grade delivery</p>
              <p className="text-muted-foreground text-xs">
                Controlled release notes, verified binaries, and documented change logs.
              </p>
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
            Built for deterministic archives
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Features that explain every rename decision
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Every file shows exactly where its timestamp comes from, so every
            rename is auditable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Live Preview"
            desc="Review old and new filenames with diagnostics before any change is applied."
            icon={<LayoutDashboard className="text-primary h-8 w-8" />}
            delay={0.1}
            testId="card-feature-preview"
          />
          <FeatureCard
            title="ExifTool first"
            desc="Batch scanning uses ExifTool priority with transparent sources."
            icon={<Zap className="text-primary h-8 w-8" />}
            delay={0.2}
            testId="card-feature-exiftool"
          />
          <FeatureCard
            title="Deep Mode"
            desc="Filename patterns, XMP, and Google Takeout JSON sidecars included."
            icon={<Layers className="text-primary h-8 w-8" />}
            delay={0.3}
            testId="card-feature-deep-mode"
          />
          <FeatureCard
            title="Safe rename"
            desc="Collision safe naming so every rename remains predictable."
            icon={<ShieldCheck className="text-primary h-8 w-8" />}
            delay={0.4}
            testId="card-feature-safe"
          />
          <FeatureCard
            title="Parallel scan"
            desc="Designed for large folders and NAS archives without UI stalls."
            icon={<Server className="text-primary h-8 w-8" />}
            delay={0.5}
            testId="card-feature-parallel"
          />
          <FeatureCard
            title="Undo last run"
            desc="Undo the last rename session to recover fast when needed."
            icon={<RotateCcw className="text-primary h-8 w-8" />}
            delay={0.6}
            testId="card-feature-undo"
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
          <span className="font-hand text-primary text-xl">Why this exists</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            The renamer I needed for a reliable archive
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Date Renamer Toolkit exists because years of mixed media sources
            made reliable ordering nearly impossible. I needed a Windows app
            that sorted photos and videos by the actual capture time, with no
            guessing and no silent assumptions.
          </p>
          <p className="text-muted-foreground">
            For editing and NAS archiving, I need a repeatable flow: timestamp
            in, filename out, done. No UI stalls, no hidden decisions. Today,
            the toolkit delivers deterministic, fast, and transparent renaming
            with a professional desktop experience.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            {
              title: 'The core problem',
              detail:
                'To edit, archive, or retrieve media later, the results must be trustworthy.',
            },
            {
              title: 'Where other tools failed',
              detail:
                'Videos differ from JPEGs, exports remove metadata, and Takeout needs sidecars.',
            },
            {
              title: 'What this tool delivers',
              detail:
                'Finds the best timestamp, shows the source, resolves collisions, and previews every rename.',
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

const ProblemSolution = () => {
  return (
    <section
      id="problem"
      className="bg-secondary/20 flex items-center justify-center px-6 py-24"
    >
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 text-center">
          <span className="font-hand text-primary text-xl">Problem → Solution</span>
          <h3 className="font-heading text-foreground mt-3 text-3xl font-bold md:text-4xl">
            Enterprise archives demand deterministic evidence
          </h3>
        </div>
        <div className="grid gap-6 rounded-[2rem] bg-white/80 p-8 shadow-lg md:grid-cols-3">
          {[
            {
              title: 'Messaging exports lose traceable metadata',
              detail:
                'Policy-based fallbacks and Deep Mode reconstruction restore accountable timelines.',
              icon: <Image className="text-primary h-6 w-6" />,
            },
            {
              title: 'Video timestamps drift across sources',
              detail:
                'Clear precedence rules align QuickTime, MP4, and MOV to one verified source.',
              icon: <Video className="text-primary h-6 w-6" />,
            },
            {
              title: 'NAS archives require audit-safe stability',
              detail:
                'Collision-safe, deterministic naming keeps every run reproducible.',
              icon: <Archive className="text-primary h-6 w-6" />,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="bg-primary/10 mt-1 rounded-full p-2">
                {item.icon}
              </div>
              <div>
                <p className="text-foreground font-semibold">{item.title}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Scan folder',
      detail: 'Select a folder and batch scan all media files.',
      icon: <Server className="text-primary h-7 w-7" />,
    },
    {
      step: 'Step 2',
      title: 'Resolve timestamp',
      detail: 'Uses ExifTool first with clear source visibility.',
      icon: <Info className="text-primary h-7 w-7" />,
    },
    {
      step: 'Step 3',
      title: 'Preview rename plan',
      detail: 'Live preview shows old and new names with diagnostics.',
      icon: <LayoutDashboard className="text-primary h-7 w-7" />,
    },
    {
      step: 'Step 4',
      title: 'Rename and undo',
      detail: 'Apply deterministic renames and undo the last run.',
      icon: <RotateCcw className="text-primary h-7 w-7" />,
    },
  ];

  const chips = [
    'exiftool:QuickTime:CreateDate',
    'takeout_json',
    'filename:DJI_YYYYMMDD_HHMMSS',
    'fs_created (optional)',
  ];

  return (
    <section id="how-it-works" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">How it works</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            A transparent pipeline from scan to rename
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <span
              key={chip}
              className="bg-secondary/30 border-border/40 text-muted-foreground rounded-full border px-4 py-2 text-xs font-medium"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  return (
    <section id="use-cases" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">Use cases</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Built for workflows that demand accuracy
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Video editing prep',
              detail: 'Rename footage once, then import cleanly into your editor.',
              icon: <Video className="text-primary h-6 w-6" />,
            },
            {
              title: 'NAS archive',
              detail: 'Keep consistent structure across devices and exports.',
              icon: <Archive className="text-primary h-6 w-6" />,
            },
            {
              title: 'Google Takeout',
              detail: 'Sidecars are respected, so exports stay trustworthy.',
              icon: <Info className="text-primary h-6 w-6" />,
            },
            {
              title: 'DJI and action cams',
              detail: 'Filename timestamps are parsed in Deep Mode.',
              icon: <Image className="text-primary h-6 w-6" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card flex items-start gap-4 rounded-[1.5rem] p-6 shadow-md"
            >
              <div className="bg-primary/10 rounded-full p-3">{item.icon}</div>
              <div>
                <h3 className="font-heading text-foreground text-lg font-bold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DownloadSection = () => {
  return (
    <section id="download" className="relative bg-secondary/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">Download</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Get Date Renamer Toolkit
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Release builds ship as native apps. No Python required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { label: 'Windows (.exe)', href: DOWNLOAD_LATEST_URL },
            { label: 'macOS (.app)', href: DOWNLOAD_LATEST_URL },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="bg-card flex flex-col items-center gap-3 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
                <Download className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-heading text-foreground text-2xl font-bold">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                Latest release from GitHub.
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpenSource = () => {
  return (
    <section id="open-source" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">Open Source</span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Contribute patterns, ideas, and feedback
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              id: 'cta-download',
              title: 'Releases',
              description: 'Grab the latest build for your OS.',
              href: RELEASES_URL,
              testId: 'button-cta-download',
              icon: <Download className="text-primary h-8 w-8" />,
            },
            {
              id: 'cta-repo',
              title: 'GitHub Repo',
              description: 'Source code, roadmap, and documentation.',
              href: REPO_URL,
              testId: 'button-cta-repo',
              icon: <Github className="text-primary h-8 w-8" />,
            },
            {
              id: 'cta-issue',
              title: 'Issues & Patterns',
              description: 'Report problems or contribute filename patterns.',
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
                  Learn more
                </button>
              </a>
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
                alt="Date Renamer Toolkit Icon"
                className="h-7 w-7"
              />
              <h3 className="font-heading text-foreground text-lg font-bold">
                Date Renamer Toolkit
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Deterministic media renaming for archives, editors, and NAS
              workflows.
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
                  href={RELEASES_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Releases
                </a>
                <a
                  href={REPO_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href={CHANGELOG_URL}
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Changelog v6.0
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
                Follow for updates and new releases.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={PUBLISHER_URL}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                Ch4r0ne on GitHub
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
            Built with <LifeBuoy className="h-3 w-3 text-red-400" /> for media
            archivists
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function HomePage() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <UseCases />
      <DownloadSection />
      <OpenSource />
      <Footer />
    </div>
  );
}
