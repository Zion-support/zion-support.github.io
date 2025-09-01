import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Store, 
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

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Categories', count: 156, icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', count: 42, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 18, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 35, icon: Shield },
    { id: 'cloud', name: 'Cloud Platforms', count: 28, icon: Cloud },
    { id: 'enterprise', name: 'Enterprise Software', count: 33, icon: Store }
  ];

  const solutions = [
    {
      id: '1',
      name: 'QuantumAI Platform',
      description: 'Advanced quantum machine learning platform for enterprise applications',
      price: '$15,000/month',
      rating: 4.8,
      reviews: 127,
      users: '2.3k',
      badge: 'Best Seller',
      category: 'ai',
      vendor: 'QuantumTech Solutions',
      deployment: 'Cloud & On-Premise',
      support: '24/7 Premium',
      features: ['Quantum ML', 'Real-time Processing', 'Enterprise Security'],
      image: '🔮'
    },
    {
      id: '2',
      name: 'CyberShield Pro',
      description: 'Comprehensive cybersecurity suite with AI-powered threat detection',
      price: '$8,500/month',
      rating: 4.9,
      reviews: 89,
      users: '1.8k',
      badge: 'Trending',
      category: 'cybersecurity',
      vendor: 'SecureNet Systems',
      deployment: 'Cloud',
      support: '24/7 Standard',
      features: ['AI Detection', 'Zero Trust', 'Compliance Ready'],
      image: '🛡️'
    },
    {
      id: '3',
      name: 'CloudMatrix Enterprise',
      description: 'Scalable cloud infrastructure platform with advanced automation',
      price: '$12,000/month',
      rating: 4.7,
      reviews: 156,
      users: '3.1k',
      badge: 'Popular',
      category: 'cloud',
      vendor: 'CloudTech Industries',
      deployment: 'Multi-Cloud',
      support: '24/7 Premium',
      features: ['Auto-scaling', 'Multi-region', 'Cost Optimization'],
      image: '☁️'
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
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

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Trending':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Popular':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'New':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover and compare cutting-edge technology solutions, AI platforms, and enterprise software from leading vendors."
        keywords="technology marketplace, AI solutions, enterprise software, cybersecurity, cloud platforms, vendor comparison"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Store className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Marketplace</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover, compare, and implement cutting-edge technology solutions 
                from leading vendors worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price: Low to High</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="users">Most Users</option>
                </select>

                <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Solutions'}
              </h2>
              <p className="text-gray-400">
                {sortedSolutions.length} solutions found
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="text-4xl mb-2">{solution.image}</div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(solution.badge)}`}>
                            {solution.badge}
                          </span>
                        </div>
                        <CardTitle className="text-lg text-white mb-2">{solution.name}</CardTitle>
                        <CardDescription className="text-gray-300 text-sm line-clamp-2">
                          {solution.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-400">{solution.price}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-300">{solution.rating}</span>
                              <span className="text-xs text-gray-400">({solution.reviews})</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{solution.users}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{solution.deployment}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">Vendor:</span>
                            <span className="text-sm text-blue-400">{solution.vendor}</span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {solution.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs">
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <div className="text-6xl flex-shrink-0">{solution.image}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-xl font-bold text-white">{solution.name}</h3>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(solution.badge)}`}>
                                    {solution.badge}
                                  </span>
                                </div>
                                <p className="text-gray-300 mb-3">{solution.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-400 mb-1">{solution.price}</div>
                                <div className="flex items-center gap-1 justify-end">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-gray-300">{solution.rating}</span>
                                  <span className="text-xs text-gray-400">({solution.reviews})</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{solution.users} users</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{solution.deployment}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{solution.support}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{solution.vendor}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {solution.features.map((feature, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>

                            <div className="flex gap-3">
                              <Button className="bg-blue-600 hover:bg-blue-700">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                                <Heart className="w-4 h-4 mr-2" />
                                Save
                              </Button>
                              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Contact Vendor
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Solution?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our marketplace connects you with the best technology vendors and solutions. 
                Get expert guidance to make the right choice for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Store className="w-5 h-5 mr-2" />
                  Browse All Solutions
                </Button>
                <Button variant="outline" className="px-8 py-3 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Award className="w-5 h-5 mr-2" />
                  Become a Vendor
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Marketplace;