import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  Filter,
  Star,
  TrendingUp,
  Clock,
  Users,
  Target,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Atom,
  Heart,
  Satellite,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Globe,
  Code,
  Lock,
  BarChart3,
  Workflow,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  PenTool,
  Building,
  Truck,
  DollarSign,
  BookOpen,
  MessageCircle,
  HelpCircle,
  FileText,
  Cpu,
  TrendingDown,
  Calendar,
  UserCheck,
  ShieldCheck,
  Zap as ZapIcon,
  ShoppingCart,
  Gauge,
  MessageCircle as MessageCircleIcon,
  Leaf,
  Wallet,
  GraduationCap,
  Factory,
  Car,
  Building2,
  Wifi,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2026, InnovativeService2026 } from '../data/innovativeServices2026';

export default function InnovativeServicesShowcase2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories
  const categories = ['all', ...new Set(INNOVATIVE_SERVICES_2026.map(service => service.category))];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    return INNOVATIVE_SERVICES_2026
      .filter(service =>
        (selectedCategory === 'all' || service.category === selectedCategory) &&
        (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'featured':
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
          case 'popular':
            return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
          case 'new':
            return (b.new ? 1 : 0) - (a.new ? 1 : 0);
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'name':
            return a.name.localeCompare(b.name);
          case 'ai-score':
            return b.aiScore - a.aiScore;
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedCategory, sortBy]);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Brain: BrainIcon,
      TrendingUp: TrendingUp,
      Server: Server,
      Shield: ShieldIcon,
      Lock: Lock,
      Cpu: Cpu,
      Atom: AtomIcon,
      ShieldCheck: ShieldCheck,
      Heart: Heart,
      BookOpen: BookOpen,
      Leaf: LeafIcon,
      Rocket: RocketIcon,
      Zap: ZapIcon2,
      Database: DatabaseIcon,
      Network: Network,
      Workflow: Workflow,
      Globe: Globe,
      Users: Users,
      Target: Target,
      Star: Star
    };
    return iconMap[iconName] || BrainIcon;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Services': 'from-purple-500 to-pink-500',
      'IT Services': 'from-blue-500 to-cyan-500',
      'Micro SAAS': 'from-green-500 to-emerald-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud Solutions': 'from-blue-500 to-indigo-500',
      'Blockchain': 'from-indigo-500 to-purple-500',
      'IoT': 'from-teal-500 to-green-500',
      'Quantum Computing': 'from-orange-500 to-red-500',
      'FinTech': 'from-green-500 to-blue-500',
      'HealthTech': 'from-red-500 to-pink-500',
      'EdTech': 'from-blue-500 to-indigo-500',
      'GreenTech': 'from-green-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                2026 Innovative Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI, IT, and Micro SAAS solutions that transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="popular">Popular</option>
                  <option value="new">New</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="ai-score">AI Score</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Innovative Services Found
            </h2>
            <p className="text-gray-400">
              Discover cutting-edge solutions designed to transform your business
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center`}>
                      {React.createElement(getIconComponent(service.icon), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="flex items-center gap-2">
                      {service.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                      {service.new && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category and AI Score */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">AI Score: {service.aiScore}</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(getIconComponent(service.icon), { className: "w-8 h-8 text-white" })}
                    </div>

                    {/* Service Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-3">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mb-4 lg:mb-0">
                          {service.featured && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30">
                              Featured
                            </span>
                          )}
                          {service.new && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                              New
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">${service.price.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">Price</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.aiScore}</div>
                          <div className="text-xs text-gray-400">AI Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.setupTime}</div>
                          <div className="text-xs text-gray-400">Setup</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.roi}</div>
                          <div className="text-xs text-gray-400">ROI</div>
                        </div>
                      </div>

                      {/* Features and Benefits */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Benefits</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 4).map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tags and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Explore Service
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can drive your success and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
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

const Info = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
