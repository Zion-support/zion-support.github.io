import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Search,
  Filter,
  Target,
  Palette,
  Truck,
  Play,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Clock,
  Users as UsersIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon
} from 'lucide-react';
import { allInnovativeServices2032 } from '../data/innovativeServices2032';

export default function InnovativeServicesShowcase2032() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    ...allInnovativeServices2032.microSaas.map(service => ({
      ...service,
      type: 'Micro SaaS',
      icon: ShoppingCart,
      color: 'from-blue-600 to-cyan-600'
    })),
    ...allInnovativeServices2032.itServices.map(service => ({
      ...service,
      type: 'IT Services',
      icon: Server,
      color: 'from-green-600 to-emerald-600'
    })),
    ...allInnovativeServices2032.aiServices.map(service => ({
      ...service,
      type: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings, count: allServices.length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart, count: allInnovativeServices2032.microSaas.length },
    { id: 'IT Services', name: 'IT Services', icon: Server, count: allInnovativeServices2032.itServices.length },
    { id: 'AI Services', name: 'AI Services', icon: Brain, count: allInnovativeServices2032.aiServices.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                <Sparkles className="h-4 w-4 mr-2" />
                New for 2032
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Innovative Services
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2032 Edition
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Discover our cutting-edge micro SAAS, IT infrastructure, and AI services designed to transform 
              your business in 2032 and beyond. Built with the latest technologies and market insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Innovative Services 2032</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge solutions across micro SAAS, IT infrastructure, and AI services designed for the future.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => openServiceModal(service)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                      <Star className="h-3 w-3 mr-1" />
                      New 2032
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                      {service.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold text-blue-400">
                      {service.pricing || `$${service.hourlyRate}/hr`}
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.innovationLevel}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                    <span>View Details</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact our team to learn more about our innovative services and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-blue-500/20 mb-4">
                  <Phone className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-4">
                  <Mail className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-purple-500/20 mb-4">
                  <MapPin className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-500">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${selectedService.color}`}>
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-gray-400">{selectedService.type}</p>
                  </div>
                </div>
                <button
                  onClick={closeServiceModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>

                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-gray-700/50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Pricing & Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pricing:</span>
                        <span className="text-white font-semibold">
                          {selectedService.pricing || `$${selectedService.hourlyRate}/hour`}
                        </span>
                      </div>
                      
                      {selectedService.price && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Monthly Price:</span>
                          <span className="text-white font-semibold">${selectedService.price}</span>
                        </div>
                      )}
                      
                      {selectedService.projectRate && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Project Rate:</span>
                          <span className="text-white font-semibold">${selectedService.projectRate.toLocaleString()}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white font-semibold">{selectedService.marketPrice}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-white font-semibold">{selectedService.roi}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white font-semibold">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-300">
                        <Phone className="h-4 w-4 mr-2 text-blue-400" />
                        <a href={`tel:${selectedService.contactInfo.phone}`} className="hover:text-white">
                          {selectedService.contactInfo.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <Mail className="h-4 w-4 mr-2 text-green-400" />
                        <a href={`mailto:${selectedService.contactInfo.email}`} className="hover:text-white">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <Globe className="h-4 w-4 mr-2 text-purple-400" />
                        <a 
                          href={selectedService.contactInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-white"
                        >
                          {selectedService.contactInfo.website}
                        </a>
                      </div>
                      
                      <div className="flex items-start text-sm text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-red-400 mt-0.5" />
                        <span>{selectedService.contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${selectedService.contactInfo.phone}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href={`mailto:${selectedService.contactInfo.email}`}
                  className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}