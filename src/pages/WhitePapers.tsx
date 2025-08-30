import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  Globe,
  Award,
  Clock
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 'ai-business-transformation-2024',
      title: 'AI-Powered Business Transformation: A Comprehensive Guide for Enterprise Leaders',
      summary: 'This comprehensive white paper explores how artificial intelligence is revolutionizing business operations across industries, providing actionable insights for executives looking to implement AI strategies.',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-12-01',
      category: 'AI & Business Strategy',
      downloads: '2,847',
      rating: 4.9,
      tags: ['AI Strategy', 'Digital Transformation', 'Enterprise', 'ROI'],
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      featured: true,
      fileSize: '2.4 MB',
      readTime: '15 min read'
    },
    {
      id: 'quantum-computing-future-2024',
      title: 'The Future of Quantum Computing in Enterprise Applications',
      summary: 'An in-depth analysis of quantum computing technologies and their potential applications in business, including timeline projections and investment strategies.',
      author: 'Dr. James Kim, Chief Innovation Officer',
      date: '2024-11-15',
      category: 'Emerging Technology',
      downloads: '1,923',
      rating: 4.8,
      tags: ['Quantum Computing', 'Emerging Tech', 'Innovation', 'Future'],
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      featured: true,
      fileSize: '3.1 MB',
      readTime: '20 min read'
    },
    {
      id: 'cybersecurity-ai-2024',
      title: 'AI-Enhanced Cybersecurity: Protecting Enterprises in the Digital Age',
      summary: 'Comprehensive guide to implementing AI-powered cybersecurity solutions, including threat detection, response automation, and compliance frameworks.',
      author: 'Lisa Thompson, Chief Security Officer',
      date: '2024-11-01',
      category: 'Cybersecurity',
      downloads: '3,156',
      rating: 4.9,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Compliance'],
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      featured: false,
      fileSize: '2.8 MB',
      readTime: '18 min read'
    },
    {
      id: 'cloud-finops-optimization-2024',
      title: 'Cloud FinOps Optimization: Maximizing ROI in Multi-Cloud Environments',
      summary: 'Strategic guide to implementing FinOps practices and AI-powered cost optimization in cloud infrastructure management.',
      author: 'David Park, Head of AI Solutions',
      date: '2024-10-15',
      category: 'Cloud & DevOps',
      downloads: '2,134',
      rating: 4.7,
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'DevOps'],
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      featured: false,
      fileSize: '2.2 MB',
      readTime: '12 min read'
    },
    {
      id: 'healthcare-ai-implementation-2024',
      title: 'Implementing AI in Healthcare: A Practical Guide for Medical Institutions',
      summary: 'Step-by-step guide to implementing AI solutions in healthcare, covering regulatory compliance, data privacy, and clinical workflow integration.',
      author: 'Dr. Emily Watson, VP of Healthcare Technology',
      date: '2024-10-01',
      category: 'Healthcare Technology',
      downloads: '1,876',
      rating: 4.8,
      tags: ['Healthcare AI', 'Medical Technology', 'Compliance', 'Implementation'],
      icon: Brain,
      color: 'from-green-600 to-emerald-600',
      featured: false,
      fileSize: '2.9 MB',
      readTime: '16 min read'
    },
    {
      id: 'blockchain-enterprise-2024',
      title: 'Blockchain Solutions for Enterprise: Beyond Cryptocurrency',
      summary: 'Comprehensive analysis of blockchain applications in enterprise settings, including supply chain, identity management, and smart contracts.',
      author: 'Marcus Rodriguez, Chief Technology Officer',
      date: '2024-09-15',
      category: 'Blockchain & DLT',
      downloads: '1,654',
      rating: 4.6,
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Smart Contracts'],
      icon: Shield,
      color: 'from-yellow-600 to-orange-600',
      featured: false,
      fileSize: '2.6 MB',
      readTime: '14 min read'
    },
    {
      id: 'iot-edge-computing-2024',
      title: 'Edge Computing and IoT: The Future of Distributed Intelligence',
      summary: 'Technical deep-dive into edge computing architectures and their applications in IoT deployments for industrial and commercial use cases.',
      author: 'Alex Thompson, Director of IoT Solutions',
      date: '2024-09-01',
      category: 'IoT & Edge Computing',
      downloads: '1,987',
      rating: 4.7,
      tags: ['IoT', 'Edge Computing', 'Industrial', 'Distributed Systems'],
      icon: Zap,
      color: 'from-teal-600 to-green-600',
      featured: false,
      fileSize: '2.1 MB',
      readTime: '13 min read'
    },
    {
      id: 'data-governance-ai-2024',
      title: 'AI-Powered Data Governance: Ensuring Quality and Compliance',
      summary: 'Framework for implementing intelligent data governance using AI, including data quality monitoring, lineage tracking, and regulatory compliance.',
      author: 'Priya Patel, Head of Data Science',
      date: '2024-08-15',
      category: 'Data & Analytics',
      downloads: '2,345',
      rating: 4.8,
      tags: ['Data Governance', 'AI', 'Compliance', 'Data Quality'],
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      featured: false,
      fileSize: '2.7 MB',
      readTime: '17 min read'
    }
  ];

  const categories = [
    { name: 'AI & Business Strategy', count: 3, icon: Brain, color: 'from-purple-600 to-pink-600' },
    { name: 'Cybersecurity', count: 2, icon: Shield, color: 'from-red-600 to-orange-600' },
    { name: 'Cloud & DevOps', count: 2, icon: Cloud, color: 'from-blue-600 to-cyan-600' },
    { name: 'Healthcare Technology', count: 1, icon: Brain, color: 'from-green-600 to-emerald-600' },
    { name: 'Emerging Technology', count: 1, icon: Rocket, color: 'from-indigo-600 to-purple-600' },
    { name: 'Blockchain & DLT', count: 1, icon: Shield, color: 'from-yellow-600 to-orange-600' },
    { name: 'IoT & Edge Computing', count: 1, icon: Zap, color: 'from-teal-600 to-green-600' },
    { name: 'Data & Analytics', count: 1, icon: Brain, color: 'from-purple-600 to-blue-600' }
  ];

  const stats = [
    { label: 'White Papers Published', value: '25+', icon: FileText },
    { label: 'Total Downloads', value: '50K+', icon: Download },
    { label: 'Industry Recognition', value: '15+', icon: Award },
    { label: 'Research Partners', value: '20+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive research papers, technical insights, and industry analysis on AI, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Papers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Deep insights, technical analysis, and strategic guidance from our team of experts. 
              Download our latest research on AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Download All Papers
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
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
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Research
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and impactful white papers that provide deep insights into critical technology trends.
            </p>
          </motion.div>

          <div className="space-y-8">
            {whitePapers.filter(paper => paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-cyan-400/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                        <paper.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">{paper.category}</span>
                        <h3 className="text-2xl font-bold text-white">{paper.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{paper.summary}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>By {paper.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{paper.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads} downloads</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{paper.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      <Download className="w-4 h-4" />
                      <span>Download White Paper</span>
                    </button>
                  </div>
                  
                  {/* Right Column - Details */}
                  <div className="lg:col-span-1">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <h4 className="text-lg font-semibold text-white mb-4 text-center">Paper Details</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{paper.fileSize}</div>
                          <div className="text-sm text-gray-400">File Size</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{paper.readTime}</div>
                          <div className="text-sm text-gray-400">Reading Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{paper.downloads}</div>
                          <div className="text-sm text-gray-400">Downloads</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our white papers organized by technology domain and business focus areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.name}</h3>
                    <span className="text-sm text-gray-400">{category.count} papers</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">View Papers</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete collection of our research papers and technical insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.filter(paper => !paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                    <paper.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">{paper.category}</span>
                    <h3 className="text-lg font-bold text-white line-clamp-2">{paper.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{paper.summary}</p>
                
                <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-3 h-3" />
                    <span>{paper.author.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-3 h-3" />
                    <span>{paper.downloads}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {paper.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Get notified when we publish new white papers and research insights. 
              Join thousands of technology leaders and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
