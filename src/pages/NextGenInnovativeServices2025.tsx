import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Network,
  Code,
  PenTool,
  BarChart3,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  Users,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Search
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES_2025 } from '../data/nextGenInnovativeServices2025';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2025 } from '../data/emergingTechInnovativeServices2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/specializedITInfrastructureServices2025';
import { SPECIALIZED_AI_SERVICES_2025 } from '../data/specializedAIServices2025';

const NextGenInnovativeServices2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...NEXT_GEN_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025,
    ...SPECIALIZED_AI_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'Financial Technology', name: 'Financial Tech', icon: DollarSign, count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Supply Chain Management', name: 'Supply Chain', icon: Network, count: allServices.filter(s => s.category === 'Supply Chain Management').length },
    { id: 'Healthcare Technology', name: 'Healthcare', icon: Brain, count: allServices.filter(s => s.category === 'Healthcare Technology').length },
    { id: 'Energy Technology', name: 'Energy', icon: Zap, count: allServices.filter(s => s.category === 'Energy Technology').length },
    { id: 'Manufacturing Technology', name: 'Manufacturing', icon: Cpu, count: allServices.filter(s => s.category === 'Manufacturing Technology').length },
    { id: 'Neurotechnology', name: 'Neurotech', icon: Brain, count: allServices.filter(s => s.category === 'Neurotechnology').length },
    { id: 'Space Technology', name: 'Space Tech', icon: Rocket, count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Quantum Technology', name: 'Quantum', icon: Zap, count: allServices.filter(s => s.category === 'Quantum Technology').length },
    { id: 'Autonomous Vehicles', name: 'Autonomous', icon: Rocket, count: allServices.filter(s => s.category === 'Autonomous Vehicles').length },
    { id: 'Climate Technology', name: 'Climate', icon: Globe, count: allServices.filter(s => s.category === 'Climate Technology').length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: Cpu, count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Cybersecurity', name: 'Security', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Management', name: 'Cloud', icon: Cloud, count: allServices.filter(s => s.category === 'Cloud Management').length },
    { id: 'Data Center', name: 'Data Center', icon: Database, count: allServices.filter(s => s.category === 'Data Center').length },
    { id: 'Network Management', name: 'Network', icon: Network, count: allServices.filter(s => s.category === 'Network Management').length },
    { id: 'Software Development', name: 'Development', icon: Code, count: allServices.filter(s => s.category === 'Software Development').length },
    { id: 'Content Creation', name: 'Content', icon: PenTool, count: allServices.filter(s => s.category === 'Content Creation').length },
    { id: 'Data Analytics', name: 'Analytics', icon: BarChart3, count: allServices.filter(s => s.category === 'Data Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', icon: MessageCircle, count: allServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Marketing', name: 'Marketing', icon: TrendingUp, count: allServices.filter(s => s.category === 'Marketing').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Next-Generation Innovative Services 2025
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover cutting-edge AI-powered solutions that are revolutionizing industries and driving unprecedented growth. 
            Our innovative services combine the latest technologies with real-world applications to deliver measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="w-5 h-5" />
              <span>25+ Innovative Services</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Star className="w-5 h-5" />
              <span>Industry-Leading ROI</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Award className="w-5 h-5" />
              <span>Enterprise-Grade Quality</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI and Market Info */}
                <div className="bg-gray-700 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Expected ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-gray-300">Market Size:</span>
                    <span className="text-blue-400 font-semibold">{service.marketSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-300">
                    Demo
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <Link
                      to={`mailto:${service.contactInfo.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {service.contactInfo.email}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters and show all services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Our team of experts is ready to help you implement these cutting-edge solutions and achieve unprecedented results. 
            Get in touch today to start your transformation journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-cyan-400 font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-semibold text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p className="text-gray-400 text-sm">By appointment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Visit Our Website</span>
              <Globe className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NextGenInnovativeServices2025;