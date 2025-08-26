  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users, 
  Settings, 
  Shield, 
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  FileText, 
  Video, 
  Headphones, 
  Mail, 
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
import { Helmet } from 'react-helmet-async';
=======
import { motion } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone,
  Mail,
  Clock,
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car,
  Building,
  Factory,
  Hospital,
  ShoppingCart,
  HelpCircle,
  MessageCircle,
  FileText,
  Video,
  Book,
  Mail as MailIcon,
  CreditCard
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
=======
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Building,
  CreditCard
} from 'lucide-react';
=======
=======
import React, { useState } from 'react';
import { Search, BookOpen, Users, Shield, CreditCard, Settings, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
=======
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, ArrowRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
=======
import { motion } from 'framer-motion';
=======
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, FileText, Video, Users, Phone, Mail, Clock, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Book, MessageCircle, Phone, Mail, FileText, Video, Download, ChevronDown, ChevronRight, Star, Clock, Users, HelpCircle, Zap, Shield, Settings, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
=======
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageSquare, Phone, Mail, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  HelpCircle,
  Lightbulb,
  Clock,
  Star,
  TrendingUp,
  Settings,
  Users,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());

  const categories = [
    {
      id: 'getting-started',
      icon: Rocket,
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started', description: 'Learn the basics of our platform' },
        { title: 'Creating Your First Project', path: '/help/first-project', description: 'Step-by-step guide to get started' },
        { title: 'Account Setup & Verification', path: '/help/account-setup', description: 'Complete your profile setup' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
    'talent-hiring': {
      title: 'Talent & Hiring',
      icon: Users,
      articles: [
        { title: 'Security Assessment Process', views: '3.5k', time: '9 min read' },
        { title: 'Compliance Framework Setup', views: '2.1k', time: '11 min read' },
        { title: 'Incident Response Procedures', views: '1.7k', time: '7 min read' },
        { title: 'Zero Trust Architecture Guide', views: '2.9k', time: '14 min read' }
      ]
    },
    'technical-support': {
      title: 'Technical Support',
      icon: HelpCircle,
      articles: [
        { title: 'Common Integration Issues', views: '4.2k', time: '6 min read' },
        { title: 'API Documentation', views: '3.8k', time: '20 min read' },
        { title: 'System Requirements', views: '2.6k', time: '5 min read' },
        { title: 'Performance Optimization', views: '1.8k', time: '13 min read' }
=======
      icon: Brain,
      articles: [
        { title: 'AI Business Intelligence Guide', path: '/help/ai-bi-guide', description: 'Understanding AI-powered analytics' },
        { title: 'Quantum Neural Networks', path: '/help/quantum-neural', description: 'Working with quantum computing' },
        { title: 'AI Autonomous Systems', path: '/help/ai-autonomous', description: 'Setting up autonomous operations' }
      ]
    },
    'billing-payments': {
      title: 'Billing & Payments',
      icon: CreditCard,
      articles: [
        { title: 'Cloud Infrastructure Setup', path: '/help/cloud-setup', description: 'Deploy your cloud infrastructure' },
        { title: 'DevOps Best Practices', path: '/help/devops-practices', description: 'Optimize your development workflow' },
        { title: 'Security & Compliance', path: '/help/security-compliance', description: 'Ensure your systems are secure' }
      ]
    },
    'account-security': {
      title: 'Account & Security',
      icon: Shield,
      articles: [
        { title: 'Security Best Practices', path: '/help/security-practices', description: 'Protect your digital assets' },
        { title: 'Threat Detection & Response', path: '/help/threat-detection', description: 'Monitor and respond to threats' },
        { title: 'Compliance Guidelines', path: '/help/compliance-guidelines', description: 'Meet industry standards' }
      ]
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      icon: Building,
      articles: [
        { title: 'Enterprise Architecture', path: '/help/enterprise-arch', description: 'Design scalable solutions' },
        { title: 'Digital Transformation', path: '/help/digital-transformation', description: 'Modernize your business' },
        { title: 'Integration Services', path: '/help/integration-services', description: 'Connect your systems' }
      ]
    },
    {
      id: 'billing-support',
      title: 'Billing & Support',
      icon: CreditCard,
      articles: [
        { title: 'Pricing Plans', path: '/help/pricing-plans', description: 'Understand our pricing structure' },
        { title: 'Payment Methods', path: '/help/payment-methods', description: 'Accepted payment options' },
        { title: 'Billing FAQ', path: '/help/billing-faq', description: 'Common billing questions' }
      ]
    }
  } as const;
=======

  const helpCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        { title: 'How to create your first account', href: '/help/create-account' },
        { title: 'Complete profile setup guide', href: '/help/profile-setup' },
        { title: 'Understanding the marketplace', href: '/help/marketplace-guide' },
        { title: 'First steps for new users', href: '/help/first-steps' }
      ]
    },
    'marketplace': {
      title: 'Marketplace',
      icon: BookOpen,
      articles: [
        { title: 'How to list products and services', href: '/help/list-products' },
        { title: 'Managing your listings', href: '/help/manage-listings' },
        { title: 'Understanding pricing and fees', href: '/help/pricing-fees' },
        { title: 'Marketplace policies and guidelines', href: '/help/marketplace-policies' }
      ]
    },
    'talent': {
      title: 'Talent & Hiring',
      icon: BookOpen,
      articles: [
        { title: 'Creating a talent profile', href: '/help/talent-profile' },
        { title: 'Finding and hiring talent', href: '/help/hire-talent' },
        { title: 'Managing projects and contracts', href: '/help/manage-projects' },
        { title: 'Payment and escrow system', href: '/help/payment-system' }
      ]
    },
    'technical': {
      title: 'Technical Support',
      icon: BookOpen,
      articles: [
        { title: 'Common technical issues', href: '/help/technical-issues' },
        { title: 'Browser compatibility', href: '/help/browser-compatibility' },
        { title: 'Mobile app troubleshooting', href: '/help/mobile-troubleshooting' },
        { title: 'API and integration support', href: '/help/api-support' }
      ]
    },
    'billing': {
      title: 'Billing & Payments',
      icon: BookOpen,
      articles: [
        { title: 'Understanding your invoice', href: '/help/invoice-guide' },
        { title: 'Payment methods and security', href: '/help/payment-methods' },
        { title: 'Refund and cancellation policy', href: '/help/refund-policy' },
        { title: 'Tax information and reporting', href: '/help/tax-information' }
      ]
    },
    'account': {
      title: 'Account & Security',
      icon: BookOpen,
      articles: [
        { title: 'Account security best practices', href: '/help/account-security' },
        { title: 'Two-factor authentication setup', href: '/help/2fa-setup' },
        { title: 'Password reset and recovery', href: '/help/password-recovery' },
        { title: 'Privacy settings and data control', href: '/help/privacy-settings' }
      ]
    }
  };

  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
  ];


  const helpCategories = [
    {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0, 1]));

  const toggleFaq = (index: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFaqs(newExpanded);
  };

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        'Welcome to Zion Tech Group',
        'Setting up your account',
        'First steps with our platform',
        'Understanding our services'
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articles: [
        'AI Business Intelligence',
        'AI Marketing Automation',
        'AI HR & Recruitment',
        'AI Legal Tech Solutions'
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      articles: [
        'Quantum Neural Networks',
        'Quantum-Safe Security',
        'Quantum Computing Basics',
        'Quantum Applications'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        'SOC2 Compliance',
        'Security Best Practices',
        'Threat Detection',
        'Incident Response'
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        'Cloud Migration',
        'Network Setup',
        '5G Enterprise Solutions',
        'Asset Management'
      ]
    },
    {
      id: 'support',
      title: 'Support & Contact',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        'Contact Support',
        'Live Chat',
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Play, count: 12 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 15 },
    { id: 'technical', name: 'Technical Support', icon: Code, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: FileText, count: 8 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Settings, count: 10 }
  ];

  const popularArticles = [
    {
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle,
  ChevronRight,
  FileText,
  Video,
  Users,
  Settings,
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

const HelpCenter = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      description: 'New to Zion Tech Group? Start here',
      articles: [
        { title: 'How to Get Started', path: '/help/getting-started', description: 'Complete guide for new users' },
        { title: 'Account Setup', path: '/help/account-setup', description: 'Setting up your account' },
        { title: 'First Project', path: '/help/first-project', description: 'Creating your first project' },
        { title: 'Platform Overview', path: '/help/platform-overview', description: 'Understanding our platform' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      description: 'Help with AI and machine learning services',
      articles: [
        { title: 'AI Business Intelligence', path: '/help/ai-bi', description: 'Using AI analytics tools' },
        { title: 'AI Marketing Automation', path: '/help/ai-marketing', description: 'Setting up marketing automation' },
        { title: 'AI HR & Recruitment', path: '/help/ai-hr', description: 'AI-powered talent management' },
        { title: 'AI Legal Tech', path: '/help/ai-legal', description: 'Legal process automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance assistance',
      articles: [
        { title: 'Security Best Practices', path: '/help/security-best-practices', description: 'Keeping your data safe' },
        { title: 'Compliance Guidelines', path: '/help/compliance-guidelines', description: 'Meeting regulatory requirements' },
        { title: 'Threat Detection', path: '/help/threat-detection', description: 'Understanding security alerts' },
        { title: 'Incident Response', path: '/help/incident-response', description: 'What to do during security events' }
      ]
    },
    {
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical issues and troubleshooting',
      articles: [
        { title: 'Common Issues', path: '/help/common-issues', description: 'Frequently encountered problems' },
        { title: 'API Documentation', path: '/help/api-docs', description: 'Integration and API usage' },
        { title: 'Performance Optimization', path: '/help/performance', description: 'Improving system performance' },
        { title: 'Backup & Recovery', path: '/help/backup-recovery', description: 'Data protection strategies' }
      ]
=======
        'Emergency Contacts',
        'Support Hours'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickActions = [
    { title: 'Contact Support', icon: MessageCircle, path: '/contact', color: 'from-blue-500 to-cyan-500' },
    { title: 'Live Chat', icon: MessageCircle, path: '/chat', color: 'from-green-500 to-emerald-500' },
    { title: 'Schedule Call', icon: Phone, path: '/schedule', color: 'from-purple-500 to-pink-500' },
    { title: 'Email Support', icon: Mail, path: 'mailto:kleber@ziontechgroup.com', color: 'from-orange-500 to-red-500' }
  ];

  const popularArticles = [
  const popularArticles = [
    { title: 'How to Set Up AI Business Intelligence', path: '/help/setup-ai-bi', category: 'AI Solutions' },
    { title: 'Cloud Infrastructure Best Practices', path: '/help/cloud-best-practices', category: 'Cloud & DevOps' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/security-checklist', category: 'Cybersecurity' },
    { title: 'Getting Started with Quantum Computing', path: '/help/quantum-getting-started', category: 'AI Solutions' }
  ];

  const supportChannels = [
    {
    { title: 'How to Implement AI in Your Business', path: '/help/ai-implementation', category: 'AI Services' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/cybersecurity-checklist', category: 'Cybersecurity' },
    { title: 'Cloud Migration Best Practices', path: '/help/cloud-migration', category: 'Technical Support' },
    { title: 'Setting Up Micro SAAS Solutions', path: '/help/micro-saas-setup', category: 'Getting Started' }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
=======
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  FileText,
  Download
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      title: "Getting Started",
      icon: Lightbulb,
      articles: [
        { title: "Welcome to Zion Tech Group", path: "/help/getting-started" },
        { title: "Account Setup Guide", path: "/help/account-setup" },
        { title: "First Steps with Our Platform", path: "/help/first-steps" },
        { title: "Platform Overview", path: "/help/platform-overview" }
      ]
    },
    {
      title: "AI Solutions",
      icon: Target,
      articles: [
        { title: "AI Autonomous Systems Guide", path: "/help/ai-autonomous-systems" },
        { title: "Quantum Neural Networks", path: "/help/quantum-neural-networks" },
        { title: "AI Research Assistant", path: "/help/ai-research-assistant" },
        { title: "AI Asset Management", path: "/help/ai-asset-management" }
      ]
    },
    {
      title: "Services & Features",
      icon: Settings,
      articles: [
        { title: "Service Configuration", path: "/help/service-configuration" },
        { title: "API Documentation", path: "/help/api-documentation" },
        { title: "Integration Guides", path: "/help/integration-guides" },
        { title: "Feature Updates", path: "/help/feature-updates" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      articles: [
        { title: "Common Issues", path: "/help/common-issues" },
        { title: "Error Messages", path: "/help/error-messages" },
        { title: "Performance Optimization", path: "/help/performance" },
        { title: "Debugging Tools", path: "/help/debugging" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      articles: [
        { title: "Security Best Practices", path: "/help/security-best-practices" },
        { title: "SOC2 Compliance Guide", path: "/help/soc2-compliance" },
        { title: "Data Protection", path: "/help/data-protection" },
        { title: "Access Control", path: "/help/access-control" }
      ]
    },
    {
      title: "Billing & Support",
      icon: CreditCard,
      articles: [
        { title: "Billing FAQ", path: "/help/billing-faq" },
        { title: "Payment Methods", path: "/help/payment-methods" },
        { title: "Support Plans", path: "/help/support-plans" },
        { title: "Refund Policy", path: "/help/refund-policy" }
=======
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  QuestionMarkCircleIcon, 
  BookOpenIcon, 
  ChatBubbleLeftRightIcon, 
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const HelpCenter: React.FC = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpenIcon,
      questions: [
        {
          question: "How do I get started with Zion Tech Group services?",
          answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
        },
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive range of AI, 5G, cybersecurity, and digital transformation services. This includes AI autonomous systems, quantum computing solutions, 5G enterprise networks, and much more."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your business needs and recommend appropriate solutions. This helps ensure we can provide the most value to your organization."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: QuestionMarkCircleIcon,
      questions: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including 24/7 monitoring, troubleshooting, system optimization, and ongoing maintenance. Our team of experts is always available to help resolve any technical issues."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We prioritize support requests based on severity. Critical issues receive immediate attention, while standard requests are typically resolved within 4-8 hours during business days."
        },
        {
          question: "Do you provide training for your solutions?",
          answer: "Absolutely! We provide comprehensive training programs for all our solutions, including user training, administrator training, and ongoing education to ensure your team gets the most value from our technology."
        }
      ]
    },
    {
      title: "Billing & Pricing",
      icon: DocumentTextIcon,
      questions: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. We work with you to find the most cost-effective solution for your needs."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we offer volume discounts for enterprise clients and organizations implementing multiple services. Contact our sales team to discuss custom pricing options."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely through our payment systems."
        }
      ]
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen,
  Video,
  FileText,
  Users,
  Zap,
  Shield,
  Globe,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { id: 'quantum', name: 'Quantum Technology', icon: Zap, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: 10 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Network, count: 9 },
    { id: '5g', name: '5G Solutions', icon: Network, count: 6 },
    { id: 'general', name: 'General Support', icon: Users, count: 20 }
=======
      name: 'Getting Started',
      description: 'Learn the basics and set up your account',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articleCount: 12
    },
    {
      id: 'ai-workflows',
      name: 'AI Workflows',
      description: 'Create and manage automated workflows',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articleCount: 18
    },
    {
      id: 'integrations',
      name: 'Integrations',
      description: 'Connect with your favorite tools and services',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      articleCount: 25
    },
    {
      id: 'billing',
      name: 'Billing & Plans',
      description: 'Manage your subscription and billing',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500',
      articleCount: 8
    },
    {
      id: 'security',
      name: 'Security & Privacy',
      description: 'Learn about our security measures',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      articleCount: 15
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: HelpCircle,
      color: 'from-yellow-500 to-orange-500',
      articleCount: 22
    }
  ];

  const popularArticles = [
    {
      id: 'getting-started-1',
      title: 'How to Create Your First AI Workflow',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '2.4k',
      helpful: '98%',
      excerpt: 'Step-by-step guide to creating your first automated workflow using our AI-powered platform.'
    },
    {
      id: 'ai-workflows-1',
      title: 'Understanding AI Decision Trees',
      category: 'AI Workflows',
      readTime: '8 min read',
      views: '1.8k',
      helpful: '95%',
      excerpt: 'Learn how our AI makes decisions and how to optimize your workflows for better results.'
    },
    {
      id: 'integrations-1',
      title: 'Connecting to Salesforce',
      category: 'Integrations',
      readTime: '6 min read',
      views: '1.6k',
      helpful: '92%',
      excerpt: 'Complete guide to integrating your workflows with Salesforce CRM for seamless data flow.'
    },
    {
      id: 'troubleshooting-1',
      title: 'Workflow Not Triggering? Here\'s Why',
      category: 'Troubleshooting',
      readTime: '4 min read',
      views: '1.9k',
      helpful: '96%',
      excerpt: 'Common reasons why workflows might not trigger and how to fix them quickly.'
    }
  ];

  const faqs = [
    {
      icon: Phone,
=======
      description: "Speak directly with our technical experts",
      icon: Phone,
      responseTime: "< 15 min",
      availability: "24/7",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Detailed technical assistance via email",
      icon: Mail,
      responseTime: "< 4 hours",
      availability: "24/7",
      action: "Send Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Getting Started with AI Autonomous Systems",
      category: "Getting Started",
      readTime: "5 min read",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Setting Up Your First Quantum Neural Network",
      category: "AI Solutions",
      readTime: "8 min read",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Configuring SOC2 Compliance Automation",
      category: "Technical Support",
      readTime: "12 min read",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "5G Enterprise Network Setup Guide",
      category: "Technical Support",
      readTime: "10 min read",
      icon: Network,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "AI Research Assistant Best Practices",
      category: "AI Solutions",
      readTime: "6 min read",
      icon: Search,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Troubleshooting Common Issues",
      category: "Troubleshooting",
      readTime: "7 min read",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "Screen sharing and visual troubleshooting",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Scheduled",
      color: "from-orange-500 to-red-500"
=======
      id: 'faq-1',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you a secure link to reset your password. The link expires in 1 hour for security reasons.',
      category: 'account'
    },
    {
      id: 'faq-2',
      question: 'Can I export my workflow data?',
      answer: 'Yes, you can export your workflow data in multiple formats including CSV, JSON, and Excel. Go to your workflow dashboard, select the workflow, and click the export button. You can choose the date range and format for your export.',
      category: 'data'
    },
    {
      id: 'faq-3',
      question: 'How do I add team members to my account?',
      answer: 'To add team members, go to Settings > Team Management. Click "Invite Member" and enter their email address. They\'ll receive an invitation email with a secure link to join your team. You can assign different permission levels to each member.',
      category: 'team'
    },
    {
      id: 'faq-4',
      question: 'What happens if I exceed my monthly workflow limit?',
      answer: 'If you exceed your monthly workflow limit, you\'ll receive a notification. You can either upgrade your plan for more workflows or wait until the next billing cycle. Existing workflows continue to run normally.',
      category: 'billing'
    },
    {
      id: 'faq-5',
      question: 'How secure is my data?',
      answer: 'Your data is protected with enterprise-grade security including AES-256 encryption, SOC2 compliance, and regular security audits. We never share your data with third parties and all data transmission is encrypted using TLS 1.3.',
      category: 'security'
    },
    {
      id: 'faq-6',
      question: 'Can I schedule workflows to run at specific times?',
      answer: 'Yes, you can schedule workflows to run at specific times, on specific days, or based on custom intervals. Use the scheduling feature in the workflow editor to set up recurring or one-time schedules.',
      category: 'workflows'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Usually within 2 minutes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: '9 AM - 6 PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      availability: '24/7',
      responseTime: 'Varies',
      color: 'from-orange-500 to-red-500'
    }
  ];
=======
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  Settings,
  Shield,
  Brain,
  Cpu,
  Network
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'New to Zion Tech Group? Start here'
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'AI and machine learning services'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      description: 'Technical issues and troubleshooting'
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      icon: FileText,
      color: 'from-orange-500 to-yellow-500',
      description: 'Pricing, billing, and payment questions'
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Security features and compliance'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Network,
      color: 'from-indigo-500 to-purple-500',
      description: 'Third-party integrations and APIs'
=======
  Mail, 
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  Users,
  Zap,
  Shield,
  Brain,
  Building
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and onboarding resources',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started/welcome' },
        { title: 'Setting Up Your Account', path: '/help/getting-started/account-setup' },
        { title: 'First Steps with Our Platform', path: '/help/getting-started/first-steps' },
        { title: 'Platform Overview', path: '/help/getting-started/platform-overview' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      description: 'AI and machine learning platform guides',
      articles: [
        { title: 'AI Autonomous Systems Guide', path: '/help/ai-solutions/autonomous-systems' },
        { title: 'Setting Up AI Research Assistant', path: '/help/ai-solutions/research-assistant' },
        { title: 'Quantum Neural Networks', path: '/help/ai-solutions/quantum-neural' },
        { title: 'AI Business Intelligence', path: '/help/ai-solutions/business-intelligence' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance documentation',
      articles: [
        { title: 'Security Best Practices', path: '/help/cybersecurity/best-practices' },
        { title: 'SOC2 Compliance Guide', path: '/help/cybersecurity/soc2-compliance' },
        { title: 'Threat Detection Setup', path: '/help/cybersecurity/threat-detection' },
        { title: 'Access Control Management', path: '/help/cybersecurity/access-control' }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      icon: Building,
      description: 'Cloud and IT infrastructure guides',
      articles: [
        { title: 'Cloud Migration Guide', path: '/help/infrastructure/cloud-migration' },
        { title: '5G Network Setup', path: '/help/infrastructure/5g-setup' },
        { title: 'DevOps Automation', path: '/help/infrastructure/devops' },
        { title: 'Network Security', path: '/help/infrastructure/network-security' }
      ]
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group's AI solutions?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and provide a customized implementation plan. Our experts will guide you through the entire process from setup to optimization.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "What makes your AI solutions different from competitors?",
      answer: "Our AI solutions stand out through our proprietary quantum neural network technology, autonomous business operations capabilities, and industry-specific customization. We combine cutting-edge research with practical business applications, ensuring measurable ROI and long-term success for our clients.",
      category: "AI Solutions"
    },
    {
      id: 3,
      question: "How secure are your cybersecurity solutions?",
      answer: "Security is our top priority. We implement quantum-safe encryption, zero-trust architecture, and continuous threat monitoring. Our solutions are SOC2 compliant and regularly audited by third-party security experts. We also provide 24/7 security monitoring and incident response.",
      category: "Cybersecurity"
    },
    {
      id: 4,
      question: "What support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including 24/7 technical support, regular maintenance updates, performance optimization, and ongoing training for your team. Our success managers work closely with you to ensure continued success and ROI.",
      category: "Support"
    },
    {
      id: 5,
      question: "Can your solutions integrate with existing systems?",
      answer: "Yes! Our solutions are designed with open architecture and API-first approach, making integration seamless with your existing systems. We provide custom integration services and ensure minimal disruption to your current operations during implementation.",
      category: "Integration"
    },
    {
      id: 6,
      question: "What industries do you specialize in?",
      answer: "We serve a wide range of industries including healthcare, financial services, manufacturing, retail, government, and technology. Our solutions are tailored to meet industry-specific challenges and compliance requirements while maintaining flexibility for customization.",
      category: "Industries"
    }
  ];

  const filteredFAQs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500',
      available: true
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      icon: Video,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-500',
      available: true
    }
  ];

  const resources = [
    {
      title: 'Product Documentation',
      description: 'Comprehensive guides and API references',
      icon: FileText,
      link: '/docs',
      type: 'Documentation'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      type: 'Tutorials'
    },
    {
      title: 'Download Center',
      description: 'SDKs, tools, and resources',
      icon: Download,
      link: '/downloads',
      type: 'Downloads'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      link: '/community',
      type: 'Community'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group's AI services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best AI solutions for your business. Our team will guide you through the entire onboarding process.",
      category: 'getting-started'
    },
    {
      id: 2,
      question: "What AI services do you offer?",
      answer: "We offer a comprehensive range of AI services including AI autonomous systems, machine learning solutions, natural language processing, computer vision, predictive analytics, and custom AI development. Each service is tailored to meet your specific business requirements.",
      category: 'ai-services'
    },
    {
      id: 3,
      question: "How secure are your AI solutions?",
      answer: "Security is our top priority. All our AI solutions include enterprise-grade security features, SOC2 compliance, encryption at rest and in transit, and regular security audits. We follow industry best practices and comply with all relevant security standards.",
      category: 'security'
    },
    {
      id: 4,
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and flexible. We offer subscription-based models, project-based pricing, and custom enterprise solutions. Pricing depends on the scope of services, complexity, and duration. Contact us for a personalized quote.",
      category: 'billing'
    },
    {
      id: 5,
      question: "Do you provide technical support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team includes AI experts, engineers, and technical specialists. We offer multiple support channels including phone, email, chat, and dedicated support portals.",
      category: 'technical-support'
    },
    {
      id: 6,
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integrations with existing enterprise systems. Our team will assess your current infrastructure and design integration solutions that work with your existing tools and workflows.",
      category: 'integrations'
    },
    {
      id: 7,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government. Our solutions are adaptable and can be customized for any industry-specific requirements.",
      category: 'getting-started'
    },
    {
      id: 8,
      question: "How long does implementation take?",
      answer: "Implementation timelines vary depending on the complexity of the solution. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      category: 'technical-support'
    }
  ];

  const filteredFaqs = activeCategory 
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;

  const searchResults = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demos",
      link: "/tutorials",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "SDKs, tools, and sample code",
      link: "/downloads",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and developers",
      link: "/community",
      color: "from-orange-500 to-red-500"
    }
  ];

      id: 'getting-started',
      title: 'Getting Started',
=======
      icon: BookOpen,
      description: 'Essential information to begin using our services',
      articles: [
        {
          title: 'How to Set Up Your Account',
          description: 'Step-by-step guide to create and configure your Zion Tech Group account',
          readTime: '5 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'First Steps with AI Solutions',
          description: 'Quick start guide for implementing AI-powered solutions',
          readTime: '8 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Understanding Quantum Technology',
          description: 'Introduction to quantum computing and its applications',
          readTime: '12 min read',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Autonomous Systems',
      icon: MessageCircle,
      description: 'Support for AI-powered services and autonomous systems',
      articles: [
        {
          title: 'AI Autonomous Systems Setup',
          description: 'Complete setup guide for autonomous AI systems',
          readTime: '15 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Training Your AI Models',
          description: 'Best practices for training and optimizing AI models',
          readTime: '20 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'AI Research Assistant Usage',
          description: 'How to effectively use the AI research assistant',
          readTime: '10 min read',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: FileText,
      description: 'Support for quantum computing and neural networks',
      articles: [
        {
          title: 'Quantum Neural Network Basics',
          description: 'Understanding quantum neural network fundamentals',
          readTime: '18 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Quantum Computing Applications',
          description: 'Real-world applications and use cases',
          readTime: '15 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Quantum Security Implementation',
          description: 'Implementing quantum-safe security measures',
          readTime: '25 min read',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: CheckCircle,
      description: 'Security best practices and compliance guidance',
      articles: [
        {
          title: 'SOC2 Compliance Guide',
          description: 'Complete guide to SOC2 compliance automation',
          readTime: '30 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Security Best Practices',
          description: 'Essential security measures for your organization',
          readTime: '12 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Threat Detection Setup',
          description: 'Setting up advanced threat detection systems',
          readTime: '20 min read',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Users,
      description: 'Infrastructure setup and management support',
      articles: [
        {
          title: '5G Network Configuration',
          description: 'Setting up enterprise 5G network infrastructure',
          readTime: '25 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          readTime: '35 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'DevOps Automation Setup',
          description: 'Implementing automated DevOps processes',
          readTime: '20 min read',
          difficulty: 'Intermediate'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Quick Troubleshooting Guide',
      description: 'Common issues and their solutions',
      views: '2.5k',
      category: 'General'
    },
    {
      title: 'API Integration Examples',
      description: 'Code examples for integrating our services',
      views: '1.8k',
      category: 'Development'
    },
    {
      title: 'Performance Optimization Tips',
      description: 'Best practices for optimal system performance',
      views: '1.2k',
      category: 'Performance'
=======
    }
  ];

  const supportChannels = [
    {
      id: 7,
      question: "How do you ensure data privacy and compliance?",
      answer: "We implement comprehensive data protection measures including data encryption, access controls, audit logging, and compliance frameworks. Our solutions are designed to meet regulatory requirements across industries and jurisdictions.",
      category: 'security',
      tags: ['Data Privacy', 'Compliance', 'Encryption']
    }
  ];

  const filteredHelp = helpCategories.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFaq = (faqId: string) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(faqId)) {
      newExpanded.delete(faqId);
    } else {
      newExpanded.add(faqId);
    }
    setExpandedFaqs(newExpanded);
  };

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = popularArticles.filter(article => 
    selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get the support you need.
=======


      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions, learn how to use our platform, 
              and get support when you need it most.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-cyan-400 hover:to-blue-500 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              How Can We
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, get technical support, and access comprehensive 
              resources to make the most of our AI-powered solutions.
=======
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, get technical support, and learn how to make the most of Zion Tech Group's innovative solutions.
=======
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Find answers, get support, and learn how to make the most of our innovative solutions
=======
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: BookOpen,
      responseTime: "Instant",
      availability: "Always",
      action: "Browse Docs",
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, access helpful resources, and get the support you need 
              to make the most of Zion Tech Group's innovative solutions.
=======
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group.
            </p>
            {/* Search Bar */}
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
=======
                  placeholder="Search for help articles, tutorials, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm text-lg"
=======
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
=======
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
=======
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and references',
      icon: BookOpen,
      action: 'Browse Docs',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
=======
  const filteredCategories = Object.entries(helpCategories).filter(([key, category]) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Help Center</h1>
              <p className="text-xl text-zion-slate-light">Find answers to your questions and get the support you need</p>
            </div>
          </div>
          
          {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
  Mail,
  ArrowRight,
  ChevronDown,
  FileText,
  Video,
  Download,
  Users
} from 'lucide-react';

export default function HelpCenter() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      faqs: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
        },
        {
          question: 'What services do you offer for small businesses?',
          answer: 'We offer a comprehensive range of services including AI solutions, cybersecurity, cloud infrastructure, and custom software development tailored specifically for small and medium businesses.'
        },
        {
          question: 'How long does implementation typically take?',
          answer: 'Implementation timelines vary depending on the complexity of your project. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We\'ll provide a detailed timeline during our initial consultation.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: MessageCircle,
      faqs: [
        {
          question: 'How can I get technical support?',
          answer: 'We provide 24/7 technical support through multiple channels: phone, email, live chat, and our support portal. Premium customers also have access to dedicated support engineers.'
        },
        {
          question: 'What is your response time for support tickets?',
          answer: 'We prioritize support tickets based on severity. Critical issues are addressed within 1 hour, high priority within 4 hours, and standard issues within 24 hours during business days.'
        },
        {
          question: 'Do you provide remote support?',
          answer: 'Yes, we offer remote support for most technical issues. Our engineers can securely access your systems (with your permission) to diagnose and resolve problems quickly.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: FileText,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day satisfaction guarantee for most services. If you\'re not completely satisfied, we\'ll work to resolve the issue or provide a full refund.'
        },
        {
          question: 'Can I change my plan mid-contract?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we\'ll prorate any adjustments.'
        }
      ]
    }
  ];

  const helpResources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      icon: Video,
      link: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Download Center',
      description: 'Software, tools, and resources',
      icon: Download,
      link: '/downloads',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      link: '/community',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: '24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed inquiries',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help online',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Business hours',
      color: 'from-purple-500 to-pink-500'
=======
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 50 },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket, count: 12 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 15 },
    { id: 'technical', name: 'Technical Support', icon: Settings, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: CreditCard, count: 8 }
  ];

  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.",
      category: "getting-started",
      tags: ["onboarding", "consultation", "setup"]
    },
    {
      question: "What AI solutions do you offer for enterprise businesses?",
      answer: "We offer comprehensive AI solutions including autonomous business operations, AI-powered asset management, quantum neural networks, and research assistants. Each solution is tailored to your specific industry and business needs.",
      category: "ai-solutions",
      tags: ["AI", "enterprise", "automation"]
    },
    {
      question: "How secure are your solutions?",
      answer: "Security is our top priority. All our solutions include bank-grade encryption, SOC2 compliance automation, and advanced threat detection. We maintain 99.9% security uptime across all deployments.",
      category: "technical",
      tags: ["security", "compliance", "encryption"]
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on solution complexity and scope. Simple solutions can be deployed in 2-4 weeks, while complex enterprise implementations typically take 8-12 weeks. We'll provide a detailed timeline during consultation.",
      category: "getting-started",
      tags: ["implementation", "timeline", "deployment"]
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We provide 24/7 support, regular maintenance updates, and continuous optimization. Our team monitors your systems proactively and ensures optimal performance at all times.",
      category: "technical",
      tags: ["support", "maintenance", "24/7"]
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve multiple industries including manufacturing, healthcare, financial services, retail, technology, and energy. Our solutions are designed to address industry-specific challenges and compliance requirements.",
      category: "ai-solutions",
      tags: ["industries", "specialization", "expertise"]
    }
  ];

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our AI-powered support team",
      icon: MessageCircle,
      action: "Start Chat",
      available: "24/7"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message and get a response within 4 hours",
      icon: MailIcon,
      action: "Send Email",
      available: "Business Hours"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      action: "Call Now",
      available: "9 AM - 6 PM EST"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and technical documentation",
      icon: Book,
      action: "Browse Docs",
      available: "Always Available"
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
=======
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, BookOpen, Video, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner and fill out the registration form with your email, password, and basic information. You'll receive a verification email to activate your account."
    },
    {
      question: "How do I post a job or service?",
      answer: "After logging in, go to the 'Post Job' or 'Publish' section. Fill out the required details including title, description, budget, and requirements. Submit for review and approval."
    },
    {
      question: "How does the AI matching work?",
      answer: "Our AI analyzes your requirements and matches you with the best-suited talent or services based on skills, experience, availability, and past performance. Use the AI Matcher tool for optimal results."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform with escrow protection for your safety."
    },
    {
      question: "How do I resolve disputes?",
      answer: "If you encounter issues, first try to resolve them directly with the other party. If that's not possible, contact our support team who will mediate and help find a fair resolution."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal and financial information. We never share your data with third parties without your consent."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      icon: BookOpen,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/10",
      href: "/help/getting-started"
    },
    {
      title: "Account Management",
      description: "Manage your profile and settings",
      icon: Users,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/10",
      href: "/help/account"
    },
    {
      title: "Marketplace Guide",
      description: "How to buy and sell on our platform",
      icon: FileText,
      color: "text-zion-green",
      bgColor: "bg-zion-green/10",
      href: "/help/marketplace"
    },
    {
      title: "AI Tools",
      description: "Maximize your use of our AI features",
      icon: Video,
      color: "text-zion-orange",
      bgColor: "bg-zion-orange/10",
      href: "/help/ai-tools"
    }
  ];

  return (
    <>
      <SEO
        title="Help Center | Zion Tech Group"
        description="Get help and support for using the Zion Tech Group platform. Find answers to common questions and learn how to use our features."
        canonical="https://ziontechgroup.com/help"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions and learn how to make the most of our platform
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

    <>
      <SEOHead 
        customData={{
          title: "Help Center - Zion Tech Group",
          description: "Get help and support for all Zion Tech Group services. Find answers to frequently asked questions, access documentation, and contact our support team.",
          keywords: ["help center", "support", "FAQ", "documentation", "contact support", "customer service", "technical support"],
          type: "website",
          url: "https://ziontechgroup.com/help"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Get the help you need with our comprehensive support resources, documentation, and expert assistance.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>
            ))}
=======
      {/* Support Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{option.title}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{option.description}</p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
=======
  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's platform. Find answers to common questions, tutorials, and contact information." />
        <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/help-center" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-blue-light/30 rounded-xl text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div key={key} className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      {expandedCategories.includes(key) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedCategories.includes(key) && (
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Browse by Category</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the help you need organized by topic and category
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 border-cyan-500 text-white'
                : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Browse Articles
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Popular Help Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and helpful articles from our knowledge base
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cyan-400 font-medium">{article.category}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {article.views}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {article.helpful} found this helpful
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Quick answers to the most common questions
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                {expandedFaqs.has(faq.id) ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedFaqs.has(faq.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Support Channels */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get help when you need it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-300">
                      <span className="font-medium">Availability:</span> {channel.availability}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-medium">Response:</span> {channel.responseTime}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200">
                    Get Help
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel) => (
              <div
                key={channel.title}
                className="text-center p-8 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-400 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-500">Available: {channel.availability}</p>
                </div>
              </div>
=======
=======
=======
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Help Center
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions and get the support you need
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
=======
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels Section */}
=======

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">500+</span> Help Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">24/7</span> Support
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">99%</span> Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
      {/* Support Channels */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                {channel.details && (
                  <p className="text-cyan-400 font-mono text-sm mb-4">{channel.details}</p>
                )}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  {channel.action}
                </button>
              </div>
            ))}
=======
        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find help organized by topic to quickly locate the information you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-center ${
                    activeCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/70'
                  }`}
                >
                  <div className="flex justify-center mb-3">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} articles</p>
                </button>
              ))}
            </div>
          </div>
        </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
=======
      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore more ways to learn and get the most out of our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
            <p className="text-gray-400 mb-6">Step-by-step video guides for all major features</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              Watch Videos
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">API Documentation</h3>
            <p className="text-gray-400 mb-6">Complete API reference and integration guides</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              View Docs
            </button>
          </div>
          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-300">{article.description}</p>
=======
=======
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-blue-light/10"
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
      {/* Quick Support Channels */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get Help Fast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{channel.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{channel.description}</p>
                <button className={`px-6 py-2 bg-gradient-to-r ${channel.color} text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300`}>
                  {channel.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Help Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {helpCategories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div key={category.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300 rounded-t-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4 space-y-3">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group"
                        >
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {article.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-cyan-400 transition-colors duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Articles */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{article.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            ))}
=======
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300">Multiple ways to get the help you need, when you need it</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{channel.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400">{channel.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Available:</span>
                    <span className="text-green-400">{channel.availability}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  {channel.action}
                </button>
              </motion.div>
            ))}
=======
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Community Forum</h3>
            <p className="text-gray-400 mb-6">Connect with other users and share solutions</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              Join Community
            </button>
          </div>
        </div>
      </div>


          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaqs.has(index) ? (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {expandedFaqs.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
=======
        {/* Categories Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the help you need by exploring our organized categories 
                of support articles and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                      isActive
                        ? 'bg-blue-500/20 border border-blue-500/50'
                        : 'bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/50'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      isActive ? 'from-blue-500 to-cyan-500' : 'from-gray-600 to-gray-700'
                    } rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className={`text-sm font-semibold mb-2 ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`text-xs ${
                      isActive ? 'text-blue-300' : 'text-gray-500'
                    }`}>
                      {category.count} articles
                    </p>
                  </button>
                );
              })}
            </div>
=======
      {/* Categories */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find the help you need by browsing our organized categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:transform hover:scale-105 ${
                  activeCategory === category.id ? 'border-cyan-500/50 bg-cyan-500/10' : ''
                }`}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-4`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

                          className="block p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-colors"
                        >
                          <h4 className="text-white font-medium mb-1">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.title} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200">
                        <span className="font-medium text-white">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" />
                      </summary>
                      <div className="p-4 bg-gray-700/20 rounded-lg mt-2">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our expert support team is here to help you succeed.
=======
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed with our technologies.
=======
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is here to help you succeed. Get in touch for personalized assistance.
=======
      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            
            return (
              <div key={faq.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setExpandedFAQ(isExpanded ? null : faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300 rounded-t-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-400 ml-4" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 ml-4" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Resources */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link
                key={index}
                to={resource.link}
                className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {resource.type}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Contact Support */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed. 
            Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Find answers to common questions, access helpful resources, and get the support you need. 
              Our team is here to help you succeed with our technology solutions.
            </motion.p>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Contact Support Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
              to="/services"
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
=======
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our support team is here to help you 
            with any questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              <Phone className="w-5 h-5" />
              <span>Call Support</span>
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </button>
=======
      {/* Popular Articles */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
=======
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us for 
              personalized assistance and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </motion.div>
=======
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6">
              Our expert support team is here to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Support CTA */}
=======
      {/* Help Categories */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredHelp.map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => toggleCategory(item.id.toString())}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      <div className="flex gap-2 mt-1">
                        {item.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {expandedCategories.includes(item.id.toString()) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <link.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {link.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        { title: 'How to create an account', path: '/help/account-creation' },
        { title: 'First steps with Zion Tech Group', path: '/help/first-steps' },
        { title: 'Understanding our services', path: '/help/services-overview' },
        { title: 'Setting up your profile', path: '/help/profile-setup' }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: '💼',
      items: [
        { title: 'AI & Machine Learning Services', path: '/help/ai-services' },
        { title: 'Cybersecurity Solutions', path: '/help/cybersecurity' },
        { title: 'Cloud & Infrastructure', path: '/help/cloud-infrastructure' },
        { title: 'Digital Transformation', path: '/help/digital-transformation' }
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the top right corner and fill out the registration form with your email and password.'
        },
        {
          question: 'How do I post a job or service?',
          answer: 'After logging in, go to your dashboard and click "Post Job" or "Create Service" to get started.'
        },
        {
          question: 'What information do I need to create a profile?',
          answer: 'You\'ll need basic information like your name, skills, experience, and optionally a profile picture and portfolio.'
        }
      ]
    },
    {
      title: 'Marketplace',
      icon: Settings,
      items: [
        {
          question: 'How do I find talent or services?',
          answer: 'Use the search bar or browse categories to find what you\'re looking for. You can also use our AI-powered matching system.'
        },
        {
          question: 'How do payments work?',
          answer: 'We support secure payments through Stripe. Payments are held in escrow until the work is completed and approved.'
        },
        {
          question: 'What if I\'m not satisfied with the work?',
          answer: 'We have a dispute resolution process. Contact our support team if you need help resolving an issue.'
        }
      ]
    },
    {
      title: 'Account & Billing',
      icon: Users,
      items: [
        {
          question: 'How do I update my profile?',
          answer: 'Go to your dashboard and click on "Edit Profile" to make changes to your information.'
        },
        {
          question: 'How do I change my password?',
          answer: 'Go to Account Settings and click on "Change Password" to update your password.'
        },
        {
          question: 'What are the fees?',
          answer: 'We charge a small percentage fee on successful transactions. There are no upfront costs to use our platform.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      items: [
        {
          question: 'The website is not loading properly',
          answer: 'Try refreshing the page, clearing your browser cache, or using a different browser. If the issue persists, contact support.'
        },
        {
          question: 'I can\'t upload files',
          answer: 'Check that your file size is under 10MB and that you\'re using a supported file format (PDF, DOC, JPG, PNG).'
        },
        {
          question: 'How do I contact support?',
          answer: 'You can reach us through the contact form, email us at support@ziontechgroup.com, or call us at +1 (555) 123-4567.'
        }
      ]
    }
  ];

          </div>
        </div>
      </div>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
=======
}
=======
}
=======
}
=======
    </div>
  );
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                  <span className="text-sm">Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@ziontechgroup.com"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-lg inline-block mb-3">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Comprehensive guides and technical documentation</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-lg inline-block mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with other users and experts</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-orange-100 rounded-lg inline-block mb-3">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">Latest updates and industry insights</p>
            </div>
          </div>
        </div>
=======
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help 
            you get the most out of our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105">
              Contact Support
              <MessageCircle className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Help Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                  <Link
                    to={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
=======
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 bg-zion-blue-light/10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Help Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-zion-blue-light/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                  <Link
                    to={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-zion-slate-light text-sm mb-4">Get instant help from our support team</p>
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Send us a detailed message</p>
                <Link
                  to="/contact"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Send Email
                </Link>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Call us directly for urgent issues</p>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
=======
          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={category.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/api-docs">View API Documentation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Browse Tutorials</Link>
              </Button>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-zion-cyan">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Still Need Help?</h3>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="space-x-4">
                <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/community">Ask Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
=======
};

export default HelpCenter;
=======
// CreditCard icon component since it's not in lucide-react
function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
=======
  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our support team' },
    { title: 'API Documentation', href: '/api-docs', icon: FileText, description: 'Developer resources and API guides' },
    { title: 'Community Forum', href: '/community', icon: Users, description: 'Connect with other users' },
    { title: 'Blog & Updates', href: '/blog', icon: FileText, description: 'Latest news and platform updates' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center | Zion Tech Group" 
        description="Get help and support for using the Zion Tech Group platform. Find answers to frequently asked questions and contact our support team."
        keywords="help, support, FAQ, customer service, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to make the most of our platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.title} to={link.href}>
                <Card className="h-full hover:bg-zion-blue-dark/50 transition-colors cursor-pointer border-zion-blue-light">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-white">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Still Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </div>
              <p className="text-zion-slate-light">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
=======
}
