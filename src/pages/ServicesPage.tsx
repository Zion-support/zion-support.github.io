<<<<<<< HEAD
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from '@/data/additionalInnovativeServices2025';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';
import { ADVANCED_ENTERPRISE_SOLUTIONS_2025 } from '@/data/advancedEnterpriseSolutions2025';
import { INNOVATIVE_AI_SERVICES_2025 } from '@/data/innovativeAIServices2025';
import { CYBERSECURITY_SERVICES_2025 } from '@/data/cybersecurityServices2025';
import { BLOCKCHAIN_WEB3_SERVICES_2025 } from '@/data/blockchainWeb3Services2025';
import { IOT_EDGE_SERVICES_2025 } from '@/data/iotEdgeServices2025';
import { SEO } from '@/components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

  Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Globe as GlobeIcon,
  } from 'lucide-react';

export default React.memo(function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Zap,
      color: 'from-zion-cyan to-zion-blue',
    },
    {
      id: 'ai',
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solutions',
      icon: Building,
      color: 'from-zion-blue to-zion-purple',
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Lock,
      color: 'from-zion-purple to-zion-blue',
    },
    {
      id: 'iot',
      name: 'IoT & Edge',
      icon: Cpu,
      color: 'from-zion-green to-zion-cyan',
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-zion-purple to-zion-red',
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Rocket,
      color: 'from-zion-blue to-zion-cyan',
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Users,
      color: 'from-zion-pink to-zion-purple',
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: DollarSign,
      color: 'from-zion-green to-zion-blue',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Server,
      color: 'from-zion-blue to-zion-purple',
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      icon: Globe,
      color: 'from - zion - orange to - zion - green',
    },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid - range', name: 'Mid - Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price - low', name: 'Price: Low to High' },
    { id: 'price - high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
  ];

  // Filter and sort services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADDITIONAL_INNOVATIVE_SERVICES_2025,
    ...ADVANCED_ENTERPRISE_SOLUTIONS_2025,
    ...INNOVATIVE_AI_SERVICES_2025,
    ...CYBERSECURITY_SERVICES_2025,
    ...BLOCKCHAIN_WEB3_SERVICES_2025,
    ...IOT_EDGE_SERVICES_2025,
  ];

  const filteredServices = allServices.filter (service => {
    const title = service.title || service.name || '';
    const matchesSearch = title.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
      service.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (service.tags &&
        service.tags.some (tag =>
          tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) ;

    const matchesCategory = selectedCategory === 'all' ||
      service.category.toLowerCase () .includes (selectedCategory) ;

    const matchesPrice = selectedPriceRange === 'all' || (selectedPriceRange === 'budget' && service.price <= 1000) || (selectedPriceRange === 'mid - range' &&
        service.price > 1000 &&
        service.price <= 5000) || (selectedPriceRange === 'enterprise' && service.price > 5000) ;

    return matchesSearch && matchesCategory && matchesPrice;
  }) ;

  // Sort services
  const sortedServices = [...filteredServices].sort ( (a, b) => {
    switch (sortBy) {
      case 'price - low':
        return a.price - b.price;
      case 'price - high':
        return b.price - a.price;
      case 'newest':
        return (new Date (b.createdAt || '2025 - 01 - 01') .getTime () -
          new Date (a.createdAt || '2025 - 01 - 01') .getTime () ) ;
      default:
        return 0;
    }
  }) ;

  const getCategoryIcon = (category: string) => {
    const cat = categories.find (c => c.id === category.toLowerCase () .replace (' ', '-') ) ;
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find (c => c.id === category.toLowerCase () .replace (' ', '-') ) ;
    return cat ? cat.color : 'from - zion - cyan to - zion - blue';
  };

  return (<>
      <SEO
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting - edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com / services"
      />

      {/* Hero Section */}
      <section className="bg - futuristic min - h-[60vh] flex items - center relative overflow - hidden">
        {/* Animated background elements */}
        <div role="button" className="absolute inset - 0 opacity - 20">
          <div role="button" className="absolute top - 20 left - 20 w - 40 h - 40 border border - zion - cyan rounded - full animate - pulse"></div>
          <div role="button" className="absolute bottom - 20 right - 20 w - 32 h - 32 border border - zion - purple rounded - full animate - pulse delay - 1000"></div>
          <div role="button" className="absolute top - 1/2 left - 1/2 w - 24 h - 24 border border - zion - blue rounded - full animate - pulse delay - 2000"></div>
        </div>

        <div role="button" className="container - responsive relative z - 10">
          <motion.div
            className="text - center max - w-4xl mx - auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading - responsive font - bold mb - 6">
              <span className="text - gradient">Innovative Micro SAAS</span>
              <br />
              <span className="text - white">Services & Solutions</span>
            </h1>
            <p className="text - xl text - zion - slate - light mb - 8 leading - relaxed">
              Transform your business with cutting - edge technology solutions.
              From AI - powered analytics to quantum computing, discover the
              future of business technology with our comprehensive micro SAAS
              platform.
            </p>

            {/* Search Bar */}
            <div role="button" className="max - w-2xl mx - auto mb - 8">
              <div role="button" className="relative">
                <Search className="absolute left - 4 top - 1/2 transform - translate - y-1 / 2 text - zion - slate - light w - 5 h - 5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={e => setSearchQuery (e.target.value) }
                  className="w - full bg - zion - slate - light / 10 border border - zion - cyan / 20 rounded - xl px - 12 py - 4 text - white placeholder - zion - slate - light focus:outline - none focus:ring - 2 focus:ring - zion - cyan focus:border - transparent text - lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div role="button" className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 max - w-3xl mx - auto">
              <motion.div
                className="text - center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div role="button" className="text-3xl font-bold text-zion-cyan mb-2">
                  {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length + 
                   ADDITIONAL_INNOVATIVE_SERVICES_2025.length +
                   ADVANCED_ENTERPRISE_SOLUTIONS_2025.length +
                   INNOVATIVE_AI_SERVICES_2025.length +
                   CYBERSECURITY_SERVICES_2025.length +
                   BLOCKCHAIN_WEB3_SERVICES_2025.length +
                   IOT_EDGE_SERVICES_2025.length}+
                </div>
                <div role="button" className="text - zion - slate - light">Innovative Services</div>
              </motion.div>
              <motion.div
                className="text - center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div role="button" className="text - 3xl font - bold text - zion - purple mb - 2">
                  {categories.length}+
                </div>
                <div role="button" className="text - zion - slate - light">
                  Technology Categories
                </div>
              </motion.div>
              <motion.div
                className="text - center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div role="button" className="text - 3xl font - bold text - zion - blue mb - 2">
                  99.9%
                </div>
                <div role="button" className="text - zion - slate - light">Uptime Guarantee</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py - 12 bg - zion - slate - dark / 50">
        <div role="button" className="container - responsive">
          {/* Category Pills */}
          <motion.div
            className="flex flex - wrap gap - 3 mb - 8 justify - center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map (category => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={category.id}
                onClick={ () => setSelectedCategory (category.id) }
                className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selectedCategory === category.id
                    ? `bg - gradient - to - r ${category.color} text - white shadow - lg`
                    : 'bg - zion - slate - light / 10 text - zion - slate - light hover:bg - zion - slate - light / 20 hover:text - white'
                }`}
              >
                <category.icon className="w - 4 h - 4" />
                {category.name}
              </button>) ) }
          </motion.div>

          {/* Advanced Filters */}
          <motion.div
            className="flex flex - col md:flex - row gap - 4 items - center justify - between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div role="button" className="flex flex - wrap gap - 4">
              {/* Price Range Filter */}
              <div role="button" className="flex items - center gap - 2">
                <Filter className="w - 4 h - 4 text - zion - cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={e => setSelectedPriceRange (e.target.value) }
                  className="bg - zion - slate - light / 10 border border - zion - cyan / 20 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - zion - cyan"
                >
                  {priceRanges.map (range => (<option key={range.id} value={range.id}>
                      {range.name}
                    </option>) ) }
                </select>
              </div>

              {/* Sort Options */}
              <div role="button" className="flex items - center gap - 2">
                <TrendingUp className="w - 4 h - 4 text - zion - cyan" />
                <select
                  value={sortBy}
                  onChange={e => setSortBy (e.target.value) }
                  className="bg - zion - slate - light / 10 border border - zion - cyan / 20 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - zion - cyan"
                >
                  {sortOptions.map (option => (<option key={option.id} value={option.id}>
                      {option.name}
                    </option>) ) }
                </select>
              </div>
            </div>

            <div role="button" className="text - zion - slate - light">
              Showing {sortedServices.length} of{' '}
              {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py - 16 bg - zion - slate - dark">
        <div role="button" className="container - responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (<motion.div
                className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sortedServices.map ( (service, index) => (<motion.div
                    key={service.id}
                    className="card - futuristic group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Header */}
                    <div role="button" className="mb - 6">
                      <div role="button" className="flex items - center justify - between mb - 4">
                        <div role="button" className={`w - 12 h - 12 bg - gradient - to - r ${getCategoryColor (service.category) } rounded - xl flex items - center justify - center`}
                        >
                          {getCategoryIcon (service.category) &&
                            React.createElement (getCategoryIcon (service.category) ,
                              { className: 'w - 6 h - 6 text - white' }) }
                        </div>
                        <div role="button" className="text - right">
                          <div role="button" className="text - 2xl font - bold text - zion - cyan">
                            ${service.price.toLocaleString () }
                          </div>
                          <div role="button" className="text - sm text - zion - slate - light">
                            per month
                          </div>
                        </div>
                      </div>

                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - zion - cyan transition - colors">
                        {service.title}
                      </h3>

                      <p className="text - zion - slate - light leading - relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div role="button" className="space - y-4 mb - 6">
                      {/* Category & Innovation Level */}
                      <div role="button" className="flex items - center justify - between text - sm">
                        <span className="text - zion - cyan font - medium">
                          {service.category}
                        </span>
                        <span
                          className={`px - 2 py - 1 rounded - full text - xs font - medium ${
                            service.innovationLevel === 'Cutting - edge'
                              ? 'bg - zion - cyan / 20 text - zion - cyan'
                              : 'bg - zion - purple / 20 text - zion - purple'
                          }`}
                        >
                          {service.innovationLevel}
                        </span>
                      </div>

                      {/* ROI & Market Price */}
                      <div role="button" className="flex items - center justify - between text - sm">
                        <div role="button" className="flex items - center gap - 1 text - zion - green">
                          <TrendingUp className="w - 4 h - 4" />
                          <span > ROI: {service.roi}</span>
                        </div>
                        <div role="button" className="text - zion - slate - light">
                          Market: {service.marketPrice}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div role="button" className="space - y-2">
                        <h4 className="text - sm font - semibold text - white">
                          Key Features:
                        </h4>
                        <div role="button" className="grid grid - cols - 1 gap - 1">
                          {service.features.slice (0, 3) .map ( (feature, idx) => (<div role="button" key={idx}
                              className="flex items - center gap - 2 text - sm text - zion - slate - light"
                            >
                              <CheckCircle className="w - 3 h - 3 text - zion - cyan" />
                              {feature}
                            </div>) ) }
                        </div>
                      </div>
                    </div>

                    {/* Service Actions */}
                    <div role="button" className="flex items - center justify - between pt - 4 border - t border - zion - cyan / 20">
                      <div role="button" className="flex items - center gap - 4 text - sm text - zion - slate - light">
                        <div role="button" className="flex items - center gap - 1">
                          <Clock className="w - 4 h - 4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div role="button" className="flex items - center gap - 1">
                          <Star className="w - 4 h - 4 text - zion - cyan" />
                          <span>{service.supportLevel}</span>
                        </div>
                      </div>

                      <Link
                        to={`/services/${service.id}`}
                        className="btn - futuristic px - 4 py - 2 text - sm"
                      >
                        Learn More < ArrowRight className="w - 4 h - 4 ml - 2" />
                      </Link>
                    </div>
                  </motion.div>) ) }
              </motion.div>) : (<motion.div
                className="text - center py - 16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div role="button" className="text - 6xl mb - 4">🔍</div>
                <h3 className="text - 2xl font - bold text - white mb - 2">
                  No services found
                </h3>
                <p className="text - zion - slate - light mb - 6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => {
                    setSearchQuery ('') ;
                    setSelectedCategory ('all') ;
                    setSelectedPriceRange ('all') ;
                  }}
                  className="btn - futuristic px - 6 py - 3"
                >
                  View All Services
                </button>
              </motion.div>) }
          </AnimatePresence>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py - 16 bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - dark">
        <div role="button" className="container - responsive">
          <motion.div
            className="text - center mb - 12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading - responsive font - bold mb - 4">
              <span className="text - gradient">Specialized Solutions</span>
            </h2>
            <p className="text - xl text - zion - slate - light max - w-3xl mx - auto">
              Discover our specialized technology solutions designed for
              specific industries and use cases
            </p>
          </motion.div>

          <div role="button" className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">
            {ADDITIONAL_INNOVATIVE_SERVICES_2025.map ( (service, index) => (<motion.div
                key={service.id}
                className="card - futuristic text - center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div role="button" className="w - 16 h - 16 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - xl flex items - center justify - center mx - auto mb - 4">
                  <Rocket className="w - 8 h - 8 text - white" />
                </div>

                <h3 className="text - lg font - bold text - white mb - 2 group - hover:text - zion - cyan transition - colors">
                  {service.title}
                </h3>

                <p className="text - zion - slate - light text - sm mb - 4 leading - relaxed">
                  {service.description}
                </p>

                <div role="button" className="text - zion - cyan font - bold mb - 4">
                  {service.marketPrice}
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="btn - neon w - full"
                >
                  Explore Solution
                </Link>
              </motion.div>) ) }
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Database, 
  Network, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Bot,
  Workflow,
  BarChart3,
  Code,
  Server,
  Smartphone
} from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Solutions & Automation",
      description: "Transform your business with intelligent automation, machine learning, and AI-powered decision making.",
      features: [
        "Business Process Automation",
        "Machine Learning Models",
        "Natural Language Processing",
        "Predictive Analytics",
        "AI-Powered Chatbots",
        "Intelligent Document Processing"
      ],
      benefits: [
        "Reduce operational costs by 40-60%",
        "Improve accuracy and efficiency",
        "24/7 automated operations",
        "Scalable AI infrastructure"
      ],
      link: "/services/ai",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Build, deploy, and manage scalable cloud solutions with modern DevOps practices.",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code",
        "Continuous Integration/Deployment",
        "Container Orchestration",
        "Multi-Cloud Management",
        "Performance Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 30-50%",
        "Faster deployment cycles",
        "Improved scalability and reliability",
        "Enhanced security and compliance"
      ],
      link: "/services/cloud",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive security solutions and threat intelligence.",
      features: [
        "Security Assessment & Auditing",
        "Threat Detection & Response",
        "Compliance Management",
        "Identity & Access Management",
        "Security Training & Awareness",
        "Incident Response Planning"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Meet industry compliance standards",
        "Reduce security incident response time",
        "Build customer trust and confidence"
      ],
      link: "/services/cybersecurity",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology stack for the digital age.",
      features: [
        "Process Reengineering",
        "Legacy System Modernization",
        "Digital Strategy Consulting",
        "Change Management",
        "Technology Roadmapping",
        "Performance Optimization"
      ],
      benefits: [
        "Increase operational efficiency by 50%",
        "Improve customer experience",
        "Enable rapid innovation",
        "Future-proof your business"
      ],
      link: "/services/transformation",
      color: "from-orange-500 to-red-500"
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Turn your data into actionable insights with advanced analytics and business intelligence.",
      link: "/services/data-analytics"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build tailored software solutions that perfectly fit your business needs.",
      link: "/services/software-development"
    },
    {
      icon: Network,
      title: "IT Infrastructure",
      description: "Design and implement robust, scalable IT infrastructure solutions.",
      link: "/services/infrastructure"
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT with business objectives.",
      link: "/services/consulting"
    }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Technology",
    "Energy"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our operations with their AI automation platform. We've seen a 45% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "Their cloud migration expertise helped us reduce costs by 40% while improving performance significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Security Director",
      company: "SecureBank",
      content: "The cybersecurity assessment revealed critical vulnerabilities we weren't aware of. Their team is exceptional.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to transform your business, 
            enhance efficiency, and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our flagship services that deliver measurable business impact and drive 
              digital transformation across organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-zinc-300">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-zion-cyan">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-zion-purple">Business Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-zinc-300">
                          <TrendingUp className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
>>>>>>> 7d35efc01d5ba145237ffe2361c54c6f65088a00
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py - 20 bg - gradient - to - r from - zion - cyan / 10 via - zion - purple / 10 to - zion - blue / 10">
        <div role="button" className="container - responsive text - center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading - responsive font - bold mb - 6">
              Ready to Transform Your Business?
            </h2>
            <p className="text - xl text - zion - slate - light mb - 8 max - w-3xl mx - auto">
              Get in touch with our technology experts to discuss your specific
              needs and discover how our innovative solutions can drive your
              business forward.
            </p>

            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link to="/contact" className="btn - futuristic px - 8 py - 4 text - lg">
                <MessageCircle className="w - 5 h - 5 mr - 2" />
                Get Free Consultation
              </Link>

              <a href="tel:+13024640950" className="btn - neon px - 8 py - 4 text - lg">
                <Phone className="w - 5 h - 5 mr - 2" />
                Call Now: +1 302 464 0950
              </a>
            </div>

            <div role="button" className="mt - 8 text - zion - slate - light">
              <p className="mb - 2">
                📍 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p>
                📧{' '}
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text - zion - cyan hover:underline"
                >
                  kleber@ziontechgroup.com
                </a>
              </p>
              <p>
                🌐{' '}
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text - zion - cyan hover:underline"
                >
                  ziontechgroup.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>) ;
=======
      {/* Specialized Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Additional services tailored to specific business needs and industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-300 text-sm mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our solutions are designed to address the unique challenges and opportunities 
              across diverse industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-First Approach</h3>
              <p className="text-zinc-300">
                We leverage the latest AI technologies to create intelligent, adaptive 
                solutions that learn and improve over time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-zinc-300">
                Our team consists of industry veterans with deep expertise in AI, 
                cloud computing, cybersecurity, and digital transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-zinc-300">
                We've helped hundreds of businesses achieve measurable improvements 
                in efficiency, cost reduction, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about working with Zion Tech Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss how our services can help you achieve your business goals 
            and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
>>>>>>> 7d35efc01d5ba145237ffe2361c54c6f65088a00
}
