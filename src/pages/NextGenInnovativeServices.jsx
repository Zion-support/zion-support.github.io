import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, ExternalLink, Phone, Mail, Globe, Clock, Users, CheckCircle, TrendingUp, Award } from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES } from '../data/nextGenInnovativeServices';
export default function NextGenInnovativeServices() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    // Get unique categories
    const categories = useMemo(() => ['all', ...Array.from(new Set(NEXT_GEN_INNOVATIVE_SERVICES.map(s => s.category)))], []);
    // Filter services based on search and category
    const filteredServices = useMemo(() => {
        return NEXT_GEN_INNOVATIVE_SERVICES.filter(service => {
            const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, selectedCategory]);
    const formatPrice = (price, currency) => {
        return `${currency}${price.toLocaleString()}`;
    };
    const getSupportLevelColor = (level) => {
        switch (level.toLowerCase()) {
            case 'enterprise': return 'bg-purple-600';
            case 'premium': return 'bg-blue-600';
            case 'standard': return 'bg-green-600';
            default: return 'bg-gray-600';
        }
    };
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
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Generation Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI-powered solutions across industries. 
              Transform your business with services that leverage the latest advancements in artificial intelligence.
            </p>
            
            {/* Service Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">{NEXT_GEN_INNOVATIVE_SERVICES.length}</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
                <div className="text-gray-300">Technology Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready to Transform Your Business?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-blue-400 text-2xl mb-2">📱</div>
                  <p className="font-semibold">Mobile</p>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-purple-400 text-2xl mb-2">✉️</div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-cyan-400 text-2xl mb-2">🌐</div>
                  <p className="font-semibold">Website</p>
                  <p className="text-gray-300">https://ziontechgroup.com</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-blue-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-blue-400 w-5 h-5"/>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                {categories.map(category => (<option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-400 text-white' : 'bg-white/10 text-gray-400'}`}>
                <Grid className="w-5 h-5"/>
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-400 text-white' : 'bg-white/10 text-gray-400'}`}>
                <List className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredServices.map((service) => (<motion.div key={service.id} variants={itemVariants} className={`bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20 cursor-pointer ${viewMode === 'list' ? 'p-6' : 'p-6'}`} onClick={() => setSelectedService(service)}>
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-blue-400 font-bold text-lg">
                    {formatPrice(service.price, service.currency)}
                    <span className="text-sm text-gray-400">/month</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (<span key={index} className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full">
                    {tag}
                  </span>))}
                {service.tags.length > 4 && (<span className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full">
                    +{service.tags.length - 4} more
                  </span>)}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div className="flex items-center text-gray-400">
                  <Clock size={16} className="mr-2"/>
                  {service.estimatedDelivery}
                </div>
                <div className="flex items-center text-gray-400">
                  <Users size={16} className="mr-2"/>
                  {service.targetAudience.length} audiences
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Phone size={16} className="mr-2"/>
                    {service.contactInfo.phone}
                  </div>
                  <a href={`mailto:${service.contactInfo.email}`} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Mail size={16} className="mr-2"/>
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (<div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
            }} className="text-blue-400 hover:text-blue-300 transition-colors">
              Clear filters
            </button>
          </div>)}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">
                      {selectedService.category}
                    </span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full">
                      {selectedService.subcategory}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">{selectedService.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedService.description}</p>
                </div>
                <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white transition-colors ml-4">
                  ✕
                </button>
              </div>

              {/* Price and Support */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Pricing & Support</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Price:</span>
                      <span className="text-2xl font-bold text-blue-400">
                        {formatPrice(selectedService.price, selectedService.currency)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-white">{selectedService.marketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Support Level:</span>
                      <span className={`px-2 py-1 text-xs text-white rounded ${getSupportLevelColor(selectedService.supportLevel)}`}>
                        {selectedService.supportLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Delivery Time:</span>
                      <span className="text-white">{selectedService.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Business Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-white">{selectedService.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Implementation:</span>
                      <span className="text-white">{selectedService.implementationTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features and Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="mr-2 text-green-400"/>
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (<li key={index} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp size={20} className="mr-2 text-blue-400"/>
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (<li key={index} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>))}
                  </ul>
                </div>
              </div>

              {/* Use Cases and Target Audience */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, index) => (<span key={index} className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">
                        {useCase}
                      </span>))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Target Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.targetAudience.map((audience, index) => (<span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                        {audience}
                      </span>))}
                  </div>
                </div>
              </div>

              {/* Competitive Advantage */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-yellow-400"/>
                  Competitive Advantage
                </h3>
                <p className="text-gray-300 text-lg">{selectedService.competitiveAdvantage}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail size={20} className="mr-2"/>
                  Get Quote
                </a>
                <a href={`tel:${selectedService.contactInfo.phone}`} className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                  <Phone size={20} className="mr-2"/>
                  Call Now
                </a>
                {selectedService.demoUrl && (<a href={selectedService.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                    <ExternalLink size={20} className="mr-2"/>
                    View Demo
                  </a>)}
              </div>
            </div>
          </motion.div>
        </div>)}

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of technology experts is ready to help you implement cutting-edge AI solutions that will give you a competitive advantage. 
              Get in touch today to start your innovation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                <Phone size={24} className="mr-2"/>
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                <Mail size={24} className="mr-2"/>
                Email Us
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Globe size={24} className="mr-2"/>
                Visit Website
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>);
}
