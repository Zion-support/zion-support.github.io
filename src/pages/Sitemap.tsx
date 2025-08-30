import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Map, 
  Home, 
  Users, 
  Briefcase, 
  Brain, 
  Server, 
  FileText, 
  HelpCircle,
  Shield,
  Globe,
  Settings,
  ShoppingCart,
  MessageSquare,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  ChevronRight,
  Download
} from 'lucide-react';

export default function Sitemap() {
  const siteStructure = {
    main: [
      { name: 'Home', href: '/', description: 'Main landing page' },
      { name: 'About Us', href: '/about', description: 'Company information and mission' },
      { name: 'Services', href: '/services', description: 'Overview of our services' },
      { name: 'Team', href: '/team', description: 'Meet our team members' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
      { name: 'Pricing', href: '/pricing', description: 'Service pricing plans' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { name: 'Help', href: '/help', description: 'Help center and support' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' },
      { name: 'Partners', href: '/partners', description: 'Partnership information' },
      { name: 'News', href: '/news', description: 'Company news and updates' },
      { name: 'Events', href: '/events', description: 'Upcoming events' },
      { name: 'Status', href: '/status', description: 'System status and uptime' },
      { name: 'Security', href: '/security', description: 'Security and compliance' },
      { name: 'Cookies', href: '/cookies', description: 'Cookie policy and preferences' }
    ],
    services: [
      { name: 'AI Services', href: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', href: '/it-services', description: 'Information technology services' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Micro software-as-a-service solutions' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure and DevOps' },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis and insights' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security and protection services' },
      { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business digitalization' },
      { name: 'API Development', href: '/services/api-development', description: 'Application programming interfaces' },
      { name: 'Mobile Development', href: '/services/mobile-development', description: 'Mobile app development' },
      { name: 'Web Development', href: '/services/web-development', description: 'Website and web application development' },
      { name: 'Consulting', href: '/services/consulting', description: 'Strategic technology consulting' },
      { name: 'Training', href: '/services/training', description: 'Professional development and training' }
    ],
    marketplace: [
      { name: 'Marketplace Home', href: '/marketplace', description: 'Main marketplace page' },
      { name: 'Products', href: '/marketplace/products', description: 'Digital products and tools' },
      { name: 'Talent', href: '/marketplace/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', href: '/marketplace/equipment', description: 'Hardware and equipment' },
      { name: 'Services', href: '/marketplace/services', description: 'Professional services' }
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and examples' },
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api', description: 'API documentation and guides' },
      { name: 'Developer Tools', href: '/tools', description: 'Development and testing tools' },
      { name: 'Templates', href: '/templates', description: 'Ready-to-use templates' },
      { name: 'Libraries', href: '/libraries', description: 'Code libraries and frameworks' }
    ],
    support: [
      { name: 'Help Center', href: '/help', description: 'Comprehensive help resources' },
      { name: 'Contact Support', href: '/contact', description: 'Get help from our team' },
      { name: 'Request Quote', href: '/request-quote', description: 'Get a custom quote' },
      { name: 'Green IT', href: '/green-it', description: 'Sustainable technology solutions' },
      { name: 'Status Page', href: '/status', description: 'System status and incidents' },
      { name: 'Security Center', href: '/security', description: 'Security information and updates' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection and privacy' },
      { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' },
      { name: 'Data Processing', href: '/data-processing', description: 'Data handling practices' },
      { name: 'GDPR Compliance', href: '/gdpr', description: 'European data protection compliance' },
      { name: 'Accessibility', href: '/accessibility', description: 'Website accessibility information' }
    ]
  };

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: ArrowRight, color: 'from-cyan-400 to-blue-500' },
    { name: 'Request Demo', href: '/demo', icon: ExternalLink, color: 'from-purple-400 to-pink-500' },
    { name: 'Download Resources', href: '/downloads', icon: Download, color: 'from-green-400 to-emerald-500' },
    { name: 'Join Community', href: '/community', icon: Users, color: 'from-orange-400 to-red-500' }
  ];

  const contactInfo = [
    { label: 'Phone', value: '+1 (302) 464-0950', href: 'tel:+13024640950', icon: Phone },
    { label: 'Email', value: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com', icon: Mail },
    { label: 'Address', value: '123 Tech Street, Wilmington, DE 19801', href: '#', icon: Globe },
    { label: 'Support', value: 'support@ziontechgroup.com', href: 'mailto:support@ziontechgroup.com', icon: HelpCircle }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: ExternalLink },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: ExternalLink },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: ExternalLink },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: ExternalLink }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation and structure for Zion Tech Group. Find all pages and resources easily."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
              <Map className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Navigate our website easily with this comprehensive sitemap. Find all pages, 
              services, and resources organized by category.
            </p>
            <p className="text-slate-400">
              Last updated: December 2024
            </p>
=======
import { Sitemap, Home, Users, Settings, FileText, Shield, Mail, HelpCircle, Building, Briefcase, Brain, Cloud, Rocket, Heart, Globe, Lock, Cpu, Zap, Star, TrendingUp, MessageCircle, DollarSign, BookOpen, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with our team" },
        { name: "Services Overview", path: "/services-overview", description: "Explore all our services" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships and collaborations" },
        { name: "Careers", path: "/careers", description: "Join our team of experts" },
        { name: "Team", path: "/team", description: "Meet our leadership and experts" },
        { name: "Press", path: "/press", description: "Media resources and press releases" }
      ]
    },
    {
      title: "Core Services",
      icon: Settings,
      links: [
        { name: "AI Services", path: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "IT Services", path: "/it-services", description: "Enterprise IT solutions" },
        { name: "Micro SaaS", path: "/micro-saas", description: "Scalable software solutions" },
        { name: "Cloud & DevOps", path: "/services/cloud-devops", description: "Infrastructure & automation" },
        { name: "Digital Twin", path: "/services/digital-twin", description: "Simulation & monitoring" },
        { name: "Data Analytics", path: "/services/data-analytics", description: "Business intelligence" },
        { name: "IoT & Edge", path: "/services/iot-edge", description: "Connected ecosystems" },
        { name: "Blockchain Solutions", path: "/services/blockchain-enterprise-solutions", description: "DeFi & smart contracts" }
      ]
    },
    {
      title: "Specialized Services",
      icon: Brain,
      links: [
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Machine Learning & Data Science" },
        { name: "AI Sales Copilot", path: "/services/ai-sales-copilot", description: "AI-powered sales automation" },
        { name: "AI Compliance Assistant", path: "/services/ai-compliance-assistant", description: "Regulatory compliance automation" },
        { name: "AI Auto Email Responder", path: "/services/ai-auto-email-responder", description: "Faster replies, CRM logging" },
        { name: "LLM Content Studio", path: "/services/llm-content-studio", description: "AI content generation" },
        { name: "FinOps Advisor", path: "/services/finops-advisor", description: "Cloud cost optimization" },
        { name: "Healthcare Tech", path: "/services/healthcare-tech", description: "AI medicine & diagnostics" },
        { name: "Sustainability", path: "/services/sustainability", description: "Green IT solutions" }
      ]
    },
    {
      title: "Advanced Solutions",
      icon: Rocket,
      links: [
        { name: "Quantum AI Platform", path: "/services/quantum-ai-platform", description: "Next-gen quantum computing" },
        { name: "AI Cybersecurity Suite", path: "/services/ai-cybersecurity-suite", description: "Advanced security solutions" },
        { name: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics", description: "Healthcare data insights" },
        { name: "Zero Trust Architecture", path: "/services/zero-trust-network-architecture", description: "Advanced security framework" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Enterprise infrastructure" },
        { name: "Space Technology", path: "/services/space-tech", description: "Aerospace innovation" },
        { name: "Innovative Services 2025", path: "/innovative-services-showcase-2025", description: "Latest cutting-edge solutions" },
        { name: "Revolutionary Services 2030", path: "/revolutionary-services-showcase-2030", description: "Future-ready services" }
      ]
    },
    {
      title: "Pricing & Solutions",
      icon: DollarSign,
      links: [
        { name: "Pricing Guide", path: "/pricing-guide", description: "Comprehensive pricing information" },
        { name: "Pricing 2027", path: "/pricing", description: "Current year pricing strategies" },
        { name: "Pricing 2030", path: "/pricing-2030", description: "Advanced pricing strategies" },
        { name: "Request Quote", path: "/request-quote", description: "Get custom pricing" },
        { name: "Marketplace", path: "/marketplace", description: "Explore our solutions" }
      ]
    },
    {
      title: "Support & Resources",
      icon: HelpCircle,
      links: [
        { name: "Help Center", path: "/help", description: "Find answers to common questions" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Support Portal", path: "/support", description: "Technical support and assistance" },
        { name: "Documentation", path: "/docs", description: "Technical guides and API references" },
        { name: "Training", path: "/training", description: "Learning resources and courses" },
        { name: "Webinars", path: "/webinars", description: "Educational sessions and workshops" },
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and projects" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Shield,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" },
        { name: "Security", path: "/security", description: "Security practices" },
        { name: "Compliance", path: "/compliance", description: "Regulatory compliance" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "Phone Support",
      href: "tel:+13024640950"
    },
    {
      icon: Mail,
      text: "Email Support",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: MapPin,
      text: "Office Location",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: Globe,
      text: "Website",
      href: "https://ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sitemap className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Site Map
            </h1>
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need
          </p>
        </div>
<<<<<<< HEAD
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Access</h2>
            <p className="text-xl text-gray-300">Popular pages and quick actions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={link.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${link.color} rounded-xl mb-6`}>
                      <link.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {link.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Main Pages</h2>
            <p className="text-xl text-gray-300">
              Core website pages and primary navigation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteStructure.main.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group"
              >
                <Link to={page.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                        {page.name}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6">
              <Briefcase className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of technology services and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteStructure.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-6">
              <ShoppingCart className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Marketplace</h2>
            <p className="text-xl text-gray-300">
              Digital products, talent, and equipment marketplace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteStructure.marketplace.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={item.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                        {item.name}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-200" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6">
                  <FileText className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Resources</h2>
                <p className="text-xl text-gray-300">
                  Documentation, tools, and development resources
                </p>
              </div>

              <div className="space-y-4">
                {siteStructure.resources.map((resource, index) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link to={resource.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-4 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                              {resource.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {resource.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl mb-6">
                  <HelpCircle className="w-8 h-8 text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Support</h2>
                <p className="text-xl text-gray-300">
                  Help, support, and customer service resources
                </p>
              </div>

              <div className="space-y-4">
                {siteStructure.support.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link to={item.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-4 border border-slate-600/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
                              {item.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-200" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal & Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl mb-6">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Legal & Privacy</h2>
                <p className="text-xl text-gray-300">
                  Important legal documents and privacy information
                </p>
              </div>

              <div className="space-y-4">
                {siteStructure.legal.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link to={item.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-4 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-200">
                              {item.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mb-6">
                  <MessageSquare className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-xl text-gray-300">
                  Get in touch with our team
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="group"
                  >
                    <a href={contact.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-4 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mr-4">
                            <contact.icon className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                              {contact.label}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {contact.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-4 text-center">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-6 h-6 text-gray-300 hover:text-white transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
=======
      </div>

      {/* Site Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="group">
                    <Link
                      to={link.path}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">
                        {link.description}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
        </div>
      </div>

<<<<<<< HEAD
      {/* XML Sitemap Link */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need XML Sitemap?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For search engines and developers, we also provide an XML sitemap 
              with all our pages and their metadata.
            </p>
            <a
              href="/sitemap.xml"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              View XML Sitemap
            </a>
          </motion.div>
=======
      {/* Contact Information */}
      <section className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300">
              Need help finding something? Contact our team directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {contact.text}
                </h3>
                {contact.href !== "#" && (
                  <a 
                    href={contact.href}
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Contact →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team is here to help you navigate and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Help Center
              </Link>
            </div>
          </div>
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
        </div>
      </section>
    </div>
  );
}
