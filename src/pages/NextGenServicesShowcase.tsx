import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cpu, 
  Globe, 
  Zap, 
  Lock, 
  Users, 
  TrendingUp, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Search
} from 'lucide-react';

// Import all the new service data
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
import { CUTTING_EDGE_AI_SERVICES } from '../data/cuttingEdgeAIServices';
import { INNOVATIVE_MICRO_SAAS_SOLUTIONS_2025 } from '../data/innovativeMicroSaasSolutions2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/specializedITInfrastructure2025';
import { NEXT_GEN_INNOVATIVE_SERVICES } from '../data/nextGenInnovativeServices';

const NextGenServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services
  const allServices = [
    ...EMERGING_TECH_SERVICES_2025,
    ...CUTTING_EDGE_AI_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SOLUTIONS_2025,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025,
    ...NEXT_GEN_INNOVATIVE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services based on selection and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
      case 'quantum ai':
      case 'quantum communications':
      case 'quantum networking':
        return <Cpu className="w-6 h-6" />;
      case 'ai consciousness':
      case 'autonomous ai':
      case 'ai research':
        return <Brain className="w-6 h-6" />;
      case 'space technology':
        return <Rocket className="w-6 h-6" />;
      case 'cybersecurity':
      case 'quantum security':
        return <Shield className="w-6 h-6" />;
      case 'edge computing':
      case '5g technology':
        return <Zap className="w-6 h-6" />;
      case 'blockchain & defi':
      case 'blockchain':
        return <Lock className="w-6 h-6" />;
      case 'iot & smart home':
      case 'iot':
        return <Globe className="w-6 h-6" />;
      case 'biotechnology':
        return <Users className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovation Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI, Quantum Computing, 
              Space Technology, and Emerging Tech solutions. Transform your business with 
              next-generation innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {getCategoryIcon(service.category)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Category:</div>
                <div className="text-sm text-white font-medium">{service.category}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Market Price Range:</div>
                <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={service.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our innovation experts to discuss how these cutting-edge services 
            can accelerate your digital transformation and give you a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Search icon component
const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default NextGenServicesShowcase;