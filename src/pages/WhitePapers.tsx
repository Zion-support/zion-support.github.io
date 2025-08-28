

import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Eye as EyeIcon,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Search,
  Filter
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 'ai-enterprise-2024',
      title: 'AI in Enterprise: A Comprehensive Guide for 2024',
      description: 'Explore how artificial intelligence is transforming enterprise operations, from automation to decision-making processes.',
      category: 'Artificial Intelligence',
      author: 'Dr. Sarah Chen',
      date: 'December 2024',
      readTime: '15 min read',
      downloads: 2847,
      views: 12543,
      featured: true,
      tags: ['AI', 'Enterprise', 'Automation', 'Digital Transformation'],
      abstract: 'This comprehensive white paper examines the current state of AI adoption in enterprise environments, providing actionable insights for organizations looking to implement AI solutions.',
      keyTopics: [
        'AI adoption strategies for enterprises',
        'ROI measurement and business case development',
        'Integration challenges and solutions',
        'Future trends and predictions'
      ]
    },
    {
      id: 'quantum-computing-future',
      title: 'Quantum Computing: The Future of Computational Power',
      description: 'Dive into the revolutionary world of quantum computing and its implications for AI, cryptography, and scientific research.',
      category: 'Quantum Computing',
      author: 'Prof. Michael Rodriguez',
      date: 'November 2024',
      readTime: '20 min read',
      downloads: 1956,
      views: 8932,
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Cryptography', 'Research'],
      abstract: 'An in-depth exploration of quantum computing principles, current developments, and future applications that will reshape technology as we know it.',
      keyTopics: [
        'Quantum computing fundamentals',
        'Quantum AI applications',
        'Cryptographic implications',
        'Commercial quantum computing timeline'
      ]
    },
    {
      id: 'cybersecurity-framework',
      title: 'Next-Generation Cybersecurity Framework for AI Systems',
      description: 'Learn about advanced cybersecurity strategies specifically designed to protect AI-powered systems and infrastructure.',
      category: 'Cybersecurity',
      author: 'Alex Thompson',
      date: 'October 2024',
      readTime: '18 min read',
      downloads: 3241,
      views: 15678,
      featured: true,
      tags: ['Cybersecurity', 'AI Security', 'Framework', 'Best Practices'],
      abstract: 'This white paper presents a comprehensive cybersecurity framework designed to address the unique challenges of protecting AI systems and ensuring robust security in the age of intelligent automation.',
      keyTopics: [
        'AI-specific security threats',
        'Zero-trust architecture for AI',
        'Adversarial machine learning defense',
        'Compliance and regulatory considerations'
      ]
    },
    {
      id: 'digital-twin-technology',
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'Discover how digital twin technology is revolutionizing industries from manufacturing to healthcare.',
      category: 'Digital Twin',
      author: 'Dr. Emily Watson',
      date: 'September 2024',
      readTime: '16 min read',
      downloads: 2187,
      views: 9876,
      featured: false,
      tags: ['Digital Twin', 'IoT', 'Manufacturing', 'Healthcare'],
      abstract: 'Explore the transformative potential of digital twin technology across various industries, including implementation strategies and real-world use cases.',
      keyTopics: [
        'Digital twin implementation strategies',
        'Industry-specific applications',
        'Data integration and management',
        'ROI and business value'
      ]
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI-Powered Healthcare Diagnostics: Revolutionizing Patient Care',
      description: 'Learn how AI is transforming medical diagnostics and improving patient outcomes through advanced imaging and data analysis.',
      category: 'Healthcare AI',
      author: 'Dr. James Wilson',
      date: 'August 2024',
      readTime: '22 min read',
      downloads: 1876,
      views: 7654,
      featured: false,
      tags: ['Healthcare AI', 'Diagnostics', 'Medical Imaging', 'Patient Care'],
      abstract: 'This white paper examines the current state of AI in healthcare diagnostics, including case studies, regulatory considerations, and future developments.',
      keyTopics: [
        'AI diagnostic accuracy and validation',
        'Regulatory compliance and approval',
        'Integration with existing healthcare systems',
        'Ethical considerations and bias mitigation'
      ]
    },
    {
      id: 'blockchain-ai-integration',
      title: 'Blockchain and AI: Synergistic Technologies for the Future',
      description: 'Explore the convergence of blockchain and artificial intelligence technologies and their combined potential.',
      category: 'Blockchain & AI',
      author: 'Maria Santos',
      date: 'July 2024',
      readTime: '19 min read',
      downloads: 1654,
      views: 6987,
      featured: false,
      tags: ['Blockchain', 'AI', 'DeFi', 'Smart Contracts'],
      abstract: 'Discover how blockchain and AI technologies complement each other, creating new opportunities for decentralized intelligence and autonomous systems.',
      keyTopics: [
        'Decentralized AI networks',
        'AI-powered smart contracts',
        'Blockchain data analytics',
        'Future applications and use cases'
      ]
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Quantum Computing', 'Cybersecurity', 'Digital Twin', 'Healthcare AI', 'Blockchain & AI'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (paperId: string) => {
    // Simulate download
    console.log(`Downloading white paper: ${paperId}`);
    // In a real implementation, this would trigger a download
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, digital twin technology, and more. Download expert insights and research."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access cutting-edge research and insights from our team of experts. 
              Download comprehensive white papers covering the latest developments in AI, 
              quantum computing, cybersecurity, and emerging technologies.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 ${
                  paper.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        paper.category === 'Artificial Intelligence' ? 'bg-purple-500/20 text-purple-300' :
                        paper.category === 'Quantum Computing' ? 'bg-blue-500/20 text-blue-300' :
                        paper.category === 'Cybersecurity' ? 'bg-green-500/20 text-green-300' :
                        paper.category === 'Digital Twin' ? 'bg-cyan-500/20 text-cyan-300' :
                        paper.category === 'Healthcare AI' ? 'bg-red-500/20 text-red-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>

                  {/* Abstract */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {paper.abstract}
                    </p>
                  </div>

                  {/* Key Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {paper.keyTopics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {paper.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {paper.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {paper.readTime}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {paper.downloads.toLocaleString()} downloads
                    </span>
                    <span className="flex items-center gap-1">
                      <EyeIcon className="w-3 h-3" />
                      {paper.views.toLocaleString()} views
                    </span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(paper.id)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download White Paper
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">
                No white papers found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research insights. 
              Join our community of technology professionals and researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe to Updates
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Contact Our Research Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
