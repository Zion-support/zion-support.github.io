
import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOOptimizer, defaultSEO } from '../components/SEOOptimizer.tsx';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';
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

export default function Home() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI-Powered Customer Success Automation",
      description: "Intelligent platform that automates customer onboarding, success tracking, and churn prevention using predictive analytics with 35% churn reduction.",
      category: "Micro SAAS",
      price: "$199/month",
      features: ["AI-driven health scoring", "Predictive churn detection", "Automated workflows", "Real-time insights"],
      path: "/services",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "AI-Powered Cybersecurity Suite",
      description: "Advanced cybersecurity platform using AI to detect threats 10x faster with 80% reduction in false positives.",
      category: "Cybersecurity",
      price: "$699/month",
      features: ["AI threat detection", "Behavioral analysis", "Automated response", "24/7 SOC monitoring"],
      path: "/services",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "AI-Quantum Hybrid Computing Platform",
      description: "Revolutionary platform combining classical AI with quantum computing for 1000x faster problem solving.",
      category: "Emerging Tech",
      price: "$999/month",
      features: ["Quantum-classical hybrid", "Quantum ML", "Optimization algorithms", "Future-proof technology"],
      path: "/services",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Database,
      title: "AI Healthcare Analytics Platform",
      description: "Intelligent healthcare platform improving diagnosis accuracy by 30% and reducing treatment costs.",
      category: "AI Solutions",
      price: "$599/month",
      features: ["Patient data analytics", "Disease prediction", "Treatment optimization", "Clinical decision support"],
      path: "/services",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  const stats = [
    { label: "Services Available", value: "50+", icon: Zap },
    { label: "Innovation Levels", value: "4", icon: Star },
    { label: "Market Coverage", value: "$100B+", icon: TrendingUp },
    { label: "Support Levels", value: "4", icon: Users }
  ];

  const innovationLevels = [
    {
      level: "Revolutionary",
      description: "Breakthrough technologies that redefine industries and create new markets",
      examples: ["AI-Quantum Hybrid Computing", "Space Technology Platform", "Quantum Computing as a Service"],
      color: "text-purple-400 border-purple-400"
    },
    {
      level: "Cutting-edge",
      description: "Advanced solutions using latest AI and emerging technologies",
      examples: ["AI Cybersecurity Suite", "AI Healthcare Platform", "AI Financial Trading Platform"],
      color: "text-blue-400 border-blue-400"
    },
    {
      level: "Advanced",
      description: "Sophisticated solutions with proven track records and market validation",
      examples: ["AI Customer Success Automation", "AI Content Optimization", "AI Project Management"],
      color: "text-green-400 border-green-400"
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
});

// Loading fallback component
const LoadingFallback = ({ message }: { message: string })  => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-services",
    count: 25,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 18,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 12,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: "🚀",
    href: "/services/digital-transformation",
    count: 15,
    color: "from-green-500 to-cyan-600"
  },
  {
    name: "Infrastructure",
    description: "Robust IT infrastructure and network management solutions",
    icon: "🏗️",
    href: "/services/it-infrastructure",
    count: 10,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Consulting",
    description: "Strategic technology consulting and implementation guidance",
    icon: "💡",
    href: "/services/it-consulting",
    count: 14,
    color: "from-orange-500 to-green-600"
  },
  {
    name: "Emerging Tech",
    description: "Quantum computing, blockchain, and space technology solutions",
    icon: "⚡",
    href: "/services/quantum-computing",
    count: 8,
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "Healthcare Tech",
    description: "AI-powered healthcare and biotechnology solutions",
    icon: "🏥",
    href: "/services/healthcare-tech",
    count: 6,
    color: "from-pink-500 to-red-600"
  }
];

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

// Enhanced service categories with better descriptions
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-solutions",
    count: 15,
    color: "from-zion-cyan to-zion-blue"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud",
    count: 12,
    color: "from-zion-blue to-zion-purple"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/cybersecurity",
    count: 8,
    color: "from-zion-red to-zion-orange"
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: "🚀",
    href: "/services/transformation",
    count: 10,
    color: "from-zion-green to-zion-cyan"
  },
  {
    name: "Infrastructure",
    description: "Robust IT infrastructure and network management solutions",
    icon: "🏗️",
    href: "/services/infrastructure",
    count: 6,
    color: "from-zion-purple to-zion-pink"
  },
  {
    name: "Consulting",
    description: "Strategic technology consulting and implementation guidance",
    icon: "💡",
    href: "/services/consulting",
    count: 9,
    color: "from-zion-orange to-zion-green"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="particles" />
      <FloatingParticles count={20} />

      {/* IT Service Request Hero - Enhanced */}
      <ITServiceRequestHero />

      {/* Main Hero Section */}
      <HeroSection />
      
      {/* Enhanced Service Categories Overview */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-transparent to-zion-purple/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-semibold border border-zion-cyan/30">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-sm text-zinc-400 mb-1">Call Us</span>
                <a href="tel:+13024640950" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-sm text-zinc-400 mb-1">Email Us</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-sm text-zinc-400 mb-1">Visit Us</span>
                <span className="text-white font-semibold">
                  Middletown, DE 19709
                </span>
              </div>
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
      title: "AI Customer Churn Predictor",
      description: "Stop losing customers before they leave with AI that predicts churn with 95% accuracy and automatically triggers retention campaigns.",
      icon: TrendingDown,
      color: "from-blue-500 to-cyan-500",
      link: "/services/ai-powered-customer-churn-predictor"
    },
    {
      title: "AI Project Management",
      description: "Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.",
      icon: Workflow,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-project-management-platform"
    },
    {
      title: "AI-Powered SEO Platform",
      description: "Revolutionize your search engine optimization with AI that understands search intent, predicts trends, and automatically optimizes content.",
      icon: Search,
      color: "from-green-500 to-blue-500",
      link: "/services/ai-powered-seo"
    },
    {
      title: "AI Legal Document Automation",
      description: "Transform your legal practice with AI that generates, reviews, and optimizes legal documents in seconds.",
      icon: FileText,
      color: "from-purple-500 to-indigo-500",
      link: "/services/ai-legal-document-automation-platform"
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
      title: "AI Autonomous Logistics",
      description: "Revolutionize logistics with AI that autonomously optimizes routes, manages fleets, and reduces costs by 40%.",
      icon: Truck,
      color: "from-blue-500 to-cyan-500",
      link: "/services/ai-autonomous-logistics-platform"
    },
    {
      title: "AI Autonomous Manufacturing",
      description: "Transform manufacturing with AI that autonomously optimizes production, quality control, and reduces defects by 80%.",
      icon: Factory,
      color: "from-purple-500 to-pink-500",
      link: "/services/ai-autonomous-manufacturing-platform"
    },
    {
      title: "AI Autonomous Research",
      description: "Accelerate research by 10x with AI that autonomously conducts research, analyzes data, and generates insights.",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-autonomous-research-assistant"
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Business Automation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform your business with AI-powered automation that increases efficiency by 300%.
              </p>
              <a href="/ai-autonomous-business-automation" className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">Learn More →</a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Military-grade AI-powered security with 99.9% threat detection accuracy.
              </p>
              <a href="/ai-cybersecurity-platform" className="inline-block mt-3 text-red-600 dark:text-red-400 hover:underline">Learn More →</a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cloud & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accelerate development with 10x faster deployments and 40% cost reduction.
              </p>
              <a href="/cloud-devops-platform" className="inline-block mt-3 text-cyan-600 dark:text-cyan-400 hover:underline">Learn More →</a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform data into insights with AI-powered analytics and 300% ROI improvement.
              </p>
              <a href="/data-analytics-platform" className="inline-block mt-3 text-emerald-600 dark:text-emerald-400 hover:underline">Learn More →</a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/comprehensive-services-2029"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      }>
        <InteractiveServiceShowcase />
      </Suspense>

      {/* Enhanced Featured Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-zion-slate-dark to-background"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* AI-Powered Solutions */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 backdrop-blur-md p-8 rounded-3xl border border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                    <p className="text-zion-cyan text-sm font-medium">Most Popular</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.
                </p>
                <Link 
                  to="/ai-solutions" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore AI Solutions
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 backdrop-blur-md p-8 rounded-3xl border border-zion-blue/30 hover:border-zion-blue/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-blue/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                    <p className="text-zion-blue text-sm font-medium">Enterprise Ready</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Build, deploy, and scale your applications with our enterprise-grade cloud infrastructure and automated DevOps practices.
                </p>
                <Link 
                  to="/services/cloud" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-blue to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-blue/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Cloud Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
