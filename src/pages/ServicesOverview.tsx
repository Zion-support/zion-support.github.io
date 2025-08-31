import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  PenTool,
  Analytics,
  MessageSquare,
  Calendar,
  DollarSign,
  Heart,
  Smile,
  ThumbsUp,
  UserCheck,
  Monitor,
  Smartphone,
  AlertTriangle,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Cpu,
  Lock,
  Database,
  Network,
  Rocket,
  Atom,
  Cloud,
  Server,
  Code,
  Phone,
  Mail,
  MapPin,
  Search,
  FileText,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const ServicesOverview = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Content Intelligence Platform",
      description: "Transform your content strategy with AI-powered intelligence. Analyze performance, optimize engagement, and drive results.",
      features: ["Content Analysis", "Predictive Optimization", "Audience Intelligence", "Multi-platform Integration"],
      pricing: "Starting at $99/month",
      href: "/services/ai-content-intelligence-platform",
      benefits: ["300% increase in content reach", "400% improvement in ROI", "Real-time optimization"]
    },
    {
      icon: Heart,
      title: "AI Customer Experience Analytics",
      description: "Transform your customer experience with AI-powered analytics. Understand, predict, and optimize every customer interaction.",
      features: ["Sentiment Analysis", "Customer Journey Mapping", "Predictive Behavior", "Personalization Engine"],
      pricing: "Starting at $149/month",
      href: "/services/ai-customer-experience-analytics",
      benefits: ["45% increase in customer satisfaction", "60% reduction in churn", "300% improvement in CLV"]
    },
    {
      icon: AlertTriangle,
      title: "AI Financial Risk Management",
      description: "Transform your financial risk management with AI-powered analytics. Monitor, predict, and mitigate risks effectively.",
      features: ["Risk Assessment", "Market Monitoring", "Predictive Modeling", "Portfolio Analysis"],
      pricing: "Starting at $299/month",
      href: "/services/ai-financial-risk-management",
      benefits: ["48-hour early risk detection", "35% reduction in losses", "40% cost savings"]
    },
    {
      icon: Brain,
      title: "AI Supply Chain Optimization",
      description: "Revolutionize your supply chain with AI-powered optimization and predictive analytics.",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"],
      pricing: "Starting at $199/month",
      href: "/services/ai-supply-chain-optimization",
      benefits: ["30% cost reduction", "95% forecast accuracy", "40% efficiency increase"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered cybersecurity platform for threat detection and prevention.",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Security Automation"],
      pricing: "Starting at $399/month",
      href: "/services/ai-cybersecurity-platform",
      benefits: ["99.9% threat blocking", "< 1 second response time", "AI-powered automation"]
    },
    {
      icon: Heart,
      title: "AI Healthcare Platform",
      description: "AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization.",
      features: ["Medical Imaging", "Diagnostic Support", "Treatment Planning", "Patient Monitoring"],
      pricing: "Starting at $599/month",
      href: "/services/ai-healthcare-platform",
      benefits: ["95% diagnostic accuracy", "25% cost reduction", "HIPAA compliance"]
    }
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
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Analytics",
      description: "Comprehensive analytics platform for e-commerce businesses to optimize performance.",
      features: ["Sales Analytics", "Customer Insights", "Conversion Optimization", "Inventory Management"],
      pricing: "Starting at $69/month",
      href: "/services/ecommerce-analytics",
      benefits: ["Better conversion rates", "Improved customer experience", "Increased sales"]
    }
  ];

  const contactInfo = {
    phone: "+1 (302) 464-0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <SEO 
        title="Services Overview | Zion Tech Group"
        description="Explore our comprehensive range of AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro SAAS, technology services, digital transformation, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Comprehensive Technology Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Our Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Overview
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of AI-powered services, IT solutions, and micro SAAS platforms. 
                From cutting-edge artificial intelligence to robust infrastructure solutions, we have everything 
                you need to transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Brain className="w-5 h-5" />
                <span>AI & Machine Learning Services</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence technology. 
                Our AI services deliver measurable results and competitive advantages.
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
=======
import { Search, Filter, Star, TrendingUp, Clock, Users, DollarSign, Globe, Shield, Bot, Cloud, BarChart3, Workflow, FileText, Sparkles, Building, Car, Leaf, Zap, Home, Scale, GraduationCap, ShoppingCart, Hotel } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { enhancedServices2025 } from '../../data/enhanced-2025-services';
import { specializedIndustryServices } from '../../data/specialized-industry-services';
import { allServices } from '../../data/services';
import { Link } from 'react-router-dom';
export default function ServicesOverview() {
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
  ];
  // Industries for filtering
  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'Manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'Healthcare', name: 'Healthcare', icon: FileText },
    { id: 'Legal', name: 'Legal', icon: Scale },
    { id: 'Real Estate', name: 'Real Estate', icon: Home },
    { id: 'Agriculture', name: 'Agriculture', icon: Leaf },
    { id: 'Energy', name: 'Energy', icon: Zap },
    { id: 'Transportation', name: 'Transportation', icon: Car },
    { id: 'Retail', name: 'Retail', icon: ShoppingCart },
    { id: 'Hospitality', name: 'Hospitality', icon: Hotel },
    { id: 'Education', name: 'Education', icon: GraduationCap },
    { id: 'Finance', name: 'Finance', icon: DollarSign }
  ];
  // Filter and sort services
  const filteredServices = allAvailableServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesIndustry = selectedIndustry === 'all' || 
                             (service.industry && service.industry === selectedIndustry) ||
                             (!service.industry && selectedIndustry === 'all');
      return matchesSearch && matchesCategory && matchesIndustry;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return (a.pricing?.starter || 0) - (b.pricing?.starter || 0);
        case 'price-high':
          return (b.pricing?.starter || 0) - (a.pricing?.starter || 0);
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        case 'new':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });
  const renderServiceCard = (service: any) => (
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
          {(service.features || []).slice(0, 4).map((feature: string, index: number) => (
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
          {(service.benefits || []).slice(0, 3).map((benefit: string, index: number) => (
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
          {service.targetAudience?.slice(0, 3).map((audience: string, index: number) => (
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
        </div>
      </div>
    </motion.div>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Zion Tech Group - Complete Services Overview & Pricing"
        description="Explore our comprehensive range of AI, IT, and specialized industry services. Detailed pricing, features, and ROI information for all our technology solutions."
        keywords="AI services pricing, IT services, specialized industry solutions, technology consulting, digital transformation, service pricing"
        canonicalUrl="https://ziontechgroup.com/services-overview"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Complete Services
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Overview
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive portfolio of cutting-edge technology services, complete with detailed pricing, features, and ROI information.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call +1 (302) 464-0950
            </a>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {categories.map(category => (
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {industries.map(industry => (
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
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Server className="w-5 h-5" />
                <span>IT Infrastructure & Services</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                IT Infrastructure Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT infrastructure and managed services for modern enterprises. 
                Build, deploy, and manage your technology foundation with confidence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-cyan-400">{service.pricing}</p>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Code className="w-5 h-5" />
                <span>Micro SAAS Solutions</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Micro SAAS Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scalable software-as-a-service solutions designed for specific business needs. 
                Affordable, powerful, and easy to implement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {microSaaSServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-cyan-400">{service.pricing}</p>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss how we can help transform your business with our technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesOverview;