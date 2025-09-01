import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Zap, 
  Search, 
  Filter, 
  Star, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Target,
  Rocket,
  Globe,
  Cpu,
  Lock,
  Database,
  Network,
  Eye,
  Smartphone,
  Monitor,
  Server,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Gauge
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    enterprise: string;
  };
  features: string[];
  benefits: string[];
  targetMarket: string[];
  roi: string;
  implementationTime: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  color: string;
  featured: boolean;
  tags: string[];
}

const services: Service[] = [
  {
    id: 'ai-code-reviewer',
    title: 'AI Autonomous Code Reviewer',
    description: 'Advanced AI-powered code review system with real-time analysis, automated quality scoring, and security vulnerability detection.',
    icon: Brain,
    category: 'AI & Machine Learning',
    price: {
      monthly: 299,
      yearly: 2999,
      enterprise: 'Custom'
    },
    features: [
      'Automated code quality scoring',
      'Security vulnerability detection',
      'Multi-language support',
      'Real-time analysis',
      'Integration with CI/CD pipelines',
      'Custom rule configuration'
    ],
    benefits: [
      '80% reduction in review time',
      'Improved code quality',
      'Faster development cycles',
      'Reduced security risks'
    ],
    targetMarket: [
      'Software development teams',
      'DevOps teams',
      'Engineering managers',
      'Quality assurance teams'
    ],
    roi: '300% ROI within 6 months',
    implementationTime: '2-3 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-cyan-400 to-blue-500',
    featured: true,
    tags: ['AI', 'Code Review', 'Security', 'Automation']
  },
  {
    id: 'ai-seo-optimizer',
    title: 'AI-Powered SEO Optimizer',
    description: 'Intelligent SEO platform with AI-driven optimization, real-time keyword research, and competitor analysis.',
    icon: TrendingUp,
    category: 'AI & Machine Learning',
    price: {
      monthly: 199,
      yearly: 1999,
      enterprise: 'Custom'
    },
    features: [
      'Real-time keyword research',
      'AI content optimization',
      'Competitor analysis',
      'Performance tracking',
      'Automated reporting',
      'Local SEO optimization'
    ],
    benefits: [
      '150% increase in organic traffic',
      'Higher search rankings',
      'Improved conversion rates',
      'Data-driven insights'
    ],
    targetMarket: [
      'Digital marketers',
      'SEO agencies',
      'Content creators',
      'E-commerce businesses'
    ],
    roi: '400% ROI through increased organic traffic',
    implementationTime: '1-2 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-green-400 to-emerald-500',
    featured: true,
    tags: ['AI', 'SEO', 'Marketing', 'Analytics']
  },
  {
    id: 'ai-interview-platform',
    title: 'AI Interview Assessment Platform',
    description: 'Intelligent interview platform with AI-powered candidate evaluation, video interviews, and skills assessment automation.',
    icon: Users,
    category: 'AI & Machine Learning',
    price: {
      monthly: 399,
      yearly: 3999,
      enterprise: 'Custom'
    },
    features: [
      'AI video interviews',
      'Skills assessment automation',
      'Bias detection',
      'Candidate scoring',
      'Interview scheduling',
      'Analytics dashboard'
    ],
    benefits: [
      '60% reduction in hiring time',
      'Improved candidate quality',
      'Reduced bias in hiring',
      'Better candidate experience'
    ],
    targetMarket: [
      'HR professionals',
      'Recruiters',
      'Hiring managers',
      'Talent acquisition teams'
    ],
    roi: '250% ROI through improved hiring quality',
    implementationTime: '2-3 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-purple-400 to-pink-500',
    featured: true,
    tags: ['AI', 'HR', 'Recruitment', 'Assessment']
  },
  {
    id: 'zero-trust-platform',
    title: 'Zero Trust Network Access Platform',
    description: 'Advanced zero-trust security platform without traditional VPN, featuring identity-based access control and continuous authentication.',
    icon: Shield,
    category: 'Cybersecurity',
    price: {
      monthly: 599,
      yearly: 5999,
      enterprise: 'Custom'
    },
    features: [
      'Identity-based access control',
      'Continuous authentication',
      'Threat detection',
      'Micro-segmentation',
      'Real-time monitoring',
      'Compliance reporting'
    ],
    benefits: [
      '80% reduction in attack surface',
      'Improved security posture',
      'Better compliance',
      'Simplified access management'
    ],
    targetMarket: [
      'Enterprise IT teams',
      'Security professionals',
      'Compliance officers',
      'Financial services'
    ],
    roi: '200% ROI through improved security posture',
    implementationTime: '4-6 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-red-400 to-pink-500',
    featured: false,
    tags: ['Security', 'Zero Trust', 'Network', 'Compliance']
  },
  {
    id: 'ai-threat-intelligence',
    title: 'AI Cybersecurity Threat Intelligence',
    description: 'Intelligent threat detection and response platform with real-time analysis and automated response capabilities.',
    icon: Eye,
    category: 'Cybersecurity',
    price: {
      monthly: 799,
      yearly: 7999,
      enterprise: 'Custom'
    },
    features: [
      'Real-time threat detection',
      'AI-powered analysis',
      'Automated response',
      'Threat hunting',
      'Incident management',
      'Forensics capabilities'
    ],
    benefits: [
      '90% faster threat detection',
      'Reduced false positives',
      'Automated incident response',
      'Improved threat visibility'
    ],
    targetMarket: [
      'Security operations teams',
      'CISO',
      'IT security managers',
      'Government agencies'
    ],
    roi: '350% ROI through improved threat detection',
    implementationTime: '4-6 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-orange-400 to-red-500',
    featured: false,
    tags: ['Security', 'Threat Intelligence', 'AI', 'Incident Response']
  },
  {
    id: 'cloud-finops-optimizer',
    title: 'Cloud FinOps Optimizer',
    description: 'Intelligent cloud cost optimization platform with real-time monitoring, AI-powered optimization, and automated scaling.',
    icon: Cloud,
    category: 'Cloud & DevOps',
    price: {
      monthly: 299,
      yearly: 2999,
      enterprise: 'Custom'
    },
    features: [
      'Real-time cost monitoring',
      'AI-powered optimization',
      'Automated scaling',
      'Cost allocation',
      'Budget management',
      'Performance analytics'
    ],
    benefits: [
      '30-50% cost reduction',
      'Improved resource utilization',
      'Better budget control',
      'Performance optimization'
    ],
    targetMarket: [
      'Cloud architects',
      'DevOps engineers',
      'Finance teams',
      'IT managers'
    ],
    roi: '500% ROI through direct cost savings',
    implementationTime: '2-3 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-blue-400 to-indigo-500',
    featured: false,
    tags: ['Cloud', 'FinOps', 'Cost Optimization', 'DevOps']
  },
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    description: 'Advanced BI platform with AI-powered insights, predictive analytics, and natural language queries.',
    icon: BarChart3,
    category: 'Data & Analytics',
    price: {
      monthly: 499,
      yearly: 4999,
      enterprise: 'Custom'
    },
    features: [
      'Predictive analytics',
      'Natural language queries',
      'Automated reporting',
      'Real-time dashboards',
      'Data visualization',
      'Machine learning models'
    ],
    benefits: [
      '10x faster analysis',
      'Improved decision making',
      'Automated insights',
      'Better data governance'
    ],
    targetMarket: [
      'Data analysts',
      'Business intelligence teams',
      'Executives',
      'Operations managers'
    ],
    roi: '400% ROI through improved decision making',
    implementationTime: '3-4 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-indigo-400 to-purple-500',
    featured: false,
    tags: ['AI', 'Business Intelligence', 'Analytics', 'Predictive']
  },
  {
    id: 'ai-workflow-orchestrator',
    title: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation platform with AI-powered process design, optimization, and intelligent routing.',
    icon: Zap,
    category: 'Automation & Integration',
    price: {
      monthly: 399,
      yearly: 3999,
      enterprise: 'Custom'
    },
    features: [
      'AI-powered process design',
      'Workflow optimization',
      'Intelligent routing',
      'Process mining',
      'Performance analytics',
      'Integration capabilities'
    ],
    benefits: [
      '70% reduction in manual work',
      'Improved efficiency',
      'Better process visibility',
      'Faster execution'
    ],
    targetMarket: [
      'Operations managers',
      'Process improvement teams',
      'Business analysts',
      'IT teams'
    ],
    roi: '300% ROI through improved efficiency',
    implementationTime: '3-4 weeks',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    color: 'from-yellow-400 to-orange-500',
    featured: false,
    tags: ['Automation', 'Workflow', 'AI', 'Process Optimization']
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud & DevOps',
  'Data & Analytics',
  'Automation & Integration'
];

export default function InnovativeServices2029() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'roi'>('name');

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'roi':
          const aRoi = parseInt(a.roi.split('%')[0]);
          const bRoi = parseInt(b.roi.split('%')[0]);
          return bRoi - aRoi;
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <SEO 
        title="Innovative Services 2029 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered technology services for 2029. From autonomous code review to zero-trust security, discover solutions that drive business transformation."
        keywords="AI services, cybersecurity, cloud optimization, business intelligence, workflow automation, Zion Tech Group"
        type="website"
        image="/images/innovative-services-2029.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Innovative Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  2029
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover our cutting-edge AI-powered technology solutions designed to transform your business 
                and drive unprecedented growth in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>9 Revolutionary Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'roi')}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.featured && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <div className="text-right">
                      <div className="text-white font-bold">${service.price.monthly}/mo</div>
                      <div className="text-xs text-gray-400">
                        ${service.price.yearly}/year
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ROI */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-400 font-medium">{service.roi}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No services found</div>
              <div className="text-gray-500">Try adjusting your search or filters</div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss how our innovative services can drive 
              your business forward in 2029 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedService.color}`}>
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedService.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedService.category}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  {selectedService.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Pricing */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        Pricing Plans
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="text-gray-700 dark:text-gray-300">Monthly</span>
                          <span className="font-bold text-gray-900 dark:text-white">
                            ${selectedService.price.monthly}/mo
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="text-gray-700 dark:text-gray-300">Yearly</span>
                          <span className="font-bold text-gray-900 dark:text-white">
                            ${selectedService.price.yearly}/year
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="text-gray-700 dark:text-gray-300">Enterprise</span>
                          <span className="font-bold text-gray-900 dark:text-white">
                            {selectedService.price.enterprise}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        Business Benefits
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* ROI and Implementation */}
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          Return on Investment
                        </h4>
                        <p className="text-green-700 dark:text-green-300 text-lg font-bold">
                          {selectedService.roi}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Implementation Time
                        </h4>
                        <p className="text-blue-700 dark:text-blue-300 text-lg font-bold">
                          {selectedService.implementationTime}
                        </p>
                      </div>
                    </div>

                    {/* Target Market */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-orange-500" />
                        Target Market
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.targetMarket.map((market, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm"
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-indigo-500" />
                        Get Started
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                          <Phone className="w-5 h-5 text-indigo-500" />
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Phone</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedService.contact.phone}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                          <Mail className="w-5 h-5 text-indigo-500" />
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedService.contact.email}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                          <MapPin className="w-5 h-5 text-indigo-500" />
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Address</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedService.contact.address}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                      Schedule a Demo
                    </button>
                    <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}