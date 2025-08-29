import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Lock,
  Code,
  Rocket,
  Users,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ComprehensiveServicesOverview2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(service => service.category))];
    return ['all', ...uniqueCategories];
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'innovation':
        filtered.sort((a, b) => {
          const innovationLevels = { 'Basic': 1, 'Advanced': 2, 'Cutting-edge': 3 };
          return (innovationLevels[b.innovationLevel as keyof typeof innovationLevels] || 0) - 
                 (innovationLevels[a.innovationLevel as keyof typeof innovationLevels] || 0);
        });
        break;
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.split('-')[0]);
          const bROI = parseInt(b.roi.split('-')[0]);
          return bROI - aROI;
        });
        break;
      case 'delivery':
        filtered.sort((a, b) => {
          const aWeeks = parseInt(a.estimatedDelivery.split('-')[0]);
          const bWeeks = parseInt(b.estimatedDelivery.split('-')[0]);
          return aWeeks - bWeeks;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'AI & Analytics': <Brain className="w-5 h-5" />,
      'AI & Customer Experience': <Users className="w-5 h-5" />,
      'AI & Marketing': <TrendingUp className="w-5 h-5" />,
      'AI & Legal Tech': <Shield className="w-5 h-5" />,
      'AI & Robotics': <Rocket className="w-5 h-5" />,
      'Quantum Computing': <Zap className="w-5 h-5" />,
      'Blockchain': <Lock className="w-5 h-5" />,
      'IoT & Edge': <Cpu className="w-5 h-5" />,
      'Healthcare': <Users className="w-5 h-5" />,
      'Finance': <DollarSign className="w-5 h-5" />,
      'Manufacturing': <Server className="w-5 h-5" />,
      'Sustainability': <Globe className="w-5 h-5" />,
      'Space Tech': <Rocket className="w-5 h-5" />,
      'Education': <Users className="w-5 h-5" />,
      'Retail': <TrendingUp className="w-5 h-5" />,
      'Logistics': <Globe className="w-5 h-5" />,
      'Energy': <Zap className="w-5 h-5" />,
      'Climate Tech': <Globe className="w-5 h-5" />,
      'Security': <Shield className="w-5 h-5" />,
      'SRE & Reliability': <Server className="w-5 h-5" />,
      'E-commerce': <TrendingUp className="w-5 h-5" />,
      'FinTech': <DollarSign className="w-5 h-5" />,
      'Localization': <Globe className="w-5 h-5" />,
      'Privacy & Compliance': <Shield className="w-5 h-5" />,
      'RevOps': <TrendingUp className="w-5 h-5" />,
      'Legal Tech': <Shield className="w-5 h-5" />,
      'Productivity': <Zap className="w-5 h-5" />,
      'Analytics': <TrendingUp className="w-5 h-5" />,
      'Product-Led Growth': <TrendingUp className="w-5 h-5" />,
      'Sales Tech': <TrendingUp className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'AI & Analytics': 'from-cyan-500 to-blue-600',
      'AI & Customer Experience': 'from-purple-500 to-pink-600',
      'AI & Marketing': 'from-green-500 to-emerald-600',
      'AI & Legal Tech': 'from-red-500 to-orange-600',
      'AI & Robotics': 'from-indigo-500 to-purple-600',
      'Quantum Computing': 'from-yellow-500 to-orange-600',
      'Blockchain': 'from-blue-500 to-indigo-600',
      'IoT & Edge': 'from-emerald-500 to-teal-600',
      'Healthcare': 'from-pink-500 to-rose-600',
      'Finance': 'from-green-500 to-emerald-600',
      'Manufacturing': 'from-gray-500 to-slate-600',
      'Sustainability': 'from-green-500 to-emerald-600',
      'Space Tech': 'from-purple-500 to-indigo-600',
      'Education': 'from-blue-500 to-cyan-600',
      'Retail': 'from-orange-500 to-red-600',
      'Logistics': 'from-blue-500 to-cyan-600',
      'Energy': 'from-yellow-500 to-orange-600',
      'Climate Tech': 'from-green-500 to-teal-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and cutting-edge technology solutions. Transform your business with Zion Tech Group."
        canonical="https://ziontechgroup.com/comprehensive-services-overview-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive Services
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Portfolio 2025
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our cutting-edge micro SAAS services, AI-powered solutions, quantum computing platforms, and innovative technology services designed to transform your business
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-white/20 rounded-full text-white">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+ Services
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-white">
                AI & Quantum Solutions
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-white">
                Enterprise Ready
              </span>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="price">Sort by Price</option>
                  <option value="roi">Sort by ROI</option>
                  <option value="delivery">Sort by Delivery Time</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">
                          {service.pricingModel}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* Innovation Level Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.innovationLevel === 'Cutting-edge' 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : service.innovationLevel === 'Advanced'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {service.innovationLevel}
                      </span>
                      <span className="text-xs text-gray-400">
                        ROI: {service.roi}
                      </span>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.estimatedDelivery}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Star className="w-4 h-4 mr-2" />
                        {service.supportLevel}
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {expandedServices.includes(service.id) ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show More
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedServices.includes(service.id) && (
                    <div className="border-t border-slate-700 p-6 bg-slate-800/50">
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 5).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Market Information</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Market Price:</span>
                            <div className="text-white font-medium">{service.marketPrice}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Market Size:</span>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Get Started</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                            {service.contactInfo.phone}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                            {service.contactInfo.email}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                            364 E Main St STE 1008, Middletown DE 19709
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Our team of experts is ready to help you implement the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p className="text-lg font-medium">Zion Tech Group</p>
              <p className="text-sm">364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="text-sm">https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}