import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Server, 
  Shield, 
  Globe, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Check,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2027 } from '../data/advancedMicroSaasServices2027';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2027 } from '../data/specializedITInfrastructureServices2027';

export default function ComprehensiveServicesOverview2027() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine all services
  const allServices = [...ADVANCED_MICRO_SAAS_SERVICES_2027, ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2027];

  // Group services by category
  const servicesByCategory = allServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof allServices>);

  // Get unique categories
  const categories = Object.keys(servicesByCategory);

  // Category icons and descriptions
  const categoryInfo = {
    'AI Services': {
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      textColor: 'text-purple-400'
    },
    'IT Infrastructure': {
      icon: Server,
      description: 'Robust and scalable infrastructure solutions for modern businesses',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400'
    },
    'Cybersecurity': {
      icon: Shield,
      description: 'Advanced security solutions protecting your digital assets',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400'
    },
    'Emerging Technology': {
      icon: Zap,
      description: 'Next-generation technologies shaping the future of business',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400'
    }
  };

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

  const filteredServices = selectedCategory === 'All' 
    ? allServices 
    : servicesByCategory[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Comprehensive Services Overview 2027
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our complete portfolio of innovative AI, IT infrastructure, cybersecurity, and emerging technology services 
            designed to accelerate your business transformation.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Get Expert Consultation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-black/20 text-gray-300 hover:bg-black/40'
              }`}
            >
              All Services ({allServices.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-black/20 text-gray-300 hover:bg-black/40'
                }`}
              >
                {category} ({servicesByCategory[category]?.length || 0})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => {
              const categoryData = categoryInfo[service.category as keyof typeof categoryInfo];
              const IconComponent = categoryData?.icon || Server;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${categoryData?.bgColor || 'bg-gray-500/20'}`}>
                      <IconComponent className={`w-6 h-6 ${categoryData?.textColor || 'text-gray-400'}`} />
                    </div>
                    {service.featured && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Category and AI Score */}
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm ${categoryData?.bgColor || 'bg-gray-500/20'} ${categoryData?.textColor || 'text-gray-400'}`}>
                        {service.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold">{service.aiScore}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                            <Check className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400 mt-1">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                            <TrendingUp className="w-3 h-3 text-green-400" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Rating */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">
                          ${service.price}
                          <span className="text-sm text-gray-400 font-normal">/month</span>
                        </div>
                        <div className="text-sm text-gray-400">{service.marketPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-400">
                          {service.rating} ({service.reviewCount} reviews)
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
                        className="bg-transparent border border-cyan-500 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => {
              const categoryData = categoryInfo[category as keyof typeof categoryInfo];
              const IconComponent = categoryData?.icon || Server;
              const services = servicesByCategory[category] || [];
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${categoryData?.bgColor || 'bg-gray-500/20'}`}>
                    <IconComponent className={`w-8 h-8 ${categoryData?.textColor || 'text-gray-400'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
                  <p className="text-gray-400 text-sm mb-4">{categoryData?.description || 'Professional services for your business needs'}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{services.length} Services</div>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    View Services
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Industry Expertise</h3>
              <p className="text-gray-400">Over 15 years of experience in cutting-edge technology solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-400">Certified professionals with deep knowledge in AI, cybersecurity, and infrastructure</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Track record of successful implementations and satisfied clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the perfect services and implement them successfully.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Our Website</h3>
              <p className="text-gray-400 text-sm">Explore our full range of services</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                ziontechgroup.com →
              </a>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">Speak with our experts directly</p>
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                +1 302 464 0950 →
              </a>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">Get detailed information and quotes</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                kleber@ziontechgroup.com →
              </a>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Our Address</h3>
            <p className="text-gray-400">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}