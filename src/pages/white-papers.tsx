import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  Eye, 
  ArrowRight,
  Star,
  Clock,
  Tag,
  Search,
  Filter,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Zap
} from 'lucide-react';

const WhitePapersPage: React.FC = () => {
  const whitePapers = [
    {
      title: 'AI in Healthcare: A Comprehensive Guide to Implementation',
      description: 'This comprehensive white paper explores the current state of AI in healthcare, implementation strategies, and best practices for healthcare organizations looking to adopt AI solutions.',
      author: 'Dr. Sarah Johnson',
      date: 'December 2024',
      category: 'Healthcare AI',
      downloads: 1247,
      views: 3456,
      featured: true,
      tags: ['Healthcare', 'AI', 'Implementation', 'Best Practices'],
      fileSize: '2.8 MB',
      pages: 45,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Quantum Computing: The Future of Financial Services',
      description: 'An in-depth analysis of how quantum computing is revolutionizing financial services, including risk assessment, portfolio optimization, and algorithmic trading.',
      author: 'Dr. Michael Chen',
      date: 'November 2024',
      category: 'Quantum Computing',
      downloads: 892,
      views: 2341,
      featured: true,
      tags: ['Quantum Computing', 'FinTech', 'Risk Management', 'Trading'],
      fileSize: '3.2 MB',
      pages: 52,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Cybersecurity in the Age of AI: Threats and Solutions',
      description: 'A comprehensive analysis of emerging cybersecurity threats in the AI era and innovative solutions to protect organizations from sophisticated attacks.',
      author: 'Alex Rodriguez',
      date: 'October 2024',
      category: 'Cybersecurity',
      downloads: 1567,
      views: 4123,
      featured: false,
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      fileSize: '2.1 MB',
      pages: 38,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Transformation: A Roadmap for Enterprise Success',
      description: 'A strategic guide for enterprise organizations embarking on digital transformation journeys, including frameworks, methodologies, and success metrics.',
      author: 'Jennifer Williams',
      date: 'September 2024',
      category: 'Digital Transformation',
      downloads: 1123,
      views: 2987,
      featured: false,
      tags: ['Digital Transformation', 'Enterprise', 'Strategy', 'Frameworks'],
      fileSize: '2.5 MB',
      pages: 41,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IoT and Edge Computing: Building the Connected Future',
      description: 'An exploration of IoT and edge computing technologies, their applications across industries, and implementation strategies for organizations.',
      author: 'David Kim',
      date: 'August 2024',
      category: 'IoT & Edge Computing',
      downloads: 756,
      views: 1892,
      featured: false,
      tags: ['IoT', 'Edge Computing', 'Connected Devices', 'Implementation'],
      fileSize: '1.9 MB',
      pages: 34,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      description: 'A detailed guide on implementing AI-powered business intelligence solutions to enhance decision-making processes and drive business growth.',
      author: 'Dr. Emily Thompson',
      date: 'July 2024',
      category: 'Business Intelligence',
      downloads: 1345,
      views: 3567,
      featured: false,
      tags: ['Business Intelligence', 'AI', 'Decision Making', 'Analytics'],
      fileSize: '2.3 MB',
      pages: 39,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Blockchain and Web3: The Future of Digital Trust',
      description: 'An analysis of blockchain technology and Web3 applications, their impact on various industries, and implementation considerations.',
      author: 'Robert Martinez',
      date: 'June 2024',
      category: 'Blockchain & Web3',
      downloads: 678,
      views: 1456,
      featured: false,
      tags: ['Blockchain', 'Web3', 'Digital Trust', 'Decentralization'],
      fileSize: '2.7 MB',
      pages: 43,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Sustainable Technology: Green IT Solutions for the Future',
      description: 'A comprehensive guide to implementing sustainable technology solutions that reduce environmental impact while maintaining business efficiency.',
      author: 'Lisa Chen',
      date: 'May 2024',
      category: 'Sustainable Technology',
      downloads: 945,
      views: 2234,
      featured: false,
      tags: ['Sustainability', 'Green IT', 'Environmental Impact', 'Efficiency'],
      fileSize: '1.8 MB',
      pages: 31,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const categories = [
    'All',
    'Healthcare AI',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Business Intelligence',
    'Blockchain & Web3',
    'Sustainable Technology'
  ];

  const featuredPapers = whitePapers.filter(paper => paper.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, digital transformation, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive collection of in-depth research and analysis on emerging technologies. 
              Download expert insights to stay ahead of the curve and make informed decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Request Custom Research
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful white papers that are shaping industry conversations 
              and driving innovation across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPapers.map((paper, index) => (
              <div
                key={paper.title}
                className="group relative p-8 rounded-2xl border border-indigo-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-indigo-400/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-indigo-400 font-semibold">{paper.category}</p>
                    <p className="text-gray-400">By {paper.author}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {paper.description}
                </p>
                
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {paper.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {paper.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {paper.downloads.toLocaleString()} downloads
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>{paper.fileSize}</div>
                    <div>{paper.pages} pages</div>
                  </div>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download White Paper
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of research papers covering the latest trends 
              and technologies across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitePapers.map((paper, index) => (
              <div
                key={paper.title}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${paper.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-indigo-400 font-medium text-sm">{paper.category}</p>
                    <p className="text-gray-400 text-sm">By {paper.author}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {paper.description.substring(0, 120)}...
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{paper.date}</span>
                  <span>{paper.downloads.toLocaleString()} downloads</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-1">
                    {paper.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400">
                    {paper.fileSize} • {paper.pages} pages
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our research by category to find the insights most relevant to your industry and interests.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <div
                key={category}
                className="text-center p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-indigo-400/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {category}
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  {whitePapers.filter(paper => paper.category === category).length} papers
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the research you need? Our team can conduct custom research and analysis 
              on specific topics relevant to your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Request Custom Research
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapersPage;