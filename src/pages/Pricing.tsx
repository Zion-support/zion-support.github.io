import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 5 team members",
        "Basic AI features",
        "Email support",
        "5GB storage",
        "Basic analytics",
        "Standard security"
      ],
      color: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        "Up to 25 team members",
        "Advanced AI features",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Enhanced security",
        "API access",
        "Custom integrations"
      ],
      color: "from-blue-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 799,
      annualPrice: 639,
      features: [
        "Unlimited team members",
        "Full AI suite",
        "24/7 dedicated support",
        "Unlimited storage",
        "Enterprise analytics",
        "Advanced security",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      color: "from-purple-500 to-pink-600",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Plan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-2xl ${
                plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-200 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-200 ml-2">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-300">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-200">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Enterprise Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We offer tailored enterprise solutions for organizations with unique requirements. 
              Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
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