import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  Code,
  Chip,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Rocket,
  Award,
  TrendingUp,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Lock,
  DollarSign,
  Users
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "@/data/innovativeMicroSaasServices2025";
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from "@/data/additionalInnovativeServices2025";
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from "@/data/advancedInnovativeServices2025";
import { EMERGING_TECH_SERVICES_2025 } from "@/data/emergingTechServices2025";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-orange to-zion-green' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADDITIONAL_INNOVATIVE_SERVICES_2025,
    ...ADVANCED_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];
  
  const filteredServices = allServices.filter(service => {
    const title = service.title || service.name || '';
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <>
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
      
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Innovative Micro SAAS</span>
              <br />
              <span className="text-white">Services & Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered analytics to quantum computing, 
              discover the future of business technology with our comprehensive micro SAAS platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length + ADDITIONAL_INNOVATIVE_SERVICES_2025.length + ADVANCED_INNOVATIVE_SERVICES_2025.length + EMERGING_TECH_SERVICES_2025.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length}+</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Advanced Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="card-futuristic group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                          {getCategoryIcon(service.category) && React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4 mb-6">
                      {/* Category & Innovation Level */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge' 
                            ? 'bg-zion-cyan/20 text-zion-cyan' 
                            : 'bg-zion-purple/20 text-zion-purple'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>

                      {/* ROI & Market Price */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-zion-green">
                          <TrendingUp className="w-4 h-4" />
                          <span>ROI: {service.roi}</span>
                        </div>
                        <div className="text-zion-slate-light">
                          Market: {service.marketPrice}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          <span>{service.supportLevel}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/services/${service.id}`}
                        className="btn-futuristic px-4 py-2 text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Specialized Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our specialized technology solutions designed for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDITIONAL_INNOVATIVE_SERVICES_2025.map((service, index) => (
              <motion.div
                key={service.id}
                className="card-futuristic text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-zion-cyan font-bold mb-4">
                  {service.marketPrice}
                </div>
                
                <Link
                  to={`/services/${service.id}`}
                  className="btn-neon w-full"
                >
                  Explore Solution
                </Link>
              </motion.div>
            ))}

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          price: 'From $5,000',
          features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models'],
        },
        {
          name: 'AI Automation',
          description: 'Automate repetitive tasks and processes with intelligent AI solutions',
          price: 'From $3,000',
          features: ['Process Automation', 'Document Processing', 'Customer Service Bots', 'Workflow Optimization'],
        },
        {
          name: 'AI Consulting',
          description: 'Strategic guidance for implementing AI in your organization',
          price: 'From $2,000',
          features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Team Training'],
        },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Security Assessment',
          description: 'Comprehensive security audits and vulnerability assessments',
          price: 'From $4,000',
          features: ['Penetration Testing', 'Security Audits', 'Compliance Reviews', 'Risk Assessment'],
        },
        {
          name: 'Security Implementation',
          description: 'Deploy and configure enterprise-grade security solutions',
          price: 'From $6,000',
          features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'Encryption'],
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and incident response services',
          price: 'From $2,500/month',
          features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Reports'],
        },
      ],
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions for growing businesses',
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to the cloud',
          price: 'From $8,000',
          features: ['Infrastructure Assessment', 'Migration Planning', 'Data Migration', 'Testing & Validation'],
        },
        {
          name: 'Cloud Architecture',
          description: 'Design and implement scalable cloud architectures',
          price: 'From $10,000',
          features: ['Architecture Design', 'Performance Optimization', 'Cost Optimization', 'Security Integration'],
        },
        {
          name: 'DevOps Services',
          description: 'Implement modern DevOps practices and automation',
          price: 'From $5,000',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Performance Tuning'],
        },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into actionable business intelligence',
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Data Strategy',
          description: 'Develop a comprehensive data strategy for your organization',
          price: 'From $3,500',
          features: ['Data Assessment', 'Strategy Development', 'Implementation Roadmap', 'Team Training'],
        },
        {
          name: 'Business Intelligence',
          description: 'Build powerful dashboards and reporting systems',
          price: 'From $4,500',
          features: ['Dashboard Design', 'Report Automation', 'Data Visualization', 'KPI Tracking'],
        },
        {
          name: 'Advanced Analytics',
          description: 'Implement predictive analytics and machine learning models',
          price: 'From $6,000',
          features: ['Predictive Modeling', 'Statistical Analysis', 'Data Mining', 'Model Deployment'],
        },
      ],
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      description: 'Transform your business for the digital age',
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Digital Strategy',
          description: 'Develop a comprehensive digital transformation strategy',
          price: 'From $5,000',
          features: ['Current State Assessment', 'Strategy Development', 'Implementation Planning', 'Change Management'],
        },
        {
          name: 'Process Optimization',
          description: 'Streamline and optimize your business processes',
          price: 'From $4,000',
          features: ['Process Mapping', 'Bottleneck Analysis', 'Automation Opportunities', 'Implementation Support'],
        },
        {
          name: 'Technology Integration',
          description: 'Integrate new technologies into your existing systems',
          price: 'From $7,000',
          features: ['System Analysis', 'Integration Planning', 'API Development', 'Testing & Deployment'],
        },
      ],
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      icon: Code,
      description: 'Tailored software solutions for your unique needs',
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Web Applications',
          description: 'Custom web applications built with modern technologies',
          price: 'From $15,000',
          features: ['Responsive Design', 'User Experience', 'Performance Optimization', 'Security Implementation'],
        },
        {
          name: 'Mobile Applications',
          description: 'Native and cross-platform mobile applications',
          price: 'From $20,000',
          features: ['iOS & Android', 'Cross-platform Development', 'App Store Optimization', 'Maintenance & Updates'],
        },
        {
          name: 'Enterprise Software',
          description: 'Scalable enterprise software solutions',
          price: 'From $25,000',
          features: ['Scalable Architecture', 'Integration Capabilities', 'Security & Compliance', 'Support & Maintenance'],
        },
      ],
    },
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient care',
      color: 'from-red-500 to-pink-500',
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Secure financial technology solutions for modern banking',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Manufacturing',
      icon: Building,
      description: 'Smart manufacturing solutions for Industry 4.0',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Digital retail solutions for enhanced customer experience',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Technology solutions for modern education',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Secure government technology solutions',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and current technology landscape',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy and implementation plan',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Design and develop your custom solution with best practices',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Thorough testing and seamless deployment to production',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure optimal performance',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and digital transformation, 
              we provide end-to-end technology solutions that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology services designed to meet the evolving needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div key={service.name} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <span className="text-cyan-400 font-medium text-sm">{service.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions for your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution) => (
              <Link
                key={solution.name}
                to={`/services/${solution.name.toLowerCase()}`}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              
              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
