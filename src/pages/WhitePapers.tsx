import React from 'react';
import { FileText, Download, Eye, Calendar, Users, ArrowRight, Star, Search, Filter, Globe, Brain, Shield, Zap, Building, Rocket } from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "AI Autonomous Systems: Transforming Enterprise Operations",
      description: "A comprehensive guide to implementing AI autonomous systems in enterprise environments, covering architecture, implementation strategies, and ROI measurement.",
      author: "Dr. Sarah Chen",
      authorTitle: "Chief AI Officer, Zion Tech Group",
      date: "March 2025",
      category: "AI & Machine Learning",
      pages: 45,
      downloads: "2,847",
      views: "5,234",
      featured: true,
      tags: ["AI", "Autonomous Systems", "Enterprise", "ROI"],
      abstract: "This white paper explores how AI autonomous systems are revolutionizing enterprise operations, from automated decision-making to intelligent process optimization. Learn about implementation strategies, best practices, and measurable business outcomes.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 2,
      title: "Quantum Computing in Financial Services: A Practical Implementation Guide",
      description: "Explore the practical applications of quantum computing in financial services, including risk assessment, portfolio optimization, and algorithmic trading.",
      author: "Prof. Michael Rodriguez",
      authorTitle: "Quantum Research Director",
      date: "February 2025",
      category: "Quantum Technology",
      pages: 38,
      downloads: "1,923",
      views: "3,456",
      featured: true,
      tags: ["Quantum Computing", "Finance", "Risk Management", "Implementation"],
      abstract: "Discover how quantum computing is transforming financial services through advanced risk modeling, portfolio optimization, and real-time market analysis. This guide provides practical implementation strategies and case studies.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 3,
      title: "SOC2 Compliance Automation: Streamlining Security Audits",
      description: "Learn how to automate SOC2 compliance processes using AI and automation tools, reducing audit time and improving security posture.",
      author: "Alex Thompson",
      authorTitle: "Security Compliance Director",
      date: "January 2025",
      category: "Cybersecurity",
      pages: 32,
      downloads: "1,456",
      views: "2,789",
      featured: false,
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      abstract: "Streamline your SOC2 compliance process with AI-powered automation tools. This white paper covers implementation strategies, tool selection, and best practices for maintaining continuous compliance.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Implementation and ROI Analysis",
      description: "Comprehensive analysis of 5G enterprise solutions, including implementation strategies, cost-benefit analysis, and real-world case studies.",
      author: "Maria Garcia",
      authorTitle: "Network Infrastructure Specialist",
      date: "December 2024",
      category: "Infrastructure",
      pages: 41,
      downloads: "1,234",
      views: "2,345",
      featured: false,
      tags: ["5G", "Enterprise", "Infrastructure", "ROI"],
      abstract: "Understand the business case for 5G enterprise solutions with detailed ROI analysis, implementation roadmaps, and real-world success stories from leading organizations.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 5,
      title: "Digital Transformation Success Framework: A Strategic Approach",
      description: "Strategic framework for successful digital transformation initiatives, including change management, technology selection, and progress measurement.",
      author: "Kleber Santos",
      authorTitle: "CEO, Zion Tech Group",
      date: "November 2024",
      category: "Digital Transformation",
      pages: 52,
      downloads: "2,156",
      views: "4,123",
      featured: true,
      tags: ["Digital Transformation", "Strategy", "Change Management", "Framework"],
      abstract: "Navigate your digital transformation journey with confidence using our proven framework. Learn from successful transformations and avoid common pitfalls that derail initiatives.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 6,
      title: "Blockchain Solutions for Enterprise: Beyond Cryptocurrency",
      description: "Explore practical blockchain applications for enterprise use cases, from supply chain management to digital identity verification.",
      author: "Dr. James Wilson",
      authorTitle: "Blockchain Technology Lead",
      date: "October 2024",
      category: "Emerging Technologies",
      pages: 36,
      downloads: "987",
      views: "1,876",
      featured: false,
      tags: ["Blockchain", "Enterprise", "Supply Chain", "Digital Identity"],
      abstract: "Move beyond cryptocurrency hype to discover real blockchain applications that solve enterprise challenges. This white paper provides practical implementation guidance and success stories.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 7,
      title: "AI-Powered Business Intelligence: From Data to Decisions",
      description: "Transform your data into actionable insights with AI-powered business intelligence tools and methodologies.",
      author: "Dr. Sarah Chen",
      authorTitle: "Chief AI Officer, Zion Tech Group",
      date: "September 2024",
      category: "AI & Machine Learning",
      pages: 28,
      downloads: "1,789",
      views: "3,234",
      featured: false,
      tags: ["AI", "Business Intelligence", "Analytics", "Decision Making"],
      abstract: "Learn how to leverage AI and machine learning to transform raw data into actionable business intelligence that drives strategic decision-making and competitive advantage.",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 8,
      title: "Cloud Migration Strategies: A Comprehensive Guide",
      description: "Step-by-step guide to successful cloud migration, including planning, execution, and optimization phases.",
      author: "David Kim",
      authorTitle: "Cloud Architecture Lead",
      date: "August 2024",
      category: "Cloud & DevOps",
      pages: 44,
      downloads: "1,567",
      views: "2,890",
      featured: false,
      tags: ["Cloud Migration", "DevOps", "Strategy", "Implementation"],
      abstract: "Navigate your cloud migration journey with confidence using our comprehensive guide. Learn proven strategies, avoid common pitfalls, and optimize for cost and performance.",
      downloadUrl: "#",
      previewUrl: "#"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Brain, count: 3, color: "text-cyan-400" },
    { name: "Quantum Technology", icon: Globe, count: 1, color: "text-purple-400" },
    { name: "Cybersecurity", icon: Shield, count: 1, color: "text-red-400" },
    { name: "Infrastructure", icon: Zap, count: 1, color: "text-blue-400" },
    { name: "Digital Transformation", icon: Building, count: 1, color: "text-green-400" },
    { name: "Emerging Technologies", icon: Rocket, count: 1, color: "text-yellow-400" },
    { name: "Cloud & DevOps", icon: Zap, count: 1, color: "text-indigo-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            White Papers & Research
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access in-depth research, technical insights, and strategic guidance from our industry experts. 
            Download comprehensive white papers covering the latest technology trends and implementation strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Browse All Papers
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search white papers, topics, or authors..."
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <select className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Filter className="w-5 h-5 inline mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer group text-center">
              <div className={`w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/20 transition-all duration-200`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">{category.name}</h3>
              <p className="text-gray-400 text-xs">{category.count} papers</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured White Papers */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured White Papers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {whitePapers.filter(paper => paper.featured).map((paper) => (
            <div key={paper.id} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {paper.category}
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{paper.title}</h3>
              <p className="text-gray-300 mb-6">{paper.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{paper.author} - {paper.authorTitle}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{paper.date} • {paper.pages} pages</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Download className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{paper.downloads} downloads • {paper.views} views</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-2">Abstract:</h4>
                <p className="text-gray-300 text-sm">{paper.abstract}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All White Papers */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">All White Papers</h2>
        <div className="space-y-6">
          {whitePapers.map((paper) => (
            <div key={paper.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      paper.category === 'AI & Machine Learning' ? 'bg-cyan-500/20 text-cyan-400' :
                      paper.category === 'Quantum Technology' ? 'bg-purple-500/20 text-purple-400' :
                      paper.category === 'Cybersecurity' ? 'bg-red-500/20 text-red-400' :
                      paper.category === 'Infrastructure' ? 'bg-blue-500/20 text-blue-400' :
                      paper.category === 'Digital Transformation' ? 'bg-green-500/20 text-green-400' :
                      paper.category === 'Emerging Technologies' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-indigo-500/20 text-indigo-400'
                    }`}>
                      {paper.category}
                    </span>
                    {paper.featured && <Star className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{paper.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{paper.author}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{paper.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{paper.pages} pages</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Download className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{paper.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-4">
                    <p className="text-cyan-400 font-bold text-lg">Free Download</p>
                    <p className="text-gray-400 text-sm">PDF Format</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                      <Download className="w-4 h-4 mr-1 inline" />
                      Download
                    </button>
                    <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with New Research</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive notifications about new white papers, research updates, and exclusive insights from our technology experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in Collaborating on Research?</h2>
          <p className="text-gray-300 mb-8">
            We're always looking for industry partners, researchers, and thought leaders to collaborate on 
            white papers and research projects. Let's explore opportunities to share knowledge and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Propose Research Topic
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Contact Research Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}