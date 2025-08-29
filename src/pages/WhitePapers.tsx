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
  Search,
  Star,
  Lightbulb
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', name: 'All Categories' },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps' },
    { id: 'Cybersecurity', name: 'Cybersecurity' },
    { id: 'Digital Transformation', name: 'Digital Transformation' },
    { id: 'IoT & Edge', name: 'IoT & Edge' },
    { id: 'Blockchain', name: 'Blockchain' },
    { id: 'Healthcare Tech', name: 'Healthcare Tech' },
    { id: 'Sustainability', name: 'Sustainability' }
  ];

  const industries = [
    { id: 'All', name: 'All Industries' },
    { id: 'Healthcare', name: 'Healthcare' },
    { id: 'Finance', name: 'Finance' },
    { id: 'Manufacturing', name: 'Manufacturing' },
    { id: 'Retail', name: 'Retail' },
    { id: 'Technology', name: 'Technology' },
    { id: 'Education', name: 'Education' },
    { id: 'Government', name: 'Government' },
    { id: 'Energy', name: 'Energy' }
  ];

  const years = [
    { id: 'All', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' }
  ];

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
      pages: 45,
      fileSize: '2.3 MB',
      downloadUrl: '/downloads/ai-business-intelligence-2030.pdf',
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Digital Transformation']
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of Quantum Computing: Threats and Solutions',
      author: 'Michael Rodriguez, Security Director',
      date: '2024-12-20',
      category: 'Cybersecurity',
      industry: 'Technology',
      summary: 'An in-depth analysis of how quantum computing will revolutionize cybersecurity, including new threats and innovative defense strategies.',
      keyInsights: [
        'Quantum-resistant encryption algorithms',
        'Post-quantum cryptography standards',
        'Threat modeling for quantum attacks',
        'Implementation roadmap for quantum security'
      ],
      downloads: 892,
      views: 3456,
      pages: 38,
      fileSize: '1.8 MB',
      downloadUrl: '/downloads/quantum-cybersecurity-2024.pdf',
      tags: ['Cybersecurity', 'Quantum Computing', 'Encryption', 'Threat Detection']
    },
    {
      id: 3,
      title: 'Edge Computing and IoT: Transforming Manufacturing Operations',
      author: 'Dr. Emily Watson, IoT Specialist',
      date: '2024-11-10',
      category: 'IoT & Edge',
      industry: 'Manufacturing',
      summary: 'Explore how edge computing and IoT technologies are revolutionizing manufacturing operations, from predictive maintenance to real-time quality control.',
      keyInsights: [
        'Edge computing architecture for manufacturing',
        'IoT sensor integration strategies',
        'Real-time analytics implementation',
        'ROI calculation for IoT investments'
      ],
      downloads: 756,
      views: 2890,
      pages: 32,
      fileSize: '1.5 MB',
      downloadUrl: '/downloads/edge-iot-manufacturing-2024.pdf',
      tags: ['IoT', 'Edge Computing', 'Manufacturing', 'Industry 4.0']
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || paper.industry === selectedIndustry;
    const matchesYear = selectedYear === 'All' || paper.date.startsWith(selectedYear);
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesIndustry && matchesYear && matchesSearch;
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
              
              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredWhitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                      {paper.category}
                    </span>
                    <span className="text-sm text-gray-400">{paper.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{paper.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <FileText className="w-4 h-4" />
                    <span>{paper.pages} pages</span>
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
