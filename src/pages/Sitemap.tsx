import React, { useState, useMemo } from 'react';
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
  ChevronUp
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
      { path: '/about', name: 'About Us', description: 'Company information and mission', priority: '0.8', changefreq: 'monthly', category: 'main' },
      { path: '/contact', name: 'Contact', description: 'Get in touch with our team', priority: '0.8', changefreq: 'monthly', category: 'main' },
      { path: '/sitemap', name: 'Sitemap', description: 'Complete site navigation', priority: '0.6', changefreq: 'weekly', category: 'main' },
      { path: '/blog', name: 'Blog', description: 'Latest insights and updates', priority: '0.7', changefreq: 'weekly', category: 'main' },
      { path: '/careers', name: 'Careers', description: 'Job opportunities and careers', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/pricing', name: 'Pricing', description: 'Service pricing and plans', priority: '0.7', changefreq: 'monthly', category: 'main' },
      { path: '/team', name: 'Team', description: 'Meet our team members', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/dashboard', name: 'Dashboard', description: 'User dashboard and portal', priority: '0.5', changefreq: 'weekly', category: 'main' },
      { path: '/login', name: 'Login', description: 'User authentication', priority: '0.4', changefreq: 'monthly', category: 'main' },
      { path: '/faq', name: 'FAQ', description: 'Frequently asked questions', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/search', name: 'Search', description: 'Site search functionality', priority: '0.5', changefreq: 'weekly', category: 'main' },
      { path: '/partners', name: 'Partners', description: 'Strategic partnerships', priority: '0.6', changefreq: 'monthly', category: 'main' },
      { path: '/news', name: 'News', description: 'Company news and updates', priority: '0.7', changefreq: 'weekly', category: 'main' },
      { path: '/case-studies', name: 'Case Studies', description: 'Success stories and examples', priority: '0.7', changefreq: 'monthly', category: 'main' },
      { path: '/help', name: 'Help Center', description: 'Support and documentation', priority: '0.6', changefreq: 'monthly', category: 'main' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: Brain,
    description: 'Artificial intelligence and machine learning solutions',
    expanded: true,
    routes: [
      { path: '/ai-services', name: 'AI Services Hub', description: 'Overview of AI services', priority: '0.9', changefreq: 'weekly', category: 'ai', featured: true },
      { path: '/services/ai-workflow-orchestrator', name: 'AI Workflow Orchestrator', description: 'AI-powered workflow automation', priority: '0.7', changefreq: 'monthly', category: 'ai', featured: true },
      { path: '/services/ai-data-governance-platform', name: 'AI Data Governance Platform', description: 'AI-powered data governance', priority: '0.7', changefreq: 'monthly', category: 'ai', featured: true },
      { path: '/services/ai-customer-experience-analytics', name: 'AI Customer Experience Analytics', description: 'AI-powered customer insights', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-sales-copilot', name: 'AI Sales Copilot', description: 'Intelligent sales optimization', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated regulatory compliance', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-powered-seo', name: 'AI-Powered SEO', description: 'Machine learning SEO optimization', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/interview-assessment-ai', name: 'Interview Assessment AI', description: 'AI-powered candidate evaluation', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-autonomous-research-assistant', name: 'AI Autonomous Research Assistant', description: 'AI-powered research tool', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-supply-chain-optimization', name: 'AI Supply Chain Optimization', description: 'Supply chain optimization with AI', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-content-marketing-suite', name: 'AI Content Marketing Suite', description: 'AI-powered content marketing', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration platform', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-cybersecurity-platform', name: 'AI Cybersecurity Platform', description: 'AI-powered security platform', priority: '0.7', changefreq: 'monthly', category: 'ai', featured: true },
      { path: '/services/ai-healthcare-platform', name: 'AI Healthcare Platform', description: 'AI solutions for healthcare', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-business-intelligence', name: 'AI Business Intelligence', description: 'AI-enhanced business intelligence', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/digital-transformation', name: 'Digital Transformation', description: 'Digital transformation consulting', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-legal-document-automation', name: 'AI Legal Document Automation', description: 'Legal document automation', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-healthcare-analytics', name: 'AI Healthcare Analytics', description: 'Healthcare analytics with AI', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-financial-trading', name: 'AI Financial Trading', description: 'AI-powered financial trading', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-content-creation-suite', name: 'AI Content Creation Suite', description: 'AI content creation platform', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-autonomous-supply-chain', name: 'AI Autonomous Supply Chain', description: 'Autonomous supply chain management', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-cybersecurity-threat-intelligence', name: 'AI Cybersecurity Threat Intelligence', description: 'AI threat intelligence platform', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/ai-autonomous-threat-intelligence', name: 'AI Autonomous Threat Intelligence', description: 'Autonomous threat detection', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-workflow-orchestrator', name: 'AI Workflow Orchestrator', description: 'AI workflow automation', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-data-governance-platform', name: 'AI Data Governance Platform', description: 'Data governance with AI', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-customer-experience-analytics', name: 'AI Customer Experience Analytics', description: 'Customer experience analytics', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-financial-risk-management', name: 'AI Financial Risk Management', description: 'Financial risk management with AI', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-code-review-security-scanner', name: 'AI Code Review Security Scanner', description: 'AI-powered code security scanning', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-devops-automation-platform', name: 'AI DevOps Automation Platform', description: 'AI-powered DevOps automation', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-business-intelligence-analytics', name: 'AI Business Intelligence Analytics', description: 'Advanced BI with AI', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-customer-experience-support', name: 'AI Customer Experience Support', description: 'AI-powered customer support', priority: '0.7', changefreq: 'monthly', category: 'ai' },
      { path: '/services/ai-marketing-automation-personalization', name: 'AI Marketing Automation Personalization', description: 'AI marketing personalization', priority: '0.7', changefreq: 'monthly', category: 'ai' }
    ]
  },
  {
    title: 'IT & Infrastructure Services',
    icon: Server,
    description: 'Information technology and infrastructure solutions',
    expanded: true,
    routes: [
      { path: '/it-services', name: 'IT Services Overview', description: 'Complete IT services portfolio', priority: '0.9', changefreq: 'weekly', category: 'it', featured: true },
      { path: '/services/cloud-devops', name: 'Cloud DevOps', description: 'Infrastructure automation & scaling', priority: '0.7', changefreq: 'monthly', category: 'it', featured: true },
      { path: '/services/it-infrastructure', name: 'IT Infrastructure', description: 'Enterprise infrastructure solutions', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', description: 'Financial operations automation', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/services/finops-advisor', name: 'FinOps Advisor', description: 'Cloud cost optimization', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/it-consulting', name: 'IT Consulting', description: 'Technology strategy and planning', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/solutions/enterprise', name: 'Enterprise Solutions', description: 'Large-scale enterprise solutions', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/solutions/healthcare', name: 'Healthcare Solutions', description: 'Healthcare technology solutions', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/services/data-analytics', name: 'Data Analytics', description: 'Data analysis and insights', priority: '0.7', changefreq: 'monthly', category: 'it' },
      { path: '/micro-saas', name: 'Micro SaaS Solutions', description: 'Specialized software solutions', priority: '0.7', changefreq: 'monthly', category: 'it' }
    ]
  },
  {
    title: 'Cybersecurity Services',
    icon: Shield,
    description: 'Security and compliance solutions',
    expanded: true,
    routes: [
      { path: '/services/security-headers-csp', name: 'Security Headers & CSP', description: 'Web security hardening', priority: '0.7', changefreq: 'monthly', category: 'security' },
      { path: '/services/dsr-portal', name: 'DSR Privacy Portal', description: 'GDPR/CCPA compliance', priority: '0.7', changefreq: 'monthly', category: 'security' },
      { path: '/services/zero-trust-network-access', name: 'Zero Trust Network Access', description: 'Modern security architecture', priority: '0.7', changefreq: 'monthly', category: 'security' },
      { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'AI-powered compliance management', priority: '0.7', changefreq: 'monthly', category: 'security' },
      { path: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', description: 'Advanced compliance automation', priority: '0.7', changefreq: 'monthly', category: 'security' },
      { path: '/services/ai-cybersecurity', name: 'AI Cybersecurity', description: 'AI-powered cybersecurity solutions', priority: '0.7', changefreq: 'monthly', category: 'security' },
      { path: '/services/blockchain', name: 'Blockchain Solutions', description: 'Blockchain and Web3 solutions', priority: '0.7', changefreq: 'monthly', category: 'security' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Quantum computing, IoT, and cutting-edge tech',
    expanded: false,
    routes: [
      { path: '/services/quantum-computing', name: 'Quantum Computing', description: 'Quantum computing solutions', priority: '0.7', changefreq: 'monthly', category: 'emerging', featured: true },
      { path: '/services/iot-edge-computing', name: 'IoT Edge Computing', description: 'Edge computing infrastructure', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/space-tech', name: 'Space Technology', description: 'Space technology solutions', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/digital-twin', name: 'Digital Twin', description: 'Digital twin technology', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/ai-content-creation', name: 'AI Content Creation', description: 'AI-powered content creation', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/ai-hr-platform', name: 'AI HR Platform', description: 'AI-powered HR solutions', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/sustainable-technology', name: 'Sustainable Technology', description: 'Green technology solutions', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/ai-predictive-maintenance', name: 'AI Predictive Maintenance', description: 'Predictive maintenance with AI', priority: '0.7', changefreq: 'monthly', category: 'emerging' },
      { path: '/services/quantum-machine-learning', name: 'Quantum Machine Learning', description: 'Quantum machine learning', priority: '0.7', changefreq: 'monthly', category: 'emerging' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: Zap,
    description: 'Specialized software solutions for specific business needs',
    expanded: false,
    routes: [
      { path: '/services/ai-sales-copilot', name: 'AI Sales Copilot', description: 'AI-powered sales assistance', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/ai-auto-email-responder', name: 'AI Auto Email Responder', description: 'Automated email responses', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/customer-feedback-surveys', name: 'Customer Feedback Surveys', description: 'Feedback collection system', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', description: 'Compliance management', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/llm-content-studio', name: 'LLM Content Studio', description: 'AI content creation platform', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/finops-advisor', name: 'FinOps Advisor', description: 'Financial operations optimization', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/returns-management', name: 'Returns Management', description: 'Returns processing system', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/email-sequencer', name: 'Email Sequencer', description: 'Email automation platform', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/podcast-transcription', name: 'Podcast Transcription', description: 'Audio transcription service', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/micro-crm', name: 'Micro CRM', description: 'Lightweight CRM solution', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/website-analytics', name: 'Website Analytics', description: 'Website performance analytics', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/it-helpdesk', name: 'IT Helpdesk', description: 'IT support management', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/affiliate-tracking', name: 'Affiliate Tracking', description: 'Affiliate program management', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/mobile-survey', name: 'Mobile Survey', description: 'Mobile survey platform', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/ai-autonomous-code-reviewer', name: 'AI Autonomous Code Reviewer', description: 'AI-powered code review', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/helpdesk-platform', name: 'Helpdesk Platform', description: 'Customer support platform', priority: '0.7', changefreq: 'monthly', category: 'saas' },
      { path: '/services/dsr-portal', name: 'DSR Portal', description: 'Data subject rights portal', priority: '0.7', changefreq: 'monthly', category: 'saas' }
    ]
  },
  {
    title: 'Showcase & Innovation Pages',
    icon: Rocket,
    description: 'Latest innovations and service showcases',
    expanded: false,
    routes: [
      { path: '/new-innovative-services-2025', name: '2025 New Innovative Services', description: 'Latest service innovations', priority: '0.8', changefreq: 'weekly', category: 'showcase', featured: true },
      { path: '/comprehensive-services-showcase-2025', name: 'Comprehensive Services Showcase 2025', description: 'Complete service overview', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/innovative-services-showcase-2025', name: 'Innovative Services Showcase 2025', description: 'Innovation highlights', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/ultimate-services-showcase-2025', name: 'Ultimate Services Showcase 2025', description: 'Premium service showcase', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/ultimate-services-showcase-2026', name: 'Ultimate Services Showcase 2026', description: '2026 service preview', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/comprehensive-services-showcase-2027', name: 'Comprehensive Services Showcase 2027', description: '2027 service roadmap', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/comprehensive-services-landing-2025', name: 'Comprehensive Services Landing 2025', description: 'Service landing page', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/comprehensive-services-landing-2028', name: 'Comprehensive Services Landing 2028', description: '2028 service preview', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/comprehensive-services-showcase-2029', name: 'Comprehensive Services Showcase 2029', description: '2029 service showcase', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/zion-cutting-edge-services-2029', name: 'Zion Cutting Edge Services 2029', description: 'Cutting-edge innovations', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/zion-2026-ai-marketplace-showcase', name: 'Zion 2026 AI Marketplace Showcase', description: 'AI marketplace preview', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/comprehensive-improvements-2025', name: 'Comprehensive Improvements 2025', description: '2025 improvements overview', priority: '0.8', changefreq: 'weekly', category: 'showcase' },
      { path: '/revolutionary-services-2030', name: 'Revolutionary Services 2030', description: 'Future service vision', priority: '0.8', changefreq: 'weekly', category: 'showcase', featured: true }
    ]
  },
  {
    title: 'Pricing & Resources',
    icon: Target,
    description: 'Pricing guides and resource materials',
    expanded: false,
    routes: [
      { path: '/comprehensive-pricing-guide-2025', name: 'Comprehensive Pricing Guide 2025', description: 'Complete pricing information', priority: '0.7', changefreq: 'monthly', category: 'pricing' },
      { path: '/comprehensive-pricing-guide-2027', name: 'Comprehensive Pricing Guide 2027', description: '2027 pricing roadmap', priority: '0.7', changefreq: 'monthly', category: 'pricing' },
      { path: '/comprehensive-pricing-2026', name: 'Comprehensive Pricing 2026', description: '2026 pricing overview', priority: '0.7', changefreq: 'monthly', category: 'pricing' },
      { path: '/comprehensive-pricing-2028', name: 'Comprehensive Pricing 2028', description: '2028 pricing preview', priority: '0.7', changefreq: 'monthly', category: 'pricing' },
      { path: '/innovative-services-landing-2025', name: 'Innovative Services Landing 2025', description: 'Innovation landing page', priority: '0.7', changefreq: 'monthly', category: 'pricing' },
      { path: '/api', name: 'API Documentation', description: 'API reference and guides', priority: '0.6', changefreq: 'monthly', category: 'resources' },
      { path: '/developer-portal', name: 'Developer Portal', description: 'Developer resources and tools', priority: '0.6', changefreq: 'monthly', category: 'resources' },
      { path: '/api-demo', name: 'API Demo', description: 'API demonstration and testing', priority: '0.6', changefreq: 'monthly', category: 'resources' },
      { path: '/marketplace', name: 'Marketplace', description: 'Service marketplace', priority: '0.7', changefreq: 'weekly', category: 'resources' }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sitemapSections.filter(s => s.expanded).map(s => s.title))
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

  const filteredSections = useMemo(() => {
    if (!searchTerm) return sitemapSections;
    
    return sitemapSections.map(section => ({
      ...section,
      routes: section.routes.filter(route =>
        route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.path.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.routes.length > 0);
  }, [searchTerm]);

  const totalRoutes = sitemapSections.reduce((acc, section) => acc + section.routes.length, 0);

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
              Complete navigation guide to all our services, pages, and resources. 
              Find exactly what you're looking for with our comprehensive site structure.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search pages and services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">{sitemapSections.length}</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">{totalRoutes}</div>
                <div className="text-sm text-gray-300">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">
                  {sitemapSections.reduce((acc, section) => 
                    acc + section.routes.filter(r => r.featured).length, 0
                  )}
                </div>
                <div className="text-sm text-gray-300">Featured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                {/* Section Header */}
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r from-zion-cyan to-blue-500 rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>
                  <div className="text-zion-cyan">
                    {expandedSections.has(section.title) ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Section Routes */}
                <AnimatePresence>
                  {expandedSections.has(section.title) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.routes.map((route, routeIndex) => (
                          <motion.div
                            key={route.path}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: routeIndex * 0.05 }}
                            className="group"
                          >
                            <Link
                              to={route.path}
                              className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105 h-full"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                                  {route.name}
                                </h4>
                                {route.featured && (
                                  <Star className="w-5 h-5 text-yellow-400" />
                                )}
                              </div>
                              
                              {route.description && (
                                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                                  {route.description}
                                </p>
                              )}

                              <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>Priority: {route.priority}</span>
                                <span>Update: {route.changefreq}</span>
                              </div>

                              <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300 mt-3">
                                <span className="text-sm font-medium">View Page</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us if you can't find what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <a
                  href={contact.href}
                  className="text-white hover:text-zion-cyan transition-colors duration-300"
                >
                  {contact.text}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8"
          >
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
