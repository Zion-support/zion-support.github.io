import React from 'react';
import { Link } from 'react-router-dom';

export const EnhancedPricingComparison = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enhanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competitive pricing for our comprehensive technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Basic AI Analytics
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Cloud Storage (10GB)
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Email Support
              </li>
            </ul>
            <Link to="/pricing" className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Advanced AI Analytics
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Cloud Storage (100GB)
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Priority Support
              </li>
            </ul>
            <Link to="/pricing" className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Full AI Suite
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Unlimited Storage
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                24/7 Support
              </li>
            </ul>
            <Link to="/pricing" className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPricingComparison;