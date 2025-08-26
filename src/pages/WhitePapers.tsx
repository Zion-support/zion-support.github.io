import React from 'react';
import { FileText, Download, Calendar, User, Tag, ArrowRight, Search, Filter, BookOpen, Globe, Zap, Target, TrendingUp, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3, Link } from 'lucide-react';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      title: "AI-Powered Business Transformation: A Comprehensive Guide",
      description: "Explore how artificial intelligence is revolutionizing business operations and driving digital transformation across industries.",
      author: "Dr. Sarah Chen",
      date: "December 2024",
      category: "Artificial Intelligence",
      downloads: "2,847",
      tags: ["AI", "Digital Transformation", "Business Strategy"],
      pdfUrl: "#"
    },
    {
      title: "Quantum Computing in Enterprise: Opportunities and Challenges",
      description: "An in-depth analysis of quantum computing applications in enterprise environments and implementation strategies.",
      author: "Prof. Michael Rodriguez",
      date: "November 2024",
      category: "Quantum Computing",
      downloads: "1,923",
      tags: ["Quantum Computing", "Enterprise", "Technology"],
      pdfUrl: "#"
    },
    {
      title: "Cybersecurity in the Age of AI: Threats and Defenses",
      description: "Understanding emerging cybersecurity challenges and AI-powered defense mechanisms for modern organizations.",
      author: "Alex Thompson",
      date: "October 2024",
      category: "Cybersecurity",
      downloads: "3,156",
      tags: ["Cybersecurity", "AI", "Threat Defense"],
      pdfUrl: "#"
    },
    {
      title: "Edge Computing and IoT: Building the Connected Future",
      description: "Comprehensive guide to edge computing infrastructure and IoT integration for smart city and industrial applications.",
      author: "Dr. Emily Watson",
      date: "September 2024",
      category: "Edge Computing",
      downloads: "1,654",
      tags: ["Edge Computing", "IoT", "Smart Cities"],
      pdfUrl: "#"
    },
    {
      title: "Blockchain Technology: Beyond Cryptocurrency",
      description: "Exploring blockchain applications in supply chain, healthcare, and enterprise systems.",
      author: "David Kim",
      date: "August 2024",
      category: "Blockchain",
      downloads: "2,341",
      tags: ["Blockchain", "Supply Chain", "Enterprise"],
      pdfUrl: "#"
    },
    {
      title: "Green IT: Sustainable Technology Solutions",
      description: "Implementing environmentally conscious technology solutions for modern businesses.",
      author: "Lisa Anderson",
      date: "July 2024",
      category: "Green IT",
      downloads: "1,789",
      tags: ["Sustainability", "Green Technology", "Business"],
      pdfUrl: "#"
    }
  ];

  const categories = [
    "All Categories",
    "Artificial Intelligence",
    "Quantum Computing",
    "Cybersecurity",
    "Edge Computing",
    "Blockchain",
    "Green IT",
    "Cloud Computing",
    "Data Analytics"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === "All Categories" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Research & Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Papers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive research papers and technical documentation 
              to stay ahead of technology trends and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {paper.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    {paper.downloads}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {paper.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {paper.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {paper.date}
                  </div>
                </div>
                
                <a
                  href={paper.pdfUrl}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
          
          {filteredPapers.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Research Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our key research domains and stay informed about 
              the latest technology trends and innovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1, 9).map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category === "Artificial Intelligence" && <Brain className="w-8 h-8 text-white" />}
                  {category === "Quantum Computing" && <Atom className="w-8 h-8 text-white" />}
                  {category === "Cybersecurity" && <Shield className="w-8 h-8 text-white" />}
                  {category === "Edge Computing" && <Wifi className="w-8 h-8 text-white" />}
                  {category === "Blockchain" && <Link className="w-8 h-8 text-white" />}
                  {category === "Green IT" && <Leaf className="w-8 h-8 text-white" />}
                  {category === "Cloud Computing" && <Cloud className="w-8 h-8 text-white" />}
                  {category === "Data Analytics" && <BarChart3 className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Informed with Our Research
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to cutting-edge research and insights that can 
            transform your business and technology strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Custom Research
            </a>
            <a
              href="/resources"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;