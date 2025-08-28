import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Sparkles, 
  Star, 
  Zap, 
  Rocket, 
  Cpu, 
  Heart, 
  Globe,
  TrendingUp,
  Lock,
  Code,
  Users,
  BookOpen,
  ShoppingCart,
  Building,
  Truck,
  Leaf,
  Diamond,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "@/data/innovativeMicroSaasServices2025";
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from "@/data/specializedIndustrySolutions2025";
import { EMERGING_TECH_INNOVATIVE_SERVICES_2025 } from "@/data/emergingTechInnovativeServices2025";

const serviceCategories = [
  {
    id: 'ai-ml-services',
    name: 'AI & ML Services',
    icon: Brain,
    color: 'from-zion-cyan to-zion-purple',
    description: 'Cutting-edge artificial intelligence and machine learning solutions'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-zion-blue to-zion-cyan',
    description: 'Scalable cloud infrastructure and autonomous DevOps solutions'
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    icon: Sparkles,
    color: 'from-zion-purple to-zion-pink',
    description: 'Next-generation technologies shaping the future'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    icon: Shield,
    color: 'from-zion-green to-zion-blue',
    description: 'Specialized AI solutions for specific industries'
  },
  {
    id: 'specialized-services',
    name: 'Specialized Services',
    icon: Star,
    color: 'from-zion-orange to-zion-red',
    description: 'Expert specialized solutions for unique challenges'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$899',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: ['Basic AI features', 'Standard support', 'Core integrations', 'Basic analytics']
  },
  {
    name: 'Professional',
    price: '$2,499',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: ['Advanced AI capabilities', 'Priority support', 'Full integrations', 'Advanced analytics', 'Custom features']
  },
  {
    name: 'Enterprise',
    price: '$6,999',
    period: '/month',
    description: 'For large organizations',
    features: ['Full AI suite', '24/7 support', 'Custom integrations', 'Enterprise analytics', 'Dedicated team', 'Custom development']
  },
  {
    name: 'Revolutionary',
    price: '$15,999',
    period: '/month',
    description: 'Cutting-edge technologies',
    features: ['Quantum computing', 'Space technology', 'Fusion energy', 'Neuromorphic computing', 'Custom research', 'Exclusive access']
  }
];

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...EMERGING_TECH_INNOVATIVE_SERVICES_2025
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')));

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, cloud, and emerging technology services. From autonomous business management to quantum computing and space technology."
        keywords="AI services, cloud services, emerging technologies, quantum computing, space technology, autonomous systems, Zion Tech Group"
      />

      <div className="min-h-screen bg-zion-slate-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                Discover our revolutionary portfolio of AI-powered solutions, emerging technologies, and industry-specific innovations that are reshaping the future of business and technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-full px-6 py-3">
                  <Brain className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white font-medium">50+ AI Services</span>
                </div>
                <div className="flex items-center space-x-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-full px-6 py-3">
                  <Rocket className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white font-medium">Revolutionary Tech</span>
                </div>
                <div className="flex items-center space-x-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-full px-6 py-3">
                  <Star className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white font-medium">Industry Leaders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-zion-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Explore Our Service Categories
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From AI-powered business solutions to cutting-edge emerging technologies, we offer comprehensive services across all major domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <p className="text-white/90">{category.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Revolutionary Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Each service is designed to deliver exceptional value, innovation, and competitive advantage to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="bg-zion-slate border border-zion-cyan/20 rounded-2xl p-6 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:border-zion-cyan/50 group-hover:shadow-xl group-hover:shadow-zion-cyan/25">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                      <span className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.estimatedDelivery}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-zion-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing Tiers
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the perfect pricing tier that matches your business needs and budget requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative ${
                    tier.name === 'Enterprise' 
                      ? 'bg-gradient-to-br from-zion-cyan to-zion-purple scale-105' 
                      : 'bg-zion-slate border border-zion-cyan/20'
                  } rounded-2xl p-8 h-full`}
                >
                  {tier.name === 'Enterprise' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                      <span className="text-zion-slate-light">{tier.period}</span>
                    </div>
                    <p className="text-zion-slate-light mb-6">{tier.description}</p>
                    
                    <ul className="space-y-3 text-left">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          <span className="text-white text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full mt-8 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white font-bold rounded-lg transition-colors duration-200">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Let's discuss how our innovative services can drive your success and give you a competitive edge in the market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg px-6 py-3">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg px-6 py-3">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg px-6 py-3">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Middletown, DE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-slate border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
              </div>
              <button
                onClick={closeServiceModal}
                className="text-zion-slate-light hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zion-cyan/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">
                    {selectedService.currency}{selectedService.price.toLocaleString()}
                  </div>
                  <div className="text-zion-slate-light">Monthly Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">
                    {selectedService.roi}
                  </div>
                  <div className="text-zion-slate-light">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">
                    {selectedService.estimatedDelivery}
                  </div>
                  <div className="text-zion-slate-light">Delivery Time</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="flex-1 bg-zion-slate border border-zion-cyan/20 hover:border-zion-cyan/50 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
