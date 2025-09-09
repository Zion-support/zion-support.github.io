import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  SortAsc, 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart,
  ArrowRight,
  Package,
  Zap,
  Shield,
  Cpu,
  Brain,
  Network,
  Radio
} from 'lucide-react';

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  // Mock equipment data
  const mockEquipment = [
    {
      id: 1,
      title: "High-Performance Server Rack",
      category: "Servers",
      brand: "Dell",
      price: 2499,
      rating: 4.8,
      reviewCount: 127,
      availability: "In Stock",
      description: "Enterprise-grade server rack with advanced cooling and cable management",
      image: "/images/equipment/server-rack.jpg",
      features: ["19-inch rack", "42U height", "Advanced cooling", "Cable management"]
    },
    {
      id: 2,
      title: "Quantum Computing Workstation",
      category: "Quantum",
      brand: "IBM",
      price: 15000,
      rating: 4.9,
      reviewCount: 89,
      availability: "Limited Stock",
      description: "Next-generation quantum computing workstation for research and development",
      image: "/images/equipment/quantum-workstation.jpg",
      features: ["Quantum processor", "Advanced algorithms", "Research tools", "Cloud integration"]
    },
    {
      id: 3,
      title: "AI Training Cluster",
      category: "AI Hardware",
      brand: "NVIDIA",
      price: 8999,
      rating: 4.7,
      reviewCount: 203,
      availability: "In Stock",
      description: "High-performance GPU cluster for machine learning and AI training",
      image: "/images/equipment/ai-cluster.jpg",
      features: ["8x RTX 4090", "NVLink", "Advanced cooling", "Training software"]
    },
    {
      id: 4,
      title: "5G Network Equipment",
      category: "Networking",
      brand: "Cisco",
      price: 3499,
      rating: 4.6,
      reviewCount: 156,
      availability: "In Stock",
      description: "Complete 5G network infrastructure equipment for enterprise deployment",
      image: "/images/equipment/5g-equipment.jpg",
      features: ["5G NR", "Beamforming", "Network slicing", "Security protocols"]
    },
    {
      id: 5,
      title: "Blockchain Mining Rig",
      category: "Blockchain",
      brand: "Bitmain",
      price: 5999,
      rating: 4.5,
      reviewCount: 98,
      availability: "Out of Stock",
      description: "High-efficiency cryptocurrency mining equipment with advanced cooling",
      image: "/images/equipment/mining-rig.jpg",
      features: ["ASIC chips", "Advanced cooling", "Power efficiency", "Mining software"]
    },
    {
      id: 6,
      title: "IoT Gateway Device",
      category: "IoT",
      brand: "Intel",
      price: 899,
      rating: 4.4,
      reviewCount: 234,
      availability: "In Stock",
      description: "Smart IoT gateway for industrial and commercial applications",
      image: "/images/equipment/iot-gateway.jpg",
      features: ["Edge computing", "Multiple protocols", "Security", "Cloud integration"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Package className="w-4 h-4" /> },
    { id: 'servers', name: 'Servers', icon: <Cpu className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Hardware', icon: <Brain className="w-4 h-4" /> },
    { id: 'networking', name: 'Networking', icon: <Network className="w-4 h-4" /> },
    { id: 'blockchain', name: 'Blockchain', icon: <Shield className="w-4 h-4" /> },
    { id: 'iot', name: 'IoT Devices', icon: <Radio className="w-4 h-4" /> }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setEquipment(mockEquipment);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           item.category.toLowerCase() === selectedCategory;
    
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'servers':
        return <Cpu className="w-5 h-5" />;
      case 'quantum':
        return <Zap className="w-5 h-5" />;
      case 'ai hardware':
        return <Brain className="w-5 h-5" />;
      case 'networking':
        return <Network className="w-5 h-5" />;
      case 'blockchain':
        return <Shield className="w-5 h-5" />;
      case 'iot':
        return <Radio className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-zion-cyan text-lg">Loading Equipment...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Equipment</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge technology equipment from leading manufacturers. 
            From servers to quantum computing, find the tools you need to power innovation.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search equipment by name, brand, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zinc-700/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-zion-cyan text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-700/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-zion-cyan text-sm font-medium mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-700/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-zion-cyan text-sm font-medium mb-2">Price Range</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 bg-zinc-700/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                  />
                  <span className="text-zion-slate-light">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 bg-zinc-700/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                  />
                </div>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-zion-slate-light">
                  <span className="text-zion-cyan font-medium">{sortedEquipment.length}</span> items found
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {sortedEquipment.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Equipment Found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {sortedEquipment.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Equipment Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <div className="text-zion-cyan text-4xl">
                      {getCategoryIcon(item.category)}
                    </div>
                  </div>

                  {/* Equipment Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-xl mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-zion-slate-light text-sm mb-2">{item.brand}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-white text-sm font-medium">{item.rating}</span>
                            <span className="text-zion-slate-light text-sm ml-1">({item.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">${item.price.toLocaleString()}</div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.availability === 'In Stock' 
                            ? 'bg-green-500/20 text-green-400' 
                            : item.availability === 'Limited Stock'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {item.availability}
                        </div>
                      </div>
                    </div>

                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-zion-cyan font-medium text-sm mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-zinc-700/50 rounded text-xs text-zion-slate-light">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/equipment/${item.id}`}
                        className="flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                      >
                        View Details <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform text-sm">
                          <ShoppingCart className="w-4 h-4 mr-2 inline" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-4xl mx-auto">
            <Package className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Need Custom Equipment?</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              Can't find exactly what you're looking for? Our team can help you source custom equipment 
              or recommend alternatives that meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform inline-flex items-center"
              >
                Contact Sales Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/request-quote" 
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
