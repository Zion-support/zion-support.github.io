import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Globe, 
  Rocket, 
  Brain, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Search, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  Star,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Atom,
  Leaf,
  Code,
  ShoppingCart,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
=======
import { Link } from 'react-router-dom';
import { Map, Home, Building, Code, Shield, Users, BookOpen, HelpCircle, FileText, Globe, ArrowRight } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    {
      category: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Our story and mission' },
        { name: 'Our Team', path: '/team', description: 'Meet our experts' },
        { name: 'Leadership', path: '/leadership', description: 'Executive team' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'News', path: '/news', description: 'Latest updates' },
        { name: 'Contact Us', path: '/contact', description: 'Get in touch with us' },
      ]
    },
    {
<<<<<<< HEAD
      title: 'Services',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'All Services', href: '/services', description: 'Complete service catalog' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', description: 'Legal AI automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Financial AI platform' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation AI' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT and edge computing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital twin technology' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'IT infrastructure services' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'Micro SaaS solutions' }
      ]
    },
    {
      title: 'Innovative Services',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future technology solutions' },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', description: '2025 innovative services' },
        { name: 'Innovative Services Showcase 2027', href: '/innovative-services-showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Landing 2025', href: '/services/comprehensive-2025', description: '2025 comprehensive services' },
        { name: 'Comprehensive Services Landing 2027', href: '/services/comprehensive-2027', description: '2027 comprehensive services' },
        { name: 'Comprehensive Services Landing 2030', href: '/services/comprehensive-2030', description: '2030 comprehensive services' },
        { name: 'Enhanced Services Landing', href: '/services/enhanced', description: 'Enhanced services overview' },
        { name: 'Comprehensive Services Advertising', href: '/services/comprehensive-advertising', description: 'Advertising services' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Comprehensive Services Showcase 2031', href: '/services/showcase-2031', description: '2031 showcase' },
        { name: 'Comprehensive Services Showcase 2025', href: '/services/showcase-2025', description: '2025 showcase' },
        { name: 'Comprehensive Services Showcase 2026', href: '/services/showcase-2026', description: '2026 showcase' },
        { name: 'Comprehensive Services Showcase 2027', href: '/services/showcase-2027', description: '2027 showcase' },
        { name: 'Comprehensive Services Showcase 2028', href: '/services/showcase-2028', description: '2028 showcase' },
        { name: 'Comprehensive Services Showcase 2029', href: '/services/showcase-2029', description: '2029 showcase' },
        { name: 'Comprehensive Services Showcase 2030', href: '/services/showcase-2030', description: '2030 showcase' },
        { name: 'Comprehensive Services Showcase 2031', href: '/services/showcase-2031', description: '2031 showcase' },
        { name: 'Comprehensive Services Showcase 2032', href: '/services/showcase-2032', description: '2032 showcase' },
        { name: 'Comprehensive Services Showcase 2033', href: '/services/showcase-2033', description: '2033 showcase' },
        { name: 'Comprehensive Services Showcase 2034', href: '/services/showcase-2034', description: '2034 showcase' },
        { name: 'Comprehensive Services Showcase 2035', href: '/services/showcase-2035', description: '2035 showcase' },
        { name: 'Comprehensive Services Showcase 2036', href: '/services/showcase-2036', description: '2036 showcase' },
        { name: 'Comprehensive Services Showcase 2037', href: '/services/showcase-2037', description: '2037 showcase' },
        { name: 'Comprehensive Services Showcase 2038', href: '/services/showcase-2038', description: '2038 showcase' },
        { name: 'Comprehensive Services Showcase 2039', href: '/services/showcase-2039', description: '2039 showcase' },
        { name: 'Comprehensive Services Showcase 2040', href: '/services/showcase-2040', description: '2040 showcase' },
        { name: 'Comprehensive Services Showcase 2041', href: '/services/showcase-2041', description: '2041 showcase' },
        { name: 'Comprehensive Services Showcase 2042', href: '/services/showcase-2042', description: '2042 showcase' },
        { name: 'Comprehensive Services Showcase 2043', href: '/services/showcase-2043', description: '2043 showcase' },
        { name: 'Comprehensive Services Showcase 2044', href: '/services/showcase-2044', description: '2044 showcase' },
        { name: 'Comprehensive Services Showcase 2045', href: '/services/showcase-2045', description: '2045 showcase' },
        { name: 'Comprehensive Services Showcase 2046', href: '/services/showcase-2046', description: '2046 showcase' },
        { name: 'Comprehensive Services Showcase 2047', href: '/services/showcase-2047', description: '2047 showcase' },
        { name: 'Comprehensive Services Showcase 2048', href: '/services/showcase-2048', description: '2048 showcase' },
        { name: 'Comprehensive Services Showcase 2049', href: '/services/showcase-2049', description: '2049 showcase' },
        { name: 'Comprehensive Services Showcase 2050', href: '/services/showcase-2050', description: '2050 showcase' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations', description: 'AI-powered business automation' },
        { name: 'AI Content Creation Studio Pro', href: '/services/ai-content-creation-studio', description: 'AI content generation platform' },
        { name: 'AI Financial Operations & Compliance', href: '/services/fintech-operations-compliance', description: 'AI financial compliance platform' },
        { name: 'AI-Powered Sustainability Analytics', href: '/services/sustainable-tech-analytics', description: 'Sustainability analytics platform' },
        { name: 'AI Quantum Machine Learning', href: '/services/ai-quantum-machine-learning', description: 'Quantum AI solutions' },
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform', description: 'Edge AI computing' },
        { name: 'AI Digital Twin Platform', href: '/services/ai-digital-twin-platform', description: 'Digital twin AI' },
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk-management', description: 'Supply chain AI risk' },
        { name: 'AI ESG Compliance Platform', href: '/services/ai-esg-compliance-platform', description: 'ESG compliance AI' }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Quantum-Safe Cryptography Platform', href: '/services/quantum-safe-cryptography', description: 'Post-quantum cryptography' },
        { name: 'Space Technology Innovation Platform', href: '/services/space-tech-innovation', description: 'Space tech solutions' },
        { name: 'Quantum Computing Platform', href: '/services/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum AI hybrid' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT edge solutions' },
        { name: 'Digital Twin Technology', href: '/services/digital-twin', description: 'Digital twin solutions' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      links: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'AI security solutions' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Zero trust security' },
        { name: 'Security Headers CSP', href: '/services/security-headers-csp', description: 'Security configuration' },
        { name: 'DSR Portal', href: '/services/dsr-portal', description: 'Data subject rights' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-500',
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', href: '/api', description: 'API documentation' },
        { name: 'Developer Portal', href: '/developer', description: 'Developer resources' },
        { name: 'Help Center', href: '/help', description: 'Help and support' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Training', href: '/training', description: 'Training programs' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'News', href: '/news', description: 'Company news' },
        { name: 'Press', href: '/press', description: 'Press releases' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Research & Development', href: '/research-development', description: 'R&D initiatives' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our pages, services, and resources organized by category."
        keywords="sitemap, website navigation, Zion Tech Group, services, pages"
        canonicalUrl="https://ziontechgroup.com/sitemap"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <motion.div
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
=======
      category: 'Services',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      pages: [
        { name: 'AI Solutions', path: '/ai-solutions', description: 'Machine learning & automation' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Infrastructure & deployment' },
        { name: 'Cybersecurity', path: '/services/ai-cybersecurity-platform', description: 'Security & compliance' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Lightweight applications' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Technology advisory' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Data analytics & insights' },
        { name: 'AI Content Creation', path: '/services/ai-content-marketing-suite', description: 'Content marketing tools' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'Smart project coordination' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial insights & forecasting' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Medical technology solutions' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Sales automation & optimization' },
      ]
    },
    {
      category: 'Solutions',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Medical technology & systems' },
        { name: 'Financial Solutions', path: '/financial-solutions', description: 'Fintech & banking solutions' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Industry 4.0 & automation' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation labs & R&D' },
        { name: 'Green IT Solutions', path: '/green-it', description: 'Sustainable technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' },
        { name: 'Education Solutions', path: '/solutions/education', description: 'Educational technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'E-commerce & retail tech' },
      ]
    },
    {
      category: 'Resources',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      pages: [
        { name: 'Blog', path: '/blog', description: 'Insights & industry updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories & examples' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research & analysis' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content & sessions' },
        { name: 'Documentation', path: '/documentation', description: 'Technical guides & manuals' },
        { name: 'API Reference', path: '/api', description: 'Developer resources & APIs' },
        { name: 'Developer Portal', path: '/developer-portal', description: 'Tools for developers' },
        { name: 'Training Materials', path: '/training', description: 'Learning resources' },
      ]
    },
    {
      category: 'Support',
      icon: HelpCircle,
      color: 'from-indigo-500 to-purple-500',
      pages: [
        { name: 'Help Center', path: '/help', description: 'Find answers & solutions' },
        { name: 'FAQ', path: '/faq', description: 'Common questions & answers' },
        { name: 'Contact Support', path: '/support', description: 'Get help from our team' },
        { name: 'Training', path: '/training', description: 'Skill development programs' },
        { name: 'Status Page', path: '/status', description: 'Service status & updates' },
        { name: 'Community', path: '/community', description: 'User forums & discussions' },
        { name: 'Live Chat', path: '/chat', description: 'Real-time support' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing information' },
        { name: 'Schedule Demo', path: '/schedule-demo', description: 'See our solutions in action' },
      ]
    },
    {
      category: 'Legal & Privacy',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection & privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms & conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage & preferences' },
        { name: 'Data Protection', path: '/data-protection', description: 'GDPR & data security' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation structure' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'Request Quote', path: '/request-quote', badge: 'Get Started' },
    { name: 'Schedule Demo', path: '/schedule-demo', badge: 'Free' },
    { name: 'Contact Sales', path: '/contact', badge: '24/7' },
    { name: 'Support Chat', path: '/chat', badge: 'Live' },
    { name: 'Careers', path: '/careers', badge: 'Hiring' },
    { name: 'Partners', path: '/partners', badge: 'Join Us' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Map className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate through Zion Tech Group's comprehensive website structure. 
            Find all our pages, services, and resources organized by category.
          </p>
        </div>
      </motion.div>

      {/* Quick Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/50 text-center"
              >
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    link.badge === 'Get Started' ? 'bg-green-500 text-white' :
                    link.badge === 'Free' ? 'bg-blue-500 text-white' :
                    link.badge === '24/7' ? 'bg-purple-500 text-white' :
                    link.badge === 'Live' ? 'bg-orange-500 text-white' :
                    link.badge === 'Hiring' ? 'bg-pink-500 text-white' :
                    'bg-indigo-500 text-white'
                  }`}>
                    {link.badge}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                  {link.name}
                </h3>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Site Structure */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {siteStructure.map((category, categoryIndex) => (
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site Map
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Navigate through our comprehensive website structure to find exactly what you're looking for
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Sitemap Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                {/* Section Header */}
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                
                {/* Links */}
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className="block group hover:bg-slate-700/40 rounded-lg p-3 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Finding Something?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team is here to help guide you to the right solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  Contact Us
                </Link>
                
                <Link
                  to="/help"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2 inline" />
                  Get Help
                </Link>
                
                <Link
                  to="/search"
                  className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2 inline" />
                  Search Site
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
=======
              transition={{ duration: 0.6, delay: 0.3 + (categoryIndex * 0.1) }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {page.name}
                        </h3>
                        <p className="text-zion-slate-light text-sm leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Need Help Finding Something?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate 
              our website and find the information you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              >
                Help Center
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-8"
        >
          <p className="text-zion-slate-light text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      </div>
    </div>
  );
}