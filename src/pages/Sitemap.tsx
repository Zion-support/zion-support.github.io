import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Building, 
  Target, 
  Rocket, 
  Star,
  Cpu,
  Lock,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  TrendingUp,
  Award,
  Code,
  Truck,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Globe,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership programs' },
        { name: 'Team', path: '/team', description: 'Our team members' },
        { name: 'News', path: '/news', description: 'Latest updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Blog', path: '/blog', description: 'Industry insights' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', path: '/help', description: 'Support resources' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy information' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation' }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Services Overview', path: '/services', description: 'All our services' },
        { name: '2026 Services', path: '/services2026', description: 'Revolutionary AI & Quantum Solutions' },
        { name: '2027 Services', path: '/services2027', description: 'Cutting-edge Innovation & Emerging Tech' },
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Software as a Service solutions' },
        { name: 'Comprehensive Services', path: '/comprehensive-services', description: 'Full-service solutions' },
        { name: 'Mobile Launch', path: '/mobile-launch', description: 'Mobile app development' },
        { name: 'Analytics', path: '/analytics', description: 'Data analytics services' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Artificial intelligence and machine learning solutions',
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'AI-powered research tools' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain AI solutions' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Marketing automation platform' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      links: [
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Advanced security architecture' },
        { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI-powered security solutions' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green tech solutions' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      links: [
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
        { name: 'Business Intelligence', path: '/services/business-intelligence', description: 'Performance metrics & reporting' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Web performance tracking' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas-solutions', description: 'Niche software solutions' },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation tools' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio processing services' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'E-commerce returns handling' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large business solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare industry solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Manufacturing optimization' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Financial services technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology solutions' }
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Marketplace Home', path: '/marketplace', description: 'Digital marketplace' },
        { name: 'Products', path: '/marketplace/products', description: 'Digital products' },
        { name: 'Talent', path: '/marketplace/talent', description: 'Expert talent pool' },
        { name: 'Equipment', path: '/marketplace/equipment', description: 'Technology equipment' },
        { name: 'Services', path: '/marketplace/services', description: 'Professional services' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      links: [
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Developers', path: '/developers', description: 'Developer resources' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry research' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' },
        { name: 'Training', path: '/training', description: 'Skill development' },
        { name: 'Support', path: '/support', description: 'Technical support' },
        { name: 'Research & Development', path: '/research-development', description: 'R&D initiatives' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Status', path: '/status', description: 'System status' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility features' },
        { name: 'Cookies', path: '/cookies', description: 'Cookie policy' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Site Map
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete navigation guide to all pages and services available on Zion Tech Group
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Last updated: {currentYear} | Total pages: {sitemapSections.reduce((acc, section) => acc + section.links.length, 0)}
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <section.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    className="group"
                  >
                    <Link
                      to={link.path}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                    >
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 mt-0.5 flex-shrink-0 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <div className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Need Help Finding Something?</h3>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Search Site
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;
