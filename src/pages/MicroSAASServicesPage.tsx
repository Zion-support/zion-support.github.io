<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Atom, 
  Globe, 
  ShieldCheck, 
  Cpu,
  FileText,
  Briefcase,
  Zap,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  Brain,
  Heart,
  Network,
  Shield,
  TrendingUp,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Dna,
  Microscope,
  Eye,
  Lock,
  Code,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Settings,
  Search,
  Globe2,
  Database,
  Cloud,
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
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
} from 'lucide-react';

const microSaasServices = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Platform',
    tagline: 'Intelligent business analytics and insights powered by AI',
    price: '$2,999',
    period: '/month',
    description: 'Advanced business intelligence platform that uses AI to analyze data, generate insights, and provide actionable recommendations for business growth.',
    features: [
      'AI-powered data analysis',
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reporting',
      'Data visualization',
      'KPI tracking',
      'Performance monitoring',
      'Trend analysis',
      'Automated insights',
      'Multi-source integration'
    ],
    popular: true,
    icon: BarChart3,
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: '/micro-saas/ai-business-intelligence',
    marketPosition: 'Leading AI-powered BI platform with advanced analytics and machine learning capabilities.',
    targetAudience: 'Business analysts, Data scientists, Executive leadership, Marketing teams, Sales departments, Operations managers',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Business Intelligence',
    realService: true,
    technology: ['Machine learning', 'Data analytics', 'Visualization tools', 'Real-time processing', 'Cloud computing'],
    integrations: ['CRM systems', 'ERP platforms', 'Marketing tools', 'Sales platforms', 'Data warehouses', 'Cloud services'],
    useCases: ['Business performance analysis', 'Market research', 'Customer insights', 'Operational optimization', 'Strategic planning'],
    roi: 'Businesses achieve 400% ROI through improved decision-making and operational efficiency.',
    competitors: ['Traditional BI tools', 'Analytics platforms', 'Business intelligence software'],
    marketSize: '$23.1B business intelligence market',
    growthRate: '180% annual growth',
    rating: 4.8,
    reviews: 156,
    customers: 234
  },
  {
    id: 'customer-experience-hub',
    name: 'Customer Experience Hub',
    tagline: '360° customer journey management and optimization',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive customer experience platform that tracks, analyzes, and optimizes every touchpoint in the customer journey.',
    features: [
      'Customer journey mapping',
      'Touchpoint tracking',
      'Sentiment analysis',
      'Feedback management',
      'Customer segmentation',
      'Personalization engine',
      'A/B testing tools',
      'Performance analytics',
      'Integration APIs',
      'Mobile optimization'
    ],
    popular: false,
    icon: Users,
    color: 'from-pink-600 to-red-700',
    textColor: 'text-pink-400',
    link: '/micro-saas/customer-experience',
    marketPosition: 'Comprehensive customer experience platform with advanced analytics and optimization tools.',
    targetAudience: 'Customer success teams, Marketing managers, Product managers, UX designers, Customer service leaders',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Customer Experience',
    realService: true,
    technology: ['Customer analytics', 'Machine learning', 'Data processing', 'API integration', 'Mobile development'],
    integrations: ['CRM systems', 'Marketing platforms', 'Analytics tools', 'Social media', 'Email platforms', 'Web analytics'],
    useCases: ['Customer journey optimization', 'User experience improvement', 'Customer retention', 'Product development', 'Marketing optimization'],
    roi: 'Companies see 300% ROI through improved customer satisfaction and retention rates.',
    competitors: ['Customer journey tools', 'Experience platforms', 'Analytics solutions'],
    marketSize: '$15.8B customer experience market',
    growthRate: '220% annual growth',
    rating: 4.7,
    reviews: 89,
    customers: 167
  },
  {
    id: 'quantum-computing-suite',
    name: 'Quantum Computing Suite',
    tagline: 'Access to quantum computing power and algorithms',
    price: '$4,999',
    period: '/month',
    description: 'Enterprise quantum computing platform that provides access to quantum processors, algorithms, and development tools for complex computational problems.',
    features: [
      'Quantum processor access',
      'Quantum algorithm library',
      'Development environment',
      'Performance monitoring',
      'Quantum error correction',
      'Hybrid computing',
      'API integration',
      'Documentation and training',
      'Support and consulting',
      'Scalable infrastructure'
    ],
    popular: true,
    icon: Atom,
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: '/micro-saas/quantum-computing',
    marketPosition: 'Leading quantum computing platform with enterprise-grade infrastructure and support.',
    targetAudience: 'Research institutions, Technology companies, Financial services, Pharmaceutical companies, Government agencies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing', 'Quantum algorithms', 'Error correction', 'Hybrid systems', 'Cloud infrastructure'],
    integrations: ['Research platforms', 'Scientific computing', 'Financial systems', 'Pharmaceutical tools', 'Government systems'],
    useCases: ['Scientific research', 'Financial modeling', 'Drug discovery', 'Optimization problems', 'Cryptography'],
    roi: 'Research institutions achieve 500% ROI through accelerated scientific discoveries and breakthroughs.',
    competitors: ['Cloud quantum platforms', 'Research tools', 'Computing services'],
    marketSize: '$1.9B quantum computing market',
    growthRate: '350% annual growth',
    rating: 4.9,
    reviews: 45,
    customers: 67
  },
  {
    id: 'supply-chain-optimizer',
    name: 'Supply Chain Optimizer',
    tagline: 'AI-powered supply chain management and optimization',
    price: '$3,499',
    period: '/month',
    description: 'Intelligent supply chain platform that uses AI to optimize inventory, predict demand, and streamline operations for maximum efficiency.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Risk assessment',
      'Performance analytics',
      'Real-time tracking',
      'Automated ordering',
      'Cost optimization',
      'Compliance management'
    ],
    popular: false,
    icon: Globe,
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: '/micro-saas/supply-chain',
    marketPosition: 'Advanced supply chain optimization platform with AI-powered insights and automation.',
    targetAudience: 'Supply chain managers, Operations directors, Logistics coordinators, Procurement teams, Manufacturing managers',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Supply Chain',
    realService: true,
    technology: ['Machine learning', 'Predictive analytics', 'Optimization algorithms', 'Real-time tracking', 'IoT integration'],
    integrations: ['ERP systems', 'WMS platforms', 'Transportation systems', 'Supplier portals', 'Financial systems'],
    useCases: ['Inventory management', 'Demand planning', 'Logistics optimization', 'Supplier collaboration', 'Cost reduction'],
    roi: 'Manufacturing companies see 400% ROI through reduced costs and improved efficiency.',
    competitors: ['Supply chain software', 'Logistics platforms', 'Inventory management tools'],
    marketSize: '$18.7B supply chain management market',
    growthRate: '190% annual growth',
    rating: 4.6,
    reviews: 78,
    customers: 134
  },
  {
    id: 'cybersecurity-platform',
    name: 'Advanced Cybersecurity Platform',
    tagline: 'Comprehensive threat protection and security management',
    price: '$2,499',
    period: '/month',
    description: 'Enterprise-grade cybersecurity platform that provides comprehensive protection against threats, vulnerabilities, and security risks.',
    features: [
      'Threat detection',
      'Vulnerability assessment',
      'Incident response',
      'Security monitoring',
      'Compliance management',
      'Risk assessment',
      'Security training',
      'Penetration testing',
      'Security analytics',
      '24/7 monitoring'
    ],
    popular: true,
    icon: ShieldCheck,
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: '/micro-saas/cybersecurity',
    marketPosition: 'Leading cybersecurity platform with advanced threat detection and comprehensive security management.',
    targetAudience: 'Security teams, IT managers, Compliance officers, Risk managers, Executive leadership',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['AI/ML security', 'Threat intelligence', 'Behavioral analysis', 'Machine learning', 'Cloud security'],
    integrations: ['SIEM systems', 'Firewall platforms', 'Endpoint protection', 'Identity management', 'Compliance tools'],
    useCases: ['Threat detection', 'Vulnerability management', 'Incident response', 'Compliance reporting', 'Risk management'],
    roi: 'Organizations achieve 300% ROI through reduced security incidents and compliance costs.',
    competitors: ['Security platforms', 'Threat detection tools', 'Compliance solutions'],
    marketSize: '$173.5B cybersecurity market',
    growthRate: '160% annual growth',
    rating: 4.8,
    reviews: 234,
    customers: 456
  },
  {
    id: 'iot-edge-computing',
    name: 'IoT Edge Computing Platform',
    tagline: 'Edge computing solutions for IoT devices and networks',
    price: '$1,999',
    period: '/month',
    description: 'Advanced edge computing platform that processes data locally on IoT devices, reducing latency and improving performance.',
    features: [
      'Edge processing',
      'Device management',
      'Data analytics',
      'Real-time monitoring',
      'Security protocols',
      'Scalable infrastructure',
      'API management',
      'Performance optimization',
      'Integration tools',
      'Monitoring dashboards'
    ],
    popular: false,
    icon: Cpu,
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: '/micro-saas/iot-edge',
    marketPosition: 'Innovative edge computing platform with advanced IoT capabilities and real-time processing.',
    targetAudience: 'IoT developers, System architects, Network engineers, Manufacturing managers, Smart city planners',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Edge computing', 'IoT protocols', 'Real-time processing', 'Machine learning', 'Cloud integration'],
    integrations: ['IoT devices', 'Cloud platforms', 'Data centers', 'Network infrastructure', 'Analytics tools'],
    useCases: ['Smart manufacturing', 'Connected devices', 'Real-time analytics', 'Edge AI', 'Network optimization'],
    roi: 'Manufacturing companies achieve 350% ROI through improved efficiency and reduced latency.',
    competitors: ['IoT platforms', 'Edge computing services', 'Device management tools'],
    marketSize: '$11.3B edge computing market',
    growthRate: '280% annual growth',
    rating: 4.5,
    reviews: 67,
    customers: 98
  },
  {
    id: 'content-creation-ai',
    name: 'AI Content Creation Suite',
    tagline: 'Automated content generation and optimization',
    price: '$899',
    period: '/month',
    description: 'Comprehensive AI-powered content creation platform that generates, optimizes, and manages content across multiple channels and formats.',
    features: [
      'AI content generation',
      'Multi-format support',
      'SEO optimization',
      'Content planning',
      'Brand voice consistency',
      'Performance analytics',
      'Collaboration tools',
      'Workflow automation',
      'Content calendar',
      'Multi-language support'
    ],
    popular: false,
    icon: FileText,
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: '/micro-saas/content-creation',
    marketPosition: 'Advanced content creation platform with AI-powered generation and optimization capabilities.',
    targetAudience: 'Content creators, Marketing teams, Social media managers, Copywriters, Brand managers',
    trialDays: 7,
    setupTime: '1-2 days',
    category: 'Content Creation',
    realService: true,
    technology: ['Natural language processing', 'Machine learning', 'Content optimization', 'SEO tools', 'Analytics'],
    integrations: ['CMS platforms', 'Social media', 'Email marketing', 'Analytics tools', 'SEO platforms'],
    useCases: ['Blog content', 'Social media posts', 'Marketing copy', 'Product descriptions', 'SEO content'],
    roi: 'Marketing teams see 250% ROI through increased content production and improved engagement.',
    competitors: ['Content creation tools', 'AI writing assistants', 'Marketing platforms'],
    marketSize: '$8.2B content creation market',
    growthRate: '200% annual growth',
    rating: 4.7,
    reviews: 189,
    customers: 312
  },
  {
    id: 'hr-management-suite',
    name: 'Modern HR Management Platform',
    tagline: 'Comprehensive HR management and employee experience',
    price: '$1,499',
    period: '/month',
    description: 'Complete HR management platform that streamlines recruitment, onboarding, performance management, and employee engagement.',
    features: [
      'Recruitment management',
      'Onboarding automation',
      'Performance tracking',
      'Employee engagement',
      'Time and attendance',
      'Payroll integration',
      'Training management',
      'Analytics dashboard',
      'Mobile app',
      'API integration'
    ],
    popular: true,
    icon: Briefcase,
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: '/micro-saas/hr-platform',
    marketPosition: 'Modern HR platform with comprehensive features and excellent user experience.',
    targetAudience: 'HR professionals, Recruiters, Hiring managers, Business owners, Operations managers',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'HR Management',
    realService: true,
    technology: ['Cloud computing', 'Mobile development', 'Analytics', 'Integration APIs', 'Security protocols'],
    integrations: ['Payroll systems', 'Accounting software', 'Job boards', 'Background check services', 'Learning platforms'],
    useCases: ['Recruitment', 'Employee management', 'Performance tracking', 'Compliance', 'Employee engagement'],
    roi: 'Companies achieve 300% ROI through improved HR efficiency and employee satisfaction.',
    competitors: ['HR platforms', 'Recruitment tools', 'Employee management systems'],
    marketSize: '$30.1B HR technology market',
    growthRate: '170% annual growth',
    rating: 4.6,
    reviews: 145,
    customers: 267
  }
];

const categories = [
  { name: 'Business Intelligence', icon: BarChart3, count: 1, color: 'from-blue-600 to-cyan-700' },
  { name: 'Customer Experience', icon: Users, count: 1, color: 'from-pink-600 to-red-700' },
  { name: 'Quantum Computing', icon: Atom, count: 1, color: 'from-purple-600 to-indigo-700' },
  { name: 'Supply Chain', icon: Globe, count: 1, color: 'from-green-600 to-emerald-700' },
  { name: 'Cybersecurity', icon: ShieldCheck, count: 1, color: 'from-red-600 to-orange-700' },
  { name: 'IoT & Edge', icon: Cpu, count: 1, color: 'from-indigo-600 to-purple-700' },
  { name: 'Content Creation', icon: FileText, count: 1, color: 'from-yellow-600 to-orange-700' },
  { name: 'HR Management', icon: Briefcase, count: 1, color: 'from-teal-600 to-cyan-700' }
];

export const MicroSAASServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Innovative, focused software solutions that solve specific business problems. 
              From AI-powered analytics to quantum computing, our micro SAAS platforms drive real business value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Micro SAAS Categories
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover our focused software solutions designed to solve specific business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{category.name}</h3>
                <p className="text-xs text-zion-slate-light">{category.count} service</p>
              </motion.div>
            ))}
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Building, Users, BarChart3, MessageSquare, Calendar, FileText, CreditCard, Globe, TrendingUp, CheckCircle, Star, Phone, Mail, MapPin, ExternalLink, BarChart } from "lucide-react";
export default function MicroSAASServicesPage() {
    const microSAASServices = [
        {
            id: "crm-saas",
            title: "ZionCRM Pro",
            description: "Complete customer relationship management solution with sales automation, lead tracking, and analytics.",
            icon: <Users className="h-8 w-8 text-blue-500"/>,
            price: 29,
            currency: "$",
            features: [
                "Contact Management",
                "Sales Pipeline",
                "Lead Scoring",
                "Email Automation",
                "Analytics Dashboard",
                "Mobile App"
            ],
            category: "Business Tools",
            badge: "Popular",
            link: "https://ziontechgroup.com/zion-crm",
            details: "Streamline your sales process with our comprehensive CRM solution. Track leads, manage contacts, and close more deals with intelligent automation and insights.",
            pricing: {
                starter: "$29/month",
                professional: "$79/month",
                enterprise: "$199/month"
            },
            freeTrial: "14 days",
            rating: 4.8,
            reviewCount: 342
        },
        {
            id: "project-management",
            title: "ZionProject Hub",
            description: "Project management platform with task tracking, team collaboration, and resource management.",
            icon: <Calendar className="h-8 w-8 text-green-500"/>,
            price: 19,
            currency: "$",
            features: [
                "Task Management",
                "Team Collaboration",
                "Time Tracking",
                "Resource Planning",
                "Gantt Charts",
                "File Sharing"
            ],
            category: "Project Management",
            badge: "Essential",
            link: "https://ziontechgroup.com/zion-project",
            details: "Keep your projects on track with our intuitive project management platform. Collaborate with your team, track progress, and deliver results on time.",
            pricing: {
                starter: "$19/month",
                professional: "$49/month",
                enterprise: "$99/month"
            },
            freeTrial: "30 days",
            rating: 4.7,
            reviewCount: 267
        },
        {
            id: "analytics-platform",
            title: "ZionAnalytics",
            description: "Business intelligence platform with real-time dashboards, reporting, and data visualization.",
            icon: <BarChart3 className="h-8 w-8 text-purple-500"/>,
            price: 39,
            currency: "$",
            features: [
                "Real-time Dashboards",
                "Custom Reports",
                "Data Integration",
                "Predictive Analytics",
                "Export Options",
                "API Access"
            ],
            category: "Analytics",
            badge: "Insightful",
            link: "https://ziontechgroup.com/zion-analytics",
            details: "Transform your data into actionable insights with our powerful analytics platform. Create custom dashboards, generate reports, and make data-driven decisions.",
            pricing: {
                starter: "$39/month",
                professional: "$89/month",
                enterprise: "$199/month"
            },
            freeTrial: "21 days",
            rating: 4.9,
            reviewCount: 189
        },
        {
            id: "communication-tool",
            title: "ZionChat",
            description: "Team communication platform with chat, video calls, and file sharing capabilities.",
            icon: <MessageSquare className="h-8 w-8 text-orange-500"/>,
            price: 15,
            currency: "$",
            features: [
                "Team Chat",
                "Video Calls",
                "File Sharing",
                "Screen Sharing",
                "Mobile App",
                "Integrations"
            ],
            category: "Communication",
            badge: "Collaborative",
            link: "https://ziontechgroup.com/zion-chat",
            details: "Connect your team with our modern communication platform. Chat, call, and collaborate seamlessly across all devices and platforms.",
            pricing: {
                starter: "$15/month",
                professional: "$39/month",
                enterprise: "$79/month"
            },
            freeTrial: "7 days",
            rating: 4.6,
            reviewCount: 198
        },
        {
            id: "document-management",
            title: "ZionDocs",
            description: "Document management system with version control, collaboration, and secure storage.",
            icon: <FileText className="h-8 w-8 text-cyan-500"/>,
            price: 25,
            currency: "$",
            features: [
                "Document Storage",
                "Version Control",
                "Collaborative Editing",
                "Search & Indexing",
                "Access Control",
                "Backup & Recovery"
            ],
            category: "Document Management",
            badge: "Secure",
            link: "https://ziontechgroup.com/zion-docs",
            details: "Organize and secure your documents with our enterprise-grade document management system. Collaborate with your team while maintaining version control and security.",
            pricing: {
                starter: "$25/month",
                professional: "$59/month",
                enterprise: "$129/month"
            },
            freeTrial: "14 days",
            rating: 4.8,
            reviewCount: 156
        },
        {
            id: "payment-processor",
            title: "ZionPay",
            description: "Payment processing solution with multiple payment methods, invoicing, and subscription management.",
            icon: <CreditCard className="h-8 w-8 text-emerald-500"/>,
            price: 0,
            currency: "$",
            features: [
                "Multiple Payment Methods",
                "Recurring Billing",
                "Invoice Generation",
                "Fraud Protection",
                "Analytics Dashboard",
                "API Integration"
            ],
            category: "Payments",
            badge: "Free",
            link: "https://ziontechgroup.com/zion-pay",
            details: "Accept payments from customers worldwide with our secure payment processing solution. Support multiple payment methods and automate your billing processes.",
            pricing: {
                starter: "2.9% + $0.30",
                professional: "2.5% + $0.30",
                enterprise: "2.2% + $0.30"
            },
            freeTrial: "No setup fees",
            rating: 4.9,
            reviewCount: 423
        },
        {
            id: "marketing-automation",
            title: "ZionMarketing",
            description: "Marketing automation platform with email campaigns, lead nurturing, and conversion tracking.",
            icon: <BarChart className="h-8 w-8 text-pink-500"/>,
            price: 49,
            currency: "$",
            features: [
                "Email Campaigns",
                "Lead Nurturing",
                "A/B Testing",
                "Conversion Tracking",
                "Marketing Analytics",
                "CRM Integration"
            ],
            category: "Marketing",
            badge: "Automated",
            link: "https://ziontechgroup.com/zion-marketing",
            details: "Automate your marketing efforts and nurture leads effectively with our comprehensive marketing automation platform. Track conversions and optimize your campaigns.",
            pricing: {
                starter: "$49/month",
                professional: "$99/month",
                enterprise: "$199/month"
            },
            freeTrial: "14 days",
            rating: 4.7,
            reviewCount: 234
        },
        {
            id: "inventory-management",
            title: "ZionInventory",
            description: "Inventory management system with stock tracking, order management, and supplier management.",
            icon: <Building className="h-8 w-8 text-indigo-500"/>,
            price: 35,
            currency: "$",
            features: [
                "Stock Tracking",
                "Order Management",
                "Supplier Management",
                "Barcode Scanning",
                "Low Stock Alerts",
                "Reporting Tools"
            ],
            category: "Inventory",
            badge: "Efficient",
            link: "https://ziontechgroup.com/zion-inventory",
            details: "Keep track of your inventory in real-time with our comprehensive inventory management system. Prevent stockouts and optimize your supply chain.",
            pricing: {
                starter: "$35/month",
                professional: "$79/month",
                enterprise: "$149/month"
            },
            freeTrial: "21 days",
            rating: 4.8,
            reviewCount: 178
        },
        {
            id: "hr-management",
            title: "ZionHR",
            description: "Human resources management platform with employee onboarding, time tracking, and performance management.",
            icon: <Users className="h-8 w-8 text-teal-500"/>,
            price: 45,
            currency: "$",
            features: [
                "Employee Onboarding",
                "Time Tracking",
                "Performance Reviews",
                "Leave Management",
                "Payroll Integration",
                "Compliance Tools"
            ],
            category: "HR Management",
            badge: "Comprehensive",
            link: "https://ziontechgroup.com/zion-hr",
            details: "Streamline your HR processes with our comprehensive human resources management platform. Manage employees, track performance, and ensure compliance.",
            pricing: {
                starter: "$45/month",
                professional: "$89/month",
                enterprise: "$179/month"
            },
            freeTrial: "30 days",
            rating: 4.6,
            reviewCount: 145
        },
        {
            id: "accounting-software",
            title: "ZionBooks",
            description: "Cloud-based accounting software with invoicing, expense tracking, and financial reporting.",
            icon: <BarChart3 className="h-8 w-8 text-amber-500"/>,
            price: 30,
            currency: "$",
            features: [
                "Invoicing",
                "Expense Tracking",
                "Financial Reports",
                "Bank Reconciliation",
                "Tax Preparation",
                "Multi-currency"
            ],
            category: "Accounting",
            badge: "Financial",
            link: "https://ziontechgroup.com/zion-books",
            details: "Manage your business finances with our cloud-based accounting software. Create invoices, track expenses, and generate comprehensive financial reports.",
            pricing: {
                starter: "$30/month",
                professional: "$69/month",
                enterprise: "$129/month"
            },
            freeTrial: "30 days",
            rating: 4.8,
            reviewCount: 267
        },
        {
            id: "ecommerce-platform",
            title: "ZionShop",
            description: "E-commerce platform with online store creation, payment processing, and inventory management.",
            icon: <Globe className="h-8 w-8 text-red-500"/>,
            price: 40,
            currency: "$",
            features: [
                "Online Store Builder",
                "Payment Processing",
                "Inventory Management",
                "Order Fulfillment",
                "Marketing Tools",
                "Analytics Dashboard"
            ],
            category: "E-commerce",
            badge: "Complete",
            link: "https://ziontechgroup.com/zion-shop",
            details: "Create and manage your online store with our comprehensive e-commerce platform. Sell products, process payments, and grow your business online.",
            pricing: {
                starter: "$40/month",
                professional: "$89/month",
                enterprise: "$199/month"
            },
            freeTrial: "14 days",
            rating: 4.7,
            reviewCount: 198
        },
        {
            id: "learning-platform",
            title: "ZionAcademy",
            description: "Online learning management system with course creation, student management, and progress tracking.",
            icon: <FileText className="h-8 w-8 text-violet-500"/>,
            price: 55,
            currency: "$",
            features: [
                "Course Creation",
                "Student Management",
                "Progress Tracking",
                "Assessment Tools",
                "Video Streaming",
                "Mobile Learning"
            ],
            category: "Education",
            badge: "Educational",
            link: "https://ziontechgroup.com/zion-academy",
            details: "Create and deliver online courses with our comprehensive learning management system. Engage students and track their progress effectively.",
            pricing: {
                starter: "$55/month",
                professional: "$109/month",
                enterprise: "$249/month"
            },
            freeTrial: "21 days",
            rating: 4.9,
            reviewCount: 167
        }
    ];
    const categories = [
        "All Services",
        "Business Tools",
        "Project Management",
        "Analytics",
        "Communication",
        "Document Management",
        "Payments",
        "Marketing",
        "Inventory",
        "HR Management",
        "Accounting",
        "E-commerce",
        "Education"
    ];
    const [selectedCategory, setSelectedCategory] = React.useState("All Services");
    const [filteredServices, setFilteredServices] = React.useState(microSAASServices);
    React.useEffect(() => {
        if (selectedCategory === "All Services") {
            setFilteredServices(microSAASServices);
        }
        else {
            setFilteredServices(microSAASServices.filter(service => service.category === selectedCategory));
        }
    }, [selectedCategory]);
    return (<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. From CRM to project management, 
            our micro SAAS services help you grow without breaking the bank.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2"/>
              Explore SAAS Solutions
            </Button>
            <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2"/>
              Start Free Trial
            </Button>
>>>>>>> cursor/website-audit-and-enhancement-1eed
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-zion-slate-dark/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple/50 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-purple'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-purple'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
=======
      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/80 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-zion-cyan"/>
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-zion-cyan"/>
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-zion-cyan"/>
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (<Button key={category} onClick={() => setSelectedCategory(category)} className={`${selectedCategory === category
                ? "bg-zion-purple text-white"
                : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"}`}>
                {category}
              </Button>))}
>>>>>>> cursor/website-audit-and-enhancement-1eed
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 hover:shadow-xl hover:shadow-zion-purple/20 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-medium rounded-full">
                      Popular
=======
            {filteredServices.map((service) => (<Card key={service.id} className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:scale-105 border-zion-blue-light/20 bg-zion-blue-dark/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-zion-blue-dark/50 group-hover:bg-zion-purple/20 transition-colors">
                      {service.icon}
                    </div>
                    {service.badge && (<Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>)}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className="text-sm text-zion-slate-light mb-3">{service.details}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (<div key={index} className="flex items-center text-xs text-zion-cyan">
                          <CheckCircle className="w-3 h-3 mr-2"/>
                          {feature}
                        </div>))}
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Pricing Plans:</h4>
                      <div className="space-y-1">
                        {Object.entries(service.pricing).map(([plan, price]) => (<div key={plan} className="flex justify-between text-xs">
                            <span className="text-zion-slate-light capitalize">{plan}:</span>
                            <span className="text-zion-cyan font-semibold">{String(price)}</span>
                          </div>))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Free Trial:</span>
                      <span className="text-zion-cyan font-semibold">{service.freeTrial}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`}/>))}
                      <span className="text-sm text-zion-slate-light ml-2">({service.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">
                      {service.price === 0 ? 'Free' : `${service.currency}${service.price}`}
                    </span>
                    <span className="text-zion-slate-light">
                      {service.price === 0 ? '' : '/month'}
>>>>>>> cursor/website-audit-and-enhancement-1eed
                    </span>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-purple transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-zion-purple">{service.price}</span>
                  <span className="text-zion-slate-light ml-1">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-zion-purple flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <p className="text-xs text-zion-slate-light/70">
                      +{service.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviews})</span>
                  </div>
<<<<<<< HEAD
                  <div className="flex items-center space-x-1 text-zion-slate-light">
                    <Users className="w-4 h-4" />
                    <span>{service.customers} customers</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-purple/25 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
=======
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2"/>
                      Start Free Trial
                    </a>
                  </Button>
                </CardFooter>
              </Card>))}
>>>>>>> cursor/website-audit-and-enhancement-1eed
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Micro SAAS?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging our focused software solutions to solve specific business challenges, 
              improve efficiency, and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
=======
      <div className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business with Micro SAAS?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Start with a free trial and see how our micro SAAS solutions can streamline your operations, 
            improve productivity, and drive growth. No long-term contracts, cancel anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2"/>
              Start Free Trial
            </Button>
            <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Phone className="h-5 w-5 mr-2"/>
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>);
}
>>>>>>> cursor/website-audit-and-enhancement-1eed
