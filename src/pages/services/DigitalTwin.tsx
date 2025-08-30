import React from 'react';
import { SEO   } from '../../components/SEO';
import { motion   } from 'framer-motion';
import { Cpu, Database, Zap, Shield, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Eye, Monitor, Target, Layers, Box, Gauge, BarChart, Building   } from 'lucide-react';

export default function DigitalTwin(...args: any[]): any {
  const features = [
    {
      icon: Cpu,
      title: 'Real-Time Simulation',
      description: 'Live digital representation that mirrors physical systems in real-time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless connection with IoT sensors, SCADA systems, and enterprise data',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Predictive Analytics',
      description: 'AI-powered insights for proactive maintenance and optimization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Monitor,
      title: '3D Visualization',
      description: 'Immersive 3D models with real-time data overlay and interaction',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Continuous improvement through simulation and scenario testing',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Layers,
      title: 'Multi-Layer Architecture',
      description: 'Scalable platform supporting multiple digital twin instances',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'Digital Twin Assessment',
      description: 'Evaluation of current systems and digital twin readiness',
      price: 'From $8,000',
      features: ['System analysis', 'Data mapping', 'ROI assessment', 'Implementation plan']
    },
    {
      title: 'Platform Development',
      description: 'Custom digital twin platform for your specific use case',
      price: 'From $25,000',
      features: ['Custom development', 'Data integration', '3D modeling', 'User interface']
    },
    {
      title: 'IoT Integration',
      description: 'Connect sensors and devices to your digital twin platform',
      price: 'From $15,000',
      features: ['Sensor deployment', 'Data collection', 'Real-time streaming', 'Edge computing']
    },
    {
      title: 'Analytics & AI',
      description: 'Advanced analytics and machine learning capabilities',
      price: 'From $20,000',
      features: ['Predictive models', 'Anomaly detection', 'Performance optimization', 'Insights dashboard']
    }
  ];

  const useCases = [
         { name: 'Manufacturing', icon: Box, description: 'Production line optimization and predictive maintenance' },
    { name: 'Smart Cities', icon: Globe, description: 'Urban infrastructure monitoring and planning' },
    { name: 'Energy', icon: Zap, description: 'Power grid optimization and renewable energy management' },
    { name: 'Healthcare', icon: Activity, description: 'Medical device monitoring and patient care optimization' },
    { name: 'Transportation', icon: Network, description: 'Fleet management and traffic optimization' },
    { name: 'Buildings', icon: Building, description: 'Facility management and energy efficiency' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin Solutions - Zion Tech Group"
        description="Transform your physical assets into intelligent digital twins. Real-time monitoring, predictive analytics, and optimization for modern enterprises."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Twin
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Bridge the gap between physical and digital worlds with intelligent digital twins 
              that provide real-time insights, predictive analytics, and optimization capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                View Demo
              </motion.button>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Twin Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our digital twin platform provides comprehensive capabilities to create, 
              manage, and optimize digital representations of your physical assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)   => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Digital twins are transforming industries across the globe, providing 
              unprecedented insights and optimization opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anygrid-cols-3 lg:grid-cols-6 gap-8">
            {useCases.map((useCase, index)   => (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.name}</h3>
                <p className="text-sm text-slate-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Digital Twin Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              End-to-end digital twin solutions designed to meet your specific 
              requirements and business objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index)   => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how digital twin technology can transform your operations, 
              improve efficiency, and provide competitive advantages in your industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}