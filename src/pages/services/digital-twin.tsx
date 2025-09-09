import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Eye, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Brain,
  BarChart3,
  Users,
  Cpu,
  Shield,
  Database,
  Network,
  Monitor
} from 'lucide-react';

const DigitalTwinServicesPage = () => {
  const services = [
    {
      title: 'Digital Twin Development',
      description: 'Create virtual replicas of physical assets, processes, and systems for real-time monitoring and optimization.',
      features: ['3D Modeling', 'Real-time Data Integration', 'Simulation Engine', 'Predictive Analytics'],
      icon: Globe
    },
    {
      title: 'IoT Integration',
      description: 'Connect physical assets with sensors and IoT devices to feed real-time data to digital twins.',
      features: ['Sensor Networks', 'Data Collection', 'Edge Computing', 'Real-time Streaming'],
      icon: Cpu
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage AI and machine learning to predict maintenance needs and optimize performance.',
      features: ['Machine Learning Models', 'Predictive Maintenance', 'Performance Optimization', 'Risk Assessment'],
      icon: Brain
    },
    {
      title: 'Visualization & Monitoring',
      description: 'Interactive dashboards and 3D visualizations for comprehensive monitoring and control.',
      features: ['3D Visualization', 'Real-time Dashboards', 'Mobile Access', 'Alert Systems'],
      icon: Monitor
    }
  ];

  const benefits = [
    'Real-time monitoring and control',
    'Predictive maintenance optimization',
    'Reduced operational costs',
    'Enhanced decision-making capabilities',
    'Improved safety and compliance',
    'Increased operational efficiency'
  ];

  const applications = [
    'Manufacturing',
    'Smart Cities',
    'Healthcare',
    'Energy & Utilities',
    'Transportation',
    'Construction'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Digital Twin Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bridge the Physical and
              <span className="text-gradient"> Digital Worlds</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Create virtual replicas of your physical assets and systems to enable real-time monitoring, 
              predictive analytics, and intelligent optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Digital Twin Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                View Digital Twin Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Digital Twin Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From development to deployment, we provide end-to-end digital twin solutions 
              that transform how you monitor and optimize your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Digital Twin Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of asset management and operational optimization with our digital twin solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Twin Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how digital twins can transform various industries and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-white">{application}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Digital Twin?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your operations with intelligent digital twins that provide real-time insights 
              and predictive capabilities. Our experts are ready to help you build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Digital Twin Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Download Digital Twin Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwinServicesPage;