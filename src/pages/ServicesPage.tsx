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
  Lightbulb,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Eye,
  Handshake,
  Building,
  Globe2,
  ShieldCheck,
  Network2,
  Smartphone as Mobile,
  Server as Infrastructure,
  Monitor as Analytics,
  Zap as Lightning,
  Users2,
  Award as Trophy,
  Clock as Time,
  DollarSign as Money,
  TrendingUp as Growth,
  Eye as Vision,
  Handshake as Partnership,
  Building as Enterprise,
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Atom,
  Heart
} from 'lucide-react';
import { SEOHead } from "../components/seo/SEOHead";

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  icon: any;
  color: string;
  link: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  support: string;
}

const services: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI & Machine Learning Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning services to transform your business operations.',
    category: 'ai-analytics',
    price: '$50K - $500K',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],
    icon: Brain,
    color: 'from-zion-cyan to-zion-blue',
    link: '/services/ai',
    rating: 4.9,
    reviews: 127,
    deliveryTime: '3-6 months',
    support: '24/7 Premium Support'
  },
  {
    id: 'cybersecurity',
    title: 'Advanced Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    category: 'cybersecurity',
    price: '$25K - $300K',
    features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
    icon: Shield,
    color: 'from-zion-purple to-zion-cyan',
    link: '/services/cybersecurity',
    rating: 4.8,
    reviews: 89,
    deliveryTime: '2-4 months',
    support: '24/7 Security Support'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Excellence',
    description: 'Streamline your development workflow with automated CI/CD pipelines and cloud-native solutions.',
    category: 'cloud-devops',
    price: '$30K - $400K',
    features: ['CI/CD Automation', 'Infrastructure as Code', 'Cloud Migration', 'Performance Optimization'],
    icon: Cloud,
    color: 'from-zion-blue to-zion-purple',
    link: '/services/cloud-devops',
    rating: 4.7,
    reviews: 156,
    deliveryTime: '2-5 months',
    support: '24/7 Technical Support'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    description: 'End-to-end digital transformation services to modernize your business processes.',
    category: 'digital-transformation',
    price: '$100K - $1M+',
    features: ['Process Optimization', 'Technology Roadmap', 'Change Management', 'ROI Analysis'],
    icon: Rocket,
    color: 'from-zion-cyan to-zion-neon',
    link: '/services/digital-transformation',
    rating: 4.9,
    reviews: 203,
    deliveryTime: '6-12 months',
    support: 'Dedicated Success Manager'
  },
  {
    id: 'iot-services',
    title: 'IoT & Edge Computing Solutions',
    description: 'Connected device management and edge computing solutions for modern businesses.',
    category: 'iot-services',
    price: '$40K - $600K',
    features: ['Device Management', 'Edge Analytics', 'Real-time Monitoring', 'Scalable Infrastructure'],
    icon: Network,
    color: 'from-zion-purple to-zion-blue',
    link: '/services/iot',
    rating: 4.6,
    reviews: 67,
    deliveryTime: '4-8 months',
    support: '24/7 IoT Support'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3 Solutions',
    description: 'Decentralized solutions and blockchain technology for innovative business models.',
    category: 'blockchain',
    price: '$60K - $800K',
    features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'Blockchain Integration'],
    icon: Lock,
    color: 'from-zion-blue to-zion-cyan',
    link: '/services/blockchain',
    rating: 4.8,
    reviews: 94,
    deliveryTime: '5-10 months',
    support: '24/7 Blockchain Support'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Solutions',
    description: 'Next-generation computing solutions for complex problem-solving and optimization.',
    category: 'quantum-computing',
    price: '$200K - $2M+',
    features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
    icon: Atom,
    color: 'from-zion-cyan to-zion-purple',
    link: '/services/quantum-computing',
    rating: 4.9,
    reviews: 45,
    deliveryTime: '8-18 months',
    support: 'Dedicated Quantum Team'
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics',
    description: 'Comprehensive data analytics and business intelligence solutions.',
    category: 'data-analytics',
    price: '$35K - $450K',
    features: ['Data Warehousing', 'Business Intelligence', 'Predictive Modeling', 'Data Visualization'],
    icon: Database,
    color: 'from-zion-green to-zion-cyan',
    link: '/services/data-analytics',
    rating: 4.7,
    reviews: 178,
    deliveryTime: '3-6 months',
    support: '24/7 Analytics Support'
  }
];

const categories = [
  { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
  { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-cyan' },
  { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, color: 'from-zion-blue to-zion-purple' },
  { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, color: 'from-zion-cyan to-zion-neon' },
  { id: 'iot-services', name: 'IoT Services', icon: Network, color: 'from-zion-purple to-zion-blue' },
  { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-blue to-zion-cyan' },
  { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-cyan to-zion-purple' },
  { id: 'data-analytics', name: 'Data Analytics', icon: Database, color: 'from-zion-green to-zion-cyan' }
];

const priceRanges = [
  { id: 'all', name: 'All Prices', range: 'Any' },
  { id: 'under-50k', name: 'Under $50K', range: '< $50K' },
  { id: '50k-100k', name: '$50K - $100K', range: '$50K - $100K' },
  { id: '100k-250k', name: '$100K - $250K', range: '$100K - $250K' },
  { id: '250k-500k', name: '$250K - $500K', range: '$250K - $500K' },
  { id: '500k-1m', name: '$500K - $1M', range: '$500K - $1M' },
  { id: 'over-1m', name: 'Over $1M', range: '$1M+' }
];

const sortOptions = [
  { id: 'featured', name: 'Featured', icon: Star },
  { id: 'rating', name: 'Highest Rated', icon: Award },
  { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
  { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
  { id: 'delivery', name: 'Fastest Delivery', icon: Clock },
  { id: 'reviews', name: 'Most Reviews', icon: MessageCircle }
];

const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseFloat(a.price.split(' ')[0].replace('$', '').replace('K', '000')) - 
               parseFloat(b.price.split(' ')[0].replace('$', '').replace('K', '000'));
      case 'price-high':
        return parseFloat(b.price.split(' ')[0].replace('$', '').replace('K', '000')) - 
               parseFloat(a.price.split(' ')[0].replace('$', '').replace('K', '000'));
      case 'delivery':
        return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0]);
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* SEO Head */}
      <SEOHead 
        title="Our Services"
        description="Explore Zion Tech Group's comprehensive technology services including AI, cybersecurity, cloud solutions, and digital transformation."
        keywords={['technology services', 'AI solutions', 'cybersecurity', 'cloud services', 'digital transformation']}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Zion Tech Group Services",
          "description": "Comprehensive technology solutions",
          "url": "https://ziontechgroup.com/services",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl animate-float" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-zion-blue/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Our <span className="animate-gradient-x bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Services</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
              >
                Comprehensive technology solutions designed to transform your business. From AI and cybersecurity 
                to cloud infrastructure and digital transformation, we have the expertise to drive your success.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="#services-grid"
                  className="btn-primary group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="btn-secondary group"
                >
                  Get Started
                  <MessageCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 bg-zion-slate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Search Bar */}
              <motion.div variants={itemVariants} className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all"
                />
              </motion.div>

              {/* Category Filters */}
              <motion.div variants={itemVariants}>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                          : 'border-zion-slate/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Price and Sort Filters */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light text-sm">Price:</span>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="px-3 py-1 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-zion-slate-light text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-20 bg-zion-slate-dark">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                {filteredServices.length} Services Found
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover the perfect technology solution for your business needs.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-zion-slate/20 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group overflow-hidden"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Meta */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">Price:</span>
                        <span className="text-white">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">Delivery:</span>
                        <span className="text-white">{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">Support:</span>
                        <span className="text-white">{service.support}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-zion-cyan text-sm font-medium">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-zion-cyan" />
                            <span className="text-zion-slate-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-2">
                      <Link
                        to={service.link}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-4 rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-200 text-center group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="w-full border border-zion-cyan/30 text-zion-cyan py-2 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-all duration-200 text-sm"
                      >
                        {expandedService === service.id ? 'Show Less' : 'View Details'}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-zion-cyan/20 bg-zion-slate/10"
                      >
                        <div className="p-6">
                          <h4 className="text-lg font-semibold text-white mb-3">All Features</h4>
                          <div className="grid grid-cols-1 gap-2 mb-4">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                                <span className="text-zion-slate-light">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-center">
                            <Link
                              to={service.link}
                              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors font-medium"
                            >
                              View Full Service Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-zion-slate/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">No Services Found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or contact us for custom solutions.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan/80 transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-slate">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Let's discuss your project requirements and find the perfect solution for your business.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/about"
                  className="btn-secondary group"
                >
                  Learn More About Us
                  <Building className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
