import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, Phone, Mail, MapPin, TrendingUp, Play, Download, ExternalLink, Search } from 'lucide-react';
import { CUTTING_EDGE_SERVICES_2025 } from '../data/enhanced-2025-cutting-edge-services';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/specialized-industry-solutions-2025';

const ComprehensiveServicesShowcase2025 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    
    const allServices = [...CUTTING_EDGE_SERVICES_2025, ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025];
    const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
    const industries = ['all', ...Array.from(new Set(SPECIALIZED_INDUSTRY_SOLUTIONS_2025.map(service => service.industry)))];
    
    // Filter services based on selection
    const filteredServices = allServices.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesIndustry = selectedIndustry === 'all' ||
            ('industry' in service ? service.industry === selectedIndustry : true);
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesIndustry && matchesSearch;
    });

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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }} 
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Cutting-Edge
                            </span>
                            <br />
                            <span className="text-white">AI & IT Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                            Discover our revolutionary micro SAAS solutions that are transforming industries through 
                            artificial intelligence, quantum computing, and next-generation technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            >
                                <Play className="w-5 h-5"/>
                                Watch Demo
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
                            >
                                <Download className="w-5 h-5"/>
                                Download Brochure
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-white">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <Phone className="w-5 h-5 text-blue-300"/>
                            <span className="font-semibold">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <Mail className="w-5 h-5 text-blue-300"/>
                            <span className="font-semibold">kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="w-5 h-5 text-blue-300"/>
                            <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search services..." 
                                    value={searchTerm} 
                                    onChange={(e) => setSearchTerm(e.target.value)} 
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <select 
                                value={selectedCategory} 
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-slate-800 text-white">
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select 
                                value={selectedIndustry} 
                                onChange={(e) => setSelectedIndustry(e.target.value)}
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                {industries.map(industry => (
                                    <option key={industry} value={industry} className="bg-slate-800 text-white">
                                        {industry === 'all' ? 'All Industries' : industry}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-300 uppercase tracking-wide">{service.category}</div>
                                        <div className="text-xs text-gray-400">{service.subcategory || 'General'}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                                    <div className="text-sm text-gray-400">/month</div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    <Sparkles className="w-3 h-3 mr-1" />
                                    {service.innovationLevel || 'Advanced'}
                                </span>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                                <div className="grid grid-cols-1 gap-1">
                                    {service.features.slice(0, 4).map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-gray-400">
                                            <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                                <div className="grid grid-cols-1 gap-1">
                                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-gray-400">
                                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                                <div>
                                    <div className="text-gray-400">Market Price</div>
                                    <div className="text-white font-medium">{service.marketPrice}</div>
                                </div>
                                <div>
                                    <div className="text-gray-400">ROI</div>
                                    <div className="text-green-400 font-medium">{service.roi}</div>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <a
                                    href={`/contact?service=${service.id}`}
                                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                                >
                                    Get Started
                                </a>
                                <a
                                    href={`/services/${service.id}`}
                                    className="px-4 py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ComprehensiveServicesShowcase2025;
