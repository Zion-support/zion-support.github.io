import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Zap, Shield, Cloud, Brain, Database, Globe, Lock, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business intelligence, automation, and predictive analytics.',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security with threat detection, zero-trust architecture, and compliance.',
      color: 'from-zion-purple to-zion-red'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, DevOps automation, and multi-cloud management.',
      color: 'from-zion-blue to-zion-cyan'
    },
    {
      icon: Rocket,
      title: 'Quantum Technology',
      description: 'Next-generation quantum computing solutions for complex problem-solving.',
      color: 'from-zion-cyan to-zion-green'
    },
    {
      icon: Lock,
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and digital asset management.',
      color: 'from-zion-purple to-zion-blue'
    },
    {
      icon: Leaf,
      title: 'Green IT',
      description: 'Sustainable technology solutions for environmental responsibility.',
      color: 'from-zion-green to-zion-blue'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: Brain },
    { number: '99.98%', label: 'System Uptime', icon: Server },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure with their AI-powered solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, InnovateLab',
      content: 'Their cybersecurity expertise and quantum computing solutions have given us a competitive edge in the market.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, FutureTech',
      content: 'The team at Zion Tech Group is incredibly knowledgeable and delivered our cloud migration project on time and budget.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  // Get featured services (top rated)
  const featuredServices = ENHANCED_SERVICES
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Get service categories with counts
  const topCategories = SERVICE_CATEGORIES
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Advanced AI models for content generation, code assistance, and predictive analytics",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain & Web3",
      description: "Smart contracts, NFT platforms, and decentralized applications",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "IoT & Edge Computing",
      description: "Real-time processing and device management at the edge",
      color: "from-zion-cyan to-zion-green"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum Computing",
      description: "Next-generation algorithms for optimization and cryptography",
      color: "from-zion-purple to-zion-pink"
    }
  ];

  const services = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content, code, and creative assets",
      price: "$29/month",
      rating: 4.9,
      reviews: 156,
      category: "AI & ML"
    },
    {
      title: "Smart Contract Development",
      description: "Custom blockchain solutions with security auditing",
      price: "$299/month",
      rating: 4.8,
      reviews: 78,
      category: "Blockchain"
    },
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT platform with real-time analytics",
      price: "$89/month",
      rating: 4.7,
      reviews: 134,
      category: "IoT & Edge"
    },
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum solutions for complex problems",
      price: "$599/month",
      rating: 4.9,
      reviews: 23,
      category: "Quantum"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Cloud className="w-6 h-6" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-purple-light rounded-full animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI solutions, blockchain technology, quantum computing, 
              and innovative IT services. We transform businesses through intelligent automation and next-generation cybersecurity.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Link to="/contact">
                  <button className="group px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25 flex items-center gap-3">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link to="/services">
                  <button className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3">
                    Explore Services
                    <Zap className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 bg-zion-cyan/20 rounded-full text-zion-cyan group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan mb-1">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI-powered solutions to cutting-edge quantum computing, we offer the most comprehensive 
              collection of micro SAAS, IT, and AI services in the industry.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {topCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/enhanced-services?category=${category.id}`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.label}</h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {category.count} services available
                </p>
                <div className="text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors">
                  Explore →
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Featured Services</h3>
            <p className="text-zion-slate-light">Our top-rated solutions trusted by businesses worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                      ⭐ {service.rating}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      ${service.price?.toLocaleString()}
                      <span className="text-sm text-zion-slate-light font-normal">/{service.pricing}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-white">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  <Link to="/enhanced-services">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/enhanced-services">
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI-First Approach",
                description: "Leverage the latest AI and machine learning technologies to stay ahead of the competition."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Enterprise Security",
                description: "Bank-grade security with zero-trust architecture and 24/7 threat monitoring."
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Rapid Implementation",
                description: "Get up and running quickly with our pre-built solutions and expert support."
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Proven Results",
                description: "Track record of delivering measurable ROI and business transformation."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovative
              </span>{' '}
              Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive suite of cutting-edge services designed to transform your business 
              and keep you ahead of the competition.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-blue-dark to-zion-purple-dark p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Featured Services</h3>
            <p className="text-zion-slate-light">Explore our most popular micro SAAS solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 p-6"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{service.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                  <div className="text-xs text-zion-slate-light">{service.reviews} reviews</div>
                </div>
                <Link to="/services">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-sm font-medium">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-purple/25">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Expertise",
                description: "20+ years of experience in technology consulting and implementation"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Innovation First",
                description: "Always at the forefront of emerging technologies and industry trends"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security standards with SOC 2 Type II compliance"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Dedicated Support",
                description: "24/7 expert support team available whenever you need assistance"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Proven Results",
                description: "500+ successful implementations with measurable ROI improvements"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Serving clients across 50+ countries with local expertise"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{feature.description}</p>
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging our innovative technology solutions 
              to gain competitive advantages and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link to="/contact">
                <button className="px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
                  Start Your Project
                </button>
              </Link>
              <Link to="/case-studies">
                <button className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">Free Consultation</div>
                <div className="text-zion-slate-light">Get expert advice on your technology needs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">Flexible Pricing</div>
                <div className="text-zion-slate-light">Choose the plan that fits your budget</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">Quick Start</div>
                <div className="text-zion-slate-light">Get up and running in days, not months</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
