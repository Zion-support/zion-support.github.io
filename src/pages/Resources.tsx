import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { BookOpen, 
  FileText, 
  Users, 
  Code, 
  HelpCircle, 
  DollarSign,
  ArrowRight,
  Star,
  Sparkles,
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Cpu,
  Zap,
  Rocket,
  Heart,
  Scale,
  PenTool,
  TrendingUp,
  Lock,
  Server,
  Smartphone,
  Atom,
  Leaf,
  Building,
  Car,
  Factory,
  City,
  CheckCircle,
  Play,
  Pause,
  Stop
 } from 'lucide-react';

const Resources: React.FC = (): JSX.Element => {
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
      tags['AI', 'Business Transformation', 'Guide', 'Strategy'],
      featured: true,
      items: [
        { title: 'AI Trends 2024', type: 'Article', readTime: '5 min', featured: true },
        { title: 'Quantum Computing Breakthroughs', type: 'Research', readTime: '8 min', featured: false },
        { title: 'Digital Transformation Guide', type: 'Guide', readTime: '12 min', featured: true },
        { title: 'Cybersecurity Best Practices', type: 'Tutorial', readTime: '6 min', featured: false }
      ]
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
      tags['Quantum Computing', 'Financial Services', 'Performance', 'Success Story'],
      featured: true,
      items: [
        { title: 'Healthcare AI Implementation', type: 'Healthcare', readTime: '10 min', featured: true },
        { title: 'Manufacturing Transformation', type: 'Manufacturing', readTime: '8 min', featured: true },
        { title: 'Financial Services Innovation', type: 'Finance', readTime: '7 min', featured: false },
        { title: 'Retail Digital Revolution', type: 'Retail', readTime: '9 min', featured: false }
      ]
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
      tags['Cybersecurity', 'AI', 'Webinar', 'Security'],
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
      tags['Blockchain', 'Supply Chain', 'Enterprise', 'Implementation'],
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
      tags['IoT', 'Edge Computing', 'Architecture', 'Best Practices'],
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
      tags['AI Consciousness', 'Research', 'Breakthrough', 'Simulation'],
      featured: false,
      items: [
        { title: 'Getting Started FAQ', type: 'FAQ', readTime: '5 min', featured: false },
        { title: 'Common Issues & Solutions', type: 'Troubleshooting', readTime: '8 min', featured: false },
        { title: 'Support Contact Information', type: 'Contact', readTime: '2 min', featured: false },
        { title: 'Training Resources', type: 'Training', readTime: '10 min', featured: false }
      ]
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
      tags['Digital Transformation', 'Workshop', 'Implementation', 'Guide'],
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
      tags['Healthcare', 'AI', 'Patient Outcomes', 'Diagnostics'],
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
    return matchesCategory && matchesSearch});

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  const formatDate = (dateString: string)  => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })};

  const getResourceIcon = (type: string)  => {
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
        return FileText}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Resources & Knowledge
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Access our comprehensive library of insights, guides, and resources to stay ahead 
              of the latest technology trends and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blog"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Resources
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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

            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {featuredResources.map((resource, index)  => {
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
                )})}
            </div>
          </div>
        </section>
      )}

      {/* Regular Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our most popular and valuable resources to accelerate your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {regularResources.map((resource, index)  => {
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
              )})}
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Resource Library
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources across all categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {category.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{item.title}</span>
                      <span className="text-gray-500 text-xs">
                        {item.readTime || item.duration}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {category.items.length} resources
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized tools and platforms to support your development journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                id={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                <Link
                  to={resource.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                >
                  Access Resource
                  <ExternalLink className="w-4 h-4" />
                </Link>
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
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-600/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need More Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you access 
                the right resources and support for your needs.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-slate-300 text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Support
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  Request Custom Resources
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )};

export default Resources;
