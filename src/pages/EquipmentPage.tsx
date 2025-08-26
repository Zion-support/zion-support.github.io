import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  MapPin, 
  ArrowRight,
  Server,
  Network,
  Shield,
  Cloud,
  Database,
  Code,
  Users,
  Building,
  Factory,
  Store,
  Car,
  Plane,
  Ship,
  Home,
  Hospital,
  GraduationCap,
  Calendar,
  FileText,
  BarChart3,
  MessageSquare,
  Camera,
  Video,
  Music,
  BookOpen,
  Target,
  TrendingUp,
  PieChart,
  Activity,
  Wrench,
  Laptop,
  Smartphone,
  Router,
  HardDrive,
  Lock,
  Key,
  EyeOff,
  ShieldCheck,
  Globe2,
  Wifi,
  Bluetooth,
  Satellite,
  Antenna,
  CircuitBoard,
  RefreshCw,
  Download,
  Upload,
  Share2,
  Link as LinkIcon,
  Unlink,
  Cog,
  Hammer,
  Paintbrush,
  Palette,
  Brush,
  PenTool,
  Layers,
  Grid,
  Layout,
  Monitor,
  Projector,
  Printer,
  Archive,
  Folder,
  File
} from 'lucide-react';

// Mock equipment data
const equipmentData = [
  {
    id: 1,
    name: "Cisco Catalyst 9300 Switch",
    category: "Networking",
    price: 2500,
    originalPrice: 3200,
    condition: "Excellent",
    location: "Middletown, DE",
    rating: 4.8,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Enterprise-grade network switch with 48 PoE+ ports and advanced security features."
  },
  {
    id: 2,
    name: "Dell PowerEdge R740 Server",
    category: "Servers",
    price: 4500,
    originalPrice: 5800,
    condition: "Like New",
    location: "Middletown, DE",
    rating: 4.9,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    description: "High-performance dual-socket server with enterprise-grade reliability and support."
  },
  {
    id: 3,
    name: "HP EliteDesk 800 G5",
    category: "Workstations",
    price: 800,
    originalPrice: 1200,
    condition: "Good",
    location: "Middletown, DE",
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    description: "Professional workstation with Intel Core i7 processor and 16GB RAM."
  },
  {
    id: 4,
    name: "Ubiquiti UniFi AP-AC-Pro",
    category: "Wireless",
    price: 120,
    originalPrice: 180,
    condition: "Excellent",
    location: "Middletown, DE",
    rating: 4.7,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "High-performance wireless access point with advanced management features."
  },
  {
    id: 5,
    name: "Synology DS920+ NAS",
    category: "Storage",
    price: 450,
    originalPrice: 550,
    condition: "Like New",
    location: "Middletown, DE",
    rating: 4.8,
    reviewCount: 94,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    description: "4-bay network attached storage with powerful CPU and expandable memory."
  },
  {
    id: 6,
    name: "Cisco ASA 5506-X Firewall",
    category: "Security",
    price: 800,
    originalPrice: 1200,
    condition: "Good",
    location: "Middletown, DE",
    rating: 4.5,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Next-generation firewall with advanced threat protection and VPN capabilities."
  }
];

const categories = [
  { id: 'all', name: 'All Equipment', icon: Grid, color: 'from-blue-500 to-cyan-500' },
  { id: 'networking', name: 'Networking', icon: Network, color: 'from-green-500 to-emerald-500' },
  { id: 'servers', name: 'Servers', icon: Server, color: 'from-purple-500 to-pink-500' },
  { id: 'workstations', name: 'Workstations', icon: Laptop, color: 'from-orange-500 to-red-500' },
  { id: 'wireless', name: 'Wireless', icon: Wifi, color: 'from-indigo-500 to-blue-500' },
  { id: 'storage', name: 'Storage', icon: HardDrive, color: 'from-yellow-500 to-orange-500' },
  { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-pink-500' }
];

const conditions = [
  { id: 'all', name: 'All Conditions' },
  { id: 'new', name: 'New' },
  { id: 'like-new', name: 'Like New' },
  { id: 'excellent', name: 'Excellent' },
  { id: 'good', name: 'Good' },
  { id: 'fair', name: 'Fair' }
];

export default function EquipmentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredEquipment = equipmentData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory;
    const matchesCondition = selectedCondition === 'all' || item.condition.toLowerCase().replace(' ', '-') === selectedCondition;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName.toLowerCase().replace(' ', ''));
    return category ? <category.icon className="w-5 h-5" /> : <Grid className="w-5 h-5" />;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName.toLowerCase().replace(' ', ''));
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Equipment
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quality pre-owned and new IT equipment at competitive prices. All equipment is tested, certified, and backed by our expert support team.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                  {category.name}
                </option>
              ))}
            </select>
            
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {conditions.map(condition => (
                <option key={condition.id} value={condition.id} className="bg-gray-800 text-white">
                  {condition.name}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
              <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
              <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEquipment.map((item) => (
            <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    {item.condition}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2 text-blue-400">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{item.rating}</span>
                    <span className="text-xs text-gray-500">({item.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {item.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{item.location}</span>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline space-x-3 mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${item.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ${item.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">
                    Save ${(item.originalPrice - item.price).toLocaleString()}
                  </span>
                </div>

                {/* Action Button */}
                <Link
                  to={`/equipment/${item.id}`}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 flex items-center justify-center group-hover:scale-105"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedEquipment.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Equipment Found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedCondition('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Our team can help you find the perfect equipment for your specific needs, provide custom configurations, and offer financing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
              </Link>
              <Link
                to="/request-quote"
                className="border border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
