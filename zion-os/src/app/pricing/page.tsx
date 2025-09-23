type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
};

export default function PricingPage() {
  const tiers: PricingTier[] = [
    { name: "Starter", price: "$0", period: "/mo", description: "For evaluation", features: ["Basic features"], cta: "Get Started", ctaLink: "/auth/signup" },
    { name: "Pro", price: "$49", period: "/mo", description: "For teams", features: ["All Starter", "Advanced features"], popular: true, cta: "Start Pro", ctaLink: "/auth/signup" },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 border border-white/10 rounded-xl">
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-2xl font-semibold">{t.name}</h2>
                {t.popular && <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">Popular</span>}
              </div>
              <div className="text-3xl font-bold mb-2">{t.price}<span className="text-base font-normal opacity-70">{t.period}</span></div>
              <p className="opacity-80 mb-4">{t.description}</p>
              <ul className="list-disc list-inside opacity-80 mb-4">
                {t.features.map((f) => (<li key={f}>{f}</li>))}
              </ul>
              <a href={t.ctaLink} className="inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
