import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, DollarSign, BarChart, MessageSquare, Globe } from 'lucide-react';

export default function MicroSaaS() {
  const products = [
    {
      icon: Mail,
      title: 'AI Auto Email Responder',
      desc: 'Replies to common inbound emails, logs to CRM, and escalates edge cases.',
      price: 'from $99/mo + usage',
      link: '/services/ai-auto-email-responder'
    },
    {
      icon: MessageSquare,
      title: 'Mobile Feedback Surveys',
      desc: 'In-app NPS/CSAT with AI theme extraction and alerts.',
      price: 'from $79/mo',
      link: '/services/mobile-feedback-surveys'
    },
    {
      icon: BarChart,
      title: 'FinOps Advisor',
      desc: 'Automated cloud cost findings, budgets, and anomaly detection.',
      price: 'from $149/mo',
      link: '/services/finops-advisor'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="Micro SaaS – Zion Tech Group"
        description="Narrow, high-ROI SaaS tools that launch fast and scale with you."
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <section className="relative py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-sm text-zinc-300">
          <Sparkles className="w-4 h-4 text-cyan-400" /> Productized Innovation
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">Micro SaaS</h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-3xl">
          Focused SaaS that does one job exceptionally well. Launch in days,
          not months, with clear pricing and measurable outcomes.
        </p>
        <div className="mt-6 text-zinc-400 text-sm">
          Contact: <a className="underline hover:text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> ·
          <a className="underline hover:text-cyan-400 ml-2" href="tel:+13024640950">+1 302 464 0950</a>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-20 grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <Link key={p.title} to={p.link} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-start gap-4">
              <p.icon className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                <p className="text-zinc-400 mb-2">{p.desc}</p>
                <div className="text-sm text-zinc-300">{p.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-24">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-bold mb-2">Transparent Pricing</h2>
          <ul className="list-disc pl-5 text-zinc-300 space-y-1">
            <li>Starter: $79–$149/mo per product</li>
            <li>Growth: $199–$499/mo per product</li>
            <li>Scale: Custom, with SSO, SAML, and SLAs</li>
          </ul>
          <p className="text-zinc-400 mt-3 text-sm">See product pages for usage-based add‑ons.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-24">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-bold mb-2">Useful Links</h2>
          <ul className="list-disc pl-5 text-zinc-300 space-y-1">
            <li><a className="underline hover:text-cyan-400" href="https://www.producthunt.com/" target="_blank" rel="noreferrer">Product Hunt</a></li>
            <li><a className="underline hover:text-cyan-400" href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a></li>
            <li><a className="underline hover:text-cyan-400" href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

// duplicate component removed

