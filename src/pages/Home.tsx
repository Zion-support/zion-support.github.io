import { ServicesShowcase } from "@/components/home/ServicesShowcase";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
=======
import { ServicesOverview } from "@/components/ServicesOverview";
=======
import { FuturisticBackground } from "@/components/FuturisticBackground";
=======
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Code, 
  Users, 
  HardDrive,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  DollarSign,
  Clock,
  TrendingUp
} from "lucide-react";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Wifi from "lucide-react/dist/esm/icons/wifi";
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// New service highlights
const SERVICE_HIGHLIGHTS = [
  {
    icon: <Brain className="w-12 h-12 text-zion-cyan" />,
    title: "AI & Machine Learning",
    description: "Custom AI development, ML model training, and strategic consulting",
    price: "$8,000 - $25,000",
    features: ["Custom AI Models", "ML Training", "Strategy Consulting", "Integration"],
    link: "/category/ai-services",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Cloud className="w-12 h-12 text-zion-cyan" />,
    title: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps automation, and infrastructure management",
    price: "$5,000 - $30,000",
    features: ["Cloud Migration", "DevOps", "Kubernetes", "Monitoring"],
    link: "/category/cloud-services",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Shield className="w-12 h-12 text-zion-cyan" />,
    title: "Cybersecurity",
    description: "Security audits, compliance frameworks, and threat protection",
    price: "$8,000 - $35,000",
    features: ["Security Audits", "Compliance", "Penetration Testing", "Incident Response"],
    link: "/category/security-services",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Database className="w-12 h-12 text-zion-cyan" />,
    title: "Data & Analytics",
    description: "Big data engineering, BI dashboards, and data governance",
    price: "$6,000 - $28,000",
    features: ["Big Data", "Business Intelligence", "Data Governance", "Analytics"],
    link: "/category/data-services",
    color: "from-green-500 to-emerald-600"
  }
];

// Stats section data
const STATS_DATA = [
  { number: "500+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
  { number: "1,200+", label: "Tech Experts", icon: <Users className="w-6 h-6" /> },
  { number: "50+", label: "Service Categories", icon: <Code className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
];
=======
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ServiceRecommendations } from "@/components/ServiceRecommendations";
=======
import { AdvancedServicesShowcase } from "@/components/home/AdvancedServicesShowcase";
=======
import { AnimatedBackground, FloatingElements } from "@/components/ui/AnimatedBackground";
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
=======
import { MicroSaasShowcase } from "@/components/home/MicroSaasShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import FeatureFlag from "@/components/FeatureFlag";
import ElasticSearchSearch from "@/components/search/ElasticSearchSearch";
=======
import { PerformanceDashboard } from "@/components/PerformanceDashboard";

    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Leading Tech & AI Marketplace - Connect with World-Class Talent & Services" 
        description="Zion Tech Group is the premier marketplace for AI talent, IT services, and cutting-edge technology solutions. Connect with 10,000+ verified professionals, get 24/7 global IT support, and accelerate your digital transformation."
        keywords="AI marketplace, tech talent, IT services, software development, artificial intelligence, technology consulting, digital transformation, tech recruitment, AI solutions, enterprise technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
        type="website"
        ogImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center"
        tags={["AI", "Technology", "Marketplace", "IT Services", "Digital Transformation"]}
=======
        title="Zion Tech Group - Premier AI & Tech Marketplace" 
        description="Discover cutting-edge AI services, tech talent, and innovative micro SAAS solutions. Transform your business with our comprehensive ecosystem of technology services."
        keywords="AI services, machine learning, cloud migration, cybersecurity, data analytics, tech talent, micro SAAS, IT services"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Transform your business with cutting-edge AI services, IT solutions, and intelligent automation tools."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, IT consulting, business automation, cloud migration, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - Premier Tech & AI Marketplace" 
        description="Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. Connect with top talent and transform your business with next-generation technology."
        keywords="AI services, IT solutions, SaaS platforms, technology marketplace, enterprise solutions, AI consulting, cloud services, cybersecurity, digital transformation"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Future of Tech Solutions" 
        description="Discover cutting-edge AI services, innovative IT solutions, and transformative business tools. Zion Tech Group - Where innovation meets excellence."
        keywords="AI services, IT solutions, business automation, cloud services, cybersecurity, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
=======
export default function Home() {
  const { t } = useTranslation();
=======
  // Structured data for the home page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "The Tech & AI Marketplace - Discover top AI and tech talent, services, and equipment in one place.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
=======
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
=======
import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Heart
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEOConfigs } from '../components/SEOHead';
import { motion } from 'framer-motion';

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
import { EnhancedInnovativeServicesShowcase } from "@/components/EnhancedInnovativeServicesShowcase";
import { Revolutionary2029ServicesShowcase } from "@/components/Revolutionary2029ServicesShowcase";
import { EnhancedPricingComparison } from "@/components/EnhancedPricingComparison";

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"]
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"]
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"]
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
      title: "AI Autonomous Code Review",
      description: "Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues using advanced AI algorithms.",
      icon: Code,
      path: "/services/ai-autonomous-systems",
      features: ["Automated Analysis", "Security Detection", "Performance Optimization", "Team Collaboration"],
      price: "$399/month",
      category: "AI & Development"
    },
    {
      title: "Quantum Encryption as a Service",
      description: "Next-generation encryption platform leveraging quantum-resistant algorithms to protect sensitive data against future quantum computing threats.",
      icon: Lock,
      path: "/services/cybersecurity",
      features: ["Quantum-Resistant", "Real-time Protection", "Compliance Ready", "API Integration"],
      price: "$2,500/month",
      category: "Cybersecurity"
    },
    {
      title: "Autonomous DevOps Orchestration",
      description: "Self-managing DevOps platform that automatically optimizes deployment pipelines, infrastructure scaling, and performance monitoring.",
      icon: Cloud,
      path: "/services/it-infrastructure",
      features: ["Self-healing Infrastructure", "Automated Scaling", "Cost Optimization", "24/7 Monitoring"],
      price: "$899/month",
      category: "DevOps & Automation"
    },
    {
      title: "AI Customer Success Platform",
      description: "Intelligent platform that predicts customer churn, automates engagement, and optimizes customer lifetime value through machine learning.",
      icon: Users,
      path: "/services/micro-saas-solutions",
      features: ["Churn Prediction", "Automated Engagement", "Success Tracking", "Analytics Dashboard"],
      price: "$599/month",
      category: "AI & Business"
    },
    {
      title: "Blockchain Supply Chain Tracking",
      description: "End-to-end supply chain tracking solution using blockchain technology to ensure transparency, authenticity, and compliance.",
      icon: Network,
      path: "/services/industry-solutions",
      features: ["Real-time Tracking", "Smart Contracts", "Compliance Monitoring", "Multi-stakeholder Access"],
      price: "$1,800/month",
      category: "Blockchain & Web3"
    },
    {
      title: "Quantum Machine Learning Platform",
      description: "Advanced platform combining quantum computing principles with machine learning to solve complex optimization problems.",
      icon: Brain,
      path: "/services/quantum-technology",
      features: ["Quantum Algorithms", "Hybrid Models", "Optimization Solvers", "Expert Consultation"],
      price: "$3,500/month",
      category: "Quantum AI"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with military-grade encryption and zero-trust architecture"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with 99.9% uptime guarantee and global CDN"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Cutting-edge artificial intelligence and machine learning capabilities"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support in multiple languages with dedicated success managers"
    }
  ];

  const latestTechnologies = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: "🤖",
      link: "/ultimate-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: "⚛️",
      link: "/ultimate-services",
      features: ["Quantum Algorithms", "Quantum Machine Learning", "Cryptography", "Optimization"]
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technology solutions",
      icon: "🔗",
      link: "/ultimate-services",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Solutions", "Supply Chain"]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected device intelligence",
      icon: "🌐",
      link: "/ultimate-services",
      features: ["Smart Cities", "Industrial IoT", "Edge AI", "Real-time Analytics"]
    }
  ];

  const innovativeCategories = [
    {
      title: "Healthcare AI",
      icon: Heart,
      description: "Revolutionary medical diagnostics and patient care",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Neuromorphic Computing",
      icon: Brain,
      description: "Brain-inspired computing architecture",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Synthetic Biology",
      icon: Atom,
      description: "AI-powered biological engineering",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Advanced Robotics",
      icon: Rocket,
      description: "Intelligent automation and control systems",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, heroSlides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <Link 
      to={link}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 
        hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-500/20
        transition-all duration-300 transform hover:-translate-y-2
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}>
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-blue-200 mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-xs text-blue-300 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
          Learn more →
        </div>
      </div>
    </Link>
  );

ServiceCard.displayName = 'ServiceCard';

// Stats component for social proof
const StatsSection = memo(() => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });
  
  useEffect(() => {
    const animateCounts = () => {
      const targets = { projects: 500, clients: 150, years: 8 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ultimate-services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
              <div className="text-lg font-semibold text-zion-slate-light mb-1">{stat.label}</div>
              <div className="text-sm text-zion-slate-light">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge technology solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="futuristic-card p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-lg">
                    <service.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-zion-cyan">{service.price}</span>
                  <Link
                    to={service.path}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Innovative Categories Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our revolutionary technology categories that are shaping the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovativeCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <category.icon className="w-12 h-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                <p className="text-gray-400 text-center text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/ultimate-services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ultimate-services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <FuturisticHero />

      <EnhancedServicesShowcase />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasShowcase />
=======
      <MicroSaasShowcase />
      
      <FeatureHighlights />
      
      <ServicesOverview />
=======
      <ServicesShowcase />
=======
      <TestimonialCarousel />
=======
      <ComprehensiveServicesShowcase />
=======
      <ServicesOverview />
=======
      <ServicesOverview />
      
      <ServiceRecommendations maxRecommendations={6} />
=======
      <AdvancedServicesShowcase />
=======
      <MicroSaasShowcase />
=======
      <ServicesShowcase />
=======
      <EnhancedServicesShowcase />
=======
      <ServicesShowcase />
=======
      <EnhancedServicesShowcase />
      
      <CategoriesSection />
      <ServicesShowcase />
=======
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent neon-pulse">
                  Tech Services
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover the world's premier marketplace for cutting-edge AI services, 
                technology solutions, and innovative micro SAAS offerings. 
                Transform your business with our expert ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/services">
                  <Button size="lg" className="cyber-button px-8 py-4 text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Explore Services
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                {STATS_DATA.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.number}</div>
                    <div className="text-sm text-zion-slate-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="w-96 h-96 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl absolute -top-20 -left-20"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl absolute -bottom-20 -right-20"></div>
                
                {/* Floating service cards */}
                <div className="relative space-y-4">
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-4 float">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8 text-zion-cyan" />
                      <div>
                        <h4 className="text-white font-semibold">AI Development</h4>
                        <p className="text-zion-slate-light text-sm">Custom ML models</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-4 float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <Cloud className="w-8 h-8 text-zion-purple" />
                      <div>
                        <h4 className="text-white font-semibold">Cloud Migration</h4>
                        <p className="text-zion-slate-light text-sm">Seamless transition</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-4 float" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-zion-cyan" />
                      <div>
                        <h4 className="text-white font-semibold">Cybersecurity</h4>
                        <p className="text-zion-slate-light text-sm">Threat protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Premier Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of cutting-edge technology services, 
              each designed to address specific business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "AI Business Manager",
                description: "Intelligent business management with AI-powered decision making and automation.",
                path: "/ai-autonomous-business-manager",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "☁️",
                title: "AI Business Platform",
                description: "Cloud-native AI platform for scalable business intelligence and operations.",
                path: "/ai-autonomous-business-platform",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "💻",
                title: "AI Code Review",
                description: "Automated code analysis with security scanning and performance optimization.",
                path: "/ai-autonomous-code-review",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🤖",
                title: "AI Autonomous Systems",
                description: "Advanced AI systems that operate independently to optimize business processes.",
                path: "/services/ai-autonomous-systems",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "🔒",
                title: "Cybersecurity",
                description: "Quantum-safe security solutions with advanced threat detection and prevention.",
                path: "/services/cybersecurity",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: "⚡",
                title: "Quantum Technology",
                description: "Next-generation quantum computing solutions for complex problem solving.",
                path: "/services/quantum-technology",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Services Showcase */}
      <AdvancedServicesShowcase />

      {/* Original Services Showcase */}
      <ServicesShowcase />
      
      {/* Benefits Section */}
=======
      <EnhancedCategoriesSection />
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings Section */}
      <FeaturedListingsSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    <div className="min-h-screen bg-background" id="main-content">
      <CategoriesSection />
      <ServicesShowcase />
=======
=======
      <FeatureFlag name="elasticsearch-search">
        <div className="max-w-xl mx-auto py-8">
          <ElasticSearchSearch />
        </div>
      </FeatureFlag>
=======

      {/* Performance Dashboard - Only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <PerformanceDashboard />
      )}
=======
        description="Discover top AI and tech talent, services, and equipment in one place. Global IT support, AI-powered matching, and enterprise solutions for the future of work."
        keywords="AI marketplace, tech talent, IT services, global IT support, AI matching, tech services, enterprise solutions, talent acquisition, IT consulting, AI development"
        canonical="/"
        ogType="website"
        structuredData={structuredData}
      />

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Expert team delivering results."
        keywords="AI solutions, IT services, technology consulting, digital transformation, cybersecurity, cloud computing"
      />
      
      <QuickAccess />
      <FeatureHighlights />
      <ITServiceRequestHero />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <ContactSection />
      <NewsletterSection />
=======
      <HeroSection />
      <ServicesSection />
      <LatestInnovationsSection />
      <WhyChooseUsSection />
      <CTASection />
      <FloatingActionButton />
    </div>
=======
    <>
      <Helmet>
        <title>Zion Tech Group - The Future of Tech & AI Marketplace</title>
        <meta name="description" content="Discover our comprehensive collection of 35+ innovative micro SAAS services, from AI-powered productivity tools to revolutionary quantum computing platforms. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI solutions, quantum computing, machine learning, digital transformation, IT consulting, cybersecurity, cloud services, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - The Future of Tech & AI Marketplace" />
        <meta property="og:description" content="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - The Future of Tech & AI Marketplace" />
        <meta name="twitter:description" content="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Future of Tech & AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Marketplace
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive collection of 35+ innovative micro SAAS services, 
              from AI-powered productivity tools to revolutionary quantum computing platforms. 
              Transform your business with cutting-edge technology solutions.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                  <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                  <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore All Services
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by leading organizations worldwide
              </p>
            </div>
            
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
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Service Categories Overview */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300">
                Explore our comprehensive range of innovative technology solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{category.count} Services</span>
                    <Link
                      to="/services"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group-hover:translate-x-1 transform transition-transform"
                    >
                      View All →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300">
                Discover our most innovative and cutting-edge solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <div className="text-lg font-bold text-blue-400">{service.price}</div>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group-hover:translate-x-1 transform transition-transform"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by industry leaders worldwide
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300">
                Leading the way in innovative technology solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300 text-sm">Cutting-edge AI, quantum computing, and emerging technologies</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300 text-sm">Experienced professionals with deep technical expertise</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade solutions with proven track records</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">ROI Focused</h3>
                <p className="text-gray-300 text-sm">Solutions designed to deliver measurable business value</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
=======

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
