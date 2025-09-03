import React from 'react';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are transforming businesses in 2025, from autonomous operations to quantum-enhanced machine learning.",
      author: "Zion Tech Group",
      date: "September 1, 2025",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Quantum Computing: Breaking Down the Barriers",
      excerpt: "Understanding how quantum computing is revolutionizing data processing and what it means for your business infrastructure.",
      author: "Zion Tech Group", 
      date: "August 28, 2025",
      category: "Quantum Computing",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Micro SAAS Solutions: The New Era of Business Software",
      excerpt: "Discover how micro SAAS platforms are changing the way businesses approach software solutions and digital transformation.",
      author: "Zion Tech Group",
      date: "August 25, 2025", 
      category: "Technology",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt: "Learn about the latest cybersecurity strategies and how AI is being used to both protect and threaten digital infrastructure.",
      author: "Zion Tech Group",
      date: "August 22, 2025",
      category: "Cybersecurity", 
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning", 
    "Quantum Computing",
    "Cybersecurity",
    "Technology",
    "Business Solutions"
  ];

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group."
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Technology Insights</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Stay ahead of the curve with our latest insights on AI, quantum computing, 
                cybersecurity, and emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-6xl text-gray-300">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest technology insights and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;