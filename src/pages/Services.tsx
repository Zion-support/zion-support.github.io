<<<<<<< HEAD
=======
import Services from './services';
export default Services;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' }
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  ];
  return (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Users,
  Target,
  Globe,
  Cpu,
  Database,
  Lock,
  Eye,
  Activity,
  BarChart3,
  TrendingUp,
  Code,
  Cloud,
  Smartphone,
  Server,
  Network,
  Palette,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ShoppingCart
} from 'lucide-react';
export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive insights',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Predictive analytics and business insights with 95%+ accuracy',
          href: '/services/ai-business-intelligence',
          price: 'From $2,500/month',
          features: ['Predictive analytics', 'Real-time dashboards', 'Customer intelligence', 'Performance optimization'],
          popular: true
        },
        {
          name: 'AI Content Creation Suite',
          description: 'Automated content generation and marketing automation',
          href: '/services/ai-content-creation-suite',
          price: 'From $1,800/month',
          features: ['Content generation', 'Marketing automation', 'SEO optimization', 'Brand consistency']
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead scoring',
          href: '/services/ai-sales-copilot',
          price: 'From $2,200/month',
          features: ['Lead scoring', 'Sales automation', 'Pipeline optimization', 'Revenue forecasting']
        },
        {
          name: 'AI Customer Support',
          description: '24/7 automated customer service with human-like interactions',
          href: '/services/ai-customer-support-automation',
          price: 'From $1,500/month',
          features: ['24/7 support', 'Multi-language', 'Ticket automation', 'Customer satisfaction']
        }
      ]
    },
    {
      title: 'Cybersecurity & Security',
      description: 'Protect your business with enterprise-grade security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced threat detection and response with AI-powered intelligence',
          href: '/services/ai-cybersecurity-platform',
          price: 'From $3,500/month',
          features: ['AI threat detection', 'Zero-trust architecture', 'Automated response', 'Compliance ready'],
          popular: true
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Secure remote access and network security',
          href: '/services/zero-trust-network-access',
          price: 'From $2,800/month',
          features: ['Secure access', 'Network segmentation', 'Identity verification', 'Threat prevention']
        },
        {
          name: 'Security Headers & CSP',
          description: 'Web application security hardening and protection',
          href: '/services/security-headers-csp',
          price: 'From $1,200/month',
          features: ['Security headers', 'Content Security Policy', 'XSS protection', 'HTTPS enforcement']
        },
        {
          name: 'DSR Portal',
          description: 'Data subject rights management and compliance',
          href: '/services/dsr-portal',
          price: 'From $1,500/month',
          features: ['GDPR compliance', 'Data requests', 'Privacy management', 'Audit trails']
        }
      ]
    },
    {
      title: 'Development & Platforms',
      description: 'Build and launch applications with enterprise-grade infrastructure',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-600',
      services: [
        {
          name: 'Micro SAAS Platform',
          description: 'Rapid application development platform for micro SAAS applications',
          href: '/services/micro-saas-platform',
          price: 'From $1,500/month',
          features: ['Rapid development', 'Pre-built templates', 'AI integration', 'Auto-scaling'],
          popular: true
        },
        {
          name: 'Cloud DevOps Services',
          description: 'Infrastructure automation and management',
          href: '/services/cloud-devops',
          price: 'From $3,000/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise infrastructure solutions and management',
          href: '/services/it-infrastructure',
          price: 'From $4,500/month',
          features: ['Network management', 'Server administration', 'Backup solutions', '24/7 support']
        },
        {
          name: 'FinOps Optimization',
          description: 'Cloud cost optimization and financial operations',
          href: '/services/cloud-finops-optimizer',
          price: 'From $2,500/month',
          features: ['Cost optimization', 'Resource management', 'Budget tracking', 'ROI analysis']
        }
      ]
    }
  ];
  const industries = [
    {
      name: 'Financial Services',
      description: 'AI-powered risk management, fraud detection, and compliance solutions',
      icon: DollarSign,
      href: '/solutions/financial',
      services: ['AI Business Intelligence', 'AI Cybersecurity Platform', 'Compliance Management']
    },
    {
      name: 'Healthcare',
      description: 'Patient data security, AI diagnostics, and operational efficiency',
      icon: Activity,
      href: '/solutions/healthcare',
      services: ['AI Healthcare Analytics', 'HIPAA Compliance', 'Patient Data Security']
    },
    {
      name: 'Manufacturing',
      description: 'IoT integration, predictive maintenance, and supply chain optimization',
      icon: Cpu,
      href: '/solutions/manufacturing',
      services: ['IoT Edge Computing', 'Predictive Maintenance', 'Supply Chain AI']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Customer analytics, inventory management, and personalized experiences',
      icon: ShoppingCart,
      href: '/solutions/retail',
      services: ['Customer Analytics', 'Inventory Management', 'Personalization Engine']
    }
  ];
  const stats = [
    { number: '50+', label: 'AI Services' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];
const services = [
  {
    category: 'Micro SaaS',
    items: [
      {
        title: 'AI Website Copy Optimizer',
        description: 'On-page SEO, A/B copy variants, tone optimization, and SERP monitoring.',
        price: '$49–$299/mo',
        cta: { label: 'Try Demo', href: '/request-quote' }
      },
      {
        title: 'Lead Scoring & Enrichment',
        description: 'Auto-enrich leads via public data, score intent, and route to sales.',
        price: '$99–$499/mo',
        cta: { label: 'Get Started', href: '/contact' }
      },
      {
        title: 'Invoice OCR + Reconciliation',
        description: 'Parse invoices, detect anomalies, sync with QuickBooks/Xero automatically.',
        price: '$149–$799/mo',
        cta: { label: 'Request Access', href: '/request-quote' }
      }
    ]
  },
  {
    category: 'AI Solutions',
    items: [
      {
        title: 'RAG Knowledge Assistants',
        description: 'Enterprise chat over docs with secure vector search and audit trails.',
        price: '$8k–$60k project + $500–$2k/mo',
        cta: { label: 'See Use Cases', href: '/services' }
      },
      {
        title: 'Autonomous Workflow Agents',
        description: 'Multi-agent systems for ticket triage, QA automation, and ops runbooks.',
        price: '$15k–$120k project',
        cta: { label: 'Talk to Engineering', href: '/contact' }
      },
      {
        title: 'Computer Vision Pipelines',
        description: 'Defect detection, price tags reading, shelf analytics, and safety monitoring.',
        price: '$20k–$150k project',
        cta: { label: 'Book Assessment', href: '/request-quote' }
      }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      {
        title: 'Kubernetes Platform Engineering',
        description: 'GitOps, IaC, multi-cluster, golden paths, and internal developer platforms.',
        price: '$25k–$200k project',
        cta: { label: 'Platform Audit', href: '/services/cloud-devops' }
      },
      {
        title: 'Serverless Data Platforms',
        description: 'Event-driven pipelines, data contracts, and cost-optimized analytics.',
        price: '$18k–$120k project',
        cta: { label: 'Design Workshop', href: '/services/cloud-devops' }
      },
      {
        title: 'Site Reliability Engineering',
        description: 'SLOs, chaos testing, observability, incident response, and reliability reviews.',
        price: '$8k–$40k engagement',
        cta: { label: 'SRE Readiness', href: '/contact' }
      }
    ]
  },
  {
    category: 'Cybersecurity',
    items: [
      {
        title: 'Zero-Trust Architecture',
        description: 'Identity-first networks, microsegmentation, and continuous verification.',
        price: '$20k–$150k project',
        cta: { label: 'Architecture Review', href: '/services' }
      },
      {
        title: 'SOC 2 & ISO 27001 Readiness',
        description: 'Gap analysis, policy automation, evidence collection, and auditor handoff.',
        price: '$12k–$60k engagement',
        cta: { label: 'Compliance Sprint', href: '/contact' }
      },
      {
        title: 'Threat Detection & Response',
        description: 'SIEM tuning, EDR rollout, playbooks, red/blue teaming, and MDR setup.',
        price: '$10k–$90k + $1k–$5k/mo',
        cta: { label: 'Schedule Briefing', href: '/request-quote' }
      }
    ]
  }
];
const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-futuristic">
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services that Deliver Outcomes
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            We build real, production-grade solutions across AI, micro SaaS, cloud, and cybersecurity. Transparent pricing, clear timelines, measurable ROI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="tel:+13024640950" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">Call +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">Email kleber@ziontechgroup.com</a>
            <a href="/request-quote" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:from-cyan-300 hover:to-blue-400">Request a Quote</a>
          </div>
        </div>
        <div className="mt-16 space-y-16">
          {services.map((group) => (
            <section key={group.category}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{group.category}</h2>
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.title} className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4 min-h-[64px]">{item.description}</p>
                    <p className="text-cyan-300 text-lg font-semibold mb-4">{item.price}</p>
                    <a href={item.cta.href} className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">
                      {item.cta.label}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            For full capabilities, visit our site at <a className="underline decoration-dotted hover:text-cyan-300" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import { 
  Brain, 
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
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge
} from 'lucide-react';
export default function Services() {
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

  const featuredServices = [
    {
      title: "AI Legal Document Analysis",
      description: "Revolutionize legal document processing with 95% accuracy and 80% time savings",
      price: "From $299/month",
      features: ["AI-Powered Analysis", "Compliance Monitoring", "Risk Assessment"],
      href: "/services/ai-legal-document-analysis",
      color: "from-blue-400 to-purple-500",
      popular: true
    },
    {
      title: "AI Real Estate Investment Analytics",
      description: "Transform real estate investments with 92% prediction accuracy",
      price: "From $199/month",
      features: ["Market Predictions", "ROI Calculator", "Geographic Intelligence"],
      href: "/services/ai-real-estate-investment-analytics",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Reduce costs by 40% and improve delivery times by 50%",
      price: "From $399/month",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management"],
      href: "/services/ai-supply-chain-optimization-enhanced",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "AI Sales Copilot",
      description: "Intelligent sales automation with 40% conversion improvement",
      price: "From $2,200/month",
      features: ["Lead Scoring", "Predictive Analytics", "Automated Follow-ups"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500"
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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive range of AI, cloud, and technology services designed to transform your business."
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI, cloud, and technology solutions designed to transform your business 
              and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.1) }}
                      className="group"
                    >
                      <Link to={service.href}>
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                            <span className="text-sm font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-300">Delivering value through innovation and expertise</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative services can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              <Link
                to="/innovative-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore All New Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
<<<<<<< HEAD
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
=======
          </motion.div>
        </div>
      </section>
      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation First',
                description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our specialists bring years of experience and deep technical knowledge.'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable business value and ROI for our clients.'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality assurance processes ensure reliable solutions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
                  to="/comprehensive-pricing-guide-2033"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  View Complete Pricing Guide
                </Link>
                <Link
                  to="/innovative-services-showcase-2033"
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
}
<<<<<<< HEAD
=======
export default Services;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
