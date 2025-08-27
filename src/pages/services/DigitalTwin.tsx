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
      description: 'Secure and transparent data sharing and verification',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin Solutions | Zion Tech Group"
        description="Transform your physical assets into intelligent digital twins with real-time monitoring, predictive analytics, and automated optimization."
        keywords={['Digital Twin', 'IoT', 'Real-time Monitoring', 'Predictive Analytics', 'Smart Manufacturing', 'Smart Cities']}
      />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Twin
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create virtual replicas of your physical assets and systems for real-time monitoring, 
              predictive analytics, and intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Digital Twin Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital twins provide unprecedented visibility into your operations, enabling 
              data-driven decision making and proactive problem solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital twin technology is transforming industries across the globe, 
              from manufacturing to healthcare and smart cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our digital twin solutions leverage the latest technologies to deliver 
              unmatched performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
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
