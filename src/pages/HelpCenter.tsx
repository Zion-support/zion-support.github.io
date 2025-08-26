import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articles: [
        "Creating Your First Project",
        "Setting Up Your Environment",
        "Understanding the Dashboard",
        "First Steps with AI Models"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Master AI tools and machine learning features",
      articles: [
        "Training Custom Models",
        "Data Preparation Guidelines",
        "Model Optimization Tips",
        "API Integration Guide"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Keep your data safe and compliant",
      articles: [
        "Security Best Practices",
        "Data Privacy Guidelines",
        "Compliance Standards",
        "Access Control Setup"
      ]
    },
    {
      title: "Billing & Account",
      description: "Manage your subscription and billing",
      articles: [
        "Understanding Pricing",
        "Upgrading Your Plan",
        "Payment Methods",
        "Invoice Management"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to Train Your First AI Model",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      views: "2.3k"
    },
    {
      title: "Setting Up Two-Factor Authentication",
      category: "Security & Compliance",
      readTime: "3 min read",
      views: "1.8k"
    },
    {
      title: "API Rate Limits and Best Practices",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      views: "1.5k"
    },
    {
      title: "Understanding Your Monthly Bill",
      category: "Billing & Account",
      readTime: "4 min read",
      views: "1.2k"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, learn best practices, 
              and get the most out of Zion Tech Group's services
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or solutions..."
                className="w-full pl-6 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {category.articles.map((article, idx) => (
                      <div key={idx} className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                        • {article}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View All →
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {article.views} views
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{article.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <span className="text-blue-400 text-sm">Read Article →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/support"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Browse Tutorials
                </Link>
                <Link
                  to="/docs"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;