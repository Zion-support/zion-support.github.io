import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { enhancedInnovativeServices2027 } from '../data/enhancedInnovativeServices2027';

const EnhancedInnovativeServicesShowcase2027: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState<'name' | 'price' | 'innovation'>('name');

    const categories = useMemo(() => {
        const cats = ['all', ...Array.from(new Set(enhancedInnovativeServices2027.map(service => service.category)))];
        return cats;
    }, []);

    const filteredServices = useMemo(() => {
        let filtered = enhancedInnovativeServices2027;

        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => service.category === selectedCategory);
        }

        // Sort services
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price':
                    const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
                    const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
                    return priceA - priceB;
                case 'innovation':
                    const innovationOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Advanced': 1, 'Sustainable': 1, 'Environmental': 1, 'Privacy-focused': 1, 'Transformative': 2, 'Breakthrough': 3 };
                    const orderA = innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0;
                    const orderB = innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0;
                    return orderB - orderA;
                default:
                    return a.title.localeCompare(b.title);
            }
        });

        return filtered;
    }, [searchTerm, selectedCategory, sortBy]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20"
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Enhanced Innovative Services 2027
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                        Discover the future of technology with our cutting-edge micro SaaS, IT services, and AI solutions
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-zion-blue px-8 py-3 rounded-full font-semibold hover:bg-zion-cyan transition-colors"
                        >
                            Explore Services
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-zion-blue transition-colors"
                        >
                            Get Pricing
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Contact Info Banner */}
            <div className="bg-zion-slate-dark text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">📞</span>
                            <span>+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">✉️</span>
                            <span>kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">🌐</span>
                            <span>https://ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">📍</span>
                            <span>364 E Main St STE 1008 Middletown DE 19709</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Search */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Search Services</label>
                            <input
                                type="text"
                                placeholder="Search by name, description, or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-zion-slate-dark text-white">
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort By */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'innovation')}
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            >
                                <option value="name" className="bg-zion-slate-dark text-white">Name</option>
                                <option value="price" className="bg-zion-slate-dark text-white">Price</option>
                                <option value="innovation" className="bg-zion-slate-dark text-white">Innovation Level</option>
                            </select>
                        </div>

                        {/* View Mode */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">View Mode</label>
                            <div className="flex bg-white/20 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        viewMode === 'grid' 
                                            ? 'bg-zion-cyan text-white' 
                                            : 'text-white/70 hover:text-white'
                                    }`}
                                >
                                    Grid
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        viewMode === 'list' 
                                            ? 'bg-zion-cyan text-white' 
                                            : 'text-white/70 hover:text-white'
                                    }`}
                                >
                                    List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="text-white mb-6">
                    <p className="text-lg">
                        Showing {filteredServices.length} of {enhancedInnovativeServices2027.length} services
                    </p>
                </div>

                {/* Services Grid/List */}
                {filteredServices.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="text-white text-xl mb-4">No services found</div>
                        <p className="text-white/70">Try adjusting your search criteria or filters</p>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
                    >
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                                    viewMode === 'list' ? 'flex gap-6' : ''
                                }`}
                            >
                                {viewMode === 'grid' ? (
                                    // Grid View
                                    <>
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-3">
                                                {service.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                            <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-white/60 text-sm">Price:</span>
                                                <span className="text-zion-cyan font-bold">{service.price}/{service.billing}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white/60 text-sm">Innovation:</span>
                                                <span className="text-white font-medium">{service.innovationLevel}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white/60 text-sm">Market Size:</span>
                                                <span className="text-white font-medium">{service.marketSize}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white/60 text-sm">Growth Rate:</span>
                                                <span className="text-white font-medium">{service.growthRate}</span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {service.features.slice(0, 6).map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <span className="text-zion-cyan">✓</span>
                                                        <span className="text-white/80 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                                        >
                                            {service.ctaLabel}
                                        </motion.button>
                                    </>
                                ) : (
                                    // List View
                                    <>
                                        <div className="flex-1">
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-3">
                                                    {service.category}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                                <p className="text-white/80 leading-relaxed">{service.description}</p>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                                <div>
                                                    <span className="text-white/60 text-sm">Price:</span>
                                                    <div className="text-zion-cyan font-bold">{service.price}/{service.billing}</div>
                                                </div>
                                                <div>
                                                    <span className="text-white/60 text-sm">Innovation:</span>
                                                    <div className="text-white font-medium">{service.innovationLevel}</div>
                                                </div>
                                                <div>
                                                    <span className="text-white/60 text-sm">Market Size:</span>
                                                    <div className="text-white font-medium">{service.marketSize}</div>
                                                </div>
                                                <div>
                                                    <span className="text-white/60 text-sm">Growth Rate:</span>
                                                    <div className="text-white font-medium">{service.growthRate}</div>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                    {service.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            <span className="text-zion-cyan">✓</span>
                                                            <span className="text-white/80 text-sm">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between items-end">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-8 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 whitespace-nowrap"
                                            >
                                                {service.ctaLabel}
                                            </motion.button>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Final CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20 mt-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-zion-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-zion-cyan transition-colors"
                        >
                            Contact Sales Team
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-zion-blue transition-colors"
                        >
                            Schedule Demo
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default EnhancedInnovativeServicesShowcase2027;