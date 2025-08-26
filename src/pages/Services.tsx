import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network,
  Smartphone,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/comprehensiveServices2025';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredServices = useMemo(() => {
    let services = [...enhancedMicroSaasServices2025, ...enhancedITServices2025, ...enhancedAIServices2025];
    
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      services = services.filter(service => 
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return services;
  }, [selectedCategory, searchTerm]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: filteredServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Rocket, count: enhancedMicroSaasServices2025.length },
    { id: 'IT Services', name: 'IT Services', icon: Cpu, count: enhancedITServices2025.length },
    { id: 'AI Services', name: 'AI Services', icon: Brain, count: enhancedAIServices2025.length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: enhancedITServices2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Solutions', name: 'Cloud Solutions', icon: Cloud, count: enhancedITServices2025.filter(s => s.category === 'Cloud Solutions').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', icon: Zap, count: enhancedITServices2025.filter(s => s.category === 'Digital Transformation').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive technology solutions including Micro SAAS, IT Services, AI Services, and Digital Transformation solutions."
        keywords="technology services, IT solutions, AI services, micro SAAS, digital transformation, cybersecurity, cloud solutions"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </motion.p>
          
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    {service.icon && <service.icon className="w-6 h-6 text-zion-cyan" />}
                  </div>
                  <div className="flex items-center gap-2">
                    {service.featured && (
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    )}
                    <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                {service.features && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/10 text-zion-slate-light px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="text-zion-cyan font-semibold">
                    {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-zion-slate-light text-lg mb-4">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8"
          >
            Let's discuss how our technology solutions can drive your success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
