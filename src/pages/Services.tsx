<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
<<<<<<< HEAD
  Clock,
  Atom,
  Car,
  Building2,
  PenTool,
  MessageSquare as MessageSquareIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_2025 } from '../data/comprehensiveServices2025';

type Service = {
  title: string;
  description: string;
  priceRange: string;
  learnMoreUrl?: string;
  ctaUrl?: string;
};

const featuredServices: Service[] = [
  {
    title: 'AI Development & MLOps',
    description: 'Custom LLMs, RAG, fine-tuning, and MLOps pipelines on AWS/Azure/GCP.',
    priceRange: '$8,000 - $120,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/machine-learning/',
  },
  {
    title: 'Cloud Migration & Modernization',
    description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
    priceRange: '$15,000 - $250,000',
    learnMoreUrl: 'https://aws.amazon.com/migration-hub/',
  },
  {
    title: 'Zero-Trust Cybersecurity',
    description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
    priceRange: '$5,000 - $90,000',
    learnMoreUrl: 'https://cloud.google.com/security-command-center',
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'ELT/ETL, data lakes/warehouses, BI dashboards, KPI design.',
    priceRange: '$7,500 - $140,000',
    learnMoreUrl: 'https://cloud.google.com/bigquery/docs',
  },
  {
    title: 'IoT & Edge Platforms',
    description: 'Secure device onboarding, telemetry pipelines, OTA, and twin modeling.',
    priceRange: '$12,000 - $180,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/iot-hub/',
  },
  {
    title: 'Quantum Readiness Advisory',
    description: 'PQ crypto readiness, QC PoCs, and quantum-inspired optimizations.',
    priceRange: '$6,000 - $60,000',
    learnMoreUrl: 'https://quantum.microsoft.com/azure-quantum',
  },
];

const microSaaS: Service[] = [
  {
    title: 'LeadGen AI Microsite',
    description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
    priceRange: '$99 - $499/mo',
    learnMoreUrl: 'https://vercel.com/ai',
  },
  {
    title: 'Agentic Support Bot',
    description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
    priceRange: '$149 - $999/mo',
    learnMoreUrl: 'https://platform.openai.com/',
  },
  {
    title: 'Automated Reporting Studio',
    description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
    priceRange: '$79 - $399/mo',
    learnMoreUrl: 'https://www.metabase.com/',
  },
  {
    title: 'Security Posture Scanner',
    description: 'Continuous cloud config checks and CIS benchmarks with alerts.',
    priceRange: '$199 - $1,499/mo',
    learnMoreUrl: 'https://www.aquasec.com/cloud-security/',
  },
  {
    title: 'Image/Doc OCR Pipeline',
    description: 'OCR + LLM extraction for invoices, IDs, and contracts at scale.',
    priceRange: '$0.50 - $2.00 / 1k tokens + hosting',
    learnMoreUrl: 'https://platform.openai.com/docs/guides/vision',
  },
  {
    title: 'Synthetic Data Generator',
    description: 'Privacy-safe tabular and text data generation to augment small datasets.',
    priceRange: '$299 - $1,999/mo',
    learnMoreUrl: 'https://huggingface.co/',
  },
];


const Services: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');
=======
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge
} from 'lucide-react';
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f

export default function Services() {
  const serviceCategories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'digital', name: 'Digital Transformation', icon: Zap },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'smart-city', name: 'Smart City', icon: Building2 },
    { id: 'autonomous', name: 'Autonomous Systems', icon: Car }
  ];

  const coreServices = [
=======
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
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
<<<<<<< HEAD
      category: 'security',
      icon: Shield,
      title: "AI Cybersecurity Elite",
      description: "Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response.",
      features: ["AI Threat Detection", "Zero-Day Protection", "Automated Response", "Compliance Ready"],
      pricing: "$3,500 - $18,000/month",
      color: "from-red-500 to-orange-500",
      featured: true,
      href: "/services/ai-cybersecurity-elite"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "Quantum Computing Elite",
      description: "Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving.",
      features: ["1000+ Qubit Access", "AI-Quantum Hybrid", "Quantum-Safe Crypto", "Global Network"],
      pricing: "$8,500 - $45,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/quantum-computing-elite"
    },
    {
      category: 'micro-saas',
      icon: Rocket,
      title: "Micro-SaaS Platform Elite",
      description: "Complete platform to launch and scale your micro-SaaS business with proven templates and automation.",
      features: ["Rapid Launch", "Built-in Payments", "AI Automation", "Multi-tenant Architecture"],
      pricing: "$2,500 - $12,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/micro-saas-platform-elite"
    },
    {
      category: 'ai',
      icon: Brain,
      title: "AI Development & Strategy",
      description: "Custom AI models, machine learning solutions, and strategic AI roadmapping for your business.",
      features: ["Custom AI Models", "ML Strategy", "Data Analytics", "AI Integration"],
      pricing: "$5,000 - $50,000",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: 'cloud',
=======
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
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

<<<<<<< HEAD
  // New innovative services
  const innovativeServices = [
    {
      category: 'autonomous',
      icon: Car,
      title: "AI Autonomous Vehicle Management Platform",
      description: "Revolutionary AI platform for managing autonomous vehicle fleets with unprecedented safety and efficiency.",
      features: ["AI-Powered Decision Making", "Military-Grade Security", "360° Environmental Awareness", "Global Fleet Management"],
      pricing: "$15,000 - $120,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/ai-autonomous-vehicle-management-platform"
    },
    {
      category: 'smart-city',
      icon: Building2,
      title: "AI Smart City Infrastructure Management",
      description: "Transform cities into smart, sustainable environments with AI-powered infrastructure management.",
      features: ["AI Traffic Management", "Smart Energy Grid", "Environmental Monitoring", "Public Safety"],
      pricing: "$25,000 - $200,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/ai-smart-city-infrastructure-management"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "AI Quantum Financial Trading Platform",
      description: "World's first AI-powered quantum financial platform for unprecedented trading performance.",
      features: ["1000+ Qubit Access", "AI Market Predictions", "Quantum-Safe Security", "Global Market Access"],
      pricing: "$5,000 - $100,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: "/services/ai-quantum-financial-trading-platform"
    },
    {
      category: 'ai',
      icon: PenTool,
      title: "AI Content Marketing Suite",
      description: "Generate 10x more content in 1/10th the time with AI-powered content creation and optimization.",
      features: ["AI Content Generation", "SEO Optimization", "Multi-Channel Support", "Performance Analytics"],
      pricing: "$99 - $999/month",
      color: "from-orange-500 to-red-500",
      featured: true,
      href: "/services/ai-content-marketing-suite"
    },
    {
      category: 'ai',
      icon: MessageSquareIcon,
      title: "AI Customer Support Automation",
      description: "24/7 AI-powered customer support that reduces costs by 70% while improving satisfaction by 40%.",
      features: ["AI Chatbots", "Multi-Channel Support", "Sentiment Analysis", "Knowledge Base Integration"],
      pricing: "$199 - $1,999/month",
      color: "from-indigo-500 to-purple-500",
      featured: true,
      href: "/services/ai-customer-support-automation"
    }
  ];

  const microSaasServices = [
=======
  const featuredServices = [
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
    {
      title: "AI Legal Document Automation Platform",
      description: "Intelligent legal document generation, review, and automation with AI-powered contract analysis",
      price: "From $299/month",
      features: ["AI Contract Analysis", "Compliance Checking", "Risk Assessment"],
      href: "/services/ai-legal-document-automation-platform",
      color: "from-blue-400 to-purple-500",
      popular: true
    },
    {
      title: "AI Healthcare Analytics Platform",
      description: "Advanced healthcare analytics using AI to predict patient outcomes and optimize treatment plans",
      price: "From $499/month",
      features: ["Predictive Analytics", "Treatment Optimization", "Population Health"],
      href: "/services/ai-healthcare-analytics-platform",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "AI Financial Risk Management Platform",
      description: "Intelligent financial risk assessment and management with AI-powered market analysis",
      price: "From $399/month",
      features: ["Risk Assessment", "Market Prediction", "Portfolio Optimization"],
      href: "/services/ai-financial-risk-management-platform",
      color: "from-yellow-400 to-orange-500"
    },
    {
<<<<<<< HEAD
      title: "SEO Content Planner",
      description: "Keyword clustering, brief generation, and on-page optimization recommendations.",
      features: [
        "Competitor gap analysis",
        "Automatic internal linking",
        "Publish to CMS",
        "Performance tracking"
      ],
      pricing: "$99 - $399/month",
      cta: "Pricing",
      ctaLink: "/pricing",
      icon: Search,
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices : coreServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services & Micro SaaS
          </h1>
          <p className="text-base md:text-xl text-slate-300 mb-6">
            Practical, production-grade solutions with transparent pricing and modern stacks.
          </p>
          
          {/* Company Contact Information */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Zion Tech Group - Your Technology Partner</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Contact Information</h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-green-400 mr-2" />
                    <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-400 mr-2" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-red-400 mr-2" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-purple-400 mr-2" />
                    <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">https://ziontechgroup.com</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Why Choose Zion Tech Group?</h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Cutting-edge AI & Quantum Technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Proven ROI & Fast Implementation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>24/7 Expert Support & Maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Enterprise-grade Security & Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-cyan-400 hover:text-cyan-300 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Reference
                    </a>
                  )}
                </div>
=======
      title: "AI Supply Chain Optimization Platform",
      description: "Intelligent supply chain optimization with AI demand forecasting and inventory management",
      price: "From $299/month",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management"],
      href: "/services/ai-supply-chain-optimization-platform",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "AI Carbon Footprint Management Platform",
      description: "Intelligent carbon footprint tracking and management for sustainability goals",
      price: "From $199/month",
      features: ["Emission Tracking", "Sustainability Reporting", "Goal Tracking"],
      href: "/services/ai-carbon-footprint-management-platform",
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "AI Mental Health Support Platform",
      description: "Intelligent mental health support with AI-powered therapy and mood tracking",
      price: "From $19/month",
      features: ["Mood Tracking", "Therapy Support", "Crisis Intervention"],
      href: "/services/ai-mental-health-support-platform",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI Smart Home Energy Management Platform",
      description: "Intelligent smart home energy management with AI optimization and automation",
      price: "From $9/month",
      features: ["Energy Optimization", "Smart Integration", "Predictive Analytics"],
      href: "/services/ai-smart-home-energy-management-platform",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "AI Autonomous Legal Research Platform",
      description: "Intelligent legal research platform with AI-powered case law analysis and precedent research",
      price: "From $380/month",
      features: ["Case Law Analysis", "Legal Research", "Citation Analysis"],
      href: "/services/ai-autonomous-legal-research-platform",
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "AI Educational Content Creation Platform",
      description: "Intelligent educational content creation with AI-powered learning materials and assessments",
      price: "From $250/month",
      features: ["Content Generation", "Learning Paths", "Interactive Assessments"],
      href: "/services/ai-educational-content-creation-platform",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "AI Real Estate Investment Analytics Platform",
      description: "Intelligent real estate investment analytics with AI market analysis and property valuation",
      price: "From $420/month",
      features: ["Market Analysis", "Property Valuation", "Investment Scoring"],
      href: "/services/ai-real-estate-investment-analytics-platform",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "AI Autonomous Logistics Platform",
      description: "Intelligent autonomous logistics with AI route optimization and fleet management",
      price: "From $580/month",
      features: ["Route Optimization", "Fleet Management", "Real-time Tracking"],
      href: "/services/ai-autonomous-logistics-platform",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO platform with AI content optimization and competitor analysis",
      price: "From $320/month",
      features: ["Content Optimization", "Competitor Analysis", "Keyword Research"],
      href: "/services/ai-powered-seo",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Quantum Edge Computing Solutions",
      description: "Revolutionary quantum edge computing combining quantum and edge computing for ultra-fast processing",
      price: "From $1,200/month",
      features: ["Quantum Processing", "Edge Computing", "Real-time Algorithms"],
      href: "/services/quantum-edge-computing-solutions",
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "AI Space Technology Platform",
      description: "Intelligent space technology platform with AI satellite data analysis and mission optimization",
      price: "From $850/month",
      features: ["Satellite Analysis", "Mission Optimization", "Autonomous Navigation"],
      href: "/services/ai-space-technology-platform",
      color: "from-gray-400 to-blue-500"
    }
  ];

  const aiServices = [
    {
      name: "AI-Cybersecurity-Platform",
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered security solutions for enterprise protection",
      icon: Shield,
      href: "/services/AI-Cybersecurity-Platform",
      features: ["Threat Detection", "Zero Trust", "Compliance", "Incident Response"]
    },
    {
      name: "AI-Healthcare-Platform",
      title: "AI Healthcare Platform",
      description: "Revolutionary healthcare solutions powered by artificial intelligence",
      icon: Activity,
      href: "/services/AI-Healthcare-Platform",
      features: ["Diagnostics", "Patient Care", "Drug Discovery", "Medical Imaging"]
    },
    {
      name: "AI-Quantum-Hybrid-Platform",
      title: "AI Quantum Hybrid Platform",
      description: "Next-generation computing combining AI and quantum technologies",
      icon: Atom,
      href: "/services/AI-Quantum-Hybrid-Platform",
      features: ["Quantum ML", "Hybrid Algorithms", "Quantum Security", "Optimization"]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and current technology landscape",
      icon: Search
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a customized solution architecture",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build and thoroughly test your solution",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance",
      icon: Rocket
    }
  ];

  const benefits = [
    "Increase efficiency by 60%",
    "Reduce operational costs by 40%",
    "Improve customer satisfaction by 50%",
    "Accelerate time-to-market by 70%",
    "Enhance security posture by 80%",
    "Boost team productivity by 45%"
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: "💳", description: "Risk management and fraud detection" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: "🛍️", description: "Customer analytics and inventory optimization" },
    { name: "Technology", icon: "💻", description: "Software development and cloud solutions" },
    { name: "Government", icon: "🏛️", description: "Digital transformation and security" }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI, cloud, cybersecurity, and digital transformation services designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Comprehensive Solutions
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to transform your business and drive innovation 
                across every aspect of your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Micro SaaS Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-purple-300 hover:text-purple-200 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-green-300 mb-6">Core Services</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {coreServices.map((service) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.pricing}</span>
                  {service.href && (
                    <a 
                      href={service.href}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Micro SaaS Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-orange-300 mb-6">Micro SaaS Solutions</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {microSaasServices.map((service) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.pricing}</span>
                  <a 
                    href={service.ctaLink}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Innovative AI Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-pink-300 mb-6">Innovative AI Services</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {innovativeAIServices.map((service) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.pricing}</span>
                  <a 
                    href={service.ctaLink}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comprehensive Services Showcase */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-6">Comprehensive Service Solutions</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {COMPREHENSIVE_SERVICES_2025.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-yellow-400/40"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400 font-semibold text-lg">
                      {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-slate-300 text-sm">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    <p>ROI: {service.roi}</p>
                    <p>Delivery: {service.estimatedDelivery}</p>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      Contact Sales
                    </a>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300">Have a project in mind? Get a tailored proposal.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="tel:+13024640950" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Email kleber@ziontechgroup.com</a>
              <a href="/request-quote" className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a Quote</a>
=======
        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your every need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Services</span>
                      <span className="text-blue-400 font-semibold">{category.count}</span>
                    </div>
                    <div className="space-y-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={category.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our most popular solutions that are transforming businesses across industries.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/innovative-services-showcase-2025"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Rocket className="w-5 h-5" />
                  View All Innovative Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/comprehensive-pricing-guide-2025"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  <DollarSign className="w-5 h-5" />
                  View Complete Pricing Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border hover:border-blue-400/50 transition-all duration-300 ${
                    service.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20' 
                      : 'border-white/10'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our specialized AI platforms designed for specific industry needs and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services 2026 Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                New in 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our newest AI-powered solutions designed to revolutionize industries and drive unprecedented business growth.
              </p>
            </motion.div>

            <div className="text-center mb-12">
              <Link
                to="/innovative-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore All New Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zinc-800/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Proven results and measurable impact across all our service offerings.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Specialized solutions tailored to the unique challenges of your industry.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-zinc-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Get complete pricing information for all our revolutionary services. 
                Real market prices, proven ROI, and detailed comparisons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/comprehensive-pricing-guide-2032"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  View Complete Pricing Guide 2032
                </Link>
                <Link
                  to="/innovative-services-showcase-2026"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our innovative technology solutions can drive your success and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered solutions, cloud services, cybersecurity, 
              and innovative micro-SaaS platforms designed to transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.filter(service => service.featured).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-2xl font-bold text-blue-400 mb-6">{service.pricing}</div>
                
                {service.href && (
                  <a
                    href={service.href}
                    className="inline-flex items-center space-x-2 w-full justify-center py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete portfolio of technology solutions and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="text-lg font-bold text-blue-400 mb-4">{service.pricing}</div>
                
                {service.href && (
                  <a
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lightweight, focused applications that solve specific business problems with AI-powered automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-lg font-bold text-blue-400 mb-4">{service.pricing}</div>
                
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center justify-center w-full py-2 px-4 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  {service.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss how our innovative solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

=======
}
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
