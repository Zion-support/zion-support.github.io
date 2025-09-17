import { ArrowRight, BookOpen, Brain, Calendar, Clock, DollarSign, Heart, Star, TrendingUp, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allBlogPosts } from '../data/blog-posts';
const LatestContent2026 = () => {
  // Filter latest content from 2026
  const latestContent = allBlogPosts
    .filter(post => post.publishDate.startsWith('2025-01-21'))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Customer Experience':
        return <TrendingUp className="h-6 w-6" />;
      case 'Sustainability':
        return <Zap className="h-6 w-6" />;
      case 'Healthcare AI':
        return <Heart className="h-6 w-6" />;
      case 'Financial AI':
        return <DollarSign className="h-6 w-6" />;
      case 'Education AI':
        return <BookOpen className="h-6 w-6" />;
      default:
        return <Brain className="h-6 w-6" />;
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Customer Experience':
        return 'text-blue-500 bg-blue-100';
      case 'Sustainability':
        return 'text-green-500 bg-green-100';
      case 'Healthcare AI':
        return 'text-red-500 bg-red-100';
      case 'Financial AI':
        return 'text-emerald-500 bg-emerald-100';
      case 'Education AI':
        return 'text-purple-500 bg-purple-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Latest Content 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Discover our newest breakthrough content covering revolutionary AI innovations, 
              sustainable technology, healthcare breakthroughs, and financial revolutions
            </p>
            <div className="flex items-center justify-center text-lg text-gray-300">
              <Calendar className="h-5 w-5 mr-2" />
              Published January 21, 2025
            </div>
          </div>
        </div>
      </div>
      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fresh Content Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest articles covering the most advanced AI technologies and their real-world applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestContent.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Featured badge */}
              {post.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Featured
                  </div>
                </div>
              )}
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {getCategoryIcon(post.category)}
                    <span className="ml-2">{post.category}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                {/* Meta information */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Read more link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Want More Revolutionary Content?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Stay updated with our latest AI innovations, breakthrough technologies, and industry insights. 
              Join our community of forward-thinking professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore All Articles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default LatestContent2026;