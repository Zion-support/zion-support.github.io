<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
=======
import React from 'react';
import { 
  HelpCircle, 
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
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
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([]);
=======
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, FileText, Video, Users, Phone, Mail, Clock, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
>>>>>>> origin/cursor/website-audit-and-enhancement-b812

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
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
    }
  ];

  const supportChannels = [
    {
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
      ]
    }
  ];

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
      color: "from-orange-500 to-red-500"
    }
  ];

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
    }
  ];

  const supportChannels = [
    {
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
  );
>>>>>>> origin/cursor/website-audit-and-enhancement-b812

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
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
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
<<<<<<< HEAD
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
=======
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
                />
              </div>
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
    }
  ];

  return (
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
        </div>
      </section>

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
        </div>
      </section>

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
      </section>

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
          </div>
        </div>
      </section>

      {/* Support Channels */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
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
            Find answers, tutorials, and support resources to help you get the most out of Zion Tech Group's services.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
            />
          </motion.div>
        </div>
      </section>

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
                </div>
              </motion.div>
            ))}
          </div>
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
            ))}
          </div>
        </div>
      </section>

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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  </div>
                )}
              </div>
            ))}
          </div>
          
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

      {/* CTA Section */}
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
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
<<<<<<< HEAD
              to="/docs"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
=======
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
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
    </div>
  );
<<<<<<< HEAD
}
=======
};

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
