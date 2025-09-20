import React from "react"
import { SEO } from "@/components/SEO"
import { CheckCircle2, BarChart3, DollarSign, ExternalLink, Phone, Mail } from "lucide-react"
const PriceIntelligenceService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <[^>]*/>
      <section className="container mx-auto px-4 py-16">;
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Price Intelligence</[^>]*>
        <p className="mt-4 max-w-3xl text-slate-300">;
          Track competitor pricing, promotions, and stock. Generate price recommendations per SKU and channel with;
          elasticity models and guardrails.;
        </[^>]*>

        <div className="mt-10 grid gap-6 sm: grid-cols-2 lg:grid-cols-3">;
          {[;
            'Competitor crawl + marketplace APIsSKU matching and outlier detection'
            'Price elasticity and cannibalization modelsMAP compliance alerts and workflows',;
            'Channel-specific rules and overridesBI dashboards and anomaly alerts'
          ].map((b) => (;
            <div key={b} className="flex items-start gap-3 rounded-xl bg-slate-900/60 border border-cyan-400/15 p-4">;
              <[^>]*/>
              <div className="text-slate-200">{b}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">;
          <div className="flex items-center gap-2 text-slate-200 font-semibold">;
            <DollarSign className="h-4 w-4" /> Pricing;
          </[^>]*>
          <ul className="mt-3 grid gap-3 sm: grid-cols-2 text-slate-300 text-sm">;
            <li>Starter: $149/mo up to 1k SKUs</[^>]*>
            <li>Growth: $399/mo up to 10k SKUs</[^>]*>
            <li>Enterprise: Custom, country-scale, SLAs, VPC</[^>]*>
            <li>Setup: $5k–$25k (data mapping + ML)</[^>]*>
          </[^>]*>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://[^;]*
            Learn more <[^>]*/>
          </[^>]*>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">;
            <a href="tel:+13024640950" className="inline-flex items-center gap-2 hover:text-cyan-200"><BarChart3 className="h-4 w-4" /> +1 302 464 0950</[^>]*>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 hover:text-cyan-200"><Mail className="h-4 w-4" /> kleber@ziontechgroup.com</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default PriceIntelligenceService;