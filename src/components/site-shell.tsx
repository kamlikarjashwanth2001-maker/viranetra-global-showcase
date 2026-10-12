import { Link, useRouterState } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Search, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './ui/button';
import { journey } from '../lib/marketing';
const navigation = [['Home','/'],['Platform','/platform'],['Capabilities','/capabilities'],['Industries','/industries'],['About','/about']] as const;
export function Brand() {
  return (
    <Link to="/" className="text-base font-extrabold tracking-wider font-['Outfit',sans-serif] hover:opacity-80 transition-opacity" aria-label="Viranetra home">
      VIRANETRA<sup>®</sup>
    </Link>
  );
}
export function Reveal({children,className=''}:{children:ReactNode;className?:string}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.5}}>{children}</motion.div>; }
export function Action({children,hash,secondary=false}:{children:ReactNode;hash?:string;secondary?:boolean}) {
  return (
    <Button asChild variant={secondary?'link':'default'} className={secondary?'h-11 px-0 text-sm font-semibold font-[\'Outfit\',sans-serif] text-foreground':'pill'}>
      <Link to="/contact" hash={hash??''}>
        {children}
        {!secondary&&<span className="arrow-disc"><ArrowRight size={16}/></span>}
      </Link>
    </Button>
  );
}
export function SiteShell({children}:{children:ReactNode}) {
  const [open,setOpen]=useState(false);
  const path=useRouterState({select:s=>s.location.pathname});
  return (
    <div className="site-frame relative w-full">
      <header className="nav-wrap">
        <nav className="floating-nav" aria-label="Main navigation">
          <Brand />
          <div className="hidden items-center gap-7 lg:gap-9 md:flex">
            {navigation.map(([name,to])=>(
              <Link
                key={to}
                to={to}
                className={`text-[13px] lg:text-[14px] font-['Outfit',sans-serif] tracking-wider transition-opacity hover:opacity-60 ${
                  path===to?'font-bold text-foreground':'font-medium text-foreground/80'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Action>Request Demo</Action>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={open?'Close navigation':'Open navigation'}
            aria-expanded={open}
            onClick={()=>setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>
        {open && (
          <nav
            className="mx-6 mt-3 grid gap-1.5 rounded-2xl bg-background p-5 shadow-lg border border-border md:hidden font-['Outfit',sans-serif]"
            aria-label="Mobile navigation"
          >
            {navigation.map(([name,to])=>(
              <Link
                key={to}
                to={to}
                onClick={()=>setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  path===to?'bg-muted font-bold':''
                }`}
              >
                {name}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t">
              <Action>Request Demo</Action>
            </div>
          </nav>
        )}
      </header>
      <main className="w-full">{children}</main>
      <div className="content-grid">
        <section className="section text-center" aria-labelledby="trial-heading">
          <Reveal>
            <span className="mb-4 inline-flex rounded-full bg-mint px-4 py-2 text-[11px] font-semibold tracking-wider font-['Outfit',sans-serif]">
              YOUR NEXT TRUSTED DECISION STARTS HERE
            </span>
            <h2 id="trial-heading" className="section-title font-['Outfit',sans-serif]">
              Try Viranetra free for 15 days
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-7">
              <Action hash="trial-request">Request Free Trial</Action>
              <Action secondary>Contact Us</Action>
            </div>
          </Reveal>
        </section>
      </div>
      <footer className="w-full px-8 py-12 md:px-20 font-['Outfit',sans-serif]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <Brand />
              <p className="mt-3 max-w-72 text-sm text-muted-foreground leading-relaxed">
                Agentic AI-Powered Cyber Decision Intelligence Platform.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">HITH Technologies Pvt. Ltd.</p>
            </div>
            <nav className="grid grid-cols-3 gap-x-8 gap-y-4 text-sm" aria-label="Footer navigation">
              {navigation.map(([name,to])=>(
                <Link key={to} to={to} className="hover:opacity-70 transition-opacity">
                  {name}
                </Link>
              ))}
              <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
              <Link to="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
              <Link to="/terms" className="hover:opacity-70 transition-opacity">Terms</Link>
            </nav>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-3 border-t pt-6 text-xs text-muted-foreground">
            <span>© 2026 Viranetra</span>
            <span>Transforming cybersecurity into trusted decisions.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export function HeroStage() { const chips=[['Investigation',Search,'bg-cyan','chip-a'],['Governance',ShieldCheck,'bg-peach','chip-b'],['Validation',Users,'bg-mint','chip-c'],['Decision',Sparkles,'bg-lavender','chip-d']] as const;return <div className="hero-stage"><div className="wordmark">VIRANETRA<sup>®</sup></div><img src="/robot.png" width="268" height="505" className="robot" alt="Viranetra hooded robot mascot with glowing red eyes" fetchPriority="high"/>{chips.map(([label,Icon,tone,pos])=><div key={label} className={`chip ${pos}`}><span className={`icon-tile ${tone}`}><Icon size={15}/></span>{label}</div>)}</div>; }
export function PageIntro({code,title,body}:{code:string;title:string;body:string}) { return <><HeroStage/><div className="content-grid"><section className="section text-center"><Reveal><SectionLabel>{code.replace('DOSSIER / ','')}</SectionLabel><h1 className="mx-auto mt-5 max-w-[760px] text-4xl font-semibold leading-[1.1] md:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-[620px] text-sm">{body}</p></Reveal></section></div></>; }
export function SectionLabel({children}:{children:ReactNode}) {return <div className="eyebrow">{children}</div>;}
export function DemoBand() {return <div className="content-grid"><section className="section"><Reveal className="cta-band text-center"><h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight md:text-4xl">Turn investigation into trusted decisions.</h2><p className="mx-auto mt-4 max-w-lg text-sm">Explore a pilot deployment, see the platform in action, or partner with Viranetra.</p><div className="mt-7 flex flex-wrap items-center justify-center gap-7"><Action>Request a Demo</Action><Button asChild variant="link" className="text-xs text-background"><Link to="/contact" hash="partner">Become a Partner <ArrowUpRight size={14}/></Link></Button></div></Reveal></section></div>;}
export function DecisionPath() {return <section className="section"><SectionLabel>THE JOURNEY</SectionLabel><h2 className="section-title mt-4 max-w-xl">Every alert follows one governed path.</h2><p className="mt-4 max-w-lg text-sm">From raw signal to a decision leaders can stand behind.</p><ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{journey.map((step,i)=><li key={step} className="min-w-0 border-t pt-4"><div className="flex items-center justify-between text-xs text-muted-foreground"><span>0{i+1}/</span><ArrowRight size={14}/></div><h3 className="mt-4 text-sm font-semibold">{step}</h3></li>)}</ol></section>;}
export function InfoCards({items}:{items:string[][]}) {const icons=[Sparkles,Search,ShieldCheck,Users];return <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(([name,role,body],i)=>{const Icon=icons[i%icons.length]??Sparkles;return <Reveal key={name}><article className={`info-card h-full ${i%3===1?'featured':''}`}><div className="flex items-center justify-between"><span className="text-xs">{String(i+1).padStart(2,'0')}/</span><span className="icon-tile bg-lavender text-foreground"><Icon size={18}/></span></div><h3 className="mt-8 text-xl font-semibold">{name}</h3>{role&&<div className="mt-2 text-xs font-medium">{role}</div>}<p className="mt-4 text-xs">{body}</p></article></Reveal>;})}</div>;}
