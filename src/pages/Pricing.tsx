import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 99,
      features: [
        'Up to 5 team members',
        'Basic AI features',
        'Email support',
        '5GB storage',
        'Basic analytics',
        'Standard security',
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 199,
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'Enhanced security',
        'API access',
        'Custom integrations',
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 499,
      features: [
        'Unlimited team members',
        'Premium AI features',
        '24/7 phone support',
        'Unlimited storage',
        'Custom analytics',
        'Enterprise security',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: false,
    },
  ];

  const servicePricing = [
    {
      service: "Micro SaaS Development",
      starting: "$5,000",
      monthly: "$2,500",
      description: "End-to-end product development with billing, auth, and analytics"
    },
    {
      service: "AI Services",
      starting: "$3,500",
      monthly: "$1,500",
      description: "LLM applications, RAG systems, and MLOps pipelines"
    },
    {
      service: "IT Services",
      starting: "$2,500",
      monthly: "$1,200",
      description: "Cloud migration, DevOps, and security solutions"
    },
    {
      service: "Blockchain Development",
      starting: "$4,000",
      monthly: "$2,000",
      description: "Smart contracts, DeFi protocols, and Web3 applications"
    },
    {
      service: "Data Analytics",
      starting: "$2,000",
      monthly: "$800",
      description: "Business intelligence, predictive modeling, and real-time analytics"
    },
    {
      service: "Cybersecurity",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Security audits, threat monitoring, and compliance management"
    },
    {
      service: "Cloud Migration",
      starting: "$4,500",
      monthly: "$2,200",
      description: "Seamless migration to AWS, Azure, or Google Cloud"
    },
    {
      service: "DevOps & SRE",
      starting: "$3,500",
      monthly: "$1,800",
      description: "CI/CD pipelines, infrastructure automation, and monitoring"
    },
    {
      service: "Mobile Development",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Native and cross-platform mobile applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent pricing for all your technology needs. Choose the plan that fits your business.
          </p>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'hover:shadow-xl'
              } transition-all duration-200`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/90 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold">${plan.monthlyPrice}</div>
                <div className="text-white/90">/month</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service-Specific Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Starting Price</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Monthly Retainer</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {servicePricing.map((service, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{service.service}</td>
                    <td className="py-4 px-6 text-blue-600 font-semibold">{service.starting}</td>
                    <td className="py-4 px-6 text-green-600 font-semibold">{service.monthly}</td>
                    <td className="py-4 px-6 text-gray-600">{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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