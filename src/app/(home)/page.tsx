import type { Metadata } from "next";
import { PyroButton } from "@/components/ui/PyroButton";
import GitHubStats from "@/components/ui/GitHubStats";
import CopyCommandButton from "@/components/ui/CopyCommandButton";
import ScrollEffects from "@/components/app/ScrollEffects";
import {
  ArrowDownTrayIcon,
  BoltIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CommandLineIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.yunexal.com"),
  title: "Yunexal Panel",
  description:
    "Yunexal Panel is a compact self-hosted Rust control panel for Docker containers with live console, files, ports, users, and admin tooling.",
  openGraph: {
    title: "Yunexal Panel",
    description:
      "A lightweight Docker server panel built with Rust, Axum, HTMX, SQLite, and Bollard.",
  },
};

const installCommand = [
  "wget https://github.com/nestorchurin/yunexal-panel/releases/latest/download/yunexal-panel-linux-x86_64.tar.gz",
  "tar -xzf yunexal-panel-linux-x86_64.tar.gz",
  "cd yunex-release",
  "sudo ./yunexal-setup",
  "./yunexal-panel",
].join("\n");

const pillars = [
  ["Install", "Download, run setup, open the panel."],
  ["Create", "Create Docker containers from images or Dockerfiles."],
  ["Operate", "Use console, files, ports and owners."],
];

const capabilities = [
  {
    title: "Container lifecycle",
    body: "Start, stop, restart, rename and delete Docker containers.",
    icon: <ServerStackIcon className="h-5 w-5" />,
  },
  {
    title: "Live console",
    body: "Stream logs and send commands through a browser console.",
    icon: <CommandLineIcon className="h-5 w-5" />,
  },
  {
    title: "File operations",
    body: "Browse volumes, edit configs, upload builds and clean up files.",
    icon: <FolderIcon className="h-5 w-5" />,
  },
  {
    title: "Ports and limits",
    body: "Inspect bindings, label ports and apply bandwidth limits.",
    icon: <GlobeAltIcon className="h-5 w-5" />,
  },
  {
    title: "Users and ownership",
    body: "Create users, assign owners and separate admin controls.",
    icon: <UserGroupIcon className="h-5 w-5" />,
  },
  {
    title: "Private sessions",
    body: "Argon2 passwords and signed cookies keep sessions private.",
    icon: <ShieldCheckIcon className="h-5 w-5" />,
  },
];

const stack = [
  ["Runtime", "Rust, Axum, Tokio"],
  ["Interface", "HTMX, Askama templates"],
  ["Storage", "SQLite"],
  ["Docker layer", "Bollard SDK"],
  ["Console", "WebSocket stream"],
  ["Assets", "Embedded in the binary"],
];

const comparison = [
  {
    topic: "Shape",
    yunexal: "One compact panel talks directly to Docker.",
    pterodactyl: "Bigger hosting stacks split work across panel and daemon services.",
  },
  {
    topic: "Setup",
    yunexal: "Release archive, .env, SQLite, Docker access.",
    pterodactyl: "More services, more config, more infrastructure decisions.",
  },
  {
    topic: "Best for",
    yunexal: "Small operators who want Docker-native control.",
    pterodactyl: "Hosts that need nodes, plugins and a large ecosystem.",
  },
  {
    topic: "Tradeoff",
    yunexal: "Smaller surface, easier to understand.",
    pterodactyl: "More scale patterns, more moving parts.",
  },
];

const repoMap = [
  ["src/main.rs", "Routes and app startup."],
  ["src/docker/", "Docker lifecycle, stats, files, images, networking and quotas."],
  ["src/handlers/ws.rs", "Browser console stream."],
  ["templates / static", "Embedded UI assets."],
];

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-light">
    {children}
  </p>
);

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07070d] text-white">
      <ScrollEffects />
      <section className="relative">
        <div className="yun-brand-field absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,13,0)_0%,#07070d_94%)]" />

        <div className="relative container mx-auto px-6 pb-18 pt-28 md:pb-24 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="yun-reveal">
              <div className="mb-8 flex items-center">
                <GitHubStats />
              </div>

              <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-[clamp(3.25rem,8.2vw,7.2rem)] font-extrabold leading-[0.96] tracking-normal">
                Run Docker servers without the bloat.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d0d0e4] md:text-xl">
                A self-hosted Rust panel for creating containers, opening the console, editing files and managing ports.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PyroButton
                  variant="primary"
                  size="large"
                  href="/docs/yunexal"
                  isArrow
                  className="min-h-14 shadow-[0_22px_60px_rgba(124,58,237,0.32)] transition hover:-translate-y-0.5 active:translate-y-0"
                >
                  <BookOpenIcon className="h-5 w-5" /> Read docs
                </PyroButton>
                <PyroButton
                  variant="quaternary"
                  size="large"
                  href="https://github.com/nestorchurin/yunexal-panel"
                  external
                  className="min-h-14 transition hover:-translate-y-0.5 active:translate-y-0"
                >
                  <GitHubIcon /> Source code
                </PyroButton>
              </div>
            </div>

            <div className="yun-reveal relative pt-2 lg:pl-10 lg:pt-4 [animation-delay:120ms]">
              <div className="absolute left-0 top-4 hidden h-[82%] w-px bg-gradient-to-b from-brand/0 via-brand/35 to-brand/0 lg:block" />
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
                Product flow
              </p>
              <div className="space-y-6">
                {pillars.map(([title, body], index) => (
                  <div key={title} className="group grid grid-cols-[52px_1fr] gap-5">
                    <div className="font-mono text-sm text-brand-light transition-transform duration-300 group-hover:translate-x-1">0{index + 1}</div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
                      <p className="mt-2 max-w-md text-sm leading-6 text-[#9f9fbd]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {["Linux x86_64", "Docker Engine 24+", "SQLite", "Argon2 sessions"].map((item) => (
                  <span key={item} className="rounded-full bg-white/[0.055] px-4 py-2 text-white/70 transition hover:bg-brand/15 hover:text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="yun-scroll-section relative overflow-hidden bg-[linear-gradient(180deg,#07070d,#0a0a13_52%,#080811)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(0deg,rgba(124,58,237,0.12),rgba(124,58,237,0.045)_38%,rgba(7,7,13,0)_82%)]" />
        <div className="yun-drift-line pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(860px,calc(100%-3rem))] -translate-x-1/2" />
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="yun-scroll-reveal">
              <SectionLabel>What it does</SectionLabel>
              <h2 className="max-w-lg font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,4rem)] font-extrabold leading-[1.03] tracking-normal">
                The daily controls are the whole point.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#b7b7d0]">
                Start, inspect, edit, limit, assign, recover. The UI follows the work.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item.title} className="yun-scroll-reveal group">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-brand-light transition-transform duration-300 group-hover:-translate-y-0.5">
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-[15px] leading-7 text-[#b0b0ca]">{item.body}</p>
                  <div className="mt-4 h-px w-10 bg-brand/40 transition-all duration-500 group-hover:w-24 group-hover:bg-brand-light" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="yun-scroll-section relative overflow-hidden bg-[linear-gradient(180deg,#080811_0%,#07070d_18%,#07070d_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(124,58,237,0.105),rgba(124,58,237,0.03)_42%,rgba(7,7,13,0)_80%)]" />
        {/* <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-brand/35 via-brand/10 to-transparent" /> */}
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="yun-scroll-reveal">
              <SectionLabel>Build and run</SectionLabel>
              <h2 className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,3.9rem)] font-extrabold leading-[1.04] tracking-normal">
                Download, run setup, open the panel.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#b7b7d0]">
                First run creates the SQLite database and server directories. Keep `COOKIE_SECRET` stable to preserve sessions.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
                {stack.map(([label, value]) => (
                  <div key={label} className="yun-scroll-reveal">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/35">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-white/85">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="yun-scroll-reveal relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d15] shadow-[0_16px_42px_rgba(0,0,0,0.22),0_0_0_1px_rgba(167,139,250,0.025)] transition duration-500 hover:border-brand/20 hover:bg-[#10101a] hover:shadow-[0_18px_48px_rgba(0,0,0,0.24),0_0_56px_rgba(124,58,237,0.08)]">
              <div className="yun-sheen pointer-events-none absolute inset-0" />
              <div className="relative flex items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3">
                  <ArrowDownTrayIcon className="h-5 w-5 text-brand-light" />
                  <span className="font-semibold text-white">Install commands</span>
                </div>
                <CopyCommandButton value={installCommand} />
              </div>
              <pre className="relative overflow-x-auto px-5 pb-5 pt-2 text-sm leading-7 text-[#d8d8ef]">
                <code>{installCommand.split("\n").map((line) => `$ ${line}`).join("\n")}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="yun-scroll-section bg-[#090911]">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="yun-scroll-reveal mb-12 max-w-3xl">
            <SectionLabel>Fit check</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,3.9rem)] font-extrabold leading-[1.04] tracking-normal">
              Smaller by choice, not by accident.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#b7b7d0]">
              Yunexal is for smaller Docker-first operators who want direct control and fewer moving parts.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {comparison.map((row) => (
              <div key={row.topic} className="yun-scroll-reveal group rounded-3xl bg-white/[0.035] p-6 transition duration-300 hover:bg-white/[0.055]">
                <h3 className="mb-5 text-lg font-semibold text-white">{row.topic}</h3>
                <div className="mb-5">
                  <p className="mb-2 text-sm font-semibold text-brand-light">Yunexal Panel</p>
                  <p className="text-sm leading-6 text-[#d8d8ef]">{row.yunexal}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-white/65">Larger ecosystem</p>
                  <p className="text-sm leading-6 text-[#9f9fbd]">{row.pterodactyl}</p>
                </div>
                <div className="mt-5 h-px w-12 bg-brand/40 transition-all duration-500 group-hover:w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="yun-scroll-section bg-[linear-gradient(180deg,#090911,#07070d)]">
        <div className="container mx-auto px-6 py-16 md:py-22">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="yun-scroll-reveal">
              <SectionLabel>Repository shape</SectionLabel>
              <h2 className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,3.9rem)] font-extrabold leading-[1.04] tracking-normal">
                Readable internals are part of the experience.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#b7b7d0]">
                The code is organized around product actions: route, authenticate, talk to Docker, stream console output and render the UI.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PyroButton variant="quaternary" href="https://github.com/nestorchurin/yunexal-panel" external>
                  <GitHubIcon /> GitHub repository
                </PyroButton>
                <PyroButton variant="quaternary" href="https://github.com/nestorchurin/yunexal-panel/blob/main/README.md" external>
                  <CodeBracketIcon className="h-5 w-5" /> README
                </PyroButton>
              </div>
            </div>

            <div className="space-y-5 lg:pt-8">
              {repoMap.map(([path, body]) => (
                <div key={path} className="yun-scroll-reveal grid gap-2 rounded-2xl bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.05] sm:grid-cols-[0.45fr_1fr]">
                  <p className="font-mono text-sm text-brand-light">{path}</p>
                  <p className="text-sm leading-6 text-[#a7a7c6]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="yun-scroll-section relative overflow-hidden bg-[#090911]">
        <div className="yun-brand-field absolute inset-0 opacity-60" />
        <div className="relative container mx-auto px-6 py-16 md:py-22">
          <div className="yun-scroll-reveal mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-brand/15 text-brand-light shadow-[0_0_55px_rgba(124,58,237,0.2)]">
              <BoltIcon className="h-6 w-6" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,4rem)] font-extrabold leading-[1.04] tracking-normal">
              Ship the panel, then run the servers.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#b7b7d0]">
              Start with the docs, then install the release when you are ready.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <PyroButton variant="primary" size="large" href="/docs/yunexal" isArrow>
                <BookOpenIcon className="h-5 w-5" /> Start with docs
              </PyroButton>
              <PyroButton variant="quaternary" size="large" href="https://github.com/nestorchurin/yunexal-panel/releases" external>
                <ArrowDownTrayIcon className="h-5 w-5" /> Releases
              </PyroButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#07070d]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <span className="text-sm text-white/40">© {new Date().getFullYear()} Yunexal.</span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="/docs/yunexal"
              aria-label="Open documentation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/45 transition hover:bg-white/[0.06] hover:text-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070d]"
            >
              <BookOpenIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/nestorchurin/yunexal-panel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub repository"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/45 transition hover:bg-white/[0.06] hover:text-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070d]"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
