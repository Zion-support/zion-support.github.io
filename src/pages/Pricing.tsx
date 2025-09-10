import React from 'react';
<<<<<<< HEAD
import { Check, Star } from 'lucide-react';
import SEO from '../components/SEO';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI Integration",
        "Cloud Infrastructure",
        "Email Support",
        "Monthly Reports",
        "Up to 5 Users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced AI Solutions",
        "Custom Cloud Setup",
        "Priority Support",
        "Real-time Analytics",
        "Up to 25 Users",
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
        "Custom AI Development",
        "Dedicated Infrastructure",
        "24/7 Support",
        "Advanced Security",
        "Unlimited Users",
        "Full API Access",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI and technology solutions. Choose the plan that fits your business needs."
        keywords={["pricing", "plans", "cost", "subscription", "enterprise"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/50 rounded-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6">
              We offer tailored solutions for unique business requirements. Contact us to discuss your specific needs.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
=======
import SEO from '../components/SEO';

export default function Pricing() {
  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions and services."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Pricing</h1>
            <p className="text-xl text-slate-300">Transparent pricing for our technology solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
