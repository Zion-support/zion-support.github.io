import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { latestInsights } from '../content/insights';

const Insights: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Data', 'MLOps', 'Business Intelligence', 'Edge Computing', 'Digital Strategy', 'API Security', 'Blockchain'];

  const filteredInsights = latestInsights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI': 'from-blue-500 to-purple-600',
      'Cloud': 'from-cyan-500 to-blue-600',
      'Security': 'from-red-500 to-orange-600',
      'Data': 'from-green-500 to-emerald-600',
      'MLOps': 'from-purple-500 to-pink-600',
      'Business Intelligence': 'from-indigo-500 to-blue-600',
      'Edge Computing': 'from-yellow-500 to-orange-600',
      'Digital Strategy': 'from-teal-500 to-green-600',
      'API Security': 'from-pink-500 to-rose-600',
      'Blockchain': 'from-orange-500 to-red-600',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <>
      <Helmet>
        <title>Insights - Zion Tech Group | Latest AI & IT Trends</title>
        <meta
          name="description"
          content="Stay ahead with our latest insights on AI trends, cloud strategies, cybersecurity, and digital transformation."
        />
        <meta property="og:title" content="Insights - Zion Tech Group" />
        <meta
          property="og:description"
          content="Latest insights on AI trends, cloud strategies, and digital transformation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/insights" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights - Zion Tech Group" />
        <meta
          name="twitter:description"
          content="Latest insights on AI trends, cloud strategies, and digital transformation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest Industry Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion{" "}
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
              Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, 
              and digital transformation trends shaping the future of technology.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search insights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan appearance-none cursor-pointer"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <div
                key={insight.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(insight.category)}`}>
                    {insight.category}
                  </span>
                  <div className="flex items-center text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {insight.readMinutes} min
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {insight.title}
                </h3>

                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {insight.summary}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-zion-slate text-sm">
                    {new Date(insight.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="text-zion-cyan hover:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <TrendingUp className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Never Miss an Insight
              </h2>
              <p className="text-zion-slate-light mb-8 text-lg">
                Subscribe to our newsletter and get the latest insights delivered to your inbox weekly.
              </p>
              <button className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto group">
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Insights;