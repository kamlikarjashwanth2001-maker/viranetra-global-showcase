import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Eye, Network, Radar, Microscope, Scale, UserCheck, Zap, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { agents } from '../lib/marketing';

const tiles = [['#DCD0FF', Network], ['#C8F5FF', Radar], ['#FFDFF5', Microscope], ['#F5E6DC', Scale], ['#CFFBE0', UserCheck], ['#FFF3C4', Zap]] as const;
const N = agents.length;

export function AgentOrbit() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [desk, setDesk] = useState(false);
  const [tick, setTick] = useState(0);
  useEffect(() => { const m = window.matchMedia('(min-width:640px)'); const f = () => setDesk(m.matches); f(); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  useEffect(() => { if (paused || hover || reduced) return; const t = setInterval(() => setStep(s => s + 1), 3000); return () => clearInterval(t); }, [paused, hover, reduced, tick]);
  const active = ((step % N) + N) % N;
  const go = (d: number) => { setStep(s => s + d); setTick(t => t + 1); };
  const pick = (i: number) => go(((i - active + N + 3) % N) - 3);
  const rx = desk ? 260 : 125, ry = desk ? 110 : 68, w = desk ? 200 : 120, h = desk ? 80 : 56;
  const [name, role, body] = agents[active];
  return (
    <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className="relative mx-auto" style={{ height: ry * 2 + h + 40, maxWidth: rx * 2 + w }}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed" style={{ width: rx * 2, height: ry * 2 }} />
          <div className="absolute left-1/2 top-1/2 z-[5] grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-background shadow-sm"><Eye size={26} /></div>
          {agents.map(([n], i) => {
            const a = ((i - step) * 360 / N + 90) * Math.PI / 180;
            const depth = (Math.sin(a) + 1) / 2;
            const [bg, Icon] = tiles[i];
            const front = i === active;
            return (
              <motion.button key={n} type="button" onClick={() => pick(i)} aria-label={`Show ${n}`} aria-pressed={front}
                className={`absolute left-1/2 top-1/2 flex items-center gap-2 rounded-2xl border bg-background px-2 text-left shadow-sm ${front ? 'border-foreground' : ''}`}
                style={{ width: w, height: h, marginLeft: -w / 2, marginTop: -h / 2, zIndex: Math.round(depth * 10) }}
                animate={{ x: Math.cos(a) * rx, y: Math.sin(a) * ry, scale: 0.72 + 0.28 * depth, opacity: 0.45 + 0.55 * depth }}
                transition={{ duration: reduced ? 0 : 0.7, ease: 'easeInOut' }}>
                <span className="grid shrink-0 place-items-center rounded-xl" style={{ background: bg, width: desk ? 44 : 32, height: desk ? 44 : 32 }}><Icon size={desk ? 20 : 15} /></span>
                <span className={`${desk ? 'text-sm' : 'text-[10px]'} font-semibold leading-tight`}>{n}</span>
              </motion.button>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border bg-background" aria-label="Previous agent" onClick={() => go(-1)}><ChevronLeft size={16} /></button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border bg-background" aria-label={paused ? 'Play rotation' : 'Pause rotation'} onClick={() => setPaused(p => !p)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border bg-background" aria-label="Next agent" onClick={() => go(1)}><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="min-h-[200px] rounded-3xl border border-[#EDEDF0] bg-background p-7" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="text-xs text-muted-foreground">{String(active + 1).padStart(2, '0')}/ of {String(N).padStart(2, '0')}</div>
            <h3 className="mt-5 text-xl font-semibold">{name}</h3>
            <div className="mt-1 text-xs text-muted-foreground">{role}</div>
            <p className="mt-4 text-sm">{body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
