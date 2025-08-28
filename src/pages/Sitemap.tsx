import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Map, 
  Globe, 
  Brain, 
  Server, 
  Shield, 
  Zap, 
  Users, 
  FileText,
  Building,
  Heart,
  Star,
  TrendingUp,
  Rocket,
  Cpu,
  Cloud,
  Lock,
  Palette,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageCircle,
  Target,
  GitFork,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Eye,
  Sparkles,
  ShoppingCart,
  HelpCircle,
  DollarSign,
  Truck,
  Clock,
  BookOpen,
  Briefcase,
  Newspaper,
  PenTool
} from 'lucide-react';
import { defaultSitemapConfig } from '../utils/sitemapGenerator';

interface SitemapSection {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  routes: Array<{
    path: string;
    name: string;
    description?: string;
    priority: number;
    changefreq: string;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    description: 'Core website pages and navigation',
    routes: [
      { name: 'Home', path: '/', description: 'Main landing page', priority: 1.0, changefreq: 'daily' },
      { name: 'About', path: '/about', description: 'Company information', priority: 0.8, changefreq: 'weekly' },
      { name: 'Services', path: '/services', description: 'Main services overview', priority: 0.9, changefreq: 'weekly' },
      { name: 'Contact', path: '/contact', description: 'Get in touch', priority: 0.7, changefreq: 'monthly' },
      { name: 'Blog', path: '/blog', description: 'Latest news and insights', priority: 0.8, changefreq: 'weekly' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities', priority: 0.6, changefreq: 'monthly' },
      { name: 'Partners', path: '/partners', description: 'Partnership information', priority: 0.6, changefreq: 'monthly' },
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories', priority: 0.7, changefreq: 'monthly' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions', priority: 0.5, changefreq: 'monthly' },
      { name: 'Help Center', path: '/help', description: 'Support resources', priority: 0.6, changefreq: 'monthly' },
      { name: 'Sitemap', path: '/sitemap', description: 'This page', priority: 0.3, changefreq: 'monthly' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Advanced AI-powered solutions and automation',
    links: [
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow automation' },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'AI-powered data governance' },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'AI-powered customer insights' },
      { name: 'AI Business Intelligence Analytics', path: '/services/ai-business-intelligence-analytics', description: 'Advanced analytics & ML insights' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
      { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'AI-powered financial risk assessment' },
      { name: 'AI Code Review Security Scanner', path: '/services/ai-code-review-security-scanner', description: 'Automated code security analysis' },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', description: 'AI-driven DevOps automation' },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', description: 'Enhanced customer experience' },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing automation' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration platform' },
      { name: 'AI Quantum Financial Trading', path: '/services/ai-quantum-financial-trading', description: 'Quantum-AI trading platform' },
      { name: 'AI Autonomous Supply Chain', path: '/services/ai-autonomous-supply-chain', description: 'AI-powered supply chain automation' },
      { name: 'AI Cybersecurity Threat Intelligence', path: '/services/ai-cybersecurity-threat-intelligence', description: 'AI-powered threat detection' }
    ]
  },
  {
    title: 'Cloud & DevOps Services',
    icon: Cloud,
    description: 'Infrastructure, automation, and cloud solutions',
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security, compliance, and data protection',
    links: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' }
    ]
  },
  {
    title: 'Digital Transformation',
    icon: Zap,
    description: 'Strategic technology consulting and transformation',
    links: [
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Next-generation technology solutions',
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space-based solutions' }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    description: 'Business intelligence and data insights',
    links: [
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'Business Intelligence', path: '/services/ai-business-intelligence-analytics', description: 'Performance metrics & reporting' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Niche software solutions and tools',
    links: [
      { name: 'Micro SaaS Platform', path: '/micro-saas', description: 'Niche software solutions' },
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support system' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio to text conversion' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Automated email campaigns' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Product returns system' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' }
    ]
  },
  {
    title: 'Featured Service Showcases',
    icon: Star,
    description: 'Specialized service collections and showcases',
    links: [
      { name: '2025 New Innovative Services', path: '/new-innovative-services-2025', description: 'Revolutionary AI & Micro SAAS Solutions' },
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
      { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
      { name: '2029 Comprehensive Services Showcase', path: '/comprehensive-services-showcase-2029', description: 'Complete Portfolio of AI, IT & Micro SaaS Solutions' }
    ]
  },
  {
    title: 'Additional Services',
    icon: Rocket,
    description: 'Specialized and industry-specific solutions',
    links: [
      { name: 'Marketplace', path: '/marketplace', description: 'Service marketplace' },
      { name: 'Pricing Guide', path: '/pricing', description: 'Service pricing information' },
      { name: 'News & Updates', path: '/news', description: 'Company news and updates' },
      { name: 'Help Center', path: '/help', description: 'Support and documentation' }
    ]
  }
];

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fdeb
export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Organize routes into logical sections
  const sitemapSections: SitemapSection[] = useMemo(() => [
    {
      title: 'Main Pages',
      icon: Globe,
      description: 'Core website pages and navigation',
      routes: [
        { path: '/', name: 'Home', description: 'Main landing page', priority: 1.0, changefreq: 'daily' },
        { path: '/about', name: 'About Us', description: 'Company information and mission', priority: 0.8, changefreq: 'monthly' },
        { path: '/contact', name: 'Contact', description: 'Get in touch with our team', priority: 0.8, changefreq: 'monthly' },
        { path: '/sitemap', name: 'Sitemap', description: 'Complete site navigation', priority: 0.6, changefreq: 'weekly' }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      description: 'Artificial intelligence and machine learning solutions',
      routes: [
        { path: '/ai-services', name: 'AI Services Hub', description: 'Overview of AI services', priority: 0.9, changefreq: 'weekly' },
        { path: '/services/ai-workflow-orchestrator', name: 'AI Workflow Orchestrator', description: 'AI-powered workflow automation', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/ai-data-governance-platform', name: 'AI Data Governance Platform', description: 'AI-powered data governance', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/ai-customer-experience-analytics', name: 'AI Customer Experience Analytics', description: 'AI-powered customer insights', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/ai-sales-copilot', name: 'AI Sales Copilot', description: 'Intelligent sales optimization', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated regulatory compliance', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/ai-powered-seo', name: 'AI-Powered SEO', description: 'Machine learning SEO optimization', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/interview-assessment-ai', name: 'Interview Assessment AI', description: 'AI-powered candidate evaluation', priority: 0.7, changefreq: 'monthly' }
      ]
    },
    {
      title: 'IT & Infrastructure Services',
      icon: Server,
      description: 'Information technology and infrastructure solutions',
      routes: [
        { path: '/it-services', name: 'IT Services Overview', description: 'Complete IT services portfolio', priority: 0.9, changefreq: 'weekly' },
        { path: '/services/cloud-devops', name: 'Cloud DevOps', description: 'Infrastructure automation & scaling', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/it-infrastructure', name: 'IT Infrastructure', description: 'Enterprise infrastructure solutions', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', description: 'Financial operations automation', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/finops-advisor', name: 'FinOps Advisor', description: 'Cloud cost optimization', priority: 0.7, changefreq: 'monthly' }
      ]
    },
    {
      title: 'Cybersecurity Services',
      icon: Shield,
      description: 'Security and compliance solutions',
      routes: [
        { path: '/services/security-headers-csp', name: 'Security Headers & CSP', description: 'Web security hardening', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/dsr-portal', name: 'DSR Privacy Portal', description: 'GDPR/CCPA compliance', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/zero-trust-network-access', name: 'Zero Trust Network Access', description: 'Modern security architecture', priority: 0.7, changefreq: 'monthly' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Zap,
      description: 'Specialized software-as-a-service applications',
      routes: [
        { path: '/micro-saas', name: 'Micro SaaS Overview', description: 'Specialized SaaS solutions', priority: 0.8, changefreq: 'weekly' },
        { path: '/services/micro-crm', name: 'Micro CRM', description: 'Lightweight customer relationship management', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/website-analytics', name: 'Website Analytics', description: 'Comprehensive website insights', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/affiliate-tracking', name: 'Affiliate Tracking', description: 'Affiliate program management', priority: 0.7, changefreq: 'monthly' },
        { path: '/services/mobile-survey', name: 'Mobile Survey', description: 'Mobile-first survey platform', priority: 0.7, changefreq: 'monthly' }
      ]
    },
    {
      title: 'Service Showcases',
      icon: Star,
      description: 'Year-based service overviews and innovations',
      routes: [
        { path: '/new-innovative-services-2025', name: '2025 New Innovative Services', description: 'Revolutionary AI & Micro SAAS Solutions', priority: 0.8, changefreq: 'weekly' },
        { path: '/ultimate-services-showcase-2026', name: '2026 Services Overview', description: 'Revolutionary AI & Quantum Solutions', priority: 0.8, changefreq: 'weekly' },
        { path: '/comprehensive-services-showcase-2027', name: '2027 Services Overview', description: 'Cutting-edge Innovation & Emerging Tech', priority: 0.8, changefreq: 'weekly' },
        { path: '/zion-cutting-edge-services-2029', name: '2029 Cutting-Edge Services', description: 'Future-ready Technology Solutions', priority: 0.8, changefreq: 'weekly' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: Target,
      description: 'Industry-specific solutions and use cases',
      routes: [
        { path: '/ai-solutions', name: 'AI Solutions Overview', description: 'Comprehensive AI solutions', priority: 0.8, changefreq: 'weekly' },
        { path: '/solutions/enterprise', name: 'Enterprise Solutions', description: 'Large-scale business solutions', priority: 0.7, changefreq: 'monthly' },
        { path: '/solutions/healthcare', name: 'Healthcare Solutions', description: 'Healthcare technology solutions', priority: 0.7, changefreq: 'monthly' }
      ]
    },
    {
      title: 'Business & Support',
      icon: Building,
      description: 'Business operations and customer support',
      routes: [
        { path: '/blog', name: 'Blog', description: 'Company insights and updates', priority: 0.6, changefreq: 'weekly' },
        { path: '/careers', name: 'Careers', description: 'Job opportunities and careers', priority: 0.6, changefreq: 'weekly' },
        { path: '/partners', name: 'Partners', description: 'Partnership information', priority: 0.5, changefreq: 'monthly' },
        { path: '/news', name: 'News', description: 'Company news and announcements', priority: 0.5, changefreq: 'weekly' },
        { path: '/case-studies', name: 'Case Studies', description: 'Success stories and examples', priority: 0.6, changefreq: 'monthly' },
        { path: '/help-center', name: 'Help Center', description: 'Customer support and help', priority: 0.5, changefreq: 'monthly' },
        { path: '/faq', name: 'FAQ', description: 'Frequently asked questions', priority: 0.5, changefreq: 'monthly' },
        { path: '/pricing', name: 'Pricing', description: 'Service pricing information', priority: 0.6, changefreq: 'monthly' },
        { path: '/marketplace', name: 'Marketplace', description: 'Service marketplace', priority: 0.7, changefreq: 'weekly' }
      ]
    }
  ], []);

  // Filter sections and routes based on search and category
  const filteredSections = useMemo(() => {
    return sitemapSections.map(section => ({
      ...section,
      routes: section.routes.filter(route => {
        const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            route.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            route.path.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === 'all' || 
                              (selectedCategory === 'ai' && section.title.includes('AI')) ||
                              (selectedCategory === 'it' && section.title.includes('IT')) ||
                              (selectedCategory === 'saas' && section.title.includes('SaaS')) ||
                              (selectedCategory === 'business' && section.title.includes('Business'));
        
        return matchesSearch && matchesCategory;
      })
    })).filter(section => section.routes.length > 0);
  }, [sitemapSections, searchTerm, selectedCategory]);

  const categoryOptions = [
    { value: 'all', label: 'All Categories', icon: Globe },
    { value: 'ai', label: 'AI & ML', icon: Brain },
    { value: 'it', label: 'IT & Infrastructure', icon: Server },
    { value: 'saas', label: 'Micro SaaS', icon: Zap },
    { value: 'business', label: 'Business & Support', icon: Building }
  ];

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
            Showing {filteredSections.reduce((total, section) => total + section.routes.length, 0)} of {defaultSitemapConfig.urls.length} pages
          </div>
        </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {sitemapSections.map((section, index) => (

                {/* Sitemap Sections */}
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
              </div>
            </motion.div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
