import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Target,
  Clock
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Memoized data for performance
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      color: "from-zion-blue to-zion-cyan"
    },
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images/hero-green-it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      color: "from-zion-purple to-zion-cyan"
    }
  ], []);

  const stats = useMemo(() => [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide", delay: 0.1 },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery", delay: 0.2 },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise", delay: 0.3 },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support", delay: 0.4 }
  ], []);

  const featuredServices = useMemo(() => [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: Brain,
      path: "/services/ai-solutions",
      category: "AI Solutions",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "AI Insights"],
      features: ["Machine Learning", "Data Visualization", "Automated Reporting", "Custom Alerts"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability and performance.",
      icon: Cloud,
      path: "/services/cloud",
      category: "Infrastructure",
      price: "$1,800/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["99.9% Uptime", "Auto-scaling", "Security First", "Cost Optimization"],
      features: ["High Availability", "Load Balancing", "Backup & Recovery", "Monitoring"]
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with enterprise-grade security solutions. From threat detection to compliance management, we've got you covered.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$3,200/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Threat Detection", "24/7 Monitoring", "Compliance", "Incident Response"],
      features: ["Real-time Protection", "Vulnerability Assessment", "Security Training", "Compliance Support"]
    }
  ], []);

  const features = useMemo(() => [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that scales with your business needs",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2 compliance and regular audits",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with our distributed infrastructure",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Intelligent automation and insights that drive business growth",
      delay: 0.4
    }
  ], []);

  const testimonials = useMemo(() => [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Solutions",
      content: "Zion Tech Group transformed our business operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings.",
      rating: 5,
      company: "TechCorp",
      avatar: "/images/avatars/sarah-johnson.jpg",
      delay: 0.1
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The team at Zion delivered exceptional results. Their expertise in cloud infrastructure and cybersecurity gave us the confidence to scale rapidly.",
      rating: 5,
      company: "InnovateLab",
      avatar: "/images/avatars/michael-chen.jpg",
      delay: 0.2
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow Inc",
      content: "Working with Zion has been a game-changer. Their AI-powered insights have helped us make better decisions and improve customer satisfaction.",
      rating: 5,
      company: "DataFlow",
      avatar: "/images/avatars/emily-rodriguez.jpg",
      delay: 0.3
    }
  ], []);

  // Performance optimizations
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  }, [heroSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

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

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Zion Tech Group - AI-Powered Business Solutions & Digital Transformation</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity services, cloud infrastructure, and digital transformation expertise. Get started today!" />
        <meta name="keywords" content="AI business solutions, cybersecurity services, cloud infrastructure, digital transformation, IT consulting, business intelligence, machine learning" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - AI-Powered Business Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions and IT services. Get started today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Zion Tech Group Home",
            "description": "AI-Powered Business Solutions and IT Services",
            "url": "https://ziontechgroup.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Leading technology solutions provider"
            }
          })}
        </script>
      </Helmet>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zion-slate-light/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div id="home-content" className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20" aria-label="Hero Section">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl" role="region" aria-label="Hero Carousel">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  aria-live="polite"
                  aria-label={`Slide ${currentSlide + 1} of ${heroSlides.length}`}
                >
                  {heroSlides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                        <motion.div 
                          className="text-center lg:text-left"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {slide.title}
                          </h1>
                          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                            {slide.features.map((feature, featureIndex) => (
                              <motion.span 
                                key={featureIndex} 
                                className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                              >
                                <Sparkles className="w-3 h-3" />
                                {feature}
                              </motion.span>
                            ))}
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                          >
                            <Link
                              to={slide.path}
                              className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium group"
                              aria-label={`${slide.cta} - ${slide.title}`}
                            >
                              {slide.cta}
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </motion.div>
                        </motion.div>
                        <motion.div 
                          className="bg-zion-blue-light/20 rounded-xl h-64 flex items-center justify-center relative overflow-hidden"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10"></div>
                          <span className="text-zion-slate-light text-lg relative z-10">{slide.image}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-cyan/5 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2" role="tablist" aria-label="Slide navigation">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan ${
                      index === currentSlide ? 'bg-zion-cyan' : 'bg-zion-slate-light/50'
                    }`}
                    role="tab"
                    aria-selected={index === currentSlide}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-zion-blue-light/5" aria-label="Company Statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-zion-cyan/30 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-zion-cyan mb-2">{stat.label}</p>
                  <p className="text-zion-slate-light">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20" aria-label="Featured Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover our most popular solutions that are transforming businesses worldwide.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {featuredServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.path}
                    className="block w-full text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium group"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-blue-light/5" aria-label="Why Choose Zion Tech Group">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-zion-purple/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-zion-purple group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" aria-label="Client Testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: testimonial.delay }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center group-hover:bg-zion-cyan/30 transition-all duration-300">
                      <span className="text-zion-cyan font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                      <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-blue-light/5" aria-label="Call to Action">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already transformed their operations 
                with Zion Tech Group's innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium group"
                  aria-label="Get started today with Zion Tech Group"
                >
                  Get Started Today
                  <Target className="w-4 h-4 ml-2 inline group-hover:scale-110 transition-transform duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium group"
                  aria-label="View all our services"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
