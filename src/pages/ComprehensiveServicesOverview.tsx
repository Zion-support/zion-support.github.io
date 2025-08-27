import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Shield, 
  Search, 
  DollarSign, 
  Heart, 
  Cpu, 
  Zap, 
  BookOpen, 
  GraduationCap, 
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Eye,
  BarChart3,
  Calculator,
  Crown,
  Building,
  Gauge,
  Activity,
  Network,
  Leaf,
  Database,
  Cloud,
  Lock,
  Scale,
  Stethoscope,
  Car,
  Building2,
  Flask
} from 'lucide-react';

// Service categories with descriptions and icons
const SERVICE_CATEGORIES = [
  {
    id: 'quantum-ai-business',
    name: 'Quantum AI & Business Automation',
    description: 'Revolutionary quantum-powered AI solutions for business process automation, decision-making, and strategic planning.',
    icon: <Brain className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-500',
    services: ['AI Autonomous Business Platform', 'Quantum Decision Engine', 'Intelligent Process Automation'],
    features: ['Quantum Computing Integration', 'Real-time Analytics', 'Predictive Modeling'],
    benefits: ['500% ROI Increase', '90% Process Efficiency', 'Real-time Decision Making']
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI-Powered Cybersecurity',
    description: 'Advanced AI-driven security solutions that protect against evolving cyber threats with intelligent threat detection and response.',
    icon: <Shield className="h-8 w-8" />,
    color: 'from-red-500 to-orange-500',
    services: ['AI Threat Intelligence', 'Automated Incident Response', 'Behavioral Analytics'],
    features: ['Real-time Threat Detection', 'Machine Learning Algorithms', 'Zero-day Protection'],
    benefits: ['99.9% Threat Detection', '60% Faster Response', 'Proactive Security']
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps Excellence',
    description: 'Scalable cloud infrastructure and automated DevOps pipelines for seamless application deployment and management.',
    icon: <Cloud className="h-8 w-8" />,
    color: 'from-blue-500 to-cyan-500',
    services: ['Multi-Cloud Management', 'CI/CD Automation', 'Infrastructure as Code'],
    features: ['Auto-scaling', 'Container Orchestration', 'Monitoring & Alerting'],
    benefits: ['80% Faster Deployment', '70% Cost Reduction', '99.99% Uptime']
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    description: 'Connected device solutions and edge computing infrastructure for real-time data processing and intelligent automation.',
    icon: <Zap className="h-8 w-8" />,
    color: 'from-yellow-500 to-green-500',
    services: ['IoT Platform Development', 'Edge AI Processing', 'Smart City Solutions'],
    features: ['Real-time Data Processing', 'Low-latency Computing', 'Device Management'],
    benefits: ['Real-time Insights', 'Reduced Bandwidth', 'Enhanced Security']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Next-generation quantum computing applications for complex problem-solving and scientific research.',
    icon: <Rocket className="h-8 w-8" />,
    color: 'from-indigo-500 to-purple-500',
    services: ['Quantum Algorithm Development', 'Quantum Simulation', 'Cryptography Solutions'],
    features: ['Quantum Supremacy', 'Quantum-safe Encryption', 'Hybrid Classical-Quantum'],
    benefits: ['Exponential Speedup', 'Unbreakable Security', 'Scientific Breakthroughs']
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3',
    description: 'Decentralized solutions and blockchain infrastructure for secure, transparent digital transactions.',
    icon: <Database className="h-8 w-8" />,
    color: 'from-green-500 to-emerald-500',
    services: ['Smart Contract Development', 'DeFi Platforms', 'NFT Marketplaces'],
    features: ['Immutable Records', 'Smart Contracts', 'Decentralized Governance'],
    benefits: ['Transparency', 'Reduced Costs', 'Enhanced Security']
  }
];

// Mock data for services
const mockServices = [
  {
    id: 1,
    name: 'AI Autonomous Business Platform',
    category: 'quantum-ai-business',
    description: 'Complete AI-powered business automation platform with quantum computing capabilities.',
    price: 25000,
    rating: 4.9,
    reviews: 127,
    features: ['Quantum AI Engine', 'Process Automation', 'Real-time Analytics', 'Predictive Modeling'],
    delivery: '8-12 weeks',
    expertise: 'AI/ML, Quantum Computing, Business Process',
    location: 'Global',
    availability: 'Immediate'
  },
  {
    id: 2,
    name: 'AI-Powered Cybersecurity Suite',
    category: 'ai-cybersecurity',
    description: 'Comprehensive cybersecurity solution with AI-driven threat detection and response.',
    price: 18000,
    rating: 4.8,
    reviews: 89,
    features: ['Threat Intelligence', 'Incident Response', 'Behavioral Analytics', 'Zero-day Protection'],
    delivery: '6-10 weeks',
    expertise: 'Cybersecurity, AI/ML, Network Security',
    location: 'Global',
    availability: 'Immediate'
  },
  {
    id: 3,
    name: 'Cloud Infrastructure & DevOps',
    category: 'cloud-devops',
    description: 'Scalable cloud infrastructure with automated DevOps pipelines.',
    price: 15000,
    rating: 4.7,
    reviews: 156,
    features: ['Multi-cloud Management', 'CI/CD Automation', 'Infrastructure as Code', 'Monitoring'],
    delivery: '4-8 weeks',
    expertise: 'Cloud Computing, DevOps, Infrastructure',
    location: 'Global',
    availability: 'Immediate'
  }
];

export default function ComprehensiveServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(mockServices);
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    let filtered = mockServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Comprehensive <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our complete range of cutting-edge technology services designed to transform your business and drive innovation across all industries.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-zion-cyan">Services:</h4>
                  <ul className="text-sm text-zion-slate-light">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-zion-cyan">Features:</h4>
                  <ul className="text-sm text-zion-slate-light">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="w-4 h-4 text-zion-cyan mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-zion-cyan">Benefits:</h4>
                  <ul className="text-sm text-zion-slate-light">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-zion-cyan mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Available Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviews})</span>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-zion-cyan font-semibold">Price:</span>
                    <span className="text-white ml-2">${service.price.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-semibold">Delivery:</span>
                    <span className="text-white ml-2">{service.delivery}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-semibold">Location:</span>
                    <span className="text-white ml-2">{service.location}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-semibold">Availability:</span>
                    <span className="text-white ml-2">{service.availability}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-zion-cyan font-semibold">Features:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-xs text-zion-cyan">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-zion-cyan font-semibold">Expertise:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.expertise.split(', ').map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-full text-xs text-zion-slate-light">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                    Get Quote
                  </button>
                  <button className="px-6 py-3 border border-zion-cyan/20 hover:border-zion-cyan/40 text-zion-cyan font-medium rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/sitemap" 
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/20 hover:border-zion-cyan/40 text-zion-cyan font-medium rounded-lg transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
