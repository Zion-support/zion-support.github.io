import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Award,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  MessageSquare,
  HelpCircle,
  Play,
  Pause
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
    })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          style={{
            left: particle.left,
            top: particle.top
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10"></div>
    </div>
  );
});

// Floating Action Button Component
const FloatingActionButton = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={scrollToTop}
        className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </motion.div>
  );
});

// Hero Section Component
const HeroSection = React.memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <FuturisticBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SAAS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-zion-cyan" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe2 className="w-5 h-5 text-zion-cyan" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-zion-cyan" />
              <span>Industry Leader</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Services Overview Component
const ServicesOverview = React.memo(() => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Advanced AI solutions for business process automation and intelligence',
      href: '/services/ai-automation'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      href: '/services/cloud-devops'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection',
      href: '/services/cybersecurity'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics',
      href: '/services/data-analytics'
    }
  ];

  return (
    <section className="py-20 bg-zion-blue-dark/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/60 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <Link
                to={service.href}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium inline-flex items-center"
              >
                Learn More
                <ChevronUp className="w-4 h-4 ml-1 rotate-90" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Stats Section Component
const StatsSection = React.memo(() => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Briefcase },
    { number: '50+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime SLA', icon: ShieldCheck },
    { number: '24/7', label: 'Support Available', icon: MessageSquare }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <FloatingActionButton />
    </div>
  );
}

