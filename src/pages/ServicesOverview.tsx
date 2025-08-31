import React, { useState } from 'react';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Server, 
  ShoppingCart, 
  Shield, 
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
  BarChart3, 
  Cloud, 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Rocket,
  Zap,
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Network,
  Phone,
  Mail,
  MapPin
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Advanced analytics and insights powered by AI",
          link: "/services/ai-business-intelligence-dashboard",
          price: "$299/month"
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer service with 24/7 availability",
          link: "/services/ai-customer-support-automation",
          price: "$199/month"
        },
        {
          name: "AI Project Management Platform",
          description: "Smart project planning and resource optimization",
          link: "/services/ai-project-management-platform",
          price: "$399/month"
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Data-driven marketing campaigns and optimization",
          link: "/services/ai-marketing-automation-platform",
          price: "$249/month"
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent business process automation",
          link: "/services/ai-workflow-orchestrator",
          price: "$349/month"
        },
        {
          name: "AI Predictive Maintenance",
          description: "Preventive maintenance using machine learning",
          link: "/services/ai-predictive-maintenance",
          price: "$599/month"
        }
      ]
    },
    {
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  DollarSign,
  Users,
  Eye,
  ArrowUpRight,
  Grid,
  List,
  ChevronRight,
  ChevronDown,
  Info,
  Calendar,
  UserCheck,
  Globe,
  Layers,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  Zap,
  Target,
  Award,
  Clock,
  Users,
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon
import { SEO              } from '../components/SEO';
import { servicesCatalog              } from '../data/servicesCatalog';

// Enhanced category definitions with better organization
const serviceCategories = [
  {
    id: 'all',
    name: 'All Services',
    icon: Grid,
    color: 'from-blue-600 to-cyan-600',
    description: 'Complete portfolio of all services',
    count: 0
  },
  {
    id: 'Micro SaaS',
    name: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    color: 'from-purple-600 to-pink-600',
    description: 'Scalable software-as-a-service solutions',
    count: 0
  },
  {
    id: 'IT Services',
    name: 'IT Services',
    icon: Server,
    color: 'from-green-600 to-emerald-600',
    description: 'Enterprise IT infrastructure and consulting',
    count: 0
  },
  {
    id: 'AI Solutions',
    name: 'AI Solutions',
    icon: Brain,
    color: 'from-indigo-600 to-purple-600',
    description: 'Advanced AI and machine learning solutions',
    count: 0
  },
  {
    id: 'Cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    description: 'Security and compliance solutions',
    count: 0
  },
  {
    id: 'Cloud & DevOps',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-600',
    description: 'Cloud infrastructure and development operations',
    count: 0
  },
  {
    id: 'Emerging Tech',
    name: 'Emerging Technologies',
    icon: Sparkles,
    color: 'from-yellow-600 to-orange-600',
    description: 'Cutting-edge technologies and innovations',
    count: 0

];

// Enhanced service features display
const ServiceCard = ({ service, viewMode }: { service: anyanyanyanyanyanyanyanyanyanyanyanyany; viewMode: 'grid' | 'list' })              => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.icon : Grid;
  };
=======
import { Search, Filter, Star, TrendingUp, Clock, Users, DollarSign, Globe, Shield, Bot, Cloud, BarChart3, Workflow, FileText, Sparkles, Building, Car, Leaf, Zap, Home, Scale, GraduationCap, ShoppingCart, Hotel              } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';
import { enhancedServices2025              } from '../../data/enhanced-2025-services';
import { specializedIndustryServices              } from '../../data/specialized-industry-services';
import { allServices              } from '../../data/services';
import { Link              } from 'react-router-dom.ts';

export default function ServicesOverview(...args: any[]): any {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allAvailableServices = [
    ...enhancedServices2025,
    ...specializedIndustryServices,
    ...allServices
  ];
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'AI', name: 'AI & Machine Learning', icon: Bot },
    { id: 'IT', name: 'IT & Infrastructure', icon: Cloud },
    { id: 'Security', name: 'Security & Compliance', icon: Shield },
    { id: 'Analytics', name: 'Analytics & BI', icon: BarChart3 },
    { id: 'Automation', name: 'Automation', icon: Workflow },
    { id: 'Fintech', name: 'Fintech', icon: DollarSign },
    { id: 'Healthcare', name: 'Healthcare', icon: FileText },
    { id: 'Education', name: 'Education', icon: GraduationCap },
    { id: 'Marketing', name: 'Marketing', icon: ShoppingCart },
    { id: 'Development', name: 'Development', icon: Building },
    { id: 'SAAS', name: 'SAAS Solutions', icon: Cloud }
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  ];

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Comprehensive cloud infrastructure and DevOps automation services for modern applications.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Logging"],
      pricing: "Starting at $150/hour",
      href: "/services/cloud-devops",
      benefits: ["Faster deployment cycles", "Improved reliability", "Cost optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "End-to-end cybersecurity solutions to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Incident Response", "Security Training"],
      pricing: "Starting at $200/hour",
      href: "/services/cybersecurity",
      benefits: ["Comprehensive protection", "24/7 monitoring", "Compliance assurance"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data engineering, analytics, and business intelligence solutions for data-driven decisions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Governance"],
      pricing: "Starting at $175/hour",
      href: "/services/data-analytics",
      benefits: ["Actionable insights", "Improved decision making", "Operational efficiency"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of enterprise network infrastructure.",
      features: ["Network Design", "Implementation", "Management", "Security"],
      pricing: "Starting at $125/hour",
      href: "/services/network-infrastructure",
      benefits: ["Reliable connectivity", "Scalable architecture", "Performance optimization"]
    }
  ];

  const microSaaSServices = [
    {
      icon: Code,
      title: "Micro CRM Platform",
      description: "Lightweight, scalable CRM solution designed for small to medium businesses.",
      features: ["Contact Management", "Sales Pipeline", "Email Integration", "Analytics"],
      pricing: "Starting at $49/month",
      href: "/services/micro-crm",
      benefits: ["Easy to use", "Affordable pricing", "Quick implementation"]
    },
    {
      icon: Search,
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO optimization platform with AI-driven insights and recommendations.",
      features: ["Keyword Research", "Content Optimization", "Ranking Analysis", "Competitive Intelligence"],
      pricing: "Starting at $79/month",
      href: "/services/ai-powered-seo",
      benefits: ["Higher search rankings", "Increased organic traffic", "Better ROI"]
    },
    {
      icon: FileText,
      title: "LLM Content Studio",
      description: "AI-powered content creation and optimization platform for marketers and creators.",
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Performance Analytics"],
      pricing: "Starting at $89/month",
      href: "/services/llm-content-studio",
      benefits: ["Faster content creation", "Better quality", "SEO optimization"]
=======
      id: 'IT Services',
      name: 'IT Services',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      description: 'Enterprise-grade IT infrastructure and digital transformation solutions',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').length
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Advanced security solutions and regulatory compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "AI Cybersecurity Platform",
          description: "AI-powered threat detection and response",
          link: "/services/ai-cybersecurity-platform",
          price: "$899/month"
        },
        {
          name: "AI Cybersecurity Threat Intelligence",
          description: "Real-time threat intelligence and analysis",
          link: "/services/ai-cybersecurity-threat-intelligence",
          price: "$699/month"
        },
        {
          name: "Quantum AI Cybersecurity Platform",
          description: "Quantum-resistant security solutions",
          link: "/services/quantum-ai-cybersecurity-platform",
          price: "$1,499/month"
        },
        {
          name: "Zero Trust Network Architecture",
          description: "Modern security framework implementation",
          link: "/services/ZeroTrustNetworkArchitecture",
          price: "$1,199/month"
        }
      ]
    },
    {
      title: "Specialized AI Services",
      description: "Industry-specific AI solutions and specialized platforms",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      services: [
        {
          name: "AI Healthcare Analytics Platform",
          description: "Healthcare data analytics and patient insights",
          link: "/services/ai-healthcare-analytics-platform",
          price: "$1,199/month"
        },
        {
          name: "AI Financial Trading Platform",
          description: "Algorithmic trading and financial analytics",
          link: "/services/ai-financial-trading-platform",
          price: "$1,999/month"
        },
        {
          name: "AI Legal Document Automation",
          description: "Legal document processing and automation",
          link: "/services/ai-legal-document-automation-platform",
          price: "$799/month"
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Supply chain intelligence and optimization",
          link: "/services/ai-supply-chain-optimization-platform",
          price: "$899/month"
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Cutting-edge solutions in quantum computing and space technology",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "AI Quantum Computing Solutions",
          description: "Quantum computing integration and optimization",
          link: "/services/ai-quantum-computing-solutions",
          price: "$2,499/month"
        },
        {
          name: "AI Space Technology Platform",
          description: "Space technology applications and satellite data",
          link: "/services/ai-space-technology-platform",
          price: "$1,999/month"
        },
        {
          name: "AI Autonomous Logistics Platform",
          description: "Autonomous logistics and supply chain management",
          link: "/services/ai-autonomous-logistics-platform",
          price: "$1,299/month"
        },
        {
          name: "Quantum Edge Computing Solutions",
          description: "Quantum-enhanced edge computing infrastructure",
          link: "/services/quantum-edge-computing-solutions",
          price: "$1,799/month"
        }
      ]
    },
    {
      title: "Content & Creative AI",
      description: "AI-powered content creation and creative tools",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      services: [
        {
          name: "AI Content Creation Studio",
          description: "AI-powered content generation and optimization",
          link: "/services/ai-content-creation-studio",
          price: "$99/month"
        },
        {
          name: "AI-Powered SEO",
          description: "Search engine optimization with AI insights",
          link: "/services/ai-powered-seo",
          price: "$299/month"
        },
        {
          name: "AI Educational Content Creation",
          description: "Educational content and learning materials",
          link: "/services/ai-educational-content-creation",
          price: "$199/month"
        },
        {
          name: "AI Content Marketing Suite",
          description: "Comprehensive content marketing platform",
          link: "/services/ai-content-marketing-suite",
          price: "$399/month"
        }
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES_2025 
    : INNOVATIVE_SERVICES_2025.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'IT Services': return Server;
      case 'Micro SaaS': return ShoppingCart;
      case 'Cybersecurity': return Shield;
      case 'Data Analytics': return BarChart3;
      case 'Cloud Services': return Cloud;
      case 'Emerging Tech': return Rocket;
      default: return Zap;
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
    }
  ];

  const resources = [
    {
      title: "Blog & Insights",
      description: "Latest industry trends and technology insights",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/blog"
    },
    {
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/case-studies"
    },
    {
      title: "Webinars",
      description: "Educational webinars and expert presentations",
      icon: <Monitor className="w-6 h-6" />,
      link: "/webinars"
    },
    {
      title: "White Papers",
      description: "In-depth research and technical documentation",
      icon: <FileText className="w-6 h-6" />,
      link: "/white-papers"
    },
    {
      title: "Training",
      description: "Professional development and certification programs",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "/training"
    },
    {
      title: "Support",
      description: "24/7 technical support and customer service",
      icon: <Headphones className="w-6 h-6" />,
      link: "/help"
    }
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  };
=======
  const renderServiceCard = (service: anyanyanyanyanyanyanyanyanyanyanyanyany)              => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    <motion.div
      key={service.id}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl mb-2">{service.icon}</div>
        <div className="flex gap-2">
          {service.isPopular && (
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Popular
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </span>
          )}
          {service.isNew && (
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
      {service.tagline && (
        <p className="text-cyan-400 text-sm mb-2 italic">"{service.tagline}"</p>
      )}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
      
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            ${service.pricing?.starter || service.price?.replace(/[^0-9]/g, '') || 'Contact'}
          </span>
          <span className="text-gray-400 text-sm">
            {service.pricing?.period || '/month'}
          </span>
        </div>
        {service.pricing?.professional && (
          <div className="text-sm text-gray-400 mt-1">
            Pro: ${service.pricing.professional}/month | Enterprise: ${service.pricing.enterprise}/month
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
        <ul className="space-y-1">
          {(service.features || []).slice(0, 4).map((feature: anyanyanyanyanyanyanyanyanyanyanyanyanystring, index: number)              => (
            <li key={index} className="text-gray-300 text-xs flex items-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Benefits:</h4>
        <ul className="space-y-1">
          {(service.benefits || []).slice(0, 3).map((benefit: anyanyanyanyanyanyanyanyanyanyanyanyanystring, index: number)              => (
            <li key={index} className="text-gray-300 text-xs flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {service.marketPosition && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg">
          <p className="text-gray-300 text-xs italic">"{service.marketPosition}"</p>
        </div>
      )}

      {service.roi && (
        <div className="mb-4 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-xs font-semibold">ROI: {service.roi}</p>
        </div>
      )}

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.targetAudience?.slice(0, 3).map((audience: anyanyanyanyanyanyanyanyanyanyanyanyanystring, index: number)              => (
            <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
              {audience}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={service.link || `/services/${service.id}`}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          Learn More →
        </Link>
        
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          {service.trialDays && (
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {service.trialDays}d trial
            </span>
          )}
          {service.setupTime && (
            <span className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {service.setupTime}
            </span>
          )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </div>
      </div>
    </motion.div>
  );
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services Overview
              </span>
              <span className="block text-white">Complete Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-cyan-400"
                >
                  {categories.map(category              => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-cyan-400"
                >
                  {industries.map(industry              => (
                    <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                  <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                  <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                  <option value="new" className="bg-slate-800 text-white">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {filteredServices.length} Services Available
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {allAvailableServices.length} services
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map(renderServiceCard)}
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us to discuss your specific needs and get a customized solution for your business.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-cyan-400">
                      {service.pricing}
                    </p>
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
=======
              Discover our comprehensive range of innovative technology services designed to 
              transform your business, enhance efficiency, and drive competitive advantage.
            </motion.p>
            <motion.div 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>{INNOVATIVE_SERVICES_2025.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Cutting-edge Technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id || selectedCategory === 'all'
                    ? 'border-cyan-500 bg-slate-800/80'
                    : 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50'
                }`}
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.link}
                      className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions designed for specific industries and business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={solution.link}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Resources & Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access our knowledge base, training materials, and expert support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={resource.link}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-purple-400">
                        {resource.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{resource.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let our team of experts help you choose the right solutions and implement them successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}