import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network
} from 'lucide-react';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      category: 'AI',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      price: 'Starting from $999/month'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for enterprise needs',
      category: 'Cloud',
      icon: Cloud,
      features: ['Auto-scaling', 'Load balancing', 'High availability'],
      price: 'Starting from $499/month'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets',
      category: 'Security',
      icon: Shield,
      features: ['Threat detection', 'Incident response', 'Compliance'],
      price: 'Starting from $799/month'
    },
    {
      id: 4,
      title: 'DevOps & Automation',
      description: 'Streamline development and operations with automation',
      category: 'DevOps',
      icon: Settings,
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring'],
      price: 'Starting from $599/month'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      category: 'Analytics',
      icon: Database,
      features: ['Real-time analytics', 'Business intelligence', 'Reporting'],
      price: 'Starting from $699/month'
    },
    {
      id: 6,
      title: 'IoT Solutions',
      description: 'Connect and manage IoT devices at scale',
      category: 'IoT',
      icon: Network,
      features: ['Device management', 'Data collection', 'Analytics'],
      price: 'Starting from $899/month'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'DevOps', 'Analytics', 'IoT'];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Discover our comprehensive range of cutting-edge technology services designed to transform your business.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-400">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-cyan-400 font-medium text-sm mb-3">
                      {service.price}
                    </p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
