import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navigation = [
  ["HOME", "/"],
  ["PLATFORM", "/platform"],
  ["CAPABILITIES", "/capabilities"],
  ["INDUSTRIES", "/industries"],
  ["ABOUT", "/about"],
] as const;

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Viranetra home">
      <span className="grid size-6 place-items-center bg-signal font-mono text-[11px] font-medium text-ink">V</span>
      <span className="font-display text-sm font-semibold tracking-[0.24em]">VIRANETRA</span>
      <span className="ml-1 hidden font-mono text-[9px] tracking-[0.2em] text-mute sm:inline">DECISION INTELLIGENCE</span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-ink font-body text-cool antialiased selection:bg-signal/30 selection:text-cool">
      <header className="sticky top-0 z-50 border-b border-cool/10 bg-ink/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 lg:px-12">
          <Brand />
          <nav className="hidden items-center gap-7 font-mono text-[11px] tracking-[0.14em] text-mute md:flex" aria-label="Main navigation">
            {navigation.map(([label, to]) => (
              <Link key={to} to={to} className={pathname === to ? "text-cool" : "transition-colors hover:text-cool"}>{label}</Link>
            ))}
          </nav>
          <Link to="/contact" className="bg-signal px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-ink ring-1 ring-cool/10 transition-colors hover:bg-signal-soft sm:px-4 sm:text-[11px]">REQUEST DEMO</Link>
        </div>
        <details className="border-t border-cool/10 md:hidden">
          <summary className="cursor-pointer list-none px-5 py-2 font-mono text-[10px] tracking-[0.18em] text-mute">NAVIGATION +</summary>
          <nav className="grid grid-cols-2 gap-px bg-cool/10" aria-label="Mobile navigation">
            {navigation.map(([label, to]) => <Link key={to} to={to} className="bg-ink px-5 py-4 font-mono text-[10px] tracking-[0.14em] text-mute">{label}</Link>)}
             <Link to="/contact" className="bg-ink px-5 py-4 font-mono text-[10px] tracking-[0.14em] text-signal-soft">CONTACT</Link>
          </nav>
        </details>
      </header>
      <main>{children}</main>
      <footer className="border-t border-cool/10">
        <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
             <div><Brand /><p className="mt-3 max-w-[36ch] text-xs leading-relaxed text-mute">Agentic AI-Powered Cyber Decision Intelligence Platform.</p><p className="mt-3 font-mono text-[10px] text-mute">HITH Technologies Pvt. Ltd.</p></div>
            <nav className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono text-[10px] tracking-[0.12em] text-mute sm:grid-cols-3">
              {navigation.map(([label, to]) => <Link key={to} to={to} className="hover:text-cool">{label}</Link>)}
              <Link to="/contact" className="text-signal-soft hover:text-signal">CONTACT</Link>
            </nav>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-cool/10 pt-5 font-mono text-[10px] tracking-[0.14em] text-mute/60 sm:flex-row sm:justify-between"><span>© 2026 VIRANETRA</span><span>CYBER DECISION INTELLIGENCE</span></div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ code, title, body }: { code: string; title: string; body: string }) {
  return (
    <section className="relative overflow-hidden border-b border-cool/10 signal-grid">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_90%_0%,color-mix(in_oklab,var(--signal)_14%,transparent),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:py-24 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.2em] text-signal-soft">{code}</div>
        <h1 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-[1.03] tracking-normal text-cool sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-mute sm:text-lg">{body}</p>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="font-mono text-[10px] tracking-[0.2em] text-signal-soft">{children}</div>;
}

export function DemoBand() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-12 lg:pb-28">
      <div className="relative overflow-hidden border border-cool/10 bg-ink-2/70 p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_100%_0%,color-mix(in_oklab,var(--signal)_16%,transparent),transparent_55%)]" />
         <div className="relative max-w-[42rem]"><SectionLabel>(D) START A CONVERSATION</SectionLabel><h2 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-5xl">Turn investigation into trusted decisions.</h2><p className="mt-4 max-w-[52ch] leading-relaxed text-mute">Explore a pilot deployment, see the platform in action, or partner with Viranetra.</p><div className="mt-8 flex flex-wrap items-center gap-6"><Link to="/contact" className="inline-flex bg-signal px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink hover:bg-signal-soft">REQUEST A DEMO →</Link><Link to="/contact" hash="partner" className="font-mono text-[11px] tracking-[0.14em] text-signal-soft hover:text-cool">BECOME A PARTNER →</Link></div></div>
      </div>
    </section>
  );
}