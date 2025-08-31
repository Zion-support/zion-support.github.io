import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Play,
  ChevronRight,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Menu,
  X,
  Sparkles,
  Lightbulb,
  Target,
  Zap,
  ArrowUpRight,
  Cloud
} from 'lucide-react';

// Enhanced loading components
import { EnhancedLoadingSpinner, PageSkeleton, CardSkeleton } from '../components/ui/EnhancedLoadingSpinner';

// Lazy load components for better performance
const LazyTestimonials = lazy(() => import('../components/Testimonials'));
const LazyServicesGrid = lazy(() => import('../components/ServicesGrid'));
const LazyStatsSection = lazy(() => import('../components/StatsSection'));

// Loading skeleton components
const HeroSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-20 bg-gray-200 rounded mb-6"></div>
    <div className="h-8 bg-gray-200 rounded mb-8 max-w-4xl mx-auto"></div>
    <div className="flex justify-center gap-6 mb-10">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-10 w-32 bg-gray-200 rounded-full"></div>
      ))}
    </div>
    <div className="flex justify-center gap-4">
      <div className="h-14 w-40 bg-gray-200 rounded-lg"></div>
      <div className="h-14 w-40 bg-gray-200 rounded-lg"></div>
    </div>
  </div>
);

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    if (!isLoaded) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  const heroFeatures = [
    { 
      icon: Brain, 
      text: 'AI-Powered Solutions', 
      description: 'Transform your business with cutting-edge artificial intelligence',
      color: 'from-cyan-500 to-blue-600',
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
    },
    { 
      icon: Shield, 
      text: 'Enterprise Security', 
      description: 'Bank-grade security for your most critical business data',
      color: 'from-green-500 to-emerald-600',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
    },
    { 
      icon: Rocket, 
      text: 'Digital Transformation', 
      description: 'Accelerate your journey to the digital future',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
    },
    { 
      icon: Globe, 
      text: 'Global Scale', 
      description: 'Deploy anywhere with our cloud-native architecture',
      color: 'from-orange-500 to-red-600',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe }
  ];

  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-solutions'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      link: '/services/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat protection and compliance',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      link: '/services/cybersecurity'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business modernization',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      link: '/services/digital-transformation'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <HeroSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Solutions
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zion Tech Group delivers cutting-edge artificial intelligence, cloud infrastructure, 
              and digital transformation services that empower enterprises to thrive in the digital age.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                    activeFeature === index ? 'scale-110 shadow-lg' : 'scale-100'
                  } ${feature.gradient}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5" />
                    <span>{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation journey
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={service.link} className="block">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about their transformation journey with Zion Tech Group
            </p>
          </motion.div>

          <Suspense fallback={<CardSkeleton className="max-w-4xl mx-auto" />}>
            <LazyTestimonials />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of enterprises that have already accelerated their digital transformation 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}