import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EnhancedSEO, SEOConfigs } from '../components/EnhancedSEO';
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
  Building2,
  Truck,
  Scale,
  BookOpen,
  Home,
  Headphones
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

// Enhanced Hero Section with better content and CTAs
const HeroSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-slate-darker via-zion-blue-dark to-zion-slate-darker overflow-hidden">
      {/* Enhanced Background */}
      <FuturisticBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Industry Leader in AI & Technology Solutions 2025
            <Star className="w-4 h-4 ml-2 text-yellow-400" />
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-size-200 animate-gradient">
              Next-Gen AI Solutions
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Zion Tech Group delivers cutting-edge AI, quantum computing, and cloud solutions that 
            <span className="text-zion-cyan font-semibold"> accelerate digital transformation</span> and 
            <span className="text-zion-purple font-semibold"> drive exponential growth</span> for forward-thinking organizations.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zion-cyan/25 transform-gpu"
            >
              Start Your Transformation
              <Rocket className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
            </Link>
            
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-5 text-lg font-semibold text-zion-cyan border-2 border-zion-cyan hover:bg-zion-cyan hover:text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zion-cyan/20"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="group inline-flex items-center px-6 py-5 text-lg font-semibold text-zion-slate-light hover:text-white transition-colors">
              <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm"
          >
            <div className="flex items-center gap-3 p-3 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span className="text-zion-cyan font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-zion-cyan font-medium">500+ Clients Worldwide</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-zion-cyan font-medium">Industry Leader 2025</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-zion-cyan font-medium">99.9% Uptime</span>
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Global Clients", icon: Users },
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "24/7", label: "Support", icon: Clock },
              { number: "50+", label: "AI Services", icon: Brain }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-zion-purple/5 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/30 transition-colors">
                <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-zion-cyan rounded-full flex justify-center cursor-pointer hover:border-zion-cyan-light transition-colors group"
          onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-4 bg-zion-cyan rounded-full mt-2 group-hover:bg-zion-cyan-light transition-colors"
          />
        </motion.div>
        <div className="text-center mt-2 text-zion-cyan text-sm font-medium">Scroll to explore</div>
      </motion.div>
    </section>
  );
});

// Enhanced Services Section with better cards
const ServicesSection = () => {
  const services = [
    {
      title: "AI Autonomous Business Operations",
      description: "Transform your business with AI that autonomously manages, optimizes, and scales your entire business ecosystem with intelligent decision-making.",
      icon: Brain,
      color: "from-zion-purple to-zion-purple-dark",
      link: "/services/ai-autonomous-business-operations-platform",
      features: ["Autonomous Management", "Intelligent Optimization", "Scalable Operations", "Real-time Analytics"],
      badge: "Featured"
    },
    {
      title: "Quantum Edge Computing",
      description: "Revolutionize your infrastructure with the world's first quantum-enhanced edge computing platform for unprecedented performance.",
      icon: Atom,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/quantum-edge-computing-solutions",
      features: ["Quantum Processing", "Edge Optimization", "Low Latency", "High Performance"],
      badge: "Innovation"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Transform customer relationships with AI-powered analytics that understand and optimize every interaction for maximum satisfaction.",
      icon: BarChart3,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-customer-experience-analytics-platform",
      features: ["Customer Insights", "Behavior Analysis", "Predictive Modeling", "ROI Optimization"],
      badge: "Popular"
    },
    {
      title: "AI Project Management",
      description: "Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.",
      icon: Workflow,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-project-management-platform",
      features: ["Smart Planning", "Resource Optimization", "Risk Management", "Progress Tracking"],
      badge: "Essential"
    },
    {
      title: "AI Enterprise Workflow Automation",
      description: "Streamline business processes with intelligent workflow automation that learns and optimizes over time.",
      icon: Workflow,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-enterprise-workflow-automation",
      features: ["Process Automation", "Learning Algorithms", "Efficiency Gains", "Cost Reduction"],
      badge: "Enterprise"
    },
    {
      title: "AI Quantum Computing Solutions",
      description: "Harness quantum computing power with AI-enhanced algorithms for exponential performance improvements.",
      icon: Atom,
      color: "from-zion-cyan to-zion-purple",
      link: "/services/ai-quantum-computing-solutions",
      features: ["Quantum Algorithms", "AI Integration", "Performance Boost", "Future-Ready"],
      badge: "Cutting-Edge"
    },
    {
      title: "AI Cybersecurity Threat Intelligence",
      description: "Protect your organization with AI-powered threat detection and automated response systems.",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      link: "/services/ai-cybersecurity-threat-intelligence",
      features: ["Threat Detection", "Automated Response", "Real-time Monitoring", "Risk Mitigation"],
      badge: "Security"
    },
    {
      title: "Cybersecurity Platform",
      description: "Advanced security solutions to protect your digital assets with enterprise-grade protection.",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity",
      features: ["Threat Prevention", "Incident Response", "Compliance", "24/7 Monitoring"],
      badge: "Critical"
    },
    {
      title: "Cloud & DevOps Services",
      description: "Scalable cloud infrastructure and management solutions for modern enterprises.",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      link: "/services/cloud-devops",
      features: ["IoT Platforms", "Real-time Analytics", "5G Integration", "Scalable Infrastructure"],
      badge: "Cloud"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Innovative software-as-a-service solutions for modern businesses with rapid deployment.",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
      link: "/micro-saas",
      features: ["AI Sales Copilot", "Compliance Assistant", "FinOps Optimizer", "BI Dashboard"],
      badge: "SaaS"
    },
    {
      title: "AI Enterprise Solutions",
      description: "Comprehensive AI-powered enterprise resource planning and management for large organizations.",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      link: "/services/ai-enterprise-resource-planning",
      features: ["Resource Planning", "Process Automation", "Business Intelligence", "Supply Chain Optimization"],
      badge: "Enterprise"
    },
    {
      title: "Customer Success AI",
      description: "AI-driven customer success and relationship management platforms for growth-focused companies.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      link: "/services/ai-customer-success-platform",
      features: ["Customer Insights", "Success Automation", "Churn Prevention", "Growth Analytics"],
      badge: "Growth"
    },
    {
      title: "Supply Chain AI",
      description: "Intelligent supply chain optimization and logistics management with predictive analytics.",
      icon: Truck,
      color: "from-orange-500 to-amber-500",
      link: "/services/ai-supply-chain-intelligence",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management"],
      badge: "Logistics"
    },
    {
      title: "Quantum AI Platform",
      description: "Next-generation quantum computing and AI integration for breakthrough performance.",
      icon: Zap,
      color: "from-cyan-500 to-blue-500",
      link: "/services/ai-quantum-neural-network-platform",
      features: ["Quantum Neural Networks", "AI Algorithms", "Quantum Simulation", "Performance Boost"],
      badge: "Quantum"
    },
    {
      title: "AI Legal Research",
      description: "Revolutionary AI-powered legal research and case analysis platform for legal professionals.",
      icon: Scale,
      color: "from-blue-500 to-indigo-500",
      link: "/services/ai-autonomous-legal-research-platform",
      features: ["Case Analysis", "Legal Research", "Compliance Monitoring", "Document Review"],
      badge: "Legal"
    },
    {
      title: "AI Educational Content",
      description: "AI-powered educational content creation across multiple formats for modern learning.",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-educational-content-creation-platform",
      features: ["Content Generation", "Multi-Format", "Personalized Learning", "Analytics"],
      badge: "Education"
    },
    {
      title: "AI Real Estate Analytics",
      description: "AI-powered real estate investment analytics and market intelligence for investors.",
      icon: Home,
      color: "from-orange-500 to-red-500",
      link: "/services/ai-real-estate-investment-analytics-platform",
      features: ["Market Analysis", "Investment Modeling", "ROI Optimization", "Risk Assessment"],
      badge: "Real Estate"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-zion-blue-dark/50 relative overflow-hidden">
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
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to transform your business 
            and accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Service Card */}
              <div className="relative h-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 card-hover overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-white font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations already leveraging our AI-powered solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
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

// Enhanced Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group's AI solutions transformed our operations. We've seen a 300% increase in efficiency and significant cost savings.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      logo: "🏢"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "The quantum edge computing platform exceeded our expectations. Performance improvements are remarkable and the support is exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      logo: "🚀"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "Global Manufacturing Inc.",
      content: "AI-powered supply chain optimization helped us reduce costs by 40% while improving delivery times. Game-changing technology.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      logo: "🏭"
    },
    {
      name: "David Kim",
      role: "Head of Digital Transformation",
      company: "Financial Services Group",
      content: "The AI cybersecurity platform provides peace of mind. Real-time threat detection and automated response keep us protected 24/7.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      logo: "💼"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Customer Success",
      company: "Retail Innovations",
      content: "Customer experience analytics platform revolutionized how we understand our customers. ROI was achieved within 3 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      logo: "🛍️"
    },
    {
      name: "Robert Wilson",
      role: "Chief Innovation Officer",
      company: "Healthcare Systems",
      content: "AI healthcare analytics platform provides insights we never had before. Patient outcomes have improved significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      logo: "🏥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-darker to-zion-blue-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            See how organizations across industries are transforming their businesses with our AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 transition-all duration-300 card-hover backdrop-blur-sm">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                    <div className="text-zion-cyan text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Join 500+ Organizations Already Transformed
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Global Clients", icon: Users },
                { number: "99.9%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Expert Support", icon: Headphones },
                { number: "50+", label: "AI Services", icon: Brain }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 text-zion-cyan mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
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
      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="flex flex-col gap-3">
          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openContact}
            className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center text-white"
            aria-label="Contact Us"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center text-white"
            aria-label="Scroll to top"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Action Button for Mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 left-6 z-50 md:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openContact}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center text-white"
          aria-label="Contact Us"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </motion.div>
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
        <TestimonialsSection />
        <CTASection />
        <FloatingActionButton />
      </div>
    </EnhancedSEO>
  );
}
