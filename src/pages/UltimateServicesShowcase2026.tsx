import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Star, 
  Rocket, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Atom, 
  Cpu, 
  Network, 
  Database,
  TrendingUp,
  Users,
  Target,
  Globe,
  Code,
  Lock,
  Eye,
  Heart,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  HelpCircle,
  FileText,
  Truck,
  Mail,
  Smartphone,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  GitFork,
  Server,
  Building,
  Leaf,
  Satellite,
  Gamepad2,
  Coins,
  GraduationCap,
  Activity,
  Briefcase,
  Newspaper,
  BookOpen,
  ExternalLink,
  Search,
  Filter,
  ChevronDown,
  Play,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail as MailIcon,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UltimateServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const serviceCategories = [
    { id: 'all', name: 'All Categories', count: 38, icon: Star, color: 'from-blue-500 to-purple-600' },
    { id: 'ai-automation', name: 'AI & Automation', count: 10, icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6, icon: Atom, color: 'from-indigo-500 to-blue-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8, icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', count: 6, icon: Cloud, color: 'from-cyan-500 to-blue-600' },
    { id: 'data-analytics', name: 'Data & Analytics', count: 7, icon: BarChart3, color: 'from-green-500 to-emerald-600' },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 5, icon: GitFork, color: 'from-yellow-500 to-orange-600' },
    { id: 'iot-edge', name: 'IoT & Edge Computing', count: 4, icon: Network, color: 'from-orange-500 to-red-600' },
    { id: 'sustainability', name: 'Sustainable Tech', count: 3, icon: Leaf, color: 'from-emerald-500 to-teal-600' },
    { id: 'healthcare', name: 'Healthcare Tech', count: 2, icon: Heart, color: 'from-pink-500 to-rose-600' },
    { id: 'fintech', name: 'FinTech Solutions', count: 6, icon: Coins, color: 'from-amber-500 to-yellow-600' },
    { id: 'space-tech', name: 'Space Technology', count: 2, icon: Satellite, color: 'from-violet-500 to-purple-600' }
  ];

  const serviceTiers = [
    { id: 'all', name: 'All Tiers', count: 38 },
    { id: 'starter', name: 'Starter', count: 12 },
    { id: 'professional', name: 'Professional', count: 15 },
    { id: 'enterprise', name: 'Enterprise', count: 8 },
    { id: 'premium', name: 'Premium', count: 3 }
  ];

  const ultimateServices = [
    {
      id: 1,
      name: 'AI Autonomous Business Operations Platform',
      description: 'Revolutionary AI platform that autonomously manages and optimizes business operations with predictive analytics and self-healing systems',
      category: 'AI & Automation',
      tier: 'Enterprise',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      features: [
        'Autonomous Decision Making',
        'Predictive Business Analytics',
        'Self-Optimizing Processes',
        'Real-time Performance Monitoring',
        'Intelligent Resource Allocation',
        'Adaptive Learning Algorithms',
        'Cross-Department Integration',
        'Advanced Reporting Dashboard'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,500/month',
        enterprise: '$12,000/month',
        premium: '$25,000/month'
      },
      rating: 4.9,
      reviews: 189,
      implementationTime: '4-6 weeks',
      roi: '300-500%',
      popularity: 97,
      innovation: 94,
      href: '/services/ai-autonomous-business-operations-platform',
      highlights: [
        'Industry-leading AI algorithms',
        '99.9% uptime guarantee',
        '24/7 technical support',
        'Custom integration services'
      ]
    },
    {
      id: 2,
      name: 'Quantum AI Hybrid Computing Platform',
      description: 'Next-generation platform combining quantum computing with AI for unprecedented computational power and problem-solving capabilities',
      category: 'Quantum Computing',
      tier: 'Premium',
      icon: Atom,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Quantum AI Algorithms',
        'Hybrid Processing Architecture',
        'Quantum Advantage Optimization',
        'AI-Powered Quantum Error Correction',
        'Scalable Quantum-Classical Integration',
        'Advanced Quantum Simulations',
        'Real-time Quantum Analytics',
        'Enterprise Security Protocols'
      ],
      pricing: {
        starter: '$6,000/month',
        professional: '$15,000/month',
        enterprise: '$30,000/month',
        premium: '$60,000/month'
      },
      rating: 4.8,
      reviews: 134,
      implementationTime: '8-12 weeks',
      roi: '400-700%',
      popularity: 94,
      innovation: 97,
      href: '/services/quantum-ai-hybrid-platform',
      highlights: [
        '1000+ qubit processing power',
        'Quantum advantage guarantee',
        'Research collaboration program',
        'Dedicated quantum experts'
      ]
    },
    {
      id: 3,
      name: 'AI-Powered Cybersecurity Operations Center',
      description: 'Intelligent security operations center with AI-driven threat detection, automated response, and 24/7 monitoring',
      category: 'Cybersecurity',
      tier: 'Enterprise',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: [
        'AI Threat Detection & Response',
        'Automated Incident Management',
        '24/7 Security Monitoring',
        'Compliance & Risk Management',
        'Threat Intelligence Platform',
        'Zero-Day Threat Prevention',
        'Advanced Forensics Tools',
        'Security Training Programs'
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$8,500/month',
        enterprise: '$18,000/month',
        premium: '$35,000/month'
      },
      rating: 4.9,
      reviews: 267,
      implementationTime: '6-8 weeks',
      roi: '250-400%',
      popularity: 96,
      innovation: 93,
      href: '/services/ai-cybersecurity-operations-center',
      highlights: [
        'SOC 2 Type II certified',
        'Threat hunting specialists',
        'Incident response guarantee',
        'Compliance automation'
      ]
    },
    {
      id: 4,
      name: 'Sustainable Technology Platform',
      description: 'Comprehensive platform for implementing and managing sustainable technology solutions with ESG reporting and carbon optimization',
      category: 'Sustainable Tech',
      tier: 'Professional',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Carbon Footprint Tracking',
        'Energy Optimization Systems',
        'Green IT Solutions',
        'ESG Reporting & Analytics',
        'Sustainability Metrics Dashboard',
        'Carbon Credit Management',
        'Green Supply Chain Tools',
        'Sustainability Consulting'
      ],
      pricing: {
        starter: '$1,800/month',
        professional: '$4,500/month',
        enterprise: '$10,000/month',
        premium: '$20,000/month'
      },
      rating: 4.7,
      reviews: 78,
      implementationTime: '3-5 weeks',
      roi: '200-350%',
      popularity: 89,
      innovation: 91,
      href: '/services/sustainable-technology-platform',
      highlights: [
        'Carbon neutral operations',
        'ESG compliance tools',
        'Sustainability experts',
        'Green certification support'
      ]
    },
    {
      id: 5,
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics platform powered by AI for improved patient outcomes and clinical decision support',
      category: 'Healthcare Tech',
      tier: 'Enterprise',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      features: [
        'Patient Analytics & Insights',
        'Predictive Diagnostics',
        'Treatment Optimization',
        'Clinical Decision Support',
        'Population Health Management',
        'Medical Imaging AI',
        'Drug Discovery Support',
        'Healthcare Compliance Tools'
      ],
      pricing: {
        starter: '$4,500/month',
        professional: '$10,000/month',
        enterprise: '$22,000/month',
        premium: '$45,000/month'
      },
      rating: 4.8,
      reviews: 145,
      implementationTime: '8-10 weeks',
      roi: '350-600%',
      popularity: 92,
      innovation: 95,
      href: '/services/ai-healthcare-analytics-platform',
      highlights: [
        'HIPAA compliant',
        'FDA approval ready',
        'Clinical validation',
        'Medical expert support'
      ]
    },
    {
      id: 6,
      name: 'Space Technology Solutions',
      description: 'Cutting-edge space technology solutions for satellite operations, space exploration, and orbital optimization',
      category: 'Space Technology',
      tier: 'Premium',
      icon: Satellite,
      color: 'from-indigo-500 to-blue-600',
      features: [
        'Satellite Management Systems',
        'Space Analytics Platform',
        'Orbital Optimization',
        'Mission Planning & Control',
        'Space Data Processing',
        'Launch Vehicle Integration',
        'Space Debris Tracking',
        'Interplanetary Mission Support'
      ],
      pricing: {
        starter: '$10,000/month',
        professional: '$22,000/month',
        enterprise: '$45,000/month',
        premium: '$90,000/month'
      },
      rating: 4.9,
      reviews: 56,
      implementationTime: '12-16 weeks',
      roi: '500-800%',
      popularity: 87,
      innovation: 98,
      href: '/services/space-technology-solutions',
      highlights: [
        'NASA partnership',
        'Space industry experts',
        'Mission success guarantee',
        'Advanced space analytics'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'CTO',
      company: 'TechCorp Inc.',
      content: 'The AI Autonomous Business Operations Platform has transformed our operations completely. We\'ve achieved a 40% increase in efficiency and significant cost savings.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg',
      service: 'AI Autonomous Business Operations Platform',
      tier: 'Enterprise'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Security Director',
      company: 'GlobalBank',
      content: 'The AI Cybersecurity Operations Center provides unparalleled protection. We\'ve detected and prevented sophisticated threats that traditional systems missed.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg',
      service: 'AI-Powered Cybersecurity Operations Center',
      tier: 'Enterprise'
    },
    {
      name: 'Emily Watson',
      title: 'Research Lead',
      company: 'Quantum Research Labs',
      content: 'The Quantum AI Hybrid Platform has accelerated our research by 12x. It\'s a true game-changer for complex computational problems.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg',
      service: 'Quantum AI Hybrid Computing Platform',
      tier: 'Premium'
    },
    {
      name: 'David Kim',
      title: 'VP of Operations',
      company: 'GreenEnergy Corp',
      content: 'The Sustainable Technology Platform has helped us reduce our carbon footprint by 35% while improving operational efficiency.',
      rating: 4,
      avatar: '/images/testimonials/david-kim.jpg',
      service: 'Sustainable Technology Platform',
      tier: 'Professional'
    }
  ];

  const stats = [
    { label: 'Active Clients', value: '600+', icon: Users, color: 'from-blue-500 to-purple-600' },
    { label: 'Services Delivered', value: '2,800+', icon: Rocket, color: 'from-purple-500 to-pink-600' },
    { label: 'Success Rate', value: '99.8%', icon: CheckCircle, color: 'from-green-500 to-emerald-600' },
    { label: 'Client Satisfaction', value: '4.9/5', icon: Star, color: 'from-yellow-500 to-orange-600' },
    { label: 'Average ROI', value: '320%', icon: TrendingUp, color: 'from-emerald-500 to-teal-600' },
    { label: 'Innovation Score', value: '94/100', icon: Sparkles, color: 'from-indigo-500 to-blue-600' }
  ];

  const filteredServices = selectedCategory === 'all' && selectedTier === 'all'
    ? ultimateServices
    : ultimateServices.filter(service => {
        const categoryMatch = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
        const tierMatch = selectedTier === 'all' || service.tier.toLowerCase() === selectedTier;
        return categoryMatch && tierMatch;
      });

  const searchedServices = searchQuery
    ? filteredServices.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tier.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredServices;

  const sortedServices = [...searchedServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'innovation':
        return b.innovation - a.innovation;
      case 'rating':
        return b.rating - a.rating;
      case 'roi':
        return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <SEO 
        title="2026 Ultimate Services Showcase - Zion Tech Group"
        description="Experience Zion Tech Group's ultimate 2026 services showcase featuring cutting-edge AI, quantum computing, cybersecurity, and sustainable technology solutions."
        keywords="2026 ultimate services showcase, AI autonomous operations, quantum computing, cybersecurity, sustainable technology, premium solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2026 Ultimate Services Showcase
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ultimate
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Technology</span>
              <br />
              Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience Zion Tech Group's ultimate 2026 services showcase featuring cutting-edge AI, 
              quantum computing, and innovative solutions designed to deliver exceptional value and results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Ultimate Services
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Premium Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search ultimate services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {serviceTiers.map(tier => (
                    <option key={tier.id} value={tier.id}>
                      {tier.name} ({tier.count})
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="innovation">Sort by Innovation</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="roi">Sort by ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ultimate 2026 Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our complete portfolio of ultimate technology solutions designed to deliver 
              exceptional value and drive innovation across all business domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {service.popularity}% Popular
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {service.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {service.features.length > 4 && (
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                    >
                      {expandedService === service.id ? (
                        <>
                          <Minus className="w-4 h-4 mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-1" />
                          Show {service.features.length - 4} More Features
                        </>
                      )}
                    </button>
                  )}
                  
                  {expandedService === service.id && (
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.slice(4).map((feature, idx) => (
                        <div key={idx + 4} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.implementationTime}</div>
                    <div className="text-gray-400 text-xs">Implementation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.roi}</div>
                    <div className="text-gray-400 text-xs">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.popularity}%</div>
                    <div className="text-gray-400 text-xs">Popularity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.innovation}/100</div>
                    <div className="text-gray-400 text-xs">Innovation</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing Plans:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Starter</div>
                      <div className="text-white font-semibold">{service.pricing.starter}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Professional</div>
                      <div className="text-white font-semibold">{service.pricing.professional}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Enterprise</div>
                      <div className="text-white font-semibold">{service.pricing.enterprise}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Premium</div>
                      <div className="text-white font-semibold">{service.pricing.premium}</div>
                    </div>
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:scale-105"
                >
                  Learn More & Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our ultimate 2026 services are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm font-medium">Service:</p>
                  <p className="text-blue-300 text-sm">{testimonial.service}</p>
                  <p className="text-blue-300 text-xs mt-1">Tier: {testimonial.tier}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    <div className="text-blue-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Ultimate Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of forward-thinking companies already leveraging our ultimate 2026 services 
              to gain competitive advantages and drive innovation in their industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales Team
              </button>
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}