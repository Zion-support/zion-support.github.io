

import React, { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Zap,
  Globe,
  Target,
  Sparkles,
  Award,
  Lightbulb
} from 'lucide-react';

// Enhanced Hero Slide with better performance
const HeroSlide = React.memo(({ slide, isActive, index }: {
  slide: any;
  isActive: boolean;
  index: number;
}) => (
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}
    aria-hidden={!isActive}
    role="tabpanel"
    aria-labelledby={`slide-${index}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80"></div>
    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>
    
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <slide.icon className="w-20 h-20 mx-auto mb-6 text-white opacity-80" aria-hidden="true" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
            {slide.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {slide.description}
          </p>
          <Link
            to={slide.path}
            className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 hover:scale-105 transition-all duration-300"
            aria-label={`Learn more about ${slide.title}`}
          >
            <span>{slide.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
));

// Enhanced Stat Card with better animations
const StatCard = React.memo(({ stat, index }: { stat: any; index: number }) => (
  <div
    className="text-center group"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <div className="glass-card p-6 hover:scale-105 transition-all duration-300 focus-within:ring-4 focus-within:ring-cyan-500/50 border border-gray-700/50 hover:border-cyan-500/50">
      <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} aria-hidden="true" />
      <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</div>
      <div className="text-gray-400">{stat.label}</div>
    </div>
  </div>
));

// Enhanced Service Card with better design
const ServiceCard = React.memo(({ service, index }: { service: any; index: number }) => (
  <div
    className="glass-card p-6 hover:scale-105 transition-all duration-300 group focus-within:ring-4 focus-within:ring-cyan-500/50 border border-gray-700/50 hover:border-cyan-500/50"
    style={{ animationDelay: `${index * 200}ms` }}
    tabIndex={0}
    role="article"
    aria-labelledby={`service-${service.id}`}
  >
    <div className="flex items-center justify-between mb-4">
      <service.icon className="w-12 h-12 text-cyan-400" aria-hidden="true" />
      <div className="flex items-center space-x-1" aria-label={`Rating: ${service.rating} out of 5 stars from ${service.reviewCount} reviews`}>
        <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
        <span className="text-sm text-gray-300">{service.rating}</span>
        <span className="text-xs text-gray-500">({service.reviewCount})</span>
      </div>
    </div>

    <h3 id={`service-${service.id}`} className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
      {service.title}
    </h3>
    
    <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
        <span className="text-sm text-gray-500">{service.deliveryTime}</span>
      </div>
      <div className="text-lg font-bold text-cyan-400">${service.price}</div>
    </div>
  </div>
));

// New: Enhanced Testimonial Card
const TestimonialCard = React.memo(({ testimonial, index }: { testimonial: any; index: number }) => (
  <div
    className="glass-card p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
        <span className="text-white font-bold text-lg">{testimonial.initials}</span>
      </div>
      <div>
        <div className="font-semibold text-white">{testimonial.name}</div>
        <div className="text-sm text-gray-400">{testimonial.company}</div>
      </div>
    </div>
    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
    <div className="flex items-center mt-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
      ))}
    </div>
  </div>
));

// New: Enhanced Feature Grid
const FeatureGrid = React.memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    {[
      { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence for modern businesses" },
      { icon: Shield, title: "Enterprise Security", description: "Military-grade security protocols and compliance" },
      { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power" },
      { icon: Rocket, title: "Digital Transformation", description: "Accelerate your business evolution" },
      { icon: TrendingUp, title: "Performance Analytics", description: "Real-time insights and optimization" },
      { icon: Users, title: "Expert Team", description: "World-class engineers and consultants" }
    ].map((feature, index) => (
      <div key={index} className="glass-card p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
        <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    ))}
  </div>
));

// New: Enhanced CTA Section
const CTASection = React.memo(() => (
  <div className="text-center py-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50">
    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      Join thousands of companies already leveraging Zion Tech Group's cutting-edge solutions
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/contact"
        className="futuristic-btn text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
      >
        Get Started Today
      </Link>
      <Link
        to="/services"
        className="futuristic-btn text-lg px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
      >
        Explore Services
      </Link>
    </div>
  </div>
));

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced hero slides data
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform Your Business with Cutting-Edge Technology",
      description: "Leverage the power of artificial intelligence, quantum computing, and advanced cybersecurity to stay ahead of the competition.",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Quantum Computing",
      subtitle: "Next-Generation Computational Power",
      description: "Access quantum computing capabilities that solve complex problems in seconds, not years.",
      cta: "Discover Quantum Tech",
      path: "/quantum-technology",
      icon: Cpu,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Enterprise Security",
      subtitle: "Military-Grade Protection for Your Business",
      description: "Comprehensive cybersecurity solutions that protect your most valuable assets and ensure compliance.",
      cta: "Secure Your Business",
      path: "/cybersecurity",
      icon: Shield,
      color: "from-green-500 to-emerald-600"
    }
  ], []);

  // Enhanced stats data
  const stats = useMemo(() => [
    { value: "500+", label: "Happy Clients", icon: Users, color: "text-blue-400" },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "text-green-400" },
    { value: "24/7", label: "Expert Support", icon: Clock, color: "text-purple-400" },
    { value: "50+", label: "AI Solutions", icon: Brain, color: "text-cyan-400" }
  ], []);

  // Enhanced services data
  const services = useMemo(() => [
    {
      id: 1,
      title: "AI Autonomous Systems",
      description: "Intelligent automation solutions that learn and adapt to your business needs.",
      rating: 4.9,
      reviewCount: 127,
      deliveryTime: "2-4 weeks",
      price: "15,000",
      icon: Brain
    },
    {
      id: 2,
      title: "Quantum Computing Platform",
      description: "Access to quantum computing resources for complex problem-solving.",
      rating: 4.8,
      reviewCount: 89,
      deliveryTime: "4-6 weeks",
      price: "25,000",
      icon: Cpu
    },
    {
      id: 3,
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection and prevention.",
      rating: 4.9,
      reviewCount: 203,
      deliveryTime: "1-2 weeks",
      price: "8,500",
      icon: Shield
    }
  ], []);

  // Enhanced testimonials data
  const testimonials = useMemo(() => [
    {
      name: "Sarah Chen",
      company: "TechCorp Inc.",
      quote: "Zion Tech Group transformed our entire IT infrastructure. The AI solutions are game-changing.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Solutions",
      quote: "Outstanding service and cutting-edge technology. Our security posture has never been stronger.",
      rating: 5,
      initials: "MR"
    },
    {
      name: "Emily Watson",
      company: "Innovation Labs",
      quote: "The quantum computing platform opened up possibilities we never thought possible.",
      rating: 5,
      initials: "EW"
    }
  ], []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  return (
    <div id="home-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={index}
            slide={slide}
            isActive={index === currentSlide}
            index={index}
          />
        ))}
        
        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-400">Delivering exceptional results across all sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-400">Cutting-edge technology meets exceptional service</p>
          </div>
          <FeatureGrid />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-400">Tailored solutions for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Real feedback from satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <CTASection />
        </div>
      </section>
    </div>
  );
};

export default Home;
