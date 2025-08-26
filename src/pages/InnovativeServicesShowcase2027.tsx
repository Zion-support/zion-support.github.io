import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3,
  Rocket,
  Cpu,
  Network,
  Database,
  Lock,
  Leaf,
  Scale,
  Stethoscope,
  Car,
  Building2
} from 'lucide-react';
import { innovativeServices2027, InnovativeService2027 } from '../data/innovativeServices2027';

const InnovativeServicesShowcase2027: React.FC = () => {
  const [services, setServices] = useState<InnovativeService2027[]>(innovativeServices2027);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(services.map(s => s.innovationLevel)))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Advanced': 2, 'Innovative': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & DevOps': return <Cpu className="w-5 h-5" />;
      case 'Blockchain & Quantum': return <Lock className="w-5 h-5" />;
      case 'AI & Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Edge Computing & AI': return <Network className="w-5 h-5" />;
      case 'AI & Healthcare': return <Stethoscope className="w-5 h-5" />;
      case 'Quantum Computing & AI': return <Brain className="w-5 h-5" />;
      case 'AI & Automation': return <Rocket className="w-5 h-5" />;
      case '5G & Networking': return <Globe className="w-5 h-5" />;
      case 'AI & Legal Tech': return <Scale className="w-5 h-5" />;
      case 'Sustainability & Technology': return <Leaf className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services 2027
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan/90 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge micro SAAS, IT, and AI services that drive innovation and transform businesses
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zion-cyan/80">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>5G & Edge Computing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Innovation Level Filter */}
            <select
              value={selectedInnovationLevel}
              onChange={(e) => setSelectedInnovationLevel(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
            >
              {innovationLevels.map(level => (
                <option key={level} value={level} className="bg-zion-slate text-white">
                  {level === 'all' ? 'All Innovation Levels' : level}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
            >
              <option value="title" className="bg-zion-slate text-white">Sort by Name</option>
              <option value="price" className="bg-zion-slate text-white">Sort by Price</option>
              <option value="innovation" className="bg-zion-slate text-white">Sort by Innovation</option>
              <option value="roi" className="bg-zion-slate text-white">Sort by ROI</option>
            </select>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-zion-cyan/70">per {service.pricingModel}</div>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Category and Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-zion-cyan/60">{service.category}</span>
                <span className="text-zion-cyan/40">•</span>
                <span className="text-sm text-zion-cyan/60">{service.subcategory}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2 text-zion-cyan/70">
                  <Clock className="w-4 h-4" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-cyan/70">
                  <Users className="w-4 h-4" />
                  <span>{service.supportLevel}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-cyan/70">
                  <Target className="w-4 h-4" />
                  <span>{service.marketPrice}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-cyan/70">
                  <TrendingUp className="w-4 h-4" />
                  <span>{service.roi} ROI</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-zion-cyan">Contact Information</span>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="space-y-2 text-sm text-zion-cyan/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{service.contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-center block group-hover:scale-105"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-cyan/80">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-lg rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan/90 mb-8 max-w-3xl mx-auto">
            Our innovative services are designed to drive growth, enhance efficiency, and provide competitive advantages. 
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-zion-cyan text-white px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center gap-3 bg-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-zion-purple/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-zion-cyan/70">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zion-cyan transition-colors"
              >
                Visit our website →
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2027;