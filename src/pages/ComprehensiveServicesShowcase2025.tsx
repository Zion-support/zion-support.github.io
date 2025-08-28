import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Cloud, Shield, Zap, Users, Rocket, TrendingUp, 
  CheckCircle, ArrowRight, Star, Award, Globe, Database, 
  Lock, Cpu, Network, Smartphone, BarChart3, Code, Server, 
  Chip, Wifi, ShieldCheck, Bot, GitFork, Eye, Sparkles,
  Phone, Mail, MapPin, MessageSquare, FileText, Search,
  Clock, DollarSign, Target, BarChart, MessageCircle,
  ShoppingCart, HelpCircle, BookOpen, Heart, Atom, Gauge,
  PenTool, Satellite, Leaf, Gamepad2, Coins, Key, Fingerprint
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 70 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 25 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 15 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket, count: 20 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 8 },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, count: 10 },
    { id: 'space', name: 'Space Technology', icon: Satellite, count: 4 },
    { id: 'biotech', name: 'Biotechnology', icon: Heart, count: 3 }
  ];

  const featuredServices = [
    {
      id: 'ai-sales-copilot',
      category: 'ai',
      icon: Bot,
      title: "AI Sales Copilot",
      description: "Intelligent sales automation with AI-powered lead scoring and predictive analytics.",
      pricing: "$299/month",
      benefits: ["Increase sales by 40%", "Reduce manual work by 60%", "Improve conversion rates"],
      link: "/services/ai-sales-copilot",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'quantum-supremacy-platform',
      category: 'quantum',
      icon: Atom,
      title: "Quantum Supremacy Platform",
      description: "Achieve quantum advantage with our next-generation quantum computing platform.",
      pricing: "$5,000/month",
      benefits: ["Solve NP-hard problems", "Achieve quantum advantage", "Future-proof technology"],
      link: "/services/quantum-supremacy-platform",
      featured: true,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 'space-mining-platform',
      category: 'space',
      icon: Satellite,
      title: "Space Mining Platform",
      description: "Revolutionary platform for asteroid mining and space resource extraction.",
      pricing: "$15,000/month",
      benefits: ["Space resources", "Investment returns", "Technology advancement"],
      link: "/services/space-mining-platform",
      featured: true,
      color: "from-green-500 to-teal-500"
    }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Services Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              2025 Edition
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Discover our complete portfolio of innovative services spanning AI, quantum computing, 
            space technology, and more. Transform your business with cutting-edge solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#services" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
            </a>
            <a 
              href="/comprehensive-pricing-guide-2027" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 ring-2 ring-yellow-400"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={service.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.filter(cat => cat.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{category.count} services</p>
                  </div>
                </div>
                
                <a
                  href={`/${category.id === 'ai' ? 'ai-services' : category.id === 'cloud' ? 'it-services' : category.id === 'micro-saas' ? 'micro-saas' : 'services'}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {contactInfo.email}
              </a>
            </div>
            <div className="text-blue-100">
              <p className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                {contactInfo.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="hover:underline">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
