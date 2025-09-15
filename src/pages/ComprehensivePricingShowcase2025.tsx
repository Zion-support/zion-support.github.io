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
    ExternalLink,
    Crown,
    Sparkles
} from 'lucide-react';
import { comprehensivePricingGuide2025, ServicePricing } from '../data/comprehensive-pricing-guide-2025';

const ComprehensivePricingShowcase2025: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedService, setSelectedService] = useState<ServicePricing | null>(null);

    const categories = [
        { id: 'all', name: 'All Services', icon: Globe, count: comprehensivePricingGuide2025.length },
        { id: 'Fintech', name: 'Financial Tech', icon: DollarSign, count: comprehensivePricingGuide2025.filter(s => s.category === 'Fintech').length },
        { id: 'Healthtech', name: 'Healthcare Tech', icon: Heart, count: comprehensivePricingGuide2025.filter(s => s.category === 'Healthtech').length },
        { id: 'Edutech', name: 'Education Tech', icon: GraduationCap, count: comprehensivePricingGuide2025.filter(s => s.category === 'Edutech').length },
        { id: 'Martech', name: 'Marketing Tech', icon: Target, count: comprehensivePricingGuide2025.filter(s => s.category === 'Martech').length },
        { id: 'Micro SaaS', name: 'Micro SaaS', icon: Settings, count: comprehensivePricingGuide2025.filter(s => s.category === 'Micro SaaS').length },
        { id: 'AI Services', name: 'AI Services', icon: Zap, count: comprehensivePricingGuide2025.filter(s => s.category === 'AI Services').length },
        { id: 'IT Services', name: 'IT Services', icon: Shield, count: comprehensivePricingGuide2025.filter(s => s.category === 'IT Services').length }
    ];

    const filteredServices = useMemo(() => {
        let filtered = comprehensivePricingGuide2025;

        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => service.category === selectedCategory);
        }

        return filtered;
    }, [searchTerm, selectedCategory]);

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Fintech': 'from-green-500 to-emerald-600',
            'Healthtech': 'from-red-500 to-pink-600',
            'Edutech': 'from-purple-500 to-violet-600',
            'Martech': 'from-pink-500 to-rose-600',
            'Micro SaaS': 'from-blue-500 to-indigo-600',
            'AI Services': 'from-cyan-500 to-blue-600',
            'IT Services': 'from-slate-500 to-gray-600'
        };
        return colors[category] || 'from-gray-500 to-gray-600';
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'Fintech': <DollarSign className="w-5 h-5" />,
            'Healthtech': <Heart className="w-5 h-5" />,
            'Edutech': <GraduationCap className="w-5 h-5" />,
            'Martech': <Target className="w-5 h-5" />,
            'Micro SaaS': <Settings className="w-5 h-5" />,
            'AI Services': <Zap className="w-5 h-5" />,
            'IT Services': <Shield className="w-5 h-5" />
        };
        return icons[category] || <Globe className="w-5 h-5" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <Helmet>
                <title>Comprehensive Pricing Guide 2025 - Zion Tech Group</title>
                <meta name="description" content="Explore our comprehensive pricing guide for innovative micro SAAS services, AI solutions, and technology platforms. Transparent pricing with detailed feature comparisons." />
                <meta name="keywords" content="pricing, micro SAAS, IT services, AI services, fintech, healthtech, edutech, martech, business solutions pricing" />
                <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-showcase-2025" />
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
                            Comprehensive Pricing Guide 2025
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                            Transparent pricing for our complete suite of innovative technology solutions. Choose the perfect plan for your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center space-x-2 text-white">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>Transparent Pricing</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span>Multiple Tiers</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white">
                                <Zap className="w-5 h-5 text-blue-400" />
                                <span>Flexible Plans</span>
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
                        <div className="space-y-12">
                            {filteredServices.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                                >
                                    {/* Service Header */}
                                    <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-8 text-white`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                {getCategoryIcon(service.category)}
                                                <span className="text-sm font-medium opacity-90 bg-white/20 px-3 py-1 rounded-full">
                                                    {service.category}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm opacity-90">Trial: {service.trialDays} days</p>
                                                <p className="text-sm opacity-90">Setup: {service.setupTime}</p>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-3">{service.name}</h3>
                                        <p className="text-blue-100 text-lg mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center space-x-2">
                                                <TrendingUp className="w-4 h-4" />
                                                <span className="text-sm">ROI: {service.roi}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="w-4 h-4" />
                                                <span className="text-sm">Market: {service.marketPosition}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing Tiers */}
                                    <div className="p-8">
                                        <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pricing Plans</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {service.pricing.map((tier, tierIndex) => (
                                                <div
                                                    key={tierIndex}
                                                    className={`relative rounded-xl border-2 p-6 ${
                                                        tier.popular
                                                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                                                            : 'border-gray-200 bg-white'
                                                    }`}
                                                >
                                                    {tier.popular && (
                                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                                                                <Crown className="w-4 h-4" />
                                                                <span>Most Popular</span>
                                                            </span>
                                                        </div>
                                                    )}
                                                    
                                                    <div className="text-center mb-6">
                                                        <h5 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</h5>
                                                        <div className="mb-2">
                                                            <span className="text-3xl font-bold text-gray-800">{tier.price}</span>
                                                            <span className="text-gray-600 ml-2">
                                                                /{tier.billing === 'monthly' ? 'month' : tier.billing === 'yearly' ? 'year' : 'setup'}
                                                            </span>
                                                        </div>
                                                        {tier.savings && (
                                                            <p className="text-green-600 text-sm font-medium">{tier.savings}</p>
                                                        )}
                                                    </div>

                                                    <ul className="space-y-3 mb-6">
                                                        {tier.features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="flex items-start space-x-3">
                                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                                <span className="text-gray-700">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <button
                                                        onClick={() => setSelectedService(service)}
                                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
                                                    >
                                                        <span>Get Started</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Key Features and Benefits */}
                                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                                    <span>Key Features</span>
                                                </h5>
                                                <ul className="space-y-2">
                                                    {service.features.slice(0, 6).map((feature, idx) => (
                                                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                                                    <TrendingUp className="w-5 h-5 text-green-600" />
                                                    <span>Key Benefits</span>
                                                </h5>
                                                <ul className="space-y-2">
                                                    {service.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Competitors */}
                                        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                                            <h5 className="text-sm font-medium text-gray-600 mb-2">Competitive Alternatives</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {service.competitors.map((competitor, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                                                        {competitor}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
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
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Contact our team to discuss pricing, customization options, and implementation details
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

export default ComprehensivePricingShowcase2025;