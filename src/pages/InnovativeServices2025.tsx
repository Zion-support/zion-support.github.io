import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Workflow,
  Automation,
  Robot,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Code,
  Settings,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Sparkles,
  Heart,
  MessageCircle,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Eye,
  PieChart,
  LineChart,
  BarChart,
  Users2,
  UserCheck,
  ThumbsUp,
  TrendingDown,
  Activity,
  Atom,
  Network,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity as ActivityIcon,
  FileText as FileTextIcon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  BarChart as BarChartIcon,
  Users2 as Users2Icon,
  Settings as SettingsIcon,
  Palette,
  Video,
  Audio,
  Document,
  Folder,
  File,
  Archive,
  Backup,
  Restore,
  Sync,
  Share,
  Export,
  Import,
  Download as DownloadIcon,
  Upload,
  Copy,
  Paste,
  Cut,
  Delete,
  Undo,
  Redo,
  Save,
  Load,
  Open,
  Close,
  Minimize,
  Maximize,
  Restore as RestoreIcon,
  Move,
  Resize,
  Rotate,
  Scale,
  Transform,
  Animate,
  Transition,
  Effect,
  Filter as FilterIcon,
  Blend,
  Mask,
  Clip,
  Crop,
  Resize as ResizeIcon,
  Rotate as RotateIcon,
  Scale as ScaleIcon,
  Transform as TransformIcon
} from 'lucide-react';

const InnovativeServices2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Zap,
      count: 25
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      count: 12
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Cpu,
      count: 8
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS',
      icon: Rocket,
      count: 5
    }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-business-process-automation',
      name: 'AI Business Process Automation',
      category: 'ai-services',
      description: 'Transform business operations with intelligent automation that learns, adapts, and scales.',
      icon: Workflow,
      features: ['Intelligent Workflow Design', 'Advanced Process Automation', 'RPA Integration', 'Machine Learning Engine'],
      pricing: '$2,500 - $7,500/month',
      roi: '300% average',
      href: '/services/ai-business-process-automation',
      popular: true,
      tags: ['Automation', 'AI', 'Workflow', 'RPA']
    },
    {
      id: 'ai-data-analytics-platform',
      name: 'AI Data Analytics Platform',
      category: 'ai-services',
      description: 'Transform your data into actionable insights with AI-powered analytics and real-time processing.',
      icon: BarChart3,
      features: ['AI-Powered Insights', 'Real-Time Processing', 'Advanced Visualization', 'Natural Language Query'],
      pricing: '$1,500 - $4,500/month',
      roi: '250% average',
      href: '/services/ai-data-analytics-platform',
      popular: true,
      tags: ['Analytics', 'AI', 'Data', 'Insights']
    },
    {
      id: 'ai-customer-experience-platform',
      name: 'AI Customer Experience Platform',
      category: 'ai-services',
      description: 'Revolutionize customer relationships with AI-powered personalization and omnichannel communication.',
      icon: Heart,
      features: ['AI-Powered Personalization', 'Omnichannel Communication', 'Sentiment Analysis', 'Customer Journey Mapping'],
      pricing: '$1,200 - $3,800/month',
      roi: '300% average',
      href: '/services/ai-customer-experience-platform',
      popular: true,
      tags: ['CX', 'AI', 'Personalization', 'Omnichannel']
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      category: 'ai-services',
      description: 'Optimize supply chain operations with AI-powered forecasting and real-time analytics.',
      icon: Network,
      features: ['Predictive Analytics', 'Real-Time Monitoring', 'Demand Forecasting', 'Route Optimization'],
      pricing: '$3,000 - $8,000/month',
      roi: '400% average',
      href: '/services/ai-supply-chain-optimization',
      popular: false,
      tags: ['Supply Chain', 'AI', 'Optimization', 'Analytics']
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'ai-services',
      description: 'Advanced threat detection and response with AI-powered security intelligence.',
      icon: Shield,
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Automation'],
      pricing: '$2,800 - $7,200/month',
      roi: '350% average',
      href: '/services/ai-cybersecurity-platform',
      popular: false,
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Compliance']
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Platform',
      category: 'ai-services',
      description: 'Transform healthcare delivery with AI-powered diagnostics and patient care optimization.',
      icon: Heart,
      features: ['Diagnostic AI', 'Patient Care Optimization', 'Predictive Analytics', 'Clinical Decision Support'],
      pricing: '$4,000 - $10,000/month',
      roi: '300% average',
      href: '/services/ai-healthcare-platform',
      popular: false,
      tags: ['Healthcare', 'AI', 'Diagnostics', 'Patient Care']
    },
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI Quantum Hybrid Platform',
      category: 'ai-services',
      description: 'Next-generation computing combining quantum and AI for breakthrough solutions.',
      icon: Atom,
      features: ['Quantum Computing', 'Hybrid AI Models', 'Advanced Simulations', 'Research Tools'],
      pricing: '$5,000 - $15,000/month',
      roi: '500% average',
      href: '/services/ai-quantum-hybrid-platform',
      popular: false,
      tags: ['Quantum', 'AI', 'Computing', 'Research']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      category: 'ai-services',
      description: 'Generate high-quality content automatically with AI-powered writing assistance.',
      icon: FileText,
      features: ['Content Generation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Consistency'],
      pricing: '$800 - $2,500/month',
      roi: '200% average',
      href: '/services/ai-content-generator',
      popular: false,
      tags: ['Content', 'AI', 'Writing', 'SEO']
    },
    {
      id: 'ai-code-review-security',
      name: 'AI Code Review & Security',
      category: 'ai-services',
      description: 'Automated code review and security analysis with AI-powered insights.',
      icon: Code,
      features: ['Automated Review', 'Security Analysis', 'Vulnerability Detection', 'Code Quality Metrics'],
      pricing: '$1,500 - $4,000/month',
      roi: '280% average',
      href: '/services/ai-code-review-security',
      popular: false,
      tags: ['Code Review', 'Security', 'AI', 'Development']
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-services',
      description: 'Transform business data into actionable insights with AI-powered analytics.',
      icon: TrendingUp,
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      pricing: '$2,000 - $5,500/month',
      roi: '320% average',
      href: '/services/ai-business-intelligence',
      popular: false,
      tags: ['BI', 'AI', 'Analytics', 'Insights']
    },
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      category: 'ai-services',
      description: 'Automate customer support with intelligent chatbots and self-service solutions.',
      icon: MessageCircle,
      features: ['Intelligent Chatbots', 'Self-service Portals', 'Ticket Automation', 'Knowledge Management'],
      pricing: '$1,200 - $3,200/month',
      roi: '250% average',
      href: '/services/ai-customer-support-automation',
      popular: false,
      tags: ['Support', 'AI', 'Automation', 'Chatbots']
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      category: 'ai-services',
      description: 'Automate marketing campaigns with AI-powered personalization and optimization.',
      icon: Target,
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization'],
      pricing: '$1,800 - $4,500/month',
      roi: '300% average',
      href: '/services/ai-marketing-automation',
      popular: false,
      tags: ['Marketing', 'AI', 'Automation', 'Personalization']
    },

    // IT Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps Automation',
      category: 'it-services',
      description: 'Streamline development and operations with automated cloud infrastructure management.',
      icon: Cloud,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Auto-scaling'],
      pricing: '$2,500 - $6,000/month',
      roi: '250% average',
      href: '/services/cloud-devops',
      popular: false,
      tags: ['DevOps', 'Cloud', 'Automation', 'CI/CD']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'it-services',
      description: 'Comprehensive security solutions including threat detection, incident response, and compliance.',
      icon: Shield,
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
      pricing: '$3,000 - $8,000/month',
      roi: '300% average',
      href: '/services/cybersecurity',
      popular: false,
      tags: ['Security', 'Compliance', 'Threat Detection', 'Incident Response']
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      category: 'it-services',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      icon: Transform,
      features: ['Strategy Development', 'Process Optimization', 'Technology Implementation', 'Change Management'],
      pricing: '$5,000 - $15,000/month',
      roi: '400% average',
      href: '/services/digital-transformation',
      popular: false,
      tags: ['Transformation', 'Strategy', 'Process', 'Technology']
    },
    {
      id: 'iot-edge-computing',
      name: 'IoT Edge Computing',
      category: 'it-services',
      description: 'Build and deploy IoT solutions with edge computing for real-time data processing.',
      icon: Cpu,
      features: ['IoT Platform', 'Edge Computing', 'Real-time Analytics', 'Device Management'],
      pricing: '$2,800 - $7,500/month',
      roi: '280% average',
      href: '/services/iot-edge',
      popular: false,
      tags: ['IoT', 'Edge Computing', 'Real-time', 'Analytics']
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Solutions',
      category: 'it-services',
      description: 'Enterprise blockchain solutions for secure, transparent, and efficient business processes.',
      icon: Link,
      features: ['Smart Contracts', 'DApp Development', 'Consensus Mechanisms', 'Security Audits'],
      pricing: '$4,000 - $12,000/month',
      roi: '350% average',
      href: '/services/blockchain-enterprise-solutions',
      popular: false,
      tags: ['Blockchain', 'Smart Contracts', 'DApps', 'Security']
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Services',
      category: 'it-services',
      description: 'Access to quantum computing resources and quantum algorithm development.',
      icon: Atom,
      features: ['Quantum Access', 'Algorithm Development', 'Simulation Tools', 'Research Support'],
      pricing: '$6,000 - $20,000/month',
      roi: '500% average',
      href: '/services/quantum-computing-solutions',
      popular: false,
      tags: ['Quantum', 'Computing', 'Algorithms', 'Research']
    },
    {
      id: 'green-it',
      name: 'Green IT Solutions',
      category: 'it-services',
      description: 'Sustainable IT solutions to reduce environmental impact and energy costs.',
      icon: Leaf,
      features: ['Energy Optimization', 'Sustainable Infrastructure', 'Carbon Footprint Reduction', 'Green Certifications'],
      pricing: '$2,000 - $5,500/month',
      roi: '200% average',
      href: '/services/green-it',
      popular: false,
      tags: ['Sustainability', 'Energy', 'Green', 'Certification']
    },
    {
      id: '5g-solutions',
      name: '5G Enterprise Solutions',
      category: 'it-services',
      description: 'Leverage 5G technology for enterprise applications and network optimization.',
      icon: Wifi,
      features: ['5G Infrastructure', 'Network Optimization', 'Enterprise Applications', 'Performance Monitoring'],
      pricing: '$3,500 - $9,000/month',
      roi: '320% average',
      href: '/services/FiveGSolutions',
      popular: false,
      tags: ['5G', 'Network', 'Enterprise', 'Optimization']
    },

    // Micro SaaS
    {
      id: 'micro-crm',
      name: 'Micro CRM Platform',
      category: 'micro-saas',
      description: 'Lightweight CRM solution designed for small businesses and startups.',
      icon: Users,
      features: ['Contact Management', 'Sales Pipeline', 'Email Integration', 'Basic Analytics'],
      pricing: '$99 - $299/month',
      roi: '180% average',
      href: '/services/micro-crm',
      popular: false,
      tags: ['CRM', 'Sales', 'Contacts', 'Pipeline']
    },
    {
      id: 'helpdesk-platform',
      name: 'Helpdesk Platform',
      category: 'micro-saas',
      description: 'Customer support platform with ticket management and knowledge base.',
      icon: Headphones,
      features: ['Ticket Management', 'Knowledge Base', 'Customer Portal', 'Reporting'],
      pricing: '$149 - $399/month',
      roi: '200% average',
      href: '/services/HelpdeskPlatform',
      popular: false,
      tags: ['Support', 'Helpdesk', 'Tickets', 'Knowledge Base']
    },
    {
      id: 'returns-management',
      name: 'Returns Management SaaS',
      category: 'micro-saas',
      description: 'Streamline returns and refunds with automated workflows and customer self-service.',
      icon: RefreshCw,
      features: ['Returns Portal', 'Automated Workflows', 'Refund Processing', 'Analytics'],
      pricing: '$199 - $499/month',
      roi: '220% average',
      href: '/services/ReturnsManagementSaaS',
      popular: false,
      tags: ['Returns', 'Refunds', 'Automation', 'Customer Service']
    },
    {
      id: 'customer-feedback',
      name: 'Customer Feedback Surveys',
      category: 'micro-saas',
      description: 'Collect and analyze customer feedback with customizable surveys and analytics.',
      icon: MessageCircle,
      features: ['Survey Builder', 'Response Collection', 'Analytics Dashboard', 'Actionable Insights'],
      pricing: '$79 - $199/month',
      roi: '180% average',
      href: '/services/CustomerFeedbackSurveys',
      popular: false,
      tags: ['Feedback', 'Surveys', 'Analytics', 'Insights']
    },
    {
      id: 'seo-auditor',
      name: 'SEO Auditor Tool',
      category: 'micro-saas',
      description: 'Comprehensive SEO analysis and optimization recommendations.',
      icon: Search,
      features: ['Site Analysis', 'Keyword Research', 'Competitor Analysis', 'Optimization Tips'],
      pricing: '$129 - $299/month',
      roi: '200% average',
      href: '/services/SEOAuditor',
      popular: false,
      tags: ['SEO', 'Analysis', 'Optimization', 'Keywords']
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Innovative Services 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Service
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business. 
              From cutting-edge AI solutions to enterprise-grade infrastructure, we have everything you need to succeed.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:border-cyan-500/30 group ${
                  service.popular ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-600/10' : 'border-white/10'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>{service.pricing}</span>
                      <span>•</span>
                      <span className="text-cyan-400">{service.roi}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-cyan-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive portfolio of innovative services and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServices2025;