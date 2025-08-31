import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, 
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Target, 
  Rocket, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Heart,
  Eye,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Building2,
  Factory,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  ShoppingBag,
  GraduationCap,
  Globe,
  Lock,
  BarChart3,
  Workflow,
  Palette,
  Video,
  Mic,
  Image,
  FileText,
  Atom,
  Satellite,
  Truck
} from 'lucide-react';
import { SEO } from '@/components/SEO';
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961

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
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
    {
      id: 'ai-bi-dashboard',
      name: 'AI Business Intelligence Dashboard',
      category: 'ai-ml',
      description: 'Advanced analytics and insights powered by AI for data-driven decision making.',
      price: '$299/month',
      rating: 4.9,
      reviews: 127,
      users: '2.5K+',
      features: ['Real-time Analytics', 'AI Insights', 'Custom Dashboards', 'API Integration'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-business-intelligence-dashboard',
      popular: true,
      badge: 'Most Popular'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      category: 'ai-ml',
      description: 'Intelligent customer service with 24/7 availability and automated responses.',
      price: '$199/month',
      rating: 4.8,
      reviews: 89,
      users: '1.8K+',
      features: ['24/7 Support', 'AI Chatbots', 'Multi-language', 'Integration APIs'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-customer-support-automation',
      popular: false
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'ai-ml',
      description: 'Smart project planning and resource optimization with AI-powered insights.',
      price: '$399/month',
      rating: 4.7,
      reviews: 156,
      users: '3.2K+',
      features: ['AI Planning', 'Resource Optimization', 'Team Collaboration', 'Progress Tracking'],
      image: '/api/placeholder/400/300',
      link: '/services/ai-project-management-platform',
      popular: false
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
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
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
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20'
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
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
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
          </div>
        </div>
      </section>

      {/* Marketplace Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={item.link}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                >
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Brain className="w-8 h-8 text-cyan-400" />
                      </div>
                      <p className="text-sm">Service Preview</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {item.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-gray-300">{item.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-blue-400 mr-1" />
                          <span className="text-gray-300">{item.users}</span>
                        </div>
                      </div>
                      <span className="text-cyan-400 font-semibold">{item.price}</span>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                          Learn More
                        </span>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {sortedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={`/services?category=${category.id}`}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Explore Services</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Can't find what you're looking for? Our team can create custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
