import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Target,
  BarChart3,
  Cpu,
  Lock,
  Activity,
  Award,
  Rocket,
  Sparkles,
  Eye,
  Workflow,
  Database,
  Network,
  Smartphone,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Phone,
  Mail,
  MapPin,
  Brain,
  Gauge,
  BarChart,
  LineChart,
  PieChart
} from 'lucide-react';

export default function QuantumAITradingPlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    "Quantum-powered market analysis",
    "AI-driven trading algorithms",
    "Real-time market prediction",
    "Risk assessment automation",
    "Portfolio optimization",
    "High-frequency trading capabilities",
    "Multi-exchange integration",
    "Advanced security protocols",
    "Performance analytics",
    "Custom trading strategies"
  ];

  const benefits = [
    "1000x faster market analysis",
    "95% prediction accuracy",
    "Real-time risk management",
    "Automated portfolio rebalancing",
    "Quantum advantage in trading"
  ];

  const useCases = [
    "Algorithmic trading",
    "Portfolio management",
    "Risk assessment",
    "Market analysis",
    "High-frequency trading"
  ];

  const technicalSpecs = {
    technology: ["IBM Qiskit", "Google Cirq", "Python", "TensorFlow", "React", "Node.js"],
    integrations: ["Bloomberg", "Reuters", "NYSE", "NASDAQ", "LSE"],
    apiEndpoints: 500,
    uptime: "99.999%",
    security: ["SOC 2", "PCI DSS", "FINRA compliance", "Quantum encryption"]
  };

  const pricing = {
    monthly: "$9,999",
    yearly: "$99,999",
    enterprise: "Custom",
    features: [
      "Full quantum trading capabilities",
      "Unlimited trading volume",
      "Priority support",
      "Custom integrations",
      "Advanced analytics"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white relative overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid with neon effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating particles with neon glow */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-80 shadow-lg shadow-purple-400/50"
              animate={{
                x: [0, 120, 0],
                y: [0, -120, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient orbs with neon glow */}
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Revolutionary Quantum Trading Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Quantum AI Hybrid Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The world's first quantum-powered trading platform combining quantum computing with AI algorithms 
              for ultra-fast, intelligent trading decisions and market prediction.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Analysis</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">API Endpoints</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.999%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              Start Trading Today
            </button>
            <button className="px-8 py-4 border-2 border-purple-400/50 hover:border-purple-400 rounded-2xl font-semibold text-purple-400 hover:bg-purple-400/10 transition-all duration-300 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['overview', 'features', 'pricing', 'technical', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-zion-slate/50 text-gray-300 hover:bg-zion-slate/70 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Quantum Advantage in Trading
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Our Quantum AI Hybrid Trading Platform represents the pinnacle of financial technology. 
                    By combining quantum computing power with advanced AI algorithms, we deliver unprecedented 
                    speed and accuracy in market analysis and trading decisions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Quantum Speed</h3>
                        <p className="text-gray-400">1000x faster than traditional trading systems</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">AI Intelligence</h3>
                        <p className="text-gray-400">Advanced machine learning for market prediction</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Risk Management</h3>
                        <p className="text-gray-400">Real-time risk assessment and mitigation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl p-8 backdrop-blur-sm">
                    <div className="text-center">
                      <Atom className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-white mb-4">Quantum Trading Revolution</h3>
                      <p className="text-gray-300 mb-6">
                        Experience the future of algorithmic trading
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">50+</div>
                          <div className="text-gray-400">Trading Pairs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-400">24/7</div>
                          <div className="text-gray-400">Market Coverage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advanced Trading Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover the cutting-edge capabilities that make our quantum trading platform the most advanced in the world
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                      <p className="text-gray-400 text-sm">
                        Revolutionary quantum-powered capability that transforms trading methodology
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'pricing' && (
              <motion.div
                key="pricing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Premium Pricing
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Choose the perfect plan for your trading needs with our competitive pricing structure
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Monthly Plan */}
                  <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/30 rounded-3xl p-8 backdrop-blur-sm relative">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Monthly</h3>
                      <div className="text-5xl font-bold text-purple-400 mb-2">{pricing.monthly}</div>
                      <div className="text-gray-400 mb-6">per month</div>
                      <ul className="space-y-3 mb-8 text-left">
                        {pricing.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl font-semibold text-white transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>

                  {/* Yearly Plan */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400 rounded-3xl p-8 backdrop-blur-sm relative transform scale-105">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Yearly</h3>
                      <div className="text-5xl font-bold text-purple-400 mb-2">{pricing.yearly}</div>
                      <div className="text-gray-400 mb-6">per year (Save 17%)</div>
                      <ul className="space-y-3 mb-8 text-left">
                        {pricing.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl font-semibold text-white transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-blue-400/30 rounded-3xl p-8 backdrop-blur-sm relative">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                      <div className="text-5xl font-bold text-blue-400 mb-2">{pricing.enterprise}</div>
                      <div className="text-gray-400 mb-6">custom pricing</div>
                      <ul className="space-y-3 mb-8 text-left">
                        <li className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          All features included
                        </li>
                        <li className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          Custom integrations
                        </li>
                        <li className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          Dedicated support
                        </li>
                        <li className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          SLA guarantees
                        </li>
                      </ul>
                      <button className="w-full py-3 border-2 border-blue-400 hover:bg-blue-400/10 rounded-xl font-semibold text-blue-400 transition-all duration-300">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'technical' && (
              <motion.div
                key="technical"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Technical Specifications
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Built with cutting-edge quantum and AI technology to ensure maximum performance, security, and reliability
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Cpu className="w-6 h-6 text-purple-400 mr-3" />
                        Technology Stack
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {technicalSpecs.technology.map((tech, index) => (
                          <div key={index} className="bg-zion-slate/50 rounded-lg px-3 py-2 text-center text-sm text-gray-300">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Network className="w-6 h-6 text-purple-400 mr-3" />
                        Integrations
                      </h3>
                      <div className="space-y-2">
                        {technicalSpecs.integrations.map((integration, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {integration}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Shield className="w-6 h-6 text-purple-400 mr-3" />
                        Security & Performance
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">API Endpoints:</span>
                          <span className="text-purple-400 font-semibold">{technicalSpecs.apiEndpoints}+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Uptime:</span>
                          <span className="text-green-400 font-semibold">{technicalSpecs.uptime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Security:</span>
                          <span className="text-blue-400 font-semibold">Enterprise Grade</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Lock className="w-6 h-6 text-purple-400 mr-3" />
                        Security Standards
                      </h3>
                      <div className="space-y-2">
                        {technicalSpecs.security.map((standard, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <ShieldCheck className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {standard}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get Started Today
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Ready to revolutionize your trading capabilities? Contact our team to learn more about 
                    implementing the Quantum AI Hybrid Trading Platform for your organization.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 text-purple-400 mr-3" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 text-purple-400 mr-3" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Globe className="w-5 h-5 text-purple-400 mr-3" />
                        <span>https://ziontechgroup.com</span>
                      </div>
                      <div className="flex items-start text-gray-300">
                        <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                        <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate/30 border border-purple-400/20 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-6">Quick Start</h3>
                    <div className="space-y-4">
                      <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl font-semibold text-white transition-all duration-300">
                        Schedule Demo
                      </button>
                      <button className="w-full py-3 border-2 border-purple-400 hover:bg-purple-400/10 rounded-xl font-semibold text-purple-400 transition-all duration-300">
                        Download Brochure
                      </button>
                      <button className="w-full py-3 border-2 border-blue-400 hover:bg-blue-400/10 rounded-xl font-semibold text-blue-400 transition-all duration-300">
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}