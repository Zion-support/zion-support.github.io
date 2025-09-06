import React from 'react';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic website setup",
        "5 pages included",
        "Mobile responsive design",
        "Basic SEO optimization",
        "3 months support",
        "SSL certificate",
        "Contact form",
        "Basic analytics"
      ],
      color: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "Advanced website setup",
        "15 pages included",
        "Mobile responsive design",
        "Advanced SEO optimization",
        "6 months support",
        "SSL certificate",
        "Contact form",
        "Advanced analytics",
        "E-commerce integration",
        "Payment processing",
        "User authentication",
        "Content management system"
      ],
      color: "from-blue-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "one-time",
      description: "For large organizations and enterprises",
      features: [
        "Custom website development",
        "Unlimited pages",
        "Mobile responsive design",
        "Advanced SEO optimization",
        "12 months support",
        "SSL certificate",
        "Contact form",
        "Advanced analytics",
        "E-commerce integration",
        "Payment processing",
        "User authentication",
        "Content management system",
        "Custom integrations",
        "API development",
        "Advanced security features",
        "Performance optimization",
        "Dedicated project manager"
      ],
      color: "from-purple-500 to-pink-600",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-6">
              We offer custom pricing for enterprise clients and specialized projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;