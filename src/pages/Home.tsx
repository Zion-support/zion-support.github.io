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
  Palette,
  ArrowUpRight,
  Star as StarIcon,
  Calendar,
  BookOpen,
  Video,
  Headphones,
  Download,
  ExternalLink
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

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
    <FuturisticBackground />
    
    <div className="relative z-10 text-center max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-full text-sm text-cyan-400 mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Pioneering the Future of Technology</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          We're not just building technology—we're crafting the future. From AI-powered solutions to quantum computing breakthroughs, 
          we transform businesses and accelerate digital evolution with cutting-edge innovation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
      >
        <Link
          to="/services"
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
        >
          Explore Our Services
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          Start Your Journey
          <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">Enterprise Security</span>
          </div>
          <p className="text-gray-400 text-sm">Bank-grade security protocols and compliance standards</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Globe2 className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold">Global Reach</span>
          </div>
          <p className="text-gray-400 text-sm">Serving clients across 25+ countries worldwide</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Industry Leader</span>
          </div>
          <p className="text-gray-400 text-sm">Recognized by Gartner and Forrester for innovation</p>
        </div>
      </motion.div>
    </div>
  </section>
);

// Services Preview Section
const ServicesPreview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence platforms, predictive analytics, and automation solutions that transform business operations.",
      color: "from-purple-500 to-pink-500",
      link: "/ai-services",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services that modernize legacy systems and optimize business processes for the digital age.",
      color: "from-blue-500 to-cyan-500",
      link: "/it-services",
      features: ["Legacy Modernization", "Process Optimization", "Change Management", "Technology Strategy"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud solutions, automated development operations, and infrastructure as code for modern applications.",
      color: "from-green-500 to-emerald-500",
      link: "/services",
      features: ["Multi-Cloud Strategy", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions, threat intelligence platforms, and comprehensive security assessments for enterprise protection.",
      color: "from-red-500 to-orange-500",
      link: "/services",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Auditing", "Incident Response"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Our Core Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Solutions That Drive
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Real Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey and deliver measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Statistics Section
const StatisticsSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle, description: "Successfully delivered across industries" },
    { number: "50+", label: "Enterprise Clients", icon: Users, description: "Fortune 500 companies trust us" },
    { number: "99.9%", label: "Uptime SLA", icon: Shield, description: "Guaranteed reliability and performance" },
    { number: "24/7", label: "Support Available", icon: Clock, description: "Round-the-clock technical assistance" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of organizations achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Case Studies Section
const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Supply Chain Optimization",
      company: "Global Manufacturing Corp",
      description: "Implemented AI-driven demand forecasting and inventory optimization, reducing costs by 35% and improving delivery times by 40%.",
      results: ["35% cost reduction", "40% faster delivery", "99.5% forecast accuracy"],
      image: "/images/case-study-1.jpg",
      category: "AI Solutions"
    },
    {
      title: "Digital Transformation for Healthcare",
      company: "Metro Health Systems",
      description: "Modernized legacy systems and implemented cloud-based patient management, improving patient care efficiency by 50%.",
      results: ["50% efficiency improvement", "Enhanced patient experience", "Reduced operational costs"],
      image: "/images/case-study-2.jpg",
      category: "Digital Transformation"
    },
    {
      title: "Cybersecurity Infrastructure Overhaul",
      company: "Financial Services Inc",
      description: "Comprehensive security assessment and implementation of zero-trust architecture, achieving SOC 2 Type II compliance.",
      results: ["SOC 2 Type II compliance", "Zero security breaches", "Enhanced threat detection"],
      image: "/images/case-study-3.jpg",
      category: "Cybersecurity"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-6">
            <StarIcon className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve breakthrough results through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <FileText className="w-16 h-16 mx-auto mb-2" />
                  <span className="text-sm">Case Study Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs mb-3">
                  {study.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{study.company}</p>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="space-y-2 mb-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {result}
                    </div>
                  ))}
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Read Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-6">
          <Rocket className="w-4 h-4" />
          <span>Ready to Transform?</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Build the Future Together
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join hundreds of organizations that have already transformed their business with Zion Tech Group. 
          Your digital evolution starts with a single conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Consultation
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Learn More About Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <StatisticsSection />
      <FeaturedCaseStudies />
      <CTASection />
    </div>
  );
};

export default Home;
