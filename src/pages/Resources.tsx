import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Headphones, 
  Download, 
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Play,
  ExternalLink,
  Star,
  TrendingUp,
  Bookmark,
  Share2
} from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen, count: 156 },
    { id: 'documentation', name: 'Documentation', icon: FileText, count: 42 },
    { id: 'case-studies', name: 'Case Studies', icon: TrendingUp, count: 28 },
    { id: 'white-papers', name: 'White Papers', icon: Download, count: 35 },
    { id: 'webinars', name: 'Webinars', icon: Video, count: 23 },
    { id: 'training', name: 'Training', icon: Headphones, count: 18 },
    { id: 'research', name: 'Research', icon: BookOpen, count: 10 }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Implementation Guide',
      category: 'documentation',
      description: 'Comprehensive guide to implementing AI-powered business intelligence solutions in enterprise environments.',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      rating: 4.8,
      tags: ['AI', 'Business Intelligence', 'Enterprise', 'Implementation'],
      date: '2024-08-15',
      author: 'Dr. Sarah Chen',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare AI Transformation: A Case Study',
      category: 'case-studies',
      description: 'How a major hospital system achieved 40% efficiency improvement using AI-powered diagnostic tools.',
      type: 'Case Study',
      size: '1.8 MB',
      downloads: 892,
      rating: 4.9,
      tags: ['Healthcare', 'AI', 'Case Study', 'Transformation'],
      date: '2024-08-10',
      author: 'Zion Tech Group',
      featured: true
    },
    {
      id: 3,
      title: 'The Future of Quantum Computing in Enterprise',
      category: 'white-papers',
      description: 'Exploring the potential applications and implementation strategies for quantum computing in business.',
      type: 'White Paper',
      size: '3.1 MB',
      downloads: 1567,
      rating: 4.7,
      tags: ['Quantum Computing', 'Enterprise', 'Future Tech', 'Strategy'],
      date: '2024-08-05',
      author: 'Prof. Michael Rodriguez',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for 2024',
      category: 'webinars',
      description: 'Recorded webinar covering the latest cybersecurity threats and best practices for enterprise protection.',
      type: 'Video',
      duration: '45 min',
      views: 2341,
      rating: 4.6,
      tags: ['Cybersecurity', 'Best Practices', 'Enterprise', '2024'],
      date: '2024-08-01',
      author: 'Security Team',
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Automation Masterclass',
      category: 'training',
      description: 'Comprehensive training program covering CI/CD pipelines, infrastructure as code, and automation best practices.',
      type: 'Course',
      duration: '8 hours',
      students: 567,
      rating: 4.9,
      tags: ['DevOps', 'Automation', 'CI/CD', 'Training'],
      date: '2024-07-28',
      author: 'DevOps Experts',
      featured: true
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible Development',
      category: 'research',
      description: 'Research paper on ethical considerations and responsible development practices in artificial intelligence.',
      type: 'Research Paper',
      size: '2.7 MB',
      downloads: 734,
      rating: 4.8,
      tags: ['AI Ethics', 'Responsible AI', 'Research', 'Development'],
      date: '2024-07-25',
      author: 'AI Ethics Committee',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      documentation: 'from-blue-500 to-cyan-500',
      'case-studies': 'from-green-500 to-emerald-500',
      'white-papers': 'from-purple-500 to-pink-500',
      webinars: 'from-orange-500 to-red-500',
      training: 'from-indigo-500 to-purple-500',
      research: 'from-yellow-500 to-orange-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive library of technical documentation, case studies, white papers, 
              webinars, and training materials to accelerate your digital transformation journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group ${
                  resource.featured ? 'ring-2 ring-cyan-500/30' : ''
                }`}
              >
                {/* Featured Badge */}
                {resource.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(resource.category)} rounded-lg flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(resource.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {resource.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(resource.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {resource.rating}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  {resource.type === 'Video' || resource.type === 'Course' ? (
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {resource.duration}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.size}
                    </span>
                  )}
                  
                  {resource.type === 'Video' || resource.type === 'Course' ? (
                    <span>{resource.views || resource.students} views</span>
                  ) : (
                    <span>{resource.downloads} downloads</span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium group-hover:scale-105">
                  {resource.type === 'Video' || resource.type === 'Course' ? (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Watch Now</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No resources found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
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
              Need Custom Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team can create custom documentation, 
              case studies, or training materials tailored to your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Request Custom Content
              </Link>
              <Link
                to="/training"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Explore Training
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
