import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Calendar, 
    User, 
    Tag, 
    ArrowRight, 
    Search, 
    Filter, 
    Clock, 
    Eye, 
    ExternalLink, 
    TrendingUp, 
    Award, 
    Globe 
} from 'lucide-react';

const News = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = [
        'All',
        'Company News',
        'Product Updates',
        'Industry Insights',
        'Awards & Recognition',
        'Partnerships',
        'Research & Development',
        'Market Trends'
    ];
    
    const sources = [
        'All Sources',
        'Company Press Releases',
        'Industry Reports',
        'Technology News',
        'Research Papers',
        'Partner Updates',
        'Customer Success Stories'
    ];
    
    const timeframes = [
        'All Time',
        'Last 24 Hours',
        'Last Week',
        'Last Month',
        'Last 3 Months',
        'Last Year'
    ];

    const newsItems = [
        {
            id: 1,
            title: "Zion Tech Group Launches Revolutionary AI-Powered Cloud Platform",
            excerpt: "Our latest innovation combines artificial intelligence with cloud infrastructure to deliver unprecedented performance and efficiency.",
            category: "Product Updates",
            source: "Company Press Releases",
            date: "2024-01-15",
            readTime: "5 min read",
            views: 1247,
            image: "/images/news/ai-cloud-platform.jpg"
        },
        {
            id: 2,
            title: "Zion Tech Group Recognized as Top 100 Technology Companies",
            excerpt: "We're proud to announce our inclusion in the prestigious Top 100 Technology Companies list for 2024.",
            category: "Awards & Recognition",
            source: "Industry Reports",
            date: "2024-01-10",
            readTime: "3 min read",
            views: 892,
            image: "/images/news/award-recognition.jpg"
        },
        {
            id: 3,
            title: "Strategic Partnership with Global Cloud Provider Announced",
            excerpt: "New collaboration expands our global reach and enhances our service offerings across multiple continents.",
            category: "Partnerships",
            source: "Company Press Releases",
            date: "2024-01-08",
            readTime: "4 min read",
            views: 756,
            image: "/images/news/partnership.jpg"
        }
    ];

    const filteredNews = newsItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Latest News & Updates
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Stay informed about the latest developments, product updates, and industry insights from Zion Tech Group.
                    </p>
                    
                    {/* Search and Filters */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((item) => (
                            <article key={item.id} className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                                    <Globe className="w-16 h-16 text-blue-400" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            {item.source}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(item.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {item.readTime}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Eye className="w-4 h-4" />
                                            {item.views}
                                        </div>
                                        <Link
                                            to={`/news/${item.id}`}
                                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {filteredNews.length === 0 && (
                        <div className="text-center py-16">
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">No news found</h3>
                            <p className="text-gray-300">Try adjusting your search terms or filters.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Subscribe to our newsletter for the latest news, updates, and insights delivered directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
