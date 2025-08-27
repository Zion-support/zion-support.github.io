import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  Search,
  Filter,
  Brain,
  Cloud,
  Shield,
  Sparkles,
  Zap,
  Globe,
  Target,
  TrendingUp,
  BookOpen,
  BarChart3,
  Lightbulb,
  Award
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'AI-Powered Business Transformation: A Comprehensive Framework',
    description: 'This white paper presents a detailed framework for implementing AI solutions that drive measurable business value and competitive advantage.',
    author: 'Dr. Sarah Chen',
    authorTitle: 'AI Research Director',
    date: '2024-01-15',
    category: 'AI & ML',
    icon: Brain,
    downloads: 1250,
    views: 3200,
    featured: true,
    tags: ['AI Strategy', 'Business Transformation', 'ROI Measurement', 'Implementation'],
    abstract: 'This comprehensive study examines how organizations can successfully implement AI solutions to transform their business operations. We present a proven framework that addresses common challenges and provides actionable strategies for achieving measurable results.',
    keyInsights: [
      'AI implementation success factors',
      'ROI measurement methodologies',
      'Change management strategies',
      'Risk mitigation approaches'
    ]
  },
  {
    id: 2,
    title: 'Quantum Computing in Financial Services: Opportunities and Challenges',
    description: 'Explore the potential of quantum computing to revolutionize financial modeling, risk assessment, and portfolio optimization.',
    author: 'Prof. Michael Rodriguez',
    authorTitle: 'Quantum Computing Expert',
    date: '2024-01-10',
    category: 'Emerging Tech',
    icon: Sparkles,
    downloads: 890,
    views: 2100,
    featured: true,
    tags: ['Quantum Computing', 'Financial Services', 'Risk Management', 'Portfolio Optimization'],
    abstract: 'This research paper analyzes the current state of quantum computing and its potential applications in financial services. We examine both the opportunities for innovation and the challenges that must be addressed for widespread adoption.',
    keyInsights: [
      'Quantum algorithms for financial modeling',
      'Risk assessment applications',
      'Implementation challenges',
      'Future development roadmap'
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity in the Age of AI: Threat Landscape and Defense Strategies',
    description: 'Understand emerging cybersecurity threats and learn about AI-powered defense mechanisms that can protect your organization.',
    author: 'Alex Thompson',
    authorTitle: 'Cybersecurity Specialist',
    date: '2024-01-05',
    category: 'Security',
    icon: Shield,
    downloads: 1100,
    views: 2800,
    featured: false,
    tags: ['Cybersecurity', 'AI Threats', 'Defense Strategies', 'Threat Intelligence'],
    abstract: 'This white paper examines the evolving cybersecurity landscape in the age of AI. We analyze emerging threats and present comprehensive defense strategies that leverage both traditional security practices and cutting-edge AI technologies.',
    keyInsights: [
      'AI-powered attack vectors',
      'Advanced defense mechanisms',
      'Threat intelligence frameworks',
      'Incident response strategies'
    ]
  },
  {
    id: 4,
    title: 'Cloud-Native Architecture: Building Scalable and Resilient Systems',
    description: 'Master the principles of cloud-native design and learn how to build systems that scale automatically and recover from failures gracefully.',
    author: 'Jennifer Lee',
    authorTitle: 'Cloud Architect',
    date: '2023-12-20',
    category: 'Cloud & DevOps',
    icon: Cloud,
    downloads: 750,
    views: 1800,
    featured: false,
    tags: ['Cloud Architecture', 'Microservices', 'Scalability', 'Resilience'],
    abstract: 'This technical paper provides a comprehensive guide to designing and implementing cloud-native architectures. We cover essential principles, design patterns, and best practices for building systems that can scale automatically and maintain high availability.',
    keyInsights: [
      'Microservices design principles',
      'Auto-scaling strategies',
      'Fault tolerance patterns',
      'Monitoring and observability'
    ]
  },
  {
    id: 5,
    title: 'IoT Security: Protecting Connected Devices in Enterprise Environments',
    description: 'Learn about the unique security challenges of IoT deployments and discover effective strategies for protecting connected devices.',
    author: 'Dr. Robert Kim',
    authorTitle: 'IoT Security Researcher',
    date: '2023-12-15',
    category: 'Security',
    icon: Shield,
    downloads: 680,
    views: 1600,
    featured: false,
    tags: ['IoT Security', 'Device Protection', 'Network Security', 'Enterprise IoT'],
    abstract: 'This research paper examines the security challenges specific to IoT deployments in enterprise environments. We present a comprehensive security framework that addresses device-level, network-level, and application-level security concerns.',
    keyInsights: [
      'IoT device vulnerabilities',
      'Network security protocols',
      'Device authentication methods',
      'Security monitoring strategies'
    ]
  },
  {
    id: 6,
    title: 'Machine Learning for Predictive Analytics: A Practical Guide',
    description: 'Discover how to implement machine learning solutions for predictive analytics and gain actionable insights from your data.',
    author: 'Maria Santos',
    authorTitle: 'Data Science Lead',
    date: '2023-12-10',
    category: 'AI & ML',
    icon: Brain,
    downloads: 920,
    views: 2200,
    featured: false,
    tags: ['Machine Learning', 'Predictive Analytics', 'Data Science', 'Business Intelligence'],
    abstract: 'This practical guide demonstrates how organizations can implement machine learning solutions for predictive analytics. We provide step-by-step approaches for building, deploying, and maintaining ML models that deliver real business value.',
    keyInsights: [
      'ML model development process',
      'Feature engineering techniques',
      'Model evaluation methods',
      'Production deployment strategies'
    ]
  }
];

const categories = [
  { name: 'All', icon: Globe, count: whitePapers.length },
  { name: 'AI & ML', icon: Brain, count: whitePapers.filter(w => w.category === 'AI & ML').length },
  { name: 'Cloud & DevOps', icon: Cloud, count: whitePapers.filter(w => w.category === 'Cloud & DevOps').length },
  { name: 'Security', icon: Shield, count: whitePapers.filter(w => w.category === 'Security').length },
  { name: 'Emerging Tech', icon: Sparkles, count: whitePapers.filter(w => w.category === 'Emerging Tech').length }
];

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPaper, setSelectedPaper] = useState(null);

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredWhitePapers = whitePapers.filter(paper => paper.featured);
  const regularWhitePapers = filteredWhitePapers.filter(paper => !paper.featured);

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research & Insights
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                White Papers
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Access our comprehensive research papers and technical documents covering AI, 
              cybersecurity, cloud computing, and emerging technologies. Gain deep insights 
              from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#papers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Browse Papers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=white-paper-request"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Request Custom Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'border-zion-cyan bg-zion-cyan text-zion-slate-dark'
                      : 'border-zion-cyan/20 text-zion-cyan hover:border-zion-cyan/40'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs bg-zion-slate-dark px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section id="papers" className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Research Papers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover insights from our latest research and technical analysis.
            </p>
          </motion.div>

          {filteredPapers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zion-slate-light text-lg">No white papers match your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-zion-slate border rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                    paper.featured 
                      ? 'border-zion-cyan/40 shadow-lg shadow-zion-cyan/10' 
                      : 'border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`}
                  onClick={() => setSelectedPaper(paper)}
                >
                  {paper.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-zion-cyan fill-current" />
                      <span className="text-zion-cyan font-semibold text-sm">Featured Paper</span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <paper.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{paper.title}</h3>
                      <p className="text-zion-slate-light mb-4">{paper.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-zion-slate-light">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(paper.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {paper.author}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      {paper.downloads} downloads
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      {paper.views} views
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-zion-cyan font-semibold">Author:</span>
                      <span className="text-white">{paper.author}</span>
                      <span className="text-zion-slate-light">({paper.authorTitle})</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm border border-zion-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300">
                      <Download className="mr-2 w-4 h-4" />
                      Download PDF
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPaper(paper);
                      }}
                      className="px-4 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Paper Detail Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedPaper.title}</h2>
              <button
                onClick={() => setSelectedPaper(null)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Abstract</h3>
                <p className="text-zion-slate-light">{selectedPaper.abstract}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Key Insights</h3>
                <ul className="space-y-2">
                  {selectedPaper.keyInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-6">
                <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300">
                  <Download className="mr-2 w-4 h-4" />
                  Download Full Paper
                </button>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed with Our Research
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get notified about new white papers and research publications from our team of experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=white-paper-subscription"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=custom-research"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Request Custom Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
