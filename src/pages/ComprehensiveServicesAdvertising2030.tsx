import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  ArrowRight, 
  Star, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Globe, 
  Brain,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  Users,
  Target,
  Award,
  Search
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesAdvertising2030() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: COMPREHENSIVE_SERVICES_INDEX_2030.length },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: '🤖', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Business Intelligence').length },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: '📈', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Marketing').length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: '🏠', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Real Estate').length },
    { id: 'AI & Operations', name: 'AI & Operations', icon: '⚙️', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Operations').length },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: '💰', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & FinTech').length },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: '💬', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Customer Support').length },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & HR').length },
    { id: 'AI & Education', name: 'AI & Education', icon: '🎓', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Education').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Cloud & DevOps').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: '🔗', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Space Technology').length },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: '🌱', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Sustainable Technology').length }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {

    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : '🔧';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Advertising 2030 - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. Transform your business with cutting-edge technology solutions."
        keywords="micro SAAS, IT services, AI solutions, cybersecurity, cloud computing, blockchain, healthcare tech, education tech"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Services Portfolio 2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge micro SAAS services, AI-powered solutions, 
              and innovative IT infrastructure. Stay ahead of the competition with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <p className="font-semibold">Phone</p>
              <p>+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <p className="font-semibold">Email</p>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <p className="font-semibold">Address</p>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${

                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-white text-sm">{service.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Price:</span>
                    <span className="text-green-400 font-semibold">
                      ${service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <span className="text-blue-400 text-sm">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">ROI:</span>
                    <span className="text-purple-400 text-sm">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Setup Time:</span>
                    <span className="text-orange-400 text-sm">{service.setupTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={`https://ziontechgroup.com/services/${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry about service"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive real business value and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {

                icon: <Zap className="w-12 h-12" />,
                title: "Innovation First",
                description: "Leading-edge AI and emerging technologies that keep you ahead of the competition."
              },
              {

                icon: <Users className="w-12 h-12" />,
                title: "Expert Team",
                description: "Experienced professionals with deep expertise in AI, cloud, and emerging technologies."
              },
              {

                icon: <Target className="w-12 h-12" />,
                title: "Proven Results",
                description: "Track record of delivering measurable ROI and business transformation."
              },
              {

                icon: <Award className="w-12 h-12" />,
                title: "Quality Assured",
                description: "Enterprise-grade solutions with comprehensive support and maintenance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can drive your success in 2030 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Inquiry"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
            <p className="text-gray-400 mt-6">
              Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}