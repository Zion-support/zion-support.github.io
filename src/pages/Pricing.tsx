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
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-blue-400 mb-6">{plan.price}</div>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300">✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;