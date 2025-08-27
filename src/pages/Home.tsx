import React, { Suspense, useState, useEffect } from 'react';
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
  Zap as ZapIcon
} from 'lucide-react';
import UltimateServicesShowcase2025 from '../components/UltimateServicesShowcase2025';

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Futuristic animated background component
const FuturisticBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Animated grid with neon effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
    
    {/* Enhanced floating particles with neon glow */}
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    
    {/* Enhanced gradient orbs with neon glow */}
    <motion.div 
      className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.6, 0.3, 0.6],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    
    {/* New neon accent orbs */}
    <motion.div 
      className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
    
    {/* Animated neon lines */}
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: '0%',
            right: '0%',
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
    
    {/* Floating geometric shapes */}
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute border border-cyan-400/30 opacity-40 ${
            i % 2 === 0 ? 'w-8 h-8' : 'w-6 h-6'
          }`}
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  </div>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing & Neural Networks",
      subtitle: "Revolutionary computing power for impossible problems",
      description: "Access the future of computing with our quantum neural network platform. Solve complex problems that are impossible for classical computers.",
      image: "/images/hero-quantum.jpg",
      cta: "Discover Quantum Solutions",
      path: "/services/ai-quantum-hybrid-platform",
      features: ["Quantum Processing", "Neural Networks", "Advanced Algorithms", "Breakthrough Computing"],
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Autonomous Business Operations",
      subtitle: "Fully automated business processes with AI decision-making",
      description: "Revolutionize your operations with autonomous AI systems that make intelligent decisions, optimize processes, and run your business 24/7.",
      image: "/images/hero-autonomous.jpg",
      cta: "Learn More",
      path: "/services/ai-autonomous-research-assistant",
      features: ["Autonomous Decision Making", "Process Optimization", "Predictive Maintenance", "Resource Allocation"],
      icon: Rocket,
      color: "from-green-500 to-emerald-500"
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
      title: "AI Autonomous Business Operations",
      description: "Next-generation autonomous business operations platform that uses advanced AI to automate complex business processes and make intelligent decisions in real-time.",
      icon: Rocket,
      path: "/services/ai-autonomous-research-assistant",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["24/7 Autonomous Operations", "AI Decision Making", "Process Optimization", "Real-time Analytics"],
      price: "From $2,500/month"
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Revolutionary quantum computing platform that combines quantum processing with neural networks to solve previously impossible computational challenges.",
      icon: Cpu,
      path: "/services/ai-quantum-hybrid-platform",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["Quantum Processing", "Neural Networks", "Advanced Algorithms", "Breakthrough Computing"],
      price: "From $5,000/month"
    },
    {
      title: "AI-Powered Cybersecurity Suite",
      description: "Comprehensive cybersecurity solution that uses artificial intelligence to detect, prevent, and respond to threats in real-time.",
      icon: Shield,
      path: "/services/ai-cybersecurity-platform",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["AI Threat Detection", "Real-time Response", "Advanced Analytics", "Compliance Ready"],
      price: "From $1,800/month"
    }
  ];

  const technologies = [
    { name: "AI/ML", icon: Brain, description: "Advanced machine learning algorithms" },
    { name: "Quantum", icon: Cpu, description: "Quantum computing solutions" },
    { name: "Cloud", icon: Cloud, description: "Scalable cloud infrastructure" },
    { name: "Security", icon: Shield, description: "Enterprise-grade security" },
    { name: "Analytics", icon: BarChart3, description: "Real-time data insights" },
    { name: "Automation", icon: Workflow, description: "Intelligent process automation" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced artificial intelligence that learns and adapts to your business needs"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized algorithms and infrastructure for maximum speed and efficiency"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with comprehensive compliance and audit capabilities"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale your operations worldwide with our distributed infrastructure"
    }
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <FuturisticBackground />
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Hero Section with Enhanced Futuristic Design */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-8">
                  <motion.div 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Next-Generation Technology Solutions
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {heroSlides[currentSlide].title}
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link 
                      to={heroSlides[currentSlide].path}
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      {heroSlides[currentSlide].cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm">
                      <Play className="mr-2 w-5 h-5" />
                      Watch Demo
                    </button>
                  </motion.div>
                  
                  {/* Feature highlights */}
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {heroSlides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <div className="text-cyan-400 text-sm font-medium">{feature}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slide navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-300">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Featured Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Featured Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and powerful solutions that are transforming businesses worldwide
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Rating and price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current text-yellow-400' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                      </div>
                      <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                    </div>
                    
                    {/* Key highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.path}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Cutting-Edge Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies to deliver innovative solutions that give your business a competitive edge
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="glass rounded-2xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">
                    <div className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-300">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ultimate Services Showcase */}
        <UltimateServicesShowcase2025 />
        
        {/* Enhanced Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies that have already revolutionized their operations with our cutting-edge solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Request Free Quote
                </Link>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                No credit card required • Free consultation • 30-day money-back guarantee
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
