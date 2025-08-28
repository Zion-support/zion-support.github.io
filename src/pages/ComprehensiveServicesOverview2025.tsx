import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  TrendingUp, 
  Users, 
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Rocket,
  Atom,
  Dna,
  Satellite,
  Activity,
  Eye,
  CpuIcon,
  Network,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  BrainCircuit,
  Quantum,
  Robot,
  Car,
  Gamepad2,
  Wifi,
  Fingerprint
} from 'lucide-react';
import { CUTTING_EDGE_SERVICES_2025, SPECIALIZED_SERVICES_2025 } from '../data/2025-cutting-edge-innovations';
import { EMERGING_TECH_SERVICES_2025, ADDITIONAL_EMERGING_TECH_SERVICES } from '../data/emerging-tech-services-2025';

const ComprehensiveServicesOverview2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...CUTTING_EDGE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'text-blue-500', count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'text-purple-500', count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Emerging Technology', name: 'Emerging Tech', icon: Zap, color: 'text-yellow-500', count: allServices.filter(s => s.category === 'Emerging Technology').length },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Cpu, color: 'text-green-500', count: allServices.filter(s => s.category === 'AI & IoT').length },
    { id: 'Blockchain', name: 'Blockchain', icon: Database, color: 'text-orange-500', count: allServices.filter(s => s.category === 'Blockchain').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'text-red-500', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Financial Technology', name: 'FinTech', icon: TrendingUp, color: 'text-emerald-500', count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Healthcare Technology', name: 'Healthcare', icon: Users, color: 'text-pink-500', count: allServices.filter(s => s.category === 'Healthcare Technology').length },
    { id: 'Green Technology', name: 'Green Tech', icon: Globe, color: 'text-teal-500', count: allServices.filter(s => s.category === 'Green Technology').length },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Quantum, color: 'text-indigo-500', count: allServices.filter(s => s.category === 'Quantum AI').length },
    { id: 'Robotics & Automation', name: 'Robotics', icon: Robot, color: 'text-cyan-500', count: allServices.filter(s => s.category === 'Robotics & Automation').length },
    { id: 'Cognitive Computing', name: 'Cognitive AI', icon: BrainCircuit, color: 'text-violet-500', count: allServices.filter(s => s.category === 'Cognitive Computing').length },
    { id: 'Digital Twins', name: 'Digital Twins', icon: Monitor, color: 'text-blue-400', count: allServices.filter(s => s.category === 'Digital Twins').length },
    { id: 'Biotechnology', name: 'Biotechnology', icon: Dna, color: 'text-green-400', count: allServices.filter(s => s.category === 'Biotechnology').length },
    { id: 'Space Technology', name: 'Space Tech', icon: Satellite, color: 'text-purple-400', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Neurotechnology', name: 'Neurotech', icon: Activity, color: 'text-pink-400', count: allServices.filter(s => s.category === 'Neurotechnology').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
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

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || Star;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'text-zion-cyan';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-zion-cyan block">Services Overview 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover Zion Tech Group's complete portfolio of cutting-edge micro SAAS, IT, AI, and emerging technology services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span>{allServices.length}+ Revolutionary Services</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span>Market-Ready Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span>Proven ROI & Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-zion-cyan/10 border-y border-zion-cyan/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-zion-slate-light">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center px-6 py-3 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-zion-cyan/20 border border-zion-cyan' 
                      : 'bg-zion-slate/30 border border-zion-slate-light/20 hover:border-zion-cyan/40'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${selectedCategory === category.id ? 'bg-zion-cyan' : 'bg-zion-slate/50'}`}>
                    <IconComponent className={`w-6 h-6 ${selectedCategory === category.id ? 'text-zion-slate-dark' : category.color}`} />
                  </div>
                  <h3 className="text-sm font-medium text-white mb-1">{category.name}</h3>
                  <p className="text-xs text-zion-slate-light">{category.count} services</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-zion-slate/50 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-zion-slate-dark' 
                    : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                }`}
              >
                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-zion-slate-dark' 
                    : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                }`}
              >
                <div className="space-y-1 w-5 h-5">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-zion-slate-light mb-6">
            Showing {filteredServices.length} of {allServices.length} services
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-zion-slate/30 backdrop-blur-sm border border-zion-slate-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {(() => {
                            const IconComponent = getCategoryIcon(service.category);
                            return <IconComponent className={`w-5 h-5 ${getCategoryColor(service.category)}`} />;
                          })()}
                          <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-slate-light">per {service.pricingModel}</div>
                      </div>
                    </div>

                    {/* Innovation Level and ROI */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs font-medium rounded-full">
                        {service.innovationLevel}
                      </span>
                      <span className="text-green-400 font-medium text-sm">ROI: {service.roi}</span>
                    </div>

                    {/* Market Price */}
                    <div className="text-sm text-zion-slate-light mb-4">
                      Market: {service.marketPrice}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-zion-slate-light text-sm text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technology Stack Preview */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technicalSpecs.technology.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-zion-slate/50 text-zion-slate-light text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technicalSpecs.technology.length > 3 && (
                        <span className="px-2 py-1 bg-zion-slate/50 text-zion-slate-light text-xs rounded">
                          +{service.technicalSpecs.technology.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="mb-6 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Delivery:</span>
                      <span className="text-white">{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-white">{service.technicalSpecs.uptime}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex-1 flex items-center justify-center px-4 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                  </div>

                  {/* Trial Info */}
                  {service.freeTier && (
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Free Tier Available
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-zion-slate/30 backdrop-blur-sm border border-zion-slate-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {(() => {
                          const IconComponent = getCategoryIcon(service.category);
                          return <IconComponent className={`w-6 h-6 ${getCategoryColor(service.category)}`} />;
                        })()}
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs font-medium rounded-full">
                          {service.innovationLevel}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-zion-slate-light mb-4">{service.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 6).map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.slice(0, 4).map((useCase, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zion-slate/50 text-zion-slate-light text-sm rounded"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="lg:w-80 space-y-4">
                      {/* Pricing */}
                      <div className="text-center p-4 bg-zion-slate/20 rounded-lg">
                        <div className="text-3xl font-bold text-zion-cyan mb-1">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-zion-slate-light mb-2">per {service.pricingModel}</div>
                        <div className="text-sm text-zion-slate-light">Market: {service.marketPrice}</div>
                        <div className="text-green-400 font-medium mt-2">ROI: {service.roi}</div>
                      </div>

                      {/* Technical Specs */}
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Delivery:</span>
                          <span className="text-white">{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Support:</span>
                          <span className="text-white capitalize">{service.supportLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Uptime:</span>
                          <span className="text-white">{service.technicalSpecs.uptime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">API Endpoints:</span>
                          <span className="text-white">{service.technicalSpecs.apiEndpoints}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <a
                          href={service.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center px-4 py-3 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </a>
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="w-full flex items-center justify-center px-4 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Contact Sales
                        </a>
                      </div>

                      {/* Trial Info */}
                      {service.freeTier && (
                        <div className="text-center">
                          <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Free Tier Available
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-xl mb-4">No services found</div>
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our comprehensive services can transform your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="px-8 py-4 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors text-lg"
            >
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors text-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview2025;
