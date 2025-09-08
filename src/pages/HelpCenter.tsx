<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, ArrowRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started']);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState } from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/build-and-fix-errors-e276
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
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
import React, { useState } from 'react';
import { Search, BookOpen, Users, Shield, CreditCard, Settings, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
=======
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

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
<<<<<<< HEAD
    'talent': {
      title: 'Talent & Hiring',
      icon: BookOpen,
=======
<<<<<<< HEAD
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security protocols, compliance, and protection measures',
=======
    'talent-hiring': {
      title: 'Talent & Hiring',
      icon: Users,
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      articles: [
        { title: 'Security Assessment Process', views: '3.5k', time: '9 min read' },
        { title: 'Compliance Framework Setup', views: '2.1k', time: '11 min read' },
        { title: 'Incident Response Procedures', views: '1.7k', time: '7 min read' },
        { title: 'Zero Trust Architecture Guide', views: '2.9k', time: '14 min read' }
      ]
    },
<<<<<<< HEAD
    'technical': {
      title: 'Technical Support',
      icon: BookOpen,
=======
<<<<<<< HEAD
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical assistance and troubleshooting guides',
=======
    'technical-support': {
      title: 'Technical Support',
      icon: HelpCircle,
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
    'billing': {
      title: 'Billing & Payments',
      icon: BookOpen,
=======
<<<<<<< HEAD
    {
      id: 'cloud-services',
      title: 'Cloud & DevOps',
      icon: Cloud,
=======
    'billing-payments': {
      title: 'Billing & Payments',
      icon: CreditCard,
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      articles: [
        { title: 'Cloud Infrastructure Setup', path: '/help/cloud-setup', description: 'Deploy your cloud infrastructure' },
        { title: 'DevOps Best Practices', path: '/help/devops-practices', description: 'Optimize your development workflow' },
        { title: 'Security & Compliance', path: '/help/security-compliance', description: 'Ensure your systems are secure' }
      ]
    },
<<<<<<< HEAD
    'account': {
      title: 'Account & Security',
      icon: BookOpen,
      articles: [
        { title: 'Account security best practices', href: '/help/account-security' },
        { title: 'Two-factor authentication setup', href: '/help/2fa-setup' },
        { title: 'Password reset and recovery', href: '/help/password-recovery' },
        { title: 'Privacy settings and data control', href: '/help/privacy-settings' }
=======
<<<<<<< HEAD
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
=======
    'account-security': {
      title: 'Account & Security',
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      ]
    }
<<<<<<< HEAD
=======
  } as const;

  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
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

<<<<<<< HEAD
  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
  ];

=======
<<<<<<< HEAD
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
=======
  const popularArticles = [
    {
      title: 'Getting Started with Zion Tech Group',
      description: 'Complete guide to setting up your account and first project',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      title: 'Understanding AI Service Pricing',
      description: 'Learn about our pricing structure and cost optimization',
      category: 'Billing & Payments',
      readTime: '8 min read'
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security measures for your data and applications',
      category: 'Account & Security',
      readTime: '10 min read'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      category: 'Technical Support',
      readTime: '6 min read'
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
=======
        'Emergency Contacts',
        'Support Hours'
      ],
      color: 'from-orange-500 to-red-500'
>>>>>>> origin/cursor/build-and-fix-errors-e276
    }
  ];

  const quickActions = [
    { title: 'Contact Support', icon: MessageCircle, path: '/contact', color: 'from-blue-500 to-cyan-500' },
    { title: 'Live Chat', icon: MessageCircle, path: '/chat', color: 'from-green-500 to-emerald-500' },
    { title: 'Schedule Call', icon: Phone, path: '/schedule', color: 'from-purple-500 to-pink-500' },
    { title: 'Email Support', icon: Mail, path: 'mailto:kleber@ziontechgroup.com', color: 'from-orange-500 to-red-500' }
  ];

  const popularArticles = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
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
=======
    { title: 'How to Implement AI in Your Business', path: '/help/ai-implementation', category: 'AI Services' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/cybersecurity-checklist', category: 'Cybersecurity' },
    { title: 'Cloud Migration Best Practices', path: '/help/cloud-migration', category: 'Technical Support' },
    { title: 'Setting Up Micro SAAS Solutions', path: '/help/micro-saas-setup', category: 'Getting Started' }
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
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


<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
<<<<<<< HEAD
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
=======
        <meta name="description" content="Get help and support for Zion Tech Group's AI-powered solutions. Find documentation, tutorials, troubleshooting guides, and connect with our support team." />
        <meta name="keywords" content="help center, support, documentation, tutorials, troubleshooting, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Helmet>

<<<<<<< HEAD
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
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
            </p>
            {/* Search Bar */}
<<<<<<< HEAD
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
<<<<<<< HEAD
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
=======
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Help <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our services, and get the support you need.
            </p>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
          </div>
          
          {/* Search Bar */}
<<<<<<< HEAD
          <div className="max-w-2xl mx-auto mb-16">
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
              <input
                type="text"
<<<<<<< HEAD
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            </div>
<<<<<<< HEAD
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
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Help Center
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Find answers to your questions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-gray-300">Quick start guides and tutorials</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">FAQs</h3>
            <p className="text-gray-300">Frequently asked questions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
            <p className="text-gray-300">Get help from our team</p>
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
=======
        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div key={key} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-cyan-400" />
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleCategory(key)}
<<<<<<< HEAD
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors"
=======
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    >
                      {expandedCategories.includes(key) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
<<<<<<< HEAD
                  
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  {expandedCategories.includes(key) && (
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
<<<<<<< HEAD
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-blue-light/10"
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  )}
=======
                          className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
                        >
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-gray-300 hover:text-white transition-colors duration-300">
                            {article.title}
                          </span>
                        </Link>
                      ))}
                    </div>
<<<<<<< HEAD
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
};

=======
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300">
                Search
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
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
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
=======
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
                  )}
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        </div>

<<<<<<< HEAD
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
      <SEOHead 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion Tech Group's AI and tech marketplace platform."
        keywords="help, support, documentation, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/help-center"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and support resources to help you make the most of Zion Tech Group
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-400 font-semibold">{channel.contact}</p>
                      <p className="text-gray-400">{channel.availability}</p>
                      <p className="text-gray-400">Response: {channel.response}</p>
                    </div>
                  </div>
                );
              })}
import { AppLayout } from "@/layout/AppLayout";
import SEOHead from "@/components/SEOHead";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, BookOpen, Users, Settings, Shield, CreditCard, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion marketplace",
      icon: BookOpen,
      color: "text-zion-cyan"
    },
    {
      title: "Account & Billing",
      description: "Manage your account and payment methods",
      icon: CreditCard,
      color: "text-zion-purple"
    },
    {
      title: "Marketplace",
      description: "Buy, sell, and discover products",
      icon: Search,
      color: "text-zion-green"
    },
    {
      title: "Community",
      description: "Connect with other users and get help",
      icon: Users,
      color: "text-zion-orange"
    },
    {
      title: "Security & Privacy",
      description: "Learn about our security measures",
      icon: Shield,
      color: "text-zion-red"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: Settings,
      color: "text-zion-blue"
    }
  ];

  const faqs = [
    {
      question: "How do I create an account on Zion?",
      answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, choose whether you're a client or talent, fill in your details, and verify your email address."
    },
    {
      question: "What services does Zion offer?",
      answer: "Zion offers a comprehensive marketplace for AI and tech services, including talent hiring, equipment sales, service listings, and community forums. We specialize in connecting AI professionals with businesses."
    },
    {
      question: "How do I post a job or service request?",
      answer: "To post a job or service request, go to the 'Services' section, click 'Post a Request', fill in the details including requirements, budget, and timeline, then submit for review."
    },
    {
      question: "Is Zion free to use?",
      answer: "Yes! Zion is completely free to use for basic marketplace features. We offer premium features for advanced users and businesses, but the core platform is free."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call through the Contact page."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing and payment terms."
    },
    {
      question: "How do I verify my identity?",
      answer: "Identity verification helps build trust. Go to your profile settings, upload a government-issued ID, and complete the verification process. This typically takes 24-48 hours."
    },
    {
      question: "Can I use Zion internationally?",
      answer: "Yes! Zion is available worldwide. We support multiple currencies and languages, making it easy to connect with talent and clients globally."
    }
  ];

  return (
    <AppLayout>
      <SEOHead 
        title="Help Center - Zion Tech Group Support" 
        description="Get help and support for using the Zion AI and tech marketplace. Find answers to common questions and contact our support team." 
        keywords="help center, support, FAQ, Zion marketplace, customer service"
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
};

export default HelpCenter;
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
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
=======
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-4">Get instant help from our support team</p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Chat
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm mb-4">Send us a detailed message</p>
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                >
                  Send Email
                </Link>
              </div>
<<<<<<< HEAD
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Call us directly for urgent issues</p>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
=======
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 text-sm mb-4">Call us directly for urgent issues</p>
                <a
                  href="tel:+13024640950"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
