import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Wrench, Brain, Target, CheckCircle, Clock, TrendingUp, AlertTriangle, Gauge, Database, Shield, Zap, Users, Settings, BarChart3, Activity } from 'lucide-react';

const AIPredictiveMaintenance: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms predict equipment failures'
    },
    {
      icon: Gauge,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of equipment performance'
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Proactive alerts before equipment failure'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Data-driven insights for optimization'
    }
  ];

  const applications = [
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance for production equipment',
      icon: '🏭'
    },
    {
      title: 'Energy & Utilities',
      description: 'Monitor power plants and distribution systems',
      icon: '⚡'
    },
    {
      title: 'Transportation',
      description: 'Fleet maintenance and vehicle optimization',
      icon: '🚚'
    },
    {
      title: 'Healthcare',
      description: 'Medical equipment maintenance and reliability',
      icon: '🏥'
    }
  ];

  const benefits = [
    'Reduce unplanned downtime by up to 75%',
    'Extend equipment lifespan and reliability',
    'Lower maintenance costs and labor requirements',
    'Improve safety and compliance standards',
    'Optimize spare parts inventory management',
    'Increase overall operational efficiency'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Predictive Maintenance Services - Zion Tech Group"
        description="Transform your maintenance operations with AI-powered predictive maintenance. Prevent equipment failures and optimize performance with intelligent monitoring."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 mb-6">
              <Wrench className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">AI Predictive Maintenance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Predictive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-400">
                Maintenance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your maintenance operations with AI-powered predictive maintenance. Prevent equipment 
              failures, reduce downtime, and optimize performance with intelligent monitoring and analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Get Started
              </button>
              <button className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Predictive Maintenance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Intelligent monitoring and predictive analytics for optimal performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-200 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform maintenance across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{application.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                    <p className="text-gray-300">{application.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Predictive Maintenance?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your maintenance strategy with intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your maintenance operations? Our AI predictive maintenance experts can help you 
                implement intelligent monitoring systems that prevent failures and optimize performance.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Contact Maintenance Experts
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for Predictive Maintenance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your maintenance strategy with AI-powered intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Start Predictive Journey
              </button>
              <button className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPredictiveMaintenance;