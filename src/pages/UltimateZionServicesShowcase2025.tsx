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
                  </ul>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
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