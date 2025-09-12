const features = [];
const solutions = [];


export default function PricingPage() {
  const _plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI Integration",
        "Email Support",
        "Standard Security",
        "Monthly Reports",
        "5 User Accounts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI Solutions",
        "Priority Support",
        "Enhanced Security",
        "Real-time Analytics",
        "25 User Accounts",
        "API Access",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Full AI Suite",
        "24/7 Dedicated Support",
        "Enterprise Security",
        "Custom Analytics",
        "Unlimited Users",
        "Full API Access",
        "Custom Development",
        "On-site Training",
        "SLA Guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 p-8 rounded-lg ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-5 h-5 bg-cyan-500 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Is there a free trial available?
              </h3>
              <p className="text-gray-300">
                We offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                What support options are available?
              </h3>
              <p className="text-gray-300">
                Support options vary by plan. Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Do you offer custom solutions?
              </h3>
              <p className="text-gray-300">
                Yes, our Enterprise plan includes custom development. We can also create completely custom solutions for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose a plan that fits your needs and start transforming your business today.
          </p>
          <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}