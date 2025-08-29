import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Lock, 
  Database, 
  Globe, 
  FileText,
  MessageCircle,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  BarChart3,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Cpu,
  Network,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  CpuIcon,
  CircuitBoard,
  Microchip,
  Binary,
  Calculator,
  TestTube,
  Beaker,
  Search,
  BookOpen,
  Heart,
  Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const QuantumComputing: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Advanced quantum algorithms for complex computational problems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Quantum machine learning and neural network optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CircuitBoard,
      title: 'Quantum Circuits',
      description: 'Custom quantum circuit design and optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TestTube,
      title: 'Research & Development',
      description: 'Cutting-edge quantum research and experimental platforms',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CpuIcon,
      title: 'Hybrid Systems',
      description: 'Quantum-classical hybrid computing solutions',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Quantum Simulation',
      description: 'Complex system modeling and simulation capabilities',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Solve problems 1000x faster than classical computers',
    'Breakthrough in cryptography and security',
    'Revolutionary drug discovery and materials science',
    'Advanced optimization for logistics and finance',
    'Next-generation AI and machine learning',
    'Climate modeling and environmental research'
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization and risk assessment',
      icon: DollarSign,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Healthcare',
      description: 'Drug discovery and protein folding',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Logistics',
      description: 'Supply chain optimization and routing',
      icon: Network,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant encryption and security',
      icon: Lock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions for complex problem solving, AI optimization, and breakthrough research applications."
        keywords="quantum computing, quantum algorithms, quantum AI, quantum simulation, quantum research, quantum technology"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Technology
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Quantum
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of computing with quantum technology that solves 
                previously impossible problems. Revolutionize your research and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our quantum platform provides cutting-edge capabilities for the most complex computational challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience computational power that was previously impossible with classical computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of computing with our quantum technology platform. 
              Get in touch to explore quantum solutions for your challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;