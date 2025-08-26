import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const newsArticles = [
    {
      title: "Zion Tech Group Launches AI-Powered Business Operations Platform",
      excerpt: "New platform revolutionizes how businesses manage operations with autonomous AI systems and intelligent automation.",
      date: "March 15, 2024",
      category: "Company News",
      readTime: "3 min read"
    },
    {
      title: "Partnership with Microsoft Azure Expands Cloud Solutions Portfolio",
      excerpt: "Strategic collaboration brings advanced cloud infrastructure and AI services to enterprise clients worldwide.",
      date: "March 10, 2024",
      category: "Partnerships",
      readTime: "2 min read"
    },
    {
      title: "Cybersecurity Innovation: Zero-Trust Architecture Implementation",
      excerpt: "Breakthrough security framework provides comprehensive protection against evolving cyber threats.",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "4 min read"
    },
    {
      title: "Quantum Computing Research Breakthrough Announced",
      excerpt: "Research team achieves significant milestone in quantum algorithm optimization for financial modeling.",
      date: "February 28, 2024",
      category: "Research",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}News
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments, innovations, and insights from Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{article.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest news, insights, and updates 
                from Zion Tech Group.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;