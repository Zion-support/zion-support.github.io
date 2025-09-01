import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  Atom, Brain, Cpu, Database, Lock, Shield, Zap, Clock, 
  TrendingUp, CheckCircle, Star, Target, ArrowRight,
  Phone, Mail, MapPin, Globe, Network, Server, Code, 
  Bot, GitFork, Eye, Sparkles, Award, DollarSign,
  BarChart3, Users, Rocket, ShieldCheck, Wifi, Chip
} from 'lucide-react';

const QuantumAIHybridPlatform: React.FC = () => {

  const [activeTab, setActiveTab] = useState('overview');
  const [showPricingModal, setShowPricingModal] = useState(false);

  const contactInfo = {

    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const features = [
    {

      category: "Quantum Computing Access",
      items: [
        "1000+ qubit quantum processors",
        "Real-time quantum simulation",
        "Quantum error correction",
        "Multi-quantum platform access",
        "Quantum memory optimization",
        "Quantum networking capabilities"
      ]
    },
    {

      category: "AI-Quantum Hybrid Algorithms",
      items: [
        "Quantum machine learning models",
        "Hybrid classical-quantum workflows",
        "Quantum neural networks",
        "Quantum optimization algorithms",
        "Quantum-inspired AI models",
        "Quantum-classical hybrid training"
      ]
    },
    {

      category: "Advanced Analytics",
      items: [
        "Quantum-enhanced data processing",
        "Real-time quantum analytics",
        "Predictive quantum modeling",
        "Quantum statistical analysis",
        "Quantum pattern recognition",
        "Quantum forecasting systems"
      ]
    },
    {

      category: "Security & Cryptography",
      items: [
        "Quantum-safe cryptography",
        "Post-quantum encryption",
        "Quantum key distribution",
        "Quantum-resistant algorithms",
        "Quantum security protocols",
        "Future-proof security solutions"
      ]
    }
  ];

  const benefits = [
    {

      title: "Exponential Computational Power",
      description: "Access to quantum computing power that can solve problems in minutes that would take classical computers years.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {

      title: "Unprecedented Problem Solving",
      description: "Tackle previously impossible computational challenges with quantum advantage and AI enhancement.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {

      title: "Future-Proof Technology",
      description: "Stay ahead of the curve with cutting-edge quantum technology that will define the next decade.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500"
    },
    {

      title: "Competitive Advantage",
      description: "Gain significant competitive edge through quantum-powered insights and solutions.",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {

      title: "Breakthrough Innovation",
      description: "Enable breakthrough discoveries and innovations across multiple scientific and business domains.",
      icon: Sparkles,
      color: "from-indigo-500 to-purple-500"
    },
    {

      title: "Global Quantum Network",
      description: "Access to a worldwide network of quantum computers and research facilities.",
      icon: Globe,
      color: "from-red-500 to-pink-500"
    }
  ];

  const useCases = [
    {

      industry: "Drug Discovery & Healthcare",
      applications: [
        "Molecular modeling and simulation",
        "Protein folding prediction",
        "Drug interaction analysis",
        "Personalized medicine optimization",
        "Clinical trial optimization"
      ]
    },
    {

      industry: "Financial Services",
      applications: [
        "Portfolio optimization",
        "Risk assessment modeling",
        "Algorithmic trading strategies",
        "Fraud detection systems",
        "Market prediction models"
      ]
    },
    {

      industry: "Climate & Energy",
      applications: [
        "Climate change modeling",
        "Energy optimization",
        "Carbon capture simulation",
        "Renewable energy planning",
        "Environmental impact analysis"
      ]
    },
    {

      industry: "Logistics & Supply Chain",
      applications: [
        "Route optimization",
        "Supply chain simulation",
        "Inventory optimization",
        "Demand forecasting",
        "Resource allocation"
      ]
    }
  ];

  const technology = [
    {

      category: "Quantum Hardware",
      technologies: [
        "IBM Quantum Experience",
        "Google Quantum AI",
        "Microsoft Azure Quantum",
        "Rigetti Computing",
        "IonQ Quantum Computers",
        "Custom quantum processors"
      ]
    },
    {

      category: "Quantum Software",
      technologies: [
        "Qiskit framework",
        "Cirq quantum circuits",
        "PennyLane quantum ML",
        "Q# programming language",
        "Custom quantum algorithms",
        "Quantum error correction"
      ]
    },
    {

      category: "AI Integration",
      technologies: [
        "GPT-4 quantum integration",
        "Claude 3.5 quantum enhancement",
        "Custom quantum AI models",
        "Hybrid training systems",
        "Quantum neural networks",
        "Quantum-classical interfaces"
      ]
    },
    {

      category: "Infrastructure",
      technologies: [
        "Quantum cloud platforms",
        "High-performance computing",
        "Quantum networking",
        "Secure data transmission",
        "Real-time processing",
        "Scalable architecture"
      ]
    }
  ];

  const pricingPlans = [
    {

      name: "Quantum Starter",
      price: "$25,000",
      period: "/month",
      description: "Perfect for research institutions and startups exploring quantum computing",
      features: [
        "100 qubit access",
        "Basic quantum algorithms",
        "AI-quantum integration",
        "Standard support",
        "Monthly reporting",
        "Basic quantum training"
      ],
      cta: "Get Started",
      popular: false
    },
    {

      name: "Quantum Professional",
      price: "$75,000",
      period: "/month",
      description: "Ideal for growing companies requiring advanced quantum capabilities",
      features: [
        "500+ qubit access",
        "Advanced quantum algorithms",
        "Full AI-quantum hybrid",
        "Priority support",
        "Real-time analytics",
        "Custom quantum models",
        "API access",
        "Advanced training"
      ],
      cta: "Get Started",
      popular: true
    },
    {

      name: "Quantum Enterprise",
      price: "$150,000",
      period: "/month",
      description: "For large enterprises requiring maximum quantum computing power",
      features: [
        "1000+ qubit access",
        "Custom quantum development",
        "White-label solutions",
        "Dedicated quantum team",
        "Custom integrations",
        "Advanced security",
        "Multi-tenant access",
        "Research collaboration"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum AI Hybrid Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Quantum AI
              </span>
              <br />
              <span className="text-white">Hybrid Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with our revolutionary platform that combines 
              quantum computing power with advanced AI for solving previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowPricingModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Quantum Qubits", value: "1000+", icon: Atom },
              { label: "Speed Increase", value: "1000x", icon: Zap },
              { label: "Problem Solving", value: "Impossible", icon: Brain },
              { label: "Global Access", value: "24/7", icon: Globe }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
              >
                <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'features', name: 'Features', icon: CheckCircle },
              { id: 'benefits', name: 'Benefits', icon: Star },
              { id: 'use-cases', name: 'Use Cases', icon: Target },
              { id: 'technology', name: 'Technology', icon: Cpu },
              { id: 'pricing', name: 'Pricing', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${

                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Future of Computing is Here
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Our Quantum AI Hybrid Platform represents the pinnacle of computational technology, 
                  combining the exponential power of quantum computing with the intelligence of advanced AI.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  This revolutionary platform enables researchers, businesses, and innovators to solve 
                  previously impossible problems, from drug discovery to climate modeling, with unprecedented 
                  speed and accuracy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">1000+ qubit quantum access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">AI-quantum hybrid algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Global quantum network</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                  <Atom className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    Quantum Advantage
                  </h3>
                  <p className="text-gray-300 text-center">
                    Experience computational power that transcends classical computing limits, 
                    enabling breakthroughs in science, technology, and business.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Revolutionary Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Transform Your Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Industry Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                    <ul className="space-y-3">
                      {useCase.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Cutting-Edge Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technology.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                    <ul className="space-y-3">
                      {tech.technologies.map((technology, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Code className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{technology}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Quantum Computing Access
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 ${

                      plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700/50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-blue-400 mb-1">
                        {plan.price}
                        <span className="text-lg text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                      {plan.cta}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Ready for Quantum Computing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">Quantum Computing Plans</h2>
                <button
                  onClick={() => setShowPricingModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantumAIHybridPlatform;