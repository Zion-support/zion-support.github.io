import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Satellite,
  Radar,
  Camera,
  Video,
  FileText,
  Calendar,
  Tag,
  TrendingUp,
  PieChart,
  LineChart,
  Scatter,
  Layers,
  Cube,
  Box,
  Package,
  Truck,
  Building,
  Factory,
  Warehouse,
  Home,
  Car,
  Plane,
  Ship,
  Database,
  Cloud,
  Eye,
  Brain,
  Network,
  Rocket,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

export default function Marketplace() {
  const categories = [
    {
      name: "AI Services",
      icon: Brain,
      count: 25,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "IT Solutions",
      icon: Cpu,
      count: 18,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cloud Services",
      icon: Cloud,
      count: 12,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Security Tools",
      icon: Shield,
      count: 15,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Analytics",
      icon: BarChart3,
      count: 20,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "IoT Solutions",
      icon: Wifi,
      count: 14,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const featuredProducts = [
    {
      name: "AI Sales Copilot",
      description: "Intelligent sales automation and lead management",
      price: "$299",
      period: "/month",
      rating: 4.8,
      reviews: 156,
      category: "AI Services",
      image: "🎯",
      features: ["Lead scoring", "Email automation", "CRM integration", "Analytics dashboard"]
    },
    {
      name: "Quantum Security Suite",
      description: "Next-generation cybersecurity with quantum encryption",
      price: "$599",
      period: "/month",
      rating: 4.9,
      reviews: 89,
      category: "Security Tools",
      image: "🔒",
      features: ["Quantum encryption", "Threat detection", "Compliance reporting", "24/7 monitoring"]
    },
    {
      name: "Edge Computing Platform",
      description: "Distributed computing for IoT and edge devices",
      price: "$199",
      period: "/month",
      rating: 4.7,
      reviews: 203,
      category: "IoT Solutions",
      image: "🌐",
      features: ["Edge processing", "Real-time analytics", "Device management", "Scalable infrastructure"]
    },
    {
      name: "Data Analytics Pro",
      description: "Advanced business intelligence and predictive analytics",
      price: "$399",
      period: "/month",
      rating: 4.6,
      reviews: 178,
      category: "Analytics",
      image: "📊",
      features: ["Predictive modeling", "Custom dashboards", "Data visualization", "API access"]
    }
  ];

  const filters = [
    "All Categories",
    "AI Services",
    "IT Solutions", 
    "Cloud Services",
    "Security Tools",
    "Analytics",
    "IoT Solutions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Marketplace
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover and deploy cutting-edge technology solutions from our curated marketplace. 
              Find the perfect tools to accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center space-x-2"
              >
                <span>Browse Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-green-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-green-400/50 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for solutions, services, or tools..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white/10 backdrop-blur-sm border border-gray-400/20 rounded-lg text-white hover:bg-white/20 hover:border-gray-400/40 transition-all duration-300">
                <Grid className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 backdrop-blur-sm border border-gray-400/20 rounded-lg text-white hover:bg-white/20 hover:border-gray-400/40 transition-all duration-300">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-green-500 text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-gray-400/20 text-gray-300 hover:bg-white/20 hover:border-gray-400/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of technology solutions organized by category.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} solutions</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and highly-rated technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-gray-400/40 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 ml-1">{product.period}</span>
                  </div>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 mb-4">
                    {product.category}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts can help you find the perfect solution or create a custom 
              solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-green-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-green-400/50 flex items-center space-x-2"
              >
                <span>Custom Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
