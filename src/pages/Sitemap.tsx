<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Sitemap() {
  const sitemapData = {
    mainPages: [
      { name: 'Home', path: '/', description: 'Zion Tech Group - AI, Cloud, and Technology Solutions' },
      { name: 'About Us', path: '/about', description: 'Learn about our company and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
      { name: 'Services', path: '/services', description: 'Overview of all our services' },
      { name: 'Solutions', path: '/solutions', description: 'Industry and technology solutions' },
      { name: 'Company', path: '/company', description: 'Company information and resources' },
      { name: 'Resources', path: '/resources', description: 'Educational and informational resources' },
      { name: 'Support', path: '/help', description: 'Get help and support' },
      { name: 'Pricing', path: '/pricing', description: 'Service pricing and packages' },
      { name: 'Get Started', path: '/signup', description: 'Start your journey with Zion Tech Group' },
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote for your needs' },
      { name: 'Marketplace', path: '/marketplace', description: 'AI and technology marketplace' }
    ],
    aiServices: [
      { name: 'AI Enterprise Automation Platform', path: '/services/ai-enterprise-automation-platform' },
      { name: 'AI Enterprise Intelligence Platform', path: '/services/ai-enterprise-intelligence-platform' },
      { name: 'AI Data Analytics Platform', path: '/services/ai-data-analytics-platform' },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence' },
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform' },
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant' },
      { name: 'AI Financial Trading Platform', path: '/services/ai-financial-trading-platform' },
      { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform' },
      { name: 'AI Quantum Neural Network Platform', path: '/services/ai-quantum-neural-network-platform' },
      { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant' },
      { name: 'AI Project Management Platform', path: '/services/ai-project-management-platform' },
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator' },
      { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance' },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-trading-risk-management' },
      { name: 'AI Business Intelligence Dashboard', path: '/services/ai-business-intelligence-dashboard' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation' },
      { name: 'AI Marketing Automation Platform', path: '/services/ai-marketing-automation-platform' },
      { name: 'AI Content Creation Studio', path: '/services/ai-content-creation-studio' },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics-platform' },
      { name: 'AI Autonomous Business Operations', path: '/services/ai-autonomous-business-operations-platform' },
      { name: 'AI Content Intelligence Platform', path: '/services/ai-content-intelligence-platform' },
      { name: 'AI Enterprise Resource Planning', path: '/services/ai-enterprise-resource-planning' },
      { name: 'AI Customer Success Platform', path: '/services/ai-customer-success-platform' },
      { name: 'AI Supply Chain Intelligence', path: '/services/ai-supply-chain-intelligence' }
    ],
    itServices: [
      { name: 'Infrastructure Management', path: '/services/it-infrastructure-management' },
      { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
      { name: 'Cybersecurity', path: '/services/cybersecurity' },
      { name: 'Digital Transformation', path: '/services/digital-transformation' },
      { name: 'Quantum Computing', path: '/services/quantum-computing-solutions' },
      { name: 'Edge Computing', path: '/services/edge-computing-solutions' },
      { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions' },
      { name: 'IoT & Edge Computing', path: '/services/iot-edge' },
      { name: 'Cloud FinOps', path: '/services/cloud-finops-optimizer' }
    ],
    solutions: [
      { name: 'Healthcare Solutions', path: '/solutions/healthcare' },
      { name: 'Financial Solutions', path: '/solutions/financial' },
      { name: 'Manufacturing Solutions', path: '/solutions/manufacturing' },
      { name: 'Government Solutions', path: '/solutions/government' },
      { name: 'Retail Solutions', path: '/solutions/retail' },
      { name: 'Enterprise Solutions', path: '/enterprise' },
      { name: 'Digital Transformation', path: '/digital-transformation' },
      { name: 'Cloud Solutions', path: '/cloud-solutions' },
      { name: 'Emerging Technology', path: '/emerging-tech' },
      { name: 'Quantum Edge Computing', path: '/solutions/quantum-edge-computing' },
      { name: 'AI Autonomous Business', path: '/solutions/ai-autonomous-business' },
      { name: 'Blockchain & Web3', path: '/solutions/blockchain-web3' },
      { name: 'IoT Edge Computing', path: '/solutions/iot-edge-computing' },
      { name: 'Space Technology', path: '/solutions/space-tech' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Leadership', path: '/leadership' },
      { name: 'Careers', path: '/careers' },
      { name: 'News', path: '/news' },
      { name: 'Events', path: '/events' },
      { name: 'Partners', path: '/partners' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Documentation', path: '/docs' },
      { name: 'White Papers', path: '/white-papers' },
      { name: 'Webinars', path: '/webinars' },
      { name: 'Training', path: '/training' },
      { name: 'Research & Development', path: '/research-development' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Innovative Services Showcase 2026', path: '/innovative-services-showcase-2026' },
      { name: 'Comprehensive Services Showcase 2025', path: '/comprehensive-services-showcase-2025' },
      { name: 'Innovative AI Services Showcase 2025', path: '/innovative-ai-services-showcase-2025' },
      { name: 'Advanced Services Showcase 2025', path: '/advanced-services-showcase-2025' },
      { name: 'Comprehensive Pricing Guide 2025', path: '/comprehensive-pricing-guide-2025' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Accessibility', path: '/accessibility' },
      { name: 'Security', path: '/security' },
      { name: 'Compliance', path: '/compliance' }
    ],
    showcases: [
      { name: 'Innovation Showcase 2026', path: '/innovative-services-showcase-2026' },
      { name: 'Comprehensive Showcase 2025', path: '/comprehensive-services-showcase-2025' },
      { name: 'AI Services Showcase 2025', path: '/innovative-ai-services-showcase-2025' }
    ]
  };
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
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
export default function Sitemap(...args: any[]): any {
  const sitemapSections = [
    {
      title: 'Core Pages',
      icon: Zap,
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'Company information' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
        { name: 'Team', href: '/team', description: 'Our leadership team' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'News', href: '/news', description: 'Latest updates' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Training', href: '/training', description: 'Learning programs' },
        { name: 'Support', href: '/support', description: 'Technical assistance' },
        { name: 'Help Center', href: '/help', description: 'Self-service help' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Documentation', href: '/documentation', description: 'Technical docs' },
        { name: 'Developers', href: '/developers', description: 'Developer resources' },
        { name: 'API', href: '/api', description: 'API documentation' },
        { name: 'Developer Portal', href: '/developer-portal', description: 'Developer tools' },
        { name: 'Status', href: '/status', description: 'Service status' },
        { name: 'Security', href: '/security', description: 'Security information' },
        { name: 'Privacy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms', href: '/terms', description: 'Terms of service' },
        { name: 'Cookies', href: '/cookies', description: 'Cookie policy' },
        { name: 'Pricing', href: '/pricing', description: 'Service pricing' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get a quote' },
        { name: 'Dashboard', href: '/dashboard', description: 'User dashboard' },
        { name: 'Login', href: '/login', description: 'User login' },
        { name: 'Signup', href: '/signup', description: 'User registration' }
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
=======
import { SEO              } from '../components/SEO';
import { Link              } from 'react-router-dom.ts';
import { Home, 
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
             } from 'lucide-react.ts';

export default function Sitemap(...args: any[]): any {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Legal', href: '/legal', description: 'Legal information' },
        { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      ]
    },
    {
      title: 'Innovative Services',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      links: [
<<<<<<< HEAD
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Enterprise services' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare services' },
        { name: 'Financial Solutions', href: '/solutions/financial', description: 'Financial services' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', description: 'Manufacturing services' },
        { name: 'Retail Solutions', href: '/solutions/retail', description: 'Retail services' },
        { name: 'Government Solutions', href: '/solutions/government', description: 'Government services' },
        { name: 'Education Solutions', href: '/solutions/education', description: 'Education services' },
        { name: 'Space Technology', href: '/space-tech', description: 'Space tech' },
        { name: 'Quantum Technology', href: '/quantum-technology', description: 'Quantum tech' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' },
        { name: 'Mobile Development', href: '/mobile', description: 'Mobile solutions' }
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
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      ]

  ];
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, solutions, and resources organized by category." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

<<<<<<< HEAD
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Website Sitemap
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Complete navigation guide to all pages, services, and resources on the Zion Tech Group website
          </p>
=======
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
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
          {sitemapSections.map((section, sectionIndex)              => (
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"

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

                    <Link
                      to={link.href}
                      className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"

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
            </motion.div>
          ))}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        </div>

        {/* Main Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.mainPages.map((page) => (
              <Link
<<<<<<< HEAD
                key={page.path}
                to={page.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
=======
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"

                Contact Us
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"

                Get Help
              </Link>
              <Link
                to="/search"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"

                Search Site
              </Link>
            </div>
=======
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site Map
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
                Navigate through our comprehensive website structure to find exactly what you're looking for
              </p>
            </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </motion.div>

        {/* Sitemap Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex)              => (
              <motion.div
                key={section.title}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-blue-light/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {page.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2">{page.description}</p>
                <span className="text-xs text-zion-cyan mt-2 block">{page.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">AI & Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.aiServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{service.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">IT & Infrastructure Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.itServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{service.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Industry & Technology Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.solutions.map((solution) => (
              <Link
                key={solution.path}
                to={solution.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {solution.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{solution.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.company.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {page.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{page.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Resources & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.resources.map((resource) => (
              <Link
                key={resource.path}
                to={resource.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {resource.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{resource.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Legal & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.legal.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {page.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{page.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Showcases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Innovation Showcases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.showcases.map((showcase) => (
              <Link
                key={showcase.path}
                to={showcase.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {showcase.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{showcase.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-zinc-700">
          <p className="text-zinc-400 mb-4">
            Total Pages: {Object.values(sitemapData).flat().length}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}