import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Database, Zap, Globe, Shield, BarChart3, Target } from 'lucide-react';

const IoTEdgePage = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Deploy computing resources closer to data sources for faster processing and reduced latency.'
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Secure and reliable connectivity solutions for IoT devices across various protocols and networks.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Intelligent data collection, processing, and storage at the edge for real-time insights.'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant data processing and analytics for immediate decision-making and automation.'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Scalable IoT solutions that work seamlessly across distributed locations worldwide.'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'End-to-end security for IoT devices and edge computing infrastructure.'
    }
  ];

  const useCases = [
    'Smart Manufacturing',
    'Connected Healthcare',
    'Smart Cities',
    'Retail Analytics',
    'Energy Management',
    'Transportation & Logistics',
    'Agriculture Technology',
    'Building Automation'
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
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              IoT & Edge Computing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with intelligent IoT solutions and edge computing. Process data closer to the source, 
              reduce latency, and unlock real-time insights for smarter decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                IoT Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Edge Computing Demo
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
              Comprehensive IoT & Edge Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From device connectivity to edge analytics, we provide end-to-end IoT and edge computing solutions.
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Our IoT and edge computing solutions are transforming industries across the globe, 
                enabling new levels of efficiency and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    IoT Strategy
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Get a comprehensive IoT assessment and strategy roadmap for your business.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get IoT Strategy
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose IoT & Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your operations with real-time insights and intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-zion-slate-light">Process data instantly at the edge for immediate insights and actions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Scalability</h3>
              <p className="text-zion-slate-light">Deploy IoT solutions across multiple locations with centralized management.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-zion-slate-light">Secure data processing and transmission with enterprise-grade security.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Discover how IoT and edge computing can revolutionize your business operations and create new opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Schedule IoT Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                View Edge Computing Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoTEdgePage;