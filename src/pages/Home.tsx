import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Award,
  Target
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

// Lazy load components for better performance
const LazyHeroFeatures = lazy(() => import('../components/home/HeroFeatures'));
const LazyServicesOverview = lazy(() => import('../components/home/ServicesOverview'));
const LazyStatsSection = lazy(() => import('../components/home/StatsSection'));
const LazyTestimonials = lazy(() => import('../components/home/Testimonials'));
const LazyCTASection = lazy(() => import('../components/home/CTASection'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="mt-4 text-center">
        <div className="text-zion-cyan text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Performance-optimized stats section
const StatsSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "500+", label: "Projects Delivered", description: "Successful implementations", icon: "🚀" },
    { value: "50+", label: "Expert Team", description: "Certified professionals", icon: "👥" },
    { value: "99.9%", label: "Uptime", description: "Reliable infrastructure", icon: "⚡" },
    { value: "24/7", label: "Support", description: "Always available", icon: "🛡️" }
  ];

  return (
    <section id="stats-section" className="py-20 bg-black/50 quantum-particles">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 holographic neon-glow">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 text-gradient">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Enhanced Hero Section
const EnhancedHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transform Your Business with AI",
      subtitle: "Cutting-edge artificial intelligence solutions that drive innovation and growth",
      description: "Leverage the power of AI to automate processes, gain insights, and stay ahead of the competition.",
      cta: "Explore AI Services",
      href: "/ai-services",
      bgGradient: "from-purple-600 via-blue-600 to-cyan-600"
    },
    {
      title: "Quantum Computing Solutions",
      subtitle: "Next-generation computing power for complex problem solving",
      description: "Access quantum computing capabilities that solve previously impossible problems in finance, logistics, and research.",
      cta: "Discover Quantum",
      href: "/quantum-services",
      bgGradient: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      title: "Advanced Cybersecurity",
      subtitle: "Protect your digital assets with AI-powered security",
      description: "Comprehensive cybersecurity solutions with real-time threat detection and automated response systems.",
      cta: "Secure Your Business",
      href: "/cybersecurity",
      bgGradient: "from-red-600 via-orange-600 to-yellow-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Leading Technology Solutions Provider
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-300 font-medium max-w-3xl mx-auto"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to={heroSlides[currentSlide].href}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {heroSlides[currentSlide].cta}
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Enhanced Services Preview Section
const EnhancedServicesPreview = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and insights",
      icon: "🤖",
      href: "/ai-services",
      gradient: "from-purple-500 to-pink-500",
      features: ["Business Intelligence", "Process Automation", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Access next-generation computing power for complex problems",
      icon: "⚛️",
      href: "/quantum-services",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Financial Modeling", "Drug Discovery", "Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection with AI-powered detection",
      icon: "🛡️",
      href: "/cybersecurity",
      gradient: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Compliance", "Incident Response"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      href: "/services/cloud-devops",
      color: "from-blue-500 to-cyan-500",
      features: ["AWS/Azure", "Kubernetes", "CI/CD"]
    },
    {
      icon: Chip,
      title: "Edge Computing",
      description: "Ultra-low latency IoT and edge solutions",
      href: "/services/edge-computing-platform",
      color: "from-green-500 to-emerald-500",
      features: ["IoT Platforms", "Real-time Analytics", "5G Integration"]
    },
    {
      icon: TrendingUp,
      title: "Micro SaaS",
      description: "Innovative software-as-a-service solutions for modern businesses",
      href: "/micro-saas",
      color: "from-indigo-500 to-purple-500",
      features: ["AI Sales Copilot", "Compliance Assistant", "FinOps Optimizer"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced AI-powered security and threat detection",
      href: "/services/cybersecurity",
      color: "from-red-500 to-orange-500",
      features: ["AI Threat Detection", "Zero Trust", "Incident Response"]
    },
    {
      icon: Zap,
      title: "Quantum AI",
      description: "Next-generation quantum computing and AI integration",
      href: "/services/ai-quantum-neural-network-platform",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum Neural Networks", "AI Algorithms", "Quantum Simulation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to drive innovation and growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.href} className="block">
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 h-full hover:border-cyan-500/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 space-y-4"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 mr-4"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            to="/innovative-services-showcase-2030"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="flex items-center gap-2">
              Revolutionary Services 2030
              <Rocket className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Why Choose Us Section
const EnhancedWhyChooseUs = () => {
  const reasons = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "Every solution is designed to deliver measurable business outcomes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a vendor",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "⚡",
      title: "Rapid Deployment",
      description: "Quick implementation with minimal disruption to your business",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "AI Workflow Automation",
      description: "Transform business operations with intelligent process automation that reduces manual tasks by 80% and improves efficiency by 60%.",
      icon: Workflow,
      path: "/services/ai-workflow-automation",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Process Recognition", "Visual Designer", "Smart Triggers", "Performance Monitoring"],
      price: "From $99/month"
    },
    {
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer support and business operations with natural language processing and multi-channel support.",
      icon: Bot,
      path: "/services/ai-virtual-assistant",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["Natural Language Processing", "Multi-Channel Support", "24/7 Availability", "Personalized Interactions"],
      price: "From $79/month"
    },
    {
      title: "AI Data Analytics",
      description: "Transform data into actionable insights with machine learning, predictive analytics, and real-time dashboards.",
      icon: BarChart3,
      path: "/services/ai-data-analytics",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Predictive Analytics", "Real-time Dashboards", "Data Integration", "Automated Insights"],
      price: "From $149/month"
    }
  ];

  const technologies = [
    { name: "AI/ML", icon: Brain, description: "Advanced machine learning algorithms" },
    { name: "Quantum", icon: Cpu, description: "Quantum computing solutions" },
    { name: "Cloud", icon: Cloud, description: "Scalable cloud infrastructure" },
    { name: "Security", icon: Shield, description: "Enterprise-grade security" },
    { name: "Analytics", icon: BarChart3, description: "Real-time data insights" },
    { name: "Automation", icon: Workflow, description: "Intelligent process automation" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced artificial intelligence that learns and adapts to your business needs"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized algorithms and infrastructure for maximum speed and efficiency"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with comprehensive compliance and audit capabilities"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale your operations worldwide with our distributed infrastructure"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Featured Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and powerful solutions that are transforming businesses worldwide
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Rating and price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current text-yellow-400' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                      </div>
                      <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                    </div>
                    
                    {/* Key highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.path}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Cutting-Edge Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies to deliver innovative solutions that give your business a competitive edge
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="glass rounded-2xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">
                    <div className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-300">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ultimate Services Showcase */}
        <UltimateServicesShowcase2025 />
        
        {/* Innovative Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discover Our <span className="text-cyan-400">Innovative Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our comprehensive suite of AI-powered micro SAAS services, IT solutions, and cutting-edge technology services
              </p>
              <Link
                to="/innovative-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "Advanced AI solutions for business automation and intelligence",
                  icon: Brain,
                  color: "from-cyan-500 to-blue-500",
                  count: "12+ Services",
                  path: "/innovative-services-showcase-2025?category=ai-ml"
                },
                {
                  title: "Cloud & DevOps",
                  description: "Scalable infrastructure and automation solutions",
                  icon: Cloud,
                  color: "from-purple-500 to-pink-500",
                  count: "8+ Services",
                  path: "/innovative-services-showcase-2025?category=cloud"
                },
                {
                  title: "Cybersecurity",
                  description: "Enterprise-grade security and compliance solutions",
                  icon: Shield,
                  color: "from-emerald-500 to-teal-500",
                  count: "6+ Services",
                  path: "/innovative-services-showcase-2025?category=security"
                },
                {
                  title: "Data & Analytics",
                  description: "Business intelligence and data-driven insights",
                  icon: BarChart3,
                  color: "from-orange-500 to-red-500",
                  count: "10+ Services",
                  path: "/innovative-services-showcase-2025?category=data"
                },
                {
                  title: "Emerging Tech",
                  description: "Quantum computing and next-generation solutions",
                  icon: Atom,
                  color: "from-indigo-500 to-purple-500",
                  count: "5+ Services",
                  path: "/innovative-services-showcase-2025?category=emerging"
                },
                {
                  title: "View All Services",
                  description: "Complete overview of our comprehensive service portfolio",
                  icon: Sparkles,
                  color: "from-yellow-500 to-orange-500",
                  count: "40+ Services",
                  path: "/innovative-services-showcase-2025"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={category.path}>
                    <div className="relative p-8 rounded-2xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                        <p className="text-gray-300 mb-4">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 font-semibold">{category.count}</span>
                          <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enhanced Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies that have already revolutionized their operations with our cutting-edge solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Request Free Quote
                </Link>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Cybersecurity Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, cybersecurity, and digital transformation services. Expert technology solutions for modern enterprises."
        keywords="AI services, quantum computing, cybersecurity, cloud infrastructure, digital transformation, IT consulting, machine learning, blockchain, Web3"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Enhanced Services Preview */}
      <EnhancedServicesPreview />
      
      {/* Enhanced Why Choose Us */}
      <EnhancedWhyChooseUs />
      
      {/* Existing Sections */}
      <FeatureHighlights />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <AIServicesShowcase />
      <InteractiveTestimonials />
      <EnhancedInnovativeServicesShowcase />
      <EnhancedPricingComparison />
      <UltimateServicesShowcase2027 />
      <PricingSection />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <NewsletterSection />
      <FeaturedListingsSection />
      <QuickAccess />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
  );
};

export default Home;
