

import React, { useState } from 'react';
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
  Filter,
  Rocket,
  Cloud,
  Database,
  Globe
} from 'lucide-react';

export default function WhitePapers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

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
        'Integration with IoT and AI',
        'ROI and business value'
      ]
    },
    {
      id: 'cloud-native-architecture',
      title: 'Cloud-Native Architecture: Building Scalable and Resilient Systems',
      description: 'Learn the principles of cloud-native architecture and how to design systems that scale automatically and recover from failures gracefully.',
      category: 'Cloud Computing',
      author: 'Jennifer Kim',
      date: 'August 2024',
      readTime: '22 min read',
      downloads: 1876,
      views: 8765,
      featured: false,
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability'],
      abstract: 'This white paper explores cloud-native architecture principles, including microservices, containerization, and DevOps practices that enable organizations to build and deploy applications faster and more reliably.',
      keyTopics: [
        'Microservices architecture patterns',
        'Container orchestration strategies',
        'DevOps and CI/CD pipelines',
        'Monitoring and observability'
      ]
    },
    {
      id: 'data-analytics-business-intelligence',
      title: 'Data Analytics and Business Intelligence: Driving Growth Through Insights',
      description: 'How organizations are leveraging data analytics and BI tools to make informed decisions and drive sustainable growth.',
      category: 'Data Analytics',
      author: 'David Thompson',
      date: 'July 2024',
      readTime: '19 min read',
      downloads: 2341,
      views: 11234,
      featured: false,
      tags: ['Data Analytics', 'Business Intelligence', 'Big Data', 'Decision Making'],
      abstract: 'Discover how leading organizations are using data analytics and business intelligence to gain competitive advantages, optimize operations, and create new business opportunities.',
      keyTopics: [
        'Data-driven decision making',
        'Big data processing strategies',
        'BI tool selection and implementation',
        'Data governance and quality'
      ]
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Quantum Computing', 'Cybersecurity', 'Digital Twin', 'Cloud Computing', 'Data Analytics'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (paperId: string) => {
    // Simulate download
    console.log(`Downloading white paper: ${paperId}`);
    // In a real implementation, this would trigger a download
  };

  const handleView = (paperId: string) => {
    // Simulate view
    console.log(`Viewing white paper: ${paperId}`);
    // In a real implementation, this would open the paper
  };

  const handleShare = (paperId: string) => {
    // Simulate share
    console.log(`Sharing white paper: ${paperId}`);
    // In a real implementation, this would open share options
  };

  const handleBookmark = (paperId: string) => {
    // Simulate bookmark
    console.log(`Bookmarking white paper: ${paperId}`);
    // In a real implementation, this would save to bookmarks
  };

  return (
    <>
      <SEO 
        title="White Papers - Zion Tech Group | AI, Quantum Computing, Cybersecurity Research"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, digital twin technology, and more. Expert insights from industry leaders."
        keywords="white papers, AI research, quantum computing, cybersecurity, digital twin, cloud computing, data analytics, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <FileText className="w-20 h-20 mx-auto text-zion-cyan mb-4" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              White Papers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-gray-300"
            >
              Access our comprehensive collection of research papers, technical guides, and industry insights. 
              Expert analysis from leading researchers and practitioners in AI, quantum computing, cybersecurity, and more.
            </motion.p>
            
            {/* Search and Filter Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search white papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </div>

        {/* White Papers Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredWhitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  {paper.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{paper.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
                    Key Topics
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {paper.keyTopics.slice(0, 4).map((topic, index) => (
                      <div key={index} className="flex items-center text-gray-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {paper.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {paper.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads.toLocaleString()} downloads
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleDownload(paper.id)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    📥 Download
                  </button>
                  <button
                    onClick={() => handleView(paper.id)}
                    className="flex-1 bg-transparent border border-white/30 text-white text-center py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    👁️ View
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">No white papers found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center py-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Get notified when we publish new white papers and research insights. 
              Join our community of technology professionals and researchers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                ✉️ Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
