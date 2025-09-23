import React from 'react';
import { SEO } from '@/components/SEO';
import { CheckCircle2, Globe, DollarSign, ExternalLink, Phone, Mail } from 'lucide-react';

const LandingPageGenerator: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Landing Page Generator - Zion Tech Group" description="Generate, A/B test, and deploy high-converting landing pages with AI." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Landing Page Generator</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Create optimized, on-brand pages from a prompt or product brief. Built-in copy, image generation, forms,
          analytics, and deployment to your stack.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'On-brand copy and image generation',
            'SEO-ready metadata and schema',
            'A/B testing and analytics hooks',
            'One-click deploy to Vercel/Netlify/S3',
            'Forms with spam protection and CRM sync',
            'Localization and accessibility checks',
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
            <li>Starter: $39/mo + 3 pages</li>
            <li>Growth: $129/mo + 20 pages</li>
            <li>Enterprise: Custom; SSO, compliance, SLAs</li>
            <li>Setup: $2k–$8k (brand + components)</li>
          </ul>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
            Learn more <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="tel:+13024640950" className="inline-flex items-center gap-2 hover:text-cyan-200"><Globe className="h-4 w-4" /> +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 hover:text-cyan-200"><Mail className="h-4 w-4" /> kleber@ziontechgroup.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageGenerator;

