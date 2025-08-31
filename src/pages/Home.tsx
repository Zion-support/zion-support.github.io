import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ArrowUpRight,
  Calendar,
  Award,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Shield,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ArrowUpRight,
  Calendar
} from 'lucide-react';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
});

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Business Transformation",
      subtitle: "Revolutionize your operations with cutting-edge artificial intelligence",
      description: "From autonomous research to intelligent automation, we deliver AI solutions that drive real business value and competitive advantage in the digital age.",
      cta: "Explore AI Solutions",
      link: "/services/ai-services",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Innovation",
      subtitle: "Unlock the future of computing power",
      description: "Pioneering quantum solutions for complex problems that classical computers cannot solve. Experience the next generation of computational capabilities.",
      cta: "Discover Quantum",
      link: "/services/quantum-computing",
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sustainable Technology Solutions",
      subtitle: "Building a greener future through innovation",
      description: "Eco-friendly technology solutions that reduce environmental impact while boosting efficiency and creating sustainable business models.",
      cta: "Go Green",
      link: "/services/sustainable-technology",
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Next-Gen Cybersecurity",
      subtitle: "Protect your digital assets with AI-powered security",
      description: "Advanced threat detection and prevention using machine learning and quantum-resistant encryption for ultimate protection.",
      cta: "Secure Your Business",
      link: "/services/ai-cybersecurity-platform",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle, description: "Successfully delivered across industries" },
    { number: "50+", label: "Expert Team Members", icon: Users, description: "World-class professionals" },
    { number: "25+", label: "Countries Served", icon: Globe, description: "Global reach and impact" },
    { number: "99%", label: "Client Satisfaction", icon: Star, description: "Exceeding expectations" },
    { number: "24/7", label: "Support Available", icon: Clock, description: "Round-the-clock assistance" },
    { number: "10+", label: "Years Experience", icon: Award, description: "Proven track record" }
  ];

  const services = [
    {
      title: "AI Autonomous Research",
      description: "Intelligent research automation that discovers insights across multiple sources and accelerates innovation cycles",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/services/AIAutonomousBusinessOperations",
      features: ["Multi-source analysis", "Real-time insights", "Predictive modeling"]
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Future-proof security solutions for the quantum computing era with advanced encryption protocols",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "/services/QuantumSafeCryptography",
      features: ["Post-quantum security", "Advanced encryption", "Threat prevention"]
    },
    {
      title: "Space Technology Innovation",
      description: "Advanced satellite and space exploration technologies for next-generation communications and research",
      icon: Satellite,
      color: "from-indigo-500 to-purple-500",
      link: "/services/SpaceTechInnovation",
      features: ["Satellite systems", "Space research", "Advanced communications"]
    },
    {
      title: "Sustainable Tech Analytics",
      description: "AI-powered environmental impact assessment and optimization for eco-friendly business operations",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      link: "/services/SustainableTechAnalytics",
      features: ["Environmental monitoring", "Carbon footprint analysis", "Green optimization"]
    },
    {
      title: "FinTech Operations & Compliance",
      description: "Comprehensive financial technology solutions with regulatory compliance and risk management",
      icon: Coins,
      color: "from-blue-500 to-violet-500",
      link: "/services/FintechOperationsCompliance",
      features: ["Regulatory compliance", "Risk management", "Financial automation"]
    },
    {
      title: "AI Content Creation Studio",
      description: "Professional content generation powered by artificial intelligence for marketing and communication",
      icon: FileText,
      color: "from-pink-500 to-rose-500",
      link: "/services/AIContentCreationStudio",
      features: ["Content generation", "SEO optimization", "Brand consistency"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our business operations with their AI solutions. The results exceeded our expectations and we've seen a 40% increase in efficiency.",
      avatar: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Their quantum computing expertise helped us solve complex problems that were previously impossible. This is truly revolutionary technology.",
      avatar: "/images/testimonials/michael-chen.jpg",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, GlobalTech",
      content: "The sustainable technology solutions not only improved our efficiency but also reduced our carbon footprint by 35%. A win-win for business and environment.",
      avatar: "/images/testimonials/emily-rodriguez.jpg",
      rating: 5,
      company: "GlobalTech"
    },
    {
      name: "David Kim",
      role: "VP Engineering, SecureNet",
      content: "Their cybersecurity platform is game-changing. We've eliminated 99% of security threats and our compliance scores have never been higher.",
      avatar: "/images/testimonials/david-kim.jpg",
      rating: 5,
      company: "SecureNet"
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      description: "Named Top AI Solutions Provider 2025",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Innovation Award",
      description: "Breakthrough in Quantum Computing",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sustainability Leader",
      description: "Green Technology Excellence Award",
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Global Expansion",
      description: "Operating in 25+ Countries",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative">
            {/* Hero Slides */}
            <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex items-center ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white text-sm font-medium mb-6`}>
                        <slide.icon className="w-4 h-4 mr-2" />
                        Featured Service
                      </div>
                      
                      <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      
                      <h2 className="text-xl lg:text-2xl text-slate-300 mb-6">
                        {slide.subtitle}
                      </h2>
                      
                      <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={slide.link}
                          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg shadow-cyan-500/25"
                        >
                          {slide.cta}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                        >
                          {isPlaying ? (
                            <>
                              <Play className="w-5 h-5 mr-2" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-5 h-5 mr-2" />
                              Resume
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="hidden lg:flex justify-center"
                    >
                      <div className={`w-80 h-80 bg-gradient-to-br ${slide.color} rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        <slide.icon className="w-32 h-32 text-white relative z-10" />
                        <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
            
            {/* Arrow Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our track record speaks for itself. We've been delivering exceptional results for over a decade.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-slate-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 group h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.features && (
                    <div className="mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-400 text-sm mb-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Recognition
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations worldwide
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real businesses that trust Zion Tech Group to transform their operations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-xs font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies already leveraging our cutting-edge technology solutions to drive innovation, efficiency, and sustainable growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg shadow-cyan-500/25"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Link>
                  
                  <Link
                    to="/services"
                    className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Explore Services
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
