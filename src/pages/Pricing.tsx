import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      features: ['Basic AI Solutions', 'Email Support', 'Standard Cloud Services'],
    },
    {
      name: 'Professional',
      price: '$299',
      features: ['Advanced AI Solutions', 'Priority Support', 'Premium Cloud Services', 'Consulting'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom AI Solutions', '24/7 Support', 'Dedicated Cloud Infrastructure', 'Full Consulting'],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-blue-400 mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;