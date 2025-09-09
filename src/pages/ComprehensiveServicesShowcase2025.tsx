import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, Globe, Shield, Zap, Brain, Rocket, Database, Cloud, Lock } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { ADVANCED_AI_SERVICES_2025 } from '@/data/advanced-ai-services-2025';
import { COMPREHENSIVE_IT_SERVICES_2025 } from '@/data/comprehensive-it-services-2025';
import { EMERGING_TECH_SERVICES_2025 } from '@/data/emerging-tech-services-2025';

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Combine all services
  const allServices = [
    ...ADVANCED_AI_SERVICES_2025,
    ...COMPREHENSIVE_IT_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI Services', name: 'AI & Machine Learning', icon: '🧠', count: allServices.filter(s => s.category === 'AI Services').length },
    { id: 'IT Services', name: 'IT & Infrastructure', icon: '💻', count: allServices.filter(s => s.category === 'IT Services').length },
    { id: 'Emerging Technology', name: 'Emerging Tech', icon: '🌟', count: allServices.filter(s => s.category === 'Emerging Technology').length }
  ];

  // Price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Budget Friendly', range: '$0-199/month' },
    { id: 'medium', name: 'Professional', range: '$200-499/month' },
    { id: 'high', name: 'Enterprise', range: '$500+/month' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange === 'low') {
        matchesPrice = service.price <= 199;
      } else if (selectedPriceRange === 'medium') {
        matchesPrice = service.price > 199 && service.price <= 499;
      } else if (selectedPriceRange === 'high') {
        matchesPrice = service.price > 499;
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'innovation':
        filtered.sort((a, b) => (b.innovationScore || b.aiScore || b.techScore) - (a.innovationScore || a.aiScore || a.techScore));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-6 h-6" />;
      case 'IT Services':
        return <Database className="w-6 h-6" />;
      case 'Emerging Technology':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getScore = (service: any) => {
    return service.innovationScore || service.aiScore || service.techScore || 0;
  };

  return (
    <>
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group - 1000+ Cutting-Edge Solutions"
        description="Discover 1000+ revolutionary AI, IT infrastructure, and emerging technology services for 2025. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950"
        canonical="/comprehensive-services-showcase-2025"
        url="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive 2025 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary services that deliver 1000% ROI.
                From AI-powered solutions to quantum computing and space technology.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000%</div>
                  <div className="text-gray-400">ROI Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-black/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">https://ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-zion-slate border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-zion-slate border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                {/* Price Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 bg-zion-slate border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name} - {range.range}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-zion-slate border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="innovation">Sort by Innovation</option>
                  <option value="price-low">Sort by Price (Low to High)</option>
                  <option value="price-high">Sort by Price (High to Low)</option>
                  <option value="newest">Sort by Newest</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
                >
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 rounded-full px-3 py-1 text-sm text-white">
                      {getScore(service)}/100
                    </div>
                    {service.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-3 py-1 text-sm text-black font-semibold">
                        ⭐ Featured
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Category and Icon */}
                    <div className="flex items-center space-x-2 mb-3">
                      {getServiceIcon(service.category)}
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price}
                        <span className="text-sm text-gray-400 font-normal">
                          /{service.pricingModel === 'monthly' ? 'month' : 'project'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start space-x-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex space-x-2">
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
                        className="bg-zion-slate border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
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
              <p className="text-xl text-gray-300 mb-8">
                Join the future of technology with our revolutionary services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Email: kleber@ziontechgroup.com | Website: https://ziontechgroup.com</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}