import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoBand, SectionLabel, SiteShell } from "../components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Viranetra | Cyber Decision Intelligence" },
    { name: "description", content: "Viranetra transforms enterprise telemetry into verified cyber investigations, explainable recommendations, and response actions." },
    { property: "og:title", content: "Viranetra | Cyber Decision Intelligence" },
    { property: "og:description", content: "See threats before they strike with explainable cyber decision intelligence." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});

const workflow = [
  ["01", "Ingest & correlate", "Enterprise telemetry is continuously unified and correlated against known and emerging patterns."],
  ["02", "Verify the investigation", "Alerts become evidence-backed investigations rather than another notification in the queue."],
  ["03", "Recommend, explainably", "Ranked recommendations arrive with the reasoning security leaders need to review the decision."],
  ["04", "Act & harden", "Response actions close the loop while preserving a clear record for operational review."],
];

function Home() {
  return <SiteShell>
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_-10%,color-mix(in_oklab,var(--signal)_14%,transparent),transparent_55%)]" />
      <div className="scanline animate-scan" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-14 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-mute animate-rise"><span className="size-1.5 rounded-full bg-signal animate-signal-pulse" /><span>AI-POWERED CYBER DECISION INTELLIGENCE</span><span className="text-cool/20">/</span><span>LIVE</span></div>
            <h1 className="max-w-[12ch] font-display text-[46px] font-semibold leading-[1.02] tracking-normal text-cool animate-rise [animation-delay:100ms] sm:text-[64px] lg:text-[78px]">We see threats before they strike.</h1>
            <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-mute animate-rise [animation-delay:200ms] sm:text-lg">Viranetra transforms security data into trusted decisions—verified investigations, explainable recommendations, and response actions before analysts open a ticket.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5 animate-rise [animation-delay:300ms]"><Link to="/contact" className="bg-signal px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-ink hover:bg-signal-soft">REQUEST DEMO →</Link><Link to="/platform" className="font-mono text-[11px] tracking-[0.14em] text-mute hover:text-cool">EXPLORE PLATFORM</Link></div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[10px] tracking-[0.16em] text-mute"><span>24/7 MONITORING</span><span>AI DETECTION</span><span>REAL-TIME PROTECTION</span><span>GLOBAL INTEL</span></div>
          </div>
          <div className="lg:col-span-5 animate-rise [animation-delay:250ms]">
            <div className="relative overflow-hidden border border-cool/10 bg-ink-2/70 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em]"><span className="text-mute">THREAT BOARD</span><span className="flex items-center gap-2 text-signal-soft"><span className="size-1.5 rounded-full bg-signal animate-signal-pulse" />ACTIVE</span></div>
              <div className="mt-6 flex items-end gap-3"><span className="font-display text-5xl font-semibold">03</span><span className="mb-1.5 font-mono text-[11px] tracking-[0.14em] text-mute">SIGNAL CLASSES</span></div>
              <div className="mt-6 space-y-3">{[["MALWARE", "DETECTED"], ["PHISHING", "CORRELATED"], ["RANSOMWARE", "MONITORED"]].map(([a,b]) => <div key={a} className="flex justify-between border-b border-cool/10 pb-3 font-mono text-[11px] tracking-[0.12em]"><span className="text-mute">{a}</span><span className="text-signal-soft">{b}</span></div>)}</div>
              <div className="mt-8 h-24 border-l border-b border-cool/10 p-2"><div className="flex h-full items-end gap-2">{[32,55,41,68,51,76,64,92].map((h,i)=><span key={i} className="flex-1 bg-signal/70" style={{height:`${h}%`}} />)}</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-12"><div className="grid grid-cols-2 border-y border-cool/10 md:grid-cols-4">{[["2.4M+","THREATS ANALYZED"],["195","COUNTRIES COVERED"],["87%","FASTER INVESTIGATION"],["24/7","MONITORING"]].map(([v,l])=><div key={l} className="border-r border-cool/10 px-2 py-6 last:border-r-0 lg:px-8"><div className="font-display text-3xl font-semibold sm:text-4xl">{v}</div><div className="mt-2 font-mono text-[9px] tracking-[0.14em] text-mute sm:text-[10px]">{l}</div></div>)}</div></div>
    </section>
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-12 lg:py-24"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionLabel>(A) PLATFORM</SectionLabel><h2 className="mt-4 font-display text-3xl font-semibold tracking-normal lg:text-4xl">From raw signal to a decision you can defend.</h2><p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-mute">A continuous, explainable loop from detection to response—with evidence attached at every stage.</p></div><ol className="relative lg:col-span-8">{workflow.map(([n,t,d])=><li key={n} className="flex gap-6 border-b border-cool/10 py-7"><span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full border border-signal bg-ink"><span className="size-1.5 rounded-full bg-signal" /></span><div><div className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-mute">{n}</span><h3 className="font-display text-lg font-semibold tracking-normal">{t}</h3></div><p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-mute">{d}</p></div></li>)}</ol></div></section>
    <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-12 lg:pb-24"><div className="border border-cool/10 bg-ink-2/70 p-6 lg:p-10"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><SectionLabel>(B) SECTORS</SectionLabel><h2 className="mt-4 font-display text-3xl font-semibold tracking-normal lg:text-4xl">Built for the desk where the call is made.</h2></div><Link to="/industries" className="font-mono text-[11px] tracking-[0.14em] text-mute hover:text-cool">ALL INDUSTRIES →</Link></div><div className="mt-8 grid grid-cols-2 gap-px bg-cool/10 sm:grid-cols-3 lg:grid-cols-6">{["Critical Infrastructure","BFSI","Healthcare","Government","Enterprises","MSSPs"].map((x,i)=><div key={x} className="bg-ink p-5"><div className="font-mono text-[9px] text-mute">0{i+1}</div><div className="mt-3 font-display text-sm font-semibold tracking-normal">{x}</div></div>)}</div></div></section>
    <DemoBand />
  </SiteShell>;
}