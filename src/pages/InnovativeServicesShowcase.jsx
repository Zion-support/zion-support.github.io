import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube, Award } from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeServicesShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');

    // Mock data for demonstration
    const allServices = [
        {
            id: 1,
            title: "AI-Powered Business Intelligence",
            description: "Advanced analytics and insights powered by artificial intelligence",
            category: "AI & Analytics",
            subcategory: "Business Intelligence",
            price: 15000,
            currency: "$",
            pricingModel: "month",
            estimatedDelivery: "2-4 weeks",
            supportLevel: "24/7",
            features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Integration"],
            rating: 4.8,
            reviewCount: 127,
            marketPrice: "$12K - $25K",
            roi: "300% in 6 months"
        },
        {
            id: 2,
            title: "Cloud Infrastructure Automation",
            description: "Automated cloud infrastructure management and optimization",
            category: "IT Infrastructure",
            subcategory: "Cloud Management",
            price: 22000,
            currency: "$",
            pricingModel: "month",
            estimatedDelivery: "3-5 weeks",
            supportLevel: "Business Hours",
            features: ["Auto-scaling", "Cost Optimization", "Security Hardening", "Backup & Recovery"],
            rating: 4.6,
            reviewCount: 89,
            marketPrice: "$18K - $35K",
            roi: "250% in 8 months"
        },
        {
            id: 3,
            title: "IoT Edge Computing Platform",
            description: "Real-time IoT data processing at the edge",
            category: "IoT & Edge Computing",
            subcategory: "Edge Processing",
            price: 28000,
            currency: "$",
            pricingModel: "month",
            estimatedDelivery: "4-6 weeks",
            supportLevel: "24/7",
            features: ["Edge Analytics", "Real-time Processing", "Device Management", "Security"],
            rating: 4.9,
            reviewCount: 156,
            marketPrice: "$25K - $45K",
            roi: "400% in 12 months"
        }
    ];

    const INNOVATIVE_SERVICE_CATEGORIES_2025 = [
        'AI & Analytics',
        'IT Infrastructure',
        'IoT & Edge Computing',
        'Cybersecurity',
        'Emerging Technology'
    ];

    const INNOVATIVE_SERVICE_SUBCATEGORIES_2025 = {
        'AI & Analytics': ['Business Intelligence', 'Machine Learning', 'Natural Language Processing'],
        'IT Infrastructure': ['Cloud Management', 'DevOps', 'Network Security'],
        'IoT & Edge Computing': ['Edge Processing', 'Device Management', 'Data Analytics'],
        'Cybersecurity': ['Threat Detection', 'Compliance', 'Incident Response'],
        'Emerging Technology': ['Blockchain', 'Quantum Computing', 'AR/VR']
    };

    const getSubcategoriesForCategory = (category) => {
        if (category === 'all') return [];
        return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category] || [];
    };

    const getCategoryIcon = (category) => {
        const categoryIcons = {
            'AI & Analytics': <Brain className="h-5 w-5"/>,
            'IT Infrastructure': <Cpu className="h-5 w-5"/>,
            'IoT & Edge Computing': <Network className="h-5 w-5"/>,
            'Cybersecurity': <Shield className="h-5 w-5"/>,
            'Emerging Technology': <Rocket className="h-5 w-5"/>
        };
        return categoryIcons[category] || <Zap className="h-5 w-5"/>;
    };

    const getPriceRange = (price) => {
        if (price < 10000) return 'starter';
        if (price < 25000) return 'professional';
        return 'enterprise';
    };

    const getPriceRangeColor = (range) => {
        const priceRange = getPriceRange(range);
        switch (priceRange) {
            case 'starter': return 'bg-green-100 text-green-800 border-green-200';
            case 'professional': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getPriceRangeLabel = (price) => {
        const priceRange = getPriceRange(price);
        switch (priceRange) {
            case 'starter': return 'Starter';
            case 'professional': return 'Professional';
            case 'enterprise': return 'Enterprise';
            default: return 'Custom';
        }
    };

    // Filter and sort services
    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
        const matchesPrice = priceRange === 'all' || 
                           (priceRange === 'low' && service.price < 10000) ||
                           (priceRange === 'medium' && service.price >= 10000 && service.price < 25000) ||
                           (priceRange === 'high' && service.price >= 25000);
        
        return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });

    const sortedServices = filteredServices.sort((a, b) => a.price - b.price);

    return (
        <>
            <SEO 
                title="Innovative Services 2025 - Zion Tech Group"
                description="Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions."
                canonical="https://ziontechgroup.com/innovative-services"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                {/* Header Section */}
                <div className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Innovative Services Showcase
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
                            </p>
                            <div className="mt-6 flex justify-center space-x-4">
                                <div className="flex items-center text-gray-600">
                                    <Users className="w-5 h-5 mr-2"/>
                                    <span>{allServices.length}+ Services</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Award className="w-5 h-5 mr-2"/>
                                    <span>Enterprise Grade</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Globe className="w-5 h-5 mr-2"/>
                                    <span>Global Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="py-12 bg-zion-slate-light">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
                                    <Input 
                                        placeholder="Search services..." 
                                        value={searchTerm} 
                                        onChange={(e) => setSearchTerm(e.target.value)} 
                                        className="pl-10"
                                    />
                                </div>
                                
                                <select 
                                    value={selectedCategory} 
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value);
                                        setSelectedSubcategory('all');
                                    }} 
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
                                >
                                    <option value="all">All Categories</option>
                                    {INNOVATIVE_SERVICE_CATEGORIES_2025.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                
                                <select 
                                    value={selectedSubcategory} 
                                    onChange={(e) => setSelectedSubcategory(e.target.value)} 
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
                                >
                                    <option value="all">All Subcategories</option>
                                    {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (
                                        <option key={subcategory} value={subcategory}>{subcategory}</option>
                                    ))}
                                </select>
                                
                                <select 
                                    value={priceRange} 
                                    onChange={(e) => setPriceRange(e.target.value)} 
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
                                >
                                    <option value="all">All Prices</option>
                                    <option value="low">Under $10K</option>
                                    <option value="medium">$10K - $25K</option>
                                    <option value="high">$25K+</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {sortedServices.length === 0 ? (
                        <div className="text-center py-12">
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
                            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedServices.map((service) => (
                                <Card key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                                    <CardHeader className="p-6 border-b border-gray-100">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                {getCategoryIcon(service.category)}
                                                <div>
                                                    <Badge className={getPriceRangeColor(service.price)}>
                                                        {getPriceRangeLabel(service.price)}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {service.currency}{service.price.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-gray-500 capitalize">
                                                    per {service.pricingModel}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                        
                                        <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </CardDescription>

                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1"/>
                                                {service.estimatedDelivery}
                                            </span>
                                            <span className="flex items-center">
                                                <Shield className="w-4 h-4 mr-1"/>
                                                {service.supportLevel}
                                            </span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-6">
                                        {/* Service Features */}
                                        <div className="mb-6">
                                            <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                                            <div className="space-y-2">
                                                {service.features.slice(0, 4).map((feature, index) => (
                                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                                {service.features.length > 4 && (
                                                    <div className="text-sm text-blue-600 font-medium">
                                                        +{service.features.length - 4} more features
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        {service.rating && (
                                            <div className="mb-4 flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star 
                                                            key={i} 
                                                            className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {service.rating} ({service.reviewCount} reviews)
                                                </span>
                                            </div>
                                        )}

                                        {/* Market Price */}
                                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                            <div className="text-sm text-gray-600 mb-1">Market Price Range</div>
                                            <div className="font-semibold text-gray-900">{service.marketPrice}</div>
                                        </div>

                                        {/* ROI */}
                                        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <div className="text-sm text-green-700 mb-1">Expected ROI</div>
                                            <div className="font-semibold text-green-800">{service.roi}</div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                                                <Link to="/contact">
                                                    Get Started
                                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                                                <Link to="/contact">Quote</Link>
                                            </Button>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="text-sm text-gray-600 mb-2">Ready to transform your business?</div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="h-4 w-4 text-blue-600"/>
                                                <span className="text-gray-900 font-medium">+1 302 464 0950</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="h-4 w-4 text-blue-600"/>
                                                <span className="text-gray-900 font-medium">kleber@ziontechgroup.com</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

                {/* Call to Action Section */}
                <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Future-Proof Your Business?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                            Join the technology revolution with Zion Tech Group. Our innovative solutions are designed to 
                            drive growth, efficiency, and competitive advantage in the digital age.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                <Link to="/contact">Schedule a Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                                <Link to="/contact">Get Custom Quote</Link>
                            </Button>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Rocket className="h-8 w-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                                <p className="text-blue-100">Cutting-edge technology solutions that keep you ahead of the competition</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                                <p className="text-blue-100">Bank-grade security and compliance for your most critical business operations</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                                <p className="text-blue-100">24/7 expert support and dedicated success managers for your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InnovativeServicesShowcase;
