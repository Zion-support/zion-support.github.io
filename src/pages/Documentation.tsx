<<<<<<< HEAD
import React from 'react';
import { SEO } from '../components/SEO';
import { Code, BookOpen, Download, Search, Filter, ArrowRight, Star, Eye, Tag, ExternalLink, GitBranch, Zap, Database, Server, Lock, Globe, Cpu, FileText, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  const documentation = [
    {
      title: 'API Reference Guide',
      description: 'Complete API documentation for all Zion Tech Group services and platforms. Includes authentication, endpoints, request/response formats, and code examples.',
      category: 'API Documentation',
      version: 'v2.1.0',
      lastUpdated: '2024-01-20',
      author: 'Development Team',
      tags: ['API', 'Documentation', 'Technical', 'Reference'],
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      sections: ['Authentication', 'Endpoints', 'Examples', 'SDKs'],
      downloadUrl: '/docs/api-reference-v2.1.0.pdf'
    },
    {
      title: 'Integration Best Practices',
      description: 'Guidelines for integrating our services with your existing systems and workflows. Learn about best practices, common patterns, and troubleshooting.',
      category: 'Integration Guides',
      version: 'v1.5.0',
      lastUpdated: '2024-01-15',
      author: 'Solutions Architecture Team',
      tags: ['Integration', 'Best Practices', 'Technical', 'Guide'],
      featured: true,
      color: 'from-green-500 to-emerald-500',
      sections: ['Architecture', 'Patterns', 'Troubleshooting', 'Examples'],
      downloadUrl: '/docs/integration-best-practices-v1.5.0.pdf'
    },
    {
      title: 'AI Services Developer Guide',
      description: 'Comprehensive guide to implementing and customizing our AI services. Includes model training, deployment, and optimization strategies.',
      category: 'AI & Machine Learning',
      version: 'v3.0.0',
      lastUpdated: '2024-01-18',
      author: 'AI Research Team',
      tags: ['AI', 'Machine Learning', 'Developer', 'Guide'],
      featured: true,
      color: 'from-purple-500 to-pink-500',
      sections: ['Models', 'Training', 'Deployment', 'Optimization'],
      downloadUrl: '/docs/ai-services-developer-guide-v3.0.0.pdf'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up and configuring cloud infrastructure for our services. Covers AWS, Azure, and GCP deployment.',
      category: 'Infrastructure',
      version: 'v2.0.0',
      lastUpdated: '2024-01-12',
      author: 'Cloud Architecture Team',
      tags: ['Cloud', 'Infrastructure', 'Setup', 'Deployment'],
      featured: false,
      color: 'from-orange-500 to-red-500',
      sections: ['AWS Setup', 'Azure Setup', 'GCP Setup', 'Configuration'],
      downloadUrl: '/docs/cloud-infrastructure-setup-v2.0.0.pdf'
    },
    {
      title: 'Security Implementation Guide',
      description: 'Security best practices and implementation guidelines for our services. Learn about authentication, authorization, and data protection.',
      category: 'Security',
      version: 'v1.8.0',
      lastUpdated: '2024-01-10',
      author: 'Security Team',
      tags: ['Security', 'Authentication', 'Authorization', 'Best Practices'],
      featured: false,
      color: 'from-red-500 to-pink-500',
      sections: ['Authentication', 'Authorization', 'Data Protection', 'Compliance'],
      downloadUrl: '/docs/security-implementation-guide-v1.8.0.pdf'
    },
    {
      title: 'Performance Optimization Guide',
      description: 'Techniques and strategies for optimizing the performance of our services. Includes monitoring, profiling, and optimization best practices.',
      category: 'Performance',
      version: 'v1.3.0',
      lastUpdated: '2024-01-08',
      author: 'Performance Engineering Team',
      tags: ['Performance', 'Optimization', 'Monitoring', 'Best Practices'],
      featured: false,
      color: 'from-emerald-500 to-green-500',
      sections: ['Monitoring', 'Profiling', 'Optimization', 'Best Practices'],
      downloadUrl: '/docs/performance-optimization-guide-v1.3.0.pdf'
    }
  ];

  const categories = [
    { name: 'All', count: documentation.length, active: true },
    { name: 'API Documentation', count: documentation.filter(d => d.category === 'API Documentation').length, active: false },
    { name: 'Integration Guides', count: documentation.filter(d => d.category === 'Integration Guides').length, active: false },
    { name: 'AI & Machine Learning', count: documentation.filter(d => d.category === 'AI & Machine Learning').length, active: false },
    { name: 'Infrastructure', count: documentation.filter(d => d.category === 'Infrastructure').length, active: false },
    { name: 'Security', count: documentation.filter(d => d.category === 'Security').length, active: false },
    { name: 'Performance', count: documentation.filter(d => d.category === 'Performance').length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredDocumentation = documentation.filter(doc => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  FileText, 
  Search, 
  Filter, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Rocket,
  Atom,
  Heart,
  Lock,
  TrendingUp,
  Target,
  Zap,
  Download,
  ExternalLink,
  Github,
  Terminal,
  Play,
  Users,
  Star,
  Clock,
  Tag,
  ChevronDown,
  ChevronRight,
  Copy,
  CheckCircle
} from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Categories', count: 0, active: true },
    { id: 'getting-started', name: 'Getting Started', count: 8, active: false },
    { id: 'apis', name: 'APIs & SDKs', count: 12, active: false },
    { id: 'tutorials', name: 'Tutorials', count: 15, active: false },
    { id: 'reference', name: 'Reference', count: 20, active: false },
    { id: 'examples', name: 'Examples', count: 25, active: false },
    { id: 'deployment', name: 'Deployment', count: 10, active: false },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 8, active: false }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in under 10 minutes',
          difficulty: 'Beginner',
          readTime: '10 min',
          tags: ['Quick Start', 'Setup', 'First Steps'],
          featured: true
        },
        {
          id: 'installation',
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          difficulty: 'Beginner',
          readTime: '15 min',
          tags: ['Installation', 'Setup', 'Configuration']
        },
        {
          id: 'first-project',
          title: 'Your First Project',
          description: 'Create your first AI-powered application with our platform',
          difficulty: 'Beginner',
          readTime: '20 min',
          tags: ['First Project', 'Tutorial', 'AI']
        },
        {
          id: 'authentication',
          title: 'Authentication Setup',
          description: 'Configure authentication and API keys for secure access',
          difficulty: 'Intermediate',
          readTime: '12 min',
          tags: ['Authentication', 'Security', 'API Keys']
        },
        {
          id: 'environment-setup',
          title: 'Environment Configuration',
          description: 'Set up your development environment for optimal productivity',
          difficulty: 'Beginner',
          readTime: '18 min',
          tags: ['Environment', 'Development', 'Configuration']
        },
        {
          id: 'best-practices',
          title: 'Best Practices',
          description: 'Learn industry best practices for building AI applications',
          difficulty: 'Intermediate',
          readTime: '25 min',
          tags: ['Best Practices', 'Guidelines', 'Standards']
        },
        {
          id: 'common-patterns',
          title: 'Common Patterns',
          description: 'Explore common design patterns and architectural approaches',
          difficulty: 'Intermediate',
          readTime: '30 min',
          tags: ['Patterns', 'Architecture', 'Design']
        },
        {
          id: 'migration-guide',
          title: 'Migration Guide',
          description: 'Migrate from other platforms to Zion Tech Group services',
          difficulty: 'Advanced',
          readTime: '45 min',
          tags: ['Migration', 'Upgrade', 'Transition']
        }
      ]
    },
    {
      id: 'apis',
      title: 'APIs & SDKs',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          id: 'rest-api',
          title: 'REST API Reference',
          description: 'Complete REST API documentation with examples and endpoints',
          difficulty: 'Intermediate',
          readTime: '40 min',
          tags: ['REST API', 'Endpoints', 'Reference'],
          featured: true
        },
        {
          id: 'graphql-api',
          title: 'GraphQL API',
          description: 'GraphQL API documentation and schema reference',
          difficulty: 'Intermediate',
          readTime: '35 min',
          tags: ['GraphQL', 'Schema', 'Queries']
        },
        {
          id: 'python-sdk',
          title: 'Python SDK',
          description: 'Python SDK documentation with examples and best practices',
          difficulty: 'Intermediate',
          readTime: '30 min',
          tags: ['Python', 'SDK', 'Examples']
        },
        {
          id: 'javascript-sdk',
          title: 'JavaScript SDK',
          description: 'JavaScript/Node.js SDK documentation and usage examples',
          difficulty: 'Intermediate',
          readTime: '30 min',
          tags: ['JavaScript', 'Node.js', 'SDK']
        },
        {
          id: 'java-sdk',
          title: 'Java SDK',
          description: 'Java SDK documentation for enterprise applications',
          difficulty: 'Intermediate',
          readTime: '30 min',
          tags: ['Java', 'Enterprise', 'SDK']
        },
        {
          id: 'go-sdk',
          title: 'Go SDK',
          description: 'Go SDK documentation for high-performance applications',
          difficulty: 'Intermediate',
          readTime: '25 min',
          tags: ['Go', 'Performance', 'SDK']
        },
        {
          id: 'dotnet-sdk',
          title: '.NET SDK',
          description: '.NET SDK documentation for C# and F# applications',
          difficulty: 'Intermediate',
          readTime: '30 min',
          tags: ['.NET', 'C#', 'F#', 'SDK']
        },
        {
          id: 'mobile-sdks',
          title: 'Mobile SDKs',
          description: 'iOS and Android SDK documentation for mobile applications',
          difficulty: 'Intermediate',
          readTime: '35 min',
          tags: ['Mobile', 'iOS', 'Android', 'SDK']
        },
        {
          id: 'webhooks',
          title: 'Webhooks',
          description: 'Configure and use webhooks for real-time notifications',
          difficulty: 'Intermediate',
          readTime: '20 min',
          tags: ['Webhooks', 'Real-time', 'Notifications']
        },
        {
          id: 'rate-limiting',
          title: 'Rate Limiting',
          description: 'Understand rate limits and implement proper throttling',
          difficulty: 'Intermediate',
          readTime: '15 min',
          tags: ['Rate Limiting', 'Throttling', 'Performance']
        },
        {
          id: 'error-handling',
          title: 'Error Handling',
          description: 'Best practices for handling API errors and exceptions',
          difficulty: 'Intermediate',
          readTime: '20 min',
          tags: ['Error Handling', 'Exceptions', 'Best Practices']
        },
        {
          id: 'api-versioning',
          title: 'API Versioning',
          description: 'Understand API versioning and backward compatibility',
          difficulty: 'Advanced',
          readTime: '25 min',
          tags: ['Versioning', 'Compatibility', 'Migration']
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          id: 'ai-chatbot',
          title: 'Building an AI Chatbot',
          description: 'Create an intelligent chatbot using our AI services',
          difficulty: 'Intermediate',
          readTime: '45 min',
          tags: ['AI', 'Chatbot', 'NLP', 'Tutorial'],
          featured: true
        },
        {
          id: 'image-recognition',
          title: 'Image Recognition App',
          description: 'Build an image recognition application with computer vision',
          difficulty: 'Intermediate',
          readTime: '50 min',
          tags: ['Computer Vision', 'Image Recognition', 'AI']
        },
        {
          id: 'data-analytics',
          title: 'Data Analytics Dashboard',
          description: 'Create a real-time data analytics dashboard',
          difficulty: 'Advanced',
          readTime: '60 min',
          tags: ['Data Analytics', 'Dashboard', 'Real-time']
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning Pipeline',
          description: 'Build a complete ML pipeline from data to deployment',
          difficulty: 'Advanced',
          readTime: '75 min',
          tags: ['Machine Learning', 'Pipeline', 'MLOps']
        },
        {
          id: 'blockchain-app',
          title: 'Blockchain Application',
          description: 'Develop a decentralized application using blockchain',
          difficulty: 'Advanced',
          readTime: '80 min',
          tags: ['Blockchain', 'DApp', 'Web3']
        },
        {
          id: 'iot-platform',
          title: 'IoT Platform Development',
          description: 'Build an IoT platform for connected devices',
          difficulty: 'Advanced',
          readTime: '70 min',
          tags: ['IoT', 'Connected Devices', 'Platform']
        },
        {
          id: 'quantum-app',
          title: 'Quantum Computing Application',
          description: 'Explore quantum computing with practical examples',
          difficulty: 'Expert',
          readTime: '90 min',
          tags: ['Quantum Computing', 'Quantum Algorithms', 'Advanced']
        },
        {
          id: 'cybersecurity-tool',
          title: 'Cybersecurity Tool',
          description: 'Build a cybersecurity monitoring and response tool',
          difficulty: 'Advanced',
          readTime: '65 min',
          tags: ['Cybersecurity', 'Monitoring', 'Security Tools']
        },
        {
          id: 'cloud-migration',
          title: 'Cloud Migration Strategy',
          description: 'Plan and execute a successful cloud migration',
          difficulty: 'Advanced',
          readTime: '55 min',
          tags: ['Cloud Migration', 'Strategy', 'Planning']
        },
        {
          id: 'microservices',
          title: 'Microservices Architecture',
          description: 'Design and implement a microservices architecture',
          difficulty: 'Advanced',
          readTime: '70 min',
          tags: ['Microservices', 'Architecture', 'Design']
        },
        {
          id: 'devops-automation',
          title: 'DevOps Automation',
          description: 'Automate your DevOps pipeline with CI/CD',
          difficulty: 'Intermediate',
          readTime: '50 min',
          tags: ['DevOps', 'Automation', 'CI/CD']
        },
        {
          id: 'testing-strategies',
          title: 'Testing Strategies',
          description: 'Implement comprehensive testing strategies for AI applications',
          difficulty: 'Intermediate',
          readTime: '40 min',
          tags: ['Testing', 'Quality Assurance', 'AI Testing']
        },
        {
          id: 'performance-optimization',
          title: 'Performance Optimization',
          description: 'Optimize your applications for maximum performance',
          difficulty: 'Advanced',
          readTime: '55 min',
          tags: ['Performance', 'Optimization', 'Scalability']
        },
        {
          id: 'security-audit',
          title: 'Security Audit Guide',
          description: 'Conduct comprehensive security audits of your applications',
          difficulty: 'Advanced',
          readTime: '60 min',
          tags: ['Security', 'Audit', 'Compliance']
        },
        {
          id: 'monitoring-alerting',
          title: 'Monitoring & Alerting',
          description: 'Set up comprehensive monitoring and alerting systems',
          difficulty: 'Intermediate',
          readTime: '45 min',
          tags: ['Monitoring', 'Alerting', 'Observability']
        }
      ]
    },
    {
      id: 'reference',
      title: 'Reference',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      articles: [
        {
          id: 'api-reference',
          title: 'Complete API Reference',
          description: 'Comprehensive API reference with all endpoints and parameters',
          difficulty: 'Reference',
          readTime: '120 min',
          tags: ['API', 'Reference', 'Endpoints'],
          featured: true
        },
        {
          id: 'configuration-options',
          title: 'Configuration Options',
          description: 'All available configuration options and their descriptions',
          difficulty: 'Reference',
          readTime: '60 min',
          tags: ['Configuration', 'Options', 'Settings']
        },
        {
          id: 'environment-variables',
          title: 'Environment Variables',
          description: 'Complete list of environment variables and their usage',
          difficulty: 'Reference',
          readTime: '30 min',
          tags: ['Environment', 'Variables', 'Configuration']
        },
        {
          id: 'error-codes',
          title: 'Error Codes & Messages',
          description: 'Comprehensive list of error codes and troubleshooting steps',
          difficulty: 'Reference',
          readTime: '45 min',
          tags: ['Error Codes', 'Troubleshooting', 'Debugging']
        },
        {
          id: 'status-codes',
          title: 'HTTP Status Codes',
          description: 'HTTP status codes and their meanings in our APIs',
          difficulty: 'Reference',
          readTime: '25 min',
          tags: ['HTTP', 'Status Codes', 'API']
        },
        {
          id: 'data-formats',
          title: 'Data Formats & Schemas',
          description: 'Supported data formats and schema definitions',
          difficulty: 'Reference',
          readTime: '40 min',
          tags: ['Data Formats', 'Schemas', 'JSON', 'XML']
        },
        {
          id: 'authentication-methods',
          title: 'Authentication Methods',
          description: 'All supported authentication methods and their implementation',
          difficulty: 'Reference',
          readTime: '35 min',
          tags: ['Authentication', 'Methods', 'Security']
        },
        {
          id: 'rate-limit-details',
          title: 'Rate Limit Details',
          description: 'Detailed information about rate limits and quotas',
          difficulty: 'Reference',
          readTime: '20 min',
          tags: ['Rate Limits', 'Quotas', 'Throttling']
        },
        {
          id: 'webhook-events',
          title: 'Webhook Events',
          description: 'Complete list of webhook events and their payloads',
          difficulty: 'Reference',
          readTime: '30 min',
          tags: ['Webhooks', 'Events', 'Payloads']
        },
        {
          id: 'sdk-methods',
          title: 'SDK Methods Reference',
          description: 'Complete reference for all SDK methods and classes',
          difficulty: 'Reference',
          readTime: '90 min',
          tags: ['SDK', 'Methods', 'Classes', 'Reference']
        },
        {
          id: 'cli-commands',
          title: 'CLI Commands',
          description: 'All available CLI commands and their options',
          difficulty: 'Reference',
          readTime: '40 min',
          tags: ['CLI', 'Commands', 'Terminal']
        },
        {
          id: 'deployment-configs',
          title: 'Deployment Configurations',
          description: 'Deployment configuration options and examples',
          difficulty: 'Reference',
          readTime: '50 min',
          tags: ['Deployment', 'Configuration', 'Examples']
        },
        {
          id: 'monitoring-metrics',
          title: 'Monitoring Metrics',
          description: 'Available monitoring metrics and their meanings',
          difficulty: 'Reference',
          readTime: '35 min',
          tags: ['Monitoring', 'Metrics', 'Observability']
        },
        {
          id: 'security-standards',
          title: 'Security Standards',
          description: 'Security standards and compliance requirements',
          difficulty: 'Reference',
          readTime: '45 min',
          tags: ['Security', 'Standards', 'Compliance']
        },
        {
          id: 'performance-benchmarks',
          title: 'Performance Benchmarks',
          description: 'Performance benchmarks and optimization guidelines',
          difficulty: 'Reference',
          readTime: '40 min',
          tags: ['Performance', 'Benchmarks', 'Optimization']
        },
        {
          id: 'integration-patterns',
          title: 'Integration Patterns',
          description: 'Common integration patterns and best practices',
          difficulty: 'Reference',
          readTime: '55 min',
          tags: ['Integration', 'Patterns', 'Best Practices']
        },
        {
          id: 'troubleshooting-guide',
          title: 'Troubleshooting Guide',
          description: 'Common issues and their solutions',
          difficulty: 'Reference',
          readTime: '60 min',
          tags: ['Troubleshooting', 'Issues', 'Solutions']
        },
        {
          id: 'faq',
          title: 'Frequently Asked Questions',
          description: 'Answers to commonly asked questions',
          difficulty: 'Reference',
          readTime: '30 min',
          tags: ['FAQ', 'Common Questions', 'Help']
        },
        {
          id: 'glossary',
          title: 'Technical Glossary',
          description: 'Definitions of technical terms and concepts',
          difficulty: 'Reference',
          readTime: '25 min',
          tags: ['Glossary', 'Definitions', 'Terms']
        },
        {
          id: 'changelog',
          title: 'Changelog',
          description: 'Version history and release notes',
          difficulty: 'Reference',
          readTime: '20 min',
          tags: ['Changelog', 'Releases', 'Updates']
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory === 'all') return true;
    return section.id === selectedCategory;
  });

  const searchResults = documentationSections.flatMap(section =>
    section.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
<<<<<<< HEAD
        description="Access comprehensive technical documentation, API guides, integration resources, and developer tools to help you implement our solutions effectively."
=======
        description="Comprehensive technical documentation, API references, tutorials, and developer resources for Zion Tech Group services."
        keywords="documentation, API, SDK, tutorials, developer resources, technical guides, Zion Tech Group"
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access comprehensive technical guides, API documentation, integration resources, 
              and developer tools to help you implement our solutions effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Request Custom Docs
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
=======
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Everything you need to build powerful AI applications with our platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>APIs & SDKs</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Tutorials & Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Reference Docs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
=======
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 border border-slate-600'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
=======
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Documentation */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most essential and comprehensive technical guides and references
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDocumentation.filter(doc => doc.featured).map((doc, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{doc.title}</h3>
                <p className="text-gray-300 mb-6">{doc.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <GitBranch className="w-4 h-4 mr-2" />
                    {doc.version}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {doc.lastUpdated}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {doc.author}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-indigo-400 mb-2">Sections:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doc.sections.map((section, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                        {section}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {doc.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <p className="text-indigo-400 font-semibold">{doc.category}</p>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Documentation */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of technical guides and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocumentation.map((doc, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${doc.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{doc.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center">
                    <GitBranch className="w-3 h-3 mr-1" />
                    {doc.version}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {doc.lastUpdated}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <p className="text-indigo-400 font-semibold">{doc.category}</p>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    className="flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm"
                  >
                    Download
                    <Download className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional tools and resources to help developers succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SDKs & Libraries',
                description: 'Official SDKs and client libraries for popular programming languages',
                icon: Code,
                color: 'from-blue-500 to-cyan-500',
                link: '/sdk'
              },
              {
                title: 'Code Examples',
                description: 'Ready-to-use code examples and sample implementations',
                icon: FileText,
                color: 'from-green-500 to-emerald-500',
                link: '/examples'
              },
              {
                title: 'API Playground',
                description: 'Interactive API testing and exploration environment',
                icon: Server,
                color: 'from-purple-500 to-pink-500',
                link: '/playground'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other developers and get support',
                icon: Users,
                color: 'from-orange-500 to-red-500',
                link: '/community'
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                
                <Link
                  to={resource.link}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Docs
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get notified about new documentation, 
              API updates, and technical resources delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our technical writing team can create custom documentation, tutorials, 
              and guides tailored to your specific implementation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Request Custom Docs
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
=======
      {/* Search Results */}
      {searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">
              Search Results for "{searchQuery}"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      article.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                      article.difficulty === 'Expert' ? 'bg-red-500/20 text-red-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {article.difficulty}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group">
                    <BookOpen className="w-4 h-4" />
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documentation Sections */}
      {!searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {filteredSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  className="bg-slate-800/30 rounded-2xl border border-slate-700/30 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-400">{section.articles.length} articles</p>
                      </div>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.includes(section.id) && (
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.articles.map((article, articleIndex) => (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: articleIndex * 0.05 }}
                            className="group bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                article.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                                article.difficulty === 'Expert' ? 'bg-red-500/20 text-red-400' :
                                'bg-blue-500/20 text-blue-400'
                              }`}>
                                {article.difficulty}
                              </span>
                              {article.featured && (
                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-3">
                              {article.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-4">
                              {article.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group text-sm">
                              <BookOpen className="w-3 h-3" />
                              Read
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-cyan-500/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help with Development?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our developer community, get support, and stay updated with the latest features and improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub Repository
                </button>
                <button className="px-8 py-3 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-xl hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Developer Community
                </button>
                <button className="px-8 py-3 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-xl hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
    </div>
  );
};

export default Documentation;
