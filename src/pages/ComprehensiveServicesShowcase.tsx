import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Globe, 
  Building, 
  Zap, 
  Target,
  Star,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popularity');

  // Comprehensive services data
  const services: Service[] = [
    // AI-Powered Space Technology Services
    {
      id: "ai-powered-space-technology-platform",
      title: "AI-Powered Space Technology Platform",
      description: "Cutting-edge AI platform for space exploration, satellite management, and cosmic data analysis with autonomous mission planning capabilities.",
      category: "AI & Space Technology",
      subcategory: "Space Exploration",
      price: 5000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Satellite AI management system",
        "Space data analytics platform",
        "Autonomous mission planning",
        "Real-time space weather monitoring",
        "Satellite constellation optimization",
        "Space debris tracking",
        "Interplanetary communication AI",
        "Space resource mapping"
      ],
      benefits: [
        "Reduce satellite operation costs by 40%",
        "Improve mission success rate by 60%",
        "Real-time space situational awareness",
        "Automated space traffic management",
        "Enhanced space exploration capabilities"
      ],
      useCases: [
        "Space agencies",
        "Satellite operators",
        "Space research institutions",
        "Commercial space companies",
        "Defense organizations"
      ],
      targetAudience: [
        "Space engineers",
        "Satellite operators",
        "Research scientists",
        "Space agency officials",
        "Commercial space companies"
      ],
      tags: ["AI", "Space Technology", "Satellite Management", "Space Exploration", "Mission Planning"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "enterprise",
      marketPrice: "$5,000 - $15,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Quantum-Secure Cloud Infrastructure
    {
      id: "quantum-secure-cloud-infrastructure",
      title: "Quantum-Secure Cloud Infrastructure",
      description: "Next-generation cloud platform with quantum encryption, zero-trust architecture, and advanced threat detection for maximum security.",
      category: "Quantum & Cloud Security",
      subcategory: "Infrastructure Security",
      price: 3500,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Quantum-resistant encryption",
        "Zero-trust security architecture",
        "Advanced threat detection",
        "Real-time security monitoring",
        "Automated incident response",
        "Compliance automation",
        "Multi-cloud management",
        "Disaster recovery"
      ],
      benefits: [
        "Future-proof quantum security",
        "99.99% uptime guarantee",
        "Zero-trust protection",
        "Automated compliance",
        "Scalable infrastructure"
      ],
      useCases: [
        "Financial institutions",
        "Healthcare organizations",
        "Government agencies",
        "Enterprise businesses",
        "Critical infrastructure"
      ],
      targetAudience: [
        "CTOs",
        "Security officers",
        "IT directors",
        "Compliance managers",
        "Enterprise architects"
      ],
      tags: ["Quantum Security", "Cloud Infrastructure", "Zero-Trust", "Compliance", "Enterprise"],
      estimatedDelivery: "3-4 weeks",
      supportLevel: "enterprise",
      marketPrice: "$3,500 - $12,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI-Powered Autonomous Business Operations
    {
      id: "ai-powered-autonomous-business-operations",
      title: "AI-Powered Autonomous Business Operations",
      description: "Revolutionary AI platform that autonomously manages and optimizes your entire business operations with real-time decision making.",
      category: "AI & Business Automation",
      subcategory: "Autonomous Operations",
      price: 2500,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "24/7 autonomous operations",
        "Real-time decision making",
        "Predictive analytics",
        "Process optimization",
        "Resource allocation",
        "Performance monitoring",
        "Automated reporting",
        "Intelligent workflow management"
      ],
      benefits: [
        "Reduce operational costs by 30%",
        "Improve efficiency by 50%",
        "24/7 business operations",
        "Data-driven decisions",
        "Scalable automation"
      ],
      useCases: [
        "Manufacturing companies",
        "Service businesses",
        "E-commerce operations",
        "Healthcare facilities",
        "Financial services"
      ],
      targetAudience: [
        "Operations managers",
        "Business owners",
        "COOs",
        "Process improvement teams",
        "Automation specialists"
      ],
      tags: ["AI", "Business Automation", "Autonomous Operations", "Process Optimization", "Efficiency"],
      estimatedDelivery: "4-5 weeks",
      supportLevel: "premium",
      marketPrice: "$2,500 - $8,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Advanced AI Consciousness Simulation Platform
    {
      id: "advanced-ai-consciousness-simulation",
      title: "Advanced AI Consciousness Simulation Platform",
      description: "Breakthrough platform for simulating and studying AI consciousness, emotional intelligence, and cognitive development patterns.",
      category: "AI & Consciousness Research",
      subcategory: "Cognitive Simulation",
      price: 8000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Consciousness simulation engine",
        "Emotional intelligence modeling",
        "Cognitive development tracking",
        "Behavioral pattern analysis",
        "Ethical decision making",
        "Multi-agent consciousness",
        "Research collaboration tools",
        "Advanced analytics dashboard"
      ],
      benefits: [
        "Advance AI consciousness research",
        "Develop ethical AI systems",
        "Understand cognitive processes",
        "Improve human-AI interaction",
        "Breakthrough research capabilities"
      ],
      useCases: [
        "Research institutions",
        "AI development companies",
        "Psychology departments",
        "Neuroscience labs",
        "Ethics committees"
      ],
      targetAudience: [
        "AI researchers",
        "Neuroscientists",
        "Psychologists",
        "Ethics researchers",
        "Technology philosophers"
      ],
      tags: ["AI Consciousness", "Cognitive Science", "Ethical AI", "Research Platform", "Neuroscience"],
      estimatedDelivery: "6-8 weeks",
      supportLevel: "enterprise",
      marketPrice: "$8,000 - $25,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Quantum Neural Network Platform
    {
      id: "quantum-neural-network-platform",
      title: "Quantum Neural Network Platform",
      description: "Revolutionary platform combining quantum computing with neural networks for unprecedented AI performance and problem-solving capabilities.",
      category: "Quantum & AI",
      subcategory: "Neural Networks",
      price: 6000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Quantum neural network simulator",
        "Hybrid quantum-classical algorithms",
        "Quantum advantage optimization",
        "Real-time quantum processing",
        "Advanced model training",
        "Performance benchmarking",
        "Research collaboration tools",
        "Enterprise integration APIs"
      ],
      benefits: [
        "Exponential performance improvement",
        "Solve previously impossible problems",
        "Future-proof AI technology",
        "Research breakthrough potential",
        "Competitive advantage"
      ],
      useCases: [
        "Drug discovery",
        "Financial modeling",
        "Climate prediction",
        "Material science",
        "Cryptography"
      ],
      targetAudience: [
        "AI researchers",
        "Quantum scientists",
        "Pharmaceutical companies",
        "Financial institutions",
        "Research universities"
      ],
      tags: ["Quantum Computing", "Neural Networks", "AI", "Research Platform", "Breakthrough Technology"],
      estimatedDelivery: "5-7 weeks",
      supportLevel: "enterprise",
      marketPrice: "$6,000 - $20,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Autonomous Business Operations Platform
    {
      id: "autonomous-business-operations-platform",
      title: "Autonomous Business Operations Platform",
      description: "Complete autonomous business management system that runs your business 24/7 with AI-driven decision making and optimization.",
      category: "AI & Business Management",
      subcategory: "Autonomous Operations",
      price: 4000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Full business automation",
        "AI decision engine",
        "Resource optimization",
        "Performance monitoring",
        "Predictive maintenance",
        "Customer service automation",
        "Financial management",
        "Strategic planning"
      ],
      benefits: [
        "24/7 business operations",
        "Reduce human error by 90%",
        "Improve efficiency by 60%",
        "Cost optimization",
        "Scalable growth"
      ],
      useCases: [
        "Small businesses",
        "Medium enterprises",
        "Startups",
        "Service companies",
        "E-commerce businesses"
      ],
      targetAudience: [
        "Business owners",
        "Entrepreneurs",
        "Operations managers",
        "Startup founders",
        "Business consultants"
      ],
      tags: ["Business Automation", "AI Management", "Autonomous Operations", "Efficiency", "Scalability"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "premium",
      marketPrice: "$4,000 - $12,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI-Powered IT Asset Management
    {
      id: "ai-powered-it-asset-management",
      title: "AI-Powered IT Asset Management Platform",
      description: "Intelligent IT asset management system that automatically tracks, optimizes, and maintains your entire technology infrastructure.",
      category: "IT & Infrastructure",
      subcategory: "Asset Management",
      price: 1800,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Automated asset discovery",
        "Lifecycle management",
        "Predictive maintenance",
        "Cost optimization",
        "Compliance tracking",
        "Integration management",
        "Performance monitoring",
        "Automated reporting"
      ],
      benefits: [
        "Reduce IT costs by 25%",
        "Improve asset utilization",
        "Prevent downtime",
        "Automated compliance",
        "Better decision making"
      ],
      useCases: [
        "Enterprise IT departments",
        "Managed service providers",
        "Data centers",
        "Cloud infrastructure",
        "Network operations"
      ],
      targetAudience: [
        "IT directors",
        "Asset managers",
        "System administrators",
        "Operations teams",
        "Compliance officers"
      ],
      tags: ["IT Management", "Asset Management", "Automation", "Compliance", "Cost Optimization"],
      estimatedDelivery: "2-3 weeks",
      supportLevel: "premium",
      marketPrice: "$1,800 - $5,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // SOC2 Compliance Automation Platform
    {
      id: "soc2-compliance-automation",
      title: "SOC2 Compliance Automation Platform",
      description: "Automated SOC2 compliance platform that continuously monitors, documents, and maintains your security and compliance requirements.",
      category: "Compliance & Security",
      subcategory: "SOC2 Compliance",
      price: 2200,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Automated compliance monitoring",
        "Real-time security assessment",
        "Documentation automation",
        "Audit preparation",
        "Risk assessment",
        "Policy management",
        "Training automation",
        "Compliance reporting"
      ],
      benefits: [
        "Achieve SOC2 compliance faster",
        "Reduce audit preparation time",
        "Continuous compliance",
        "Risk mitigation",
        "Cost-effective compliance"
      ],
      useCases: [
        "SaaS companies",
        "Financial services",
        "Healthcare organizations",
        "E-commerce businesses",
        "Technology companies"
      ],
      targetAudience: [
        "Compliance officers",
        "Security managers",
        "Risk managers",
        "Legal teams",
        "IT security teams"
      ],
      tags: ["SOC2", "Compliance", "Security", "Automation", "Risk Management"],
      estimatedDelivery: "3-4 weeks",
      supportLevel: "premium",
      marketPrice: "$2,200 - $6,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI Autonomous Research Assistant
    {
      id: "ai-autonomous-research-assistant",
      title: "AI Autonomous Research Assistant",
      description: "Intelligent research platform that autonomously conducts research, analyzes data, and generates comprehensive reports across any domain.",
      category: "AI & Research",
      subcategory: "Autonomous Research",
      price: 3000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Autonomous research execution",
        "Multi-source data analysis",
        "Intelligent report generation",
        "Trend identification",
        "Citation management",
        "Collaborative research",
        "Real-time updates",
        "Custom research protocols"
      ],
      benefits: [
        "Accelerate research by 10x",
        "Reduce research costs",
        "Comprehensive analysis",
        "24/7 research capability",
        "Scalable research operations"
      ],
      useCases: [
        "Academic institutions",
        "Research organizations",
        "Market research firms",
        "Consulting companies",
        "Government agencies"
      ],
      targetAudience: [
        "Researchers",
        "Analysts",
        "Academics",
        "Consultants",
        "Policy makers"
      ],
      tags: ["AI Research", "Autonomous Systems", "Data Analysis", "Report Generation", "Academic Research"],
      estimatedDelivery: "4-5 weeks",
      supportLevel: "premium",
      marketPrice: "$3,000 - $8,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // 5G Enterprise Solutions Platform
    {
      id: "5g-enterprise-solutions-platform",
      title: "5G Enterprise Solutions Platform",
      description: "Comprehensive 5G enterprise platform providing ultra-fast connectivity, IoT integration, and edge computing capabilities for modern businesses.",
      category: "5G & Connectivity",
      subcategory: "Enterprise Solutions",
      price: 2800,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "5G network optimization",
        "IoT device management",
        "Edge computing platform",
        "Network slicing",
        "Security management",
        "Performance monitoring",
        "Scalable infrastructure",
        "Enterprise integration"
      ],
      benefits: [
        "Ultra-fast connectivity",
        "Low latency operations",
        "Massive IoT support",
        "Enhanced security",
        "Future-ready infrastructure"
      ],
      useCases: [
        "Manufacturing facilities",
        "Smart cities",
        "Healthcare facilities",
        "Transportation systems",
        "Retail environments"
      ],
      targetAudience: [
        "Network engineers",
        "IT directors",
        "Operations managers",
        "Technology officers",
        "Infrastructure teams"
      ],
      tags: ["5G", "Enterprise", "IoT", "Edge Computing", "Connectivity"],
      estimatedDelivery: "3-5 weeks",
      supportLevel: "premium",
      marketPrice: "$2,800 - $7,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Advanced AI Workflow Automation
    {
      id: "advanced-ai-workflow-automation",
      title: "Advanced AI Workflow Automation Platform",
      description: "Intelligent workflow automation platform that uses AI to optimize, automate, and orchestrate complex business processes across your organization.",
      category: "AI & Automation",
      subcategory: "Workflow Automation",
      price: 1600,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "AI-powered process optimization",
        "Intelligent workflow design",
        "Automated decision making",
        "Process monitoring",
        "Performance analytics",
        "Integration capabilities",
        "Custom automation rules",
        "Real-time optimization"
      ],
      benefits: [
        "Increase productivity by 40%",
        "Reduce process errors",
        "Faster workflow execution",
        "Cost optimization",
        "Scalable automation"
      ],
      useCases: [
        "HR departments",
        "Finance teams",
        "Operations",
        "Customer service",
        "Sales processes"
      ],
      targetAudience: [
        "Process improvement teams",
        "Operations managers",
        "Business analysts",
        "Automation specialists",
        "Department heads"
      ],
      tags: ["Workflow Automation", "AI", "Process Optimization", "Efficiency", "Business Process"],
      estimatedDelivery: "2-3 weeks",
      supportLevel: "premium",
      marketPrice: "$1,600 - $4,500/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Blockchain Enterprise Solutions
    {
      id: "blockchain-enterprise-solutions",
      title: "Blockchain Enterprise Solutions Platform",
      description: "Enterprise-grade blockchain platform providing secure, scalable, and compliant solutions for business transformation and digital innovation.",
      category: "Blockchain & Web3",
      subcategory: "Enterprise Solutions",
      price: 3200,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Enterprise blockchain infrastructure",
        "Smart contract development",
        "DeFi integration",
        "Security protocols",
        "Compliance frameworks",
        "Scalability solutions",
        "Interoperability",
        "Analytics dashboard"
      ],
      benefits: [
        "Enhanced security and transparency",
        "Reduced transaction costs",
        "Improved efficiency",
        "Innovative business models",
        "Competitive advantage"
      ],
      useCases: [
        "Supply chain management",
        "Financial services",
        "Healthcare records",
        "Digital identity",
        "Asset management"
      ],
      targetAudience: [
        "Enterprise architects",
        "Blockchain developers",
        "Business strategists",
        "Technology officers",
        "Innovation teams"
      ],
      tags: ["Blockchain", "Enterprise", "Web3", "Smart Contracts", "DeFi"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "premium",
      marketPrice: "$3,200 - $9,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // IoT Data Analytics Platform
    {
      id: "iot-data-analytics-platform",
      title: "IoT Data Analytics Platform",
      description: "Advanced IoT analytics platform that processes, analyzes, and visualizes data from connected devices to drive intelligent business decisions.",
      category: "IoT & Analytics",
      subcategory: "Data Analytics",
      price: 1400,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Real-time data processing",
        "Advanced analytics engine",
        "Predictive modeling",
        "Device management",
        "Data visualization",
        "Alert systems",
        "Integration APIs",
        "Scalable infrastructure"
      ],
      benefits: [
        "Real-time insights",
        "Predictive maintenance",
        "Operational efficiency",
        "Cost reduction",
        "Data-driven decisions"
      ],
      useCases: [
        "Smart manufacturing",
        "Connected cities",
        "Healthcare monitoring",
        "Energy management",
        "Transportation systems"
      ],
      targetAudience: [
        "IoT engineers",
        "Data scientists",
        "Operations managers",
        "Technology officers",
        "Analytics teams"
      ],
      tags: ["IoT", "Data Analytics", "Predictive Analytics", "Real-time Processing", "Smart Devices"],
      estimatedDelivery: "3-4 weeks",
      supportLevel: "premium",
      marketPrice: "$1,400 - $4,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['All Services', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Space Technology':
        return <Rocket className="w-6 h-6" />;
      case 'Quantum & Cloud Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Business Automation':
        return <Brain className="w-6 h-6" />;
      case 'AI & Consciousness Research':
        return <Brain className="w-6 h-6" />;
      case 'Quantum & AI':
        return <Atom className="w-6 h-6" />;
      case 'AI & Business Management':
        return <Building className="w-6 h-6" />;
      case 'IT & Infrastructure':
        return <Globe className="w-6 h-6" />;
      case 'Compliance & Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Research':
        return <Brain className="w-6 h-6" />;
      case '5G & Connectivity':
        return <Zap className="w-6 h-6" />;
      case 'AI & Automation':
        return <Zap className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Globe className="w-6 h-6" />;
      case 'IoT & Analytics':
        return <Target className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Space Technology':
        return 'from-blue-500 to-cyan-500';
      case 'Quantum & Cloud Security':
        return 'from-purple-500 to-pink-500';
      case 'AI & Business Automation':
        return 'from-green-500 to-emerald-500';
      case 'AI & Consciousness Research':
        return 'from-indigo-500 to-purple-500';
      case 'Quantum & AI':
        return 'from-cyan-500 to-blue-500';
      case 'AI & Business Management':
        return 'from-orange-500 to-red-500';
      case 'IT & Infrastructure':
        return 'from-gray-500 to-slate-500';
      case 'Compliance & Security':
        return 'from-red-500 to-pink-500';
      case 'AI & Research':
        return 'from-blue-500 to-indigo-500';
      case '5G & Connectivity':
        return 'from-green-500 to-blue-500';
      case 'AI & Automation':
        return 'from-purple-500 to-indigo-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'IoT & Analytics':
        return 'from-teal-500 to-green-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 text-sm mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300">Comprehensive Services Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive suite of cutting-edge AI, quantum computing, IT infrastructure, and micro SAAS solutions. 
              Transform your business with the future of technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{services.length}</div>
                <div className="text-sm text-gray-400">Total Services</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">300%</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 mb-12">
              <a href="tel:+1 302 464 0950" className="flex items-center hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
              />
              <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category === 'All Services' ? services.length : services.filter(s => s.category === category).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center mr-4`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-cyan-400 font-medium">{service.currency}{service.price.toLocaleString()}/{service.pricingModel}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-xs text-gray-400">• {benefit}</div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                  <div>
                    <span className="text-gray-400">Delivery:</span>
                    <div className="text-white">{service.estimatedDelivery}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Support:</span>
                    <div className="text-white capitalize">{service.supportLevel}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Price:</span>
                    <div className="text-white">{service.marketPrice}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Category:</span>
                    <div className="text-white">{service.category}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Get Started</span>
                  </a>
                  
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Quote</span>
                  </a>

                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/5 border border-white/10 text-gray-300 px-4 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Learn More</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already leveraging our revolutionary technology solutions to achieve unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1 302 464 0950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +1 302 464 0950</span>
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Comprehensive Services Inquiry"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Visit our website for more information:</p>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-2"
                >
                  <span>ziontechgroup.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;