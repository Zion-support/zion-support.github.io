import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Server, 
  Rocket, 
  Shield, 
  Cloud, 
  Atom, 
  Sparkles, 
  TrendingUp, 
  Building, 
  Heart, 
  DollarSign, 
  Truck, 
  BookOpen, 
  Satellite,
  Users,
  FileText,
  HelpCircle,
  MessageCircle,
  Code,
  Cpu,
  Globe,
  Zap
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Core Pages',
      icon: Zap,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with our team" },
        { name: "Services Overview", path: "/services-overview", description: "Explore all our services" },
        { name: "Services Comparison", path: "/services-comparison", description: "Compare different service tiers" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships and collaborations" },
        { name: "Careers", path: "/careers", description: "Join our team of experts" },
        { name: "Team", path: "/team", description: "Meet our leadership and experts" },
        { name: "Press", path: "/press", description: "Media resources and press releases" }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered business insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated compliance management' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI sales automation' },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', description: 'AI-driven SEO optimization' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment', description: 'AI interview evaluation' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Content creation automation' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Automated customer service' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI project coordination' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Financial data analysis' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', description: 'Content generation platform' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Workflow automation' },
        { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', description: 'Data management' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'CX insights' },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Risk assessment' },
        { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition', description: 'Talent recruitment' },
        { name: 'AI IoT Edge Computing', href: '/services/ai-iot-edge-computing', description: 'Edge AI solutions' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'AI Sustainable Technology', href: '/services/ai-sustainable-technology', description: 'Green AI solutions' },
        { name: 'AI Quantum Machine Learning', href: '/services/ai-quantum-machine-learning', description: 'Quantum AI' },
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk-management', description: 'Supply chain AI' },
        { name: 'AI ESG Compliance Platform', href: '/services/ai-esg-compliance-platform', description: 'ESG compliance' },
        { name: 'AI Digital Twin Platform', href: '/services/ai-digital-twin-platform', description: 'Digital twin solutions' },
        { name: 'AI Quantum Computing Platform', href: '/services/ai-quantum-computing-platform', description: 'Quantum computing' },
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform', description: 'Edge computing' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'HR automation' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation' },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', description: 'Research automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', description: 'Healthcare AI' }
      ]
    },
    {
      title: 'IT & Infrastructure Services',
      icon: Server,
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'DevOps automation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Infrastructure management' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'AI security' },
        { name: 'Security Headers CSP', href: '/services/security-headers-csp', description: 'Security configuration' },
        { name: 'DSR Portal', href: '/services/dsr-portal', description: 'Data subject rights' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Zero trust security' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital twin technology' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Digital transformation' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT edge solutions' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum AI hybrid' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space tech solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data analysis' },
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Support ticketing' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Web analytics' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Rocket,
      links: [
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Micro SaaS overview' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', description: 'SaaS solutions' },
        { name: 'Micro SaaS Showcase', href: '/micro-saas-showcase', description: 'SaaS showcase' },
        { name: 'Micro SaaS Services', href: '/micro-saas-services', description: 'SaaS services' },
        { name: 'Micro SaaS Services 2028', href: '/micro-saas-services-2028', description: '2028 SaaS services' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: "Pricing Guide", path: "/pricing", description: "Comprehensive pricing information" },
        { name: "Pricing 2027", path: "/pricing", description: "Current year pricing strategies" },
        { name: "Pricing 2030", path: "/pricing-2030", description: "Advanced pricing strategies" },
        { name: "Request Quote", path: "/request-quote", description: "Get custom pricing" },
        { name: "Marketplace", path: "/marketplace", description: "Explore our solutions" }
      ]
    },
    {
      title: 'Marketplace',
      icon: Globe,
      links: [
        { name: 'Marketplace', href: '/marketplace', description: 'Main marketplace' },
        { name: 'Products', href: '/marketplace/products', description: 'Product marketplace' },
        { name: 'Talent', href: '/marketplace/talent', description: 'Talent marketplace' },
        { name: 'Equipment', href: '/marketplace/equipment', description: 'Equipment marketplace' },
        { name: 'Services', href: '/marketplace/services', description: 'Service marketplace' }
      ]
    },
    {
      title: 'Advanced Services',
      icon: Sparkles,
      links: [
        { name: '2025 Services Overview', href: '/ultimate-services-showcase-2025', description: '2025 services' },
        { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', description: '2026 services' },
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', description: '2029 services' },
        { name: 'Enhanced Services Showcase 2025', href: '/enhanced-services-showcase-2025', description: 'Enhanced 2025' },
        { name: 'Comprehensive Services Showcase 2025', href: '/comprehensive-services-showcase-2025', description: 'Comprehensive 2025' },
        { name: 'Innovative Services Landing 2025', href: '/innovative-services-landing-2025', description: 'Innovative 2025' },
        { name: 'Comprehensive Pricing Guide 2025', href: '/comprehensive-pricing-guide-2025', description: 'Pricing 2025' },
        { name: 'Comprehensive Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026', description: 'Pricing 2026' },
        { name: 'Comprehensive Pricing Guide 2027', href: '/comprehensive-pricing-guide-2027', description: 'Pricing 2027' },
        { name: 'Comprehensive Pricing Guide 2028', href: '/comprehensive-pricing-guide-2028', description: 'Pricing 2028' },
        { name: 'Comprehensive Pricing Guide 2030', href: '/comprehensive-pricing-guide-2030', description: 'Pricing 2030' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: HelpCircle,
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

  const quickLinks = [
    { name: "Get Started", path: "/contact", description: "Start your project with us", icon: MessageCircle },
    { name: "Request Quote", path: "/request-quote", description: "Get a custom quote", icon: DollarSign },
    { name: "Services Overview", path: "/services-overview", description: "Explore all services", icon: Settings },
    { name: "AI Solutions", path: "/ai-services", description: "Discover AI capabilities", icon: Brain },
    { name: "Pricing Guide", path: "/pricing", description: "View pricing options", icon: DollarSign },
    { name: "Support Center", path: "/help", description: "Get help and support", icon: HelpCircle },
    { name: "Documentation", path: "/docs", description: "Technical resources", icon: BookOpen },
    { name: "Contact Sales", path: "/contact", description: "Talk to our experts", icon: Phone }
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, text: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-black/95 backdrop-blur-xl border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Site Map
                </h1>
                <p className="text-lg text-cyan-400 font-rajdhani tracking-wider">
                  Complete Navigation Guide
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of services, solutions, and resources. 
              Find exactly what you need to transform your business with cutting-edge technology.
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

      {/* Sitemap Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-rajdhani text-cyan-400 uppercase tracking-wider">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <div className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                          →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
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

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help guide you to the right solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Get Help
              </Link>
              <Link
                to="/search"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Search Site
              </Link>
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
