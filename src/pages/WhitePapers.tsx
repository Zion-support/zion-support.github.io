

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  Clock, 
  User, 
  Eye,
  ArrowRight,
  Star,
  Tag,
  Search,
  Filter,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Leaf,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Database
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: 'AI Ethics in Business Applications',
      subtitle: 'A Comprehensive Guide to Implementing Ethical AI Practices in Enterprise Environments',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '45 min read',
      pages: 45,
      category: 'AI Ethics',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'This comprehensive white paper explores the critical importance of ethical AI implementation in business environments. We examine the challenges, best practices, and frameworks for ensuring AI systems operate responsibly and fairly.',
      keyTopics: [
        'AI Bias Detection and Mitigation',
        'Transparency and Explainability',
        'Privacy and Data Protection',
        'Accountability and Governance',
        'Fairness in AI Decision Making'
      ],
      featured: true,
      downloads: 2847,
      rating: 4.8,
      tags: ['AI Ethics', 'Responsible AI', 'Business Applications', 'Governance']
    },
    {
      id: 2,
      title: 'Quantum Computing Business Impact',
      subtitle: 'Analysis of Quantum Computing\'s Potential Impact on Various Industries',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-10',
      readTime: '32 min read',
      pages: 32,
      category: 'Quantum Computing',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      description: 'Explore how quantum computing will revolutionize industries from finance to pharmaceuticals. This white paper provides a detailed analysis of quantum advantage and practical business applications.',
      keyTopics: [
        'Quantum Advantage in Finance',
        'Drug Discovery and Healthcare',
        'Supply Chain Optimization',
        'Cybersecurity Implications',
        'Investment and ROI Analysis'
      ],
      featured: true,
      downloads: 2156,
      rating: 4.9,
      tags: ['Quantum Computing', 'Business Impact', 'Industry Analysis', 'ROI']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI',
      subtitle: 'How AI is Both Enhancing and Challenging Cybersecurity Practices',
      author: 'Marcus Johnson',
      date: '2025-01-05',
      readTime: '38 min read',
      pages: 38,
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'This white paper examines the dual nature of AI in cybersecurity - as both a powerful tool for defense and a potential threat vector. Learn about emerging security challenges and AI-powered solutions.',
      keyTopics: [
        'AI-Powered Threat Detection',
        'Adversarial AI Attacks',
        'Zero-Trust Security Architecture',
        'Incident Response Automation',
        'Security Skills Gap Solutions'
      ],
      featured: true,
      downloads: 3156,
      rating: 4.7,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Zero Trust']
    },
    {
      id: 4,
      title: 'Digital Transformation Roadmap',
      subtitle: 'Strategic Framework for Successful Digital Transformation Implementation',
      author: 'Digital Transformation Team',
      date: '2024-12-20',
      readTime: '42 min read',
      pages: 42,
      category: 'Digital Transformation',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      description: 'A comprehensive guide to planning and executing digital transformation initiatives. This white paper provides a proven framework for organizations looking to modernize their operations.',
      keyTopics: [
        'Transformation Strategy Development',
        'Change Management Best Practices',
        'Technology Stack Selection',
        'ROI Measurement and KPIs',
        'Risk Mitigation Strategies'
      ],
      featured: false,
      downloads: 1892,
      rating: 4.6,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'ROI']
    },
    {
      id: 5,
      title: 'IoT Edge Computing Architecture',
      subtitle: 'Technical Deep-Dive into IoT Edge Computing Architecture and Implementation',
      author: 'Dr. Emily Watson',
      date: '2024-12-15',
      readTime: '35 min read',
      pages: 35,
      category: 'IoT & Edge Computing',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      description: 'Technical exploration of IoT edge computing architectures, including design patterns, implementation strategies, and real-world deployment considerations.',
      keyTopics: [
        'Edge Computing Architecture Patterns',
        'Data Processing at the Edge',
        'Security and Privacy Considerations',
        'Scalability and Performance',
        'Integration with Cloud Platforms'
      ],
      featured: false,
      downloads: 2100,
      rating: 4.8,
      tags: ['IoT', 'Edge Computing', 'Architecture', 'Technical']
    },
    {
      id: 6,
      title: 'AI in Healthcare: Current State and Future Prospects',
      subtitle: 'Comprehensive Analysis of AI Applications in Healthcare and Medical Diagnostics',
      author: 'Dr. Jennifer Kim',
      date: '2024-12-10',
      readTime: '40 min read',
      pages: 40,
      category: 'Healthcare AI',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      description: 'Explore the current state of AI in healthcare, including diagnostic tools, treatment planning, and the future of personalized medicine.',
      keyTopics: [
        'Medical Imaging AI',
        'Drug Discovery and Development',
        'Personalized Medicine',
        'Healthcare Data Privacy',
        'Regulatory Compliance'
      ],
      featured: false,
      downloads: 1789,
      rating: 4.7,
      tags: ['Healthcare AI', 'Medical Diagnostics', 'Personalized Medicine', 'Compliance']
    },
    {
      id: 7,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      subtitle: 'Practical Applications of Blockchain Technology in Business Operations',
      author: 'Blockchain Research Team',
      date: '2024-12-05',
      readTime: '28 min read',
      pages: 28,
      category: 'Blockchain',
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      description: 'Discover how blockchain technology is being used beyond cryptocurrency to solve real business problems in supply chain, identity management, and more.',
      keyTopics: [
        'Supply Chain Transparency',
        'Digital Identity Management',
        'Smart Contracts in Business',
        'Interoperability Solutions',
        'Enterprise Blockchain Platforms'
      ],
      featured: false,
      downloads: 1654,
      rating: 4.5,
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Smart Contracts']
    },
    {
      id: 8,
      title: 'Sustainable Technology Solutions',
      subtitle: 'Green Technology Approaches for Environmental Impact Reduction',
      author: 'Sustainability Team',
      date: '2024-11-30',
      readTime: '33 min read',
      pages: 33,
      category: 'Sustainability',
      icon: Leaf,
      color: 'from-teal-500 to-green-500',
      description: 'Learn about innovative technology solutions that help organizations reduce their environmental footprint while improving operational efficiency.',
      keyTopics: [
        'Energy Efficiency Technologies',
        'Carbon Footprint Reduction',
        'Sustainable Supply Chains',
        'Green Building Solutions',
        'Environmental Impact Measurement'
      ],
      featured: false,
      downloads: 1423,
      rating: 4.6,
      tags: ['Sustainability', 'Green Tech', 'Energy Efficiency', 'Environmental Impact']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Papers', count: whitePapers.length, icon: FileText },
    { id: 'ai-ethics', name: 'AI Ethics', count: whitePapers.filter(wp => wp.category === 'AI Ethics').length, icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', count: whitePapers.filter(wp => wp.category === 'Quantum Computing').length, icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, icon: Shield },
    { id: 'digital-transformation', name: 'Digital Transformation', count: whitePapers.filter(wp => wp.category === 'Digital Transformation').length, icon: TrendingUp },
    { id: 'iot-edge', name: 'IoT & Edge', count: whitePapers.filter(wp => wp.category === 'IoT & Edge Computing').length, icon: Globe },
    { id: 'healthcare-ai', name: 'Healthcare AI', count: whitePapers.filter(wp => wp.category === 'Healthcare AI').length, icon: Brain },
    { id: 'blockchain', name: 'Blockchain', count: whitePapers.filter(wp => wp.category === 'Blockchain').length, icon: Database },
    { id: 'sustainability', name: 'Sustainability', count: whitePapers.filter(wp => wp.category === 'Sustainability').length, icon: Leaf }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPapers = filteredPapers.filter(paper => paper.featured);
  const regularPapers = filteredPapers.filter(paper => !paper.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI ethics, quantum computing, cybersecurity, digital transformation, and emerging technologies. In-depth research and analysis for business leaders."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In-depth research and analysis on emerging technologies, business applications, 
              and industry trends. Expert insights to guide your strategic decisions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Request Custom Research
              </a>
              <a
                href="/resources"
                className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Browse All Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 border border-slate-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      {featuredPapers.length > 0 && (
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Featured White Papers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our most comprehensive and highly-rated research papers on critical topics.
              </p>
            </motion.div>

            <div className="space-y-8">
              {featuredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-blue-400/30 p-8 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${paper.color} rounded-xl flex items-center justify-center`}>
                          <paper.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                            {paper.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white mt-2">{paper.title}</h3>
                          <p className="text-gray-400 text-sm">{paper.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-blue-400 mb-2">Author</h4>
                          <p className="text-white">{paper.author}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-blue-400 mb-2">Description</h4>
                          <p className="text-gray-300 text-sm">{paper.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Middle Column - Key Topics */}
                    <div className="lg:col-span-1">
                      <h4 className="text-xl font-bold text-white mb-4">Key Topics Covered</h4>
                      <div className="space-y-3">
                        {paper.keyTopics.map((topic, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Metrics & Download */}
                    <div className="lg:col-span-1">
                      <div className="space-y-4 mb-6">
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="text-3xl font-bold text-blue-400">{paper.pages}</div>
                          <div className="text-sm text-gray-400">Pages</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-700/30 rounded-lg p-3">
                            <div className="text-lg font-bold text-white">{paper.readTime}</div>
                            <div className="text-xs text-gray-400">Read Time</div>
                          </div>
                          <div className="bg-slate-700/30 rounded-lg p-3">
                            <div className="text-lg font-bold text-white">{paper.downloads.toLocaleString()}</div>
                            <div className="text-xs text-gray-400">Downloads</div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download White Paper
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All White Papers Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              All White Papers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of research papers and technical analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${paper.color} rounded-lg flex items-center justify-center`}>
                    <paper.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      {paper.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{paper.subtitle}</p>

                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-500">Author: </span>
                    <span className="text-white">{paper.author}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Pages: </span>
                    <span className="text-blue-400 font-semibold">{paper.pages}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Date: </span>
                    <span className="text-white">{formatDate(paper.date)}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Download Paper
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl border border-blue-400/30 p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our research team can conduct custom analysis on specific topics 
              relevant to your industry and business challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Request Custom Research
              </a>
              <a
                href="/resources"
                className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Explore All Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
