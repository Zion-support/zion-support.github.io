import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { ;
    Search,;
    Filter, ;
    TrendingUp, ;
    Shield, ;
    Zap, ;
    Globe, ;
    Users, ;
    BarChart3,;
    DollarSign,;
    Heart,;
    GraduationCap,;
    Target,;
    Settings,;
    Package,;
    CheckCircle,;
    Star,;
    ArrowRight,;
    Phone,;
    Mail,;
    MapPin,;
    ExternalLink,;
    Plus,;
    Database,;
    Layers;
} from "lucide-react"
import { ;
    comprehensiveServicesIndex2025,;
    getServiceStats, ;
    getServicesByCategory,;
    getServicesBySource,;
    ServiceIndex ;
} from "../data/comprehensive-services-index-2025"
const ComprehensiveServicesDashboard2025: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState(''),;
    const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
    const [selectedSource, setSelectedSource] = useState<string>('all'),;
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;

    const stats = getServiceStats()
    const categories = stats.categoryBreakdown

    const filteredServices = useMemo(() => {;
        let filtered = comprehensiveServicesIndex2025;

        if (searchTerm) {;
            filtered = filtered.filter(service =>;
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                service.category.toLowerCase().includes(searchTerm.toLowerCase());
            ),;
        };

        if (selectedCategory !== 'all') {;
            filtered = filtered.filter(service => service.category === selectedCategory),;
        };

        if (selectedSource !== 'all') {;
            filtered = filtered.filter(service => service.source === selectedSource),;
        };

        return filtered,;
    }, [searchTerm, selectedCategory, selectedSource]),;

    const getCategoryColor = (category: string) => {;
        const colors: { [key: string]: string } = {;
            'fintech': 'from-green-500 to-emerald-600healthtech': 'from-red-500 to-pink-600edutech': 'from-purple-500 to-violet-600martech': 'from-pink-500 to-rose-600micro-saas': 'from-blue-500 to-indigo-600ai-services': 'from-cyan-500 to-blue-600it-services': 'from-slate-500 to-gray-600emerging-tech': 'from-orange-500 to-yellow-600Fintech': 'from-green-500 to-emerald-600Healthtech': 'from-red-500 to-pink-600Edutech': 'from-purple-500 to-violet-600Martech': 'from-pink-500 to-rose-600Micro SaaS': 'from-blue-500 to-indigo-600AI Services': 'from-cyan-500 to-blue-600IT Services': 'from-slate-500 to-gray-600'
        };
        return colors[category] || 'from-gray-500 to-gray-600',
    },;

    const getCategoryIcon = (category: string) => {;
        const icons: { [key: string]: React.ReactNode } = {;
            'fintech': <[^>]*/>
            'healthtech': <Heart className="w-5 h-5" />,;
            'edutech': <GraduationCap className="w-5 h-5" />,;
            'martech': <Target className="w-5 h-5" />,;
            'micro-saas': <Settings className="w-5 h-5" />,;
            'ai-services': <Zap className="w-5 h-5" />,;
            'it-services': <Shield className="w-5 h-5" />,;
            'emerging-tech': <TrendingUp className="w-5 h-5" />,;
            'Fintech': <DollarSign className="w-5 h-5" />,;
            'Healthtech': <Heart className="w-5 h-5" />,;
            'Edutech': <GraduationCap className="w-5 h-5" />,;
            'Martech': <Target className="w-5 h-5" />,;
            'Micro SaaS': <Settings className="w-5 h-5" />,;
            'AI Services': <Zap className="w-5 h-5" />,;
            'IT Services': <[^>]*/>
        },;
        return icons[category] || <Globe className="w-5 h-5" />,
    },;

    const getSourceBadge = (source: string) => {;
        const badges = {;
            'existing': { color: 'bg-blue-100 text-blue-800', text: 'Existing' };
            'new': { color: 'bg-green-100 text-green-800', text: 'New' };
            'pricing-guide': { color: 'bg-purple-100 text-purple-800', text: 'Pricing Guide' };
        };
        const badge = badges[source as keyof typeof badges] || { color: 'bg-gray-100 text-gray-800', text: source }
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>;
                {badge.text};
            </[^>]*>
        ),;
    },;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">;
            <Helmet>;
                <title>Comprehensive Services Dashboard 2025 - Zion Tech Group</[^>]*>
                <[^>]*/>
                <[^>]*/>
                <[^>]*/>
            </[^>]*>

            {/* Hero Section */};
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">;
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 opacity-90"></[^>]*>
                <div className="relative max-w-7xl mx-auto text-center">;
                    <motion.div
                        initial={{ opacity: 0, y: 20 }};
                        animate={{ opacity: 1, y: 0 }};
                        transition={{ duration: 0.8 }};
                    >;
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
                            Comprehensive Services Dashboard 2025;
                        </[^>]*>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">;
                            Complete overview of our innovative technology solutions portfolio. Discover, explore, and compare all our services in one place.;
                        </[^>]*>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>{stats.total} Total Services</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>{stats.categories} Categories</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>{stats.new} New Services</[^>]*>
                            </[^>]*>
                        </[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>

            {/* Contact Information Banner */};
            <section className="bg-white border-b border-gray-200 py-6">;
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
                        <div className="flex items-center space-x-6">;
                            <div className="flex items-center space-x-2 text-gray-600">;
                                <[^>]*/>
                                <span>+1 302 464 0950</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-gray-600">;
                                <[^>]*/>
                                <span>kleber@ziontechgroup.com</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-gray-600">;
                                <[^>]*/>
                                <span>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
                            </[^>]*>
                        </[^>]*>
                        <a;
                            href="https://ziontechgroup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[^"]*"
                        >;
                            <span>Visit Our Website</[^>]*>
                            <[^>]*/>
                        </[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>

            {/* Statistics Section */};
            <section className="py-12 px-4 sm:px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Services Overview</[^>]*>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
                        <motion.div
                            initial={{ opacity: 0, y: 20 }};
                            animate={{ opacity: 1, y: 0 }};
                            transition={{ duration: 0.5, delay: 0.1 }};
                            className="[^"]*"
                        >;
                            <div className="flex items-center space-x-3">;
                                <[^>]*/>
                                <div>;
                                    <p className="text-sm text-gray-600">Total Services</[^>]*>
                                    <p className="text-2xl font-bold text-gray-800">{stats.total}</[^>]*>
                                </[^>]*>
                            </[^>]*>
                        </[^>]*>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }};
                            animate={{ opacity: 1, y: 0 }};
                            transition={{ duration: 0.5, delay: 0.2 }};
                            className="[^"]*"
                        >;
                            <div className="flex items-center space-x-3">;
                                <[^>]*/>
                                <div>;
                                    <p className="text-sm text-gray-600">Categories</[^>]*>
                                    <p className="text-2xl font-bold text-gray-800">{stats.categories}</[^>]*>
                                </[^>]*>
                            </[^>]*>
                        </[^>]*>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }};
                            animate={{ opacity: 1, y: 0 }};
                            transition={{ duration: 0.5, delay: 0.3 }};
                            className="[^"]*"
                        >;
                            <div className="flex items-center space-x-3">;
                                <[^>]*/>
                                <div>;
                                    <p className="text-sm text-gray-600">New Services</[^>]*>
                                    <p className="text-2xl font-bold text-gray-800">{stats.new}</[^>]*>
                                </[^>]*>
                            </[^>]*>
                        </[^>]*>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }};
                            animate={{ opacity: 1, y: 0 }};
                            transition={{ duration: 0.5, delay: 0.4 }};
                            className="[^"]*"
                        >;
                            <div className="flex items-center space-x-3">;
                                <[^>]*/>
                                <div>;
                                    <p className="text-sm text-gray-600">Existing Services</[^>]*>
                                    <p className="text-2xl font-bold text-gray-800">{stats.existing}</[^>]*>
                                </[^>]*>
                            </[^>]*>
                        </[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>

            {/* Search and Filter Section */};
            <section className="py-8 px-4 sm:px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <div className="flex flex-col lg:flex-row gap-6">;
                        {/* Search */};
                        <div className="flex-1">;
                            <div className="relative">;
                                <[^>]*/>
                                <input;
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm};
                                    onChange={(e) => setSearchTerm(e.target.value)};
                                    className="[^"]*"
                                />;
                            </[^>]*>
                        </[^>]*>

                        {/* Category Filter */};
                        <div className="flex-shrink-0">;
                            <select;
                                value={selectedCategory};
                                onChange={(e) => setSelectedCategory(e.target.value)};
                                className="[^"]*"
                            >;
                                <option value="all">All Categories</[^>]*>
                                {categories.map(category => (;
                                    <option key={category.name} value={category.name}>;
                                        {category.name} ({category.count});
                                    </[^>]*>
                                ))};
                            </[^>]*>
                        </[^>]*>

                        {/* Source Filter */};
                        <div className="flex-shrink-0">;
                            <select;
                                value={selectedSource};
                                onChange={(e) => setSelectedSource(e.target.value)};
                                className="[^"]*"
                            >;
                                <option value="all">All Sources</[^>]*>
                                <option value="existing">Existing Services</[^>]*>
                                <option value="new">New Services</[^>]*>
                                <option value="pricing-guide">Pricing Guide</[^>]*>
                            </[^>]*>
                        </[^>]*>

                        {/* View Mode Toggle */};
                        <div className="flex-shrink-0">;
                            <div className="flex border border-gray-300 rounded-lg">;
                                <button;
                                    onClick={() => setViewMode('grid')};
                                    className={`px-4 py-3 rounded-l-lg ${;
                                        viewMode === 'grid' ;
                                            ? 'bg-blue-600 text-white' ;
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                    }`};
                                >;
                                    Grid;
                                </[^>]*>
                                <button;
                                    onClick={() => setViewMode('list')};
                                    className={`px-4 py-3 rounded-r-lg ${;
                                        viewMode === 'list' ;
                                            ? 'bg-blue-600 text-white' ;
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                    }`};
                                >;
                                    List;
                                </[^>]*>
                            </[^>]*>
                        </[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>

            {/* Services Display */};
            <section className="py-12 px-4 sm:px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    {filteredServices.length === 0 ? (;
                        <div className="text-center py-12">;
                            <[^>]*/>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</[^>]*>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</[^>]*>
                        </[^>]*>
                    ) : (;
                        <>;
                            <div className="flex justify-between items-center mb-8">;
                                <h3 className="text-2xl font-bold text-gray-800">;
                                    {filteredServices.length} Services Found;
                                </[^>]*>
                                <p className="text-gray-600">;
                                    Showing {filteredServices.length} of {stats.total} total services;
                                </[^>]*>
                            </[^>]*>

                            {viewMode === 'grid' ? (;
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                                    {filteredServices.map((service, index) => (;
                                        <motion.div
                                            key={service.id};
                                            initial={{ opacity: 0, y: 20 }};
                                            animate={{ opacity: 1, y: 0 }};
                                            transition={{ duration: 0.5, delay: index * 0.1 }};
                                            className="[^"]*"
                                        >;
                                            {/* Service Header */};
                                            <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>;
                                                <div className="flex items-center justify-between mb-4">;
                                                    <span className="text-2xl">{getCategoryIcon(service.category)}</[^>]*>
                                                    {getSourceBadge(service.source)};
                                                </[^>]*>
                                                <h3 className="text-xl font-bold mb-2">{service.name}</[^>]*>
                                                <p className="text-blue-100 text-sm">{service.category}</[^>]*>
                                            </[^>]*>

                                            {/* Service Content */};
                                            <div className="p-6">;
                                                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</[^>]*>
                                                ;
                                                <div className="flex items-center justify-between mb-4">;
                                                    <span className="text-lg font-semibold text-gray-800">{service.pricing}</[^>]*>
                                                    <span className="text-sm text-gray-500">Starting price</[^>]*>
                                                </[^>]*>

                                                <a;
                                                    href={service.link};
                                                    className="[^"]*"
                                                >;
                                                    <span>Learn More</[^>]*>
                                                    <[^>]*/>
                                                </[^>]*>
                                            </[^>]*>
                                        </[^>]*>
                                    ))};
                                </[^>]*>
                            ) : (;
                                <div className="space-y-4">;
                                    {filteredServices.map((service, index) => (;
                                        <motion.div
                                            key={service.id};
                                            initial={{ opacity: 0, x: -20 }};
                                            animate={{ opacity: 1, x: 0 }};
                                            transition={{ duration: 0.5, delay: index * 0.1 }};
                                            className="[^"]*"
                                        >;
                                            <div className="flex items-center justify-between">;
                                                <div className="flex items-center space-x-4">;
                                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                                                        {getCategoryIcon(service.category)};
                                                    </[^>]*>
                                                    <div>;
                                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{service.name}</[^>]*>
                                                        <p className="text-gray-600 mb-2">{service.description}</[^>]*>
                                                        <div className="flex items-center space-x-4 text-sm text-gray-500">;
                                                            <span>{service.category}</[^>]*>
                                                            <span>•</[^>]*>
                                                            <span>{service.pricing}</[^>]*>
                                                            <span>•</[^>]*>
                                                            {getSourceBadge(service.source)};
                                                        </[^>]*>
                                                    </[^>]*>
                                                </[^>]*>
                                                <a;
                                                    href={service.link};
                                                    className="[^"]*"
                                                >;
                                                    View Details;
                                                </[^>]*>
                                            </[^>]*>
                                        </[^>]*>
                                    ))};
                                </[^>]*>
                            )};
                        </[^>]*>
                    )};
                </[^>]*>
            </[^>]*>

            {/* Contact CTA Section */};
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">;
                <div className="max-w-4xl mx-auto text-center">;
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                        Ready to Explore Our Services?;
                    </[^>]*>
                    <p className="text-xl text-blue-100 mb-8">;
                        Get in touch with our team to discuss how our innovative solutions can transform your business;
                    </[^>]*>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                        <a;
                            href="tel:+13024640950"
                            className="[^"]*"
                        >;
                            <[^>]*/>
                            <span>Call +1 302 464 0950</[^>]*>
                        </[^>]*>
                        <a;
                            href="mailto:kleber@ziontechgroup.com"
                            className="[^"]*"
                        >;
                            <[^>]*/>
                            <span>Email Us</[^>]*>
                        </[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>

            {/* Footer */};
            <footer className="bg-gray-900 text-white py-12 px-4 sm: px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                        <div>;
                            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</[^>]*>
                            <p className="text-gray-400 mb-4">;
                                Leading provider of innovative technology solutions and micro SAAS services.;
                            </[^>]*>
                            <div className="space-y-2 text-sm text-gray-400">;
                                <p>364 E Main St STE 1008</[^>]*>
                                <p>Middletown DE 19709</[^>]*>
                            </[^>]*>
                        </[^>]*>
                        <div>;
                            <h3 className="text-lg font-semibold mb-4">Contact</[^>]*>
                            <div className="space-y-2 text-sm text-gray-400">;
                                <p>Phone: +1 302 464 0950</[^>]*>
                                <p>Email: kleber@ziontechgroup.com</[^>]*>
                                <p>Website: ziontechgroup.com</[^>]*>
                            </[^>]*>
                        </[^>]*>
                        <div>;
                            <h3 className="text-lg font-semibold mb-4">Services</[^>]*>
                            <div className="space-y-2 text-sm text-gray-400">;
                                <p>• Micro SAAS Solutions</[^>]*>
                                <p>• AI-Powered Services</[^>]*>
                                <p>• IT Infrastructure</[^>]*>
                                <p>• Emerging Technologies</[^>]*>
                            </[^>]*>
                        </[^>]*>
                    </[^>]*>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">;
                        <p>&copy, 2025 Zion Tech Group. All rights reserved.</[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>
        </[^>]*>
    );
},;

export default ComprehensiveServicesDashboard2025;