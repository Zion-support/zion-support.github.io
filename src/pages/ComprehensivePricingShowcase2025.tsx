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
    Crown,;
    Sparkles;
} from "lucide-react"
import { comprehensivePricingGuide2025, ServicePricing } from "../data/comprehensive-pricing-guide-2025"
const ComprehensivePricingShowcase2025: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState(''),;
    const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
    const [selectedService, setSelectedService] = useState<ServicePricing | null>(null),;

    const categories = [;
        { id: 'all', name: 'All Services', icon: Globe, count: comprehensivePricingGuide2025.length };
        { id: 'Fintech', name: 'Financial Tech', icon: DollarSign, count: comprehensivePricingGuide2025.filter(s => s.category === 'Fintech').length };
        { id: 'Healthtech', name: 'Healthcare Tech', icon: Heart, count: comprehensivePricingGuide2025.filter(s => s.category === 'Healthtech').length };
        { id: 'Edutech', name: 'Education Tech', icon: GraduationCap, count: comprehensivePricingGuide2025.filter(s => s.category === 'Edutech').length };
        { id: 'Martech', name: 'Marketing Tech', icon: Target, count: comprehensivePricingGuide2025.filter(s => s.category === 'Martech').length };
        { id: 'Micro SaaS', name: 'Micro SaaS', icon: Settings, count: comprehensivePricingGuide2025.filter(s => s.category === 'Micro SaaS').length };
        { id: 'AI Services', name: 'AI Services', icon: Zap, count: comprehensivePricingGuide2025.filter(s => s.category === 'AI Services').length };
        { id: 'IT Services', name: 'IT Services', icon: Shield, count: comprehensivePricingGuide2025.filter(s => s.category === 'IT Services').length };
    ];
    const filteredServices = useMemo(() => {;
        let filtered = comprehensivePricingGuide2025;

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

        return filtered,;
    }, [searchTerm, selectedCategory]),;

    const getCategoryColor = (category: string) => {;
        const colors: { [key: string]: string } = {;
            'Fintech': 'from-green-500 to-emerald-600Healthtech': 'from-red-500 to-pink-600Edutech': 'from-purple-500 to-violet-600Martech': 'from-pink-500 to-rose-600Micro SaaS': 'from-blue-500 to-indigo-600AI Services': 'from-cyan-500 to-blue-600IT Services': 'from-slate-500 to-gray-600'
        };
        return colors[category] || 'from-gray-500 to-gray-600',
    },;

    const getCategoryIcon = (category: string) => {;
        const icons: { [key: string]: React.ReactNode } = {;
            'Fintech': <[^>]*/>
            'Healthtech': <Heart className="w-5 h-5" />,;
            'Edutech': <GraduationCap className="w-5 h-5" />,;
            'Martech': <Target className="w-5 h-5" />,;
            'Micro SaaS': <Settings className="w-5 h-5" />,;
            'AI Services': <Zap className="w-5 h-5" />,;
            'IT Services': <[^>]*/>
        },;
        return icons[category] || <Globe className="w-5 h-5" />,
    },;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">;
            <Helmet>;
                <title>Comprehensive Pricing Guide 2025 - Zion Tech Group</[^>]*>
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
                            Comprehensive Pricing Guide 2025;
                        </[^>]*>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">;
                            Transparent pricing for our complete suite of innovative technology solutions. Choose the perfect plan for your business needs.;
                        </[^>]*>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>Transparent Pricing</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>Multiple Tiers</[^>]*>
                            </[^>]*>
                            <div className="flex items-center space-x-2 text-white">;
                                <[^>]*/>
                                <span>Flexible Plans</[^>]*>
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
                        <div className="space-y-12">;
                            {filteredServices.map((service, index) => (;
                                <motion.div
                                    key={service.id};
                                    initial={{ opacity: 0, y: 20 }};
                                    animate={{ opacity: 1, y: 0 }};
                                    transition={{ duration: 0.5, delay: index * 0.1 }};
                                    className="[^"]*"
                                >;
                                    {/* Service Header */};
                                    <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-8 text-white`}>;
                                        <div className="flex items-center justify-between mb-4">;
                                            <div className="flex items-center space-x-3">;
                                                {getCategoryIcon(service.category)};
                                                <span className="text-sm font-medium opacity-90 bg-white/20 px-3 py-1 rounded-full">;
                                                    {service.category};
                                                </[^>]*>
                                            </[^>]*>
                                            <div className="text-right">;
                                                <p className="text-sm opacity-90">Trial: {service.trialDays} days</[^>]*>
                                                <p className="text-sm opacity-90">Setup: {service.setupTime}</[^>]*>
                                            </[^>]*>
                                        </[^>]*>
                                        <h3 className="text-3xl font-bold mb-3">{service.name}</[^>]*>
                                        <p className="text-blue-100 text-lg mb-4">{service.description}</[^>]*>
                                        <div className="flex flex-wrap gap-4">;
                                            <div className="flex items-center space-x-2">;
                                                <[^>]*/>
                                                <span className="text-sm">ROI: {service.roi}</[^>]*>
                                            </[^>]*>
                                            <div className="flex items-center space-x-2">;
                                                <[^>]*/>
                                                <span className="text-sm">Market: {service.marketPosition}</[^>]*>
                                            </[^>]*>
                                        </[^>]*>
                                    </[^>]*>

                                    {/* Pricing Tiers */};
                                    <div className="p-8">;
                                        <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pricing Plans</[^>]*>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                                            {service.pricing.map((tier, tierIndex) => (;
                                                <div;
                                                    key={tierIndex};
                                                    className={`relative rounded-xl border-2 p-6 ${;
                                                        tier.popular
                                                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                                                            : 'border-gray-200 bg-white'
                                                    }`};
                                                >;
                                                    {tier.popular && (;&& (; (
                                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">;
                                                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">;
                                                                <[^>]*/>
                                                                <span>Most Popular</[^>]*>
                                                            </[^>]*>
                                                        </[^>]*>
                                                    )};
                                                    ;
                                                    <div className="text-center mb-6">;
                                                        <h5 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</[^>]*>
                                                        <div className="mb-2">;
                                                            <span className="text-3xl font-bold text-gray-800">{tier.price}</[^>]*>
                                                            <span className="text-gray-600 ml-2">;
                                                                /{tier.billing === 'monthly' ? 'month' : tier.billing === 'yearly' ? 'year' : 'setup'}
                                                            </[^>]*>
                                                        </[^>]*>
                                                        {tier.savings && (;&& (; (
                                                            <p className="text-green-600 text-sm font-medium">{tier.savings}</[^>]*>
                                                        )};
                                                    </[^>]*>

                                                    <ul className="space-y-3 mb-6">;
                                                        {tier.features.map((feature, featureIndex) => (;
                                                            <li key={featureIndex} className="flex items-start space-x-3">;
                                                                <[^>]*/>
                                                                <span className="text-gray-700">{feature}</[^>]*>
                                                            </[^>]*>
                                                        ))};
                                                    </[^>]*>

                                                    <button;
                                                        onClick={() => setSelectedService(service)};
                                                        className="[^"]*"
                                                    >;
                                                        <span>Get Started</[^>]*>
                                                        <[^>]*/>
                                                    </[^>]*>
                                                </[^>]*>
                                            ))};
                                        </[^>]*>

                                        {/* Key Features and Benefits */};
                                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">;
                                            <div>;
                                                <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">;
                                                    <[^>]*/>
                                                    <span>Key Features</[^>]*>
                                                </[^>]*>
                                                <ul className="space-y-2">;
                                                    {service.features.slice(0, 6).map((feature, idx) => (;
                                                        <li key={idx} className="flex items-center space-x-2 text-gray-600">;
                                                            <[^>]*/>
                                                            <span>{feature}</[^>]*>
                                                        </[^>]*>
                                                    ))};
                                                </[^>]*>
                                            </[^>]*>
                                            <div>;
                                                <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">;
                                                    <[^>]*/>
                                                    <span>Key Benefits</[^>]*>
                                                </[^>]*>
                                                <ul className="space-y-2">;
                                                    {service.benefits.map((benefit, idx) => (;
                                                        <li key={idx} className="flex items-center space-x-2 text-gray-600">;
                                                            <[^>]*/>
                                                            <span>{benefit}</[^>]*>
                                                        </[^>]*>
                                                    ))};
                                                </[^>]*>
                                            </[^>]*>
                                        </[^>]*>

                                        {/* Competitors */};
                                        <div className="mt-8 p-4 bg-gray-50 rounded-lg">;
                                            <h5 className="text-sm font-medium text-gray-600 mb-2">Competitive Alternatives</[^>]*>
                                            <div className="flex flex-wrap gap-2">;
                                                {service.competitors.map((competitor, idx) => (;
                                                    <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">;
                                                        {competitor};
                                                    </[^>]*>
                                                ))};
                                            </[^>]*>
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
                        Ready to Get Started?;
                    </[^>]*>
                    <p className="text-xl text-blue-100 mb-8">;
                        Contact our team to discuss pricing, customization options, and implementation details;
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

export default ComprehensivePricingShowcase2025;