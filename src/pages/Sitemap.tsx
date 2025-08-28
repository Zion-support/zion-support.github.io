import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Atom, 
  ShoppingCart, 
  Star,
  Building,
  Users,
  FileText,
  Newspaper,
  HelpCircle,
  Target,
  Server,
  Lock,
  Network,
  Satellite,
  Eye,
  Zap,
  TrendingUp,
  MessageCircle,
  BarChart3,
  DollarSign,
  Rocket,
  Award,
  Briefcase,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: any;
  description: string;
  links: Array<{
    name: string;
    path: string;
    description?: string;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    description: 'Core website pages and information',
    links: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About Us', path: '/about', description: 'Company information and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'Team', path: '/team', description: 'Meet our team members' },
      { name: 'Leadership', path: '/leadership', description: 'Company leadership' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      { name: 'Partners', path: '/partners', description: 'Partnership information' },
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
      { name: 'News', path: '/news', description: 'Latest company news' },
      { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', path: '/help', description: 'Support and documentation' },
      { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
      { name: 'Marketplace', path: '/marketplace', description: 'Product marketplace' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Advanced artificial intelligence and machine learning solutions',
    links: [
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'Intelligent process automation' },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'Data management and compliance' },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'Customer insights and analytics' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'Financial risk assessment' },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Business analytics and insights' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Sales process optimization' },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Search engine optimization' },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'Automated interview evaluation' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Content creation and marketing' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', description: 'Customer service automation' },
      { name: 'AI Project Management', path: '/services/ai-project-management', description: 'Project management automation' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial data analysis' },
      { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Marketing process automation' }
    ]
  },
  {
    title: 'Cloud & Infrastructure Services',
    icon: Cloud,
    description: 'Cloud computing, DevOps, and IT infrastructure solutions',
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'DevOps automation and cloud deployment' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'IT infrastructure management' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations optimization' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'IT strategy and consulting' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy Services',
    icon: Shield,
    description: 'Security, compliance, and privacy protection solutions',
    links: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security platform' },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Security headers and content security policy' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'Data subject rights management' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Zero trust security architecture' },
      { name: 'AI Compliance Copilot', path: '/services/ai-compliance-copilot', description: 'Compliance automation assistant' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge technology solutions and research',
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions' },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Internet of Things and edge computing' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'AI and quantum computing integration' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space technology solutions' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Digital transformation consulting' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Specialized software-as-a-service solutions for specific business needs',
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support platform' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Website performance analytics' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support ticketing system' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation platform' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Product returns processing' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation platform' }
    ]
  },
  {
    title: 'Featured Service Collections',
    icon: Star,
    description: 'Curated collections of our most innovative services by year',
    links: [
      { name: '2025 New Innovative Services', path: '/new-innovative-services-2025', description: 'Latest AI and technology services for 2025' },
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Comprehensive service showcase for 2026' },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Advanced service portfolio for 2027' },
      { name: '2029 Services Showcase', path: '/comprehensive-services-showcase-2029', description: 'Future-focused services for 2029' },
      { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', description: 'Next-generation services for 2030' }
    ]
  },
  {
    title: 'Solutions by Industry',
    icon: Building,
    description: 'Industry-specific solutions and consulting services',
    links: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large enterprise solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' },
      { name: 'AI Solutions', path: '/ai-solutions', description: 'AI-powered business solutions' }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion Tech Group
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-2">
              Complete Site Map
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI, cloud, cybersecurity, and emerging technology solutions. 
              Find the perfect service for your business needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  <p className="text-slate-400">{section.description}</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    className="group"
                  >
                    <Link
                      to={link.path}
                      className="block p-4 bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 hover:border-cyan-500/50 rounded-xl transition-all duration-300 group-hover:scale-105"
                    >
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                        {link.name}
                      </h4>
                      {link.description && (
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {link.description}
                        </p>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need Help Finding the Right Solution?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our team of experts is here to help you navigate our services and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-300"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Get Help</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
