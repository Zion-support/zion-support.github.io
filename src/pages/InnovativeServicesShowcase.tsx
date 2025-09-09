import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

// Import all service data
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructure';
import { IOT_EDGE_COMPUTING_SERVICES } from '../data/iotEdgeComputingServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

const InnovativeServicesShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');

    // Combine all services
    const allServices = [
        ...ADVANCED_AI_SERVICES,
        ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
        ...IOT_EDGE_COMPUTING_SERVICES,
        ...INNOVATIVE_MICRO_SAAS_SERVICES
    ];

    const getSubcategoriesForCategory = (category) => {
        if (category === 'all') return [];
        return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category] || [];
    };

    const getCategoryIcon = (category) => {
        const categoryIcons = {
            'AI & Analytics': <Brain className="h-5 w-5"/>,
            'Emerging Technology': <Rocket className="h-5 w-5"/>,
            'Blockchain & Web3': <Cube className="h-5 w-5"/>,
            'IoT & Edge Computing': <Network className="h-5 w-5"/>,
            'Cybersecurity': <Shield className="h-5 w-5"/>,
            'Metaverse & VR/AR': <Eye className="h-5 w-5"/>,
            'Green Technology': <Leaf className="h-5 w-5"/>,
            'Digital Twin': <Cpu className="h-5 w-5"/>
        };
        return categoryIcons[category] || <Zap className="h-5 w-5"/>;
    };

    const getPriceRange = (price) => {
        if (price < 10000) return 'starter';
        if (price < 25000) return 'professional';
        return 'enterprise';
    };

    const getPriceRangeColor = (range) => {
        switch (range) {
            case 'starter': return 'bg-green-100 text-green-800 border-green-200';
            case 'professional': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getPriceRangeLabel = (price) => {
        const range = getPriceRange(price);
        switch (range) {
            case 'starter': return 'Starter';
            case 'professional': return 'Professional';
            case 'enterprise': return 'Enterprise';
            default: return 'Custom';
        }
    };

    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
        const matchesPrice = priceRange === 'all' || getPriceRange(service.price) === priceRange;
        
        return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });

    const sortedServices = filteredServices.sort((a, b) => a.price - b.price);

    return (
        <>
            <SEO 
                title="Innovative Services 2025 - Zion Tech Group" 
                description="Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions." 
                keywords="AI services, IT infrastructure, micro SaaS, innovative technology, business solutions" 
                canonical="https://ziontechgroup.com/innovative-services"
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24 pb-20">
                {/* Header Section */}
                <section className="bg-white shadow-sm border-b">
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
                </section>

                {/* Search and Filter Section */}
                <section className="py-12 bg-zion-slate-light">
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
                                    {Array.from(new Set(allServices.map(s => s.category))).map((category) => (
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
                </section>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                                                    <Badge className={`${getPriceRangeColor(getPriceRange(service.price))}`}>
                                                        {getPriceRangeLabel(service.price)}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    ${service.price.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-gray-500 capitalize">
                                                    per {service.pricingModel || 'project'}
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
                                                {service.estimatedDelivery || '2-4 weeks'}
                                            </span>
                                            <span className="flex items-center">
                                                <ShieldCheck className="w-4 h-4 mr-1"/>
                                                {service.supportLevel || 'Premium Support'}
                                            </span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-6">
                                        {/* Service Features */}
                                        <div className="mb-6">
                                            <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                                            <div className="space-y-2">
                                                {(service.features || []).slice(0, 4).map((feature, index) => (
                                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <Button asChild className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                                                <Link to="/contact">
                                                    Get Started
                                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                                                <Link to="/request-quote">Quote</Link>
                                            </Button>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="mt-4 pt-4 border-t border-zion-slate-light">
                                            <div className="text-sm text-zion-slate-light mb-2">Ready to transform your business?</div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="h-4 w-4 text-zion-cyan"/>
                                                <span className="text-zion-blue-dark font-medium">+1 302 464 0950</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="h-4 w-4 text-zion-cyan"/>
                                                <span className="text-zion-blue-dark font-medium">kleber@ziontechgroup.com</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </section>

                {/* Call to Action Section */}
                <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Future-Proof Your Business?
                        </h2>
                        <p className="text-xl text-zion-cyan-light mb-10 max-w-3xl mx-auto">
                            Join the technology revolution with Zion Tech Group. Our innovative solutions are designed to 
                            drive growth, efficiency, and competitive advantage in the digital age.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                                <Link to="/contact">Schedule a Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
                                <Link to="/request-quote">Get Custom Quote</Link>
                            </Button>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Rocket className="h-8 w-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                                <p className="text-zion-cyan-light">Cutting-edge technology solutions that keep you ahead of the competition</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                                <p className="text-zion-cyan-light">Bank-grade security and compliance for your most critical business operations</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                                <p className="text-zion-cyan-light">24/7 expert support and dedicated success managers for your business</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default InnovativeServicesShowcase;
