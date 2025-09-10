import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  Download, 
  Search, 
  ChevronRight, 
  ExternalLink, 
  Star, 
  Clock, 
  Users, 
  Bookmark, 
  Filter,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

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

  const filteredCategories = selectedCategory === 'all' 
    ? docCategories 
    : docCategories.filter(category => category.id === selectedCategory);

  const searchResults = searchQuery 
    ? docCategories.flatMap(category => 
        category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(article => ({ ...category, article }))
      )
    : [];

  return (
    <>
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, API guides, and resources for Zion Tech Group services. Get started with our detailed guides and tutorials."
        keywords="documentation, API docs, user guides, tutorials, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <BookOpen className="w-12 h-12 text-white" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Documentation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need to get started with our services
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              </div>