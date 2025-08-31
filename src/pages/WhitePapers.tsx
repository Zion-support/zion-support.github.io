

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Calendar, 
  Tag, 
  Search, 
  Filter, 
  ArrowRight,
  CheckCircle,
  ExternalLink,
  BarChart3,
  Award,
  Target,
  Lightbulb,
  Globe,
  Shield,
  Zap,
  Database
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation: A Comprehensive Guide",
      description: "Explore how artificial intelligence is revolutionizing business operations and driving unprecedented growth across industries.",
      category: "AI & Automation",
      author: "Dr. Sarah Chen",
      date: "March 2025",
      downloads: 2847,
      tags: ["AI", "Digital Transformation", "Business Strategy"],
      pdfUrl: "/white-papers/ai-digital-transformation-2025.pdf",
      summary: "This comprehensive white paper examines the transformative impact of AI technologies on modern business operations, providing actionable insights for organizations looking to leverage artificial intelligence for competitive advantage.",
      keyPoints: [
        "AI implementation strategies for enterprise",
        "ROI analysis of AI investments",
        "Case studies from Fortune 500 companies",
        "Future trends in AI adoption"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of AI: Threats and Solutions",
      description: "Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution in protecting digital assets.",
      category: "Cybersecurity",
      author: "Michael Rodriguez",
      date: "February 2025",
      downloads: 2156,
      tags: ["Cybersecurity", "AI", "Threat Detection"],
      pdfUrl: "/white-papers/cybersecurity-ai-2025.pdf",
      summary: "This white paper provides an in-depth analysis of how artificial intelligence is reshaping cybersecurity, from advanced threat detection to automated response systems.",
      keyPoints: [
        "AI-powered threat detection",
        "Automated incident response",
        "Zero-trust security architecture",
        "Compliance and regulatory considerations"
      ]
    },
    {
      id: 3,
      title: "Quantum Computing: The Next Frontier in Technology",
      description: "Discover how quantum computing is poised to revolutionize industries from finance to healthcare and beyond.",
      category: "Emerging Tech",
      author: "Dr. James Wilson",
      date: "January 2025",
      downloads: 1893,
      tags: ["Quantum Computing", "Emerging Technology", "Innovation"],
      pdfUrl: "/white-papers/quantum-computing-2025.pdf",
      summary: "This comprehensive guide explores the fundamentals of quantum computing, its potential applications, and the timeline for practical implementation across various sectors.",
      keyPoints: [
        "Quantum computing fundamentals",
        "Industry applications and use cases",
        "Investment opportunities and risks",
        "Timeline for commercial adoption"
      ]
    },
    {
      id: 4,
      title: "Edge Computing: Transforming Data Processing at the Source",
      description: "Learn how edge computing is enabling real-time data processing and revolutionizing IoT applications.",
      category: "Infrastructure",
      author: "Lisa Thompson",
      date: "December 2024",
      downloads: 1678,
      tags: ["Edge Computing", "IoT", "Data Processing"],
      pdfUrl: "/white-papers/edge-computing-2024.pdf",
      summary: "This white paper examines the growing importance of edge computing in modern IT infrastructure, highlighting its benefits for latency-sensitive applications and IoT deployments.",
      keyPoints: [
        "Edge computing architecture",
        "IoT integration strategies",
        "Performance optimization techniques",
        "Cost-benefit analysis"
      ]
    },
    {
      id: 5,
      title: "Blockchain and Web3: Building the Future of Digital Trust",
      description: "Explore the evolution of blockchain technology and its role in creating a more decentralized and trustworthy digital ecosystem.",
      category: "Blockchain",
      author: "Alex Kumar",
      date: "November 2024",
      downloads: 1456,
      tags: ["Blockchain", "Web3", "Decentralization"],
      pdfUrl: "/white-papers/blockchain-web3-2024.pdf",
      summary: "This comprehensive analysis covers the current state of blockchain technology, Web3 development, and the future of decentralized applications and services.",
      keyPoints: [
        "Blockchain fundamentals and use cases",
        "Web3 development frameworks",
        "DeFi and NFT applications",
        "Regulatory landscape and compliance"
      ]
    },
    {
      id: 6,
      title: "Cloud-Native Architecture: Best Practices for Modern Applications",
      description: "Master the principles of cloud-native development and learn how to build scalable, resilient applications.",
      category: "Cloud & DevOps",
      author: "David Park",
      date: "October 2024",
      downloads: 2034,
      tags: ["Cloud Computing", "DevOps", "Microservices"],
      pdfUrl: "/white-papers/cloud-native-2024.pdf",
      summary: "This technical white paper provides comprehensive guidance on designing and implementing cloud-native applications using modern architectural patterns and best practices.",
      keyPoints: [
        "Microservices architecture design",
        "Container orchestration strategies",
        "DevOps automation practices",
        "Monitoring and observability"
      ]
    }
  ];

  const categories = [
    { name: "All", count: whitePapers.length, icon: FileText },
    { name: "AI & Automation", count: whitePapers.filter(wp => wp.category === "AI & Automation").length, icon: TrendingUp },
    { name: "Cybersecurity", count: whitePapers.filter(wp => wp.category === "Cybersecurity").length, icon: Shield },
    { name: "Emerging Tech", count: whitePapers.filter(wp => wp.category === "Emerging Tech").length, icon: Zap },
    { name: "Infrastructure", count: whitePapers.filter(wp => wp.category === "Infrastructure").length, icon: Database },
    { name: "Blockchain", count: whitePapers.filter(wp => wp.category === "Blockchain").length, icon: Globe },
    { name: "Cloud & DevOps", count: whitePapers.filter(wp => wp.category === "Cloud & DevOps").length, icon: BarChart3 }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Access thought leadership and expert analysis from industry professionals"
    },
    {
      icon: Target,
      title: "Actionable Intelligence",
      description: "Get practical strategies and implementation guidance for your business"
    },
    {
      icon: Award,
      title: "Research-Based",
      description: "All content is thoroughly researched and backed by real-world data"
    },
    {
      icon: Users,
      title: "Industry Focus",
      description: "Content tailored to specific industries and business challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download comprehensive white papers on AI, cybersecurity, quantum computing, edge computing, blockchain, and cloud-native architecture. Expert insights and actionable strategies for modern technology adoption." />
        <link rel="canonical" href="https://ziontechgroup.com/white-papers" />
        <meta name="keywords" content="white papers, AI research, cybersecurity insights, quantum computing guide, edge computing analysis, blockchain technology, cloud-native architecture" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access comprehensive research and expert insights on the latest technology trends, 
              industry best practices, and strategic guidance for digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <FileText className="w-5 h-5 mr-2" />
                <span>{whitePapers.length} White Papers</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Download className="w-5 h-5 mr-2" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Authors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-300 text-lg">
              Find white papers relevant to your industry and technology interests
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-slate-600/50"
              >
                <category.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} papers</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Download Our White Papers?
            </h2>
            <p className="text-gray-300 text-lg">
              Get valuable insights that can transform your business strategy and technology adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured White Papers
            </h2>
            <p className="text-gray-300 text-lg">
              Download our latest research and insights on emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                    {paper.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    {paper.downloads.toLocaleString()}
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 line-clamp-2">
                  {paper.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {paper.description}
                </p>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">
                    <strong>Summary:</strong> {paper.summary}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2"><strong>Key Points:</strong></p>
                  <ul className="space-y-1">
                    {paper.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>By {paper.author}</span>
                  <span>{paper.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={paper.pdfUrl}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download White Paper
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Request Custom Research
              </a>
              <a
                href="/newsletter"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Subscribe to Updates
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom Research or Analysis?
            </h3>
            <p className="text-gray-300 mb-6">
              Our research team can provide tailored analysis and insights for your specific industry or business challenges.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              Contact Our Research Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
