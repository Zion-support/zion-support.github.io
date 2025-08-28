import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Rocket, 
  Star, 
  Target, 
  BarChart3, 
  Cpu, 
  Lock, 
  Heart, 
  ShoppingCart, 
  MessageCircle, 
  HelpCircle, 
  FileText, 
  Briefcase, 
  Newspaper, 
  TrendingUp, 
  Code, 
  Atom, 
  Network, 
  Eye, 
  Leaf, 
  Satellite, 
  Database, 
  Server, 
  Smartphone, 
  Gauge, 
  CheckCircle, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  Truck, 
  ExternalLink,
  Globe,
  ArrowRight
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: Array<{
    name: string;
    path: string;
    description?: string;
    featured?: boolean;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Core Pages',
    icon: <Globe className="w-6 h-6" />,
    links: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
      { name: 'Team', path: '/team', description: 'Meet our team' },
      { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
      { name: 'News', path: '/news', description: 'Company news and announcements' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', path: '/help', description: 'Support and documentation' }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: <Brain className="w-6 h-6" />,
    links: [
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced AI-powered analytics', featured: true },
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'Intelligent process automation' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'AI-powered compliance management' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'AI-driven sales optimization' },
      { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'AI-powered content generation' },
      { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI-enhanced security solutions' },
      { name: 'AI Project Management', path: '/services/ai-project-management', description: 'Intelligent project coordination' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'AI-driven financial insights' },
      { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
      { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', description: '24/7 intelligent support' },
      { name: 'AI Data Analytics', path: '/services/ai-data-analytics', description: 'Predictive business intelligence' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Comprehensive content solutions' },
      { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'AI-powered healthcare insights' },
      { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'Automated trading solutions' },
      { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Full-featured content platform' },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform', description: 'Intelligent HR management' },
      { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive maintenance solutions' },
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'Automated research tools' },
      { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Intelligent supply chain management' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI hybrid solutions' },
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'Comprehensive security platform' },
      { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare technology solutions' },
      { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal process automation' },
      { name: 'AI Autonomous Code Reviewer', path: '/services/ai-autonomous-code-reviewer', description: 'Automated code review' },
      { name: 'AI Code Review Security Scanner', path: '/services/ai-code-review-security-scanner', description: 'Security-focused code review' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'Risk assessment and management' },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'Customer experience insights' },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'Data governance solutions' },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', description: 'DevOps process automation' },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', description: 'Enhanced customer support' },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing' }
    ]
  },
  {
    title: 'Cloud & Infrastructure Services',
    icon: <Cloud className="w-6 h-6" />,
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Cloud infrastructure and automation' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Comprehensive IT infrastructure' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations optimization' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT consulting' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support and ticketing' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Secure network access' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy Services',
    icon: <Shield className="w-6 h-6" />,
    links: [
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Security header implementation' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'Data subject rights management' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Compliance automation' },
      { name: 'AI Compliance Copilot', path: '/services/ai-compliance-copilot', description: 'AI-powered compliance' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: <Atom className="w-6 h-6" />,
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions' },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Edge computing infrastructure' },
      { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Digital transformation consulting' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space technology solutions' },
      { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green technology solutions' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: <ShoppingCart className="w-6 h-6" />,
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support platform' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Privacy-first analytics' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Partner revenue tracking' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile feedback collection' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription services' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Automated email campaigns' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'E-commerce returns automation' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation' },
      { name: 'AI Auto Email Responder', path: '/services/ai-auto-email-responder', description: 'Automated email responses' },
      { name: 'Customer Feedback Surveys', path: '/services/customer-feedback-surveys', description: 'Feedback collection system' }
    ]
  },
  {
    title: 'Featured Services & Showcases',
    icon: <Star className="w-6 h-6" />,
    links: [
      { name: '2025 New Innovative Services', path: '/new-innovative-services-2025', description: 'Latest service innovations', featured: true },
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: '2026 service portfolio', featured: true },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: '2027 service portfolio', featured: true },
      { name: '2029 Services Showcase', path: '/comprehensive-services-showcase-2029', description: '2029 service portfolio', featured: true },
      { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', description: 'Future technology roadmap', featured: true },
      { name: 'Comprehensive Pricing Guide 2025', path: '/comprehensive-pricing-guide-2025', description: 'Detailed pricing information' },
      { name: 'Comprehensive Pricing Guide 2027', path: '/comprehensive-pricing-guide-2027', description: 'Updated pricing guide' }
    ]
  },
  {
    title: 'Solutions & Industries',
    icon: <Target className="w-6 h-6" />,
    links: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large enterprise solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' },
      { name: 'AI Solutions', path: '/ai-solutions', description: 'AI-focused solutions' },
      { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT services' },
      { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro SaaS platform' }
    ]
  },
  {
    title: 'Additional Resources',
    icon: <BookOpen className="w-6 h-6" />,
    links: [
      { name: 'API Documentation', path: '/api', description: 'API reference and documentation' },
      { name: 'Developer Portal', path: '/developer-portal', description: 'Developer resources and tools' },
      { name: 'Marketplace', path: '/marketplace', description: 'Service marketplace' },
      { name: 'Sitemap', path: '/sitemap', description: 'Complete site structure' }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <div className="bg-zion-slate-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Site Map
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our complete range of services, solutions, and resources. Find exactly what you need to transform your business with cutting-edge technology.
          </motion.p>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-cyan-400">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block group"
                  >
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      link.featured 
                        ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30' 
                        : 'hover:bg-white/5'
                    }`}>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${
                            link.featured ? 'text-cyan-400' : 'text-gray-300'
                          } group-hover:text-white transition-colors duration-200`}>
                            {link.name}
                          </span>
                          {link.featured && (
                            <span className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        {link.description && (
                          <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                            {link.description}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                All Services
              </Link>
              <Link
                to="/solutions"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                Solutions
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
