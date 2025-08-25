<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Networking',
    'IT Management',
    'Quantum Technology',
    'Emerging Tech'
  ];

  const services = [
    {
      id: 'ai-autonomous-systems',
      title: "AI Autonomous Systems",
      description: "Next-generation AI systems that operate independently and learn continuously",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization"],
      path: "/services/ai-autonomous-systems",
      featured: true,
      rating: 5
    },
    {
      id: 'cybersecurity',
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions with AI-powered threat detection",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Real-time monitoring", "AI threat analysis", "Automated response"],
      path: "/services/cybersecurity",
      featured: true,
      rating: 5
    },
    {
      id: 'quantum-technology',
      title: "Quantum Technology Solutions",
      description: "Revolutionary quantum computing and encryption services",
      category: "Quantum Technology",
      icon: Cpu,
      features: ["Quantum encryption", "Superior performance", "Future-proof architecture"],
      path: "/services/quantum-technology",
      featured: true,
      rating: 5
    },
    {
      id: 'it-infrastructure',
      title: "IT Infrastructure Services",
      description: "Comprehensive IT infrastructure management and optimization",
      category: "IT Management",
      icon: Database,
      features: ["Infrastructure design", "Performance optimization", "Scalability planning"],
      path: "/services/it-infrastructure",
      featured: false,
      rating: 4
    },
    {
      id: 'micro-saas',
      title: "Micro SAAS Solutions",
      description: "Custom software solutions for specific business needs",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Custom development", "Rapid deployment", "Scalable solutions"],
      path: "/services/micro-saas-solutions",
      featured: false,
      rating: 4
    },
    {
      id: '5g-enterprise',
      title: "5G Enterprise Solutions",
      description: "Cutting-edge 5G networks optimized for enterprise needs",
      category: "Networking",
      icon: Zap,
      features: ["Ultra-low latency", "Massive connectivity", "Enterprise security"],
      path: "/5g-enterprise-solutions",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-research-assistant',
      title: "AI Autonomous Research Assistant",
      description: "AI-powered research and analysis platform",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Automated research", "Data analysis", "Insight generation"],
      path: "/ai-autonomous-research-assistant",
      featured: false,
      rating: 4
    },
    {
      id: 'quantum-neural-network',
      title: "Quantum Neural Network Platform",
      description: "Revolutionary neural networks leveraging quantum computing",
      category: "AI & Quantum",
      icon: Cpu,
      features: ["Quantum algorithms", "Enhanced learning", "Breakthrough performance"],
      path: "/quantum-neural-network-platform",
      featured: false,
      rating: 5
    },
    {
      id: 'autonomous-business',
      title: "Autonomous Business Operations Platform",
      description: "AI-powered business process automation and optimization",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Process automation", "Business intelligence", "Performance optimization"],
      path: "/autonomous-business-operations-platform",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-asset-management',
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset tracking and optimization for modern enterprises",
      category: "IT Management",
      icon: Database,
      features: ["Predictive maintenance", "Cost optimization", "Real-time insights"],
      path: "/ai-powered-it-asset-management",
      featured: false,
      rating: 4
    },
    {
      id: 'soc2-compliance',
      title: "SOC2 Compliance Automation",
      description: "Automated compliance management and reporting",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Automated compliance", "Real-time monitoring", "Audit preparation"],
      path: "/soc2-compliance-automation",
      featured: false,
      rating: 4
    },
    {
      id: 'industry-solutions',
      title: "Industry-Specific Solutions",
      description: "Tailored solutions for healthcare, finance, and manufacturing",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Industry expertise", "Custom solutions", "Compliance ready"],
      path: "/services/industry-solutions",
      featured: false,
      rating: 4
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our complete portfolio of cutting-edge technology services designed to transform 
              your business and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group relative"
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      {service.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex mr-2">
                            {renderStars(service.rating)}
                          </div>
                          <span className="text-sm text-gray-400">({service.rating}/5)</span>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Link
                          to={service.path}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    // List View
                    <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                                {service.category}
                              </span>
                              {service.featured && (
                                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              {renderStars(service.rating)}
                              <span className="text-sm text-gray-400 ml-2">({service.rating}/5)</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <ul className="flex flex-wrap gap-4">
                              {service.features.slice(0, 3).map((feature) => (
                                <li key={feature} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            
                            <Link
                              to={service.path}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
=======
import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Server, 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Rocket,
  Cpu,
  Eye,
  Lock,
  Home
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES } from '../../data/advancedITInfrastructureServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../../data/emergingTechnologyServices';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      name: "Innovative Micro SAAS",
      icon: Brain,
      description: "Cutting-edge micro SAAS solutions featuring AI, blockchain, IoT, and emerging technologies",
      services: INNOVATIVE_MICRO_SAAS_SERVICES.slice(0, 4),
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Advanced IT Infrastructure",
      icon: Server,
      description: "Enterprise-grade infrastructure solutions including edge computing, quantum-ready systems, and zero-trust security",
      services: ADVANCED_IT_INFRASTRUCTURE_SERVICES.slice(0, 4),
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emerging Technologies",
      icon: Atom,
      description: "Revolutionary technologies including neuromorphic computing, DNA storage, and quantum internet",
      services: EMERGING_TECHNOLOGY_SERVICES.slice(0, 4),
      color: "from-green-500 to-emerald-500"
    }
  ];

  const highlights = [
    {
      title: "300%+ Average ROI",
      description: "Our innovative services deliver exceptional return on investment within 6-12 months",
      icon: TrendingUp
    },
    {
      title: "Future-Ready Technology",
      description: "Built with cutting-edge technologies that will define the next decade of innovation",
      icon: Rocket
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-layered security with compliance across SOC 2, ISO 27001, HIPAA, and more",
      icon: Shield
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated support team with deep expertise in emerging technologies and enterprise solutions",
      icon: Eye
    }
  ];

  const technologies = [
    "AI/ML", "Blockchain", "Quantum Computing", "IoT", "Edge Computing", "Cloud Native",
    "Neuromorphic", "DNA Storage", "Biocomputing", "Photonic Computing", "Swarm Robotics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Complete showcase of Zion Tech Group's innovative micro SAAS services, advanced IT infrastructure, and emerging technology solutions for forward-thinking businesses."
        keywords="comprehensive services, micro SAAS, IT infrastructure, emerging technology, AI services, blockchain solutions, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Innovation Across Every Technology Domain
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover Zion Tech Group's complete portfolio of cutting-edge services spanning micro SAAS solutions, 
            advanced IT infrastructure, and revolutionary emerging technologies. Transform your business with 
            the most innovative solutions available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services cover every aspect of modern technology needs, from 
              micro SAAS solutions to enterprise infrastructure and emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-light to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-4 text-center">
                  {category.name}
                </h3>
                <p className="text-zion-slate mb-6 text-center">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-zion-blue-light">
                      <div>
                        <h4 className="font-semibold text-zion-blue-dark text-sm">
                          {service.title}
                        </h4>
                        <p className="text-xs text-zion-slate">
                          {service.category}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-zion-cyan">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity`}>
                  View All {category.name} Services
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of working with a technology partner that combines 
              innovation, expertise, and proven results across all service categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {highlight.title}
                </h3>
                <p className="text-zion-slate">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services leverage the most advanced technologies and frameworks available, 
              ensuring exceptional performance, scalability, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-zion-blue-light rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Proven Success & Results
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services deliver measurable business impact and exceptional 
              results across all technology domains and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <p className="text-lg text-zion-slate">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">50+</div>
              <p className="text-lg text-zion-slate">Technology Domains</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">25+</div>
              <p className="text-lg text-zion-slate">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">99%</div>
              <p className="text-lg text-zion-slate">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services are tailored to meet the unique requirements and 
              compliance needs of different industries and business sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Healthcare", "Finance", "Manufacturing", "Retail",
              "Education", "Government", "Technology", "Energy"
            ].map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {industry}
                </span>
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5da1
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive suite of services is designed to address every aspect of your 
              technology needs. Get in touch to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Explore our comprehensive portfolio of innovative services and discover how 
            Zion Tech Group can accelerate your digital transformation and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Contact us: <strong>+1 302 464 0950</strong> | <strong>kleber@ziontechgroup.com</strong></p>
            <p>Visit: <strong>https://ziontechgroup.com</strong></p>
            <p>Address: <strong>364 E Main St STE 1008, Middletown DE 19709</strong></p>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5da1
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default ComprehensiveServicesShowcase;
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5da1
