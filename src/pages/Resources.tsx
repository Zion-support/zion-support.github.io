import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Play,
  FileText,
  BookOpen,
  Video,
  File,
  Calendar,
  Tag,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Wallet },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf },
    { id: 'space', name: 'Space Technology', icon: Rocket }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Types', icon: FileText },
    { id: 'case-studies', name: 'Case Studies', icon: Target },
    { id: 'white-papers', name: 'White Papers', icon: File },
    { id: 'webinars', name: 'Webinars', icon: Video },
    { id: 'guides', name: 'Guides', icon: BookOpen },
    { id: 'research', name: 'Research', icon: Search },
    { id: 'tools', name: 'Tools', icon: Code }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Autonomous Research Assistant: Transforming Scientific Discovery',
      category: 'ai',
      type: 'case-studies',
      description: 'How our AI-powered research platform accelerated breakthrough discoveries in pharmaceutical research by 300%.',
      image: '/resources/ai-autonomous-research.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-autonomous-research.pdf',
      format: 'PDF',
      size: '2.4 MB',
      duration: null,
      featured: true,
      tags: ['AI Research', 'Scientific Discovery', 'Pharmaceuticals', 'Automation'],
      date: '2024-01-15',
      views: 1247,
      downloads: 892
    },
    {
      id: 2,
      title: 'AI-Powered Supply Chain Optimization: A Manufacturing Success Story',
      category: 'ai',
      type: 'case-studies',
      description: 'Real-world implementation of AI-driven supply chain optimization that reduced costs by 45% and improved efficiency by 60%.',
      image: '/resources/ai-supply-chain-optimization.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-supply-chain-optimization.pdf',
      format: 'PDF',
      size: '3.1 MB',
      duration: null,
      featured: true,
      tags: ['Supply Chain', 'Manufacturing', 'AI Optimization', 'Cost Reduction'],
      date: '2024-01-10',
      views: 1156,
      downloads: 743
    },
    {
      id: 3,
      title: 'AI Content Marketing Guide: Strategies for 2024 and Beyond',
      category: 'ai',
      type: 'guides',
      description: 'Comprehensive guide to leveraging AI for content creation, distribution, and optimization in modern marketing.',
      image: '/resources/ai-content-marketing-guide.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-content-marketing-guide.pdf',
      format: 'PDF',
      size: '5.8 MB',
      duration: null,
      featured: false,
      tags: ['Content Marketing', 'AI Content', 'Digital Marketing', 'Strategy'],
      date: '2024-01-05',
      views: 2341,
      downloads: 1567
    },
    {
      id: 4,
      title: 'AI Business Transformation: From Legacy to Future-Ready',
      category: 'ai',
      type: 'white-papers',
      description: 'In-depth analysis of AI-driven business transformation strategies and implementation frameworks.',
      image: '/resources/ai-business-transformation.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-business-transformation.pdf',
      format: 'PDF',
      size: '4.2 MB',
      duration: null,
      featured: true,
      tags: ['Digital Transformation', 'Business Strategy', 'AI Implementation', 'Change Management'],
      date: '2023-12-20',
      views: 1892,
      downloads: 1123
    },
    {
      id: 5,
      title: 'Quantum Financial Modeling: Revolutionizing Risk Assessment',
      category: 'quantum',
      type: 'case-studies',
      description: 'Breakthrough case study on quantum computing applications in financial risk modeling and portfolio optimization.',
      image: '/resources/quantum-financial-case.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/quantum-financial-case.pdf',
      format: 'PDF',
      size: '2.9 MB',
      duration: null,
      featured: true,
      tags: ['Quantum Computing', 'Financial Modeling', 'Risk Assessment', 'Portfolio Optimization'],
      date: '2023-12-15',
      views: 2156,
      downloads: 1345
    },
    {
      id: 6,
      title: 'Cybersecurity AI: The Future of Threat Detection and Response',
      category: 'cybersecurity',
      type: 'webinars',
      description: 'Expert-led webinar on AI-powered cybersecurity solutions and emerging threat landscape.',
      image: '/resources/cybersecurity-ai-webinar.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/cybersecurity-ai-webinar.mp4',
      format: 'MP4',
      size: '156 MB',
      duration: '45:32',
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Webinar'],
      date: '2023-12-10',
      views: 3421,
      downloads: 2156
    },
    {
      id: 7,
      title: 'Blockchain Supply Chain Transparency: A Real-World Implementation',
      category: 'blockchain',
      type: 'case-studies',
      description: 'How blockchain technology revolutionized supply chain transparency and traceability for a global retail chain.',
      image: '/resources/blockchain-supply-chain.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/blockchain-supply-chain.pdf',
      format: 'PDF',
      size: '3.7 MB',
      duration: null,
      featured: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Traceability'],
      date: '2023-12-05',
      views: 1678,
      downloads: 987
    },
    {
      id: 8,
      title: 'IoT Edge Computing: Enabling Real-Time Decision Making',
      category: 'iot',
      type: 'white-papers',
      description: 'Comprehensive white paper on IoT edge computing architectures and real-time data processing strategies.',
      image: '/resources/iot-edge-computing.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/iot-edge-computing.pdf',
      format: 'PDF',
      size: '4.8 MB',
      duration: null,
      featured: false,
      tags: ['IoT', 'Edge Computing', 'Real-time Processing', 'Data Analytics'],
      date: '2023-11-30',
      views: 1456,
      downloads: 876
    },
    {
      id: 9,
      title: 'AI Consciousness Research: Exploring the Boundaries of Machine Intelligence',
      category: 'ai',
      type: 'research',
      description: 'Cutting-edge research on artificial consciousness and the philosophical implications of advanced AI systems.',
      image: '/resources/ai-consciousness-research.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-consciousness-research.pdf',
      format: 'PDF',
      size: '6.2 MB',
      duration: null,
      featured: true,
      tags: ['AI Consciousness', 'Machine Intelligence', 'Philosophy', 'Research'],
      date: '2023-11-25',
      views: 2987,
      downloads: 1876
    },
    {
      id: 10,
      title: 'Digital Transformation Workshop: A Step-by-Step Guide',
      category: 'ai',
      type: 'guides',
      description: 'Interactive workshop guide for organizations embarking on their digital transformation journey.',
      image: '/resources/digital-transformation-workshop.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/digital-transformation-workshop.mp4',
      format: 'MP4',
      size: '234 MB',
      duration: '1:23:45',
      featured: false,
      tags: ['Digital Transformation', 'Workshop', 'Strategy', 'Implementation'],
      date: '2023-11-20',
      views: 1876,
      downloads: 1234
    },
    {
      id: 11,
      title: 'Healthcare AI: Improving Patient Outcomes Through Intelligent Systems',
      category: 'ai',
      type: 'case-studies',
      description: 'Real-world implementation of AI in healthcare that improved patient outcomes and reduced diagnostic errors.',
      image: '/resources/healthcare-ai-case.jpg',
      downloadUrl: 'https://ziontechgroup.com/resources/healthcare-ai-case.pdf',
      format: 'PDF',
      size: '3.3 MB',
      duration: null,
      featured: true,
      tags: ['Healthcare AI', 'Patient Care', 'Diagnostics', 'Medical Technology'],
      date: '2023-11-15',
      views: 2234,
      downloads: 1456
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of AI, quantum computing, cybersecurity, and technology resources including case studies, white papers, webinars, and research."
        keywords="AI resources, quantum computing research, cybersecurity guides, technology white papers, case studies, webinars, AI research, technology resources"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of AI research, case studies, white papers, webinars, and cutting-edge 
              technology insights to stay ahead of the curve.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-sm text-gray-400">Popular:</span>
              {['AI Research', 'Quantum Computing', 'Cybersecurity', 'Case Studies'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-cyan-400 rounded-lg transition-colors text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {resourceTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-400">
              {filteredResources.length} resources found
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container-responsive">
          {filteredResources.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No resources found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                    resource.featured 
                      ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/80 ring-2 ring-cyan-400/20' 
                      : 'border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50'
                  }`}
                >
                  {resource.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Resource Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {resource.type === 'webinars' || resource.type === 'guides' ? (
                        <Play className="w-16 h-16 text-white opacity-50" />
                      ) : (
                        <FileText className="w-16 h-16 text-white opacity-50" />
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Resource Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        resource.type === 'case-studies' ? 'bg-green-500/20 text-green-400' :
                        resource.type === 'white-papers' ? 'bg-blue-500/20 text-blue-400' :
                        resource.type === 'webinars' ? 'bg-purple-500/20 text-purple-400' :
                        resource.type === 'guides' ? 'bg-orange-500/20 text-orange-400' :
                        resource.type === 'research' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {resource.type === 'case-studies' && <Target className="w-3 h-3" />}
                        {resource.type === 'white-papers' && <File className="w-3 h-3" />}
                        {resource.type === 'webinars' && <Video className="w-3 h-3" />}
                        {resource.type === 'guides' && <BookOpen className="w-3 h-3" />}
                        {resource.type === 'research' && <Search className="w-3 h-3" />}
                        {resource.type === 'tools' && <Code className="w-3 h-3" />}
                        {resourceTypes.find(t => t.id === resource.type)?.name}
                      </span>
                      
                      <span className="text-xs text-gray-400">
                        {resource.format} • {resource.size}
                        {resource.duration && ` • ${resource.duration}`}
                      </span>
                    </div>

                    {/* Resource Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>

                    {/* Resource Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>

                    {/* Resource Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-md">
                          +{resource.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Resource Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span>{new Date(resource.date).toLocaleDateString()}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {resource.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {resource.downloads.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <a
                      href={resource.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                    >
                      {resource.type === 'webinars' ? 'Watch Now' : 'Download'}
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get notified about new resources, research papers, and industry insights. 
              Join our community of technology professionals and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={`mailto:${contactInfo.email}?subject=Resource Request`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Request Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Specific Resources?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Can't find what you're looking for? Our team of experts can help you discover 
                relevant resources or create custom content tailored to your specific needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Resource Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.slice(1).map((category) => (
                  <div key={category.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <category.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-sm text-white font-medium">{category.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 rotate-45" />
      </button>
    </div>
  );
};

export default Resources;
