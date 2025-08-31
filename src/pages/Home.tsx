import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Target2
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

// Enhanced Hero Section with better messaging and CTAs
const HeroSection = React.memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Futuristic Background */}
      <FuturisticBackground />
      
      {/* Enhanced Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            Pioneering the Future of Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Empowering enterprises with cutting-edge AI, cybersecurity, cloud solutions, and innovative technology services. 
            Transform your business with our comprehensive suite of next-generation solutions.
          </p>
        </motion.div>

        {/* Enhanced Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            to="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link
            to="/contact"
            className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Get Started Today
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/about"
            className="group px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-green-400" />
            <div className="text-left">
              <div className="text-white font-semibold">ISO 27001 Certified</div>
              <div className="text-sm text-gray-400">Enterprise Security</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <Users className="w-6 h-6 text-blue-400" />
            <div className="text-left">
              <div className="text-white font-semibold">500+ Global Clients</div>
              <div className="text-sm text-gray-400">Trusted Worldwide</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <Award className="w-6 h-6 text-yellow-400" />
            <div className="text-left">
              <div className="text-white font-semibold">Industry Leader 2024</div>
              <div className="text-sm text-gray-400">Award Winning</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center cursor-pointer"
            onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
          <p className="text-xs text-cyan-400/70 mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
});

// Enhanced Statistics Section
const StatisticsSection = React.memo(() => {
  const stats = [
    { 
      icon: Users, 
      value: "500+", 
      label: "Global Clients", 
      color: "text-blue-400",
      description: "Serving enterprises worldwide"
    },
    { 
      icon: TrendingUp, 
      value: "98%", 
      label: "Client Satisfaction", 
      color: "text-green-400",
      description: "Exceeding expectations consistently"
    },
    { 
      icon: Rocket, 
      value: "24/7", 
      label: "Support Available", 
      color: "text-cyan-400",
      description: "Round-the-clock assistance"
    },
    { 
      icon: Award, 
      value: "15+", 
      label: "Years Experience", 
      color: "text-purple-400",
      description: "Proven track record of success"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900/80 to-slate-800/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our track record speaks for itself. We've helped hundreds of organizations 
            achieve their digital transformation goals with measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl group-hover:border-cyan-500/50 group-hover:bg-slate-700/30 transition-all duration-300 backdrop-blur-sm">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-cyan-500/50 group-hover:bg-slate-700/50 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                
                {/* Value */}
                <div className={`text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-white font-semibold text-lg mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>ISO 27001 & SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>Global Delivery Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 Customer Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Enhanced Services Preview Section
const ServicesPreviewSection = React.memo(() => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence and machine learning solutions that transform business operations",
      href: "/ai-services",
      color: "from-purple-500 to-pink-500",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"],
      badge: "Hot"
    },
    {
      icon: Shield,
      title: "Quantum AI Cybersecurity",
      description: "Future-proof quantum-resistant security platform",
      href: "/services/quantum-ai-cybersecurity-platform",
      color: "from-red-500 to-orange-500",
      features: ["Quantum Encryption", "AI Threat Detection", "Real-time Monitoring"],
      badge: "Hot"
    },
    {
      icon: BarChart3,
      title: "AI Enterprise Intelligence",
      description: "AI-powered business intelligence and analytics",
      href: "/services/ai-enterprise-intelligence-platform",
      color: "from-blue-500 to-cyan-500",
      features: ["Predictive Analytics", "Real-time Insights", "Decision Support"],
      badge: "Popular"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation solutions for seamless operations",
      href: "/services/cloud-devops",
      color: "from-blue-500 to-cyan-500",
      features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
      badge: "Trending"
    },
    {
      icon: Chip,
      title: "Edge Computing",
      description: "Ultra-low latency IoT and edge solutions for real-time data processing",
      href: "/services/edge-computing-platform",
      color: "from-green-500 to-emerald-500",
      features: ["IoT Platforms", "Real-time Analytics", "5G Integration", "Edge AI"],
      badge: "New"
    },
    {
      icon: TrendingUp,
      title: "Micro SaaS",
      description: "Innovative software-as-a-service solutions for modern businesses",
      href: "/micro-saas",
      color: "from-indigo-500 to-purple-500",
      features: ["AI Sales Copilot", "Compliance Assistant", "FinOps Optimizer", "BI Dashboard", "Support Automation", "Project Management", "Marketing Automation"],
      badge: "Popular"
    },
    {
      icon: Zap,
      title: "Quantum AI",
      description: "Next-generation quantum computing and AI integration",
      href: "/services/ai-quantum-neural-network-platform",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum Neural Networks", "AI Algorithms", "Quantum Simulation"],
      badge: "Trending"
    }
  ];

  return (
    <section id="services-section" className="py-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive business growth in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={service.href} className="block">
                <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
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
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our infrastructure with their AI-powered solutions. The results exceeded our expectations.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "Their cybersecurity expertise and 24/7 support have been invaluable to our organization's security posture.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT",
      company: "Global Enterprises",
      content: "The cloud migration and DevOps automation they implemented reduced our deployment time by 80%.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say about 
            their experience working with Zion Tech Group.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 h-full hover:border-cyan-500/50 hover:bg-slate-700/30 transition-all duration-300 backdrop-blur-sm">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
          >
            <span>View More Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already accelerated their digital 
              transformation with Zion Tech Group. Let's discuss how we can help you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

// Final Call-to-Action Section
const FinalCTASection = React.memo(() => {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Join hundreds of organizations that have already accelerated their digital transformation 
            with Zion Tech Group. Let's build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              to="/schedule-demo"
              className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Schedule a Demo
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home Component
const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <ServicesPreviewSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
