import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Star, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { INNOVATIVE_SERVICES_2027, SERVICE_CATEGORIES_2027, PRICING_TIERS_2027, CONTACT_INFO } from '@/data/innovativeServices2027';

// Animation variants
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function InnovativeServices2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return INNOVATIVE_SERVICES_2027.filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        SERVICE_CATEGORIES_2027.some(cat => 
          cat.name === selectedCategory && cat.services.includes(service)
        );
      
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchTerm, priceRange]);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="2027 Innovative Services - Zion Tech Group"
        description="Discover cutting-edge AI solutions, quantum technology, space tech, and innovative micro SAAS services. Transform your business with Zion's 2027 technology portfolio."
        keywords="AI services 2027, quantum computing, space technology, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-2027"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              2027 <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Innovative Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of technology with our cutting-edge AI solutions, quantum computing platforms, 
              space technology services, and innovative micro SAAS solutions designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/pricing" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-zion-cyan rounded-full opacity-60"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 bg-zion-purple rounded-full opacity-50"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, value: "15+", label: "AI Services", description: "Advanced AI Solutions" },
              { icon: Rocket, value: "8+", label: "Emerging Tech", description: "Space & Quantum" },
              { icon: Shield, value: "12+", label: "Security", description: "Zero Trust & Quantum" },
              { icon: Cloud, value: "20+", label: "Total Services", description: "Complete Portfolio" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                All Services
              </button>
              {SERVICE_CATEGORIES_2027.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light">Price Range:</span>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-zion-cyan font-medium">${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  exit="hidden"
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 overflow-hidden h-full">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-semibold border border-zion-cyan/30">
                          {service.category}
                        </span>
                      </div>
                      {service.featured && (
                        <div className="absolute top-4 left-4">
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">{formatPrice(service.price)}</div>
                          <div className="text-sm text-zion-slate-light">Starting Price</div>
                        </div>
                      </div>

                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Rating and Reviews */}
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light/30'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount} reviews)</span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center text-zion-slate-light">
                          <Clock className="w-4 h-4 mr-2" />
                          {service.availability}
                        </div>
                        <div className="flex items-center text-zion-cyan">
                          <Zap className="w-4 h-4 mr-2" />
                          AI Score: {service.aiScore}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link 
                        to={`/services/${service.id}`}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-xl font-semibold text-center block hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all our services.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setPriceRange([0, 100000]);
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-blue transition-colors duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Pricing Plans</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your business needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS_2027.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                    <p className="text-zion-slate-light">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <span className="inline-block text-sm text-zion-slate-light mb-4">
                      {tier.services.length} services included
                    </span>
                    <Link 
                      to="/contact"
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105 block"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their operations with our innovative 2027 technology solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-3 text-zion-cyan-100" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-zion-cyan-100">{CONTACT_INFO.mobile}</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-3 text-zion-cyan-100" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-zion-cyan-100">{CONTACT_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-3 text-zion-cyan-100" />
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-zion-cyan-100">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-blue rounded-xl font-semibold hover:bg-zion-cyan-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);