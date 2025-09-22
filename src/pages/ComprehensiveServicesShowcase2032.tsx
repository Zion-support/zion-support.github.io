import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Globe2,
  Shield2,
  Zap2,
  Brain2,
  Cloud2
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2032() {
  const featuredServices = [
    {
      title: "AI-Powered Quantum Financial Trading Platform",
      description: "Revolutionary AI-powered trading platform that combines quantum computing with advanced machine learning for ultra-fast, intelligent financial trading decisions.",
      icon: Brain,
      features: ["Quantum-enhanced AI algorithms", "Real-time market analysis", "Predictive trading signals", "Risk management automation"],
      href: "/services/ai-quantum-financial-trading-platform",
      color: "from-cyan-400 to-blue-500",
      price: "Starting at $5,000/month",
      marketPrice: "$8,000-$15,000/month",
      savings: "Up to 40% savings",
      innovationLevel: "Revolutionary",
      marketSize: "$15B+",
      competitors: ["Bloomberg", "Refinitiv", "FactSet", "Morningstar"]
    },
    {
      title: "AI-Driven Autonomous Supply Chain Orchestrator",
      description: "Intelligent supply chain management system that autonomously optimizes logistics, inventory, and supplier relationships using advanced AI and IoT integration.",
      icon: Workflow,
      features: ["Autonomous decision-making", "Real-time inventory optimization", "Predictive demand forecasting", "Supplier performance analytics"],
      href: "/services/ai-autonomous-supply-chain-orchestrator",
      color: "from-green-400 to-emerald-500",
      price: "Starting at $3,500/month",
      marketPrice: "$5,000-$12,000/month",
      savings: "Up to 30% savings",
      innovationLevel: "Breakthrough",
      marketSize: "$8B+",
      competitors: ["SAP", "Oracle", "Manhattan Associates", "JDA Software"]
    },
    {
      title: "AI-Powered Healthcare Predictive Analytics Platform",
      description: "Advanced healthcare analytics platform that predicts patient outcomes, optimizes treatment plans, and improves healthcare delivery using machine learning and medical AI.",
      icon: Activity,
      features: ["Patient outcome prediction", "Treatment optimization", "Disease progression modeling", "Resource allocation"],
      href: "/services/ai-healthcare-predictive-analytics",
      color: "from-purple-400 to-pink-500",
      price: "Starting at $4,200/month",
      marketPrice: "$6,000-$18,000/month",
      savings: "Up to 45% savings",
      innovationLevel: "Revolutionary",
      marketSize: "$12B+",
      competitors: ["Epic", "Cerner", "Allscripts", "Meditech"]
    },
    {
      title: "Quantum-Secure Cloud Infrastructure",
      description: "Next-generation cloud infrastructure with quantum-resistant encryption, AI-powered security, and ultra-high performance computing capabilities.",
      icon: Cloud,
      features: ["Quantum-resistant encryption", "AI-powered threat detection", "Edge computing integration", "Multi-cloud orchestration"],
      href: "/services/quantum-secure-cloud-infrastructure",
      color: "from-blue-400 to-indigo-500",
      price: "$150/hour",
      marketPrice: "$180-$250/hour",
      savings: "Up to 25% savings",
      innovationLevel: "Breakthrough",
      marketSize: "$25B+",
      competitors: ["AWS", "Azure", "GCP", "IBM Cloud"]
    },
    {
      title: "AI-Driven DevOps Automation Platform",
      description: "Intelligent DevOps platform that automates software development, testing, deployment, and monitoring using advanced AI and machine learning.",
      icon: Code,
      features: ["AI-powered code review", "Automated testing", "Intelligent deployment", "Performance monitoring"],
      href: "/services/ai-devops-automation-platform",
      color: "from-orange-400 to-red-500",
      price: "$120/hour",
      marketPrice: "$140-$200/hour",
      savings: "Up to 20% savings",
      innovationLevel: "Advanced",
      marketSize: "$18B+",
      competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions"]
    },
    {
      title: "AI-Powered Content Creation Studio",
      description: "Intelligent content creation platform that generates high-quality articles, videos, and social media content using advanced AI and natural language processing.",
      icon: FileText,
      features: ["AI content generation", "Multi-format support", "SEO optimization", "Brand voice customization"],
      href: "/services/ai-content-creation-studio",
      color: "from-yellow-400 to-orange-500",
      price: "Starting at $99/month",
      marketPrice: "$150-$300/month",
      savings: "Up to 33% savings",
      innovationLevel: "Advanced",
      marketSize: "$2B+",
      competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"]
    }
  ];

  const revolutionaryServices = [
    {
      title: "AI-Powered Quantum Neural Network Platform",
      description: "Revolutionary platform that combines quantum computing with neural networks for unprecedented AI capabilities and problem-solving.",
      icon: Atom,
      features: ["Quantum neural networks", "Hybrid quantum-classical algorithms", "Advanced pattern recognition", "Quantum machine learning"],
      price: "Starting at $8,500/month",
      marketPrice: "$15,000-$25,000/month",
      savings: "Up to 60% savings",
      innovationLevel: "Revolutionary",
      marketSize: "$20B+",
      competitors: ["IBM Quantum", "Google Quantum", "Microsoft Quantum", "D-Wave"]
    },
    {
      title: "AI-Powered Autonomous Business Operations Platform",
      description: "Fully autonomous business management platform that handles all aspects of business operations using advanced AI and machine learning.",
      icon: Bot,
      features: ["Autonomous decision-making", "Business process automation", "Financial management", "HR automation"],
      price: "Starting at $6,500/month",
      marketPrice: "$12,000-$20,000/month",
      savings: "Up to 45% savings",
      innovationLevel: "Revolutionary",
      marketSize: "$30B+",
      competitors: ["SAP", "Oracle", "Salesforce", "Workday"]
    },
    {
      title: "AI-Powered Cybersecurity Threat Intelligence Platform",
      description: "Next-generation cybersecurity platform that uses AI to detect, analyze, and respond to threats in real-time with predictive capabilities.",
      icon: Shield,
      features: ["AI threat detection", "Predictive threat analysis", "Real-time response", "Behavioral analytics"],
      price: "$180/hour",
      marketPrice: "$200-$300/hour",
      savings: "Up to 40% savings",
      innovationLevel: "Revolutionary",
      marketSize: "$35B+",
      competitors: ["CrowdStrike", "SentinelOne", "Darktrace", "Cylance"]
    }
  ];

  const microSaasServices = [
    {
      title: "Smart Contract Risk Assessment Platform",
      description: "Intelligent platform that analyzes smart contracts for security vulnerabilities, compliance issues, and risk factors using AI and blockchain analytics.",
      icon: Lock,
      features: ["AI-powered vulnerability detection", "Compliance checking", "Risk scoring", "Audit trail"],
      price: "Starting at $199/month",
      marketPrice: "$300-$800/month",
      savings: "Up to 33% savings",
      innovationLevel: "Breakthrough",
      marketSize: "$500M+",
      competitors: ["OpenZeppelin", "Consensys Diligence", "Trail of Bits"]
    },
    {
      title: "AI-Powered Legal Document Analysis Platform",
      description: "Intelligent legal document analysis platform that uses AI to review, analyze, and extract insights from legal documents and contracts.",
      icon: FileText,
      features: ["AI document review", "Contract analysis", "Risk assessment", "Compliance checking"],
      price: "Starting at $299/month",
      marketPrice: "$500-$1,200/month",
      savings: "Up to 40% savings",
      innovationLevel: "Breakthrough",
      marketSize: "$800M+",
      competitors: ["LexisNexis", "Westlaw", "ContractPodAi", "Evisort"]
    },
    {
      title: "AI-Powered Real Estate Investment Analytics Platform",
      description: "Intelligent real estate investment platform that uses AI to analyze market trends, predict property values, and optimize investment decisions.",
      icon: BarChart,
      features: ["Market trend analysis", "Property value prediction", "Investment optimization", "Risk assessment"],
      price: "Starting at $199/month",
      marketPrice: "$300-$800/month",
      savings: "Up to 33% savings",
      innovationLevel: "Advanced",
      marketSize: "$1.2B+",
      competitors: ["Zillow", "Redfin", "RealPage", "CoStar"]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2032
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge AI, IT Infrastructure, and Micro SAAS solutions that redefine what's possible in business technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge solutions that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-semibold">Our Price:</span>
                    <span className="text-white font-bold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Market Average:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Savings:</span>
                    <span className="text-green-400 font-bold">{service.savings}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {service.innovationLevel}
                  </span>
                  <span className="text-xs text-gray-400">
                    Market: {service.marketSize}
                  </span>
                </div>

                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough technologies that are reshaping the future of artificial intelligence and business automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Sparkles className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-400 font-semibold">Our Price:</span>
                    <span className="text-white font-bold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Market Average:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Savings:</span>
                    <span className="text-green-400 font-bold">{service.savings}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {service.innovationLevel}
                  </span>
                  <span className="text-xs text-gray-400">
                    Market: {service.marketSize}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions that deliver powerful capabilities in compact, affordable packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-400 font-semibold">Our Price:</span>
                    <span className="text-white font-bold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Market Average:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Savings:</span>
                    <span className="text-green-400 font-bold">{service.savings}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {service.innovationLevel}
                  </span>
                  <span className="text-xs text-gray-400">
                    Market: {service.marketSize}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our revolutionary services. Get in touch today to start your transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}