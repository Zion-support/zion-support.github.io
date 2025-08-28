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
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge technology solutions',
    routes: [
      { path: '/emerging-tech', name: 'Emerging Technologies', description: 'Overview of emerging tech solutions', priority: 0.8, changefreq: 'weekly' },
      { path: '/services/quantum-computing', name: 'Quantum Computing', description: 'Quantum computing solutions', priority: 0.7, changefreq: 'monthly' },
      { path: '/services/iot-edge-computing', name: 'IoT Edge Computing', description: 'Edge computing for IoT', priority: 0.7, changefreq: 'monthly' },
      { path: '/services/space-tech', name: 'Space Technology', description: 'Space and aerospace solutions', priority: 0.7, changefreq: 'monthly' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Building,
    description: 'Industry-specific technology solutions',
    routes: [
      { path: '/industry-solutions', name: 'Industry Solutions', description: 'Overview of industry solutions', priority: 0.8, changefreq: 'weekly' },
      { path: '/manufacturing-solutions', name: 'Manufacturing Solutions', description: 'Smart manufacturing technology', priority: 0.7, changefreq: 'monthly' },
      { path: '/financial-solutions', name: 'Financial Solutions', description: 'Financial technology solutions', priority: 0.7, changefreq: 'monthly' },
      { path: '/solutions/healthcare', name: 'Healthcare Solutions', description: 'Healthcare technology solutions', priority: 0.7, changefreq: 'monthly' }
    ]
  },
  {
    title: 'Company & Resources',
    icon: Users,
    description: 'Company information and resources',
    routes: [
      { path: '/team', name: 'Team', description: 'Meet our team', priority: 0.6, changefreq: 'monthly' },
      { path: '/leadership', name: 'Leadership', description: 'Company leadership', priority: 0.6, changefreq: 'monthly' },
      { path: '/careers', name: 'Careers', description: 'Job opportunities', priority: 0.6, changefreq: 'monthly' },
      { path: '/partners', name: 'Partners', description: 'Partnership information', priority: 0.6, changefreq: 'monthly' },
      { path: '/blog', name: 'Blog', description: 'Latest news and insights', priority: 0.7, changefreq: 'weekly' },
      { path: '/case-studies', name: 'Case Studies', description: 'Success stories', priority: 0.7, changefreq: 'monthly' },
      { path: '/faq', name: 'FAQ', description: 'Frequently asked questions', priority: 0.5, changefreq: 'monthly' },
      { path: '/help', name: 'Help Center', description: 'Support resources', priority: 0.6, changefreq: 'monthly' },
      { path: '/pricing', name: 'Pricing', description: 'Service pricing information', priority: 0.7, changefreq: 'monthly' }
    ]
  }
];

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter sections based on search and category
  const filteredSections = useMemo(() => {
    let sections = sitemapSections;
    
    if (selectedCategory !== 'all') {
      sections = sections.filter(section => 
        section.title.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchTerm) {
      sections = sections.map(section => ({
        ...section,
        routes: section.routes.filter(route =>
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.path.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(section => section.routes.length > 0);
    }
    
    return sections;
  }, [searchTerm, selectedCategory]);

  const categories = ['all', ...sitemapSections.map(section => section.title)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Map className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete navigation guide to Zion Tech Group's website. Find all our services, 
              solutions, and resources organized for easy discovery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pages, services, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-700 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sitemap Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.routes.map((route, routeIndex) => (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: routeIndex * 0.05 }}
                    className="group"
                  >
                    <Link
                      to={route.path}
                      className="block p-4 bg-slate-700/30 border border-slate-600/30 rounded-lg hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
                          {route.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                            {route.priority}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-400/10 px-2 py-1 rounded">
                            {route.changefreq}
                          </span>
                        </div>
                      </div>
                      {route.description && (
                        <p className="text-sm text-gray-400 mb-2">{route.description}</p>
                      )}
                      <div className="text-xs text-cyan-400 font-mono">{route.path}</div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate our services and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
