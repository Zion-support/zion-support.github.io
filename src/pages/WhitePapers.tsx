import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  Users,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe,
  Award,
  ArrowRight,
  Eye,
  Clock,
  Tag
} from 'lucide-react';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Papers', count: 15, icon: FileText },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 3, icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', count: 2, icon: Rocket }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence: A Comprehensive Analysis',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen, CTO',
      date: '2024-08-15',
      summary: 'In-depth analysis of how AI is transforming business intelligence, including case studies, implementation strategies, and ROI metrics.',
      keyInsights: [
        'AI-driven analytics can improve decision-making accuracy by 40-60%',
        'Implementation costs have decreased by 35% over the past 2 years',
        'ROI typically achieved within 6-12 months of deployment'
      ],
      pages: 45,
      downloads: 2847,
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Analytics', 'ROI'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Implementation Guide for Enterprises',
      category: 'cybersecurity',
      author: 'Alex Thompson, Cybersecurity Director',
      date: '2024-07-20',
      summary: 'Comprehensive guide to implementing zero-trust security architecture, including technical specifications, best practices, and migration strategies.',
      keyInsights: [
        'Zero-trust reduces security incidents by 60-80%',
        'Implementation timeline: 6-18 months depending on organization size',
        'Average cost savings: $2.3M annually for enterprise organizations'
      ],
      pages: 38,
      downloads: 1956,
      featured: true,
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise Security', 'Implementation'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Quantum Computing in AI: Breaking the Classical Barrier',
      category: 'quantum',
      author: 'Dr. James Kim, Quantum Computing Lead',
      date: '2024-06-10',
      summary: 'Exploration of quantum computing applications in AI, including quantum neural networks, optimization algorithms, and future implications.',
      keyInsights: [
        'Quantum AI can solve problems 1000x faster than classical computers',
        'Current quantum advantage achieved in specific optimization problems',
        'Commercial quantum AI expected within 5-10 years'
      ],
      pages: 52,
      downloads: 1247,
      featured: false,
      tags: ['Quantum Computing', 'AI', 'Neural Networks', 'Optimization'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Best Practices for Modern Applications',
      category: 'cloud',
      author: 'Marcus Rodriguez, VP of Engineering',
      date: '2024-05-15',
      summary: 'Comprehensive guide to building cloud-native applications with microservices, containerization, and automated DevOps practices.',
      keyInsights: [
        'Cloud-native reduces infrastructure costs by 40-60%',
        'Deployment frequency increases by 10-100x',
        'Time to market reduced by 50-70%'
      ],
      pages: 41,
      downloads: 1689,
      featured: false,
      tags: ['Cloud Computing', 'Microservices', 'DevOps', 'Architecture'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'AI Ethics and Governance: Building Trust in AI Systems',
      category: 'ai-ml',
      author: 'Dr. Emily Watson, Head of Data Science',
      date: '2024-04-22',
      summary: 'Framework for implementing ethical AI practices, including bias detection, transparency, and accountability mechanisms.',
      keyInsights: [
        'Ethical AI increases customer trust by 35-50%',
        'Regulatory compliance reduces legal risks by 80%',
        'Transparent AI improves decision acceptance by 60%'
      ],
      pages: 36,
      downloads: 1432,
      featured: false,
      tags: ['AI Ethics', 'Governance', 'Transparency', 'Compliance'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Edge Computing and IoT: The Future of Distributed Intelligence',
      category: 'cloud',
      author: 'IoT Team, Zion Tech Group',
      date: '2024-03-18',
      summary: 'Analysis of edge computing trends, IoT integration strategies, and real-world applications across industries.',
      keyInsights: [
        'Edge computing reduces latency by 80-90%',
        'IoT data processing costs reduced by 50-70%',
        'Real-time analytics enable new business models'
      ],
      pages: 33,
      downloads: 1123,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Distributed Systems'],
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive research papers, technical insights, and thought leadership content on AI, cybersecurity, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Research
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep dive into cutting-edge research, technical insights, and thought leadership 
              content from our team of AI and technology experts.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-slate-400">White Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-slate-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40+</div>
              <div className="text-slate-400">Avg. Pages</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Research
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our most popular and impactful white papers, featuring cutting-edge insights and practical implementation guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWhitePapers.filter(paper => paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {categories.find(cat => cat.id === paper.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{paper.author}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(paper.date).toLocaleDateString()}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">{paper.summary}</p>

                  {/* Key Insights */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Insights</h4>
                    <div className="space-y-2">
                      {paper.keyInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats & Tags */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{paper.pages} pages</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads.toLocaleString()}</span>
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download White Paper</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              All
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}White Papers
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Browse our complete collection of research papers and technical insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWhitePapers.filter(paper => !paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {categories.find(cat => cat.id === paper.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{paper.title}</h3>
                    <div className="text-sm text-slate-400 mb-2">
                      By {paper.author} • {new Date(paper.date).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{paper.summary}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{paper.pages} pages</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{paper.downloads.toLocaleString()}</span>
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {paper.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {paper.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600">
                        +{paper.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <button className="w-full px-4 py-2 bg-slate-700/50 text-slate-300 font-medium rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-400/50 border border-slate-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-lg mb-4">No white papers found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Latest Research
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Get notified when we publish new white papers and research insights. 
              Join thousands of technology professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </a>
              <a
                href="/blog"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Read Our Blog
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
