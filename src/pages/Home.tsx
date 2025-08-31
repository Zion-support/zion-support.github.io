import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Users,
  TrendingUp,
  Award,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Scale,
  BookOpen,
  Home
} from 'lucide-react';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-cyan-500/5"></div>
    </div>
  );
});

// Enhanced Hero Section with improved animations
const HeroSection = React.memo(() => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroTexts = [
    "AI-Powered Solutions",
    "Digital Transformation",
    "Innovation at Scale",
    "Future-Ready Technology"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const scrollToServices = useCallback(() => {
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <FuturisticBackground />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Enhanced Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mb-6 shadow-2xl shadow-cyan-400/25">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
        </motion.div>

        {/* Dynamic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
            Transforming Business Through
          </h2>
          <div className="h-16 md:h-20 flex items-center justify-center">
            <motion.h3
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-cyan-400"
            >
              {heroTexts[currentTextIndex]}
            </motion.h3>
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          We deliver cutting-edge technology solutions that drive innovation, 
          efficiency, and growth for forward-thinking organizations worldwide. From AI-powered 
          micro SaaS platforms to enterprise digital transformation solutions, we help 
          organizations of all sizes achieve their technology goals.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToServices}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <Link
            to="/contact"
            className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-sm">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm">500+ Clients Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Industry Leader 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="text-sm">50+ AI Services</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-400" />
            <span className="text-sm">25+ Countries Served</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
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
});

// Enhanced Statistics Section
const StatisticsSection = React.memo(() => {
  const stats = [
    { icon: Users, value: "500+", label: "Global Clients", color: "text-blue-400" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-green-400" },
    { icon: Rocket, value: "24/7", label: "Support Available", color: "text-cyan-400" },
    { icon: Award, value: "15+", label: "Years Experience", color: "text-purple-400" },
    { icon: Brain, value: "50+", label: "AI Services", color: "text-cyan-400" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-purple-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of organizations 
            achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500/50 group-hover:bg-slate-700/50 transition-all duration-300">
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Enhanced Services Preview Section
const ServicesPreviewSection = React.memo(() => {
  const services = [
    {
      title: "AI Enterprise Resource Planning",
      description: "Transform your business operations with AI-powered ERP that autonomously manages, optimizes, and scales your entire business ecosystem.",
      icon: Database,
      color: "from-zion-purple to-zion-purple-dark",
      link: "/services/ai-enterprise-resource-planning"
    },
    {
      title: "AI Quantum Computing Solutions",
      description: "Revolutionize your computational capabilities with AI-powered quantum computing that achieves 1000x faster processing.",
      icon: Atom,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-quantum-computing-solutions"
    },
    {
      title: "AI Autonomous Manufacturing",
      description: "Transform your manufacturing with AI-powered automation, quality control, and predictive maintenance.",
      icon: Factory,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-autonomous-manufacturing-platform"
    },
    {
      title: "AI Project Management",
      description: "Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.",
      icon: Workflow,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-project-management-platform"
    },
    {
      title: "AI Enterprise Workflow Automation",
      description: "Streamline business processes with intelligent workflow automation that learns and optimizes over time.",
      icon: Workflow,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-enterprise-workflow-automation"
    },
    {
      title: "AI Cybersecurity Threat Intelligence",
      description: "Protect your organization with AI-powered threat detection and automated response systems.",
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security protocols and threat protection",
      href: "/services/cybersecurity",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Incident Response", "Compliance"]
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
      features: ["AI Sales Copilot", "Compliance Assistant", "FinOps Optimizer", "BI Dashboard", "Support Automation", "Project Management", "Marketing Automation"]
    },
    {
      icon: Eye,
      title: "Customer Experience",
      description: "AI-powered customer experience optimization and analytics platforms",
      href: "/services/ai-customer-experience-optimization-platform",
      color: "from-purple-500 to-pink-500",
      features: ["Experience Optimization", "Predictive Analytics", "Personalization", "Multi-channel Tracking"]
    },
    {
      icon: Truck,
      title: "Supply Chain AI",
      description: "AI-powered supply chain optimization and logistics management",
      href: "/services/ai-supply-chain-optimization-platform",
      color: "from-blue-500 to-green-500",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"]
    },
    {
      icon: Zap,
      title: "Quantum AI",
      description: "Next-generation quantum computing and AI integration",
      href: "/services/ai-quantum-neural-network-platform",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum Neural Networks", "AI Algorithms", "Quantum Simulation"]
    },
    {
      icon: Scale,
      title: "AI Legal Research",
      description: "Revolutionary AI-powered legal research and case analysis platform",
      href: "/services/ai-autonomous-legal-research-platform",
      color: "from-blue-500 to-indigo-500",
      features: ["Case Analysis", "Legal Research", "Compliance Monitoring", "Document Review"]
    },
    {
      icon: BookOpen,
      title: "AI Educational Content",
      description: "AI-powered educational content creation across multiple formats",
      href: "/services/ai-educational-content-creation-platform",
      color: "from-green-500 to-emerald-500",
      features: ["Content Generation", "Multi-Format", "Personalized Learning", "Analytics"]
    },
    {
      icon: Home,
      title: "AI Real Estate Analytics",
      description: "AI-powered real estate investment analytics and market intelligence",
      href: "/services/ai-real-estate-investment-analytics-platform",
      color: "from-orange-500 to-red-500",
      features: ["Market Analysis", "Investment Modeling", "ROI Optimization", "Risk Assessment"]
    }
  ];

  return (
    <section id="services-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive AI & Technology Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From cutting-edge AI solutions to innovative micro SaaS platforms, we offer comprehensive 
            technology services designed to accelerate your digital transformation and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.href} className="block">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
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
          className="text-center mt-12"
        >
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/comprehensive-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-zion-cyan border-2 border-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/comprehensive-pricing-guide-2026"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-zion-purple border-2 border-zion-purple hover:bg-zion-purple hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                View Pricing Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
        </motion.div>

        {/* Latest Innovations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Latest Innovations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/ai-customer-experience-optimization-platform"
              className="px-6 py-3 border border-purple-400/50 text-purple-400 font-medium rounded-lg hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
            >
              AI Customer Experience Platform
            </Link>
            <Link
              to="/services/ai-supply-chain-optimization-platform"
              className="px-6 py-3 border border-blue-400/50 text-blue-400 font-medium rounded-lg hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
            >
              AI Supply Chain Optimization
            </Link>
            <Link
              to="/innovative-services-showcase-2026"
              className="px-6 py-3 border border-cyan-400/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
            >
              Innovation Showcase 2026
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Enhanced Testimonials Section
const TestimonialsSection = React.memo(() => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. Our efficiency increased by 300% within 6 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "The cybersecurity platform they implemented has been bulletproof. We've had zero security incidents since deployment.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Director",
      company: "Global Retail Co.",
      content: "Their cloud migration expertise saved us millions and improved our customer experience dramatically.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about working with Zion Tech Group.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

// Enhanced Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "AI Autonomous Business Operations",
      description: "Transform your business with AI that autonomously manages, optimizes, and scales your entire business ecosystem.",
      icon: Brain,
      color: "from-zion-purple to-zion-purple-dark",
      link: "/services/ai-autonomous-business-operations-platform"
    },
    {
      title: "Quantum Edge Computing",
      description: "Revolutionize your infrastructure with the world's first quantum-enhanced edge computing platform.",
      icon: Atom,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/quantum-edge-computing-solutions"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Transform customer relationships with AI-powered analytics that understand and optimize every interaction.",
      icon: BarChart3,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-customer-experience-analytics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              With AI Innovation
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business with our cutting-edge AI solutions that automate, 
            optimize, and revolutionize your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and technology innovation with proven track record."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and 24/7 threat monitoring."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized support and infrastructure."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "World-class engineers, data scientists, and technology consultants."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Why Choose Zion Tech
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              For Over a Decade
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Our proven track record, cutting-edge technology, and unwavering commitment to excellence 
            make us the preferred choice for forward-thinking organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Latest Innovations Section
const LatestInnovationsSection = () => {
  const latestServices = [
    {
      title: "AI Autonomous Legal Research Platform",
      description: "Revolutionary AI-powered legal research and case analysis with 99.7% accuracy",
      icon: Scale,
      color: "from-blue-500 to-indigo-500",
      link: "/services/ai-autonomous-legal-research-platform",
      features: ["Case Analysis", "Legal Research", "Compliance Monitoring", "Document Review"]
    },
    {
      title: "AI Educational Content Creation Platform",
      description: "AI-powered educational content creation across multiple formats with 80% time savings",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-educational-content-creation-platform",
      features: ["Content Generation", "Multi-Format", "Personalized Learning", "Analytics"]
    },
    {
      title: "AI Real Estate Investment Analytics Platform",
      description: "AI-powered real estate investment analytics with 40% higher returns",
      icon: Home,
      color: "from-orange-500 to-red-500",
      link: "/services/ai-real-estate-investment-analytics-platform",
      features: ["Market Analysis", "Investment Modeling", "ROI Optimization", "Risk Assessment"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Latest Innovations 2026
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Revolutionary New Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Just Launched
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of AI-powered solutions with our latest groundbreaking services 
            designed to transform industries and drive unprecedented growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-zinc-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced CTA Section
const CTASection = React.memo(() => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already accelerated their digital 
              transformation with Zion Tech Group. From AI-powered micro SaaS solutions to 
              enterprise digital transformation, we have the expertise to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="flex justify-center">
              <Link
                to="/innovative-services-showcase-2026"
                className="group px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  View Innovation Showcase 2026
                </span>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Target2 className="w-4 h-4 text-purple-400" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home Component
const Home: React.FC = () => {
  // SEO structured data for the home page
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - AI-Powered Technology Solutions",
    "description": "Transform your business with cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Expert IT consulting and micro-SaaS solutions.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI-powered technology solutions, cybersecurity, cloud computing, and digital transformation services.",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="AI-Powered Technology Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Expert IT consulting and micro-SaaS solutions from Zion Tech Group."
        keywords="AI solutions, artificial intelligence, quantum computing, cybersecurity, digital transformation, IT consulting, micro-SaaS, cloud solutions, machine learning, data analytics, blockchain, IoT, edge computing"
        canonical="https://ziontechgroup.com"
        structuredData={homePageStructuredData}
      />
      <HeroSection />
      <ServicesSection />
      <LatestInnovationsSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default Home;
