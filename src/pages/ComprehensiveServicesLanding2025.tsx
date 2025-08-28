import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  MapPin,
  Infinity,
  Eye,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  Atom,
  Gauge,
  GitFork,
  PenTool,
  Server,
  Truck,
  Building,
  Settings,
  Key,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaaSServices2025';
import { COMPREHENSIVE_IT_SERVICES_2025 } from '../data/comprehensiveITServices2025';
import { COMPREHENSIVE_AI_SERVICES_2025 } from '../data/comprehensiveAIServices2025';

export default function ComprehensiveServicesLanding2025() {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...COMPREHENSIVE_IT_SERVICES_2025,
    ...COMPREHENSIVE_AI_SERVICES_2025
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Scale, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', icon: Eye, color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: Leaf, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: Globe, color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: Settings, color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Development', name: 'AI & Development', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Education', name: 'AI & Education', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: MessageSquare, color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: Users, color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: PenTool, color: 'from-orange-500 to-red-500' },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Building2, color: 'from-gray-500 to-blue-500' },
    { id: 'Cloud Services', name: 'Cloud Services', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps', name: 'DevOps', icon: GitFork, color: 'from-green-500 to-blue-500' },
    { id: 'Data Protection', name: 'Data Protection', icon: Lock, color: 'from-green-500 to-blue-500' },
    { id: 'Network Security', name: 'Network Security', icon: ShieldCheck, color: 'from-red-500 to-orange-500' },
    { id: 'IT Consulting', name: 'IT Consulting', icon: Building, color: 'from-indigo-500 to-purple-500' },
    { id: 'Managed Services', name: 'Managed Services', icon: Settings, color: 'from-gray-500 to-slate-500' },
    { id: 'Software Development', name: 'Software Development', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { id: 'IT Training', name: 'IT Training', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { id: 'Project Management', name: 'Project Management', icon: FileText, color: 'from-green-500 to-emerald-500' }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  const featuredServices = allServices.filter(service => service.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of AI-powered services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology solutions."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI-powered solutions, enterprise IT services, and innovative micro SAAS platforms. 
              Stay ahead of the competition with technology that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {serviceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveTab(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  activeTab === category.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-sm font-medium ${
                  activeTab === category.id ? 'text-cyan-400' : 'text-gray-300'
                }`}>
                  {category.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{service.availability}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{allServices.length}+</div>
              <div className="text-gray-300">Services Available</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">AI Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500%+</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Speak to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}