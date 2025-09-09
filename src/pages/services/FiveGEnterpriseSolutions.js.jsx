import React from 'react';
import { motion } from 'framer-motion';
import { 
  Signal, 
  Wifi, 
  Globe, 
  Zap, 
  Shield, 
  Cpu, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Lock,
  RefreshCw,
  TrendingUp,
  Database
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const fiveGServices = [
  {
    icon: Signal,
    title: '5G Network Design',
    description: 'Comprehensive 5G network architecture design and planning for enterprise environments.',
    features: ['Network Planning', 'Coverage Analysis', 'Capacity Planning', 'Performance Optimization']
  },
  {
    icon: Wifi,
    title: 'Private 5G Networks',
    description: 'Dedicated 5G networks for enterprise campuses, factories, and critical operations.',
    features: ['Network Slicing', 'Edge Computing', 'Low Latency', 'High Reliability']
  },
  {
    icon: Globe,
    title: '5G Integration',
    description: 'Seamless integration of 5G technology with existing enterprise infrastructure.',
    features: ['Legacy System Integration', 'API Development', 'Data Migration', 'Testing & Validation']
  },
  {
    icon: Zap,
    title: 'Edge Computing',
    description: '5G-enabled edge computing solutions for real-time data processing and analytics.',
    features: ['Edge Infrastructure', 'Real-time Analytics', 'Data Processing', 'Performance Optimization']
  },
  {
    icon: Shield,
    title: '5G Security',
    description: 'Comprehensive security solutions for 5G networks and enterprise applications.',
    features: ['Network Security', 'Data Protection', 'Identity Management', 'Threat Detection']
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: '5G-powered IoT solutions for enterprise automation and monitoring.',
    features: ['Device Management', 'Data Collection', 'Analytics', 'Automation']
  }
];

const useCases = [
  {
    industry: 'Manufacturing',
    solutions: ['Smart Factories', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization']
  },
  {
    industry: 'Healthcare',
    solutions: ['Telemedicine', 'Remote Monitoring', 'Medical IoT', 'Emergency Response']
  },
  {
    industry: 'Transportation',
    solutions: ['Connected Vehicles', 'Traffic Management', 'Fleet Optimization', 'Smart Infrastructure']
  },
  {
    industry: 'Retail',
    solutions: ['Smart Stores', 'Inventory Management', 'Customer Analytics', 'Supply Chain']
  }
];

const benefits = [
  'Ultra-fast data transfer speeds (up to 10 Gbps)',
  'Ultra-low latency for real-time applications',
  'Massive IoT device connectivity',
  'Enhanced mobile broadband',
  'Network slicing for customized services',
  'Improved energy efficiency and coverage'
];

const technologies = [
  { name: 'Network Slicing', description: 'Virtual network partitioning for different use cases' },
  { name: 'Edge Computing', description: 'Distributed computing at network edge' },
  { name: 'Massive MIMO', description: 'Multiple input, multiple output antenna technology' },
  { name: 'Beamforming', description: 'Directed signal transmission for optimal coverage' },
  { name: 'Network Function Virtualization', description: 'Software-based network functions' },
  { name: 'Software-Defined Networking', description: 'Programmable network infrastructure' }
];

export default function FiveGEnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <SignalIcon className="h-12 w-12 text-blue-400"       />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                5G technology is transforming industries across the board, 
                enabling new capabilities and business models.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.solutions.map((solution, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {solution}
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
                5G Technology Benefits
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Experience the transformative benefits of 5G technology 
                that will revolutionize your enterprise operations.
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
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core 5G Technologies
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We leverage cutting-edge 5G technologies to deliver 
                enterprise-grade solutions and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-zion-slate-light text-sm">{tech.description}</p>
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
                Our systematic approach ensures successful 5G implementation 
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assess</h3>
                <p className="text-zion-slate-light text-sm">
                  Evaluate current infrastructure and 5G requirements
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-zion-slate-light text-sm">
                  Create comprehensive 5G network architecture
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
                <p className="text-zion-slate-light text-sm">
                  Implement 5G infrastructure and applications
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
                <p className="text-zion-slate-light text-sm">
                  Continuous monitoring and performance optimization
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
              className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for 5G Transformation?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards next-generation enterprise technology. 
                Our 5G experts are ready to guide you through your transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Your Journey
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