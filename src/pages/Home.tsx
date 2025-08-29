import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Activity, 
  Calendar, 
  MessageCircle, 
  PenTool,
  Rocket,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Users,
  BarChart3,
  FileImage,
  Video,
  FileText,
  Heart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Award,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Search,
  ShoppingCart,
  RefreshCw
} from 'lucide-react';

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
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { LoadingFallback } from "@/components/LoadingFallback";
import { AnimatedBackground, FloatingParticles } from "@/components/ui/AnimatedBackground";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featuredServices = [
    {
      title: "Quantum AI Hybrid Platform",
      description: "Revolutionary platform combining quantum computing with advanced AI for unprecedented computational power",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      price: "$25,000/month",
      features: ["Quantum processing", "AI optimization", "Real-time analytics"]
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Next-generation cybersecurity using AI and machine learning to detect and prevent threats in real-time",
      icon: Shield,
      color: "from-zion-red to-zion-orange",
      price: "$8,999/month",
      features: ["Threat detection", "Automated response", "Zero-day protection"]
    },
    {
      title: "Autonomous AI Operations",
      description: "Platform that autonomously manages business operations with intelligent decision-making capabilities",
      icon: Zap,
      color: "from-zion-green to-zion-emerald",
      price: "$15,999/month",
      features: ["Process automation", "Predictive analytics", "Resource optimization"]
    }
  ];

  const microSaaSServices = [
    {
      title: "AI Lead Scoring",
      description: "Intelligent lead qualification with AI-powered scoring algorithms",
      icon: Target,
      color: "from-zion-blue to-zion-cyan",
      link: "/services/ai-lead-scoring"
    },
    {
      title: "Website AI Chatbot",
      description: "Smart conversational AI for enhanced customer engagement",
      icon: MessageCircle,
      color: "from-zion-purple to-zion-pink",
      link: "/services/website-ai-chatbot"
    },
    {
      title: "RAG Search Engine",
      description: "Advanced search with Retrieval-Augmented Generation technology",
      icon: Search,
      color: "from-zion-green to-zion-emerald",
      link: "/services/rag-search"
    },
    {
      title: "MLOps Pipeline",
      description: "Streamlined machine learning operations and deployment",
      icon: Cpu,
      color: "from-zion-orange to-zion-red",
      link: "/services/mlops-pipeline"
    },
    {
      title: "E-commerce Personalization",
      description: "AI-driven product recommendations and customer insights",
      icon: ShoppingCart,
      color: "from-zion-pink to-zion-purple",
      link: "/services/ecommerce-personalization"
    },
    {
      title: "Returns Management SaaS",
      description: "Intelligent returns processing and customer satisfaction optimization",
      icon: RefreshCw,
      color: "from-zion-cyan to-zion-blue",
      link: "/services/returns-management"
    },
    {
      title: "Vendor Risk Management",
      description: "Comprehensive vendor assessment and risk mitigation platform",
      icon: ShieldCheck,
      color: "from-zion-red to-zion-orange",
      link: "/services/vendor-risk-management"
    },
    {
      title: "AI SEO Optimizer",
      description: "Automated SEO optimization with AI-powered content analysis",
      icon: TrendingUp,
      color: "from-zion-green to-zion-emerald",
      link: "/services/ai-seo-optimizer"
    },
    {
      title: "SaaS Churn Predictor",
      description: "Predictive analytics to reduce customer churn and improve retention",
      icon: Activity,
      color: "from-zion-purple to-zion-pink",
      link: "/services/saas-churn-predictor"
    },
    {
      title: "AI Incident Postmortems",
      description: "Automated incident analysis and learning for continuous improvement",
      icon: FileText,
      color: "from-zion-orange to-zion-red",
      link: "/services/ai-incident-postmortems"
    },
    {
      title: "API Monitoring SaaS",
      description: "Real-time API performance monitoring and alerting system",
      icon: Network,
      color: "from-zion-blue to-zion-cyan",
      link: "/services/api-monitoring"
    },
    {
      title: "Employee Scheduling SaaS",
      description: "AI-powered workforce management with smart scheduling and time tracking",
      icon: Calendar,
      color: "from-zion-orange to-zion-red",
      link: "/services/employee-scheduling-saas"
    },
    {
      title: "AI Support Helpdesk",
      description: "Intelligent customer support with AI chatbots and multi-channel assistance",
      icon: MessageCircle,
      color: "from-zion-teal to-zion-cyan",
      link: "/services/ai-support-helpdesk"
    },
    {
      title: "AI Content Generator",
      description: "Create engaging content with AI-powered writing tools and templates",
      icon: PenTool,
      color: "from-zion-pink to-zion-purple",
      link: "/services/ai-content-generator"
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link focus:top-6">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section 
        id="main-content"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-light to-zion-slate-dark"
        aria-label="Hero section"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue/10 via-transparent to-zion-purple/10"></div>
        
        {/* Floating Elements with Enhanced Animation */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-60 shadow-glow-cyan"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-zion-purple rounded-full opacity-60 shadow-glow-purple"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-zion-pink rounded-full opacity-60 shadow-glow-pink"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float-delayed">
          <div className="w-5 h-5 bg-zion-green rounded-full opacity-40 shadow-glow-green"></div>
        </div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-orbitron">
              <span className="gradient-text">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-zion-gray-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div variants={itemVariants}>
                <Link 
                  to="/comprehensive-services" 
                  className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300"
                  aria-label="Explore all our services"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/revolutionary-services-2030" 
                  className="glass-button bg-gradient-to-r from-zion-purple to-zion-pink text-white hover:shadow-glow-purple-lg transform hover:scale-105 transition-all duration-300"
                  aria-label="Discover our revolutionary 2030 services"
                >
                  Revolutionary 2030
                  <Rocket className="ml-2 w-5 h-5 inline" />
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contact" 
                  className="glass-button border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  aria-label="Get started with our services"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Revolutionary Services Preview */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-purple/20 to-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
              Revolutionary Services
              <span className="block gradient-text-purple">2030</span>
            </h2>
            <p className="text-xl text-zion-gray-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions 
              designed to transform industries and drive unprecedented growth.
            </p>
            <Link 
              to="/revolutionary-services-2030" 
              className="glass-button bg-gradient-to-r from-zion-purple to-zion-pink text-white hover:shadow-glow-purple-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              aria-label="Explore our revolutionary services for 2030"
            >
              Explore Revolutionary Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Featured Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card group hover-lift cursor-pointer"
                onClick={() => window.location.href = service.link || '#'}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && (window.location.href = service.link || '#')}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-gray-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-zion-purple mb-2">
                  {service.price}
                </div>
                <div className="text-sm text-zion-gray mb-4">
                  Starting price • Enterprise support included
                </div>
                
                {/* Service Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-gray-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Services Showcase */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
              <span className="gradient-text">Micro SaaS Solutions</span>
            </h2>
            <p className="text-xl text-zion-gray-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our innovative micro SaaS solutions designed to solve specific business challenges with AI-powered intelligence
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card group hover-lift cursor-pointer"
                onClick={() => window.location.href = service.link}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && (window.location.href = service.link)}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-gray-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Quick Access Section */}
      <QuickAccess />

      {/* Enhanced Feature Highlights */}
      <FeatureHighlights />

      {/* Enhanced Feature CTAs */}
      <FeatureCTAs />

      {/* Enhanced Categories Section */}
      <CategoriesSection />

      {/* Enhanced Benefits Section */}
      <BenefitsSection />

      {/* Enhanced How It Works Section */}
      <HowItWorksSection />

      {/* Enhanced Featured Listings Section */}
      <FeaturedListingsSection />

      {/* Comprehensive Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
