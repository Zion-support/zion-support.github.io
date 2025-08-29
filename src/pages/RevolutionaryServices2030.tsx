import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Rocket, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Network, 
  Database,
  Smartphone,
  Eye,
  Lock,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  BarChart3
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2030 } from '../data/revolutionaryMicroSaasServices2030';
import { CUTTING_EDGE_IT_INFRASTRUCTURE_SERVICES_2030 } from '../data/cuttingEdgeITInfrastructureServices2030';
import { EMERGING_TECHNOLOGY_SERVICES_2030 } from '../data/emergingTechnologyServices2030';

export default function RevolutionaryServices2030() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...REVOLUTIONARY_MICRO_SAAS_SERVICES_2030,
    ...CUTTING_EDGE_IT_INFRASTRUCTURE_SERVICES_2030,
    ...EMERGING_TECHNOLOGY_SERVICES_2030
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Research': <Brain className="w-6 h-6" />,
      'AI & FinTech': <TrendingUp className="w-6 h-6" />,
      'Blockchain & Web3': <Globe className="w-6 h-6" />,
      'AI & Legal Tech': <Shield className="w-6 h-6" />,
      'AI & Metaverse': <Eye className="w-6 h-6" />,
      'AI & Healthcare': <Users className="w-6 h-6" />,
      'AI & Green Tech': <Zap className="w-6 h-6" />,
      'AI & Space Tech': <Rocket className="w-6 h-6" />,
      'AI & Autonomous Systems': <Smartphone className="w-6 h-6" />,
      'Quantum Computing': <Cpu className="w-6 h-6" />,
      'IT Infrastructure': <Database className="w-6 h-6" />,
      'AI & Development': <Network className="w-6 h-6" />,
      'Cybersecurity': <Lock className="w-6 h-6" />,
      'IoT & Edge Computing': <Smartphone className="w-6 h-6" />,
      'Digital Twin': <Eye className="w-6 h-6" />,
      'Emerging Technology': <Rocket className="w-6 h-6" />
    };
    return icons[category] || <Rocket className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Revolutionary Services 2030 - Zion Tech Group"
        description="Discover the future of technology with Zion Tech Group's revolutionary services for 2030. AI, Quantum Computing, Blockchain, and cutting-edge infrastructure solutions."
        keywords="revolutionary services 2030, AI services, quantum computing, blockchain, emerging technology, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge micro SAAS, IT infrastructure, and AI services. 
              Transform your business with innovations that define tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>50+ Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>1000%+ ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? <Rocket className="w-4 h-4" /> : getCategoryIcon(category)}
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    {getCategoryIcon(service.category)}
                    <span>{service.category}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Price:</span>
                    <span className="text-white font-semibold">
                      ${service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <span className="text-gray-300 text-sm">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Setup Time:</span>
                    <span className="text-gray-300 text-sm">{service.setupTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">AI Score:</span>
                    <span className="text-purple-400 font-semibold">{service.aiScore}/100</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just a technology company – we're your strategic partner in the digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-purple-400" />,
                title: "Proven Excellence",
                description: "4.9/5 rating with thousands of satisfied clients worldwide"
              },
              {
                icon: <Rocket className="w-12 h-12 text-pink-400" />,
                title: "Innovation First",
                description: "Cutting-edge technologies that keep you ahead of the competition"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-green-400" />,
                title: "Maximum ROI",
                description: "Average 1000%+ return on investment within 12 months"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: "Expert Support",
                description: "24/7 dedicated support from certified technology professionals"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of forward-thinking companies already transforming their operations with our revolutionary services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 underline">https://ziontechgroup.com</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}