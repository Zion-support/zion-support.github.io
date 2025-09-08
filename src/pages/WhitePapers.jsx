import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, ArrowRight, Brain, Cloud, Shield, Rocket, Cpu } from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation: A Comprehensive Guide",
      description: "Explore how artificial intelligence is revolutionizing business operations and driving digital transformation across industries.",
      category: "AI & Machine Learning",
      author: "Zion Tech Group Research Team",
      date: "2025",
      downloadUrl: "#",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud-Native Architecture: Best Practices for 2025",
      description: "Learn the latest strategies for building scalable, resilient cloud-native applications in today's dynamic environment.",
      category: "Cloud & DevOps",
      author: "Cloud Solutions Team",
      date: "2025",
      downloadUrl: "#",
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Threats and Defenses",
      description: "Understand emerging cybersecurity challenges and AI-powered defense mechanisms for modern enterprises.",
      category: "Cybersecurity",
      author: "Security Research Team",
      date: "2025",
      downloadUrl: "#",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "Quantum Computing: The Future of Problem Solving",
      description: "Discover how quantum computing is poised to transform industries and solve previously intractable problems.",
      category: "Quantum Technology",
      author: "Quantum Research Team",
      date: "2025",
      downloadUrl: "#",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "Space Technology Innovations: From Earth to Orbit",
      description: "Explore cutting-edge space technology developments and their applications in terrestrial industries.",
      category: "Space Technology",
      author: "Space Tech Team",
      date: "2025",
      downloadUrl: "#",
      icon: Rocket,
      color: "from-gray-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth research and insights on cutting-edge technologies, industry trends, and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${paper.color}`} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 bg-gradient-to-r ${paper.color} rounded-lg`}>
                      <paper.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="ml-3 text-sm text-cyan-400 font-medium">
                      {paper.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  
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
                  
                  <Link
                    to={paper.downloadUrl}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Link>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to our latest white papers, research findings, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Contact Our Research Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/research-development"
                className="inline-flex items-center justify-center bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Research Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}