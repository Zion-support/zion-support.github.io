import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Users, 
  Briefcase,
  Code,
  Cloud,
  Shield,
  Brain,
  Zap,
  Heart,
  ArrowRight,
  ExternalLink,
  Clock,
  DollarSign,
  Tag,
  Award,
  CheckCircle,
  Eye,
  Share2,
  Bookmark,
  ShoppingBag,
  Package,
  Truck,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star as StarIcon,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network2,
  Database2,
  Lock2,
  Key2,
  Fingerprint2,
  Eye2,
  Brain2,
  Cpu2,
  Memory,
  HardDrive2,
  Server2,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  UserEdit,
  UserSearch,
  UserList,
  UserSettings,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck2,
  UserX2,
  UserMinus2,
  UserPlus2,
  UserEdit2,
  UserSearch2,
  UserList2,
  UserSettings2,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2
} from 'lucide-react';

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
  tags: string[];
  vendor: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  delivery: string;
  warranty: string;
}

const marketplaceItems: MarketplaceItem[] = [
  // AI Services
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    description: 'Advanced AI-powered business intelligence solution with real-time analytics and predictive insights.',
    category: 'AI Services',
    subcategory: 'Business Intelligence',
    price: '$5,000/month',
    rating: 4.8,
    reviews: 127,
    image: '/images/marketplace/ai-bi-platform.jpg',
    featured: true,
    tags: ['AI', 'Analytics', 'Predictive', 'Real-time'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Instant',
    warranty: '30 days'
  },
  {
    id: 'ai-healthcare-analytics',
    title: 'AI Healthcare Analytics Suite',
    description: 'Comprehensive healthcare analytics platform with AI-powered diagnostics and patient insights.',
    category: 'AI Services',
    subcategory: 'Healthcare',
    price: '$8,500/month',
    rating: 4.9,
    reviews: 89,
    image: '/images/marketplace/ai-healthcare.jpg',
    featured: true,
    tags: ['Healthcare', 'AI', 'Diagnostics', 'Analytics'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Instant',
    warranty: '30 days'
  },
  {
    id: 'ai-legal-document-analysis',
    title: 'AI Legal Document Analysis',
    description: 'Intelligent legal document processing and analysis platform for law firms and legal departments.',
    category: 'AI Services',
    subcategory: 'Legal Tech',
    price: '$3,200/month',
    rating: 4.7,
    reviews: 156,
    image: '/images/marketplace/ai-legal.jpg',
    featured: false,
    tags: ['Legal', 'AI', 'Document Processing', 'Compliance'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Instant',
    warranty: '30 days'
  },

  // Cloud Services
  {
    id: 'cloud-migration-service',
    title: 'Enterprise Cloud Migration Service',
    description: 'Complete cloud migration service including planning, execution, and optimization.',
    category: 'Cloud Services',
    subcategory: 'Migration',
    price: '$25,000',
    rating: 4.9,
    reviews: 203,
    image: '/images/marketplace/cloud-migration.jpg',
    featured: true,
    tags: ['Cloud', 'Migration', 'Enterprise', 'AWS'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: '4-6 weeks',
    warranty: '90 days'
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation Platform',
    description: 'Comprehensive DevOps automation platform with CI/CD pipelines and infrastructure management.',
    category: 'Cloud Services',
    subcategory: 'DevOps',
    price: '$4,500/month',
    rating: 4.8,
    reviews: 178,
    image: '/images/marketplace/devops.jpg',
    featured: false,
    tags: ['DevOps', 'Automation', 'CI/CD', 'Infrastructure'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Instant',
    warranty: '30 days'
  },

  // Security Services
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Framework',
    description: 'Comprehensive zero trust security implementation with advanced threat detection.',
    category: 'Security Services',
    subcategory: 'Zero Trust',
    price: '$12,000/month',
    rating: 4.9,
    reviews: 94,
    image: '/images/marketplace/zero-trust.jpg',
    featured: true,
    tags: ['Security', 'Zero Trust', 'Threat Detection', 'Compliance'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: '2-4 weeks',
    warranty: '60 days'
  },
  {
    id: 'cybersecurity-audit',
    title: 'Cybersecurity Audit Service',
    description: 'Comprehensive cybersecurity audit with vulnerability assessment and compliance reporting.',
    category: 'Security Services',
    subcategory: 'Audit',
    price: '$15,000',
    rating: 4.7,
    reviews: 67,
    image: '/images/marketplace/security-audit.jpg',
    featured: false,
    tags: ['Security', 'Audit', 'Compliance', 'Vulnerability'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: '3-5 weeks',
    warranty: '90 days'
  },

  // Hardware & Equipment
  {
    id: 'quantum-computing-cluster',
    title: 'Quantum Computing Cluster',
    description: 'High-performance quantum computing cluster for research and development.',
    category: 'Hardware',
    subcategory: 'Quantum Computing',
    price: '$500,000',
    rating: 4.9,
    reviews: 12,
    image: '/images/marketplace/quantum-cluster.jpg',
    featured: true,
    tags: ['Quantum', 'Computing', 'Research', 'High-Performance'],
    vendor: 'Zion Tech Group',
    availability: 'limited',
    delivery: '8-12 weeks',
    warranty: '1 year'
  },
  {
    id: 'ai-training-servers',
    title: 'AI Training Server Rack',
    description: 'Dedicated AI training server rack with GPU clusters and high-speed networking.',
    category: 'Hardware',
    subcategory: 'AI Infrastructure',
    price: '$75,000',
    rating: 4.8,
    reviews: 45,
    image: '/images/marketplace/ai-servers.jpg',
    featured: false,
    tags: ['AI', 'Training', 'GPU', 'Infrastructure'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: '4-6 weeks',
    warranty: '1 year'
  },

  // Talent & Services
  {
    id: 'ai-engineer-consulting',
    title: 'Senior AI Engineer Consulting',
    description: 'Expert AI engineer available for consulting and project development.',
    category: 'Talent',
    subcategory: 'AI Engineering',
    price: '$200/hour',
    rating: 4.9,
    reviews: 234,
    image: '/images/marketplace/ai-engineer.jpg',
    featured: true,
    tags: ['AI', 'Engineering', 'Consulting', 'Expert'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Immediate',
    warranty: 'N/A'
  },
  {
    id: 'cybersecurity-expert',
    title: 'Cybersecurity Expert',
    description: 'Certified cybersecurity expert for security assessments and implementation.',
    category: 'Talent',
    subcategory: 'Cybersecurity',
    price: '$180/hour',
    rating: 4.8,
    reviews: 189,
    image: '/images/marketplace/security-expert.jpg',
    featured: false,
    tags: ['Security', 'Expert', 'Assessment', 'Implementation'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Immediate',
    warranty: 'N/A'
  }
];

const categories = [
  {
    name: 'AI Services',
    icon: Brain,
    description: 'Artificial Intelligence solutions',
    color: 'from-purple-500 to-pink-500',
    count: 3
  },
  {
    name: 'Cloud Services',
    icon: Cloud,
    description: 'Cloud infrastructure and migration',
    color: 'from-blue-500 to-cyan-500',
    count: 2
  },
  {
    name: 'Security Services',
    icon: Shield,
    description: 'Cybersecurity and compliance',
    color: 'from-red-500 to-orange-500',
    count: 2
  },
  {
    name: 'Hardware',
    icon: Server,
    description: 'Physical equipment and infrastructure',
    color: 'from-green-500 to-emerald-500',
    count: 2
  },
  {
    name: 'Talent',
    icon: Users,
    description: 'Expert consultants and professionals',
    color: 'from-indigo-500 to-purple-500',
    count: 2
  }
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredItems = marketplaceItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge technology solutions, expert services, and innovative products 
              from Zion Tech Group and our trusted partners.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>500+ Products & Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Verified Vendors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, services, or vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Browse Categories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">All Items</h3>
                <p className="text-sm opacity-75">500+ items</p>
              </div>
            </motion.button>

            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} items</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    item.category === 'AI Services' ? 'from-purple-500 to-pink-500' :
                    item.category === 'Cloud Services' ? 'from-blue-500 to-cyan-500' :
                    item.category === 'Security Services' ? 'from-red-500 to-orange-500' :
                    item.category === 'Hardware' ? 'from-green-500 to-emerald-500' :
                    'from-indigo-500 to-purple-500'
                  } rounded-lg flex items-center justify-center`}>
                    {item.category === 'AI Services' ? <Brain className="w-8 h-8 text-white" /> :
                     item.category === 'Cloud Services' ? <Cloud className="w-8 h-8 text-white" /> :
                     item.category === 'Security Services' ? <Shield className="w-8 h-8 text-white" /> :
                     item.category === 'Hardware' ? <Server className="w-8 h-8 text-white" /> :
                     <Users className="w-8 h-8 text-white" />}
                  </div>
                  {item.featured && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-slate-900/70 text-white text-xs px-2 py-1 rounded">
                    {item.availability === 'available' ? 'In Stock' :
                     item.availability === 'limited' ? 'Limited' : 'Out of Stock'}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 text-xs mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 font-semibold text-sm">{item.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-slate-300 text-sm">{item.rating}</span>
                      <span className="text-slate-500 text-xs">({item.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">{item.vendor}</span>
                    <button className="px-3 py-1 bg-cyan-600 text-white text-xs rounded hover:bg-cyan-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <ShoppingCart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No items found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Browse our marketplace and find the perfect solution for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
