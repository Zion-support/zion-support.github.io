import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
  Globe,
  BarChart3,
  Clock,
  DollarSign,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Search,
  Filter,
  PieChart,
  LineChart,
  FileText,
  Route,
  Warehouse,
  Home,
  Package,
  Factory,
  Ship,
  Plane,
  Car,
  Heart,
  ShoppingCart,
  Atom,
  Wifi,
  Server,
  Palette,
  PenTool,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Copy,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  const services = [
    {
      id: 'ai-autonomous-logistics',
      title: 'AI Autonomous Logistics Platform',
      description: 'Revolutionize your logistics operations with AI-powered autonomous fleet management and intelligent route optimization.',
      icon: Route,
      category: 'AI & Automation',
      price: '$599/month',
      features: [
        'AI-Powered Fleet Management',
        'Intelligent Route Optimization',
        'Real-time Tracking & Analytics',
        'Predictive Maintenance Alerts',
        'Automated Dispatch System'
      ],
      benefits: [
        'Reduce operational costs by 30%',
        'Improve delivery efficiency by 45%',
        'Real-time visibility across operations',
        'Scalable for enterprise needs'
      ],
      rating: 4.8,
      reviews: 127,
      deployment: 'Cloud-based',
      support: '24/7 Technical Support'
    },
    {
      id: 'quantum-edge-computing',
      title: 'Quantum Edge Computing Solutions',
      description: 'Harness the power of quantum computing at the edge for ultra-fast data processing and real-time decision making.',
      icon: Atom,
      category: 'Quantum Computing',
      price: '$1,299/month',
      features: [
        'Quantum Processing Units (QPUs)',
        'Edge Computing Infrastructure',
        'Real-time Quantum Algorithms',
        'Hybrid Classical-Quantum Systems',
        'Low-latency Data Processing'
      ],
      benefits: [
        '1000x faster than classical computing',
        'Real-time quantum advantage',
        'Reduced data transmission costs',
        'Enhanced security protocols'
      ],
      rating: 4.9,
      reviews: 89,
      deployment: 'Hybrid Edge-Cloud',
      support: 'Dedicated Quantum Support Team'
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection and response using artificial intelligence to protect your digital assets.',
      icon: Shield,
      category: 'Cybersecurity',
      price: '$799/month',
      features: [
        'AI Threat Detection',
        'Behavioral Analysis',
        'Automated Incident Response',
        'Threat Intelligence',
        'Compliance Reporting'
      ],
      benefits: [
        '99.9% threat detection accuracy',
        'Reduced false positives by 80%',
        'Automated response in seconds',
        'Compliance with major standards'
      ],
      rating: 4.7,
      reviews: 203,
      deployment: 'Cloud & On-premise',
      support: '24/7 Security Operations Center'
    },
    {
      id: 'blockchain-enterprise',
      title: 'Blockchain Enterprise Solutions',
      description: 'Transform your business processes with secure, transparent, and efficient blockchain technology.',
      icon: Network,
      category: 'Blockchain',
      price: '$899/month',
      features: [
        'Smart Contract Development',
        'Supply Chain Transparency',
        'Digital Identity Management',
        'Asset Tokenization',
        'Cross-chain Interoperability'
      ],
      benefits: [
        'Enhanced security and transparency',
        'Reduced transaction costs',
        'Improved audit trails',
        'Global accessibility'
      ],
      rating: 4.6,
      reviews: 156,
      deployment: 'Multi-cloud Blockchain',
      support: 'Blockchain Development Team'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Revolutionize healthcare with AI-powered analytics for better patient outcomes and operational efficiency.',
      icon: Heart,
      category: 'Healthcare AI',
      price: '$699/month',
      features: [
        'Patient Data Analytics',
        'Predictive Diagnostics',
        'Treatment Optimization',
        'Population Health Insights',
        'Clinical Decision Support'
      ],
      benefits: [
        'Improve patient outcomes by 40%',
        'Reduce healthcare costs by 25%',
        'Real-time clinical insights',
        'HIPAA compliant platform'
      ],
      rating: 4.8,
      reviews: 178,
      deployment: 'HIPAA Compliant Cloud',
      support: 'Healthcare IT Specialists'
    },
    {
      id: 'cloud-finops-optimizer',
      title: 'Cloud FinOps Optimization Platform',
      description: 'Optimize your cloud spending with intelligent cost management and resource optimization.',
      icon: DollarSign,
      category: 'Cloud Optimization',
      price: '$499/month',
      features: [
        'Cost Analytics & Reporting',
        'Resource Optimization',
        'Budget Management',
        'Waste Detection',
        'Automated Scaling'
      ],
      benefits: [
        'Reduce cloud costs by 35%',
        'Automated resource optimization',
        'Real-time cost monitoring',
        'Multi-cloud support'
      ],
      rating: 4.7,
      reviews: 142,
      deployment: 'Multi-cloud Platform',
      support: 'Cloud Cost Optimization Experts'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Quantum Computing', 'Cybersecurity', 'Blockchain', 'Healthcare AI', 'Cloud Optimization'];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace('/month', '')) - 
                 parseFloat(b.price.replace('$', '').replace('/month', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });
  }, [filteredServices, sortBy]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2026
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover cutting-edge technology solutions that will transform your business in 2026 and beyond
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>Latest Technologies</span>
              <span>•</span>
              <span>AI-Powered Solutions</span>
              <span>•</span>
              <span>Enterprise Ready</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="reviews">Sort by Reviews</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of innovative solutions designed for the future
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-white text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                        <span className="text-sm text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-400 ml-2">
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Deployment:</span>
                          <span className="text-white ml-2">{service.deployment}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Support:</span>
                          <span className="text-white ml-2">{service.support}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-white text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your specific needs and find the perfect 
              solution for your business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              <a
                href="/get-started"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper components for view mode icons
const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const List = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);