import React, { useState } from 'react';
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

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-zion-blue-dark text-white">
            <motion.div 
                className="container mx-auto px-4 py-20"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
            >
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Latest News & Updates
                    </h1>
                    <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                        Stay informed about the latest developments in technology, AI, and Zion Tech Group
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            />
                        </div>
                        
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 bg-zion-blue-light border border-zion-blue-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* News Content Placeholder */}
                <div className="text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zion-slate-light"
                    >
                        <Globe className="w-16 h-16 mx-auto mb-4 text-zion-cyan" />
                        <h3 className="text-xl font-semibold mb-2">News Coming Soon</h3>
                        <p>We're preparing exciting news and updates. Check back soon!</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
