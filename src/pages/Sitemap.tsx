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
    title: 'Industry Solutions',
    icon: Building,
    description: 'Industry-specific technology solutions',
    routes: [
      { path: '/industry-solutions', name: 'Industry Solutions', description: 'Overview of industry solutions', priority: 0.8, changefreq: 'weekly' },
      { path: '/manufacturing-solutions', name: 'Manufacturing Solutions', description: 'Smart manufacturing technology', priority: 0.7, changefreq: 'monthly' },
      { path: '/financial-solutions', name: 'Financial Solutions', description: 'Financial technology solutions', priority: 0.7, changefreq: 'monthly' }
    ]
  },
  {
    title: 'Marketplace & Resources',
    icon: ShoppingCart,
    description: 'AI marketplace and resource center',
    routes: [
      { path: '/marketplace', name: 'AI Marketplace', description: 'AI services and solutions marketplace', priority: 0.8, changefreq: 'weekly' },
      { path: '/resources', name: 'Resources', description: 'Educational and technical resources', priority: 0.7, changefreq: 'monthly' },
      { path: '/blog', name: 'Blog', description: 'Latest news and insights', priority: 0.7, changefreq: 'weekly' },
      { path: '/case-studies', name: 'Case Studies', description: 'Success stories', priority: 0.7, changefreq: 'monthly' },
      { path: '/white-papers', name: 'White Papers', description: 'Technical documentation', priority: 0.6, changefreq: 'monthly' },
      { path: '/webinars', name: 'Webinars', description: 'Educational webinars', priority: 0.6, changefreq: 'monthly' }
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
      { path: '/faq', name: 'FAQ', description: 'Frequently asked questions', priority: 0.5, changefreq: 'monthly' },
      { path: '/help', name: 'Help Center', description: 'Support resources', priority: 0.6, changefreq: 'monthly' },
      { path: '/pricing', name: 'Pricing', description: 'Service pricing information', priority: 0.7, changefreq: 'monthly' }
    ]
  },
  {
    title: 'Support & Contact',
    icon: MessageCircle,
    description: 'Customer support and contact information',
    routes: [
      { path: '/support', name: 'Support', description: 'Technical support and help', priority: 0.6, changefreq: 'monthly' },
      { path: '/request-quote', name: 'Request Quote', description: 'Get a custom quote', priority: 0.7, changefreq: 'monthly' },
      { path: '/training', name: 'Training', description: 'Professional training programs', priority: 0.6, changefreq: 'monthly' },
      { path: '/consulting', name: 'Consulting', description: 'Technology consulting services', priority: 0.7, changefreq: 'monthly' }
    ]
  }
];

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter sections based on search term and category
  const filteredSections = useMemo(() => {
    return sitemapSections.filter(section => {
      const matchesCategory = selectedCategory === 'all' || section.title.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           section.routes.some(route => 
                             route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             route.description?.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Get unique categories for filter
  const categories = ['all', ...sitemapSections.map(section => section.title)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Map className="w-12 h-12 text-blue-600 dark:text-blue-400 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Sitemap
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Navigate through our comprehensive range of AI solutions, technology services, and resources. 
              Find exactly what you need to transform your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, pages, or resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white appearance-none bg-white dark:bg-gray-800"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredSections.length} categories with {filteredSections.reduce((total, section) => total + section.routes.length, 0)} total pages
          </div>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="space-y-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              {/* Section Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <section.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section Routes */}
              <div className="p-6">
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
                        className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/10"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {route.name}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {route.priority}
                          </span>
                        </div>
                        {route.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {route.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {route.changefreq}
                          </span>
                          <span className="text-blue-600 dark:text-blue-400 group-hover:underline">
                            View →
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center py-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Can't find what you're looking for?{' '}
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact our team
            </Link>{' '}
            for personalized assistance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
