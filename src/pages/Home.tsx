

import React, { useState, useEffect, Suspense, useCallback } from 'react';
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
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Target as TargetIcon,
  Play,
  Pause
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

// Lazy load components for better performance
const LazyServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const LazyFeaturesSection = React.lazy(() => import('../components/home/FeaturesSection'));
const LazyTestimonialsSection = React.lazy(() => import('../components/home/TestimonialsSection'));
const LazyCTASection = React.lazy(() => import('../components/home/CTASection'));

// Loading fallback component with better accessibility
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12" role="status" aria-label="Loading content">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600 dark:text-gray-400">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { 
      icon: Users, 
      value: "500+", 
      label: "Happy Clients", 
      description: "Trusted by businesses worldwide",
      color: "text-blue-500"
    },
    { 
      icon: TrendingUp, 
      value: "95%", 
      label: "Success Rate", 
      description: "Proven track record of delivery",
      color: "text-green-500"
    },
    { 
      icon: Award, 
      value: "10+", 
      label: "Years Experience", 
      description: "Deep industry expertise",
      color: "text-yellow-500"
    },
    { 
      icon: Globe, 
      value: "25+", 
      label: "Countries Served", 
      description: "Global reach and support",
      color: "text-purple-500"
    }
  ];

  const featuredServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      path: "/ai-solutions",
      features: ["Real-time Analytics", "Predictive Modeling", "Automated Reporting", "Custom Dashboards"]
    },
    {
      title: "Quantum Technology Solutions",
      description: "Stay ahead of the curve with our quantum computing and quantum-safe cybersecurity solutions. Future-proof your business with cutting-edge technology.",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      path: "/services/quantum-technology",
      features: ["Quantum Computing", "Quantum-Safe Security", "Cryptography", "Research & Development"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protect your business with enterprise-grade security solutions. Achieve SOC2 compliance and implement zero-trust security architecture.",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      path: "/services/cybersecurity",
      features: ["SOC2 Compliance", "Zero-Trust Security", "Threat Detection", "Incident Response"]
    }
  ];

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, heroSlides.length]);

  // Pause auto-play on hover
  const handleSlideHover = useCallback((pause: boolean) => {
    setIsPaused(pause);
  }, []);

  // Manual slide navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('home-content');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
        description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
        type="website"
        url="https://ziontechgroup.com"
        structuredData={{
          "@type": "WebPage",
          "name": "Home",
          "description": "Zion Tech Group homepage featuring AI solutions, quantum technology, and enterprise services"
        }}
      />

      <div id="home-content" className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
          {/* Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
                {heroSlides[currentSlide].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-sm text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to={heroSlides[currentSlide].path}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pause/Play Indicator */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          >
            {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 transition-colors`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Featured Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover how our cutting-edge solutions can transform your business and drive innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<LoadingFallback message="Loading services..." />}>
          <LazyServicesSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading features..." />}>
          <LazyFeaturesSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
          <LazyTestimonialsSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading call to action..." />}>
          <LazyCTASection />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
