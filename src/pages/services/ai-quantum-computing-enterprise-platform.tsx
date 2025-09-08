import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Lock,
  Globe,
  BarChart3,
  Lightbulb,
  Target,
  Rocket,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Network,
  Server,
  Cloud,
  Workflow,
  Code,
  Monitor,
  Activity,
  Eye,
  Settings,
  Palette,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Atom as AtomIcon,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  Users2,
  Cog,
  Palette as PaletteIcon,
  Menu,
  X,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  ChevronRight,
  Calendar,
  Award as AwardIcon,
  BookOpen,
  Layers,
  Factory,
  HeartHandshake,
  Briefcase,
  PenTool,
  Layout,
  Truck
} from 'lucide-react';

export default function AIQuantumComputingEnterprisePlatform() {
  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Enterprise Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered quantum computing platform for enterprises. Solve complex problems, optimize operations, and gain competitive advantage with quantum AI technology." />
        <meta name="keywords" content="AI quantum computing, quantum AI platform, enterprise quantum computing, quantum machine learning, quantum optimization, quantum cryptography, quantum technology" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-quantum-computing-enterprise-platform" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Quantum Computing Enterprise Platform | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered quantum computing platform for enterprises. Solve complex problems with quantum AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-quantum-computing-enterprise-platform" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Quantum Computing Enterprise Platform | Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary AI-powered quantum computing platform for enterprises." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
                <Atom className="w-4 h-4 mr-2" />
                Quantum AI Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Quantum Computing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Enterprise Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of quantum computing combined with artificial intelligence to solve 
                enterprise-scale problems that were previously impossible. Our platform delivers 
                quantum advantage for optimization, cryptography, and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Quantum Advantage
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Meets Artificial Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines the computational power of quantum systems with the learning 
                capabilities of AI to deliver unprecedented problem-solving capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum AI Optimization */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum AI Optimization</h3>
                <p className="text-gray-300">
                  Solve complex optimization problems in logistics, finance, and manufacturing 
                  with quantum algorithms enhanced by AI learning capabilities.
                </p>
              </div>

              {/* Quantum Machine Learning */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Machine Learning</h3>
                <p className="text-gray-300">
                  Train quantum neural networks and quantum classifiers for pattern recognition, 
                  prediction, and decision-making tasks.
                </p>
              </div>

              {/* Quantum Cryptography */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Cryptography</h3>
                <p className="text-gray-300">
                  Unbreakable encryption using quantum key distribution and quantum-resistant 
                  cryptographic algorithms for enterprise security.
                </p>
              </div>

              {/* Quantum Simulation */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Simulation</h3>
                <p className="text-gray-300">
                  Simulate complex quantum systems for drug discovery, materials science, 
                  and chemical engineering applications.
                </p>
              </div>

              {/* Hybrid Quantum-Classical */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Hybrid Quantum-Classical</h3>
                <p className="text-gray-300">
                  Seamlessly integrate quantum and classical computing resources for optimal 
                  performance across different problem types.
                </p>
              </div>

              {/* Quantum Error Correction */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Error Correction</h3>
                <p className="text-gray-300">
                  Advanced error correction algorithms and fault-tolerant quantum computing 
                  for reliable enterprise applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How Quantum AI Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform orchestrates quantum and classical computing resources to deliver 
                optimal solutions for complex enterprise problems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Problem Analysis</h3>
                <p className="text-gray-300">
                  AI analyzes your problem and determines the optimal quantum-classical approach
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Processing</h3>
                <p className="text-gray-300">
                  Quantum algorithms process complex calculations using quantum superposition and entanglement
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Enhancement</h3>
                <p className="text-gray-300">
                  AI algorithms optimize quantum results and integrate with classical computing resources
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Solution Delivery</h3>
                <p className="text-gray-300">
                  Deliver optimized solutions with quantum advantage and actionable insights
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum AI can transform your industry and solve previously intractable problems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Financial Services */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
                <p className="text-gray-300">
                  Portfolio optimization, risk assessment, fraud detection, and algorithmic trading 
                  with quantum-enhanced AI algorithms.
                </p>
              </div>

              {/* Healthcare & Pharma */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare & Pharma</h3>
                <p className="text-gray-300">
                  Drug discovery, protein folding, medical imaging analysis, and personalized medicine 
                  using quantum simulation and AI.
                </p>
              </div>

              {/* Manufacturing */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300">
                  Supply chain optimization, quality control, predictive maintenance, and process 
                  optimization with quantum AI.
                </p>
              </div>

              {/* Logistics & Transportation */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Logistics & Transportation</h3>
                <p className="text-gray-300">
                  Route optimization, fleet management, warehouse optimization, and demand forecasting 
                  using quantum algorithms.
                </p>
              </div>

              {/* Energy & Utilities */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Energy & Utilities</h3>
                <p className="text-gray-300">
                  Grid optimization, renewable energy forecasting, demand response, and energy 
                  trading optimization.
                </p>
              </div>

              {/* Cybersecurity */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300">
                  Quantum-resistant cryptography, threat detection, anomaly detection, and secure 
                  communication protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access quantum computing power with flexible enterprise pricing options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Quantum Starter */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Starter</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$2,999</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 100 quantum computing hours/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic quantum AI algorithms
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard quantum simulation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Quantum Professional */}
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-8 border-2 border-purple-500/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Professional</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$5,999</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 500 quantum computing hours/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced quantum AI algorithms
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom quantum simulations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Quantum error correction
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              {/* Quantum Enterprise */}
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$12,999</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited quantum computing hours
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom quantum AI development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated quantum hardware access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Quantum Advantage Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Gain competitive advantage with quantum computing capabilities that were previously 
                only available to research institutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Exponential Speedup</h3>
                    <p className="text-gray-300">
                      Solve problems in minutes that would take classical computers years or decades, 
                      providing unprecedented competitive advantage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Optimal Solutions</h3>
                    <p className="text-gray-300">
                      Find globally optimal solutions for complex optimization problems that 
                      classical algorithms can only approximate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Future-Proof Security</h3>
                    <p className="text-gray-300">
                      Implement quantum-resistant cryptography and stay ahead of emerging 
                      quantum threats to your data security.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation Leadership</h3>
                    <p className="text-gray-300">
                      Position your company as a technology leader by adopting cutting-edge 
                      quantum computing capabilities early.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Insights</h3>
                    <p className="text-gray-300">
                      Unlock insights from complex datasets using quantum machine learning 
                      algorithms that classical AI cannot match.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                    <p className="text-gray-300">
                      Reduce computational costs and time-to-solution for complex problems, 
                      improving ROI and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready for Quantum Advantage?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Join leading enterprises that are already leveraging quantum computing to solve 
                previously impossible problems and gain competitive advantage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Middletown, DE
                  </a>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your Quantum Journey</h3>
                <p className="text-gray-300 mb-8">
                  Schedule a personalized consultation and discover how quantum computing can 
                  transform your business operations and competitive position.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:kleber@ziontechgroup.com?subject=Quantum Computing Platform Consultation Request" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Request Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}