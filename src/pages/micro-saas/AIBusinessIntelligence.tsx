import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, BarChart3, Users, Zap, CheckCircle, ArrowRight, Database, PieChart, LineChart } from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms for predictive insights'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Dashboards',
      description: 'Live data visualization and monitoring capabilities'
    },
    {
      icon: BarChart3,
      title: 'Custom Reports',
      description: 'Tailored reporting solutions for your business needs'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Shared insights and collaborative decision-making tools'
    }
  ];

  const capabilities = [
    'Predictive Analytics',
    'Data Visualization',
    'Business Intelligence',
    'Performance Metrics',
    'KPI Tracking',
    'Custom Dashboards',
    'Real-time Monitoring',
    'Data Integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Data into
              <span className="text-gradient"> Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of AI to unlock actionable insights from your business data. 
              Our micro SAAS platform provides intelligent analytics, predictive modeling, and 
              real-time dashboards to drive informed decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to turn your data into actionable business intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced analytics and intelligence tools for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span className="text-white font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI to make smarter decisions. 
                Start your free trial today and see the difference intelligent analytics can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Started Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}