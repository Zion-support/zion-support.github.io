import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { SEO  } from '@/components/SEO';
import { Search, 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Users,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket
 } from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const docCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and basic setup',
      articles: [
        { title: 'Welcome to Zion Tech Group', readTime: '5 min', difficulty: 'Beginner' },
        { title: 'Account Setup Guide', readTime: '10 min', difficulty: 'Beginner' },
        { title: 'First Project Setup', readTime: '15 min', difficulty: 'Beginner' },
        { title: 'Dashboard Overview', readTime: '8 min', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning documentation',
      articles: [
        { title: 'AI Business Intelligence Setup', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Machine Learning Model Training', readTime: '30 min', difficulty: 'Advanced' },
        { title: 'AI Compliance Assistant', readTime: '15 min', difficulty: 'Intermediate' },
        { title: 'LLM Content Studio Guide', readTime: '25 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps guides',
      articles: [
        { title: 'Cloud Migration Guide', readTime: '45 min', difficulty: 'Advanced' },
        { title: 'DevOps Pipeline Setup', readTime: '30 min', difficulty: 'Intermediate' },
        { title: 'Container Orchestration', readTime: '25 min', difficulty: 'Advanced' },
        { title: 'Performance Optimization', readTime: '20 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security best practices and compliance',
      articles: [
        { title: 'Zero Trust Implementation', readTime: '35 min', difficulty: 'Advanced' },
        { title: 'Security Audit Process', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Compliance Requirements', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Incident Response Guide', readTime: '30 min', difficulty: 'Advanced' }
      ]
    }
  ];

  const apiDocs = [
    {
      name: 'REST API',
      description: 'Complete REST API reference for all services',
      version: 'v2.1.0',
      status: 'Stable',
      endpoints: 45
    },
    {
      name: 'GraphQL API',
      description: 'Flexible GraphQL API for complex queries',
      version: 'v1.8.0',
      status: 'Beta',
      endpoints: 32
    },
    {
      name: 'Webhooks',
      description: 'Real-time event notifications and integrations',
      version: 'v1.5.0',
      status: 'Stable',
      endpoints: 18
    },
    {
      name: 'SDKs & Libraries',
      description: 'Client libraries for popular programming languages',
      version: 'v2.0.0',
      status: 'Stable',
      languages: 8
    }
  ];

  const popularGuides = [
    {
      title: 'Complete AI Implementation Guide',
      category: 'AI Services',
      readTime: '45 min',
      difficulty: 'Advanced',
      views: '12.5k',
      rating: 4.9
    },
    {
      title: 'Cloud Migration Best Practices',
      category: 'Cloud & DevOps',
      readTime: '60 min',
      difficulty: 'Advanced',
      views: '8.9k',
      rating: 4.8
    },
    {
      title: 'Security Compliance Checklist',
      category: 'Security & Compliance',
      readTime: '25 min',
      difficulty: 'Intermediate',
      views: '15.2k',
      rating: 4.9
    },
    {
      title: 'Performance Optimization Guide',
      category: 'Cloud & DevOps',
      readTime: '35 min',
      difficulty: 'Intermediate',
      views: '6.7k',
      rating: 4.7
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api': return <Api className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Code className="w-4 h-4" />;
      case 'reference': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? docCategories: docCategories.filter(category  => category.id === selectedCategory);

  const searchResults = searchQuery 
    ? docCategories.flatMap(category => 
        category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(article => ({ ...category, article }))
      )
    : [];

const Documentation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Access comprehensive documentation for Zion Tech Group services, APIs, and tools." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation for our services, APIs, and development tools.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Documentation coming soon. We're building comprehensive guides and references.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;