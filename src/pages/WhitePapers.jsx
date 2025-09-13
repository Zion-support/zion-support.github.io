import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, User, BookOpen, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3 } from 'lucide-react';

const WhitePapers = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const whitePapers = [
        {
            id: 1,
            title: "AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders",
            category: "Digital Transformation",
            date: "2025-01-10",
            author: "Dr. Sarah Chen",
            description: "This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.",
            topics: ["AI Strategy", "Digital Transformation", "Enterprise Leadership", "ROI Measurement"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "45 min read",
            pageCount: 28
        },
        {
            id: 2,
            title: "Quantum Computing in Cybersecurity: Next-Generation Threat Detection",
            category: "Cybersecurity",
            date: "2024-12-15",
            author: "Dr. James Wilson",
            description: "Explore how quantum computing is transforming cybersecurity, from quantum-resistant cryptography to advanced threat detection algorithms.",
            topics: ["Quantum Computing", "Cybersecurity", "Cryptography", "Threat Detection"],
            downloadUrl: "#",
            isPremium: true,
            readTime: "60 min read",
            pageCount: 35
        },
        {
            id: 3,
            title: "Autonomous AI Systems: Ethical Considerations and Implementation Guidelines",
            category: "AI Ethics",
            date: "2024-11-20",
            author: "Dr. Emily Watson",
            description: "A deep dive into the ethical considerations surrounding autonomous AI systems, with practical guidelines for responsible implementation.",
            topics: ["AI Ethics", "Autonomous Systems", "Responsible AI", "Implementation"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "40 min read",
            pageCount: 22
        },
        {
            id: 4,
            title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
            category: "Cloud & Infrastructure",
            date: "2024-10-25",
            author: "David Kim",
            description: "Learn the principles of cloud-native architecture and how to design systems that are scalable, resilient, and cost-effective.",
            topics: ["Cloud Architecture", "Scalability", "Resilience", "Cost Optimization"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "35 min read",
            pageCount: 25
        },
        {
            id: 5,
            title: "Machine Learning Operations (MLOps): Best Practices for Production AI",
            category: "AI & Machine Learning",
            date: "2024-09-30",
            author: "Marcus Rodriguez",
            description: "Comprehensive guide to MLOps, covering model deployment, monitoring, and maintenance in production environments.",
            topics: ["MLOps", "Model Deployment", "Production AI", "Monitoring"],
            downloadUrl: "#",
            isPremium: true,
            readTime: "50 min read",
            pageCount: 30
        },
        {
            id: 6,
            title: "Zero-Trust Security Architecture: Implementation and Best Practices",
            category: "Cybersecurity",
            date: "2024-08-15",
            author: "Alex Thompson",
            description: "Detailed implementation guide for zero-trust security architecture, including practical examples and best practices.",
            topics: ["Zero-Trust", "Security Architecture", "Implementation", "Best Practices"],
            downloadUrl: "#",
            isPremium: false,
            readTime: "30 min read",
            pageCount: 20
        }
    ];

    const categories = [
        { name: "All", count: 6, active: true },
        { name: "AI & Machine Learning", count: 2, active: false },
        { name: "Cybersecurity", count: 2, active: false },
        { name: "Digital Transformation", count: 1, active: false },
        { name: "Cloud & Infrastructure", count: 1, active: false },
        { name: "AI Ethics", count: 1, active: false }
    ];

    const filteredPapers = whitePapers.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            paper.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-blue-600/20 rounded-full">
                            <FileText className="h-12 w-12 text-blue-400"/>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        White Papers & Research
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                        Deep insights and comprehensive research on emerging technologies, industry trends, and best practices
                    </p>
                    
                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="relative flex-1">
                                <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search white papers..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {categories.map((category) => (
                                    <option key={category.name} value={category.name}>
                                        {category.name} ({category.count})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Papers Grid */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPapers.map((paper, index) => (
                            <div
                                key={paper.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        paper.isPremium 
                                            ? 'bg-yellow-500/20 text-yellow-400' 
                                            : 'bg-blue-500/20 text-blue-400'
                                    }`}>
                                        {paper.isPremium ? 'Premium' : 'Free'}
                                    </span>
                                    <span className="text-gray-400 text-sm">{paper.pageCount} pages</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {paper.title}
                                </h3>
                                
                                <p className="text-gray-300 mb-4 line-clamp-3">{paper.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {paper.topics.slice(0, 3).map((topic, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        {paper.author}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {paper.date}
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">{paper.readTime}</span>
                                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {filteredPapers.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No white papers found</h3>
                            <p className="text-gray-400">Try adjusting your search terms or category filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Stay Informed with Our Research
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Get access to exclusive research, industry insights, and expert analysis
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                            Subscribe to Updates
                            <Download className="w-5 h-5 ml-2" />
                        </button>
                        <Link
                            to="/contact"
                            className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                            Request Custom Research
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhitePapers;
