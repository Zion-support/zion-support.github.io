import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Eye, 
  Cpu, 
  Network, 
  Database, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Globe,
  Server,
  Smartphone,
  Cloud,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const digitalTwinFeatures = [
  {
    icon: Box,
    title: '3D Visualization',
    description: 'High-fidelity 3D models and real-time visualization of physical assets and systems.'
  },
  {
    icon: Eye,
    title: 'Real-time Monitoring',
    description: 'Continuous monitoring and data collection from IoT sensors and connected devices.'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Analytics',
    description: 'Machine learning algorithms for predictive maintenance and performance optimization.'
  },
  {
    icon: Network,
    title: 'IoT Integration',
    description: 'Seamless integration with existing IoT infrastructure and sensor networks.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Centralized data storage and management for all digital twin information.'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Instant synchronization between physical assets and their digital representations.'
  }
];

const digitalTwinServices = [
  {
    title: 'Digital Twin Development',
    description: 'Custom digital twin solutions tailored to your specific assets and business requirements.',
    features: ['3D Modeling', 'IoT Integration', 'Data Analytics', 'Custom Dashboards']
  },
  {
    title: 'Asset Performance Management',
    description: 'Monitor and optimize asset performance through predictive analytics and real-time insights.',
    features: ['Performance Tracking', 'Predictive Maintenance', 'Efficiency Optimization', 'Cost Analysis']
  },
  {
    title: 'Simulation & Testing',
    description: 'Virtual testing and simulation capabilities for new processes and system changes.',
    features: ['Process Simulation', 'Scenario Testing', 'Risk Assessment', 'Optimization Modeling']
  },
  {
    title: 'Integration Services',
    description: 'Seamless integration with existing enterprise systems and IoT infrastructure.',
    features: ['System Integration', 'API Development', 'Data Migration', 'Custom Connectors']
  }
];

const industries = [
  { name: 'Manufacturing', icon: Box, description: 'Production line optimization and predictive maintenance' },
  { name: 'Energy', icon: Zap, description: 'Grid monitoring and renewable energy optimization' },
  { name: 'Healthcare', icon: Eye, description: 'Medical device monitoring and patient care optimization' },
  { name: 'Transportation', icon: Network, description: 'Fleet management and infrastructure monitoring' },
  { name: 'Smart Cities', icon: Globe, description: 'Urban infrastructure and utility management' },
  { name: 'Agriculture', icon: TrendingUp, description: 'Crop monitoring and precision farming' }
];

const benefits = [
  'Reduce operational costs through predictive maintenance',
  'Improve asset utilization and performance',
  'Enable remote monitoring and management',
  'Support data-driven decision making',
  'Facilitate rapid prototyping and testing',
  'Enhance safety and compliance monitoring'
];

export default function DigitalTwin() {
  return (
    <>
      <SEO 
        title="Digital Twin Solutions | Zion Tech Group"
        description="Transform your physical assets into intelligent digital twins. Real-time monitoring, predictive analytics, and AI-powered insights for optimal performance."
        canonical="https://ziontechgroup.com/services/digital-twin"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cube className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Twin</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Bridge the gap between physical and digital worlds with our advanced digital twin solutions. 
                Monitor, analyze, and optimize your assets in real-time with AI-powered insights.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </a>
                <a 
                  href="#services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Twin Capabilities
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our digital twin platform combines cutting-edge technology with industry expertise 
                to deliver comprehensive asset monitoring and optimization solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalTwinFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Twin Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                From initial development to ongoing optimization, we provide comprehensive digital twin 
                solutions that drive operational excellence and business value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {digitalTwinServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Digital twin technology delivers measurable business value through improved efficiency, 
                reduced costs, and enhanced decision-making capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Digital twin technology is transforming operations across industries, 
                providing unprecedented visibility and control over complex systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-zion-slate-light text-sm">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our proven methodology ensures successful digital twin implementation 
                with minimal disruption to your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
                <p className="text-zion-slate-light text-sm">
                  Understand your assets, processes, and business objectives
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-zion-slate-light text-sm">
                  Create digital twin architecture and data models
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Develop</h3>
                <p className="text-zion-slate-light text-sm">
                  Build and integrate digital twin components
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
                <p className="text-zion-slate-light text-sm">
                  Launch and optimize digital twin operations
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Digital Twin?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transform your physical assets into intelligent digital twins and unlock 
                new levels of operational efficiency and insight.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Your Project
                </a>
                <a 
                  href="/services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}