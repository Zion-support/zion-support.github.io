import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cpu, 
  Zap, 
  Globe, 
  TrendingUp, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { allServices2026 } from '../data/comprehensiveServices2026';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allServices2026.microSaas.length + allServices2026.itInfrastructure.length + allServices2026.aiServices.length },
    { id: 'microSaas', name: 'Micro SAAS', icon: Zap, count: allServices2026.microSaas.length },
    { id: 'itInfrastructure', name: 'IT Infrastructure', icon: Cpu, count: allServices2026.itInfrastructure.length },
    { id: 'aiServices', name: 'AI Services', icon: Brain, count: allServices2026.aiServices.length }
  ];

  const filteredServices = () => {
    let services: any[] = [];
    
    if (activeCategory === 'all' || activeCategory === 'microSaas') {
      services.push(...allServices2026.microSaas);
    }
    if (activeCategory === 'all' || activeCategory === 'itInfrastructure') {
      services.push(...allServices2026.itInfrastructure);
    }
    if (activeCategory === 'all' || activeCategory === 'aiServices') {
      services.push(...allServices2026.aiServices);
    }

    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return services;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Brain-Computer Interface':
        return <Brain className="w-6 h-6" />;
      case 'Space Technology':
        return <Rocket className="w-6 h-6" />;
      case 'Biotechnology':
        return <Zap className="w-6 h-6" />;
      case 'Climate Technology':
        return <Globe className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Edge Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Artificial General Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum AI':
        return <Cpu className="w-6 h-6" />;
      case 'Autonomous Systems':
        return <Zap className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Cutting-edge':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Revolutionary Services 2026 - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS, IT infrastructure, and AI services for 2026. Quantum computing, brain-computer interfaces, space technology, and more."
        keywords="quantum computing, brain-computer interface, space technology, biotechnology, climate AI, quantum security, edge computing, AGI, autonomous AI"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Revolutionary Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              2026
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
          >
            Experience the future with our cutting-edge micro SAAS, IT infrastructure, and AI services. 
            From quantum computing to brain-computer interfaces, we're pioneering tomorrow's technology today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
              <span className="text-2xl font-bold">{allServices2026.microSaas.length}</span>
              <p className="text-sm text-zinc-300">Micro SAAS Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
              <span className="text-2xl font-bold">{allServices2026.itInfrastructure.length}</span>
              <p className="text-sm text-zinc-300">IT Infrastructure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
              <span className="text-2xl font-bold">{allServices2026.aiServices.length}</span>
              <p className="text-sm text-zinc-300">AI Services</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices().map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-zinc-400">{service.category}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400">Pricing</span>
                    <span className="text-lg font-bold text-white">
                      {service.pricingModel === 'monthly' ? `$${service.price}/mo` : 
                       service.pricingModel === 'hourly' ? `$${service.hourlyRate}/hr` : 
                       service.pricingModel === 'project' ? `$${service.projectRate}` : service.pricing}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{service.marketPrice}</p>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-zinc-500">+{service.features.length - 3} more features</p>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-zinc-400">Market Size</p>
                    <p className="text-white font-medium">{service.marketSize}</p>
                  </div>
                  <div>
                    <p className="text-zinc-400">ROI</p>
                    <p className="text-white font-medium">{service.roi}</p>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.targetAudience.slice(0, 3).map((audience, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-zinc-300">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Phone className="w-4 h-4" />
                      {service.contactInfo.phone}
                    </div>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                    <MapPin className="w-4 h-4" />
                    {service.contactInfo.address}
                  </div>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zinc-300 mb-8"
          >
            Contact our team to learn more about our revolutionary services and how they can transform your business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Visit Our Office</h3>
            <p className="text-zinc-300">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;