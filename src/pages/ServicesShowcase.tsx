import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Lightbulb,
  Leaf,
  Building2,
  GraduationCap,
  Heart,
  Coins,
  Car,
  Camera,
  Microscope,
  Leaf,
  Building2,
  GraduationCap,
  Heart,
  Coins,
  Car,
  Camera,
  Microscope
} from 'lucide-react';
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/comprehensiveServices2025';

const ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const allServices = [
    ...enhancedMicroSaasServices2025.map(service => ({ ...service, type: 'Micro SAAS' })),
    ...enhancedITServices2025.map(service => ({ ...service, type: 'IT Services' })),
    ...enhancedAIServices2025.map(service => ({ ...service, type: 'AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Rocket, count: enhancedMicroSaasServices2025.length },
    { id: 'IT Services', name: 'IT Services', icon: Cpu, count: enhancedITServices2025.length },
    { id: 'AI Services', name: 'AI Services', icon: Brain, count: enhancedAIServices2025.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return (a.price || 0) - (b.price || 0);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Productivity': Rocket,
      'Finance': Coins,
      'Marketing': Target,
      'CRM': Users,
      'Analytics': BarChart3,
      'Scheduling': Clock,
      'Infrastructure': Cpu,
      'Cloud Services': Cloud,
      'Security': Shield,
      'DevOps': Zap,
      'Biotechnology': Microscope,
      'Sustainability': Leaf,
      'Financial Technology': Building2,
      'Education Technology': GraduationCap,
      'Smart Cities': Building2,
      'Healthcare Technology': Heart,
      'Blockchain': Coins,
      'Quantum Computing': Atom,
      'Edge Computing': Network,
      'Privacy AI': Lock,
      'AI Governance': Shield,
      'AI Ecosystem': Brain,
      'NLP': MessageSquare,
      'Computer Vision': Camera,
      'Speech': Mic,
      'Reinforcement Learning': Brain,
      'Generative': Sparkles,
      'Forecasting': TrendingUp,
      'Recommendation': ThumbsUp,
      'Anomaly Detection': AlertTriangle,
      'Robotics': Bot,
      'Autonomous Driving': Car,
      'Medical Imaging': Camera,
      'Financial Trading': TrendingUp,
      'Quantum Security': Lock
    };
    return iconMap[category] || Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Revolutionary Technology Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"
            >
              Discover our cutting-edge portfolio of {allServices.length}+ innovative technology solutions 
              designed to transform your business and drive sustainable growth in the digital age.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-zion-slate max-w-3xl mx-auto">
              Explore our comprehensive range of technology services across multiple domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex justify-center mb-4">
                  <category.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-zion-blue-dark mb-2 text-center">
                  {category.name}
                </h3>
                <p className="text-zion-slate text-center text-sm">
                  {category.count} Services
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const ServiceIcon = getServiceIcon(service.category);
              const isMicroSaas = 'pricingModel' in service;
              const price = isMicroSaas ? service.price : (service as any).hourlyRate || (service as any).projectRate;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-zion-cyan/10 rounded-lg">
                          <ServiceIcon className="w-6 h-6 text-zion-cyan" />
                        </div>
                        <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                          {service.type}
                        </span>
                      </div>
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>

                    <h3 className="text-xl font-bold text-zion-blue-dark mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-zion-slate text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zion-slate">Category:</span>
                        <span className="text-sm text-zion-blue-dark">{service.category}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zion-slate">Pricing:</span>
                        <span className="text-sm text-zion-blue-dark font-semibold">
                          {isMicroSaas ? 
                            `$${price}/${(service as any).pricingModel}` : 
                            `$${price}/hr`
                          }
                        </span>
                      </div>

                      {isMicroSaas && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-zion-slate">Market Price:</span>
                          <span className="text-sm text-zion-blue-dark">{(service as any).marketPrice}</span>
                        </div>
                      )}

                      {isMicroSaas && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-zion-slate">ROI:</span>
                          <span className="text-sm text-green-600 font-semibold">{(service as any).roi}</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-blue-dark mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {(service.features || []).slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-zion-slate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={`https://ziontechgroup.com/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      
                      <div className="flex gap-2">
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                          className="inline-flex items-center gap-2 bg-zion-cyan text-white px-4 py-2 rounded-lg hover:bg-zion-cyan-dark transition-colors text-sm"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our innovative technology solutions can accelerate your digital transformation 
              and drive sustainable growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-zion-slate-light">
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-zion-slate-light">
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Consultation Request"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Request Consultation
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;
