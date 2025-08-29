import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Database,
  Cpu,
  Network,
  BarChart3,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Video,
  Eye,
  Target,
  Users,
  ArrowRight,
  Key,
  Fingerprint,
  EyeOff,
  Server,
  Globe2,
  ShieldCheck,
  Infinity,
  Rocket,
  Sparkles,
  Flask
} from 'lucide-react';

export default function QuantumComputing() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Harness the power of quantum mechanics for unprecedented computational speed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Quantum AI',
      description: 'Combine quantum computing with artificial intelligence for breakthrough insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Quantum Speed',
      description: 'Solve complex problems in seconds that would take classical computers years',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum key distribution and cryptography',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Network,
      title: 'Quantum Networks',
      description: 'Secure quantum communication networks for ultra-fast data transfer',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'Quantum Databases',
      description: 'Revolutionary database systems with quantum search algorithms',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    'Solve problems 100x faster than classical computers',
    'Breakthrough discoveries in drug development',
    'Unbreakable quantum encryption',
    'Revolutionary AI and machine learning',
    'Optimize complex logistics and supply chains',
    'Transform financial modeling and risk assessment'
  ];

  const useCases = [
    {
      title: 'Drug Discovery',
      description: 'Accelerate pharmaceutical research and molecular modeling',
      icon: Flask
    },
    {
      title: 'Financial Modeling',
      description: 'Revolutionary risk assessment and portfolio optimization',
      icon: TrendingUp
    },
    {
      title: 'Climate Research',
      description: 'Advanced climate modeling and environmental simulations',
      icon: Globe
    },
    {
      title: 'AI & Machine Learning',
      description: 'Quantum-enhanced artificial intelligence algorithms',
      icon: Brain
    }
  ];

  const quantumApplications = [
    {
      name: 'Quantum Machine Learning',
      description: 'Revolutionary AI algorithms powered by quantum computing',
      examples: ['Pattern recognition', 'Optimization', 'Neural networks']
    },
    {
      name: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      examples: ['Key distribution', 'Secure communication', 'Digital signatures']
    },
    {
      name: 'Quantum Simulation',
      description: 'Accurate modeling of complex quantum systems',
      examples: ['Chemical reactions', 'Material properties', 'Quantum physics']
    },
    {
      name: 'Quantum Optimization',
      description: 'Solve complex optimization problems efficiently',
      examples: ['Logistics', 'Scheduling', 'Resource allocation']
    }
  ];

  return (
    <>
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions with AI integration, quantum cryptography, and breakthrough computational capabilities. Transform your business with quantum technology."
        keywords="quantum computing, quantum AI, quantum cryptography, quantum machine learning, quantum optimization, quantum simulation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4" />
                Quantum Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Quantum
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Computing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of computing with our revolutionary quantum platform. 
                Harness the power of quantum mechanics for breakthrough discoveries, 
                unbreakable security, and computational capabilities beyond imagination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Explore Quantum
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Quantum Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum platform combines cutting-edge quantum technology with 
                practical applications to deliver unprecedented computational power.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:bg-slate-800/70"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transform Your Computational Capabilities
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our quantum computing platform delivers breakthrough performance in 
                  problem-solving, optimization, and simulation while opening new 
                  possibilities in AI, cryptography, and scientific research.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Infinity className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Quantum Performance
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">100x</div>
                        <div className="text-sm text-gray-400">Faster Processing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                        <div className="text-sm text-gray-400">Possibilities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                        <div className="text-sm text-gray-400">Secure</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Availability</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quantum Applications Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Quantum Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From machine learning to cryptography, our quantum platform enables 
                revolutionary applications across industries and domains.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quantumApplications.map((application, index) => (
                <motion.div
                  key={application.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {application.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {application.description}
                  </p>
                  
                  <div className="space-y-2">
                    {application.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Quantum Computing Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum platform adapts to various industries and research areas, 
                providing tailored solutions for complex computational challenges.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading research institutions and companies that are already using 
                our quantum platform to solve the world's most complex problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Quantum Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}