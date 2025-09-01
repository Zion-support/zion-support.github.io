import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import {

  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Lock,
  Network,
  Server,
  Globe,
  Rocket,
  Target,
  BarChart3,
  Workflow,
  Leaf,
  Satellite,
  Link as LinkIcon,
  MessageCircle,
  HelpCircle,
  Smartphone,
  ShoppingCart,
  FileText,
  Video,
  GraduationCap,
  TestTube,
  Building2,
  Car,
  Factory,
  Heart,
  DollarSign,
  ShoppingBag,
  Plane,
  Ship,
  Truck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Award,
  Clock,
  Users as UsersIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon,
  ChevronRight,
  Play,
  Download,
  BookOpen,
  Lightbulb,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon2
} from 'lucide-react';
import { allEnhancedZionServices2025 } from '../data/enhancedZionServices2025';

export default function NewServicesLanding2025() {

  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'New Services', value: '11+', icon: Rocket, color: 'text-blue-400' },
    { label: 'Market Size', value: '$200B+', icon: TrendingUp, color: 'text-green-400' },
    { label: 'ROI Range', value: '200-500%', icon: Target, color: 'text-purple-400' },
    { label: 'Setup Time', value: '2-12 weeks', icon: Clock, color: 'text-orange-400' }
  ];

  const highlights = [
    {

      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning platforms',
      color: 'from-orange-500 to-red-500'
    },
    {

      icon: Shield,
      title: 'Enterprise Security',
      description: 'Quantum-resistant cybersecurity and advanced threat protection',
      color: 'from-purple-500 to-pink-500'
    },
    {

      icon: Leaf,
      title: 'Sustainability Tech',
      description: 'Green technology solutions for environmental compliance',
      color: 'from-green-500 to-blue-500'
    },
    {

      icon: Building2,
      title: 'Smart Infrastructure',
      description: 'IoT and edge computing for modern city management',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="New Zion Services 2025 - Revolutionary Micro SAAS, IT & AI Solutions"
        description="Discover Zion Tech Group's latest cutting-edge micro SAAS services, IT infrastructure solutions, and AI-powered platforms. Transform your business with innovative technology solutions."
        keywords="new services 2025, micro SAAS, IT services, AI services, Zion Tech Group, technology solutions, digital transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm">🚀 NEW IN 2025</span>
              <ChevronRight className="w-4 h-4 text-blue-300" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary New Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Introducing Zion Tech Group's latest micro SAAS, IT infrastructure, and AI services that will transform your business and drive unprecedented growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {

              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Phone</p>
                <p className="font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Email</p>
                <p className="font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Address</p>
                <p className="font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our new services combine cutting-edge technology with proven business value, delivering exceptional ROI and competitive advantages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {

              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${highlight.color} mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              New Services Overview
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative solutions designed for the modern digital enterprise
            </p>
          </motion.div>

          {/* Micro SAAS Services */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Micro SAAS Services</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEnhancedZionServices2025.microSaas.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Leaf className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-300">{service.category}</div>
                      <div className="text-xl font-bold text-white">${service.price.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-blue-200">
                      <Target className="w-4 h-4" />
                      <span>ROI: {service.roi}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-200">
                      <Clock className="w-4 h-4" />
                      <span>Setup: {service.setupTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">IT Infrastructure Services</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEnhancedZionServices2025.itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-300">{service.category}</div>
                      <div className="text-xl font-bold text-white">${service.hourlyRate}/hr</div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-blue-200">
                      <Clock className="w-4 h-4" />
                      <span>Response: {service.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-200">
                      <Target className="w-4 h-4" />
                      <span>Project: ${service.projectRate.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">AI-Powered Services</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEnhancedZionServices2025.aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-orange-500/20 rounded-lg">
                      <Brain className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-300">{service.category}</div>
                      <div className="text-xl font-bold text-white">${service.price.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-blue-200">
                      <Target className="w-4 h-4" />
                      <span>Accuracy: {service.accuracy}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-200">
                      <Star className="w-4 h-4" />
                      <span>AI Score: {service.aiScore}/10</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of forward-thinking companies already transforming their business with Zion Tech Group's innovative solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Call Us</h3>
                    <p className="text-blue-200">Speak with our experts</p>
                  </div>
                </div>
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Email Us</h3>
                    <p className="text-blue-200">Get detailed information</p>
                  </div>
                </div>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-center"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Visit Our Website</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="/enhanced-services-2025"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}