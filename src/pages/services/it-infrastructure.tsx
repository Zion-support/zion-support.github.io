import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Shield, 
  Zap, 
  Monitor,
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Globe
} from 'lucide-react';

const ITInfrastructure = () => {
  const features = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server infrastructure design, deployment, and ongoing management across physical and virtual environments.'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and optimization with advanced security and monitoring capabilities.'
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'High-performance database design, optimization, and management for mission-critical applications and data.'
    },
    {
      icon: Shield,
      title: 'Security Infrastructure',
      description: 'Multi-layered security architecture including firewalls, intrusion detection, and advanced threat protection.'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Alerting',
      description: '24/7 infrastructure monitoring with intelligent alerting and automated response systems.'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud infrastructure for optimal performance and cost efficiency.'
    }
  ];

  const benefits = [
    'Improve system uptime to 99.99%',
    'Reduce infrastructure costs by 30%',
    'Enhance security and compliance',
    'Scale infrastructure automatically',
    'Enable remote management capabilities',
    'Optimize performance and reliability'
  ];

  const services = [
    {
      title: 'Infrastructure Assessment',
      description: 'Comprehensive evaluation of current infrastructure with detailed recommendations for improvement and optimization.'
    },
    {
      title: 'Infrastructure Design',
      description: 'Custom infrastructure architecture designed for your specific business needs and growth requirements.'
    },
    {
      title: 'Implementation & Migration',
      description: 'Seamless implementation of new infrastructure with minimal downtime and maximum efficiency.'
    },
    {
      title: 'Ongoing Management',
      description: '24/7 monitoring, maintenance, and optimization to ensure peak performance and reliability.'
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
              <Server className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Enterprise Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IT Infrastructure Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build a robust, scalable, and secure IT foundation that supports your business growth and digital transformation initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Infrastructure Assessment
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
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team delivers enterprise-grade infrastructure solutions that provide the foundation 
              for your digital success.
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
              Why Choose Our Infrastructure Services?
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

      {/* Technology Stack Section */}
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
              We partner with leading technology vendors to deliver best-in-class infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Cisco', icon: Network },
              { name: 'VMware', icon: Server },
              { name: 'Microsoft', icon: Server },
              { name: 'Dell EMC', icon: Server },
              { name: 'HP Enterprise', icon: Server },
              { name: 'Juniper', icon: Network },
              { name: 'Oracle', icon: Database },
              { name: 'IBM', icon: Server }
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
              Ready to Build Your Infrastructure Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust us to build and manage their critical IT infrastructure.
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

export default ITInfrastructure;