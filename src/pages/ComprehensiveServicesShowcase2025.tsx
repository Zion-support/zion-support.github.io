import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Leaf,
  Monitor
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import innovativeMicroSaasServices2025 from '../data/innovativeMicroSaasServices2025';
import emergingTechServices2025 from '../data/emergingTechServices2025';
import comprehensiveITServices2025 from '../data/comprehensiveITServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices2025.map(service => ({ ...service, source: 'innovative' })),
    ...emergingTechServices2025.map(service => ({ ...service, source: 'emerging' })),
    ...comprehensiveITServices2025.map(service => ({ ...service, source: 'it' }))
  ];

  // Filter services based on selection
  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const pricingMatch = selectedPricing === 'all' || service.pricing.toLowerCase().includes(selectedPricing.toLowerCase());
    return categoryMatch && pricingMatch;
  });

  const categories = ['all', 'AI', 'Quantum', 'Cybersecurity', 'Cloud', 'Infrastructure', 'Biotechnology', 'Space Tech', 'Blockchain', 'Edge Computing'];
  const pricingTiers = ['all', 'Professional', 'Premium', 'Enterprise'];

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
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI': Brain,
      'Quantum': Sparkles,
      'Cybersecurity': Shield,
      'Cloud': Cloud,
      'Infrastructure': Cpu, // Changed from Server to Cpu
      'Biotechnology': Leaf, // Leaf is not defined, assuming it's a placeholder or typo
      'Space Tech': Rocket,
      'Blockchain': Lock,
      'Edge Computing': Globe,
      'DevOps': Code,
      'Data Management': Database,
      'Networking': Network,
      'Monitoring': BarChart3,
      'Digital Transformation': Target,
      'Integration': Zap,
      'Data Protection': ShieldCheck,
      'Display Technology': Monitor, // Monitor is not defined
      'Robotics': Cpu,
      'Energy Technology': Zap,
      'Neural Technology': Brain
    };
    return iconMap[category] || Lightbulb;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEOHead 
        config={{
          title: "Comprehensive Technology Services 2025 | Zion Tech Group",
          description: "Explore our cutting-edge technology services including AI, Quantum Computing, Cybersecurity, Cloud Solutions, and Emerging Technologies. Transform your business with Zion Tech Group's innovative solutions.",
          keywords: "AI services, quantum computing, cybersecurity, cloud solutions, emerging technologies, Zion Tech Group, technology consulting, digital transformation"
        }}
      />

      {/* Hero Section */}
      <motion.section 
        className="py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Technology
            <span className="block gradient-text">Services 2025</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our revolutionary portfolio of AI-powered solutions, quantum technologies, 
            and cutting-edge innovations designed to transform your business and drive the future
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Banner */}
      <motion.section 
        className="py-8 bg-white/10 backdrop-blur-sm border-y border-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section 
        className="py-8 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {pricingTiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedPricing(tier)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                    selectedPricing === tier
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tier === 'all' ? 'All Pricing' : tier}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Innovative Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge solutions designed to give your business a competitive advantage in the digital age
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={`${service.source}-${service.id}`}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift group-hover:shadow-zion-glow">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-2">
                          {service.pricing}
                        </span>
                        <p className="text-2xl font-bold text-zion-cyan">
                          {formatPrice(service.price)}
                          <span className="text-sm text-zion-slate-light">/month</span>
                        </p>
                      </div>
                    </div>

                    {/* Service Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Category and Tags */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-2">
                        {service.category}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded-full bg-zion-cyan/10 text-zion-cyan text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Information */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-zion-cyan font-semibold">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Setup Time:</span>
                        <span className="text-white font-semibold">{service.setupTime}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a 
                        href="tel:+13024640950"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Get Quote
                      </a>
                      <a 
                        href="mailto:kleber@ziontechgroup.com"
                        className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs text-zion-slate-light">
                        <span>Free Tier: {service.freeTier ? 'Yes' : 'No'}</span>
                        <span>Trial: {service.trialPeriod}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your filters to see more services
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Contact our technology experts today to discuss how our innovative solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
            <a 
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Website
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;