export interface PricingTier {
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

export interface PricingPlan {
  category: string;
  description: string;
  tiers: PricingTier[];
  features: string[];
  benefits: string[];
}

export default function PricingPage() {
  const plans: PricingPlan[] = [];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="text-white/70">Our pricing plans will be published here soon.</p>
    </div>
  );
}
