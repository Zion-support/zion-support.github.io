import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, Phone, Mail, MapPin, TrendingUp, Play, Download, ExternalLink, Search } from 'lucide-react';
import { CUTTING_EDGE_SERVICES_2025 } from '../data/enhanced-2025-cutting-edge-services';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/specialized-industry-solutions-2025';
const ComprehensiveServicesShowcase2025 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const allServices = [...CUTTING_EDGE_SERVICES_2025, ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025];
    const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
    const industries = ['all', ...Array.from(new Set(SPECIALIZED_INDUSTRY_SOLUTIONS_2025.map(service => service.industry)))];
    // Filter services based on selection
    const filteredServices = allServices.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesIndustry = selectedIndustry === 'all' ||
            ('industry' in service ? service.industry === selectedIndustry : true);
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesIndustry && matchesSearch;
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
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cutting-Edge
              </span>
              <br />
              <span className="text-white">AI & IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary micro SAAS solutions that are transforming industries through 
              artificial intelligence, quantum computing, and next-generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                <Play className="w-5 h-5"/>
                Watch Demo
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
                <Download className="w-5 h-5"/>
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-300"/>
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-300"/>
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-300"/>
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                <Search className="absolute right-3 top-3 w-5 h-5 text-white/60"/>
              </div>
            </div>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              {categories.map(category => (<option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>
            <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              {industries.map(industry => (<option key={industry} value={industry} className="bg-slate-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
                </option>))}
            </select>
          </div>
        </div>
        {/* Services Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (<motion.div key={service.id} variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-blue-100 text-sm mb-3">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {service.tags.slice(0, 2).map((tag, tagIndex) => (<span key={tagIndex} className="px-2 py-1 bg-blue-600/30 text-blue-200 text-xs rounded-full">
                        {tag}
                      </span>))}
                  </div>
                </div>
                
                {/* Industry Badge */}
                {'industry' in service && (<div className="inline-block px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full mb-3">
                    {service.industry}
                  </div>)}
              </div>
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400"/>
                  Key Features
                </h4>
                <div className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (<div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"/>
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </div>))}
                  {service.features.length > 4 && (<span className="text-blue-300 text-sm">+{service.features.length - 4} more features</span>)}
                </div>
              </div>
              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400"/>
                  Benefits
                </h4>
                <div className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (<div key={benefitIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"/>
                      <span className="text-blue-100 text-sm">{benefit}</span>
                    </div>))}
                </div>
              </div>
              {/* Pricing & ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Starting Price:</span>
                  <span className="text-2xl font-bold text-green-400">
                    {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-blue-200">/month</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 text-sm">Market Price:</span>
                  <span className="text-blue-100 text-sm">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-blue-200 text-sm">ROI:</span>
                  <span className="text-yellow-400 text-sm font-semibold">{service.roi}</span>
                </div>
              </div>
              {/* Technology & Compliance */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold text-sm">Technology Stack</h4>
                  <h4 className="text-white font-semibold text-sm">Compliance</h4>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, techIndex) => (<span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-blue-200 text-xs rounded">
                        {tech}
                      </span>))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.compliance.slice(0, 2).map((comp, compIndex) => (<span key={compIndex} className="px-2 py-1 bg-green-600/30 text-green-200 text-xs rounded">
                        {comp}
                      </span>))}
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  <Play className="w-4 h-4"/>
                  Request Demo
                </motion.button>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-4 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <ExternalLink className="w-4 h-4"/>
                  Learn More
                </motion.button>
              </div>
              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200">Contact:</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-blue-300"/>
                    <span className="text-blue-100">{service.contactInfo.phone}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-blue-200">Email:</span>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-blue-300"/>
                    <span className="text-blue-100">{service.contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>))}
        </motion.div>
        {/* Call to Action */}
        {filteredServices.length === 0 && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-blue-200 mb-6">Try adjusting your search criteria or browse all our services.</p>
            <button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedIndustry('all');
            }} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              View All Services
            </button>
          </motion.div>)}
      </div>
      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already leveraging our cutting-edge AI and IT solutions 
            to drive innovation and achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Schedule Consultation
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Download Case Studies
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>);
};
export default ComprehensiveServicesShowcase2025;
