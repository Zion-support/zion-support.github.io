import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      features: [
        'Basic AI consultation',
        'Email support',
        '5GB cloud storage',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$199',
      period: '/month',
      features: [
        'All Basic features',
        'Priority support',
        '50GB cloud storage',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: [
        'All Pro features',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom AI models',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-500 hover:to-blue-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h2>
            <p className="text-gray-300 mb-6">
              Contact us to discuss your specific requirements and get a tailored quote.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;