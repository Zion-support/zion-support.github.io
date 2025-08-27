import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Database, Cloud, Zap, Shield, Globe, Users, Target, CheckCircle, Clock, TrendingUp, Network, Server, Smartphone, Monitor } from 'lucide-react';

const IoTEdgeComputing: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data locally for faster response times'
    },
    {
      icon: Wifi,
      title: '5G Connectivity',
      description: 'High-speed, low-latency network connections'
    },
    {
      icon: Database,
      title: 'Local Storage',
      description: 'Store and manage data at the edge'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud',
      description: 'Seamless integration with cloud services'
    }
  ];

  const applications = [
    {
      title: 'Smart Cities',
      description: 'Intelligent traffic management and utilities',
      icon: '🏙️'
    },
    {
      title: 'Industrial IoT',
      description: 'Predictive maintenance and automation',
      icon: '🏭'
    },
    {
      title: 'Healthcare',
      description: 'Remote monitoring and telemedicine',
      icon: '🏥'
    },
    {
      title: 'Retail',
      description: 'Smart inventory and customer analytics',
      icon: '🛍️'
    }
  ];

  const benefits = [
    'Reduced latency and faster response times',
    'Lower bandwidth costs and network efficiency',
    'Enhanced privacy and data security',
    'Real-time decision making capabilities',
    'Scalable and flexible architecture',
    'Improved reliability and uptime'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing Services - Zion Tech Group"
        description="Transform your business with IoT edge computing solutions. Process data locally for faster insights and real-time decision making."
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-400/30 mb-6">
              <Cpu className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">IoT Edge Computing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400">
                Computing
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Bring intelligence to the edge of your network. Our IoT edge computing solutions process data locally 
              for faster insights, reduced latency, and real-time decision making capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Get Started
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
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
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful capabilities for intelligent edge processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
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
              Transform industries with edge computing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200"
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
              Why Choose Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock the power of local data processing
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
              className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to bring intelligence to the edge? Our IoT edge computing experts can help you 
                design and implement solutions that transform your business operations.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Contact Our Experts
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
              Ready for Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with intelligent edge processing and real-time insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Start Edge Journey
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoTEdgeComputing;