import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Calendar, PenTool, BarChart3, Users, DollarSign, ExternalLink, Shield } from 'lucide-react';

const MicroSaaS: React.FC = () => {
  const products = [
    {
      icon: Mail,
      name: 'AI Email Responder',
      desc: 'Auto-drafts replies, classifies intents, and flags priority emails across Gmail/365 with human review.',
      pricing: 'From $49/mo per inbox'
    },
    {
      icon: MessageSquare,
      name: 'Smart Helpdesk & Chat',
      desc: 'Tickets, knowledge base, and AI chat trained on your docs. Integrates with Slack/Teams.',
      pricing: 'From $99/mo'
    },
    {
      icon: Calendar,
      name: 'Meeting Copilot',
      desc: 'Auto-notes, action items, and summaries for Zoom, Meet, and Teams with CRM sync.',
      pricing: 'From $39/user/mo'
    },
    {
      icon: PenTool,
      name: 'Content Studio',
      desc: 'Generate blogs, emails, and SEO briefs with brand voice and channel-specific formats.',
      pricing: 'From $79/mo'
    },
    {
      icon: BarChart3,
      name: 'Analytics Pulse',
      desc: 'Plug-and-play dashboards with anomaly alerts and goal tracking. Connects to GA4, Stripe, HubSpot.',
      pricing: 'From $59/mo'
    },
    {
      icon: Users,
      name: 'Onboarding Flow',
      desc: 'Guided walkthroughs, tooltips, checklists and in-app NPS. No-code targeting segments.',
      pricing: 'From $69/mo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h1 className="text-4xl font-bold sm:text-5xl">Micro SaaS products you can launch this week</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Pick a ready-to-run tool or have us tailor it for your workflow. Secure, scalable, and priced for fast ROI.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">{p.pricing}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div className="mb-2 font-semibold text-white">How we deliver</div>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li>Provisioned in your cloud or ours</li>
            <li>Single-tenant or multi-tenant options</li>
            <li>SSO, RBAC, and audit logging available <Shield className="inline h-3 w-3" /></li>
            <li>White-label branding and custom integrations</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <DollarSign className="h-3 w-3" />
            Typical setup: $1k–$10k depending on SSO/compliance and data migration.
          </div>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/micro-saas" target="_blank" rel="noreferrer">
            See micro SaaS overview <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Talk to product lead</Link>
            <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaS;

