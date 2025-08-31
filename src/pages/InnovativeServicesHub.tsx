import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Brain,
  Zap,
  Globe,
  Shield,
  Cpu,
  Database,
  Network,
  Lock,
  TrendingUp,
  Users,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Code,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Key,
  BarChart3,
  Globe2,
  ShieldCheck
} from 'lucide-react';

export default function InnovativeServicesHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        {
          id: 'ai-neural-architecture-optimizer',
          name: 'AI Neural Architecture Optimizer',
          description: 'Advanced neural network architecture optimization with automated hyperparameter tuning and model selection.',
          price: '$5,200/month',
          features: ['Architecture Optimization', 'Hyperparameter Tuning', 'Model Selection', 'Performance Analysis', 'AutoML Integration'],
          badge: 'Advanced AI',
          rating: 4.9,
          reviews: 89
        },
        {
          id: 'ai-federated-learning-platform',
          name: 'AI Federated Learning Platform',
          description: 'Privacy-preserving federated learning platform for distributed AI model training across organizations.',
          price: '$4,800/month',
          features: ['Federated Learning', 'Privacy Preservation', 'Distributed Training', 'Model Aggregation', 'Security Protocols'],
          badge: 'Privacy-First',
          rating: 4.9,
          reviews: 67
        }
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          id: 'quantum-encryption-suite',
          name: 'Quantum Encryption Suite',
          description: 'Next-generation quantum-resistant encryption for ultra-secure communications and data protection.',
          price: '$6,500/month',
          features: ['Quantum-Resistant Algorithms', 'Post-Quantum Cryptography', 'Secure Key Management', 'Real-time Encryption', 'Compliance Ready'],
          badge: 'Quantum-Safe',
          rating: 4.8,
          reviews: 156
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        {
          id: 'edge-computing-platform',
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing infrastructure for low-latency applications and IoT deployments.',
          price: '$3,800/month',
          features: ['Edge Nodes', 'Load Balancing', 'Real-time Processing', 'IoT Integration', 'Global Distribution'],
          badge: 'Edge-First',
          rating: 4.7,
          reviews: 203
        }
      ]
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Cybersecurity & Privacy', 'Cloud & Infrastructure'];

  const filteredServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.title
    }))
  ).filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.rating - a.rating;
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace('/month', '')) - 
               parseFloat(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace('/month', '')) - 
               parseFloat(a.price.replace('$', '').replace('/month', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover cutting-edge technology solutions that will transform your business and drive innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>Latest Technologies</span>
              <span>•</span>
              <span>AI-Powered Solutions</span>
              <span>•</span>
              <span>Enterprise Ready</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Sort by Price (Low to High)</option>
                  <option value="price-high">Sort by Price (High to Low)</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-gray-400">
                  {sortedServices.length} services found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of innovative solutions designed for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 ml-2">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-white text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your specific needs and find the perfect 
              solution for your business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              <a
                href="/get-started"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper components
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);