type ProductVisualProps = { variant: "investigation" | "agents" };

const agents = [
  ["Vira Cortex", "Orchestration Engine"],
  ["Netra Scan", "Security Visibility Engine"],
  ["Vira Deep", "Adaptive Investigation Engine"],
  ["Vira Judge", "Governance & Policy Intelligence"],
  ["Human-in-the-Loop", "Expert Validation"],
  ["Netra Responder", "Decision Intelligence Engine"],
] as const;

function AgentGlyph({ index, x, y }: { index: number; x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-signal-soft">
    {index === 0 ? <><circle r="16" /><circle r="5" /><path d="M0-23v7M0 16v7M-23 0h7M16 0h7M-11-11l22 22M-11 11l22-22" /></> :
      index === 1 ? <><circle r="18" /><circle r="10" /><path d="M0 0 15-15M-23 0h46M0-23v46" /></> :
      index === 2 ? <><circle cx="-4" cy="-4" r="13" /><path d="m6 6 14 14M-10-4H2M-4-10V2" /></> :
      index === 3 ? <><path d="M0-21 17-14v17C17 14 0 22 0 22S-17 14-17 3v-17Z" /><path d="m-8 0 6 6L9-7" /></> :
      index === 4 ? <><circle cy="-10" r="8" /><path d="M-17 20v-7c0-10 34-10 34 0v7M-10 20h20" /></> :
      <><path d="M-19-17h38v27H4l-12 10V10h-11Z" /><path d="m-9-3 6 6 12-12" /></>}
  </g>;
}

function Diagram({ variant, mobile }: ProductVisualProps & { mobile: boolean }) {
  const isAgents = variant === "agents";
  const width = mobile ? 400 : 1280;
  const height = mobile ? (isAgents ? 830 : 720) : 460;
  const items = isAgents ? agents : [
    ["Vira Deep", "Adaptive Investigation"],
    ["Human-in-the-Loop", "Expert Validation"],
    ["Netra Responder", "Trusted Decision"],
  ];
  const columns = mobile ? 1 : (isAgents ? 3 : 3);
  const boxWidth = mobile ? 344 : 360;
  const boxHeight = isAgents ? 124 : 246;
  const gap = mobile ? 16 : 36;
  const startX = mobile ? 28 : 64;
  const startY = mobile ? 98 : 122;
  return <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={isAgents ? "Viranetra's six specialized agents, from orchestration to trusted decisions" : "Viranetra investigation, human validation, and trusted decision workflow"} className={`w-full ${mobile ? "block sm:hidden" : "hidden sm:block"}`}>
    <title>{isAgents ? "Viranetra AI agent ecosystem" : "Viranetra governed investigation workflow"}</title>
    <path d={`M${startX} 62H${width - startX}`} stroke="currentColor" className="text-cool/15" />
    <text x={startX} y="40" className="fill-current font-mono text-[11px] text-signal-soft">VIRANETRA / {isAgents ? "AGENT ECOSYSTEM" : "DECISION INTELLIGENCE"}</text>
    {!mobile && <text x="1216" y="40" textAnchor="end" className="fill-current font-mono text-[10px] text-mute">{isAgents ? "SPECIALIZED INTELLIGENCE" : "FROM SIGNAL TO ACTION"}</text>}
    {items.map(([name, role], i) => {
      const row = Math.floor(i / columns);
      const x = startX + (i % columns) * (boxWidth + gap);
      const y = startY + row * (boxHeight + gap);
      const glyph = isAgents ? i : [2, 4, 5][i];
      const actualHeight = !isAgents && mobile ? 180 : boxHeight;
      const actualY = !isAgents && mobile ? startY + i * 200 : y;
      return <g key={name}>
        {i > 0 && (mobile ? <path d={`M200 ${actualY - 16}v16`} stroke="currentColor" className="text-signal/70" /> : i % columns > 0 ? <path d={`M${x - gap} ${y + boxHeight / 2}h${gap}`} stroke="currentColor" className="text-signal/70" /> : null)}
        <rect x={x} y={actualY} width={boxWidth} height={actualHeight} rx="4" fill="currentColor" className="text-ink-2" />
        <rect x={x} y={actualY} width={boxWidth} height={actualHeight} rx="4" fill="none" stroke="currentColor" className="text-cool/20" />
        <path d={`M${x} ${actualY + 28}v-24q0-4 4-4h24`} fill="none" stroke="currentColor" strokeWidth="2" className="text-signal" />
        <AgentGlyph index={glyph ?? 0} x={x + 39} y={actualY + 43} />
        <text x={x + boxWidth - 24} y={actualY + 30} textAnchor="end" className="fill-current font-mono text-[10px] text-mute">0{i + 1}</text>
        <text x={x + (isAgents ? 78 : 24)} y={actualY + (isAgents ? 49 : 98)} className="fill-current font-display text-[17px] font-semibold text-cool">{name}</text>
        <text x={x + 24} y={actualY + (isAgents ? 96 : 125)} className="fill-current font-body text-[12px] text-mute">{role}</text>
        {!isAgents && <g transform={`translate(${x + 24} ${actualY + (mobile ? 146 : 159)})`}>
          <path d={`M0 0H${boxWidth - 48}`} stroke="currentColor" className="text-cool/15" />
          {i === 0 ? <g fill="none" stroke="currentColor" className="text-signal-soft" strokeWidth="2"><path d="M0 16h20l8 12 12-21 14 24 14-15h20" /><path d="M108 16h140M108 28h91" strokeWidth="1" className="text-mute/40" /></g> :
            i === 1 ? <g fill="none" stroke="currentColor" className="text-signal-soft"><circle cx="12" cy="23" r="9" /><path d="m8 23 3 3 6-7M36 18h120M36 28h84" /></g> :
            <g fill="none" stroke="currentColor" className="text-signal-soft"><path d="M0 12h24v23H0Z M5 21l5 5 9-10M40 18h168M40 28h120" /></g>}
          {!mobile && <text y="63" className="fill-current font-mono text-[9px] text-mute">{["EVIDENCE CORRELATION", "HUMAN-IN-THE-LOOP", "GOVERNANCE-AWARE INTELLIGENCE"][i]}</text>}
        </g>}
      </g>;
    })}
  </svg>;
}

export function ProductVisual({ variant }: ProductVisualProps) {
  return <figure className="m-0 border-y border-cool/10 bg-ink" aria-label="Viranetra platform illustration">
    <div className="mx-auto max-w-[1440px] sm:px-5 lg:px-12">
      <Diagram variant={variant} mobile={false} />
      <Diagram variant={variant} mobile />
    </div>
  </figure>;
}