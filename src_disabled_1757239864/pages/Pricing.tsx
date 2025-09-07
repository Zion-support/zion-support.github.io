import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: Starter',
      price: '$99,
      period: /month',
      description: 'Perfect for small businesses getting started,
      features: [
        Basic AI Solutions',
        'Email Support,
        5GB Storage',
        'Basic Analytics,
        Standard Security'
      ],
      popular: false
    },
    {
      name: 'Professional,
      price: $299',
      period: '/month,
      description: Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions,
        Priority Support',
        '50GB Storage,
        Advanced Analytics',
        'Enhanced Security,
        Custom Integrations',
        'Monthly Reports
      ],
      popular: true
    },
    {
      name: Enterprise',
      price: '$799,
      period: /month',
      description: 'Complete solution for large organizations,
      features: [
        Full AI Suite',
        '24/7 Dedicated Support,
        Unlimited Storage',
        'Real-time Analytics,
        Enterprise Security',
        'Custom Development,
        Dedicated Account Manager',
        'SLA Guarantee
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>
      <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16>
          <h1 className=text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto>
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className=grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? ring-2 ring-blue-500 scale-105' : '
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2>
                  <span className=bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8>
                <h3 className=text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4>{plan.description}</p>
                <div className=flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900>{plan.price}</span>
                  <span className=text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className=flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 fill=currentColor" viewBox="0 0 20 20>
                      <path fillRule=evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z clipRule=evenodd" />
                    </svg>
                    <span className="text-gray-700>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className=text-center mt-16">
          <p className="text-gray-600 mb-4>Need a custom solution?</p>
          <button className=bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
