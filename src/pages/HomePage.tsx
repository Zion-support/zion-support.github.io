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
  ArrowUpRight
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
    <div className="h-20 bg-zion-slate-darker rounded mb-6"></div>
    <div className="h-8 bg-zion-slate-darker rounded mb-8 max-w-4xl mx-auto"></div>
    <div className="flex justify-center gap-6 mb-10">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-10 w-32 bg-zion-slate-darker rounded-full"></div>
      ))}
    </div>
    <div className="flex justify-center gap-4">
      <div className="h-14 w-40 bg-zion-slate-darker rounded-lg"></div>
      <div className="h-14 w-40 bg-zion-slate-darker rounded-lg"></div>
    </div>
  </div>
);

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
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
      icon: Atom, 
      text: 'Quantum Computing', 
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
    },
    { 
      icon: Shield, 
      text: 'Advanced Security', 
      description: 'Protect your digital assets with AI-powered security solutions',
      color: 'from-green-500 to-emerald-600',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
    },
    { 
      icon: Rocket, 
      text: 'Space Technology', 
      description: 'Pioneering innovations in space exploration and satellite technology',
      color: 'from-orange-500 to-red-600',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
    }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      href: '/services/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-cyan-500 to-blue-600',
      stats: { accuracy: '99.7%', speed: '10x faster', efficiency: '85% improvement' }
    },
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities',
      icon: Atom,
      href: '/services/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum AI Hybrid', 'Quantum Security', 'Quantum Optimization'],
      color: 'from-purple-500 to-pink-600',
      stats: { accuracy: '99.9%', speed: '1000x faster', efficiency: '95% improvement' }
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with AI-powered security solutions',
      icon: Shield,
      href: '/services/cybersecurity',
      features: ['Zero Trust Security', 'AI Threat Detection', 'Security Headers', 'Compliance Management'],
      color: 'from-green-500 to-emerald-600',
      stats: { accuracy: '99.8%', speed: 'Real-time', efficiency: '90% reduction' }
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your infrastructure and processes for the digital age',
      icon: Rocket,
      href: '/services/digital-transformation',
      features: ['Cloud Migration', 'Process Automation', 'Data Analytics', 'Legacy Modernization'],
      color: 'from-orange-500 to-red-600',
      stats: { accuracy: '99.5%', speed: '3x faster', efficiency: '75% improvement' }
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain, change: '+25%', changeType: 'increase' },
    { label: 'Quantum Qubits', value: '1000+', icon: Atom, change: '+40%', changeType: 'increase' },
    { label: 'Security Threats Blocked', value: '1M+', icon: Shield, change: '+60%', changeType: 'increase' },
    { label: 'Client Satisfaction', value: '99.8%', icon: Heart, change: '+5%', changeType: 'increase' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp Industries',
      company: 'TechCorp Industries',
      content: 'Zion Tech Group\'s AI solutions transformed our data processing capabilities. We\'ve seen a 300% improvement in efficiency.',
      avatar: '/images/testimonials/sarah-chen.jpg',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Innovation',
      company: 'FutureTech Solutions',
      content: 'The quantum computing platform exceeded our expectations. Complex calculations that took hours now complete in minutes.',
      avatar: '/images/testimonials/michael-rodriguez.jpg',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Quantum Research Labs',
      content: 'Zion\'s cybersecurity solutions provide unmatched protection. We\'ve had zero security breaches since implementation.',
      avatar: '/images/testimonials/emily-watson.jpg',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return <PageSkeleton showHeader={true} showSidebar={false} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark">
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our cutting-edge solutions that are reshaping industries and driving innovation forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 h-full hover:border-zion-purple/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 ${service.color} bg-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-zion-slate-light capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              By the{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our impact speaks for itself. See how we're transforming businesses and industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300 transform hover:scale-105">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  
                  {/* Label */}
                  <div className="text-zion-slate-light mb-3">{stat.label}</div>
                  
                  {/* Change */}
                  <div className={`inline-flex items-center text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </div>
                </div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our innovative solutions.
            </p>
          </motion.div>

          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <CardSkeleton key={i} showImage={false} />
            ))}
          </div>}>
            <LazyTestimonials testimonials={testimonials} />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10 border border-zion-cyan/20 rounded-3xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Business?
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join the future of technology. Let's discuss how our innovative solutions can drive your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center space-x-2">
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-zion-purple/30 text-zion-purple-300 font-semibold rounded-xl hover:border-zion-purple/60 hover:text-zion-purple-200 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}