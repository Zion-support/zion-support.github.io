import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart, 
  PanelLeft, 
  Sparkles, 
  Star, 
  Crown, 
  Award, 
  Eye, 
  Handshake, 
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Users as UsersIcon,
  CheckCircle,
  Play,
  BookOpen,
  Download,
  Share2,
  X
} from 'lucide-react';
import { innovativeMicroSaasServices2027 } from '../data/innovativeMicroSaasServices2027';
import { emergingTechServices2027 } from '../data/emergingTechServices2027';

export default function InnovativeServicesShowcase2027() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [...innovativeMicroSaasServices2027, ...emergingTechServices2027];
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => {
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

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'Cybersecurity': Shield,
      'Cloud & DevOps': Cloud,
      'IoT & Edge': Cpu,
      'Quantum Computing': Rocket,
      'Blockchain': Lock,
      'Digital Twin': Globe,
      'Sustainability': Heart,
      '5G & Networks': Network,
      'Autonomous Systems': Code,
      'Metaverse & VR': Eye,
      'Brain-Computer Interface': Brain,
      'Biotechnology': Heart,
      'Space Technology': Rocket,
      'Quantum Internet': Network,
      'Advanced Materials': Sparkles,
      'Fusion Energy': Zap,
      'Nanotechnology': Sparkles,
      'Artificial General Intelligence': Brain,
      'Quantum Biology': Heart
    };
    return iconMap[category] || Sparkles;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Analytics': 'from-zion-cyan to-zion-blue',
      'Cybersecurity': 'from-zion-purple to-zion-red',
      'Cloud & DevOps': 'from-zion-blue to-zion-cyan',
      'IoT & Edge': 'from-zion-green to-zion-cyan',
      'Quantum Computing': 'from-zion-purple to-zion-cyan',
      'Blockchain': 'from-zion-orange to-zion-purple',
      'Digital Twin': 'from-zion-blue to-zion-purple',
      'Sustainability': 'from-zion-green to-zion-blue',
      '5G & Networks': 'from-zion-blue to-zion-green',
      'Autonomous Systems': 'from-zion-purple to-zion-pink',
      'Metaverse & VR': 'from-zion-purple to-zion-cyan',
      'Brain-Computer Interface': 'from-zion-cyan to-zion-purple',
      'Biotechnology': 'from-zion-green to-zion-cyan',
      'Space Technology': 'from-zion-blue to-zion-purple',
      'Quantum Internet': 'from-zion-purple to-zion-cyan',
      'Advanced Materials': 'from-zion-orange to-zion-yellow',
      'Fusion Energy': 'from-zion-red to-zion-orange',
      'Nanotechnology': 'from-zion-purple to-zion-pink',
      'Artificial General Intelligence': 'from-zion-cyan to-zion-purple',
      'Quantum Biology': 'from-zion-green to-zion-purple'
    };
    return colorMap[category] || 'from-zion-cyan to-zion-purple';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-zion-cyan rounded-full opacity-20"
                animate={{
                  x: [0, Math.random() * window.innerWidth],
                  y: [0, Math.random() * window.innerHeight],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovative Services 2027
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover the future with our cutting-edge micro SAAS services, emerging technologies, and revolutionary AI solutions. 
              Transform your business with next-generation innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold"
              >
                {allServices.length} Services Available
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold"
              >
                Starting from $0.05
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-zion-slate-dark/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                        : 'bg-zion-slate-dark/80 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-cyan/20'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* View Mode and Sort */}
              <div className="flex gap-2 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
                
                <div className="flex bg-zion-slate-dark/80 rounded-lg p-1 border border-zion-cyan/20">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              layout
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
              }
            >
              <AnimatePresence>
                {filteredServices.map((service, index) => {
                  const IconComponent = getCategoryIcon(service.category);
                  const categoryColor = getCategoryColor(service.category);
                  
                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 ${
                        viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
                      }`}
                    >
                      {viewMode === 'grid' ? (
                        // Grid View
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-zion-slate-light">{service.pricing}</div>
                              <div className="text-lg font-bold text-zion-cyan">
                                ${service.price}
                                <span className="text-sm text-zion-slate-light">/{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel}</span>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-zion-slate-light">
                              <UsersIcon className="w-4 h-4 inline mr-1" />
                              {service.userLimit}
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedService(service)}
                              className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                            >
                              Learn More
                            </motion.button>
                          </div>
                        </>
                      ) : (
                        // List View
                        <>
                          <div className={`p-4 rounded-lg bg-gradient-to-r ${categoryColor} mr-6`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              <div className="text-right">
                                <div className="text-sm text-zion-slate-light">{service.pricing}</div>
                                <div className="text-lg font-bold text-zion-cyan">
                                  ${service.price}
                                  <span className="text-sm text-zion-slate-light">/{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel}</span>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-zion-slate-light mb-3">{service.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                              <span><UsersIcon className="w-4 h-4 inline mr-1" /> {service.userLimit}</span>
                              <span><Clock className="w-4 h-4 inline mr-1" /> {service.setupTime}</span>
                              <span className="text-zion-cyan">{service.roi}</span>
                            </div>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedService(service)}
                            className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg transition-all ml-6"
                          >
                            Details
                          </motion.button>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-zion-slate-light text-xl mb-4">No services found</div>
                <p className="text-zion-slate-light">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our team of experts to discuss your technology needs and discover how our innovative services can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+13024640950"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </motion.a>
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                      {React.createElement(getCategoryIcon(selectedService.category), { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                      <p className="text-zion-slate-light">{selectedService.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-zion-slate-light hover:text-white p-2 hover:bg-zion-slate-dark rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                    <p className="text-zion-slate-light mb-6">{selectedService.description}</p>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                          <Star className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20 mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Pricing & Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Price:</span>
                          <span className="text-zion-cyan font-semibold">
                            ${selectedService.price}/{selectedService.pricingModel === 'monthly' ? 'month' : selectedService.pricingModel}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">ROI:</span>
                          <span className="text-zion-cyan">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Setup Time:</span>
                          <span className="text-white">{selectedService.setupTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Users:</span>
                          <span className="text-white">{selectedService.userLimit}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20 mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Phone className="w-4 h-4 text-zion-cyan" />
                          {selectedService.contactInfo.phone}
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Mail className="w-4 h-4 text-zion-cyan" />
                          {selectedService.contactInfo.email}
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <MapPin className="w-4 h-4 text-zion-cyan" />
                          {selectedService.contactInfo.address}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a
                        href={selectedService.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                      >
                        Visit Website
                      </motion.a>
                      <motion.a
                        href={`mailto:${selectedService.contactInfo.email}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all"
                      >
                        Contact
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}