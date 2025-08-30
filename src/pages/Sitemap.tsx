import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Map, 
  ArrowRight, 
  ExternalLink, 
  Home,
  Building,
  Users,
  Settings,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Globe,
  Star,
  Award,
  FileText,
  Video,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-cyan-500 to-blue-600',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Company overview and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', url: '/careers', description: 'Job opportunities' },
        { name: 'Team', url: '/team', description: 'Meet our leadership team' },
        { name: 'Partners', url: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      title: 'Services Overview',
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      pages: [
        { name: 'Services Overview', url: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', url: '/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Scalable software solutions' },
        { name: 'Request Quote', url: '/request-quote', description: 'Get custom pricing' }
      ]
    },
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      pages: [
        { name: 'AI Business Intelligence', url: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Workflow Orchestrator', url: '/services/ai-workflow-orchestrator', description: 'Intelligent Process Automation' },
        { name: 'AI Data Governance', url: '/services/ai-data-governance', description: 'AI-Powered Data Protection' },
        { name: 'AI Customer Success Platform', url: '/services/ai-customer-success-platform', description: 'Proactive Customer Engagement' },
        { name: 'AI Sales Copilot', url: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', url: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'AI Auto Email Responder', url: '/services/ai-auto-email-responder', description: 'Faster replies, CRM logging' },
        { name: 'LLM Content Studio', url: '/services/llm-content-studio', description: 'On-brand AI content' },
        { name: 'AI Compliance Copilot', url: '/services/ai-compliance-copilot', description: 'AI-Powered Security' }
      ]
    },
    {
      title: 'Cloud & DevOps Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      pages: [
        { name: 'Cloud DevOps', url: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', url: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', url: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Digital Transformation', url: '/services/digital-transformation', description: 'End-to-end digital modernization' },
        { name: 'IT Infrastructure', url: '/services/it-infrastructure', description: 'Enterprise infrastructure' }
      ]
    },
    {
      title: 'Edge & IoT Services',
      icon: Zap,
      color: 'from-teal-500 to-green-600',
      pages: [
        { name: 'IoT & Edge Computing', url: '/services/iot-edge', description: 'Smart Devices & Networks' },
        { name: 'Edge Computing Platform', url: '/services/edge-computing-platform', description: 'Ultra-Low Latency Processing' },
        { name: 'Digital Twin', url: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'Data Analytics', url: '/services/data-analytics', description: 'Business intelligence' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      pages: [
        { name: 'Zero Trust Network Architecture', url: '/services/zero-trust-network-architecture', description: 'Advanced security' },
        { name: 'AI Cybersecurity Suite', url: '/services/ai-cybersecurity-suite', description: 'Advanced security solutions' },
        { name: 'Security', url: '/security', description: 'Security practices' },
        { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance' }
      ]
    },
    {
      title: 'Emerging Technology',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-600',
      pages: [
        { name: 'Quantum Computing', url: '/services/quantum-computing', description: 'Next-gen quantum computing' },
        { name: 'Quantum AI Platform', url: '/services/quantum-ai-platform', description: 'Next-gen quantum computing' },
        { name: 'Blockchain Enterprise Solutions', url: '/services/blockchain-enterprise-solutions', description: 'DeFi & Smart Contracts' },
        { name: 'Space Technology', url: '/services/space-tech', description: 'Space tech solutions' },
        { name: 'Sustainability', url: '/services/sustainability', description: 'Green IT Solutions' }
      ]
    },
    {
      title: 'Healthcare & Specialized',
      icon: Star,
      color: 'from-pink-500 to-rose-600',
      pages: [
        { name: 'Healthcare Technology', url: '/services/healthcare-tech', description: 'AI Medicine & Diagnostics' },
        { name: 'AI Healthcare Analytics', url: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'IT Consulting', url: '/services/it-consulting', description: 'Enterprise IT solutions' },
        { name: 'Green IT', url: '/services/green-it', description: 'Environmental solutions' }
      ]
    },
    {
      title: 'Content & Resources',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Latest insights and news' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', url: '/white-papers', description: 'Research and insights' },
        { name: 'Webinars', url: '/webinars', description: 'Educational sessions' },
        { name: 'Press', url: '/press', description: 'Media resources' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      color: 'from-violet-500 to-purple-600',
      pages: [
        { name: 'Help Center', url: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', url: '/support', description: 'Technical assistance' },
        { name: 'Documentation', url: '/docs', description: 'Technical guides' },
        { name: 'Training', url: '/training', description: 'Learning resources' },
        { name: 'Community', url: '/community', description: 'User community' },
        { name: 'Onsite Support', url: '/onsite-support', description: 'On-site technical support' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: Shield,
      color: 'from-slate-500 to-gray-600',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection' },
        { name: 'Terms of Service', url: '/terms', description: 'Service terms' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    },
    {
      title: 'Pricing & Solutions',
      icon: Award,
      color: 'from-amber-500 to-yellow-600',
      pages: [
        { name: 'Pricing Guide 2027', url: '/pricing', description: 'Current pricing' },
        { name: 'Pricing Guide 2025', url: '/pricing-2025', description: '2025 pricing' },
        { name: 'Pricing Guide 2030', url: '/pricing-2030', description: 'Future pricing' },
        { name: 'Pricing Guide', url: '/pricing-guide', description: 'General pricing' },
        { name: 'Innovative Services 2025', url: '/innovative-services-showcase-2025', description: 'Latest solutions' },
        { name: 'Revolutionary Services 2030', url: '/revolutionary-services-2030', description: 'Future services' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Contact Us', url: '/contact', icon: MessageCircle },
    { name: 'Request Quote', url: '/request-quote', icon: Mail },
    { name: 'Support', url: '/support', icon: HelpCircle },
    { name: 'Careers', url: '/careers', icon: Users },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'White Papers', url: '/white-papers', icon: FileText },
    { name: 'Webinars', url: '/webinars', icon: Video },
    { name: 'Case Studies', url: '/case-studies', icon: Star }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'info@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete overview of all pages and sections on the Zion Tech Group website. Find what you're looking for quickly and easily."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Navigate our website with ease. Find all pages, services, and resources 
              organized by category for quick access to the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Download Sitemap
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Most popular pages and resources for quick navigation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{link.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Site Structure
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Organized by category for easy navigation and discovery of all our content and services.
            </p>
          </motion.div>

          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <motion.a
                      key={page.name}
                      href={page.url}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: sectionIndex * 0.1 + pageIndex * 0.05 }}
                      className="group p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-sm text-gray-300">{page.description}</p>
                      <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {page.url}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for any questions or assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">{contactInfo.phone}</p>
              <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">{contactInfo.email}</p>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-4 text-sm">{contactInfo.address}</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View on Map
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Website</h3>
              <p className="text-gray-300 mb-4">{contactInfo.website}</p>
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Visit Site
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Our support team is here to help you navigate our website and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a 
                href="/help"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Help Center
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
