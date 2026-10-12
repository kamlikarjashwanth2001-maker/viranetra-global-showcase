import { createFileRoute } from '@tanstack/react-router';
import { SiteShell,PageIntro,DecisionPath,DemoBand,SectionLabel } from '../components/site-shell';
import { AgentOrbit } from '../components/agent-orbit';
import { pageHead } from '../lib/marketing';
export const Route=createFileRoute('/platform')({head:()=>pageHead('Platform & AI Agents | Viranetra','Explore Viranetra’s specialized AI agents for security visibility, adaptive investigation, governance, human validation, and trusted decisions.','/platform'),component:Platform});
function Platform(){return <SiteShell><PageIntro code="PLATFORM & AI AGENTS" title="Transforming cybersecurity into trusted decisions." body="An Agentic AI-powered cyber decision intelligence platform that sits above your existing security stack, not in place of it."/><div className="content-grid"><section className="section bg-[#F5F5F6]"><SectionLabel>AI AGENT ECOSYSTEM</SectionLabel><h2 className="section-title mt-4 max-w-xl">Specialized intelligence.<br/>One trusted outcome.</h2><AgentOrbit/></section><DecisionPath/></div><DemoBand/></SiteShell>;}
