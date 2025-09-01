import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Settings,
  BarChart,
  PieChart,
  Activity,
  TrendingDown,
  Eye,
  EyeOff,
  Download,
  Share2,
  Bookmark,
  Heart as HeartIcon,
  Robot,
  Microscope,
  TestTube,
  Flask,
  Atom,
  Rocket,
  Satellite,
  Telescope,
  DNA,
  Pill,
  Stethoscope,
  Calculator,
  ChartBar,
  Cog,
  Wrench,
  Hammer,
  Paintbrush,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Home,
  Store,
  Bank,
  GraduationCap,
  Briefcase,
  UserCheck,
  UserPlus,
  Users2,
  UserX,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheck2,
  UserPlus2,
  UserX2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserHeart2,
  UserStar2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeAIServices2025() {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const aiServices = [
    // AI-Powered Business Intelligence
    {

      id: "ai-business-intelligence-suite",
      title: "AI Business Intelligence Suite",
      description: "Advanced AI-powered BI platform with natural language queries, predictive analytics, and automated insights generation. Transforms raw data into actionable business intelligence with 95% accuracy.",
      category: "AI & Business Intelligence",
      price: 4999,
      currency: "$",
      features: [
        "Natural Language Queries",
        "Predictive Analytics",
        "Automated Insights",
        "Real-time Dashboards",
        "Multi-source Data Integration",
        "Advanced Visualization",
        "Custom Reports",
        "Mobile Access"
      ],
      benefits: [
        "95% accuracy in data analysis",
        "10x faster insights generation",
        "Reduced manual reporting by 80%",
        "Improved decision-making speed",
        "Real-time business monitoring"
      ],
      useCases: [
        "Financial Analysis",
        "Sales Performance",
        "Customer Behavior",
        "Operational Efficiency",
        "Market Trends"
      ],
      integrations: ["Salesforce", "HubSpot", "QuickBooks", "NetSuite", "AWS", "Azure"],
      setupTime: "4-6 weeks",
      roi: "500% within 6 months",
      marketPrice: "$4,000-8,000",
      competitors: ["Tableau", "Power BI", "Qlik"],
      rating: 4.9,
      reviewCount: 342,
      featured: true,
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },

    // AI-Powered Healthcare Platform
    {

      id: "ai-healthcare-platform",
      title: "AI Healthcare Platform",
      description: "Comprehensive AI healthcare platform with diagnostic assistance, patient monitoring, and treatment optimization. Improves diagnostic accuracy by 35% and reduces treatment costs by 25%.",
      category: "AI & Healthcare",
      price: 8999,
      currency: "$",
      features: [
        "Diagnostic Assistance",
        "Patient Monitoring",
        "Treatment Optimization",
        "Medical Image Analysis",
        "Predictive Health Analytics",
        "Drug Interaction Checking",
        "Patient Risk Assessment",
        "HIPAA Compliant"
      ],
      benefits: [
        "35% improvement in diagnostic accuracy",
        "25% reduction in treatment costs",
        "Faster patient diagnosis",
        "Improved patient outcomes",
        "Reduced medical errors"
      ],
      useCases: [
        "Radiology",
        "Pathology",
        "Cardiology",
        "Oncology",
        "General Practice"
      ],
      integrations: ["Epic", "Cerner", "Allscripts", "Practice Fusion", "Kareo"],
      setupTime: "10-14 weeks",
      roi: "400% within 18 months",
      marketPrice: "$7,000-15,000",
      competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare"],
      rating: 4.9,
      reviewCount: 178,
      featured: true,
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },

    // AI-Powered Content Creation
    {

      id: "ai-content-creation-studio",
      title: "AI Content Creation Studio",
      description: "Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice consistency. Generates high-quality content 10x faster with 95% accuracy.",
      category: "AI & Content",
      price: 299,
      currency: "$",
      features: [
        "Multi-language Support",
        "SEO Optimization",
        "Brand Voice Consistency",
        "Content Templates",
        "Plagiarism Detection",
        "Grammar Checking",
        "Content Scheduling",
        "Performance Analytics"
      ],
      benefits: [
        "10x faster content creation",
        "95% accuracy in content generation",
        "Improved SEO rankings",
        "Consistent brand voice",
        "Reduced content costs"
      ],
      useCases: [
        "Blog Writing",
        "Social Media Content",
        "Marketing Copy",
        "Product Descriptions",
        "Technical Documentation"
      ],
      integrations: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Google Docs"],
      setupTime: "Immediate",
      roi: "400% within 3 months",
      marketPrice: "$250-500/month",
      competitors: ["Jasper", "Copy.ai", "Writesonic"],
      rating: 4.8,
      reviewCount: 156,
      featured: true,
      icon: FileText,
      color: "from-orange-500 to-red-500"
    },

    // AI-Powered Cybersecurity
    {

      id: "ai-cybersecurity-platform",
      title: "AI Cybersecurity Platform",
      description: "Intelligent cybersecurity platform with AI-powered threat detection, behavioral analysis, and automated response. Detects threats 10x faster and reduces false positives by 90%.",
      category: "AI & Cybersecurity",
      price: 6999,
      currency: "$",
      features: [
        "AI Threat Detection",
        "Behavioral Analysis",
        "Automated Response",
        "Real-time Monitoring",
        "Incident Management",
        "Compliance Reporting",
        "Threat Intelligence",
        "Zero-day Protection"
      ],
      benefits: [
        "10x faster threat detection",
        "90% reduction in false positives",
        "24/7 automated monitoring",
        "Proactive threat prevention",
        "Reduced security incidents"
      ],
      useCases: [
        "Network Security",
        "Endpoint Protection",
        "Cloud Security",
        "Application Security",
        "Data Protection"
      ],
      integrations: ["Active Directory", "Okta", "Duo", "CrowdStrike", "Splunk"],
      setupTime: "6-8 weeks",
      roi: "600% within 8 months",
      marketPrice: "$5,000-12,000",
      competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet"],
      rating: 4.9,
      reviewCount: 267,
      featured: true,
      icon: Shield,
      color: "from-green-500 to-blue-500"
    },

    // AI-Powered Customer Support
    {

      id: "ai-customer-support-automation",
      title: "AI Customer Support Automation",
      description: "Intelligent customer support automation with 24/7 availability, multilingual support, and seamless human handoff. Reduces response time by 90% and increases customer satisfaction by 85%.",
      category: "AI & Customer Support",
      price: 199,
      currency: "$",
      features: [
        "24/7 Availability",
        "Multilingual Support",
        "Human Handoff",
        "Sentiment Analysis",
        "Ticket Routing",
        "Knowledge Base",
        "Live Chat Integration",
        "Performance Analytics"
      ],
      benefits: [
        "90% reduction in response time",
        "85% increase in customer satisfaction",
        "24/7 customer support",
        "Reduced support costs",
        "Improved customer retention"
      ],
      useCases: [
        "E-commerce Support",
        "SaaS Customer Service",
        "Technical Support",
        "Sales Support",
        "General Inquiries"
      ],
      integrations: ["Slack", "Discord", "WhatsApp", "Facebook Messenger", "Website"],
      setupTime: "1-2 days",
      roi: "350% within 4 months",
      marketPrice: "$150-400/month",
      competitors: ["Intercom", "Zendesk", "Freshdesk"],
      rating: 4.9,
      reviewCount: 203,
      featured: true,
      icon: MessageSquare,
      color: "from-blue-500 to-purple-500"
    },

    // AI-Powered HR & Recruitment
    {

      id: "ai-hr-recruitment-suite",
      title: "AI HR & Recruitment Suite",
      description: "Comprehensive HR platform with AI-powered candidate screening, skill assessment, and cultural fit analysis. Reduces hiring time by 60% and improves candidate quality by 75%.",
      category: "AI & HR",
      price: 399,
      currency: "$",
      features: [
        "AI Candidate Screening",
        "Skill Assessment",
        "Cultural Fit Analysis",
        "Resume Parsing",
        "Interview Scheduling",
        "Performance Tracking",
        "Employee Analytics",
        "Compliance Management"
      ],
      benefits: [
        "60% reduction in hiring time",
        "75% improvement in candidate quality",
        "Reduced hiring bias",
        "Better cultural fit",
        "Improved retention rates"
      ],
      useCases: [
        "Talent Acquisition",
        "Employee Onboarding",
        "Performance Management",
        "Training & Development",
        "Succession Planning"
      ],
      integrations: ["LinkedIn", "Indeed", "Glassdoor", "Slack", "Microsoft Teams"],
      setupTime: "3-5 days",
      roi: "300% within 6 months",
      marketPrice: "$300-800/month",
      competitors: ["BambooHR", "Workday", "Greenhouse"],
      rating: 4.7,
      reviewCount: 89,
      featured: true,
      icon: Users,
      color: "from-indigo-500 to-blue-500"
    },

    // AI-Powered Legal Tech
    {

      id: "ai-legal-document-analysis",
      title: "AI Legal Document Analysis",
      description: "Advanced legal document analysis platform with contract review, risk assessment, and compliance checking. Processes legal documents 20x faster with 98% accuracy.",
      category: "AI & Legal Tech",
      price: 599,
      currency: "$",
      features: [
        "Contract Review",
        "Risk Assessment",
        "Compliance Checking",
        "Document Classification",
        "Legal Research",
        "Case Law Analysis",
        "Regulatory Updates",
        "Audit Trail"
      ],
      benefits: [
        "20x faster document processing",
        "98% accuracy in analysis",
        "Reduced legal costs",
        "Improved compliance",
        "Faster decision making"
      ],
      useCases: [
        "Contract Review",
        "Due Diligence",
        "Compliance Audits",
        "Legal Research",
        "Risk Assessment"
      ],
      integrations: ["DocuSign", "Adobe Acrobat", "Microsoft Word", "Google Docs"],
      setupTime: "5-7 days",
      roi: "500% within 8 months",
      marketPrice: "$500-1,200/month",
      competitors: ["DocuSign", "ContractPodAi", "Evisort"],
      rating: 4.9,
      reviewCount: 67,
      featured: true,
      icon: Scale,
      color: "from-blue-500 to-indigo-500"
    },

    // AI-Powered Financial Trading
    {

      id: "ai-financial-trading-platform",
      title: "AI Financial Trading Platform",
      description: "Intelligent trading platform with predictive analytics, risk management, and automated trading strategies. Increases trading accuracy by 40% and reduces risk by 60%.",
      category: "AI & FinTech",
      price: 799,
      currency: "$",
      features: [
        "Predictive Analytics",
        "Risk Management",
        "Automated Trading",
        "Portfolio Optimization",
        "Market Analysis",
        "Real-time Monitoring",
        "Performance Tracking",
        "Compliance Reporting"
      ],
      benefits: [
        "40% increase in trading accuracy",
        "60% reduction in risk",
        "Automated trading strategies",
        "Real-time market insights",
        "Improved portfolio performance"
      ],
      useCases: [
        "Stock Trading",
        "Forex Trading",
        "Cryptocurrency Trading",
        "Portfolio Management",
        "Risk Assessment"
      ],
      integrations: ["Bloomberg", "Reuters", "Yahoo Finance", "TradingView", "MetaTrader"],
      setupTime: "7-10 days",
      roi: "600% within 12 months",
      marketPrice: "$600-1,500/month",
      competitors: ["Alpaca", "Interactive Brokers", "TD Ameritrade"],
      rating: 4.8,
      reviewCount: 134,
      featured: true,
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500"
    },

    // AI-Powered Research & Development
    {

      id: "ai-research-development-platform",
      title: "AI Research & Development Platform",
      description: "Advanced AI-powered research and development platform with automated hypothesis testing, data analysis, and innovation management. Accelerates research by 5x and improves success rate by 70%.",
      category: "AI & Research",
      price: 899,
      currency: "$",
      features: [
        "Automated Hypothesis Testing",
        "Data Analysis",
        "Innovation Management",
        "Literature Review",
        "Experiment Design",
        "Results Analysis",
        "Collaboration Tools",
        "Progress Tracking"
      ],
      benefits: [
        "5x acceleration in research",
        "70% improvement in success rate",
        "Reduced research costs",
        "Better collaboration",
        "Faster innovation"
      ],
      useCases: [
        "Scientific Research",
        "Product Development",
        "Market Research",
        "Clinical Trials",
        "Academic Research"
      ],
      integrations: ["ResearchGate", "Academia.edu", "Mendeley", "PubMed", "arXiv"],
      setupTime: "10-14 days",
      roi: "400% within 15 months",
      marketPrice: "$700-1,800/month",
      competitors: ["ResearchGate", "Academia.edu", "Mendeley"],
      rating: 4.9,
      reviewCount: 56,
      featured: true,
      icon: Microscope,
      color: "from-purple-500 to-violet-500"
    },

    // AI-Powered Supply Chain
    {

      id: "ai-supply-chain-optimization",
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain optimization platform with demand forecasting, inventory management, and logistics optimization. Reduces supply chain costs by 30% and improves efficiency by 45%.",
      category: "AI & Operations",
      price: 699,
      currency: "$",
      features: [
        "Demand Forecasting",
        "Inventory Management",
        "Logistics Optimization",
        "Supplier Management",
        "Quality Control",
        "Cost Optimization",
        "Risk Assessment",
        "Performance Analytics"
      ],
      benefits: [
        "30% reduction in supply chain costs",
        "45% improvement in efficiency",
        "Better demand forecasting",
        "Reduced inventory costs",
        "Improved customer satisfaction"
      ],
      useCases: [
        "Manufacturing",
        "Retail",
        "E-commerce",
        "Logistics",
        "Distribution"
      ],
      integrations: ["SAP", "Oracle", "NetSuite", "QuickBooks", "Shopify"],
      setupTime: "7-10 days",
      roi: "350% within 10 months",
      marketPrice: "$500-1,200/month",
      competitors: ["SAP", "Oracle", "Manhattan Associates"],
      rating: 4.7,
      reviewCount: 112,
      featured: true,
      icon: Truck,
      color: "from-gray-500 to-slate-500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length, icon: '🤖', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: aiServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '📊', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: aiServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'AI & Content', name: 'AI & Content', count: aiServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Cybersecurity', name: 'AI & Cybersecurity', count: aiServices.filter(s => s.category === 'AI & Cybersecurity').length, icon: '🛡️', color: 'from-green-500 to-blue-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: aiServices.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: aiServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: aiServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', count: aiServices.filter(s => s.category === 'AI & FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Research', name: 'AI & Research', count: aiServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: aiServices.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' }
  ];

  const filteredServices = aiServices.filter(service => {

    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {

    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🤖';
  };

  const getCategoryColor = (category: string) => {

    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Innovative AI Services 2025 | Zion Tech Group"
        description="Discover cutting-edge AI services that transform businesses. From healthcare to finance, our AI solutions deliver proven ROI and industry-leading innovation."
        keywords="AI services, artificial intelligence, machine learning, business intelligence, healthcare AI, cybersecurity AI, customer support AI, HR AI, legal tech AI, fintech AI"
        canonical="https://ziontechgroup.com/innovative-ai-services-2025"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Innovative AI Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions designed for the future. 
              From healthcare to finance, our AI services deliver proven ROI and industry-leading innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">🤖</span> AI-Powered
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">📈</span> Proven ROI
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">🚀</span> Industry Leading
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-blue-200">💡</span> Innovative
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${

                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredServices.length} AI Services Found
          </h2>
          <p className="text-gray-600">
            {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.name}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Services Grid/List */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No AI services found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
            <button
              onClick={() => {

                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${

                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-gradient-to-br ${getCategoryColor(service.category)} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-white" />
                  </div>
                  
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    {service.rating}
                  </div>

                  {/* Reviews */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                    {service.reviewCount} reviews
                  </div>
                </div>

                {/* Service Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gray-500">{service.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                          <TrendingUp className="h-3 w-3 text-blue-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-500">Price</div>
                      <div className="text-lg font-bold text-blue-600">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">ROI</div>
                      <div className="font-semibold text-green-600">{service.roi}</div>
                      <div className="text-xs text-gray-500">
                        Setup: {service.setupTime}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Learn More
                    </Link>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our AI experts to discuss your specific needs and discover how our innovative AI services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Quote
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2 text-blue-300" />
              <div className="text-blue-100">+1 302 464 0950</div>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-2 text-blue-300" />
              <div className="text-blue-100">kleber@ziontechgroup.com</div>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-300" />
              <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}