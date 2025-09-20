import React from 'react';
import { SEO } from '@/components/SEO';
import { DollarSign, CheckCircle2, ExternalLink, Phone, Mail } from 'lucide-react';

const AISEOAuditor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="AI SEO Auditor - Zion Tech Group" description="Autonomous on-site SEO audits, fixes, and monitoring with AI." />

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AI SEO Auditor</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Identify SEO issues, generate prioritized fixes, and ship updates automatically with guardrails. Nightly
          crawls, Core Web Vitals checks, structured data validation, and content suggestions.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Automated site crawl and issues triage',
            'Core Web Vitals & Lighthouse monitoring',
            'Schema.org and OpenGraph validation',
            'Internal linking and orphan page detection',
            'AI-generated meta tags and headings',
            'CI-ready fix PRs with human-in-the-loop',
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
            <li>Starter: $49/mo for up to 500 pages</li>
            <li>Growth: $149/mo for up to 5k pages</li>
            <li>Enterprise: Custom; SSO, SLOs, multi-brand</li>
            <li>Setup projects: $2k–$10k (one-time)</li>
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

export default AISEOAuditor;

