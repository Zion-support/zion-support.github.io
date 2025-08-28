import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  Star,
  Atom,
  Network,
  Eye,
  PenTool,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  DollarSign,
  Workflow,
  Target,
  Building,
  FileText,
  Video,
  TestTube,
  CheckCircle,
  Briefcase,
  Newspaper,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Team', path: '/team', description: 'Meet our experts' },
        { name: 'News', path: '/news', description: 'Company updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', path: '/help', description: 'Support resources' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get pricing' },
        { name: 'Pricing', path: '/pricing', description: 'Service costs' },
        { name: 'Marketplace', path: '/marketplace', description: 'AI solutions marketplace' },
        { name: 'Login', path: '/login', description: 'Access your account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard' },
        { name: 'Search', path: '/search', description: 'Find services and content' },
      ]
    },
    {
      title: 'Featured Services',
      icon: Star,
      featured: true,
      links: [
        { name: '2026 Services Overview', path: '/services2026', description: 'Revolutionary AI & Quantum Solutions', featured: true },
        { name: '2027 Services Overview', path: '/services2027', description: 'Cutting-edge Innovation & Emerging Tech', featured: true },
        { name: 'AI Solutions Hub', path: '/ai-solutions', description: 'Comprehensive AI services', featured: true },
        { name: 'IT Services', path: '/it-services', description: 'Technology infrastructure solutions', featured: true },
        { name: 'Micro SaaS Solutions', path: '/micro-saas', description: 'Niche software solutions', featured: true },
        { name: 'Comprehensive Services', path: '/comprehensive-services', description: 'Full-service technology consulting', featured: true },
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project coordination' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing workflows' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Financial insights & predictions' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'Independent research automation' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain intelligence' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Complete content automation' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Creative content automation' },
      ]
    },
    {
      title: 'Cloud & DevOps Services',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      links: [
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security solutions' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Advanced network security' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection information' },
        { name: 'Security', path: '/security', description: 'Security practices & policies' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green tech solutions' },
        { name: 'Green IT Solutions', path: '/services/green-it', description: 'Environmentally conscious IT' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas-solutions', description: 'Niche software solutions' },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Customer Feedback Surveys', path: '/services/mobile-feedback-surveys', description: 'Feedback collection tools' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'Return process automation' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation workflows' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio-to-text conversion' },
        { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
        { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile data collection' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Web performance insights' },
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support management' },
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      links: [
        { name: 'Solutions Overview', path: '/solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large business solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Manufacturing Solutions', path: '/services/manufacturing-solutions', description: 'Industry 4.0 solutions' },
        { name: 'Talent Solutions', path: '/talent', description: 'Human resources technology' },
        { name: 'Equipment Services', path: '/equipment', description: 'Hardware & equipment' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation & R&D' },
        { name: 'Training', path: '/training', description: 'Professional development' },
        { name: 'Support', path: '/support', description: 'Technical support services' },
      ]
    },
    {
      title: 'Resources & Documentation',
      icon: FileText,
      links: [
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'White Papers', path: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' },
        { name: 'Status Page', path: '/status', description: 'Service status' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection' },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete navigation guide for Zion Tech Group's AI, quantum computing, and technology services."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for Zion Tech Group's comprehensive suite of AI, quantum computing, 
            and cutting-edge technology services. Find everything you need to transform your business.
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
              className="bg-slate-800/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  section.featured 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                    : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                }`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${
                    section.featured ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {section.title}
                  </h2>
                  {section.featured && (
                    <span className="text-sm text-yellow-300">Featured</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                          {link.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
=======
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
>>>>>>> origin/main
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Explore our services or get in touch to discuss how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="text-sm mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
