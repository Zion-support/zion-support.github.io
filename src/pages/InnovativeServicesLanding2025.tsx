import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  BarChart,
  MessageCircle,
  ShoppingCart,
  HelpCircle,
  BookOpen,
  Heart,
  Atom,
  Gauge,
  PenTool
} from 'lucide-react';

const InnovativeServicesLanding2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 12 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket, count: 15 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 6 },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, count: 9 },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart3, count: 11 }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-sales-copilot',
      category: 'ai',
      icon: Bot,
      title: "AI Sales Copilot",
      description: "Intelligent sales automation with AI-powered lead scoring, personalized outreach, and predictive analytics.",
      features: ["Lead Scoring", "Personalized Outreach", "Predictive Analytics", "CRM Integration", "Performance Tracking"],
      pricing: "$299/month",
      marketPrice: "$500-800/month",
      benefits: ["Increase sales by 40%", "Reduce manual work by 60%", "Improve conversion rates"],
      link: "/services/ai-sales-copilot",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'ai-compliance-assistant',
      category: 'ai',
      icon: ShieldCheck,
      title: "AI Compliance Assistant",
      description: "Automated compliance monitoring and reporting for SOC2, ISO, GDPR, and other regulatory frameworks.",
      features: ["Automated Monitoring", "Real-time Alerts", "Compliance Reports", "Audit Trails", "Policy Management"],
      pricing: "$199/month",
      marketPrice: "$300-600/month",
      benefits: ["Ensure 100% compliance", "Reduce audit time by 70%", "Automated evidence collection"],
      link: "/services/ai-compliance-assistant",
      featured: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'ai-workflow-orchestrator',
      category: 'ai',
      icon: GitFork,
      title: "AI Workflow Orchestrator",
      description: "Intelligent process automation that learns and optimizes your business workflows in real-time.",
      features: ["Process Learning", "Automated Optimization", "Real-time Monitoring", "Performance Analytics", "Integration Hub"],
      pricing: "$399/month",
      marketPrice: "$600-1200/month",
      benefits: ["Reduce process time by 50%", "Eliminate bottlenecks", "Continuous improvement"],
      link: "/services/ai-workflow-orchestrator",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'ai-content-generator',
      category: 'ai',
      icon: PenTool,
      title: "AI Content Generator",
      description: "Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
      features: ["SEO Optimization", "Brand Voice Consistency", "Multi-format Output", "Plagiarism Check", "Performance Analytics"],
      pricing: "$99/month",
      marketPrice: "$150-300/month",
      benefits: ["10x content production", "Improve SEO rankings", "Maintain brand consistency"],
      link: "/services/ai-content-generator",
      featured: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 'ai-customer-support',
      category: 'ai',
      icon: MessageCircle,
      title: "AI Customer Support",
      description: "24/7 intelligent customer support with natural language processing and seamless human handoff.",
      features: ["24/7 Availability", "Natural Language Processing", "Human Handoff", "Knowledge Base", "Performance Analytics"],
      pricing: "$199/month",
      marketPrice: "$300-800/month",
      benefits: ["Reduce support costs by 60%", "Improve customer satisfaction", "Handle 80% of queries automatically"],
      link: "/services/ai-customer-support",
      featured: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 'ai-data-analytics',
      category: 'ai',
      icon: BarChart3,
      title: "AI Data Analytics",
      description: "Advanced business intelligence with predictive analytics and automated insights generation.",
      features: ["Predictive Analytics", "Automated Insights", "Real-time Dashboards", "Data Integration", "Custom Reports"],
      pricing: "$299/month",
      marketPrice: "$500-1500/month",
      benefits: ["Uncover hidden patterns", "Make data-driven decisions", "Predict future trends"],
      link: "/services/ai-data-analytics",
      featured: false,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 'ai-marketing-automation',
      category: 'ai',
      icon: Target,
      title: "AI Marketing Automation",
      description: "Intelligent marketing campaigns with personalized content, A/B testing, and performance optimization.",
      features: ["Personalized Content", "A/B Testing", "Performance Optimization", "Multi-channel Campaigns", "ROI Tracking"],
      pricing: "$249/month",
      marketPrice: "$400-1000/month",
      benefits: ["Increase conversion rates by 35%", "Reduce marketing costs", "Personalized customer experience"],
      link: "/services/ai-marketing-automation",
      featured: false,
      color: "from-pink-500 to-red-500"
    },
    {
      id: 'ai-hr-platform',
      category: 'ai',
      icon: Users,
      title: "AI HR Platform",
      description: "Intelligent HR management with automated recruitment, performance tracking, and employee engagement.",
      features: ["Automated Recruitment", "Performance Tracking", "Employee Engagement", "Skills Assessment", "Compliance Management"],
      pricing: "$179/month",
      marketPrice: "$250-600/month",
      benefits: ["Reduce hiring time by 50%", "Improve employee retention", "Streamline HR processes"],
      link: "/services/ai-hr-platform",
      featured: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 'ai-predictive-maintenance',
      category: 'ai',
      icon: Cpu,
      title: "AI Predictive Maintenance",
      description: "Predict equipment failures before they happen with IoT sensors and machine learning algorithms.",
      features: ["IoT Integration", "Predictive Alerts", "Maintenance Scheduling", "Cost Optimization", "Performance Analytics"],
      pricing: "$399/month",
      marketPrice: "$800-2000/month",
      benefits: ["Reduce downtime by 80%", "Lower maintenance costs", "Extend equipment lifespan"],
      link: "/services/ai-predictive-maintenance",
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 'ai-cybersecurity',
      category: 'ai',
      icon: Shield,
      title: "AI Cybersecurity",
      description: "Advanced threat detection and response using artificial intelligence and machine learning.",
      features: ["Threat Detection", "Automated Response", "Behavioral Analysis", "Incident Management", "Compliance Reporting"],
      pricing: "$299/month",
      marketPrice: "$500-1500/month",
      benefits: ["Detect threats 10x faster", "Reduce false positives", "Automated incident response"],
      link: "/services/ai-cybersecurity",
      featured: false,
      color: "from-red-500 to-pink-500"
    },

    // Cloud & DevOps Services
    {
      id: 'cloud-devops',
      category: 'cloud',
      icon: Cloud,
      title: "Cloud DevOps Platform",
      description: "End-to-end DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Cost Optimization", "Security Compliance"],
      pricing: "$199/month",
      marketPrice: "$300-800/month",
      benefits: ["Deploy 10x faster", "Reduce infrastructure costs", "Improve reliability"],
      link: "/services/cloud-devops",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'cloud-finops-optimizer',
      category: 'cloud',
      icon: DollarSign,
      title: "Cloud FinOps Optimizer",
      description: "Optimize cloud costs with intelligent resource management and spending analytics.",
      features: ["Cost Analytics", "Resource Optimization", "Budget Management", "Automated Scaling", "ROI Tracking"],
      pricing: "$149/month",
      marketPrice: "$200-500/month",
      benefits: ["Reduce cloud costs by 30%", "Optimize resource usage", "Improve budget control"],
      link: "/services/cloud-finops-optimizer",
      featured: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'zero-trust-network-access',
      category: 'security',
      icon: Lock,
      title: "Zero Trust Network Access",
      description: "Secure remote access with zero-trust principles and continuous authentication.",
      features: ["Continuous Authentication", "Micro-segmentation", "Access Control", "Audit Logging", "Compliance Reporting"],
      pricing: "$249/month",
      marketPrice: "$400-1000/month",
      benefits: ["Eliminate VPN vulnerabilities", "Improve security posture", "Simplify access management"],
      link: "/services/zero-trust-network-access",
      featured: true,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 'security-headers-csp',
      category: 'security',
      icon: ShieldCheck,
      title: "Security Headers & CSP",
      description: "Automated security headers implementation and Content Security Policy management.",
      features: ["Automated Headers", "CSP Management", "Security Monitoring", "Compliance Checking", "Performance Optimization"],
      pricing: "$79/month",
      marketPrice: "$100-300/month",
      benefits: ["Improve security score", "Meet compliance requirements", "Protect against attacks"],
      link: "/services/security-headers-csp",
      featured: false,
      color: "from-purple-500 to-indigo-500"
    },

    // Micro-SaaS Services
    {
      id: 'micro-crm',
      category: 'micro-saas',
      icon: Users,
      title: "Micro CRM",
      description: "Lightweight CRM designed for small businesses with essential features and AI-powered insights.",
      features: ["Contact Management", "Lead Tracking", "Sales Pipeline", "AI Insights", "Mobile App"],
      pricing: "$49/month",
      marketPrice: "$75-150/month",
      benefits: ["Simple and intuitive", "Affordable pricing", "Essential CRM features"],
      link: "/services/micro-crm",
      featured: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 'website-analytics',
      category: 'analytics',
      icon: Gauge,
      title: "Website Analytics",
      description: "Privacy-first website analytics with GDPR compliance and actionable insights.",
      features: ["Privacy Compliant", "Real-time Analytics", "Custom Dashboards", "Performance Monitoring", "SEO Insights"],
      pricing: "$29/month",
      marketPrice: "$50-100/month",
      benefits: ["GDPR compliant", "No cookie banners needed", "Actionable insights"],
      link: "/services/website-analytics",
      featured: false,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 'it-helpdesk',
      category: 'micro-saas',
      icon: HelpCircle,
      title: "IT Helpdesk Platform",
      description: "Complete IT support platform with ticket management, knowledge base, and AI-powered solutions.",
      features: ["Ticket Management", "Knowledge Base", "AI Solutions", "SLA Management", "Reporting"],
      pricing: "$99/month",
      marketPrice: "$150-400/month",
      benefits: ["Streamline IT support", "Improve response times", "Reduce support costs"],
      link: "/services/it-helpdesk",
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 'affiliate-tracking',
      category: 'micro-saas',
      icon: ShoppingCart,
      title: "Affiliate Tracking Platform",
      description: "Complete affiliate marketing platform with tracking, reporting, and commission management.",
      features: ["Affiliate Tracking", "Commission Management", "Performance Analytics", "Payment Processing", "Marketing Tools"],
      pricing: "$79/month",
      marketPrice: "$100-300/month",
      benefits: ["Increase affiliate sales", "Automate commission payments", "Track performance"],
      link: "/services/affiliate-tracking",
      featured: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'mobile-survey',
      category: 'micro-saas',
      icon: Smartphone,
      title: "Mobile Survey Platform",
      description: "Mobile-first survey platform with AI-powered insights and real-time analytics.",
      features: ["Mobile-First Design", "AI Insights", "Real-time Analytics", "Custom Templates", "Multi-language Support"],
      pricing: "$39/month",
      marketPrice: "$60-150/month",
      benefits: ["Mobile-optimized", "AI-powered insights", "Easy to use"],
      link: "/services/mobile-survey",
      featured: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'ai-powered-seo',
      category: 'ai',
      icon: Search,
      title: "AI-Powered SEO",
      description: "Intelligent SEO optimization with semantic analysis and automated content recommendations.",
      features: ["Semantic Analysis", "Content Recommendations", "Keyword Research", "Performance Tracking", "Competitor Analysis"],
      pricing: "$199/month",
      marketPrice: "$300-800/month",
      benefits: ["Improve search rankings", "Increase organic traffic", "Optimize content"],
      link: "/services/ai-powered-seo",
      featured: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'interview-assessment-ai',
      category: 'ai',
      icon: Users,
      title: "Interview Assessment AI",
      description: "AI-powered interview platform with automated scoring and candidate evaluation.",
      features: ["Automated Scoring", "Candidate Evaluation", "Interview Templates", "Performance Analytics", "Integration APIs"],
      pricing: "$149/month",
      marketPrice: "$200-600/month",
      benefits: ["Standardize interviews", "Reduce bias", "Improve hiring quality"],
      link: "/services/interview-assessment-ai",
      featured: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 'helpdesk-platform',
      category: 'micro-saas',
      icon: MessageCircle,
      title: "Helpdesk Platform",
      description: "Complete customer support platform with tickets, knowledge base, and AI-powered chat.",
      features: ["Ticket Management", "Knowledge Base", "AI Chat", "Multi-channel Support", "Performance Analytics"],
      pricing: "$89/month",
      marketPrice: "$120-400/month",
      benefits: ["Improve customer support", "Reduce response times", "Increase satisfaction"],
      link: "/services/helpdesk-platform",
      featured: false,
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 'dsr-portal',
      category: 'security',
      icon: Shield,
      title: "DSR Privacy Portal",
      description: "GDPR and CCPA compliance portal for data subject rights management.",
      features: ["Data Subject Rights", "Automated Workflows", "Compliance Reporting", "Audit Trails", "Integration APIs"],
      pricing: "$129/month",
      marketPrice: "$200-500/month",
      benefits: ["Ensure GDPR compliance", "Automate DSR requests", "Reduce legal risks"],
      link: "/services/dsr-portal",
      featured: false,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 'ai-autonomous-code-reviewer',
      category: 'ai',
      icon: Code,
      title: "AI Autonomous Code Reviewer",
      description: "Automated code review with AI-powered analysis and security vulnerability detection.",
      features: ["Automated Review", "Security Analysis", "Code Quality", "Performance Optimization", "Integration APIs"],
      pricing: "$199/month",
      marketPrice: "$300-800/month",
      benefits: ["Reduce review time", "Improve code quality", "Detect security issues"],
      link: "/services/ai-autonomous-code-reviewer",
      featured: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'llm-content-studio',
      category: 'ai',
      icon: BookOpen,
      title: "LLM Content Studio",
      description: "AI-powered content creation platform with brand voice consistency and SEO optimization.",
      features: ["Brand Voice", "SEO Optimization", "Multi-format Output", "Collaboration Tools", "Performance Analytics"],
      pricing: "$149/month",
      marketPrice: "$200-500/month",
      benefits: ["Maintain brand consistency", "Improve SEO", "Scale content creation"],
      link: "/services/llm-content-studio",
      featured: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 'finops-advisor',
      category: 'cloud',
      icon: DollarSign,
      title: "FinOps Advisor",
      description: "Cloud financial operations optimization with cost analysis and resource management.",
      features: ["Cost Analysis", "Resource Optimization", "Budget Management", "ROI Tracking", "Automated Alerts"],
      pricing: "$179/month",
      marketPrice: "$250-600/month",
      benefits: ["Reduce cloud costs", "Optimize resources", "Improve ROI"],
      link: "/services/finops-advisor",
      featured: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'returns-management',
      category: 'micro-saas',
      icon: ShoppingCart,
      title: "Returns Management",
      description: "Automated e-commerce returns processing with customer self-service and analytics.",
      features: ["Self-service Portal", "Automated Processing", "Analytics Dashboard", "Integration APIs", "Customer Communication"],
      pricing: "$69/month",
      marketPrice: "$100-300/month",
      benefits: ["Reduce return processing time", "Improve customer experience", "Gain insights"],
      link: "/services/returns-management",
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 'email-sequencer',
      category: 'micro-saas',
      icon: MessageSquare,
      title: "Email Sequencer",
      description: "Automated email follow-up sequences with personalization and performance tracking.",
      features: ["Automated Sequences", "Personalization", "Performance Tracking", "A/B Testing", "Integration APIs"],
      pricing: "$49/month",
      marketPrice: "$75-200/month",
      benefits: ["Automate follow-ups", "Improve conversion rates", "Save time"],
      link: "/services/email-sequencer",
      featured: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 'podcast-transcription',
      category: 'ai',
      icon: BookOpen,
      title: "Podcast Transcription",
      description: "AI-powered podcast transcription with automatic timestamps and content analysis.",
      features: ["AI Transcription", "Automatic Timestamps", "Content Analysis", "Multi-language Support", "Export Options"],
      pricing: "$39/month",
      marketPrice: "$60-150/month",
      benefits: ["Accurate transcriptions", "Save time", "Improve accessibility"],
      link: "/services/podcast-transcription",
      featured: false,
      color: "from-purple-500 to-pink-500"
    },

    // Quantum Computing Services
    {
      id: 'quantum-computing-solutions',
      category: 'quantum',
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing services for optimization, cryptography, and research.",
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Research Support", "Cloud Access"],
      pricing: "$999/month",
      marketPrice: "$2000-5000/month",
      benefits: ["Solve complex problems", "Future-proof technology", "Competitive advantage"],
      link: "/services/quantum-computing-solutions",
      featured: true,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 'quantum-machine-learning',
      category: 'quantum',
      icon: Brain,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced machine learning algorithms for superior performance and accuracy.",
      features: ["Quantum ML Algorithms", "Enhanced Performance", "Quantum Data Processing", "Research Collaboration", "Custom Solutions"],
      pricing: "$799/month",
      marketPrice: "$1500-4000/month",
      benefits: ["Superior ML performance", "Quantum advantage", "Research innovation"],
      link: "/services/quantum-machine-learning",
      featured: false,
      color: "from-blue-500 to-purple-500"
    },

    // IoT & Edge Services
    {
      id: 'iot-edge-computing',
      category: 'iot',
      icon: Cpu,
      title: "IoT Edge Computing",
      description: "Edge computing solutions for IoT devices with real-time processing and analytics.",
      features: ["Edge Processing", "Real-time Analytics", "Device Management", "Security", "Scalability"],
      pricing: "$299/month",
      marketPrice: "$500-1500/month",
      benefits: ["Reduce latency", "Lower bandwidth costs", "Real-time insights"],
      link: "/services/iot-edge-computing",
      featured: true,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 'digital-twin',
      category: 'iot',
      icon: Rocket,
      title: "Digital Twin Platform",
      description: "Create digital replicas of physical assets for monitoring, simulation, and optimization.",
      features: ["3D Modeling", "Real-time Monitoring", "Simulation Engine", "Predictive Analytics", "Integration APIs"],
      pricing: "$399/month",
      marketPrice: "$800-2000/month",
      benefits: ["Optimize operations", "Predict failures", "Reduce costs"],
      link: "/services/digital-twin",
      featured: false,
      color: "from-orange-500 to-red-500"
    },

    // Additional Innovative Services
    {
      id: 'ai-project-manager',
      category: 'ai',
      icon: Target,
      title: "AI Project Manager",
      description: "Intelligent project management with automated task allocation and progress tracking.",
      features: ["Task Automation", "Progress Tracking", "Resource Allocation", "Risk Management", "Performance Analytics"],
      pricing: "$199/month",
      marketPrice: "$300-800/month",
      benefits: ["Improve project success rates", "Reduce management overhead", "Optimize resource usage"],
      link: "/services/ai-project-manager",
      featured: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 'sustainable-technology',
      category: 'analytics',
      icon: Globe,
      title: "Sustainable Technology",
      description: "Green IT solutions for reducing carbon footprint and improving sustainability.",
      features: ["Carbon Tracking", "Energy Optimization", "Sustainability Reporting", "Green Certifications", "Cost Savings"],
      pricing: "$149/month",
      marketPrice: "$200-600/month",
      benefits: ["Reduce carbon footprint", "Lower energy costs", "Meet sustainability goals"],
      link: "/services/sustainable-technology",
      featured: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Revolutionary Tech Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              2025 & Beyond
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Discover our cutting-edge micro SAAS, AI, and IT services designed to transform your business. 
            From quantum computing to intelligent automation, we're building the future of technology.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#services" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 ${
                  service.featured ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-yellow-400 text-zion-slate-dark px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-sm text-zion-slate-light ml-2">/month</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-zion-slate-light line-through">{service.marketPrice}</span>
                      <span className="text-xs text-green-400 ml-2">market rate</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={service.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {contactInfo.email}
              </a>
            </div>
            <div className="text-blue-100">
              <p className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                {contactInfo.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="hover:underline">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">45+</div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesLanding2025;