import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Cpu, Network, Zap, Shield, Globe, Database, Cloud, BarChart3, Lock, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function IoTEdge() {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Computing Infrastructure',
      description: 'Deploy and manage computing resources closer to data sources for reduced latency and improved performance.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time processing', 'Offline capabilities']
    },
    {
      icon: Network,
      title: 'IoT Network Management',
      description: 'Comprehensive network infrastructure for IoT devices with advanced monitoring and security.',
      benefits: ['Device connectivity', 'Network monitoring', 'Traffic optimization', 'Scalable architecture']
    },
    {
      icon: Shield,
      title: 'IoT Security Framework',
      description: 'Multi-layered security approach protecting IoT devices, networks, and data from cyber threats.',
      benefits: ['Device authentication', 'Encrypted communications', 'Threat detection', 'Compliance ready']
    },
    {
      icon: Database,
      title: 'Edge Data Processing',
      description: 'Process and analyze data at the edge to reduce cloud dependency and improve response times.',
      benefits: ['Local analytics', 'Real-time insights', 'Reduced cloud costs', 'Privacy compliance']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of production processes with edge computing.',
      icon: Cpu,
      benefits: ['Predictive maintenance', 'Quality control', 'Energy optimization', 'Safety monitoring']
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent infrastructure management for urban environments.',
      icon: Globe,
      benefits: ['Traffic management', 'Environmental monitoring', 'Public safety', 'Resource optimization']
    },
    {
      title: 'Healthcare IoT',
      description: 'Connected medical devices and patient monitoring systems.',
      icon: Users,
      benefits: ['Patient monitoring', 'Medical device management', 'Data security', 'Compliance adherence']
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management at the edge.',
      icon: BarChart3,
      benefits: ['Customer insights', 'Inventory optimization', 'Loss prevention', 'Personalized experiences']
    }
  ];

  const technologies = [
    'Edge Computing Platforms',
    'IoT Protocols (MQTT, CoAP, HTTP)',
    'Container Orchestration (Kubernetes)',
    'Edge AI/ML Frameworks',
    '5G Network Integration',
    'Blockchain for IoT',
    'Digital Twin Technology',
    'Edge Security Solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing Services - Zion Tech Group"
        description="Transform your business with cutting-edge IoT edge computing solutions. Reduce latency, improve performance, and enable real-time decision making."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge Computing
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge IoT edge computing solutions. 
              Reduce latency, improve performance, and enable real-time decision making 
              with our comprehensive edge infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Network className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Database className="w-16 h-16 text-blue-500 animate-bounce" />
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
              Edge Computing Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive IoT edge computing services deliver the infrastructure, 
              security, and intelligence you need to succeed in the connected world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how IoT edge computing is transforming industries and 
              enabling new possibilities for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver 
              robust, scalable, and secure IoT edge computing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-3">
                  <Zap className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-white font-medium">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join the edge computing revolution and unlock new possibilities 
              for your IoT initiatives with Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}