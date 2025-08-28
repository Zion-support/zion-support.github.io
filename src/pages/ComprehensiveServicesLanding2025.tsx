import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box,
  Phone,
  Mail as MailIcon,
  MapPin,
  Globe as GlobeIcon,
  ExternalLink,
  FileText,
  Truck,
  Heart,
  Scale,
  Eye,
  RefreshCw,
  GraduationCap,
  Play
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeServices2025';

const ComprehensiveServicesLanding2025: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-8 h-8" />;
      case 'AI & Security':
        return <Shield className="w-8 h-8" />;
      case 'AI & Marketing':
        return <BarChart3 className="w-8 h-8" />;
      case 'AI & Sales':
        return <TrendingUp className="w-8 h-8" />;
      case 'AI & Customer Experience':
        return <MessageSquare className="w-8 h-8" />;
      case 'AI & Analytics':
        return <Database className="w-8 h-8" />;
      case 'Quantum Computing':
        return <Box className="w-8 h-8" />;
      case 'IoT & Edge Computing':
        return <Network className="w-8 h-8" />;
      case 'Blockchain & Web3':
        return <Wallet className="w-8 h-8" />;
      case 'Sustainability & Technology':
        return <Leaf className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return 'from-purple-500 to-pink-500';
      case 'AI & Security':
        return 'from-red-500 to-orange-500';
      case 'AI & Marketing':
        return 'from-blue-500 to-cyan-500';
      case 'AI & Sales':
        return 'from-green-500 to-emerald-500';
      case 'AI & Customer Experience':
        return 'from-indigo-500 to-purple-500';
      case 'AI & Analytics':
        return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing':
        return 'from-violet-500 to-purple-500';
      case 'IoT & Edge Computing':
        return 'from-orange-500 to-red-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Sustainability & Technology':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const serviceCategories = [
    {
      title: "AI & Business Intelligence",
      description: "Transform your business with intelligent data insights and predictive analytics",
      services: [
        {
          name: "AI-Powered Business Intelligence Suite",
          description: "Enterprise-grade BI platform with natural language queries and predictive analytics",
          price: "$4,999",
          features: ["Natural language queries", "Predictive analytics", "Automated insights", "95% accuracy"],
          href: "/services#ai-business-intelligence"
        }
      ],
      icon: Brain,
      color: "from-purple-500 to-cyan-500"
    },
    {
      title: "AI & Content Creation",
      description: "Create engaging content across all channels with AI-powered generation",
      services: [
        {
          name: "AI Content Creation Studio 2030",
          description: "Next-generation AI content creation platform with multi-modal generation",
          price: "$2,999",
          features: ["Multi-modal generation", "Brand voice consistency", "Real-time collaboration", "98% brand alignment"],
          href: "/services#ai-content"
        }
      ],
      icon: FileText,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI & Customer Support",
      description: "Automate customer support with intelligent chatbots and sentiment analysis",
      services: [
        {
          name: "AI Customer Support Automation 2030",
          description: "Intelligent customer support platform with predictive issue resolution",
          price: "$3,999",
          features: ["Sentiment analysis", "Multilingual support", "Predictive resolution", "85% automation"],
          href: "/services#ai-customer-support"
        }
      ],
      icon: MessageSquare,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI & HR & Recruitment",
      description: "Streamline HR processes with AI-powered candidate screening and assessment",
      services: [
        {
          name: "AI HR & Recruitment Platform 2030",
          description: "Comprehensive HR platform with AI-powered candidate screening",
          price: "$5,999",
          features: ["AI candidate screening", "Skill assessment", "Cultural fit analysis", "60% faster hiring"],
          href: "/services#ai-hr"
        }
      ],
      icon: Users,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "AI & Financial Operations",
      description: "Automate financial processes with intelligent bookkeeping and forecasting",
      services: [
        {
          name: "AI Financial Operations Platform 2030",
          description: "Intelligent financial operations platform with automated bookkeeping",
          price: "$7,999",
          features: ["AI bookkeeping", "Expense management", "Financial forecasting", "90% error reduction"],
          href: "/services#fintech"
        }
      ],
      icon: DollarSign,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "AI & Supply Chain",
      description: "Optimize supply chain operations with AI-powered forecasting and automation",
      services: [
        {
          name: "AI Supply Chain Optimization 2030",
          description: "Intelligent supply chain platform with demand forecasting",
          price: "$8,999",
          features: ["Demand forecasting", "Inventory optimization", "Logistics automation", "35% cost reduction"],
          href: "/services#ai-operations"
        }
      ],
      icon: Truck,
      color: "from-gray-500 to-slate-500"
    },
    {
      title: "AI & Healthcare",
      description: "Revolutionize healthcare with AI-powered diagnostics and treatment recommendations",
      services: [
        {
          name: "AI Healthcare Diagnostics Platform 2030",
          description: "Advanced healthcare diagnostics platform with medical image analysis",
          price: "$12,999",
          features: ["Medical image analysis", "Symptom assessment", "Treatment recommendations", "96% accuracy"],
          href: "/services#ai-healthcare"
        }
      ],
      icon: Heart,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "AI & Legal Tech",
      description: "Streamline legal processes with AI-powered contract analysis and compliance",
      services: [
        {
          name: "AI Legal Tech Platform 2030",
          description: "Comprehensive legal technology platform with contract analysis",
          price: "$9,999",
          features: ["Contract analysis", "Legal research automation", "Compliance monitoring", "80% time reduction"],
          href: "/services#ai-legal-tech"
        }
      ],
      icon: Scale,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI & Research",
      description: "Accelerate research with AI-powered literature review and hypothesis generation",
      services: [
        {
          name: "AI Research & Development Platform 2030",
          description: "Intelligent R&D platform with automated literature review",
          price: "$14,999",
          features: ["Literature review automation", "Hypothesis generation", "Experimental design", "300% acceleration"],
          href: "/services#ai-research"
        }
      ],
      icon: Eye,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "AI & Green Tech",
      description: "Drive sustainability with AI-powered energy optimization and carbon tracking",
      services: [
        {
          name: "AI Green Technology Platform 2030",
          description: "Sustainable technology platform with energy optimization",
          price: "$7,999",
          features: ["Energy optimization", "Carbon footprint tracking", "Environmental impact assessment", "40% cost reduction"],
          href: "/services#ai-green-tech"
        }
      ],
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI & Metaverse",
      description: "Build immersive experiences with AI-powered 3D modeling and virtual environments",
      services: [
        {
          name: "AI Metaverse Development Platform 2030",
          description: "Next-generation metaverse development platform with AI-powered 3D modeling",
          price: "$11,999",
          features: ["3D modeling tools", "Virtual environment creation", "Immersive experiences", "70% faster development"],
          href: "/services#ai-metaverse"
        }
      ],
      icon: Globe,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI & Space Tech",
      description: "Optimize space operations with AI-powered satellite management and mission planning",
      services: [
        {
          name: "AI Space Technology Platform 2030",
          description: "Advanced space technology platform with satellite operations automation",
          price: "$19,999",
          features: ["Satellite operations", "Mission planning", "Space analytics", "85% success rate"],
          href: "/services#ai-space-tech"
        }
      ],
      icon: Rocket,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI & Blockchain & Web3",
      description: "Optimize blockchain operations with AI-powered smart contracts and DeFi analytics",
      services: [
        {
          name: "AI Blockchain & Web3 Platform 2030",
          description: "Intelligent blockchain platform with AI-powered smart contract optimization",
          price: "$9,999",
          features: ["Smart contract optimization", "DeFi analytics", "Web3 development", "60% gas fee reduction"],
          href: "/services#blockchain-web3"
        }
      ],
      icon: Lock,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI & Edge Computing",
      description: "Process data at the edge with AI-powered real-time analytics and IoT management",
      services: [
        {
          name: "AI Edge Computing Platform 2030",
          description: "Advanced edge computing platform with AI-powered data processing",
          price: "$8,999",
          features: ["Edge data processing", "Real-time analytics", "IoT device management", "80% latency reduction"],
          href: "/services#iot-edge-computing"
        }
      ],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Digital Twin",
      description: "Monitor and simulate operations with AI-powered digital twin technology",
      services: [
        {
          name: "AI Digital Twin Platform 2030",
          description: "Intelligent digital twin platform with real-time monitoring",
          price: "$12,999",
          features: ["Real-time monitoring", "Predictive maintenance", "Simulation capabilities", "45% cost reduction"],
          href: "/services#digital-twin"
        }
      ],
      icon: RefreshCw,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI & Education",
      description: "Personalize learning with AI-powered tutoring and adaptive assessments",
      services: [
        {
          name: "AI Education Platform 2030",
          description: "Intelligent education platform with personalized learning paths",
          price: "$6,999",
          features: ["Personalized learning", "Adaptive assessments", "AI tutoring", "65% outcome improvement"],
          href: "/services#ai-education"
        }
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI & Entertainment",
      description: "Engage users with AI-powered content recommendation and interactive storytelling",
      services: [
        {
          name: "AI Entertainment Platform 2030",
          description: "Next-generation entertainment platform with AI-powered content recommendation",
          price: "$7,999",
          features: ["Content recommendation", "Personalized experiences", "Interactive storytelling", "75% engagement increase"],
          href: "/services#ai-entertainment"
        }
      ],
      icon: Play,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Development",
      description: "Accelerate development with AI-powered code generation and testing",
      services: [
        {
          name: "AI Development & Testing Platform 2030",
          description: "Intelligent development platform with AI-powered code generation",
          price: "$8,999",
          features: ["AI code generation", "Automated testing", "Quality assurance", "50% faster development"],
          href: "/services#ai-development"
        }
      ],
      icon: Code,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your assets with AI-powered threat detection and zero-trust security",
      services: [
        {
          name: "Zero-Trust Cybersecurity Platform",
          description: "Comprehensive zero-trust security solution with AI-powered threat detection",
          price: "$8,999",
          features: ["Zero trust", "Continuous authentication", "Threat detection", "85% incident reduction"],
          href: "/services#cybersecurity"
        }
      ],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Optimize cloud infrastructure with AI-powered management and automation",
      services: [
        {
          name: "Intelligent Cloud Infrastructure Platform",
          description: "AI-driven cloud infrastructure management with automated scaling",
          price: "$6,999",
          features: ["Cloud management", "Cost optimization", "Auto-scaling", "40% cost reduction"],
          href: "/services#cloud-devops"
        }
      ],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const totalServices = INNOVATIVE_SERVICES_2025.length;
  const totalValue = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.price, 0);
  const avgROI = INNOVATIVE_SERVICES_2025.reduce((sum, service) => {
    const roi = parseInt(service.roi.replace('%', ''));
    return sum + roi;
  }, 0) / totalServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Landing 2025 - Zion Tech Group"
        description="Discover our complete portfolio of innovative technology services. From AI and Quantum Computing to IoT and Blockchain solutions - transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Comprehensive Services 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                Solutions Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive suite of innovative technology services designed to transform 
              your business operations and drive digital innovation across all industries.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-blue-400 mb-2">{totalServices}</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">${(totalValue / 1000).toFixed(0)}K+</div>
                <div className="text-gray-300">Monthly Value</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">{Math.round(avgROI)}%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/innovative-services-showcase-2025"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Explore All Services
              </Link>
              <Link
                to="/comprehensive-pricing-guide-2027"
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                View Pricing Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our services by category to find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to="/innovative-services-showcase-2025"
                  className="block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${category.color}/20 rounded-2xl border border-${category.color.split('-')[1]}-400/30 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${category.color.split('-')[1]}-400`}>
                        {category.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {category.services.length} innovative services designed to transform your {category.title.toLowerCase().replace(' & ', ' ').replace(' &', '').replace('ai', 'AI').replace('web3', 'Web3').replace('edge computing', 'Edge Computing').replace('digital twin', 'Digital Twin').replace('development', 'Development').replace('entertainment', 'Entertainment').replace('education', 'Education').replace('green tech', 'Green Tech').replace('research', 'Research').replace('legal tech', 'Legal Tech').replace('healthcare', 'Healthcare').replace('supply chain', 'Supply Chain').replace('financial operations', 'Financial Operations').replace('hr', 'HR').replace('customer support', 'Customer Support').replace('content creation', 'Content Creation').replace('business intelligence', 'Business Intelligence').replace('entertainment', 'Entertainment').replace('development', 'Development').replace('ai', 'AI').replace('web3', 'Web3').replace('edge computing', 'Edge Computing').replace('digital twin', 'Digital Twin').replace('development', 'Development').replace('entertainment', 'Entertainment').replace('education', 'Education').replace('green tech', 'Green Tech').replace('research', 'Research').replace('legal tech', 'Legal Tech').replace('healthcare', 'Healthcare').replace('supply chain', 'Supply Chain').replace('financial operations', 'Financial Operations').replace('hr', 'HR').replace('customer support', 'Customer Support').replace('content creation', 'Content Creation').replace('business intelligence', 'Business Intelligence')} operations
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="truncate">{service.name}</span>
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-sm text-blue-400">
                          +{category.services.length - 3} more services
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INNOVATIVE_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500">
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-3 h-3 mr-1" />
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                <Link
                  to="/innovative-services-showcase-2025"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 text-center block"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/innovative-services-showcase-2025"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver 
              solutions that drive real results and measurable ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Innovation First',
                description: 'Leading-edge technology solutions that keep you ahead of the competition'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Proven ROI',
                description: 'Measurable business outcomes with transparent ROI projections'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 technical support and dedicated account management'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Bank-grade security with compliance certifications and best practices'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 mb-6">
                  <div className="text-blue-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you select the perfect solution 
              and provide a customized implementation plan for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-blue-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-purple-400">
                <MailIcon className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-pink-400">
                <GlobeIcon className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Call Sales Team
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Email Sales
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesLanding2025;