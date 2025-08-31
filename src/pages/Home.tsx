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
  Palette
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
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
      description: "From autonomous research to intelligent automation, we deliver AI solutions that drive real business value.",
      cta: "Explore AI Solutions",
      link: "/services/ai-services",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Innovation",
      subtitle: "Unlock the future of computing power",
      description: "Pioneering quantum solutions for complex problems that classical computers cannot solve.",
      cta: "Discover Quantum",
      link: "/services/quantum-computing",
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sustainable Technology Solutions",
      subtitle: "Building a greener future through innovation",
      description: "Eco-friendly technology solutions that reduce environmental impact while boosting efficiency.",
      cta: "Go Green",
      link: "/services/sustainable-technology",
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  const services = [
    {
      title: "AI Autonomous Research",
      description: "Intelligent research automation that discovers insights across multiple sources",
      icon: Brain,
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
      color: "from-purple-500 to-pink-500",
      link: "/services/AIAutonomousBusinessOperations"
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Future-proof security solutions for the quantum computing era",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "/services/QuantumSafeCryptography"
    },
    {
      title: "Space Technology Innovation",
      description: "Advanced satellite and space exploration technologies",
      icon: Satellite,
      color: "from-indigo-500 to-purple-500",
      link: "/services/SpaceTechInnovation"
    },
    {
      title: "Sustainable Tech Analytics",
      description: "AI-powered environmental impact assessment and optimization",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      link: "/services/SustainableTechAnalytics"
    },
    {
      title: "FinTech Operations & Compliance",
      description: "Comprehensive financial technology solutions with regulatory compliance",
      icon: Coins,
      color: "from-blue-500 to-violet-500",
      link: "/services/FintechOperationsCompliance"
    },
    {
      title: "AI Content Creation Studio",
      description: "Professional content generation powered by artificial intelligence",
      icon: FileText,
      color: "from-pink-500 to-rose-500",
      link: "/services/AIContentCreationStudio"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our business operations with their AI solutions. The results exceeded our expectations.",
      avatar: "/images/testimonials/sarah-johnson.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Their quantum computing expertise helped us solve complex problems that were previously impossible.",
      avatar: "/images/testimonials/michael-chen.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, GlobalTech",
      content: "The sustainable technology solutions not only improved our efficiency but also reduced our carbon footprint.",
      avatar: "/images/testimonials/emily-rodriguez.jpg",
      rating: 5
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
                          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
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
                      <div className={`w-80 h-80 bg-gradient-to-br ${slide.color} rounded-full flex items-center justify-center shadow-2xl`}>
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Cutting-Edge Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI, quantum, and sustainable technology solutions
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
                  className="block bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 group"
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

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
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
              Real results from real businesses that trust Zion Tech Group
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions to drive innovation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
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
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom Solutions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
// Enhanced Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "AI Autonomous Business Operations",
      description: "Transform your business with AI that autonomously manages, optimizes, and scales your entire business ecosystem.",
      icon: Brain,
      color: "from-zion-purple to-zion-purple-dark",
      link: "/services/ai-autonomous-business-operations-platform"
    },
    {
      title: "Quantum Edge Computing",
      description: "Revolutionize your infrastructure with the world's first quantum-enhanced edge computing platform.",
      icon: Atom,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/quantum-edge-computing-solutions"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Transform customer relationships with AI-powered analytics that understand and optimize every interaction.",
      icon: BarChart3,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-customer-experience-analytics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              With AI Innovation
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business with our cutting-edge AI solutions that automate, 
            optimize, and revolutionize your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and technology innovation with proven track record."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and 24/7 threat monitoring."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized support and infrastructure."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "World-class engineers, data scientists, and technology consultants."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Why Choose Zion Tech
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              For Over a Decade
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Our proven track record, cutting-edge technology, and unwavering commitment to excellence 
            make us the preferred choice for forward-thinking organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Latest Innovations Section
const LatestInnovationsSection = () => {
  const latestServices = [
    {
      title: "AI Autonomous Legal Research Platform",
      description: "Revolutionary AI-powered legal research and case analysis with 99.7% accuracy",
      icon: Scale,
      color: "from-blue-500 to-indigo-500",
      link: "/services/ai-autonomous-legal-research-platform",
      features: ["Case Analysis", "Legal Research", "Compliance Monitoring", "Document Review"]
    },
    {
      title: "AI Educational Content Creation Platform",
      description: "AI-powered educational content creation across multiple formats with 80% time savings",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-educational-content-creation-platform",
      features: ["Content Generation", "Multi-Format", "Personalized Learning", "Analytics"]
    },
    {
      title: "AI Real Estate Investment Analytics Platform",
      description: "AI-powered real estate investment analytics with 40% higher returns",
      icon: Home,
      color: "from-orange-500 to-red-500",
      link: "/services/ai-real-estate-investment-analytics-platform",
      features: ["Market Analysis", "Investment Modeling", "ROI Optimization", "Risk Assessment"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Latest Innovations 2026
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Revolutionary New Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Just Launched
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of AI-powered solutions with our latest groundbreaking services 
            designed to transform industries and drive unprecedented growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-zinc-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already accelerated their digital 
              transformation with Zion Tech Group. Let's discuss how we can help you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:+1 302 464 0950"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <Link
                to="/innovative-services-showcase-2033"
                className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home: React.FC = () => {
  // SEO structured data for the home page
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - AI-Powered Technology Solutions",
    "description": "Transform your business with cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Expert IT consulting and micro-SaaS solutions.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI-powered technology solutions, cybersecurity, cloud computing, and digital transformation services.",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="AI-Powered Technology Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Expert IT consulting and micro-SaaS solutions from Zion Tech Group."
        keywords="AI solutions, artificial intelligence, quantum computing, cybersecurity, digital transformation, IT consulting, micro-SaaS, cloud solutions, machine learning, data analytics, blockchain, IoT, edge computing"
        canonical="https://ziontechgroup.com"
        structuredData={homePageStructuredData}
      />
      <HeroSection />
      <ServicesSection />
      <LatestInnovationsSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
});

// Main Home Component
export default function Home() {
  return (
    <EnhancedSEO data={SEOConfigs.home}>
      <div className="min-h-screen bg-zion-blue-dark">
        <SEO
          title="AI-Powered Technology Solutions & Digital Transformation"
          description="Transform your business with cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Expert IT consulting and micro-SaaS solutions from Zion Tech Group."
          keywords="AI solutions, artificial intelligence, quantum computing, cybersecurity, digital transformation, IT consulting, micro-SaaS, cloud solutions, machine learning, data analytics, blockchain, IoT, edge computing"
          canonical="https://ziontechgroup.com"
          structuredData={homePageStructuredData}
        />
        <HeroSection />
        <ServicesSection />
        <LatestInnovationsSection />
        <WhyChooseUsSection />
        <CTASection />
        <FloatingActionButton />
      </div>
    </EnhancedSEO>
=======
      </section>
    </div>
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
  );
}
