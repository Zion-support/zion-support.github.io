import React from 'react';
import { SEO } from '@/components/SEO';

const AffiliateMarketingTracker: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO 
        title="Affiliate Marketing Tracker - Zion Tech Group"
        description="Micro-SaaS to manage affiliates, track conversions, payouts, and fraud detection."
      />
      <section className="container mx-auto px-4 py-16 space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Affiliate Marketing Tracker</h1>
          <p className="text-slate-300 max-w-3xl">
            Deploy a secure affiliate tracking platform with conversion pixels, UTM attribution, coupon code tracking, anti-fraud, and automated payouts.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Capabilities</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li>Multi-channel attribution and LTV</li>
              <li>Webhook/API integrations (Stripe, Shopify)</li>
              <li>Automated tiered commissions and payouts</li>
              <li>Fraud heuristics and anomaly alerts</li>
              <li>White-label affiliate portal</li>
            </ul>
          </article>

          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Typical Pricing</h2>
            <ul className="space-y-2 text-slate-300">
              <li>Starter: $49/mo – up to 100 affiliates</li>
              <li>Growth: $149/mo – up to 1,000 affiliates</li>
              <li>Pro: $399/mo – unlimited affiliates, SSO</li>
            </ul>
          </article>

          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Helpful Links</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li><a className="text-cyan-400 hover:underline" href="https://ziontechgroup.com/contact">Contact</a></li>
              <li><a className="text-cyan-400 hover:underline" href="https://ziontechgroup.com/request-quote">Request Quote</a></li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AffiliateMarketingTracker;

