<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Rocket, 
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
<<<<<<< HEAD
  Truck, 
=======
  Lightbulb, 
  Zap, 
  Rocket, 
  Brain, 
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
  TrendingUp, 
  Users, 
  Globe,
  Cpu,
  BarChart3,
  Target,
<<<<<<< HEAD
  Award,
  Clock
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../../data/specializedITInfrastructureServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b

export default function InnovativeNewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

<<<<<<< HEAD
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Services Portfolio
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Explore our comprehensive suite of innovative services designed to give your business a competitive edge in the digital age
          </p>
=======
  Shield,
  Database,
  Monitor,
  Key,
  Settings,
  Cloud,
  Atom,
  Network
} from 'lucide-react';

const InnovativeNewServices = () => {
  const innovations = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI systems that evolve and develop consciousness-like capabilities for advanced problem-solving.",
      benefits: ["Advanced AI reasoning", "Consciousness simulation", "Ethical AI development", "Human-AI collaboration"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Next-generation neural networks that leverage quantum computing for unprecedented AI performance.",
      benefits: ["Quantum advantage", "Faster training", "Better accuracy", "Quantum insights"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Autonomous Business Operations",
      description: "Self-managing business systems that operate independently while optimizing all aspects of operations.",
      benefits: ["24/7 operation", "Autonomous decision-making", "Continuous optimization", "Zero downtime"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Space Technology Integration",
      description: "Cutting-edge space technology solutions for terrestrial applications and space exploration.",
      benefits: ["Satellite technology", "Space data analytics", "Space infrastructure", "Interplanetary systems"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "AI Research & Development",
      description: "Cutting-edge AI research and development services for next-generation artificial intelligence.",
      icon: Brain
    },
    {
      title: "Quantum Computing Solutions",
      description: "Quantum computing applications and quantum-enhanced algorithms for complex problem-solving.",
      icon: Atom
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing systems that operate independently across various business domains.",
      icon: Cpu
    },
    {
      title: "Emerging Technology Consulting",
      description: "Strategic consulting on emerging technologies and their business applications.",
      icon: Lightbulb
    },
    {
      title: "Innovation Labs",
      description: "Dedicated innovation spaces for developing and testing cutting-edge technologies.",
      icon: Rocket
    },
    {
      title: "Future Technology Roadmapping",
      description: "Strategic planning for technology adoption and future-proofing your business.",
      icon: TrendingUp
    }
  ];

  const technologies = [
    "Artificial General Intelligence (AGI)",
    "Quantum Machine Learning",
    "Neuromorphic Computing",
    "Brain-Computer Interfaces",
    "Autonomous Robotics",
    "Space Technology",
    "Biocomputing",
    "Nanotechnology"
  ];

  const benefits = [
    {
      title: "First-Mover Advantage",
      description: "Be among the first to adopt revolutionary technologies and gain competitive edge.",
      icon: Rocket
    },
    {
      title: "Future-Proof Solutions",
      description: "Build solutions that will remain relevant and powerful for years to come.",
      icon: Shield
    },
    {
      title: "Innovation Leadership",
      description: "Position your business as a leader in technological innovation and advancement.",
      icon: TrendingUp
    },
    {
      title: "Unprecedented Capabilities",
      description: "Access capabilities and solutions that were previously impossible or impractical.",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Innovative New Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future with our cutting-edge services that push the boundaries of what's possible 
              in technology and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-pink-500/30"
              >
                Explore Innovation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-pink-400/50 text-pink-400 rounded-lg hover:bg-pink-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Innovation Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
        </div>
      </section>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INNOVATIVE_NEW_SERVICES.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-zion-cyan/70">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/70">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-zion-cyan/70">Support Level:</span>
                      <span className="text-green-400 font-semibold">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* Delivery Time */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zion-cyan/70">Delivery Time:</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-xs text-yellow-400 font-semibold">
                          {service.estimatedDelivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Get Started
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-zion-cyan/70">
                      Contact: {service.contactInfo.phone}
                    </div>
                    <div className="text-xs text-zion-cyan/70">
                      {service.contactInfo.email}
                    </div>
                  </div>
=======
  Link, 
  TrendingUp, 
  GraduationCap, 
  Drone,
  Star,
  Zap,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES, SPECIALIZED_SERVICE_CATEGORIES, MARKET_INSIGHTS } from '../../data/innovativeNewServices';

export default function InnovativeNewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');

  const filteredServices = INNOVATIVE_NEW_SERVICES.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const levelMatch = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    return categoryMatch && levelMatch;
  });

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(s => s.category.split(' & ')[0])))];
  const innovationLevels = ['all', 'Advanced', 'Cutting-edge', 'Revolutionary', 'Breakthrough'];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'IoT': Zap,
      'Legal': Scale,
      'Blockchain': Link,
      'FinTech': TrendingUp,
      'Education': GraduationCap,
      'Robotics': Drone,
      'Quantum': Star
    };
    
    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.includes(key)) return icon;
    }
    return Rocket;
  };

  const getInnovationLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Advanced': 'text-blue-500',
      'Cutting-edge': 'text-purple-500',
      'Revolutionary': 'text-orange-500',
      'Breakthrough': 'text-red-500'
    };
    return colorMap[level] || 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative New Services - Zion Tech Group" 
        description="Discover cutting-edge micro SAAS services, IT solutions, and AI innovations that will transform your business. Revolutionary technology at competitive prices."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Innovative New Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS solutions, cutting-edge IT services, and breakthrough AI innovations 
              designed to propel your business into the future
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Rocket className="w-5 h-5 mr-2 text-cyan-400" />
                <span>500+ Billion Market</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                <span>25% Annual Growth</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Revolutionary Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Market Insights & Competitive Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Total Addressable Market</h3>
              <p className="text-2xl font-bold text-cyan-400">{MARKET_INSIGHTS.totalAddressableMarket}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth Rate</h3>
              <p className="text-2xl font-bold text-green-400">{MARKET_INSIGHTS.growthRate}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Key Trends</h3>
              <p className="text-2xl font-bold text-purple-400">{MARKET_INSIGHTS.keyTrends.length}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantages</h3>
              <p className="text-2xl font-bold text-orange-400">{MARKET_INSIGHTS.competitiveAdvantages.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800 text-white">
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          <select
            value={selectedInnovationLevel}
            onChange={(e) => setSelectedInnovationLevel(e.target.value)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {innovationLevels.map(level => (
              <option key={level} value={level} className="bg-gray-800 text-white">
                {level === 'all' ? 'All Innovation Levels' : level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            return (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)} bg-white/10`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Market Price: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Target className="w-4 h-4 mr-2" />
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d
                </div>
              </div>
            );
          })}
        </div>
      </div>

<<<<<<< HEAD
      {/* Why Choose Zion Tech Group */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
=======
      {/* Innovations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Innovations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our innovative services represent the cutting edge of technology, 
              offering capabilities that were once considered science fiction.
            </p>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Trends & Innovation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Trends & Innovation
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Stay ahead of the curve with our forward-thinking solutions that address emerging market needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Emerging Technology Trends</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Quantum Computing</h4>
                    <p className="text-zion-cyan/80">Revolutionary computing power for complex problem-solving</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI & Machine Learning</h4>
                    <p className="text-zion-cyan/80">Intelligent automation and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Sustainability Tech</h4>
                    <p className="text-zion-cyan/80">Green technology solutions for environmental impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Cost Reduction</span>
                    <span className="text-green-400 font-bold">25-70%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Efficiency Improvement</span>
                    <span className="text-blue-400 font-bold">30-60%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">ROI Achievement</span>
                    <span className="text-purple-400 font-bold">200-1000%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
=======
      {/* Specialized Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Specialized Service Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIZED_SERVICE_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <div className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d
        </div>
      </div>

      {/* Contact Section */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth
=======
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative New Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS solutions, emerging technologies, and specialized IT infrastructure services designed to transform your business and drive innovation
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Get Started?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-zion-cyan text-2xl mb-2">📞</div>
                <p className="font-semibold">Call Us</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                <p className="font-semibold">Email Us</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-zion-slate-light">ziontechgroup.com</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
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
              className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {service.category} • {service.subcategory}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light ml-1">/{service.pricingModel}</span>
                  </span>
                  <span className="text-sm text-zion-slate-light">
                    {service.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-zion-slate-light text-center">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zion-slate-light">Market Price:</span>
                  <span className="text-zion-cyan font-semibold">{service.marketPrice}</span>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span className="text-zion-slate-light">ROI:</span>
                  <span className="text-green-400 font-semibold">{service.roi}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded-full border border-zion-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="text-center">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="inline-block w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-semibold py-3 px-6 rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
                >
                  Get Started Today
                </a>
                <p className="text-xs text-zion-slate-light mt-2">
                  Contact us for custom pricing and implementation
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-cyan-light/20 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                ✉️ Email Us
              </a>
            </div>
            <p className="text-zion-slate-light mt-6">
              Visit us at <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">ziontechgroup.com</a> for more information
            </p>
          </div>
        </motion.div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300">
              Contact us today to learn more about our innovative services and how they can drive your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 text-lg font-semibold">ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Explore our full portfolio</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Key Trends */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Key Market Trends
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARKET_INSIGHTS.keyTrends.map((trend, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{trend}</h3>
              <p className="text-gray-400 text-sm">
                Driving innovation and creating new opportunities in the technology landscape
              </p>
            </div>
          ))}
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d
      </div>
=======
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${innovation.color} rounded-lg flex items-center justify-center`}>
                    <innovation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{innovation.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{innovation.description}</p>
                <div className="space-y-2">
                  {innovation.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-pink-400">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Innovation Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive services designed to bring cutting-edge innovations to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Innovation?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovation services provide advantages that traditional solutions cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on the latest breakthroughs in science and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-pink-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Embrace the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in exploring the cutting edge of technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-pink-500/30"
            >
              Start Innovation Journey
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-pink-400/50 text-pink-400 rounded-lg hover:bg-pink-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
    </div>
  );
};

export default InnovativeNewServices;