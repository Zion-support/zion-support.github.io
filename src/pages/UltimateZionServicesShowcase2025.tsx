<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  ArrowUpRight,
  Calendar,
  BookOpen,
  Video,
  Headphones,
  Download,
  ExternalLink,
  TrendingUp,
  Globe2,
  Smartphone,
  Server2,
  Database2,
  Network2,
  Security,
  Analytics,
  Automation,
  Integration,
  Monitoring,
  Backup,
  Recovery,
  Compliance,
  Governance,
  Innovation,
  Research,
  Development,
  Consulting,
  Training,
  Support,
  Maintenance,
  Optimization,
  Scalability,
  Performance,
  Reliability,
  Security2,
  Privacy,
  Trust,
  Excellence,
  Quality,
  Value,
  ROI,
  Cost,
  Savings,
  Efficiency,
  Productivity,
  Growth,
  Success,
  Future,
  Technology,
  Digital,
  Smart,
  Intelligent,
  Advanced,
  Modern,
  Cutting,
  Edge,
  Revolutionary,
  Transformative,
  Disruptive,
  Innovative,
  Creative,
  Strategic,
  Tactical,
  Operational,
  Management,
  Leadership,
  Vision,
  Mission,
  Goals,
  Objectives,
  Strategy,
  Planning,
  Execution,
  Delivery,
  Implementation,
  Deployment,
  Integration,
  Migration,
  Upgrade,
  Modernization,
  Transformation,
  Change,
  Evolution,
  Revolution,
  Innovation2,
  Creativity,
  Design,
  Architecture,
  Engineering,
  Development2,
  Testing,
  Quality2,
  Assurance,
  Validation,
  Verification,
  Certification,
  Accreditation,
  Compliance2,
  Governance2,
  Risk,
  Management2,
  Security3,
  Privacy2,
  Trust2,
  Ethics,
  Responsibility,
  Sustainability,
  Environment,
  Social,
  Governance3,
  ESG,
  CSR,
  Impact,
  Value2,
  Purpose,
  Meaning,
  Vision2,
  Mission2,
  Goals2,
  Objectives2,
  Strategy2,
  Planning2,
  Execution2,
  Delivery2,
  Implementation2,
  Deployment2,
  Integration2,
  Migration2,
  Upgrade2,
  Modernization2,
  Transformation2,
  Change2,
  Evolution2,
  Revolution2,
  Innovation3,
  Creativity2,
  Design2,
  Architecture2,
  Engineering2,
  Development3,
  Testing2,
  Quality3,
  Assurance2,
  Validation2,
  Verification2,
  Certification2,
  Accreditation2,
  Compliance3,
  Governance4,
  Risk2,
  Management3,
  Security4,
  Privacy3,
  Trust3,
  Ethics2,
  Responsibility2,
  Sustainability2,
  Environment2,
  Social2,
  Governance5,
  ESG2,
  CSR2,
  Impact2,
  Value3,
  Purpose2,
  Meaning2
} from 'lucide-react';

export default function UltimateZionServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive service categories with new innovative services
  const serviceCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: Brain,
      color: 'from-cyan-400 to-blue-500',
      services: [
        {
          name: 'AI Autonomous Research Assistant',
          description: 'AI-powered research platform that autonomously discovers insights and generates reports',
          price: '$2,500/month',
          features: ['24/7 Research Automation', 'Multi-source Data Analysis', 'Custom Report Generation', 'Natural Language Processing'],
          href: '/services/ai-autonomous-research-assistant',
          category: 'AI & ML',
          popularity: 'Hot',
          new: true
        },
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced AI-powered security solutions for enterprise protection',
          price: '$3,200/month',
          features: ['Threat Detection', 'Zero Trust Security', 'Compliance Management', 'Incident Response'],
          href: '/services/ai-cybersecurity-platform',
          category: 'AI & ML',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'AI Healthcare Platform',
          description: 'Revolutionary healthcare solutions powered by artificial intelligence',
          price: '$4,500/month',
          features: ['Medical Diagnostics', 'Patient Care Optimization', 'Drug Discovery', 'Medical Imaging Analysis'],
          href: '/services/ai-healthcare-platform',
          category: 'AI & ML',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'AI Quantum Hybrid Platform',
          description: 'Next-generation computing combining AI and quantum technologies',
          price: '$8,500/month',
          features: ['Quantum ML Algorithms', 'Hybrid Computing', 'Quantum Security', 'Optimization Solutions'],
          href: '/services/ai-quantum-hybrid-platform',
          category: 'AI & ML',
          popularity: 'Premium',
          new: true
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management with predictive analytics',
          price: '$3,800/month',
          features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
          href: '/services/ai-supply-chain-optimization',
          category: 'AI & ML',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Comprehensive BI platform with AI-powered insights and analytics',
          price: '$2,800/month',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
          href: '/services/ai-business-intelligence',
          category: 'AI & ML',
          popularity: 'Hot',
          new: false
        },
        {
          name: 'AI Content Studio Pro',
          description: 'AI-powered content creation and optimization platform',
          price: '$1,200/month',
          features: ['Content Generation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Consistency'],
          href: '/services/llm-content-studio',
          category: 'AI & ML',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'AI Customer Experience Analytics',
          description: 'Advanced customer behavior analysis and sentiment tracking',
          price: '$2,200/month',
          features: ['Behavioral Analytics', 'Sentiment Analysis', 'Customer Journey Mapping', 'Predictive Modeling'],
          href: '/services/ai-customer-experience-analytics',
          category: 'AI & ML',
          popularity: 'Popular',
          new: false
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Specialized software-as-a-service solutions for specific business needs',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      services: [
        {
          name: 'Micro CRM Platform',
          description: 'Lightweight CRM solution for small to medium businesses',
          price: '$99/month',
          features: ['Contact Management', 'Sales Pipeline', 'Email Integration', 'Mobile App'],
          href: '/services/micro-crm',
          category: 'Micro SAAS',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'AI Email Auto-Responder',
          description: 'Intelligent email automation with AI-powered responses',
          price: '$150/month',
          features: ['Smart Response Generation', 'Email Classification', 'Automated Workflows', 'Analytics Dashboard'],
          href: '/services/ai-auto-email-responder',
          category: 'Micro SAAS',
          popularity: 'Hot',
          new: true
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation and process optimization',
          price: '$280/month',
          features: ['Process Automation', 'Workflow Design', 'Integration Hub', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator',
          category: 'Micro SAAS',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'AI Project Management Platform',
          description: 'AI-enhanced project management with predictive insights',
          price: '$320/month',
          features: ['Task Automation', 'Resource Optimization', 'Risk Assessment', 'Progress Tracking'],
          href: '/services/ai-project-management-platform',
          category: 'Micro SAAS',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'AI Marketing Automation Suite',
          description: 'Comprehensive marketing automation with AI optimization',
          price: '$450/month',
          features: ['Campaign Management', 'Lead Scoring', 'A/B Testing', 'ROI Analytics'],
          href: '/services/ai-marketing-automation',
          category: 'Micro SAAS',
          popularity: 'Hot',
          new: false
        },
        {
          name: 'AI HR Platform',
          description: 'Intelligent human resources management and analytics',
          price: '$380/month',
          features: ['Recruitment AI', 'Performance Analytics', 'Employee Engagement', 'Compliance Tracking'],
          href: '/services/ai-hr-platform',
          category: 'Micro SAAS',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'AI Financial Trading Platform',
          description: 'AI-powered trading platform with predictive analytics',
          price: '$1,200/month',
          features: ['Algorithmic Trading', 'Risk Management', 'Portfolio Optimization', 'Market Analysis'],
          href: '/services/ai-financial-trading-platform',
          category: 'Micro SAAS',
          popularity: 'Premium',
          new: true
        },
        {
          name: 'AI Predictive Maintenance',
          description: 'Predictive maintenance solution for industrial equipment',
          price: '$650/month',
          features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
          href: '/services/ai-predictive-maintenance',
          category: 'Micro SAAS',
          popularity: 'Popular',
          new: false
        }
      ]
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure & Services',
      description: 'Enterprise-grade IT infrastructure and managed services',
      icon: Server,
      color: 'from-blue-400 to-indigo-500',
      services: [
        {
          name: 'Cloud DevOps Automation',
          description: 'Automated cloud infrastructure and deployment solutions',
          price: '$1,800/month',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling', 'Monitoring & Alerting'],
          href: '/services/cloud-devops',
          category: 'IT Infrastructure',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Modern security architecture with zero trust principles',
          price: '$2,500/month',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Prevention'],
          href: '/services/ZeroTrustNetworkArchitecture',
          category: 'IT Infrastructure',
          popularity: 'Hot',
          new: false
        },
        {
          name: 'IoT Edge Computing Platform',
          description: 'Edge computing solutions for IoT devices and networks',
          price: '$1,600/month',
          features: ['Edge Analytics', 'Device Management', 'Real-time Processing', 'Cloud Integration'],
          href: '/services/iot-edge',
          category: 'IT Infrastructure',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum computing services for complex problem solving',
          price: '$5,000/month',
          features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation', 'Hybrid Computing'],
          href: '/services/quantum-computing-solutions',
          category: 'IT Infrastructure',
          popularity: 'Premium',
          new: false
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise blockchain implementation and consulting',
          price: '$3,200/month',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'DeFi Solutions'],
          href: '/services/blockchain-enterprise-solutions',
          category: 'IT Infrastructure',
          popularity: 'Hot',
          new: true
        },
        {
          name: 'Space Technology Solutions',
          description: 'Innovative space technology and satellite solutions',
          price: '$8,500/month',
          features: ['Satellite Communications', 'Space Data Analytics', 'Orbital Solutions', 'Ground Station Services'],
          href: '/services/space-tech',
          category: 'IT Infrastructure',
          popularity: 'Premium',
          new: true
        },
        {
          name: 'Green Technology Solutions',
          description: 'Sustainable technology solutions for environmental impact',
          price: '$2,800/month',
          features: ['Energy Optimization', 'Carbon Footprint Tracking', 'Sustainable Computing', 'Green Data Centers'],
          href: '/services/green-it',
          category: 'IT Infrastructure',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'FinOps Advisor Platform',
          description: 'Financial operations optimization for cloud infrastructure',
          price: '$1,500/month',
          features: ['Cost Optimization', 'Resource Management', 'Budget Planning', 'ROI Analysis'],
          href: '/services/finops-advisor',
          category: 'IT Infrastructure',
          popularity: 'Popular',
          new: false
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and compliance management',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered cybersecurity platform',
          price: '$2,800/month',
          features: ['Threat Intelligence', 'Behavioral Analysis', 'Incident Response', 'Compliance Reporting'],
          href: '/services/ai-cybersecurity-suite',
          category: 'Cybersecurity',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'Incident Response Platform',
          description: 'Advanced incident response and threat management',
          price: '$1,900/month',
          features: ['Real-time Monitoring', 'Automated Response', 'Forensic Analysis', 'Recovery Planning'],
          href: '/services/incident-response-platform',
          category: 'Cybersecurity',
          popularity: 'Hot',
          new: false
        },
        {
          name: 'SOC2 Compliance Tracker',
          description: 'Automated SOC2 compliance monitoring and reporting',
          price: '$1,200/month',
          features: ['Compliance Monitoring', 'Automated Auditing', 'Risk Assessment', 'Report Generation'],
          href: '/services/SOC2ComplianceTracker',
          category: 'Cybersecurity',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'Vendor Risk Management',
          description: 'Comprehensive vendor risk assessment and monitoring',
          price: '$950/month',
          features: ['Risk Assessment', 'Vendor Monitoring', 'Compliance Tracking', 'Contract Management'],
          href: '/services/VendorRiskManagement',
          category: 'Cybersecurity',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'AI Code Review Security',
          description: 'AI-powered code security analysis and vulnerability detection',
          price: '$1,600/month',
          features: ['Static Analysis', 'Vulnerability Detection', 'Code Quality', 'Security Best Practices'],
          href: '/services/ai-code-review-security',
          category: 'Cybersecurity',
          popularity: 'Hot',
          new: true
        },
        {
          name: 'AI Cybersecurity Threat Detection',
          description: 'Advanced AI-powered threat detection and prevention',
          price: '$2,200/month',
          features: ['Behavioral Analysis', 'Anomaly Detection', 'Threat Hunting', 'Predictive Security'],
          href: '/services/ai-cybersecurity-threat-detection',
          category: 'Cybersecurity',
          popularity: 'Trending',
          new: false
        }
      ]
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Strategic technology consulting and digital transformation services',
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-500',
      services: [
        {
          name: 'Digital Twin Solutions',
          description: 'Digital twin technology for physical asset management',
          price: '$3,500/month',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation'],
          href: '/services/digital-twin',
          category: 'Digital Transformation',
          popularity: 'Hot',
          new: true
        },
        {
          name: 'Healthcare Technology Solutions',
          description: 'Digital transformation for healthcare organizations',
          price: '$4,200/month',
          features: ['Electronic Health Records', 'Telemedicine', 'Patient Engagement', 'Data Analytics'],
          href: '/services/healthcare-tech',
          category: 'Digital Transformation',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'Manufacturing Digital Solutions',
          description: 'Industry 4.0 solutions for manufacturing optimization',
          price: '$3,800/month',
          features: ['Smart Manufacturing', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
          href: '/services/manufacturing-solutions',
          category: 'Digital Transformation',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'Financial Services Technology',
          description: 'Digital transformation for financial institutions',
          price: '$4,500/month',
          features: ['Digital Banking', 'Risk Management', 'Compliance Automation', 'Customer Experience'],
          href: '/services/financial-solutions',
          category: 'Digital Transformation',
          popularity: 'Popular',
          new: false
        },
        {
          name: 'Retail & E-commerce Solutions',
          description: 'Digital transformation for retail and e-commerce businesses',
          price: '$2,800/month',
          features: ['Omnichannel Experience', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
          href: '/services/retail-solutions',
          category: 'Digital Transformation',
          popularity: 'Trending',
          new: false
        },
        {
          name: 'Government & Defense Technology',
          description: 'Digital solutions for government and defense organizations',
          price: '$5,500/month',
          features: ['Secure Communications', 'Data Management', 'Analytics Platform', 'Compliance Solutions'],
          href: '/services/government-solutions',
          category: 'Digital Transformation',
          popularity: 'Premium',
          new: true
        }
      ]
    }
  ];

  // Flatten all services for search and filtering
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, categoryName: category.name }))
  );

  // Filter services based on selected category and search term
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === serviceCategories.find(cat => cat.id === selectedCategory)?.name;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span> Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI-powered solutions designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {service.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                        New
=======
import React from 'react';
import { SEO } from "../components/SEO";
import { ultimateMicroSaasServices2025, ultimateITInfrastructureServices2025, ultimateAIServices2025 } from "../data/ultimateZionServices2025";
const UltimateZionServicesShowcase2025: React.FC = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Ultimate Zion Services 2025 - Revolutionary Micro SAAS, IT & AI Solutions"
        description="Discover Zion Tech Group's cutting-edge micro SAAS services, IT infrastructure solutions, and AI platforms. Transform your business with revolutionary technology solutions."
        keywords="micro SAAS, IT services, AI solutions, quantum computing, cybersecurity, data analytics, Zion Tech Group"
        canonical="https://ziontechgroup.com/ultimate-zion-services-2025"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Zion Services 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary Micro SAAS, IT Infrastructure, and AI Solutions that Transform Businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </section>
        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="font-semibold">Phone</p>
                <p className="text-blue-100">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="font-semibold">Email</p>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="font-semibold">Address</p>
                <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Micro SAAS Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge micro SAAS solutions that deliver unprecedented ROI and competitive advantages
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {ultimateMicroSaasServices2025.map((service)  => (
                <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                      {service.pricing}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/month</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Market Price: {service.marketPrice}</p>
                    <p className="text-sm text-gray-400 mb-2">ROI: {service.roi}</p>
                    <p className="text-sm text-gray-400">Setup: {service.setupTime}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tag}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                      </span>
                    )}
                    {service.popularity && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        service.popularity === 'Hot' ? 'bg-red-500 text-white' :
                        service.popularity === 'Popular' ? 'bg-blue-500 text-white' :
                        service.popularity === 'Trending' ? 'bg-purple-500 text-white' :
                        'bg-yellow-500 text-white'
                      }`}>
                        {service.popularity}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="text-sm text-gray-500">Starting price</div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
<<<<<<< HEAD
                  </ul>
=======
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:+13024640950`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                      Get Started
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 text-center block"
                      Learn More
                    </a>
                  </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Link
                    to={service.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
=======
        </section>
        {/* IT Infrastructure Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build robust, scalable, and secure IT infrastructure with our expert consulting and implementation services
              </p>
            </div>
            <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
              {ultimateITInfrastructureServices2025.map((service)  => (
                <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-white font-semibold">
                      Hourly Rate: <span className="text-blue-400">${service.hourlyRate}/hour</span>
                    </p>
                    <p className="text-white font-semibold">
                      Project Rate: <span className="text-blue-400">${service.projectRate.toLocaleString()}</span>
                    </p>
                    <p className="text-sm text-gray-400">Market Price: {service.marketPrice}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-1">Response Time: {service.responseTime}</p>
                    <p className="text-sm text-gray-400 mb-1">SLA: {service.sla}</p>
                    <p className="text-sm text-gray-400">Delivery: {service.deliveryTime}</p>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:+13024640950`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                      Get Quote
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 text-center block"
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence with our cutting-edge AI platforms and solutions
              </p>
            </div>
            <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
              {ultimateAIServices2025.map((service)  => (
                <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold rounded-full">
                      {service.pricing}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/month</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">AI Score: <span className="text-green-400">{service.aiScore}/100</span></p>
                    <p className="text-sm text-gray-400 mb-2">Accuracy: {service.accuracy}</p>
                    <p className="text-sm text-gray-400">Market Price: {service.marketPrice}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">AI Models:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.aiModels.slice(0, 3).map((model, index) => (
                        <span key={index} className="px-2 py-1 bg-green-700 text-green-100 text-xs rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:+13024640950`}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-center block"
                      Start AI Journey
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 text-center block"
                      AI Consultation
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cutting-edge technology solutions with unmatched expertise and proven results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">300%+ ROI within 12 months for our clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with decades of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Tech</h3>
                <p className="text-gray-300">Latest AI, quantum computing, and emerging technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9s3 2 3 9a6 6 0 0012 0c0-7 3-9 3-9s-3-2-3-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring services</p>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <p className="text-blue-100 mb-6">
                  Schedule a free consultation and discover how our services can transform your business
                </p>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Learn More</h3>
                <p className="text-purple-100 mb-6">
                  Download our comprehensive service catalog and pricing guide
                </p>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Request Service Catalog"
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Request Catalog
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Contact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Phone</h4>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available 24/7 for urgent matters</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Email</h4>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Address</h4>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-300">Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="https://ziontechgroup.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                Visit our website: ziontechgroup.com
              </a>
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
export default UltimateZionServicesShowcase2025;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
