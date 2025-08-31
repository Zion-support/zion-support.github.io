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

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"]
    },
    {
      title: "Micro SAAS Services",
      description: "Scalable software solutions tailored to your needs",
      icon: Zap,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your infrastructure for the future",
      icon: Rocket,
      features: ["Cloud Migration", "DevOps", "Security", "Compliance"]
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "from-cyan-400 to-blue-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: Shield,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      href: "/services/ai-business-intelligence",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/ai-compliance-assistant",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: Users,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 25,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      services: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      href: "/services/cybersecurity",
      count: 22,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
    },
    {
      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation guidance",
      icon: Zap,
      href: "/services/digital-transformation",
      count: 15,
      color: "from-yellow-400 to-orange-500",
      services: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"]
    },
    {
      name: "IoT & Edge Computing",
      description: "Smart device networks and edge computing solutions",
      icon: Cpu,
      href: "/services/iot-edge",
      count: 20,
      color: "from-green-400 to-emerald-500",
      services: ["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem solving",
      icon: Atom,
      href: "/services/quantum-computing",
      count: 12,
      color: "from-purple-400 to-pink-500",
      services: ["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"]
    }
  ];

  const emergingTech = [
    {
      title: "Metaverse Commerce",
      description: "Create virtual storefronts and immersive shopping experiences",
      icon: Globe2,
      href: "/services/metaverse-commerce-platform",
      price: "$399/month",
      category: "Emerging Tech"
    },
    {
      title: "Quantum AI Trading",
      description: "Revolutionary trading platform using quantum computing principles",
      icon: TrendingUp,
      href: "/services/quantum-ai-trading-platform",
      price: "$2,999/month",
      category: "FinTech"
    },
    {
      title: "Space Technology",
      description: "Satellite operations and space mission optimization",
      icon: Building,
      href: "/services/space-tech-optimization-platform",
      price: "$3,999/month",
      category: "Space Tech"
    },
    {
      title: "Autonomous Vehicles",
      description: "Fleet management for autonomous vehicle operations",
      icon: Car,
      href: "/services/autonomous-vehicle-fleet-management",
      price: "$799/month",
      category: "Transportation"
    }
  ];

  const microSaasServices = [
    {
      title: "AI Customer Success",
      description: "Predictive churn prevention and automated onboarding",
      icon: Users,
      href: "/services/ai-powered-customer-success",
      price: "$199/month",
      category: "Customer Success"
    },
    {
      title: "AI Legal Assistant",
      description: "Intelligent legal research and contract analysis",
      icon: Scale,
      href: "/services/ai-powered-legal-assistant",
      price: "$299/month",
      category: "Legal Tech"
    },
    {
      title: "Blockchain Supply Chain",
      description: "End-to-end visibility and traceability platform",
      icon: Network,
      href: "/services/blockchain-supply-chain",
      price: "$599/month",
      category: "Blockchain"
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Advanced medical imaging analysis and disease detection",
      icon: Heart,
      href: "/services/ai-powered-healthcare-diagnostics",
      price: "$1,499/month",
      category: "Healthcare"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
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
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Explore our services"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Get started with Zion Tech"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Hero Slides */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zion-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                          <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  {React.createElement(heroSlides[currentSlide].icon, { className: "w-12 h-12 text-cyan-400" })}
                </div>
              </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              {heroSlides[currentSlide].title}
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {heroSlides[currentSlide].features.map((feature, index) => (
                                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Slide Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

// Stats section component
const StatsSection = React.memo(() => {
  const stats = [
    { label: "Global Clients", value: "500+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Projects Delivered", value: "1000+", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Security Certifications", value: "25+", icon: Shield, color: "from-red-500 to-orange-500" },
    { label: "Countries Served", value: "45+", icon: Globe, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section className="py-20 bg-zion-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies 
            transform their digital infrastructure and achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index)              => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Services preview section
const ServicesPreview = React.memo(() => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-futuristic-enhanced">
        <div className="absolute inset-0 bg-cyber-grid animate-cyber-grid opacity-5"></div>
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute top-1/2 left-1/4 animate-quantum-pulse">
          <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-40 neon-glow"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-hologram">
          <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 neon-glow"></div>
        </div>
      </div>
    </div>
  );
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  const serviceCategories = [
    {
      name: "AI Solutions",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: "🤖",
      href: "/ai-services",
      count: 20,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Edge & IoT",
      description: "Ultra-low latency edge computing and IoT platform solutions",
      icon: "⚡",
      href: "/services/edge-computing-platform",
      count: 8,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: "☁️",
      href: "/services/cloud-devops",
      count: 12,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: "🔒",
      href: "/services/ai-compliance-copilot",
      count: 10,
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Data Governance",
      description: "AI-powered data protection and compliance management",
      icon: "🛡️",
      href: "/services/ai-data-governance",
      count: 6,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Customer Success",
      description: "AI-driven customer engagement and retention platforms",
      icon: "💝",
      href: "/services/customer-success",
      count: 15,
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing expertise, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, cybersecurity, cloud computing, Zion Tech Group"
      />
      
      <FuturisticBackground />
      
      <main className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        <StatsSection />
        <StatsSection />
        <ServicesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}
