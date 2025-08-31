import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  CheckCircle2,
  Sparkles as SparklesIcon
} from 'lucide-react';

// Import SEO component
import { SEO } from '../components/SEO';

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

// Enhanced hero slides with better content
const heroSlides = [
  {
    title: "AI-Powered Business Intelligence",
    subtitle: "Transform Data into Actionable Insights",
    description: "Leverage cutting-edge AI to unlock hidden patterns in your data, predict trends, and make data-driven decisions that drive growth and innovation.",
    cta: "Explore AI Solutions",
    link: "/services",
    icon: Brain,
    color: "from-purple-500 to-cyan-500",
    features: ["Predictive Analytics", "Real-time Dashboards", "Machine Learning Models", "Custom AI Solutions"]
  },
  {
    title: "Quantum Computing Solutions",
    subtitle: "Next-Generation Problem Solving",
    description: "Harness the power of quantum computing for complex optimization problems, cryptography, and scientific research that was previously impossible.",
    cta: "Discover Quantum",
    link: "/services/quantum-computing",
    icon: Atom,
    color: "from-indigo-500 to-purple-500",
    features: ["Quantum Algorithms", "Optimization", "Research Support", "Enterprise Solutions"]
  },
  {
    title: "Cybersecurity & Compliance",
    subtitle: "Protect Your Digital Assets",
    description: "Enterprise-grade security solutions with AI-powered threat detection, zero-trust architecture, and comprehensive compliance management.",
    cta: "Secure Your Business",
    link: "/services/cybersecurity",
    icon: Shield,
    color: "from-green-500 to-blue-500",
    features: ["Threat Detection", "Zero-Trust Security", "Compliance Automation", "24/7 Monitoring"]
  },
  {
    title: "Blockchain & Web3",
    subtitle: "Future of Digital Trust",
    description: "Build secure, transparent, and efficient business operations with enterprise blockchain solutions and Web3 technologies.",
    cta: "Build with Blockchain",
    link: "/services/blockchain",
    icon: Link,
    color: "from-emerald-500 to-teal-500",
    features: ["Smart Contracts", "Supply Chain", "Digital Identity", "DeFi Solutions"]
  }
];

// Enhanced stats section
const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
  { number: "99.9%", label: "Uptime Guarantee", icon: ShieldCheck, color: "from-green-500 to-emerald-500" },
  { number: "24/7", label: "Expert Support", icon: Clock, color: "from-purple-500 to-pink-500" },
  { number: "50+", label: "AI Services", icon: Brain, color: "from-orange-500 to-red-500" }
];

// Enhanced features section
const features = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI solutions, MLOps, and intelligent automation that transform business operations.",
    color: "from-purple-500 to-cyan-500",
    link: "/services/ai-services"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, automation, and modern development practices for rapid deployment.",
    color: "from-blue-500 to-cyan-500",
    link: "/services/cloud-devops"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions with AI-powered threat detection and compliance management.",
    color: "from-green-500 to-blue-500",
    link: "/services/cybersecurity"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services that modernize and optimize your business processes.",
    color: "from-orange-500 to-red-500",
    link: "/services/digital-transformation"
  }
];

// Enhanced testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Zion Tech Group's AI solutions transformed our data analytics capabilities. We now have real-time insights that drive our strategic decisions.",
    avatar: "/images/testimonials/sarah-johnson.jpg",
    rating: 5,
    company: "TechCorp"
  },
  {
    name: "Michael Chen",
    role: "Director of IT, GlobalTech",
    content: "Their quantum computing expertise helped us solve complex problems that were previously impossible. The ROI was immediate and substantial.",
    avatar: "/images/testimonials/michael-chen.jpg",
    rating: 5,
    company: "GlobalTech"
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Operations, HealthTech",
    content: "The sustainable technology solutions not only improved our efficiency but also reduced our carbon footprint significantly.",
    avatar: "/images/testimonials/emily-rodriguez.jpg",
    rating: 5,
    company: "HealthTech"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, heroSlides.length]);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <SEO
        title="Zion Tech Group - Leading AI, Quantum, and Cybersecurity Solutions"
        description="Zion Tech Group provides cutting-edge AI, quantum computing, and cybersecurity solutions to help businesses innovate and secure their digital assets."
        keywords="AI, Quantum Computing, Cybersecurity, Data Analytics, Enterprise Solutions, Blockchain, Web3"
      />
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

                      {/* Features List */}
                      <div className="mb-8">
                        <div className="grid grid-cols-2 gap-3">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={slide.link}
                          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
                        >
                          {slide.cta}
                          <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
                      <div className={`w-80 h-80 bg-gradient-to-br ${slide.color} rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25`}>
                        <slide.icon className="w-32 h-32 text-white" />
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
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={feature.link}>
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonial].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                      <div className="text-slate-400">{testimonials[currentTestimonial].role}</div>
                      <div className="text-sm text-slate-500">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-cyan-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Business</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let's discuss how our cutting-edge solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
              >
                Get Started Today
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center group"
              >
                Explore Services
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
