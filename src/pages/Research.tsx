import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Download,
  Filter,
  ChevronDown,
  ChevronRight,
  Globe,
  Lightbulb,
  BarChart3,
  Microscope,
  Award,
  Clock,
  Eye,
  Share2,
  Shield,
  Cloud,
  Heart,
  Zap,
  Brain,
  Database,
  Cpu,
  Network
} from 'lucide-react';

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const researchCategories = [
    { id: 'all', name: 'All Research', count: 47 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12 },
    { id: 'cloud', name: 'Cloud Computing', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'healthcare', name: 'Healthcare Tech', count: 4 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 47 },
    { id: '2024', name: '2024', count: 12 },
    { id: '2023', name: '2023', count: 15 },
    { id: '2022', name: '2022', count: 11 },
    { id: '2021', name: '2021', count: 9 }
  ];

  const featuredResearch = [
    {
      id: 1,
      title: 'Quantum-Classical Hybrid Computing: A New Paradigm for Enterprise Applications',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Dr. Emily Watson'],
      abstract: 'This groundbreaking research explores the integration of quantum and classical computing systems to solve complex enterprise problems previously thought intractable.',
      category: 'quantum',
      year: '2024',
      readTime: '15 min',
      views: '2.4k',
      downloads: '856',
      journal: 'IEEE Transactions on Quantum Computing',
      doi: '10.1109/TQC.2024.001234',
      tags: ['Quantum Computing', 'Hybrid Systems', 'Enterprise Applications'],
      status: 'Published'
    },
    {
      id: 2,
      title: 'AI-Powered Cybersecurity: Advanced Threat Detection Using Machine Learning',
      authors: ['Dr. James Wilson', 'Dr. Lisa Thompson', 'Dr. David Kim'],
      abstract: 'Research on leveraging artificial intelligence and machine learning techniques to enhance cybersecurity threat detection and response capabilities.',
      category: 'cybersecurity',
      year: '2024',
      readTime: '12 min',
      views: '3.1k',
      downloads: '1,234',
      journal: 'Journal of Cybersecurity Research',
      doi: '10.1000/JCR.2024.005678',
      tags: ['AI', 'Cybersecurity', 'Machine Learning', 'Threat Detection'],
      status: 'Published'
    },
    {
      id: 3,
      title: 'Edge Computing Optimization for IoT Applications',
      authors: ['Dr. Maria Garcia', 'Dr. Robert Johnson'],
      abstract: 'Study on optimizing edge computing infrastructure for Internet of Things applications, focusing on latency reduction and energy efficiency.',
      category: 'cloud',
      year: '2023',
      readTime: '10 min',
      views: '1.8k',
      downloads: '567',
      journal: 'IEEE Internet of Things Journal',
      doi: '10.1109/JIOT.2023.009876',
      tags: ['Edge Computing', 'IoT', 'Optimization', 'Energy Efficiency'],
      status: 'Published'
    }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge research in AI algorithms, neural networks, and machine learning applications',
      projects: 18,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      description: 'Advanced security research, threat intelligence, and privacy-preserving technologies',
      projects: 12,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Cloud Computing & Infrastructure',
      icon: Cloud,
      description: 'Research in cloud architecture, distributed systems, and infrastructure optimization',
      projects: 8,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Computing',
      icon: Cpu,
      description: 'Breakthrough research in quantum algorithms, quantum cryptography, and quantum applications',
      projects: 5,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Data Science & Analytics',
      icon: Database,
      description: 'Research in big data processing, predictive analytics, and data-driven decision making',
      projects: 10,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      description: 'Exploration of cutting-edge technologies including blockchain, IoT, and edge computing',
      projects: 7,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const filteredResearch = featuredResearch.filter(research => {
    const matchesCategory = selectedCategory === 'all' || research.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || research.year === selectedYear;
    const matchesSearch = research.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         research.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         research.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesYear && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our cutting-edge research in artificial intelligence, cybersecurity, quantum computing, and emerging technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>47+ Research Papers</span>
              <span>•</span>
              <span>18 AI/ML Projects</span>
              <span>•</span>
              <span>12 Cybersecurity Studies</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search research..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  {researchCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  {years.map(year => (
                    <option key={year.id} value={year.id}>
                      {year.name} ({year.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-gray-400">
                  {filteredResearch.length} results found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse research portfolio across multiple technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    <p className="text-sm text-gray-400">{area.projects} projects</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest research publications and breakthrough findings
            </p>
          </motion.div>

          <div className="space-y-8">
            {filteredResearch.map((research, index) => (
              <motion.div
                key={research.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm text-gray-400 bg-slate-600/50 px-3 py-1 rounded-full">
                        {research.category}
                      </span>
                      <span className="text-sm text-gray-400">{research.year}</span>
                      <span className="text-sm text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                        {research.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{research.title}</h3>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{research.authors.join(', ')}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{research.readTime}</span>
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{research.abstract}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {research.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{research.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{research.downloads}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{research.journal}</span>
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-64 flex flex-col space-y-3">
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                      Read Full Paper
                    </button>
                    <button className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
                      Download PDF
                    </button>
                    <button className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
                      Cite This Paper
                    </button>
                    <div className="text-xs text-gray-400 text-center">
                      DOI: {research.doi}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Our Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our research team to learn more about our projects and potential collaborations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg"
              >
                <BookOpen className="w-5 h-5" />
                <span>Contact Research Team</span>
              </a>
              <a
                href="/collaborate"
                className="inline-flex items-center space-x-2 border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Users className="w-5 h-5" />
                <span>Collaborate With Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}