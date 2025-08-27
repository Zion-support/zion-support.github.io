import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
