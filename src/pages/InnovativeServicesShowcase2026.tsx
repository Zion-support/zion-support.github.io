import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Truck, 
  Factory, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Monitor,
  Clock,
  DollarSign,
  Star,
  Award,
  Rocket,
  Smartphone,
  Cloud,
  Target,
  TrendingUp,
  Lightbulb,
  Heart,
  Sparkles,
  Play,
  BarChart3,
  Activity,
  Network,
  Database,
  Settings,
  Gauge,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  Code,
  Palette,
  Wrench,
  Cog,
  HardDrive,
  Layers,
  Workflow,
  Eye,
  Lock,
  Key,
  Server,
  Car,
  Pill,
  Utensils,
  ShoppingCart,
  Snowflake,
  Satellite,
  Cpu,
  Route,
  Package
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'logistics', name: 'Logistics', icon: Truck },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ];

  const services = [
    {
      id: 'ai-autonomous-cybersecurity',
      title: 'AI Autonomous Cybersecurity Platform',
      description: 'Next-generation autonomous cybersecurity with 99.9% threat detection accuracy and real-time autonomous response.',
      category: 'ai-autonomous',
      icon: Shield,
      features: ['AI-Powered Threat Detection', 'Autonomous Response System', '360° Security Monitoring'],
      pricing: '$299 - $1,999/month',
      link: '/services/ai-autonomous-cybersecurity-platform',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-autonomous-logistics',
      title: 'AI Autonomous Logistics Optimization',
      description: 'Revolutionary logistics optimization platform that reduces costs by 40% and improves delivery accuracy to 99.5%.',
      category: 'ai-autonomous',
      icon: Truck,
      features: ['AI-Powered Route Optimization', 'Autonomous Fleet Management', 'Smart Inventory Management'],
      pricing: '$199 - $1,499/month',
      link: '/services/ai-autonomous-logistics-optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-autonomous-manufacturing',
      title: 'AI Autonomous Manufacturing Platform',
      description: 'Transform manufacturing operations with 45% efficiency increase and 30% cost reduction through AI automation.',
      category: 'ai-autonomous',
      icon: Factory,
      features: ['AI-Powered Production Optimization', 'Autonomous Manufacturing Lines', 'Predictive Maintenance'],
      pricing: '$399 - $2,499/month',
      link: '/services/ai-autonomous-manufacturing-platform',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-autonomous-logistics-platform',
      title: 'AI Autonomous Logistics Platform',
      description: 'Advanced logistics platform with autonomous decision-making and real-time optimization capabilities.',
      category: 'logistics',
      icon: Route,
      features: ['Autonomous Decision Making', 'Real-time Optimization', 'Predictive Analytics'],
      pricing: '$299 - $1,999/month',
      link: '/services/ai-autonomous-logistics-platform',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai-powered-seo',
      title: 'AI-Powered SEO Platform',
      description: 'Intelligent SEO optimization that automatically improves search rankings and content performance.',
      category: 'analytics',
      icon: TrendingUp,
      features: ['AI Content Optimization', 'Automated SEO Analysis', 'Performance Tracking'],
      pricing: '$199 - $999/month',
      link: '/services/ai-powered-seo',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'quantum-edge-computing',
      title: 'Quantum Edge Computing Solutions',
      description: 'Cutting-edge quantum computing solutions for edge devices and distributed computing networks.',
      category: 'ai-autonomous',
      icon: Cpu,
      features: ['Quantum Processing', 'Edge Computing', 'Distributed Networks'],
      pricing: '$499 - $2,999/month',
      link: '/services/quantum-edge-computing-solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-space-technology',
      title: 'AI Space Technology Platform',
      description: 'Revolutionary AI platform for space exploration, satellite management, and space data analytics.',
      category: 'ai-autonomous',
      icon: Satellite,
      features: ['Space Data Analytics', 'Satellite Management', 'AI Exploration Tools'],
      pricing: '$599 - $3,499/month',
      link: '/services/ai-space-technology-platform',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '99.9%', label: 'Threat Detection Accuracy', icon: Shield },
    { number: '40%', label: 'Cost Reduction', icon: DollarSign },
    { number: '45%', label: 'Efficiency Increase', icon: TrendingUp },
    { number: '24/7', label: 'Autonomous Operation', icon: Clock }
  ];

  return (
    <>
      <SEO 
        title="Innovative Services Showcase 2026 | Zion Tech Group"
        description="Discover our revolutionary AI autonomous platforms for cybersecurity, logistics, manufacturing, and more. Experience the future of technology with Zion Tech Group."
        keywords="AI autonomous platforms, innovative services 2026, AI cybersecurity, AI logistics, AI manufacturing, Zion Tech Group services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Rocket className="w-4 h-4 mr-2" />
                Innovation Showcase 2026
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Innovative Services
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Showcase 2026</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Experience the future of technology with our revolutionary AI autonomous platforms. 
                From cybersecurity to manufacturing, discover how artificial intelligence is transforming 
                industries and creating unprecedented value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rounded-full"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Explore Our Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Filter through our comprehensive range of AI-powered autonomous platforms 
                and innovative solutions.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                      : 'bg-zion-slate-dark/50 border border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan/40'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join thousands of organizations that trust our AI-powered autonomous platforms 
                to transform their operations and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
