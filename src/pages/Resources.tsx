import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle, 
  ArrowRight, 
  Star, 
  Calendar, 
  Clock, 
  Download, 
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  Lightbulb,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Leaf,
  Globe,
  Building,
  TrendingDown,
  Eye,
  MessageCircle,
  Play,
  Headphones,
  Bookmark,
  Share2
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen, count: 150 },
    { id: 'blog', name: 'Blog & Insights', icon: BookOpen, count: 45 },
    { id: 'case-studies', name: 'Case Studies', icon: Target, count: 25 },
    { id: 'white-papers', name: 'White Papers', icon: FileText, count: 20 },
    { id: 'webinars', name: 'Webinars', icon: Users, count: 15 },
    { id: 'documentation', name: 'Documentation', icon: Code, count: 30 },
    { id: 'faq', name: 'FAQ & Support', icon: HelpCircle, count: 15 }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation Guide 2024',
      category: 'white-papers',
      type: 'White Paper',
      description: 'Comprehensive guide to implementing AI solutions for business transformation, including ROI analysis and implementation strategies.',
      author: 'Zion Tech Group Team',
      date: '2024-01-15',
      readTime: '15 min read',
      downloads: 1250,
      featured: true,
      tags: ['AI', 'Business Transformation', 'ROI', 'Implementation'],
      image: '/images/ai-transformation-guide.jpg',
      href: '/resources/ai-business-transformation-guide-2024'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Enterprise',
      category: 'white-papers',
      type: 'White Paper',
      description: 'Essential cybersecurity practices and frameworks for enterprise organizations, including compliance and risk management.',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '12 min read',
      downloads: 980,
      featured: true,
      tags: ['Cybersecurity', 'Enterprise', 'Compliance', 'Risk Management'],
      image: '/images/cybersecurity-best-practices.jpg',
      href: '/resources/cybersecurity-best-practices-enterprise'
    },
    {
      id: 3,
      title: 'Cloud Migration Success Stories',
      category: 'case-studies',
      type: 'Case Study',
      description: 'Real-world examples of successful cloud migrations, including challenges, solutions, and measurable outcomes.',
      author: 'Cloud Solutions Team',
      date: '2024-01-05',
      readTime: '8 min read',
      views: 2100,
      featured: true,
      tags: ['Cloud Migration', 'Success Stories', 'AWS', 'Azure'],
      image: '/images/cloud-migration-stories.jpg',
      href: '/case-studies/cloud-migration-success-stories'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: 2024 Trends',
      category: 'blog',
      excerpt: 'Explore the latest developments in AI-powered healthcare solutions and their impact on patient care and medical research.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-20',
      readTime: '6 min read',
      tags: ['AI', 'Healthcare', 'Trends', '2024'],
      href: '/blog/future-ai-healthcare-2024-trends'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype',
      category: 'blog',
      excerpt: 'Separate fact from fiction in quantum computing and understand its real-world applications and limitations.',
      author: 'Dr. Michael Rodriguez',
      date: '2024-01-18',
      readTime: '8 min read',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      href: '/blog/quantum-computing-breaking-down-hype'
    },
    {
      id: 3,
      title: 'Sustainable Technology: Green IT Solutions',
      category: 'blog',
      excerpt: 'Discover how technology can drive sustainability initiatives and reduce environmental impact in business operations.',
      author: 'Elena Green',
      date: '2024-01-16',
      readTime: '5 min read',
      tags: ['Sustainability', 'Green IT', 'Environment', 'Technology'],
      href: '/blog/sustainable-technology-green-it-solutions'
    }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI Strategy Workshop: From Vision to Implementation',
      category: 'webinars',
      description: 'Interactive workshop on developing and implementing AI strategies for your organization.',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Alex Johnson',
      registration: 'Open',
      href: '/webinars/ai-strategy-workshop'
    },
    {
      id: 2,
      title: 'Cybersecurity Threat Landscape 2024',
      category: 'webinars',
      description: 'Analysis of current cybersecurity threats and strategies to protect your organization.',
      date: '2024-02-20',
      time: '1:00 PM EST',
      duration: '60 minutes',
      speaker: 'Sarah Martinez',
      registration: 'Open',
      href: '/webinars/cybersecurity-threat-landscape-2024'
    }
  ];

  const documentation = [
    {
      id: 1,
      title: 'API Reference Guide',
      category: 'documentation',
      description: 'Comprehensive API documentation for all Zion Tech Group services and platforms.',
      version: 'v2.1',
      lastUpdated: '2024-01-15',
      href: '/docs/api-reference'
    },
    {
      id: 2,
      title: 'Developer Getting Started Guide',
      category: 'documentation',
      description: 'Step-by-step guide for developers to get started with our platforms and services.',
      version: 'v1.0',
      lastUpdated: '2024-01-10',
      href: '/docs/developer-guide'
    }
  ];

  const filteredResources = () => {
    let resources = [...featuredResources, ...blogPosts, ...webinars, ...documentation];
    
    if (activeCategory !== 'all') {
      resources = resources.filter(resource => resource.category === activeCategory);
    }
    
    if (searchQuery) {
      resources = resources.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return resources;
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, and documentation to help you stay informed and make better technology decisions."
        canonical="https://ziontechgroup.com/resources"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Access our comprehensive library of resources to stay informed about the latest technology trends, 
              best practices, and insights that drive business innovation and growth.
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
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-slate-600/50 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and valuable resources handpicked by our experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-400/50 shadow-lg shadow-cyan-400/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-cyan-400 font-medium">Featured</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{resource.author}</span>
                  <span>•</span>
                  <span>{resource.date}</span>
                  <span>•</span>
                  <span>{resource.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags?.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={resource.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of resources organized by category and topic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources().map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-3">
                  {React.createElement(getCategoryIcon(resource.category), { className: "w-4 h-4 text-cyan-400" })}
                  <span className="text-sm text-gray-400">{getCategoryName(resource.category)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {resource.date && <span>{resource.date}</span>}
                    {resource.readTime && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{resource.readTime}</span>
                      </>
                    )}
                  </div>
                  <Link
                    to={resource.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Latest Insights</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get notified about new resources, webinars, and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/newsletter"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Request Custom Content
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
