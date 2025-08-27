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
  Zap as ZapIcon,
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
  Zap as ZapIcon2
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

// Enhanced futuristic animated background component
const FuturisticBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Animated grid with neon effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
    
    {/* Enhanced floating particles with neon glow */}
    <div className="absolute inset-0">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.3,
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
      className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.6, 0.3, 0.6],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    
    {/* New neon accent orbs */}
    <motion.div 
      className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
    
    {/* Animated neon lines */}
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
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
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
    
    {/* Floating geometric shapes */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute border border-cyan-400/30 opacity-40 ${
            i % 3 === 0 ? 'w-10 h-10' : i % 3 === 1 ? 'w-8 h-8' : 'w-6 h-6'
          }`}
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + i * 6}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10 + i,
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing Solutions",
      subtitle: "Next-generation computational power for complex problems",
      description: "Solve previously intractable problems with our quantum computing platform and hybrid AI solutions.",
      icon: Atom,
      color: "from-indigo-500 to-purple-500",
      features: ["Quantum Algorithms", "Hybrid AI", "Cryptography", "Optimization"]
    },
    {
      title: "Micro SAAS Innovation",
      subtitle: "Specialized software solutions for modern businesses",
      description: "Discover our portfolio of innovative micro SAAS services designed to solve specific business challenges.",
      icon: Zap,
      color: "from-cyan-500 to-blue-500",
      features: ["Niche Solutions", "Rapid Deployment", "Scalable Architecture", "Cost-Effective"]
    },
    {
      title: "Space Technology Platform",
      subtitle: "Leverage space data for terrestrial applications",
      description: "Access satellite data, earth observation services, and space-based solutions for your business needs.",
      icon: Satellite,
      color: "from-slate-500 to-gray-500",
      features: ["Satellite Data", "Earth Observation", "Climate Analysis", "Global Coverage"]
    }
  ];

  const keyFeatures = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for business automation, analytics, and decision-making",
      color: "from-purple-500 to-pink-500",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Workflows"]
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Revolutionary quantum solutions for cryptography, optimization, and scientific research",
      color: "from-indigo-500 to-purple-500",
      features: ["Quantum Algorithms", "Hybrid AI", "Post-Quantum Cryptography", "Scientific Simulation"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated development operations",
      color: "from-blue-500 to-cyan-500",
      features: ["Infrastructure as Code", "Continuous Deployment", "Auto-scaling", "Multi-cloud Strategy"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions with AI-powered threat detection and response",
      color: "from-red-500 to-orange-500",
      features: ["AI Threat Detection", "Zero Trust Architecture", "Incident Response", "Compliance Management"]
    },
    {
      icon: Leaf,
      title: "Green Technology",
      description: "Sustainable technology solutions for environmental responsibility",
      color: "from-green-500 to-emerald-500",
      features: ["Energy Optimization", "Carbon Tracking", "Sustainable Procurement", "Green Computing"]
    },
    {
      icon: Gamepad2,
      title: "Metaverse & AR/VR",
      description: "Immersive digital experiences and virtual world development",
      color: "from-violet-500 to-purple-500",
      features: ["3D World Building", "Avatar Systems", "Virtual Events", "AR Applications"]
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "50+", label: "Micro SAAS Services", icon: Zap },
    { number: "24/7", label: "Global Support", icon: Globe }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Industries",
      content: "Zion Tech Group's AI solutions transformed our data analytics capabilities. We've seen a 300% improvement in decision-making speed.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Head of Innovation",
      company: "FutureTech Solutions",
      content: "Their quantum computing platform helped us solve complex optimization problems that were previously impossible. Game-changing technology.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      company: "Global Logistics Inc",
      content: "The micro SAAS solutions are perfectly tailored to our needs. Fast deployment and excellent ROI. Highly recommended!",
      avatar: "👩‍🔬",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, 
              and innovative micro SAAS services that transform businesses worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Slides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${heroSlides[currentSlide].color} bg-opacity-20 border border-cyan-400/30 mb-4`}>
                        <heroSlides[currentSlide].icon className="w-5 h-5 text-white mr-2" />
                        <span className="text-white font-medium">{heroSlides[currentSlide].subtitle}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {heroSlides[currentSlide].title}
                      </h2>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {heroSlides[currentSlide].description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {heroSlides[currentSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className={`w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r ${heroSlides[currentSlide].color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <heroSlides[currentSlide].icon className="w-16 h-16 md:w-20 md:h-20 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-cyan-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of innovative services designed to propel your business into the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg">
                +1 302 464 0950
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 border border-purple-400/30">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg">
                kleber@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 border border-green-400/30">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Address</h3>
              <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors duration-300 text-lg">
                364 E Main St STE 1008<br />Middletown DE 19709
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge micro SAAS solutions, AI services, and emerging technology platforms
            </p>
          </motion.div>

          {/* Services Showcase Component */}
          <UltimateServicesShowcase2025 />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our innovative solutions have transformed businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
