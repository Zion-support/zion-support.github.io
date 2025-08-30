import React from 'react';
import { Shield, FileText, ExternalLink, CheckCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GDPRDSARPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold flex items-center gap-3">
              <Shield className="w-8 h-8 text-cyan-400" /> GDPR/CCPA DSAR Portal
            </h1>
            <p className="mt-4 text-slate-300">
              Launch a branded privacy request portal with ID verification, workflow, SLAs, redaction, and audit-ready exports. Integrates with common CRMs and ticketing tools.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[ 
                { title: 'Identity verification & consent', desc: 'Email/SMS OTP, ID document support.' },
                { title: 'Workflow automation', desc: 'Intake, triage, routing, collaboration.' },
                { title: 'Data source connectors', desc: 'CRM, CDP, Data Warehouse lookups.' },
                { title: 'Exports & redaction', desc: 'PDF/CSV exports with auto‑redaction.' },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold"><CheckCircle className="w-4 h-4"/> {f.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-sm text-slate-300">
              Typical pricing: <span className="font-semibold text-cyan-300">$99–$399/mo</span> plus usage. Market comps: OneTrust/Transcend tiers.
            </div>

            <div className="mt-4 flex gap-4 text-sm">
              <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200" href="https://www.onetrust.com/pricing/" target="_blank" rel="noreferrer">
                OneTrust pricing <ExternalLink className="w-3 h-3"/>
              </a>
              <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-2  00" href="https://transcend.io/pricing/" target="_blank" rel="noreferrer">
                Transcend pricing <ExternalLink className="w-3 h-3"/>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Request a demo</Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5 inline-flex items-center gap-2"><Mail className="w-4 h-4"/> kleber@ziontechgroup.com</a>
              <a href="tel:+13024640950" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5 inline-flex items-center gap-2"><Phone className="w-4 h-4"/> +1 302 464 0950</a>
            </div>
          </div>

          <div className="w-full lg:w-96 rounded-2xl border border-white/10 bg-white/5 p-6 h-max">
            <div className="text-sm text-slate-300">Looking for our existing DSAR implementation page?</div>
            <Link to="/services/dsr-portal" className="mt-3 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              Go to DSAR Portal <ExternalLink className="w-3 h-3"/>
            </Link>
            <div className="mt-6 text-xs text-slate-400">
              364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

