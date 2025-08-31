import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
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
  ExternalLink,
  GitBranch
} from 'lucide-react';
import { SEO } from "@/components/SEO";

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 via-transparent to-cyan-500/5" />
    </div>
  );
});

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <FuturisticBackground />
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Pioneering the Future of Technology
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Transform Your Business with
        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          AI & Quantum Computing
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
      >
        Leading-edge technology solutions that drive innovation, enhance security, and accelerate digital transformation for enterprises worldwide.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link
          to="/contact"
          className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center"
        >
          Start Your Transformation
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/services"
          className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <Play className="mr-2 w-5 h-5" />
          Explore Solutions
        </Link>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
          <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
          <p className="text-gray-400 text-sm">SOC2 compliant with military-grade encryption</p>
        </div>
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <Globe className="w-12 h-12 text-blue-400 mx-auto mb-3" />
          <h3 className="text-white font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-400 text-sm">Serving clients across 25+ countries</p>
        </div>
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <Award className="w-12 h-12 text-purple-400 mx-auto mb-3" />
          <h3 className="text-white font-semibold mb-2">Industry Recognition</h3>
          <p className="text-gray-400 text-sm">Award-winning innovation and excellence</p>
        </div>
      </motion.div>
    </div>
  </section>
);

// Services Preview Section
const ServicesPreview = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions for business automation and decision-making",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Workflows"]
    },
    {
      title: "AI Edge Computing",
      description: "Revolutionary edge AI platform for real-time processing and distributed intelligence",
      icon: Cpu,
      color: "from-cyan-500 to-blue-600",
      features: ["Real-time AI Processing", "Edge AI Optimization", "Distributed Intelligence", "Edge-Cloud Hybrid"]
    },
    {
      title: "AI Business Intelligence",
      description: "AI-powered BI platform with predictive analytics and natural language queries",
      icon: BarChart3,
      color: "from-green-500 to-emerald-600",
      features: ["Predictive Analytics", "Natural Language Query", "Real-time Dashboards", "Automated Insights"]
    },
    {
      title: "AI Customer Experience",
      description: "Intelligent customer experience platform with AI chatbots and sentiment analysis",
      icon: MessageCircle,
      color: "from-pink-500 to-rose-600",
      features: ["AI Chatbots", "Sentiment Analysis", "Personalized Recommendations", "Omnichannel Support"]
    },
    {
      title: "AI DevOps Automation",
      description: "AI-powered DevOps platform with intelligent CI/CD and predictive infrastructure",
      icon: GitBranch,
      color: "from-indigo-500 to-purple-600",
      features: ["Intelligent CI/CD", "Predictive Infrastructure", "Automated Security", "Smart Monitoring"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum platforms for complex problem-solving and optimization",
      icon: Atom,
      color: "from-blue-500 to-cyan-600",
      features: ["Quantum Algorithms", "Hybrid Classical-Quantum Systems", "Optimization Problems", "Cryptography"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Our Core Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From AI-powered automation to quantum computing platforms, we deliver cutting-edge solutions that drive business growth and innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center mt-6 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
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
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction ratings from our clients"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global presence with clients worldwide"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and monitoring"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our track record speaks for itself. We've helped hundreds of organizations achieve their digital transformation goals.
          </motion.p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Case Studies Section
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI-Powered Supply Chain Optimization",
      company: "Global Manufacturing Corp",
      description: "Implemented AI-driven demand forecasting and inventory management, reducing costs by 35% and improving delivery times by 40%.",
      results: ["35% cost reduction", "40% faster delivery", "99.9% accuracy"],
      category: "AI & Machine Learning",
      image: "/images/case-studies/supply-chain.jpg"
    },
    {
      title: "Quantum Computing for Financial Modeling",
      company: "Quantum Finance Solutions",
      description: "Developed quantum algorithms for portfolio optimization, achieving 3x faster computation and 25% better risk-adjusted returns.",
      results: ["3x faster computation", "25% better returns", "Enhanced risk management"],
      category: "Quantum Computing",
      image: "/images/case-studies/financial-modeling.jpg"
    },
    {
      title: "Digital Transformation for Healthcare",
      company: "MedTech Innovations",
      description: "Complete digital transformation including AI-powered diagnostics, patient management systems, and telemedicine platforms.",
      results: ["60% efficiency improvement", "Enhanced patient care", "Reduced wait times"],
      category: "Digital Transformation",
      image: "/images/case-studies/healthcare.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover how we've helped organizations across industries achieve remarkable results through innovative technology solutions.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center text-cyan-400">
                  <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                  <span className="text-sm font-medium">{study.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-cyan-400 font-medium mb-2">
                  {study.category}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  <strong>{study.company}</strong>
                </p>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
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
  <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
      >
        <Target className="w-4 h-4 mr-2" />
        Ready to Transform?
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Let's Build the Future Together
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
      >
        Ready to accelerate your digital transformation? Our team of experts is here to help you navigate the future of technology.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link
          to="/contact"
          className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center"
        >
          <Phone className="mr-2 w-5 h-5" />
          Get Free Consultation
        </Link>
        <Link
          to="/services"
          className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <ExternalLink className="mr-2 w-5 h-5" />
          View All Services
        </Link>
      </motion.div>
    </div>
  </section>
);

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO />
      
      <HeroSection />
      <ServicesPreview />
      <StatisticsSection />
      <CaseStudiesSection />
      <CTASection />
    </div>
  );
}
