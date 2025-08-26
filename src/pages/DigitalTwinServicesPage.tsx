import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Eye, 
  Zap, 
  Brain, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Shield,
  Cloud,
  BarChart3,
  Network
} from 'lucide-react';

const DigitalTwinServicesPage = () => {
  const services = [
    {
      title: 'Digital Twin Development',
      description: 'Create comprehensive digital replicas of physical systems, processes, and environments.',
      icon: Cpu,
      features: ['3D Modeling', 'Real-time Simulation', 'Physics Engine Integration', 'Custom Algorithms']
    },
    {
      title: 'IoT Integration',
      description: 'Connect physical devices and sensors to create real-time data flows for your digital twin.',
      icon: Network,
      features: ['Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing']
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage AI and machine learning to predict system behavior and optimize performance.',
      icon: Brain,
      features: ['Machine Learning Models', 'Predictive Maintenance', 'Performance Optimization', 'Risk Assessment']
    },
    {
      title: 'Visualization & Monitoring',
      description: 'Interactive dashboards and 3D visualizations for real-time monitoring and analysis.',
      icon: Eye,
      features: ['3D Visualization', 'Real-time Dashboards', 'Interactive Controls', 'Mobile Access']
    }
  ];

  const benefits = [
    {
      title: 'Predictive Maintenance',
      description: 'Identify potential issues before they occur, reducing downtime and maintenance costs.',
      icon: Target
    },
    {
      title: 'Performance Optimization',
      description: 'Continuously monitor and optimize system performance in real-time.',
      icon: Zap
    },
    {
      title: 'Risk Mitigation',
      description: 'Simulate scenarios and identify potential risks before they impact operations.',
      icon: Shield
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through better resource allocation and predictive insights.',
      icon: Star
    }
  ];

  const applications = [
    'Manufacturing & Industrial',
    'Smart Cities & Infrastructure',
    'Healthcare & Medical Devices',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Buildings & Facilities',
    'Agriculture & Environmental',
    'Aerospace & Defense'
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
              <Eye className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Digital Twin Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Twin
              <span className="text-gradient"> Services</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Create virtual replicas of your physical systems and unlock unprecedented insights 
              through real-time monitoring, predictive analytics, and simulation capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Digital Twin Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              End-to-end digital twin solutions that transform how you monitor, analyze, 
              and optimize your physical systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
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
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Digital Twins?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Digital twins provide unprecedented visibility and control over your physical systems, 
              enabling data-driven decision making and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
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
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Digital twins are transforming industries across the globe, providing 
              unprecedented insights and optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{application}</p>
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
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your physical systems with the power of digital twins. Our experts 
              will guide you through every step of the implementation process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwinServicesPage;