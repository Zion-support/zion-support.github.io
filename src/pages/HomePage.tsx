import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Play,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  ChevronUp,
  Shield,
  Globe,
  MapPin,
  Zap,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceShowcase from '../components/ServiceShowcase';
import { contactInfo } from '../data/services';

// Optimized futuristic animated background component with reduced re-renders
const FuturisticBackground: React.FC = React.memo(() => {
  const particles = React.useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2
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
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced Floating Action Button Component with better UX
const FloatingActionButton: React.FC = React.memo(() => {
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

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.mobile}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Quick Actions */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute bottom-16 right-0 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    onClick={() => handleContactClick('phone')}
                    className="block w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Call us"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleContactClick('email')}
                    className="block w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Email us"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isExpanded ? "Close quick actions" : "Open quick actions"}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronUp className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

FloatingActionButton.displayName = 'FloatingActionButton';

// Enhanced Stats Component with better animations
const StatsSection: React.FC = React.memo(() => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award, color: 'from-yellow-400 to-orange-500' },
    { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'from-green-400 to-emerald-500' },
    { number: '24/7', label: 'Support Available', icon: Shield, color: 'from-blue-400 to-cyan-500' },
    { number: '50+', label: 'Team Members', icon: Users, color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Success Metrics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional results through innovation and dedication
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Enhanced Hero Section Component with better content and animations
const HeroSection: React.FC = React.memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <FuturisticBackground />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Badge */}
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-medium">Innovation at Every Step</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 block">
              Cutting-Edge Technology
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Zion Tech Group delivers innovative AI, cybersecurity, and digital transformation solutions
            to accelerate your business growth and competitive advantage in the digital age.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center group shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => window.location.href = `tel:${contactInfo.mobile}`}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm hover:scale-105"
            >
              Get Free Consultation
            </button>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Middletown, DE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// New Features Section Component
const FeaturesSection: React.FC = React.memo(() => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2 compliance"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow with confidence using our scalable architecture"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering measurable business outcomes"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine innovation with reliability to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

// Main Home Component with Suspense for better performance
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <Suspense fallback={
        <div className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading services...</p>
          </div>
        </div>
      }>
        <ServiceShowcase />
      </Suspense>
      <StatsSection />
      <FloatingActionButton />
    </div>
  );
};

export default HomePage;
