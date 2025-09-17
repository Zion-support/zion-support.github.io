import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, ArrowRight, Star, TrendingUp, Calendar, User } from 'lucide-react';
import { getRecentBlogPosts, getFeaturedBlogPosts, getBlogCategories } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const LatestContent2026: React.FC = () => {
  const recentPosts = getRecentBlogPosts(12);
  const featuredPosts = getFeaturedBlogPosts();
  const categories = getBlogCategories();
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest Content 2026
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover the most revolutionary technology insights, breakthrough innovations, 
              and cutting-edge solutions that are shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
              >
                Explore All Articles
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Star className="w-8 h-8 mr-3 text-yellow-500" />
              Featured Articles
            </h2>
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 6).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{post.id}</div>
                    <div className="text-sm opacity-90">{post.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-green-500" />
              Latest Articles
            </h2>
            <Link
              to="/blog"
              className="text-green-600 hover:text-green-800 font-semibold flex items-center"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{post.id}</div>
                    <div className="text-sm opacity-90">{post.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {post.authorRole}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Star className="w-8 h-8 mr-3 text-purple-500" />
              Featured Services
            </h2>
            <Link
              to="/services"
              className="text-purple-600 hover:text-purple-800 font-semibold flex items-center"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{service.aiScore}%</div>
                    <div className="text-sm opacity-90">AI Score</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.reviews.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({service.reviews.count})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-600">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.deliveryTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-lg">
              Join thousands of companies already using our revolutionary AI solutions 
              to drive innovation and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContent2026;