

import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Users, 
  Eye,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  ExternalLink,
  Bookmark,
  Share2,
  Tag,
  Category,
  SortAsc,
  SortDesc
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 10 },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, count: 6 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Zap, count: 7 }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Decision Making in 2024',
      category: 'ai',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      downloads: 2500,
      views: 8500,
      pages: 45,
      readTime: '25 min',
      thumbnail: '/images/whitepapers/ai-business-intelligence-2024.jpg',
      description: 'Comprehensive analysis of how AI is revolutionizing business intelligence, with real-world case studies and implementation strategies.',
      tags: ['AI', 'Business Intelligence', 'Decision Making', 'Analytics', 'Case Studies'],
      featured: true,
      premium: false,
      fileSize: '2.8 MB',
      language: 'English'
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Implementation Guide for Enterprise',
      category: 'security',
      date: '2024-01-10',
      author: 'Alex Thompson',
      downloads: 1800,
      views: 6200,
      pages: 38,
      readTime: '20 min',
      thumbnail: '/images/whitepapers/zero-trust-security-enterprise.jpg',
      description: 'Step-by-step guide to implementing zero trust security architecture in enterprise environments.',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Implementation', 'Best Practices'],
      featured: true,
      premium: false,
      fileSize: '2.1 MB',
      language: 'English'
    },
    {
      id: 3,
      title: 'Quantum Computing in Cybersecurity: Preparing for the Future',
      category: 'quantum',
      date: '2024-01-05',
      author: 'Dr. James Wilson',
      downloads: 1200,
      views: 4800,
      pages: 52,
      readTime: '30 min',
      thumbnail: '/images/whitepapers/quantum-computing-cybersecurity.jpg',
      description: 'In-depth analysis of quantum computing\'s impact on cybersecurity and preparation strategies.',
      tags: ['Quantum Computing', 'Cybersecurity', 'Future Tech', 'Encryption', 'Risk Assessment'],
      featured: false,
      premium: true,
      fileSize: '3.2 MB',
      language: 'English'
    },
    {
      id: 4,
      title: 'Cloud-Native DevOps: Building High-Performance Teams',
      category: 'cloud',
      date: '2023-12-20',
      author: 'David Chen',
      downloads: 2100,
      views: 7200,
      pages: 41,
      readTime: '22 min',
      thumbnail: '/images/whitepapers/cloud-native-devops-teams.jpg',
      description: 'Comprehensive guide to building and managing high-performance DevOps teams in cloud-native environments.',
      tags: ['DevOps', 'Cloud Computing', 'Team Building', 'Performance', 'Best Practices'],
      featured: false,
      premium: false,
      fileSize: '2.5 MB',
      language: 'English'
    },
    {
      id: 5,
      title: 'IoT Security: Protecting the Connected World',
      category: 'iot',
      date: '2023-12-15',
      author: 'Dr. Mark Stevens',
      downloads: 1600,
      views: 5800,
      pages: 35,
      readTime: '18 min',
      thumbnail: '/images/whitepapers/iot-security-connected-world.jpg',
      description: 'Analysis of IoT security challenges and comprehensive protection strategies for connected ecosystems.',
      tags: ['IoT', 'Security', 'Connected Devices', 'Protection', 'Risk Management'],
      featured: false,
      premium: false,
      fileSize: '1.9 MB',
      language: 'English'
    },
    {
      id: 6,
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      category: 'ai',
      date: '2023-12-10',
      author: 'Dr. Emily Johnson',
      downloads: 2800,
      views: 9200,
      pages: 48,
      readTime: '26 min',
      thumbnail: '/images/whitepapers/ai-healthcare-patient-care.jpg',
      description: 'Comprehensive overview of AI applications in healthcare and their impact on patient outcomes.',
      tags: ['AI', 'Healthcare', 'Patient Care', 'Medical Technology', 'Innovation'],
      featured: true,
      premium: false,
      fileSize: '3.0 MB',
      language: 'English'
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => 
    (selectedCategory === 'all' || paper.category === selectedCategory) &&
    (paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const sortedWhitePapers = [...filteredWhitePapers].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'downloads':
        return b.downloads - a.downloads;
      case 'views':
        return b.views - a.views;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Other';
  };

  // Update category counts
  React.useEffect(() => {
    categories.forEach(cat => {
      if (cat.id !== 'all') {
        cat.count = whitePapers.filter(paper => paper.category === cat.id).length;
      }
    });
    categories[0].count = whitePapers.length;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers on AI, cybersecurity, cloud computing, quantum computing, and emerging technologies. Expert insights and research findings."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Expert Research & Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access in-depth research, expert analysis, and strategic insights on cutting-edge 
              technologies that are shaping the future of business and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
                Download Latest Papers
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/20">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="date">Date</option>
                <option value="downloads">Downloads</option>
                <option value="views">Views</option>
                <option value="title">Title</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400/20 border-cyan-400/40 text-cyan-400'
                      : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-600/50 hover:border-cyan-400/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful research papers, featuring cutting-edge insights 
              and practical strategies for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedWhitePapers.filter(paper => paper.featured).slice(0, 2).map((paper) => {
              const CategoryIcon = getCategoryIcon(paper.category);
              return (
                <div key={paper.id} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <FileText className="w-20 h-20 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {getCategoryName(paper.category)}
                      </span>
                    </div>
                    {paper.premium && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-2 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                          Premium
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-2 py-1 bg-green-400/20 border border-green-400/30 rounded-full text-green-400 text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(paper.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {paper.readTime}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {paper.pages} pages
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {paper.fileSize}
                      </div>
                    </div>
                    
                    {/* Author */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Author:</p>
                      <span className="inline-flex items-center px-3 py-1 bg-slate-700/50 rounded text-sm text-gray-300">
                        {paper.author}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded text-xs text-cyan-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {paper.views.toLocaleString()} views
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download White Paper
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-20 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of research papers, technical guides, and industry insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedWhitePapers.map((paper) => {
              const CategoryIcon = getCategoryIcon(paper.category);
              return (
                <div key={paper.id} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {getCategoryName(paper.category)}
                      </span>
                    </div>
                    {paper.premium && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-2 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                          Premium
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {paper.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(paper.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {paper.readTime} • {paper.pages} pages
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {paper.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded text-xs text-cyan-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {sortedWhitePapers.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <p className="text-gray-400 text-lg">No white papers match your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Ahead with Expert Research
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified about new white papers, research findings, and industry insights 
            that will keep you ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
              Subscribe to Updates
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
              Contact Research Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
