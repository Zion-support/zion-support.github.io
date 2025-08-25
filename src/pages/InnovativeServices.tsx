import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Lightbulb, Sparkles, CpuIcon, Monitor, Smartphone, CpuIcon as CpuIcon2 } from 'lucide-react';

const InnovativeServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Innovative Services Data
  const innovativeServices = [
    {
      id: 1,
      name: "Quantum AI Fusion Platform",
      category: "Quantum AI",
      description: "Revolutionary platform combining quantum computing with artificial intelligence for solving previously unsolvable problems",
      price: 2500,
      pricingModel: "monthly",
      innovationScore: 98,
      features: [
        "Quantum machine learning",
        "Hybrid quantum-classical algorithms",
        "Real-time quantum simulation",
        "Quantum error correction",
        "AI model optimization",
        "Quantum neural networks"
      ],
      benefits: [
        "Solve complex problems 1000x faster",
        "Breakthrough in drug discovery",
        "Revolutionary financial modeling",
        "Advanced cryptography",
        "Next-gen AI capabilities"
      ],
      useCases: [
        "Pharmaceutical research",
        "Financial risk modeling",
        "Climate prediction",
        "Materials science",
        "Cryptography"
      ],
      targetAudience: [
        "Research institutions",
        "Pharmaceutical companies",
        "Financial institutions",
        "Government agencies",
        "Tech giants"
      ],
      tags: ["Quantum Computing", "AI", "Machine Learning", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Neural Interface Platform",
      category: "Brain-Computer Interface",
      description: "Advanced neural interface technology enabling direct communication between human brain and computers",
      price: 3500,
      pricingModel: "monthly",
      innovationScore: 97,
      features: [
        "Non-invasive brain scanning",
        "Real-time thought processing",
        "Neural pattern recognition",
        "Cognitive enhancement tools",
        "Accessibility solutions",
        "Research capabilities"
      ],
      benefits: [
        "Revolutionary accessibility",
        "Enhanced cognitive abilities",
        "New communication methods",
        "Medical breakthroughs",
        "Human-computer symbiosis"
      ],
      useCases: [
        "Disability assistance",
        "Medical rehabilitation",
        "Cognitive enhancement",
        "Research applications",
        "Gaming and entertainment"
      ],
      targetAudience: [
        "Healthcare providers",
        "Research institutions",
        "Accessibility organizations",
        "Gaming companies",
        "Defense contractors"
      ],
      tags: ["BCI", "Neuroscience", "Accessibility", "Medical", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Holographic Workspace",
      category: "Mixed Reality",
      description: "Next-generation holographic workspace that transforms how teams collaborate and create in 3D space",
      price: 1800,
      pricingModel: "monthly",
      innovationScore: 95,
      features: [
        "True 3D holographic display",
        "Multi-user collaboration",
        "Gesture and voice control",
        "Real-time rendering",
        "Cross-platform compatibility",
        "Custom workspace design"
      ],
      benefits: [
        "Immersive collaboration",
        "3D design visualization",
        "Remote team engagement",
        "Creative workflow enhancement",
        "Future of work"
      ],
      useCases: [
        "Product design",
        "Architecture planning",
        "Team collaboration",
        "Training and education",
        "Creative industries"
      ],
      targetAudience: [
        "Design firms",
        "Architecture companies",
        "Creative agencies",
        "Educational institutions",
        "Remote teams"
      ],
      tags: ["Holographic", "Mixed Reality", "Collaboration", "3D", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Biological Computing Platform",
      category: "Bio-Computing",
      description: "Revolutionary platform using biological systems for computing, enabling sustainable and powerful processing",
      price: 4200,
      pricingModel: "monthly",
      innovationScore: 96,
      features: [
        "DNA-based computing",
        "Biological neural networks",
        "Sustainable processing",
        "Bio-sensor integration",
        "Environmental monitoring",
        "Medical diagnostics"
      ],
      benefits: [
        "Sustainable computing",
        "Biological accuracy",
        "Environmental monitoring",
        "Medical breakthroughs",
        "Energy efficiency"
      ],
      useCases: [
        "Environmental monitoring",
        "Medical diagnostics",
        "Drug discovery",
        "Climate modeling",
        "Biological research"
      ],
      targetAudience: [
        "Research institutions",
        "Pharmaceutical companies",
        "Environmental agencies",
        "Healthcare providers",
        "Biotech firms"
      ],
      tags: ["Bio-Computing", "DNA", "Sustainability", "Medical", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Emotional AI Platform",
      category: "Emotional Intelligence",
      description: "Advanced AI system that understands, processes, and responds to human emotions for enhanced interactions",
      price: 1200,
      pricingModel: "monthly",
      innovationScore: 94,
      features: [
        "Emotion recognition",
        "Sentiment analysis",
        "Empathetic responses",
        "Mood tracking",
        "Behavioral insights",
        "Personalized interactions"
      ],
      benefits: [
        "Enhanced user experience",
        "Better mental health support",
        "Improved customer service",
        "Personalized interactions",
        "Emotional intelligence"
      ],
      useCases: [
        "Mental health support",
        "Customer service",
        "Education",
        "Healthcare",
        "Entertainment"
      ],
      targetAudience: [
        "Healthcare providers",
        "Customer service teams",
        "Educational institutions",
        "Mental health apps",
        "Entertainment companies"
      ],
      tags: ["Emotional AI", "Mental Health", "User Experience", "Personalization", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Time Series Prediction Engine",
      category: "Temporal AI",
      description: "Revolutionary AI engine that predicts future events with unprecedented accuracy using temporal analysis",
      price: 2800,
      pricingModel: "monthly",
      innovationScore: 93,
      features: [
        "Multi-dimensional time analysis",
        "Causal inference",
        "Pattern recognition",
        "Scenario modeling",
        "Real-time predictions",
        "Uncertainty quantification"
      ],
      benefits: [
        "Predict future events",
        "Risk mitigation",
        "Strategic planning",
        "Competitive advantage",
        "Data-driven decisions"
      ],
      useCases: [
        "Financial forecasting",
        "Supply chain optimization",
        "Risk management",
        "Strategic planning",
        "Market analysis"
      ],
      targetAudience: [
        "Financial institutions",
        "Manufacturing companies",
        "Logistics firms",
        "Consulting companies",
        "Government agencies"
      ],
      tags: ["Time Series", "Prediction", "AI", "Forecasting", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Quantum AI', 'Brain-Computer Interface', 'Mixed Reality', 'Bio-Computing', 'Emotional Intelligence', 'Temporal AI'];

  const filteredServices = innovativeServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getInnovationScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI': return <CpuIcon className="w-6 h-6" />;
      case 'Brain-Computer Interface': return <Brain className="w-6 h-6" />;
      case 'Mixed Reality': return <Monitor className="w-6 h-6" />;
      case 'Bio-Computing': return <Leaf className="w-6 h-6" />;
      case 'Emotional Intelligence': return <Heart className="w-6 h-6" />;
      case 'Temporal AI': return <Clock className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
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
=======
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  Clock,
  DollarSign,
  Award,
  Rocket
} from 'lucide-react';

export default function InnovativeServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES.map(service => service.category)))];
  
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-score':
          return (b.aiScore || 0) - (a.aiScore || 0);
        default:
          return b.featured ? 1 : -1;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Marketing':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'AI & Automation':
        return <Zap className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Globe className="w-6 h-6" />;
      case 'AI & Healthcare':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Rocket className="w-6 h-6" />;
      case 'AI & Edge Computing':
        return <Zap className="w-6 h-6" />;
      case 'AI & Finance':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a38
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Innovative Services
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge innovative services that push the boundaries 
              of what's possible in AI, quantum computing, neural interfaces, and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Innovation Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getInnovationScoreColor(service.innovationScore)}`}>
                      Innovation Score: {service.innovationScore}%
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Revolutionary Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Transformative Benefits:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Rocket className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group" 
        description="Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, blockchain, and emerging technologies. Transform your business with our innovative services."
        keywords="innovative SAAS, AI services, quantum computing, blockchain, edge computing, autonomous systems, micro services"
        url="https://ziontechgroup.com/innovative-services"
      />

      {/* Hero Section with Futuristic Design */}
      <section className="relative overflow-hidden py-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative
            </span>
            <br />
            <span className="text-white">Micro SAAS Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Experience the future of business technology with our cutting-edge micro SAAS solutions. 
            Powered by AI, quantum computing, blockchain, and emerging technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="featured" className="bg-gray-800 text-white">Featured First</option>
                  <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                  <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                  <option value="ai-score" className="bg-gray-800 text-white">Highest AI Score</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Our <span className="text-cyan-400">Innovative Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} cutting-edge services designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    {getCategoryIcon(service.category)}
                  </div>
                  {service.featured && (
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400">AI Score:</span>
                    <span className="text-cyan-400 font-semibold">{service.aiScore}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">Rating:</span>
                    <span className="text-blue-400 font-semibold">{service.rating}/5.0</span>
                  </div>
                </div>

                {/* Price and Delivery */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">
                    {service.currency}{service.price}
                    <span className="text-sm text-gray-400 font-normal">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.estimatedDelivery}
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-colors duration-300">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-colors duration-300">
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600"
                    >
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a38
                      {tag}
                    </span>
                  ))}
                </div>
<<<<<<< HEAD

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Explore Innovation
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Shape the Future?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices;
=======
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses already leveraging our innovative micro SAAS solutions. 
            Get started today and experience the future of business technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a38
