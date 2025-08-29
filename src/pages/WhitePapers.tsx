import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  Eye, 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  Award,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation', 'IoT & Edge', 'Blockchain', 'Healthcare Tech', 'Sustainability'];
  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education', 'Government', 'Energy'];
  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence: A Comprehensive Guide to 2030',
      author: 'Dr. Sarah Chen, CTO',
      date: '2025-01-15',
      category: 'AI & Machine Learning',
      industry: 'Technology',
      summary: 'This comprehensive white paper explores the evolution of AI-powered business intelligence, examining emerging trends, technologies, and best practices that will shape the landscape through 2030.',
      keyInsights: [
        'Emerging AI algorithms and their business applications',
        'Integration strategies for legacy systems',
        'ROI measurement frameworks for AI initiatives',
        'Ethical considerations in AI deployment'
      ],
      downloads: 1247,
      views: 5678,
      featured: true,
      fileSize: '2.8 MB',
      pages: 45,
      downloadUrl: '/white-papers/ai-business-intelligence-2030.pdf',
      image: '/images/white-papers/ai-bi-2030.jpg'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Implementing Enterprise-Grade Protection',
      author: 'Lisa Thompson, Head of Cybersecurity',
      date: '2024-12-20',
      category: 'Cybersecurity',
      industry: 'Technology',
      summary: 'A detailed analysis of zero-trust security principles and practical implementation strategies for enterprise organizations seeking to enhance their security posture.',
      keyInsights: [
        'Core principles of zero-trust architecture',
        'Implementation roadmap and best practices',
        'Integration with existing security infrastructure',
        'Cost-benefit analysis and ROI metrics'
      ],
      downloads: 892,
      views: 3456,
      featured: true,
      fileSize: '3.2 MB',
      pages: 38,
      downloadUrl: '/white-papers/zero-trust-security-architecture.pdf',
      image: '/images/white-papers/zero-trust-security.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation in Healthcare: Leveraging AI for Patient Outcomes',
      author: 'Dr. Emily Watson, Head of AI Research',
      date: '2024-11-28',
      category: 'Healthcare Tech',
      industry: 'Healthcare',
      summary: 'An in-depth exploration of how AI and digital technologies are transforming healthcare delivery, improving patient outcomes, and reducing operational costs.',
      keyInsights: [
        'AI applications in medical diagnostics',
        'Digital health platform architectures',
        'Regulatory compliance considerations',
        'Success metrics and outcome measurement'
      ],
      downloads: 1567,
      views: 6234,
      featured: false,
      fileSize: '4.1 MB',
      pages: 52,
      downloadUrl: '/white-papers/digital-transformation-healthcare.pdf',
      image: '/images/white-papers/healthcare-digital.jpg'
    },
    {
      id: 4,
      title: 'Cloud FinOps Optimization: Strategies for Cost Management and Efficiency',
      author: 'David Kim, Head of Cloud & DevOps',
      date: '2024-10-15',
      category: 'Cloud & DevOps',
      industry: 'Technology',
      summary: 'A comprehensive guide to implementing FinOps practices in cloud environments, optimizing costs while maintaining performance and scalability.',
      keyInsights: [
        'Cloud-native reduces infrastructure costs by 40-60%',
        'Auto-scaling improves performance during peak loads',
        'Microservices architecture enhances maintainability',
        'DevOps integration strategies and tools'
      ],
      downloads: 734,
      views: 2987,
      featured: false,
      fileSize: '2.9 MB',
      pages: 41,
      downloadUrl: '/downloads/cloud-native-architecture-whitepaper.pdf',
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability']
    }
  ];
  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || paper.industry === selectedIndustry;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesIndustry && matchesSearch;
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
                  <div className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>{paper.pages} pages</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{paper.summary}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Insights:</h4>
                    <ul className="space-y-1">
                      {paper.keyInsights.slice(0, 2).map((insight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <a
                      href={paper.downloadUrl}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Download
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
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
