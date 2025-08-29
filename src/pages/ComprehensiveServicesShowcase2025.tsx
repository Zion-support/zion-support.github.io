import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Settings,
  BarChart3,
  FileText,
  Target,
  Clock,
  Scale
} from 'lucide-react';
import INNOVATIVE_MICRO_SAAS_SERVICES_2025 from '../data/innovativeMicroSaasServices2025';
import { comprehensiveITServices2025 } from '../data/comprehensiveITServices2025';
import { comprehensiveAIServices2030 } from '../data/comprehensiveAIServices2030';

export default function ComprehensiveServicesShowcase2025() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'AI & Analytics Services',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      color: 'from-purple-600 to-pink-600',
      services: comprehensiveAIServices2030.slice(0, 8)
    },
    {
      name: 'Comprehensive IT Services',
      icon: Server,
      description: 'Enterprise-grade IT infrastructure and managed services',
      color: 'from-blue-600 to-cyan-600',
      services: comprehensiveITServices2025.slice(0, 8)
    },
    {
      name: 'Innovative Micro SaaS',
      icon: Rocket,
      description: 'Scalable software solutions for modern businesses',
      color: 'from-green-600 to-emerald-600',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 8)
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI services, IT solutions, and innovative Micro SaaS platforms. Transform your business with cutting-edge technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive Services
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Showcase 2025
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our complete portfolio of AI-powered solutions, enterprise IT services, and innovative Micro SaaS platforms designed to transform your business operations.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From AI-powered analytics to enterprise IT infrastructure, we provide comprehensive solutions that drive innovation and growth.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-slate-300 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="p-4 bg-white/5 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-sm text-slate-300 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <Link
                          to={service.href}
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              ...comprehensiveAIServices2030.slice(0, 6),
              ...comprehensiveITServices2025.slice(0, 6),
              ...INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 6)
            ].map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-slate-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-slate-300">Save up to 40%</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-xs text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  {service.ctaLabel}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get enterprise-grade solutions at competitive prices. Our transparent pricing ensures you get maximum value for your investment.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'AI Services',
                icon: Brain,
                color: 'from-purple-600 to-pink-600',
                startingPrice: '$599',
                description: 'AI-powered solutions for analytics, automation, and intelligence',
                features: ['Predictive Analytics', 'Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics & Compliance']
              },
              {
                name: 'IT Services',
                icon: Server,
                color: 'from-blue-600 to-cyan-600',
                startingPrice: '$12,000',
                description: 'Enterprise IT infrastructure and managed services',
                features: ['Network Infrastructure', 'Cloud Solutions', 'Cybersecurity', 'Data Management', 'Digital Transformation']
              },
              {
                name: 'Micro SaaS',
                icon: Rocket,
                color: 'from-green-600 to-emerald-600',
                startingPrice: '$199',
                description: 'Scalable software solutions for modern businesses',
                features: ['Business Automation', 'Customer Management', 'Marketing Tools', 'Analytics Platforms', 'Integration APIs']
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-slate-300 mb-4">{category.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-6">
                  Starting at {category.startingPrice}
                </div>
                <ul className="space-y-3 mb-8">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our comprehensive services can drive innovation and growth for your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
