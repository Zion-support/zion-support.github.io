

import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  Tag, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Rocket,
  Atom,
  Heart,
  Lock,
  TrendingUp,
  Users,
  Target,
  Zap,
  BookOpen
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      id: 'ai-enterprise-2024',
      title: 'AI in Enterprise 2024: Transforming Business Operations',
      description: 'Comprehensive analysis of AI adoption in enterprise environments, including implementation strategies, ROI metrics, and future trends.',
      category: 'AI & Business',
      date: '2024-12-01',
      downloads: 2847,
      views: 12563,
      tags: ['AI', 'Enterprise', 'Digital Transformation', 'ROI'],
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'quantum-computing-future',
      title: 'Quantum Computing Future: Beyond Classical Limits',
      description: 'Deep dive into quantum computing applications, quantum advantage, and how businesses can prepare for the quantum era.',
      category: 'Quantum Technology',
      date: '2024-11-15',
      downloads: 1923,
      views: 8934,
      tags: ['Quantum Computing', 'Future Tech', 'Innovation', 'Research'],
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'cybersecurity-framework',
      title: 'Next-Generation Cybersecurity Framework 2024',
      description: 'Comprehensive cybersecurity framework incorporating AI, zero-trust architecture, and threat intelligence for modern enterprises.',
      category: 'Cybersecurity',
      date: '2024-10-28',
      downloads: 3156,
      views: 14289,
      tags: ['Cybersecurity', 'AI Security', 'Zero Trust', 'Threat Intelligence'],
      featured: true,
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'digital-twin-technology',
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'Exploration of digital twin applications in manufacturing, healthcare, and smart cities, with implementation guidelines.',
      category: 'IoT & Digital Twins',
      date: '2024-09-20',
      downloads: 1678,
      views: 7456,
      tags: ['Digital Twin', 'IoT', 'Smart Cities', 'Manufacturing'],
      featured: false,
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI in Healthcare Diagnostics: Revolutionizing Patient Care',
      description: 'Analysis of AI applications in medical diagnostics, regulatory considerations, and clinical validation approaches.',
      category: 'AI & Healthcare',
      date: '2024-08-15',
      downloads: 2341,
      views: 10892,
      tags: ['AI Healthcare', 'Medical Diagnostics', 'Regulatory', 'Clinical AI'],
      featured: false,
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'cloud-native-architecture',
      title: 'Cloud-Native Architecture: Building for Scale and Resilience',
      description: 'Comprehensive guide to cloud-native development, microservices, and container orchestration for modern applications.',
      category: 'Cloud & DevOps',
      date: '2024-07-30',
      downloads: 1892,
      views: 8765,
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability'],
      featured: false,
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'blockchain-web3-business',
      title: 'Blockchain & Web3: Business Applications Beyond Cryptocurrency',
      description: 'Practical applications of blockchain technology in supply chain, identity management, and decentralized business models.',
      category: 'Blockchain & Web3',
      date: '2024-06-25',
      downloads: 1456,
      views: 6789,
      tags: ['Blockchain', 'Web3', 'Supply Chain', 'Decentralized'],
      featured: false,
      icon: Lock,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI-Powered Data Analytics: From Insights to Action',
      description: 'Comprehensive guide to implementing AI-driven analytics, including data preparation, model selection, and business intelligence.',
      category: 'AI & Analytics',
      date: '2024-05-18',
      downloads: 2678,
      views: 12345,
      tags: ['AI Analytics', 'Data Science', 'Business Intelligence', 'ML'],
      featured: false,
      icon: Database,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'edge-computing-iot',
      title: 'Edge Computing & IoT: The Future of Distributed Intelligence',
      description: 'Analysis of edge computing architectures, IoT deployment strategies, and real-time processing capabilities.',
      category: 'Edge Computing & IoT',
      date: '2024-04-12',
      downloads: 1345,
      views: 6234,
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Distributed Systems'],
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'sustainable-technology',
      title: 'Sustainable Technology: Green Computing for a Better Future',
      description: 'Guide to implementing sustainable technology practices, energy-efficient computing, and environmental impact reduction.',
      category: 'Sustainability',
      date: '2024-03-08',
      downloads: 987,
      views: 4567,
      tags: ['Sustainability', 'Green Computing', 'Energy Efficiency', 'ESG'],
      featured: false,
      icon: Target,
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const categories = [
    { name: 'All', count: whitePapers.length, active: true },
    { name: 'AI & Business', count: whitePapers.filter(wp => wp.category.includes('AI')).length, active: false },
    { name: 'Quantum Technology', count: whitePapers.filter(wp => wp.category.includes('Quantum')).length, active: false },
    { name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category.includes('Cybersecurity')).length, active: false },
    { name: 'IoT & Digital Twins', count: whitePapers.filter(wp => wp.category.includes('IoT')).length, active: false },
    { name: 'AI & Healthcare', count: whitePapers.filter(wp => wp.category.includes('Healthcare')).length, active: false },
    { name: 'Cloud & DevOps', count: whitePapers.filter(wp => wp.category.includes('Cloud')).length, active: false },
    { name: 'Blockchain & Web3', count: whitePapers.filter(wp => wp.category.includes('Blockchain')).length, active: false },
    { name: 'AI & Analytics', count: whitePapers.filter(wp => wp.category.includes('Analytics')).length, active: false },
    { name: 'Edge Computing & IoT', count: whitePapers.filter(wp => wp.category.includes('Edge')).length, active: false },
    { name: 'Sustainability', count: whitePapers.filter(wp => wp.category.includes('Sustainability')).length, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, and emerging technologies. Download free research and insights."
        keywords="white papers, research, AI, quantum computing, cybersecurity, technology insights, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Deep insights into emerging technologies, AI applications, and future trends
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{whitePapers.length} Research Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Expert Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.filter(wp => wp.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <paper.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                    {paper.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {paper.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(paper.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {paper.downloads.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group">
                  <Download className="w-4 h-4" />
                  Download White Paper
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            All Research Papers
          </h2>
          <div className="space-y-6">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <paper.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm font-medium rounded-full mb-3">
                          {paper.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {paper.title}
                        </h3>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(paper.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {paper.downloads.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group">
                      <Download className="w-4 h-4" />
                      Download Research Paper
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-cyan-500/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified when we publish new white papers and research insights. Join thousands of technology leaders staying ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
