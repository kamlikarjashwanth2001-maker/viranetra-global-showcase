import { createFileRoute } from '@tanstack/react-router';
import { Users } from 'lucide-react';
import { SiteShell,PageIntro,DemoBand,Reveal,SectionLabel } from '../components/site-shell';
import { pageHead } from '../lib/marketing';
export const Route=createFileRoute('/about')({head:()=>pageHead('About Viranetra | Trusted Cyber Decisions','Discover Viranetra’s vision and mission for trusted, explainable Agentic AI cyber decisions, built by HITH Technologies Pvt. Ltd. in Hyderabad.','/about'),component:About});
const team = [
  {
    name: 'Akhil Gabbeta',
    role: 'Founder & CEO, Hackers In Threat Hunt',
    image: '/team/akhil-gabbeta.jpg',
    bio: 'Pioneering Agentic AI cyber decision intelligence and autonomous threat operations.',
  },
  {
    name: 'Nikhila Abbarla',
    role: 'Co-Founder & Chief Business Officer, Hackers In Threat Hunt',
    image: '/team/nikhila-abbarla.jpg',
    bio: 'Leading strategic global growth, institutional partnerships, and enterprise market alliances.',
  },
];
function About(){return <SiteShell><PageIntro code="ABOUT VIRANETRA" title="Transforming cybersecurity into trusted decisions." body="Agentic AI-powered investigations. Governance-aware intelligence. Human-centric decisions."/><div className="content-grid"><section className="section grid gap-6 md:grid-cols-2">{[['VISION','A new standard for cyber decisions.','To redefine cybersecurity by enabling organizations to make trusted, explainable, and intelligent decisions through Agentic AI.'],['MISSION','Intelligence with people at its center.','To empower enterprises, governments, and security providers with AI-driven investigations, governance-aware intelligence, and human-centric decision support.']].map(([label,title,body],i)=><Reveal key={label}><article className={`info-card h-full ${i===1?'featured':''}`}><div className="text-xs font-bold tracking-wider">{label}</div><h2 className="mt-7 text-2xl font-bold">{title}</h2><p className="mt-5 text-base leading-relaxed">{body}</p></article></Reveal>)}</section><section className="section text-center"><SectionLabel>THE PEOPLE BEHIND THE PLATFORM</SectionLabel><h2 className="section-title mt-4">Built by HITH Technologies Pvt. Ltd.</h2><p className="mt-4 text-base font-medium text-muted-foreground">Hyderabad, India</p></section><section className="section text-center"><Reveal><SectionLabel>LEADERSHIP TEAM</SectionLabel><h2 className="section-title mt-4">Our leadership.</h2><p className="mt-3 text-sm md:text-base text-muted-foreground">The visionaries steering governed Agentic AI cyber intelligence.</p></Reveal><div className="mx-auto mt-9 grid w-full max-w-2xl sm:max-w-3xl gap-6 sm:grid-cols-2 text-left justify-center">{team.map((member)=><Reveal key={member.name} className="h-full"><article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300" style={{backgroundColor:'#ffffff'}}><div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm"><img src={member.image} alt={member.name} className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy"/></div><h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">{member.name}</h3><div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">{member.role}</div><p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">{member.bio}</p></article></Reveal>)}</div></section></div><DemoBand/></SiteShell>;}
