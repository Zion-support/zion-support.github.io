import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Database, Shield, Zap, Globe, Server, BarChart3, Settings, Monitor, Activity, Network, Smartphone, Tablet, Laptop, Cloud, Lock, RefreshCw, TrendingUp, AlertTriangle } from 'lucide-react';

export default function IoTEdge() {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Process data locally for faster response times and reduced latency',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wifi,
      title: '5G & IoT Networks',
      description: 'High-speed connectivity for real-time data transmission and device management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'End-to-end encryption and secure device authentication protocols',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Real-time insights and predictive analytics at the edge',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Monitor,
      title: 'Remote Monitoring',
      description: '24/7 device monitoring and proactive maintenance alerts',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Low Power Solutions',
      description: 'Energy-efficient IoT devices for extended battery life',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'IoT Strategy & Consulting',
      description: 'Comprehensive IoT roadmap and implementation strategy',
      price: 'From $3,000',
      features: ['Technology assessment', 'Architecture design', 'Implementation plan', 'ROI analysis']
    },
    {
      title: 'Edge Device Development',
      description: 'Custom IoT device design and manufacturing',
      price: 'From $8,000',
      features: ['Hardware design', 'Firmware development', 'Prototyping', 'Testing & validation']
    },
    {
      title: 'IoT Platform Development',
      description: 'Scalable IoT platform for device management and data collection',
      price: 'From $15,000',
      features: ['Cloud platform', 'Device management', 'Data visualization', 'API development']
    },
    {
      title: 'IoT Integration Services',
      description: 'Seamless integration with existing systems and workflows',
      price: 'From $5,000',
      features: ['System integration', 'API development', 'Data migration', 'User training']
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Settings, description: 'Smart factories and predictive maintenance' },
    { name: 'Healthcare', icon: Activity, description: 'Remote patient monitoring and medical devices' },
    { name: 'Agriculture', icon: Globe, description: 'Precision farming and crop monitoring' },
    { name: 'Smart Cities', icon: Network, description: 'Traffic management and environmental monitoring' },
    { name: 'Retail', icon: Smartphone, description: 'Inventory tracking and customer analytics' },
    { name: 'Energy', icon: Zap, description: 'Smart grid and renewable energy monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Services - Zion Tech Group"
        description="Transform your business with cutting-edge IoT Edge solutions. From smart devices to real-time analytics, we help you harness the power of connected technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Connect, monitor, and optimize your business with intelligent IoT solutions. 
              From edge computing to cloud analytics, we bring the future of technology to your doorstep.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                Learn More
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
              Why Choose Our IoT Edge Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge IoT technology with proven edge computing solutions 
              to deliver intelligent, scalable, and secure connected systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our IoT Edge Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs and industry requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-emerald-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our IoT Edge solutions are designed to meet the unique challenges 
              of various industries and business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <industry.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IoT Edge services can transform your operations, 
              improve efficiency, and create new opportunities for growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
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