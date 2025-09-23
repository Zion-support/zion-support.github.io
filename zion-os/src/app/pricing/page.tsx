"use client";

import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const TIERS: PricingTier[] = [
  { name: "Starter", price: "$0", features: ["Community support", "Basic analytics"] },
  { name: "Pro", price: "$49/mo", features: ["Priority support", "Advanced analytics", "API access"] },
  { name: "Enterprise", price: "Contact us", features: ["SLA", "SSO/SAML", "Custom integrations"] },
];

export default function PricingPage() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, idx) => (
            <button
              key={tier.name}
              onClick={() => setSelected(idx)}
              className={`text-left p-6 rounded-xl border transition-all ${
                selected === idx ? "border-blue-500 bg-zinc-800/40" : "border-zinc-700/50 bg-zinc-800/20"
              }`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">{tier.name}</h2>
                <span className="text-xl text-zinc-300">{tier.price}</span>
              </div>
              <ul className="space-y-2 text-zinc-400 text-sm">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}
  category: string;
  description: string;
  tiers: PricingTier[];
  features: string[];
  benefits: string[];
}
