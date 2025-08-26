import React from 'react';
import { Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink, Award, Users, Globe, Zap } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Autonomous Business Platform",
      excerpt: "Our latest innovation combines quantum computing with advanced AI to create the world's first truly autonomous business decision-making system.",
      category: "Product Launch",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "/images/news/ai-platform-launch.jpg",
      featured: true,
      tags: ["AI", "Quantum Computing", "Autonomous Systems"]
    },
    {
      id: 2,
      title: "Zion Tech Group Recognized as Top 10 AI Company by Tech Innovators Magazine",
      excerpt: "We're honored to be recognized for our groundbreaking work in artificial intelligence and quantum computing solutions.",
      category: "Company News",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "3 min read",
      image: "/images/news/award-recognition.jpg",
      featured: false,
      tags: ["Awards", "AI", "Recognition"]
    },
    {
      id: 3,
      title: "New Partnership with Global Tech Consortium Announced",
      excerpt: "Strategic collaboration to accelerate quantum computing research and development across multiple industries.",
      category: "Partnerships",
      author: "Lisa Thompson",
      date: "January 10, 2025",
      readTime: "4 min read",
      image: "/images/news/partnership-announcement.jpg",
      featured: false,
      tags: ["Partnerships", "Quantum Computing", "Research"]
    },
    {
      id: 4,
      title: "Cybersecurity Breakthrough: Zero-Day Threat Detection System",
      excerpt: "Our security team has developed an AI-powered system that can detect and neutralize zero-day threats before they become active.",
      category: "Innovation",
      author: "David Park",
      date: "January 8, 2025",
      readTime: "6 min read",
      image: "/images/news/cybersecurity-breakthrough.jpg",
      featured: false,
      tags: ["Cybersecurity", "AI", "Threat Detection"]
    },
    {
      id: 5,
      title: "Zion Tech Group Expands to European Markets",
      excerpt: "Strategic expansion brings our cutting-edge AI and quantum solutions to European enterprises and research institutions.",
      category: "Company News",
      author: "Amanda Foster",
      date: "January 5, 2025",
      readTime: "4 min read",
      image: "/images/news/european-expansion.jpg",
      featured: false,
      tags: ["Expansion", "Europe", "Global Growth"]
    },
    {
      id: 6,
      title: "Research Paper: Quantum Neural Networks for Financial Modeling",
      excerpt: "Our research team publishes groundbreaking findings on applying quantum computing to complex financial modeling and risk assessment.",
      category: "Research",
      author: "Dr. James Kim",
      date: "January 3, 2025",
      readTime: "8 min read",
      image: "/images/news/quantum-research.jpg",
      featured: false,
      tags: ["Research", "Quantum Computing", "Finance"]
    }
  ];

  const pressReleases = [
    {
      title: "Zion Tech Group Announces Q4 2024 Financial Results",
      date: "January 20, 2025",
      summary: "Strong growth in AI solutions and quantum computing services drives record quarterly revenue."
    },
    {
      title: "New Board of Directors Appointments",
      date: "January 18, 2025",
      summary: "Industry leaders join to guide company's strategic direction and global expansion."
    },
    {
      title: "Major Contract Win with Fortune 500 Company",
      date: "January 16, 2025",
      summary: "Multi-year agreement to implement AI-powered business transformation solutions."
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Company News",
    "Partnerships",
    "Innovation",
    "Research",
    "Press Releases"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All News");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "All News" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest News
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Updated with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the latest updates on our innovations, partnerships, research breakthroughs, 
              and company milestones as we continue to push the boundaries of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search news and articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.filter(article => article.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {filteredArticles.filter(article => article.featured)[0]?.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {filteredArticles.filter(article => article.featured)[0]?.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {filteredArticles.filter(article => article.featured)[0]?.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    {filteredArticles.filter(article => article.featured)[0]?.author}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    {filteredArticles.filter(article => article.featured)[0]?.date}
                    <span className="mx-2">•</span>
                    <span>{filteredArticles.filter(article => article.featured)[0]?.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredArticles.filter(article => article.featured)[0]?.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/news/${filteredArticles.filter(article => article.featured)[0]?.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Newspaper className="w-32 h-32 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Featured Story</h3>
                    <p className="text-gray-300">Latest breakthrough in AI and quantum computing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <article
                key={article.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    {article.author}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official announcements and company updates from Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {release.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {release.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{release.date}</span>
                  <a
                    href={`/press-releases/${index + 1}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    Read Release
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, research insights, 
              and technology breakthroughs delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions about our latest news or want to learn more about our innovations? 
            Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;