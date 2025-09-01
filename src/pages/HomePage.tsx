import React, { Suspense, lazy } from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { Brain,
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
  X
 } from 'lucide-react.ts';

// Lazy load components for better performance
const LazyTestimonials = lazy(() => import('../components/Testimonials'));
const LazyServicesGrid = lazy(() => import('../components/ServicesGrid'));
const LazyStatsSection = lazy(() => import('../components/StatsSection'));

// Loading skeleton components
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

export function HomePage(...args: unknown[]): any {
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
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities',
      icon: Atom,
      href: '/services/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum AI Hybrid', 'Quantum Security', 'Quantum Optimization'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with AI-powered security solutions',
      icon: Shield,
      href: '/services/cybersecurity',
      features: ['Zero Trust Security', 'AI Threat Detection', 'Security Headers', 'Compliance Management'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your infrastructure and processes for the digital age',
      icon: Rocket,
      href: '/services/digital-transformation',
      features: ['Cloud Migration', 'DevOps Automation', 'API Development', 'Data Analytics'],
      color: 'from-orange-500 to-red-600'
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovating the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading the way in AI, quantum computing, and advanced technology solutions. 
              Empowering businesses to transform and thrive in the digital age.
            </p>
            
            {/* Hero Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  title={feature.description}
                >
                  <feature.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Get started with Zion Tech Group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Explore our services"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Suspense fallback={<div className="py-16 bg-gray-800 animate-pulse"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-8"><div className="h-32 bg-gray-700 rounded"></div><div className="h-32 bg-gray-700 rounded"></div><div className="h-32 bg-gray-700 rounded"></div><div className="h-32 bg-gray-700 rounded"></div></div></div></div>}>
        <LazyStatsSection stats={stats} />
      </Suspense>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive technology solutions designed to drive innovation and growth
            </motion.p>
          </div>

          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="h-80 bg-gray-800 rounded-xl animate-pulse"></div><div className="h-80 bg-gray-800 rounded-xl animate-pulse"></div><div className="h-80 bg-gray-800 rounded-xl animate-pulse"></div><div className="h-80 bg-gray-800 rounded-xl animate-pulse"></div></div>}>
            <LazyServicesGrid services={services} />
          </Suspense>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="View all our services"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Suspense fallback={<div className="py-20 bg-gray-800 animate-pulse"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="h-64 bg-gray-700 rounded-xl"></div><div className="h-64 bg-gray-700 rounded-xl"></div><div className="h-64 bg-gray-700 rounded-xl"></div></div></div></div>}>
        <LazyTestimonials testimonials={testimonials} />
      </Suspense>

      {/* New Services 2025 Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Star className="w-5 h-5 text-white" />
            <span className="text-white font-medium">New in 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionary AI Services
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS services designed to transform industries and drive unprecedented growth. 
            Each service combines proven AI technology with innovative business solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/new-services-2025"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explore New Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Get Early Access</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of companies already leveraging our cutting-edge technology solutions
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
              aria-label="Get started today with Zion Tech Group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
              aria-label="Request a custom quote"
            >
              <span>Request a Quote</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>This is the HomePage page.</p>
    </div>
  );
}