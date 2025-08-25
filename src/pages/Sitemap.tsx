<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
import { 
  Home, 
  Briefcase, 
  Users, 
<<<<<<< HEAD
=======
import React from 'react';
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card.js';
import { Badge } from '../components/ui/badge.js';
import { 
  Home, 
  HelpCircle, 
  MessageCircle, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  BookOpen, 
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
  Phone, 
  FileText, 
  Shield, 
<<<<<<< HEAD
  Cookie, 
<<<<<<< HEAD
  Globe,
  Brain,
  Cloud,
  Zap,
  Users
=======
=======
import { motion } from 'framer-motion';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-aa28
import { 
  Brain, 
  Shield, 
<<<<<<< HEAD
  Cookie, 
  Globe,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
  Brain,
  Cloud,
  Zap,
  Users,
  Rocket,
  Lock,
  Database,
  Network,
  BarChart3,
  BookOpen,
  Server,
  Target,
  TrendingUp,
  Code,
  TestTube,
  Atom,
  Wifi,
  Building,
  Briefcase,
  Newspaper
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
} from 'lucide-react';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-74a8
=======
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card.js';
import { Badge } from '../components/ui/badge.js';
import { Phone, Mail } from 'lucide-react';

interface SitemapSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  links: SitemapLink[];
}

interface SitemapLink {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
}

const sitemapSections: SitemapSection[] = [
  {
    id: 'main',
    title: 'Main Pages',
    description: 'Core website pages and navigation',
    icon: <Home className="w-6 h-6" />,
    links: [
      {
        title: 'Home',
        href: '/',
        description: 'Welcome to Zion Tech Group'
      },
      {
        title: 'About Us',
        href: '/about',
        description: 'Learn about our company and mission'
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    description: 'Our comprehensive range of technology services',
    icon: <Zap className="w-6 h-6" />,
    links: [
      {
        title: 'Comprehensive Services',
        href: '/comprehensive-services',
        description: 'Full-service technology solutions',
        badge: 'Popular'
      },
      {
        title: 'AI Services',
        href: '/ai-services',
        description: 'Artificial Intelligence solutions',
        badge: 'New'
      },
      {
        title: 'Micro SAAS',
        href: '/micro-saas',
        description: 'Custom software solutions'
      },
      {
        title: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        description: 'Large-scale business solutions'
      },
      {
        title: 'Services Pricing',
        href: '/services-pricing',
        description: 'Transparent pricing plans'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Support',
    description: 'Help, documentation, and support resources',
    icon: <BookOpen className="w-6 h-6" />,
    links: [
      {
        title: 'Help Center',
        href: '/help',
        description: 'Find answers and support'
      },
      {
        title: 'Cookie Policy',
        href: '/cookies',
        description: 'Learn about our cookie usage'
      },
      {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'Data protection and privacy'
      },
      {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Service terms and conditions'
      }
    ]
  },
  {
    id: 'company',
    title: 'Company Information',
    description: 'Corporate information and resources',
    icon: <Globe className="w-6 h-6" />,
    links: [
      {
        title: 'Careers',
        href: '/careers',
        description: 'Join our team',
        isExternal: true
      },
      {
        title: 'News & Updates',
        href: '/news',
        description: 'Latest company news'
      },
      {
        title: 'Partnerships',
        href: '/partners',
        description: 'Strategic partnerships'
      },
      {
        title: 'Sitemap',
        href: '/sitemap',
        description: 'Site structure overview'
      }
    ]
  }
];
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

export default function Sitemap() {
  const sitemapStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Our Mission', path: '/mission', description: 'Our vision and mission' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Our partnerships' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Testimonials', path: '/testimonials', description: 'Client success stories' },
        { name: 'Case Studies', path: '/case-studies', description: 'Detailed case studies' },
        { name: 'Events', path: '/events', description: 'Upcoming events and webinars' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry insights' },
        { name: 'Help Center', path: '/help-center', description: 'Support and documentation' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      title: 'AI & Technology Services',
      links: [
        { name: 'AI Services Overview', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Autonomous AI systems' },
        { name: 'AI Business Solutions', path: '/ai-business-solutions', description: 'AI for business transformation' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', description: 'Marketing automation with AI' },
        { name: 'AI HR & Recruitment', path: '/ai-hr-recruitment', description: 'AI-powered HR solutions' },
        { name: 'AI Legal Tech', path: '/ai-legal-tech', description: 'Legal technology solutions' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', description: 'Business intelligence with AI' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'IT asset management with AI' },
        { name: 'Advanced AI Automation', path: '/advanced-ai-automation-services', description: 'Advanced automation services' },
        { name: 'Research Automation', path: '/advanced-research-automation', description: 'Automated research processes' },
        { name: 'Agentic RAG', path: '/agentic-rag', description: 'Retrieval-augmented generation' },
        { name: 'Agentic RAG Helpdesk', path: '/agentic-rag-helpdesk', description: 'AI-powered helpdesk' },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', description: 'Affiliate marketing tools' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      links: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', description: 'Enterprise security suite' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Compliance automation' },
        { name: 'Security Assessment', path: '/security-assessment', description: 'Security evaluation services' },
        { name: 'Compliance & Audit', path: '/compliance-audit', description: 'Compliance services' },
        { name: 'Data Protection', path: '/data-protection', description: 'Data security solutions' },
        { name: 'Network Security', path: '/network-security', description: 'Network protection' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      links: [
        { name: 'Cloud & DevOps', path: '/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'IT infrastructure solutions' },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', description: 'Specialized infrastructure' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration services' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network solutions' },
        { name: 'Managed IT Services', path: '/managed-it-services', description: 'Managed IT support' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: '5G enterprise solutions' },
        { name: '5G Network Optimization', path: '/5g-network-optimization', description: '5G network optimization' },
        { name: '5G Private Network Solutions', path: '/5g-private-network-solutions', description: 'Private 5G networks' }
      ]
    },
    {
      title: 'Quantum Technology',
      links: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', description: 'Quantum neural networks' },
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing services' },
        { name: 'Quantum-Safe Security', path: '/quantum-safe-security', description: 'Post-quantum cryptography' }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Industry Solutions', path: '/services/industry-solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Financial technology' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Manufacturing technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Digital transformation services' },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', description: 'Business automation' }
      ]
    },
    {
      title: 'Micro SAAS & Innovation',
      links: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', description: 'Micro software solutions' },
        { name: 'Innovative New Services', path: '/services/innovative-new-services', description: 'Cutting-edge services' },
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase', description: 'Service showcase' },
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Emerging tech solutions' },
        { name: 'Blockchain Solutions', path: '/blockchain-solutions', description: 'Blockchain technology' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'IoT solutions' },
        { name: 'Space Technology', path: '/space-technology', description: 'Space tech solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology' }
      ]
    },
    {
      title: 'Talent & Resources',
      links: [
        { name: 'Talent Directory', path: '/talent', description: 'Find top talent' },
        { name: 'AI Matcher', path: '/match', description: 'AI-powered matching' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' },
        { name: 'Developer Portal', path: '/developer-portal', description: 'Developer resources' },
        { name: 'Community', path: '/community', description: 'Community platform' },
        { name: 'Leadership', path: '/leadership', description: 'Leadership insights' },
        { name: 'Analytics', path: '/analytics', description: 'Analytics dashboard' }
      ]
    },
    {
      title: 'Support & Documentation',
      links: [
        { name: 'Help Center', path: '/help-center', description: 'Support center' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Support', path: '/support', description: 'Technical support' },
        { name: 'Status Page', path: '/status', description: 'Service status' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility information' },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', description: 'Accessibility tools' },
        { name: 'Accessibility Scanner', path: '/accessibility-scanner', description: 'Accessibility scanning' }
=======
  ShoppingCart, 
  Building, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Settings,
  Zap,
  Shield,
  Globe,
  Wrench,
  Code,
  MessageSquare,
  Star,
  Play
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership programs' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { name: 'IT Solutions', path: '/services/it-solutions', description: 'Infrastructure and IT services' },
        { name: 'AI Services', path: '/services/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection services' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'On-Site Support', path: '/it-onsite-services', description: 'Local technical support' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
      ]
    },
    {
      title: 'Talent & Recruitment',
      icon: Users,
      links: [
        { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
        { name: 'Talent Directory', path: '/talent-directory', description: 'Comprehensive talent database' },
        { name: 'AI Matcher', path: '/ai-matcher', description: 'AI-powered talent matching' },
        { name: 'Hire Now', path: '/hire-now', description: 'Quick hiring process' },
        { name: 'Post a Job', path: '/post-job', description: 'Create job listings' },
        { name: 'Zion Hire AI', path: '/zion-hire-ai', description: 'AI recruitment platform' },
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Equipment', path: '/equipment', description: 'Tech equipment and hardware' },
        { name: 'Equipment Details', path: '/equipment-detail', description: 'Detailed product information' },
        { name: 'Categories', path: '/categories', description: 'Browse by category' },
        { name: 'Featured', path: '/featured', description: 'Highlighted products' },
        { name: 'Deals', path: '/deals', description: 'Special offers and discounts' },
      ]
    },
    {
      title: 'Company & Business',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', description: 'Company overview' },
        { name: 'Careers', path: '/careers', description: 'Employment opportunities' },
        { name: 'Partners', path: '/partners', description: 'Business partnerships' },
        { name: 'Press & Media', path: '/press', description: 'News and press releases' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale business solutions' },
      ]
    },
    {
      title: 'Resources & Content',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'Tutorials', path: '/tutorials', description: 'Learning resources' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help-center', description: 'Comprehensive help resources' },
        { name: 'FAQ', path: '/faq', description: 'Common questions and answers' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Live Chat', path: '/chat', description: 'Real-time support chat' },
        { name: 'Status Page', path: '/status', description: 'Service status updates' },
        { name: 'Support Ticket', path: '/support-ticket', description: 'Submit support requests' },
      ]
    },
    {
      title: 'Tools & Applications',
      icon: Settings,
      links: [
        { name: 'Analytics Dashboard', path: '/analytics', description: 'Business analytics and insights' },
        { name: 'Mobile App', path: '/mobile-launch', description: 'Mobile application' },
        { name: 'Community Platform', path: '/community', description: 'User community and forums' },
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources and tools' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility standards' },
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      ]
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const servicePages = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/cloud-devops', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, description: 'Business Process Modernization' },
    { name: 'Quantum Technology', href: '/quantum-technology', icon: Atom, description: 'Quantum Computing Solutions' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise IT Services' },
    { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', icon: Rocket, description: 'Scalable SaaS Platforms' },
  ];

  const aiServices = [
    { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems', icon: Brain, description: 'Autonomous AI Solutions' },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, description: 'AI-Powered Analytics' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: MessageSquare, description: 'Marketing AI Tools' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Process Automation' },
    { name: 'AI Code Review', href: '/ai-autonomous-code-review', icon: Code, description: 'Automated Code Analysis' },
    { name: 'AI Content Generation', href: '/ai-content-generator', icon: FileText, description: 'Content Creation AI' },
  ];

  const blockchainServices = [
    { name: 'Blockchain Enterprise', href: '/blockchain-enterprise-solutions', icon: Database, description: 'Enterprise Blockchain' },
    { name: 'DeFi Solutions', href: '/services/blockchain-defi-solutions', icon: Lock, description: 'Decentralized Finance' },
    { name: 'Blockchain Analytics', href: '/ai-blockchain-analytics', icon: BarChart3, description: 'Blockchain Data Analysis' },
  ];

  const iotServices = [
    { name: 'IoT Management Platform', href: '/services/iot-management-platform', icon: Network, description: 'IoT Device Management' },
    { name: 'IoT Data Analytics', href: '/iot-data-analytics', icon: BarChart3, description: 'IoT Data Processing' },
  ];

  const quantumServices = [
    { name: 'Quantum Neural Network', href: '/quantum-neural-network-platform', icon: Brain, description: 'Quantum AI Platform' },
    { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', icon: Cloud, description: 'Quantum Cloud Services' },
    { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', icon: TrendingUp, description: 'Quantum Trading Algorithms' },
  ];

  const emergingTech = [
    { name: 'Space Technology', href: '/space-tech', icon: Rocket, description: 'Space Tech Solutions' },
    { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'R&D Services' },
    { name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions', icon: Wifi, description: '5G Network Solutions' },
  ];

  const companyPages = [
    { name: 'Mission', href: '/mission', icon: Target, description: 'Our mission and vision' },
    { name: 'Team', href: '/team', icon: Users, description: 'Meet our team' },
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Partnership programs' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Latest updates' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Industry insights' },
  ];

  const supportPages = [
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'Webinars', href: '/webinars', icon: FileText, description: 'Educational content' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research papers' },
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical docs' },
    { name: 'Developer Portal', href: '/developer-portal', icon: Code, description: 'Developer resources' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection and privacy' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie, description: 'Cookie usage information' },
  ];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
import { motion } from 'framer-motion';
import { 
  Map, 
  Home, 
  Info, 
  Settings, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Shield, 
  Cookie, 
=======
  Brain, 
  Cpu,
  Cloud,
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  Globe,
  Rocket,
  Heart,
  Building,
  ShoppingCart,
  DollarSign,
  Factory,
  Award,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { path: '/', title: 'Home', description: 'Welcome to Zion Tech Group', icon: Home },
    { path: '/about', title: 'About Us', description: 'Learn about our company and mission', icon: Users },
    { path: '/team', title: 'Our Team', description: 'Meet our talented team members', icon: Users },
    { path: '/mission', title: 'Our Mission', description: 'Discover our mission and vision', icon: Award },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team', icon: Phone },
    { path: '/careers', title: 'Careers', description: 'Join our growing team', icon: Users }
  ];

  const servicePages = [
    { path: '/services', title: 'All Services', description: 'Comprehensive service overview', icon: Briefcase },
    { path: '/services/ai-autonomous-systems', title: 'AI Autonomous Systems', description: 'Advanced AI solutions', icon: Brain },
    { path: '/services/ai-business-intelligence', title: 'AI Business Intelligence', description: 'Data-driven insights', icon: Brain },
    { path: '/services/cybersecurity', title: 'Cybersecurity Services', description: 'Security and compliance', icon: Shield },
    { path: '/services/quantum-technology', title: 'Quantum Technology', description: 'Next-gen computing', icon: Cpu },
    { path: '/services/it-infrastructure', title: 'IT Infrastructure', description: 'Complete IT solutions', icon: Cloud },
    { path: '/micro-saas-services', title: 'Micro SAAS Solutions', description: 'Custom software development', icon: Cpu }
  ];

  const solutionPages = [
    { path: '/solutions/enterprise', title: 'Enterprise Solutions', description: 'Large-scale business transformation', icon: Building },
    { path: '/solutions/healthcare', title: 'Healthcare Solutions', description: 'Medical technology innovation', icon: Heart },
    { path: '/solutions/financial', title: 'Financial Solutions', description: 'Fintech and banking solutions', icon: DollarSign },
    { path: '/solutions/manufacturing', title: 'Manufacturing Solutions', description: 'Smart manufacturing', icon: Factory },
    { path: '/solutions/retail', title: 'Retail Solutions', description: 'Digital retail transformation', icon: ShoppingCart }
  ];

  const technologyPages = [
    { path: '/quantum-neural-network-platform', title: 'Quantum Neural Networks', description: 'Quantum-powered AI', icon: Brain },
    { path: '/ai-autonomous-business-manager', title: 'AI Business Manager', description: 'Autonomous business operations', icon: Brain },
    { path: '/ai-autonomous-research-assistant', title: 'AI Research Assistant', description: 'Research automation', icon: Brain },
    { path: '/autonomous-business-operations-platform', title: 'Autonomous Business Platform', description: 'Self-operating systems', icon: Rocket },
    { path: '/ai-powered-it-asset-management', title: 'AI Asset Management', description: 'Intelligent IT management', icon: Cloud }
  ];

  const resourcePages = [
    { path: '/pricing', title: 'Pricing', description: 'Transparent pricing plans', icon: DollarSign },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and results', icon: FileText },
    { path: '/blog', title: 'Blog', description: 'Latest insights and updates', icon: FileText },
    { path: '/help', title: 'Help Center', description: 'Support and documentation', icon: FileText },
    { path: '/docs', title: 'Documentation', description: 'Technical documentation', icon: FileText },
    { path: '/support', title: 'Support', description: 'Technical support services', icon: Phone }
  ];

  const legalPages = [
    { path: '/privacy', title: 'Privacy Policy', description: 'Data protection and privacy', icon: Shield },
    { path: '/terms', title: 'Terms of Service', description: 'Service terms and conditions', icon: FileText },
    { path: '/cookies', title: 'Cookie Policy', description: 'Cookie usage information', icon: Shield },
    { path: '/accessibility', title: 'Accessibility', description: 'Accessibility commitment', icon: Users }
  ];

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
>>>>>>> origin/main
  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <IconComponent className="w-6 h-6 text-zion-cyan mr-3" />
        {title}
      </h2>
      <ul className="space-y-3">
        {pages.map((page) => (
          <li key={page.href}>
            <Link 
              to={page.href} 
              className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
            >
              <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:bg-zion-cyan transition-colors"></span>
              <span className="font-medium">{page.name}</span>
              <span className="ml-2 text-sm text-zion-slate-light opacity-75">- {page.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
=======
  const quickLinks = [
    { name: 'Get Started', path: '/get-started', icon: Star, color: 'bg-green-100 text-green-700' },
    { name: 'Request Demo', path: '/demo', icon: Play, color: 'bg-blue-100 text-blue-700' },
    { name: 'Contact Sales', path: '/contact-sales', icon: MessageSquare, color: 'bg-purple-100 text-purple-700' },
    { name: 'Support', path: '/support', icon: HelpCircle, color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <>
<<<<<<< HEAD
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation guide for Zion Tech Group. Find all pages, services, and resources organized by category."
        keywords="sitemap, navigation, site structure, pages, services, Zion Tech Group"
=======
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://ziontechgroup.com/sitemap"
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Site Navigation Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive website structure. Find all pages, services, and resources organized by category for easy navigation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`${link.color} p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200`}
              >
                <link.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold text-sm">{link.name}</div>
              </Link>
            ))}
          </div>

          {/* Sitemap Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-zion-blue/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-zion-blue" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-2 border-gray-200 pl-4">
                        <Link
                          to={link.path}
                          className="block text-zion-blue hover:text-zion-blue-dark font-medium mb-1 transition-colors"
                        >
                          {link.name}
                        </Link>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-zion-blue" />
                  <span>Site Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Pages:</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Site Version:</span>
                    <span className="font-medium">2.0.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-zion-blue" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/contact"
                    className="block text-zion-blue hover:text-zion-blue-dark text-sm font-medium"
                  >
                    Contact Support →
                  </Link>
                  <Link
                    to="/help-center"
                    className="block text-zion-blue hover:text-zion-blue-dark text-sm font-medium"
                  >
                    Visit Help Center →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  );

  return (
<<<<<<< HEAD
    <>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <main className="container mx-auto px-4 py-8 pt-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-6 flex items-center justify-center">
              <Map className="w-12 h-12 text-zion-cyan mr-4" />
              Website Sitemap
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Navigate through all the pages and services offered by Zion Tech Group. 
              Find exactly what you're looking for with our comprehensive site structure.
            </p>
          </motion.div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {renderPageSection('Main Pages', mainPages, Home)}
            {renderPageSection('Core Services', servicePages, Settings)}
            {renderPageSection('AI Services', aiServices, Brain)}
            {renderPageSection('Blockchain Solutions', blockchainServices, Database)}
            {renderPageSection('IoT Services', iotServices, Network)}
            {renderPageSection('Quantum Technology', quantumServices, Atom)}
            {renderPageSection('Emerging Tech', emergingTech, Rocket)}
            {renderPageSection('Company', companyPages, Building)}
            {renderPageSection('Support & Resources', supportPages, HelpCircle)}
            {renderPageSection('Legal & Privacy', legalPages, Shield)}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate 
              our services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Help
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
=======
  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <div key={title} className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <IconComponent className="w-5 h-5 mr-2 text-cyan-400" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="block p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
          >
            <h4 className="font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
              {page.title}
            </h4>
            <p className="text-sm text-gray-400">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Navigate through all the pages and sections of our website to find exactly 
            what you're looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {renderPageSection('Main Pages', mainPages, Home)}
              {renderPageSection('Services', servicePages, Briefcase)}
              {renderPageSection('Solutions', solutionPages, Building)}
            </div>

            {/* Right Column */}
            <div>
              {renderPageSection('Technology Platforms', technologyPages, Rocket)}
              {renderPageSection('Resources', resourcePages, FileText)}
              {renderPageSection('Legal & Support', legalPages, Shield)}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <p className="text-gray-400">
              Popular destinations and frequently accessed pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-sm text-gray-400">Explore our comprehensive service offerings</p>
            </Link>

            <Link
              to="/pricing"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pricing Plans</h3>
              <p className="text-sm text-gray-400">Transparent pricing for all our services</p>
            </Link>

            <Link
              to="/contact"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-400">Contact our team for inquiries</p>
            </Link>

            <Link
              to="/careers"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Join Our Team</h3>
              <p className="text-sm text-gray-400">Career opportunities at Zion Tech Group</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our team is here to help you navigate 
            our website and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Visit Help Center</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion Tech Group Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of services, solutions, and resources. 
            Find everything you need to transform your business with cutting-edge technology.
=======
=======
>>>>>>> origin/main
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Building, 
  Users, 
  Heart, 
  Rocket, 
  Code, 
  BarChart3, 
  Target, 
  Network, 
  Eye, 
  Clock, 
  Star, 
  Globe, 
  FileText, 
  Calendar, 
  Video, 
  Zap, 
  TrendingUp, 
  ShoppingCart,
  Lock,
  Database,
  Palette,
  Workflow
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Star,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Our Mission', path: '/mission', description: 'Our vision and mission' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Our partnerships' }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      icon: Brain,
      pages: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Manager', path: '/services/ai-autonomous-business-manager', description: 'Intelligent business management' },
        { name: 'AI Business Platform', path: '/services/ai-autonomous-business-platform', description: 'Comprehensive business platform' },
        { name: 'AI Code Review', path: '/services/ai-autonomous-code-review', description: 'Intelligent code review automation' },
        { name: 'AI Creative Director', path: '/services/ai-autonomous-creative-director', description: 'AI-powered creative content generation' },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-automation', description: 'Automated content creation' },
        { name: 'AI Consciousness Evolution', path: '/services/ai-consciousness-evolution', description: 'Advanced AI consciousness research' }
      ]
    },
    {
      title: 'Technology & Infrastructure',
      icon: Cpu,
      pages: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', description: 'Custom software solutions' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      pages: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', description: 'Decentralized applications' },
        { name: 'IoT Data Analytics', path: '/services/iot-data-analytics', description: 'Connected device management' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Cutting-edge technology solutions' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: Building,
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Smart manufacturing' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: FileText,
      pages: [
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and results' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'Testimonials', path: '/testimonials', description: 'Client success stories' }
      ]
    },
    {
      title: 'Business & Legal',
      icon: Shield,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' },
        { name: 'Community', path: '/community', description: 'Join our community' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms of service' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie policy' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
          </p>
        </div>
      </div>

<<<<<<< HEAD
        {/* Sitemap Content */}
        <div className="space-y-8">
          {renderPageSection('Main Pages', mainPages, Map)}
          {renderPageSection('Services', servicePages, Settings)}
          {renderPageSection('Legal & Support', legalPages, Shield)}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  Building,
  Users,
  Heart,
  Rocket,
  BarChart3,
  Target,
  Lock,
  Code,
  Clock,
  Eye,
  DollarSign,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Facebook,
  Instagram,
  Briefcase
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company" },
        { name: "Our Mission", path: "/mission", description: "Our vision and mission" },
        { name: "Team", path: "/team", description: "Meet our leadership team" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "News", path: "/news", description: "Latest company news" },
        { name: "Blog", path: "/blog", description: "Industry insights and updates" }
      ]
    },
    {
      title: "AI & Autonomous Systems",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { name: "AI Services", path: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "AI Solutions", path: "/ai-solutions", description: "AI-powered business solutions" },
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Advanced autonomous AI systems" },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "AI-powered research automation" },
        { name: "AI Business Solutions", path: "/ai-business-solutions", description: "AI for business transformation" },
        { name: "AI Matcher", path: "/ai-matcher", description: "AI-powered service matching" },
        { name: "AI Agent Orchestrator", path: "/ai-agent-orchestrator", description: "AI agent management platform" }
      ]
    },
    {
      title: "Quantum Technology",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions" },
        { name: "Quantum Neural Network Platform", path: "/quantum-neural-network-platform", description: "Quantum-powered neural networks" },
        { name: "Quantum Cloud Infrastructure", path: "/quantum-cloud-infrastructure", description: "Quantum cloud services" },
        { name: "Quantum Financial Trading", path: "/quantum-financial-trading", description: "Quantum trading algorithms" },
        { name: "Quantum Services", path: "/quantum-services", description: "Comprehensive quantum solutions" }
      ]
    },
    {
      title: "Business Operations",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      links: [
        { name: "Autonomous Business Operations Platform", path: "/autonomous-business-operations-platform", description: "Self-operating business systems" },
        { name: "AI-Powered IT Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset management" },
        { name: "Enterprise Solutions", path: "/enterprise-solutions", description: "Enterprise-grade solutions" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Business transformation services" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced business analytics" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      links: [
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Complete security solutions" },
        { name: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance management" },
        { name: "Advanced Cybersecurity Suite", path: "/advanced-cybersecurity-suite", description: "Comprehensive security platform" },
        { name: "AI-Powered Enterprise Security", path: "/ai-powered-enterprise-security", description: "AI-enhanced security" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Security audit and testing" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      links: [
        { name: "Cloud DevOps", path: "/cloud-devops", description: "Cloud development and operations" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Complete IT infrastructure solutions" },
        { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "High-speed 5G connectivity" },
        { name: "Specialized IT Infrastructure", path: "/services/specialized-it-infrastructure", description: "Custom infrastructure solutions" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" },
        { name: "Managed IT Services", path: "/services/managed-it-services", description: "24/7 IT support" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: Code,
      color: "from-orange-500 to-yellow-500",
      links: [
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Scalable software solutions" },
        { name: "Innovative Micro SAAS Services", path: "/innovative-micro-saas-services", description: "Cutting-edge SAAS platforms" },
        { name: "Micro SAAS", path: "/micro-saas", description: "Micro software-as-a-service" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      color: "from-purple-500 to-violet-500",
      links: [
        { name: "Industry Solutions", path: "/services/industry-solutions", description: "Industry-specific solutions" },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", description: "Enterprise-grade solutions" },
        { name: "Healthcare Solutions", path: "/solutions/healthcare", description: "Healthcare technology solutions" },
        { name: "Financial Solutions", path: "/solutions/financial", description: "Fintech solutions" },
        { name: "Manufacturing Solutions", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { name: "Retail Solutions", path: "/solutions/retail", description: "Digital retail transformation" },
        { name: "Government Solutions", path: "/solutions/government", description: "Public sector technology" }
      ]
    },
    {
      title: "Services & Solutions",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      links: [
        { name: "Services", path: "/services", description: "All our services" },
        { name: "Services Overview", path: "/services-overview", description: "Comprehensive service overview" },
        { name: "Services Showcase", path: "/services-showcase", description: "Featured services" },
        { name: "New Services", path: "/new-services", description: "Latest technology services" },
        { name: "Comprehensive Services Overview", path: "/comprehensive-services-overview", description: "Complete service catalog" },
        { name: "Comprehensive Innovative Services", path: "/comprehensive-innovative-services", description: "Innovative service offerings" },
        { name: "Innovative New Services", path: "/services/innovative-new-services", description: "Cutting-edge services" },
        { name: "Innovative Services", path: "/innovative-services", description: "Innovative technology solutions" },
        { name: "Innovative Services Showcase", path: "/innovative-services-showcase", description: "Showcase of innovations" }
      ]
    },
    {
      title: "Resources & Support",
      icon: Users,
      color: "from-green-500 to-blue-500",
      links: [
        { name: "Case Studies", path: "/case-studies", description: "Success stories and case studies" },
        { name: "Help Center", path: "/help", description: "Support and documentation" },
        { name: "White Papers", path: "/white-papers", description: "Industry research and insights" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Emerging Tech", path: "/emerging-tech", description: "Latest technology trends" },
        { name: "Research & Development", path: "/research-development", description: "R&D initiatives" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Testimonials", path: "/testimonials", description: "Client feedback" }
      ]
    },
    {
      title: "Talent & Community",
      icon: Users,
      color: "from-pink-500 to-red-500",
      links: [
        { name: "Talent Directory", path: "/talent-directory", description: "Find top talent" },
        { name: "Talents", path: "/talents", description: "Talent showcase" },
        { name: "Community", path: "/community", description: "Join our community" },
        { name: "Marketplace", path: "/marketplace", description: "Technology marketplace" }
      ]
    },
    {
      title: "Company Information",
      icon: Building,
      color: "from-gray-500 to-slate-500",
      links: [
        { name: "Pricing", path: "/pricing", description: "Service pricing and plans" },
        { name: "Leadership", path: "/leadership", description: "Executive leadership team" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Cookies Policy", path: "/cookies", description: "Cookie usage policy" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services offered by Zion Tech Group
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Last updated: {currentYear} | Total sections: {sitemapSections.length}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sitemapSections.map((section, index) => (
              <a
                key={index}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 text-center group"
              >
                <section.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-16">
          {sitemapSections.map((section, index) => (
            <section
              key={index}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-20"
            >
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200 mb-2">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Visit Page</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact & Social Section */}
        <section className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <contact.icon className="w-5 h-5 text-cyan-400" />
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Follow Us</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-gray-800/30 hover:bg-gray-700/40 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 group"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="mt-16 text-center">
          <a
            href="#top"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-aa28
=======
      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIdx) => (
            <div key={sectionIdx} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.pages.map((page, pageIdx) => (
                  <Link
                    key={pageIdx}
                    to={page.path}
                    className="block p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {page.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                      </div>
                      <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/services"
              className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">🤖</div>
              <div className="font-semibold text-white">All Services</div>
            </Link>
            <Link
              to="/solutions/enterprise"
              className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold text-white">Solutions</div>
            </Link>
            <Link
              to="/case-studies"
              className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-white">Case Studies</div>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-center hover:from-orange-600 hover:to-red-700 transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold text-white">Contact Us</div>
            </Link>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            This sitemap helps search engines and users navigate our website effectively. 
            All pages are optimized for SEO and accessibility.
          </p>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Building, 
  Users, 
  Target, 
  Zap,
  Globe,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Star,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company" },
        { name: "Our Mission", path: "/mission", description: "What drives us forward" },
        { name: "Team", path: "/team", description: "Meet our experts" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "News", path: "/news", description: "Company updates and industry news" },
        { name: "Pricing", path: "/pricing", description: "Transparent pricing plans" }
      ]
    },
    {
      title: "AI & Autonomous Systems",
      icon: Brain,
      links: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Intelligent autonomous solutions" },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced analytics and insights" },
        { name: "AI Marketing Automation", path: "/services/ai-marketing-automation", description: "Smart marketing optimization" },
        { name: "AI HR & Recruitment", path: "/services/ai-hr-recruitment", description: "Intelligent talent management" },
        { name: "AI Legal Tech", path: "/services/ai-legal-tech", description: "Automated legal processes" },
        { name: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics", description: "Patient care optimization" },
        { name: "AI Financial Analytics", path: "/services/ai-financial-analytics", description: "Risk assessment and insights" },
        { name: "AI Supply Chain", path: "/services/ai-supply-chain", description: "Optimization and forecasting" },
        { name: "AI Manufacturing", path: "/services/ai-manufacturing", description: "Smart production systems" },
        { name: "AI Content Generation", path: "/services/ai-content-generation", description: "Automated content creation" },
        { name: "AI Code Review", path: "/services/ai-code-review", description: "Intelligent code analysis" },
        { name: "AI Autonomous Business Manager", path: "/services/ai-autonomous-business-manager", description: "AI-powered business management" },
        { name: "AI Autonomous Research Assistant", path: "/services/ai-autonomous-research-assistant", description: "Research automation" },
        { name: "AI Autonomous Decision Engine", path: "/services/ai-autonomous-decision-engine", description: "Intelligent decision making" },
        { name: "AI Autonomous Ecosystem", path: "/services/ai-autonomous-ecosystem", description: "Complete AI ecosystem management" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      links: [
        { name: "Cybersecurity Services", path: "/services/cybersecurity", description: "Comprehensive security solutions" },
        { name: "Quantum-Safe Security", path: "/services/quantum-safe-security", description: "Future-proof protection" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Comprehensive security audit" },
        { name: "Compliance & Audit", path: "/services/compliance-audit", description: "Regulatory compliance solutions" },
        { name: "Threat Detection", path: "/services/threat-detection", description: "Real-time security monitoring" },
        { name: "AI-Powered Enterprise Security", path: "/services/ai-powered-enterprise-security", description: "Intelligent security solutions" },
        { name: "AI Autonomous Security", path: "/services/ai-autonomous-security", description: "Automated security systems" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cpu,
      links: [
        { name: "Cloud & DevOps", path: "/cloud-devops", description: "Cloud migration and DevOps automation" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Robust infrastructure solutions" },
        { name: "Specialized IT Infrastructure", path: "/services/specialized-it-infrastructure", description: "Custom infrastructure solutions" },
        { name: "Cloud Migration", path: "/services/cloud-migration", description: "Seamless cloud transition" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" },
        { name: "Managed IT Services", path: "/services/managed-it-services", description: "24/7 IT support" },
        { name: "DevOps Automation", path: "/services/devops-automation", description: "Streamlined development" },
        { name: "Autonomous DevOps Platform", path: "/services/autonomous-devops-platform", description: "AI-powered DevOps" },
        { name: "AI Autonomous DevOps", path: "/services/ai-autonomous-devops", description: "Intelligent DevOps automation" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      links: [
        { name: "Emerging Technology", path: "/emerging-tech", description: "Cutting-edge technology solutions" },
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Next-generation computing" },
        { name: "Quantum Cloud Infrastructure", path: "/services/quantum-cloud-infrastructure", description: "Quantum-ready cloud solutions" },
        { name: "Quantum Financial Trading", path: "/services/quantum-financial-trading", description: "Quantum-powered trading" },
        { name: "Quantum Services", path: "/services/quantum-services", description: "Comprehensive quantum solutions" },
        { name: "Blockchain Solutions", path: "/services/blockchain-solutions", description: "Decentralized applications" },
        { name: "AI Blockchain Analytics", path: "/services/ai-blockchain-analytics", description: "Intelligent blockchain analysis" },
        { name: "AI Blockchain Governance", path: "/services/ai-blockchain-governance", description: "Smart governance solutions" },
        { name: "IoT Platforms", path: "/services/iot-platforms", description: "Connected device management" },
        { name: "AR/VR Solutions", path: "/services/ar-vr-solutions", description: "Immersive experiences" },
        { name: "AI Brain Computer Interface", path: "/services/ai-brain-computer-interface", description: "Neural interface technology" },
        { name: "AI Brain Interface", path: "/services/ai-brain-interface", description: "Advanced brain-computer interfaces" },
        { name: "AI Autonomous Robotics", path: "/services/ai-autonomous-robotics", description: "Intelligent robotic systems" },
        { name: "AI Autonomous Vehicle Platform", path: "/services/ai-autonomous-vehicle-platform", description: "Self-driving vehicle solutions" },
        { name: "AI Autonomous Vehicles", path: "/services/ai-autonomous-vehicles", description: "Autonomous transportation" },
        { name: "AI Autonomous Vehicle", path: "/services/ai-autonomous-vehicle", description: "Individual vehicle automation" },
        { name: "AI Autonomous Vehicles Platform", path: "/services/ai-autonomous-vehicles-platform", description: "Comprehensive vehicle automation" },
        { name: "AI Autonomous Testing", path: "/services/ai-autonomous-testing", description: "Automated testing solutions" },
        { name: "AI Autonomous Scientific Researcher", path: "/services/ai-autonomous-scientific-researcher", description: "Research automation" },
        { name: "AI Autonomous Research", path: "/services/ai-autonomous-research", description: "Comprehensive research automation" },
        { name: "AI Autonomous Learning System", path: "/services/ai-autonomous-learning-system", description: "Intelligent learning platforms" },
        { name: "AI Autonomous Education Professor", path: "/services/ai-autonomous-education-professor", description: "Educational AI systems" },
        { name: "AI Autonomous Healthcare Physician", path: "/services/ai-autonomous-healthcare-physician", description: "Medical AI assistance" },
        { name: "AI Autonomous Legal Counsel", path: "/services/ai-autonomous-legal-counsel", description: "Legal AI systems" },
        { name: "AI Autonomous Logistics", path: "/services/ai-autonomous-logistics", description: "Supply chain automation" },
        { name: "AI Autonomous Manufacturing", path: "/services/ai-autonomous-manufacturing", description: "Production automation" },
        { name: "AI Autonomous Systems Platform", path: "/services/ai-autonomous-systems-platform", description: "Complete autonomous platform" },
        { name: "AI Autonomous Venture Capitalist", path: "/services/ai-autonomous-venture-capitalist", description: "Investment AI systems" },
        { name: "AI Biomedical Research", path: "/services/ai-biomedical-research", description: "Medical research automation" },
        { name: "AI Biotech Drug Discovery", path: "/services/ai-biotech-drug-discovery", description: "Pharmaceutical AI" },
        { name: "AI Climate Prediction Engine", path: "/services/ai-climate-prediction-engine", description: "Climate modeling AI" },
        { name: "AI Climate Prediction Platform", path: "/services/ai-climate-prediction-platform", description: "Climate prediction systems" },
        { name: "AI Climate Prediction", path: "/services/ai-climate-prediction", description: "Environmental AI solutions" },
        { name: "AI Code Generation Enterprise", path: "/services/ai-code-generation-enterprise", description: "Enterprise code generation" },
        { name: "AI Code Review Copilot", path: "/services/ai-code-review-copilot", description: "AI-powered code review" },
        { name: "AI Code Review", path: "/services/ai-code-review", description: "Intelligent code analysis" },
        { name: "AI Compliance Automation", path: "/services/ai-compliance-automation", description: "Regulatory automation" },
        { name: "AI Computer Vision Platform", path: "/services/ai-computer-vision-platform", description: "Vision AI solutions" },
        { name: "AI Consciousness Evolution", path: "/services/ai-consciousness-evolution", description: "Consciousness research" },
        { name: "AI Consciousness Evolution 2025", path: "/services/ai-consciousness-evolution-2025", description: "2025 consciousness research" },
        { name: "AI Consciousness Evolution 2029", path: "/services/ai-consciousness-evolution-2029", description: "2029 consciousness research" },
        { name: "AI Consciousness Evolution Platform", path: "/services/ai-consciousness-evolution-platform", description: "Consciousness platform" },
        { name: "AI Consciousness Simulation Platform", path: "/services/ai-consciousness-simulation-platform", description: "Consciousness simulation" },
        { name: "AI Consciousness Simulation", path: "/services/ai-consciousness-simulation", description: "Consciousness AI" },
        { name: "AI Consciousness Simulator", path: "/services/ai-consciousness-simulator", description: "Consciousness simulation tools" },
        { name: "AI Content Creation Revolution", path: "/services/ai-content-creation-revolution", description: "Content creation AI" },
        { name: "AI Content Creation", path: "/services/ai-content-creation", description: "Content generation AI" },
        { name: "AI Content Factory", path: "/services/ai-content-factory", description: "Automated content production" },
        { name: "AI Content Generation Automation 2033", path: "/services/ai-content-generation-automation-2033", description: "2033 content automation" },
        { name: "AI Content Generation Pro 2029", path: "/services/ai-content-generation-pro-2029", description: "2029 content generation" },
        { name: "AI Content Generator", path: "/services/ai-content-generator", description: "Content generation tools" },
        { name: "AI Content Marketing Automation", path: "/services/ai-content-marketing-automation", description: "Marketing content AI" },
        { name: "AI Content Personalization Engine", path: "/services/ai-content-personalization-engine", description: "Personalized content AI" },
        { name: "AI Creativity Studio", path: "/services/ai-creativity-studio", description: "Creative AI tools" },
        { name: "AI Market Research", path: "/services/ai-market-research", description: "Market analysis AI" },
        { name: "AI Brand Personality Generator", path: "/services/ai-brand-personality-generator", description: "Brand AI tools" },
        { name: "AI Business Intelligence Elite 2026", path: "/services/ai-business-intelligence-elite-2026", description: "2026 elite BI" },
        { name: "AI Business Intelligence Pro", path: "/services/ai-business-intelligence-pro", description: "Professional BI" },
        { name: "AI Business Intelligence Suite 2029", path: "/services/ai-business-intelligence-suite-2029", description: "2029 BI suite" },
        { name: "AI Business Intelligence Suite", path: "/services/ai-business-intelligence-suite", description: "Comprehensive BI suite" },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Business intelligence AI" },
        { name: "AI Autonomous Creative Director", path: "/services/ai-autonomous-creative-director", description: "Creative direction AI" },
        { name: "AI Autonomous Data", path: "/services/ai-autonomous-data", description: "Data management AI" },
        { name: "AI Autonomous Decision Platform", path: "/services/ai-autonomous-decision-platform", description: "Decision platform AI" },
        { name: "AI Autonomous Ecosystem Manager", path: "/services/ai-autonomous-ecosystem-manager", description: "Ecosystem management AI" },
        { name: "AI Agent Orchestrator", path: "/services/ai-agent-orchestrator", description: "AI agent management" },
        { name: "AI Agents", path: "/services/ai-agents", description: "Intelligent AI agents" },
        { name: "AI Analytics Copilot", path: "/services/ai-analytics-copilot", description: "Analytics assistance AI" },
        { name: "AI Assistant", path: "/services/ai-assistant", description: "General AI assistance" },
        { name: "AI Automation Services", path: "/services/ai-automation-services", description: "Comprehensive automation" },
        { name: "AI Autonomous Business Operations", path: "/services/ai-autonomous-business-operations", description: "Business operations AI" },
        { name: "AI Autonomous Business Operations Platform", path: "/services/ai-autonomous-business-operations-platform", description: "Operations platform AI" },
        { name: "AI Autonomous Business Operations Platform 2026", path: "/services/ai-autonomous-business-operations-platform-2026", description: "2026 operations platform" },
        { name: "AI Autonomous Business Process Automation", path: "/services/ai-autonomous-business-process-automation", description: "Process automation AI" },
        { name: "AI Autonomous Business Platform", path: "/services/ai-autonomous-business-platform", description: "Business platform AI" },
        { name: "AI Autonomous Business Platform 2026", path: "/services/ai-autonomous-business-platform-2026", description: "2026 business platform" },
        { name: "AI Autonomous Business Manager 2029", path: "/services/ai-autonomous-business-manager-2029", description: "2029 business manager AI" },
        { name: "AI Autonomous Business Manager", path: "/services/ai-autonomous-business-manager", description: "Business management AI" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      links: [
        { name: "Industry Solutions", path: "/services/industry-solutions", description: "Tailored industry solutions" },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", description: "Large-scale business transformation" },
        { name: "Healthcare Solutions", path: "/solutions/healthcare", description: "Medical innovation solutions" },
        { name: "Financial Services", path: "/solutions/financial", description: "Fintech solutions" },
        { name: "Manufacturing Intelligence", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { name: "Retail Technology", path: "/solutions/retail", description: "Digital retail transformation" },
        { name: "Government Solutions", path: "/solutions/government", description: "Public sector innovation" },
        { name: "Education Technology", path: "/solutions/education", description: "Learning innovation" },
        { name: "Energy Management", path: "/solutions/energy", description: "Sustainable energy solutions" },
        { name: "Space Technology", path: "/services/space-tech", description: "Space innovation solutions" },
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Custom software solutions" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Complete business modernization" }
      ]
    },
    {
      title: "Support & Resources",
      icon: Users,
      links: [
        { name: "Help Center", path: "/help", description: "Customer support and help" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and examples" },
        { name: "White Papers", path: "/white-papers", description: "Industry insights and research" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Events", path: "/events", description: "Upcoming events and conferences" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Testimonials", path: "/testimonials", description: "Customer feedback and reviews" },
        { name: "Request Quote", path: "/request-quote", description: "Get a custom quote" },
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage policy" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Complete overview of all pages and services available on Zion Tech Group website
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                        {link.name}
                      </div>
                      <div className="text-sm text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-zion-slate-light">Get in touch with our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site structure.
          </p>
        </div>

        {/* Sitemap Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 neon-text">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="group">
                    <Link
                      to={link.path}
                      className="block p-3 rounded-lg bg-gray-700/50 hover:bg-cyan-500/20 border border-transparent hover:border-cyan-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                    >
                      <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Navigation</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Use our quick navigation tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Browse Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/help-center"
                className="px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/20 transition-all duration-300"
              >
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-74a8
  );
<<<<<<< HEAD
};

export default Sitemap;
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======

// Play icon component for demo link
function Play({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
