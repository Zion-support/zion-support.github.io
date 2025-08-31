import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services & Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of technology solutions designed to transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-zion-slate rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">$999<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic website development
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile responsive design
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic SEO optimization
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
              </ul>
              <button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl p-8 shadow-2xl transform scale-105"
            >
              <div className="bg-white text-zion-cyan px-3 py-1 rounded-full text-sm font-semibold w-fit mb-4">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$2,999<span className="text-lg text-zion-cyan">/month</span></div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Custom web applications
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Monthly maintenance
                </li>
              </ul>
              <button className="w-full bg-white text-zion-cyan hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-zion-slate rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">Custom<span className="text-lg text-gray-500">/quote</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Professional
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  AI & Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 dedicated support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
