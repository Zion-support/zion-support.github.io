import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, User, Eye, ArrowRight } from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "The Future of AI-Powered Business Operations",
      description: "Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.",
      category: "Artificial Intelligence",
      author: "Dr. Sarah Chen",
      date: "2024",
      downloads: 1247,
      views: 8923,
      fileSize: "2.4 MB",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Quantum Computing in Enterprise: A Practical Guide",
      description: "Understand the real-world applications of quantum computing and how businesses can prepare for the quantum revolution.",
      category: "Quantum Computing",
      author: "Prof. Michael Rodriguez",
      date: "2024",
      downloads: 892,
      views: 6541,
      fileSize: "3.1 MB",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Threats and Solutions",
      description: "Comprehensive analysis of emerging cybersecurity threats and AI-powered defense mechanisms for modern enterprises.",
      category: "Cybersecurity",
      author: "Alex Thompson",
      date: "2024",
      downloads: 2156,
      views: 12345,
      fileSize: "1.8 MB",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Green IT: Sustainable Technology for the Future",
      description: "Learn about environmentally conscious IT practices and how to implement sustainable technology solutions.",
      category: "Green Technology",
      author: "Dr. Emily Watson",
      date: "2024",
      downloads: 743,
      views: 5432,
      fileSize: "2.7 MB",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "5G Enterprise Networks: Implementation Strategies",
      description: "Strategic guide for implementing 5G networks in enterprise environments and maximizing ROI.",
      category: "5G Technology",
      author: "James Wilson",
      date: "2024",
      downloads: 1567,
      views: 9876,
      fileSize: "2.1 MB",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "IoT Edge Computing: Transforming Data Processing",
      description: "Discover how edge computing is reshaping IoT deployments and enabling real-time decision making.",
      category: "IoT & Edge Computing",
      author: "Lisa Park",
      date: "2024",
      downloads: 634,
      views: 4321,
      fileSize: "1.9 MB",
      downloadUrl: "#"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Quantum Computing", "Cybersecurity", "Green Technology", "5G Technology", "IoT & Edge Computing"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            White Papers & Research
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access cutting-edge research and insights from industry experts. Download comprehensive white papers covering the latest trends in technology and business innovation.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category === "All" 
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full font-medium">
                    {paper.category}
                  </span>
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {paper.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloads} downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{paper.views} views</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{paper.fileSize}</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead with Our Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. Join thousands of professionals who trust Zion Tech Group for cutting-edge technology knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
