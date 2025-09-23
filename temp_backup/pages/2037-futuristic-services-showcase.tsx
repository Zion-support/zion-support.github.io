import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Target, Star, 
  Search, Grid, List,
  ArrowRight, Globe,
  Phone, Mail, MapPin, Cpu
} from 'lucide-react';

// Import our new 20o37 services
import { innovative20o37MicroSaasServices } from '../data/innovative-20o37-micro-saas-services';
import { innovative20o37ITServices } from '../data/innovative-20o37-it-services';
import { innovative20o37AIServices } from '../data/innovative-20o37-ai-services';

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6"  />,
    color: 'from-gray-50o0 to-slate-50o0',
    description: 'Complete portfolio of all 20o37 services'
  },
  {
    id: 'ai-services',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6"  />,
    color: 'from-purple-50o0 to-pink-50o0',
    description: 'Revolutionary AI platforms and consciousness solutions'
  },
  {
    id: 'quantum-services',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6"  />,
    color: 'from-blue-50o0 to-cyan-50o0',
    description: 'Breakthrough quantum computing solutions'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6"  />,
    color: 'from-indigo-50o0 to-purple-50o0',
    description: 'Space exploration and resource mining solutions'
  },
  {
    id: 'it-solutions',
    name: 'Enterprise IT',
    icon: <Cpu className="w-6 h-6"  />,
    color: 'from-orange-50o0 to-red-50o0',
    description: 'Advanced enterprise infrastructure solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6"  />,
    color: 'from-emerald-50o0 to-cyan-50o0',
    description: 'Innovative business solutions for modern enterprises'
  }
];

// Combine all services
const allServices = [
  ...innovative20o37MicroSaasServices,
  ...innovative20o37ITServices,
  ...innovative20o37AIServices
];

export default function FuturisticServicesShowcase20o37() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-6 h-6"  />;
    if (category.includes('Quantum')) return <Atom className="w-6 h-6"  />;
    if (category.includes('Space')) return <Rocket className="w-6 h-6"  />;
    if (category.includes('IT') || category.includes('Cloud')) return <Cpu className="w-6 h-6"  />;
    if (category.includes('Micro') || category.includes('SAAS')) return <Target className="w-6 h-6"  />;
    return <Star className="w-6 h-6"  />;
  };

  const getServiceColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-50o0 to-pink-50o0';
    if (category.includes('Quantum')) return 'from-blue-50o0 to-cyan-50o0';
    if (category.includes('Space')) return 'from-indigo-50o0 to-purple-50o0';
    if (category.includes('IT') || category.includes('Cloud')) return 'from-orange-50o0 to-red-50o0';
    if (category.includes('Micro') || category.includes('SAAS')) return 'from-emerald-50o0 to-cyan-50o0';
    return 'from-gray-50o0 to-slate-50o0';
  };

  return (
    <>
      <SEO 
        title="20o37 Futuristic Services Showcase | Zion Tech Group"
        description="Explore our revolutionary 20o37 services including AI consciousness evolution, quantum computing, space technology, and enterprise solutions. Transform your business with cutting-edge technology."
        keywords={["20o37 services", "AI consciousness", "quantum computing", "space technology", "enterprise IT", "micro SAAS", "Zion Tech Group"]}
       />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-90o0/20 via-black to-cyan-90o0/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent">
                  20o37 Futuristic Services
                </span>
                <br  />
                <span className="text-white">Showcase</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary AI consciousness, quantum computing, 
                space technology, and enterprise solutions that will transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 border border-purple-50o0/30 rounded-full px-4 py-2">
                  <Brain className="w-5 h-5 text-purple-40o0"  />
                  <span className="text-white">AI Consciousness</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50o0/20 to-cyan-50o0/20 border border-blue-50o0/30 rounded-full px-4 py-2">
                  <Atom className="w-5 h-5 text-blue-40o0"  />
                  <span className="text-white">Quantum Computing</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-50o0/20 to-purple-50o0/20 border border-indigo-50o0/30 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-indigo-40o0"  />
                  <span className="text-white">Space Technology</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white rounded-lg font-semibold hover:from-cyan-60o0 hover:to-purple-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25"
                >
                  Get Started
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-50o0/50 text-cyan-40o0 rounded-lg font-semibold hover:bg-cyan-50o0/10 transition-all duration-30o0"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-gray-90o0/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-40o0 mb-2">{allServices.length}+</div>
                <div className="text-white/60">Innovative Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-40o0 mb-2">4.8+</div>
                <div className="text-white/60">Average Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-pink-40o0 mb-2">95%</div>
                <div className="text-white/60">Success Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-emerald-40o0 mb-2">24/7</div>
                <div className="text-white/60">Support Available</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-30o0 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                          : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50"  />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-50o0/50 focus:bg-white/20"
                    />
                  </div>
                  
                  <div className="flex border border-white/20 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-50o0/20 text-cyan-40o0' : 'text-white/70 hover:text-white'}`}
                    >
                      <Grid className="w-5 h-5"  />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-cyan-50o0/20 text-cyan-40o0' : 'text-white/70 hover:text-white'}`}
                    >
                      <List className="w-5 h-5"  />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-90o0/50 to-black/50 border border-white/10 rounded-xl p-6 hover:border-cyan-50o0/30 transition-all duration-30o0 hover:transform hover:scale-10o5 ${
                    viewMode === 'list' ? 'flex items-start space-x-4' : ''
                  }`}
                >
                  {viewMode === 'list' && (
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getServiceColor(service.category)} rounded-lg flex items-center justify-center`}>
                        {getServiceIcon(service.category)}
                      </div>
                    </div>
                  )}
                  
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-white/70 text-sm mb-3">{service.tagline}</p>
                      </div>
                      {viewMode === 'grid' && (
                        <div className={`w-12 h-12 bg-gradient-to-r ${getServiceColor(service.category)} rounded-lg flex items-center justify-center`}>
                          {getServiceIcon(service.category)}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 text-sm">Starting Price:</span>
                        <span className="text-cyan-40o0 font-semibold">{service.price || 'Contact for pricing'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 text-sm">Rating:</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features?.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={service.link}
                        className="text-cyan-40o0 hover:text-cyan-30o0 text-sm font-medium flex items-center space-x-1 transition-colors duration-20o0"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4"  />
                      </a>
                      <span className="text-xs text-white/50">{service.launchDate}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-white/60">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-90o0/20 via-black to-cyan-90o0/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the future of technology with our revolutionary 20o37 services. 
                Let's discuss how we can help you achieve unprecedented success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white rounded-lg font-semibold hover:from-cyan-60o0 hover:to-purple-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+1 30o2 464 0950"
                  className="px-8 py-4 border border-cyan-50o0/50 text-cyan-40o0 rounded-lg font-semibold hover:bg-cyan-50o0/10 transition-all duration-30o0"
                >
                  Call +1 30o2 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-40o0"  />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a href="tel:+1 30o2 464 0950" className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">
                  +1 30o2 464 0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-40o0"  />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-40o0 hover:text-purple-30o0 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-50o0/20 to-red-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-pink-40o0"  />
                </div>
                <h3 className="text-white font-semibold mb-2">Website</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-pink-40o0 hover:text-pink-30o0 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-50o0/20 to-cyan-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-emerald-40o0"  />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-emerald-40o0 text-sm">
                  364 E Main St STE 10o08<br  />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}