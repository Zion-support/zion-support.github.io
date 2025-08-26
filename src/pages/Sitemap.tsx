<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Building, 
  Users, 
  Heart, 
  Rocket, 
  Code, 
  BarChart3, 
  Target, 
  Network, 
  Eye, 
  Clock, 
  Star, 
  Globe, 
  FileText, 
  Calendar, 
  Video, 
  Zap, 
  TrendingUp, 
  ShoppingCart,
  Lock,
  Database,
  Palette,
  Workflow
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Star,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Our Mission', path: '/mission', description: 'Our vision and mission' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Our partnerships' }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      icon: Brain,
      pages: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Manager', path: '/services/ai-autonomous-business-manager', description: 'Intelligent business management' },
        { name: 'AI Business Platform', path: '/services/ai-autonomous-business-platform', description: 'Comprehensive business platform' },
        { name: 'AI Code Review', path: '/services/ai-autonomous-code-review', description: 'Intelligent code review automation' },
        { name: 'AI Creative Director', path: '/services/ai-autonomous-creative-director', description: 'AI-powered creative content generation' },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-automation', description: 'Automated content creation' },
        { name: 'AI Consciousness Evolution', path: '/services/ai-consciousness-evolution', description: 'Advanced AI consciousness research' }
      ]
    },
    {
      title: 'Technology & Infrastructure',
      icon: Cpu,
      pages: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', description: 'Custom software solutions' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      pages: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', description: 'Decentralized applications' },
        { name: 'IoT Data Analytics', path: '/services/iot-data-analytics', description: 'Connected device management' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Cutting-edge technology solutions' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: Building,
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Smart manufacturing' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: FileText,
      pages: [
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and results' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'Testimonials', path: '/testimonials', description: 'Client success stories' }
      ]
    },
    {
      title: 'Business & Legal',
      icon: Shield,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' },
        { name: 'Community', path: '/community', description: 'Join our community' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms of service' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie policy' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
          </p>
        </div>
      </div>

<<<<<<< HEAD
        {/* Sitemap Content */}
        <div className="space-y-8">
          {renderPageSection('Main Pages', mainPages, Map)}
          {renderPageSection('Services', servicePages, Settings)}
          {renderPageSection('Legal & Support', legalPages, Shield)}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  Building,
  Users,
  Heart,
  Rocket,
  BarChart3,
  Target,
  Lock,
  Code,
  Clock,
  Eye,
  DollarSign,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Facebook,
  Instagram,
  Briefcase
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company" },
        { name: "Our Mission", path: "/mission", description: "Our vision and mission" },
        { name: "Team", path: "/team", description: "Meet our leadership team" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "News", path: "/news", description: "Latest company news" },
        { name: "Blog", path: "/blog", description: "Industry insights and updates" }
      ]
    },
    {
      title: "AI & Autonomous Systems",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { name: "AI Services", path: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "AI Solutions", path: "/ai-solutions", description: "AI-powered business solutions" },
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Advanced autonomous AI systems" },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "AI-powered research automation" },
        { name: "AI Business Solutions", path: "/ai-business-solutions", description: "AI for business transformation" },
        { name: "AI Matcher", path: "/ai-matcher", description: "AI-powered service matching" },
        { name: "AI Agent Orchestrator", path: "/ai-agent-orchestrator", description: "AI agent management platform" }
      ]
    },
    {
      title: "Quantum Technology",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions" },
        { name: "Quantum Neural Network Platform", path: "/quantum-neural-network-platform", description: "Quantum-powered neural networks" },
        { name: "Quantum Cloud Infrastructure", path: "/quantum-cloud-infrastructure", description: "Quantum cloud services" },
        { name: "Quantum Financial Trading", path: "/quantum-financial-trading", description: "Quantum trading algorithms" },
        { name: "Quantum Services", path: "/quantum-services", description: "Comprehensive quantum solutions" }
      ]
    },
    {
      title: "Business Operations",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      links: [
        { name: "Autonomous Business Operations Platform", path: "/autonomous-business-operations-platform", description: "Self-operating business systems" },
        { name: "AI-Powered IT Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset management" },
        { name: "Enterprise Solutions", path: "/enterprise-solutions", description: "Enterprise-grade solutions" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Business transformation services" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced business analytics" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      links: [
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Complete security solutions" },
        { name: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance management" },
        { name: "Advanced Cybersecurity Suite", path: "/advanced-cybersecurity-suite", description: "Comprehensive security platform" },
        { name: "AI-Powered Enterprise Security", path: "/ai-powered-enterprise-security", description: "AI-enhanced security" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Security audit and testing" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      links: [
        { name: "Cloud DevOps", path: "/cloud-devops", description: "Cloud development and operations" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Complete IT infrastructure solutions" },
        { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "High-speed 5G connectivity" },
        { name: "Specialized IT Infrastructure", path: "/services/specialized-it-infrastructure", description: "Custom infrastructure solutions" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" },
        { name: "Managed IT Services", path: "/services/managed-it-services", description: "24/7 IT support" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: Code,
      color: "from-orange-500 to-yellow-500",
      links: [
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Scalable software solutions" },
        { name: "Innovative Micro SAAS Services", path: "/innovative-micro-saas-services", description: "Cutting-edge SAAS platforms" },
        { name: "Micro SAAS", path: "/micro-saas", description: "Micro software-as-a-service" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      color: "from-purple-500 to-violet-500",
      links: [
        { name: "Industry Solutions", path: "/services/industry-solutions", description: "Industry-specific solutions" },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", description: "Enterprise-grade solutions" },
        { name: "Healthcare Solutions", path: "/solutions/healthcare", description: "Healthcare technology solutions" },
        { name: "Financial Solutions", path: "/solutions/financial", description: "Fintech solutions" },
        { name: "Manufacturing Solutions", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { name: "Retail Solutions", path: "/solutions/retail", description: "Digital retail transformation" },
        { name: "Government Solutions", path: "/solutions/government", description: "Public sector technology" }
      ]
    },
    {
      title: "Services & Solutions",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      links: [
        { name: "Services", path: "/services", description: "All our services" },
        { name: "Services Overview", path: "/services-overview", description: "Comprehensive service overview" },
        { name: "Services Showcase", path: "/services-showcase", description: "Featured services" },
        { name: "New Services", path: "/new-services", description: "Latest technology services" },
        { name: "Comprehensive Services Overview", path: "/comprehensive-services-overview", description: "Complete service catalog" },
        { name: "Comprehensive Innovative Services", path: "/comprehensive-innovative-services", description: "Innovative service offerings" },
        { name: "Innovative New Services", path: "/services/innovative-new-services", description: "Cutting-edge services" },
        { name: "Innovative Services", path: "/innovative-services", description: "Innovative technology solutions" },
        { name: "Innovative Services Showcase", path: "/innovative-services-showcase", description: "Showcase of innovations" }
      ]
    },
    {
      title: "Resources & Support",
      icon: Users,
      color: "from-green-500 to-blue-500",
      links: [
        { name: "Case Studies", path: "/case-studies", description: "Success stories and case studies" },
        { name: "Help Center", path: "/help", description: "Support and documentation" },
        { name: "White Papers", path: "/white-papers", description: "Industry research and insights" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Emerging Tech", path: "/emerging-tech", description: "Latest technology trends" },
        { name: "Research & Development", path: "/research-development", description: "R&D initiatives" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Testimonials", path: "/testimonials", description: "Client feedback" }
      ]
    },
    {
      title: "Talent & Community",
      icon: Users,
      color: "from-pink-500 to-red-500",
      links: [
        { name: "Talent Directory", path: "/talent-directory", description: "Find top talent" },
        { name: "Talents", path: "/talents", description: "Talent showcase" },
        { name: "Community", path: "/community", description: "Join our community" },
        { name: "Marketplace", path: "/marketplace", description: "Technology marketplace" }
      ]
    },
    {
      title: "Company Information",
      icon: Building,
      color: "from-gray-500 to-slate-500",
      links: [
        { name: "Pricing", path: "/pricing", description: "Service pricing and plans" },
        { name: "Leadership", path: "/leadership", description: "Executive leadership team" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Cookies Policy", path: "/cookies", description: "Cookie usage policy" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services offered by Zion Tech Group
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Last updated: {currentYear} | Total sections: {sitemapSections.length}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sitemapSections.map((section, index) => (
              <a
                key={index}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 text-center group"
              >
                <section.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-16">
          {sitemapSections.map((section, index) => (
            <section
              key={index}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-20"
            >
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200 mb-2">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Visit Page</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact & Social Section */}
        <section className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <contact.icon className="w-5 h-5 text-cyan-400" />
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Follow Us</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-gray-800/30 hover:bg-gray-700/40 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 group"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="mt-16 text-center">
          <a
            href="#top"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-aa28
=======
      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIdx) => (
            <div key={sectionIdx} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.pages.map((page, pageIdx) => (
                  <Link
                    key={pageIdx}
                    to={page.path}
                    className="block p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {page.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                      </div>
                      <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/services"
              className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">🤖</div>
              <div className="font-semibold text-white">All Services</div>
            </Link>
            <Link
              to="/solutions/enterprise"
              className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold text-white">Solutions</div>
            </Link>
            <Link
              to="/case-studies"
              className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-white">Case Studies</div>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-center hover:from-orange-600 hover:to-red-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold text-white">Contact Us</div>
            </Link>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            This sitemap helps search engines and users navigate our website effectively. 
            All pages are optimized for SEO and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default Sitemap;
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======

// Play icon component for demo link
function Play({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function Sitemap() {
  const mainPages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About Us' },
    { path: '/mission', title: 'Our Mission' },
    { path: '/team', title: 'Team' },
    { path: '/careers', title: 'Careers' },
    { path: '/news', title: 'News & Updates' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/contact', title: 'Contact' },
  ];

  const services = [
    { path: '/ai-services', title: 'AI & Machine Learning' },
    { path: '/quantum-services', title: 'Quantum Technology' },
    { path: '/cybersecurity', title: 'Cybersecurity' },
    { path: '/it-services', title: 'Cloud & Infrastructure' },
    { path: '/data-analytics', title: 'Business Intelligence' },
    { path: '/devops-automation', title: 'DevOps & Automation' },
    { path: '/space-tech', title: 'Space Technology' },
  ];

  const solutions = [
    { path: '/solutions/enterprise', title: 'Enterprise Solutions' },
    { path: '/solutions/healthcare', title: 'Healthcare Solutions' },
    { path: '/solutions/financial', title: 'Financial Solutions' },
    { path: '/solutions/manufacturing', title: 'Manufacturing Solutions' },
    { path: '/retail-technology-solutions', title: 'Retail Solutions' },
    { path: '/government-technology-solutions', title: 'Government Solutions' },
  ];

  const resources = [
    { path: '/docs', title: 'Documentation' },
    { path: '/blog', title: 'Blog & Articles' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/white-papers', title: 'White Papers' },
    { path: '/webinars', title: 'Webinars' },
    { path: '/events-webinars', title: 'Events' },
    { path: '/training', title: 'Training' },
  ];

  const legal = [
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
    { path: '/cookies', title: 'Cookie Policy' },
    { path: '/accessibility', title: 'Accessibility' },
  ];

  const quickLinks = [
    { path: '/get-started', title: 'Get Started' },
    { path: '/support', title: 'Support' },
    { path: '/status', title: 'Status Page' },
    { path: '/developer-resources', title: 'Developer Resources' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of all pages and services offered by Zion Tech Group"
        keywords="sitemap, navigation, pages, services, Zion Tech Group"
        canonical="https://ziontechgroup.com/sitemap"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Sitemap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for Zion Tech Group website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                🏠
              </span>
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link 
                    to={page.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {page.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                ⚡
              </span>
              Services
            </h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                🎯
              </span>
              Solutions
            </h2>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.path}>
                  <Link 
                    to={solution.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {solution.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                📚
              </span>
              Resources
            </h2>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {resource.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                ⚖️
              </span>
              Legal
            </h2>
            <ul className="space-y-2">
              {legal.map((legalPage) => (
                <li key={legalPage.path}>
                  <Link 
                    to={legalPage.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {legalPage.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                🔗
              </span>
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for? Contact our support team.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
  const quickLinks = [
    { name: "Find Talent", path: "/talent", icon: <Users className="w-4 h-4" /> },
    { name: "Browse Services", path: "/services", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Get Support", path: "/contact", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Join Community", path: "/community", icon: <Globe className="w-4 h-4" /> }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: "info@ziontechgroup.com" },
    { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-4 h-4" />, label: "Address", value: "San Francisco, CA" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Navigate through all pages and sections of Zion Tech Group's website. Find what you're looking for quickly and easily."
        keywords="sitemap, navigation, Zion Tech Group, website structure"
        canonical="https://ziontechgroup.com/sitemap"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site <span className="text-zion-cyan">Map</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Navigate through all pages and sections of our website. 
            Find what you're looking for quickly and easily.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-4 text-center hover:border-zion-purple/40 transition-colors group"
              >
                <div className="text-zion-cyan group-hover:text-zion-cyan/80 transition-colors mb-2">
                  {link.icon}
                </div>
                <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-zion-cyan">
                      {section.icon}
                    </div>
                    <CardTitle className="text-zion-cyan">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-zion-purple/10 pb-2 last:border-b-0">
                        <Link
                          to={link.path}
                          className="text-white hover:text-zion-cyan transition-colors font-medium block mb-1"
                        >
                          {link.name}
                        </Link>
                        <p className="text-zion-slate-light text-sm">
                          {link.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-zion-cyan">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
                <p className="text-zion-slate-light">{contact.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Help & Support</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Get help with our platform and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Help Center
                  </Link>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Contact Support
                  </Link>
                  <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Frequently Asked Questions
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Developer Resources</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Tools and documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Developer Portal
                  </Link>
                  <Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    API Documentation
                  </Link>
                  <Link to="/api-samples" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Code Samples
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Company Information</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Learn more about Zion Tech Group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    About Us
                  </Link>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Careers
                  </Link>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Partnerships
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search & Navigation Tips */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Navigation Tips</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Navigation</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Use the main navigation menu at the top of every page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Utilize the search function to find specific content quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Check the footer for additional links and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Use breadcrumbs to navigate back to previous sections</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Finding What You Need</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Browse categories to explore related services and products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Use filters to narrow down search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Check the blog for industry insights and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Contact our team for personalized assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bdc0
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
