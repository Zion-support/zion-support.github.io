import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our new AI-driven security solution combines machine learning with advanced threat detection to provide enterprise-grade protection for businesses of all sizes.",
      category: "Product Launch",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readTime: "3 min read",
      tags: ["AI", "Cybersecurity", "Product Launch"],
      featured: true
    },
    {
      id: 2,
      title: "Zion Tech Group Recognized as Top 10 AI Companies in 2025",
      excerpt: "We're proud to announce that Zion Tech Group has been named one of the top 10 AI companies by TechInsights Magazine for our innovative solutions and industry impact.",
      category: "Awards",
      author: "Zion Tech Group",
      date: "2025-01-10",
      readTime: "2 min read",
      tags: ["Awards", "AI", "Recognition"],
      featured: false
    },
    {
      id: 3,
      title: "Partnership Announcement: Zion Tech Group and Microsoft Azure",
      excerpt: "We're excited to announce a strategic partnership with Microsoft Azure to deliver enhanced cloud solutions and AI services to our enterprise clients.",
      category: "Partnerships",
      author: "Zion Tech Group",
      date: "2025-01-05",
      readTime: "4 min read",
      tags: ["Partnerships", "Microsoft", "Azure", "Cloud"],
      featured: false
    },
    {
      id: 4,
      title: "Zion Tech Group Expands to European Market",
      excerpt: "We're expanding our global presence with new offices in London and Berlin, bringing our innovative technology solutions to European businesses.",
      category: "Company News",
      author: "Zion Tech Group",
      date: "2024-12-20",
      readTime: "3 min read",
      tags: ["Expansion", "Europe", "Global Growth"],
      featured: false
    },
    {
      id: 5,
      title: "New Research: The Future of AI in Healthcare",
      excerpt: "Our research team has published groundbreaking findings on the application of AI in healthcare, showcasing potential improvements in patient care and medical diagnostics.",
      category: "Research",
      author: "Dr. Sarah Chen",
      date: "2024-12-15",
      readTime: "5 min read",
      tags: ["Research", "AI", "Healthcare", "Innovation"],
      featured: false
    },
    {
      id: 6,
      title: "Zion Tech Group Achieves SOC 2 Type II Certification",
      excerpt: "We're proud to announce that Zion Tech Group has achieved SOC 2 Type II certification, demonstrating our commitment to the highest standards of security and compliance.",
      category: "Compliance",
      author: "Zion Tech Group",
      date: "2024-12-10",
      readTime: "2 min read",
      tags: ["Compliance", "Security", "SOC 2", "Certification"],
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: newsArticles.length, active: true },
    { name: "Product Launch", count: 1, active: false },
    { name: "Awards", count: 1, active: false },
    { name: "Partnerships", count: 1, active: false },
    { name: "Company News", count: 1, active: false },
    { name: "Research", count: 1, active: false },
    { name: "Compliance", count: 1, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}News
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest company news, product launches, industry insights, and technological breakthroughs from Zion Tech Group.
            </p>
          </div>

          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map(article => (
            <div key={article.id} className="mb-16">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                <p className="text-xl text-gray-300 mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-blue-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map(article => (
              <article key={article.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.date)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/10 text-blue-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
              <Newspaper className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;