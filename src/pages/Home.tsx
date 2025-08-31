import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageSEO } from '../components/SEOOptimizer';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';
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
import { SEO } from "@/components/SEO";

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.2,
      duration: 8 + i * 0.5,
      size: Math.random() * 2 + 1
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-cyan-400 rounded-full opacity-60 shadow-lg shadow-cyan-400/30"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-cyan-500/5"></div>
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const heroFeatures = [
    {
      icon: Brain,
      text: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that transforms business operations and drives innovation across all industries.",
      gradient: "from-zion-cyan/20 to-zion-blue/20"
    },
    {
      icon: Atom,
      text: "Quantum Computing",
      description: "Next-generation quantum solutions that solve complex problems beyond classical computing capabilities.",
      gradient: "from-zion-purple/20 to-zion-cyan/20"
    },
    {
      icon: Shield,
      text: "Enterprise Security",
      description: "Bank-level security and compliance frameworks that protect your business and customer data.",
      gradient: "from-zion-blue/20 to-zion-purple/20"
    },
    {
      icon: Rocket,
      text: "Space Technology",
      description: "Pioneering space tech solutions that push the boundaries of what's possible in aerospace and satellite systems.",
      gradient: "from-zion-cyan/20 to-zion-purple/20"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent automation solutions that streamline operations and boost productivity",
      color: "from-zion-cyan to-zion-blue",
      gradient: "from-zion-cyan/20 to-zion-blue/20",
      stats: "40% efficiency increase"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      color: "from-zion-blue to-zion-purple",
      gradient: "from-zion-blue/20 to-zion-purple/20",
      stats: "99.9% uptime guarantee"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat detection and comprehensive security frameworks",
      color: "from-zion-purple to-zion-cyan",
      gradient: "from-zion-purple/20 to-zion-cyan/20",
      stats: "Zero breach record"
    },
    {
      icon: Atom,
      title: "Quantum Solutions",
      description: "Quantum computing and edge computing for next-gen applications",
      color: "from-zion-cyan to-zion-purple",
      gradient: "from-zion-cyan/20 to-zion-purple/20",
      stats: "1000x faster processing"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Global Clients", color: "text-zion-cyan" },
    { icon: Award, value: "50+", label: "Industry Awards", color: "text-zion-purple" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-zion-blue" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction", color: "text-zion-cyan" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Industries",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our operational efficiency by 40% in just 6 months.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering",
      company: "InnovateTech",
      content: "The quantum computing solutions they implemented solved problems we thought were impossible. Game-changing technology.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "Global Solutions Inc",
      content: "Outstanding cybersecurity implementation. We feel completely secure knowing our data is protected by their advanced systems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zion-slate-light">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Zion Tech Group - Leading AI, Quantum Computing & Space Technology Solutions"
        description="Transform your business with cutting-edge AI solutions, quantum computing platforms, cybersecurity services, and space technology innovations. Expert consulting and implementation."
        keywords="AI solutions, quantum computing, cybersecurity, space technology, IT consulting, digital transformation, enterprise solutions"
        image="/images/zion-tech-group-hero.jpg"
        url="https://ziontechgroup.com"
        type="website"
        author="Zion Tech Group"
      />
      
      <PerformanceOptimizer enabled={true} showMetrics={false} />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-transparent to-zion-purple/10" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center max-w-6xl mx-auto">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                The Future of{' '}
                <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                  Technology
                </span>{' '}
                is Here
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Pioneering the next generation of AI, quantum computing, and space technology solutions. 
                Transform your business with cutting-edge innovation.
              </motion.p>

              {/* Feature Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 mb-12"
              >
                {heroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      activeFeature === index ? 'scale-110' : 'scale-100'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className={`p-4 rounded-2xl ${feature.gradient} bg-opacity-20 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300`}>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold text-sm">{feature.text}</span>
                      </div>
                    </div>
                    {/* Active indicator */}
                    {activeFeature === index && (
                      <motion.div
                        layoutId="activeFeature"
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-zion-cyan rounded-full"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Active Feature Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
                    {heroFeatures[activeFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/services"
                  className="group relative px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-8 py-4 border-2 border-zion-purple/30 text-zion-purple-300 font-semibold rounded-xl hover:border-zion-purple/60 hover:text-zion-purple-200 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center space-x-2">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Watch Demo</span>
                  </span>
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-16 pt-8 border-t border-zion-purple/20"
              >
                <p className="text-zion-slate-light text-sm mb-6">Trusted by industry leaders worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {['Fortune 500', 'NASA', 'MIT', 'Stanford', 'Google', 'Microsoft'].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="text-zion-slate-light font-medium"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From AI automation to quantum computing, we provide end-to-end solutions that drive innovation and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8 h-full hover:border-zion-purple/40 transition-all duration-300 transform group-hover:-translate-y-2`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>
                    <div className="text-sm font-semibold text-zion-cyan">{service.stats}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold px-8 py-4 rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-zion-slate-light font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                      <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Business?
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Let's discuss how our cutting-edge technology solutions can revolutionize your operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold px-8 py-4 rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="bg-zion-slate-darker hover:bg-zion-slate-dark text-white font-semibold px-8 py-4 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
