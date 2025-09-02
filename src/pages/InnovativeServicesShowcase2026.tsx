import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Star,
  Package,
  Truck,
  Server,
  Smartphone,
  Database,
  Network,
  PenTool,
  Building,
  BookOpen,
  MessageCircle,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  Code,
  Wifi,
  Globe,
  Users,
  Clock,
  Search,
  Filter,
  Play
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const InnovativeServicesShowcase2026 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'AI', name: 'AI Services', icon: Brain },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'Supply Chain', name: 'Supply Chain', icon: Truck },
    { id: 'Financial Tech', name: 'Financial Tech', icon: BarChart3 }
  ];

  const services = [
    {
      id: 1,
      title: 'AI Quantum Financial Analytics Platform',
      description: 'Revolutionary quantum AI financial platform that combines quantum computing with advanced AI algorithms to provide unprecedented financial insights and trading capabilities.',
      category: 'AI',
      icon: BarChart3,
      color: 'from-blue-500 to-purple-600',
      price: 'Starting at $299/month',
      features: [
        'Quantum AI-powered analytics',
        'Real-time market intelligence',
        'Advanced risk management',
        'Global market coverage',
        'Predictive modeling'
      ],
      href: '/services/ai-quantum-financial-analytics-platform',
      featured: true
    },
    {
      id: 2,
      title: 'AI Autonomous Supply Chain Management Platform',
      description: 'Self-learning supply chain management system that autonomously optimizes logistics, inventory, and distribution networks using advanced AI algorithms.',
      category: 'Supply Chain',
      icon: Package,
      color: 'from-green-500 to-blue-600',
      price: 'Starting at $199/month',
      features: [
        'Autonomous operations',
        'Intelligent route optimization',
        'Smart inventory management',
        'Blockchain security',
        'Real-time tracking'
      ],
      href: '/services/ai-autonomous-supply-chain-management-platform',
      featured: true
    },
    {
      id: 3,
      title: 'AI Cybersecurity Operations Center',
      description: 'Autonomous security operations center that provides 24/7 threat detection, incident response, and security monitoring using advanced AI and machine learning.',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      price: 'Starting at $399/month',
      features: [
        'AI-powered threat detection',
        'Zero-day attack prevention',
        'Network security monitoring',
        'Global threat intelligence',
        'Automated incident response'
      ],
      href: '/services/ai-cybersecurity-operations-center',
      featured: true
    },
    {
      id: 4,
      title: 'AI Content Creation Studio Pro',
      description: 'Advanced AI-powered content creation platform that generates high-quality marketing materials, articles, and multimedia content.',
      category: 'AI',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $149/month',
      features: [
        'AI content generation',
        'Multi-format support',
        'Brand consistency',
        'SEO optimization',
        'Content analytics'
      ],
      href: '/services/AI-Content-Creation-Studio-Pro',
      featured: true
    },
    {
      id: 5,
      title: 'Quantum AI Trading Platform',
      description: 'Revolutionary quantum-enhanced trading system that leverages quantum computing for superior market analysis and trading execution.',
      category: 'Quantum',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $499/month',
      features: [
        'Quantum computing power',
        'Advanced algorithms',
        'Real-time execution',
        'Risk management',
        'Portfolio optimization'
      ],
      href: '/services/Quantum-AI-Trading-Platform',
      featured: true
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology platforms. Transform your business with Zion Tech Group's revolutionary solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Innovative Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology platforms. 
              Transform your business with Zion Tech Group's revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-green-400 font-semibold">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative solutions are designed to deliver measurable results and drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Our clients see average improvements of 40% in efficiency and 30% in cost reduction.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance across all our services and platforms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">24/7 support from our team of certified professionals and AI specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using our innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-300">{contactInfo.phone}</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-300">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-gray-300">{contactInfo.address}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;