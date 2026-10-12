import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Link } from '@tanstack/react-router';
import { X, Send, Sparkles, ShieldCheck, Users, Search, Bot, RotateCcw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  quickReplies?: string[];
  actionLink?: { text: string; href: string; hash?: string };
};

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  sender: 'bot',
  text: "Hi! I'm **Vira Bot** 🤖 — your guide to Viranetra's Agentic AI Cyber Decision Intelligence Platform.\n\nHow may I assist you today? Feel free to ask any question or tap a topic below to explore our platform and specialized agents!",
  quickReplies: [
    'What is Viranetra?',
    'Tell me about the Vira Agents',
    'How does Decision Intelligence work?',
    'Phase 2 Capabilities',
    'Why Viranetra vs traditional tools?',
    'Request a 15-Day Free Trial',
  ],
};

const KNOWLEDGE_RESPONSES: Array<{
  triggers: string[];
  reply: string;
  quickReplies?: string[];
  actionLink?: { text: string; href: string; hash?: string };
}> = [
  {
    triggers: ['what is viranetra', 'overview', 'about viranetra', 'tell me about viranetra', 'platform'],
    reply:
      "**Viranetra** is an **Agentic AI-Powered Cyber Decision Intelligence Platform** developed by HITH Technologies Pvt. Ltd. (Hyderabad).\n\nUnlike traditional tools that simply generate more alerts and dashboards, Viranetra sits **above your existing security stack**, correlating evidence with business context and governance to turn investigations into **trusted, explainable decisions** security leaders can defend.",
    quickReplies: ['Tell me about the Vira Agents', 'How does Decision Intelligence work?', 'Request a 15-Day Free Trial'],
    actionLink: { text: 'Explore Platform Details', href: '/platform' },
  },
  {
    triggers: ['agent', 'agents', 'vira agents', 'specialized agents', 'ecosystem', 'cortex', 'netra scan'],
    reply:
      "Viranetra is powered by an ecosystem of **6 specialized Agentic AI engines**:\n\n" +
      "1. 🧠 **Vira Cortex**: Central Orchestration Engine coordinating all specialized agents.\n" +
      "2. 📡 **Netra Scan**: Security Visibility Engine gathering telemetry across your existing stack.\n" +
      "3. 🔍 **Vira Deep**: Adaptive Investigation Engine examining validated critical alerts.\n" +
      "4. ⚖️ **Vira Judge**: Governance & Policy Engine applying compliance (ISO, SOC 2, NIST, GDPR).\n" +
      "5. 👥 **Human-in-the-Loop**: Expert Validation layer where SOC analysts refine and approve findings.\n" +
      "6. 🛡️ **Netra Responder**: Decision Intelligence Engine delivering explainable, actionable recommendations.",
    quickReplies: ['How does Decision Intelligence work?', 'Phase 2 Capabilities', 'Request Demo'],
    actionLink: { text: 'View Agent Ecosystem', href: '/platform' },
  },
  {
    triggers: ['decision intelligence', 'journey', 'how it works', 'path', 'governed path', '8 steps'],
    reply:
      "Every alert follows **one governed journey** from raw signal to trusted outcome:\n\n" +
      "1. **Security Tools** (integrates with your current stack)\n" +
      "2. **Validated Critical Alerts** (filters false positives)\n" +
      "3. **Adaptive Investigation** (Vira Deep explores root cause)\n" +
      "4. **Evidence Correlation** (links alert to business assets)\n" +
      "5. **Governance & Compliance** (evaluates policy & risk)\n" +
      "6. **Human Validation** (analyst oversight & approval)\n" +
      "7. **Decision Intelligence Dashboard** (executive dossier)\n" +
      "8. **Business Decision** (clear, defensible response)",
    quickReplies: ['Tell me about the Vira Agents', 'Why Viranetra vs traditional tools?', 'Request Demo'],
    actionLink: { text: 'See Capabilities', href: '/capabilities' },
  },
  {
    triggers: ['phase 2', 'future', 'roadmap', 'vira dark', 'forensics', 'vira maya', 'vira ot'],
    reply:
      "Viranetra's **Phase 2 Planned Roadmap** includes:\n\n" +
      "• 🌑 **Vira Dark**: External attack surface, dark web threat intel, and brand protection.\n" +
      "• 🔎 **Vira Forensics**: Digital investigation, timeline reconstruction, and evidence preservation.\n" +
      "• 💡 **Vira Maya**: Executive AI security copilot and conversational briefing assistant.\n" +
      "• 🏭 **Vira OT**: Operational technology security for ICS, SCADA, energy, and critical utilities.",
    quickReplies: ['What is Viranetra?', 'Tell me about the Vira Agents', 'Partner with Viranetra'],
    actionLink: { text: 'View Roadmap', href: '/capabilities' },
  },
  {
    triggers: ['why', 'difference', 'compare', 'vs', 'traditional', 'siem', 'soar', 'xdr', 'problem'],
    reply:
      "**The Problem:** Security teams aren't short on tools—they're short on time, context, and confidence. Alert fatigue and fragmented data stall decision-making.\n\n" +
      "**The Viranetra Advantage:**\n" +
      "• Zero disruption: Sits above your tools without replacing them.\n" +
      "• Answers *what to do next* and *why it matters*.\n" +
      "• Combines AI automation with human governance.\n" +
      "• Built for business decisions, not more cluttered dashboards.",
    quickReplies: ['Tell me about the Vira Agents', 'Request a 15-Day Free Trial'],
    actionLink: { text: 'Read Solutions', href: '/industries' },
  },
  {
    triggers: ['trial', 'free trial', 'demo', 'pricing', 'test', 'pilot', 'cost', '15 days'],
    reply:
      "You can try Viranetra **free for 15 days** or schedule a personalized live demo!\n\n" +
      "• 15-day full capability pilot evaluation\n" +
      "• Rapid zero-disruption integration with your stack\n" +
      "• Guided walk-through by our security intelligence team\n\n" +
      "Click below to submit your request directly to our team.",
    quickReplies: ['What is Viranetra?', 'Tell me about the Vira Agents', 'Partner with Viranetra'],
    actionLink: { text: 'Request Free Trial / Demo', href: '/contact', hash: 'trial-request' },
  },
  {
    triggers: ['partner', 'partnership', 'mssps', 'oem', 'white label', 'distributor'],
    reply:
      "We partner with **Enterprises, MSSPs, MDR providers, system integrators, and government bodies**.\n\n" +
      "Options include:\n" +
      "• White-label AI decision intelligence for MSSPs\n" +
      "• OEM integrations & joint go-to-market alliances\n" +
      "• API-first enterprise pilots",
    quickReplies: ['Tell me about the Vira Agents', 'Request a 15-Day Free Trial'],
    actionLink: { text: 'Partner With Us', href: '/contact', hash: 'partner' },
  },
  {
    triggers: ['company', 'hith', 'hyderabad', 'founders', 'who made', 'contact', 'location'],
    reply:
      "Viranetra is engineered by **HITH Technologies Pvt. Ltd.** based in **Hyderabad, India**.\n\n" +
      "Our mission is transforming cybersecurity into trusted, explainable, and human-centric decisions through governed Agentic AI.",
    quickReplies: ['What is Viranetra?', 'Tell me about the Vira Agents', 'Contact Us'],
    actionLink: { text: 'About Viranetra', href: '/about' },
  },
];

function getBotReply(userText: string) {
  const normalized = userText.toLowerCase().trim();
  for (const entry of KNOWLEDGE_RESPONSES) {
    if (entry.triggers.some(t => normalized.includes(t))) {
      return entry;
    }
  }
  return {
    reply:
      `Thanks for asking! As **Vira Bot**, I can answer anything about Viranetra's architecture, our 6 specialized AI agents (Vira Cortex, Vira Deep, Vira Judge, etc.), governed decision paths, or arranging a 15-day trial.\n\nWould you like to explore one of these areas?`,
    quickReplies: [
      'What is Viranetra?',
      'Tell me about the Vira Agents',
      'How does Decision Intelligence work?',
      'Request a 15-Day Free Trial',
    ],
    actionLink: { text: 'Contact Viranetra Team', href: '/contact' },
  };
}

export function ViraBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPromptBadge, setShowPromptBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setShowPromptBadge(false);
    }
  }, [isOpen, messages, isTyping]);

  function handleSend(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: `user-${Date.now()}`, sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const match = getBotReply(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: match.reply,
        quickReplies: match.quickReplies,
        actionLink: match.actionLink,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleSend(inputValue);
  }

  function handleReset() {
    setMessages([INITIAL_MESSAGE]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end print:hidden">
      {/* Speech Prompt Bubble */}
      <AnimatePresence>
        {!isOpen && showPromptBadge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="mb-3 max-w-[240px] cursor-pointer rounded-2xl bg-foreground p-3.5 text-background shadow-xl border border-white/20"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-mint uppercase tracking-wider">
                <span className="size-2 rounded-full bg-mint animate-pulse" />
                Vira Bot
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPromptBadge(false);
                }}
                className="text-background/60 hover:text-background p-0.5"
                aria-label="Dismiss greeting"
              >
                <X size={13} />
              </button>
            </div>
            <p className="mt-1.5 text-[13px] font-medium leading-snug">
              Hi, this is <strong>Vira Bot</strong>! How may I assist you with Viranetra today?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mascot Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex size-15 items-center justify-center rounded-full bg-gradient-to-br from-card to-muted p-1 shadow-2xl ring-2 ring-foreground/15 transition-all hover:ring-mint focus-visible:outline-none"
        aria-label={isOpen ? 'Close Vira Bot assistant' : 'Open Vira Bot assistant'}
        aria-expanded={isOpen}
      >
        {/* Robot Head Avatar */}
        <div className="relative size-full overflow-hidden rounded-full bg-[#35363c] border-2 border-foreground/20">
          <img
            src="/robot-avatar.png"
            alt="Vira Bot mascot head"
            className="absolute left-1/2 top-[-6px] w-[130%] max-w-none -translate-x-1/2 object-contain filter drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
          />
        </div>
        {/* Glowing Online Dot */}
        <span className="absolute bottom-0.5 right-0.5 flex size-4 items-center justify-center rounded-full bg-background shadow">
          <span className="size-2.5 rounded-full bg-mint animate-ping opacity-75" />
          <span className="absolute size-2 rounded-full bg-mint" />
        </span>
      </motion.button>

      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="absolute bottom-18 right-0 flex h-[580px] w-[92vw] max-w-[410px] flex-col overflow-hidden rounded-3xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/60 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full bg-[#2c2d33] border border-border shadow-inner">
                  <img
                    src="/robot-avatar.png"
                    alt="Vira Bot Avatar"
                    className="absolute left-1/2 top-[-4px] w-[130%] max-w-none -translate-x-1/2 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-sm tracking-wide text-foreground">
                    <span>VIRA BOT</span>
                    <span className="rounded-full bg-mint/20 text-foreground px-2 py-0.5 text-[9px] font-semibold">
                      AI AGENT
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">Decision Intelligence Knowledge Guide</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
                  title="Reset conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
                  title="Close Vira Bot"
                  aria-label="Close Vira Bot"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  {m.sender === 'bot' && (
                    <div className="mb-1 flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
                      <Bot size={13} className="text-mint" /> Vira Bot
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-foreground text-background font-medium rounded-br-xs'
                        : 'bg-background border border-border text-foreground rounded-bl-xs shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line text-[13.5px]">
                      {m.text}
                    </div>

                    {/* Action link if available */}
                    {m.actionLink && (
                      <div className="mt-3 pt-2.5 border-t border-border/60">
                        <Link
                          to={m.actionLink.href}
                          hash={m.actionLink.hash ?? ''}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:underline"
                        >
                          {m.actionLink.text} <ArrowRight size={13} />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Quick reply suggestion buttons */}
                  {m.quickReplies && m.quickReplies.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                      {m.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          type="button"
                          onClick={() => handleSend(qr)}
                          className="rounded-full border border-border bg-background/80 hover:bg-muted px-3 py-1.5 text-[11.5px] font-medium text-foreground transition-all hover:scale-[1.02] shadow-xs text-left"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-muted-foreground text-xs py-1">
                  <div className="flex gap-1 items-center bg-background border border-border px-3 py-2 rounded-2xl">
                    <span className="size-1.5 rounded-full bg-foreground/60 animate-bounce" />
                    <span className="size-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:0.2s]" />
                    <span className="size-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSubmit} className="border-t border-border bg-background/80 p-3 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Vira Bot anything about Viranetra..."
                className="flex-1 bg-muted/60 border border-border rounded-xl px-3.5 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-1 focus:ring-foreground"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="size-10 rounded-xl bg-foreground text-background flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-opacity shrink-0 cursor-pointer"
                aria-label="Send question"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
