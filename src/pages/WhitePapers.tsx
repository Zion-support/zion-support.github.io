import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '../components/SEO';
import { FileText, 
  Download, 
  Calendar, 
  Users, 
  Eye, 
  Search,
  Filter,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Star,
  TrendingUp,
  Award,
  Zap,
  BookOpen,
  ExternalLink,
  Clock,
  Tag
 } from 'lucide-react.ts';

export default function WhitePapers(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 }
  ];

  const whitePapers = [
    {
      id: any1,
      title: 'The Future of AI-Powered Business Intelligence: A Comprehensive Guide',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      publishDate: '2024-01-15',
      downloads: 2847,
      views: 12500,
      summary: 'Explore how artificial intelligence is revolutionizing business intelligence, from predictive analytics to automated decision-making systems.',
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Analytics'],
      fileSize: '2.4 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/ai-powered-business-intelligence-2024.pdf',
      readMore: '/white-papers/ai-powered-business-intelligence-2024'
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Implementation Best Practices',
      category: 'cybersecurity',
      author: 'Marcus Rodriguez, Head of Cybersecurity',
      publishDate: '2023-12-20',
      downloads: 1956,
      views: 8900,
      summary: 'Comprehensive guide to implementing zero trust security architecture in enterprise environments.',
      tags: ['Cybersecurity', 'Zero Trust', 'Network Security', 'Enterprise'],
      fileSize: '3.1 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/zero-trust-security-architecture-2023.pdf',
      readMore: '/white-papers/zero-trust-security-architecture-2023'
    },
    {
      id: 3,
      title: 'Cloud FinOps: Optimizing Cloud Costs with AI and Automation',
      category: 'cloud-devops',
      author: 'Alex Thompson, Director of Cloud Operations',
      publishDate: '2023-11-28',
      downloads: 1678,
      views: 7200,
      summary: 'Learn how to implement FinOps practices to optimize cloud spending and improve operational efficiency.',
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'DevOps'],
      fileSize: '2.8 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/cloud-finops-optimization-2023.pdf',
      readMore: '/white-papers/cloud-finops-optimization-2023'
    },
    {
      id: 4,
      title: 'Digital Twin Technology: Transforming Manufacturing and Operations',
      category: 'digital-transformation',
      author: 'Dr. Emily Watson, VP of Healthcare Technology',
      publishDate: '2023-10-15',
      downloads: 1432,
      views: 6500,
      summary: 'Discover how digital twin technology is revolutionizing manufacturing, healthcare, and infrastructure management.',
      tags: ['Digital Twin', 'Manufacturing', 'IoT', 'Digital Transformation'],
      fileSize: '3.5 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/digital-twin-technology-2023.pdf',
      readMore: '/white-papers/digital-twin-technology-2023'
    },
    {
      id: 5,
      title: 'AI in Healthcare: Ethical Considerations and Implementation Guidelines',
      category: 'healthcare-tech',
      author: 'Dr. Emily Watson, VP of Healthcare Technology',
      publishDate: '2023-09-20',
      downloads: 1890,
      views: 8200,
      summary: 'Comprehensive analysis of AI applications in healthcare, including ethical considerations and regulatory compliance.',
      tags: ['Healthcare AI', 'Ethics', 'Regulatory Compliance', 'Medical Technology'],
      fileSize: '2.9 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/ai-healthcare-ethics-2023.pdf',
      readMore: '/white-papers/ai-healthcare-ethics-2023'
    },
    {
      id: 6,
      title: 'Quantum Computing: The Next Frontier in AI and Cryptography',
      category: 'quantum-computing',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      publishDate: '2023-08-12',
      downloads: 2341,
      views: 10500,
      summary: 'Explore the intersection of quantum computing, artificial intelligence, and cryptography.',
      tags: ['Quantum Computing', 'AI', 'Cryptography', 'Future Technology'],
      fileSize: '4.2 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/quantum-computing-ai-cryptography-2023.pdf',
      readMore: '/white-papers/quantum-computing-ai-cryptography-2023'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for the Modern Enterprise',
      category: 'sustainability',
      author: 'Priya Patel, Head of Data Science',
      publishDate: '2023-07-25',
      downloads: 1123,
      views: 5800,
      summary: 'Learn how to implement sustainable technology practices and reduce your organization\'s environmental impact.',
      tags: ['Sustainability', 'Green IT', 'Environmental Impact', 'Enterprise'],
      fileSize: '2.6 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/sustainable-technology-green-it-2023.pdf',
      readMore: '/white-papers/sustainable-technology-green-it-2023'
    },
    {
      id: 8,
      title: 'Edge Computing and IoT: Building the Connected Future',
      category: 'digital-transformation',
      author: 'Alex Thompson, Director of Cloud Operations',
      publishDate: '2023-06-18',
      downloads: 1567,
      views: 7100,
      summary: 'Comprehensive guide to edge computing and IoT implementation strategies for enterprise environments.',
      tags: ['Edge Computing', 'IoT', 'Enterprise', 'Digital Transformation'],
      fileSize: '3.3 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/edge-computing-iot-enterprise-2023.pdf',
      readMore: '/white-papers/edge-computing-iot-enterprise-2023'
    }
  ];

  // Calculate category counts
  React.useEffect(()  => {
    const categoryCounts = categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' ? whitePapers.length: anywhitePapers.filter(wp  => wp.category === cat.id).length
    }));
  }, []);

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'White Papers Published', value: '25+', icon: FileText },
    { label: 'Total Downloads', value: '50K+', icon: Download },
    { label: 'Industry Recognition', value: '15+ Awards', icon: Award },
    { label: 'Research Partners', value: '20+ Universities', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Download our comprehensive white papers and research on AI, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-8"
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            White Papers & Research
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            Access our latest research, insights, and technical expertise on cutting-edge 
            technologies that are shaping the future of business.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md: anygrid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index)  => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-1 px-2 py-1 bg-slate-600 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
            {filteredWhitePapers.map((paper, index)  => (
              <motion.article
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {categories.find(c => c.id === paper.category)?.name}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                    <span>By {paper.author}</span>
                    <span>•</span>
                    <time>{new Date(paper.publishDate).toLocaleDateString()}</time>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {paper.summary}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* File Info */}
                <div className="flex items-center justify-between mb-6 text-sm text-slate-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{paper.format}</span>
                    </span>
                    <span>{paper.fileSize}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <a 
                    href={paper.readMore}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  
                  <a 
                    href={paper.downloadUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-700/50 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Featured Research Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index)  => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-300 text-sm">
                  {whitePapers.filter(wp => wp.category === category.id).length} papers available
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated with Our Research</h2>
            <p className="text-slate-300 mb-8">
              Get notified when we publish new white papers and research insights. 
              Join our community of technology professionals and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Research Team
              </a>
              <a 
                href="/blog"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
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
