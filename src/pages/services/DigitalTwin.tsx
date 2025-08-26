import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  BarChart3, 
  Eye,
  Layers,
  Cloud,
  Smartphone,
  Building,
  Factory,
  Car,
  Plane,
  Ship
} from 'lucide-react';

const DigitalTwin = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Live visualization and monitoring of physical assets and systems'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with IoT sensors, SCADA systems, and enterprise data'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive maintenance and performance optimization'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security protocols for digital twin environments'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Comprehensive IoT device management and connectivity'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Instant synchronization between physical and digital worlds'
    }
  ];

  const useCases = [
    {
      icon: Building,
      title: 'Smart Buildings',
      description: 'Energy optimization, predictive maintenance, and occupant comfort'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Production optimization, quality control, and supply chain management'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Vehicle performance monitoring and predictive maintenance'
    },
    {
      icon: Plane,
      title: 'Aerospace',
      description: 'Aircraft health monitoring and operational optimization'
    },
    {
      icon: Ship,
      title: 'Maritime',
      description: 'Fleet management and vessel performance optimization'
    },
    {
      icon: Smartphone,
      title: 'Smart Cities',
      description: 'Urban infrastructure monitoring and optimization'
    }
  ];

  const technologies = [
    'IoT Sensors & Devices',
    'Real-time Data Processing',
    '3D Visualization & Modeling',
    'Machine Learning & AI',
    'Cloud Computing',
    'Edge Computing',
    '5G Networks',
    'Blockchain Security'
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Digital Twin Solutions
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Create virtual replicas of physical systems and assets for real-time monitoring, 
              predictive analytics, and intelligent decision-making across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Get Started
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Digital Twin Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our digital twin platform provides comprehensive monitoring, analysis, and optimization 
              capabilities for complex systems and infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Digital twin technology is transforming industries by providing unprecedented 
              visibility and control over complex systems and processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our digital twin platform leverages the latest technologies to deliver 
              unmatched performance, reliability, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{tech}</p>
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover how digital twin technology can revolutionize your business 
              with real-time insights and predictive capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Schedule Demo
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwin;