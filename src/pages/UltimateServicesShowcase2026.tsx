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
  Truck,
  Eye,
  Download,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Gauge,
  ShieldCheck,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Brain as BrainIcon,
  Heart as HeartIcon,
  Factory as FactoryIcon,
  Rocket as RocketIcon,
  Globe as GlobeIcon2,
  Lock as LockIcon,
  Code as CodeIcon,
  Database as DatabaseIcon
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from "@/data/ultimateInnovativeServices2026";
export default function UltimateServicesShowcase2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'Biotechnology', name: 'Biotechnology', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'Robotics', name: 'Robotics', icon: CpuIcon, color: 'from-zion-blue to-zion-red' },
    { id: 'Neurotechnology', name: 'Neurotechnology', icon: BrainIcon, color: 'from-zion-purple to-zion-cyan' },
    { id: 'IoT & Digital Twins', name: 'IoT & Digital Twins', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'Extended Reality', name: 'Extended Reality', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'AI & Privacy', name: 'AI & Privacy', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'Sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' }
  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$1,999 - $4,999' },
    { id: 'professional', name: 'Professional', range: '$4,999 - $9,999' },
    { id: 'enterprise', name: 'Enterprise', range: '$9,999+' }
  ];
  const sortOptions = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
    { id: 'rating', name: 'Highest Rated', icon: Star },
    { id: 'newest', name: 'Newest', icon: Clock }
  ];
  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'budget') {
      matchesPrice = service.price.starter <= 4999;
    } else if (selectedPriceRange === 'professional') {
      matchesPrice = service.price.starter > 4999 && service.price.starter <= 9999;
    } else if (selectedPriceRange === 'enterprise') {
      matchesPrice = service.price.starter > 9999;
    }
    return matchesSearch && matchesCategory && matchesPrice;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price.starter - b.price.starter;
      case 'price-high':
        return b.price.starter - a.price.starter;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return b.featured ? 1 : -1;
    }
  });
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Zap;
  };
  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-zion-cyan to-zion-blue';
  };
  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      <SEO 
        title="Ultimate Innovative Services 2026 - Zion Tech Group"
        description="Discover our cutting-edge innovative services including AI, Quantum Computing, Biotechnology, Robotics, and more. Transform your business with next-generation technology solutions."
        keywords="AI services, quantum computing, biotechnology, robotics, neurotechnology, digital twins, XR platform, edge computing, federated learning, sustainable technology"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Ultimate Innovative Services 2026
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge technology solutions that define the future. 
              From AI and Quantum Computing to Biotechnology and Robotics, we deliver innovation that drives results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-zion-slate/50 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span className="text-zion-slate-light">10+ Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-slate/50 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-zion-green" />
                <span className="text-zion-slate-light">200%+ ROI Average</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-slate/50 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-5 h-5 text-zion-yellow" />
                <span className="text-zion-slate-light">Enterprise Grade</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-zion-slate to-zion-slate-light py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">Phone</span>
              <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">Address</span>
              <span className="text-white">
                364 E Main St STE 1008<br />Middletown DE 19709
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Filters and Search */}
      <section className="py-8 px-4 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
              />
            </div>
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zion-slate rounded-xl overflow-hidden border border-zion-slate-light hover:border-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {React.createElement(getCategoryIcon(service.category), { 
                          className: "w-8 h-8 text-white" 
                        })}
                        <span className="text-sm font-medium text-white/80 bg-white/20 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      {service.featured && (
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
                  </div>
                  {/* Service Content */}
                  <div className="p-6">
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-zion-cyan" />
                        <span className="text-zion-slate-light font-medium">Pricing</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-white">Starter</div>
                          <div className="text-zion-cyan">${service.price.starter.toLocaleString()}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-white">Pro</div>
                          <div className="text-zion-cyan">${service.price.professional.toLocaleString()}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-white">Enterprise</div>
                          <div className="text-zion-cyan">${service.price.enterprise.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                    {/* Key Benefits */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-zion-green" />
                        <span className="text-zion-slate-light font-medium">Key Benefits</span>
                      </div>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-zion-green rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/90">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-zion-green ml-2">{service.roi}</span>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Rating:</span>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount})</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Delivery:</span>
                        <span className="text-white ml-2">{service.estimatedDelivery}</span>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Support:</span>
                        <span className="text-zion-cyan ml-2 capitalize">{service.supportLevel}</span>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 px-4 rounded-lg font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-zion-cyan text-zion-cyan text-center py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                    {/* Additional Links */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-zion-slate-light">
                      {service.demoUrl && (
                        <a
                          href={service.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zion-cyan hover:text-zion-blue text-sm transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                      {service.documentationUrl && (
                        <a
                          href={service.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zion-cyan hover:text-zion-blue text-sm transition-colors"
                        >
                          <BookOpen className="w-4 h-4" />
                          Docs
                        </a>
                      )}
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-zion-cyan hover:text-zion-blue text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Website
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                  setSortBy('featured');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-blue transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-slate to-zion-slate-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join the future of technology with our innovative services. 
            Get in touch today to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Journey
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
