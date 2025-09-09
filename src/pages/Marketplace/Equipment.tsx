import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Search, 
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Globe,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
  HardDrive,
  Monitor,
  Network,
  Printer
} from 'lucide-react';

const Equipment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Equipment', icon: Server },
    { id: 'servers', name: 'Servers', icon: Server },
    { id: 'storage', name: 'Storage', icon: HardDrive },
    { id: 'networking', name: 'Networking', icon: Network },
    { id: 'workstations', name: 'Workstations', icon: Monitor },
    { id: 'peripherals', name: 'Peripherals', icon: Printer },
    { id: 'mobile', name: 'Mobile Devices', icon: Smartphone },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const equipment = [
    {
      id: 1,
      name: 'Dell PowerEdge R750 Server',
      category: 'servers',
      description: 'High-performance dual-socket server with Intel Xeon processors.',
      price: 2499.99,
      rating: 4.8,
      reviews: 23,
      location: 'Austin, TX',
      condition: 'New',
      specs: ['Intel Xeon Silver 4314', '64GB RAM', '2TB SSD', 'Dual Power Supply'],
      vendor: 'Zion Hardware',
      badge: 'Best Seller',
      warranty: '3 Years'
    },
    {
      id: 2,
      name: 'NetApp AFF A400 Storage Array',
      category: 'storage',
      description: 'Enterprise-grade all-flash storage array with high performance.',
      price: 15999.99,
      rating: 4.9,
      reviews: 15,
      location: 'San Jose, CA',
      condition: 'Refurbished',
      specs: ['100TB Capacity', 'NVMe Flash', 'Dual Controllers', '24/7 Support'],
      vendor: 'Zion Storage',
      badge: 'Premium',
      warranty: '1 Year'
    },
    {
      id: 3,
      name: 'Cisco Catalyst 9300 Switch',
      category: 'networking',
      description: 'Enterprise-grade network switch with advanced features.',
      price: 899.99,
      rating: 4.7,
      reviews: 31,
      location: 'Raleigh, NC',
      condition: 'New',
      specs: ['48-Port PoE+', 'Layer 3 Switching', 'StackWise Technology', 'IOS-XE'],
      vendor: 'Zion Networks',
      badge: 'Popular',
      warranty: 'Lifetime'
    },
    {
      id: 4,
      name: 'HP Z8 G4 Workstation',
      category: 'workstations',
      description: 'Professional workstation for demanding applications.',
      price: 3499.99,
      rating: 4.6,
      reviews: 18,
      location: 'Houston, TX',
      condition: 'New',
      specs: ['Intel Xeon W-3335', '128GB RAM', 'RTX A5000 GPU', '2TB NVMe'],
      vendor: 'Zion Workstations',
      badge: 'Featured',
      warranty: '3 Years'
    },
    {
      id: 5,
      name: 'Fortinet FortiGate 600E',
      category: 'security',
      description: 'Next-generation firewall with advanced security features.',
      price: 1299.99,
      rating: 4.8,
      reviews: 27,
      location: 'Sunnyvale, CA',
      condition: 'New',
      specs: ['10Gbps Throughput', 'IPS/IDS', 'SSL Inspection', 'SD-WAN Ready'],
      vendor: 'Zion Security',
      badge: 'Certified',
      warranty: '1 Year'
    },
    {
      id: 6,
      name: 'Apple MacBook Pro 16"',
      category: 'mobile',
      description: 'Professional laptop with M2 Pro chip and high performance.',
      price: 2499.99,
      rating: 4.9,
      reviews: 42,
      location: 'Cupertino, CA',
      condition: 'New',
      specs: ['M2 Pro Chip', '32GB RAM', '1TB SSD', '16" Retina Display'],
      vendor: 'Zion Mobile',
      badge: 'Latest',
      warranty: '1 Year'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600/20 rounded-full">
              <Server className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Equipment
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              {" "}Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Premium IT equipment and hardware from leading manufacturers. 
            Quality, reliability, and competitive pricing on enterprise-grade technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for equipment, brands, or specifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 border-green-500 text-white'
                        : 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </button>
                ))}
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
          {filteredEquipment.length === 0 ? (
            <div className="text-center py-12">
              <Server className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No equipment found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-green-500 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* Equipment Image */}
                  <div className="relative h-48 bg-slate-700 flex items-center justify-center">
                    <Server className="h-16 w-16 text-gray-500" />
                    {item.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-semibold bg-green-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Equipment Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(item.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {item.rating} ({item.reviews} reviews)
                      </span>
                    </div>

                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Specs:</h4>
                      <ul className="space-y-1">
                        {item.specs.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase className="h-4 w-4" />
                        {item.condition}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Shield className="h-4 w-4" />
                        {item.warranty}
                      </div>
                      <div className="flex items-center gap-2 text-green-400 font-semibold">
                        <DollarSign className="h-4 w-4" />
                        ${item.price.toLocaleString()}
                      </div>
                    </div>

                    {/* Vendor */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-400">by {item.vendor}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 hover:border-green-500 hover:text-green-400 rounded-lg transition-colors duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Need Custom Equipment?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team can source custom equipment 
              or help you find the perfect solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Request Quote
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Custom Configuration
              </a>
              <a
                href="/marketplace"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <ArrowRight className="inline mr-2 h-5 w-5" />
                Browse All Equipment
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Equipment;