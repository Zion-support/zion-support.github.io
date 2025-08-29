import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  FileText, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  TrendingUp as TrendingUpIcon
} from 'lucide-react';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
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
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || paper.industry === selectedIndustry;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const featuredPapers = whitePapers.filter(paper => paper.featured);

  return (
    <>
      <SEO
        title="White Papers | Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and digital transformation. Gain insights from industry experts."
        keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/white-papers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                White Papers &
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Research
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access our comprehensive collection of research papers, industry insights, and technical 
              documentation covering the latest trends in AI, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{whitePapers.length}+</div>
                <div className="text-gray-400">White Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400">Reader Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        {featuredPapers.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Featured Research
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPapers.map((paper) => (
                  <div key={paper.id} className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 rounded-2xl p-8 border border-purple-500/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                        {paper.category}
                      </span>
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                        {paper.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{paper.title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{paper.summary}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-slate-300 text-sm">{paper.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-purple-400" />
                        <span className="text-slate-300 text-sm">{paper.author}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Key Insights:</h4>
                      <ul className="space-y-2">
                        {paper.keyInsights.slice(0, 3).map((insight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4 text-sm text-slate-400">
                        <span className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloads}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{paper.views}</span>
                        </span>
                      </div>
                      
                      <a
                        href={paper.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Download PDF
                        <Download className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filters Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Search */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search white papers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All White Papers Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">All White Papers</h2>
                <p className="text-gray-300">
                  Showing {filteredWhitePapers.length} of {whitePapers.length} white papers
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitePapers.map((paper) => (
                <div key={paper.id} className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {paper.category}
                      </span>
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {paper.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{paper.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{paper.summary}</p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{paper.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{paper.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-3 text-sm text-slate-400">
                        <span className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloads}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{paper.views}</span>
                        </span>
                      </div>
                      <div className="text-sm text-slate-400">
                        {paper.fileSize} • {paper.pages} pages
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex flex-wrap gap-1">
                        {paper.keyInsights.slice(0, 2).map((insight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                          >
                            {insight.split(' ').slice(0, 3).join(' ')}...
                          </span>
                        ))}
                      </div>
                      <a
                        href={paper.downloadUrl}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
                      >
                        Download
                        <Download className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredWhitePapers.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No white papers found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get notified when we publish new white papers and research insights 
                in your areas of interest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Updates
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
