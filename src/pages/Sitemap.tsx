import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home,
  Users,
  Building,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Globe,
  FileText,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  TrendingUp,
  Award,
  HelpCircle,
  Search,
  Calculator,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Sitemap() {
  const mainNavigation = [
    {
      title: 'Home',
      path: '/',
      icon: Home,
      description: 'Main landing page and overview'
    },
    {
      title: 'About Us',
      path: '/about',
      icon: Building,
      description: 'Company information and mission'
    },
    {
      title: 'Services',
      path: '/services',
      icon: Zap,
      description: 'Overview of all technology services'
    },
    {
      title: 'Solutions',
      path: '/solutions',
      icon: Brain,
      description: 'Industry-specific solutions'
    },
    {
      title: 'Company',
      path: '/company',
      icon: Users,
      description: 'Team, careers, and company culture'
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: MessageCircle,
      description: 'Get in touch with our team'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence' },
        { name: 'Machine Learning Models', path: '/services/machine-learning' },
        { name: 'Predictive Analytics', path: '/services/predictive-analytics' },
        { name: 'Natural Language Processing', path: '/services/nlp' },
        { name: 'Computer Vision', path: '/services/computer-vision' },
        { name: 'AI Chatbots', path: '/services/ai-chatbots' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        { name: 'Cloud Migration', path: '/services/cloud-migration' },
        { name: 'DevOps Automation', path: '/services/devops-automation' },
        { name: 'Infrastructure as Code', path: '/services/infrastructure-as-code' },
        { name: 'Container Orchestration', path: '/services/container-orchestration' },
        { name: 'Serverless Architecture', path: '/services/serverless' },
        { name: 'Cloud Security', path: '/services/cloud-security' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        { name: 'Security Audits', path: '/services/security-audits' },
        { name: 'Threat Detection', path: '/services/threat-detection' },
        { name: 'Incident Response', path: '/services/incident-response' },
        { name: 'Compliance Management', path: '/services/compliance' },
        { name: 'Zero Trust Architecture', path: '/services/zero-trust' },
        { name: 'Security Training', path: '/services/security-training' },
        { name: 'AI Cybersecurity Suite', path: '/services/ai-cybersecurity' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      color: 'from-yellow-500 to-green-600',
      services: [
        { name: 'Process Automation', path: '/services/process-automation' },
        { name: 'Legacy Modernization', path: '/services/legacy-modernization' },
        { name: 'Digital Strategy', path: '/services/digital-strategy' },
        { name: 'Change Management', path: '/services/change-management' },
        { name: 'Technology Assessment', path: '/services/technology-assessment' },
        { name: 'Innovation Consulting', path: '/services/innovation-consulting' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      services: [
        { name: 'IoT & Edge Computing', path: '/services/iot-edge' },
        { name: 'Blockchain Solutions', path: '/services/blockchain' },
        { name: 'Quantum Computing', path: '/services/quantum-computing' },
        { name: 'Space Technology', path: '/services/space-tech' },
        { name: 'Sustainability Tech', path: '/services/sustainability' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      color: 'from-emerald-500 to-teal-600',
      services: [
        { name: 'Healthcare Technology', path: '/services/healthcare-tech' },
        { name: 'Financial Technology', path: '/services/fintech' },
        { name: 'Manufacturing 4.0', path: '/services/manufacturing' },
        { name: 'Retail Technology', path: '/services/retail-tech' },
        { name: 'Education Technology', path: '/services/edtech' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'AI Solutions',
      solutions: [
        { name: 'AI Business Intelligence', path: '/solutions/ai-business-intelligence' },
        { name: 'AI Sales Copilot', path: '/solutions/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', path: '/solutions/ai-compliance' },
        { name: 'LLM Content Studio', path: '/solutions/llm-content-studio' },
        { name: 'AI Lead Scoring', path: '/solutions/ai-lead-scoring' },
        { name: 'AI Auto Email Responder', path: '/solutions/ai-auto-email' }
      ]
    },
    {
      title: 'Cloud Solutions',
      solutions: [
        { name: 'Cloud Migration', path: '/solutions/cloud-migration' },
        { name: 'DevOps Automation', path: '/solutions/devops-automation' },
        { name: 'Infrastructure as Code', path: '/solutions/infrastructure-as-code' },
        { name: 'Container Orchestration', path: '/solutions/container-orchestration' }
      ]
    },
    {
      title: 'Cybersecurity Solutions',
      solutions: [
        { name: 'Zero Trust Network Architecture', path: '/solutions/zero-trust' },
        { name: 'Threat Detection & Response', path: '/solutions/threat-detection' },
        { name: 'Compliance Management', path: '/solutions/compliance' },
        { name: 'Security Training', path: '/solutions/security-training' }
      ]
    }
  ];

  const companyPages = [
    {
      title: 'About Us',
      path: '/about',
      description: 'Company overview and mission'
    },
    {
      title: 'Team',
      path: '/team',
      description: 'Meet our leadership and experts'
    },
    {
      title: 'Careers',
      path: '/careers',
      description: 'Job opportunities and culture'
    },
    {
      title: 'Partners',
      path: '/partners',
      description: 'Partnership programs and alliances'
    },
    {
      title: 'Press',
      path: '/press',
      description: 'News and media resources'
    },
    {
      title: 'Blog',
      path: '/blog',
      description: 'Industry insights and updates'
    }
  ];

  const resourcePages = [
    {
      title: 'Case Studies',
      path: '/case-studies',
      description: 'Success stories and project examples'
    },
    {
      title: 'White Papers',
      path: '/white-papers',
      description: 'In-depth research and analysis'
    },
    {
      title: 'Webinars',
      path: '/webinars',
      description: 'Educational sessions and presentations'
    },
    {
      title: 'Events',
      path: '/events',
      description: 'Upcoming conferences and meetups'
    },
    {
      title: 'Documentation',
      path: '/docs',
      description: 'Technical guides and API references'
    },
    {
      title: 'Training',
      path: '/training',
      description: 'Professional development programs'
    }
  ];

  const supportPages = [
    {
      title: 'Help Center',
      path: '/help',
      description: 'Self-service support and FAQs'
    },
    {
      title: 'Support Portal',
      path: '/support',
      description: 'Technical support and ticket system'
    },
    {
      title: 'FAQ',
      path: '/faq',
      description: 'Frequently asked questions'
    },
    {
      title: 'Contact Support',
      path: '/contact-support',
      description: 'Get help from our team'
    },
    {
      title: 'Onsite Support',
      path: '/onsite-support',
      description: 'On-premise technical assistance'
    }
  ];

  const utilityPages = [
    {
      title: 'Request Quote',
      path: '/request-quote',
      description: 'Get a customized project quote'
    },
    {
      title: 'Pricing Guide',
      path: '/pricing-guide',
      description: 'Service pricing and packages'
    },
    {
      title: 'Sitemap',
      path: '/sitemap',
      description: 'Complete site navigation structure'
    },
    {
      title: 'Search',
      path: '/search',
      description: 'Search across all content'
    },
    {
      title: 'Login',
      path: '/login',
      description: 'Access your account'
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      description: 'Client portal and project management'
    }
  ];

  const legalPages = [
    {
      title: 'Privacy Policy',
      path: '/privacy',
      description: 'Data protection and privacy information'
    },
    {
      title: 'Terms of Service',
      path: '/terms',
      description: 'Terms and conditions of use'
    },
    {
      title: 'Cookie Policy',
      path: '/cookies',
      description: 'Cookie usage and preferences'
    },
    {
      title: 'Accessibility',
      path: '/accessibility',
      description: 'Accessibility compliance information'
    },
    {
      title: 'Security',
      path: '/security',
      description: 'Security measures and practices'
    },
    {
      title: 'Compliance',
      path: '/compliance',
      description: 'Regulatory compliance information'
    }
  ];

  const contactInfo = [
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: Phone,
      action: 'tel:+15551234567'
    },
    {
      title: 'Email',
      value: 'info@ziontechgroup.com',
      icon: Mail,
      action: 'mailto:info@ziontechgroup.com'
    },
    {
      title: 'Address',
      value: 'San Francisco, CA',
      icon: MapPin,
      action: null
    },
    {
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM PST',
      icon: Calendar,
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete navigation structure of Zion Tech Group website. Find all pages, services, and resources organized by category."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Navigation
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Complete overview of all pages, services, and resources available on our website
            </p>
            
            <div className="flex items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span>Organized by category</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" />
                <span>Easy to navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span>Complete coverage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Main Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Main Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainNavigation.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">View Page</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Services & Solutions</h2>
          <div className="space-y-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="group p-4 bg-slate-700/30 rounded-xl border border-slate-600 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Company & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Pages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Company</h2>
            <div className="space-y-4">
              {companyPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{page.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Resource Pages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Resources</h2>
            <div className="space-y-4">
              {resourcePages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{page.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Support & Utility Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Support Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Support & Help</h2>
            <div className="space-y-4">
              {supportPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{page.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Utility Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Tools & Utilities</h2>
            <div className="space-y-4">
              {utilityPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{page.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Legal & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Legal Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Legal & Compliance</h2>
            <div className="space-y-4">
              {legalPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{page.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{contact.title}</h3>
                  </div>
                  {contact.action ? (
                    <a
                      href={contact.action}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-slate-300">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding Something?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Use our search function or contact our team for assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Search Site
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
