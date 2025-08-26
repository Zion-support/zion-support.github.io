import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server,
  Cpu,
  HardDrive,
  Monitor,
  Network,
  Smartphone,
  Tablet,
  Laptop,
  Printer,
  Router,
  Switch,
  Cable,
  Wifi,
  Bluetooth,
  Usb,
  Search,
  Filter,
  Grid,
  List,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Database,
  Key,
  Eye,
  Lock,
  Users,
  Globe,
  FileText,
  ChevronRight
} from 'lucide-react';

export default function Equipment() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState('all');

  const equipmentCategories = [
    { id: 'all', name: 'All Equipment', count: 156 },
    { id: 'servers', name: 'Servers', count: 23 },
    { id: 'networking', name: 'Networking', count: 34 },
    { id: 'storage', name: 'Storage', count: 18 },
    { id: 'workstations', name: 'Workstations', count: 28 },
    { id: 'mobile', name: 'Mobile Devices', count: 15 },
    { id: 'peripherals', name: 'Peripherals', count: 38 }
  ];

  const equipmentItems = [
    {
      id: 1,
      name: "Dell PowerEdge R750 Server",
      category: "servers",
      description: "High-performance 2U rack server with Intel Xeon processors",
      price: 2499,
      rating: 4.8,
      reviews: 127,
      image: "/images/equipment/dell-r750.jpg",
      specs: {
        processor: "Intel Xeon Silver 4314",
        memory: "64GB DDR4",
        storage: "2TB NVMe SSD",
        network: "10GbE"
      },
      features: [
        "Enterprise-grade reliability",
        "24/7 support included",
        "3-year warranty",
        "Remote management"
      ],
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Cisco Catalyst 9300 Switch",
      category: "networking",
      description: "Next-generation enterprise switch with advanced security",
      price: 1899,
      rating: 4.7,
      reviews: 89,
      image: "/images/equipment/cisco-9300.jpg",
      specs: {
        ports: "48 PoE+ ports",
        speed: "1Gbps/10Gbps",
        power: "740W PoE budget",
        security: "TrustSec, MACsec"
      },
      features: [
        "PoE+ support",
        "Advanced security features",
        "Cisco DNA ready",
        "5-year warranty"
      ],
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: "HP EliteDesk 800 G5",
      category: "workstations",
      description: "Professional desktop workstation for demanding workloads",
      price: 899,
      rating: 4.6,
      reviews: 203,
      image: "/images/equipment/hp-elitedesk.jpg",
      specs: {
        processor: "Intel Core i7-9700",
        memory: "16GB DDR4",
        storage: "512GB SSD",
        graphics: "Intel UHD 630"
      },
      features: [
        "Business-class performance",
        "Expandable design",
        "Security features",
        "3-year warranty"
      ],
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: "Synology DS1821+ NAS",
      category: "storage",
      description: "8-bay network attached storage for business use",
      price: 699,
      rating: 4.9,
      reviews: 156,
      image: "/images/equipment/synology-ds1821.jpg",
      specs: {
        bays: "8 drive bays",
        processor: "AMD Ryzen V1500B",
        memory: "4GB DDR4",
        network: "4x 1GbE"
      },
      features: [
        "High capacity storage",
        "Advanced RAID support",
        "Cloud integration",
        "Mobile app support"
      ],
      inStock: true,
      featured: true
    },
    {
      id: 5,
      name: "Apple MacBook Pro 16\"",
      category: "mobile",
      description: "Professional laptop with M2 Pro chip",
      price: 2499,
      rating: 4.9,
      reviews: 312,
      image: "/images/equipment/macbook-pro-16.jpg",
      specs: {
        processor: "Apple M2 Pro",
        memory: "16GB unified memory",
        storage: "512GB SSD",
        display: "16\" Liquid Retina XDR"
      },
      features: [
        "M2 Pro performance",
        "Long battery life",
        "Studio-quality display",
        "1-year warranty"
      ],
      inStock: false,
      featured: true
    },
    {
      id: 6,
      name: "Epson WorkForce Pro WF-7840",
      category: "peripherals",
      description: "High-speed business inkjet printer with scanning",
      price: 399,
      rating: 4.5,
      reviews: 78,
      image: "/images/equipment/epson-wf7840.jpg",
      specs: {
        printSpeed: "25 ppm color, 35 ppm black",
        resolution: "4800 x 2400 dpi",
        connectivity: "Wi-Fi, Ethernet, USB",
        paperSize: "Up to 11\" x 17\""
      },
      features: [
        "High-speed printing",
        "Wireless connectivity",
        "Duplex printing",
        "1-year warranty"
      ],
      inStock: true,
      featured: false
    }
  ];

  const filteredEquipment = equipmentItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = item.price < 500;
    else if (priceRange === 'medium') matchesPrice = item.price >= 500 && item.price < 1500;
    else if (priceRange === 'high') matchesPrice = item.price >= 1500;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getPriceRangeLabel = (range) => {
    switch (range) {
      case 'low': return 'Under $500';
      case 'medium': return '$500 - $1,500';
      case 'high': return 'Over $1,500';
      default: return 'All Prices';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full">
                <Server className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Equipment</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of enterprise-grade technology equipment, servers, networking gear, and professional workstations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search equipment, servers, networking gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {equipmentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center gap-4">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-zinc-700/50 text-white border border-purple-400/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $500</option>
                <option value="medium">$500 - $1,500</option>
                <option value="high">Over $1,500</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-zinc-700/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid/List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredEquipment.length === 0 ? (
            <div className="text-center py-16">
              <Server className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No equipment found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all categories</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden hover:border-purple-400/50 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image Section */}
                  <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <Server className="w-16 h-16 text-purple-400" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                        <p className="text-zion-slate-light text-sm mb-3">{item.description}</p>
                      </div>
                      {item.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-white text-sm">{item.rating}</span>
                      </div>
                      <span className="text-zion-slate-light text-sm">({item.reviews} reviews)</span>
                    </div>

                    {/* Key Specs */}
                    <div className="mb-4">
                      <h4 className="text-zion-cyan font-semibold text-sm mb-2">Key Specifications:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(item.specs).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-zion-slate-light capitalize">{key}:</span>
                            <span className="text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-zion-cyan font-semibold text-sm mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {item.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-zion-slate-light text-xs flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">${item.price.toLocaleString()}</div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${item.inStock ? 'text-green-500' : 'text-red-500'}`}>
                            {item.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                          Get Quote
                        </button>
                        <button className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors text-sm">
                          Details
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

      {/* Categories Overview */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Equipment Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.filter(cat => cat.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-zinc-700/50 rounded-lg p-6 text-center hover:bg-zinc-600/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{category.count} items available</p>
                <ChevronRight className="w-5 h-5 text-purple-400 mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team can help you design and configure custom equipment solutions tailored to your specific business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Custom Quote
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}