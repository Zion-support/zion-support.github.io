import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Atom,
  Zap,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Cybersecurity: The Future of Digital Defense",
      description: "Explore how artificial intelligence is revolutionizing cybersecurity with advanced threat detection, automated response systems, and predictive security analytics.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "Cybersecurity",
      downloads: 1247,
      views: 3456,
      tags: ["AI", "Cybersecurity", "Threat Detection"],
      icon: Shield,
      color: "text-red-400"
    },
    {
      id: 2,
      title: "Quantum Computing in Enterprise: A Practical Guide",
      description: "Learn how quantum computing is transforming business operations, from optimization problems to machine learning applications.",
      author: "Prof. Michael Rodriguez",
      date: "2024-01-10",
      category: "Quantum Computing",
      downloads: 892,
      views: 2341,
      tags: ["Quantum Computing", "Enterprise", "Optimization"],
      icon: Atom,
      color: "text-purple-400"
    },
    {
      id: 3,
      title: "Edge AI: Bringing Intelligence to the Network Edge",
      description: "Discover how edge computing combined with AI is enabling real-time decision making and reducing latency in critical applications.",
      author: "Dr. Emily Watson",
      date: "2024-01-05",
      category: "Edge Computing",
      downloads: 1567,
      views: 4123,
      tags: ["Edge Computing", "AI", "Real-time"],
      icon: Zap,
      color: "text-green-400"
    },
    {
      id: 4,
      title: "Digital Twins: The Next Generation of Asset Management",
      description: "Understand how digital twin technology is revolutionizing industries from manufacturing to healthcare with real-time monitoring and predictive analytics.",
      author: "Dr. James Thompson",
      date: "2023-12-20",
      category: "Digital Twins",
      downloads: 1103,
      views: 2987,
      tags: ["Digital Twins", "IoT", "Predictive Analytics"],
      icon: Cloud,
      color: "text-blue-400"
    },
    {
      id: 5,
      title: "AI in Healthcare: Transforming Patient Care",
      description: "Explore the applications of AI in healthcare, from diagnostic assistance to personalized treatment plans and drug discovery.",
      author: "Dr. Lisa Park",
      date: "2023-12-15",
      category: "Healthcare",
      downloads: 1345,
      views: 3678,
      tags: ["AI", "Healthcare", "Diagnostics"],
      icon: Brain,
      color: "text-cyan-400"
    },
    {
      id: 6,
      title: "Micro SaaS Solutions: Scaling Your Business",
      description: "Learn how micro SaaS solutions can help businesses scale efficiently while maintaining quality and reducing costs.",
      author: "Mark Stevens",
      date: "2023-12-10",
      category: "Micro SaaS",
      downloads: 978,
      views: 2456,
      tags: ["Micro SaaS", "Scaling", "Business"],
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "Quantum Computing",
    "Edge Computing",
    "Digital Twins",
    "Healthcare",
    "Micro SaaS"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <FileText className="w-4 h-4 mr-2" />
                White Papers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Expert Insights on
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Emerging Technologies</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Access our comprehensive collection of white papers covering the latest 
                developments in AI, quantum computing, cybersecurity, and more. 
                Stay ahead of the curve with expert analysis and practical insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${paper.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-lg flex items-center justify-center`}>
                    <paper.icon className={`w-6 h-6 ${paper.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{paper.category}</div>
                    <div className="text-xs text-gray-400">{paper.date}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {paper.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {paper.author}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {paper.views}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed with Our Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get access to cutting-edge insights and stay ahead of the competition. 
              Subscribe to receive notifications about new white papers and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe to Updates
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Contact Research Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}