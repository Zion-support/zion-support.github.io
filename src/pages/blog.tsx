import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Calendar, User, Tag, ArrowRight, Clock, 
  Eye, Heart, Share2, Filter, TrendingUp, Brain,
  Shield, Cloud, Rocket, Globe, Zap
} from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Globe, count: 25 },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud, count: 5 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 4 },
    { id: 'trends', name: 'Tech Trends', icon: TrendingUp, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Discover how artificial intelligence will reshape business operations, customer experiences, and competitive landscapes in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Enterprise', 'Predictions', '2025'],
      image: '/images/blog/ai-enterprise-2025.jpg',
      views: '2.4k',
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive analysis of quantum computing\'s current state, practical applications, and timeline for enterprise adoption.',
      author: 'Marcus Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'innovation',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      image: '/images/blog/quantum-computing-reality.jpg',
      views: '1.8k',
      likes: 89,
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Defenses',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions to protect digital assets.',
      author: 'Kleber Santos',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'security',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      image: '/images/blog/ai-cybersecurity.jpg',
      views: '3.1k',
      likes: 203,
      featured: true
    },
    {
      id: 4,
      title: 'Cloud-Native AI: Building Scalable Machine Learning Infrastructure',
      excerpt: 'Best practices for deploying and scaling AI models in cloud environments, from development to production.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-08',
      readTime: '15 min read',
      category: 'cloud',
      tags: ['Cloud Computing', 'AI', 'MLOps', 'Infrastructure'],
      image: '/images/blog/cloud-native-ai.jpg',
      views: '1.6k',
      likes: 67,
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Operations',
      excerpt: 'How AI-powered automation is transforming business processes and creating self-managing organizations.',
      author: 'Marcus Rodriguez',
      date: '2025-01-05',
      readTime: '11 min read',
      category: 'ai',
      tags: ['Automation', 'AI', 'Business Operations', 'Digital Transformation'],
      image: '/images/blog/autonomous-operations.jpg',
      views: '2.1k',
      likes: 134,
      featured: false
    },
    {
      id: 6,
      title: 'Edge Computing and AI: Bringing Intelligence to the Network Edge',
      excerpt: 'Exploring the convergence of edge computing and artificial intelligence for real-time, low-latency applications.',
      author: 'Kleber Santos',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'innovation',
      tags: ['Edge Computing', 'AI', 'IoT', 'Real-time'],
      image: '/images/blog/edge-computing-ai.jpg',
      views: '1.9k',
      likes: 98,
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = selectedCategory === 'all' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  const searchPosts = (query: string) => {
    if (!query.trim()) return regularPosts;
    return regularPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const searchResults = searchQuery ? searchPosts(searchQuery) : filteredPosts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Insights, trends, and expert perspectives on AI, cloud computing, cybersecurity, 
              and the future of technology.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-300 text-gray-600 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our most popular and insightful content</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden border border-blue-200">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{featuredPost.category.toUpperCase()}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{featuredPost.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{searchResults.length} articles</span>
            </div>
          </div>
          
          {searchResults.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or browse all categories.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-gray-600">Blog Post</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <button className="hover:text-red-500 transition-colors duration-200">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-500 transition-colors duration-200">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Tech Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, industry trends, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore articles by topic and discover insights in your areas of interest.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'IoT', 'Blockchain', 'Data Analytics', 'DevOps', 'Edge Computing'].map((tag) => (
              <Link
                key={tag}
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}