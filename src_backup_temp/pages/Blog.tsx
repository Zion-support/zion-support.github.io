import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Tag,
  Clock,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Zap
} from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: Transforming Patient Care',
      excerpt: 'Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic tools to personalized treatment plans.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Healthcare',
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Innovation']
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Traditional Barriers',
      excerpt: 'Discover how quantum computing is solving problems that were previously impossible for classical computers.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/400/250',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Research']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Learn about emerging cybersecurity challenges and how AI-powered solutions are helping organizations stay secure.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity', 'AI', 'Security', 'Technology']
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Best Practices for 2024',
      excerpt: 'A comprehensive guide to building scalable, resilient applications using cloud-native technologies and methodologies.',
      author: 'Jennifer Lee',
      date: '2024-01-08',
      readTime: '9 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250',
      tags: ['Cloud Computing', 'DevOps', 'Best Practices', 'Development']
    },
    {
      id: 5,
      title: 'The Rise of Micro-SaaS: Building Profitable Niche Solutions',
      excerpt: 'How small teams are building successful software businesses by focusing on specific problems and markets.',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Business',
      image: '/api/placeholder/400/250',
      tags: ['SaaS', 'Business', 'Entrepreneurship', 'Technology']
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Competitive Advantage',
      excerpt: 'Learn how organizations are leveraging data analytics to make better decisions and gain competitive advantages.',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/400/250',
      tags: ['Data Analytics', 'Business Intelligence', 'Data Science', 'Strategy']
    }
  ];

  const categories = [
    { name: 'All', count: 24, icon: TrendingUp },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Quantum Computing', count: 4, icon: Zap },
    { name: 'Cybersecurity', count: 6, icon: Shield },
    { name: 'Cloud Computing', count: 5, icon: Cloud },
    { name: 'Business', count: 3, icon: TrendingUp }
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on the latest in technology, 
              AI, quantum computing, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Categories */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-4 h-4" />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Get the latest insights delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">By {post.author}</span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}