import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { SEO } from '../components/SEO';
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

// Enhanced Hero Section
const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    "AI-Powered Business Operations",
    "Quantum Edge Computing",
    "Enterprise Automation",
    "Customer Experience Analytics"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

=======
import { CheckCircle, ArrowRight, Star, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, BarChart3, Target, Lightbulb, Database, Network, Eye, Globe2, Smartphone, Monitor, Server, Atom, Car, Scale, Leaf, Factory, Building, Clock, Phone, Mail, TrendingUp } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
import { ServicesShowcase } from "@/components/ServicesShowcase";
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
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FuturisticBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
=======
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
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
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zion-slate-dark font-bold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
<<<<<<< HEAD
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-8"
=======
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies 
            transform their digital infrastructure and achieve remarkable results.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
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
    );
  }
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, IoT, and digital transformation solutions. Expert consulting and innovative technology services."
        keywords="AI solutions, quantum computing, IoT, digital transformation, technology consulting, cybersecurity, cloud services"
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="futuristic-heading">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Leading AI & Technology Solutions 2025
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-2xl text-zinc-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Zion Tech Group delivers cutting-edge AI, cloud, and technology solutions 
            that drive innovation and accelerate digital transformation for enterprises worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Enterprise Clients", icon: Building2 },
              { number: "99.9%", label: "Uptime SLA", icon: ShieldCheck },
              { number: "24/7", label: "Global Support", icon: Globe2 },
              { number: "50+", label: "AI Services", icon: Brain }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
<<<<<<< HEAD
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-400">
                  {stat.label}
=======
                <div className="futuristic-card hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{category.count}</div>
                      <div className="text-sm text-slate-400">Services</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group-hover:translate-x-1"
                  >
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
              </motion.div>
            ))}
          </motion.div>
<<<<<<< HEAD

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zinc-400"
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
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center"
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
};

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
      icon: Chip,
      title: "Edge Computing",
      description: "Ultra-low latency IoT and edge solutions",
      href: "/services/edge-computing-platform",
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
=======
        </div>
      </motion.section>
      {/* Innovative Micro SAAS Services Showcase */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Innovative <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS services that deliver enterprise-grade functionality with startup simplicity
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* AI Project Manager */}
            <motion.div variants={itemVariants} className="group">
              <Link to="/services/ai-project-manager" className="block h-full">
                <div className="card-futuristic h-full flex flex-col justify-between hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      AI Project Manager
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      AI-powered project management with intelligent task prioritization and resource optimization
                    </p>
                    <div className="text-blue-400 text-sm font-medium">From $29/month</div>
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* AI Content Optimizer */}
            <motion.div variants={itemVariants} className="group">
              <Link to="/services/ai-content-optimizer" className="block h-full">
                <div className="card-futuristic h-full flex flex-col justify-between hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <span className="text-2xl">✍️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      AI Content Optimizer
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      Optimize content performance with AI-powered SEO and multi-platform analytics
                    </p>
                    <div className="text-green-400 text-sm font-medium">From $19/month</div>
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* AI Customer Support */}
            <motion.div variants={itemVariants} className="group">
              <Link to="/services/ai-customer-support" className="block h-full">
                <div className="card-futuristic h-full flex flex-col justify-between hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                      AI Customer Support
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      24/7 AI-powered support with multi-language capabilities and smart ticket routing
                    </p>
                    <div className="text-indigo-400 text-sm font-medium">From $39/month</div>
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* AI Data Analytics */}
            <motion.div variants={itemVariants} className="group">
              <Link to="/services/ai-data-analytics" className="block h-full">
                <div className="card-futuristic h-full flex flex-col justify-between hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      AI Data Analytics
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      Transform data into insights with predictive analytics and automated reporting
                    </p>
                    <div className="text-emerald-400 text-sm font-medium">From $49/month</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link 
              to="/micro-saas" 
              className="btn-futuristic inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              View All Micro SAAS Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
=======
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered insights to quantum computing breakthroughs, 
            we deliver cutting-edge solutions that drive innovation and growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.href}
                className="block bg-zion-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 text-3xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-medium">
                    {service.count} Solutions
                  </span>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      {/* Interactive Service Showcase - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-12 bg-zion-cyan/20 rounded-lg mb-4 max-w-md mx-auto"></div>
                <div className="h-6 bg-zion-slate-light/20 rounded-lg max-w-2xl mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      {/* Additional Sections */}
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <NewsletterSection />
      <FeaturedListingsSection />
      <PricingSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <AIServicesShowcase />
      <InteractiveTestimonials />
      <ServicesShowcase />
      <FloatingCTA />
    </div>
  );
};
export default Home;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD

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
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {reason.description}
=======
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};

// Enhanced CTA Section
const CTASection = () => {
=======
});
// CTA section
const CTASection = React.memo(() => {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD
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
=======
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of companies already leveraging our cutting-edge technology 
            solutions to stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zion-slate-dark font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
        </motion.div>
      </div>
    </section>
  );
<<<<<<< HEAD
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
=======
});
// Main Home component
const Home: React.FC = () => {
  const handleGetStarted = () => {
    // Handle get started action
    // // // // // // // console.log('Get Started clicked');
=======
    console.log('Get started clicked');
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}
=======
      <FuturisticBackground />
      <main className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        <StatsSection />
        <ServicesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};
export default Home;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
