import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Shield, Zap, Database, Globe, Cpu, Target } from 'lucide-react';

const InfrastructurePage = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server infrastructure design, deployment, and ongoing management services.'
    },
    {
      icon: Network,
      title: 'Network Design',
      description: 'Scalable network architecture with high availability, security, and performance optimization.'
    },
    {
      icon: Shield,
      title: 'Security Infrastructure',
      description: 'Multi-layered security solutions including firewalls, intrusion detection, and access control.'
    },
    {
      icon: Zap,
      title: 'High Availability',
      description: 'Redundant systems and failover solutions to ensure 99.9% uptime and business continuity.'
    },
    {
      icon: Database,
      title: 'Storage Solutions',
      description: 'Enterprise storage systems with backup, disaster recovery, and data protection.'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Multi-site connectivity solutions with load balancing and geographic redundancy.'
    }
  ];

  const benefits = [
    'Improve system reliability to 99.9%',
    'Reduce infrastructure costs by 25-40%',
    'Enhance security and compliance',
    'Scale infrastructure as needed',
    'Optimize performance and efficiency',
    'Ensure business continuity'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Infrastructure Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Build a rock-solid foundation for your business with our enterprise-grade infrastructure solutions. 
              From servers to networks, we provide reliable, scalable, and secure technology foundations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Infrastructure Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Infrastructure Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive infrastructure solutions designed for enterprise reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Infrastructure?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Our infrastructure solutions are built for enterprise reliability, providing the foundation 
                your business needs to grow and succeed.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <Target className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Infrastructure Assessment
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Get a comprehensive evaluation of your current infrastructure and optimization recommendations.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Foundation?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Create a robust, scalable infrastructure that supports your business growth and success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Schedule Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Get Infrastructure Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;