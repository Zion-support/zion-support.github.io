import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain,
  Cloud,
  Shield,
  Zap,
  Server,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Lock,
  Users,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Rocket,
  Atom,
  Network,
  Eye,
  Truck,
  MessageCircle,
  Target,
  Briefcase,
  Newspaper,
  HelpCircle,
  Video,
  TestTube,
  GraduationCap,
  GitFork,
  ExternalLink,
  ChevronDown,
  Copyright,
  MessageSquare,
  Building,
  DollarSign,
  Sparkles,
  Heart,
  Coins,
  Satellite,
  Leaf,
  Gamepad2,
  Cpu,
  Database,
  Clock,
  Code,
  BookOpen,
  Smartphone,
  Activity,
  ShoppingCart,
  PenTool
} from 'lucide-react';

interface Service {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  featured?: boolean;
}

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: Service[];
}

const featuredServices = [
  {
    name: 'AI Solutions',
    href: '/ai-services',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cloud & DevOps',
    href: '/services/cloud-devops',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Cybersecurity',
    href: '/services/cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Micro SaaS',
    href: '/micro-saas',
    icon: Zap,
    color: 'from-green-500 to-emerald-500'
  }
];

const featuredCategories = [
  {
    title: 'AI-Powered Solutions',
    desc: 'Cutting-edge artificial intelligence services',
    href: '/ai-services'
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Scalable cloud solutions and DevOps',
    href: '/services/cloud-devops'
  },
  {
    title: 'Cybersecurity',
    desc: 'Advanced security and compliance',
    href: '/services/cybersecurity'
  }
];

const serviceCategories: ServiceCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Transform your business with cutting-edge AI solutions',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    services: [
      {
        name: 'AI Workflow Orchestrator',
        description: 'Automate complex business processes with AI',
        href: '/services/ai-workflow-orchestrator',
        icon: TrendingUp,
        color: 'from-purple-500 to-pink-500',
        features: ['Process Automation', 'Intelligent Routing', 'Performance Analytics'],
        featured: true
      },
      {
        name: 'AI Data Governance Platform',
        description: 'Manage and govern your data with AI-powered insights',
        href: '/services/ai-data-governance-platform',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500',
        features: ['Data Quality', 'Compliance Monitoring', 'Risk Assessment'],
        featured: true
      },
      {
        name: 'AI Customer Experience Analytics',
        description: 'Understand and improve customer interactions',
        href: '/services/ai-customer-experience-analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        features: ['Behavior Analysis', 'Predictive Insights', 'Personalization']
      },
      {
        name: 'AI Financial Risk Management',
        description: 'AI-powered financial risk assessment and mitigation',
        href: '/services/ai-financial-risk-management',
        icon: DollarSign,
        color: 'from-red-500 to-orange-500',
        features: ['Risk Modeling', 'Fraud Detection', 'Portfolio Optimization']
      },
      {
        name: 'AI Code Review Security Scanner',
        description: 'Automated security scanning for code reviews',
        href: '/services/ai-code-review-security-scanner',
        icon: Shield,
        color: 'from-purple-500 to-pink-500',
        features: ['Vulnerability Detection', 'Code Quality', 'Security Compliance']
      },
      {
        name: 'AI DevOps Automation Platform',
        description: 'Streamline DevOps with intelligent automation',
        href: '/services/ai-devops-automation-platform',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        features: ['CI/CD Automation', 'Infrastructure Management', 'Performance Monitoring']
      },
      {
        name: 'AI Business Intelligence Analytics',
        description: 'Advanced analytics powered by artificial intelligence',
        href: '/services/ai-business-intelligence-analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        features: ['Predictive Analytics', 'Data Visualization', 'Insight Generation']
      },
      {
        name: 'AI Customer Experience Support',
        description: 'Enhance customer support with AI capabilities',
        href: '/services/ai-customer-experience-support',
        icon: MessageCircle,
        color: 'from-blue-500 to-cyan-500',
        features: ['Chatbot Integration', 'Sentiment Analysis', 'Issue Resolution']
      },
      {
        name: 'AI Marketing Automation Personalization',
        description: 'Personalized marketing campaigns with AI',
        href: '/services/ai-marketing-automation-personalization',
        icon: Target,
        color: 'from-purple-500 to-pink-500',
        features: ['Customer Segmentation', 'Campaign Optimization', 'ROI Tracking']
      },
      {
        name: 'AI Autonomous Research Assistant',
        description: 'AI-powered research and analysis tool',
        href: '/services/ai-autonomous-research-assistant',
        icon: Brain,
        color: 'from-indigo-500 to-purple-500',
        features: ['Research Automation', 'Data Analysis', 'Report Generation']
      },
      {
        name: 'AI Supply Chain Optimization',
        description: 'Optimize supply chain operations with AI',
        href: '/services/ai-supply-chain-optimization',
        icon: Truck,
        color: 'from-green-500 to-emerald-500',
        features: ['Demand Forecasting', 'Inventory Management', 'Route Optimization']
      },
      {
        name: 'AI Content Marketing Suite',
        description: 'Comprehensive content marketing with AI',
        href: '/services/ai-content-marketing-suite',
        icon: FileText,
        color: 'from-blue-500 to-cyan-500',
        features: ['Content Creation', 'SEO Optimization', 'Performance Tracking']
      },
      {
        name: 'AI Quantum Hybrid Platform',
        description: 'Integration of AI with quantum computing',
        href: '/services/ai-quantum-hybrid-platform',
        icon: Atom,
        color: 'from-purple-500 to-pink-500',
        features: ['Quantum Algorithms', 'AI Integration', 'Performance Optimization']
      },
      {
        name: 'AI Cybersecurity Platform',
        description: 'Comprehensive AI-powered cybersecurity',
        href: '/services/ai-cybersecurity-platform',
        icon: Shield,
        color: 'from-red-500 to-orange-500',
        features: ['Threat Detection', 'Incident Response', 'Security Analytics']
      },
      {
        name: 'AI Healthcare Platform',
        description: 'AI solutions for healthcare industry',
        href: '/services/ai-healthcare-platform',
        icon: Heart,
        color: 'from-green-500 to-emerald-500',
        features: ['Diagnostic Support', 'Patient Care', 'Research Analysis']
      },
      {
        name: 'AI Business Intelligence',
        description: 'Business intelligence enhanced with AI',
        href: '/services/ai-business-intelligence',
        icon: BarChart3,
        color: 'from-blue-500 to-cyan-500',
        features: ['Data Analysis', 'Reporting', 'Strategic Insights']
      },
      {
        name: 'Digital Transformation',
        description: 'Transform your business with digital solutions',
        href: '/services/digital-transformation',
        icon: Rocket,
        color: 'from-purple-500 to-pink-500',
        features: ['Process Optimization', 'Technology Integration', 'Change Management']
      }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Build scalable and resilient cloud solutions',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    services: [
      {
        name: 'Cloud DevOps',
        description: 'Streamline development and deployment',
        href: '/services/cloud-devops',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
        featured: true
      },
      {
        name: 'IT Infrastructure',
        description: 'Modernize your technology foundation',
        href: '/services/it-infrastructure',
        icon: Server,
        color: 'from-gray-500 to-slate-500',
        features: ['Network Design', 'Hardware Optimization', 'Security']
      },
      {
        name: 'Data Analytics',
        description: 'Turn data into actionable insights',
        href: '/services/data-analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        features: ['Data Processing', 'Visualization', 'Machine Learning']
      },
      {
        name: 'FinOps Advisor',
        description: 'Cloud cost optimization and management',
        href: '/services/finops-advisor',
        icon: DollarSign,
        color: 'from-green-500 to-emerald-500',
        features: ['Cost Optimization', 'Budget Management', 'Resource Planning']
      },
      {
        name: 'Cloud FinOps Optimizer',
        description: 'Financial operations automation for cloud',
        href: '/services/cloud-finops-optimizer',
        icon: DollarSign,
        color: 'from-blue-500 to-cyan-500',
        features: ['Cost Tracking', 'Automated Billing', 'Financial Reporting']
      },
      {
        name: 'IT Consulting',
        description: 'Technology strategy and planning',
        href: '/it-consulting',
        icon: Briefcase,
        color: 'from-gray-500 to-slate-500',
        features: ['Strategic Planning', 'Technology Assessment', 'Implementation']
      },
      {
        name: 'Enterprise Solutions',
        description: 'Large-scale enterprise solutions',
        href: '/solutions/enterprise',
        icon: Building,
        color: 'from-blue-500 to-cyan-500',
        features: ['Scalability', 'Enterprise Integration', 'Support']
      },
      {
        name: 'Healthcare Solutions',
        description: 'Healthcare technology solutions',
        href: '/solutions/healthcare',
        icon: Heart,
        color: 'from-green-500 to-emerald-500',
        features: ['HIPAA Compliance', 'Patient Care', 'Data Security']
      }
    ]
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Protect your business with advanced security solutions',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: [
      {
        name: 'Zero Trust Network Access',
        description: 'Secure access to your network resources',
        href: '/services/zero-trust-network-access',
        icon: Lock,
        color: 'from-red-500 to-orange-500',
        features: ['Identity Verification', 'Access Control', 'Threat Detection']
      },
      {
        name: 'AI Compliance Assistant',
        description: 'Automate compliance monitoring and reporting',
        href: '/services/ai-compliance-assistant',
        icon: CheckCircle,
        color: 'from-green-500 to-emerald-500',
        features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment']
      },
      {
        name: 'Security Headers CSP',
        description: 'Implement content security policies',
        href: '/services/security-headers-csp',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500',
        features: ['Content Security', 'XSS Protection', 'Data Integrity']
      },
      {
        name: 'AI Cybersecurity Platform',
        description: 'AI-powered security platform',
        href: '/services/ai-cybersecurity-platform',
        icon: Shield,
        color: 'from-red-500 to-orange-500',
        features: ['Threat Detection', 'Incident Response', 'Security Analytics'],
        featured: true
      },
      {
        name: 'DSR Privacy Portal',
        description: 'Data subject rights portal',
        href: '/services/dsr-portal',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500',
        features: ['Privacy Management', 'Data Rights', 'Compliance']
      }
    ]
  },
  {
    title: 'Emerging Technologies',
    description: 'Quantum computing, IoT, and cutting-edge tech',
    icon: Atom,
    color: 'from-purple-500 to-pink-500',
    services: [
      {
        name: 'Quantum Computing',
        description: 'Quantum computing solutions',
        href: '/services/quantum-computing',
        icon: Atom,
        color: 'from-purple-500 to-pink-500',
        features: ['Quantum Algorithms', 'Performance Optimization', 'Research Support'],
        featured: true
      },
      {
        name: 'IoT Edge Computing',
        description: 'Edge computing infrastructure',
        href: '/services/iot-edge-computing',
        icon: Network,
        color: 'from-blue-500 to-cyan-500',
        features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics']
      },
      {
        name: 'AI Quantum Hybrid Platform',
        description: 'Quantum-AI integration',
        href: '/services/ai-quantum-hybrid-platform',
        icon: Atom,
        color: 'from-purple-500 to-pink-500',
        features: ['Quantum-AI Integration', 'Performance Optimization', 'Research Support']
      },
      {
        name: 'Space Technology',
        description: 'Space technology solutions',
        href: '/space-tech',
        icon: Satellite,
        color: 'from-indigo-500 to-purple-500',
        features: ['Satellite Technology', 'Space Research', 'Innovation']
      },
      {
        name: 'Digital Twin',
        description: 'Digital twin technology',
        href: '/services/digital-twin',
        icon: Eye,
        color: 'from-blue-500 to-cyan-500',
        features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics']
      },
      {
        name: 'Digital Transformation',
        description: 'Digital transformation consulting',
        href: '/services/digital-transformation',
        icon: Rocket,
        color: 'from-purple-500 to-pink-500',
        features: ['Process Optimization', 'Technology Integration', 'Change Management']
      }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Specialized software solutions for specific business needs',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    services: [
      {
        name: 'AI Sales Copilot',
        description: 'AI-powered sales assistance and automation',
        href: '/services/ai-sales-copilot',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
        features: ['Lead Generation', 'Sales Automation', 'Performance Analytics']
      },
      {
        name: 'AI Auto Email Responder',
        description: 'Automated email response system',
        href: '/services/ai-auto-email-responder',
        icon: Mail,
        color: 'from-green-500 to-emerald-500',
        features: ['Email Automation', 'Response Templates', 'Sentiment Analysis']
      },
      {
        name: 'Customer Feedback Surveys',
        description: 'Automated customer feedback collection',
        href: '/services/customer-feedback-surveys',
        icon: MessageCircle,
        color: 'from-blue-500 to-cyan-500',
        features: ['Survey Creation', 'Response Collection', 'Analytics']
      },
      {
        name: 'AI Compliance Copilot',
        description: 'AI-powered compliance management',
        href: '/services/ai-compliance-copilot',
        icon: Shield,
        color: 'from-green-500 to-emerald-500',
        features: ['Compliance Monitoring', 'Risk Assessment', 'Reporting']
      },
      {
        name: 'LLM Content Studio',
        description: 'AI-powered content creation platform',
        href: '/services/llm-content-studio',
        icon: FileText,
        color: 'from-purple-500 to-pink-500',
        features: ['Content Generation', 'AI Writing', 'SEO Optimization']
      },
      {
        name: 'FinOps Advisor',
        description: 'Financial operations optimization',
        href: '/services/finops-advisor',
        icon: DollarSign,
        color: 'from-green-500 to-emerald-500',
        features: ['Cost Optimization', 'Budget Management', 'Financial Planning']
      },
      {
        name: 'Returns Management',
        description: 'Streamlined returns processing system',
        href: '/services/returns-management',
        icon: Truck,
        color: 'from-blue-500 to-cyan-500',
        features: ['Returns Processing', 'Inventory Management', 'Customer Service']
      },
      {
        name: 'Email Sequencer',
        description: 'Automated email sequence management',
        href: '/services/email-sequencer',
        icon: Mail,
        color: 'from-purple-500 to-pink-500',
        features: ['Email Sequences', 'Automation', 'Performance Tracking']
      },
      {
        name: 'Podcast Transcription',
        description: 'AI-powered podcast transcription service',
        href: '/services/podcast-transcription',
        icon: Video,
        color: 'from-blue-500 to-cyan-500',
        features: ['Audio Transcription', 'Text Editing', 'Export Options']
      },
      {
        name: 'Micro CRM',
        description: 'Lightweight customer relationship management',
        href: '/services/micro-crm',
        icon: Users,
        color: 'from-green-500 to-emerald-500',
        features: ['Contact Management', 'Sales Tracking', 'Customer Insights']
      },
      {
        name: 'Website Analytics',
        description: 'Comprehensive website performance analytics',
        href: '/services/website-analytics',
        icon: BarChart3,
        color: 'from-blue-500 to-cyan-500',
        features: ['Performance Metrics', 'User Behavior', 'Conversion Tracking']
      },
      {
        name: 'IT Helpdesk',
        description: 'IT support and ticket management system',
        href: '/services/it-helpdesk',
        icon: HelpCircle,
        color: 'from-gray-500 to-slate-500',
        features: ['Ticket Management', 'Knowledge Base', 'Support Automation']
      },
      {
        name: 'Affiliate Tracking',
        description: 'Affiliate marketing tracking and analytics',
        href: '/services/affiliate-tracking',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-500',
        features: ['Affiliate Management', 'Performance Tracking', 'Commission Calculation']
      },
      {
        name: 'Mobile Survey',
        description: 'Mobile-optimized survey platform',
        href: '/services/mobile-survey',
        icon: Smartphone,
        color: 'from-blue-500 to-cyan-500',
        features: ['Mobile Optimization', 'Survey Creation', 'Response Collection']
      }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = selectedCategory
    ? serviceCategories.filter(cat => cat.title === selectedCategory)
    : serviceCategories;

  const filteredServices = searchTerm
    ? serviceCategories.flatMap(cat => 
        cat.services.filter(service => 
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate-dark to-zion-slate opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered solutions, cloud infrastructure, 
              cybersecurity, and emerging technology services designed to transform your business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <SearchIcon className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300">
              Explore our most popular and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={service.href}
                  className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300">
              Browse our comprehensive range of services by category
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.title
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={service.href}
                      className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105 h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        {service.featured && (
                          <Star className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Search Results
              </h2>
              <p className="text-xl text-gray-300">
                Found {filteredServices.length} services matching "{searchTerm}"
              </p>
            </motion.div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={`${service.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={service.href}
                      className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105 h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        {service.featured && (
                          <Star className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-300 mb-4">
                  No services found matching "{searchTerm}"
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss how our services can transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <a
                  href={contact.href}
                  className="text-white hover:text-zion-cyan transition-colors duration-300"
                >
                  {contact.text}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Search Icon Component
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}