import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Globe, Cpu, Network, CheckCircle, ArrowRight, Brain, Shield, Database, Clock, Target } from 'lucide-react';

export default function EdgeComputingPlatform() {
  const features = [
    {
      icon: Server,
      title: 'Ultra-Low Latency Processing',
      description: 'Process data closer to the source for real-time decision making and instant response.'
    },
    {
      icon: Zap,
      title: 'High Performance Computing',
      description: 'Optimized edge nodes deliver exceptional performance for demanding workloads.'
    },
    {
      icon: Globe,
      title: 'Global Edge Network',
      description: 'Distributed edge infrastructure spanning multiple regions for optimal coverage.'
    },
    {
      icon: Cpu,
      title: 'Intelligent Edge AI',
      description: 'AI models deployed at the edge for faster inference and reduced bandwidth usage.'
    },
    {
      icon: Network,
      title: '5G & IoT Integration',
      description: 'Seamless integration with 5G networks and IoT devices for enhanced connectivity.'
    },
    {
      icon: Database,
      title: 'Edge Data Management',
      description: 'Efficient data processing and storage at the edge with intelligent caching.'
    }
  ];

  const benefits = [
    'Reduce latency by 90%',
    'Cut bandwidth costs by 70%',
    'Improve response times to milliseconds',
    'Enable real-time AI applications',
    'Scale globally with edge nodes',
    'Enhanced security and privacy'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Server className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Edge Computing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Edge Computing Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Bring computing power closer to your data with our ultra-low latency edge computing platform for real-time applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Next-Generation Edge Computing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our edge platform delivers ultra-low latency processing, intelligent AI deployment, and global scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Edge Computing?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your applications with ultra-low latency, reduced bandwidth costs, and real-time processing capabilities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                    <div className="text-slate-300 text-sm">Latency Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                    <div className="text-slate-300 text-sm">Bandwidth Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">&lt;10ms</div>
                    <div className="text-slate-300 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">Global</div>
                    <div className="text-slate-300 text-sm">Edge Network</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Edge?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading companies that leverage edge computing for real-time applications and superior user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}