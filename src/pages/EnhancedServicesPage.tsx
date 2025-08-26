import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Cloud, 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Zap,
  Lock,
  Users,
  Code,
  Palette,
  Camera,
  FileText,
  Calculator,
  Heart,
  ShoppingCart,
  Package,
  Target,
  TrendingUp,
  Server,
  Network,
  Cpu,
  GraduationCap,
  Video,
  Home,
  Mic,
  Link as LinkIcon
} from 'lucide-react';
import { SEO } from "@/components/SEO";

// Enhanced service listings with comprehensive micro SAAS services
const ENHANCED_SERVICE_LISTINGS = [
  // AI & Machine Learning Services
  {
    id: "ai-content-generation",
    title: "AI Content Generator Pro",
    description: "Generate high-quality content, code, and creative assets with our advanced AI models. Perfect for marketers, developers, and content creators.",
    category: "AI & ML",
    price: 29,
    currency: "$",
    period: "/month",
    tags: ["AI Content", "Text Generation", "Code Generation", "Creative Writing"],
    features: ["50+ content templates", "Multi-language support", "SEO optimization", "Plagiarism-free content"],
    author: "Zion AI Labs",
    rating: 4.9,
    reviewCount: 156,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-content-generator"
  },
  {
    id: "ai-media-editing",
    title: "AI Image & Video Editor",
    description: "Professional-grade AI-powered image and video editing tools for creators and businesses. Remove backgrounds, enhance quality, and generate variations.",
    category: "AI & ML",
    price: 19,
    currency: "$",
    period: "/month",
    tags: ["Image Editing", "Video Editing", "AI Enhancement", "Background Removal"],
    features: ["One-click background removal", "AI upscaling", "Style transfer", "Batch processing"],
    author: "Zion Media Studio",
    rating: 4.8,
    reviewCount: 89,
    icon: Camera,
    link: "https://ziontechgroup.com/ai-media-editor"
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant",
    description: "Intelligent code completion, debugging, and optimization powered by advanced language models. Support for 50+ programming languages with IDE integrations.",
    category: "AI & ML",
    price: 39,
    currency: "$",
    period: "/month",
    tags: ["Code Completion", "Debugging", "Code Review", "IDE Integration"],
    features: ["50+ language support", "Real-time suggestions", "Code explanation", "GitHub integration"],
    author: "Zion Dev Tools",
    rating: 4.9,
    reviewCount: 203,
    icon: Code,
    link: "https://ziontechgroup.com/ai-code-assistant"
  },
  {
    id: "ai-analytics",
    title: "AI Data Analytics Platform",
    description: "Transform raw data into actionable insights with our AI-powered analytics suite. Advanced data visualization, predictive analytics, and automated reporting.",
    category: "AI & ML",
    price: 199,
    currency: "$",
    period: "/month",
    tags: ["Data Analytics", "Predictive Analytics", "Data Visualization", "Business Intelligence"],
    features: ["Real-time dashboards", "Predictive modeling", "Custom reports", "API integrations"],
    author: "Zion Analytics",
    rating: 4.8,
    reviewCount: 67,
    icon: BarChart3,
    link: "https://ziontechgroup.com/ai-analytics"
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Builder",
    description: "Create intelligent chatbots for customer service, sales, and support. Multi-channel deployment with natural language processing.",
    category: "AI & ML",
    price: 49,
    currency: "$",
    period: "/month",
    tags: ["Chatbot", "Customer Service", "NLP", "Multi-channel"],
    features: ["No-code builder", "Multi-language support", "Analytics dashboard", "CRM integration"],
    author: "Zion Conversational AI",
    rating: 4.7,
    reviewCount: 134,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-chatbot"
  },
  {
    id: "ai-voice-assistant",
    title: "AI Voice Assistant",
    description: "Build custom voice assistants for your business. Voice recognition, natural language processing, and multi-platform deployment.",
    category: "AI & ML",
    price: 79,
    currency: "$",
    period: "/month",
    tags: ["Voice Recognition", "NLP", "Voice Commands", "Multi-platform"],
    features: ["Custom wake words", "Multi-language support", "Cloud deployment", "Analytics"],
    author: "Zion Voice Tech",
    rating: 4.6,
    reviewCount: 98,
    icon: Mic,
    link: "https://ziontechgroup.com/ai-voice-assistant"
  },

  // Cybersecurity Services
  {
    id: "ai-threat-detection",
    title: "AI Threat Detection",
    description: "Real-time cybersecurity threat detection and response using advanced AI algorithms. 24/7 monitoring with instant alerts and automated response.",
    category: "Cybersecurity",
    price: 99,
    currency: "$",
    period: "/month",
    tags: ["Threat Detection", "AI Security", "24/7 Monitoring", "Automated Response"],
    features: ["Real-time monitoring", "AI-powered analysis", "Instant alerts", "Automated response"],
    author: "Zion Security",
    rating: 4.9,
    reviewCount: 134,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-threat-detection"
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Suite",
    description: "Comprehensive zero-trust security implementation for modern enterprise environments. Identity verification, network segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    price: 499,
    currency: "$",
    period: "/month",
    tags: ["Zero Trust", "Identity Verification", "Network Security", "Enterprise Security"],
    features: ["Identity verification", "Network segmentation", "Continuous monitoring", "Compliance reporting"],
    author: "Zion Enterprise Security",
    rating: 4.7,
    reviewCount: 78,
    icon: Lock,
    link: "https://ziontechgroup.com/zero-trust-security"
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing as a Service",
    description: "Regular security assessments and vulnerability scanning for continuous protection. Monthly security assessments with detailed reports and remediation guidance.",
    category: "Cybersecurity",
    price: 299,
    currency: "$",
    period: "/month",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Security Compliance", "Monthly Reports"],
    features: ["Monthly assessments", "Detailed reports", "Remediation guidance", "Compliance support"],
    author: "Zion Security Testing",
    rating: 4.8,
    reviewCount: 92,
    icon: Target,
    link: "https://ziontechgroup.com/penetration-testing"
  },
  {
    id: "security-awareness-training",
    title: "Security Awareness Training",
    description: "Comprehensive cybersecurity training for employees. Interactive modules, phishing simulations, and compliance tracking.",
    category: "Cybersecurity",
    price: 15,
    currency: "$",
    period: "/user/month",
    tags: ["Security Training", "Phishing Simulation", "Compliance", "Employee Education"],
    features: ["Interactive modules", "Phishing simulations", "Progress tracking", "Compliance reports"],
    author: "Zion Security Training",
    rating: 4.6,
    reviewCount: 156,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/security-training"
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management",
    description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments. Cost optimization, security compliance, and unified monitoring.",
    category: "Cloud & Infrastructure",
    price: 79,
    currency: "$",
    period: "/month",
    tags: ["Multi-Cloud", "Cost Optimization", "Security Compliance", "Unified Monitoring"],
    features: ["Multi-cloud dashboard", "Cost optimization", "Security compliance", "Unified monitoring"],
    author: "Zion Cloud Solutions",
    rating: 4.6,
    reviewCount: 145,
    icon: Cloud,
    link: "https://ziontechgroup.com/multi-cloud-management"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation. Automated testing, deployment, and infrastructure management.",
    category: "Cloud & Infrastructure",
    price: 49,
    currency: "$",
    period: "/month",
    tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation"],
    author: "Zion DevOps",
    rating: 4.7,
    reviewCount: 167,
    icon: Zap,
    link: "https://ziontechgroup.com/devops-automation"
  },
  {
    id: "edge-computing",
    title: "Edge Computing Solutions",
    description: "Deploy and manage applications at the edge for improved performance and reduced latency. Global edge network with real-time processing and IoT integration.",
    category: "Cloud & Infrastructure",
    price: 149,
    currency: "$",
    period: "/month",
    tags: ["Edge Computing", "IoT Integration", "Real-time Processing", "Global Network"],
    features: ["Global edge network", "IoT integration", "Real-time processing", "Low latency"],
    author: "Zion Edge Computing",
    rating: 4.5,
    reviewCount: 73,
    icon: Network,
    link: "https://ziontechgroup.com/edge-computing"
  },
  {
    id: "serverless-platform",
    title: "Serverless Platform",
    description: "Build and deploy serverless applications with automatic scaling and pay-per-use pricing. Support for multiple programming languages and frameworks.",
    category: "Cloud & Infrastructure",
    price: 29,
    currency: "$",
    period: "/month",
    tags: ["Serverless", "Auto-scaling", "Pay-per-use", "Multi-language"],
    features: ["Auto-scaling", "Pay-per-use", "Multi-language support", "API gateway"],
    author: "Zion Serverless",
    rating: 4.8,
    reviewCount: 189,
    icon: Server,
    link: "https://ziontechgroup.com/serverless-platform"
  },

  // Business Intelligence Services
  {
    id: "ai-crm",
    title: "AI-Powered CRM",
    description: "Intelligent customer relationship management with predictive analytics and automation. Lead scoring, sales forecasting, and automated follow-ups.",
    category: "Business Intelligence",
    price: 39,
    currency: "$",
    period: "/month",
    tags: ["CRM", "Lead Scoring", "Sales Forecasting", "Automation"],
    features: ["AI lead scoring", "Sales forecasting", "Automated follow-ups", "Analytics dashboard"],
    author: "Zion Business Solutions",
    rating: 4.6,
    reviewCount: 189,
    icon: Users,
    link: "https://ziontechgroup.com/ai-crm"
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    description: "Automate repetitive tasks and workflows to improve efficiency and reduce costs. Integration with 100+ business applications.",
    category: "Business Intelligence",
    price: 29,
    currency: "$",
    period: "/month",
    tags: ["Process Automation", "Workflow Automation", "Business Integration", "Efficiency"],
    features: ["Workflow automation", "100+ integrations", "Custom workflows", "Analytics"],
    author: "Zion Automation",
    rating: 4.5,
    reviewCount: 156,
    icon: Zap,
    link: "https://ziontechgroup.com/business-automation"
  },
  {
    id: "ai-market-research",
    title: "AI Market Research",
    description: "Comprehensive market analysis and competitive intelligence powered by AI. Real-time monitoring, competitor analysis, and trend prediction.",
    category: "Business Intelligence",
    price: 199,
    currency: "$",
    period: "/month",
    tags: ["Market Research", "Competitive Intelligence", "Trend Analysis", "Real-time Monitoring"],
    features: ["Real-time monitoring", "Competitor analysis", "Trend prediction", "Custom reports"],
    author: "Zion Market Intelligence",
    rating: 4.8,
    reviewCount: 98,
    icon: TrendingUp,
    link: "https://ziontechgroup.com/ai-market-research"
  },
  {
    id: "financial-analytics",
    title: "Financial Analytics Platform",
    description: "Advanced financial analysis and reporting with AI-powered insights. Budget tracking, expense analysis, and financial forecasting.",
    category: "Business Intelligence",
    price: 79,
    currency: "$",
    period: "/month",
    tags: ["Financial Analysis", "Budget Tracking", "Expense Analysis", "Forecasting"],
    features: ["Budget tracking", "Expense analysis", "Financial forecasting", "Custom reports"],
    author: "Zion Financial Analytics",
    rating: 4.7,
    reviewCount: 134,
    icon: Calculator,
    link: "https://ziontechgroup.com/financial-analytics"
  },

  // Communication & Collaboration Services
  {
    id: "ai-meeting-assistant",
    title: "AI Meeting Assistant",
    description: "Intelligent meeting transcription, summarization, and action item tracking. Real-time transcription with smart summaries and automated follow-ups.",
    category: "Communication",
    price: 19,
    currency: "$",
    period: "/month",
    tags: ["Meeting Transcription", "AI Summarization", "Action Tracking", "Productivity"],
    features: ["Real-time transcription", "AI summarization", "Action tracking", "Meeting analytics"],
    author: "Zion Communication",
    rating: 4.9,
    reviewCount: 234,
    icon: MessageSquare,
    link: "https://ziontechgroup.com/ai-meeting-assistant"
  },
  {
    id: "virtual-events",
    title: "Virtual Event Platform",
    description: "Host engaging virtual events, webinars, and conferences with AI-powered features. Interactive features, analytics, and engagement tools.",
    category: "Communication",
    price: 99,
    currency: "$",
    period: "/month",
    tags: ["Virtual Events", "Webinars", "AI Engagement", "Event Analytics"],
    features: ["Virtual events", "Webinar hosting", "AI engagement", "Event analytics"],
    author: "Zion Events",
    rating: 4.7,
    reviewCount: 112,
    icon: Video,
    link: "https://ziontechgroup.com/virtual-events"
  },
  {
    id: "ai-translation",
    title: "AI Translation Service",
    description: "Real-time translation and localization for global communication and content. Support for 100+ languages with cultural adaptation.",
    category: "Communication",
    price: 29,
    currency: "$",
    period: "/month",
    tags: ["Translation", "Localization", "100+ Languages", "Cultural Adaptation"],
    features: ["100+ languages", "Real-time translation", "Cultural adaptation", "API access"],
    author: "Zion Global",
    rating: 4.8,
    reviewCount: 178,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-translation"
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration Platform",
    description: "Comprehensive team collaboration with project management, file sharing, and communication tools. Real-time collaboration and progress tracking.",
    category: "Communication",
    price: 15,
    currency: "$",
    period: "/user/month",
    tags: ["Team Collaboration", "Project Management", "File Sharing", "Communication"],
    features: ["Project management", "File sharing", "Team chat", "Progress tracking"],
    author: "Zion Collaboration",
    rating: 4.6,
    reviewCount: 267,
    icon: Users,
    link: "https://ziontechgroup.com/team-collaboration"
  },

  // Specialized Tools
  {
    id: "ai-legal-review",
    title: "AI Legal Document Review",
    description: "Automated legal document analysis, contract review, and compliance checking. Contract analysis, risk assessment, and compliance monitoring.",
    category: "Specialized Tools",
    price: 149,
    currency: "$",
    period: "/month",
    tags: ["Legal Review", "Contract Analysis", "Risk Assessment", "Compliance"],
    features: ["Contract analysis", "Risk assessment", "Compliance monitoring", "Legal templates"],
    author: "Zion Legal Tech",
    rating: 4.6,
    reviewCount: 87,
    icon: FileText,
    link: "https://ziontechgroup.com/ai-legal-review"
  },
  {
    id: "ai-financial-advisor",
    title: "AI Financial Advisor",
    description: "Personalized financial planning and investment recommendations powered by AI. Portfolio optimization, risk assessment, and financial goal planning.",
    category: "Specialized Tools",
    price: 39,
    currency: "$",
    period: "/month",
    tags: ["Financial Planning", "Investment Advice", "Portfolio Optimization", "Risk Assessment"],
    features: ["Financial planning", "Investment advice", "Portfolio optimization", "Risk assessment"],
    author: "Zion Financial",
    rating: 4.7,
    reviewCount: 143,
    icon: Calculator,
    link: "https://ziontechgroup.com/ai-financial-advisor"
  },
  {
    id: "ai-healthcare",
    title: "AI Healthcare Assistant",
    description: "Intelligent health monitoring, symptom analysis, and wellness recommendations. Health tracking, symptom analysis, and wellness coaching. HIPAA compliant.",
    category: "Specialized Tools",
    price: 29,
    currency: "$",
    period: "/month",
    tags: ["Health Monitoring", "Symptom Analysis", "Wellness Coaching", "HIPAA Compliant"],
    features: ["Health monitoring", "Symptom analysis", "Wellness coaching", "HIPAA compliance"],
    author: "Zion Health",
    rating: 4.8,
    reviewCount: 267,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-healthcare"
  },
  {
    id: "ai-education-platform",
    title: "AI Education Platform",
    description: "Personalized learning experience with AI-powered content adaptation and progress tracking. Adaptive learning paths and intelligent tutoring.",
    category: "Specialized Tools",
    price: 49,
    currency: "$",
    period: "/month",
    tags: ["Education", "Adaptive Learning", "Progress Tracking", "Intelligent Tutoring"],
    features: ["Adaptive learning", "Progress tracking", "Intelligent tutoring", "Content personalization"],
    author: "Zion Education",
    rating: 4.7,
    reviewCount: 189,
    icon: GraduationCap,
    link: "https://ziontechgroup.com/ai-education"
  },

  // E-commerce & Retail Services
  {
    id: "ai-ecommerce-platform",
    title: "AI E-commerce Platform",
    description: "Intelligent e-commerce platform with AI-powered recommendations, inventory management, and customer insights. Personalized shopping experience.",
    category: "E-commerce",
    price: 99,
    currency: "$",
    period: "/month",
    tags: ["E-commerce", "AI Recommendations", "Inventory Management", "Customer Insights"],
    features: ["AI recommendations", "Inventory management", "Customer insights", "Multi-channel sales"],
    author: "Zion E-commerce",
    rating: 4.8,
    reviewCount: 156,
    icon: ShoppingCart,
    link: "https://ziontechgroup.com/ai-ecommerce"
  },
  {
    id: "inventory-optimization",
    title: "AI Inventory Optimization",
    description: "Optimize inventory levels with AI-powered demand forecasting and automated reordering. Reduce costs and improve customer satisfaction.",
    category: "E-commerce",
    price: 79,
    currency: "$",
    period: "/month",
    tags: ["Inventory Optimization", "Demand Forecasting", "Automated Reordering", "Cost Reduction"],
    features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Real-time analytics"],
    author: "Zion Inventory",
    rating: 4.6,
    reviewCount: 98,
    icon: Package,
    link: "https://ziontechgroup.com/inventory-optimization"
  },

  // IoT & Smart Home Services
  {
    id: "iot-platform",
    title: "IoT Management Platform",
    description: "Comprehensive IoT device management and monitoring platform. Device connectivity, data collection, and intelligent automation.",
    category: "IoT & Smart Home",
    price: 69,
    currency: "$",
    period: "/month",
    tags: ["IoT", "Device Management", "Data Collection", "Automation"],
    features: ["Device management", "Data collection", "Intelligent automation", "Real-time monitoring"],
    author: "Zion IoT",
    rating: 4.5,
    reviewCount: 134,
    icon: Cpu,
    link: "https://ziontechgroup.com/iot-platform"
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation",
    description: "Intelligent home automation with AI-powered scheduling and energy optimization. Smart device integration and energy management.",
    category: "IoT & Smart Home",
    price: 39,
    currency: "$",
    period: "/month",
    tags: ["Smart Home", "Automation", "Energy Optimization", "Device Integration"],
    features: ["Smart automation", "Energy optimization", "Device integration", "Mobile app control"],
    author: "Zion Smart Home",
    rating: 4.7,
    reviewCount: 189,
    icon: Home,
    link: "https://ziontechgroup.com/smart-home"
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-platform",
    title: "Blockchain Development Platform",
    description: "Build and deploy blockchain applications with smart contracts and decentralized solutions. Multi-blockchain support and developer tools.",
    category: "Blockchain & Web3",
    price: 199,
    currency: "$",
    period: "/month",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Developer Tools"],
    features: ["Smart contracts", "Multi-blockchain", "Developer tools", "DeFi solutions"],
    author: "Zion Blockchain",
    rating: 4.8,
    reviewCount: 89,
    icon: LinkIcon,
    link: "https://ziontechgroup.com/blockchain-platform"
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Platform",
    description: "Create and manage NFT marketplaces with AI-powered curation and trading tools. Multi-blockchain support and creator tools.",
    category: "Blockchain & Web3",
    price: 149,
    currency: "$",
    period: "/month",
    tags: ["NFT", "Marketplace", "AI Curation", "Trading Tools"],
    features: ["AI curation", "Trading tools", "Multi-blockchain", "Creator tools"],
    author: "Zion NFT",
    rating: 4.6,
    reviewCount: 67,
    icon: Palette,
    link: "https://ziontechgroup.com/nft-marketplace"
  }
];

// Enhanced filter options
const SERVICE_FILTERS = [
  { label: 'All Services', value: 'all', icon: Globe },
  { label: 'AI & ML', value: 'ai-ml', icon: Brain },
  { label: 'Cybersecurity', value: 'cybersecurity', icon: Shield },
  { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure', icon: Cloud },
  { label: 'Business Intelligence', value: 'business-intelligence', icon: BarChart3 },
  { label: 'Communication', value: 'communication', icon: MessageSquare },
  { label: 'Specialized Tools', value: 'specialized-tools', icon: Zap },
  { label: 'E-commerce', value: 'e-commerce', icon: ShoppingCart },
  { label: 'IoT & Smart Home', value: 'iot-smart-home', icon: Cpu },
  { label: 'Blockchain & Web3', value: 'blockchain-web3', icon: Link }
];

export default function EnhancedServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const filteredServices = ENHANCED_SERVICE_LISTINGS.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Enhanced IT & AI Services - Zion Tech Group" 
        description="Comprehensive collection of cutting-edge micro SAAS services, IT solutions, and AI-powered tools for modern businesses." 
        keywords="micro SAAS, IT services, AI services, cybersecurity, cloud solutions, business intelligence, Zion Tech Group" 
        url="https://ziontechgroup.com/enhanced-services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/30 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-zion-purple/30 rounded-full animate-float"></div>
            <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-zion-cyan/20 rounded-full animate-bounce-slow"></div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Enhanced <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive collection of cutting-edge micro SAAS services, IT solutions, and AI-powered tools designed to transform your business.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {SERVICE_FILTERS.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedCategory(filter.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === filter.value
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                        : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Service Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price}
                      <span className="text-sm text-zion-slate-light font-normal">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-white">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-xs text-zion-slate-light mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-purple/10 text-zion-purple text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="text-xs text-zion-slate-light mb-4">
                    by {service.author}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center rounded-lg font-medium hover:scale-105 transition-transform"
                    >
                      Learn More
                    </a>
                    <Link to="/contact">
                      <Button className="px-4 py-2 bg-white/10 border border-zion-cyan/30 text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white"
              >
                View All Services
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team of experts is ready to help you implement the perfect solutions for your business needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Us
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}