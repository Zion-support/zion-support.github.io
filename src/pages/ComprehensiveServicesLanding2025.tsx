import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Star, 
  Rocket, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Atom, 
  Cpu, 
  Network, 
  Database,
  TrendingUp,
  Users,
  Target,
  Globe,
  Code,
  Lock,
  Eye,
  Heart,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  HelpCircle,
  FileText,
  Truck,
  Mail,
  Smartphone,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  GitFork,
  Server,
  Building,
  Leaf,
  Satellite,
  Gamepad2,
  Coins,
  GraduationCap,
  Activity,
  Briefcase,
  Newspaper,
  BookOpen,
  ExternalLink,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesLanding2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredServices = [
    {
      name: 'AI Autonomous Business Operations Platform',
      description: 'Revolutionary AI platform that autonomously manages and optimizes business operations',
      icon: Brain,
      category: 'AI & Automation',
      features: ['Autonomous Decision Making', 'Process Optimization', 'Predictive Analytics', 'Self-Healing Systems'],
      href: '/services/ai-autonomous-business-operations-platform',
      color: 'from-blue-500 to-purple-600',
      pricing: 'Starting at $2,500/month',
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Quantum AI Hybrid Computing Platform',
      description: 'Next-generation platform combining quantum computing with AI for unprecedented performance',
      icon: Atom,
      category: 'Quantum Computing',
      features: ['Quantum AI Algorithms', 'Hybrid Processing', 'Quantum Advantage', 'AI Optimization'],
      href: '/services/quantum-ai-hybrid-platform',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $5,000/month',
      rating: 4.8,
      reviews: 89
    },
    {
      name: 'AI-Powered Cybersecurity Operations Center',
      description: 'Intelligent security operations center with AI-driven threat detection and response',
      icon: Shield,
      category: 'Cybersecurity',
      features: ['AI Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Management'],
      href: '/services/ai-cybersecurity-operations-center',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $3,500/month',
      rating: 4.9,
      reviews: 234
    },
    {
      name: 'Sustainable Technology Platform',
      description: 'Comprehensive platform for implementing and managing sustainable technology solutions',
      icon: Leaf,
      category: 'Sustainability',
      features: ['Carbon Footprint Tracking', 'Energy Optimization', 'Green IT Solutions', 'ESG Reporting'],
      href: '/services/sustainable-technology',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,800/month',
      rating: 4.7,
      reviews: 67
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics platform powered by AI for improved patient outcomes',
      icon: Heart,
      category: 'Healthcare',
      features: ['Patient Analytics', 'Predictive Diagnostics', 'Treatment Optimization', 'Clinical Insights'],
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $4,200/month',
      rating: 4.8,
      reviews: 123
    },
    {
      name: 'Space Technology Solutions',
      description: 'Cutting-edge space technology solutions for satellite operations and space exploration',
      icon: Satellite,
      category: 'Space Tech',
      features: ['Satellite Management', 'Space Analytics', 'Orbital Optimization', 'Mission Planning'],
      href: '/services/space-tech',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $8,500/month',
      rating: 4.9,
      reviews: 45
    }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 24, icon: Star },
    { id: 'ai-automation', name: 'AI & Automation', count: 8, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 4, icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6, icon: Shield },
    { id: 'sustainability', name: 'Sustainability', count: 3, icon: Leaf },
    { id: 'healthcare', name: 'Healthcare', count: 2, icon: Heart },
    { id: 'space-tech', name: 'Space Technology', count: 1, icon: Satellite }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'CTO, TechCorp Inc.',
      company: 'TechCorp Inc.',
      content: 'The AI Autonomous Business Operations Platform has transformed our operations. We\'ve seen a 40% increase in efficiency and significant cost savings.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Security Director',
      company: 'GlobalBank',
      content: 'The AI Cybersecurity Operations Center provides unparalleled protection. We\'ve detected and prevented threats that traditional systems missed.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      title: 'Research Lead',
      company: 'Quantum Research Labs',
      content: 'The Quantum AI Hybrid Platform has accelerated our research by 10x. It\'s a game-changer for complex computational problems.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  const stats = [
    { label: 'Active Clients', value: '500+', icon: Users },
    { label: 'Services Delivered', value: '2,000+', icon: Rocket },
    { label: 'Success Rate', value: '99.8%', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '4.9/5', icon: Star }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? featuredServices 
    : featuredServices.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const searchedServices = searchQuery 
    ? filteredServices.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <SEO 
        title="2025 Comprehensive Services Landing - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive 2025 services including AI autonomous operations, quantum AI hybrid computing, and cutting-edge cybersecurity solutions."
        keywords="2025 services, AI autonomous operations, quantum computing, cybersecurity, sustainable technology"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Comprehensive Services Landing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Technology</span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience Zion Tech Group's comprehensive 2025 services that combine cutting-edge AI, 
              quantum computing, and innovative solutions to transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {serviceCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive 2025 Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the full spectrum of technology solutions designed to address every aspect 
              of your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                </div>

                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our comprehensive 2025 services are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    <div className="text-blue-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Comprehensive Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of forward-thinking companies already leveraging our comprehensive 2025 services 
              to gain competitive advantages and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}