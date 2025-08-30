import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  ArrowRight,
  ShoppingCart,
  Heart,
  Eye
} from 'lucide-react';

<<<<<<< HEAD
const Marketplace: React.FC = () => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Solutions', count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', count: 18 },
    { id: 'quantum', name: 'Quantum Computing', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15 },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10 },
    { id: 'blockchain', name: 'Blockchain', count: 6 },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9 };
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
      badge: "Most Popular"
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
      badge: "Best Seller"
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
      badge: "Trending"
    },
    {
      id: 4,
      name: "AI Healthcare Analytics",
      category: "healthcare",
      description: "Comprehensive AI-powered healthcare analytics platform for predictive diagnostics and patient care optimization.",
      price: "$12,000/month",
      rating: 4.9,
      reviews: 203,
      users: 34,
      features: ["Predictive analytics", "Patient monitoring", "Diagnostic support", "HIPAA compliant"],
      image: "🏥",
      badge: "New"
    },
    {
      id: 5,
      name: "Blockchain Supply Chain AI",
      category: "blockchain",
      description: "AI-enhanced blockchain platform for transparent, secure, and intelligent supply chain management.",
      price: "$18,000/month",
      rating: 4.6,
      reviews: 78,
      users: 23,
      features: ["Blockchain security", "AI optimization", "Supply chain tracking", "Smart contracts"],
      image: "🔗",
      badge: "Innovative"
    },
    {
      id: 6,
      name: "Cloud FinOps Optimizer",
      category: "cloud",
      description: "AI-powered cloud cost optimization and financial operations management platform.",
      price: "$6,500/month",
      rating: 4.8,
      reviews: 234,
      users: 156,
      features: ["Cost optimization", "Resource management", "Budget tracking", "Automated scaling"],
      image: "☁️",
      badge: "Cost Effective"
    };
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedSolutions = [...filteredSolutions].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':;
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return b.users - a.users; // popularity
    }
  });

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Explore our marketplace of AI-powered technology solutions and services for enterprise transformation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            AI-Powered Solutions
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Marketplace</span>
          </motion.h1>
          <motion.p 
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition = {
  { duration: 0.8,
  delay: 0.2 
}}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Discover cutting-edge AI, quantum computing, and emerging technology solutions 
            designed to transform your business operations and drive innovation.
          </motion.p>
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition = {
  { duration: 0.8,
  delay: 0.4 
}}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-white">45+ Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white">500+ Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white">4.8+ Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 
}}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Badge */}
                {solution.badge && (
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                    {solution.badge}
                  </div>
                )}

                {/* Image and Title */}
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{solution.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {solution.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        +{solution.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{solution.rating}</span>
                    <span className="text-gray-400">({solution.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{solution.users}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{solution.price}</div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                      <ShoppingCart className="w-4 h-4" />
                      Get Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedSolutions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No solutions found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories.</p>
              <button
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className = "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View All Solutions
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-8">
              Can't find exactly what you're looking for? Our team of experts can create 
              a custom AI-powered solution tailored to your specific business needs.
            </p>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto group">
              Request Custom Solution
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>;
  );
};
=======
const Marketplace: React.FC = () => (
	<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
		<div className="max-w-3xl mx-auto px-4 text-white">
			<h1 className="text-4xl font-bold mb-6">Marketplace</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Link to="/marketplace/products" className="p-4 bg-white/10 rounded-lg hover:bg-white/15">Products</Link>
				<Link to="/marketplace/talent" className="p-4 bg-white/10 rounded-lg hover:bg-white/15">Talent</Link>;
				<Link to="/marketplace/equipment" className="p-4 bg-white/10 rounded-lg hover:bg-white/15">Equipment</Link>;
				<Link to="/marketplace/services" className="p-4 bg-white/10 rounded-lg hover:bg-white/15">Services</Link>;
			</div>;
		</div>;
	</div>;
);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default Marketplace;
