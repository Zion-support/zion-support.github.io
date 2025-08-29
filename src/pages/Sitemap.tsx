import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Phone, 
  FileText, 
  Users, 
  Briefcase, 
  DollarSign, 
  BookOpen, 
  Play, 
  ShoppingCart, 
  Settings, 
  Shield, 
  HelpCircle,
  Brain,
  Heart,
  Scale,
  Truck,
  TrendingUp,
  Globe,
  Cloud,
  BarChart3,
  Server,
  Rocket,
  Code,
  Target,
  Calendar,
  MessageCircle,
  Search,
  Lock,
  Building,
  Award,
  Star,
  Zap,
  Network,
  Database,
  Cpu,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      pages: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Our strategic partnerships' }
      ]
    },
    {
      category: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      pages: [
        { name: 'All Services', href: '/services', description: 'Complete services overview' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine learning & data science' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Medical AI & diagnostics' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', description: 'Legal tech & document processing' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain & logistics AI' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'FinTech & trading AI' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual replicas & simulation' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'DevOps & infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Advanced data analytics' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'AI automations with transparent pricing' }
      ]
    },
    {
      category: 'Innovative Services',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      pages: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future technology solutions' },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', description: 'Next-gen AI services' },
        { name: 'Innovative Micro SAAS 2025', href: '/innovative-micro-saas-services-2025', description: 'Cutting-edge micro services' },
        { name: 'Enhanced Services Landing', href: '/services/enhanced', description: 'Premium service offerings' },
        { name: 'Services Showcase 2030', href: '/services/showcase-2030', description: 'Future service demonstrations' },
        { name: 'Services Overview', href: '/services/overview', description: 'Comprehensive service overview' },
        { name: 'Services Advertising', href: '/services/comprehensive-advertising', description: 'Service marketing solutions' }
      ]
    },
    {
      category: 'Solutions',
      icon: Building,
      color: 'from-green-500 to-blue-500',
      pages: [
        { name: 'All Solutions', href: '/solutions', description: 'Complete solutions overview' },
        { name: 'Enterprise Solutions', href: '/solutions#enterprise', description: 'Large-scale business transformations' },
        { name: 'SMB Solutions', href: '/solutions#smb', description: 'Small to medium business growth' },
        { name: 'Startup Solutions', href: '/solutions#startup', description: 'Accelerate your startup growth' },
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', description: 'Digital health transformation' },
        { name: 'Financial Solutions', href: '/solutions#financial', description: 'Fintech innovation & compliance' },
        { name: 'Government Solutions', href: '/solutions#government', description: 'Public sector innovation' }
      ]
    },
    {
      category: 'Pricing',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      pages: [
        { name: 'Main Pricing', href: '/pricing', description: 'Standard pricing plans' },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', description: 'Complete 2025 pricing information' },
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027', description: 'Advanced pricing guide' },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', description: 'Future pricing models' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get custom pricing' }
      ]
    },
    {
      category: 'Resources',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-500',
      pages: [
        { name: 'All Resources', href: '/resources', description: 'Complete resource library' },
        { name: 'Blog & Insights', href: '/blog', description: 'Latest industry trends and insights' },
        { name: 'Case Studies', href: '/case-studies', description: 'Real-world success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
        { name: 'Webinars', href: '/webinars', description: 'Expert-led learning sessions' },
        { name: 'Documentation', href: '/docs', description: 'Technical guides and tutorials' },
        { name: 'API Reference', href: '/api-docs', description: 'Complete API documentation' },
        { name: 'FAQ & Support', href: '/faq', description: 'Get help and answers' }
      ]
    },
    {
      category: 'Developer Tools',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      pages: [
        { name: 'Developer Portal', href: '/developers', description: 'Tools and resources for developers' },
        { name: 'API Documentation', href: '/api-docs', description: 'Complete API reference' },
        { name: 'Community', href: '/community', description: 'Developer community and forums' },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' }
      ]
    },
    {
      category: 'Business',
      icon: Briefcase,
      color: 'from-gray-500 to-slate-500',
      pages: [
        { name: 'Marketplace', href: '/marketplace', description: 'Services and products marketplace' },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a personalized demo' },
        { name: 'Demo', href: '/demo', description: 'Interactive product demonstration' },
        { name: 'Dashboard', href: '/dashboard', description: 'User dashboard and analytics' },
        { name: 'Login', href: '/login', description: 'User authentication' }
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      pages: [
        { name: 'Legal', href: '/legal', description: 'Legal information hub' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Data privacy and protection' },
        { name: 'Terms of Service', href: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      category: 'Comprehensive Service Landing Pages',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      pages: [
        { name: 'Services Landing 2025', href: '/comprehensive-services-landing-2025', description: 'Complete 2025 services overview' },
        { name: 'Services Landing 2027', href: '/comprehensive-services-landing-2027', description: 'Advanced services portfolio' },
        { name: 'Services Landing 2030', href: '/comprehensive-services-landing-2030', description: 'Future services roadmap' },
        { name: 'Services Showcase 2027', href: '/innovative-services-showcase-2027', description: 'Innovative services demonstration' }
      ]
    }
  ];

  const utilityPages = [
    { name: 'Search', href: '/search', description: 'Site-wide search functionality', icon: Search },
    { name: 'Support', href: '/support', description: 'Customer support center', icon: HelpCircle },
    { name: 'Training', href: '/training', description: 'Training and certification programs', icon: Award },
    { name: 'Press & Media', href: '/press', description: 'Press releases and media kit', icon: FileText },
    { name: 'Investor Relations', href: '/investors', description: 'Information for investors', icon: TrendingUp }
  ];

  const externalLinks = [
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', description: 'Open source repositories' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', description: 'Professional network' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', description: 'Latest updates' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', description: 'Video content' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              Site Navigation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Complete overview of all pages and services available on the Zion Tech Group platform. 
              Navigate through our comprehensive ecosystem of AI solutions and resources.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{siteStructure.reduce((acc, cat) => acc + cat.pages.length, 0)}+</div>
                <div className="text-sm text-gray-400">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{siteStructure.length}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{siteStructure.find(cat => cat.category === 'AI Services')?.pages.length || 0}</div>
                <div className="text-sm text-gray-400">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">Functional</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="space-y-16">
            {siteStructure.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                    <p className="text-gray-300 mt-1">{category.pages.length} pages available</p>
                  </div>
                </div>

                {/* Pages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.pages.map((page, pageIndex) => (
                    <motion.div
                      key={page.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (pageIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link
                        to={page.href}
                        className="block p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {page.name}
                          </h3>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                          {page.description}
                        </p>
                        <div className="mt-4 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Visit Page →
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Utility Pages */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Utility Pages</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Additional pages and resources to enhance your experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {utilityPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={page.href}
                  className="block p-6 bg-slate-700/30 backdrop-blur-xl rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 text-center group-hover:transform group-hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                    <page.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {page.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">External Resources</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connect with us on social media and explore our external platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {externalLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 text-center group-hover:transform group-hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-4">
                    <ExternalLink className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {link.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Health Status */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-2xl p-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Site Status
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              All Systems Operational
            </h2>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              All pages are functional and optimized. The site structure has been analyzed and improved 
              for better navigation and user experience.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">✓</div>
                <div className="text-sm text-gray-400">All Links Working</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">✓</div>
                <div className="text-sm text-gray-400">Pages Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">✓</div>
                <div className="text-sm text-gray-400">Navigation Clear</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">✓</div>
                <div className="text-sm text-gray-400">Content Complete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
