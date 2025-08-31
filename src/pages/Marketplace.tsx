import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  Eye,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Solutions', count: 45, icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: Globe },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9, icon: Brain }
  ];

  const solutions = [
    {
      id: 1,
      name: "Quantum AI Optimization Platform",
      category: "quantum",
      description: "Revolutionary quantum-classical hybrid algorithms for real-time optimization solving. 1000x faster than classical computers.",
      price: "$15,000/month",
      rating: 4.9,
      reviews: 127,
      users: 45,
      features: ["Quantum algorithms", "Real-time optimization", "Hybrid computing", "Enterprise scaling"],
      image: "🔮",
      badge: "Most Popular",
      vendor: "QuantumTech Solutions",
      deployment: "Cloud & On-Premise",
      support: "24/7 Enterprise Support"
    },
    {
      id: 2,
      name: "AI Cybersecurity Suite",
      category: "cybersecurity",
      description: "Advanced AI-powered threat detection and response system with 99.9% accuracy and real-time protection.",
      price: "$8,500/month",
      rating: 4.8,
      reviews: 89,
      users: 67,
      features: ["AI threat detection", "Real-time response", "Zero-day protection", "Compliance ready"],
      image: "🛡️",
      badge: "Best Seller",
      vendor: "SecureAI Systems",
      deployment: "Cloud & Hybrid",
      support: "24/7 Security Support"
    },
    {
      id: 3,
      name: "Edge Computing Platform",
      category: "iot",
      description: "Ultra-low latency edge computing solution with 90% latency reduction and real-time data processing.",
      price: "$9,500/month",
      rating: 4.7,
      reviews: 156,
      users: 89,
      features: ["Edge processing", "Low latency", "Real-time analytics", "Scalable infrastructure"],
      image: "⚡",
      badge: "Trending",
      vendor: "EdgeFlow Technologies",
      deployment: "Edge & Cloud",
      support: "Business Hours Support"
    },
    {
      id: 4,
      name: "AI Healthcare Analytics",
      category: "healthcare",
      description: "Comprehensive AI-powered healthcare analytics platform for predictive diagnostics and patient care optimization.",
      price: "$12,000/month",
      rating: 4.9,
      reviews: 78,
      users: 34,
      features: ["Predictive analytics", "Patient monitoring", "Diagnostic support", "HIPAA compliant"],
      image: "🏥",
      badge: "New",
      vendor: "HealthAI Innovations",
      deployment: "Cloud & On-Premise",
      support: "24/7 Healthcare Support"
    },
    {
      id: 5,
      name: "Blockchain AI Platform",
      category: "blockchain",
      description: "Next-generation blockchain platform with AI optimization for smart contracts and decentralized applications.",
      price: "$6,500/month",
      rating: 4.6,
      reviews: 78,
      users: 23,
      features: ["Blockchain security", "AI optimization", "Supply chain tracking", "Smart contracts"],
      image: "🔗",
      badge: "Innovative",
      vendor: "ChainAI Solutions",
      deployment: "Cloud & Hybrid",
      support: "Business Hours Support"
    },
    {
      id: 6,
      name: "Cloud Cost Optimization",
      category: "cloud",
      description: "Intelligent cloud cost management platform with AI-driven optimization and automated resource scaling.",
      price: "$3,500/month",
      rating: 4.7,
      reviews: 156,
      users: 156,
      features: ["Cost optimization", "Resource management", "Budget tracking", "Automated scaling"],
      image: "☁️",
      badge: "Cost Effective",
      vendor: "CloudOpt Solutions",
      deployment: "Multi-Cloud",
      support: "24/7 Cloud Support"
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedSolutions = [...filteredSolutions].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'users':
        return b.users - a.users;
      default:
        return b.reviews - a.reviews; // popularity
    }
  });

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Best Seller':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Trending':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'New':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'Cost Effective':
        return 'bg-gradient-to-r from-teal-500 to-green-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <SEO 
        title="Technology Marketplace - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, cybersecurity, and cloud solutions from leading technology vendors in our curated marketplace."
        keywords="technology marketplace, AI solutions, quantum computing, cybersecurity, cloud platforms, enterprise software, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Globe className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Technology Marketplace</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Solutions Marketplace
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover cutting-edge AI, quantum computing, cybersecurity, and cloud solutions 
                from leading technology vendors. All solutions are vetted and enterprise-ready.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search solutions, vendors, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Sort Options */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                  <option value="reviews">Reviews</option>
                  <option value="users">Users</option>
                </select>
              </div>
              
              <div className="text-slate-300">
                {filteredSolutions.length} solutions found
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredSolutions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Globe className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
                <p className="text-slate-400">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{solution.image}</div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(solution.badge)}`}>
                            {solution.badge}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                            <span className="text-purple-400 text-sm font-medium">
                              {getCategoryName(solution.category)}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {solution.name}
                        </h3>
                        
                        <p className="text-slate-300 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-cyan-400">
                            {solution.price}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-white font-medium">{solution.rating}</span>
                            <span className="text-slate-400 text-sm">({solution.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Vendor:</span>
                          <span className="text-white">{solution.vendor}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Deployment:</span>
                          <span className="text-white">{solution.deployment}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Support:</span>
                          <span className="text-white">{solution.support}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{solution.users} users</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                        <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 py-3 px-4 rounded-lg transition-all duration-300">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Our technology experts can help you find the perfect solution or even 
                develop a custom solution tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Get Custom Recommendation
                </button>
                
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Talk to Our Experts
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
