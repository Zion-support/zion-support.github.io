<<<<<<< HEAD

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with flexible options.
=======
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${!isAnnual ? 'text-white font-semibold' : 'text-blue-200'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-white' : 'bg-blue-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-blue-600 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white font-semibold' : 'text-blue-200'}`}>
              Annual <span className="text-green-300">(Save 20%)</span>
            </span>
          </div>
        </div>
      </div>
      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 font-semibold">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12} per year
                      </p>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg text-center transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! We offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed my plan limits?</h3>
              <p className="text-gray-600">We'll notify you before you reach your limits and provide options to upgrade. We never cut off service without warning.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-gray-600">Absolutely! Our Enterprise plan includes custom features, dedicated support, and tailored solutions for large organizations.</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using Zion Tech to accelerate their growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
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
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
  );
}