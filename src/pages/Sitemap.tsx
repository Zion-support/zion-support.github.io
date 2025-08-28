import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Star, 
  Target, 
  Building,
  TrendingUp,
  Activity,
  Users, 
  Server,
  Rocket,
  Atom,
  Heart,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface SitemapRoute {
  path: string;
  name: string;
  description?: string;
  priority: number;
  changefreq: string;
  category: string;
  featured?: boolean;
}

interface SitemapSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  routes: SitemapRoute[];
  expanded?: boolean;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    description: 'Core website pages and navigation',
    expanded: true,
    routes: [
      { path: '/', name: 'Home', description: 'Main landing page', priority: 1.0, changefreq: 'daily', category: 'main' },
      { path: '/about', name: 'About Us', description: 'Company information and mission', priority: 0.8, changefreq: 'monthly', category: 'main' },
      { path: '/contact', name: 'Contact', description: 'Get in touch with our team', priority: 0.8, changefreq: 'monthly', category: 'main' },
      { path: '/sitemap', name: 'Sitemap', description: 'Complete site navigation', priority: 0.6, changefreq: 'weekly', category: 'main' },
      { path: '/blog', name: 'Blog', description: 'Latest insights and updates', priority: 0.7, changefreq: 'weekly', category: 'main' },
      { path: '/careers', name: 'Careers', description: 'Job opportunities and careers', priority: 0.6, changefreq: 'monthly', category: 'main' },
      { path: '/pricing', name: 'Pricing', description: 'Service pricing and plans', priority: 0.7, changefreq: 'monthly', category: 'main' },
      { path: '/team', name: 'Team', description: 'Meet our team members', priority: 0.6, changefreq: 'monthly', category: 'main' },
      { path: '/faq', name: 'FAQ', description: 'Frequently asked questions', priority: 0.6, changefreq: 'monthly', category: 'main' },
      { path: '/search', name: 'Search', description: 'Search across the site', priority: 0.5, changefreq: 'monthly', category: 'main' },
      { path: '/partners', name: 'Partners', description: 'Our business partners', priority: 0.6, changefreq: 'monthly', category: 'main' },
      { path: '/news', name: 'News', description: 'Company news and updates', priority: 0.7, changefreq: 'weekly', category: 'main' },
      { path: '/case-studies', name: 'Case Studies', description: 'Success stories and examples', priority: 0.7, changefreq: 'monthly', category: 'main' },
      { path: '/help', name: 'Help Center', description: 'Support and documentation', priority: 0.6, changefreq: 'monthly', category: 'main' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Artificial intelligence and machine learning solutions',
    expanded: true,
    routes: [
      { path: '/services/ai-workflow-orchestrator', name: 'AI Workflow Orchestrator', description: 'AI-powered workflow automation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-data-governance-platform', name: 'AI Data Governance Platform', description: 'AI-powered data governance', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-customer-experience-analytics', name: 'AI Customer Experience Analytics', description: 'AI-powered customer insights', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-business-intelligence-analytics', name: 'AI Business Intelligence Analytics', description: 'Advanced analytics & ML insights', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated regulatory compliance', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-sales-copilot', name: 'AI Sales Copilot', description: 'Intelligent sales optimization', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-powered-seo', name: 'AI-Powered SEO', description: 'Machine learning SEO optimization', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/interview-assessment-ai', name: 'Interview Assessment AI', description: 'AI-powered candidate evaluation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-content-marketing-suite', name: 'AI Content Marketing Suite', description: 'Automated content creation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-customer-support-automation', name: 'AI Customer Support Automation', description: 'Intelligent support automation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-project-management', name: 'AI Project Management', description: 'AI-driven project optimization', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-financial-analytics', name: 'AI Financial Analytics', description: 'Intelligent financial insights', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-financial-risk-management', name: 'AI Financial Risk Management', description: 'AI-powered financial risk assessment', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-code-review-security-scanner', name: 'AI Code Review Security Scanner', description: 'Automated code security analysis', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-devops-automation-platform', name: 'AI DevOps Automation Platform', description: 'AI-driven DevOps automation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-customer-experience-support', name: 'AI Customer Experience Support', description: 'Enhanced customer experience', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-marketing-automation-personalization', name: 'AI Marketing Automation Personalization', description: 'Personalized marketing automation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration platform', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-quantum-financial-trading', name: 'AI Quantum Financial Trading', description: 'Quantum-AI trading platform', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-autonomous-supply-chain', name: 'AI Autonomous Supply Chain', description: 'AI-powered supply chain automation', priority: 0.8, changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-cybersecurity-threat-intelligence', name: 'AI Cybersecurity Threat Intelligence', description: 'AI-powered threat detection', priority: 0.8, changefreq: 'weekly', category: 'ai' }
    ]
  },
  {
    title: 'Cloud & DevOps Services',
    icon: Cloud,
    description: 'Infrastructure, automation, and cloud solutions',
    expanded: true,
    routes: [
      { path: '/services/cloud-devops', name: 'Cloud DevOps', description: 'Infrastructure automation & scaling', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/services/it-infrastructure', name: 'IT Infrastructure', description: 'Enterprise infrastructure solutions', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/services/finops-advisor', name: 'FinOps Advisor', description: 'Cloud cost optimization', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', description: 'Financial operations automation', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/it-consulting', name: 'IT Consulting', description: 'Technology strategy & planning', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/solutions/enterprise', name: 'Enterprise Solutions', description: 'Large-scale enterprise solutions', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/solutions/healthcare', name: 'Healthcare Solutions', description: 'Healthcare technology solutions', priority: 0.8, changefreq: 'weekly', category: 'cloud' },
      { path: '/services/data-analytics', name: 'Data Analytics', description: 'Data analysis and insights', priority: 0.7, changefreq: 'monthly', category: 'it' },
      { path: '/micro-saas', name: 'Micro SaaS Solutions', description: 'Specialized software solutions', priority: 0.7, changefreq: 'monthly', category: 'it' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security and compliance solutions',
    expanded: true,
    routes: [
      { path: '/services/ai-cybersecurity-platform', name: 'AI Cybersecurity Platform', description: 'AI-powered security platform', priority: 0.8, changefreq: 'weekly', category: 'security' },
      { path: '/services/security-headers-csp', name: 'Security Headers CSP', description: 'Content security policy', priority: 0.8, changefreq: 'weekly', category: 'security' },
      { path: '/services/dsr-portal', name: 'DSR Privacy Portal', description: 'Data subject rights portal', priority: 0.8, changefreq: 'weekly', category: 'security' },
      { path: '/services/zero-trust-network-access', name: 'Zero Trust Network Access', description: 'Zero trust security model', priority: 0.8, changefreq: 'weekly', category: 'security' },
      { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated compliance management', priority: 0.8, changefreq: 'weekly', category: 'security' },
      { path: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', description: 'Advanced compliance automation', priority: 0.7, changefreq: 'monthly', category: 'security' },
      { path: '/services/ai-cybersecurity', name: 'AI Cybersecurity', description: 'AI-powered cybersecurity solutions', priority: 0.7, changefreq: 'monthly', category: 'security' },
      { path: '/services/blockchain', name: 'Blockchain Solutions', description: 'Blockchain and Web3 solutions', priority: 0.7, changefreq: 'monthly', category: 'security' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Quantum computing, IoT, and cutting-edge tech',
    expanded: false,
    routes: [
      { path: '/services/quantum-computing', name: 'Quantum Computing', description: 'Quantum computing solutions', priority: 0.8, changefreq: 'weekly', category: 'emerging' },
      { path: '/services/iot-edge-computing', name: 'IoT Edge Computing', description: 'Edge computing infrastructure', priority: 0.8, changefreq: 'weekly', category: 'emerging' },
      { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration', priority: 0.8, changefreq: 'weekly', category: 'emerging' },
      { path: '/space-tech', name: 'Space Technology', description: 'Space technology solutions', priority: 0.8, changefreq: 'weekly', category: 'emerging' },
      { path: '/services/digital-twin', name: 'Digital Twin', description: 'Digital twin technology', priority: 0.8, changefreq: 'weekly', category: 'emerging' },
      { path: '/services/digital-transformation', name: 'Digital Transformation', description: 'Digital transformation consulting', priority: 0.8, changefreq: 'weekly', category: 'emerging' },
      { path: '/services/sustainable-technology', name: 'Sustainable Technology', description: 'Green technology solutions', priority: 0.7, changefreq: 'monthly', category: 'emerging' },
      { path: '/services/ai-predictive-maintenance', name: 'AI Predictive Maintenance', description: 'Predictive maintenance with AI', priority: 0.7, changefreq: 'monthly', category: 'emerging' },
      { path: '/services/quantum-machine-learning', name: 'Quantum Machine Learning', description: 'Quantum machine learning', priority: 0.7, changefreq: 'monthly', category: 'emerging' }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: TrendingUp,
    description: 'Business intelligence and data insights',
    routes: [
      { path: '/services/data-analytics', name: 'Data Analytics', description: 'Business intelligence & insights', priority: 0.8, changefreq: 'weekly', category: 'data' },
      { path: '/services/ai-business-intelligence-analytics', name: 'Business Intelligence', description: 'Performance metrics & reporting', priority: 0.8, changefreq: 'weekly', category: 'data' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: Zap,
    description: 'Specialized software solutions for specific business needs',
    expanded: false,
    routes: [
      { path: '/services/micro-crm', name: 'Micro CRM', description: 'Customer relationship management', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/helpdesk-platform', name: 'Helpdesk Platform', description: 'Customer support platform', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/website-analytics', name: 'Website Analytics', description: 'Website performance analytics', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/it-helpdesk', name: 'IT Helpdesk', description: 'IT support management', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/affiliate-tracking', name: 'Affiliate Tracking', description: 'Affiliate program management', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/mobile-survey', name: 'Mobile Survey', description: 'Mobile survey platform', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/podcast-transcription', name: 'Podcast Transcription', description: 'Audio transcription service', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/email-sequencer', name: 'Email Sequencer', description: 'Email automation platform', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/returns-management', name: 'Returns Management', description: 'Returns processing system', priority: 0.8, changefreq: 'weekly', category: 'saas' },
      { path: '/services/llm-content-studio', name: 'LLM Content Studio', description: 'AI content creation platform', priority: 0.8, changefreq: 'weekly', category: 'saas' }
    ]
  },
  {
    title: 'Resources & Tools',
    icon: FileText,
    description: 'Developer resources, APIs, and tools',
    expanded: false,
    routes: [
      { path: '/api', name: 'API Documentation', description: 'API reference and documentation', priority: 0.7, changefreq: 'monthly', category: 'resources' },
      { path: '/developer-portal', name: 'Developer Portal', description: 'Developer resources and tools', priority: 0.6, changefreq: 'monthly', category: 'resources' },
      { path: '/api-demo', name: 'API Demo', description: 'API demonstration and testing', priority: 0.6, changefreq: 'monthly', category: 'resources' },
      { path: '/marketplace', name: 'Marketplace', description: 'Service marketplace', priority: 0.7, changefreq: 'weekly', category: 'resources' }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sitemapSections.filter(s => s.expanded).map(s => s.title))
  );

  const categoryOptions = [
    { value: 'all', label: 'All Categories', icon: Globe },
    { value: 'ai', label: 'AI & Machine Learning', icon: Brain },
    { value: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { value: 'security', label: 'Cybersecurity', icon: Shield },
    { value: 'emerging', label: 'Emerging Tech', icon: Atom },
    { value: 'data', label: 'Data & Analytics', icon: TrendingUp },
    { value: 'saas', label: 'Micro SaaS', icon: Zap },
    { value: 'business', label: 'Business & Support', icon: Building }
  ];

  // Filter sections based on search term and category
  const filteredSections = useMemo(() => {
    return sitemapSections.filter(section => {
      const matchesCategory = selectedCategory === 'all' || 
        section.title.toLowerCase().includes(selectedCategory) ||
        section.description.toLowerCase().includes(selectedCategory);
      
      const matchesSearch = searchTerm === '' || 
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.routes.some(route => 
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Zion Tech Group
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-zion-cyan mb-6">
              Complete Website Sitemap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI, IT, and Micro SaaS services. 
              Navigate through our organized service categories and find the perfect solution for your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-black/20 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search pages, services, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-zion-cyan/30 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-zion-cyan/30 rounded-lg bg-black/20 text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-zion-cyan">
            Showing {filteredSections.reduce((total, section) => total + section.routes.length, 0)} of {sitemapSections.reduce((total, section) => total + section.routes.length, 0)} pages
          </div>
        </div>
      </div>

        {/* Sitemap Content */}
        <div className="space-y-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.routes.map((route, routeIndex) => (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (routeIndex * 0.05) }}
                    className="group p-4 bg-white/5 rounded-xl border border-zion-cyan/10 hover:border-zion-cyan/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <Link
                          to={route.path}
                          className="text-lg font-medium text-zion-cyan group-hover:text-white transition-colors duration-300 hover:underline"
                        >
                          {route.name}
                        </Link>
                        {route.description && (
                          <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                            {route.description}
                          </p>
                        )}
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>Priority: {route.priority}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Activity className="w-4 h-4" />
                            <span>Update: {route.changefreq}</span>
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Link
                          to={route.path}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-zion-cyan hover:bg-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan transition-colors"
                        >
                          Visit
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
=======
  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const filteredSections = useMemo(() => {
    if (!searchTerm) return sitemapSections;
    
    return sitemapSections.map(section => ({
      ...section,
      routes: section.routes.filter(route =>
        route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.path.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.routes.length > 0);
  }, [searchTerm]);

  const totalRoutes = sitemapSections.reduce((acc, section) => acc + section.routes.length, 0);

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
              Site <span className="text-zion-cyan">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete navigation guide to all our services, pages, and resources. 
              Find exactly what you're looking for with our comprehensive site structure.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search pages and services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">{sitemapSections.length}</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">{totalRoutes}</div>
                <div className="text-sm text-gray-300">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">
                  {sitemapSections.reduce((acc, section) => 
                    acc + section.routes.filter(r => r.featured).length, 0
                  )}
                </div>
                <div className="text-sm text-gray-300">Featured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                {/* Section Header */}
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r from-zion-cyan to-blue-500 rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>
                  <div className="text-zion-cyan">
                    {expandedSections.has(section.title) ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Section Routes */}
                <AnimatePresence>
                  {expandedSections.has(section.title) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.routes.map((route, routeIndex) => (
                          <motion.div
                            key={route.path}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: routeIndex * 0.05 }}
                            className="group"
                          >
                            <Link
                              to={route.path}
                              className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105 h-full"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                                  {route.name}
                                </h4>
                                {route.featured && (
                                  <Star className="w-5 h-5 text-yellow-400" />
                                )}
                              </div>
                              
                              {route.description && (
                                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                                  {route.description}
                                </p>
                              )}

                              <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>Priority: {route.priority}</span>
                                <span>Update: {route.changefreq}</span>
                              </div>

                              <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300 mt-3">
                                <span className="text-sm font-medium">View Page</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
>>>>>>> 8b68610d1152707af25ae65f4bbf3817abb9ee4e
              </div>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD

        {/* No Results */}
        {filteredSections.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              No pages found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter.
            </p>
          </motion.div>
        )}

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
            >
              Go Home
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
=======
      </div>

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
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us if you can't find what you're looking for
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
>>>>>>> 8b68610d1152707af25ae65f4bbf3817abb9ee4e
      </div>
    </div>
  );
}
