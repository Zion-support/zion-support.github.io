import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle,
  Search,
  Filter,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Award,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: TrendingUp },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Globe },
    { id: 'security', name: 'Cybersecurity', icon: Award },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Lightbulb },
    { id: 'fintech', name: 'FinTech', icon: TrendingUp },
    { id: 'quantum', name: 'Quantum Computing', icon: Star }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Types', icon: FileText },
    { id: 'case-studies', name: 'Case Studies', icon: Target },
    { id: 'white-papers', name: 'White Papers', icon: FileText },
    { id: 'webinars', name: 'Webinars', icon: Users },
    { id: 'documentation', name: 'Documentation', icon: Code },
    { id: 'blog', name: 'Blog Posts', icon: BookOpen }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: A Complete Guide',
      type: 'white-papers',
      category: 'ai',
      description: 'Comprehensive guide on implementing AI solutions for business transformation, including ROI analysis and implementation strategies.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '15 min read',
      downloads: 1247,
      rating: 4.8,
      featured: true,
      tags: ['AI', 'Business Transformation', 'ROI', 'Implementation'],
      image: '/api/placeholder/400/250',
      url: '/resources/ai-business-transformation-guide'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation: Success Stories from Leading Hospitals',
      type: 'case-studies',
      category: 'healthcare',
      description: 'Real-world case studies showcasing successful AI implementations in healthcare, including patient outcomes and operational improvements.',
      author: 'Dr. Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      downloads: 892,
      rating: 4.9,
      featured: true,
      tags: ['Healthcare', 'AI', 'Case Study', 'Patient Care'],
      image: '/api/placeholder/400/250',
      url: '/resources/healthcare-ai-case-studies'
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices for Enterprise',
      type: 'white-papers',
      category: 'security',
      description: 'Essential security practices for enterprise cloud deployments, covering compliance, threat detection, and incident response.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '20 min read',
      downloads: 1567,
      rating: 4.7,
      featured: false,
      tags: ['Cloud Security', 'Enterprise', 'Compliance', 'Threat Detection'],
      image: '/api/placeholder/400/250',
      url: '/resources/cloud-security-best-practices'
    },
    {
      id: 4,
      title: 'FinTech Innovation: AI in Financial Services',
      type: 'webinars',
      category: 'fintech',
      description: 'Expert panel discussion on the latest AI innovations in financial services, including risk management and customer experience.',
      author: 'Panel Discussion',
      date: '2024-01-05',
      readTime: '60 min',
      downloads: 2341,
      rating: 4.6,
      featured: false,
      tags: ['FinTech', 'AI', 'Webinar', 'Financial Services'],
      image: '/api/placeholder/400/250',
      url: '/resources/fintech-ai-webinar'
    },
    {
      id: 5,
      title: 'Quantum Computing: The Future of AI',
      type: 'white-papers',
      category: 'quantum',
      description: 'In-depth exploration of quantum computing applications in AI, including quantum machine learning and optimization algorithms.',
      author: 'Dr. Elena Petrova',
      date: '2024-01-03',
      readTime: '25 min read',
      downloads: 678,
      rating: 4.9,
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Machine Learning', 'Optimization'],
      image: '/api/placeholder/400/250',
      url: '/resources/quantum-computing-ai-future'
    },
    {
      id: 6,
      title: 'DevOps Automation: Streamlining Development Workflows',
      type: 'case-studies',
      category: 'cloud',
      description: 'Case study on implementing DevOps automation for a Fortune 500 company, including metrics and lessons learned.',
      author: 'Jennifer Lee',
      date: '2023-12-28',
      readTime: '18 min read',
      downloads: 945,
      rating: 4.5,
      featured: false,
      tags: ['DevOps', 'Automation', 'Case Study', 'Workflow'],
      image: '/api/placeholder/400/250',
      url: '/resources/devops-automation-case-study'
    },
    {
      id: 7,
      title: 'API Security: Protecting Your Digital Assets',
      type: 'documentation',
      category: 'security',
      description: 'Comprehensive guide to API security, including authentication, authorization, and threat prevention strategies.',
      author: 'Security Team',
      date: '2023-12-25',
      readTime: '30 min read',
      downloads: 1123,
      rating: 4.8,
      featured: false,
      tags: ['API Security', 'Authentication', 'Authorization', 'Threat Prevention'],
      image: '/api/placeholder/400/250',
      url: '/resources/api-security-guide'
    },
    {
      id: 8,
      title: 'Machine Learning Model Deployment: Production Best Practices',
      type: 'documentation',
      category: 'ai',
      description: 'Technical guide on deploying machine learning models to production, covering monitoring, scaling, and maintenance.',
      author: 'Data Science Team',
      date: '2023-12-20',
      readTime: '22 min read',
      downloads: 1345,
      rating: 4.7,
      featured: false,
      tags: ['Machine Learning', 'Deployment', 'Production', 'Monitoring'],
      image: '/api/placeholder/400/250',
      url: '/resources/ml-deployment-guide'
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

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of case studies, white papers, webinars, and technical documentation. Stay ahead with industry insights and best practices."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of insights, case studies, white papers, and technical documentation. 
              Stay ahead of the curve with industry expertise and proven strategies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">{resources.length}+</div>
                <div className="text-gray-300">Resources Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">50K+</div>
                <div className="text-gray-300">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">4.8</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="py-16 bg-slate-800/50">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured Resources
              </h2>
              <p className="text-gray-300">
                Our most popular and highly-rated content, handpicked by our experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-slate-800/70 rounded-2xl p-6 hover:bg-slate-800/90 transition-all duration-300 hover:scale-105 border border-cyan-400/20"
                >
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                        {resource.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                        {resource.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {resource.author}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      {resource.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(resource.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {resource.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {resource.downloads.toLocaleString()} downloads
                    </div>
                    <Link
                      to={resource.url}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Resources */}
      <section className="py-16">
        <div className="container-responsive">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 font-medium">Filter by:</span>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                {resourceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedType === type.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="mb-4">
                  <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {resource.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                    <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                      {resource.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    {resource.author}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    {resource.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(resource.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {resource.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                  <Link
                    to={resource.url}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get notified about new resources, case studies, and industry insights 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Subscribe to Updates
            </Link>
            <Link
              to="/blog"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Explore Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
