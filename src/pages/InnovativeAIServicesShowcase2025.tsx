import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Satellite, 
  FileText,
  Zap,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Mountain,
  TreePine,
  Recycle,
  Lightbulb,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Telescope,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Droplet,
  EyeOff,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch,
  Warehouse,
  Factory,
  Package,
  Navigation,
  Route,
  Compass,
  CheckCircle,
  ExternalLink,
  Search
} from 'lucide-react';

const InnovativeAIServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovativeAIServices2025 = [
    // AI Quantum Neural Network Platform
    {
      id: 'ai-quantum-neural-network-platform',
      name: 'AI Quantum Neural Network Platform',
      description: 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.',
      category: 'ai-quantum',
      price: '$6,000/month',
      features: ['Quantum Neural Networks', 'Quantum Learning Algorithms', 'Real-time Quantum Processing', 'Quantum-Safe AI', 'Quantum Analytics', 'Hybrid AI Computing'],
      icon: Atom,
      badge: 'Revolutionary',
      color: 'from-purple-600 to-pink-700',
      link: '/services/ai-quantum-neural-network-platform',
      marketPrice: '$7,500/month',
      savings: '20%',
      rating: 4.9,
      reviews: 89,
      highlights: ['1000x faster AI training', 'Quantum-safe AI models', 'Hybrid quantum-classical AI']
    },

    // AI Autonomous Business Operations Platform
    {
      id: 'ai-autonomous-business-operations-platform',
      name: 'AI Autonomous Business Operations Platform',
      description: 'Next-generation autonomous business platform powered by AI, providing self-managing operations and optimization.',
      category: 'ai-autonomous',
      price: '$4,500/month',
      features: ['Autonomous Operations', 'AI Decision Making', 'Process Optimization', 'Predictive Analytics', 'Automated Workflows', 'Business Intelligence'],
      icon: Workflow,
      badge: 'Autonomous',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/ai-autonomous-business-operations-platform',
      marketPrice: '$5,800/month',
      savings: '22%',
      rating: 4.8,
      reviews: 156,
      highlights: ['90% automation rate', '40% efficiency increase', '24/7 autonomous operation']
    },

    // AI Customer Experience Analytics Platform
    {
      id: 'ai-customer-experience-analytics-platform',
      name: 'AI Customer Experience Analytics Platform',
      description: 'Advanced customer experience analytics powered by AI, providing deep insights and predictive customer behavior.',
      category: 'ai-analytics',
      price: '$3,200/month',
      features: ['Customer Behavior Analysis', 'Predictive Analytics', 'Sentiment Analysis', 'Real-time Insights', 'Customer Journey Mapping', 'AI Recommendations'],
      icon: BarChart3,
      badge: 'Analytics',
      color: 'from-green-600 to-blue-700',
      link: '/services/ai-customer-experience-analytics-platform',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.7,
      reviews: 234,
      highlights: ['95% prediction accuracy', '30% customer satisfaction increase', 'Real-time insights']
    },

    // AI Enterprise Automation Platform
    {
      id: 'ai-enterprise-automation-platform',
      name: 'AI Enterprise Automation Platform',
      description: 'Comprehensive enterprise automation platform powered by AI for maximum efficiency and cost savings.',
      category: 'ai-automation',
      price: '$3,800/month',
      features: ['Process Automation', 'AI Workflow Management', 'Intelligent Document Processing', 'RPA Integration', 'Predictive Maintenance', 'Smart Analytics'],
      icon: Zap,
      badge: 'Automation',
      color: 'from-yellow-600 to-orange-700',
      link: '/services/ai-enterprise-automation-platform',
      marketPrice: '$4,900/month',
      savings: '22%',
      rating: 4.8,
      reviews: 189,
      highlights: ['80% process automation', '50% cost reduction', 'Intelligent workflows']
    },

    // AI Data Analytics Platform
    {
      id: 'ai-data-analytics-platform',
      name: 'AI Data Analytics Platform',
      description: 'Advanced data analytics platform powered by AI for comprehensive business intelligence and insights.',
      category: 'ai-analytics',
      price: '$2,800/month',
      features: ['Predictive Analytics', 'Real-time Data Processing', 'Machine Learning Models', 'Data Visualization', 'Automated Reporting', 'Business Intelligence'],
      icon: BarChart3,
      badge: 'Analytics',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/ai-data-analytics-platform',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.7,
      reviews: 267,
      highlights: ['90% insight accuracy', 'Real-time processing', 'Automated reporting']
    },

    // AI Business Intelligence
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Intelligent business intelligence platform powered by AI for strategic decision making and insights.',
      category: 'ai-bi',
      price: '$2,500/month',
      features: ['Strategic Insights', 'Predictive Analytics', 'Performance Monitoring', 'KPI Tracking', 'Automated Alerts', 'Executive Dashboards'],
      icon: TrendingUp,
      badge: 'Intelligence',
      color: 'from-emerald-600 to-teal-700',
      link: '/services/ai-business-intelligence',
      marketPrice: '$3,200/month',
      savings: '22%',
      rating: 4.6,
      reviews: 198,
      highlights: ['Strategic insights', 'Predictive analytics', 'Executive dashboards']
    },

    // AI Cybersecurity Platform
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity powered by AI for proactive threat detection and automated response.',
      category: 'ai-security',
      price: '$3,500/month',
      features: ['AI Threat Detection', 'Zero-Day Protection', 'Network Security', 'Data Encryption', 'Continuous Monitoring', 'Automated Response'],
      icon: Shield,
      badge: 'Security',
      color: 'from-red-600 to-orange-700',
      link: '/services/ai-cybersecurity-platform',
      marketPrice: '$4,500/month',
      savings: '22%',
      rating: 4.9,
      reviews: 289,
      highlights: ['99.9% threat blocking', '< 1 second response time', 'AI-powered automation']
    },

    // AI Autonomous Research Assistant
    {
      id: 'ai-autonomous-research-assistant',
      name: 'AI Autonomous Research Assistant',
      description: 'Autonomous research platform powered by AI for automated research, analysis, and insights generation.',
      category: 'ai-research',
      price: '$2,200/month',
      features: ['Automated Research', 'Data Analysis', 'Insight Generation', 'Literature Review', 'Trend Analysis', 'Research Reports'],
      icon: BookOpen,
      badge: 'Research',
      color: 'from-violet-600 to-purple-700',
      link: '/services/ai-autonomous-research-assistant',
      marketPrice: '$2,800/month',
      savings: '21%',
      rating: 4.7,
      reviews: 145,
      highlights: ['Automated research', 'Data analysis', 'Insight generation']
    },

    // AI Financial Trading Platform
    {
      id: 'ai-financial-trading-platform',
      name: 'AI Financial Trading Platform',
      description: 'Advanced financial trading platform powered by AI for automated trading and market analysis.',
      category: 'ai-finance',
      price: '$4,200/month',
      features: ['Automated Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization', 'Real-time Alerts', 'Performance Analytics'],
      icon: TrendingUp,
      badge: 'Finance',
      color: 'from-green-600 to-emerald-700',
      link: '/services/ai-financial-trading-platform',
      marketPrice: '$5,400/month',
      savings: '22%',
      rating: 4.8,
      reviews: 178,
      highlights: ['Automated trading', 'Risk management', 'Portfolio optimization']
    },

    // AI Healthcare Platform
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Platform',
      description: 'Revolutionary healthcare technology combining AI with medical expertise for superior patient care.',
      category: 'ai-healthcare',
      price: '$3,800/month',
      features: ['AI Diagnostic Assistant', 'Predictive Healthcare', 'Virtual Health Monitoring', 'HIPAA Compliant Security', 'Healthcare Analytics', 'Automated Workflows'],
      icon: Heart,
      badge: 'Healthcare',
      color: 'from-pink-600 to-red-700',
      link: '/services/ai-healthcare-platform',
      marketPrice: '$4,900/month',
      savings: '22%',
      rating: 4.8,
      reviews: 234,
      highlights: ['95% diagnostic accuracy', '25% cost reduction', 'HIPAA compliance']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: innovativeAIServices2025.length },
    { id: 'ai-quantum', name: 'AI-Quantum', icon: Atom, count: innovativeAIServices2025.filter(s => s.category === 'ai-quantum').length },
    { id: 'ai-autonomous', name: 'AI-Autonomous', icon: Workflow, count: innovativeAIServices2025.filter(s => s.category === 'ai-autonomous').length },
    { id: 'ai-analytics', name: 'AI-Analytics', icon: BarChart3, count: innovativeAIServices2025.filter(s => s.category === 'ai-analytics').length },
    { id: 'ai-automation', name: 'AI-Automation', icon: Zap, count: innovativeAIServices2025.filter(s => s.category === 'ai-automation').length },
    { id: 'ai-bi', name: 'AI-BI', icon: TrendingUp, count: innovativeAIServices2025.filter(s => s.category === 'ai-bi').length },
    { id: 'ai-security', name: 'AI-Security', icon: Shield, count: innovativeAIServices2025.filter(s => s.category === 'ai-security').length },
    { id: 'ai-research', name: 'AI-Research', icon: BookOpen, count: innovativeAIServices2025.filter(s => s.category === 'ai-research').length },
    { id: 'ai-finance', name: 'AI-Finance', icon: TrendingUp, count: innovativeAIServices2025.filter(s => s.category === 'ai-finance').length },
    { id: 'ai-healthcare', name: 'AI-Healthcare', icon: Heart, count: innovativeAIServices2025.filter(s => s.category === 'ai-healthcare').length }
  ];

  const filteredServices = innovativeAIServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the most advanced AI services that are revolutionizing industries and transforming businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-1 text-xs bg-slate-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <service.icon className="w-8 h-8" />
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-sm opacity-90">{service.description}</p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-white">{service.price}</span>
                          <span className="text-sm text-gray-400 ml-2">/month</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                          <div className="text-green-400 text-sm font-medium">Save {service.savings}</div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Highlights:</h4>
                        <div className="space-y-2">
                          {service.highlights.map((highlight, idx) => (
                            <div key={idx} className="text-sm text-gray-400 bg-slate-700/50 px-3 py-2 rounded-lg">
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-3">
                        <Link
                          to={service.link}
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/contact"
                          className="bg-slate-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all duration-300"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our innovative AI services to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeAIServicesShowcase2025;