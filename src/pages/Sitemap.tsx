import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  Star,
  Atom,
  Network,
  Eye,
  PenTool,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  DollarSign,
  Workflow,
  Target,
  Building,
  FileText,
  Video,
  TestTube,
  CheckCircle,
  Briefcase,
  Newspaper,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Team', path: '/team', description: 'Meet our experts' },
        { name: 'News', path: '/news', description: 'Company updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', path: '/help', description: 'Support resources' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing' },
        { name: 'Pricing', path: '/pricing', description: 'Service costs' },
        { name: 'Marketplace', path: '/marketplace', description: 'AI solutions marketplace' },
        { name: 'Login', path: '/login', description: 'Access your account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Search', path: '/search', description: 'Find services and content' },
      ]
    },
    {
      title: 'Featured Services',
      icon: Star,
      featured: true,
      links: [
        { name: '2026 Services Overview', path: '/services2026', description: 'Revolutionary AI & Quantum Solutions', featured: true },
        { name: '2027 Services Overview', path: '/services2027', description: 'Cutting-edge Innovation & Emerging Tech', featured: true },
        { name: 'AI Solutions Hub', path: '/ai-solutions', description: 'Comprehensive AI services', featured: true },
        { name: 'IT Services', path: '/it-services', description: 'Technology infrastructure solutions', featured: true },
        { name: 'Micro SaaS Solutions', path: '/micro-saas', description: 'Niche software solutions', featured: true },
        { name: 'Comprehensive Services', path: '/comprehensive-services', description: 'Full-service technology consulting', featured: true },
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project coordination' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing workflows' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial insights & predictions' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'Independent research automation' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain intelligence' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Complete content automation' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Creative content automation' },
      ]
    },
    {
      title: 'Cloud & DevOps Services',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      links: [
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security solutions' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Advanced network security' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection information' },
        { name: 'Security', path: '/security', description: 'Security practices & policies' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green tech solutions' },
        { name: 'Green IT Solutions', path: '/services/green-it', description: 'Environmentally conscious IT' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas-solutions', description: 'Niche software solutions' },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Customer Feedback Surveys', path: '/services/mobile-feedback-surveys', description: 'Feedback collection tools' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'Return process automation' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation workflows' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio-to-text conversion' },
        { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
        { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile data collection' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Web performance insights' },
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support management' },
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      links: [
        { name: 'Solutions Overview', path: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large business solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Manufacturing Solutions', path: '/services/manufacturing-solutions', description: 'Industry 4.0 solutions' },
        { name: 'Talent Solutions', path: '/talent', description: 'Human resources technology' },
        { name: 'Equipment Services', path: '/equipment', description: 'Hardware & equipment' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation & R&D' },
        { name: 'Training', path: '/training', description: 'Professional development' },
        { name: 'Support', path: '/support', description: 'Technical support services' },
      ]
    },
    {
      title: 'Resources & Documentation',
      icon: FileText,
      links: [
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'White Papers', path: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' },
        { name: 'Status Page', path: '/status', description: 'Service status' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection' },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete navigation guide for Zion Tech Group's AI, quantum computing, and technology services."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for Zion Tech Group's comprehensive suite of AI, quantum computing, 
            and cutting-edge technology services. Find everything you need to transform your business.
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  section.featured 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                    : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                }`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${
                    section.featured ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {section.title}
                  </h2>
                  {section.featured && (
                    <span className="text-sm text-yellow-300">Featured</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                          {link.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
=======
import { motion } from 'framer-motion';
import { 
  Search, 
  Globe, 
  Brain, 
  Server, 
  Shield, 
  Zap, 
  Star, 
  Target, 
  Building,
  TrendingUp,
  Activity
} from 'lucide-react';

interface Route {
  path: string;
  name: string;
  description: string;
  priority: number;
  changefreq: string;
}

interface SitemapSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  routes: Route[];
}

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
        { path: '/marketplace', name: 'Marketplace', description: 'Service marketplace', priority: 0.8, changefreq: 'weekly' },
        { path: '/pricing', name: 'Pricing Guide', description: 'Service pricing information', priority: 0.7, changefreq: 'monthly' },
        { path: '/news', name: 'News & Updates', description: 'Company news and updates', priority: 0.6, changefreq: 'weekly' },
        { path: '/help', name: 'Help Center', description: 'Support and documentation', priority: 0.7, changefreq: 'monthly' }
      ]
    }
  ], []);

  // Filter sections based on search and category
  const filteredSections = useMemo(() => {
    let filtered = sitemapSections;
    
    if (searchTerm) {
      filtered = filtered.map(section => ({
        ...section,
        routes: section.routes.filter(route =>
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.path.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(section => section.routes.length > 0);
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(section => {
        const categoryMap: { [key: string]: string[] } = {
          'ai': ['AI & Machine Learning Services'],
          'it': ['IT & Infrastructure Services', 'Cybersecurity Services'],
          'saas': ['Micro SaaS Solutions'],
          'business': ['Business & Support', 'Solutions & Industries']
        };
        return categoryMap[selectedCategory]?.includes(section.title) || false;
      });
    }
    
    return filtered;
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
            Showing {filteredSections.reduce((total, section) => total + section.routes.length, 0)} of {sitemapSections.reduce((total, section) => total + section.routes.length, 0)} pages
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Explore our services or get in touch to discuss how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="text-sm mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
