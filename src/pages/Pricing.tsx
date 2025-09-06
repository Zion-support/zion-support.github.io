import React from 'react';
import { Link } from 'react-router-dom';

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
        "SSL certificate"
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
        "Everything in Starter",
        "Up to 15 pages",
        "Advanced SEO optimization",
        "E-commerce integration",
        "6 months support",
        "Performance optimization",
        "Analytics setup"
      ],
      color: "from-blue-500 to-blue-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "one-time",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited pages",
        "Custom development",
        "Advanced integrations",
        "12 months support",
        "Priority support",
        "Custom training",
        "Dedicated project manager"
      ],
      color: "from-purple-500 to-purple-600",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with varying levels of support and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold text-center block hover:opacity-90 transition-opacity`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We offer tailored solutions for unique business requirements. Contact us to discuss your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;