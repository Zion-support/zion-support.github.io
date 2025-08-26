import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Autonomous Platform",
      excerpt: "Our latest AI autonomous platform represents a breakthrough in intelligent automation, enabling businesses to achieve unprecedented levels of efficiency and innovation.",
      category: "Company News",
      date: "2024-08-26",
      readTime: "5 min read",
      image: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Cybersecurity: The Future of Digital Protection",
      excerpt: "As cyber threats become more sophisticated, AI autonomous security systems are revolutionizing how organizations protect their digital assets and maintain compliance.",
      category: "Industry Insights",
      date: "2024-08-24",
      readTime: "7 min read",
      image: "🔒",
      featured: false
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough: Implications for AI Development",
      excerpt: "Recent advances in quantum computing are opening new possibilities for AI development, particularly in areas requiring complex optimization and simulation.",
      category: "Technology Trends",
      date: "2024-08-22",
      readTime: "6 min read",
      image: "⚛️",
      featured: false
    },
    {
      id: 4,
      title: "Zion Tech Group Recognized as Top AI Innovation Company",
      excerpt: "Industry recognition highlights our commitment to pushing the boundaries of AI technology and delivering transformative solutions to our clients.",
      category: "Company News",
      date: "2024-08-20",
      readTime: "3 min read",
      image: "🏆",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Autonomous DevOps: Transforming Software Development",
      excerpt: "Autonomous DevOps systems are revolutionizing software development by automating complex workflows and enabling continuous innovation at scale.",
      category: "Industry Insights",
      date: "2024-08-18",
      readTime: "8 min read",
      image: "⚙️",
      featured: false
    },
    {
      id: 6,
      title: "Edge AI: Bringing Intelligence to the Network Edge",
      excerpt: "Edge AI is enabling real-time processing and decision-making closer to data sources, revolutionizing industries from manufacturing to healthcare.",
      category: "Technology Trends",
      date: "2024-08-16",
      readTime: "6 min read",
      image: "🌐",
      featured: false
    },
    {
      id: 7,
      title: "Zion Tech Group Expands Global Operations",
      excerpt: "Strategic expansion into new markets demonstrates our commitment to serving clients worldwide and driving global innovation in AI technology.",
      category: "Company News",
      date: "2024-08-14",
      readTime: "4 min read",
      image: "🌍",
      featured: false
    },
    {
      id: 8,
      title: "AI Ethics and Governance: Building Trust in Autonomous Systems",
      excerpt: "As AI systems become more autonomous, establishing robust ethical frameworks and governance structures is crucial for building trust and ensuring responsible deployment.",
      category: "Industry Insights",
      date: "2024-08-12",
      readTime: "9 min read",
      image: "⚖️",
      featured: false
    }
  ];

  const categories = ["All Categories", "Company News", "Industry Insights", "Technology Trends"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                News & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments in AI technology, industry insights, 
              and company news from Zion Tech Group.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsArticles.filter(article => article.featured).map((article) => (
            <div 
              key={article.id}
              className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{article.image}</div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{article.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{article.excerpt}</p>
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-lg"
                  >
                    Read Full Article
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="text-center">
                  <div className="text-8xl">{article.image}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <div 
                key={article.id}
                className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{article.image}</div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-600/50 text-blue-400 text-xs rounded-full border border-white/10">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs">{article.date}</span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-sm"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest news, insights, and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive resources and discover how AI autonomous solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Solutions
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;