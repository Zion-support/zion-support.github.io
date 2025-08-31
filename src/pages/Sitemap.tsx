import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Sitemap, 
  Home, 
  Users, 
  Settings, 
  HelpCircle, 
  FileText, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  BarChart3,
  Shield,
  Lock,
  Eye,
  Key,
  Server,
  Network,
  Brain,
  Cloud,
  Database,
  Code,
  Target,
  Rocket,
  Lightbulb,
  Car,
  GraduationCap,
  Factory,
  ShoppingCart,
  Camera,
  Gamepad2,
  Microscope,
  Building2,
  Scale,
  Gavel,
  BookOpen,
  Clipboard,
  Mail,
  Phone,
  MessageCircle,
  Video,
  Award,
  Heart,
  Zap
} from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information and mission' },
        { name: 'Services', path: '/services', description: 'Our service offerings' },
        { name: 'Solutions', path: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Products', path: '/products', description: 'Software products and platforms' },
        { name: 'Case Studies', path: '/case-studies', description: 'Client success stories' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      category: 'Business',
      icon: Building2,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Service pricing and plans' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Blog', path: '/blog', description: 'Industry insights and news' },
        { name: 'Leadership', path: '/leadership', description: 'Company leadership team' },
        { name: 'Research & Development', path: '/research-development', description: 'R&D initiatives' }
      ]
    },
    {
      category: 'Support & Help',
      icon: HelpCircle,
      pages: [
        { name: 'Help', path: '/help', description: 'Help and support resources' },
        { name: 'Support', path: '/support', description: 'Technical support center' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step guides' },
        { name: 'Community', path: '/community', description: 'User community forum' }
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: Scale,
      pages: [
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy information' },
        { name: 'Cookies Policy', path: '/cookies', description: 'Cookie usage policy' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Security', path: '/security', description: 'Security measures and policies' },
        { name: 'Compliance', path: '/compliance', description: 'Compliance certifications' }
      ]
    },
    {
      category: 'User Account',
      icon: Users,
      pages: [
        { name: 'Login', path: '/login', description: 'User login page' },
        { name: 'Sign Up', path: '/signup', description: 'Create new account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Profile', path: '/profile', description: 'User profile management' },
        { name: 'Account Settings', path: '/account-settings', description: 'Account configuration' },
        { name: 'Billing', path: '/billing', description: 'Billing and subscription management' }
      ]
    },
    {
      category: 'E-commerce',
      icon: ShoppingCart,
      pages: [
        { name: 'Marketplace', path: '/marketplace', description: 'Product marketplace' },
        { name: 'Cart', path: '/cart', description: 'Shopping cart' },
        { name: 'Checkout', path: '/checkout', description: 'Payment and checkout' },
        { name: 'Orders', path: '/orders', description: 'Order history and tracking' },
        { name: 'Wishlist', path: '/wishlist', description: 'Saved items' },
        { name: 'Product Categories', path: '/categories', description: 'Product categories' }
      ]
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        'AI Business Manager',
        'AI Analytics Platform',
        'AI Security Solutions',
        'AI Process Automation',
        'AI Decision Support',
        'AI Research Tools'
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        'Cloud Migration',
        'DevOps Services',
        'Infrastructure Management',
        'Cloud Security',
        'Scalability Solutions',
        'Disaster Recovery'
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Audits',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ]
    },
    {
      name: 'Digital Transformation',
      icon: Zap,
      services: [
        'Process Optimization',
        'Digital Strategy',
        'Technology Consulting',
        'Change Management',
        'Legacy Modernization',
        'Innovation Labs'
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: [
        'HIPAA Compliance',
        'Patient Data Management',
        'Telemedicine Platforms',
        'Medical AI Solutions',
        'Healthcare Analytics',
        'Clinical Systems'
      ]
    },
    {
      industry: 'Finance',
      icon: Building2,
      solutions: [
        'Fintech Solutions',
        'Regulatory Compliance',
        'Risk Management',
        'Payment Systems',
        'Financial Analytics',
        'Blockchain Solutions'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: [
        'Industry 4.0',
        'IoT Integration',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Quality Control',
        'Automation Solutions'
      ]
    },
    {
      industry: 'Education',
      icon: GraduationCap,
      solutions: [
        'Learning Management Systems',
        'Educational AI',
        'Student Analytics',
        'Virtual Classrooms',
        'Assessment Tools',
        'Administrative Systems'
      ]
    }
  ];

  const quickLinks = [
    { name: 'Contact Us', path: '/contact', icon: Mail },
    { name: 'Get Support', path: '/support', icon: HelpCircle },
    { name: 'Request Demo', path: '/demo', icon: Video },
    { name: 'View Pricing', path: '/pricing', icon: Award },
    { name: 'Careers', path: '/careers', icon: Users },
    { name: 'Blog', path: '/blog', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category for easy navigation."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Sitemap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Website Sitemap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete overview of our website structure. Find all pages, services, and resources 
            organized by category for easy navigation.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                    <a
                      href={link.path}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Visit Page →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Site Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Main Site Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {siteStructure.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{page.name}</h4>
                        <p className="text-gray-400 text-sm">{page.description}</p>
                      </div>
                      <a
                        href={page.path}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.industry}</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm mb-4">Technical documentation and API references</p>
              <a
                href="/docs"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                View Documentation →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Video Library</h3>
              <p className="text-gray-400 text-sm mb-4">Tutorial videos and product demos</p>
              <a
                href="/videos"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                Watch Videos →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm mb-4">User community and forums</p>
              <a
                href="/community"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                Join Community →
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg text-gray-300 mb-6">
              If you can't find the page or information you need, our team is here to help. 
              Contact us for assistance or to report any broken links.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="bg-slate-700/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300 border border-slate-600/50"
              >
                Get Help
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}