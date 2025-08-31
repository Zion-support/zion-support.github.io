import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
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
  CheckCircle2,
  Sparkles as SparklesIcon,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Handshake,
  Laptop,
  Smartphone as MobileIcon,
  Monitor,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  ExternalLink,
  ChevronRight,
  BarChart3 as AnalyticsIcon,
  Palette as DesignIcon,
  Camera,
  Music,
  Gamepad2 as GamingIcon,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  PenTool,
  Cloud,
  Truck
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-orange-500 to-red-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { id: 'it', name: 'IT Services', icon: Server, color: 'from-indigo-500 to-purple-500' },
    { id: 'blockchain', name: 'Blockchain', icon: Shield, color: 'from-yellow-500 to-orange-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, color: 'from-teal-500 to-blue-500' }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-content-creation-studio-pro',
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI-powered content creation platform with multi-format support',
      category: 'ai',
      price: '$299/month',
      features: [
        'Multi-format content generation (text, images, videos)',
        'Advanced AI models (GPT-4, DALL-E 3, Stable Diffusion)',
        'Brand voice customization',
        'SEO optimization tools',
        'Content calendar management',
        'Analytics and performance tracking'
      ],
      benefits: [
        '10x faster content creation',
        'Consistent brand messaging',
        'SEO-optimized content',
        'Multi-platform publishing',
        'Advanced analytics insights'
      ],
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      href: '/services/AI-Content-Creation-Studio-Pro',
      featured: true
    },
    {
      id: 'quantum-ai-trading-platform',
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum computing enhanced trading platform',
      category: 'quantum',
      price: '$1,999/month',
      features: [
        'Quantum algorithm integration',
        'Real-time market analysis',
        'AI-powered trading signals',
        'Risk management tools',
        'Portfolio optimization',
        'Multi-exchange support'
      ],
      benefits: [
        'Quantum speed advantage',
        'Enhanced prediction accuracy',
        'Real-time decision making',
        'Advanced risk mitigation',
        'Multi-asset support'
      ],
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      href: '/services/Quantum-AI-Trading-Platform',
      featured: true
    },
    {
      id: 'ai-legal-document-automation',
      name: 'AI Legal Document Automation',
      description: 'Intelligent legal document creation and management platform',
      category: 'ai',
      price: '$199/month',
      features: [
        'Automated contract generation',
        'Legal document templates',
        'Compliance checking',
        'E-signature integration',
        'Document version control',
        'Legal research assistance'
      ],
      benefits: [
        '90% faster document creation',
        'Reduced legal costs',
        'Improved accuracy',
        'Compliance automation',
        'Streamlined workflows'
      ],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-legal-document-automation'
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare data analysis and predictive modeling',
      category: 'ai',
      price: '$399/month',
      features: [
        'Patient data analytics',
        'Predictive health modeling',
        'Treatment outcome analysis',
        'Healthcare cost optimization',
        'Clinical decision support',
        'HIPAA compliance tools'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced healthcare costs',
        'Better resource allocation',
        'Enhanced clinical decisions',
        'Regulatory compliance'
      ],
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-healthcare-analytics'
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      description: 'Intelligent financial trading with advanced AI algorithms',
      category: 'ai',
      price: '$799/month',
      features: [
        'AI trading algorithms',
        'Real-time market data',
        'Portfolio management',
        'Risk assessment tools',
        'Performance analytics',
        'Multi-asset support'
      ],
      benefits: [
        'Automated trading strategies',
        'Enhanced market insights',
        'Risk management',
        'Portfolio optimization',
        '24/7 market monitoring'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      href: '/services/ai-financial-trading'
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management and optimization',
      category: 'ai',
      price: '$599/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Cost analysis',
        'Real-time tracking'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved efficiency',
        'Better inventory management',
        'Enhanced customer satisfaction',
        'Risk mitigation'
      ],
      icon: Truck,
      color: 'from-indigo-500 to-purple-500',
      href: '/services/ai-supply-chain-optimization'
    },
    {
      id: 'ai-customer-experience-analytics',
      name: 'AI Customer Experience Analytics',
      description: 'Advanced customer experience analysis and optimization',
      category: 'ai',
      price: '$299/month',
      features: [
        'Customer journey mapping',
        'Sentiment analysis',
        'Behavioral analytics',
        'Predictive modeling',
        'A/B testing tools',
        'Real-time insights'
      ],
      benefits: [
        'Improved customer satisfaction',
        'Increased retention rates',
        'Better product development',
        'Enhanced marketing strategies',
        'Data-driven decisions'
      ],
      icon: Users,
      color: 'from-pink-500 to-red-500',
      href: '/services/ai-customer-experience-analytics'
    },
    {
      id: 'ai-hr-talent-acquisition',
      name: 'AI HR Talent Acquisition',
      description: 'Intelligent human resources and talent acquisition platform',
      category: 'ai',
      price: '$199/month',
      features: [
        'Resume parsing and analysis',
        'Candidate matching',
        'Interview scheduling',
        'Skills assessment',
        'Performance tracking',
        'Employee analytics'
      ],
      benefits: [
        'Faster hiring process',
        'Better candidate matches',
        'Reduced hiring costs',
        'Improved retention',
        'Data-driven HR decisions'
      ],
      icon: Users2,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-hr-talent-acquisition'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered cybersecurity and threat detection',
      category: 'cybersecurity',
      price: '$499/month',
      features: [
        'Threat detection and prevention',
        'Behavioral analysis',
        'Incident response automation',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Real-time alerts'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced response time',
        'Automated threat handling',
        'Compliance automation',
        'Cost-effective security'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Enterprise quantum computing and quantum algorithm development',
      category: 'quantum',
      price: '$2,999/month',
      features: [
        'Quantum algorithm development',
        'Quantum simulation tools',
        'Quantum machine learning',
        'Optimization algorithms',
        'Quantum cryptography',
        'Expert consultation'
      ],
      benefits: [
        'Quantum advantage',
        'Exponential speed improvements',
        'Advanced problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      href: '/services/quantum-computing'
    },
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      description: 'Enterprise-grade blockchain and Web3 solutions',
      category: 'blockchain',
      price: '$799/month',
      features: [
        'Custom blockchain development',
        'Smart contract creation',
        'DeFi platform development',
        'NFT marketplace solutions',
        'Cross-chain integration',
        'Security auditing'
      ],
      benefits: [
        'Transparent operations',
        'Reduced costs',
        'Enhanced security',
        'Automated processes',
        'Innovation leadership'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      href: '/services/blockchain-enterprise-solutions'
    },
    {
      id: 'micro-crm',
      name: 'Micro CRM Platform',
      description: 'Lightweight customer relationship management solution',
      category: 'micro-saas',
      price: '$49/month',
      features: [
        'Contact management',
        'Lead tracking',
        'Sales pipeline',
        'Email integration',
        'Basic reporting',
        'Mobile app'
      ],
      benefits: [
        'Affordable CRM solution',
        'Easy to use',
        'Quick implementation',
        'Scalable growth',
        'Mobile accessibility'
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      href: '/services/micro-crm'
    },
    {
      id: 'helpdesk-platform',
      name: 'Helpdesk Platform',
      description: 'Customer support and ticket management system',
      category: 'micro-saas',
      price: '$79/month',
      features: [
        'Ticket management',
        'Knowledge base',
        'Live chat support',
        'Email integration',
        'Reporting dashboard',
        'Team collaboration'
      ],
      benefits: [
        'Improved customer support',
        'Faster response times',
        'Better team efficiency',
        'Customer satisfaction',
        'Reduced support costs'
      ],
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/helpdesk'
    },
    {
      id: 'website-analytics',
      name: 'Website Analytics Platform',
      description: 'Comprehensive website performance and user analytics',
      category: 'analytics',
      price: '$99/month',
      features: [
        'Real-time analytics',
        'User behavior tracking',
        'Conversion optimization',
        'A/B testing tools',
        'Performance monitoring',
        'Custom dashboards'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved user experience',
        'Higher conversion rates',
        'Performance optimization',
        'ROI tracking'
      ],
      icon: BarChart3,
      color: 'from-teal-500 to-blue-500',
      href: '/services/website-analytics'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps Solutions',
      description: 'Enterprise cloud infrastructure and DevOps automation',
      category: 'it',
      price: '$1,299/month',
      features: [
        'Cloud infrastructure setup',
        'CI/CD pipeline automation',
        'Container orchestration',
        'Monitoring and logging',
        'Security implementation',
        '24/7 support'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Cost optimization',
        'Enhanced security',
        'Scalable infrastructure'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud-devops'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure and network management',
      category: 'it',
      price: '$899/month',
      features: [
        'Network design and setup',
        'Server management',
        'Security implementation',
        'Backup and recovery',
        'Performance monitoring',
        'Technical support'
      ],
      benefits: [
        'Reliable infrastructure',
        'Enhanced security',
        'Reduced downtime',
        'Cost optimization',
        'Expert management'
      ],
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      href: '/services/it-infrastructure'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI, Quantum Computing, Micro SAAS, and IT services designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400">per month</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.href}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team of experts to discuss how our innovative services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
