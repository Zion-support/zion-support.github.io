import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Key, 
  Cpu, 
  Globe, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  BarChart3,
  Bot,
  Database,
  Network,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  GitFork,
  Eye,
  Sparkles,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  ShieldX,
  Globe2,
  CpuIcon,
  Network2,
  SmartphoneIcon,
  BarChart3Icon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  GitForkIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  FileTextIcon,
  SearchIcon,
  ClockIcon,
  DollarSignIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldXIcon,
  Globe2Icon,
  Atom,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';

const QuantumSafeCryptography: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: "Post-Quantum Cryptography",
      items: [
        "Lattice-based Cryptography (Kyber, Dilithium)",
        "Hash-based Signatures (SPHINCS+)",
        "Code-based Cryptography (Classic McEliece)",
        "Multivariate Cryptography (Rainbow)",
        "Isogeny-based Cryptography (SIKE)",
        "Hybrid Encryption Systems"
      ]
    },
    {
      category: "Quantum Key Distribution",
      items: [
        "BB84 Protocol Implementation",
        "E91 Entanglement-based Protocol",
        "Continuous Variable QKD",
        "Quantum Repeater Networks",
        "Secure Key Rate Optimization",
        "Real-time Quantum Key Generation"
      ]
    },
    {
      category: "Cryptographic Agility",
      items: [
        "Dynamic Algorithm Switching",
        "Multi-algorithm Support",
        "Backward Compatibility",
        "Algorithm Performance Monitoring",
        "Automated Migration Tools",
        "Risk Assessment Framework"
      ]
    },
    {
      category: "Compliance & Standards",
      items: [
        "NIST Post-Quantum Standards",
        "ISO/IEC 20890 Compliance",
        "FIPS 140-3 Validation",
        "GDPR & Data Privacy",
        "SOC 2 Type II Certification",
        "Industry-specific Regulations"
      ]
    },
    {
      category: "Integration & APIs",
      items: [
        "RESTful API Services",
        "SDK for Multiple Languages",
        "Cloud Platform Integration",
        "Hardware Security Module Support",
        "Blockchain Integration",
        "IoT Device Compatibility"
      ]
    },
    {
      category: "Security & Monitoring",
      items: [
        "Real-time Threat Detection",
        "Cryptographic Attack Prevention",
        "Performance Monitoring",
        "Audit Trail & Logging",
        "Penetration Testing",
        "Security Incident Response"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Foundation",
      price: "$2,999",
      period: "/month",
      description: "Essential quantum-safe cryptography for small organizations",
      features: [
        "Post-Quantum Algorithm Support",
        "Basic QKD Implementation",
        "Standard Compliance Framework",
        "Email & Chat Support",
        "Integration with 10+ Platforms",
        "Monthly Security Reports"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Advanced quantum-safe solutions for growing enterprises",
      features: [
        "Full Post-Quantum Cryptography Suite",
        "Advanced QKD with Repeater Networks",
        "Cryptographic Agility Platform",
        "Priority Support (4-hour response)",
        "Integration with 25+ Platforms",
        "Custom Migration Tools",
        "Advanced Monitoring & Analytics",
        "API Access & Webhooks"
      ],
      popular: true,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "Complete quantum-safe infrastructure for large enterprises",
      features: [
        "Unlimited Post-Quantum Algorithms",
        "Global QKD Network Access",
        "Full Cryptographic Agility",
        "Custom Algorithm Development",
        "24/7 Dedicated Support",
        "Integration with 100+ Platforms",
        "White-label Solutions",
        "On-premise Deployment",
        "SLA Guarantees",
        "Custom Compliance Frameworks"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Future-Proof Security",
      description: "Protect your data against quantum computing attacks"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Meet current and future security requirements"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "High-speed encryption with minimal latency impact"
    },
    {
      icon: Users,
      title: "Easy Migration",
      description: "Seamless transition from classical to quantum-safe crypto"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliant with international security standards"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solution",
      description: "Grow your security infrastructure as needed"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Secure financial transactions, digital signatures, and blockchain operations against quantum threats",
      results: "99.99% quantum attack resistance, regulatory compliance, customer trust enhancement"
    },
    {
      industry: "Healthcare",
      description: "Protect patient data, medical records, and telemedicine communications with quantum-safe encryption",
      results: "HIPAA compliance, data breach prevention, patient privacy protection"
    },
    {
      industry: "Government & Defense",
      description: "Secure classified communications, national security systems, and critical infrastructure",
      results: "National security compliance, classified data protection, infrastructure security"
    },
    {
      industry: "Cloud Computing",
      description: "Secure cloud storage, APIs, and multi-tenant environments with quantum-resistant cryptography",
      results: "Data sovereignty, API security, multi-tenant isolation"
    },
    {
      industry: "IoT & Edge Computing",
      description: "Protect connected devices, sensors, and edge computing nodes from quantum attacks",
      results: "Device security, data integrity, network protection"
    }
  ];

  const threatTimeline = [
    {
      year: "2024-2026",
      threat: "Early Quantum Computers",
      risk: "Low",
      description: "Limited qubit count, basic quantum algorithms",
      protection: "Post-quantum algorithms recommended"
    },
    {
      year: "2027-2030",
      threat: "Intermediate Quantum Computers",
      risk: "Medium",
      description: "1000+ qubits, improved error correction",
      protection: "Hybrid encryption systems required"
    },
    {
      year: "2031-2035",
      threat: "Advanced Quantum Computers",
      risk: "High",
      description: "100,000+ qubits, fault-tolerant operations",
      protection: "Full quantum-safe infrastructure mandatory"
    },
    {
      year: "2035+",
      threat: "Cryptographically Relevant Quantum Computers",
      risk: "Critical",
      description: "Breaking current encryption standards",
      protection: "Quantum-resistant systems essential"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-6 mx-auto mb-8">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum-Safe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Cryptography Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Future-proof your security infrastructure with the most advanced quantum-resistant cryptography. 
              Protect your data against quantum computing attacks before they become a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'overview', name: 'Overview', icon: Eye },
            { id: 'features', name: 'Features', icon: CheckCircle },
            { id: 'pricing', name: 'Pricing', icon: DollarSign },
            { id: 'benefits', name: 'Benefits', icon: Star },
            { id: 'threats', name: 'Quantum Threats', icon: ShieldX },
            { id: 'use-cases', name: 'Use Cases', icon: Target },
            { id: 'contact', name: 'Contact', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">The Quantum Threat is Real</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Quantum computers are advancing rapidly, and when they reach sufficient scale, 
                they will break current encryption standards. Our platform prepares you for this future today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Act Now?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-4 mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">!</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Immediate Risk</h4>
                  <p className="text-gray-300">Data encrypted today may be vulnerable tomorrow</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-4 mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">⏰</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Migration Time</h4>
                  <p className="text-gray-300">Transitioning to quantum-safe crypto takes time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">✓</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Future-Proof</h4>
                  <p className="text-gray-300">Stay ahead of emerging threats</p>
                </div>
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
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Quantum-Safe Features</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform provides a complete suite of quantum-resistant cryptographic solutions, 
                from post-quantum algorithms to quantum key distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-2 mr-3">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
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
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Investment in Future Security</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the plan that best fits your security requirements. All plans include our core 
                quantum-safe cryptography features with different levels of customization and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Need a custom solution? Contact us for enterprise pricing and custom development.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our Quantum-Safe Cryptography Platform delivers comprehensive protection against 
                quantum threats while maintaining performance and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 flex items-start"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 mr-4 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Security Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                  <p className="text-gray-300">Quantum Attack Resistance</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <p className="text-gray-300">Standards Compliance</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <p className="text-gray-300">Security Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quantum Threats Tab */}
        {activeTab === 'threats' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Understanding Quantum Threats</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Quantum computers pose an existential threat to current cryptographic standards. 
                Understanding the timeline and risks is crucial for planning your security strategy.
              </p>
            </div>

            <div className="space-y-6">
              {threatTimeline.map((threat, index) => (
                <motion.div
                  key={threat.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{threat.year}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      threat.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                      threat.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      threat.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {threat.risk} Risk
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">{threat.threat}</h4>
                  <p className="text-gray-300 mb-3">{threat.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <span className="text-green-400 font-semibold">Protection Required: </span>
                    <span className="text-green-300">{threat.protection}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Critical Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Data Longevity</h4>
                  <p className="text-gray-300">
                    Data encrypted today may remain sensitive for decades. If current encryption is broken, 
                    historical data becomes vulnerable.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Migration Complexity</h4>
                  <p className="text-gray-300">
                    Transitioning to quantum-safe cryptography requires careful planning and can take 
                    months or years to complete.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform has been successfully implemented across various industries, 
                providing quantum-safe security for critical applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">Results Achieved:</h4>
                    <p className="text-green-300 text-sm">{useCase.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Secure Your Future Today</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Ready to protect your organization against quantum threats? Contact our team to schedule 
                a security assessment and discuss your quantum-safe cryptography needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Website</h4>
                      <a href="https://ziontechgroup.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry-leading quantum-safe cryptography expertise</li>
                    <li>• Proven track record of successful implementations</li>
                    <li>• 24/7 technical support and security monitoring</li>
                    <li>• Competitive pricing with premium security features</li>
                    <li>• Global network of security partners</li>
                    <li>• Future-proof technology solutions</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request Security Assessment</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Industry</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select your industry</option>
                      <option value="financial">Financial Services</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="government">Government & Defense</option>
                      <option value="cloud">Cloud Computing</option>
                      <option value="iot">IoT & Edge Computing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Tell us about your security requirements and quantum threat concerns..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Request Assessment
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Wait Until It's Too Late
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Quantum computers are advancing faster than expected. Protect your organization today 
              with quantum-safe cryptography before current encryption becomes obsolete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuantumSafeCryptography;