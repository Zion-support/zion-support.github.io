import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Star, 
  Target, 
  Building,
  TrendingUp,
  Activity,
  Users, 
  Server,
  Rocket,
  Atom,
  Heart,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShoppingCart, 
  Newspaper,
  HelpCircle,
  Lock,
  Network,
  Satellite,
  Eye,
  MessageCircle,
  BarChart3,
  DollarSign,
  Award,
  Briefcase
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface SitemapRoute {
  path: string;
  name: string;
  description?: string;
  priority: string;
  changefreq: string;
  category: string;
  featured?: boolean;
}

interface SitemapSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  routes: SitemapRoute[];
  expanded?: boolean;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    description: 'Core website pages and navigation',
    expanded: true,
    routes: [
      { path: '/', name: 'Home', description: 'Main landing page', priority: '1.0', changefreq: 'daily', category: 'main' },
      { path: '/about', name: 'About Us', description: 'Company information and team', priority: '0.8', changefreq: 'monthly', category: 'main' },
      { path: '/services', name: 'Services', description: 'Overview of all services', priority: '0.9', changefreq: 'weekly', category: 'main' },
      { path: '/contact', name: 'Contact', description: 'Get in touch with us', priority: '0.8', changefreq: 'monthly', category: 'main' },
      { path: '/blog', name: 'Blog', description: 'Latest news and insights', priority: '0.7', changefreq: 'weekly', category: 'main' },
      { path: '/careers', name: 'Careers', description: 'Job opportunities', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/pricing', name: 'Pricing', description: 'Service pricing information', priority: '0.8', changefreq: 'monthly', category: 'main' },
      { path: '/partners', name: 'Partners', description: 'Partnership opportunities', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/news', name: 'News', description: 'Company news and updates', priority: '0.7', changefreq: 'weekly', category: 'main' },
      { path: '/case-studies', name: 'Case Studies', description: 'Success stories and examples', priority: '0.7', changefreq: 'monthly', category: 'main' },
      { path: '/help', name: 'Help Center', description: 'Support and documentation', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/faq', name: 'FAQ', description: 'Frequently asked questions', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/sitemap', name: 'Sitemap', description: 'Complete site navigation', priority: '0.5', changefreq: 'monthly', category: 'main' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Cutting-edge artificial intelligence solutions',
    expanded: false,
    routes: [
      { path: '/ai-services', name: 'AI Services Overview', description: 'Comprehensive AI solutions', priority: '0.9', changefreq: 'weekly', category: 'ai', featured: true },
      { path: '/services/ai-workflow-orchestrator', name: 'AI Workflow Orchestrator', description: 'AI-powered workflow automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-data-governance-platform', name: 'AI Data Governance Platform', description: 'AI-powered data governance', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-customer-experience-analytics', name: 'AI Customer Experience Analytics', description: 'AI-powered customer insights', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-business-intelligence-analytics', name: 'AI Business Intelligence Analytics', description: 'Advanced analytics & ML insights', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated regulatory compliance', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-sales-copilot', name: 'AI Sales Copilot', description: 'Intelligent sales optimization', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-powered-seo', name: 'AI-Powered SEO', description: 'Machine learning SEO optimization', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/interview-assessment-ai', name: 'Interview Assessment AI', description: 'AI-powered candidate evaluation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-content-marketing-suite', name: 'AI Content Marketing Suite', description: 'Automated content creation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-customer-support-automation', name: 'AI Customer Support Automation', description: 'Intelligent support automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-project-management', name: 'AI Project Management', description: 'AI-driven project optimization', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-financial-analytics', name: 'AI Financial Analytics', description: 'Intelligent financial insights', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-financial-risk-management', name: 'AI Financial Risk Management', description: 'AI-powered financial risk assessment', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-code-review-security-scanner', name: 'AI Code Review Security Scanner', description: 'Automated code security analysis', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-devops-automation-platform', name: 'AI DevOps Automation Platform', description: 'AI-driven DevOps automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-customer-experience-support', name: 'AI Customer Experience Support', description: 'Enhanced customer experience', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-marketing-automation-personalization', name: 'AI Marketing Automation Personalization', description: 'Personalized marketing automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration platform', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-quantum-financial-trading', name: 'AI Quantum Financial Trading', description: 'Quantum-AI trading platform', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-autonomous-supply-chain', name: 'AI Autonomous Supply Chain', description: 'AI-powered supply chain automation', priority: '0.8', changefreq: 'weekly', category: 'ai' },
      { path: '/services/ai-cybersecurity-threat-intelligence', name: 'AI Cybersecurity Threat Intelligence', description: 'AI-powered threat detection', priority: '0.8', changefreq: 'weekly', category: 'ai' }
    ]
  },
  {
    title: 'Cloud & Infrastructure Services',
    icon: Cloud,
    description: 'Scalable cloud solutions and DevOps',
    expanded: false,
    routes: [
      { path: '/services/cloud-devops', name: 'Cloud DevOps', description: 'Infrastructure automation & scaling', priority: '0.9', changefreq: 'weekly', category: 'cloud', featured: true },
      { path: '/services/it-infrastructure', name: 'IT Infrastructure', description: 'Enterprise infrastructure solutions', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/services/finops-advisor', name: 'FinOps Advisor', description: 'Cloud cost optimization', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', description: 'Financial operations automation', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/it-consulting', name: 'IT Consulting', description: 'Technology strategy & planning', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/solutions/enterprise', name: 'Enterprise Solutions', description: 'Large-scale enterprise solutions', priority: '0.8', changefreq: 'weekly', category: 'cloud' },
      { path: '/solutions/healthcare', name: 'Healthcare Solutions', description: 'Healthcare technology solutions', priority: '0.8', changefreq: 'weekly', category: 'cloud' }
    ]
  },
  {
    title: 'Cybersecurity & Compliance',
    icon: Shield,
    description: 'Advanced security and compliance solutions',
    expanded: false,
    routes: [
      { path: '/services/ai-cybersecurity-platform', name: 'AI Cybersecurity Platform', description: 'AI-powered security platform', priority: '0.9', changefreq: 'weekly', category: 'security', featured: true },
      { path: '/services/security-headers-csp', name: 'Security Headers & CSP', description: 'Content security policy', priority: '0.8', changefreq: 'weekly', category: 'security' },
      { path: '/services/dsr-portal', name: 'DSR Privacy Portal', description: 'Data subject rights portal', priority: '0.8', changefreq: 'weekly', category: 'security' },
      { path: '/services/zero-trust-network-access', name: 'Zero Trust Network Access', description: 'Zero trust security model', priority: '0.8', changefreq: 'weekly', category: 'security' },
      { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated compliance management', priority: '0.8', changefreq: 'weekly', category: 'security' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Quantum computing, IoT, and cutting-edge tech',
    expanded: false,
    routes: [
      { path: '/services/quantum-computing', name: 'Quantum Computing', description: 'Quantum computing solutions', priority: '0.9', changefreq: 'weekly', category: 'emerging', featured: true },
      { path: '/services/iot-edge-computing', name: 'IoT Edge Computing', description: 'Edge computing infrastructure', priority: '0.8', changefreq: 'weekly', category: 'emerging' },
      { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration', priority: '0.8', changefreq: 'weekly', category: 'emerging' },
      { path: '/space-tech', name: 'Space Technology', description: 'Space technology solutions', priority: '0.8', changefreq: 'weekly', category: 'emerging' },
      { path: '/services/digital-twin', name: 'Digital Twin', description: 'Digital twin technology', priority: '0.8', changefreq: 'weekly', category: 'emerging' },
      { path: '/services/digital-transformation', name: 'Digital Transformation', description: 'Digital transformation consulting', priority: '0.8', changefreq: 'weekly', category: 'emerging' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Specialized software-as-a-service solutions',
    expanded: false,
    routes: [
      { path: '/services/micro-crm', name: 'Micro CRM', description: 'Customer relationship management', priority: '0.9', changefreq: 'weekly', category: 'microsaas', featured: true },
      { path: '/services/helpdesk-platform', name: 'Helpdesk Platform', description: 'Customer support platform', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/website-analytics', name: 'Website Analytics', description: 'Website performance analytics', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/it-helpdesk', name: 'IT Helpdesk', description: 'IT support management', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/affiliate-tracking', name: 'Affiliate Tracking', description: 'Affiliate program management', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/mobile-survey', name: 'Mobile Survey', description: 'Mobile survey platform', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/podcast-transcription', name: 'Podcast Transcription', description: 'Audio transcription service', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/email-sequencer', name: 'Email Sequencer', description: 'Email automation platform', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/returns-management', name: 'Returns Management', description: 'Returns processing system', priority: '0.8', changefreq: 'weekly', category: 'microsaas' },
      { path: '/services/llm-content-studio', name: 'LLM Content Studio', description: 'AI content creation platform', priority: '0.8', changefreq: 'weekly', category: 'microsaas' }
    ]
  }
];

export default function Sitemap() {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    new Set(['Main Pages'])
  );

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate-dark to-zion-slate opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="text-zion-cyan">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through our comprehensive range of services, pages, and resources. 
              Find exactly what you're looking for with our organized site structure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sitemapSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-300">
                      {section.routes.length} pages
                    </span>
                    {expandedSections.has(section.title) ? (
                      <ChevronUp className="w-5 h-5 text-zion-cyan" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zion-cyan" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedSections.has(section.title) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.routes.map((route, routeIndex) => (
                            <motion.div
                              key={route.path}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: routeIndex * 0.05 }}
                              className="group"
                            >
                              <Link
                                to={route.path}
                                className="block p-4 bg-white/5 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 border border-transparent transition-all duration-300 group-hover:scale-105"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                                    {route.name}
                                  </h4>
                                  {route.featured && (
                                    <Star className="w-4 h-4 text-yellow-400" />
                                  )}
                                </div>
                                
                                {route.description && (
                                  <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                                    {route.description}
                                  </p>
                                )}

                                <div className="flex items-center justify-between text-xs text-gray-400">
                                  <span>Priority: {route.priority}</span>
                                  <span>Update: {route.changefreq}</span>
                                </div>

                                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300 mt-2">
                                  <span className="text-sm font-medium">Visit Page</span>
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for personalized assistance and custom solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
