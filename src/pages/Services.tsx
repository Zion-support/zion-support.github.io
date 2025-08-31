import Services from './services';
export default Services;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Grid,
  List,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ShoppingCart
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: allServices.filter(s => s.category === 'Healthcare Technology').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Education Technology', name: 'Education Technology', count: allServices.filter(s => s.category === 'Education Technology').length, icon: '🎓', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Manufacturing Technology', name: 'Manufacturing Technology', count: allServices.filter(s => s.category === 'Manufacturing Technology').length, icon: '🏭', color: 'from-zion-orange to-zion-red' },
    { id: 'Retail Technology', name: 'Retail Technology', count: allServices.filter(s => s.category === 'Retail Technology').length, icon: '🛍️', color: 'from-zion-green to-zion-blue' },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category === 'Financial Technology').length, icon: '💰', color: 'from-zion-green to-zion-emerald' },
    { id: 'Logistics & Transportation', name: 'Logistics & Transportation', count: allServices.filter(s => s.category === 'Logistics & Transportation').length, icon: '🚚', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Energy Technology', name: 'Energy Technology', count: allServices.filter(s => s.category === 'Energy Technology').length, icon: '⚡', color: 'from-zion-yellow to-zion-orange' },
    { id: 'Real Estate Technology', name: 'Real Estate Technology', count: allServices.filter(s => s.category === 'Real Estate Technology').length, icon: '🏠', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Insurance Technology', name: 'Insurance Technology', count: allServices.filter(s => s.category === 'Insurance Technology').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Government Technology', name: 'Government Technology', count: allServices.filter(s => s.category === 'Government Technology').length, icon: '🏛️', color: 'from-zion-gray to-zion-blue' },
    { id: 'Enterprise Technology', name: 'Enterprise Technology', count: allServices.filter(s => s.category === 'Enterprise Technology').length, icon: '🏢', color: 'from-zion-blue to-zion-indigo' },
    { id: 'DevOps & Automation', name: 'DevOps & Automation', count: allServices.filter(s => s.category === 'DevOps & Automation').length, icon: '⚙️', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Data Science', name: 'Data Science', count: allServices.filter(s => s.category === 'Data Science').length, icon: '📊', color: 'from-zion-blue to-zion-green' },
    { id: 'User Experience', name: 'User Experience', count: allServices.filter(s => s.category === 'User Experience').length, icon: '🎨', color: 'from-zion-purple to-zion-pink' },
    { id: 'Content Strategy', name: 'Content Strategy', count: allServices.filter(s => s.category === 'Content Strategy').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Product Management', name: 'Product Management', count: allServices.filter(s => s.category === 'Product Management').length, icon: '📱', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Operations Management', name: 'Operations Management', count: allServices.filter(s => s.category === 'Operations Management').length, icon: '⚙️', color: 'from-zion-gray to-zion-blue' },
    { id: 'Quality Assurance', name: 'Quality Assurance', count: allServices.filter(s => s.category === 'Quality Assurance').length, icon: '✅', color: 'from-zion-green to-zion-emerald' },
    { id: 'Compliance & Governance', name: 'Compliance & Governance', count: allServices.filter(s => s.category === 'Compliance & Governance').length, icon: '📋', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Sustainability & ESG', name: 'Sustainability & ESG', count: allServices.filter(s => s.category === 'Sustainability & ESG').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-zion-purple to-zion-indigo' },
    { id: 'IoT & Cyber-Physical', name: 'IoT & Cyber-Physical', count: allServices.filter(s => s.category === 'IoT & Cyber-Physical').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Biotechnology', name: 'Biotechnology', count: allServices.filter(s => s.category === 'Biotechnology').length, icon: '🧬', color: 'from-zion-green to-zion-blue' },
    { id: 'Climate Science', name: 'Climate Science', count: allServices.filter(s => s.category === 'Climate Science').length, icon: '🌍', color: 'from-zion-green to-zion-blue' },
    { id: 'Neuroscience', name: 'Neuroscience', count: allServices.filter(s => s.category === 'Neuroscience').length, icon: '🧠', color: 'from-zion-purple to-zion-pink' },
    { id: 'Materials Science', name: 'Materials Science', count: allServices.filter(s => s.category === 'Materials Science').length, icon: '🔬', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Robotics & Automation', name: 'Robotics & Automation', count: allServices.filter(s => s.category === 'Robotics & Automation').length, icon: '🤖', color: 'from-zion-gray to-zion-blue' },
    { id: 'Aerospace Engineering', name: 'Aerospace Engineering', count: allServices.filter(s => s.category === 'Aerospace Engineering').length, icon: '✈️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Nanotechnology', name: 'Nanotechnology', count: allServices.filter(s => s.category === 'Nanotechnology').length, icon: '🔬', color: 'from-zion-purple to-zion-pink' },
    { id: 'Legal Technology', name: 'Legal Technology', count: allServices.filter(s => s.category === 'Legal Technology').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: allServices.filter(s => s.category === 'Digital Marketing').length, icon: '📈', color: 'from-zion-blue to-zion-green' },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length, icon: '📦', color: 'from-zion-orange to-zion-blue' },
    { id: 'Customer Success', name: 'Customer Success', count: allServices.filter(s => s.category === 'Customer Success').length, icon: '🎯', color: 'from-zion-green to-zion-blue' },
    { id: 'Sales & Revenue', name: 'Sales & Revenue', count: allServices.filter(s => s.category === 'Sales & Revenue').length, icon: '💼', color: 'from-zion-blue to-zion-green' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Research & Development', name: 'Research & Development', count: allServices.filter(s => s.category === 'Research & Development').length, icon: '🔬', color: 'from-zion-purple to-zion-blue' }
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innovative Micro SAAS Services 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI-powered micro SAAS services and solutions. From autonomous business operations to quantum computing, we deliver innovative technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, micro SAAS, quantum computing, blockchain, cybersecurity, healthcare technology, education technology, manufacturing technology" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section with Advertising */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Micro SAAS Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI-powered solutions. From autonomous operations to quantum computing, 
              we deliver innovative technology that drives growth, efficiency, and competitive advantage.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rapid Implementation</h3>
                <p className="text-gray-300 text-sm">Deploy solutions in 2-8 weeks with our proven implementation methodology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300 text-sm">Average 400-1000% ROI within 4-20 months across all services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">Bank-level security with SOC2 compliance and zero-trust architecture</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span>364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <span>https://ziontechgroup.com</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>50+ cutting-edge AI services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Global deployment capability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>24/7 expert support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Competitive pricing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service%20Inquiry%20-%20Zion%20Tech%20Group"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative micro SAAS services span across 40+ categories, from AI-powered business solutions 
              to cutting-edge quantum computing and emerging technologies.
            </p>
          </motion.div>

          {/* Service Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">40+</div>
              <div className="text-gray-300">Service Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Average AI Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">2-15</div>
              <div className="text-gray-300">Weeks Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, categories, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1 backdrop-blur-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to address the most pressing technology challenges 
              facing modern businesses.
            </p>
          </div>

          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group">
                      <Link to={service.href} className="block">
                        <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                          service.popular ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-gray-100'
                        }`}>
                          {service.popular && (
                            <div className="absolute -top-3 left-6">
                              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Popular
                              </span>
                            </div>
                          )}

                          <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                          
                          <div className="mb-6">
                            <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                              Learn More
                            </span>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering tailored technology solutions for specific industries, 
              understanding the unique challenges and compliance requirements of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <Link to={industry.href} className="block">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Let's discuss how our technology services can help you achieve your business goals 
            and drive measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Phone className="w-5 h-5 text-blue-300" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Mail className="w-5 h-5 text-blue-300" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
