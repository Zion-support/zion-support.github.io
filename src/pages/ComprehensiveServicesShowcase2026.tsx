<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Zap, 
  Rocket, 
  Target, 
  Users, 
  Globe, 
  Database, 
  Cloud,
  CheckCircle,
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Search,
  Filter,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
  ArrowRight,
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Star,
  Clock,
<<<<<<< HEAD
  DollarSign,
  BarChart3,
  Cpu,
  Network,
  BookOpen,
  GraduationCap,
  Building2,
  Atom,
  Satellite,
  Search,
  FileText,
  Server,
  Truck,
  Leaf,
  TrendingUp,
  Lock,
  Lightbulb,
  Sparkles
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Research Assistant",
      description: "AI-powered research that works 24/7, continuously gathering and analyzing data from multiple sources",
      price: "From $299/month",
      features: ["Autonomous research", "Multi-source intelligence", "Predictive analytics", "Collaborative research"],
      link: "/services/ai-autonomous-research-assistant",
      category: "AI & Research"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Threat Intelligence",
      description: "Advanced AI-powered threat detection with 99.9% accuracy and real-time response capabilities",
      price: "From $499/month",
      features: ["AI threat detection", "Real-time monitoring", "Predictive intelligence", "Automated response"],
      link: "/services/ai-cybersecurity-threat-intelligence",
      category: "Cybersecurity"
    },
    {
      icon: Heart,
      title: "AI Healthcare Diagnostics Platform",
      description: "Revolutionary AI-powered healthcare diagnostics with 99.7% accuracy for early disease detection",
      price: "From $799/month",
      features: ["AI-powered diagnosis", "Multi-modal analysis", "Predictive healthcare", "HIPAA compliant"],
      link: "/services/ai-healthcare-diagnostics-platform",
      category: "Healthcare"
    },
    {
<<<<<<< HEAD
      title: "AI Smart Home Energy Management Platform",
      description: "Transform your home into an intelligent, energy-efficient ecosystem. Our AI platform optimizes energy consumption, reduces costs by up to 30%, and gives you complete control.",
      price: "From $19/month",
      features: ["AI Energy Optimization", "Smart Device Integration", "Real-time Monitoring", "Predictive Analytics"],
      href: "/services/ai-smart-home-energy-management-platform",
      color: "from-green-400 to-blue-500",
      popular: false,
      icon: Home,
      benefits: ["30% energy savings", "$200+ monthly savings", "25% environmental impact", "24/7 convenience"]
=======
  CheckCircle,
  ArrowRight
import { SEO              } from '../components/SEO';
import { revolutionaryMicroSaasServices2026,
  revolutionaryITInfrastructureServices2026,
  revolutionaryAIServices2026,
  ALL_REVOLUTIONARY_SERVICES_2026
             } from '../data/comprehensiveServices2026';
const ComprehensiveServicesShowcase2026: React.FC = (): JSX.Element => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const categories = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.innovationLevel)))];
  const filtered = ALL_REVOLUTIONARY_SERVICES_2026;
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);

    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);

    return filtered;
  }, [searchTerm, selectedCategory, selectedInnovationLevel]);
  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (category) {;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Neural Networks': return <Brain className="w-5 h-5" />;
      case 'Blockchain Development': return <Shield className="w-5 h-5" />;
      case 'Quantum Computing Infrastructure': return <Cpu className="w-5 h-5" />;
      case 'Edge Computing': return <Network className="w-5 h-5" />;
      case 'Autonomous Systems': return <Brain className="w-5 h-5" />;
      case 'Quantum AI': return <Zap className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;

  };
  const getInnovationLevelColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (level) {;
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Breakthrough': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
      icon: Search,
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO optimization using AI to boost search rankings and drive organic traffic",
      price: "From $399/month",
      features: ["AI keyword research", "Content optimization", "Ranking analysis", "Competitive insights"],
      link: "/services/ai-powered-seo",
      category: "Digital Marketing"
    },
    {
      icon: Users,
      title: "AI Customer Success Automation",
      description: "Automate customer success workflows with AI-powered insights and proactive engagement",
      price: "From $599/month",
      features: ["Customer insights", "Automated workflows", "Predictive analytics", "Success scoring"],
      link: "/services/ai-customer-success-automation",
      category: "Customer Success"
    },
    {
      icon: Truck,
      title: "AI Supply Chain Optimization",
      description: "Optimize supply chains with AI-powered forecasting, inventory management, and logistics optimization",
      price: "From $899/month",
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Risk management"],
      link: "/services/ai-supply-chain-optimization-enhanced",
      category: "Supply Chain"
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Comprehensive cloud infrastructure and DevOps automation for scalable applications",
      price: "From $1,299/month",
      features: ["Cloud migration", "DevOps automation", "Infrastructure as code", "Monitoring & alerting"],
      link: "/services/cloud-devops",
      category: "Cloud & Infrastructure"
    },
    {
      icon: Server,
      title: "IT Infrastructure Management",
      description: "End-to-end IT infrastructure management with proactive monitoring and optimization",
      price: "From $1,499/month",
      features: ["Infrastructure monitoring", "Performance optimization", "Capacity planning", "Disaster recovery"],
      link: "/services/it-infrastructure-management",
      category: "Infrastructure"
    },
    {
      icon: Lock,
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity protection for businesses of all sizes",
      price: "From $799/month",
      features: ["Threat detection", "Vulnerability assessment", "Security monitoring", "Incident response"],
      link: "/services/cybersecurity",
      category: "Security"
    },
    {
      icon: Database,
      title: "Data Analytics Platform",
      description: "Advanced data analytics and business intelligence platform for data-driven decisions",
      price: "From $1,199/month",
      features: ["Data visualization", "Predictive analytics", "Real-time dashboards", "Custom reporting"],
      link: "/services/ai-data-analytics-platform",
      category: "Analytics"
    }
  ];

  const emergingTech = [
    {
      icon: Atom,
      title: "Quantum Edge Computing",
      description: "Next-generation quantum computing solutions for complex computational challenges",
      price: "From $2,999/month",
      features: ["Quantum algorithms", "Edge computing", "Hybrid quantum-classical", "Performance optimization"],
      link: "/services/quantum-edge-computing-solutions",
      category: "Quantum Computing"
    },
    {
      icon: Satellite,
      title: "Space Technology Platform",
      description: "Innovative space technology solutions for satellite operations and space exploration",
      price: "From $3,999/month",
      features: ["Satellite operations", "Space data analytics", "Orbital mechanics", "Mission planning"],
      link: "/services/ai-space-technology-platform",
      category: "Space Tech"
    },
    {
      icon: Network,
      title: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain solutions for secure, transparent business operations",
      price: "From $1,999/month",
      features: ["Smart contracts", "DeFi solutions", "NFT platforms", "Supply chain tracking"],
      link: "/services/blockchain-enterprise-solutions",
      category: "Blockchain"
    },
    {
      icon: Leaf,
      title: "Sustainability & Green IT",
      description: "Eco-friendly technology solutions for sustainable business operations",
      price: "From $699/month",
      features: ["Carbon footprint tracking", "Energy optimization", "Green computing", "Sustainability reporting"],
      link: "/services/sustainability",
      category: "Sustainability"
    }
  ];

  const microSaaS = [
    {
      icon: Building2,
      title: "AI Project Management Platform",
      description: "Intelligent project management with AI-powered insights and automation",
      price: "From $399/month",
      features: ["AI task prioritization", "Resource optimization", "Risk assessment", "Progress tracking"],
      link: "/services/ai-project-management-platform",
      category: "Project Management"
    },
    {
      icon: TrendingUp,
      title: "AI Financial Risk Management",
      description: "Advanced financial risk assessment and management using AI algorithms",
      price: "From $1,199/month",
      features: ["Risk modeling", "Portfolio optimization", "Fraud detection", "Compliance monitoring"],
      link: "/services/ai-financial-risk-management-enhanced",
      category: "Financial Services"
    },
    {
      icon: FileText,
      title: "AI Legal Document Automation",
      description: "Automate legal document creation and analysis with AI-powered intelligence",
      price: "From $899/month",
      features: ["Document generation", "Contract analysis", "Legal research", "Compliance checking"],
      link: "/services/ai-legal-document-automation-platform",
      category: "Legal Tech"
    },
    {
      icon: GraduationCap,
      title: "AI Educational Content Creation",
      description: "Create engaging educational content with AI-powered tools and insights",
      price: "From $599/month",
      features: ["Content generation", "Curriculum design", "Assessment tools", "Learning analytics"],
      link: "/services/ai-educational-content-creation-platform",
      category: "Education"
    }
  ];

  const allServices = [...aiServices, ...itServices, ...emergingTech, ...microSaaS];

  const categories = [
    { name: "All Services", icon: Globe, count: allServices.length },
    { name: "AI & Research", icon: Brain, count: aiServices.length },
    { name: "IT & Infrastructure", icon: Server, count: itServices.length },
    { name: "Emerging Tech", icon: Rocket, count: emergingTech.length },
    { name: "Micro SaaS", icon: Building2, count: microSaaS.length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === "All Services" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>2026 Innovation Showcase</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Showcase 2026</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover our complete portfolio of innovative AI, IT, and specialized technology solutions. 
              From cutting-edge AI research to enterprise infrastructure, we have the expertise to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, features, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {selectedCategory === "All Services" ? "All Services" : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} services found. Explore our comprehensive portfolio of innovative solutions.
            </p>
          </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
<<<<<<< HEAD
                )}
                
                <div className="flex justify-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-full`}>
                    <service.icon className="h-8 w-8 text-white" />
=======
              Revolutionary Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                2026
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
<<<<<<< HEAD

=======
            >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              Experience the future with Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services.
              Quantum computing, edge AI, autonomous agents, and blockchain solutions that redefine what's possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400"

              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {ALL_REVOLUTIONARY_SERVICES_2026.length} Revolutionary Services
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Up to 1000x Performance Improvement
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Market Leading Innovation
              </span>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"

                  {categories.map(category              => (
                    <option key={category} value={category} className="bg-zinc-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                {/* Innovation Level Filter */}
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"

                  {innovationLevels.map(level              => (
                    <option key={level} value={level} className="bg-zinc-800 text-white">
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index)              => (
                <motion.div
                  key={service.id}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  animate = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
<<<<<<< HEAD

                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-sm text-zinc-400">{service.category}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-zinc-300 mb-4 line-clamp-3">{service.description}</p>
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-white">
                        ${'price' in service ? service.price.toLocaleString() : service.hourlyRate}
                      </span>
                      <span className="text-zinc-400">
                        /{'pricingModel' in service ? service.pricingModel : 'hour'}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">{'marketPrice' in service ? service.marketPrice : `$${service.projectRate?.toLocaleString()}/project`}</p>
                  </div>
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-zinc-400">Market Size:</span>
                        <p className="text-white font-medium">{'marketSize' in service ? service.marketSize : 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-zinc-400">Growth Rate:</span>
                        <p className="text-white font-medium">{'growthRate' in service ? service.growthRate : 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                  {/* Target Audience */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Contact Information */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Mail className="w-4 h-4 text-green-400" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span className="line-clamp-1">{service.contactInfo.address}</span>
                      </div>
                    </div>
                    {/* CTA Button */}
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"

                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                >
                  <category.icon className="h-5 w-5" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {category.count}
                  </span>
                </motion.button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              ))}
            </div>
<<<<<<< HEAD
          </div>

          {/* Search and Filter */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange = {
  (e) => setPriceRange([priceRange[0],
  parseInt(e.target.value)])

}
                className="w-full"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index)              => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 

}}
                animate = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {React.createElement(getCategoryIcon(service.category), {
                      className: "h-8 w-8 text-blue-400"
                    })}
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    <div className="text-sm text-gray-400">{service.pricingModel}</div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
=======
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive portfolio of innovative services and start your 
              digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Complete Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
