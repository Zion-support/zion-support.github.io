

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search,
  Download,
  Calendar,
  User,
  Eye,
  ArrowRight,
  Filter,
  BookOpen,
  TrendingUp,
  Star,
  Clock,
  Tag,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Emerging Technologies', 'Industry Solutions'];
  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Energy'];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence',
      description: 'A comprehensive analysis of how artificial intelligence is transforming business intelligence and decision-making processes across industries.',
      category: 'AI & Machine Learning',
      industry: 'All',
      author: 'Dr. Sarah Chen',
      publishDate: '2024-12-15',
      readTime: '45 min',
      downloads: 2847,
      views: 12500,
      rating: 4.8,
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Analytics'],
      abstract: 'This white paper explores the revolutionary impact of AI-powered business intelligence systems on modern enterprises...',
      keyInsights: [
        'AI-driven analytics increase decision accuracy by 40%',
        'Real-time insights reduce response time by 60%',
        'Predictive capabilities improve forecasting accuracy by 35%'
      ]
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture for Modern Enterprises',
      description: 'Implementing comprehensive zero trust security frameworks to protect against evolving cyber threats in the digital age.',
      category: 'Cybersecurity',
      industry: 'All',
      author: 'Michael Rodriguez',
      publishDate: '2024-11-28',
      readTime: '38 min',
      downloads: 1956,
      views: 8900,
      rating: 4.9,
      featured: true,
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Risk Management'],
      abstract: 'This comprehensive guide outlines the implementation of zero trust security architecture...',
      keyInsights: [
        'Zero trust reduces security incidents by 50%',
        'Identity verification at every access point',
        'Continuous monitoring and adaptive policies'
      ]
    },
    {
      id: 3,
      title: 'Cloud-Native Transformation: A Strategic Guide',
      description: 'Strategic roadmap for organizations transitioning to cloud-native architectures and microservices-based systems.',
      category: 'Cloud Computing',
      industry: 'All',
      author: 'Dr. Emily Watson',
      publishDate: '2024-11-15',
      readTime: '52 min',
      downloads: 1678,
      views: 7200,
      rating: 4.7,
      featured: false,
      tags: ['Cloud Computing', 'Microservices', 'Digital Transformation', 'Architecture'],
      abstract: 'This strategic guide provides a comprehensive framework for cloud-native transformation...',
      keyInsights: [
        'Microservices improve deployment frequency by 3x',
        'Cloud-native reduces infrastructure costs by 40%',
        'Enhanced scalability and resilience'
      ]
    },
    {
      id: 4,
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      description: 'How artificial intelligence is transforming healthcare delivery, diagnosis, and patient outcomes across the medical industry.',
      category: 'AI & Machine Learning',
      industry: 'Healthcare',
      author: 'Dr. James Thompson',
      publishDate: '2024-10-30',
      readTime: '41 min',
      downloads: 2341,
      views: 10500,
      rating: 4.9,
      featured: true,
      tags: ['AI', 'Healthcare', 'Medical Technology', 'Patient Care'],
      abstract: 'This white paper examines the transformative potential of AI in healthcare...',
      keyInsights: [
        'AI improves diagnostic accuracy by 25%',
        'Reduces patient wait times by 30%',
        'Enhances personalized treatment plans'
      ]
    },
    {
      id: 5,
      title: 'Blockchain Solutions for Financial Services',
      description: 'Implementing blockchain technology to enhance security, transparency, and efficiency in financial operations.',
      category: 'Emerging Technologies',
      industry: 'Finance',
      author: 'Lisa Chang',
      publishDate: '2024-10-18',
      readTime: '35 min',
      downloads: 1890,
      views: 6800,
      rating: 4.6,
      featured: false,
      tags: ['Blockchain', 'Financial Services', 'Security', 'Transparency'],
      abstract: 'This research explores blockchain applications in financial services...',
      keyInsights: [
        'Reduces transaction costs by 45%',
        'Improves settlement speed by 80%',
        'Enhanced audit trail and compliance'
      ]
    },
    {
      id: 6,
      title: 'Digital Transformation in Manufacturing',
      description: 'Leveraging Industry 4.0 technologies to create smart, connected, and efficient manufacturing operations.',
      category: 'Digital Transformation',
      industry: 'Manufacturing',
      author: 'Robert Kim',
      publishDate: '2024-09-25',
      readTime: '48 min',
      downloads: 1456,
      views: 5900,
      rating: 4.7,
      featured: false,
      tags: ['Industry 4.0', 'Manufacturing', 'IoT', 'Automation'],
      abstract: 'This comprehensive study examines digital transformation in manufacturing...',
      keyInsights: [
        'Increases production efficiency by 35%',
        'Reduces operational costs by 25%',
        'Improves quality control by 40%'
      ]
    },
    {
      id: 7,
      title: 'Quantum Computing: The Next Frontier',
      description: 'Exploring the potential applications and implications of quantum computing for enterprise technology.',
      category: 'Emerging Technologies',
      industry: 'All',
      author: 'Dr. Alex Johnson',
      publishDate: '2024-09-10',
      readTime: '55 min',
      downloads: 2100,
      views: 9500,
      rating: 4.8,
      featured: true,
      tags: ['Quantum Computing', 'Emerging Tech', 'Research', 'Future Tech'],
      abstract: 'This forward-looking white paper explores quantum computing applications...',
      keyInsights: [
        'Quantum advantage in specific problem domains',
        'Potential for cryptography breakthroughs',
        'New computational paradigms'
      ]
    },
    {
      id: 8,
      title: 'Sustainable Technology Solutions',
      description: 'Implementing green technology solutions to reduce environmental impact while maintaining business efficiency.',
      category: 'Industry Solutions',
      industry: 'Energy',
      author: 'Maria Garcia',
      publishDate: '2024-08-28',
      readTime: '42 min',
      downloads: 1789,
      views: 7800,
      rating: 4.6,
      featured: false,
      tags: ['Sustainability', 'Green Tech', 'Energy Efficiency', 'ESG'],
      abstract: 'This research focuses on sustainable technology implementation...',
      keyInsights: [
        'Reduces carbon footprint by 30%',
        'Lowers energy costs by 25%',
        'Improves corporate sustainability ratings'
      ]
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || paper.industry === selectedIndustry;
    
    return matchesSearch && matchesCategory && matchesIndustry;
  });

  const featuredPapers = whitePapers.filter(paper => paper.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                White Papers
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              In-depth research, insights, and strategic guidance from Zion Tech Group experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
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
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research</h2>
            <p className="text-gray-300">Our most popular and impactful white papers</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                  <span className="text-cyan-400 text-sm font-medium">{paper.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{paper.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{paper.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {paper.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(paper.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {paper.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{paper.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {paper.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {paper.views.toLocaleString()}
                    </span>
                  </div>
                  <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All White Papers</h2>
            <p className="text-gray-300">
              {filteredPapers.length} papers found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </motion.div>

          {filteredPapers.length > 0 ? (
            <div className="space-y-6">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {paper.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium">
                              Featured
                            </span>
                          )}
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                            {paper.category}
                          </span>
                          {paper.industry !== 'All' && (
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">
                              {paper.industry}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{paper.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {paper.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(paper.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {paper.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="text-right mb-4">
                        <div className="text-2xl font-bold text-white mb-1">
                          {paper.downloads.toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-sm">Downloads</div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Download PDF
                        </button>
                        <button className="w-full px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Read Abstract
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedIndustry('All');
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified when new white papers and research are published
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
