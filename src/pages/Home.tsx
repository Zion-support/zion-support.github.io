import React, { useState, useEffect, Suspense } from 'react';
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
  Search,
  Rocket,
  Code,
  Lock,
  Cpu,
  Database,
  Sparkles,
  Target,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import { SEO, SEOPresets } from '../components/SEO';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-analytics",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-zion-cyan via-zion-purple to-zion-blue"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      gradient: "from-zion-blue via-zion-cyan to-zion-purple"
    },
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images/hero-green-it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      gradient: "from-zion-cyan via-zion-blue to-zion-purple"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services including machine learning, natural language processing, and computer vision",
      icon: Brain,
      link: "/innovative-services-2026",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tech Talent",
      description: "Expert developers, engineers, and IT professionals for your projects",
      icon: Users,
      link: "/talent",
      features: ["Full-Stack Developers", "DevOps Engineers", "Data Scientists", "UI/UX Designers"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Equipment",
      description: "High-performance tech infrastructure and hardware solutions",
      icon: Zap,
      link: "/equipment",
      features: ["Cloud Infrastructure", "High-Performance Computing", "Network Solutions", "Security Hardware"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Consulting",
      description: "Strategic technology guidance and digital transformation consulting",
      icon: TrendingUp,
      link: "/consulting",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that scales with your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2 compliance and regular audits"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with our distributed infrastructure"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Intelligent automation and insights that drive business growth"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Solutions",
      content: "Zion Tech Group transformed our business operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings.",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The team at Zion delivered exceptional results. Their expertise in cloud infrastructure and cybersecurity gave us the confidence to scale rapidly.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow Inc",
      content: "Working with Zion has been a game-changer. Their AI-powered insights have helped us make better decisions and improve customer satisfaction.",
      rating: 5,
      company: "DataFlow"
    }
  ];

  const quickActions = [
    { name: "Find Talent", icon: Users, path: "/talent", color: "from-blue-500 to-cyan-500" },
    { name: "Browse Services", icon: Code, path: "/services", color: "from-purple-500 to-pink-500" },
    { name: "Get Equipment", icon: Cpu, path: "/equipment", color: "from-green-500 to-teal-500" },
    { name: "Request Quote", icon: Rocket, path: "/request-quote", color: "from-orange-500 to-red-500" }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      try {
        // Simulate search processing
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsLoading(false);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <SEO {...SEOPresets.home} />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20">
          {/* Enhanced background with animated elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto text-center"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Pioneering the Future of Technology
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business with{' '}
                  <span className="text-gradient bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                    AI-Powered
                  </span>{' '}
                  Solutions
                </h1>
                <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Zion Tech Group delivers cutting-edge technology solutions that drive innovation, 
                  enhance security, and accelerate digital transformation for forward-thinking organizations.
                </p>
              </motion.div>

              {/* Enhanced Search Bar */}
              <motion.div variants={itemVariants} className="mb-8">
                <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for services, solutions, or expertise..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-32 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-400 focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 focus:outline-none transition-all duration-300"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <ZionLoadingSpinner size="sm" />
                      ) : (
                        'Search'
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Hero Slider */}
              <motion.div variants={itemVariants} className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="p-8 md:p-12"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {heroSlides[currentSlide].title}
                          </h2>
                          <p className="text-xl text-zinc-300 mb-6">
                            {heroSlides[currentSlide].subtitle}
                          </p>
                          <p className="text-zinc-400 mb-6">
                            {heroSlides[currentSlide].description}
                          </p>
                          
                          <div className="mb-6">
                            <div className="grid grid-cols-2 gap-3">
                              {heroSlides[currentSlide].features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-zinc-300">
                                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Link
                            to={heroSlides[currentSlide].path}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                          >
                            {heroSlides[currentSlide].cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                        
                        <div className="relative">
                          <div className={`w-full h-64 bg-gradient-to-br ${heroSlides[currentSlide].gradient} rounded-xl flex items-center justify-center`}>
                            <div className="text-white text-center">
                              <div className="text-6xl mb-4">🚀</div>
                              <p className="text-lg font-semibold">Innovation Hub</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation Controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center text-white hover:bg-zinc-700/50 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center text-white hover:bg-zinc-700/50 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-zion-cyan w-8' 
                            : 'bg-zinc-600 hover:bg-zinc-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-zinc-400">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Core Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                From AI-powered insights to enterprise-grade security, we provide the expertise 
                and solutions your business needs to thrive in the digital age.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:bg-zinc-800/70 hover:shadow-xl hover:shadow-zion-cyan/10 hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                  Join hundreds of companies already leveraging our cutting-edge technology solutions 
                  to drive innovation and achieve remarkable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/services"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Explore All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-zinc-900/50 to-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full text-zion-blue text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Client Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Trusted by leading companies worldwide to deliver exceptional results and drive business transformation.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:bg-zinc-800/70 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar || '👤'}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                      <p className="text-zinc-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Started Quickly
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Access our most popular services and resources with just a few clicks.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Link
                    to={action.path}
                    className="block p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl hover:border-zion-cyan/50 transition-all duration-300 hover:bg-zinc-800/70 hover:scale-105 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${action.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                      {action.name}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Pioneer the Future?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the ranks of innovative companies that trust Zion Tech Group to deliver 
                cutting-edge solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Learn About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}