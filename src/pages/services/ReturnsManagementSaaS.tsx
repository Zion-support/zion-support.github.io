<<<<<<< HEAD
import React from 'react.ts';
import { SEO  } from '@/components/SEO';
import { Package, Truck, CheckCircle, DollarSign, Link as LinkIcon const ReturnsManagementSaaS: React.FC = (): JSX.Element => {
=======
import React from 'react.ts';
import { SEO   } from '@/components/SEO';
import { Package, Truck, CheckCircle, DollarSign, Link as LinkIcon   } from 'lucide-react.ts';

const ReturnsManagementSaaS: React.FC = (): JSX.Element => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="E-commerce Returns Management SaaS - Zion Tech Group"
        description="Automate returns labels, RMA approvals, tracking, refunds, and analytics. Integrates with Shopify, WooCommerce, BigCommerce, and custom stores."
        keywords="returns management, RMA, e-commerce, Shopify, automation, logistics"
        canonical="/services/returns-management"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3 mb-6 text-cyan-300">
          <Package className="h-5 w-5" />
          <span className="text-sm font-semibold">RETURNS MANAGEMENT</span>
        </div>
        <h1 className="text-4xl font-bold">Reduce returns friction and costs</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Streamline returns with branded portals, label generation, smart approvals, carrier pick-ups, refund workflows,
          exchanges, and analytics to cut costs and lift repeat purchase rate.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 font-semibold">Capabilities</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Branded self-serve returns portal</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Rules-based approvals & RMAs</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Auto label creation, QR codes</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Refunds, exchanges, store credit</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> SLA tracking & fraud controls</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 font-semibold">Integrations</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-cyan-300"/> Shopify, WooCommerce, BigCommerce, Magento</li>
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-cyan-300"/> UPS, USPS, FedEx, DHL</li>
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-cyan-300"/> ERP/WMS via REST or webhooks</li>
            </ul>
            <div className="mt-4 text-sm font-semibold text-cyan-300">Pricing: $49–$299/month typical</div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">Pricing</h3>
            <ul className="text-slate-300 space-y-1">
              <li>Starter: $49/mo up to 200 returns</li>
              <li>Growth: $149/mo up to 2,000 returns</li>
              <li>Scale: $299/mo up to 10,000 returns</li>
              <li>Enterprise: custom, SSO + SLA</li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">References</h3>
            <ul className="list-disc ml-5 text-slate-300 space-y-1">
              <li>
                Market benchmarks: <a className="text-cyan-400 hover:underline" href="https://apps.shopify.com/categories/store-management-returns-exchanges" target="_blank" rel="noreferrer">Shopify App Store (Returns)</a>
              </li>
              <li>
                Logistics APIs: <a className="text-cyan-400 hover:underline" href="https://developer.ups.com/" target="_blank" rel="noreferrer">UPS</a>, <a className="text-cyan-400 hover:underline" href="https://www.fedex.com/en-us/developer.html" target="_blank" rel="noreferrer">FedEx</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-slate-300 text-sm">
          <DollarSign className="w-4 h-4 text-cyan-300" />
          <span>ROI: reduce reverse logistics cost and increase retention via seamless exchanges.</span>
        </div>

        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">;
            Book a demo;
            <LinkIcon className="w-4 h-4" />;
          </a>;
        </div>;
      </section>;
    </div>;
  );
};

export default ReturnsManagementSaaS;

}