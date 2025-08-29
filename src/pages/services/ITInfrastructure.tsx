import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Server, Network, Shield, Database, Cloud, Cpu, Users, CheckCircle, ArrowRight, Settings, Monitor, HardDrive, Wifi, Lock, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function ITInfrastructure() {
  const features = [
    {
      icon: Server,
      title: 'Enterprise Servers',
      description: 'High-performance server solutions with 99.9% uptime guarantee',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Robust networking solutions with advanced security and monitoring',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Scalable storage solutions with automated backup and recovery',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance frameworks',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud',
      description: 'Seamless integration between on-premises and cloud infrastructure',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring and maintenance with real-time alerts',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const services = [
    {
      title: 'Infrastructure Assessment',
      description: 'Comprehensive evaluation of current IT infrastructure',
      price: 'From $5,000',
      features: ['Network audit', 'Security assessment', 'Performance analysis', 'Recommendations report']
    },
    {
      title: 'Infrastructure Design',
      description: 'Custom infrastructure architecture and planning',
      price: 'From $15,000',
      features: ['Architecture design', 'Technology selection', 'Scalability planning', 'Implementation roadmap']
    },
    {
      title: 'Infrastructure Implementation',
      description: 'Complete infrastructure deployment and configuration',
      price: 'From $25,000',
      features: ['Hardware setup', 'Software configuration', 'Testing & validation', 'Documentation']
    },
    {
      title: 'Managed Infrastructure',
      description: 'Ongoing infrastructure management and support',
      price: 'From $3,000/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Security updates']
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Improved Performance', description: 'Optimized infrastructure for maximum efficiency' },
    { icon: Shield, title: 'Enhanced Security', description: 'Multi-layered security protection' },
    { icon: BarChart3, title: 'Cost Optimization', description: 'Reduced operational costs and better ROI' },
    { icon: Users, title: 'Expert Support', description: '24/7 support from certified professionals' },
    { icon: Zap, title: 'High Availability', description: '99.9% uptime with redundant systems' },
    { icon: Lock, title: 'Compliance Ready', description: 'Industry compliance and certification support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Infrastructure Services - Zion Tech Group"
        description="Enterprise IT infrastructure solutions including servers, networking, storage, and security. 24/7 monitoring and managed services."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Infrastructure
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Build a robust, scalable, and secure IT infrastructure that powers your business growth 
              and digital transformation initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Get Infrastructure Assessment
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Capabilities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive IT infrastructure solutions designed to meet the demands of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              End-to-end IT infrastructure services from assessment to ongoing management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Infrastructure Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the benefits of modern, well-designed IT infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-slate-700"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT infrastructure solutions can transform your business operations 
              and prepare you for future growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}