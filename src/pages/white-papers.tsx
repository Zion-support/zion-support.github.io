import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  Search,
  BookOpen
} from 'lucide-react';

const WhitePapers = () => {
  const whitePapers = [
    {
      id: 1,
      title: "AI in Enterprise: A Comprehensive Guide to Implementation",
      description: "This white paper explores the strategic implementation of AI technologies in enterprise environments, covering key considerations, best practices, and ROI analysis.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      category: "Artificial Intelligence",
      downloadCount: "2,450",
      fileSize: "2.3 MB",
      tags: ["AI", "Enterprise", "Implementation"]
    },
    {
      id: 2,
      title: "Quantum Computing: The Future of Computational Power",
      description: "An in-depth analysis of quantum computing's potential impact on various industries and the roadmap to practical applications.",
      author: "Prof. Michael Rodriguez",
      date: "2024-12-20",
      category: "Quantum Computing",
      downloadCount: "1,890",
      fileSize: "3.1 MB",
      tags: ["Quantum Computing", "Technology", "Innovation"]
    },
    {
      id: 3,
      title: "Cybersecurity in the AI Era: Threats and Defenses",
      description: "Comprehensive analysis of emerging cybersecurity threats and AI-powered defense strategies for modern organizations.",
      author: "Alex Thompson",
      date: "2024-11-30",
      category: "Cybersecurity",
      downloadCount: "3,120",
      fileSize: "1.8 MB",
      tags: ["Cybersecurity", "AI", "Security"]
    },
    {
      id: 4,
      title: "Digital Transformation: A Roadmap for Success",
      description: "Strategic guide for organizations embarking on digital transformation journeys, with case studies and best practices.",
      author: "Zion Tech Research Team",
      date: "2024-11-15",
      category: "Digital Transformation",
      downloadCount: "4,200",
      fileSize: "2.7 MB",
      tags: ["Digital Transformation", "Strategy", "Best Practices"]
    }
  ];

  const categories = [
    "All Papers",
    "Artificial Intelligence",
    "Quantum Computing",
    "Cybersecurity",
    "Digital Transformation",
    "Cloud Computing",
    "Data Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Research
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access in-depth research, analysis, and insights from Zion Tech Group's 
              technology experts and industry thought leaders.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === "All Papers"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitePapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {paper.category}
                  </span>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloadCount}
                    </div>
                    <div>{paper.fileSize}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {paper.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {paper.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {paper.author}
                  </div>
                  <span>
                    {new Date(paper.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Download Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download White Paper
                </button>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
              Load More Papers
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to receive notifications about new white papers, 
            research updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Custom Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Looking for specific research or analysis? Our team can create 
            custom white papers tailored to your industry and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Request Custom Research
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <BookOpen className="mr-2 w-5 h-5" />
              View All Research
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;