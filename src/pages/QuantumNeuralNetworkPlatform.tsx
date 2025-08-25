import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Brain, 
<<<<<<< HEAD
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Microchip,
  Atom
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
=======
  Atom, 
  Zap, 
  Cpu, 
  Database, 
  BarChart3, 
  Globe, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Shield,
  Layers
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3

const QuantumNeuralNetworkPlatform = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Quantum Neural Processing",
      description: "Advanced quantum algorithms for neural network optimization and training acceleration"
    },
    {
      icon: Zap,
      title: "Hybrid Quantum-Classical Computing",
      description: "Seamless integration of quantum and classical computing resources for optimal performance"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols"
    },
    {
      icon: Cpu,
      title: "Quantum Error Correction",
      description: "Advanced error correction algorithms for reliable quantum computations"
    }
  ];

  const benefits = [
    "1000x faster neural network training",
    "Quantum advantage in complex optimization problems",
    "Future-proof security with quantum-resistant algorithms",
    "Scalable architecture for enterprise workloads"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      features: [
        "Basic quantum neural processing",
        "Up to 10 qubits",
        "Standard support",
        "Basic error correction"
      ]
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      features: [
        "Advanced quantum algorithms",
        "Up to 50 qubits",
        "Priority support",
        "Advanced error correction",
        "Custom model training"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Full quantum neural platform",
        "Unlimited qubits",
        "24/7 dedicated support",
        "Custom algorithm development",
        "On-premise deployment options"
      ]
=======
      title: "Quantum Neural Networks",
      description: "Advanced neural networks powered by quantum computing principles"
    },
    {
      icon: Atom,
      title: "Quantum Processing",
      description: "Leverage quantum superposition and entanglement for computation"
    },
    {
      icon: Zap,
      title: "Exponential Speed",
      description: "Solve complex problems exponentially faster than classical computers"
    },
    {
      icon: Cpu,
      title: "Hybrid Architecture",
      description: "Seamless integration of quantum and classical computing resources"
    },
    {
      icon: Database,
      title: "Quantum Memory",
      description: "Advanced quantum memory systems for data storage and retrieval"
    },
    {
      icon: BarChart3,
      title: "Quantum Analytics",
      description: "Revolutionary analytics powered by quantum algorithms"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling",
      benefits: ["Protein folding simulation", "Drug interaction prediction", "Molecular dynamics"]
    },
    {
      title: "Financial Modeling",
      description: "Revolutionary risk assessment and portfolio optimization",
      benefits: ["Risk analysis", "Portfolio optimization", "Market prediction"]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate simulation and environmental impact analysis",
      benefits: ["Weather prediction", "Climate change modeling", "Environmental impact"]
    },
    {
      title: "AI Training",
      description: "Train neural networks with quantum-enhanced algorithms",
      benefits: ["Faster convergence", "Better optimization", "Improved accuracy"]
    }
  ];

  const benefits = [
    "Exponential speedup for complex problems",
    "Quantum advantage in optimization",
    "Enhanced machine learning capabilities",
    "Revolutionary cryptography",
    "Advanced simulation capabilities",
    "Future-proof technology platform"
  ];

  const useCases = [
    {
      title: "Research Institutions",
      description: "Advance scientific research with quantum computing capabilities"
    },
    {
      title: "Pharmaceutical Companies",
      description: "Accelerate drug discovery and development processes"
    },
    {
      title: "Financial Services",
      description: "Transform risk modeling and investment strategies"
    },
    {
      title: "Technology Companies",
      description: "Build next-generation AI and machine learning systems"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
    }
=======
      title: 'Quantum Neural Processing',
      description: 'Advanced quantum algorithms for neural network optimization and training acceleration.'
    },
    {
      icon: Zap,
      title: 'Real-time Learning',
      description: 'Continuous adaptation and learning from data streams with quantum-enhanced processing.'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum key distribution and post-quantum cryptography.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Scaling',
      description: 'Exponential performance improvements over classical neural networks.'
    }
  ];

  const benefits = [
    '1000x faster training times',
    'Unprecedented pattern recognition',
    'Quantum advantage in optimization',
    'Future-proof security protocols'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title="Quantum Neural Network Platform | Zion Tech Group"
        description="Revolutionary quantum neural network platform combining quantum computing with advanced AI for unprecedented performance and capabilities."
        keywords="quantum computing, neural networks, AI, quantum AI, quantum neural platform"
      />
      
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Atom className="h-12 w-12 text-purple-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Unlock the future of AI with our revolutionary quantum neural network platform. 
              Experience unprecedented computational power and breakthrough capabilities.
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Atom className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Quantum Neural Network Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of computing with our revolutionary Quantum Neural Network Platform. 
              Combine the power of quantum computing with advanced neural networks to solve 
              previously impossible problems.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Zap, Shield, Database, Network, ArrowRight, Star, Rocket, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced AI neural networks. Experience unprecedented computational power and AI capabilities." />
        <meta name="keywords" content="quantum neural networks, quantum computing, AI neural networks, quantum AI, neural network platform, quantum technology" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-neural-network-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum Neural Network
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of AI with our revolutionary quantum neural network platform. 
                Combining quantum computing power with advanced neural network architectures for 
                unprecedented computational capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services/quantum-technology"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Quantum AI Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the power of quantum computing to create neural networks 
                that transcend classical computational limitations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Neural Processing</h3>
                <p className="text-gray-300">
                  Leverage quantum superposition and entanglement for exponentially faster neural network training and inference.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Hybrid Quantum-Classical</h3>
                <p className="text-gray-300">
                  Seamlessly integrate quantum and classical computing for optimal performance across all workloads.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Learning</h3>
                <p className="text-gray-300">
                  Continuous adaptation and learning in real-time with quantum-enhanced neural plasticity.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Security</h3>
                <p className="text-gray-300">
                  Unbreakable encryption and security protocols powered by quantum key distribution.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Memory</h3>
                <p className="text-gray-300">
                  Quantum memory systems for instant data retrieval and processing across massive datasets.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Networking</h3>
                <p className="text-gray-300">
                  Ultra-secure quantum communication networks for distributed neural network operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transformative Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum neural networks are revolutionizing industries and solving 
                previously impossible computational challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery & Healthcare</h3>
                    <p className="text-gray-300">
                      Accelerate pharmaceutical research with quantum neural networks that can simulate 
                      molecular interactions and predict drug efficacy in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Financial Modeling</h3>
                    <p className="text-gray-300">
                      Revolutionize risk assessment and portfolio optimization with quantum-enhanced 
                      neural networks for real-time market analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Climate Prediction</h3>
                    <p className="text-gray-300">
                      Model complex climate systems with unprecedented accuracy using quantum neural 
                      networks for long-term weather forecasting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Research & Development</h3>
                    <p className="text-gray-300">
                      Push the boundaries of artificial intelligence with quantum neural networks 
                      that can learn and adapt at quantum speeds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                    <p className="text-gray-300">
                      Unbreakable security protocols and threat detection systems powered by 
                      quantum neural networks and quantum encryption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Optimization Problems</h3>
                    <p className="text-gray-300">
                      Solve complex optimization challenges in logistics, manufacturing, and 
                      resource allocation with quantum neural network efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your business with the most advanced 
              neural network technology ever created.
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
import { Brain, Cpu, Zap, Shield, ArrowRight, Star, Users, Target } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Neural Network
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary quantum computing meets artificial intelligence in our next-generation 
              neural network platform. Experience unprecedented computational power and AI capabilities.
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
=======
import { Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Neural Network
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Revolutionize your AI capabilities with our cutting-edge quantum neural network platform. 
              Experience unprecedented computational power and breakthrough AI performance.
>>>>>>> origin/cursor/website-audit-and-enhancement-311e
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Case Studies
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              </Link>
=======
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your AI capabilities with the world's most advanced quantum-enhanced neural network platform. 
              Experience unprecedented performance and security in machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
=======
import { motion } from 'framer-motion';
import { Brain, Zap, Cpu, Network, Shield, TrendingUp } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Neural Network
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing AI with quantum computing and neural networks. Experience the future of machine learning with unprecedented speed and accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
              </button>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/quantum-technology"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced neural network architectures 
              to deliver unprecedented AI capabilities.
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Harness the power of quantum computing to revolutionize your AI applications
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing to unlock new possibilities in neural network processing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {[
              {
                icon: Brain,
                title: "Quantum Neural Processing",
                description: "Process neural networks at quantum speeds with exponential performance improvements"
              },
              {
                icon: Zap,
                title: "Lightning Fast Training",
                description: "Train complex models in minutes instead of hours with quantum acceleration"
              },
              {
                icon: Cpu,
                title: "Quantum Memory",
                description: "Leverage quantum memory for unprecedented data processing capabilities"
              },
              {
                icon: Network,
                title: "Distributed Quantum Computing",
                description: "Scale across multiple quantum nodes for massive parallel processing"
              },
              {
                icon: Shield,
                title: "Quantum Security",
                description: "Unbreakable encryption powered by quantum cryptography"
              },
              {
                icon: TrendingUp,
                title: "Continuous Learning",
                description: "Self-improving algorithms that evolve with quantum-enhanced learning"
              }
            ].map((feature, index) => (
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
=======
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
=======
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Neural Processing</h3>
              <p className="text-gray-400">
                Leverage quantum superposition and entanglement for exponentially faster neural network training and inference.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Hybrid Quantum-Classical</h3>
              <p className="text-gray-400">
                Seamlessly integrate quantum and classical computing for optimal performance across all workloads.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Optimization</h3>
              <p className="text-gray-400">
                Dynamic quantum circuit optimization for real-time performance improvements and adaptive learning.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum-Safe Security</h3>
              <p className="text-gray-400">
                Built-in quantum-resistant cryptography and secure quantum key distribution protocols.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Models</h3>
              <p className="text-gray-400">
                Pre-trained quantum neural networks for computer vision, natural language processing, and more.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Ready</h3>
              <p className="text-gray-400">
                Scalable architecture designed for enterprise deployment with comprehensive support and monitoring.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
=======
      {/* Technology Stack */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Platform?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Performance Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Join the quantum revolution and transform your AI capabilities with our cutting-edge platform.
              </p>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </div>
=======
import { Brain, Zap, Shield, TrendingUp, Users, Globe } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Quantum Neural Network Platform
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Revolutionizing AI with quantum computing and neural networks for unprecedented computational power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Quantum Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced neural network architectures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced neural networks 
              to deliver unprecedented computational power.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
=======
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Quantum-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Neural Processing</h3>
              <p className="text-zion-slate-light">
                Leverage quantum computing principles to process neural networks at unprecedented speeds
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Lightning Fast Training</h3>
              <p className="text-zion-slate-light">
                Train complex neural networks in minutes instead of hours with quantum acceleration
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Security</h3>
              <p className="text-zion-slate-light">
                Unbreakable encryption and security protocols powered by quantum mechanics
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Scalable Architecture</h3>
              <p className="text-zion-slate-light">
                Scale from small prototypes to enterprise-level quantum neural networks seamlessly
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Development</h3>
              <p className="text-zion-slate-light">
                Multi-user quantum neural network development with real-time collaboration
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Global Quantum Network</h3>
              <p className="text-zion-slate-light">
                Access quantum computing resources worldwide through our distributed network
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum neural networks are revolutionizing industries and solving 
              previously impossible problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest quantum computing frameworks and neural network architectures
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Qiskit", "TensorFlow Quantum", "PennyLane", "Cirq",
              "PyTorch", "JAX", "NumPy", "SciPy"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">{tech}</span>
              </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Advantage Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of quantum computing combined with neural networks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how quantum neural networks are transforming industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery</h3>
                  <p className="text-gray-400">
                    Accelerate pharmaceutical research with quantum-powered molecular modeling and protein folding prediction.
                  </p>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Financial Modeling</h3>
                  <p className="text-gray-400">
                    Revolutionize risk assessment and portfolio optimization with quantum-enhanced predictive analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Climate Prediction</h3>
                  <p className="text-gray-400">
                    Model complex climate systems with unprecedented accuracy using quantum neural networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                  <p className="text-gray-400">
                    Detect and prevent advanced threats with quantum-enhanced pattern recognition and anomaly detection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Autonomous Systems</h3>
                  <p className="text-gray-400">
                    Enable next-generation autonomous vehicles and robotics with quantum-powered decision making.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Healthcare AI</h3>
                  <p className="text-gray-400">
                    Transform medical diagnosis and treatment planning with quantum-enhanced medical imaging analysis.
                  </p>
                </div>
              </div>
=======
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-311e
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Quantum Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the quantum advantage with measurable results and proven performance
=======
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Can Benefit?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum neural network platform is designed for organizations at the cutting edge 
              of technology and research.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
=======
      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered AI Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Harness the power of quantum computing to supercharge your neural networks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Processing</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Leverage quantum superposition and entanglement for exponentially faster neural network training and inference.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exponential Speed</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Achieve computational speeds that are orders of magnitude faster than classical computing approaches.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Built-in quantum encryption and security protocols ensure your AI models and data remain protected.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Scale your quantum neural networks from small prototypes to enterprise-grade deployments seamlessly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative Development</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Enable teams to collaborate on quantum AI projects with real-time sharing and version control.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Quantum Network</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Access quantum computing resources worldwide through our distributed quantum network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform industries with quantum-powered AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Drug Discovery & Healthcare</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Accelerate pharmaceutical research with quantum neural networks that can simulate molecular interactions 
                  and predict drug efficacy in hours instead of years.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Molecular dynamics simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Protein folding prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Drug-target interaction modeling
                  </li>
                </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-311e
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Modeling & Trading</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Revolutionize financial markets with quantum AI that can process millions of data points 
                  and identify patterns invisible to classical algorithms.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Risk assessment and portfolio optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Algorithmic trading strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Fraud detection and prevention
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Climate & Energy Research</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Tackle climate change with quantum AI that can model complex environmental systems 
                  and optimize renewable energy solutions.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Weather pattern prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Energy grid optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Carbon capture modeling
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Enable next-generation autonomous vehicles and robotics with quantum AI that can process 
                  sensor data and make decisions in real-time.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Real-time decision making
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Sensor fusion and processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Predictive maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your quantum computing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`rounded-2xl p-8 ${
                index === 1 
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl transform scale-105' 
                  : 'bg-white border-2 border-gray-200 hover:border-purple-300'
              }`}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    index === 1 ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold ${
                    index === 1 ? 'text-white' : 'text-purple-600'
                  }`}>
                    {plan.price}
                    <span className="text-lg font-normal">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 mr-3 ${
                        index === 1 ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={index === 1 ? 'text-purple-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Get Started
                </Link>
=======
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              </div>
            ))}
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Revolutionary Use Cases
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Drug Discovery</h3>
              <p className="text-zion-slate-light text-lg">
                Accelerate pharmaceutical research by simulating molecular interactions at quantum speeds
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Protein folding prediction</li>
                <li>• Drug molecule optimization</li>
                <li>• Clinical trial simulation</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Financial Modeling</h3>
              <p className="text-zion-slate-light text-lg">
                Revolutionize risk assessment and portfolio optimization with quantum neural networks
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Market prediction models</li>
                <li>• Risk assessment algorithms</li>
                <li>• Portfolio optimization</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Climate Modeling</h3>
              <p className="text-zion-slate-light text-lg">
                Predict climate patterns and environmental changes with unprecedented accuracy
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Weather pattern prediction</li>
                <li>• Climate change modeling</li>
                <li>• Natural disaster forecasting</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">AI Research</h3>
              <p className="text-zion-slate-light text-lg">
                Push the boundaries of artificial intelligence with quantum-enhanced neural networks
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Advanced language models</li>
                <li>• Computer vision systems</li>
                <li>• Autonomous decision making</li>
              </ul>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Quantum Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the revolution in AI and quantum computing. Contact us today to get started.
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for the Quantum Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and unlock computational capabilities that were once 
            thought impossible. Our expert team is ready to help you implement quantum solutions.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the quantum revolution and transform your AI capabilities with our cutting-edge platform
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
=======
      <section className="py-20 px-4 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Join the quantum revolution and unlock unprecedented AI capabilities. 
            Our team of quantum computing experts is ready to help you get started.
>>>>>>> origin/cursor/website-audit-and-enhancement-311e
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-300"
=======
              className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Start Your Quantum Journey
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
            >
              View Success Stories
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
=======
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-311e
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </Link>
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 text-center border border-cyan-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and unlock unprecedented AI capabilities with our 
              Quantum Neural Network Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
=======
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
=======
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to learn how our Quantum Neural Network Platform can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                Contact Sales
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and transform your AI capabilities with our cutting-edge platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
        </div>
      </section>
    </div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
  );
}