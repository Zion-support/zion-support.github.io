import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
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
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaaSServices2025';
import { COMPREHENSIVE_IT_SERVICES_2025 } from '../data/comprehensiveITServices2025';
import { COMPREHENSIVE_AI_SERVICES_2025 } from '../data/comprehensiveAIServices2025';

export default function ComprehensiveServicesLanding2025() {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...COMPREHENSIVE_IT_SERVICES_2025,
    ...COMPREHENSIVE_AI_SERVICES_2025
  ];

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

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  const featuredServices = allServices.filter(service => service.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of AI-powered services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology solutions."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI-powered solutions, enterprise IT services, and innovative micro SAAS platforms. 
              Stay ahead of the competition with technology that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to meet every business need
            </p>
          </motion.div>

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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{service.availability}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{allServices.length}+</div>
              <div className="text-gray-300">Services Available</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">AI Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500%+</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Speak to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}