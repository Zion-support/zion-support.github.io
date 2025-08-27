import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  Globe,
  Atom,
  Leaf,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Search
} from 'lucide-react';

// Import the services data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-600' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-blue-500 to-cyan-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'edge', name: 'Edge Computing', icon: Cpu, color: 'from-green-500 to-emerald-600' },
    { id: 'blockchain', name: 'Blockchain', icon: Network, color: 'from-yellow-500 to-orange-600' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-pink-500 to-rose-600' },
    { id: 'energy', name: 'Energy', icon: Leaf, color: 'from-green-500 to-teal-600' },
    { id: 'supply-chain', name: 'Supply Chain', icon: Globe, color: 'from-blue-500 to-indigo-600' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Code, color: 'from-purple-500 to-violet-600' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Shield, color: 'from-gray-500 to-slate-600' }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.subcategory?.toLowerCase().includes(selectedCategory);
    
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent mb-6">
              Innovative Micro SAAS Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto">
              Discover cutting-edge micro SAAS solutions that transform businesses with AI, quantum computing, 
              cybersecurity, and emerging technologies. Real services with market-validated pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-6 py-4 bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-full text-zion-gray-light placeholder-zion-gray placeholder-opacity-50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-gray w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg shadow-zion-cyan/25`
                  : 'bg-zion-slate-dark/50 border-zion-cyan/30 text-zion-gray-light hover:border-zion-cyan hover:bg-zion-slate-dark/80'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Service Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zion-cyan mb-2 group-hover:text-zion-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-gray-light text-sm mb-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Price and ROI */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-zion-green" />
                    <span className="text-zion-green font-semibold">
                      {service.currency}{service.price.toLocaleString()}/month
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-blue" />
                    <span className="text-zion-blue text-sm font-medium">
                      ROI: {service.roi}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-gray font-semibold mb-2 text-sm">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-gray-light text-sm">
                        <CheckCircle className="w-3 h-3 text-zion-green" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-gray font-semibold mb-2 text-sm">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-gray-light text-sm">
                        <Star className="w-3 h-3 text-zion-yellow" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-4">
                    <h4 className="text-zion-gray font-semibold mb-2 text-sm">Technology:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technicalSpecs.technology.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-full text-xs text-zion-cyan"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Market Info */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-zion-gray" />
                    <span className="text-zion-gray-light">{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-zion-gray" />
                    <span className="text-zion-gray-light">{service.supportLevel}</span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="text-center">
                    <p className="text-zion-gray text-sm mb-2">Ready to get started?</p>
                    <div className="flex flex-col gap-2 text-sm">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                      >
                        📞 {service.contactInfo.phone}
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                      >
                        ✉️ {service.contactInfo.email}
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                      >
                        🌐 {service.contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-zion-gray-light text-lg mb-4">
              No services found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-zion-slate-dark to-zion-slate rounded-3xl p-12 text-center border border-zion-cyan/20"
        >
          <h2 className="text-4xl font-bold text-zion-cyan mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-gray-light mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement these cutting-edge solutions. 
            Get in touch today to discuss your specific needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-4 px-8 rounded-xl hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Contact Us Today
            </a>
            <a
              href="/request-quote"
              className="border border-zion-cyan text-zion-cyan font-semibold py-4 px-8 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Request Custom Quote
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
