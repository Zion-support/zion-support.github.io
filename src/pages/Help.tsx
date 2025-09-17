import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  MessageCircle, 
  Phone,
  Mail,
  Clock,
  Star,
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  Zap,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    { id: 'all', name: 'All Help', icon: BookOpen, count: 156 },
    { id: 'getting-started', name: 'Getting Started', icon: TrendingUp, count: 23 },
    { id: 'services', name: 'Services', icon: Cloud, count: 45 },
    { id: 'marketplace', name: 'Marketplace', icon: Zap, count: 34 },
    { id: 'account', name: 'Account & Billing', icon: Shield, count: 28 },
    { id: 'technical', name: 'Technical Support', icon: Brain, count: 26 }
  ];

  const helpArticles = [
    {
      id: 1,
      title: "How to Create Your First Project",
      category: "getting-started",
      difficulty: "Beginner",
      readTime: "5 min",
      description: "Step-by-step guide to creating your first project on Zion Tech Group",
      tags: ["projects", "getting-started", "tutorial"],
      featured: true
    },
    {
      id: 2,
      title: "Understanding AI Service Pricing",
      category: "services",
      difficulty: "Intermediate",
      readTime: "8 min",
      description: "Complete guide to understanding how AI services are priced and billed",
      tags: ["pricing", "AI", "billing"],
      featured: true
    },
    {
      id: 3,
      title: "Marketplace Security Best Practices",
      category: "marketplace",
      difficulty: "Beginner",
      readTime: "6 min",
      description: "Essential security practices for using our marketplace safely",
      tags: ["security", "marketplace", "safety"],
      featured: false
    },
    {
      id: 4,
      title: "Setting Up Two-Factor Authentication",
      category: "account",
      difficulty: "Beginner",
      readTime: "4 min",
      description: "Secure your account with two-factor authentication",
      tags: ["security", "2FA", "account"],
      featured: false
    },
    {
      id: 5,
      title: "API Integration Guide",
      category: "technical",
      difficulty: "Advanced",
      readTime: "15 min",
      description: "Complete guide to integrating Zion Tech Group APIs into your applications",
      tags: ["API", "integration", "development"],
      featured: true
    },
    {
      id: 6,
      title: "Troubleshooting Common Issues",
      category: "technical",
      difficulty: "Intermediate",
      readTime: "10 min",
      description: "Solutions to the most common technical issues users encounter",
      tags: ["troubleshooting", "support", "technical"],
      featured: false
    }
  ];

  const videoTutorials = [
    {
      id: 1,
      title: "Getting Started with Zion Tech Group",
      duration: "12:34",
      thumbnail: "/api/placeholder/400/225",
      description: "Complete walkthrough of the platform for new users",
      category: "getting-started"
    },
    {
      id: 2,
      title: "AI Service Configuration",
      duration: "18:45",
      thumbnail: "/api/placeholder/400/225",
      description: "How to configure and customize AI services for your needs",
      category: "services"
    },
    {
      id: 3,
      title: "Marketplace Navigation Tips",
      duration: "8:22",
      thumbnail: "/api/placeholder/400/225",
      description: "Pro tips for finding the best services and talent",
      category: "marketplace"
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Help Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Find answers, tutorials, and support resources to get the most out of Zion Tech Group
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles, tutorials, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-futuristic border-zion-cyan'
                      : 'bg-white/5 text-white border-zion-cyan/30 hover:bg-white/10'
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

        {/* Featured Articles */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpArticles.filter(article => article.featured).map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {article.difficulty}
                    </span>
                    <span className="text-zion-cyan/60 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-zion-cyan/80 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-zion-cyan" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Video Tutorials */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Video Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTutorials.map((tutorial) => (
                <motion.div
                  key={tutorial.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 flex items-center justify-center">
                      <Play className="w-16 h-16 text-zion-cyan" />
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                    <p className="text-zion-cyan/80 text-sm">{tutorial.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Help Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {searchTerm ? `Search Results (${filteredArticles.length})` : 'All Help Articles'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {article.difficulty}
                        </span>
                        <span className="text-zion-cyan/60 text-sm">{article.readTime}</span>
                        <span className="text-zion-blue/60 text-sm capitalize">{article.category.replace('-', ' ')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                      <p className="text-zion-cyan/80 mb-3">{article.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-zion-cyan ml-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <AlertCircle className="w-16 h-16 text-zion-cyan/60 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
              <p className="text-zion-cyan/80 mb-6">
                Try adjusting your search terms or browse our categories
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Browse All Articles
              </button>
            </div>
          )}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still need help?
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues. 
              We typically respond within 2-4 hours during business hours.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Live Chat</h4>
                <p className="text-zion-cyan/80 text-sm">Get instant help from our support team</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Email Support</h4>
                <p className="text-zion-cyan/80 text-sm">Send us a detailed message</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Phone Support</h4>
                <p className="text-zion-cyan/80 text-sm">Speak directly with our team</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;