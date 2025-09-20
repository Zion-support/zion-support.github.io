<<<<<<< HEAD:temp_broken_pages_all/Pricing.tsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [
    {
      name: "Starter",
description: "Perfect for small businesses getting started"
      monthlyPrice: 99,
annualPrice: 79,
features: [
        "Up to 5 team members"
        "Basic AI features"
        "Email support"
        "5GB storage"
        "Basic analytics"
        "Standard security";
      ];
      color: "from-gray-500 to-gray-600",;
popular: false;
}
    {
      name: "Professional",
description: "Ideal for growing businesses"
      monthlyPrice: 299,
annualPrice: 239,
features: [
        "Up to 25 team members"
        "Advanced AI features"
        "Priority support"
        "100GB storage"
        "Advanced analytics"
        "Enhanced security"
        "API access"
        "Custom integrations"
      ]
      color: "from-blue-500 to-purple-600",
popular: true;
}
    {
      name: "Enterprise",
description: "For large organizations with complex needs"
      monthlyPrice: 799,
annualPrice: 639,
features: [
        "Unlimited team members"
        "Full AI suite"
        "24/7 dedicated support"
        "Unlimited storage"
        "Custom analytics"
        "Enterprise security"
        "Full API access"
        "Custom integrations"
        "Dedicated account manager"
        "SLA guarantee"
      ]
      color: "from-purple-500 to-pink-600",
popular: false;
}
  ];
  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Pricing</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan index) => (
              <div
key={index}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 font-semibold">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12} per year
                      </p>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
to="/contact"
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg text-center transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards PayPal and bank transfers for annual plans. Enterprise customers can also pay via invoice.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! We offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed my plan limits?</h3>
              <p className="text-gray-600">We'll notify you before you reach your limits and provide options to upgrade. We never cut off service without warning.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-gray-600">Absolutely! Our Enterprise plan includes custom features dedicated support and tailored solutions for large organizations.</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using Zion Tech to accelerate their growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Start Free Trial
            </Link>
            <Link
to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
import React from 'react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Pricing.tsx
      </div>
    </div>
  );
}