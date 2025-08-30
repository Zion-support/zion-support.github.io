import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Scale,
  Home,
  TruckIcon,
  ZapIcon,
  Sprout,
  Bitcoin,
  BrainCircuit,
  GraduationCapIcon,
  ExternalLink
} from 'lucide-react';
import { innovativeZionServices2025 } from '../data/innovative-zion-services-2025';

export default function ZionCuttingEdgeServices2031() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-600 to-pink-600', count: innovativeZionServices2025.length },
    { id: 'legaltech', name: 'Legal Tech', icon: Scale, color: 'from-purple-600 to-indigo-700', count: innovativeZionServices2025.filter(s => s.category === 'legaltech').length },
    { id: 'realestate-tech', name: 'Real Estate Tech', icon: Home, color: 'from-blue-600 to-cyan-700', count: innovativeZionServices2025.filter(s => s.category === 'realestate-tech').length },
    { id: 'logistics-tech', name: 'Logistics Tech', icon: TruckIcon, color: 'from-green-600 to-emerald-700', count: innovativeZionServices2025.filter(s => s.category === 'logistics-tech').length },
    { id: 'energy-tech', name: 'Energy Tech', icon: ZapIcon, color: 'from-yellow-600 to-orange-700', count: innovativeZionServices2025.filter(s => s.category === 'energy-tech').length },
    { id: 'agriculture-tech', name: 'Agriculture Tech', icon: Sprout, color: 'from-green-600 to-teal-700', count: innovativeZionServices2025.filter(s => s.category === 'agriculture-tech').length },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-purple-600 to-pink-700', count: innovativeZionServices2025.filter(s => s.category === 'quantum-computing').length },
    { id: 'space-tech', name: 'Space Tech', icon: Satellite, color: 'from-indigo-600 to-purple-700', count: innovativeZionServices2025.filter(s => s.category === 'space-tech').length },
    { id: 'fintech', name: 'FinTech', icon: Bitcoin, color: 'from-yellow-600 to-orange-700', count: innovativeZionServices2025.filter(s => s.category === 'fintech').length },
    { id: 'healthtech', name: 'Health Tech', icon: BrainCircuit, color: 'from-blue-600 to-cyan-700', count: innovativeZionServices2025.filter(s => s.category === 'healthtech').length },
    { id: 'edtech', name: 'EdTech', icon: GraduationCapIcon, color: 'from-green-600 to-emerald-700', count: innovativeZionServices2025.filter(s => s.category === 'edtech').length }
  ];

  const filteredServices = innovativeZionServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-slate to-zion-cyan">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-zion-cyan">Cutting-Edge Services 2031</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary AI-powered solutions, 
              quantum computing platforms, and innovative micro SAAS services that transform industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/innovative-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/comprehensive-pricing-guide-2025"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <Rocket className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{innovativeZionServices2025.length}</div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">11</div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">$200B+</div>
              <div className="text-zion-slate-light">Total Market Size</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime SLA</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <category.icon className="h-5 w-5" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search cutting-edge services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {service.innovationLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">Starting at</span>
                        <span className="text-2xl font-bold text-zion-blue">{service.pricing.monthly}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="line-through">{service.pricing.marketPrice}</span>
                        <span className="ml-2 text-green-600 font-medium">Market Price</span>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Technology:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-zion-slate-light text-zion-slate text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Trial */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="text-green-600 font-medium">
                        <TrendingUp className="h-4 w-4 inline mr-1" />
                        {service.roi}
                      </div>
                      <div className="text-blue-600 font-medium">
                        <Play className="h-4 w-4 inline mr-1" />
                        {service.trialDays} days free
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link
                        to={service.link}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-200 text-center block"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="w-full bg-white border-2 border-zion-cyan text-zion-cyan font-semibold py-3 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200 text-center block"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Technology Categories Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zion-blue mb-6">
              Technology Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge technology solutions across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{category.name}</h3>
                <p className="text-gray-600 text-center mb-4">
                  {category.count} innovative service{category.count !== 1 ? 's' : ''} available
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg text-sm font-medium">
                    Explore {category.count} Services
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate to-zion-blue">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our cutting-edge services are designed to give you a competitive advantage in the digital age. 
              Contact us today to discuss how we can transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <a
                  href={`mailto:${contactInfo.email}?subject=Cutting-Edge Services Inquiry&body=Hi, I'm interested in learning more about your cutting-edge services. Please provide information about your innovative solutions and how they can benefit my business.`}
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/innovative-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Visit Our Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}