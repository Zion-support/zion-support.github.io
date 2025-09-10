import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  Download, 
  Play, 
  BookOpen, 
  Code, 
  Cloud, 
  Shield, 
  Bot, 
  Database, 
  Server, 
  Monitor, 
  Smartphone, 
  Package, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  Settings,
  Palette,
  Cpu,
  HardDrive,
  Network,
  Lightbulb,
  FileText,
  Video,
  Headphones,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Tag,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  HelpCircle,
  Info,
  AlertTriangle,
  X,
  Plus,
  Minus,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  Wifi,
  WifiOff,
  Signal,
  SignalOff,
  Bluetooth,
  BluetoothOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy
} from 'lucide-react';

export default function Marketplace() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('popularity');
  const [cart, setCart] = useState<Array<{id: string, quantity: number}>>([]);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Store, count: 1250 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Bot, count: 245 },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud, count: 189 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 156 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 203 },
    { id: 'development', name: 'Development Tools', icon: Code, count: 312 },
    { id: 'iot', name: 'IoT & Hardware', icon: Cpu, count: 98 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: 167 }
  ];

  const products = [
    {
      id: '1',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool with multi-language support and SEO optimization',
      category: 'ai-ml',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1247,
      downloads: 15420,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice consistency', 'API access'],
      tags: ['AI', 'Content Creation', 'SEO', 'Marketing'],
      vendor: 'Zion Tech Solutions',
      vendorRating: 4.9,
      vendorVerified: true
    },
    {
      id: '2',
      name: 'Cloud Migration Suite',
      description: 'Comprehensive cloud migration toolkit with automated workflows and monitoring',
      category: 'cloud',
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviews: 892,
      downloads: 8765,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      features: ['Automated workflows', 'Real-time monitoring', 'Multi-cloud support', 'Security compliance'],
      tags: ['Cloud', 'Migration', 'DevOps', 'Automation'],
      vendor: 'CloudTech Pro',
      vendorRating: 4.8,
      vendorVerified: true
    },
    {
      id: '3',
      name: 'Cybersecurity Audit Tool',
      description: 'Enterprise-grade security assessment and compliance monitoring platform',
      category: 'cybersecurity',
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 567,
      downloads: 4321,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      features: ['Vulnerability scanning', 'Compliance reporting', 'Threat intelligence', 'Incident response'],
      tags: ['Security', 'Compliance', 'Audit', 'Enterprise'],
      vendor: 'SecureNet Systems',
      vendorRating: 4.9,
      vendorVerified: true
    },
    {
      id: '4',
      name: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence platform with customizable metrics and reporting',
      category: 'data',
      price: 449,
      originalPrice: 599,
      rating: 4.6,
      reviews: 734,
      downloads: 9876,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      features: ['Real-time analytics', 'Custom dashboards', 'Automated reporting', 'Mobile responsive'],
      tags: ['Analytics', 'BI', 'Dashboard', 'Reporting'],
      vendor: 'DataViz Solutions',
      vendorRating: 4.7,
      vendorVerified: true
    },
    {
      id: '5',
      name: 'DevOps Pipeline Manager',
      description: 'Streamlined CI/CD pipeline management with automated testing and deployment',
      category: 'development',
      price: 349,
      originalPrice: 449,
      rating: 4.8,
      reviews: 1023,
      downloads: 12345,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      features: ['CI/CD automation', 'Testing frameworks', 'Deployment tools', 'Monitoring'],
      tags: ['DevOps', 'CI/CD', 'Automation', 'Testing'],
      vendor: 'DevFlow Tech',
      vendorRating: 4.8,
      vendorVerified: true
    },
    {
      id: '6',
      name: 'IoT Device Manager',
      description: 'Centralized IoT device management and monitoring platform',
      category: 'iot',
      price: 199,
      originalPrice: 299,
      rating: 4.5,
      reviews: 456,
      downloads: 6543,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      features: ['Device monitoring', 'Remote management', 'Data collection', 'Alert system'],
      tags: ['IoT', 'Device Management', 'Monitoring', 'Automation'],
      vendor: 'IoT Solutions Inc',
      vendorRating: 4.6,
      vendorVerified: true
    }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'newest':
        return a.id.localeCompare(b.id);
      default:
        return b.downloads - a.downloads; // popularity
    }
  });

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover and purchase cutting-edge technology solutions, tools, and services from leading vendors in our curated marketplace."
        keywords="technology marketplace, software tools, AI solutions, cloud services, cybersecurity tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                <Store className="w-4 h-4 mr-2" />
                Technology Marketplace
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Discover Amazing Tech Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Browse our curated collection of cutting-edge technology tools, services, and solutions from verified vendors worldwide.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for tools, services, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="downloads">Most Downloaded</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.originalPrice > product.price && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-400">{product.category}</span>
                          {product.vendorVerified && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <button className="text-slate-400 hover:text-red-400 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-slate-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{product.rating}</span>
                          <span className="text-slate-400 text-sm">({product.reviews})</span>
                        </div>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{product.downloads.toLocaleString()} downloads</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        {product.originalPrice > product.price ? (
                          <>
                            <span className="text-2xl font-bold text-white">${product.price}</span>
                            <span className="text-slate-400 line-through">${product.originalPrice}</span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-white">${product.price}</span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToCart(product.id)}
                          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                        <button className="p-2 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <div className="flex gap-6">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-slate-400">{product.category}</span>
                              {product.vendorVerified && (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-slate-300 text-sm mb-4">{product.description}</p>
                          </div>
                          
                          <div className="text-right">
                            {product.originalPrice > product.price ? (
                              <>
                                <div className="text-2xl font-bold text-white">${product.price}</div>
                                <div className="text-slate-400 line-through">${product.originalPrice}</div>
                              </>
                            ) : (
                              <div className="text-2xl font-bold text-white">${product.price}</div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white font-medium">{product.rating}</span>
                            <span className="text-slate-400 text-sm">({product.reviews})</span>
                          </div>
                          <span className="text-slate-400 text-sm">•</span>
                          <span className="text-slate-400 text-sm">{product.downloads.toLocaleString()} downloads</span>
                          <span className="text-slate-400 text-sm">•</span>
                          <span className="text-slate-400 text-sm">by {product.vendor}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => addToCart(product.id)}
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </button>
                          <button className="p-2 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Shopping Cart Sidebar */}
        {cart.length > 0 && (
          <div className="fixed right-4 top-20 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50">
            <div className="p-4 border-b border-slate-700">
              <h3 className="text-lg font-bold text-white">Shopping Cart</h3>
            </div>
            
            <div className="p-4 max-h-96 overflow-y-auto">
              {cart.map(item => {
                const product = products.find(p => p.id === item.id);
                if (!product) return null;
                
                return (
                  <div key={item.id} className="flex items-center gap-3 mb-4 p-3 bg-slate-700 rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{product.name}</h4>
                      <div className="text-slate-400 text-sm">${product.price}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-slate-600 text-white rounded flex items-center justify-center hover:bg-slate-500"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-slate-600 text-white rounded flex items-center justify-center hover:bg-slate-500"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
            
            <div className="p-4 border-t border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">Total:</span>
                <span className="text-2xl font-bold text-white">${cartTotal}</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
