<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Eye, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Settings,
  Database,
  Network,
  Cloud,
  Brain,
  Rocket,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function DigitalTwin() {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of physical assets with live data streams and instant alerts.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions for maintenance, performance optimization, and risk assessment.'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Automated responses to system changes and immediate action recommendations.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC2 compliance and data protection measures.'
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Monitor production lines, predict equipment failures, and optimize manufacturing processes.',
      benefits: ['Reduced downtime', 'Improved efficiency', 'Cost savings']
    },
    {
      title: 'Smart Cities',
      description: 'Manage urban infrastructure, traffic systems, and public services in real-time.',
      benefits: ['Better resource management', 'Enhanced citizen services', 'Sustainable development']
    },
    {
      title: 'Healthcare',
      description: 'Track medical equipment, patient monitoring systems, and facility operations.',
      benefits: ['Improved patient care', 'Equipment optimization', 'Operational efficiency']
    },
    {
      title: 'Energy & Utilities',
      description: 'Monitor power grids, water systems, and renewable energy installations.',
      benefits: ['Grid stability', 'Resource optimization', 'Renewable integration']
    }
  ];

  const technologies = [
    {
      name: 'IoT Sensors',
      description: 'High-precision sensors for data collection from physical assets',
      icon: Cpu
    },
    {
      name: 'Edge Computing',
      description: 'Local processing for real-time decision making and reduced latency',
      icon: Database
    },
    {
      name: '5G Networks',
      description: 'Ultra-fast connectivity for seamless data transmission',
      icon: Network
    },
    {
      name: 'AI/ML Models',
      description: 'Advanced algorithms for pattern recognition and predictions',
      icon: Brain
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud platforms for data storage and processing',
      icon: Cloud
    },
    {
      name: 'Blockchain',
      description: 'Secure and transparent data management and verification',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin Services - Zion Tech Group"
        description="Transform your physical assets into intelligent digital replicas with our advanced Digital Twin technology. Real-time monitoring, predictive analytics, and automated optimization."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Digital Twin Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Twin
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your physical assets into intelligent digital replicas. Monitor, analyze, 
              and optimize your operations in real-time with cutting-edge Digital Twin technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Digital Twin */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                What is a Digital Twin?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                A Digital Twin is a virtual representation of a physical object, system, or process 
                that mirrors its real-world counterpart in real-time. It combines IoT sensors, 
                AI algorithms, and advanced analytics to provide unprecedented insights and control.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Real-time Synchronization</h3>
                    <p className="text-gray-300 text-sm">Continuous data flow between physical and digital worlds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Predictive Capabilities</h3>
                    <p className="text-gray-300 text-sm">AI-powered forecasting for maintenance and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Automated Control</h3>
                    <p className="text-gray-300 text-sm">Intelligent decision-making and automated responses</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Digital Twin Dashboard</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                      <Play className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg">
                      <Pause className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">System Status</span>
                    <span className="text-green-400">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Performance</span>
                    <span className="text-cyan-400">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Next Maintenance</span>
                    <span className="text-orange-400">3 days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Digital Twin platform provides comprehensive capabilities for monitoring, 
              analyzing, and optimizing your physical assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital Twin technology is transforming industries across the globe, 
              enabling unprecedented levels of efficiency and insight.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technologies to deliver reliable, scalable, and secure Digital Twin solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <tech.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful Digital Twin deployment and rapid value realization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate your current infrastructure and identify Digital Twin opportunities'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create a comprehensive Digital Twin architecture and implementation plan'
              },
              {
                step: '03',
                title: 'Deployment',
                description: 'Install sensors, deploy software, and establish data connections'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Fine-tune the system and implement advanced analytics and automation'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how Digital Twin technology can revolutionize your business processes, 
              improve efficiency, and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Start Your Digital Twin Journey
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

