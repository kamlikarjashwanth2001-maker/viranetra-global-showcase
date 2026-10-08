import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoBand, SectionLabel, SiteShell } from "../components/site-shell";
import securityOperations from "../assets/security-operations.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Viranetra | Agentic AI Cyber Decision Intelligence" },
    { name: "description", content: "Viranetra transforms cybersecurity into trusted decisions with Agentic AI investigations, governance, human validation, and explainable intelligence." },
    { property: "og:title", content: "Viranetra | Agentic AI Cyber Decision Intelligence" },
    { property: "og:description", content: "Cybersecurity beyond detection. Decide with confidence." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Home,
});

const journey = ["Security Tools", "Validated Critical Alerts", "Adaptive Investigation", "Evidence Correlation", "Governance & Compliance", "Human Validation", "Decision Intelligence Dashboard", "Business Decision"];
const steps = [
  ["01", "Integrate", "Connect to the security tools you already use."],
  ["02", "Investigate", "Adaptive AI examines validated critical alerts."],
  ["03", "Correlate", "Evidence meets business, governance, and compliance context."],
  ["04", "Validate", "Human experts review and refine findings."],
  ["05", "Decide", "Deliver trusted, explainable decision intelligence."],
];
const benefits = ["Works with your existing security stack", "Explainable, governance-driven AI", "Human-centric decision making", "Enterprise and white-label ready", "API-first, zero-disruption deployment"];

function Home() {
  return <SiteShell>
    <section className="relative overflow-hidden signal-grid">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_-10%,color-mix(in_oklab,var(--signal)_14%,transparent),transparent_55%)]" />
      <div className="scanline animate-scan" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-14 lg:px-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-signal-soft animate-rise"><span className="size-1.5 rounded-full bg-signal animate-signal-pulse" /> AGENTIC AI-POWERED CYBER DECISION INTELLIGENCE</div>
            <h1 className="max-w-[13ch] font-display text-[42px] font-semibold leading-[1.05] tracking-normal text-cool animate-rise [animation-delay:100ms] sm:text-[64px] lg:text-[76px]">Cybersecurity beyond detection.<span className="block text-signal-soft">Decide with confidence.</span></h1>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute animate-rise [animation-delay:200ms] sm:text-lg">Viranetra is an Agentic AI platform that sits on top of your existing security stack, turning validated investigations into decisions your team can trust and act on.</p>
            <div className="mt-9 flex flex-wrap items-center gap-6 animate-rise [animation-delay:300ms]"><Link to="/contact" className="bg-signal px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink hover:bg-signal-soft">REQUEST A DEMO →</Link><Link to="/contact" hash="partner" className="font-mono text-[11px] tracking-[0.14em] text-signal-soft hover:text-cool">BECOME A PARTNER →</Link></div>
          </div>
          <div className="lg:col-span-5 animate-rise [animation-delay:250ms]">
            <div className="border border-cool/10 bg-ink-2/80 p-5 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-cool/10 pb-4 font-mono text-[10px] tracking-[0.16em]"><span className="text-mute">DECISION DOSSIER</span><span className="text-signal-soft">VIRANETRA / 01</span></div>
              <div className="py-7"><span className="font-mono text-[10px] tracking-[0.16em] text-signal-soft">FROM SIGNAL TO ACTION</span><div className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">One governed path.<br />A decision you can defend.</div></div>
              <div className="space-y-0 border-t border-cool/10">{[["01", "INVESTIGATION", "Adaptive AI"], ["02", "CONTEXT", "Evidence + policy"], ["03", "VALIDATION", "Human-in-the-loop"], ["04", "OUTCOME", "Trusted decision"]].map(([n, title, value]) => <div key={n} className="grid grid-cols-[2rem_1fr_auto] items-center gap-2 border-b border-cool/10 py-4 font-mono text-[10px] sm:gap-4"><span className="text-signal-soft">{n}</span><span className="tracking-[0.1em] text-mute">{title}</span><span className="text-right text-cool">{value}</span></div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <figure className="m-0 border-y border-cool/10"><img src={securityOperations} alt="Cybersecurity analysts reviewing network intelligence in an illustrative security operations centre" width={1536} height={768} loading="lazy" className="block aspect-[2/1] w-full object-cover sm:aspect-[3/1]" /></figure>
    <section className="border-y border-cool/10 bg-ink-2/60"><div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-12"><SectionLabel>(A) THE JOURNEY</SectionLabel><h2 className="mt-4 max-w-[35ch] font-display text-2xl font-semibold leading-tight sm:text-3xl">Every alert follows one governed path — from raw signal to a decision leaders can stand behind.</h2><ol className="mt-8 grid gap-px bg-cool/10 sm:grid-cols-2 lg:grid-cols-4">{journey.map((label, i) => <li key={label} className="min-h-28 bg-ink-2 p-5"><span className="font-mono text-[10px] text-signal-soft">0{i + 1} / 08</span><div className="mt-4 font-display text-sm font-semibold sm:text-base">{label}</div></li>)}</ol></div></section>
    <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-12 lg:px-12 lg:py-24"><div className="lg:col-span-4"><SectionLabel>(B) WHY VIRANETRA</SectionLabel><h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">Your tools tell you what happened.<span className="block text-signal-soft">We tell you what to do next.</span></h2></div><div className="lg:col-span-8"><p className="max-w-[57ch] text-lg leading-relaxed text-mute">And why it can be trusted. Why does it matter? What’s the business impact? Which policy applies? What’s the right response? These are the questions that turn alerts into action.</p><div className="mt-10 grid gap-8 border-t border-cool/10 pt-8 sm:grid-cols-2"><div><SectionLabel>THE PROBLEM</SectionLabel><p className="mt-4 text-sm leading-relaxed text-mute">Security teams aren’t short on tools. They’re short on time, context, and confidence. Alert fatigue, false positives, manual investigations, fragmented data, and compliance pressure slow every decision down.</p></div><div><SectionLabel>THE PLATFORM</SectionLabel><p className="mt-4 text-sm leading-relaxed text-mute">Viranetra doesn’t replace your security stack. It sits above it — correlating evidence, applying governance, and producing decisions your team can act on immediately, without adding another tool to manage.</p></div></div></div></section>
    <section className="border-y border-cool/10 bg-ink-2"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-12 lg:py-24"><SectionLabel>(C) HOW IT WORKS</SectionLabel><div className="mt-8 grid gap-px bg-cool/10 sm:grid-cols-2 lg:grid-cols-5">{steps.map(([n, title, body]) => <div key={n} className="min-h-52 bg-ink-2 p-6"><span className="font-mono text-xs text-signal-soft">{n}</span><h3 className="mt-9 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{body}</p></div>)}</div></div></section>
    <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-12 lg:px-12 lg:py-24"><div className="lg:col-span-5"><SectionLabel>(D) WHY CUSTOMERS CHOOSE VIRANETRA</SectionLabel><h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Built for decisions, not more dashboards.</h2></div><ul className="lg:col-span-7">{benefits.map((item, i) => <li key={item} className="flex gap-5 border-b border-cool/10 py-4"><span className="font-mono text-xs text-signal-soft">0{i + 1}</span><span className="font-display text-base font-semibold">{item}</span></li>)}</ul></section>
    <DemoBand />
  </SiteShell>;
}
