import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Heart,
  Cpu,
  Lock,
  Pause
} from 'lucide-react';
import { EnhancedInnovativeServicesShowcase2026 } from '../components/EnhancedInnovativeServicesShowcase2026';
import { FuturisticAnimatedBackground2026, FloatingOrbs, DataStream, PulseRings } from '../components/FuturisticAnimatedBackground2026';
import { innovativeMicroSaasServices2026, serviceCategories2026, contactInfo2026 } from '../data/innovativeMicroSaasServices2026';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      icon: Brain,
      color: "zion-cyan"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      icon: Cloud,
      color: "zion-blue"
    },
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images/hero-green-it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      icon: Heart,
      color: "zion-neon"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "ZionAI Business Intelligence Suite",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: Brain,
      path: "/services/ai-business-intelligence",
      category: "AI Solutions",
      price: "$299/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "AI Insights"],
      color: "zion-cyan"
    },
    {
      title: "ZionCloud Infrastructure Manager",
      description: "Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability and performance.",
      icon: Cloud,
      path: "/services/cloud-infrastructure",
      category: "Infrastructure",
      price: "$199/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["99.9% Uptime", "Auto-scaling", "Security First", "Cost Optimization"],
      color: "zion-blue"
    },
    {
      title: "ZionShield Enterprise Security",
      description: "Protect your business with enterprise-grade security solutions. From threat detection to compliance management, we've got you covered.",
      icon: Shield,
      path: "/services/enterprise-security",
      category: "Security",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Threat Detection", "24/7 Monitoring", "Compliance", "Incident Response"],
      color: "zion-purple"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for the fastest user experience"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with advanced encryption and monitoring"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for the cloud with auto-scaling and high availability"
    },
    {
      icon: Brain,
      title: "AI Powered",
      description: "Intelligent automation and predictive analytics"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions. We've seen a 40% increase in efficiency.",
      rating: 5,
      avatar: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The cybersecurity solutions are top-notch. We feel completely protected and supported 24/7.",
      rating: 5,
      avatar: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, GlobalCorp",
      content: "Their cloud infrastructure management has saved us thousands while improving performance.",
      rating: 5,
      avatar: "/images/testimonial-3.jpg"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, heroSlides.length]);

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
      {/* Futuristic Animated Background */}
      <FuturisticAnimatedBackground2026 />
      <FloatingOrbs />
      <DataStream />
      <PulseRings />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6 neon-text">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
                Pioneering the future with innovative micro SAAS solutions, cutting-edge IT services, and revolutionary AI technology
              </p>
            </motion.div>

            {/* Hero Slides */}
            <div className="relative max-w-6xl mx-auto mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-xl rounded-2xl p-8 border border-zion-cyan/20 glass-dark"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className={`text-6xl lg:text-8xl text-${heroSlides[currentSlide].color} neon-glow`}>
                      {React.createElement(heroSlides[currentSlide].icon)}
                    </div>
                    <div className="text-center lg:text-left max-w-2xl">
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{heroSlides[currentSlide].title}</h2>
                      <h3 className="text-xl lg:text-2xl text-zion-cyan mb-4">{heroSlides[currentSlide].subtitle}</h3>
                      <p className="text-lg text-white/80 mb-6">{heroSlides[currentSlide].description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {heroSlides[currentSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-zion-cyan" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={heroSlides[currentSlide].path}
                        className="btn-futuristic inline-flex items-center space-x-2"
                      >
                        <span>{heroSlides[currentSlide].cta}</span>
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Controls */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/30 transition-colors hover-glow"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={toggleAutoPlay}
                  className="p-3 rounded-full bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 transition-colors hover-glow"
                >
                  {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/30 transition-colors hover-glow"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/services"
                className="btn-futuristic text-lg px-8 py-4"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-full text-lg hover:bg-zion-cyan hover:text-white transition-all duration-200 hover-glow"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-zion-cyan" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-zion-cyan mb-2">{stat.label}</div>
                  <p className="text-white/70 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover our most popular and innovative solutions that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={service.path}>
                    <div className="card-futuristic h-full hover-lift">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${service.color} to-${service.color}-dark rounded-xl flex items-center justify-center`}>
                          <service.icon size={24} className="text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                          <div className="text-sm text-white/60">per month</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="text-white/80 text-sm">{service.rating}</span>
                          <span className="text-white/60 text-sm">({service.reviewCount})</span>
                        </div>
                        <div className="text-zion-cyan text-sm font-semibold">
                          {service.category}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Learn More</span>
                        <ArrowRight size={20} className="text-zion-cyan group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={32} className="text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Don't just take our word for it - hear from the businesses we've helped transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-futuristic text-center h-full">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Contact our team today to discuss your needs and discover how our innovative solutions can drive your success
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contactInfo2026.phone}`}
                  className="btn-futuristic text-lg px-8 py-4"
                >
                  Call Now: {contactInfo2026.phone}
                </a>
                <a
                  href={`mailto:${contactInfo2026.email}`}
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-full text-lg hover:bg-zion-cyan hover:text-white transition-all duration-200 hover-glow"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Showcase */}
        <EnhancedInnovativeServicesShowcase2026 />
      </div>
    </div>
  );
}
