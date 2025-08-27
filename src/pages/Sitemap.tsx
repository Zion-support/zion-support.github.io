import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Atom, 
  ShoppingCart, 
  Users, 
  FileText, 
  HelpCircle, 
  DollarSign, 
  Star,
  Rocket,
  Building,
  Heart,
  Truck,
  Network,
  Eye,
  Lock,
  BarChart3,
  MessageCircle,
  Target,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  Clock,
  BookOpen,
  Briefcase,
  Newspaper,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Cpu,
  PenTool,
  GitFork
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
    description: 'Core website pages and navigation',
    links: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information' },
      { name: 'Services', path: '/services', description: 'Main services overview' },
      { name: 'Contact', path: '/contact', description: 'Get in touch' },
      { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      { name: 'Partners', path: '/partners', description: 'Partnership information' },
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', path: '/help', description: 'Support resources' },
      { name: 'Sitemap', path: '/sitemap', description: 'This page' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Advanced AI-powered solutions and automation',
    links: [
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow automation' },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'AI-powered data governance' },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'AI-powered customer insights' },
      { name: 'AI Business Intelligence Analytics', path: '/services/ai-business-intelligence-analytics', description: 'Advanced analytics & ML insights' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
      { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'AI-powered financial risk assessment' },
      { name: 'AI Code Review Security Scanner', path: '/services/ai-code-review-security-scanner', description: 'Automated code security analysis' },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', description: 'AI-driven DevOps automation' },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', description: 'Enhanced customer experience' },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing automation' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration platform' },
      { name: 'AI Quantum Financial Trading', path: '/services/ai-quantum-financial-trading', description: 'Quantum-AI trading platform' },
      { name: 'AI Autonomous Supply Chain', path: '/services/ai-autonomous-supply-chain', description: 'AI-powered supply chain automation' },
      { name: 'AI Cybersecurity Threat Intelligence', path: '/services/ai-cybersecurity-threat-intelligence', description: 'AI-powered threat detection' }
    ]
  },
  {
    title: 'Cloud & DevOps Services',
    icon: Cloud,
    description: 'Infrastructure, automation, and cloud solutions',
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security, compliance, and data protection',
    links: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' }
    ]
  },
  {
    title: 'Digital Transformation',
    icon: Zap,
    description: 'Strategic technology consulting and transformation',
    links: [
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Next-generation technology solutions',
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space-based solutions' }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    description: 'Business intelligence and data insights',
    links: [
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'Business Intelligence', path: '/services/ai-business-intelligence-analytics', description: 'Performance metrics & reporting' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Niche software solutions and tools',
    links: [
      { name: 'Micro SaaS Platform', path: '/micro-saas', description: 'Niche software solutions' },
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support system' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio to text conversion' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Automated email campaigns' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Product returns system' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' }
    ]
  },
  {
    title: 'Featured Service Showcases',
    icon: Star,
    description: 'Specialized service collections and showcases',
    links: [
      { name: '2025 New Innovative Services', path: '/new-innovative-services-2025', description: 'Revolutionary AI & Micro SAAS Solutions' },
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
      { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
      { name: '2029 Comprehensive Services Showcase', path: '/comprehensive-services-showcase-2029', description: 'Complete Portfolio of AI, IT & Micro SaaS Solutions' }
    ]
  },
  {
    title: 'Additional Services',
    icon: Rocket,
    description: 'Specialized and industry-specific solutions',
    links: [
      { name: 'Marketplace', path: '/marketplace', description: 'Service marketplace' },
      { name: 'Pricing Guide', path: '/pricing', description: 'Service pricing information' },
      { name: 'News & Updates', path: '/news', description: 'Company news and updates' },
      { name: 'Help Center', path: '/help', description: 'Support and documentation' }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Zion Tech Group
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-zion-cyan mb-6">
              Complete Website Sitemap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI, IT, and Micro SaaS services. 
              Navigate through our organized service categories and find the perfect solution for your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {sitemapSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group p-4 bg-white/5 rounded-xl border border-zion-cyan/10 hover:border-zion-cyan/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-zion-cyan group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </h4>
                    {link.description && (
                      <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
            >
              Go Home
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
