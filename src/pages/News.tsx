<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Search, 
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import { 
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
<<<<<<< HEAD
  Newspaper,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Zap,
  Building,
  Users,
  Globe,
  Star,
  Eye,
  Heart,
  Share2,
  ExternalLink,
  Filter,
  Bookmark,
  BookmarkPlus
=======
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Newspaper,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  Database,
  TrendingUp,
  Globe
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
  Search,
  Filter,
  Newspaper,
  TrendingUp,
  Globe,
  Building,
  Award,
  Zap,
  Eye,
  Share2
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
<<<<<<< HEAD
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 7 },
    { id: 'business', name: 'Business & Industry', icon: Building, count: 9 },
    { id: 'innovation', name: 'Innovation & Trends', icon: Lightbulb, count: 8 },
    { id: 'development', name: 'Development', icon: Code, count: 5 }
  ];

  const sources = [
    'All Sources',
    'Company Press Releases',
    'Industry Reports',
    'Technology News',
    'Research Papers',
    'Partner Updates',
    'Customer Success Stories'
  ];

  const timeframes = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last 3 Months',
    'Last Year'
=======
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 67 },
    { id: 'company', name: 'Company News', icon: Building, count: 23 },
    { id: 'technology', name: 'Technology', icon: Zap, count: 18 },
    { id: 'partnerships', name: 'Partnerships', icon: Globe, count: 12 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 8 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 6 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 67 },
    { id: '2025', name: '2025', count: 23 },
    { id: '2024', name: '2024', count: 28 },
    { id: '2023', name: '2023', count: 16 }
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
  ];

  const newsArticles = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'Zion Tech Group Launches Revolutionary AI Autonomous Business Platform',
      excerpt: 'New platform enables businesses to automate complex decision-making processes using advanced AI algorithms.',
      content: 'Zion Tech Group today announced the launch of its groundbreaking AI Autonomous Business Platform, designed to revolutionize how organizations approach business automation...',
      author: 'Zion Tech Group',
      source: 'Company Press Releases',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      category: 'ai-ml',
      tags: ['AI', 'Business Platform', 'Automation', 'Launch'],
      featured: true,
      views: 25420,
      likes: 1245,
      image: '/images/news/ai-platform-launch.jpg',
      externalLink: 'https://ziontechgroup.com/press-releases/ai-platform-launch',
      isBookmarked: false
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Achieves 1000+ Qubit Milestone',
      excerpt: 'Company reaches significant milestone in quantum computing development, opening new possibilities for complex problem-solving.',
      content: 'Zion Tech Group has achieved a major breakthrough in quantum computing technology, successfully scaling its quantum systems to over 1000 qubits...',
      author: 'Dr. Michael Chen',
      source: 'Research Papers',
      publishDate: '2024-01-14',
      readTime: '8 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Breakthrough', 'Research', '1000+ Qubits'],
      featured: true,
      views: 19850,
      likes: 987,
      image: '/images/news/quantum-breakthrough.jpg',
      externalLink: 'https://ziontechgroup.com/research/quantum-breakthrough',
      isBookmarked: false
    },
    {
      id: 3,
      title: 'Cybersecurity Threat Report: AI-Powered Attacks on the Rise',
      excerpt: 'New research reveals increasing sophistication of cyber threats using artificial intelligence.',
      content: 'A comprehensive cybersecurity threat report released by Zion Tech Group reveals a concerning trend in AI-powered cyber attacks...',
      author: 'Security Research Team',
      source: 'Industry Reports',
      publishDate: '2024-01-13',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI Threats', 'Research', 'Security'],
      featured: false,
      views: 15670,
      likes: 756,
      image: '/images/news/cybersecurity-threats.jpg',
      externalLink: 'https://ziontechgroup.com/security/ai-threat-report',
      isBookmarked: false
    },
    {
      id: 4,
      title: 'Cloud Migration Success: Fortune 500 Company Achieves 40% Cost Reduction',
      excerpt: 'Case study demonstrates significant cost savings and performance improvements through strategic cloud migration.',
      content: 'A Fortune 500 manufacturing company has achieved remarkable results through its cloud migration partnership with Zion Tech Group...',
      author: 'Cloud Solutions Team',
      source: 'Customer Success Stories',
      publishDate: '2024-01-12',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud Migration', 'Cost Reduction', 'Case Study', 'Success'],
      featured: false,
      views: 12890,
      likes: 634,
      image: '/images/news/cloud-migration-success.jpg',
      externalLink: 'https://ziontechgroup.com/case-studies/cloud-migration',
      isBookmarked: false
    },
    {
      id: 5,
      title: 'Digital Transformation in Healthcare: AI-Powered Patient Care',
      excerpt: 'Healthcare organizations are leveraging AI to improve patient outcomes and operational efficiency.',
      content: 'The healthcare industry is undergoing a digital transformation revolution, with AI-powered solutions leading the charge...',
      author: 'Healthcare Innovation Team',
      source: 'Industry Reports',
      publishDate: '2024-01-11',
      readTime: '9 min read',
      category: 'business',
      tags: ['Healthcare', 'Digital Transformation', 'AI', 'Patient Care'],
      featured: false,
      views: 11230,
      likes: 567,
      image: '/images/news/healthcare-ai.jpg',
      externalLink: 'https://ziontechgroup.com/insights/healthcare-transformation',
      isBookmarked: false
    },
    {
      id: 6,
      title: 'Edge Computing Revolution: Real-Time Processing for IoT Applications',
      excerpt: 'New edge computing solutions enable faster processing and reduced latency in IoT deployments.',
      content: 'Edge computing is revolutionizing the Internet of Things (IoT) landscape, enabling real-time processing and decision-making...',
      author: 'IoT Solutions Team',
      source: 'Technology News',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      category: 'innovation',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Innovation'],
      featured: false,
      views: 9870,
      likes: 445,
      image: '/images/news/edge-computing-iot.jpg',
      externalLink: 'https://ziontechgroup.com/technology/edge-computing',
      isBookmarked: false
    },
    {
      id: 7,
      title: 'Machine Learning in Financial Services: Risk Assessment and Fraud Detection',
      excerpt: 'Financial institutions are adopting ML solutions for improved risk management and security.',
      content: 'Machine learning is transforming the financial services industry, particularly in areas of risk assessment and fraud detection...',
      author: 'Financial Services Team',
      source: 'Industry Reports',
      publishDate: '2024-01-09',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['Machine Learning', 'Financial Services', 'Risk Assessment', 'Fraud Detection'],
      featured: false,
      views: 8760,
      likes: 398,
      image: '/images/news/ml-financial-services.jpg',
      externalLink: 'https://ziontechgroup.com/insights/financial-ml',
      isBookmarked: false
    },
    {
      id: 8,
      title: 'Microservices Architecture: Building Scalable Applications',
      excerpt: 'Best practices for implementing microservices that can scale with business growth.',
      content: 'Microservices architecture has become the preferred approach for building scalable, maintainable applications...',
      author: 'Software Architecture Team',
      source: 'Technology News',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      category: 'development',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Development'],
      featured: false,
      views: 7650,
      likes: 312,
      image: '/images/news/microservices-architecture.jpg',
      externalLink: 'https://ziontechgroup.com/technology/microservices',
      isBookmarked: false
=======
      title: "Zion Tech Group Launches Revolutionary Quantum Neural Network Platform",
      excerpt: "The company introduces a breakthrough quantum computing solution that combines neural networks with quantum processing for unprecedented computational power.",
      content: "Zion Tech Group today announced the launch of its revolutionary Quantum Neural Network Platform, marking a significant milestone in the convergence of quantum computing and artificial intelligence. This breakthrough technology represents a paradigm shift in computational capabilities, enabling organizations to solve complex problems that were previously impossible with classical computing methods...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-20",
      readTime: "5 min read",
      category: "technology",
      tags: ["quantum-computing", "ai", "innovation", "breakthrough"],
      featured: true,
      image: "/news/quantum-neural-network.jpg",
      views: 15420,
      shares: 892
    },
    {
      id: 2,
      title: "Zion Tech Group Named 'AI Company of the Year' at Tech Excellence Awards",
      excerpt: "The company receives prestigious recognition for its contributions to artificial intelligence and autonomous systems innovation.",
      content: "Zion Tech Group has been honored with the 'AI Company of the Year' award at the prestigious Tech Excellence Awards 2025. This recognition celebrates the company's groundbreaking work in artificial intelligence, autonomous systems, and quantum technology solutions that are transforming industries worldwide...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-18",
      readTime: "4 min read",
      category: "awards",
      tags: ["awards", "recognition", "ai", "excellence"],
      featured: true,
      image: "/news/tech-excellence-award.jpg",
      views: 12850,
      shares: 756
    },
    {
      id: 3,
      title: "Strategic Partnership with Global Healthcare Consortium Announced",
      excerpt: "Zion Tech Group partners with leading healthcare organizations to deploy AI-powered diagnostic and treatment optimization systems.",
      content: "Zion Tech Group has announced a strategic partnership with the Global Healthcare Consortium, a coalition of leading healthcare organizations worldwide. This collaboration will focus on deploying advanced AI-powered diagnostic systems, treatment optimization platforms, and predictive healthcare analytics to improve patient outcomes globally...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-15",
      readTime: "6 min read",
      category: "partnerships",
      tags: ["healthcare", "partnership", "ai", "diagnostics"],
      featured: false,
      image: "/news/healthcare-partnership.jpg",
      views: 9870,
      shares: 543
    },
    {
      id: 4,
      title: "New AI Autonomous Research Assistant Surpasses Human Performance Benchmarks",
      excerpt: "Zion Tech Group's latest AI research tool demonstrates superior capabilities in scientific literature analysis and research synthesis.",
      content: "Zion Tech Group has announced that its new AI Autonomous Research Assistant has achieved breakthrough performance, surpassing human benchmarks in scientific literature analysis, research synthesis, and hypothesis generation. This advanced AI system represents a significant leap forward in research automation and knowledge discovery...",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-12",
      readTime: "7 min read",
      category: "technology",
      tags: ["ai-research", "automation", "scientific-discovery", "innovation"],
      featured: false,
      image: "/news/ai-research-assistant.jpg",
      views: 11230,
      shares: 678
    },
    {
      id: 5,
      title: "Zion Tech Group Expands Global Operations with New European Headquarters",
      excerpt: "The company establishes a new European headquarters in Amsterdam to better serve European clients and expand its international presence.",
      content: "Zion Tech Group has announced the expansion of its global operations with the establishment of a new European headquarters in Amsterdam, Netherlands. This strategic expansion will enable the company to better serve its growing European client base and strengthen its position in the European technology market...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-10",
      readTime: "5 min read",
      category: "company",
      tags: ["expansion", "europe", "global-operations", "amsterdam"],
      featured: false,
      image: "/news/european-hq.jpg",
      views: 8760,
      shares: 432
    },
    {
      id: 6,
      title: "Breakthrough in SOC2 Compliance Automation Technology",
      excerpt: "Zion Tech Group introduces automated compliance monitoring system that reduces audit time by 90%.",
      content: "Zion Tech Group has achieved a major breakthrough in compliance automation with the introduction of its new SOC2 Compliance Automation Technology. This innovative system streamlines the compliance process, reducing audit preparation time by 90% while maintaining the highest standards of security and compliance...",
      author: "Alex Thompson",
      publishDate: "2025-01-08",
      readTime: "6 min read",
      category: "technology",
      tags: ["compliance", "automation", "soc2", "security"],
      featured: false,
      image: "/news/soc2-automation.jpg",
      views: 9450,
      shares: 521
    },
    {
      id: 7,
      title: "Zion Tech Group Named to Fortune 500 Fastest-Growing Companies List",
      excerpt: "The company ranks #47 on Fortune's list of fastest-growing companies, recognizing its rapid expansion and innovation.",
      content: "Zion Tech Group has been named to Fortune magazine's prestigious list of the 500 fastest-growing companies in America. Ranking #47 on the list, this recognition highlights the company's exceptional growth trajectory, innovative technology solutions, and strong market position in the rapidly evolving AI and quantum technology sectors...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-05",
      readTime: "4 min read",
      category: "awards",
      tags: ["fortune-500", "growth", "recognition", "success"],
      featured: false,
      image: "/news/fortune-500.jpg",
      views: 13420,
      shares: 789
    },
    {
      id: 8,
      title: "New 5G Enterprise Solutions Division Launched",
      excerpt: "Zion Tech Group establishes dedicated division for next-generation 5G enterprise networking and infrastructure solutions.",
      content: "Zion Tech Group has announced the launch of its new 5G Enterprise Solutions Division, dedicated to providing cutting-edge 5G networking and infrastructure solutions for enterprise clients. This new division will focus on delivering high-speed, low-latency connectivity solutions that enable the next generation of enterprise applications...",
      author: "Jennifer Lee",
      publishDate: "2025-01-03",
      readTime: "5 min read",
      category: "company",
      tags: ["5g", "networking", "enterprise", "infrastructure"],
      featured: false,
      image: "/news/5g-solutions.jpg",
      views: 7890,
      shares: 445
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
    }
  ];

  const filteredNews = newsArticles.filter(article => {
<<<<<<< HEAD
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const sourceMatch = selectedSource === 'all' || article.source === selectedSource;
    
    let timeframeMatch = true;
    if (selectedTimeframe !== 'all') {
      const articleDate = new Date(article.publishDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - articleDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      switch (selectedTimeframe) {
        case 'Last 24 Hours':
          timeframeMatch = diffDays <= 1;
          break;
        case 'Last Week':
          timeframeMatch = diffDays <= 7;
          break;
        case 'Last Month':
          timeframeMatch = diffDays <= 30;
          break;
        case 'Last 3 Months':
          timeframeMatch = diffDays <= 90;
          break;
        case 'Last Year':
          timeframeMatch = diffDays <= 365;
          break;
      }
    }
    
    return searchMatch && categoryMatch && sourceMatch && timeframeMatch;
  });

  const featuredNews = newsArticles.filter(article => article.featured);
  const recentNews = newsArticles.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
=======
    { id: 'all', name: 'All News', icon: Newspaper, count: 18 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 6 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 4 },
    { id: 'security', name: 'Security', icon: Shield, count: 3 },
    { id: 'cloud', name: 'Cloud Tech', icon: Cloud, count: 3 },
    { id: 'business', name: 'Business', icon: TrendingUp, count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "The new platform combines advanced machine learning algorithms with real-time data analytics to provide unprecedented business insights...",
      author: "Zion Tech Press",
      date: "2024-01-20",
      readTime: "5 min read",
      views: "5.2k",
      category: "ai",
      tags: ["AI Platform", "Business Intelligence", "Product Launch", "Machine Learning"],
      image: "/api/placeholder/400/250",
      featured: true,
      breaking: true
    },
    {
      id: 2,
      title: "Major Breakthrough in Quantum Computing Research Announced",
      excerpt: "Scientists at Zion Tech Group have achieved a significant milestone in quantum error correction, bringing practical quantum computing closer to reality...",
      author: "Research Team",
      date: "2024-01-18",
      readTime: "7 min read",
      views: "3.8k",
      category: "innovation",
      tags: ["Quantum Computing", "Research", "Breakthrough", "Technology"],
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  Newspaper, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Clock, 
  User,
  TrendingUp,
  Lightbulb,
  Globe,
  Zap,
  Award,
  Users
} from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Autonomous Business Platform",
      excerpt: "Our latest AI platform transforms how businesses operate with autonomous decision-making and process optimization.",
      category: "Product Launch",
      date: "2024-01-15",
      author: "Zion Tech Team",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: New Algorithm Achieves 100x Speed Improvement",
      excerpt: "Our quantum research team has developed a groundbreaking algorithm that significantly outperforms classical computing methods.",
      category: "Research & Development",
      date: "2024-01-10",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Zion Tech Group Expands Global Operations with New European Office",
      excerpt: "The company opens its first European headquarters in Berlin, Germany, to better serve clients across the European Union...",
      author: "Corporate Communications",
      date: "2024-01-16",
      readTime: "4 min read",
      views: "2.9k",
      category: "business",
      tags: ["Global Expansion", "European Market", "Business Growth", "International"],
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: "Cybersecurity in the AI Era: New Threats and Solutions",
      excerpt: "As AI becomes more prevalent, we explore the evolving cybersecurity landscape and our innovative defense strategies.",
      category: "Cybersecurity",
      date: "2024-01-08",
      author: "Michael Rodriguez",
      readTime: "6 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "New Cybersecurity Framework Released for Enterprise Clients",
      excerpt: "Zion Tech Group introduces comprehensive security framework designed to protect against emerging cyber threats...",
      author: "Security Team",
      date: "2024-01-14",
      readTime: "6 min read",
      views: "4.1k",
      category: "security",
      tags: ["Cybersecurity", "Enterprise", "Security Framework", "Threat Protection"],
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: "The Future of Work: How AI is Reshaping Industries",
      excerpt: "Discover how artificial intelligence is transforming traditional industries and creating new opportunities for growth.",
      category: "Industry Insights",
      date: "2024-01-05",
      author: "Jennifer Kim",
      readTime: "7 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Partnership Announced with Leading Cloud Infrastructure Provider",
      excerpt: "Strategic collaboration to deliver enhanced cloud solutions and accelerate digital transformation for enterprise clients...",
      author: "Partnership Team",
      date: "2024-01-12",
      readTime: "5 min read",
      views: "3.3k",
      category: "cloud",
      tags: ["Partnership", "Cloud Infrastructure", "Digital Transformation", "Enterprise"],
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: "Zion Tech Group Named Top AI Company by Tech Innovators Association",
      excerpt: "We're honored to be recognized for our contributions to AI innovation and technological advancement.",
      category: "Company News",
      date: "2024-01-03",
      author: "Zion Tech Team",
      readTime: "3 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Zion Tech Group Recognized as Top AI Solutions Provider",
      excerpt: "Industry recognition for excellence in artificial intelligence solutions and innovative technology implementations...",
      author: "Awards Team",
      date: "2024-01-10",
      readTime: "4 min read",
      views: "2.7k",
      category: "ai",
      tags: ["Awards", "Recognition", "AI Solutions", "Industry Leadership"],
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: "Micro SAAS Revolution: Democratizing Technology for Small Businesses",
      excerpt: "Learn how our micro SAAS solutions are making enterprise-grade technology accessible to businesses of all sizes.",
      category: "Product Updates",
      date: "2024-01-01",
      author: "David Thompson",
      readTime: "5 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      image: "/api/placeholder/400/250"
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

<<<<<<< HEAD
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Newspaper;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const toggleBookmark = (articleId: number) => {
    // This would typically update a state or make an API call
    console.log('Toggle bookmark for article:', articleId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  const categories = [
    "All News",
    "Product Launch",
    "Research & Development",
    "Cybersecurity",
    "Industry Insights",
    "Company News",
    "Product Updates"
  ];

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay informed with the latest developments in AI, quantum technology, cybersecurity, 
              and industry insights from Zion Tech Group and the technology world.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
=======
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.publishDate.startsWith(selectedYear);
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
=======
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Award,
  Globe,
  Building,
  Users,
  Star,
  Eye,
  Share2,
  Filter,
  ChevronDown,
  ExternalLink,
  Play,
  ImageIcon,
  Video,
  FileText
} from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 89, color: 'from-gray-500 to-slate-500' },
    { id: 'company', name: 'Company News', icon: Building, count: 23, color: 'from-blue-500 to-cyan-500' },
    { id: 'industry', name: 'Industry Updates', icon: Globe, count: 31, color: 'from-green-500 to-emerald-500' },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 12, color: 'from-yellow-500 to-orange-500' },
    { id: 'partnerships', name: 'Partnerships', icon: Users, count: 18, color: 'from-purple-500 to-pink-500' },
    { id: 'technology', name: 'Technology', icon: TrendingUp, count: 25, color: 'from-red-500 to-rose-500' }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Zion Tech Group Named Top AI Solutions Provider by TechCrunch 2025",
      excerpt: "Leading technology publication recognizes Zion Tech Group for innovative AI solutions and exceptional client success rates in enterprise digital transformation.",
      author: "Zion Tech Group",
      publishDate: "2025-01-15",
      readTime: "3 min read",
      category: "awards",
      tags: ["Awards", "AI", "Recognition", "TechCrunch"],
      image: "/api/placeholder/600/400",
      views: "15.2k",
      type: "press-release",
      featured: true,
      externalLink: "https://techcrunch.com/2025/01/15/zion-tech-group-ai-solutions"
    },
    {
      id: 2,
      title: "Major Partnership Announced with Fortune 500 Healthcare Provider",
      excerpt: "Zion Tech Group enters strategic partnership to deploy AI-powered healthcare analytics across 50+ medical facilities, improving patient outcomes and operational efficiency.",
      author: "Zion Tech Group",
      publishDate: "2025-01-12",
      readTime: "4 min read",
      category: "partnerships",
      tags: ["Partnership", "Healthcare", "AI", "Fortune 500"],
      image: "/api/placeholder/600/400",
      views: "12.8k",
      type: "announcement",
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Platform',
      excerpt: 'Our latest quantum computing platform combines AI and quantum mechanics to solve previously unsolvable problems.',
      category: 'Product Launch',
      date: '2024-08-25',
      readTime: '5 min read',
      image: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Microsoft Azure for Enhanced AI Services',
      excerpt: 'Strategic collaboration brings enterprise-grade AI solutions to our clients with enhanced security and scalability.',
      category: 'Partnership',
      date: '2024-08-20',
      readTime: '3 min read',
      image: '🤝',
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
      featured: true
    },
    {
      id: 3,
<<<<<<< HEAD
      title: "Breakthrough in Quantum Neural Network Technology",
      excerpt: "Our research team achieves significant milestone in quantum computing, reducing processing time for complex AI models by 95% while maintaining accuracy.",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-10",
      readTime: "5 min read",
      category: "technology",
      tags: ["Quantum Computing", "AI", "Research", "Breakthrough"],
      image: "/api/placeholder/600/400",
      views: "18.5k",
      type: "research",
=======
      title: 'New Cybersecurity Framework for Quantum Threats',
      excerpt: 'Introducing quantum-safe security protocols to protect against future quantum computing threats.',
      category: 'Security',
      date: '2024-08-15',
      readTime: '7 min read',
      image: '🔒',
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 4,
<<<<<<< HEAD
      title: "Zion Tech Group Expands European Operations",
      excerpt: "New office opening in Berlin, Germany to serve growing demand for AI solutions across European markets.",
      author: "Zion Tech Group",
      publishDate: "2025-01-08",
      readTime: "2 min read",
      category: "company",
      tags: ["Expansion", "Europe", "AI Solutions"],
      image: "/api/placeholder/400/250",
      views: "8.9k",
      type: "announcement"
    },
    {
      id: 5,
      title: "SOC2 Type II Certification Achieved",
      excerpt: "Successfully completed SOC2 Type II audit, demonstrating our commitment to security and compliance excellence.",
      author: "Zion Tech Group",
      publishDate: "2025-01-06",
      readTime: "2 min read",
      category: "company",
      tags: ["SOC2", "Certification", "Security", "Compliance"],
      image: "/api/placeholder/400/250",
      views: "7.2k",
      type: "announcement"
    },
    {
      id: 6,
      title: "New AI Research Lab Opens in Silicon Valley",
      excerpt: "State-of-the-art facility dedicated to advancing autonomous systems and quantum computing research.",
      author: "Zion Tech Group",
      publishDate: "2025-01-04",
      readTime: "3 min read",
      category: "company",
      tags: ["Research Lab", "Silicon Valley", "AI", "Quantum"],
      image: "/api/placeholder/400/250",
      views: "6.8k",
      type: "announcement"
    },
    {
      id: 7,
      title: "Industry Report: AI Adoption in Manufacturing",
      excerpt: "Comprehensive study reveals 40% increase in AI adoption across manufacturing sector, with Zion Tech Group leading implementations.",
      author: "Industry Research Team",
      publishDate: "2025-01-02",
      readTime: "4 min read",
      category: "industry",
      tags: ["Manufacturing", "AI Adoption", "Research", "Report"],
      image: "/api/placeholder/400/250",
      views: "5.4k",
      type: "report"
    },
    {
      id: 8,
      title: "5G Enterprise Solutions Launch",
      excerpt: "Introducing next-generation 5G enterprise solutions designed for high-performance, low-latency business applications.",
      author: "Zion Tech Group",
      publishDate: "2024-12-30",
      readTime: "3 min read",
      category: "technology",
      tags: ["5G", "Enterprise", "Technology", "Launch"],
      image: "/api/placeholder/400/250",
      views: "4.9k",
      type: "product-launch"
    },
    {
      id: 9,
      title: "Cybersecurity Excellence Award",
      excerpt: "Recognized for outstanding contributions to cybersecurity innovation and threat prevention.",
      author: "Zion Tech Group",
      publishDate: "2024-12-28",
      readTime: "2 min read",
      category: "awards",
      tags: ["Cybersecurity", "Award", "Innovation", "Security"],
      image: "/api/placeholder/400/250",
      views: "4.2k",
      type: "award"
    }
  ];

  const allNews = [...featuredNews, ...recentNews];

  const filteredNews = allNews.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedNews = filteredNews.sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views.localeCompare(a.views, undefined, { numeric: true });
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-slate-500';
  };

  const getNewsTypeIcon = (type: string) => {
    switch (type) {
      case 'press-release':
        return FileText;
      case 'announcement':
        return Newspaper;
      case 'research':
        return TrendingUp;
      case 'report':
        return FileText;
      case 'product-launch':
        return Star;
      case 'award':
        return Award;
      default:
        return Newspaper;
    }
  };

  const getNewsTypeColor = (type: string) => {
    switch (type) {
      case 'press-release':
        return 'from-blue-500 to-cyan-500';
      case 'announcement':
        return 'from-green-500 to-emerald-500';
      case 'research':
        return 'from-purple-500 to-pink-500';
      case 'report':
        return 'from-orange-500 to-red-500';
      case 'product-launch':
        return 'from-yellow-500 to-orange-500';
      case 'award':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Company News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay informed about Zion Tech Group's latest innovations, partnerships, awards, and industry developments.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
=======
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Updates</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about Zion Tech Group's latest developments, industry insights, 
              and breakthrough innovations in AI, quantum computing, and cybersecurity.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
<<<<<<< HEAD
<<<<<<< HEAD
                  placeholder="Search news, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
=======
                  placeholder="Search news, announcements, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
                />
              </div>
            </div>

<<<<<<< HEAD
            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
=======
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">89</span> News Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">23</span> Company Updates
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">12</span> Awards
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
              </div>

              {/* Source Filter */}
              <div className="flex items-center space-x-2">
                <Newspaper className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeframe Filter */}
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {timeframes.map((timeframe) => (
                    <option key={timeframe} value={timeframe}>
                      {timeframe}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest developments, product launches, company updates, 
            and industry insights from Zion Tech Group.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
                  placeholder="Search news articles and updates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
<<<<<<< HEAD
<<<<<<< HEAD
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
=======
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                      : 'border-gray-700 text-gray-300 hover:border-orange-500/50 hover:text-orange-400'
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
<<<<<<< HEAD
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
=======
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
                    {category.count}
                  </span>
                </button>
              ))}
<<<<<<< HEAD
=======
            </div>

            {/* Years */}
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setSelectedYear(year.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedYear === year.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {year.name}
                  <span className="ml-1 text-xs opacity-75">({year.count})</span>
                </button>
              ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Featured News */}
      {featuredNews.length > 0 && (
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured News
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => {
                const CategoryIcon = getCategoryIcon(article.category);
                return (
                  <article key={article.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                            Featured
                          </span>
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                            {getCategoryName(article.category)}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleBookmark(article.id)}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {article.isBookmarked ? (
                            <Bookmark className="w-5 h-5 fill-current" />
                          ) : (
                            <BookmarkPlus className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {article.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{article.likes.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <a
                          href={article.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                        >
                          Read Full Article
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        
                        <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
=======
      {/* Breaking News Banner */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-white">
            <div className="animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold">BREAKING NEWS</span>
            <span>Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform</span>
            <Link
              to="/news/1"
              className="text-white hover:text-orange-200 transition-colors underline"
            >
              Read More →
            </Link>
          </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                News & Updates
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stay informed about the latest developments in AI, technology, and our company's innovations
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>

      {/* Featured Article */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {filteredArticles.filter(article => article.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured News</h2>
            {filteredArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      {article.breaking && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                          BREAKING
                        </span>
                      )}
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{article.category.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 hover:text-orange-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 flex items-center justify-center">
                    <div className="text-gray-500 text-center p-8">
                      <div className="w-32 h-32 bg-gray-600 rounded-lg mx-auto mb-4"></div>
                      <p>News Image</p>
                    </div>
                  </div>
                </div>
              </div>
=======
      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
<<<<<<< HEAD
        </section>
      )}

<<<<<<< HEAD
      {/* All News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Latest News
            </h2>
            <div className="text-gray-400">
              {filteredNews.length} of {newsArticles.length} articles
            </div>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No news articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => {
                const CategoryIcon = getCategoryIcon(article.category);
                return (
                  <article key={article.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                            {getCategoryName(article.category)}
                          </span>
                          {article.featured && (
                            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => toggleBookmark(article.id)}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {article.isBookmarked ? (
                            <Bookmark className="w-4 h-4 fill-current" />
                          ) : (
                            <BookmarkPlus className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.publishDate)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          {article.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{article.likes.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <a
                            href={article.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                          >
                            Read More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
=======
      {/* News Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Latest News
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No news articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {article.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-orange-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="text-orange-400 hover:text-orange-300 transition-colors text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
=======
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-gray-300">Top stories and major announcements</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{article.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          {article.shares.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-gray-300">
              {filteredNews.length > 0 
                ? `Showing ${filteredNews.length} articles` 
                : 'No news articles found matching your criteria'
              }
            </p>
          </div>
          
          {regularNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{article.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          {article.shares.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            </div>
          )}
          
          {regularNews.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No news articles found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get the latest news and insights delivered to your inbox. Never miss an important update.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
=======
      {/* Press Kit Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Press & Media</h2>
          <p className="text-xl text-gray-300 mb-8">
            Journalists and media professionals can access our press kit, 
            company information, and media contacts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/press-kit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200"
            >
              Download Press Kit
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Media Contact
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured News</h2>
            <p className="text-xl text-gray-300">Top stories and major announcements</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Featured Badge */}
                {news.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* News Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getNewsTypeColor(news.type)} text-white`}>
                    {news.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>

                {/* News Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-cyan-400/50" />
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(news.category)} text-white`}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {news.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.publishDate)}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {news.readTime}
                    </span>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {news.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {news.externalLink ? (
                    <a
                      href={news.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sort and Filter Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Sort by:</span>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'latest', label: 'Latest' },
                { id: 'popular', label: 'Most Popular' },
                { id: 'featured', label: 'Featured' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    sortBy === option.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Stay Ahead?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how our technology solutions can keep your business at the forefront of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Newspaper className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
=======
      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news and updates from Zion Tech Group delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200">
              Subscribe
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
        </div>
      </section>
=======
      {/* Press Contact CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Press & Media Inquiries</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For press releases, media interviews, or company information, please contact our communications team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Press Team
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Media Kit
=======
      {/* Recent News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-300">Stay updated with our newest announcements and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.slice(3).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* News Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getNewsTypeColor(news.type)} text-white`}>
                    {news.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>

                {/* News Image */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-cyan-400/50" />
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(news.category)} text-white`}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                    {news.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {news.author}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </span>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {news.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {news.externalLink ? (
                    <a
                      href={news.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {sortedNews.length > 9 && (
            <div className="text-center mt-12">
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-cyan-500/50">
                Load More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access our press kit, company logos, executive bios, and media contact information for journalists and media professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Media Relations
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
=======
      title: 'AI-Powered Business Intelligence Suite Update',
      excerpt: 'Enhanced analytics capabilities with real-time insights and predictive modeling.',
      category: 'Product Update',
      date: '2024-08-10',
      readTime: '4 min read',
      image: '📊'
    },
    {
      id: 5,
      title: 'Zion Tech Group Recognized as Top AI Company',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to ethical AI development.',
      category: 'Awards',
      date: '2024-08-05',
      readTime: '2 min read',
      image: '🏆'
    },
    {
      id: 6,
      title: 'New Office Opening in Silicon Valley',
      excerpt: 'Expanding our presence to better serve West Coast clients and tap into local tech talent.',
      category: 'Company',
      date: '2024-07-30',
      readTime: '3 min read',
      image: '🏢'
    },
    {
      id: 7,
      title: 'Cybersecurity Workshop Series Launch',
      excerpt: 'Free educational workshops to help businesses understand and implement cybersecurity best practices.',
      category: 'Events',
      date: '2024-07-25',
      readTime: '6 min read',
      image: '🎓'
    },
    {
      id: 8,
      title: 'AI Ethics Guidelines Publication',
      excerpt: 'Our comprehensive framework for responsible AI development and deployment.',
      category: 'Research',
      date: '2024-07-20',
      readTime: '8 min read',
      image: '📋'
    },
    {
      id: 9,
      title: 'Client Success Story: Manufacturing AI Implementation',
      excerpt: 'How we helped a major manufacturer increase efficiency by 40% using AI-powered automation.',
      category: 'Case Study',
      date: '2024-07-15',
      readTime: '5 min read',
      image: '🏭'
    }
  ];

  const categories = [
    'All News',
    'Product Launch',
    'Partnership',
    'Security',
    'Company',
    'Events',
    'Research',
    'Case Study',
    'Awards'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed about our latest innovations, partnerships, and industry insights. Discover how we're shaping the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Subscribe to Newsletter
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300">
              RSS Feed
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {featuredArticle && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-400" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border border-gray-700/50 hover:border-green-400/50'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </div>

      {/* Featured News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most important announcements and breakthroughs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <div key={news.id} className="group">
                <div className="p-6 rounded-2xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="text-6xl mb-4">{news.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{news.date}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Recent updates and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <div key={news.id} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{news.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{news.date}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, insights, and updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Press Kit */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press & Media
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resources for journalists and media professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Press Releases',
                description: 'Official announcements and company news',
                icon: '📰',
                action: 'View Releases'
              },
              {
                title: 'Media Kit',
                description: 'Company logos, images, and brand guidelines',
                icon: '🎨',
                action: 'Download Kit'
              },
              {
                title: 'Contact Media',
                description: 'Get in touch with our PR team',
                icon: '📞',
                action: 'Contact Us'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
    </div>
  );
}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest insights, product launches, and industry developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-400" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <button className="p-2 text-green-400 hover:text-green-300 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news, insights, and updates delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More</h3>
            <p className="text-gray-300">Discover our services, team, and company information</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Our Services</h4>
                    <p className="text-gray-300 text-sm">Explore our AI and technology solutions</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/about" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">About Us</h4>
                    <p className="text-gray-300 text-sm">Learn about our company and mission</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Contact Us</h4>
                    <p className="text-gray-300 text-sm">Get in touch with our team</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default News;
=======
export default News;
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
