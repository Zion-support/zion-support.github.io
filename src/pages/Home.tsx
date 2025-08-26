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
  Zap as ZapIcon
} from 'lucide-react';
import UltimateServicesShowcase2025 from '../components/UltimateServicesShowcase2025';

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
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing & Neural Networks",
      subtitle: "Revolutionary computing power for impossible problems",
      description: "Access the future of computing with our quantum neural network platform. Solve complex problems that are impossible for classical computers.",
      image: "/images/hero-quantum.jpg",
      cta: "Discover Quantum Solutions",
      path: "/services/quantum",
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
      path: "/services/autonomous",
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
      path: "/services/autonomous",
      category: "AI & Automation",
      price: "$4,999/mo",
      rating: 4.9,
      reviewCount: 234,
      highlights: ["Autonomous Decision Making", "Real-time Optimization", "Predictive Analytics", "24/7 Operation"]
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Revolutionary quantum neural network platform that combines quantum computing with advanced neural networks to solve complex problems.",
      icon: Cpu,
      path: "/services/quantum",
      category: "Quantum Computing",
      price: "$8,999/mo",
      rating: 4.8,
      reviewCount: 156,
      highlights: ["Quantum Processing", "Neural Networks", "Advanced Algorithms", "Breakthrough Computing"]
    },
    {
      title: "Blockchain Supply Chain Transparency",
      description: "End-to-end supply chain transparency platform using blockchain technology for real-time tracking and verification.",
      icon: Database,
      path: "/services/blockchain",
      category: "Blockchain",
      price: "$2,499/mo",
      rating: 4.7,
      reviewCount: 189,
      highlights: ["Real-time Tracking", "Smart Contracts", "Verification System", "Compliance Ready"]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology stack"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with advanced encryption and compliance"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built to scale from startup to enterprise worldwide"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Intelligent automation and predictive analytics"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Advanced ML and AI algorithms" },
    { name: "Quantum Computing", icon: Cpu, description: "Next-generation computing power" },
    { name: "Blockchain", icon: Database, description: "Secure and transparent solutions" },
    { name: "Edge Computing", icon: Network, description: "Real-time processing at the edge" },
    { name: "Cybersecurity", icon: ShieldCheck, description: "Enterprise-grade security" },
    { name: "Cloud Infrastructure", icon: Cloud, description: "Scalable cloud solutions" }
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
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-zion-cyan/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-6xl mb-4">{heroSlides[currentSlide].icon}</div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-zion-cyan mb-6">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {heroSlides[currentSlide].features.map((feature, index) => (
                  <span key={index} className="px-4 py-2 glass rounded-full border border-zion-cyan/20 text-zion-cyan">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={heroSlides[currentSlide].path}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
                >
                  {heroSlides[currentSlide].cta}
                </Link>
                <button className="glass border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-zion-cyan scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full border border-white/20 hover:border-zion-cyan/40 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full border border-white/20 hover:border-zion-cyan/40 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Statistics Section */}
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
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-16 h-16 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-zion-cyan mb-2">{stat.label}</div>
                  <div className="text-gray-300">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-16 h-16 mx-auto text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-zion-green mb-2">{service.price}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({service.reviewCount})</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge Technologies
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
                <div className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
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
                className="text-center group"
              >
                <div className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              Join hundreds of businesses that have already revolutionized their operations with our innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="glass border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
