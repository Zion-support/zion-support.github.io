import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with flexible options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            name="Starter"
            price="$2,500"
            period="month"
            description="Perfect for small businesses getting started with AI and automation"
            features={[
              "Basic AI services",
              "Micro SaaS development",
              "IT support",
              "Email support",
              "Monthly reports"
            ]}
            isPopular={false}
          />
          <PricingCard
            name="Professional"
            price="$7,500"
            period="month"
            description="Ideal for growing businesses that need advanced AI and automation"
            features={[
              "Advanced AI services",
              "Custom micro SaaS",
              "Full IT services",
              "Priority support",
              "Weekly reports",
              "API access"
            ]}
            isPopular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$25,000"
            period="month"
            description="Complete solution for large enterprises with complex needs"
            features={[
              "Full AI suite",
              "White-label solutions",
              "Dedicated team",
              "24/7 support",
              "Custom integrations",
              "SLA guarantee"
            ]}
            isPopular={false}
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your specific needs and get a custom quote.
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
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
