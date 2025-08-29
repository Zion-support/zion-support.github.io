import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Eye, 
  Star,
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  TrendingUp,
  Award,
  BookOpen,
  Search,
  Filter
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Enterprise Security: A Comprehensive Analysis',
      author: 'Dr. Sarah Chen, CTO',
      date: '2024-01-15',
      category: 'Cybersecurity',
      summary: 'This comprehensive white paper explores the evolution of enterprise security through AI integration, examining current threats, emerging technologies, and strategic implementation approaches.',
      topics: ['AI Security', 'Threat Detection', 'Enterprise Security', 'Machine Learning'],
      pages: 45,
      downloads: 2847,
      rating: 4.8,
      featured: true,
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      downloadUrl: '/downloads/ai-enterprise-security-whitepaper.pdf'
    },
    {
      id: 2,
      title: 'Digital Transformation in Healthcare: AI-Driven Patient Care Optimization',
      author: 'Dr. Priya Patel, Head of Healthcare AI',
      date: '2023-12-20',
      category: 'Healthcare',
      summary: 'An in-depth analysis of how AI technologies are revolutionizing healthcare delivery, improving patient outcomes, and optimizing operational efficiency in medical institutions.',
      topics: ['Healthcare AI', 'Patient Care', 'Digital Health', 'Predictive Analytics'],
      pages: 38,
      downloads: 1956,
      rating: 4.9,
      featured: true,
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      downloadUrl: '/downloads/healthcare-ai-whitepaper.pdf'
    },
    {
      id: 3,
      title: 'Quantum Computing and AI: The Next Frontier of Business Intelligence',
      author: 'Dr. Emily Watson, Head of AI Research',
      date: '2023-11-28',
      category: 'Emerging Tech',
      summary: 'Exploring the convergence of quantum computing and artificial intelligence, and how this combination will transform business intelligence and decision-making processes.',
      topics: ['Quantum Computing', 'AI', 'Business Intelligence', 'Quantum AI'],
      pages: 52,
      downloads: 3123,
      rating: 4.7,
      featured: false,
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      downloadUrl: '/downloads/quantum-ai-whitepaper.pdf'
    },
    {
      id: 4,
      title: 'Cloud FinOps: Optimizing Cloud Costs Through AI and Automation',
      author: 'Alex Thompson, VP of Engineering',
      date: '2023-10-15',
      category: 'Cloud & DevOps',
      summary: 'A strategic guide to implementing Cloud FinOps practices using AI-powered tools and automation to optimize cloud spending and resource utilization.',
      topics: ['Cloud FinOps', 'Cost Optimization', 'AI Automation', 'Resource Management'],
      pages: 32,
      downloads: 1689,
      rating: 4.6,
      featured: false,
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      downloadUrl: '/downloads/cloud-finops-whitepaper.pdf'
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Operations: AI-Driven Process Automation',
      author: 'Marcus Rodriguez, Chief Security Officer',
      date: '2023-09-22',
      category: 'Business Process',
      summary: 'Examining how autonomous business operations powered by AI are reshaping industries, improving efficiency, and creating new competitive advantages.',
      topics: ['Process Automation', 'AI Operations', 'Business Intelligence', 'Autonomous Systems'],
      pages: 41,
      downloads: 2234,
      rating: 4.8,
      featured: false,
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      featured: false,
      icon: TrendingUp,
      color: 'from-yellow-600 to-orange-600',
      downloadUrl: '/downloads/autonomous-operations-whitepaper.pdf'
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green AI Solutions for Environmental Impact',
      author: 'Dr. James Kim, Head of Sustainability',
      date: '2023-08-18',
      category: 'Sustainability',
      summary: 'How AI technologies are being leveraged to create sustainable solutions, reduce environmental impact, and support green business initiatives.',
      topics: ['Green AI', 'Sustainability', 'Environmental Tech', 'Clean Energy'],
      pages: 36,
      downloads: 1456,
      rating: 4.7,
      featured: false,
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      downloadUrl: '/downloads/sustainable-tech-whitepaper.pdf'
    }
  ];

  const categories = [
    { name: 'All', count: whitePapers.length, icon: BookOpen },
    { name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, icon: Shield },
    { name: 'Healthcare', count: whitePapers.filter(wp => wp.category === 'Healthcare').length, icon: Heart },
    { name: 'Emerging Tech', count: whitePapers.filter(wp => wp.category === 'Emerging Tech').length, icon: Brain },
    { name: 'Cloud & DevOps', count: whitePapers.filter(wp => wp.category === 'Cloud & DevOps').length, icon: Cloud },
    { name: 'Business Process', count: whitePapers.filter(wp => wp.category === 'Business Process').length, icon: TrendingUp },
    { name: 'Sustainability', count: whitePapers.filter(wp => wp.category === 'Sustainability').length, icon: Globe }
  ];

  const stats = [
    { number: '25+', label: 'White Papers', icon: FileText },
    { number: '15K+', label: 'Downloads', icon: Download },
    { number: '4.8', label: 'Average Rating', icon: Star },
    { number: '12+', label: 'Expert Authors', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access in-depth research papers, technical documents, and thought leadership content from Zion Tech Group's AI and technology experts."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl mb-8">
              <FileText className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              White Papers
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Access in-depth research, technical insights, and thought leadership content 
              from Zion Tech Group's leading AI and technology experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>25+ Research Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>15K+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured White Papers</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and impactful research papers covering cutting-edge 
              AI technologies and industry transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whitePapers.filter(wp => wp.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                    <paper.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{paper.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{paper.author}</span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{paper.summary}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                  <span>{paper.pages} pages</span>
                  <span>{paper.downloads.toLocaleString()} downloads</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{paper.rating}</span>
                  </div>
                </div>

                <a
                  href={paper.downloadUrl}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download White Paper
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers Grid */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All White Papers</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse our complete collection of research papers, technical documents, 
              and industry insights across all technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                    <paper.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{paper.title}</h3>
                    <p className="text-slate-400 text-sm">{paper.author}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">{paper.summary}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {paper.topics.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span>{paper.pages} pages</span>
                  <span>{paper.downloads.toLocaleString()} downloads</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{paper.rating}</span>
                  </div>
                </div>

                <a
                  href={paper.downloadUrl}
                  className="w-full px-4 py-2 border border-cyan-400 text-cyan-400 text-sm rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-3 h-3" />
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find white papers and research content organized by technology domain and industry focus.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-400 text-sm">{category.count} papers</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Latest Research</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get notified about new white papers, research insights, and thought leadership 
              content from Zion Tech Group's technology experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </a>
              <a
                href="/about"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
