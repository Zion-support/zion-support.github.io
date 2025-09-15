import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Cpu, 
  Lock, 
  Sparkles, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Rocket,
  Target,
  Lightbulb,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Wifi,
  Eye,
  MessageSquare,
  FileText,
  PieChart,
  Settings,
  Clock,
  DollarSign
} from 'lucide-react';
import AdvertisingBanner, { HeroBanner, SidebarBanner, InlineBanner } from '../components/AdvertisingBanner';

const ComprehensiveServicesLanding2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionary AI solutions for business transformation'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum solutions for complex problems'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Advanced protection against evolving threats'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-500 to-teal-500',
      description: 'Scalable infrastructure and deployment solutions'
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Lock,
      color: 'from-indigo-500 to-purple-500',
      description: 'Decentralized solutions for the modern web'
    },
    {
      id: 'iot',
      name: 'IoT & Edge Computing',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500',
      description: 'Connected devices and edge intelligence'
    }
  ];

  const aiServices = [
    {
      title: "AI-Powered Business Automation",
      description: "Automate complex business processes with intelligent AI agents",
      features: ["Process Automation", "Intelligent Analytics", "Predictive Insights", "Cost Optimization"],
      pricing: "Starting at $2,999/month",
      popularity: "95%",
      icon: Settings,
      badge: "🔥 HOT"
    },
    {
      title: "Machine Learning Platform",
      description: "Build, deploy, and scale ML models with our comprehensive platform",
      features: ["Model Training", "AutoML", "Model Deployment", "Monitoring"],
      pricing: "Starting at $1,999/month",
      popularity: "88%",
      icon: BarChart3,
      badge: "⭐ POPULAR"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and language understanding",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Chatbots"],
      pricing: "Starting at $1,499/month",
      popularity: "82%",
      icon: MessageSquare,
      badge: "🚀 NEW"
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis powered by advanced computer vision AI",
      features: ["Image Recognition", "Object Detection", "Video Analysis", "Quality Control"],
      pricing: "Starting at $2,499/month",
      popularity: "79%",
      icon: Eye,
      badge: "⚡ FEATURED"
    }
  ];

  const quantumServices = [
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum algorithms",
      features: ["Supply Chain Optimization", "Financial Modeling", "Logistics Planning", "Resource Allocation"],
      pricing: "Starting at $9,999/month",
      popularity: "94%",
      icon: Target,
      badge: "🚀 NEW"
    },
    {
      title: "Quantum Cryptography",
      description: "Ultra-secure communication with quantum-resistant encryption",
      features: ["Quantum Key Distribution", "Post-Quantum Cryptography", "Secure Communications", "Data Protection"],
      pricing: "Starting at $7,999/month",
      popularity: "91%",
      icon: Lock,
      badge: "🔥 HOT"
    },
    {
      title: "Quantum Machine Learning",
      description: "Accelerate ML algorithms with quantum computing power",
      features: ["Quantum Neural Networks", "Faster Training", "Complex Pattern Recognition", "Quantum Algorithms"],
      pricing: "Starting at $12,999/month",
      popularity: "87%",
      icon: Brain,
      badge: "⭐ POPULAR"
    }
  ];

  const securityServices = [
    {
      title: "Advanced Threat Protection",
      description: "AI-powered security solutions for comprehensive threat detection",
      features: ["Real-time Monitoring", "Threat Intelligence", "Incident Response", "Compliance"],
      pricing: "Starting at $4,999/month",
      popularity: "96%",
      icon: Shield,
      badge: "🔥 HOT"
    },
    {
      title: "Zero Trust Security",
      description: "Implement zero trust architecture for maximum security",
      features: ["Identity Verification", "Network Segmentation", "Access Control", "Continuous Monitoring"],
      pricing: "Starting at $3,999/month",
      popularity: "89%",
      icon: Lock,
      badge: "⭐ POPULAR"
    },
    {
      title: "Security Operations Center",
      description: "24/7 security monitoring and incident response services",
      features: ["24/7 Monitoring", "Expert Analysts", "Rapid Response", "Threat Hunting"],
      pricing: "Starting at $8,999/month",
      popularity: "93%",
      icon: Server,
      badge: "⚡ FEATURED"
    }
  ];

  const cloudServices = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with automated deployment",
      features: ["Auto-scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"],
      pricing: "Starting at $1,999/month",
      popularity: "92%",
      icon: Cloud,
      badge: "⭐ POPULAR"
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and deployment with automated workflows",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Deployment Automation"],
      pricing: "Starting at $2,499/month",
      popularity: "85%",
      icon: Settings,
      badge: "🔥 HOT"
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications at scale",
      features: ["Kubernetes", "Docker", "Service Mesh", "Microservices"],
      pricing: "Starting at $1,799/month",
      popularity: "88%",
      icon: Server,
      badge: "🚀 NEW"
    }
  ];

  const blockchainServices = [
    {
      title: "Smart Contract Development",
      description: "Secure and efficient smart contracts for various use cases",
      features: ["Contract Development", "Security Audits", "Deployment", "Maintenance"],
      pricing: "Starting at $3,999/month",
      popularity: "87%",
      icon: Code,
      badge: "⭐ POPULAR"
    },
    {
      title: "DeFi Solutions",
      description: "Decentralized finance platforms and applications",
      features: ["DEX Development", "Yield Farming", "Liquidity Pools", "Governance"],
      pricing: "Starting at $5,999/month",
      popularity: "91%",
      icon: PieChart,
      badge: "🔥 HOT"
    },
    {
      title: "NFT Marketplace",
      description: "Custom NFT platforms and marketplace solutions",
      features: ["Marketplace Development", "Minting", "Trading", "Royalties"],
      pricing: "Starting at $4,499/month",
      popularity: "83%",
      icon: Star,
      badge: "🚀 NEW"
    }
  ];

  const iotServices = [
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT platform for device connectivity and management",
      features: ["Device Connectivity", "Data Collection", "Remote Management", "Analytics"],
      pricing: "Starting at $2,299/month",
      popularity: "84%",
      icon: Smartphone,
      badge: "⭐ POPULAR"
    },
    {
      title: "Edge Computing",
      description: "Process data at the edge for ultra-low latency applications",
      features: ["Edge Processing", "Real-time Analytics", "Offline Capability", "Bandwidth Optimization"],
      pricing: "Starting at $1,899/month",
      popularity: "79%",
      icon: Cpu,
      badge: "🚀 NEW"
    },
    {
      title: "Industrial IoT",
      description: "IoT solutions for industrial automation and monitoring",
      features: ["Industrial Sensors", "Predictive Maintenance", "Quality Control", "Safety Monitoring"],
      pricing: "Starting at $3,499/month",
      popularity: "86%",
      icon: Settings,
      badge: "🔥 HOT"
    }
  ];

  const getServicesForCategory = (category: string) => {
    switch (category) {
      case 'ai': return aiServices;
      case 'quantum': return quantumServices;
      case 'security': return securityServices;
      case 'cloud': return cloudServices;
      case 'blockchain': return blockchainServices;
      case 'iot': return iotServices;
      default: return aiServices;
    }
  };

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "$50M+", label: "Cost Savings", icon: DollarSign },
    { number: "24/7", label: "Expert Support", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Banner */}
      <HeroBanner theme="gradient" />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From AI and quantum computing to cybersecurity and cloud infrastructure, 
              we provide end-to-end technology solutions that drive innovation and growth. 
              Choose from our comprehensive suite of cutting-edge services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Get Started Free
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Technology Focus</h2>
          <p className="text-xl text-gray-300">Select a category to explore our specialized solutions</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setActiveTab(category.id)}
              className={`
                p-6 rounded-xl border-2 transition-all duration-300 text-left
                ${activeTab === category.id 
                  ? `border-purple-400 bg-gradient-to-r ${category.color} text-white` 
                  : 'border-gray-700 bg-white/10 text-gray-300 hover:border-gray-600'
                }
              `}
            >
              <category.icon className={`w-8 h-8 mb-3 ${activeTab === category.id ? 'text-white' : 'text-purple-400'}`} />
              <h3 className="font-bold text-sm mb-1">{category.name}</h3>
              <p className="text-xs opacity-75">{category.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Inline Banner */}
        <InlineBanner theme="gradient" size="medium" />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getServicesForCategory(activeTab).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    {service.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">{service.popularity}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-white">{service.pricing}</span>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies already leveraging our comprehensive technology solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-bold text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Contact Sales
            </button>
          </div>
          <p className="text-blue-100 mt-4 text-sm">
            No credit card required • 30-day money-back guarantee • 24/7 support
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesLanding2025;