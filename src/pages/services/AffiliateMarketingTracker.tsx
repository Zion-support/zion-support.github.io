import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '@/components/SEO';

export default function AffiliateMarketingTracker() {

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="Affiliate Marketing Tracker - Micro SaaS"
        description="Track referrals, manage payouts, detect fraud, and optimize attribution with a turnkey Micro SaaS."
        url="/services/affiliate-marketing-tracker"
        type="service"
      />
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        <h1 className="text-3xl font-bold mb-3">Affiliate Marketing Tracker</h1>
        <p className="text-slate-300 mb-6">Multi-channel attribution, customizable commissions, fraud rules, tax forms automation, and partner portal.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 list-disc pl-6">
          <li>Attribution: last-touch, position-based, data-driven</li>
          <li>Fraud: VPN detection, velocity checks, cookie anomalies</li>
          <li>Payouts: thresholds, tax forms (W-8/W-9), multi-currency</li>
          <li>Integrations: Stripe, Plaid, Shopify, GA4, Segment</li>
        </ul>
        <div className="mt-6 text-slate-400 text-sm">Pricing: $149–$499/mo typical. Sources: <a className="text-cyan-400 underline" href="https://www.partnerstack.com/pricing" target="_blank" rel="noreferrer">PartnerStack pricing</a>, <a className="text-cyan-400 underline" href="https://tapfiliate.com/pricing/" target="_blank" rel="noreferrer">Tapfiliate pricing</a>.</div>
      </div>
    </div>
  );
}

