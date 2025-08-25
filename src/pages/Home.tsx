

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Zap,
  Globe,
  Target
} from 'lucide-react';

// Memoized components for better performance
const HeroSlide = React.memo(({ slide, isActive, index }: {
  slide: any;
  isActive: boolean;
  index: number;
}) => (
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}
    aria-hidden={!isActive}
    role="tabpanel"
    aria-labelledby={`slide-${index}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80"></div>
    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>
    
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <slide.icon className="w-20 h-20 mx-auto mb-6 text-white opacity-80" aria-hidden="true" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
            {slide.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {slide.description}
          </p>
          <Link
            to={slide.path}
            className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={`Learn more about ${slide.title}`}
          >
            <span>{slide.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = React.memo(({ stat, index }: { stat: any; index: number }) => (
  <div
    className="text-center group"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <div className="glass-card p-6 hover:scale-105 transition-transform duration-300 focus-within:ring-4 focus-within:ring-cyan-500/50">
      <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} aria-hidden="true" />
      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
      <div className="text-gray-400">{stat.label}</div>
    </div>
  </div>
));

const ServiceCard = React.memo(({ service, index }: { service: any; index: number }) => (
  <div
    className="glass-card p-6 hover:scale-105 transition-all duration-300 group focus-within:ring-4 focus-within:ring-cyan-500/50"
    style={{ animationDelay: `${index * 200}ms` }}
    tabIndex={0}
    role="article"
    aria-labelledby={`service-${service.id}`}
  >
    <div className="flex items-center justify-between mb-4">
      <service.icon className="w-12 h-12 text-cyan-400" aria-hidden="true" />
      <div className="flex items-center space-x-1" aria-label={`Rating: ${service.rating} out of 5 stars from ${service.reviewCount} reviews`}>
        <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
        <span className="text-sm text-gray-300">{service.rating}</span>
        <span className="text-xs text-gray-500">({service.reviewCount})</span>
      </div>
    </div>

    <h3 id={`service-${service.id}`} className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
      {service.title}
    </h3>
    
    <p className="text-gray-300 mb-4 leading-relaxed">
      {service.description}
    </p>

    <div className="mb-4">
      <span className="text-sm text-purple-400 font-medium">{service.category}</span>
      <div className="text-2xl font-bold text-cyan-400 mt-1">{service.price}</div>
    </div>

    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
      <ul className="space-y-1" role="list">
        {service.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <Link
      to={service.path}
      className="w-full futuristic-btn text-center group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
      aria-label={`Learn more about ${service.title}`}
    >
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
    </Link>
  </div>
));

const FeatureCard = React.memo(({ feature, index }: { feature: any; index: number }) => (
  <div
    className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group focus-within:ring-4 focus-within:ring-cyan-500/50"
    style={{ animationDelay: `${index * 100}ms` }}
    tabIndex={0}
    role="article"
  >
    <feature.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" aria-hidden="true" />
    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-gray-300 leading-relaxed">
      {feature.description}
    </p>
  </div>
));

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoized data for better performance
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "From predictive analytics to intelligent automation, we deliver AI solutions that drive real business results.",
      cta: "Explore AI Solutions",
      path: "/comprehensive-services",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Enterprise IT Excellence",
      subtitle: "Comprehensive IT services for modern businesses",
      description: "24/7 support, cybersecurity, cloud solutions, and strategic technology consulting to keep your business ahead.",
      cta: "View IT Services",
      path: "/it-onsite-services",
      icon: Shield,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Micro SAAS Solutions",
      subtitle: "Scalable software solutions for every business need",
      description: "Custom micro SAAS applications that streamline operations, reduce costs, and accelerate growth.",
      cta: "Browse Services",
      path: "/services",
      icon: Cpu,
      color: "from-green-500 to-emerald-600"
    }
  ], []);

  const featuredServices = useMemo(() => [
    {
      id: "ai-powered-crm",
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive analytics and automated insights",
      price: "$1,500/month",
      features: ["Predictive Analytics", "Automated Follow-ups", "Smart Lead Scoring", "Real-time Insights"],
      icon: Brain,
      category: "AI & Machine Learning",
      rating: 4.9,
      reviewCount: 342,
      path: "/services/ai-powered-crm"
    },
    {
      id: "cybersecurity-platform",
      title: "Cybersecurity Platform",
      description: "Comprehensive threat detection and response system with AI-powered security intelligence",
      price: "$1,800/month",
      features: ["Threat Detection", "Incident Response", "Compliance Monitoring", "24/7 Protection"],
      icon: Shield,
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 189,
      path: "/services/cybersecurity-platform"
    },
    {
      id: "cloud-optimization",
      title: "Cloud Cost Optimization",
      description: "AI-driven cloud cost management that reduces spending by 30-50% automatically",
      price: "$350/month",
      features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management"],
      icon: Cpu,
      category: "Cloud Computing",
      rating: 4.7,
      reviewCount: 234,
      path: "/services/cloud-optimization"
    },
    {
      id: "ai-project-management",
      title: "AI Project Management",
      description: "Intelligent project management with risk prediction and automated resource allocation",
      price: "$450/month",
      features: ["Risk Prediction", "Resource Optimization", "Task Automation", "Performance Analytics"],
      icon: Target,
      category: "AI & Machine Learning",
      rating: 4.9,
      reviewCount: 156,
      path: "/services/ai-powered-project-management"
    },
    {
      id: "smart-inventory",
      title: "Smart Inventory Management",
      description: "AI-driven demand forecasting and automated inventory optimization",
      price: "$320/month",
      features: ["Demand Forecasting", "Stock Optimization", "Automated Reordering", "Real-time Alerts"],
      icon: TrendingUp,
      category: "AI & Machine Learning",
      rating: 4.8,
      reviewCount: 203,
      path: "/services/smart-inventory-management"
    },
    {
      id: "quantum-encryption",
      title: "Quantum Encryption Platform",
      description: "Future-proof encryption using quantum-resistant algorithms for ultimate security",
      price: "$1,200/month",
      features: ["Quantum-Resistant", "Post-Quantum Crypto", "Real-time Encryption", "Compliance Ready"],
      icon: Shield,
      category: "Quantum Technology",
      rating: 4.9,
      reviewCount: 89,
      path: "/services/quantum-encryption-platform"
    }
  ], []);

  const stats = useMemo(() => [
    { label: "AI Services", value: "35+", icon: Brain, color: "text-cyan-400" },
    { label: "Happy Clients", value: "150+", icon: Users, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-green-400" },
    { label: "Support", value: "24/7", icon: Clock, color: "text-yellow-400" },
    { label: "Innovation", value: "100%", icon: Rocket, color: "text-pink-400" },
    { label: "Success Rate", value: "98%", icon: Star, color: "text-orange-400" }
  ], []);

  const features = useMemo(() => [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "Every solution is built with cutting-edge artificial intelligence, ensuring maximum efficiency and innovation."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance standards to protect your business and data."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to keep your systems running smoothly."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes and ROI for our clients."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep expertise in AI, cybersecurity, and enterprise IT."
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Solutions designed to scale and adapt as your business grows and technology evolves."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and international support."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment to get you up and running quickly."
    }
  ], []);

  const newInnovativeServices = useMemo(() => [
    {
      title: "AI-Powered Project Management",
      description: "Predict project risks, optimize resources, and automate task management",
      price: "From $450/month",
      category: "AI & Machine Learning",
      path: "/services/ai-powered-project-management"
    },
    {
      title: "Smart Inventory Management",
      description: "AI-driven demand forecasting and automated inventory optimization",
      price: "From $320/month",
      category: "AI & Machine Learning",
      path: "/services/smart-inventory-management"
    },
    {
      title: "Intelligent Customer Support",
      description: "AI chatbot with human fallback and smart ticket routing",
      price: "From $280/month",
      category: "AI & Machine Learning",
      path: "/services/intelligent-customer-support"
    },
    {
      title: "Predictive Maintenance Platform",
      description: "IoT-powered equipment monitoring and failure prediction",
      price: "From $650/month",
      category: "Internet of Things",
      path: "/services/predictive-maintenance-platform"
    },
    {
      title: "AI Financial Analytics",
      description: "Real-time insights and market trend prediction",
      price: "From $850/month",
      category: "AI & Machine Learning",
      path: "/services/ai-powered-financial-analytics"
    },
    {
      title: "Smart Energy Management",
      description: "AI-driven energy optimization and sustainability",
      price: "From $420/month",
      category: "Green Technology",
      path: "/services/smart-energy-management"
    },
    // New Innovative Services Added
    {
      title: "Blockchain Supply Chain Tracker",
      description: "End-to-end transparency with smart contracts and real-time verification",
      price: "From $780/month",
      category: "Blockchain & Web3",
      path: "/services/blockchain-supply-chain-tracker"
    },
    {
      title: "Quantum-Enhanced Cybersecurity",
      description: "Post-quantum cryptography and quantum-resistant encryption",
      price: "From $1,200/month",
      category: "Quantum Technology",
      path: "/services/quantum-enhanced-cybersecurity"
    },
    {
      title: "AI-Powered Legal Document Analyzer",
      description: "Contract analysis, risk assessment, and compliance monitoring",
      price: "From $650/month",
      category: "Legal Tech",
      path: "/services/ai-legal-document-analyzer"
    },
    {
      title: "Smart Healthcare Analytics Platform",
      description: "Patient data insights, predictive diagnostics, and treatment optimization",
      price: "From $950/month",
      category: "Healthcare Tech",
      path: "/services/smart-healthcare-analytics"
    },
    {
      title: "Autonomous Marketing Orchestrator",
      description: "AI-driven campaign optimization across all channels",
      price: "From $580/month",
      category: "Marketing Automation",
      path: "/services/autonomous-marketing-orchestrator"
    },
    {
      title: "Real-Time Fraud Detection System",
      description: "Machine learning-powered fraud prevention and detection",
      price: "From $720/month",
      category: "Financial Security",
      path: "/services/real-time-fraud-detection"
    },
    {
      title: "Smart Contract Management Platform",
      description: "Automated contract lifecycle management with AI insights",
      price: "From $420/month",
      category: "Business Process Automation",
      path: "/services/smart-contract-management"
    },
    {
      title: "AI-Powered HR Analytics Suite",
      description: "Employee performance insights, retention prediction, and recruitment optimization",
      price: "From $380/month",
      category: "Human Resources",
      path: "/services/ai-hr-analytics-suite"
    },
    {
      title: "Quantum Machine Learning Platform",
      description: "Quantum algorithms for complex optimization problems",
      price: "From $1,500/month",
      category: "Quantum Technology",
      path: "/services/quantum-machine-learning-platform"
    },
    {
      title: "Autonomous Data Pipeline Orchestrator",
      description: "Self-healing data workflows with intelligent error handling",
      price: "From $680/month",
      category: "Data Engineering",
      path: "/services/autonomous-data-pipeline-orchestrator"
    },
    {
      title: "Smart Compliance Monitoring System",
      description: "Real-time regulatory compliance tracking and automated reporting",
      price: "From $550/month",
      category: "Compliance & Governance",
      path: "/services/smart-compliance-monitoring"
    },
    {
      title: "AI-Powered Content Generation Engine",
      description: "Automated content creation with brand voice consistency",
      price: "From $320/month",
      category: "Content Marketing",
      path: "/services/ai-content-generation-engine"
    },
    {
      title: "Quantum Financial Modeling Platform",
      description: "Advanced financial simulations using quantum computing",
      price: "From $1,800/month",
      category: "Quantum Technology",
      path: "/services/quantum-financial-modeling"
    },
    {
      title: "Autonomous Customer Success Platform",
      description: "Proactive customer health monitoring and retention optimization",
      price: "From $450/month",
      category: "Customer Success",
      path: "/services/autonomous-customer-success-platform"
    },
    {
      title: "Smart Vendor Management System",
      description: "AI-powered vendor evaluation, risk assessment, and performance tracking",
      price: "From $380/month",
      category: "Procurement",
      path: "/services/smart-vendor-management-system"
    },
    {
      title: "Quantum-Secure Communication Platform",
      description: "Unhackable communication using quantum key distribution",
      price: "From $1,100/month",
      category: "Quantum Technology",
      path: "/services/quantum-secure-communication"
    },
    {
      title: "AI-Powered Sales Intelligence Platform",
      description: "Lead scoring, opportunity prediction, and sales forecasting",
      price: "From $520/month",
      category: "Sales Intelligence",
      path: "/services/ai-sales-intelligence-platform"
    },
    {
      title: "Autonomous IT Operations Platform",
      description: "Self-healing infrastructure with predictive maintenance",
      price: "From $750/month",
      category: "IT Operations",
      path: "/services/autonomous-it-operations-platform"
    },
    {
      title: "Smart Environmental Monitoring System",
      description: "IoT sensors with AI analysis for sustainability tracking",
      price: "From $480/month",
      category: "Environmental Tech",
      path: "/services/smart-environmental-monitoring"
    },
    {
      title: "Quantum Optimization Engine",
      description: "Solving complex optimization problems with quantum algorithms",
      price: "From $1,300/month",
      category: "Quantum Technology",
      path: "/services/quantum-optimization-engine"
    },
    {
      title: "AI-Powered Risk Management Platform",
      description: "Comprehensive risk assessment and mitigation strategies",
      price: "From $680/month",
      category: "Risk Management",
      path: "/services/ai-risk-management-platform"
    },
    {
      title: "Autonomous Quality Assurance System",
      description: "AI-driven testing and quality monitoring with self-improvement",
      price: "From $420/month",
      category: "Quality Assurance",
      path: "/services/autonomous-quality-assurance"
    },
    {
      title: "Smart Learning Management Platform",
      description: "Personalized learning paths with AI-driven content recommendations",
      price: "From $350/month",
      category: "EdTech",
      path: "/services/smart-learning-management-platform"
    },
    {
      title: "Quantum Cryptography Services",
      description: "Quantum-safe encryption and secure key distribution",
      price: "From $1,400/month",
      category: "Quantum Technology",
      path: "/services/quantum-cryptography-services"
    },
    {
      title: "AI-Powered Market Research Platform",
      description: "Real-time market analysis and competitive intelligence",
      price: "From $580/month",
      category: "Market Research",
      path: "/services/ai-market-research-platform"
    },
    {
      title: "Autonomous Business Intelligence Platform",
      description: "Self-service analytics with natural language queries",
      price: "From $650/month",
      category: "Business Intelligence",
      path: "/services/autonomous-business-intelligence"
    },
    {
      title: "Smart Regulatory Compliance Engine",
      description: "Automated compliance monitoring across multiple jurisdictions",
      price: "From $720/month",
      category: "Regulatory Compliance",
      path: "/services/smart-regulatory-compliance-engine"
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Advanced AI training on quantum hardware for complex problems",
      price: "From $2,000/month",
      category: "Quantum Technology",
      path: "/services/quantum-neural-network-platform"
    },
    {
      title: "AI-Powered Customer Experience Platform",
      description: "Omnichannel customer journey optimization and personalization",
      price: "From $580/month",
      category: "Customer Experience",
      path: "/services/ai-customer-experience-platform"
    },
    {
      title: "Autonomous Data Governance Platform",
      description: "Self-managing data quality, privacy, and compliance",
      price: "From $550/month",
      category: "Data Governance",
      path: "/services/autonomous-data-governance"
    },
    {
      title: "Smart Contract Lifecycle Manager",
      description: "End-to-end contract management with AI-powered insights",
      price: "From $420/month",
      category: "Contract Management",
      path: "/services/smart-contract-lifecycle-manager"
    },
    {
      title: "Quantum Machine Learning as a Service",
      description: "Access to quantum computing power for ML applications",
      price: "From $1,600/month",
      category: "Quantum Technology",
      path: "/services/quantum-ml-as-a-service"
    },
    {
      title: "AI-Powered Innovation Management Platform",
      description: "Ideation, evaluation, and implementation of innovative solutions",
      price: "From $480/month",
      category: "Innovation Management",
      path: "/services/ai-innovation-management-platform"
    },
    {
      title: "Autonomous Supply Chain Optimizer",
      description: "Self-optimizing supply chains with real-time adjustments",
      price: "From $680/month",
      category: "Supply Chain",
      path: "/services/autonomous-supply-chain-optimizer"
    },
    {
      title: "Smart Energy Trading Platform",
      description: "AI-driven energy market analysis and automated trading",
      price: "From $850/month",
      category: "Energy Tech",
      path: "/services/smart-energy-trading-platform"
    },
    {
      title: "Quantum Financial Risk Assessment",
      description: "Advanced risk modeling using quantum computing algorithms",
      price: "From $1,700/month",
      category: "Quantum Technology",
      path: "/services/quantum-financial-risk-assessment"
    },
    {
      title: "AI-Powered Talent Acquisition Platform",
      description: "Intelligent candidate matching and recruitment automation",
      price: "From $450/month",
      category: "Talent Acquisition",
      path: "/services/ai-talent-acquisition-platform"
    },
    {
      title: "Autonomous Customer Feedback Analyzer",
      description: "Real-time sentiment analysis and actionable insights",
      price: "From $320/month",
      category: "Customer Analytics",
      path: "/services/autonomous-customer-feedback-analyzer"
    },
    {
      title: "Smart Regulatory Reporting System",
      description: "Automated compliance reporting with real-time updates",
      price: "From $580/month",
      category: "Regulatory Reporting",
      path: "/services/smart-regulatory-reporting"
    },
    {
      title: "Quantum-Secure Identity Management",
      description: "Unhackable identity verification using quantum cryptography",
      price: "From $1,200/month",
      category: "Quantum Technology",
      path: "/services/quantum-secure-identity-management"
    },
    {
      title: "AI-Powered Predictive Analytics Engine",
      description: "Advanced forecasting models for business decision making",
      price: "From $750/month",
      category: "Predictive Analytics",
      path: "/services/ai-predictive-analytics-engine"
    },
    {
      title: "Autonomous Data Quality Monitor",
      description: "Self-healing data quality with continuous improvement",
      price: "From $380/month",
      category: "Data Quality",
      path: "/services/autonomous-data-quality-monitor"
    },
    {
      title: "Smart Compliance Automation Platform",
      description: "End-to-end compliance workflow automation",
      price: "From $650/month",
      category: "Compliance Automation",
      path: "/services/smart-compliance-automation"
    },
    {
      title: "Quantum Optimization as a Service",
      description: "Access to quantum optimization algorithms for complex problems",
      price: "From $1,500/month",
      category: "Quantum Technology",
      path: "/services/quantum-optimization-as-a-service"
    },
    {
      title: "AI-Powered Business Process Automation",
      description: "Intelligent workflow automation with process optimization",
      price: "From $520/month",
      category: "Process Automation",
      path: "/services/ai-business-process-automation"
    },
    {
      title: "Autonomous Data Backup and Recovery",
      description: "Self-managing backup systems with intelligent recovery",
      price: "From $280/month",
      category: "Data Protection",
      path: "/services/autonomous-data-backup-recovery"
    },
    {
      title: "Smart Vendor Risk Assessment Platform",
      description: "AI-driven vendor evaluation and continuous monitoring",
      price: "From $450/month",
      category: "Vendor Risk Management",
      path: "/services/smart-vendor-risk-assessment"
    },
    {
      title: "Quantum Machine Learning Optimization",
      description: "Optimizing ML models using quantum computing techniques",
      price: "From $1,800/month",
      category: "Quantum Technology",
      path: "/services/quantum-ml-optimization"
    },
    {
      title: "AI-Powered Competitive Intelligence Platform",
      description: "Real-time competitor analysis and market positioning",
      price: "From $680/month",
      category: "Competitive Intelligence",
      path: "/services/ai-competitive-intelligence"
    },
    {
      title: "Autonomous Customer Journey Optimizer",
      description: "Self-optimizing customer experiences across all touchpoints",
      price: "From $580/month",
      category: "Customer Journey Optimization",
      path: "/services/autonomous-customer-journey-optimizer"
    },
    {
      title: "Smart Regulatory Change Management",
      description: "Automated regulatory updates and compliance tracking",
      price: "From $520/month",
      category: "Regulatory Change Management",
      path: "/services/smart-regulatory-change-management"
    },
    {
      title: "Quantum Financial Modeling as a Service",
      description: "Advanced financial simulations powered by quantum computing",
      price: "From $2,200/month",
      category: "Quantum Technology",
      path: "/services/quantum-financial-modeling-as-a-service"
    },
    {
      title: "AI-Powered Knowledge Management Platform",
      description: "Intelligent knowledge discovery and sharing systems",
      price: "From $420/month",
      category: "Knowledge Management",
      path: "/services/ai-knowledge-management-platform"
    },
    {
      title: "Autonomous Data Governance Engine",
      description: "Self-managing data policies and compliance enforcement",
      price: "From $650/month",
      category: "Data Governance",
      path: "/services/autonomous-data-governance-engine"
    },
    {
      title: "Smart Contract Performance Monitor",
      description: "Real-time contract performance tracking and optimization",
      price: "From $380/month",
      category: "Contract Performance",
      path: "/services/smart-contract-performance-monitor"
    },
    {
      title: "Quantum-Secure Communication as a Service",
      description: "Enterprise-grade quantum-secured communication platform",
      price: "From $1,300/month",
      category: "Quantum Technology",
      path: "/services/quantum-secure-communication-as-a-service"
    },
    {
      title: "AI-Powered Innovation Pipeline Manager",
      description: "End-to-end innovation management from ideation to implementation",
      price: "From $580/month",
      category: "Innovation Pipeline Management",
      path: "/services/ai-innovation-pipeline-manager"
    },
    {
      title: "Autonomous Data Quality Assurance",
      description: "Self-healing data quality with continuous monitoring",
      price: "From $420/month",
      category: "Data Quality Assurance",
      path: "/services/autonomous-data-quality-assurance"
    },
    {
      title: "Smart Compliance Workflow Automation",
      description: "Automated compliance processes with intelligent routing",
      price: "From $550/month",
      category: "Compliance Workflow Automation",
      path: "/services/smart-compliance-workflow-automation"
    },
    {
      title: "Quantum Neural Network as a Service",
      description: "Access to quantum neural networks for complex AI applications",
      price: "From $2,500/month",
      category: "Quantum Technology",
      path: "/services/quantum-neural-network-as-a-service"
    },
    {
      title: "AI-Powered Business Intelligence Suite",
      description: "Comprehensive BI platform with natural language analytics",
      price: "From $750/month",
      category: "Business Intelligence",
      path: "/services/ai-business-intelligence-suite"
    },
    {
      title: "Autonomous Customer Success Orchestrator",
      description: "Self-optimizing customer success strategies and automation",
      price: "From $520/month",
      category: "Customer Success Orchestration",
      path: "/services/autonomous-customer-success-orchestrator"
    },
    {
      title: "Smart Regulatory Intelligence Platform",
      description: "Real-time regulatory updates and impact analysis",
      price: "From $680/month",
      category: "Regulatory Intelligence",
      path: "/services/smart-regulatory-intelligence"
    },
    {
      title: "Quantum Financial Risk Management",
      description: "Advanced risk modeling using quantum computing algorithms",
      price: "From $1,900/month",
      category: "Quantum Technology",
      path: "/services/quantum-financial-risk-management"
    },
    {
      title: "AI-Powered Process Mining Platform",
      description: "Discover, analyze, and optimize business processes automatically",
      price: "From $580/month",
      category: "Process Mining",
      path: "/services/ai-process-mining-platform"
    },
    {
      title: "Autonomous Data Lineage Tracker",
      description: "Self-managing data lineage and impact analysis",
      price: "From $380/month",
      category: "Data Lineage",
      path: "/services/autonomous-data-lineage-tracker"
    },
    {
      title: "Smart Contract Compliance Monitor",
      description: "Automated contract compliance tracking and reporting",
      price: "From $450/month",
      category: "Contract Compliance",
      path: "/services/smart-contract-compliance-monitor"
    },
    {
      title: "Quantum Optimization Platform as a Service",
      description: "Enterprise access to quantum optimization algorithms",
      price: "From $1,800/month",
      category: "Quantum Technology",
      path: "/services/quantum-optimization-platform-as-a-service"
    },
    {
      title: "AI-Powered Change Management Platform",
      description: "Intelligent change impact analysis and stakeholder management",
      price: "From $520/month",
      category: "Change Management",
      path: "/services/ai-change-management-platform"
    },
    {
      title: "Autonomous Data Privacy Manager",
      description: "Self-managing data privacy and GDPR compliance",
      price: "From $480/month",
      category: "Data Privacy",
      path: "/services/autonomous-data-privacy-manager"
    },
    {
      title: "Smart Regulatory Compliance Dashboard",
      description: "Real-time compliance monitoring and reporting dashboard",
      price: "From $580/month",
      category: "Compliance Dashboard",
      path: "/services/smart-regulatory-compliance-dashboard"
    },
    {
      title: "Quantum Machine Learning Platform as a Service",
      description: "Enterprise access to quantum ML capabilities",
      price: "From $2,200/month",
      category: "Quantum Technology",
      path: "/services/quantum-ml-platform-as-a-service"
    },
    {
      title: "AI-Powered Strategic Planning Platform",
      description: "Intelligent strategic planning with scenario modeling",
      price: "From $680/month",
      category: "Strategic Planning",
      path: "/services/ai-strategic-planning-platform"
    },
    {
      title: "Autonomous Data Governance as a Service",
      description: "Fully managed data governance with continuous improvement",
      price: "From $750/month",
      category: "Data Governance as a Service",
      path: "/services/autonomous-data-governance-as-a-service"
    },
    {
      title: "Smart Contract Performance Analytics",
      description: "Advanced analytics for contract performance optimization",
      price: "From $420/month",
      category: "Contract Analytics",
      path: "/services/smart-contract-performance-analytics"
    },
    {
      title: "Quantum-Secure Identity as a Service",
      description: "Enterprise quantum-secured identity management platform",
      price: "From $1,400/month",
      category: "Quantum Technology",
      path: "/services/quantum-secure-identity-as-a-service"
    },
    {
      title: "AI-Powered Innovation Analytics Platform",
      description: "Data-driven innovation insights and performance tracking",
      price: "From $580/month",
      category: "Innovation Analytics",
      path: "/services/ai-innovation-analytics-platform"
    },
    {
      title: "Autonomous Data Quality Management",
      description: "Self-managing data quality with intelligent monitoring",
      price: "From $450/month",
      category: "Data Quality Management",
      path: "/services/autonomous-data-quality-management"
    },
    {
      title: "Smart Compliance Automation as a Service",
      description: "Fully managed compliance automation platform",
      price: "From $750/month",
      category: "Compliance Automation as a Service",
      path: "/services/smart-compliance-automation-as-a-service"
    },
    {
      title: "Quantum Financial Modeling Platform as a Service",
      description: "Enterprise access to quantum financial modeling capabilities",
      price: "From $2,500/month",
      category: "Quantum Technology",
      path: "/services/quantum-financial-modeling-platform-as-a-service"
    }
  ], []);

  // Optimized slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Pause auto-play on user interaction
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        pauseAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        pauseAutoPlay();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, pauseAutoPlay]);

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 quantum-particles"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto animate-pulse">
                <Brain className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            </div>
            
            <h1 className="futuristic-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Zion Tech Group
            </h1>
            <p className="futuristic-subheading text-xl md:text-2xl lg:text-3xl mb-8 font-medium">
              AI-Powered Technology Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 
              We deliver innovative solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="futuristic-btn text-lg px-8 py-4 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 text-lg font-medium text-cyan-400 border-2 border-cyan-400/30 hover:border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="futuristic-heading text-4xl md:text-5xl font-bold mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that transform businesses and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="futuristic-heading text-4xl md:text-5xl font-bold mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular AI-powered solutions that are transforming 
              businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="futuristic-btn text-lg px-8 py-4 inline-flex items-center"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="futuristic-heading text-4xl md:text-5xl font-bold mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our unique approach combines advanced technology with human expertise 
              to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="service-card text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Innovative Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="futuristic-heading text-4xl md:text-5xl font-bold mb-6">
              Innovative Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge micro SAAS services designed to address 
              specific business challenges with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newInnovativeServices.slice(0, 12).map((service, index) => (
              <div
                key={service.title}
                className="service-card group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.location.href = service.path}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.price.split(' ')[1]}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Starting at</span>
                  <div className="flex items-center space-x-1 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/innovative-micro-saas-services"
              className="futuristic-btn text-lg px-8 py-4 inline-flex items-center"
            >
              <span>View All Innovative Services</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="service-card p-12">
            <h2 className="futuristic-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions 
              to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="futuristic-btn text-lg px-8 py-4"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 text-lg font-medium text-cyan-400 border-2 border-cyan-400/30 hover:border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
