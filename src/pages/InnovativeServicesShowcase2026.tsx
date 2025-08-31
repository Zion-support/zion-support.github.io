import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Server, 
  Cloud, 
  Lock, 
  Users, 
  MessageCircle, 
  DollarSign, 
  Atom, 
  Cpu, 
  TrendingUp, 
  BarChart3, 
  Workflow, 
  Code, 
  Building2,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  Rocket,
  Lightbulb,
  Globe,
  Award,
  ChartBar,
  Users2,
  Cog,
  Palette,
  Database,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Settings,
  Palette as PaletteIcon,
  Menu,
  X,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Filter,
  Grid,
  List
} from 'lucide-react';

// Import service data
import { innovativeMicroSaasServices2026 } from '../data/innovativeMicroSaasServices2026';
import { innovativeITServices2026 } from '../data/innovativeITServices2026';
import { innovativeAIServices2026 } from '../data/innovativeAIServices2026';

const InnovativeServicesShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices2026.map(service => ({ ...service, type: 'Micro SaaS' })),
    ...innovativeITServices2026.map(service => ({ ...service, type: 'IT Services' })),
    ...innovativeAIServices2026.map(service => ({ ...service, type: 'AI Services' }))
  ];

  // Filter services based on active tab and search term
  const filteredServices = allServices.filter(service => {
    const matchesTab = activeTab === 'all' || service.type === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price - b.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-zion-cyan text-sm font-medium mb-1">{service.category}</p>
          <p className="text-zion-slate-light text-sm">{service.type}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-zion-cyan">{service.pricing}</div>
          {service.marketPrice && (
            <div className="text-xs text-zion-slate-light line-through">{service.marketPrice}</div>
          )}
        </div>
      </div>

      <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{service.description}</p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-zion-slate-light">
          <Target className="w-4 h-4 mr-2 text-zion-cyan" />
          <span>Market Size: {service.marketSize}</span>
        </div>
        {service.growthRate && (
          <div className="flex items-center text-sm text-zion-slate-light">
            <TrendingUp className="w-4 h-4 mr-2 text-zion-cyan" />
            <span>Growth Rate: {service.growthRate}</span>
          </div>
        )}
        {service.aiScore && (
          <div className="flex items-center text-sm text-zion-slate-light">
            <Brain className="w-4 h-4 mr-2 text-zion-cyan" />
            <span>AI Score: {service.aiScore}/100</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.slice(0, 4).map((tag: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
        <ul className="space-y-1">
          {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
            <li key={index} className="flex items-start text-xs text-zion-slate-light">
              <CheckCircle className="w-3 h-3 mr-2 text-zion-cyan mt-0.5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-zion-cyan font-medium">
          {service.roi && `ROI: ${service.roi}`}
        </div>
        <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors text-sm font-medium">
          Learn More
        </button>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-4">
          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-zion-cyan text-sm font-medium mb-1">{service.category}</p>
          <p className="text-zion-slate-light text-sm">{service.type}</p>
        </div>
        
        <div className="col-span-3">
          <p className="text-zion-slate-light text-sm line-clamp-3">{service.description}</p>
        </div>

        <div className="col-span-2 text-center">
          <div className="text-lg font-bold text-zion-cyan">{service.pricing}</div>
          {service.marketPrice && (
            <div className="text-xs text-zion-slate-light line-through">{service.marketPrice}</div>
          )}
        </div>

        <div className="col-span-2">
          <div className="text-sm text-zion-slate-light mb-1">
            <span className="text-zion-cyan">Market:</span> {service.marketSize}
          </div>
          {service.growthRate && (
            <div className="text-sm text-zion-slate-light">
              <span className="text-zion-cyan">Growth:</span> {service.growthRate}
            </div>
          )}
        </div>

        <div className="col-span-1 text-center">
          <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors text-sm font-medium">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary 2026 services portfolio featuring cutting-edge AI, Micro SaaS, and IT infrastructure solutions with real market data and competitive pricing." />
        <meta name="keywords" content="AI services, Micro SaaS, IT services, 2026 innovations, Zion Tech Group, technology solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Innovative Services Showcase
                <span className="text-zion-cyan block">2026</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                Discover Zion Tech Group's revolutionary portfolio of AI-powered Micro SaaS, 
                cutting-edge IT infrastructure, and intelligent automation solutions. 
                Real market data, competitive pricing, and proven ROI.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-zion-cyan">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">50+ Innovative Services</span>
                </div>
                <div className="flex items-center text-zion-cyan">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-medium">Proven ROI</span>
                </div>
                <div className="flex items-center text-zion-cyan">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-medium">Enterprise Security</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors font-semibold text-lg">
                  View All Services
                </button>
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors font-semibold text-lg">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Services', count: allServices.length },
                  { id: 'Micro SaaS', label: 'Micro SaaS', count: innovativeMicroSaasServices2026.length },
                  { id: 'IT Services', label: 'IT Services', count: innovativeITServices2026.length },
                  { id: 'AI Services', label: 'AI Services', count: innovativeAIServices2026.length }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  />
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>

                <div className="flex bg-zion-slate-dark rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {sortedServices.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                }
              >
                {sortedServices.map((service, index) => (
                  viewMode === 'grid' ? (
                    <ServiceCard key={`${service.type}-${service.id}`} service={service} />
                  ) : (
                    <ServiceList key={`${service.type}-${service.id}`} service={service} />
                  )
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Join hundreds of companies already leveraging Zion Tech Group's innovative solutions 
                to drive growth, reduce costs, and stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors font-semibold text-lg inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2026;
