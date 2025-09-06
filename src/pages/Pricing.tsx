import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core services with transparent pricing.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard
          name="Starter"
          price="$5,000"
          description="Perfect for small projects and MVPs"
          features={[
            "Basic AI integration",
            "Simple micro SaaS setup",
            "Basic IT support",
            "Email support",
            "1 month warranty"
          ]}
        />
        <PricingCard
          name="Professional"
          price="$15,000"
          description="Ideal for growing businesses"
          features={[
            "Advanced AI solutions",
            "Full micro SaaS development",
            "Comprehensive IT services",
            "Priority support",
            "3 months warranty",
            "Monthly check-ins"
          ]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          description="Tailored solutions for large organizations"
          features={[
            "Custom AI development",
            "Enterprise micro SaaS",
            "Full IT infrastructure",
            "24/7 dedicated support",
            "1 year warranty",
            "Dedicated account manager",
            "Custom integrations"
          ]}
        />
      </div>
      
      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Every business is unique. Contact us for a personalized quote that fits your specific requirements and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
};

function PricingCard({
  name,
  price,
  description,
  features,
  popular = false
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{description}</div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"
        className={`mt-6 w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

export default PricingPage;