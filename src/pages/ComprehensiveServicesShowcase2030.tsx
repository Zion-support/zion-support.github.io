import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  Rocket,
  Globe,
  Cpu,
  Eye,
  Lock,
  BarChart3,
  Code,
  Users,
  Building2,
  Smartphone,
  Monitor,
  Database,
  Network,
  Server,
  Smartphone,
  Monitor,
  Database,
  Network,
  Server,
  Mail,
  Phone
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { comprehensivePricingGuide2030 } from '../data/comprehensivePricingGuide2030';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesShowcase2030() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.category)))];

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'innovation':
          return b.innovationLevel.localeCompare(a.innovationLevel);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Development': <Code className="w-6 h-6" />,
      'AI & Business Intelligence': <BarChart3 className="w-6 h-6" />,
      'AI & Legal Tech': <Building2 className="w-6 h-6" />,
      'AI & Operations': <Cpu className="w-6 h-6" />,
      'AI & HR': <Users className="w-6 h-6" />,
      'AI & FinTech': <TrendingUp className="w-6 h-6" />,
      'AI & Content': <Eye className="w-6 h-6" />,
      'AI & IoT': <Smartphone className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'IoT & Edge Computing': <Network className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'Metaverse & AR/VR': <Globe className="w-6 h-6" />,
      'Neuromorphic Computing': <Brain className="w-6 h-6" />,
      'Biocomputing': <Database className="w-6 h-6" />,
      'Optical Computing': <Monitor className="w-6 h-6" />,
      'Swarm Robotics': <Rocket className="w-6 h-6" />,
      'Digital Twin': <Server className="w-6 h-6" />,
      'Brain-Computer Interface': <Brain className="w-6 h-6" />
    };
    return iconMap[category] || <Star className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Development': 'from-blue-500 to-cyan-500',
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Legal Tech': 'from-indigo-500 to-blue-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & HR': 'from-indigo-500 to-blue-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & IoT': 'from-teal-500 to-cyan-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'Metaverse & AR/VR': 'from-purple-500 to-indigo-500',
      'Neuromorphic Computing': 'from-indigo-500 to-purple-500',
      'Biocomputing': 'from-green-500 to-emerald-500',
      'Optical Computing': 'from-cyan-500 to-blue-500',
      'Swarm Robotics': 'from-orange-500 to-red-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Brain-Computer Interface': 'from-pink-500 to-purple-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our cutting-edge micro SAAS, IT infrastructure, and AI services for 2030. Revolutionary solutions for modern businesses."
        keywords="AI services, micro SAAS, IT infrastructure, quantum computing, cybersecurity, cloud services, 2030 technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive Services
                </span>
                <br />
                <span className="text-white">Showcase 2030</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our revolutionary micro SAAS, IT infrastructure, and AI services designed to transform your business in 2030 and beyond.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2030.totalServices}</div>
                  <div className="text-gray-300">Total Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400">{SERVICE_STATISTICS_2030.totalCategories}</div>
                  <div className="text-gray-300">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-green-400">${SERVICE_STATISTICS_2030.averagePrice}</div>
                  <div className="text-gray-300">Avg Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-400">${SERVICE_STATISTICS_2030.totalMarketSize.toFixed(1)}B</div>
                  <div className="text-gray-300">Market Size</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800 text-white">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                    <option value="price" className="bg-slate-800 text-white">Sort by Price</option>
                    <option value="innovation" className="bg-slate-800 text-white">Sort by Innovation</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">${service.price}</div>
                      <div className="text-sm text-gray-400">{service.pricingModel}</div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/20 rounded-full text-xs text-gray-300 border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-gray-300 border border-white/30">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Innovation: {service.innovationLevel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>Market: {service.marketSize}</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss how our innovative services can help you achieve your goals in 2030 and beyond.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="text-white">ziontechgroup.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry 2030"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg border border-white/30 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}