import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Wifi, 
  Shield, 
  Zap, 
  Monitor,
  Server,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Router,
  Activity
} from 'lucide-react';

const NetworkInfrastructure = () => {
  const features = [
    {
      icon: Network,
      title: 'Network Design & Architecture',
      description: 'Custom network infrastructure design optimized for performance, scalability, and security requirements.'
    },
    {
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'Enterprise-grade wireless networks with advanced security, roaming capabilities, and performance optimization.'
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network security including firewalls, intrusion detection, VPNs, and access control systems.'
    },
    {
      icon: Zap,
      title: 'High-Speed Connectivity',
      description: 'Fiber optic and high-speed network solutions for optimal data transfer and low latency performance.'
    },
    {
      icon: Monitor,
      title: 'Network Monitoring',
      description: '24/7 network monitoring with real-time alerts, performance analytics, and proactive issue resolution.'
    },
    {
      icon: Server,
      title: 'Data Center Networks',
      description: 'High-performance data center networking with redundancy, load balancing, and disaster recovery capabilities.'
    }
  ];

  const benefits = [
    'Improve network performance by 300%',
    'Reduce network downtime to 99.99%',
    'Enhance security and compliance',
    'Enable seamless scalability',
    'Optimize bandwidth utilization',
    'Provide remote management capabilities'
  ];

  const services = [
    {
      title: 'Network Assessment',
      description: 'Comprehensive evaluation of current network infrastructure with detailed recommendations for improvement.'
    },
    {
      title: 'Network Design',
      description: 'Custom network architecture designed for your specific business needs and growth requirements.'
    },
    {
      title: 'Implementation & Migration',
      description: 'Seamless network implementation with minimal downtime and maximum efficiency.'
    },
    {
      title: 'Ongoing Management',
      description: '24/7 network monitoring, maintenance, and optimization to ensure peak performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Network className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Network Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Network Infrastructure Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build a robust, high-performance network infrastructure that supports your business growth and 
              enables seamless digital operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Network Assessment
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Network Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team delivers enterprise-grade network infrastructure that provides the foundation 
              for reliable, secure, and high-performance connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our Network Solutions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with leading network technology vendors to deliver best-in-class infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Cisco', icon: Network },
              { name: 'Juniper', icon: Network },
              { name: 'Aruba', icon: Wifi },
              { name: 'Fortinet', icon: Shield },
              { name: 'Palo Alto', icon: Shield },
              { name: 'F5 Networks', icon: Server },
              { name: 'Arista', icon: Network },
              { name: 'Extreme', icon: Network }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Build Your Network Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust us to build and manage their critical network infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Start Building Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Free Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInfrastructure;