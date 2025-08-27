import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Search,
  Filter,
  DollarSign,
  BarChart,
  Lightbulb,
  Code,
  Cloud,
  Lock,
  Smartphone,
  Car,
  Heart,
  Palette,
  Briefcase,
  Building,
  Factory,
  Truck,
  Microscope,
  Atom,
  CircuitBoard,
  Phone,
  Mail,
  MapPin,
  Download,
  ExternalLink
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Code },
    { id: 'IT Services', name: 'IT Services', icon: Cpu },
    { id: 'AI Services', name: 'AI Services', icon: Brain }
  ];

  const sortOptions = [
    { id: 'innovation', name: 'Innovation Level', icon: Lightbulb },
    { id: 'price', name: 'Price', icon: DollarSign },
    { id: 'roi', name: 'ROI', icon: TrendingUp },
    { id: 'rating', name: 'Rating', icon: Star }
  ];

  // Mock data for demonstration - replace with actual data import
  const mockServices = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics and insights platform leveraging machine learning for business decision making.",
      category: "AI Services",
      subcategory: "Business Intelligence",
      innovationLevel: "Revolutionary",
      price: 2999,
      currency: "$",
      pricingModel: "month",
      rating: 4.8,
      reviewCount: 156,
      aiScore: "95%",
      marketPrice: "$4,500",
      roi: "340%",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
      benefits: ["Increased efficiency", "Better decision making"],
      reviews: 156,
      customers: 89,
      technology: ["Python", "TensorFlow", "React", "Node.js"],
      compliance: ["GDPR", "SOC2"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"
      }
    },
    {
      id: 2,
      title: "Cloud-Native Microservices Platform",
      description: "Scalable microservices architecture for modern cloud applications with automated deployment.",
      category: "IT Services",
      subcategory: "Cloud Infrastructure",
      innovationLevel: "Advanced",
      price: 1999,
      currency: "$",
      pricingModel: "month",
      rating: 4.6,
      reviewCount: 98,
      aiScore: "87%",
      marketPrice: "$3,200",
      roi: "280%",
      features: ["Auto-scaling", "Load balancing", "Monitoring", "CI/CD pipeline"],
      benefits: ["Reduced costs", "Improved performance"],
      reviews: 98,
      customers: 67,
      technology: ["Docker", "Kubernetes", "AWS", "Terraform"],
      compliance: ["ISO 27001", "HIPAA"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"
      }
    }
  ];

  const filteredServices = mockServices
    .filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          return getInnovationScore(b.innovationLevel) - getInnovationScore(a.innovationLevel);
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseFloat(b.roi.split('%')[0]) - parseFloat(a.roi.split('%')[0]);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const getInnovationScore = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 3;
      case 'Advanced': return 2;
      case 'Cutting-edge': return 1;
      default: return 0;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return Code;
      case 'IT Services': return Cpu;
      case 'AI Services': return Brain;
      default: return Globe;
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'from-purple-600 to-pink-600';
      case 'Advanced': return 'from-blue-600 to-cyan-600';
      case 'Cutting-edge': return 'from-green-600 to-emerald-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-400 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2"/>
              2025 Innovation Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Showcase 2025</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge micro SAAS, IT, and AI services that are revolutionizing industries. 
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-300"/>
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-300"/>
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-300"/>
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-lg flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{service.category}</div>
                      <div className="text-xs text-gray-400">{service.subcategory}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Innovation Level Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} text-white`}>
                    <Lightbulb className="w-3 h-3 mr-1" />
                    {service.innovationLevel}
                  </span>
                </div>

                {/* Technology & Compliance */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold text-sm">Technology Stack</h4>
                    <h4 className="text-white font-semibold text-sm">Compliance</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-blue-200 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.compliance.slice(0, 2).map((comp, compIndex) => (
                        <span key={compIndex} className="px-2 py-1 bg-green-600/30 text-green-200 text-xs rounded">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div>
                    <div className="text-gray-400">Market Price</div>
                    <div className="text-white font-medium">{service.marketPrice}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ROI</div>
                    <div className="text-green-400 font-medium">{service.roi}</div>
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({service.reviews})</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.customers} customers
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Play className="w-4 h-4"/>
                    Request Demo
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="px-4 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4"/>
                    Learn More
                  </motion.button>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Contact:</span>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-blue-300"/>
                      <span className="text-blue-100">{service.contactInfo.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-blue-200">Email:</span>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-blue-300"/>
                      <span className="text-blue-100">{service.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Services Found */}
          {filteredServices.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-blue-200 mb-6">Try adjusting your search criteria or browse all our services.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement these innovative solutions 
            and drive your business forward with cutting-edge technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-gray-300">Get in touch to discuss your needs</p>
              <div className="mt-2 text-sm text-gray-400">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-gray-300">Explore our full range of services</p>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Office Location</h3>
              <p className="text-gray-300">Visit our headquarters</p>
              <div className="mt-2 text-sm text-gray-400">
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
