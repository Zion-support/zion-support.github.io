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
  GraduationCapIcon
} from 'lucide-react';
import { innovativeZionServices2025 } from '../data/innovative-zion-services-2025';

export default function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-600 to-pink-600' },
    { id: 'legaltech', name: 'Legal Tech', icon: Scale, color: 'from-purple-600 to-indigo-700' },
    { id: 'realestate-tech', name: 'Real Estate Tech', icon: Home, color: 'from-blue-600 to-cyan-700' },
    { id: 'logistics-tech', name: 'Logistics Tech', icon: TruckIcon, color: 'from-green-600 to-emerald-700' },
    { id: 'energy-tech', name: 'Energy Tech', icon: ZapIcon, color: 'from-yellow-600 to-orange-700' },
    { id: 'agriculture-tech', name: 'Agriculture Tech', icon: Sprout, color: 'from-green-600 to-teal-700' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-purple-600 to-pink-700' },
    { id: 'space-tech', name: 'Space Tech', icon: Satellite, color: 'from-indigo-600 to-purple-700' },
    { id: 'fintech', name: 'FinTech', icon: Bitcoin, color: 'from-yellow-600 to-orange-700' },
    { id: 'healthtech', name: 'Health Tech', icon: BrainCircuit, color: 'from-blue-600 to-cyan-700' },
    { id: 'edtech', name: 'EdTech', icon: GraduationCapIcon, color: 'from-green-600 to-emerald-700' }
  ];

  const filteredServices = innovativeZionServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Sparkles;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-600 to-slate-600';
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
              <span className="block text-zion-cyan">Innovative Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI-powered solutions, emerging technologies, and revolutionary micro SAAS services 
              that transform industries and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to give you a competitive edge. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <a
                  href="tel:+13024640950"
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Visit Our Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Insights Section */}
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
              Market Insights & Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our analysis of emerging technology trends and market opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">AI Services Market</h3>
              <p className="text-purple-700 mb-4">
                The global AI services market is expected to reach $126 billion by 2027, 
                growing at a CAGR of 36.2% from 2020.
              </p>
              <div className="text-2xl font-bold text-purple-600">$126B</div>
              <div className="text-sm text-purple-500">Market Size by 2027</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Micro SaaS Growth</h3>
              <p className="text-blue-700 mb-4">
                Micro SaaS companies are growing 3x faster than traditional SaaS, 
                with 40% higher customer satisfaction rates.
              </p>
              <div className="text-2xl font-bold text-blue-600">3x</div>
              <div className="text-sm text-blue-500">Faster Growth Rate</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Emerging Tech</h3>
              <p className="text-green-700 mb-4">
                Quantum computing, space tech, and biotech AI are expected to create 
                $2.1 trillion in economic value by 2030.
              </p>
              <div className="text-2xl font-bold text-green-600">$2.1T</div>
              <div className="text-sm text-green-500">Economic Value by 2030</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
