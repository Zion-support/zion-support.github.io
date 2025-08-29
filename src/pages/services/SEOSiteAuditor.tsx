import React from 'react';
import { SEO } from '@/components/SEO';

const SEOSiteAuditor: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO 
        title="SEO Site Auditor - Zion Tech Group"
        description="Automated SEO audits with actionable insights, issue tracking, and change monitoring."
      />
      <section className="container mx-auto px-4 py-16 space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">SEO Site Auditor</h1>
          <p className="text-slate-300 max-w-3xl">
            Run comprehensive technical and on-page SEO audits in minutes. Track Core Web Vitals, metadata, structured data, accessibility, broken links, and regressions with scheduled crawls and alerts.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li>Automated crawls with change detection</li>
              <li>Core Web Vitals and Lighthouse snapshots</li>
              <li>Schema, sitemap, robots, and redirects checks</li>
              <li>Keyword and content gap analysis</li>
              <li>PDF/CSV export, shareable reports, API access</li>
            </ul>
          </article>

          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li>Agencies auditing new clients</li>
              <li>E‑commerce catalog SEO monitoring</li>
              <li>Marketing teams tracking releases</li>
              <li>Founders improving landing pages</li>
            </ul>
          </article>

          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Pricing (USD)</h2>
            <ul className="space-y-2 text-slate-300">
              <li><span className="font-semibold">Starter</span>: $29/mo – 2 sites, 5k URLs/mo</li>
              <li><span className="font-semibold">Growth</span>: $79/mo – 10 sites, 50k URLs/mo</li>
              <li><span className="font-semibold">Pro</span>: $199/mo – 50 sites, 250k URLs/mo</li>
              <li><span className="font-semibold">Enterprise</span>: Custom – SSO, SLA, VPC</li>
            </ul>
          </article>
        </div>

        <footer className="flex flex-wrap gap-3">
          <a href="https://ziontechgroup.com/request-quote" className="px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white">Request Demo</a>
          <a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white">Contact Sales</a>
        </footer>
      </section>
    </div>
  );
};

export default SEOSiteAuditor;

