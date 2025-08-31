import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase,
  Cpu,
  HardDrive,
  Network,
  Zap
} from 'lucide-react';
<<<<<<< HEAD

const Equipment: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const equipmentItems = [
=======
export default function Equipment() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedEquipment, setExpandedEquipment] = useState<string | null>(null);
  const categories = [
    { id: 'all', name: 'All Categories', count: 38 },
    { id: 'servers', name: 'Servers & Storage', count: 12 },
    { id: 'networking', name: 'Networking', count: 8 },
    { id: 'workstations', name: 'Workstations', count: 6 },
    { id: 'peripherals', name: 'Peripherals', count: 5 },
    { id: 'mobile', name: 'Mobile Devices', count: 4 },
    { id: 'specialized', name: 'Specialized Equipment', count: 3 }
  ];
  const conditions = [
    { id: 'all', name: 'All Conditions', count: 38 },
    { id: 'new', name: 'New', count: 15 },
    { id: 'refurbished', name: 'Refurbished', count: 12 },
    { id: 'used', name: 'Used - Excellent', count: 8 },
    { id: 'good', name: 'Used - Good', count: 3 }
  ];
  const equipmentInventory = [
    // Servers & Storage
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      id: 1,
      name: 'High-Performance Server',
      category: 'Servers',
      location: 'Data Center A',
      status: 'Available',
      rating: 4.8,
      price: '$2,500/month',
      description: 'Enterprise-grade server with latest Intel processors'
    },
    {
      id: 2,
      name: 'Network Switch',
      category: 'Networking',
      location: 'Data Center B',
      status: 'In Use',
      rating: 4.6,
      price: '$800/month',
      description: '48-port gigabit network switch with PoE support'
    },
    {
      id: 3,
      name: 'Storage Array',
      category: 'Storage',
      location: 'Data Center A',
      status: 'Available',
      rating: 4.9,
      price: '$1,200/month',
      description: 'High-capacity storage array with RAID protection'
    }
  ];
<<<<<<< HEAD

  const filteredItems = equipmentItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Equipment & Hardware</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access to enterprise-grade hardware, servers, networking equipment, and specialized devices for your technology needs.
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setView('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  view === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-3 rounded-lg transition-colors ${
                  view === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Equipment Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filteredItems.length > 0 ? (
            <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredItems.map((item, index) => (
=======
  const toggleEquipmentExpansion = (equipmentId: string) => {
    setExpandedEquipment(expandedEquipment === equipmentId ? null : equipmentId);
  };
  const filteredEquipment = equipmentInventory.filter(equipment => {
    if (selectedCategory !== 'all' && equipment.category !== selectedCategory) return false;
    if (selectedCondition !== 'all' && equipment.condition !== selectedCondition) return false;
    if (searchQuery) {
      return equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             equipment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             equipment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'servers': return 'bg-purple-500/20 text-purple-400';
      case 'networking': return 'bg-blue-500/20 text-blue-400';
      case 'workstations': return 'bg-green-500/20 text-green-400';
      case 'peripherals': return 'bg-orange-500/20 text-orange-400';
      case 'mobile': return 'bg-pink-500/20 text-pink-400';
      case 'specialized': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'bg-green-500/20 text-green-400';
      case 'refurbished': return 'bg-blue-500/20 text-blue-400';
      case 'used': return 'bg-yellow-500/20 text-yellow-400';
      case 'good': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Technology Equipment - Zion Tech Group"
        description="Browse our comprehensive inventory of enterprise-grade technology equipment, servers, networking gear, and professional workstations."
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Server className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent">Equipment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade servers, networking equipment, workstations, and peripherals. 
              Quality technology solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search equipment by name, specs, or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  />
                </div>
              </div>
              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              {/* Condition Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  {conditions.map((condition) => (
                    <option key={condition.id} value={condition.id}>
                      {condition.name} ({condition.count})
                    </option>
                  ))}
                </select>
              </div>
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-purple-400/20 text-purple-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-purple-400/20 text-purple-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Equipment</h2>
            <p className="text-xl text-gray-300">Premium technology solutions with exceptional value</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipmentInventory.filter(e => e.featured).map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                        {categories.find(c => c.id === equipment.category)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                        {conditions.find(con => con.id === equipment.condition)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                        <equipment.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                        {equipment.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {equipment.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features</div>
                      <div className="flex flex-wrap gap-2">
                        {equipment.features.slice(0, 4).map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Price</div>
                        <div className="text-purple-400 font-medium">{equipment.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Rating</div>
                        <div className="flex items-center gap-1">
                          {renderStars(equipment.rating)}
                          <span className="text-gray-300 text-xs">({equipment.reviews})</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Warranty</div>
                        <div className="text-green-400 font-medium">{equipment.warranty}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Location</div>
                        <div className="text-blue-400 font-medium text-sm">{equipment.location}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleEquipmentExpansion(equipment.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      {expandedEquipment === equipment.id ? 'Show Less' : 'View Full Specs'}
                    </button>
                    {expandedEquipment === equipment.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Technical Specifications:</h4>
                          <div className="space-y-2 text-sm">
                            {Object.entries(equipment.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-400 capitalize">{key}:</span>
                                <span className="text-gray-300">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">All Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {equipment.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <span className="text-gray-400">Original Price:</span>
                            <span className="text-gray-500 line-through ml-2">{equipment.originalPrice}</span>
                          </div>
                          <div className="text-green-400 font-medium">
                            Save {equipment.discount}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* All Equipment */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Complete Equipment Inventory</h2>
            <p className="text-xl text-gray-300">
              Browse our full catalog of technology solutions
            </p>
          </motion.div>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((equipment, index) => (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        {item.category === 'Servers' && <Server className="w-6 h-6 text-blue-400" />}
                        {item.category === 'Networking' && <Network className="w-6 h-6 text-green-400" />}
                        {item.category === 'Storage' && <HardDrive className="w-6 h-6 text-purple-400" />}
                      </div>
<<<<<<< HEAD
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{item.rating}</span>
=======
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                          <equipment.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                          {equipment.name}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {equipment.description}
                      </p>
                      <div className="mb-3">
                        <div className="text-xs text-gray-400 mb-1">Features</div>
                        <div className="flex flex-wrap gap-1">
                          {equipment.features.slice(0, 3).map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <div className="text-gray-400">Price</div>
                          <div className="text-purple-400 font-medium">{equipment.price}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Rating</div>
                          <div className="flex items-center gap-1">
                            {renderStars(equipment.rating)}
                          </div>
                        </div>
                      </div>
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm">
                        View Details
                      </button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{item.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{item.status}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{item.price}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Request Access
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
<<<<<<< HEAD
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">No Equipment Found</h3>
              <p className="text-gray-400 mb-6">
                No equipment matches your search criteria. Try adjusting your search terms.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </motion.div>
      </div>
=======
            <div className="space-y-4">
              {filteredEquipment.map((equipment, index) => (
                <motion.div
                  key={equipment.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                          <equipment.icon className="w-10 h-10 text-purple-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                            {categories.find(c => c.id === equipment.category)?.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                            {conditions.find(con => con.id === equipment.condition)?.name}
                          </span>
                          {equipment.featured && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200 mb-2">
                          {equipment.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {equipment.description}
                        </p>
                        <div className="mb-3">
                          <div className="text-sm text-gray-400 mb-1">Key Features</div>
                          <div className="flex flex-wrap gap-2">
                            {equipment.features.slice(0, 5).map((feature, featureIndex) => (
                              <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <div className="text-gray-400">Price</div>
                            <div className="text-purple-400 font-medium">{equipment.price}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Rating</div>
                            <div className="flex items-center gap-1">
                              {renderStars(equipment.rating)}
                              <span className="text-gray-300 text-xs">({equipment.reviews})</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Warranty</div>
                            <div className="text-green-400 font-medium text-sm">{equipment.warranty}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Location</div>
                            <div className="text-blue-400 font-medium text-sm">{equipment.location}</div>
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect technology solutions 
              or customize equipment to meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Quote
              </button>
              <a
                href="mailto:equipment@ziontechgroup.com"
                className="px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                Contact Equipment Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    </div>
  );
};

export default Equipment;