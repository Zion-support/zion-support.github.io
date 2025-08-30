import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  ArrowUpRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

// Lazy load components for better performance
const LazyTestimonials = lazy(() => import('../components/Testimonials'));
const LazyServicesGrid = lazy(() => import('../components/ServicesGrid'));
const LazyStatsSection = lazy(() => import('../components/StatsSection'));

// Enhanced loading skeleton components
const HeroSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-20 bg-gray-700 rounded mb-6"></div>
    <div className="h-8 bg-gray-700 rounded mb-8 max-w-4xl mx-auto"></div>
    <div className="flex justify-center gap-6 mb-10">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-10 w-32 bg-gray-700 rounded-full"></div>
      ))}
    </div>
    <div className="flex justify-center gap-4">
      <div className="h-14 w-40 bg-gray-700 rounded-lg"></div>
      <div className="h-14 w-40 bg-gray-700 rounded-lg"></div>
    </div>
  </div>
);

// Enhanced floating features component
const FloatingFeatures = ({ features }: { features: Array<{ icon: any; text: string; description: string }> }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {features.map((feature, index) => (
        <motion.div
          key={feature.text}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="group relative cursor-pointer"
        >
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
            <feature.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
          
          {/* Tooltip */}
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-10"
            >
              {feature.description}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced CTA buttons component
const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Get started with Zion Tech Group"
      >
        <span>Get Started</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
    
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/services"
        className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Explore our services"
      >
        <span>Explore Services</span>
        <ChevronRight className="w-5 h-5" />
      </Link>
    </motion.div>
  </div>
);

// Enhanced stats display component
const EnhancedStats = ({ stats }: { stats: Array<{ number: string; label: string; icon: any; description: string }> }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      style={{ y }}
      className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our track record speaks for itself. See why thousands of companies choose Zion Tech Group.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function HomePage() {
  const heroFeatures = [
    { icon: Brain, text: 'AI-Powered Solutions', description: 'Transform your business with cutting-edge artificial intelligence' },
    { icon: Atom, text: 'Quantum Computing', description: 'Harness the power of quantum mechanics for unprecedented computational capabilities' },
    { icon: Shield, text: 'Advanced Security', description: 'Protect your digital assets with AI-powered security solutions' },
    { icon: Rocket, text: 'Space Technology', description: 'Pioneering innovations in space exploration and satellite technology' }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      href: '/services/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-cyan-500 to-blue-600',
      badge: 'Popular'
    },
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities',
      icon: Atom,
      href: '/services/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum AI Hybrid', 'Quantum Security', 'Quantum Optimization'],
      color: 'from-purple-500 to-pink-600',
      badge: 'Innovation'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with AI-powered security solutions',
      icon: Shield,
      href: '/services/cybersecurity',
      features: ['Zero Trust Security', 'AI Threat Detection', 'Security Headers', 'Compliance Management'],
      color: 'from-green-500 to-emerald-600',
      badge: 'Secure'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your infrastructure and processes for the digital age',
      icon: Rocket,
      href: '/services/digital-transformation',
      features: ['Cloud Migration', 'DevOps Automation', 'API Development', 'Data Analytics'],
      color: 'from-orange-500 to-red-600',
      badge: 'Essential'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Companies Served', icon: Building, description: 'Trusted by leading organizations worldwide' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, description: 'Reliable infrastructure you can count on' },
    { number: '24/7', label: 'Support Available', icon: Users, description: 'Round-the-clock expert assistance' },
    { number: 'ISO 27001', label: 'Security Certified', icon: Award, description: 'Enterprise-grade security standards' }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Inc.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Their quantum computing expertise gave us a competitive edge in the market. Highly recommended!",
      author: "Michael Chen",
      role: "VP Engineering",
      company: "Quantum Solutions",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The cybersecurity platform is robust and reliable. Our data has never been safer.",
      author: "Emily Rodriguez",
      role: "Security Director",
      company: "SecureNet",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Leading Innovation Since 2020</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovating the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading the way in AI, quantum computing, and advanced technology solutions. 
              Empowering businesses to transform and thrive in the digital age.
            </p>
            
            {/* Enhanced Hero Features */}
            <FloatingFeatures features={heroFeatures} />

            {/* Enhanced CTA Buttons */}
            <CTAButtons />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <EnhancedStats stats={stats} />

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-4 border border-white/20"
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Our Expertise</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive technology solutions designed to drive innovation and growth
            </motion.p>
          </div>

          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-80 bg-gray-800 rounded-xl animate-pulse"></div>
              ))}
            </div>
          }>
            <LazyServicesGrid services={services} />
          </Suspense>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg hover:shadow-xl"
                aria-label="View all our services"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <Suspense fallback={
        <div className="py-20 bg-gray-800 animate-pulse">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-700 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      }>
        <LazyTestimonials testimonials={testimonials} />
      </Suspense>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-6 border border-white/30"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Ready to Get Started?</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of companies already leveraging our cutting-edge technology solutions
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                aria-label="Get started today with Zion Tech Group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                aria-label="Request a custom quote"
              >
                <span>Request a Quote</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}