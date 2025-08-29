import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Eye, 
  ArrowRight,
  Search,
  Filter,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Target,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  ExternalLink
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'emerging-tech', name: 'Emerging Technologies', icon: TrendingUp }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence: A Comprehensive Guide for Enterprise Leaders',
      author: 'Dr. Sarah Chen, CTO',
      date: '2024-01-15',
      category: 'ai-ml',
      summary: 'This comprehensive white paper explores the transformative potential of AI-powered business intelligence, examining current trends, implementation strategies, and future outlook for enterprise organizations.',
      keyInsights: [
        'AI-driven analytics can improve decision-making accuracy by up to 40%',
        'Real-time data processing reduces response time by 60%',
        'Predictive analytics can increase revenue by 15-25%',
        'Integration challenges and solutions for legacy systems'
      ],
      downloads: 2847,
      views: 12500,
      featured: true,
      fileSize: '2.8 MB',
      pages: 45,
      downloadUrl: '/downloads/ai-business-intelligence-whitepaper.pdf',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Enterprise']
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Building Resilient Cybersecurity for the Modern Enterprise',
      author: 'Alex Kim, VP of Cybersecurity',
      date: '2024-01-10',
      category: 'cybersecurity',
      summary: 'A deep dive into zero-trust security principles, implementation strategies, and real-world case studies showing how organizations can achieve comprehensive protection against evolving cyber threats.',
      keyInsights: [
        'Zero-trust reduces security incidents by 80%',
        'Implementation roadmap for enterprise organizations',
        'Cost-benefit analysis of security investments',
        'Integration with existing security infrastructure'
      ],
      downloads: 2156,
      views: 8900,
      featured: true,
      fileSize: '3.2 MB',
      pages: 52,
      downloadUrl: '/downloads/zero-trust-security-whitepaper.pdf',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise Security', 'Risk Management']
    },
    {
      id: 3,
      title: 'Digital Twin Technology: Revolutionizing Manufacturing and Industrial Operations',
      author: 'Marcus Rodriguez, VP of Engineering',
      date: '2023-12-20',
      category: 'digital-transformation',
      summary: 'Explore how digital twin technology is transforming manufacturing, predictive maintenance, and operational efficiency across industrial sectors.',
      keyInsights: [
        'Digital twins can reduce operational costs by 25-30%',
        'Predictive maintenance improves equipment lifespan by 35%',
        'Real-time monitoring reduces downtime by 40%',
        'Implementation strategies for different industry verticals'
      ],
      downloads: 1890,
      views: 7200,
      featured: false,
      fileSize: '2.5 MB',
      pages: 38,
      downloadUrl: '/downloads/digital-twin-manufacturing-whitepaper.pdf',
      tags: ['Digital Twin', 'Manufacturing', 'IoT', 'Predictive Maintenance']
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable and Resilient Applications',
      author: 'Dr. Emily Watson, Head of Cloud Architecture',
      date: '2023-12-15',
      category: 'cloud',
      summary: 'Comprehensive guide to cloud-native architecture principles, best practices, and implementation strategies for modern application development.',
      keyInsights: [
        'Cloud-native reduces infrastructure costs by 40-60%',
        'Auto-scaling improves performance during peak loads',
        'Microservices architecture enhances maintainability',
        'DevOps integration strategies and tools'
      ],
      downloads: 1650,
      views: 6800,
      featured: false,
      fileSize: '2.9 MB',
      pages: 41,
      downloadUrl: '/downloads/cloud-native-architecture-whitepaper.pdf',
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability']
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || paper.date.startsWith(selectedYear);
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const handleDownload = (paper: any) => {
    // Simulate download
    console.log(`Downloading: ${paper.title}`);
    // In a real app, this would trigger an actual download
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and digital transformation insights."
        keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Papers
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive collection of research, insights, and thought leadership 
              on the latest technology trends and industry developments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>In-depth research</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Free downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span>Expert insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWhitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-6 hover:border-cyan-500/50 transition-all duration-300 ${
                  paper.featured ? 'ring-2 ring-cyan-400/50' : 'border-slate-700/50'
                }`}
              >
                {paper.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-yellow-400 font-medium">Featured</span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {paper.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400">{paper.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {paper.summary}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{paper.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>{paper.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{paper.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleDownload(paper)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">File size</div>
                    <div className="text-white font-medium">{paper.fileSize}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. 
              Join thousands of professionals staying ahead of technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Subscribe to Updates
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/blog"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                View Blog
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
