import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageSEO } from '../components/SEOOptimizer';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';
import { PerformanceDashboard } from '../components/PerformanceDashboard';
import { EnhancedAnalytics } from '../components/EnhancedAnalytics';
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
  Clock3,
  Target2,
  Building2
} from 'lucide-react';
import { SEO } from "@/components/SEO";

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.2,
      duration: 8 + i * 0.5,
      size: Math.random() * 2 + 1
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-cyan-400 rounded-full opacity-60 shadow-lg shadow-cyan-400/30"
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.3, 0.8],
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
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
});

// Enhanced Hero Section
const HeroSection = () => {
=======
// Enhanced Hero Section with better performance
const HeroSection = React.memo(() => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const features = [
    "AI-Powered Business Operations",
    "Quantum Edge Computing",
    "Enterprise Automation",
    "Customer Experience Analytics"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <FuturisticBackground />
      
=======
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Leading AI & Technology Solutions 2025
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan-light">
              {features[currentFeature]}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg sm:text-xl lg:text-2xl text-zinc-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Zion Tech Group delivers cutting-edge AI, cloud, and technology solutions 
            that drive innovation and accelerate digital transformation for enterprises worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/comprehensive-services-showcase-2025"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light rounded-xl shadow-2xl shadow-zion-cyan/25 hover:shadow-zion-cyan/40 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-zion-cyan border-2 border-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Today
              <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-zion-cyan"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-zion-cyan" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span className="text-sm">500+ Clients Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-zion-cyan" />
              <span className="text-sm">Industry Leader 2025</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center cursor-pointer hover:border-zion-cyan-light transition-colors"
          onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
});

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
      link: "/services/ai-customer-experience-analytics-platform"
    },
    {
      title: "AI Project Management",
      description: "Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.",
      icon: Workflow,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-project-management-platform"
    },
    {
      title: "AI Enterprise Workflow Automation",
      description: "Streamline business processes with intelligent workflow automation that learns and optimizes over time.",
      icon: Workflow,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-enterprise-workflow-automation"
    },
    {
      title: "AI Quantum Computing Solutions",
      description: "Harness quantum computing power with AI-enhanced algorithms for exponential performance improvements.",
      icon: Atom,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-quantum-computing-solutions"
    },
    {
      title: "AI Cybersecurity Threat Intelligence",
      description: "Protect your organization with AI-powered threat detection and automated response systems.",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-cybersecurity-threat-intelligence"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and management solutions",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      features: ["IoT Platforms", "Real-time Analytics", "5G Integration"]
    },
    {
      icon: TrendingUp,
      title: "Micro SaaS",
      description: "Innovative software-as-a-service solutions for modern businesses",
      href: "/micro-saas",
      color: "from-indigo-500 to-purple-500",
      features: ["AI Sales Copilot", "Compliance Assistant", "FinOps Optimizer", "BI Dashboard", "Support Automation", "Project Management", "Marketing Automation"]
    },
    {
      icon: Database,
      title: "AI Enterprise Solutions",
      description: "Comprehensive AI-powered enterprise resource planning and management",
      href: "/services/ai-enterprise-resource-planning",
      color: "from-emerald-500 to-teal-500",
      features: ["Resource Planning", "Process Automation", "Business Intelligence", "Supply Chain Optimization"]
    },
    {
      icon: Users,
      title: "Customer Success AI",
      description: "AI-driven customer success and relationship management platforms",
      href: "/services/ai-customer-success-platform",
      color: "from-pink-500 to-rose-500",
      features: ["Customer Insights", "Success Automation", "Churn Prevention", "Growth Analytics"]
    },
    {
      icon: Truck,
      title: "Supply Chain AI",
      description: "Intelligent supply chain optimization and logistics management",
      href: "/services/ai-supply-chain-intelligence",
      color: "from-orange-500 to-amber-500",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management"]
    },
    {
      icon: Zap,
      title: "Quantum AI",
      description: "Next-generation quantum computing and AI integration",
      href: "/services/ai-quantum-neural-network-platform",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum Neural Networks", "AI Algorithms", "Quantum Simulation"]
    },
    {
      icon: Scale,
      title: "AI Legal Research",
      description: "Revolutionary AI-powered legal research and case analysis platform",
      href: "/services/ai-autonomous-legal-research-platform",
      color: "from-blue-500 to-indigo-500",
      features: ["Case Analysis", "Legal Research", "Compliance Monitoring", "Document Review"]
    },
    {
      icon: BookOpen,
      title: "AI Educational Content",
      description: "AI-powered educational content creation across multiple formats",
      href: "/services/ai-educational-content-creation-platform",
      color: "from-green-500 to-emerald-500",
      features: ["Content Generation", "Multi-Format", "Personalized Learning", "Analytics"]
    },
    {
      icon: Home,
      title: "AI Real Estate Analytics",
      description: "AI-powered real estate investment analytics and market intelligence",
      href: "/services/ai-real-estate-investment-analytics-platform",
      color: "from-orange-500 to-red-500",
      features: ["Market Analysis", "Investment Modeling", "ROI Optimization", "Risk Assessment"]
    },
    {
      icon: DollarSign,
      title: "AI Financial Advisor",
      description: "Autonomous AI-powered financial advice and portfolio optimization",
      href: "/services/ai-autonomous-financial-advisor",
      color: "from-green-500 to-cyan-500",
      features: ["Investment Analysis", "Portfolio Optimization", "Risk Management", "Market Prediction"]
    },
    {
      icon: Heart,
      title: "AI Healthcare Diagnostics",
      description: "Revolutionary AI-powered medical diagnostics and health analytics",
      href: "/services/ai-autonomous-healthcare-diagnostics",
      color: "from-red-500 to-blue-500",
      features: ["Medical Imaging", "Disease Detection", "Predictive Analytics", "Clinical Support"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Operations",
      description: "Autonomous AI-powered cybersecurity and threat response",
      href: "/services/ai-autonomous-cybersecurity-operations",
      color: "from-orange-500 to-red-500",
      features: ["Threat Detection", "Autonomous Response", "Zero Trust", "24/7 Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-zion-blue-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Cutting-Edge Services for the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              Digital Age
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to drive innovation, 
            efficiency, and growth across your organization.
          </p>
        </motion.div>

        {/* 2032 Innovation Highlight */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 rounded-3xl p-8 border border-purple-500/30"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
                <Rocket className="w-4 h-4" />
                New for 2032
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Next-Generation Innovation
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience our revolutionary AI Quantum Neural Networks, Autonomous Business Operations, and Space Technology platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-4" />
                </div>
                <h4 className="text-white font-semibold mb-2">Quantum AI</h4>
                <p className="text-gray-400 text-sm">1000x faster computation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Autonomous Operations</h4>
                <p className="text-gray-400 text-sm">99.9% efficiency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Satellite className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Space Technology</h4>
                <p className="text-gray-400 text-sm">Next-gen exploration</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/innovative-services-showcase-2032"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Explore 2032 Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 h-full hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/comprehensive-services-showcase-2025"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-zion-cyan border-2 border-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
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
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              Zion Tech Group?
            </span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value and competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-zion-cyan/25">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

=======
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

// Floating Action Button Component
const FloatingActionButton = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <PageSEO pageType="home" />
      <div className="min-h-screen bg-zion-blue-dark">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
        
        {/* Enhanced Performance & Analytics Components */}
        <PerformanceDashboard enabled={true} showRealTime={true} />
        <EnhancedAnalytics enabled={true} showRealTime={true} />
      </div>
    </>
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
  );
}
