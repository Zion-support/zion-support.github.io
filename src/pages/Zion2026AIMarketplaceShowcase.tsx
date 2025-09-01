import React, { useState, useMemo } from 'react.ts';
export default Zion2026AIMarketplaceShowcase;
import { motion  } from 'framer - motion.ts';
import { Search,
import { zion2026AIMarketplaceServices  } from '../../data / zion - 2026 - ai - marketplace - services';

  Filter,
  Grid3X3,
  List,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
  Code,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink
 } from 'lucide - react.ts';

const Zion2026AIMarketplaceShowcase: React.FC = () : JSX.Element => {;
  const [searchTerm, setSearchTerm] = useState ('') ;
  const [selectedCategory, setSelectedCategory] = useState < any> ('all') ;
  const [viewMode, setViewMode] = useState < any> ('grid') ;

  const categories = ['all', 'AI Marketplace', 'AI Integration', 'AI Automation', 'AI Analytics', 'AI Development'];

  const filteredServices = useMemo ( () => {;
    return zion2026AIMarketplaceServices.filter (service => {;
      const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
                           service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ;
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }) ;
  }, [searchTerm, selectedCategory]) ;

  const getCategoryIcon = (category: anystring) => {;
    switch (category) {;
      case 'AI Marketplace': return Globe;
      case 'AI Integration': return Zap;
      case 'AI Automation': return Shield;
      case 'AI Analytics': return BarChart3;
      case 'AI Development': return Code;
      default: return Globe;
    }
  };

  const getCategoryColor = (category: anystring) => {;
    switch (category) {;
      case 'AI Marketplace': return 'from - blue - 500 to - cyan - 500';
      case 'AI Integration': return 'from - purple - 500 to - pink - 500';
      case 'AI Automation': return 'from - green - 500 to - emerald - 500';
      case 'AI Analytics': return 'from - orange - 500 to - red - 500';
      case 'AI Development': return 'from - indigo - 500 to - blue - 500';
      default: return 'from - gray - 500 to - slate - 500';
    }
  };

  return (<div role="button" className = "min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8 overflow - hidden">
        <div role="button" className="max - w-7xl mx - auto text - center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            animate = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text - 4xl md:text - 6xl font - bold text - white mb - 6">
              Zion AI Marketplace < span className="block text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400">
                Services 2026
              </span>
            </h1>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">
              Discover the future of AI services with our comprehensive marketplace platform.
              Connect, integrate, and optimize your AI solutions with cutting - edge tools and services.
            </p>
            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px - 8 py - 3 bg - gradient - to - r from - blue - 500 to - cyan - 500 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - cyan - 600 transition - all duration - 300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px - 8 py - 3 border border - gray - 600 text - gray - 300 font - semibold rounded - lg hover:border - gray - 500 hover:text - white transition - all duration - 300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py - 8 bg - gradient - to - r from - blue - 600 to - cyan - 600">
        <div role="button" className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div role="button" className="flex flex - col md:flex - row items - center justify - between text - white">
            <div role="button" className="flex items - center space - x-4 mb - 4 md:mb - 0">
              <Phone className="w - 5 h - 5" />
              <span className="font - semibold">+1 302 464 0950</span>
            </div>
            <div role="button" className="flex items - center space - x-4 mb - 4 md:mb - 0">
              <Mail className="w - 5 h - 5" />
              <span className="font - semibold">kleber@ziontechgroup.com</span>
            </div>
            <div role="button" className="flex items - center space - x-4">
              <MapPin className="w - 5 h - 5" />
              <span className="font - semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-7xl mx - auto">
          <div role="button" className="bg - slate - 800 rounded - xl p - 6 shadow - xl">
            <div role="button" className="flex flex - col lg:flex - row gap - 6">
              {/* Search */}
              <div role="button" className="flex - 1">
                <div role="button" className="relative">
                  <Search className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />
                  <input
                    type="text"
                    placeholder="Search AI marketplace services..."
                    value={searchTerm}
                    onChange={ (e) => setSearchTerm (e.target.value) }
                    className="w - full pl - 10 pr - 4 py - 3 bg - slate - 700 border border - slate - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div role="button" className="flex - shrink - 0">
                <select
                  value={selectedCategory}
                  onChange={ (e) => setSelectedCategory (e.target.value) }
                  className="px - 4 py - 3 bg - slate - 700 border border - slate - 600 rounded - lg text - white focus: anyoutline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent"
                >
                  {categories.map (category  => (<option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>) ) }
                </select>
              </div>

              {/* View Mode Toggle */}
              <div role="button" className="flex - shrink - 0">
                <div role="button" className="flex bg - slate - 700 rounded - lg p - 1">
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setViewMode ('grid') }
                    className={`p - 2 rounded - md transition - colors ${
                      viewMode === 'grid'
                        ? 'bg - blue - 500 text - white'
                        : 'text - gray - 400 hover:text - white'
                    }`}
                  >
                    <Grid3X3 className="w - 5 h - 5" />
                  </button>
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setViewMode ('list') }
                    className={`p - 2 rounded - md transition - colors ${
                      viewMode === 'list'
                        ? 'bg - blue - 500 text - white'
                        : 'text - gray - 400 hover:text - white'
                    }`}
                  >
                    <List className="w - 5 h - 5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-7xl mx - auto">
          {filteredServices.length === 0 ? (<div role="button" className="text - center py - 20">
              <Search className="w - 16 h - 16 text - gray - 400 mx - auto mb - 4" />
              <h3 className="text - xl text - gray - 300 mb - 2">No services found</h3>
              <p className="text - gray - 500">Try adjusting your search or filter criteria</p>
            </div>) : (<div role="button" className={viewMode === 'grid'
              ? 'grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 3 gap - 8'
              : 'space - y-6'
            }>
              {filteredServices.map ( (service, index) => (<motion.div
                  key={service.id}
                  initial = {
  { opacity: 0,
  y: 20

}}
                  animate = {
  { opacity: 1,
  y: 0

}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1

}}
                  className={`bg - slate - 800 rounded - xl overflow - hidden shadow - xl hover:shadow - 2xl transition - all duration - 300 hover:scale - 105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div role="button" className={`p - 6 ${viewMode === 'list' ? 'flex - 1' : ''}`}>
                    <div role="button" className="flex items - center justify - between mb - 4">
                      <div role="button" className={`p - 2 rounded - lg bg - gradient - to - r ${getCategoryColor (service.category) }`}>
                        {React.createElement (getCategoryIcon (service.category) , {
                          className: 'w - 6 h - 6 text - white'
                        }) }
                      </div>
                      <span className="text - sm text - gray - 400 font - medium">{service.category}</span>
                    </div>

                    <h3 className="text - xl font - bold text - white mb - 3">{service.name}</h3>
                    <p className="text - gray - 300 mb - 4">{service.description}</p>

                    {/* Pricing */}
                    <div role="button" className="mb - 4">
                      <div role="button" className="flex items - center space - x-2 mb - 2">
                        <TrendingUp className="w - 4 h - 4 text - green - 400" />
                        <span className="text - sm text - gray - 400">Starting from</span>
                      </div>
                      <div role="button" className="text - 2xl font - bold text - white">
                        ${service.price.monthly}
                        <span className="text - sm text - gray - 400 font - normal">/month</span>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div role="button" className="mb - 4">
                      <h4 className="text - sm font - semibold text - gray - 300 mb - 2">Key Benefits:</h4>
                      <ul className="space - y-1">
                        {service.benefits.slice (0, 3) .map ( (benefit, idx) => (<li key={idx} className="text - sm text - gray - 400 flex items - center">
                            <div role="button" className="w - 1.5 h - 1.5 bg - blue - 400 rounded - full mr - 2" />
                            {benefit}
                          </li>) ) }
                      </ul>
                    </div>

                    {/* ROI and Market Size */}
                    <div role="button" className="grid grid - cols - 2 gap - 4 mb - 4">
                      <div role="button" className="text - center p - 3 bg - slate - 700 rounded - lg">
                        <div role="button" className="text - sm text - gray - 400 mb - 1">ROI</div>
                        <div role="button" className="text - xs text - green - 400 font - medium">{service.roi}</div>
                      </div>
                      <div role="button" className="text - center p - 3 bg - slate - 700 rounded - lg">
                        <div role="button" className="text - sm text - gray - 400 mb - 1">Market Size</div>
                        <div role="button" className="text - xs text - blue - 400 font - medium">{service.marketSize}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div role="button" className="p - 6 bg - slate - 700">
                    <div role="button" className="flex space - x-3">
                      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="flex - 1 px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - cyan - 500 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - cyan - 600 transition - all duration - 300">
                        Get Started
                      </button>
                      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="px - 4 py - 2 border border - gray - 600 text - gray - 300 rounded - lg hover:border - gray - 500 hover:text - white transition - all duration - 300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>) ) }
            </div>) }
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-4xl mx - auto text - center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text - xl text - gray - 300 mb - 8">
              Connect with our team to discover how Zion AI Marketplace services can drive innovation,
              efficiency, and growth for your organization.
            </p>
            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - cyan - 500 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - cyan - 600 transition - all duration - 300 flex items - center justify - center space - x-2"
              >
                <Phone className="w - 5 h - 5" />
                <span > Call Now: +1 302 464 0950</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px - 8 py - 4 border border - gray - 600 text - gray - 300 font - semibold rounded - lg hover:border - gray - 500 hover:text - white transition - all duration - 300 flex items - center justify - center space - x-2"
              >
                <Mail className="w - 5 h - 5" />
                <span > Email Us</span>
              </motion.button>
            </div>
            <div role="button" className="mt - 8 text - center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline - flex items - center space - x-2 text - blue - 400 hover:text - blue - 300 transition - colors duration - 300"
              >
                <span > Visit our website</span>
                <ExternalLink className="w - 4 h - 4" />;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;) ;
};
