import React from 'react';
import { Activity, Server, CheckCircle, ExternalLink, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StatusIncidentHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h1 className="text-3xl sm:text-5xl font-bold flex items-center gap-3">
          <Server className="w-8 h-8 text-cyan-400"/> Status & Incident Hub
        </h1>
        <p className="mt-4 text-slate-300">Public status pages, incident timelines, SLA tracking, and subscriber notifications. Integrates with PagerDuty, Opsgenie, and Slack.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Multi‑service monitoring', desc: 'Track APIs, regions and dependencies.' },
            { title: 'Incident comms', desc: 'Templates, timelines, and subscriber updates.' },
            { title: 'SLA/SLO dashboards', desc: 'Burn rates, availability and error budgets.' },
            { title: 'Webhooks & integrations', desc: 'PagerDuty, Opsgenie, Slack, Email.' },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold"><CheckCircle className="w-4 h-4"/> {f.title}</div>
              <div className="mt-1 text-sm text-slate-300">{f.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-slate-300">Typical pricing: <span className="font-semibold text-cyan-300">$59–$299/mo</span>.</div>
        <div className="mt-4 flex gap-4 text-sm">
          <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200" href="https://betterstack.com/status/pricing" target="_blank" rel="noreferrer">
            Better Stack Status pricing <ExternalLink className="w-3 h-3"/>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Create status page</Link>
          <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5 inline-flex items-center gap-2"><Mail className="w-4 h-4"/> kleber@ziontechgroup.com</a>
          <a href="tel:+13024640950" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5 inline-flex items-center gap-2"><Phone className="w-4 h-4"/> +1 302 464 0950</a>
        </div>
      </section>
    </div>
  );
}

