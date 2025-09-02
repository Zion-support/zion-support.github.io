<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Zap, 
  Globe 
} from 'lucide-react';

interface WhitePaper {
  id: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  publishDate: string;
  author: string;
  downloads: number;
  rating: number;
  reviews: number;
  featured: boolean;
  tags: string[];
  fileSize: string;
  pages: number;
}

const WhitePapers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Categories', count: 0, icon: FileText },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 0, icon: Brain },
    { id: 'cloud', name: 'Cloud Computing', count: 0, icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 0, icon: Shield },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 0, icon: Rocket },
    { id: 'emerging-tech', name: 'Emerging Technologies', count: 0, icon: Zap }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 0 },
    { id: 'healthcare', name: 'Healthcare', count: 0 },
    { id: 'finance', name: 'Finance', count: 0 },
    { id: 'manufacturing', name: 'Manufacturing', count: 0 },
    { id: 'retail', name: 'Retail', count: 0 },
    { id: 'education', name: 'Education', count: 0 }
  ];

  const whitePapers: WhitePaper[] = [
    {
      id: 'ai-business-intelligence',
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      description: 'Explore how artificial intelligence is revolutionizing business intelligence and enabling data-driven decision making across organizations.',
      category: 'ai-ml',
      industry: 'finance',
      publishDate: '2024-12-15',
      author: 'Dr. Sarah Chen',
      downloads: 2847,
      rating: 4.8,
      reviews: 156,
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Data Analytics', 'Decision Making'],
      fileSize: '2.4 MB',
      pages: 24
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security Framework: A Comprehensive Guide',
      description: 'Learn about implementing zero trust security principles to protect your organization from modern cyber threats.',
      category: 'cybersecurity',
      industry: 'healthcare',
      publishDate: '2024-12-10',
      author: 'Michael Rodriguez',
      downloads: 1956,
      rating: 4.9,
      reviews: 89,
      featured: true,
      tags: ['Cybersecurity', 'Zero Trust', 'Network Security', 'Compliance'],
      fileSize: '3.1 MB',
      pages: 32
    },
    {
      id: 'cloud-native-architecture',
      title: 'Building Scalable Cloud-Native Applications',
      description: 'Discover best practices for designing and implementing cloud-native applications that scale with your business needs.',
      category: 'cloud',
      industry: 'manufacturing',
      publishDate: '2024-12-05',
      author: 'Jennifer Kim',
      downloads: 1678,
      rating: 4.7,
      reviews: 134,
      featured: false,
      tags: ['Cloud Computing', 'Microservices', 'Scalability', 'DevOps'],
      fileSize: '2.8 MB',
      pages: 28
    },
    {
      id: 'quantum-computing-future',
      title: 'Quantum Computing: The Future of Technology',
      description: 'An in-depth analysis of quantum computing developments and their potential impact on various industries.',
      category: 'emerging-tech',
      industry: 'education',
      publishDate: '2024-11-30',
      author: 'Dr. Elena Rodriguez',
      downloads: 1234,
      rating: 4.6,
      reviews: 78,
      featured: false,
      tags: ['Quantum Computing', 'Emerging Tech', 'Research', 'Innovation'],
      fileSize: '1.9 MB',
      pages: 20
    },
    {
      id: 'digital-transformation-success',
      title: 'Digital Transformation Success Stories: Lessons Learned',
      description: 'Real-world examples of successful digital transformation initiatives and key strategies for implementation.',
      category: 'digital-transformation',
      industry: 'retail',
      publishDate: '2024-11-25',
      author: 'Alex Thompson',
      downloads: 2156,
      rating: 4.8,
      reviews: 112,
      featured: true,
      tags: ['Digital Transformation', 'Strategy', 'Case Studies', 'Best Practices'],
      fileSize: '2.6 MB',
      pages: 26
    },
    {
      id: 'edge-computing-iot',
      title: 'Edge Computing and IoT: The Next Frontier',
      description: 'Understanding edge computing architecture and its role in powering the Internet of Things revolution.',
      category: 'emerging-tech',
      industry: 'manufacturing',
      publishDate: '2024-11-20',
      author: 'David Wilson',
      downloads: 987,
      rating: 4.5,
      reviews: 67,
      featured: false,
      tags: ['Edge Computing', 'IoT', '5G', 'Industry 4.0'],
      fileSize: '2.1 MB',
      pages: 22
    }
  ];

  // Calculate counts for categories and industries
  useEffect(() => {
    const updateCounts = () => {
      const categoryCounts = categories.map(cat => ({
        ...cat,
        count: cat.id === 'all' ? whitePapers.length : whitePapers.filter(p => p.category === cat.id).length
      }));

      const industryCounts = industries.map(ind => ({
        ...ind,
        count: ind.id === 'all' ? whitePapers.length : whitePapers.filter(p => p.industry === ind.id).length
      }));

      // Update the arrays (in a real app, you'd use state setters)
      categories.splice(0, categories.length, ...categoryCounts);
      industries.splice(0, industries.length, ...industryCounts);
    };

    updateCounts();
  }, []);

  // Filter and search white papers
  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory;
    const matchesIndustry = activeIndustry === 'all' || paper.industry === activeIndustry;
    
    return matchesSearch && matchesCategory && matchesIndustry;
  });

  // Sort white papers
  const sortedWhitePapers = [...filteredWhitePapers].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'oldest':
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    }
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : FileText;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getIndustryName = (industryId: string) => {
    const industry = industries.find(ind => ind.id === industryId);
    return industry ? industry.name : 'General';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return (downloads / 1000000).toFixed(1) + 'M';
    } else if (downloads >= 1000) {
      return (downloads / 1000).toFixed(1) + 'K';
    }
    return downloads.toString();
  };

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'title', label: 'Alphabetical' }
  ];

  return (
    <>
      <SEO 
        title="White Papers & Research - Zion Tech Group"
        description="Access our latest research, insights, and thought leadership content on emerging technologies, digital transformation, and industry trends."
        keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, technology insights"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White Papers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Research</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our latest research, insights, and thought leadership content 
                on emerging technologies, digital transformation, and industry trends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                <select
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Research</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and highly-rated white papers that provide deep insights 
                into critical technology trends and business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {whitePapers.filter(p => p.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <getCategoryIcon categoryId={paper.category} className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{paper.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{formatDate(paper.publishDate)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{getIndustryName(paper.industry)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{paper.rating}</span>
                        <span className="text-xs text-gray-400">({paper.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-400">{paper.pages} pages</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <Download className="w-4 h-4 inline mr-1" />
                        {formatDownloads(paper.downloads)} downloads
                      </div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All White Papers'}
              </h2>
              <p className="text-gray-400">
                {sortedWhitePapers.length} papers found
              </p>
            </div>

            <div className="space-y-4">
              {sortedWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <getCategoryIcon categoryId={paper.category} className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
                          <p className="text-gray-300 mb-3">{paper.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">{paper.fileSize}</div>
                          <div className="flex items-center gap-1 justify-end">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{paper.rating}</span>
                            <span className="text-xs text-gray-400">({paper.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{paper.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{formatDate(paper.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{getIndustryName(paper.industry)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{paper.pages} pages</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">
                            <Download className="w-4 h-4 inline mr-1" />
                            {formatDownloads(paper.downloads)} downloads
                          </span>
                          <span className="text-sm text-gray-400">
                            {getCategoryName(paper.category)}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            <Download className="w-4 h-4 mr-2 inline" />
                            Download
                          </button>
                          <button className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-colors">
                            <ArrowRight className="w-4 h-4 mr-2 inline" />
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get notified when we publish new white papers and research insights. 
                Stay ahead of the curve with cutting-edge technology knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhitePapers;
=======
>>>>>>> origin/main
