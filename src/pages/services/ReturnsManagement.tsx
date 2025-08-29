import React from 'react';
import { SEO } from '@/components/SEO';

function ReturnsManagement() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO
        title="E‑commerce Returns Management SaaS"
        description="Automate return labels, RMA approvals, and refunds with branded portals and carrier integrations."
      />
      <section className="container-responsive section-padding">
        <h1 className="heading-responsive text-gradient">E‑commerce Returns Management</h1>
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">
          Reduce support workload and increase customer satisfaction with a self‑serve, branded
          returns portal that automates labels, RMAs, inspections, and refunds while syncing
          with your e‑commerce and shipping providers.
        </p>

        <div className="grid-futuristic mt-10">
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Key capabilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Branded self‑service returns portal with multilingual support</li>
              <li>Instant label generation (UPS, USPS, FedEx, DHL)</li>
              <li>Auto RMA approval rules and fraud checks</li>
              <li>Warehouse disposition workflows and QA photos</li>
              <li>Refund/exchange automation and gift‑card issuance</li>
              <li>Integrations: Shopify, Magento, WooCommerce, BigCommerce</li>
            </ul>
          </div>
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Business outcomes</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>30–60% reduction in support tickets about returns</li>
              <li>10–20% higher exchange rate vs. refunds</li>
              <li>Carrier cost optimization via smart rules</li>
              <li>Improved NPS with real‑time status updates</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            plan: 'Starter', price: '$99/mo', features: ['Up to 500 returns', '1 brand portal', '1 store integration']
          },{
            plan: 'Growth', price: '$299/mo', features: ['Up to 5,000 returns', '3 brand portals', 'All major carriers']
          },{
            plan: 'Scale', price: 'Custom', features: ['Unlimited returns', 'SLA + SSO', 'Dedicated success manager']
          }].map(({ plan, price, features }) => (
            <div key={plan} className="card-futuristic">
              <h3 className="text-lg font-semibold">{plan}</h3>
              <p className="text-2xl mt-2">{price}</p>
              <ul className="mt-4 space-y-2 text-zion-slate-light">
                {features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/request-quote" className="btn-futuristic mt-6 inline-block">Request demo</a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-zion-slate-light">
          Learn more at <a className="text-cyan-400 underline" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">ziontechgroup.com/services</a>
        </p>
      </section>
    </div>
  );
}

export default ReturnsManagement;

