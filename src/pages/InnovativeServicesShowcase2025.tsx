import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Settings, 
  Users, 
  MessageCircle, 
  DollarSign, 
  FileText, 
  Heart, 
  Cloud, 
  Cpu, 
<<<<<<< HEAD
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  Palette,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeServices2025';

export default function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

=======
  Lock, 
  Atom, 
  Leaf, 
  Satellite, 
  ShoppingCart, 
  BookOpen, 
  GraduationCap, 
  Building, 
  Briefcase, 
  Lightbulb, 
  Sparkles,
  Clock,
  Award,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const categoryIcons: Record<string, React.ReactNode> = {
    'AI & Analytics': <Brain className="w-6 h-6" />,
    'AI & Sales': <TrendingUp className="w-6 h-6" />,
    'AI & Support': <MessageCircle className="w-6 h-6" />,
    'AI & Finance': <DollarSign className="w-6 h-6" />,
    'AI & Operations': <Settings className="w-6 h-6" />,
    'AI & HR': <Users className="w-6 h-6" />,
    'AI & Management': <Target className="w-6 h-6" />,
    'AI & Marketing': <BarChart3 className="w-6 h-6" />,
    'AI & Education': <GraduationCap className="w-6 h-6" />,
    'AI & Legal': <FileText className="w-6 h-6" />,
    'AI & Healthcare': <Heart className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Cloud & DevOps': <Cloud className="w-6 h-6" />,
    'IoT & Edge': <Cpu className="w-6 h-6" />,
    'Blockchain': <Lock className="w-6 h-6" />,
    'Quantum Computing': <Atom className="w-6 h-6" />,
    'Sustainability': <Leaf className="w-6 h-6" />,
    'Space Tech': <Satellite className="w-6 h-6" />,
    'FinTech': <DollarSign className="w-6 h-6" />,
    'Healthcare': <Heart className="w-6 h-6" />,
    'E-commerce': <ShoppingCart className="w-6 h-6" />,
    'Content & Media': <BookOpen className="w-6 h-6" />,
    'Productivity': <Settings className="w-6 h-6" />,
    'Analytics': <BarChart3 className="w-6 h-6" />,
    'Automation': <Zap className="w-6 h-6" />,
    'Innovation': <Lightbulb className="w-6 h-6" />,
    'Emerging Tech': <Sparkles className="w-6 h-6" />
  };

  const categoryColors: Record<string, string> = {
    'AI & Analytics': 'from-purple-600 to-pink-600',
    'AI & Sales': 'from-blue-600 to-cyan-600',
    'AI & Support': 'from-green-600 to-emerald-600',
    'AI & Finance': 'from-yellow-600 to-orange-600',
    'AI & Operations': 'from-indigo-600 to-purple-600',
    'AI & HR': 'from-pink-600 to-rose-600',
    'AI & Management': 'from-cyan-600 to-blue-600',
    'AI & Marketing': 'from-orange-600 to-red-600',
    'AI & Education': 'from-emerald-600 to-green-600',
    'AI & Legal': 'from-violet-600 to-purple-600',
    'AI & Healthcare': 'from-red-600 to-pink-600',
    'Cybersecurity': 'from-red-600 to-orange-600',
    'Cloud & DevOps': 'from-blue-600 to-indigo-600',
    'IoT & Edge': 'from-green-600 to-teal-600',
    'Blockchain': 'from-yellow-600 to-orange-600',
    'Quantum Computing': 'from-purple-600 to-indigo-600',
    'Sustainability': 'from-green-600 to-emerald-600',
    'Space Tech': 'from-indigo-600 to-purple-600',
    'FinTech': 'from-emerald-600 to-teal-600',
    'Healthcare': 'from-red-600 to-pink-600',
    'E-commerce': 'from-blue-600 to-cyan-600',
    'Content & Media': 'from-purple-600 to-pink-600',
    'Productivity': 'from-orange-600 to-red-600',
    'Analytics': 'from-cyan-600 to-blue-600',
    'Automation': 'from-green-600 to-emerald-600',
    'Innovation': 'from-yellow-600 to-orange-600',
    'Emerging Tech': 'from-purple-600 to-indigo-600'
  };

>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
  const featuredServices = [
    {
      title: 'AI Project Management Platform',
      description: 'Revolutionize project delivery with AI-powered task prioritization, predictive analytics, and intelligent team collaboration.',
      icon: Target,
      href: '/services/ai-project-management-platform',
      color: 'from-purple-600 to-pink-600',
      features: ['AI-Powered Task Prioritization', 'Smart Team Collaboration', 'Predictive Timeline Management', 'Performance Analytics'],
      price: 'From $299/month',
      category: 'Project Management'
    },
    {
      title: 'AI Cybersecurity Threat Detection',
      description: 'Advanced AI-powered cybersecurity platform with 99.9% threat detection rate and real-time automated response.',
      icon: Shield,
      href: '/services/ai-cybersecurity-threat-detection',
      color: 'from-red-600 to-orange-600',
      features: ['Real-time Threat Detection', 'Automated Response', 'Advanced Analytics', 'Compliance Reporting'],
      price: 'From $399/month',
      category: 'Cybersecurity'
    },
    {
      title: 'AI Financial Trading Platform',
      description: 'Revolutionary AI-powered trading platform delivering 25% higher returns through intelligent market analysis and automation.',
      icon: TrendingUp,
      href: '/services/ai-financial-trading-platform',
      color: 'from-green-600 to-blue-600',
      features: ['AI-Powered Market Analysis', 'Automated Trading Strategies', 'Real-Time Portfolio Optimization', 'Risk Management'],
      price: 'From $199/month',
      category: 'Financial Services'
    },
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered diagnosis support, predictive analytics, and patient monitoring.',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['AI-Powered Diagnosis Support', 'Predictive Health Analytics', 'Patient Outcome Prediction', 'Real-Time Monitoring'],
      price: 'From $799/month',
      category: 'Healthcare'
    }
  ];
<<<<<<< HEAD

  const categories = useMemo(() => {
    const cats = [...new Set(INNOVATIVE_SERVICES_2025.map(service => service.category))];
=======

  const allServices = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Platform',
      category: 'AI & Analytics',
      price: '$25,000',
      priceRange: '$25K - $75K',
      duration: '6-12 months',
      teamSize: '8-15',
      roi: '340%',
      features: [
        'Real-time data analytics',
        'Predictive modeling',
        'Custom dashboards',
        'API integration',
        '24/7 support'
      ],
      description: 'Comprehensive AI-powered business intelligence solution with advanced analytics and predictive capabilities.',
      href: '/services/ai-business-intelligence',
      ctaLabel: 'Get AI BI Quote'
    },
    {
      id: 2,
      title: 'Quantum AI Cybersecurity Suite',
      category: 'Cybersecurity',
      price: '$45,000',
      priceRange: '$45K - $120K',
      duration: '8-16 months',
      teamSize: '12-20',
      roi: '420%',
      features: [
        'Quantum-resistant encryption',
        'AI threat detection',
        'Zero-trust architecture',
        'Compliance reporting',
        'Incident response'
      ],
      description: 'Next-generation cybersecurity solution combining quantum computing and AI for unparalleled protection.',
      href: '/services/quantum-ai-cybersecurity',
      ctaLabel: 'Get Security Quote'
    },
    {
      id: 3,
      title: 'Edge Computing IoT Platform',
      category: 'IoT & Edge',
      price: '$35,000',
      priceRange: '$35K - $90K',
      duration: '7-14 months',
      teamSize: '10-18',
      roi: '280%',
      features: [
        'Real-time processing',
        'Predictive maintenance',
        'Scalable architecture',
        'Data analytics',
        'Remote monitoring'
      ],
      description: 'Advanced edge computing platform for IoT applications with real-time analytics and predictive capabilities.',
      href: '/services/edge-computing-iot',
      ctaLabel: 'Get IoT Quote'
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Solution',
      category: 'Blockchain',
      price: '$30,000',
      priceRange: '$30K - $80K',
      duration: '6-12 months',
      teamSize: '8-15',
      roi: '310%',
      features: [
        'Smart contracts',
        'Real-time tracking',
        'Transparency reporting',
        'Multi-party integration',
        'Compliance management'
      ],
      description: 'Blockchain-based supply chain solution providing transparency, traceability, and trust across global networks.',
      href: '/services/blockchain-supply-chain',
      ctaLabel: 'Get Blockchain Quote'
    },
    {
      id: 5,
      title: 'AI-Powered Customer Success Platform',
      category: 'AI & Support',
      price: '$20,000',
      priceRange: '$20K - $60K',
      duration: '5-10 months',
      teamSize: '6-12',
      roi: '380%',
      features: [
        'Predictive analytics',
        'Automated engagement',
        'Customer insights',
        'Churn prevention',
        'Performance tracking'
      ],
      description: 'AI-driven customer success platform that improves retention and increases customer lifetime value.',
      href: '/services/ai-customer-success',
      ctaLabel: 'Get Customer Success Quote'
    },
    {
      id: 6,
      title: 'Cloud-Native DevOps Platform',
      category: 'Cloud & DevOps',
      price: '$28,000',
      priceRange: '$28K - $70K',
      duration: '6-12 months',
      teamSize: '8-15',
      roi: '290%',
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Auto-scaling',
        'Monitoring & alerting',
        'Security integration'
      ],
      description: 'Modern cloud-native DevOps platform with automated deployment and infrastructure management.',
      href: '/services/cloud-native-devops',
      ctaLabel: 'Get DevOps Quote'
    }
  ];

  const categories = useMemo(() => {
    const cats = [...new Set(allServices.map(service => service.category))];
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
    return cats.sort();
  }, []);

  const filteredServices = useMemo(() => {
<<<<<<< HEAD
    let filtered = INNOVATIVE_SERVICES_2025;
    
=======
    let filtered = allServices;

>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[$,]/g, ''));
        switch (priceRange) {
          case '0-10000': return price <= 10000;
          case '10000-25000': return price > 10000 && price <= 25000;
          case '25000-50000': return price > 25000 && price <= 50000;
          case '50000+': return price > 50000;
          default: return true;
        }
      });
    }
<<<<<<< HEAD
    
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });
    
=======

>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
    return filtered;
  }, [allServices, searchQuery, selectedCategory, priceRange]);

<<<<<<< HEAD
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the filteredServices useMemo
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered services and innovative solutions designed to transform your business in 2025 and beyond."
        keywords="AI services, innovative solutions, micro SaaS, technology services, artificial intelligence, business automation"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Showcase 2025</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI-powered services and innovative solutions 
              designed to transform your business and drive growth in 2025 and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                100+ AI-Powered Services
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Transparent Pricing
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Instant Deployment
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <form onSubmit={handleSearch} className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under $1,000</option>
                    <option value="medium">$1,000 - $3,000</option>
                    <option value="high">Over $3,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative AI-powered services that are 
              transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">{service.price}</span>
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              All Services ({filteredServices.length})
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete catalog of innovative AI-powered services 
              and find the perfect solution for your business needs.
            </p>
          </motion.div>

          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-semibold">${service.price.toLocaleString()}/month</span>
                      <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/30 text-gray-400 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    View Details <ArrowRight className="w-3 h-3 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              Let's discuss how our innovative AI-powered services can help 
              you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Explore All Services
              </Link>
=======
  const sortedServices = useMemo(() => {
    const sorted = [...filteredServices];
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'price':
        return sorted.sort((a, b) => parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, '')));
      case 'category':
        return sorted.sort((a, b) => a.category.localeCompare(b.category));
      case 'roi':
        return sorted.sort((a, b) => parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', '')));
      default:
        return sorted;
    }
  }, [filteredServices, sortBy]);

  const ServiceCard = ({ service }: { service: any }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="mb-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
            {service.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
          <div className="text-gray-400 text-sm">{service.priceRange}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center text-gray-300">
            <Clock className="w-4 h-4 mr-2 text-cyan-400" />
            {service.duration}
          </div>
          <div className="flex items-center text-gray-300">
            <Users className="w-4 h-4 mr-2 text-cyan-400" />
            {service.teamSize}
          </div>
          <div className="flex items-center text-gray-300">
            <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
            {service.roi} ROI
          </div>
          <div className="flex items-center text-gray-300">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Featured
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="text-green-400 w-4 h-4 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href={service.href}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
        >
          {service.ctaLabel}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </motion.div>
    );
  };

  const FeaturedServiceCard = ({ service }: { service: any }) => {
    const IconComponent = service.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-cyan-400" />
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full">
            Featured
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.description}</p>
        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="text-green-400 w-4 h-4 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
          <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
            {service.category}
          </span>
        </div>
        
        <a
          href={service.href}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </motion.div>
    );
  };

  return (
    <>
      <SEO
        title="Innovative Services Showcase 2025 | Zion Tech Group"
        description="Discover our cutting-edge innovative services for 2025. Explore AI-powered solutions, quantum computing, blockchain, and emerging technologies."
        keywords="innovative services 2025, AI solutions, quantum computing, blockchain, emerging technologies, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge technology services that are shaping the future. From AI-powered solutions to quantum computing and emerging technologies.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Search */}
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-10000">$0 - $10K</option>
                    <option value="10000-25000">$10K - $25K</option>
                    <option value="25000-50000">$25K - $50K</option>
                    <option value="50000+">$50K+</option>
                  </select>
                </div>
                
                {/* Sort By */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                    <option value="roi">Sort by ROI</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Featured Services
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredServices.map((service) => (
                <FeaturedServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              All Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and discover how our innovative services can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore All Services
              </a>
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
            </div>
          </div>
        </section>
      </div>
    </>
  );
}