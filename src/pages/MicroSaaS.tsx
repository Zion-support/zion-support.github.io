import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Bot, Globe, Database, Shield, ExternalLink, DollarSign } from 'lucide-react';

const MicroSaaS: React.FC = () => {
  const products = [
    {
      icon: Bot,
      title: 'AI Lead Scoring Micro‑SaaS',
      desc: 'Automated, explainable B2B lead scoring with CRM integration and model feedback loops.',
      price: '$199–$799/month',
      href: '/services/ai-lead-scoring'
    },
    {
      icon: Zap,
      title: 'Website AI Chatbot',
      desc: 'RAG‑powered website assistant trained on your docs with handoff to human and analytics.',
      price: '$99–$499/month',
      href: '/services/website-ai-chatbot'
    },
    {
      icon: Database,
      title: 'RAG Site Search',
      desc: 'Cited semantic search across your knowledge base with filters, relevancy, and dashboards.',
      price: '$149–$699/month',
      href: '/services/rag-search'
    },
    {
      icon: BarChart3,
      title: 'E‑commerce Personalization',
      desc: 'On‑site recommendations, bundles, and pricing nudges tuned to conversion KPIs.',
      price: '$249–$1,499/month',
      href: '/services/ecommerce-personalization'
    },
    {
      icon: Globe,
      title: 'Multilingual CX Orchestrator',
      desc: '50+ languages, brand‑safe translations, and locale QA across chat, email, and voice.',
      price: '$199–$899/month',
      href: '/ai-services'
    },
    {
      icon: Shield,
      title: 'AI Governance & Observability',
      desc: 'Prompt, output, and PII policies with alerts, dashboards, and red‑teaming workflows.',
      price: '$299–$1,499/month',
      href: '/services/ai-data-governance'
    }
  ];

  const ctas = [
    { label: 'View Live Site', href: 'https://ziontechgroup.com', external: true },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-1 text-cyan-300 mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">MICRO SAAS</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Small products, outsized impact</h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">Launch quickly, scale predictably, and pay only for what you need. Enterprise‑grade micro SaaS services with transparent pricing.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ctas.map((c) => (
              c.external ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 inline-flex items-center">
                  {c.label}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              ) : (
                <Link key={c.label} to={c.href} className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">
                  {c.label}
                </Link>
              )
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-400">
            Typical plans: Starter, Growth, Scale. Billing monthly, cancel anytime.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.title} to={p.href} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:translate-y-[-2px] hover:border-cyan-400/30">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">{p.price}</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div className="mb-2 font-semibold text-white">What’s included</div>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li>Provisioning in 24–72 hours</li>
            <li>SSO, roles, and audit logs available</li>
            <li>SLA options: 99.5% / 99.9%</li>
            <li>Support: Email, Slack, or On‑call</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <DollarSign className="h-3 w-3" />
            Market pricing aligns with SMB to mid‑market budgets.
          </div>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">
            Visit ziontechgroup.com <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-6 text-xs text-slate-400">
            Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
}
