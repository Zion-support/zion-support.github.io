import { useState } from 'react';
import { motion } from 'framer-motion';
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

export default function News() {
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

    const newsArticles = [
        {
            id: 1,
            title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
            excerpt: 'Our latest innovation combines machine learning with advanced threat detection to provide unprecedented protection against cyber attacks.',
            category: 'Product Updates',
            source: 'Company Press Releases',
            date: '2024-01-15',
            readTime: '5 min read',
            image: '/api/placeholder/400/250',
            featured: true
        },
        {
            id: 2,
            title: 'Zion Tech Group Named Top 100 Technology Companies of 2024',
            excerpt: 'Recognition for our commitment to innovation and excellence in the technology sector.',
            category: 'Awards & Recognition',
            source: 'Industry Reports',
            date: '2024-01-10',
            readTime: '3 min read',
            image: '/api/placeholder/400/250',
            featured: true
        },
        {
            id: 3,
            title: 'Strategic Partnership with Global Cloud Infrastructure Provider',
            excerpt: 'Expanding our cloud services portfolio to deliver enhanced solutions to our clients worldwide.',
            category: 'Partnerships',
            source: 'Company Press Releases',
            date: '2024-01-08',
            readTime: '4 min read',
            image: '/api/placeholder/400/250',
            featured: false
        }
    ];

    const filteredArticles = newsArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6">
                            <Globe className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                            Latest News & Updates
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Stay informed about the latest developments, innovations, and insights from Zion Tech Group
                        </p>

                        {/* Search and Filters */}
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-4 mb-8">
                                <div className="relative flex-1">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search news articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured News */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Featured Stories
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Highlighting our most important news and announcements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {newsArticles.filter(article => article.featured).map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="aspect-video bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-gray-400 text-sm">{article.date}</span>
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                                    <button className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group-hover:underline">
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All News */}
            <section className="py-20 bg-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            All News
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Browse through all our latest news, updates, and insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="aspect-video bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-gray-400 text-sm">{article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                                    <button className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group-hover:underline">
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Subscribe to our newsletter for the latest news, insights, and updates
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Have questions about our news or want to learn more? Contact our team
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                            Contact Us
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
