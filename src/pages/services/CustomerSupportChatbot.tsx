import React from 'react';
import { SEO } from '@/components/SEO';
import { CheckCircle2, MessageCircle, DollarSign, ExternalLink, Phone, Mail } from 'lucide-react';

const CustomerSupportChatbot: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Customer Support Chatbot - Zion Tech Group" description="Automate L1/L2 support with retrieval-augmented generation and ticket deflection." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Customer Support Chatbot</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Reduce average handle time with AI responses grounded in your knowledge base, product docs, and previous
          tickets. Escalation rules and CRM/Helpdesk logging included.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'RAG answers with vector search and citations',
            'Zendesk, Freshdesk, Intercom integrations',
            'Multilingual (50+ locales) and tone control',
            'Auto-categorize, prioritize, and tag tickets',
            'Secure PII redaction and audit logs',
            'Fallback to live agents with summaries',
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-xl bg-slate-900/60 border border-cyan-400/15 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
              <div className="text-slate-200">{b}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <DollarSign className="h-4 w-4" /> Pricing
          </div>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-slate-300 text-sm">
            <li>Starter: $99/mo up to 2k conversations</li>
            <li>Growth: $299/mo up to 10k conversations</li>
            <li>Enterprise: Custom; SSO, SLAs, audit, VPC</li>
            <li>Setup: $3k–$15k; fine-tuning optional</li>
          </ul>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
            Learn more <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="tel:+13024640950" className="inline-flex items-center gap-2 hover:text-cyan-200"><Phone className="h-4 w-4" /> +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 hover:text-cyan-200"><Mail className="h-4 w-4" /> kleber@ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportChatbot;

