import React from 'react';

const Pricing: React.FC = () => {
  const servicePricing = [
    {
      service: "Micro SaaS Development",
      starting: "$5,000",
      monthly: "$2,500",
      description: "End-to-end product development with billing, auth, and analytics"
    },
    {
      service: "AI Services",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Custom AI solutions including chatbots, automation, and analytics"
    },
    {
      service: "IT Services",
      starting: "$2,000",
      monthly: "$1,000",
      description: "Comprehensive IT support, infrastructure management, and consulting"
    },
    {
      service: "Blockchain Solutions",
      starting: "$10,000",
      monthly: "$5,000",
      description: "Smart contracts, DeFi applications, and blockchain integration"
    },
    {
      service: "Data Analytics",
      starting: "$4,000",
      monthly: "$2,000",
      description: "Business intelligence, data visualization, and predictive analytics"
    },
    {
      service: "Cybersecurity",
      starting: "$3,500",
      monthly: "$1,750",
      description: "Security audits, penetration testing, and compliance management"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$2,000",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI integration",
        "Standard IT support",
        "Monthly reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI solutions",
        "Priority IT support",
        "Weekly reporting",
        "Phone & email support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for large organizations",
      features: [
        "Full AI transformation",
        "24/7 dedicated support",
        "Real-time monitoring",
        "Dedicated account manager",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-300">/{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Service Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Service Pricing</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4">Service</th>
                    <th className="text-left py-4 px-4">Starting Price</th>
                    <th className="text-left py-4 px-4">Monthly Support</th>
                    <th className="text-left py-4 px-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePricing.map((service, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-4 px-4 font-semibold">{service.service}</td>
                      <td className="py-4 px-4 text-green-400 font-semibold">{service.starting}</td>
                      <td className="py-4 px-4 text-blue-400 font-semibold">{service.monthly}</td>
                      <td className="py-4 px-4 text-gray-300">{service.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us for a custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Sales
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;