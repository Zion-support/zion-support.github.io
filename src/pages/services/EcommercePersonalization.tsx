// removed duplicate old section

<<<<<<< HEAD
import React from 'react.ts';
import { SEO           } from '@/components/SEO';
import { ShoppingCart, Sparkles, CheckCircle, BarChart3 const EcommercePersonalization: React.FC = (): JSX.Element => {
=======
import React from 'react.ts';
import { SEO            } from '@/components/SEO';
import { ShoppingCart, Sparkles, CheckCircle, BarChart3            } from 'lucide-react.ts';

const EcommercePersonalization: React.FC = (): JSX.Element => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="E‑commerce Personalization - Zion Tech Group"
        description="Realtime recommendations, bundles, and pricing nudges to maximize AOV and LTV."
        keywords="ecommerce personalization, recommendations, AOV, LTV"
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3 mb-6 text-cyan-300">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-sm font-semibold">E‑COMMERCE PERSONALIZATION</span>
        </div>
        <h1 className="text-4xl font-bold">Turn browsers into buyers with AI personalization</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Realtime product recommendations, cross‑sells, and bundles that adapt to user behavior and inventory. Built‑in experimentation and guardrails.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 font-semibold">Capabilities</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Realtime recs and bundles</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Cold‑start handling</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Price sensitivity nudges</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400"/> Merchandiser controls</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 font-semibold">Outcomes</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-300"/> +5–15% AOV</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-300"/> +3–8% conversion rate</li>
              <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-cyan-300"/> Experiment results dashboard</li>
            </ul>
            <div className="mt-4 text-sm font-semibold text-cyan-300">Pricing: $249–$1,499/month</div>;
          </div>;
        </div>;
;
        <div className="mt-10 text-sm text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>;
      </section>;
    </div>;
  );
};

export default EcommercePersonalization;

}