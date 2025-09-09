import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Opportunities',
      excerpt: 'Explore how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with Modern Technologies',
      excerpt: 'Learn best practices for creating web applications that can handle growth and maintain performance.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Web Development',
      image: '🌐'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their digital assets.',
      author: 'Alex Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '🔒'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your business to the cloud with minimal disruption.',
      author: 'Emily Watson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Cloud Solutions',
      image: '☁️'
    },
    {
      id: 5,
      title: 'The Rise of Microservices Architecture',
      excerpt: 'Understanding microservices and how they can improve your application architecture and scalability.',
      author: 'Michael Rodriguez',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Architecture',
      image: '🏗️'
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to make informed business decisions and drive growth.',
      author: 'Sarah Chen',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'Data Analytics',
      image: '📊'
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Web Development',
    'Cybersecurity',
    'Cloud Solutions',
    'Architecture',
    'Data Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and industry trends from our team of experts.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-cyan-400 hover:text-blue-600 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-400 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-blue-200 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-xs text-blue-200 mb-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-600 font-semibold py-2 px-4 rounded-lg text-center block transition-colors"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, tutorials, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-cyan-400 hover:bg-cyan-500 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogPage;