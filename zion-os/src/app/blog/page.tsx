import Link from 'next/link';
import React from 'react';
import { getCategoriesWithCounts, getFeaturedPosts, getRecentPosts, tags } from '../../data/blog';

export const metadata = {
  title: 'Blog & News - Zion Tech Group',
  description: 'Stay updated with the latest insights, news, and thought leadership from Zion Tech Group in AI, quantum computing, and technology innovation.',
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts();
  const categories = [{ name: 'All Posts', count: recentPosts.length, active: true }, ...getCategoriesWithCounts().map(c => ({ ...c, active: false }))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, breakthroughs, and thought leadership 
            from our team of AI and technology experts.
          </p>
        </div>
      </section>

      {/* Promo Banner - New Article */}
      <section className="py-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog/ai-safety-audit-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: AI Safety Audit 2025: Practical Frameworks for Production Systems"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                AS
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">AI Governance</span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  AI Safety Audit 2025: Practical Frameworks for Production Systems
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  A hands-on audit methodology to align autonomous systems with organizational and regulatory policy.
                </p>
              </div>
              <div className="text-blue-600 font-medium whitespace-nowrap">Read now →</div>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep insights and breakthrough research from our leading experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Tags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                      category.active
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="bg-white text-gray-700 px-3 py-2 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay current with the latest developments in AI, quantum computing, and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights, research updates, and industry news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Authors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights from our team of researchers, engineers, and thought leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                KS
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Kleber Santos</h3>
              <p className="text-blue-600 text-sm mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">AI Research & Business Strategy</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SC
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Sarah Chen</h3>
              <p className="text-blue-600 text-sm mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Quantum Computing & Architecture</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                EW
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Emily Watson</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Research Officer</p>
              <p className="text-gray-600 text-sm">AI Consciousness & Ethics</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DK
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. David Kim</h3>
              <p className="text-blue-600 text-sm mb-2">Senior AI Researcher</p>
              <p className="text-gray-600 text-sm">Machine Learning & Neural Networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our services, research, and solutions to see how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Services
            </Link>
            <Link
              href="/research-development"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}