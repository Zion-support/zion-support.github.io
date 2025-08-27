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

// Lazy load components for better performance
const UltimateServicesShowcase2025 = React.lazy(() => import('../components/UltimateServicesShowcase2025'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('../components/ComprehensiveServicesShowcase2025'));
const InteractiveTestimonials = React.lazy(() => import('../components/InteractiveTestimonials'));
const SEO = React.lazy(() => import('../components/SEO'));

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

// Futuristic animated background component with performance optimizations
const FuturisticBackground = React.memo(() => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Animated grid with neon effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
    
    {/* Enhanced floating particles with neon glow - optimized for performance */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.2,
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
      className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
));

FuturisticBackground.displayName = 'FuturisticBackground';

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
      description: "Next-generation autonomous business operations platform that uses advanced AI to automate complex business processes and make intelligent decisions in real-time. Transform your business with 24/7 autonomous operations, AI decision making, and process optimization.",
      icon: Rocket,
      path: "/services/ai-autonomous-research-assistant",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["24/7 Autonomous Operations", "AI Decision Making", "Process Optimization", "Real-time Analytics", "Cost Reduction by 60%"],
      price: "From $2,500/month"
    },
    {
      title: "Quantum Financial Trading Platform",
      description: "Revolutionary trading platform that leverages quantum computing for ultra-fast market analysis, risk assessment, and algorithmic trading. Gain quantum advantage with 1000x faster processing and 40% improved trading accuracy.",
      icon: Cpu,
      path: "/services/quantum-financial-trading-platform",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["Quantum Processing", "40% Trading Accuracy", "60% Risk Reduction", "Ultra-fast Execution", "Portfolio Optimization"],
      price: "From $8,999/month"
    },
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Advanced healthcare analytics platform that uses AI to analyze patient data, predict outcomes, and optimize treatment plans. Improve patient outcomes by 45% and reduce readmission rates by 30%.",
      icon: Shield,
      path: "/services/ai-powered-healthcare-analytics-platform",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["45% Better Outcomes", "30% Fewer Readmissions", "AI Treatment Plans", "Real-time Monitoring", "HIPAA Compliant"],
      price: "From $3,299/month"
    },
    {
      title: "AI Autonomous Supply Chain",
      description: "Intelligent supply chain platform that autonomously optimizes logistics, inventory, and demand forecasting. Reduce inventory costs by 30%, improve delivery times by 40%, and optimize routes by 25%.",
      icon: Workflow,
      path: "/services/ai-autonomous-supply-chain-optimization",
      rating: 4.7,
      reviewCount: 98,
      highlights: ["30% Cost Reduction", "40% Faster Delivery", "25% Route Optimization", "AI Forecasting", "Sustainability Metrics"],
      price: "From $2,499/month"
    },
    {
      title: "AI Content Marketing Suite",
      description: "Comprehensive content marketing platform that automates content creation, distribution, and performance optimization. Increase engagement by 60%, reduce creation time by 70%, and improve SEO by 45%.",
      icon: Brain,
      path: "/services/ai-content-marketing-automation-suite",
      rating: 4.6,
      reviewCount: 134,
      highlights: ["60% More Engagement", "70% Time Savings", "45% SEO Improvement", "Multi-channel", "ROI Tracking"],
      price: "From $1,599/month"
    },
    {
      title: "Quantum Machine Learning",
      description: "Revolutionary platform that combines quantum computing with machine learning for solving complex computational problems. Solve problems 1000x faster with breakthrough computational power.",
      icon: Zap,
      path: "/services/quantum-machine-learning-platform",
      rating: 4.9,
      reviewCount: 67,
      highlights: ["1000x Faster Processing", "60% Accuracy Improvement", "Quantum Algorithms", "Research Ready", "Future-proof Tech"],
      price: "From $6,999/month"
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
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & Quantum Computing"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing platforms, and autonomous business operations. Leading provider of next-generation technology services."
        keywords="AI, Artificial Intelligence, Quantum Computing, Cybersecurity, Business Solutions, Technology Services, Machine Learning, Neural Networks, Autonomous Operations"
        type="website"
        image="/images/zion-tech-group-og.jpg"
        url="https://ziontechgroup.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Zion Tech Group - AI-Powered Business Solutions",
          "description": "Leading provider of AI-powered business solutions, quantum computing, and cutting-edge technology services",
          "url": "https://ziontechgroup.com",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "AI-powered business solutions and quantum computing services",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/images/zion-logo.png",
            "sameAs": [
              "https://linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI & Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Business Intelligence",
                    "description": "Advanced analytics and machine learning insights"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Quantum Computing Solutions",
                    "description": "Revolutionary quantum processing power"
                  }
                }
              ]
            }
          }
        }}
      />
      
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
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-label="Company Statistics">
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
                      <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative" aria-label="Featured Services">
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
                      <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Rating and price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-1" aria-label={`Rating: ${service.rating} out of 5 stars`}>
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
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" aria-hidden="true" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.path}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                      aria-label={`Learn more about ${service.title}`}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-label="Technology Stack">
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
                      <tech.icon className="w-12 h-12 mx-auto" aria-hidden="true" />
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
        
        {/* Comprehensive Services Showcase Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 via-transparent to-zion-cyan/10" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">
                Revolutionary Services 2025
              </h2>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                Explore our comprehensive collection of 40+ AI-powered, quantum computing, blockchain, and emerging technology solutions designed to transform your business
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-6 py-3">
                  <span className="text-zion-cyan font-semibold">🚀 40+ Services</span>
                </div>
                <div className="bg-zion-purple/20 border border-zion-purple/30 rounded-full px-6 py-3">
                  <span className="text-zion-purple font-semibold">⚡ Cutting-edge Tech</span>
                </div>
                <div className="bg-zion-pink/20 border border-zion-pink/30 rounded-full px-6 py-3">
                  <span className="text-zion-pink font-semibold">💎 Premium Quality</span>
                </div>
                <div className="bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-6 py-3">
                  <span className="text-zion-cyan font-semibold">💰 ROI: 200-1000%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
                <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-cyan/20">
                  <h3 className="text-zion-cyan font-bold text-lg mb-3">AI & Automation Services</h3>
                  <p className="text-zion-slate-light text-sm mb-3">From $1,299/month</p>
                  <ul className="text-zion-slate-light text-sm space-y-1">
                    <li>• AI Content Creation Suite</li>
                    <li>• AI Healthcare Analytics</li>
                    <li>• AI Autonomous Operations</li>
                    <li>• AI Predictive Maintenance</li>
                  </ul>
                </div>
                
                <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-purple/20">
                  <h3 className="text-zion-purple font-bold text-lg mb-3">Quantum Computing</h3>
                  <p className="text-zion-slate-light text-sm mb-3">From $6,999/month</p>
                  <ul className="text-zion-slate-light text-sm space-y-1">
                    <li>• Quantum Financial Trading</li>
                    <li>• Quantum Machine Learning</li>
                    <li>• Quantum Neural Networks</li>
                    <li>• Quantum Edge Computing</li>
                  </ul>
                </div>
                
                <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-pink/20">
                  <h3 className="text-zion-pink font-bold text-lg mb-3">Specialized Solutions</h3>
                  <p className="text-zion-slate-light text-sm mb-3">From $1,699/month</p>
                  <ul className="text-zion-slate-light text-sm space-y-1">
                    <li>• Legal Document Automation</li>
                    <li>• Supply Chain Optimization</li>
                    <li>• Sustainable Technology</li>
                    <li>• Autonomous Vehicles</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore All 40+ Services
                </a>
                <a 
                  href="/contact"
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Information & Get Started Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-800 via-zion-slate-700 to-zion-slate-800 relative">
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
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of businesses already leveraging our cutting-edge AI and quantum computing solutions. Get started today with a free consultation and discover how our services can drive unprecedented growth and efficiency.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold">Phone</p>
                        <p className="text-white text-lg">+1 302 464 0950</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-purple-400 font-semibold">Email</p>
                        <p className="text-white text-lg">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-400 font-semibold">Address</p>
                        <p className="text-white text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-blue-400 font-semibold">Website</p>
                        <a href="https://ziontechgroup.com" className="text-white text-lg hover:text-cyan-400 transition-colors">
                          ziontechgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Service Highlights & CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white">40+ Cutting-edge AI & Quantum Services</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white">Proven ROI: 200-1000% Return on Investment</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white">Enterprise-grade Security & Compliance</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white">24/7 Expert Support & Implementation</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a 
                      href="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center block text-lg"
                    >
                      Get Free Consultation
                    </a>
                    
                    <a 
                      href="/comprehensive-services-showcase-2025"
                      className="w-full border border-cyan-400/30 text-cyan-400 px-6 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 text-center block text-lg"
                    >
                      View All Services
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Interactive Testimonials Section */}
        <InteractiveTestimonials />
        
        {/* Enhanced Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative" aria-label="Why Choose Zion Tech Group">
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
                      <feature.icon className="w-10 h-10 text-white" aria-hidden="true" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-label="Call to Action">
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
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Request a free quote"
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
