import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  DollarSign,
  Star,
  Globe,
  Award,
  Brain,
  Shield,
  Rocket,
  Search,
  Filter,
  Cloud,
  Database,
  Lock,
  Activity
} from 'lucide-react';
import { revolutionaryMicroSaasServices2030 } from '../data/revolutionaryServices2030';

export function MicroSaasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const microSaasServices = revolutionaryMicroSaasServices2030;

  const categories = [
    { id: 'all', name: 'All Micro SaaS', icon: Zap },
    { id: 'AI-Powered Workflow Automation', name: 'Workflow Automation', icon: Brain },
    { id: 'Quantum Computing Integration', name: 'Quantum Computing', icon: Cpu },
    { id: 'Biotechnology AI Solutions', name: 'Biotech AI', icon: Target },
    { id: 'Space Technology Solutions', name: 'Space Tech', icon: Rocket },
    { id: 'Sustainable Technology', name: 'Green Tech', icon: Shield },
    { id: 'Financial Technology', name: 'FinTech', icon: DollarSign }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'innovationLevel':
        return a.innovationLevel.localeCompare(b.innovationLevel);
      default:
        return 0;
    }
  });

  const stats = [
    { label: 'Micro SaaS Platforms', value: microSaasServices.length.toString(), icon: Zap },
    { label: 'Innovation Level', value: 'Revolutionary', icon: Award },
    { label: 'Success Rate', value: '98%', icon: Star },
    { label: 'Client ROI', value: '300%+', icon: TrendingUp }
  ];

  const saasCapabilities = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick setup and deployment of micro SaaS solutions in weeks, not months.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise scale.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamless AI capabilities built into every micro SaaS platform.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Modern cloud-native architecture for reliability and performance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance built into every platform.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Cutting-edge technology that keeps you ahead of the competition.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Platforms - Zion Tech Group | Revolutionary Software Solutions</title>
        <meta name="description" content="Zion Tech Group delivers innovative micro SaaS platforms including AI workflow automation, quantum computing, and biotechnology solutions." />
        <meta name="keywords" content="micro SaaS, software platforms, workflow automation, quantum computing, biotechnology AI, space technology, sustainable tech" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Micro SaaS Platforms
              </span>
              for Tomorrow
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of software with our cutting-edge micro SaaS solutions that 
              combine AI, quantum computing, and innovative technologies to transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Capabilities Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS Capabilities & Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS platforms are designed with cutting-edge technology and user experience 
              in mind, delivering powerful solutions that scale with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS platforms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-yellow-500 border-yellow-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-yellow-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
                <option value="innovationLevel">Innovation Level</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Platforms Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                {/* Innovation Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30">
                    {service.innovationLevel}
                  </span>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                  </div>
                </div>

                {/* User Limit */}
                <div className="mb-6 p-3 bg-gray-800/30 rounded-lg">
                  <div className="text-center">
                    <span className="text-gray-400 text-sm">User Limit</span>
                    <div className="text-yellow-400 font-medium">{service.userLimit}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-yellow-400 text-sm">+{service.features.length - 3} more features</span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Details */}
                <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Setup Time:</span>
                      <div className="text-yellow-400 font-medium">{service.setupTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Trial Period:</span>
                      <div className="text-cyan-400 font-medium">{service.trialPeriod}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Free Tier:</span>
                      <div className="text-green-400 font-medium">{service.freeTier ? 'Yes' : 'No'}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <div className="text-emerald-400 font-medium">{service.roi}</div>
                    </div>
                  </div>
                </div>

                {/* Integrations */}
                {service.integrations && service.integrations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Integrations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.integrations.slice(0, 3).map((integration, idx) => (
                        <span key={idx} className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">
                          {integration}
                        </span>
                      ))}
                      {service.integrations.length > 3 && (
                        <span className="text-yellow-400 text-xs">+{service.integrations.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Market Info */}
                <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <div className="text-yellow-400 font-medium">{service.marketPrice}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <div className="text-cyan-400 font-medium">{service.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Growth Rate:</span>
                      <div className="text-green-400 font-medium">{service.growthRate}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Competitors:</span>
                      <div className="text-purple-400 font-medium">{service.competitors.length}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No micro SaaS platforms found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Micro SaaS Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business idea into a powerful micro SaaS platform with our cutting-edge 
              technology and expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                Start Building
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}