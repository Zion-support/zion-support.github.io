import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Zap, 
  MessageCircle, 
  BookOpen, 
  Briefcase, 
  FileText, 
  HelpCircle, 
  ShoppingCart, 
  DollarSign, 
  Brain, 
  Cloud, 
  Shield, 
  Atom, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Server, 
  Building, 
  Cpu, 
  Lock, 
  Eye, 
  Network, 
  Satellite, 
  Smartphone, 
  Mail, 
  Video, 
  Heart,
  Globe,
  Star,
  ArrowRight
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: any;
  description: string;
  links: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    description: 'Core website pages and information',
    links: [
      { name: 'Home', href: '/', description: 'Main landing page' },
      { name: 'About', href: '/about', description: 'Company information and team' },
      { name: 'Services', href: '/services', description: 'Overview of all services' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' },
      { name: 'Partners', href: '/partners', description: 'Partnership information' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', href: '/help', description: 'Support and documentation' },
      { name: 'News', href: '/news', description: 'Company updates' },
      { name: 'Sitemap', href: '/sitemap', description: 'This page' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Artificial intelligence and machine learning solutions',
    links: [
      { name: 'AI Business Intelligence Analytics', href: '/services/ai-business-intelligence-analytics', description: 'Advanced analytics & ML insights' },
      { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
      { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
      { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
      { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
      { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
      { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-driven project optimization' },
      { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Automated marketing workflows' },
      { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'AI-powered content generation' },
      { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI-enhanced security solutions' },
      { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'Human resources automation' },
      { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive analytics for maintenance' },
      { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain intelligence' },
      { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
      { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', description: 'Legal document processing' },
      { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data analytics' },
      { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Algorithmic trading solutions' },
      { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', description: 'Research automation' },
      { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Workflow automation' },
      { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', description: 'Data management solutions' },
      { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'Customer insights' },
      { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Risk assessment tools' },
      { name: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner', description: 'Automated code security analysis' },
      { name: 'AI DevOps Automation Platform', href: '/services/ai-devops-automation-platform', description: 'AI-driven DevOps automation' },
      { name: 'AI Customer Experience Support', href: '/services/ai-customer-experience-support', description: 'Enhanced customer experience' },
      { name: 'AI Marketing Automation Personalization', href: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing automation' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Cloud computing and infrastructure solutions',
    links: [
      { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
      { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      { name: 'IT Consulting', href: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large enterprise solutions' },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare industry solutions' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security and privacy protection solutions',
    links: [
      { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
      { name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web security hardening' },
      { name: 'DSR Privacy Portal', href: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
      { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Modern security architecture' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge and future technologies',
    links: [
      { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computational power' },
      { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device networks' },
      { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      { name: 'Space Technology', href: '/space-tech', description: 'Space-based solutions' },
      { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual system replicas' },
      { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Strategic technology consulting' },
      { name: 'Sustainable Technology', href: '/services/sustainable-technology', description: 'Green technology solutions' },
      { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Niche software-as-a-service solutions',
    links: [
      { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Customer support system' },
      { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', href: '/services/it-helpdesk', description: 'IT support automation' },
      { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Marketing performance tracking' },
      { name: 'Mobile Survey', href: '/services/mobile-survey', description: 'Mobile-first survey platform' },
      { name: 'Email Sequencer', href: '/services/email-sequencer', description: 'Email automation tools' },
      { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'Audio to text conversion' },
      { name: 'Returns Management', href: '/services/returns-management', description: 'Product returns handling' },
      { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
      { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'Content creation tools' },
      { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Automated email responses' },
      { name: 'Customer Feedback Surveys', href: '/services/customer-feedback-surveys', description: 'Feedback collection tools' },
      { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'Compliance assistance' },
      { name: 'AI Autonomous Code Reviewer', href: '/services/ai-autonomous-code-reviewer', description: 'Code review automation' }
    ]
  },
  {
    title: '2029 Cutting-Edge Services',
    icon: Star,
    description: 'Future-ready technology solutions and innovations',
    links: [
      { name: 'Zion Cutting Edge Services 2029', href: '/zion-cutting-edge-services-2029', description: 'Comprehensive 2029 services overview' },
      { name: 'Comprehensive Services Showcase 2029', href: '/comprehensive-services-showcase-2029', description: 'Complete 2029 services portfolio' },
      { name: 'New Innovative Services 2025', href: '/new-innovative-services-2025', description: 'Latest innovative services' },
      { name: 'Ultimate Services Showcase 2026', href: '/ultimate-services-showcase-2026', description: '2026 services overview' },
      { name: 'Comprehensive Services Showcase 2027', href: '/comprehensive-services-showcase-2027', description: '2027 services overview' }
    ]
  },
  {
    title: 'Business Solutions',
    icon: Building,
    description: 'Industry-specific and business solutions',
    links: [
      { name: 'Marketplace', href: '/marketplace', description: 'Service marketplace' },
      { name: 'Pricing', href: '/pricing', description: 'Service pricing information' },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'AI Solutions Hub', href: '/ai-solutions', description: 'AI solutions overview' },
      { name: 'Micro SaaS Platform', href: '/micro-saas', description: 'Micro SaaS overview' },
      { name: 'IT Services', href: '/it-services', description: 'IT services overview' }
    ]
  }
];

export function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            Sitemap{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            Find all our pages and resources in one place.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Main Pages
            </h3>{" "}
            <ul className="space-y-2">
              {" "}
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </a>
              </li>{" "}
              <li>
                <a href="/about" className="text-blue-600 hover:text-blue-800">
                  About
                </a>
              </li>{" "}
              <li>
                <a
                  href="/services"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Services
                </a>
              </li>{" "}
              <li>
                <a
                  href="/solutions"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Solutions
                </a>
              </li>{" "}
              <li>
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Contact
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Resources
            </h3>{" "}
            <ul className="space-y-2">
              {" "}
              <li>
                <a href="/blog" className="text-blue-600 hover:text-blue-800">
                  Blog
                </a>
              </li>{" "}
              <li>
                <a href="/news" className="text-blue-600 hover:text-blue-800">
                  News
                </a>
              </li>{" "}
              <li>
                <a href="/help" className="text-blue-600 hover:text-blue-800">
                  Help
                </a>
              </li>{" "}
              <li>
                <a
                  href="/support"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Support
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Legal
            </h3>{" "}
            <ul className="space-y-2">
              {" "}
              <li>
                <a
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Privacy Policy
                </a>
              </li>{" "}
              <li>
                <a href="/terms" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </a>
              </li>{" "}
              <li>
                <a
                  href="/cookies"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Cookie Policy
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Sitemap;
