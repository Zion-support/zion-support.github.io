import React from 'react';
import { SEO } from '@/components/SEO';

const SOC2ComplianceAutomation: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SEO title="SOC 2 Compliance Automation - Zion Tech Group" description="Automate evidence collection, controls monitoring, and auditor-ready reporting." />
      <section className="container mx-auto px-4 py-16 space-y-8">
        <h1 className="text-4xl font-bold">SOC 2 Compliance Automation</h1>
        <p className="text-slate-300 max-w-3xl">
          Continuous control monitoring across cloud and SaaS, automated evidence collection, asset inventory, and auditor-ready workpapers. Integrations with AWS, GCP, Azure, GitHub, Okta, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li>Policy library and control mapping</li>
              <li>Automated risk register updates</li>
              <li>Evidence timelines and ownership</li>
              <li>Vendor and asset inventories</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="space-y-2 text-slate-300">
              <li>Startup: $199/mo</li>
              <li>Growth: $499/mo</li>
              <li>Scale: $1,499/mo</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3">
          <a href="https://ziontechgroup.com/request-quote" className="px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white">Request Demo</a>
          <a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white">Contact Sales</a>
        </div>
      </section>
    </main>
  );
};

export default SOC2ComplianceAutomation;

