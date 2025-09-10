import React from 'react';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Explore our competitive pricing plans for AI, IT, and technology services."
        keywords="pricing, plans, ai services, it services, technology pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Pricing Plans
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our cutting-edge AI and technology services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    AI Content Generation
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Basic IT Support
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Email Support
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400 hover:border-purple-300 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$299<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Everything in Basic
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Advanced AI Services
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Priority Support
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Custom Integrations
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">Custom<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Everything in Pro
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Dedicated Support
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Custom Development
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    SLA Guarantee
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;