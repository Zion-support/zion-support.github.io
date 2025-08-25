<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { 
  HelpCircle, 
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
<<<<<<< HEAD
<<<<<<< HEAD
  Mail, 
  Clock, 
  CheckCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Video,
  Download,
  ExternalLink,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Brain,
  Cpu,
  Rocket
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
  Mail, 
  FileText, 
  Video, 
  Users, 
  Settings, 
  Shield, 
<<<<<<< HEAD
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Download,
  Play,
  Star,
  Clock,
  CheckCircle
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
import { Helmet } from 'react-helmet-async';
=======
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone,
  Mail,
  Clock,
<<<<<<< HEAD
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  FileText,
  Play,
  Download,
  ExternalLink,
  Shield
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
} from 'lucide-react';
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([]);
=======
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, FileText, Video, Users, Phone, Mail, Clock, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Book, MessageCircle, Phone, Mail, FileText, Video, Download, ChevronDown, ChevronRight, Star, Clock, Users, HelpCircle, Zap, Shield, Settings, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
=======
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
<<<<<<< HEAD
      icon: Zap,
      description: 'Learn the basics and get up and running quickly',
      articles: [
        { title: 'Account Setup Guide', views: '2.3k', time: '5 min read' },
        { title: 'First Steps with AI Solutions', views: '1.8k', time: '8 min read' },
        { title: 'Understanding Our Services', views: '3.1k', time: '6 min read' },
        { title: 'Initial Consultation Process', views: '1.5k', time: '4 min read' }
=======
      icon: Rocket,
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started', description: 'Learn the basics of our platform' },
        { title: 'Creating Your First Project', path: '/help/first-project', description: 'Step-by-step guide to get started' },
        { title: 'Account Setup & Verification', path: '/help/account-setup', description: 'Complete your profile setup' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
<<<<<<< HEAD
      icon: Globe,
      description: 'Everything about our AI and machine learning services',
      articles: [
        { title: 'AI Implementation Best Practices', views: '2.8k', time: '12 min read' },
        { title: 'Machine Learning Model Training', views: '1.9k', time: '15 min read' },
        { title: 'Data Preparation Guidelines', views: '2.2k', time: '10 min read' },
        { title: 'AI Ethics and Compliance', views: '1.4k', time: '8 min read' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security protocols, compliance, and protection measures',
      articles: [
        { title: 'Security Assessment Process', views: '3.5k', time: '9 min read' },
        { title: 'Compliance Framework Setup', views: '2.1k', time: '11 min read' },
        { title: 'Incident Response Procedures', views: '1.7k', time: '7 min read' },
        { title: 'Zero Trust Architecture Guide', views: '2.9k', time: '14 min read' }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical assistance and troubleshooting guides',
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
    {
      id: 'cloud-services',
      title: 'Cloud & DevOps',
      icon: Cloud,
      articles: [
        { title: 'Cloud Infrastructure Setup', path: '/help/cloud-setup', description: 'Deploy your cloud infrastructure' },
        { title: 'DevOps Best Practices', path: '/help/devops-practices', description: 'Optimize your development workflow' },
        { title: 'Security & Compliance', path: '/help/security-compliance', description: 'Ensure your systems are secure' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
      ]
    }
  ];

<<<<<<< HEAD
  const quickHelp = [
    {
      title: 'Contact Support',
      description: 'Get direct help from our technical team',
      icon: MessageCircle,
      action: 'Chat Now',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a free consultation with our experts',
      icon: Phone,
      action: 'Book Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Documentation',
      description: 'Access comprehensive technical docs',
      icon: Book,
      action: 'Browse Docs',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      action: 'Watch Now',
      color: 'from-orange-500 to-red-500'
    }
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-53a4

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
<<<<<<< HEAD
<<<<<<< HEAD

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'New to Zion Tech Group? Start here to learn the basics.',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/docs/getting-started/welcome' },
        { title: 'Setting Up Your Account', path: '/docs/getting-started/setup' },
        { title: 'First Steps with AI Services', path: '/docs/getting-started/first-steps' },
        { title: 'Platform Overview', path: '/docs/getting-started/platform-overview' }
      ]
=======

  const helpCategories = [
    {
<<<<<<< HEAD
      id: 1,
      question: "What AI solutions does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions including machine learning platforms, natural language processing, computer vision, predictive analytics, and autonomous systems. Our AI solutions are tailored for enterprise needs and can be customized for specific industry requirements.",
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Enterprise']
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
    },
    {
      id: 'ai-services',
      title: 'AI & Autonomous Services',
      icon: Brain,
      description: 'Learn how to use our AI-powered solutions effectively.',
      articles: [
        { title: 'AI Autonomous Systems Guide', path: '/docs/ai-services/autonomous-systems' },
        { title: 'AI Business Intelligence Setup', path: '/docs/ai-services/business-intelligence' },
        { title: 'AI Marketing Automation', path: '/docs/ai-services/marketing-automation' },
        { title: 'AI Workflow Automation', path: '/docs/ai-services/workflow-automation' }
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: Cpu,
      description: 'Understanding and implementing quantum computing solutions.',
      articles: [
        { title: 'Quantum Computing Basics', path: '/docs/quantum/basics' },
        { title: 'Quantum Neural Networks', path: '/docs/quantum/neural-networks' },
        { title: 'Quantum Security Implementation', path: '/docs/quantum/security' },
        { title: 'Quantum Cloud Infrastructure', path: '/docs/quantum/cloud' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Security best practices and compliance requirements.',
      articles: [
        { title: 'Security Best Practices', path: '/docs/security/best-practices' },
        { title: 'SOC2 Compliance Guide', path: '/docs/security/soc2-compliance' },
        { title: 'Threat Detection & Response', path: '/docs/security/threat-detection' },
        { title: 'Data Protection & Privacy', path: '/docs/security/data-protection' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Zap,
      description: 'Cloud deployment and infrastructure management.',
      articles: [
        { title: 'Cloud Migration Guide', path: '/docs/cloud/migration' },
        { title: 'DevOps Best Practices', path: '/docs/cloud/devops' },
        { title: 'Infrastructure Scaling', path: '/docs/cloud/scaling' },
        { title: 'Performance Optimization', path: '/docs/cloud/performance' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: Settings,
      description: 'Common issues and their solutions.',
      articles: [
        { title: 'Common Error Codes', path: '/docs/troubleshooting/error-codes' },
        { title: 'Performance Issues', path: '/docs/troubleshooting/performance' },
        { title: 'Integration Problems', path: '/docs/troubleshooting/integration' },
        { title: 'API Troubleshooting', path: '/docs/troubleshooting/api' }
      ]
    }
  ];
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-b812

  const helpCategories = [
    {
<<<<<<< HEAD
      id: 'faq-1',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business. Our team will guide you through the entire setup process.'
    },
    {
<<<<<<< HEAD
      id: 'faq-2',
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including autonomous business systems, AI-powered business intelligence, marketing automation, workflow automation, research assistance, and more. Our AI solutions are designed to work autonomously while providing human oversight capabilities.'
    },
    {
      id: 'faq-3',
      question: 'How secure are your quantum technology solutions?',
      answer: 'Our quantum technology solutions implement the highest security standards available. We use quantum-resistant encryption algorithms and follow industry best practices for data protection. All solutions undergo rigorous security testing and compliance verification.'
    },
    {
      id: 'faq-4',
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary depending on the complexity of your requirements. Simple integrations can be completed in 2-4 weeks, while complex enterprise solutions typically take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      id: 'faq-5',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions. This includes 24/7 monitoring, regular updates, security patches, and technical support. We also offer training and optimization services to ensure you get maximum value from your investment.'
    },
    {
      id: 'faq-6',
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing enterprise systems. Our solutions are built with open APIs and standard protocols, making integration seamless. We\'ll work with your IT team to ensure smooth integration and minimal disruption to your operations.'
    },
    {
      id: 'faq-7',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, government, and more. Our solutions are designed to be industry-agnostic while providing industry-specific optimizations and compliance features.'
    },
    {
      id: 'faq-8',
      question: 'How do you ensure data privacy and compliance?',
      answer: 'We maintain strict data privacy standards and comply with all major regulations including GDPR, HIPAA, SOC2, and industry-specific requirements. Our solutions include built-in compliance features and we provide regular audits and compliance reports.'
=======
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
        'Phone Support',
        'Email Support'
      ]
    }
=======
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Play, count: 12 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 15 },
    { id: 'technical', name: 'Technical Support', icon: Code, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: FileText, count: 8 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Settings, count: 10 }
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
  ];

  const popularArticles = [
    {
<<<<<<< HEAD
      question: "How do I get started with Zion Tech Group's AI services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best AI solutions for your business. Our team will guide you through the entire onboarding process."
    },
    {
      question: "What makes your quantum technology different from traditional solutions?",
      answer: "Our quantum technology leverages the principles of quantum mechanics to provide unprecedented computational power and security. Unlike traditional solutions, our quantum neural networks can process complex data patterns simultaneously, enabling breakthroughs in AI, cryptography, and scientific research that were previously impossible."
    },
    {
      question: "How secure are your cybersecurity solutions?",
      answer: "Our cybersecurity solutions are built with multiple layers of protection, including quantum-resistant encryption, AI-powered threat detection, and real-time monitoring. We maintain SOC2 Type II compliance and regularly update our security protocols to stay ahead of emerging threats."
    },
    {
      question: "Can you help with existing IT infrastructure upgrades?",
      answer: "Absolutely! We specialize in modernizing existing IT infrastructure while minimizing disruption to your business operations. Our team can assess your current setup, plan the migration strategy, and implement upgrades with zero downtime."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including 24/7 monitoring, regular maintenance, performance optimization, and dedicated account management. Our support team is always available to help with any questions or issues you may have."
    },
    {
      question: "Do you offer training for our team on new technologies?",
      answer: "Yes! We provide comprehensive training programs for your team to ensure they can effectively use and maintain the new technologies. This includes hands-on workshops, documentation, video tutorials, and ongoing support."
    }
  ];

  const popularArticles = [
    {
      title: "AI Business Intelligence Implementation Guide",
      category: "AI Services",
      readTime: "8 min read",
      views: "2.4k",
      rating: 4.9
    },
    {
      title: "Quantum-Safe Security Best Practices",
      category: "Cybersecurity",
      readTime: "12 min read",
      views: "1.8k",
      rating: 4.8
    },
    {
      title: "5G Enterprise Network Setup",
      category: "Infrastructure",
      readTime: "15 min read",
      views: "1.5k",
      rating: 4.7
    },
    {
      title: "SOC2 Compliance Checklist",
      category: "Cybersecurity",
      readTime: "10 min read",
      views: "2.1k",
      rating: 4.9
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
    }
=======
  const popularArticles = [
    { title: 'How to Set Up AI Business Intelligence', path: '/help/setup-ai-bi', category: 'AI Solutions' },
    { title: 'Cloud Infrastructure Best Practices', path: '/help/cloud-best-practices', category: 'Cloud & DevOps' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/security-checklist', category: 'Cybersecurity' },
    { title: 'Getting Started with Quantum Computing', path: '/help/quantum-getting-started', category: 'AI Solutions' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
  ];

  const supportChannels = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true,
      responseTime: 'Instant'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and get a response within 4 hours',
      icon: Mail,
      action: 'Send Email',
      available: true,
      responseTime: '4 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      action: 'Call Now',
      available: true,
      responseTime: 'Immediate'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      action: 'Browse Docs',
      available: true,
      responseTime: 'Always available'
    }
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
>>>>>>> origin/main
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
      ]
<<<<<<< HEAD
    }
  ];

<<<<<<< HEAD
  const popularArticles = [
    {
      title: "How to Set Up AI Autonomous Systems",
      description: "Complete guide to configuring and deploying AI autonomous systems",
      views: "2.5k",
      category: "AI Solutions"
    },
    {
      title: "SOC2 Compliance Automation Setup",
      description: "Step-by-step guide to implementing SOC2 compliance automation",
      views: "1.8k",
      category: "Security & Compliance"
    },
    {
      title: "5G Enterprise Solutions Configuration",
      description: "Configure and optimize 5G enterprise solutions for your business",
      views: "1.2k",
      category: "Services & Features"
    },
    {
      title: "Troubleshooting Common Integration Issues",
      description: "Resolve common problems when integrating our services",
      views: "950",
      category: "Troubleshooting"
    }
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      action: "Call Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Tutorials",
      description: "Learn with step-by-step video guides",
      icon: Video,
      action: "Watch Videos",
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86

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
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
      color: "from-orange-500 to-red-500"
    }
  ];

<<<<<<< HEAD
  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      id: 'getting-started',
      title: 'Getting Started',
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
>>>>>>> origin/main
    }
  ];

  const supportChannels = [
    {
<<<<<<< HEAD
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 min',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions to our experts',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demos',
      icon: Video,
      availability: '24/7',
      responseTime: 'Instant',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
=======
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
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
  );
>>>>>>> origin/cursor/website-audit-and-enhancement-b812

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to your questions, access comprehensive documentation, and get the support you need.
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get the support you need.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======


  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI-powered solutions. Find documentation, tutorials, troubleshooting guides, and connect with our support team." />
        <meta name="keywords" content="help center, support, documentation, tutorials, troubleshooting, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-white" />
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
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
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
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
=======
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
                  placeholder="Search for help articles, tutorials, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm text-lg"
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
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
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            </div>
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Find answers to your questions, get technical support, and access helpful resources 
            to make the most of our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Quick Help Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Quick Help Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpResources.map((resource) => (
              <div
                key={resource.title}
                className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group-hover:translate-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
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
        </section>

<<<<<<< HEAD
      {/* Popular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most frequently viewed help articles and guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {article.views}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                <Link
                  to="#"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse help articles organized by category to find what you need quickly.
            </p>
          </div>
          
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  {expandedCategory === category.title ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedCategory === category.title && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {category.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          to={article.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                        >
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-gray-300 hover:text-white transition-colors duration-300">
                            {article.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access additional learning materials and resources to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
              <p className="text-gray-300 mb-6">Comprehensive technical documentation and API references.</p>
              <Link
                to="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                View Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <Video className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
              <p className="text-gray-300 mb-6">Step-by-step video guides and tutorials for all features.</p>
              <Link
                to="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Watch Videos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <Download className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Downloads</h3>
              <p className="text-gray-300 mb-6">Download SDKs, tools, and sample code for development.</p>
              <Link
                to="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Download Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && searchResults.length > 0 && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
            <div className="space-y-4">
              {searchResults.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
          </div>
        </section>
      )}

<<<<<<< HEAD
      {/* Support Channels */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
=======
      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <channel.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {channel.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {channel.description}
                </p>
                <div className="text-sm text-cyan-400 mb-4">
                  Response time: {channel.responseTime}
                </div>
                <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  {channel.action}
                </button>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
=======
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
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
<<<<<<< HEAD
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
            />
=======
  const supportChannels = [
    {
=======
>>>>>>> origin/main
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      action: "Start Chat",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: PhoneIcon,
      action: "Call Now",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: EnvelopeIcon,
      action: "Send Email",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive guides",
      icon: BookOpenIcon,
      action: "View Docs",
      color: "from-orange-500 to-red-600"
    }
  ];

  const resources = [
    {
      title: "User Guides",
      description: "Step-by-step instructions for all our services",
      icon: BookOpenIcon,
      count: "50+"
    },
    {
      title: "Video Tutorials",
      description: "Visual guides and demonstrations",
      icon: VideoCameraIcon,
      count: "100+"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      icon: DocumentTextIcon,
      count: "25+"
    },
    {
      title: "Training Materials",
      description: "Educational resources and courses",
      icon: AcademicCapIcon,
      count: "30+"
=======
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      action: "Start Chat",
      available: true
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      action: "Call Now",
      available: true,
      details: "+1 302 464 0950"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      color: "from-purple-500 to-pink-500",
      action: "Send Email",
      available: true,
      details: "kleber@ziontechgroup.com"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
      action: "Browse Docs",
      available: true
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => article.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to frequently asked questions, access documentation, and connect with our support team." />
        <meta name="keywords" content="help center, support, FAQ, documentation, customer service, technical support" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, access comprehensive documentation, 
              and get the support you need to succeed with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Search Help
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Support
              </button>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, learn about our services, and get the support you need 
              to succeed with Zion Tech Group's cutting-edge technologies.
            </p>
            
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
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
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
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Support Channels */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get Help Through Multiple Channels
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-cyan-400">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-green-400">{channel.responseTime}</span>
                  </div>
=======
      {/* Support Channels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from multiple support channels to get the help you need, 
              when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <button className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300`}>
                  {channel.action}
                </button>
              </motion.div>
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
          </div>
        </section>

<<<<<<< HEAD
      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse Help by Category
            </h2>
            <p className="text-xl text-gray-300">
              Find organized help content for all our services and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-gray-800/50 rounded-xl border border-gray-700 p-6 cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/70 ${
                  activeCategory === category.id ? 'border-cyan-500/50 bg-gray-800/70' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.articles.map((article, index) => (
                    <li key={index} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-300">
              Most viewed and highest-rated help content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/50">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {article.rating}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {article.views} views
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Read Article
                </button>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our services, 
              support, and solutions.
=======
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>

      {/* Help Categories */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Browse Help Categories
          </motion.h2>
          
          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
<<<<<<< HEAD
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategories.includes(category.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedCategories.includes(category.id) && (
                  <motion.div
                    className="border-t border-gray-700/50 p-6 bg-gray-700/20"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.articles.map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer"
                        >
                          <h4 className="font-semibold text-white mb-2">{article.title}</h4>
                          <p className="text-gray-400 text-sm mb-3">{article.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{article.readTime}</span>
                            <span className={`px-2 py-1 rounded ${
                              article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                              article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {article.difficulty}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
=======
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{resource.count}</div>
              </motion.div>
>>>>>>> origin/main
=======
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                <button className={`w-full py-2 px-4 bg-gradient-to-r ${channel.color} text-white font-medium rounded-lg transition-all duration-300 hover:scale-105`}>
                  {channel.action}
                </button>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            ))}
          </div>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Help Categories
          </h2>
          <div className="space-y-4">
            {helpCategories.map((category) => (
              <div key={category.id} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <category.icon className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.description}
=======
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
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Browse by Category
          </h2>
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-gray-800/30 rounded-lg border border-gray-700">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <div className="flex items-center">
                    <category.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {category.articles.length} articles available
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
                      </p>
                    </div>
                  </div>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedCategories.includes(category.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="pt-4 space-y-3">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.path}
<<<<<<< HEAD
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                        >
                          <FileText className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                          <span className="text-gray-300 group-hover:text-white">
                            {article.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 ml-auto" />
                        </Link>
                      ))}
                    </div>
=======

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
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
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
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
          </div>
        </section>

<<<<<<< HEAD
      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQs.includes(faq.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQs.includes(faq.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
=======
                          className="block p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-colors"
                        >
                          <h4 className="text-white font-medium mb-1">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
                        </Link>
                      ))}
                    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
                  </div>
                )}
              </div>
            ))}
          </div>
<<<<<<< HEAD
          
          {filteredFAQs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords or browse our help categories above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Video Tutorials
              </h3>
              <p className="text-gray-400 mb-4">
                Step-by-step video guides for all our services
              </p>
              <Link
                to="/tutorials"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Watch Tutorials
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Downloads
              </h3>
              <p className="text-gray-400 mb-4">
                SDKs, APIs, and integration tools
              </p>
              <Link
                to="/downloads"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Download Resources
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Knowledge Base
              </h3>
              <p className="text-gray-400 mb-4">
                Comprehensive documentation and guides
              </p>
              <Link
                to="/docs"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Browse Knowledge Base
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our expert team is here to help you succeed with our technology solutions.
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our expert support team is here to help you succeed.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed with our technologies.
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
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
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support Team
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
<<<<<<< HEAD
            <Link
<<<<<<< HEAD
              to="/docs"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
=======
              to="/services"
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
=======
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Our Services
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
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
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
      {/* Popular Articles */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Popular Help Articles
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.views} views</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
          </div>
=======
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
>>>>>>> origin/main
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
                
                {expandedCategories.includes(item.id.toString()) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-gray-700/50"
                  >
                    <p className="text-gray-300 mt-4 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                Schedule a Call
=======
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive documentation, tutorials, and training materials 
              to maximize the value of our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{resource.count}</div>
              </motion.div>
            ))}
=======
      {/* FAQs */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              {activeCategory ? `Showing FAQs for: ${categories.find(c => c.id === activeCategory)?.title}` : 'All FAQs'}
            </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                <p className="text-gray-400 text-xs">24/7 Available</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-xs">Response within 2 hours</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <MessageCircle className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm">Available on website</p>
                <p className="text-gray-400 text-xs">Instant support</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
              </button>
=======
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI integrations typically take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'What cybersecurity frameworks do you support?',
      answer: 'We support major frameworks including NIST, ISO 27001, SOC 2, HIPAA, GDPR, and industry-specific compliance requirements. Our team will assess your needs and recommend the most appropriate framework.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, maintenance, and dedicated account management. Support levels can be customized based on your requirements.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure. We conduct thorough compatibility assessments and create custom integration strategies for your environment.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve diverse industries including healthcare, financial services, manufacturing, retail, government, and technology. Our solutions are customized to meet industry-specific requirements and compliance standards.'
    }
  ];

  const resources = [
    {
      title: 'Implementation Checklist',
      type: 'PDF',
      size: '2.3 MB',
      downloads: '1.2k'
    },
    {
      title: 'Security Best Practices Guide',
      type: 'PDF',
      size: '1.8 MB',
      downloads: '956'
    },
    {
      title: 'API Integration Templates',
      type: 'ZIP',
      size: '4.1 MB',
      downloads: '743'
    },
    {
      title: 'Compliance Assessment Tool',
      type: 'XLSX',
      size: '892 KB',
      downloads: '621'
    }
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <SEO 
        title="Help Center | Support & Documentation - Zion Tech Group"
        description="Find answers, guides, and support for Zion Tech Group services. Access documentation, tutorials, FAQs, and contact our expert support team."
        keywords="help center, support, documentation, tutorials, FAQ, technical support, customer service"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Support & Documentation
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Help
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Center
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Find answers, access documentation, and get the support you need to succeed with our technology solutions.
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto relative"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Help Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Help
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Get immediate assistance with common tasks and questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickHelp.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group cursor-pointer"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                      {item.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Knowledge Base Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Knowledge Base
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Browse our comprehensive collection of guides and documentation
              </p>
            </motion.div>

            <div className="space-y-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <button
                      onClick={() => handleCategoryToggle(category.id)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                          <p className="text-gray-300">{category.description}</p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10"
                      >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.articles.map((article, idx) => (
                            <Link
                              key={idx}
                              to="#"
                              className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <div>
                                <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                                  {article.title}
                                </h4>
                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                  <Users className="w-3 h-3 mr-1" />
                                  {article.views}
                                  <Clock className="w-3 h-3 ml-3 mr-1" />
                                  {article.time}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
=======
        {/* Popular Articles Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Popular Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these frequently accessed help articles and guides 
                to get up and running quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${article.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-4">
                        {article.category}
                      </p>
                      
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need, when you need it. 
                Our support team is here to assist you 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Availability:</span>
                          <span className="text-white">{channel.availability}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Response:</span>
                          <span className="text-white">{channel.responseTime}</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                        Get Help
                      </button>
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-53a4
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Download Resources
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Access templates, guides, and tools to help you succeed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-3">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {resource.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{resource.size}</span>
                    <span className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.downloads}
                    </span>
                  </div>
                </motion.div>
              ))}
=======
        {/* Resources Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources to help you 
                succeed with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                      
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                        Explore
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Support CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our expert support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Support
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Call
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
                  <div className="text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm">24/7 Support</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm">&lt; 2 hour response</div>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Phone Support</div>
                    <div className="text-sm">Business hours</div>
                  </div>
                </div>
              </div>
            </motion.div>
=======
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help 
                you get the most out of our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
          </div>
=======
        {/* FAQs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find quick answers to common questions about our services and solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">No results found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or browse by category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need. Choose the method that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                  <div className="flex justify-center mb-4">
                    <method.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-sm text-cyan-400 mb-4">Available: {method.available}</div>
                  <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-300">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is here to help you succeed with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
        </section>
      </div>
    </>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
// Add missing Shield and CreditCard icons
const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CreditCard = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

export default HelpCenter;
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
export default HelpCenter;
>>>>>>> origin/cursor/website-audit-and-enhancement-53a4
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
