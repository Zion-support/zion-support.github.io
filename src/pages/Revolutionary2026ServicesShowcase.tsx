import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Heart,
  Atom,
  Dna,
  Microscope,
  Satellite,
  Battery,
  Key,
  Eye,
  Cog,
  Target,
  Lightbulb,
  Shield as ShieldIcon,
  Zap as ZapIcon
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { revolutionary2026CuttingEdgeInnovationServices } from "@/data/revolutionary-2026-cutting-edge-innovations-v2";
import { revolutionary2026SpecializedIndustrySolutionServices } from "@/data/revolutionary-2026-specialized-industry-solutions-v2";
import { revolutionary2026EmergingTechBreakthroughServices } from "@/data/revolutionary-2026-emerging-tech-breakthroughs-v2";

export default function Revolutionary2026ServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Combine all services
  const allServices = [
    ...revolutionary2026CuttingEdgeInnovationServices,
    ...revolutionary2026SpecializedIndustrySolutionServices,
    ...revolutionary2026EmergingTechBreakthroughServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-neuromorphic', name: 'AI & Neuromorphic', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-purple to-zion-blue' },
    { id: 'quantum-internet', name: 'Quantum Internet', icon: Globe, color: 'from-zion-blue to-zion-cyan' },
    { id: 'synthetic-biology', name: 'Synthetic Biology', icon: Dna, color: 'from-zion-cyan to-zion-green' },
    { id: 'brain-computer-interface', name: 'Brain-Computer Interface', icon: Brain, color: 'from-zion-pink to-zion-purple' },
    { id: 'fusion-energy', name: 'Fusion Energy', icon: Zap, color: 'from-zion-orange to-zion-yellow' },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'holographic-technology', name: 'Holographic Technology', icon: Eye, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum-machine-learning', name: 'Quantum ML', icon: Brain, color: 'from-zion-purple to-zion-indigo' },
    { id: 'autonomous-ai', name: 'Autonomous AI', icon: Cog, color: 'from-zion-red to-zion-orange' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Heart, color: 'from-zion-red to-zion-pink' },
    { id: 'quantum-finance', name: 'Quantum Finance', icon: DollarSign, color: 'from-zion-green to-zion-emerald' },
    { id: 'smart-manufacturing', name: 'Smart Manufacturing', icon: Cpu, color: 'from-zion-gray to-zion-blue' },
    { id: 'autonomous-transportation', name: 'Autonomous Transportation', icon: Car, color: 'from-zion-blue to-zion-indigo' },
    { id: 'critical-infrastructure-security', name: 'Critical Infrastructure Security', icon: Shield, color: 'from-zion-red to-zion-orange' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-purple to-zion-blue' },
    { id: 'quantum-supply-chain', name: 'Quantum Supply Chain', icon: Package, color: 'from-zion-orange to-zion-red' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-blue to-zion-green' },
    { id: 'quantum-iot', name: 'Quantum IoT', icon: Network, color: 'from-zion-cyan to-zion-blue' },
    { id: 'quantum-supremacy', name: 'Quantum Supremacy', icon: Atom, color: 'from-zion-purple to-zion-indigo' },
    { id: 'nanotechnology', name: 'Nanotechnology', icon: Microscope, color: 'from-zion-blue to-zion-cyan' },
    { id: 'biotechnology', name: 'Biotechnology', icon: Dna, color: 'from-zion-green to-zion-teal' },
    { id: 'robotics-automation', name: 'Robotics & Automation', icon: Cog, color: 'from-zion-gray to-zion-blue' },
    { id: 'quantum-sensing', name: 'Quantum Sensing', icon: Satellite, color: 'from-zion-indigo to-zion-purple' },
    { id: 'neuromorphic-research', name: 'Neuromorphic Research', icon: Brain, color: 'from-zion-pink to-zion-purple' },
    { id: 'quantum-materials', name: 'Quantum Materials', icon: Diamond, color: 'from-zion-cyan to-zion-blue' },
    { id: 'energy-storage', name: 'Energy Storage', icon: Battery, color: 'from-zion-yellow to-zion-orange' },
    { id: 'quantum-communication', name: 'Quantum Communication', icon: Key, color: 'from-zion-green to-zion-emerald' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$1,000 - $3,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$3,000 - $6,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$6,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest' }
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && parseFloat(service.price.replace(/[$,]/g, '')) < 3000) ||
                        (selectedPriceRange === 'mid-range' && parseFloat(service.price.replace(/[$,]/g, '')) >= 3000 && parseFloat(service.price.replace(/[$,]/g, '')) < 6000) ||
                        (selectedPriceRange === 'enterprise' && parseFloat(service.price.replace(/[$,]/g, '')) >= 6000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[$,]/g, '')) - parseFloat(a.price.replace(/[$,]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return a.popular ? -1 : 1;
    }
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => 
      categoryName.toLowerCase().includes(cat.id.toLowerCase()) ||
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category ? category.icon : Zap;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => 
      categoryName.toLowerCase().includes(cat.id.toLowerCase()) ||
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category ? category.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary 2026 Services Showcase - Zion Tech Group"
        description="Explore our cutting-edge 2026 services including quantum computing, AI, biotechnology, nanotechnology, and emerging technologies. Transform your business with revolutionary solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary 2026
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge services in quantum computing, AI, biotechnology, nanotechnology, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id} className="bg-slate-800 text-white">
                    {range.range}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-slate-800 text-white">
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Revolutionary Services Found
          </h2>
          <p className="text-gray-400">
            Discover cutting-edge solutions that will transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-cyan">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-white">{service.rating}</span>
                      </div>
                      <div className="text-xs text-gray-400">({service.reviews} reviews)</div>
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Market Size</div>
                    <div className="text-sm text-white font-semibold">{service.marketSize}</div>
                    <div className="text-xs text-zion-cyan">{service.growthRate}</div>
                  </div>

                  {/* ROI */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg border border-zion-cyan/30">
                    <div className="text-xs text-zion-cyan mb-1">Expected ROI</div>
                    <div className="text-sm text-white font-semibold">{service.roi}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white/10 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Trial Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.trialDays} day trial
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-3 h-3 mr-1" />
                        {service.setupTime} setup
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setSortBy('featured');
              }}
              className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 rounded-3xl p-12 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary 2026 services are designed to give you a competitive edge in the rapidly evolving technology landscape. Contact us today to learn how we can help you achieve breakthrough results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">+1 302 464 0950</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">kleber@ziontechgroup.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}