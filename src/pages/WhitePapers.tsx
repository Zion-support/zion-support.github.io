import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Search,
  Filter,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Brain,
  Shield,
  Code,
  Zap,
  Lightbulb,
  Target,
  Building,
  Globe,
  CheckCircle,
  Play,
  Pause,
  Stop,
  Video,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Eye,
  Bookmark,
  Share2
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', count: 35, icon: FileText },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 10, icon: Shield },
    { id: 'iot', name: 'IoT & Edge Computing', count: 5, icon: Wifi }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Business Operations in 2027',
      description: 'Comprehensive analysis of how AI will transform business operations, including autonomous decision-making, predictive analytics, and intelligent automation.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '25 min read',
      downloads: 15420,
      rating: 4.9,
      image: '/white-papers/ai-autonomous-business-2027.jpg',
      tags: ['AI', 'Business Operations', 'Automation', '2027 Trends'],
      featured: true,
      fileSize: '4.2 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/ai-autonomous-business-2027.pdf',
      abstract: 'This white paper explores the revolutionary impact of AI on business operations, examining how autonomous systems will reshape decision-making processes, operational efficiency, and competitive advantage in the coming years.'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking the Classical Barrier',
      description: 'Deep dive into quantum computing principles, current state of the technology, and its applications in solving previously intractable problems.',
      category: 'quantum',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-10',
      readTime: '30 min read',
      downloads: 12850,
      rating: 4.8,
      image: '/white-papers/quantum-computing-breakthrough.jpg',
      tags: ['Quantum Computing', 'Technology', 'Research', 'Innovation'],
      featured: true,
      fileSize: '5.1 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/quantum-computing-breakthrough.pdf',
      abstract: 'An in-depth exploration of quantum computing fundamentals, current technological achievements, and the roadmap to quantum advantage in practical applications.'
    },
    {
      id: 3,
      title: 'Zero Trust Security: The New Paradigm for Enterprise Protection',
      description: 'Comprehensive guide to implementing zero trust security architecture, including best practices, implementation strategies, and real-world case studies.',
      category: 'cybersecurity',
      author: 'Alex Thompson',
      date: '2025-01-08',
      readTime: '20 min read',
      downloads: 11230,
      rating: 4.7,
      image: '/white-papers/zero-trust-security-paradigm.jpg',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Best Practices'],
      featured: false,
      fileSize: '3.8 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/zero-trust-security-paradigm.pdf',
      abstract: 'This white paper examines the evolution of cybersecurity from traditional perimeter-based models to zero trust architectures, providing actionable insights for enterprise implementation.'
    },
    {
      id: 4,
      title: 'IoT Edge Computing: Transforming Data Processing at the Source',
      description: 'Analysis of edge computing technologies and their role in IoT deployments, including performance optimization and real-time processing capabilities.',
      category: 'iot',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '18 min read',
      downloads: 9870,
      rating: 4.6,
      image: '/white-papers/iot-edge-computing-transformation.jpg',
      tags: ['IoT', 'Edge Computing', 'Data Processing', 'Real-time Analytics'],
      featured: false,
      fileSize: '3.2 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/iot-edge-computing-transformation.pdf',
      abstract: 'Exploring how edge computing is revolutionizing IoT deployments by enabling real-time data processing, reduced latency, and improved system reliability.'
    },
    {
      id: 5,
      title: 'AI-Powered Healthcare: Revolutionizing Patient Care and Diagnosis',
      description: 'Comprehensive study of AI applications in healthcare, including diagnostic accuracy, treatment optimization, and patient outcome improvements.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      date: '2024-12-28',
      readTime: '22 min read',
      downloads: 14560,
      rating: 4.9,
      image: '/white-papers/ai-powered-healthcare-revolution.jpg',
      tags: ['AI', 'Healthcare', 'Diagnosis', 'Patient Care'],
      featured: false,
      fileSize: '4.5 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/ai-powered-healthcare-revolution.pdf',
      abstract: 'This research paper examines the transformative impact of AI on healthcare delivery, focusing on diagnostic accuracy, treatment optimization, and improved patient outcomes.'
    },
    {
      id: 6,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      description: 'Analysis of enterprise blockchain applications, including supply chain management, digital identity, and smart contract implementations.',
      category: 'cybersecurity',
      author: 'Marcus Chen',
      date: '2024-12-20',
      readTime: '16 min read',
      downloads: 8760,
      rating: 4.5,
      image: '/white-papers/blockchain-enterprise-beyond-crypto.jpg',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Smart Contracts'],
      featured: false,
      fileSize: '2.9 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/blockchain-enterprise-beyond-crypto.pdf',
      abstract: 'Exploring practical enterprise applications of blockchain technology beyond cryptocurrency, focusing on supply chain transparency and digital identity management.'
    },
    {
      id: 7,
      title: '5G and Beyond: The Future of Wireless Communication',
      description: 'Comprehensive analysis of 5G technology, its current deployment status, and the roadmap to 6G and beyond.',
      category: 'iot',
      author: 'Dr. James Wilson',
      date: '2024-12-15',
      readTime: '24 min read',
      downloads: 10240,
      rating: 4.7,
      image: '/white-papers/5g-beyond-future-wireless.jpg',
      tags: ['5G', 'Wireless Communication', 'Technology', 'Innovation'],
      featured: false,
      fileSize: '4.1 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/5g-beyond-future-wireless.pdf',
      abstract: 'This white paper examines the evolution of wireless communication technologies, from current 5G deployments to future 6G capabilities and applications.'
    },
    {
      id: 8,
      title: 'Machine Learning in Financial Services: Risk Assessment and Fraud Detection',
      description: 'Analysis of ML applications in financial services, including risk modeling, fraud detection, and algorithmic trading.',
      category: 'ai-ml',
      author: 'Dr. Lisa Park',
      date: '2024-12-10',
      readTime: '19 min read',
      downloads: 13450,
      rating: 4.8,
      image: '/white-papers/ml-financial-services-risk-fraud.jpg',
      tags: ['Machine Learning', 'Financial Services', 'Risk Assessment', 'Fraud Detection'],
      featured: false,
      fileSize: '3.7 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/white-papers/ml-financial-services-risk-fraud.pdf',
      abstract: 'Exploring how machine learning is transforming financial services through improved risk assessment, fraud detection, and algorithmic trading capabilities.'
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredWhitePapers = whitePapers.filter(paper => paper.featured);
  const regularWhitePapers = filteredWhitePapers.filter(paper => !paper.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              White
              <span className="block text-zion-cyan">Papers</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Deep insights, cutting-edge research, and thought leadership from Zion Tech Group. 
              Download our comprehensive white papers on the latest technology trends and innovations.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>35+ White Papers</span>
              </div>
              <div className="flex items-center">
                <Download className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>Expert Authors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/20'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      {featuredWhitePapers.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Research</h2>
              <p className="text-zion-slate-light">Our most popular and impactful white papers</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredWhitePapers.map((paper, index) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                    {/* White Paper Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative">
                      <FileText className="w-16 h-16 text-zion-cyan" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-zion-cyan text-white text-xs rounded-full font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {paper.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {paper.readTime}
                        </span>
                        <span className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          {paper.downloads.toLocaleString()}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {paper.title}
                      </h3>
                      
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {paper.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-zion-cyan font-semibold mb-3">Abstract:</h4>
                        <p className="text-zion-slate-light text-sm leading-relaxed">
                          {paper.abstract}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <p className="text-zion-cyan font-semibold">{paper.author}</p>
                          <p className="text-zion-slate-light">{paper.fileSize} • {paper.fileType}</p>
                        </div>
                        <button className="flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group">
                          Download White Paper
                          <Download className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All White Papers</h2>
            <p className="text-zion-slate-light">Browse our complete collection of research and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularWhitePapers.map((paper, index) => (
              <motion.article
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                  {/* White Paper Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-zion-cyan" />
                  </div>
                  
                  <div className="p-6 flex-1">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {paper.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {paper.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                      {paper.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-zion-cyan font-semibold mb-2 text-sm">Abstract:</h4>
                      <p className="text-zion-slate-light text-xs leading-relaxed line-clamp-3">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm">
                        <p className="text-zion-cyan font-semibold">{paper.author}</p>
                        <p className="text-zion-slate-light">{paper.fileSize}</p>
                      </div>
                      <button className="flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group">
                        Download
                        <Download className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Ahead with Our Research
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get notified when we publish new white papers and research insights. 
              Stay informed about the latest technology trends and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe to Updates
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Custom Research
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
