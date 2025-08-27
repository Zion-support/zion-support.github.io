import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Zap, 
  Users,
  ArrowRight,
  Rocket,
  Target,
  Clock
} from 'lucide-react';

const MicroSAAS = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart3 },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'fintech', name: 'FinTech', icon: DollarSign },
    { id: 'healthtech', name: 'HealthTech', icon: Heart }
  ];

  const services = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Builder Pro',
      description: 'No-code AI chatbot creation platform with advanced NLP and multi-language support.',
      category: 'ai',
      price: '$99/month',
      features: ['Drag & drop builder', 'Advanced NLP', 'Multi-language', 'CRM integrations'],
      rating: 4.8,
      reviews: 156
    },
    {
      id: 'ai-content',
      title: 'AI Content Generator Suite',
      description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing.',
      category: 'ai',
      price: '$79/month',
      features: ['AI content generation', 'SEO optimization', 'Brand voice', 'Plagiarism checker'],
      rating: 4.7,
      reviews: 89
    },
    {
      id: 'cloud-infra',
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud infrastructure management with multi-cloud support.',
      category: 'cloud',
      price: '$149/month',
      features: ['Multi-cloud support', 'Auto-scaling', 'Cost optimization', 'Security compliance'],
      rating: 4.9,
      reviews: 234
    },
    {
      id: 'cyber-shield',
      title: 'CyberShield Pro',
      description: 'Enterprise-grade cybersecurity solution with real-time threat detection.',
      category: 'security',
      price: '$199/month',
      features: ['Real-time monitoring', 'Threat detection', 'Compliance reporting', '24/7 support'],
      rating: 4.8,
      reviews: 178
    },
    {
      id: 'data-insights',
      title: 'Data Insights Platform',
      description: 'Powerful data analytics and business intelligence platform.',
      category: 'analytics',
      price: '$129/month',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Predictive insights'],
      rating: 4.6,
      reviews: 112
    },
    {
      id: 'dev-tools',
      title: 'Developer Toolkit Pro',
      description: 'Comprehensive development tools and automation platform.',
      category: 'development',
      price: '$89/month',
      features: ['Code generation', 'Testing automation', 'CI/CD pipeline', 'Code review'],
      rating: 4.7,
      reviews: 95
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Immediate Deployment",
      description: "All services are ready for immediate deployment with no setup delays"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Support",
      description: "24/7 technical support with dedicated account managers"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven ROI",
      description: "Average 300% ROI within 6 months of implementation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Micro SAAS Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Transform your business with our comprehensive suite of AI-powered micro SAAS services. 
            From automation to analytics, we provide enterprise-grade solutions at startup prices.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              View All Services
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility and proven results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-700 rounded-lg p-6 text-white text-center"
              >
                <div className="mx-auto w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our comprehensive range of micro SAAS solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{service.rating}</span>
                      <span className="text-sm text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our micro SAAS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                <Rocket className="h-5 w-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAAS;
