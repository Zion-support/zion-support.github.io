import React from 'react';

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry - ${name} Plan`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core features and 24/7 support.
        </p>
      </section>

      {/* AI Services Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI solutions with transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="AI Starter"
            price="$2,500"
            period="per project"
            description="Perfect for small businesses getting started with AI"
            features={[
              "Basic AI implementation",
              "Custom model training",
              "API integration",
              "Email support",
              "30-day warranty"
            ]}
            popular={false}
          />
          <PricingCard
            name="AI Professional"
            price="$7,500"
            period="per project"
            description="Ideal for growing businesses with complex AI needs"
            features={[
              "Advanced AI models",
              "Custom development",
              "Integration support",
              "Priority support",
              "90-day warranty",
              "Performance optimization"
            ]}
            popular={true}
          />
          <PricingCard
            name="AI Enterprise"
            price="$25,000"
            period="per project"
            description="Complete AI solution for large organizations"
            features={[
              "Custom AI development",
              "Dedicated team",
              "White-label options",
              "24/7 support",
              "1-year warranty",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Development</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete micro SaaS solutions with transparent pricing and fast delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Solo SaaS"
            price="$15,000"
            period="one-time"
            description="Perfect for individual entrepreneurs"
            features={[
              "Basic SaaS platform",
              "User authentication",
              "Payment integration",
              "Basic analytics",
              "Mobile responsive",
              "3-month support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Business SaaS"
            price="$35,000"
            period="one-time"
            description="Ideal for small to medium businesses"
            features={[
              "Advanced SaaS platform",
              "Multi-tenant architecture",
              "Advanced analytics",
              "API development",
              "Admin dashboard",
              "6-month support"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise SaaS"
            price="$75,000"
            period="one-time"
            description="Complete solution for large organizations"
            features={[
              "Custom SaaS platform",
              "White-label options",
              "Advanced security",
              "Custom integrations",
              "Dedicated support",
              "12-month support"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions with flexible pricing options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="IT Support"
            price="$2,500"
            period="per month"
            description="Basic IT support and maintenance"
            features={[
              "24/7 monitoring",
              "Basic maintenance",
              "Email support",
              "Security updates",
              "Backup management"
            ]}
            popular={false}
          />
          <PricingCard
            name="IT Management"
            price="$5,000"
            period="per month"
            description="Complete IT management solution"
            features={[
              "Full IT management",
              "Priority support",
              "Advanced security",
              "Cloud migration",
              "Performance optimization"
            ]}
            popular={true}
          />
          <PricingCard
            name="IT Enterprise"
            price="$15,000"
            period="per month"
            description="Enterprise-grade IT solutions"
            features={[
              "Dedicated IT team",
              "Custom solutions",
              "Advanced security",
              "Disaster recovery",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see what you're looking for? We offer custom solutions tailored to your specific needs.
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
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}