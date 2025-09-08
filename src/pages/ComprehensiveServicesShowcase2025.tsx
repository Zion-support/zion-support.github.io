import React from 'react';
import { SEO  } from '../components/SEO';
import { servicesCatalog  } from '../data/servicesCatalog';
import { MICRO_SAAS_SERVICES  } from '../data/microSaasServices';

const ComprehensiveServicesShowcase2025: React.FC = (): JSX.Element => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology offerings that will transform your business in 2025 and beyond.
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
      </section>

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
      </section>

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
      </section>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg: anygrid-cols-2 xl:grid-cols-3 gap-8">
            {servicesCatalog.map((category)  => (
              <div key={category.slug} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.items.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400 font-bold">{service.price}/{service.billing}</span>
                        <a 
                          href={service.href}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          {service.ctaLabel}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Training & onboarding</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    onClick={() => window.location.href = '/request-quote'}
                  >
                    Get Started
                  </motion.button>
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

      {/* Featured Micro SaaS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative, scalable software solutions designed to solve specific business challenges and drive operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {MICRO_SAAS_SERVICES.filter(service  => service.featured).slice(0, 6).map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white ml-1">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.reviewCount})</span>
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
      </div>
    </div>
  );
};
export default ComprehensiveServicesShowcase2025;
