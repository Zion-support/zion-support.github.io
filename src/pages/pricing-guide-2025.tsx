import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingGuide2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Pricing Guide 2025
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transparent pricing for all our AI services and solutions. Choose the plan that fits your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
            <div className="text-3xl font-bold text-green-400 mb-6">$99<span className="text-lg">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Basic AI Analytics
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Email Support
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                5GB Storage
              </li>
            </ul>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Professional</h3>
            <div className="text-3xl font-bold text-blue-400 mb-6">$299<span className="text-lg">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Advanced AI Services
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Priority Support
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                50GB Storage
              </li>
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-purple-400 mb-6">$999<span className="text-lg">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Custom AI Solutions
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                24/7 Support
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Unlimited Storage
              </li>
            </ul>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Contact Sales
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            View Complete Pricing Guide
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingGuide2025;