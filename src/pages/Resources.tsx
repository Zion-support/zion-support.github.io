import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Video,
  HelpCircle,
  Search,
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Brain,
  Shield,
  Code,
  Zap,
  Lightbulb,
  Target,
  Building,
  BarChart3,
  Globe,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  Play,
  Pause,
  Stop
} from 'lucide-react';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 45, icon: BookOpen },
    { id: 'case-studies', name: 'Case Studies', count: 12, icon: BarChart3 },
    { id: 'white-papers', name: 'White Papers', count: 8, icon: FileText },
    { id: 'webinars', name: 'Webinars', count: 15, icon: Video },
    { id: 'support', name: 'Support', count: 10, icon: HelpCircle }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: A Complete Guide',
      description: 'Comprehensive guide on implementing AI solutions to transform business operations and drive growth.',
      category: 'white-papers',
      type: 'White Paper',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '15 min read',
      downloads: 2540,
      rating: 4.9,
      image: '/resources/ai-business-transformation.jpg',
      tags: ['AI', 'Business Transformation', 'Guide', 'Strategy'],
      featured: true,
      fileSize: '2.4 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-business-transformation.pdf'
    },
    {
      id: 2,
      title: 'Quantum Computing Success Story: Financial Services',
      description: 'How we helped a major financial institution achieve 1000x performance improvement using quantum computing.',
      category: 'case-studies',
      type: 'Case Study',
      author: 'Research Team',
      date: '2025-01-10',
      readTime: '8 min read',
      downloads: 1890,
      rating: 4.8,
      image: '/resources/quantum-financial-case.jpg',
      tags: ['Quantum Computing', 'Financial Services', 'Performance', 'Success Story'],
      featured: true,
      fileSize: '1.8 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/resources/quantum-financial-case.pdf'
    },
    {
      id: 3,
      title: 'Cybersecurity in the AI Era: Threats & Solutions',
      description: 'Expert analysis of emerging cybersecurity challenges and AI-powered security solutions.',
      category: 'webinars',
      type: 'Webinar Recording',
      author: 'Marcus Rodriguez',
      date: '2025-01-08',
      duration: '60 minutes',
      views: 3200,
      rating: 4.7,
      image: '/resources/cybersecurity-ai-webinar.jpg',
      tags: ['Cybersecurity', 'AI', 'Webinar', 'Security'],
      featured: false,
      fileSize: '450 MB',
      fileType: 'MP4',
      downloadUrl: 'https://ziontechgroup.com/resources/cybersecurity-ai-webinar.mp4'
    },
    {
      id: 4,
      title: 'Blockchain Implementation: Enterprise Case Study',
      description: 'Real-world implementation of blockchain technology in supply chain management.',
      category: 'case-studies',
      type: 'Case Study',
      author: 'Blockchain Team',
      date: '2025-01-05',
      readTime: '10 min read',
      downloads: 1560,
      rating: 4.6,
      image: '/resources/blockchain-supply-chain.jpg',
      tags: ['Blockchain', 'Supply Chain', 'Enterprise', 'Implementation'],
      featured: false,
      fileSize: '2.1 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/resources/blockchain-supply-chain.pdf'
    },
    {
      id: 5,
      title: 'IoT Edge Computing: Architecture & Best Practices',
      description: 'Technical deep-dive into IoT edge computing architecture and implementation best practices.',
      category: 'white-papers',
      type: 'White Paper',
      author: 'Dr. Emily Watson',
      date: '2024-12-28',
      readTime: '20 min read',
      downloads: 2100,
      rating: 4.8,
      image: '/resources/iot-edge-computing.jpg',
      tags: ['IoT', 'Edge Computing', 'Architecture', 'Best Practices'],
      featured: false,
      fileSize: '3.2 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/resources/iot-edge-computing.pdf'
    },
    {
      id: 6,
      title: 'AI Consciousness Research: Breakthrough Findings',
      description: 'Latest research findings on AI consciousness simulation and its implications.',
      category: 'white-papers',
      type: 'Research Paper',
      author: 'Dr. James Kim',
      date: '2024-12-25',
      readTime: '25 min read',
      downloads: 3200,
      rating: 4.9,
      image: '/resources/ai-consciousness-research.jpg',
      tags: ['AI Consciousness', 'Research', 'Breakthrough', 'Simulation'],
      featured: false,
      fileSize: '4.1 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-consciousness-research.pdf'
    },
    {
      id: 7,
      title: 'Digital Transformation Workshop: Complete Guide',
      description: 'Step-by-step guide to successful digital transformation implementation.',
      category: 'webinars',
      type: 'Workshop Recording',
      author: 'Digital Transformation Team',
      date: '2024-12-20',
      duration: '120 minutes',
      views: 2800,
      rating: 4.7,
      image: '/resources/digital-transformation-workshop.jpg',
      tags: ['Digital Transformation', 'Workshop', 'Implementation', 'Guide'],
      featured: false,
      fileSize: '680 MB',
      fileType: 'MP4',
      downloadUrl: 'https://ziontechgroup.com/resources/digital-transformation-workshop.mp4'
    },
    {
      id: 8,
      title: 'Healthcare AI Solutions: Patient Outcomes Case Study',
      description: 'How AI-powered diagnostic tools improved patient outcomes by 40%.',
      category: 'case-studies',
      type: 'Case Study',
      author: 'Healthcare Team',
      date: '2024-12-18',
      readTime: '12 min read',
      downloads: 1890,
      rating: 4.8,
      image: '/resources/healthcare-ai-case.jpg',
      tags: ['Healthcare', 'AI', 'Patient Outcomes', 'Diagnostics'],
      featured: false,
      fileSize: '2.8 MB',
      fileType: 'PDF',
      downloadUrl: 'https://ziontechgroup.com/resources/healthcare-ai-case.pdf'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'White Paper':
      case 'Research Paper':
        return FileText;
      case 'Case Study':
        return BarChart3;
      case 'Webinar Recording':
      case 'Workshop Recording':
        return Video;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Knowledge
              <span className="block text-zion-cyan">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Access our comprehensive library of case studies, white papers, webinars, and support materials.
              Learn from our expertise and stay ahead of the technology curve.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>45+ Resources</span>
              </div>
              <div className="flex items-center">
                <Download className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>15K+ Downloads</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>4.8+ Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/20'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Resources</h2>
              <p className="text-zion-slate-light">Our most popular and valuable resources</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredResources.map((resource, index) => {
                const ResourceIcon = getResourceIcon(resource.type);
                return (
                  <motion.article
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                      {/* Resource Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative">
                        <ResourceIcon className="w-16 h-16 text-zion-cyan" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-zion-cyan text-white text-xs rounded-full font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(resource.date)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {resource.readTime || resource.duration}
                          </span>
                          <span className="flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            {resource.downloads?.toLocaleString() || resource.views?.toLocaleString()}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                          {resource.title}
                        </h3>

                        <p className="text-zion-slate-light mb-4 leading-relaxed">
                          {resource.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <p className="text-zion-cyan font-semibold">{resource.author}</p>
                            <p className="text-zion-slate-light">{resource.type}</p>
                          </div>
                          <a
                            href={resource.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group"
                          >
                            Download
                            <Download className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Resources</h2>
            <p className="text-zion-slate-light">Browse our complete library of knowledge resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularResources.map((resource, index) => {
              const ResourceIcon = getResourceIcon(resource.type);
              return (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                    {/* Resource Image Placeholder */}
                    <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                      <ResourceIcon className="w-12 h-12 text-zion-cyan" />
                    </div>

                    <div className="p-6 flex-1">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(resource.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {resource.readTime || resource.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                        {resource.title}
                      </h3>

                      <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                        {resource.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm">
                          <p className="text-zion-cyan font-semibold">{resource.author}</p>
                        </div>
                        <a
                          href={resource.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group"
                        >
                          Download
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support & Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-zion-slate-light">Get support and assistance from our expert team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Chat Support</h3>
              <p className="text-zion-slate-light mb-4">Get instant help from our support team</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                Start Chat
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-zion-slate-light mb-4">Send us a detailed message</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                Send Email
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-zion-slate-light mb-4">Call us directly for urgent issues</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get notified about new resources, research findings, and industry insights.
              Never miss valuable knowledge from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
