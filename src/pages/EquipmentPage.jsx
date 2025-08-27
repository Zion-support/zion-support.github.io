import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Filter, 
  SortAsc, 
  Star, 
  ShoppingCart,
  Package,
  Truck,
  Clock,
  DollarSign
} from 'lucide-react';

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);

  const categories = [
    'Computers & Laptops',
    'Networking Equipment',
    'Security Systems',
    'Office Equipment',
    'Industrial Machinery',
    'Medical Equipment',
    'Audio/Visual Equipment',
    'Testing Equipment'
  ];

  const brandOptions = [
    'Dell', 'HP', 'Cisco', 'Samsung', 'Apple', 'Lenovo', 'IBM', 'Microsoft'
  ];

  const availabilityOptions = [
    'In Stock', 'Low Stock', 'Out of Stock', 'Pre-order'
  ];

  // Mock equipment data
  const mockEquipment = [
    {
      id: 1,
      title: 'High-Performance Workstation',
      category: 'Computers & Laptops',
      brand: 'Dell',
      price: 2499,
      rating: 4.8,
      reviewCount: 127,
      availability: 'In Stock',
      description: 'Professional-grade workstation with latest Intel processor and NVIDIA graphics.'
    },
    {
      id: 2,
      title: 'Enterprise Network Switch',
      category: 'Networking Equipment',
      brand: 'Cisco',
      price: 1899,
      rating: 4.9,
      reviewCount: 89,
      availability: 'In Stock',
      description: '48-port managed switch with advanced security features and VLAN support.'
    },
    {
      id: 3,
      title: 'Surveillance Camera System',
      category: 'Security Systems',
      brand: 'Samsung',
      price: 899,
      rating: 4.6,
      reviewCount: 203,
      availability: 'Low Stock',
      description: '4K security camera system with night vision and motion detection.'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEquipment(mockEquipment);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredEquipment = equipment.filter(item => {
    if (filterCategory && item.category !== filterCategory) return false;
    if (filterBrand && item.brand !== filterBrand) return false;
    if (filterAvailability && item.availability !== filterAvailability) return false;
    if (item.rating < minRating) return false;
    if (item.price < priceRange[0] || item.price > priceRange[1]) return false;
    return true;
  });

  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.id - a.id; // newest first
    }
  });

  const handleViewDetails = (equipmentId) => {
    console.log('View details for equipment:', equipmentId);
    // Navigate to equipment details page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Professional
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Equipment
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            High-quality professional equipment for businesses and organizations. 
            From computers and networking to security and industrial machinery.
          </motion.p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
          >
            <div className="flex flex-wrap gap-4 items-center">
              {loading && (
                <div className="absolute right-6 top-6">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-cyan-400" />
                <select 
                  value={filterCategory} 
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-slate-700 border border-slate-600 px-3 py-2 rounded text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4 text-cyan-400" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 border border-slate-600 px-3 py-2 rounded text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-sm">$</span>
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-20 bg-slate-700 border border-slate-600 px-2 py-1 rounded text-white focus:outline-none focus:border-cyan-500"
                />
                <span className="text-gray-400">-</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 bg-slate-700 border border-slate-600 px-2 py-1 rounded text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-sm">Rating ≥</span>
                <select 
                  value={minRating} 
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="bg-slate-700 border border-slate-600 px-2 py-1 rounded text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={0}>Any</option>
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
              </div>

              <button 
                onClick={() => setShowRecommended(!showRecommended)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  showRecommended 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <Star className="h-4 w-4 mr-2 inline" />
                {showRecommended ? "All Equipment" : "Recommended"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-slate-800/50 rounded-2xl p-6 animate-pulse">
                  <div className="h-48 bg-slate-700 rounded-lg mb-4"></div>
                  <div className="h-6 bg-slate-700 rounded mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : sortedEquipment.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="w-16 h-16 text-slate-400" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-white truncate mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded">
                          {item.brand}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-cyan-400">
                        ${item.price?.toLocaleString()}
                      </div>
                      <span className={`px-2 py-1 text-xs rounded ${
                        item.availability === "In Stock" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-orange-500/20 text-orange-400"
                      }`}>
                        {item.availability}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-white">
                        {item.rating?.toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({item.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      {item.category}
                    </span>
                    <button 
                      onClick={() => handleViewDetails(item.id)}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No equipment found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
