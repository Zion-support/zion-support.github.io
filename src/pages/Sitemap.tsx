import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Activity, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Building,
  Server
} from 'lucide-react';

interface SitemapRoute {
  path: string;
  name: string;
  description?: string;
  priority: string;
  changefreq: string;
  category: string;
}

interface SitemapSection {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  routes: SitemapRoute[];
}

const Sitemap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const defaultSitemapConfig = {
    urls: [
      // AI Services
      { path: '/ai-services', name: 'AI Services Overview', description: 'Comprehensive AI solutions and platforms', priority: '1.0', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/autonomous-business-manager', name: 'AI Autonomous Business Manager', description: 'AI-powered business management platform', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/autonomous-code-review', name: 'AI Autonomous Code Review', description: 'Automated code review and security scanning', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/business-intelligence', name: 'AI Business Intelligence', description: 'Advanced analytics and business insights', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/content-creation', name: 'AI Content Creation', description: 'Automated content generation and marketing', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/cybersecurity', name: 'AI Cybersecurity', description: 'AI-powered threat detection and security', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/customer-support', name: 'AI Customer Support', description: 'Intelligent customer service automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/data-analytics', name: 'AI Data Analytics', description: 'Advanced data analysis and insights', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/devops-automation', name: 'AI DevOps Automation', description: 'Intelligent DevOps and CI/CD automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/financial-analytics', name: 'AI Financial Analytics', description: 'AI-powered financial analysis and trading', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/healthcare-platform', name: 'AI Healthcare Platform', description: 'AI solutions for healthcare and medical research', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/hr-platform', name: 'AI HR Platform', description: 'Intelligent human resources management', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/legal-automation', name: 'AI Legal Automation', description: 'Automated legal document processing', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/marketing-automation', name: 'AI Marketing Automation', description: 'Intelligent marketing and personalization', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/project-management', name: 'AI Project Management', description: 'AI-powered project planning and execution', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/quantum-ai', name: 'Quantum AI Platform', description: 'Quantum computing and AI integration', priority: '0.9', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/supply-chain', name: 'AI Supply Chain', description: 'Intelligent supply chain optimization', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/ai-services/workflow-automation', name: 'AI Workflow Automation', description: 'Intelligent business process automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },

      // Cloud & DevOps
      { path: '/cloud-devops', name: 'Cloud & DevOps Services', description: 'Comprehensive cloud infrastructure and DevOps solutions', priority: '0.9', changefreq: 'weekly', category: 'cloud' },
      { path: '/cloud-devops/cloud-migration', name: 'Cloud Migration', description: 'Seamless cloud migration and optimization', priority: '0.9', changefreq: 'weekly', category: 'cloud' },
      { path: '/cloud-devops/devops-automation', name: 'DevOps Automation', description: 'CI/CD pipeline automation and management', priority: '0.9', changefreq: 'weekly', category: 'cloud' },
      { path: '/cloud-devops/infrastructure-as-code', name: 'Infrastructure as Code', description: 'Automated infrastructure provisioning', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/cloud-devops/kubernetes', name: 'Kubernetes Services', description: 'Container orchestration and management', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/cloud-devops/microservices', name: 'Microservices Architecture', description: 'Scalable microservices design and implementation', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/cloud-devops/serverless', name: 'Serverless Solutions', description: 'Serverless architecture and optimization', priority: '0.8', changefreq: 'weekly', category: 'cloud' },

      // Cybersecurity
      { path: '/cybersecurity', name: 'Cybersecurity Services', description: 'Advanced security solutions and threat protection', priority: '0.9', changefreq: 'weekly', category: 'security' },
      { path: '/cybersecurity/threat-detection', name: 'Threat Detection', description: 'AI-powered threat detection and response', priority: '0.9', changefreq: 'weekly', category: 'security' },
      { path: '/cybersecurity/incident-response', name: 'Incident Response', description: 'Rapid security incident response and recovery', priority: '0.9', changefreq: 'weekly', category: 'security' },
      { path: '/cybersecurity/compliance', name: 'Compliance & Governance', description: 'Security compliance and risk management', priority: '0.8', changefreq: 'weekly', category: 'security' },
      { path: '/cybersecurity/zero-trust', name: 'Zero Trust Security', description: 'Zero trust network architecture implementation', priority: '0.8', changefreq: 'weekly', category: 'security' },
      { path: '/cybersecurity/penetration-testing', name: 'Penetration Testing', description: 'Comprehensive security testing and assessment', priority: '0.8', changefreq: 'weekly', category: 'security' },

      // IT & Infrastructure
      { path: '/it-services', name: 'IT Services', description: 'Comprehensive IT infrastructure and support', priority: '0.9', changefreq: 'weekly', category: 'it' },
      { path: '/it-services/onsite-support', name: 'Onsite IT Support', description: 'Professional onsite technical support', priority: '0.8', changefreq: 'weekly', category: 'it' },
      { path: '/it-services/network-infrastructure', name: 'Network Infrastructure', description: 'Network design, implementation, and management', priority: '0.8', changefreq: 'weekly', category: 'it' },
      { path: '/it-services/data-center', name: 'Data Center Services', description: 'Data center design and management', priority: '0.8', changefreq: 'weekly', category: 'it' },
      { path: '/it-services/backup-recovery', name: 'Backup & Recovery', description: 'Data backup and disaster recovery solutions', priority: '0.8', changefreq: 'weekly', category: 'it' },
      { path: '/it-services/helpdesk', name: 'IT Helpdesk', description: '24/7 IT support and ticketing system', priority: '0.8', changefreq: 'weekly', category: 'it' },

      // Micro SaaS
      { path: '/micro-saas', name: 'Micro SaaS Solutions', description: 'Specialized software-as-a-service solutions', priority: '0.9', changefreq: 'weekly', category: 'saas' },
      { path: '/micro-saas/crm', name: 'Micro CRM', description: 'Lightweight customer relationship management', priority: '0.8', changefreq: 'weekly', category: 'saas' },
      { path: '/micro-saas/project-tracking', name: 'Project Tracking', description: 'Simple project management and tracking', priority: '0.8', changefreq: 'weekly', category: 'saas' },
      { path: '/micro-saas/analytics', name: 'Business Analytics', description: 'Essential business metrics and insights', priority: '0.8', changefreq: 'weekly', category: 'saas' },
      { path: '/micro-saas/automation', name: 'Workflow Automation', description: 'Simple business process automation', priority: '0.8', changefreq: 'weekly', category: 'saas' },
      { path: '/micro-saas/integrations', name: 'API Integrations', description: 'Easy third-party service integrations', priority: '0.8', changefreq: 'weekly', category: 'saas' },

      // Business & Support
      { path: '/consulting', name: 'Business Consulting', description: 'Strategic business and technology consulting', priority: '0.8', changefreq: 'monthly', category: 'business' },
      { path: '/digital-transformation', name: 'Digital Transformation', description: 'End-to-end digital transformation services', priority: '0.8', changefreq: 'monthly', category: 'business' },
      { path: '/training', name: 'Training & Education', description: 'Professional training and skill development', priority: '0.7', changefreq: 'monthly', category: 'business' },
      { path: '/support', name: 'Technical Support', description: 'Comprehensive technical support services', priority: '0.8', changefreq: 'weekly', category: 'business' },
      { path: '/documentation', name: 'Documentation', description: 'Technical documentation and knowledge base', priority: '0.7', changefreq: 'monthly', category: 'business' },

      // Core Pages
      { path: '/', name: 'Home', description: 'Main landing page', priority: '1.0', changefreq: 'daily', category: 'core' },
      { path: '/about', name: 'About Us', description: 'Company information and mission', priority: '0.8', changefreq: 'monthly', category: 'core' },
      { path: '/contact', name: 'Contact', description: 'Contact information and form', priority: '0.9', changefreq: 'monthly', category: 'core' },
      { path: '/pricing', name: 'Pricing', description: 'Service pricing and plans', priority: '0.8', changefreq: 'monthly', category: 'core' },
      { path: '/case-studies', name: 'Case Studies', description: 'Success stories and client testimonials', priority: '0.7', changefreq: 'monthly', category: 'core' },
      { path: '/blog', name: 'Blog', description: 'Industry insights and updates', priority: '0.6', changefreq: 'weekly', category: 'core' },
      { path: '/careers', name: 'Careers', description: 'Job opportunities and company culture', priority: '0.6', changefreq: 'monthly', category: 'core' }
    ]
  };

  const categoryOptions = [
    { value: 'all', label: 'All Categories', icon: Search },
    { value: 'ai', label: 'AI & Machine Learning', icon: Brain },
    { value: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { value: 'security', label: 'Cybersecurity', icon: Shield },
    { value: 'it', label: 'IT & Infrastructure', icon: Server },
    { value: 'saas', label: 'Micro SaaS', icon: Zap },
    { value: 'business', label: 'Business & Support', icon: Building },
    { value: 'core', label: 'Core Pages', icon: Users }
  ];

  const sitemapSections: SitemapSection[] = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for modern businesses',
      icon: Brain,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'ai')
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      icon: Cloud,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'cloud')
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security and threat protection',
      icon: Shield,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'security')
    },
    {
      title: 'IT & Infrastructure',
      description: 'Comprehensive IT services and support',
      icon: Server,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'it')
    },
    {
      title: 'Micro SaaS',
      description: 'Specialized software solutions',
      icon: Zap,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'saas')
    },
    {
      title: 'Business & Support',
      description: 'Strategic consulting and support services',
      icon: Building,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'business')
    },
    {
      title: 'Core Pages',
      description: 'Essential website pages and information',
      icon: Users,
      routes: defaultSitemapConfig.urls.filter(url => url.category === 'core')
    }
  ];

  const filteredSections = useMemo(() => {
    return sitemapSections.map(section => ({
      ...section,
      routes: section.routes.filter(route => {
        const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (route.description && route.description.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || route.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
    })).filter(section => section.routes.length > 0);
  }, [sitemapSections, searchTerm, selectedCategory]);

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
};

export default Sitemap;
