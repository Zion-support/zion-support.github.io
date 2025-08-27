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
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck
} from 'lucide-react';
import { SEO } from "../components/SEOHead";
import { 
  INNOVATIVE_MICRO_SAAS_SERVICES_2025, 
  SPECIALIZED_SERVICES 
} from "@/data/innovativeMicroSaasServices2025";
import { 
  ADVANCED_ENTERPRISE_SOLUTIONS_2025 
} from "@/data/advancedEnterpriseSolutions2025";
import { 
  NEXT_GEN_AI_SERVICES_2025 
} from "@/data/nextGenAIServices2025";
import { 
  SPECIALIZED_INDUSTRY_SOLUTIONS_2025 
} from "@/data/specializedIndustrySolutions2025";
import { 
  IOT_EDGE_COMPUTING_SERVICES_2025 
} from "@/data/iotEdgeComputingServices2025";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Cpu, color: 'from-zion-purple to-zion-red' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Blockchain, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Scale, color: 'from-zion-orange to-zion-purple' },
    { id: 'financial-ai', name: 'Financial AI', icon: DollarSign, color: 'from-zion-purple to-zion-blue' },
    { id: 'quantum-ml', name: 'Quantum ML', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'manufacturing-ai', name: 'Manufacturing AI', icon: Factory, color: 'from-zion-blue to-zion-purple' },
    { id: 'space-tech', name: 'Space Technology', icon: Satellite, color: 'from-zion-purple to-zion-cyan' },
    { id: 'neuromorphic-computing', name: 'Neuromorphic Computing', icon: Brain, color: 'from-zion-purple to-zion-cyan' },
    { id: 'synthetic-biology', name: 'Synthetic Biology', icon: Heart, color: 'from-zion-pink to-zion-green' },
    { id: 'advanced-robotics', name: 'Advanced Robotics', icon: Cpu, color: 'from-zion-blue to-zion-red' },
    { id: 'advanced-materials', name: 'Advanced Materials', icon: Factory, color: 'from-zion-green to-zion-blue' },
    { id: 'advanced-energy', name: 'Advanced Energy', icon: Zap, color: 'from-zion-yellow to-zion-orange' },
    { id: 'advanced-transportation', name: 'Advanced Transportation', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'advanced-communication', name: 'Advanced Communication', icon: Globe, color: 'from-zion-cyan to-zion-blue' },
    { id: 'advanced-manufacturing', name: 'Advanced Manufacturing', icon: Factory, color: 'from-zion-orange to-zion-blue' },
    { id: 'advanced-gaming', name: 'Advanced Gaming', icon: Code, color: 'from-zion-purple to-zion-pink' },
    { id: 'brain-computer-interface', name: 'Brain-Computer Interface', icon: Brain, color: 'from-zion-purple to-zion-cyan' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'extended-reality', name: 'Extended Reality', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'edge-ai', name: 'Edge AI', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'federated-learning', name: 'Federated Learning', icon: Brain, color: 'from-zion-purple to-zion-blue' },
    { id: 'sustainable-tech', name: 'Sustainable Technology', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', icon: Code, color: 'from-zion-orange to-zion-pink' },
    { id: 'data-privacy-compliance', name: 'Data Privacy & Compliance', icon: Lock, color: 'from-zion-red to-zion-purple' },
    { id: 'green-tech-sustainability', name: 'Green Tech & Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'remote-work-collaboration', name: 'Remote Work & Collaboration', icon: Users, color: 'from-zion-blue to-zion-purple' },
    { id: 'ecommerce-retail', name: 'E-commerce & Retail', icon: ShoppingCart, color: 'from-zion-green to-zion-orange' },
    { id: 'healthcare-technology', name: 'Healthcare Technology', icon: Heart, color: 'from-zion-pink to-zion-red' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-orange to-zion-blue' },
    { id: 'supply-chain-logistics', name: 'Supply Chain & Logistics', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support', name: 'Customer Support', icon: MessageCircle, color: 'from-zion-blue to-zion-pink' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'innovation', name: 'Innovation Level' }
  ];

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_ENTERPRISE_SOLUTIONS_2025,
    ...NEXT_GEN_AI_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...IOT_EDGE_COMPUTING_SERVICES_2025
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           (service.subcategory && service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' ')));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.pricing && service.pricing.starter && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.pricing && service.pricing.starter && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) > 1000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.pricing && service.pricing.starter && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        const priceA = a.pricing?.starter ? parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) : 0;
        const priceB = b.pricing?.starter ? parseFloat(b.pricing.starter.replace(/[^0-9.]/g, '')) : 0;
        return priceA - priceB;
      case 'price-high':
        const priceA2 = a.pricing?.starter ? parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) : 0;
        const priceB2 = b.pricing?.starter ? parseFloat(b.pricing.starter.replace(/[^0-9.]/g, '')) : 0;
        return priceB2 - priceA2;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      case 'innovation':
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel] || 1) - (innovationOrder[a.innovationLevel] || 1);
      case 'popular':
        return (b.popularity || 0) - (a.popularity || 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Zap;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-zion-cyan to-zion-blue';
  };

  const formatPrice = (pricing) => {
    if (!pricing) return 'Contact Us';
    if (pricing.starter) return pricing.starter;
    if (pricing.custom) return pricing.custom;
    return 'Contact Us';
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Zion Tech Group - Innovative Technology Services"
        description="Discover cutting-edge AI, Quantum Computing, IoT, and Enterprise Solutions. Transform your business with Zion Tech Group's innovative technology services."
        keywords="AI services, quantum computing, IoT solutions, enterprise technology, cybersecurity, blockchain, machine learning"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="animated-bg absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-gradient-neon">Innovative</span> Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, Quantum Computing, IoT, and Enterprise Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="futuristic-btn bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="futuristic-btn bg-transparent border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/50 border-2 border-zion-cyan/30 rounded-xl px-12 py-4 text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Category Filter */}
              <div>
                <label className="block text-zion-cyan font-semibold mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-black/50 border-2 border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:border-zion-cyan focus:outline-none transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-zion-cyan font-semibold mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full bg-black/50 border-2 border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:border-zion-cyan focus:outline-none transition-all duration-300"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} - {range.range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-zion-cyan font-semibold mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-black/50 border-2 border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:border-zion-cyan focus:outline-none transition-all duration-300"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-zion-cyan text-center">
              <p className="text-lg">
                Showing <span className="font-bold">{filteredServices.length}</span> of <span className="font-bold">{allServices.length}</span> services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glow-card bg-black/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                          {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        {service.featured && (
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-cyan/80 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-zion-cyan font-semibold mb-2 text-sm">Key Features</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-white/80 text-sm flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Service Details */}
                    <div className="mb-4 space-y-2">
                      {service.pricing && (
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan/80 text-sm">Starting Price:</span>
                          <span className="text-white font-semibold">{formatPrice(service.pricing)}</span>
                        </div>
                      )}
                      {service.estimatedTime && (
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan/80 text-sm">Implementation:</span>
                          <span className="text-white text-sm">{service.estimatedTime}</span>
                        </div>
                      )}
                    </div>

                    {/* Service Actions */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-zion-cyan hover:text-white text-sm font-semibold flex items-center group-hover:underline transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <button className="futuristic-btn bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-zion-cyan/50 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-cyan/80 mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="futuristic-btn bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
              Let our team of experts help you implement cutting-edge technology solutions that drive innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="futuristic-btn bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="futuristic-btn bg-transparent border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
