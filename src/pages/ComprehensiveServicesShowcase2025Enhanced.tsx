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
    ExternalLink;
} from "lucide-react"
import { comprehensiveServices2025Enhanced, EnhancedService } from "../data/comprehensive-services-2025-enhanced"
const ComprehensiveServicesShowcase2025Enhanced: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState(''),;
    const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
    const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('name'),;

    const categories = [;
        { id: 'all', name: 'All Services', icon: Globe, count: comprehensiveServices2025Enhanced.length };
        { id: 'fintech', name: 'Financial Tech', icon: DollarSign, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'fintech').length };
        { id: 'healthtech', name: 'Healthcare Tech', icon: Heart, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'healthtech').length };
        { id: 'edutech', name: 'Education Tech', icon: GraduationCap, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'edutech').length };
        { id: 'martech', name: 'Marketing Tech', icon: Target, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'martech').length };
        { id: 'micro-saas', name: 'Micro SaaS', icon: Settings, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'micro-saas').length };
        { id: 'ai-services', name: 'AI Services', icon: Zap, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'ai-services').length };
        { id: 'it-services', name: 'IT Services', icon: Shield, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'it-services').length };
        { id: 'emerging-tech', name: 'Emerging Tech', icon: TrendingUp, count: comprehensiveServices2025Enhanced.filter(s => s.category === 'emerging-tech').length };
    ];
    const filteredServices = useMemo(() => {;
        let filtered = comprehensiveServices2025Enhanced;

        if (searchTerm) {;
            filtered = filtered.filter(service =>;
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
            ),;
        };

        if (selectedCategory !== 'all') {;
            filtered = filtered.filter(service => service.category === selectedCategory),;
        };

        //[^;]*
        filtered.sort((a, b) => {;
            switch (sortBy) {;
                case 'price':;
                    const priceA = parseFloat(a.pricing.monthly.replace(/[^0-9.]/g, ''));
                    const priceB = parseFloat(b.pricing.monthly.replace(/[^0-9.]/g, ''));
                    return priceA - priceB,;
                case 'popularity':;
                    return b.trialDays - a.trialDays, //[^;]*
                default: return a.name.localeCompare(b.name)
            };
        });
        return filtered,;
    }, [searchTerm, selectedCategory, sortBy]),;

    const getCategoryColor = (category: string) => {;
        const colors: { [key: string]: string } = {;
            'fintech': 'from-green-500 to-emerald-600healthtech': 'from-red-500 to-pink-600edutech': 'from-purple-500 to-violet-600martech': 'from-pink-500 to-rose-600micro-saas': 'from-blue-500 to-indigo-600ai-services': 'from-cyan-500 to-blue-600it-services': 'from-slate-500 to-gray-600emerging-tech': 'from-orange-500 to-yellow-600'
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
            'emerging-tech': <[^>]*/>
        },;
        return icons[category] || <Globe className="w-5 h-5" />,
    },;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">;
            <Helmet>;
                <title>Comprehensive Services Showcase 2025 - Zion Tech Group</[^>]*>
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
                            Comprehensive Services Showcase 2025;
                        </[^>]*>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">;
                            Discover our cutting-edge suite of micro SAAS services, AI-powered solutions, and innovative technology platforms designed to transform your business;
                        </[^>]*>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>20+ New Services</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>Enterprise-Grade Solutions</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>AI-Powered Innovation</[^>]*>
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
                                {categories.map(category => (;
                                    <option key={category.id} value={category.id}>;
                                        {category.name} ({category.count});
                                    </[^>]*>
                                ))};
                            </[^>]*>
                        </[^>]*>

                        {/* Sort */};
                        <div className="flex-shrink-0">;
                            <select;
                                value={sortBy};
                                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')};
                                className="[^"]*"
                            >;
                                <option value="name">Sort by Name</[^>]*>
                                <option value="price">Sort by Price</[^>]*>
                                <option value="popularity">Sort by Popularity</[^>]*>
                            </[^>]*>
                        </[^>]*>
                    </[^>]*>
                </[^>]*>
            </[^>]*>

            {/* Services Grid */};
            <section className="py-12 px-4 sm:px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    {filteredServices.length === 0 ? (;
                        <div className="text-center py-12">;
                            <[^>]*/>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</[^>]*>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</[^>]*>
                        </[^>]*>
                    ) : (;
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
                                            <span className="text-3xl">{service.icon}</[^>]*>
                                            <div className="flex items-center space-x-2">;
                                                {getCategoryIcon(service.category)};
                                                <span className="text-sm font-medium opacity-90">;
                                                    {categories.find(c => c.id === service.category)?.name};
                                                </[^>]*>
                                            </[^>]*>
                                        </[^>]*>
                                        <h3 className="text-xl font-bold mb-2">{service.name}</[^>]*>
                                        <p className="text-blue-100 text-sm">{service.tagline}</[^>]*>
                                    </[^>]*>

                                    {/* Service Content */};
                                    <div className="p-6">;
                                        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</[^>]*>

                                        {/* Pricing */};
                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">;
                                            <h4 className="font-semibold text-gray-800 mb-2">Pricing</[^>]*>
                                            <div className="space-y-1 text-sm">;
                                                <div className="flex justify-between">;
                                                    <span className="text-gray-600">Monthly:</[^>]*>
                                                    <span className="font-medium">{service.pricing.monthly}</[^>]*>
                                                </[^>]*>
                                                <div className="flex justify-between">;
                                                    <span className="text-gray-600">Yearly:</[^>]*>
                                                    <span className="font-medium">{service.pricing.yearly}</[^>]*>
                                                </[^>]*>
                                                <div className="flex justify-between">;
                                                    <span className="text-gray-600">Setup:</[^>]*>
                                                    <span className="font-medium">{service.pricing.setup}</[^>]*>
                                                </[^>]*>
                                            </[^>]*>
                                        </[^>]*>

                                        {/* Key Benefits */};
                                        <div className="mb-4">;
                                            <h4 className="font-semibold text-gray-800 mb-2">Key Benefits</[^>]*>
                                            <ul className="space-y-1">;
                                                {service.benefits.slice(0, 3).map((benefit, idx) => (;
                                                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">;
                                                        <[^>]*/>
                                                        <span>{benefit}</[^>]*>
                                                    </[^>]*>
                                                ))};
                                            </[^>]*>
                                        </[^>]*>

                                        {/* ROI */};
                                        <div className="bg-blue-50 rounded-lg p-3 mb-4">;
                                            <div className="flex items-center space-x-2">;
                                                <[^>]*/>
                                                <span className="text-sm font-medium text-blue-800">ROI: {service.roi}</[^>]*>
                                            </[^>]*>
                                        </[^>]*>

                                        {/* Trial & Setup */};
                                        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">;
                                            <span>🆓 {service.trialDays} day trial</[^>]*>
                                            <span>⚡ Setup: {service.setupTime}</[^>]*>
                                        </[^>]*>

                                        {/* Action Button */};
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
                    )};
                </[^>]*>
            </[^>]*>

            {/* Contact CTA Section */};
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">;
                <div className="max-w-4xl mx-auto text-center">;
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                        Ready to Transform Your Business?;
                    </[^>]*>
                    <p className="text-xl text-blue-100 mb-8">;
                        Get in touch with our team to discuss how our innovative solutions can drive your business forward;
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

export default ComprehensiveServicesShowcase2025Enhanced;