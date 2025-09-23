import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
    Search, 
    Filter, 
    TrendingUp, 
    Shield, 
    Zap, 
    Globe, 
    Users, 
    BarChart3,
    DollarSign,
    Heart,
    GraduationCap,
    Target,
    Settings,
    Package,
    CheckCircle,
    Star,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    ExternalLink
} from 'lucide-react';
import { comprehensiveServices2025Enhanced, EnhancedService } from '../data/comprehensive-services-2025-enhanced';

const ComprehensiveServicesShowcase2025Enhanced: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('name');

    const categories = [
        { id: 'all', name: 'All Services', icon: Globe, count: comprehensiveServices2025Enhanced.length },
        { id: 'fintech', name: 'Financial Tech', icon: DollarSign, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'fintech').length },
        { id: 'healthtech', name: 'Healthcare Tech', icon: Heart, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'healthtech').length },
        { id: 'edutech', name: 'Education Tech', icon: GraduationCap, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'edutech').length },
        { id: 'martech', name: 'Marketing Tech', icon: Target, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'martech').length },
        { id: 'micro-saas', name: 'Micro SaaS', icon: Settings, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'micro-saas').length },
        { id: 'ai-services', name: 'AI Services', icon: Zap, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'ai-services').length },
        { id: 'it-services', name: 'IT Services', icon: Shield, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'it-services').length },
        { id: 'emerging-tech', name: 'Emerging Tech', icon: TrendingUp, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'emerging-tech').length }
    ];

    const filteredServices = useMemo(() => {
        let filtered = comprehensiveServices2025Enhanced;

        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => service.category === selectedCategory);
        }

        // Sort services
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price':
                    const priceA = parseFloat(a.pricing.monthly.replace(/[^0-9.]/g, ''));
                    const priceB = parseFloat(b.pricing.monthly.replace(/[^0-9.]/g, ''));
                    return priceA - priceB;
                case 'popularity':
                    return b.trialDays - a.trialDays; // More trial days = more popular
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        return filtered;
    }, [searchTerm, selectedCategory, sortBy]);

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'fintech': 'from-green-500 to-emerald-600',
            'healthtech': 'from-red-500 to-pink-600',
            'edutech': 'from-purple-500 to-violet-600',
            'martech': 'from-pink-500 to-rose-600',
            'micro-saas': 'from-blue-500 to-indigo-600',
            'ai-services': 'from-cyan-500 to-blue-600',
            'it-services': 'from-slate-500 to-gray-600',
            'emerging-tech': 'from-orange-500 to-yellow-600'
        };
        return colors[category] || 'from-gray-500 to-gray-600';
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'fintech': <DollarSign className="w-5 h-5" />,
            'healthtech': <Heart className="w-5 h-5" />,
            'edutech': <GraduationCap className="w-5 h-5" />,
            'martech': <Target className="w-5 h-5" />,
            'micro-saas': <Settings className="w-5 h-5" />,
            'ai-services': <Zap className="w-5 h-5" />,
            'it-services': <Shield className="w-5 h-5" />,
            'emerging-tech': <TrendingUp className="w-5 h-5" />
        };
        return icons[category] || <Globe className="w-5 h-5" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <Helmet>
                <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
                <meta name="description" content="Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and AI-powered platforms. Transform your business with cutting-edge technology solutions." />
                <meta name="keywords" content="micro SAAS, IT services, AI services, fintech, healthtech, edutech, martech, business solutions" />
                <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025-enhanced" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Comprehensive Services Showcase 2025
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                            Discover our cutting-edge suite of micro SAAS services, AI-powered solutions, and innovative technology platforms designed to transform your business
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center space-x-2 text-white">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>20+ New Services</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span>Enterprise-Grade Solutions</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white">
                                <Zap className="w-5 h-5 text-blue-400" />
                                <span>AI-Powered Innovation</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Banner */}
            <section className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span>+1 302 464 0950</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span>kleber@ziontechgroup.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>364 E Main St STE 1008, Middletown DE 19709</span>
                            </div>
                        </div>
                        <a
                            href="https://ziontechgroup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                            <span>Visit Our Website</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex-shrink-0">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name} ({category.count})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="flex-shrink-0">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="price">Sort by Price</option>
                                <option value="popularity">Sort by Popularity</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {filteredServices.length === 0 ? (
                        <div className="text-center py-12">
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredServices.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    {/* Service Header */}
                                    <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-3xl">{service.icon}</span>
                                            <div className="flex items-center space-x-2">
                                                {getCategoryIcon(service.category)}
                                                <span className="text-sm font-medium opacity-90">
                                                    {categories.find(c => c.id === service.category)?.name}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                        <p className="text-blue-100 text-sm">{service.tagline}</p>
                                    </div>

                                    {/* Service Content */}
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                                        {/* Pricing */}
                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Pricing</h4>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Monthly:</span>
                                                    <span className="font-medium">{service.pricing.monthly}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Yearly:</span>
                                                    <span className="font-medium">{service.pricing.yearly}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Setup:</span>
                                                    <span className="font-medium">{service.pricing.setup}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Benefits */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Key Benefits</h4>
                                            <ul className="space-y-1">
                                                {service.benefits.slice(0, 3).map((benefit, idx) => (
                                                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* ROI */}
                                        <div className="bg-blue-50 rounded-lg p-3 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <TrendingUp className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm font-medium text-blue-800">ROI: {service.roi}</span>
                                            </div>
                                        </div>

                                        {/* Trial & Setup */}
                                        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                                            <span>🆓 {service.trialDays} day trial</span>
                                            <span>⚡ Setup: {service.setupTime}</span>
                                        </div>

                                        {/* Action Button */}
                                        <a
                                            href={service.link}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get in touch with our team to discuss how our innovative solutions can drive your business forward
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+13024640950"
                            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call +1 302 464 0950</span>
                        </a>
                        <a
                            href="mailto:kleber@ziontechgroup.com"
                            className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                            <p className="text-gray-400 mb-4">
                                Leading provider of innovative technology solutions and micro SAAS services.
                            </p>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>364 E Main St STE 1008</p>
                                <p>Middletown DE 19709</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Phone: +1 302 464 0950</p>
                                <p>Email: kleber@ziontechgroup.com</p>
                                <p>Website: ziontechgroup.com</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>• Micro SAAS Solutions</p>
                                <p>• AI-Powered Services</p>
                                <p>• IT Infrastructure</p>
                                <p>• Emerging Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ComprehensiveServicesShowcase2025Enhanced;