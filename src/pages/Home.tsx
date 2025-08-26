import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Lazy load components for better performance
const LazyServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const LazyFeaturesSection = React.lazy(() => import('../components/home/FeaturesSection'));
const LazyTestimonialsSection = React.lazy(() => import('../components/home/TestimonialsSection'));
const LazyCTASection = React.lazy(() => import('../components/home/CTASection'));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  const featuredServices = [
    {
      title: "AI Content Hub Pro",
      description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
      icon: Brain,
      path: "/services/ai-content-hub-pro",
      category: "AI & Content Creation",
      price: "$2,999/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Multi-language Generation", "SEO Optimization", "Cross-platform Distribution"],
      features: ["GPT-4 Integration", "Real-time Analytics", "Brand Voice Consistency", "24/7 Support"]
    },
    {
      title: "Quantum Security Suite",
      description: "Next-generation cybersecurity platform leveraging quantum-resistant algorithms and AI-powered threat detection.",
      icon: Shield,
      path: "/services/quantum-security-suite",
      category: "Cybersecurity",
      price: "$3,499/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["Quantum-resistant Encryption", "AI Threat Detection", "Zero-trust Architecture"],
      features: ["Real-time Monitoring", "Automated Response", "Compliance Reporting", "24/7 Security"]
    },
    {
      title: "Autonomous DevOps Platform",
      description: "Self-healing DevOps platform that automatically detects and resolves infrastructure issues.",
      icon: Rocket,
      path: "/services/autonomous-devops-platform",
      category: "DevOps & Cloud",
      price: "$1,999/mo",
      rating: 4.7,
      reviewCount: 203,
      highlights: ["Self-healing Infrastructure", "Automated Deployment", "Performance Optimization"],
      features: ["Cost Monitoring", "Security Scanning", "Disaster Recovery", "Scalable Architecture"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our infrastructure with AI-powered solutions that increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The autonomous business platform revolutionized our operations. We've never been more efficient or scalable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "Outstanding service and cutting-edge technology. Zion Tech Group is our trusted partner for innovation.",
      rating: 5
    }
  ];

  const seoMetadata = {
    title: "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services",
    description: "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology.",
    keywords: ["AI solutions", "quantum computing", "cybersecurity", "digital transformation", "enterprise technology", "machine learning", "cloud services", "IT infrastructure"],
    canonicalUrl: "https://ziontechgroup.com",
    ogImage: "https://ziontechgroup.com/og-image.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...seoMetadata} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Animated Hero Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center z-10 px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className={`bg-gradient-to-r ${heroSlides[currentSlide].color} bg-clip-text text-transparent`}>
                {heroSlides[currentSlide].title}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to={heroSlides[currentSlide].path}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-full hover:border-gray-400 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions designed to transform your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({service.reviewCount})</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from businesses that have transformed their operations with our solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their operations with our cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-full hover:border-gray-400 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
