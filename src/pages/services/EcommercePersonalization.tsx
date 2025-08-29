import React from 'react';
import { SEO } from '@/components/SEO';

const EcommercePersonalization: React.FC = () => (
  <div className="min-h-screen bg-slate-900 text-white">
    <SEO title="eCommerce Personalization - Zion Tech Group" description="Recommendations, search, and promotions tailored to each shopper." />
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">eCommerce Personalization</h1>
      <p className="text-slate-300 max-w-3xl">Drive AOV and conversion with recommendations, personalized search, and promo targeting. SDKs for Shopify, WooCommerce, and custom builds.</p>
    </section>
    <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Features</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Frequently Bought Together, Similar Items</li>
          <li>Reranking with real-time signals</li>
          <li>A/B testing and holdouts</li>
          <li>Privacy-safe profiles</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Integrations</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Shopify, WooCommerce</li>
          <li>Segment, GA4, Snowflake</li>
          <li>Algolia/Typesense optional</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Pricing</h3>
        <ul className="text-slate-300 space-y-1">
          <li>Starter: $499/mo up to 100k events</li>
          <li>Growth: $1,999/mo up to 5M events</li>
          <li>Enterprise: custom, VPC deploy</li>
        </ul>
      </div>
    </section>
    <section className="container mx-auto px-4 pb-16">
      <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Schedule a walkthrough</a>
    </section>
  </div>
);

export default EcommercePersonalization;

