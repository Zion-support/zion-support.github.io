import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from "@/data/microSaasServices";
import { 
    Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, 
    GraduationCap, Star, TrendingUp, Zap, CheckCircle, ArrowRight, Phone, Mail, 
    MapPin, Globe, Search, Filter, Award, Users, Clock, Target, Rocket, 
    Lightbulb, Cpu, Database, Network, Lock, ChartBar, Palette, Video, 
    MessageSquare, Languages, Bitcoin, Stethoscope, BookOpen, Store, Building2,
    Atom, Wifi, Eye, Zap as ZapIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
    'AI Business Solutions': Brain,
    'IT Infrastructure': Cloud,
    'Data Analytics': BarChart3,
    'AI Development': Code,
    'FinTech': DollarSign,
    'HealthTech': Heart,
    'E-commerce': ShoppingCart,
    'EdTech': GraduationCap,
    'Emerging Tech': Atom
};

const categoryColors = {
    'AI Business Solutions': 'from-purple-500 to-indigo-600',
    'IT Infrastructure': 'from-blue-500 to-cyan-600',
    'Data Analytics': 'from-green-500 to-emerald-600',
    'AI Development': 'from-orange-500 to-red-600',
    'FinTech': 'from-yellow-500 to-orange-600',
    'HealthTech': 'from-pink-500 to-rose-600',
    'E-commerce': 'from-indigo-500 to-purple-600',
    'EdTech': 'from-teal-500 to-green-600',
    'Emerging Tech': 'from-violet-500 to-purple-600'
};

export default function MicroSAAS() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    const sortedServices = [...filteredServices].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'ai-score':
                return b.aiScore - a.aiScore;
            case 'featured':
            default:
                return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
    });

    const stats = [
        { label: "Total Services", value: MICRO_SAAS_SERVICES.length, icon: Rocket },
        { label: "AI-Powered", value: MICRO_SAAS_SERVICES.filter(s => s.aiScore > 90).length, icon: Brain },
        { label: "Categories", value: MICRO_SAAS_CATEGORIES.length, icon: Target },
        { label: "Global Reach", value: "150+", icon: Globe }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
            {/* Hero Section */}
            <div className="py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Micro SAAS Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                        Transform your business with our comprehensive suite of AI-powered micro SAAS services. 
                        From automation to innovation, we provide enterprise-grade solutions at startup prices.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                                <Phone className="h-5 w-5 mr-2"/>
                                Get Started Today
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                                <Mail className="h-5 w-5 mr-2"/>
                                Schedule Demo
                            </Button>
                        </Link>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <IconComponent className="h-8 w-8 text-zion-cyan"/>
                                    </div>
                                    <div className="text-3xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                                    <div className="text-zion-slate-light">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"/>
                                <Input
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {MICRO_SAAS_CATEGORIES.map((category) => (
                                        <SelectItem key={category.value} value={category.label}>
                                            {category.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="featured">Featured</SelectItem>
                                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                                    <SelectItem value="rating">Highest Rated</SelectItem>
                                    <SelectItem value="ai-score">AI Score</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-zion-blue mb-4">
                            Discover Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {filteredServices.length} services found. Each solution is designed to drive innovation, 
                            efficiency, and growth for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedServices.map((service) => (
                            <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="relative">
                                    <img 
                                        src={service.images[0]} 
                                        alt={service.title} 
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <Badge className="absolute top-4 right-4 bg-zion-purple">
                                        {service.category}
                                    </Badge>
                                    {service.featured && (
                                        <Badge className="absolute top-4 left-4 bg-yellow-500">
                                            <Star className="h-3 w-3 mr-1"/>
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                                
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {service.description.substring(0, 120)}...
                                    </CardDescription>
                                </CardHeader>
                                
                                <CardContent>
                                    {/* Rating and AI Score */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 mr-1"/>
                                            <span className="text-sm font-medium">{service.rating}</span>
                                            <span className="text-gray-500 text-sm ml-1">({service.reviewCount})</span>
                                        </div>
                                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                                            AI Score: {service.aiScore}
                                        </Badge>
                                    </div>

                                    {/* Key Features */}
                                    <div className="mb-4">
                                        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-2xl font-bold text-zion-cyan">
                                            ${service.price}
                                            <span className="text-sm text-gray-500 font-normal">/month</span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Market: {service.marketPrice}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="mb-4">
                                        <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {service.benefits.slice(0, 2).map((benefit, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                                            <Eye className="h-4 w-4 mr-2"/>
                                            View Details
                                        </Button>
                                        <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                                            <Mail className="h-4 w-4"/>
                                        </Button>
                                    </div>

                                    {/* Availability */}
                                    <div className="mt-4 text-center">
                                        <Badge variant="outline" className="text-xs">
                                            <Clock className="h-3 w-3 mr-1"/>
                                            {service.availability}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories Overview */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-zion-blue mb-4">
                            Service Categories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive range of micro SAAS solutions across different industries and technologies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MICRO_SAAS_CATEGORIES.map((category) => {
                            const IconComponent = categoryIcons[category.label];
                            const colorClass = categoryColors[category.label];
                            const servicesInCategory = MICRO_SAAS_CATEGORIES.find(c => c.label === category.label)?.count || 0;
                            
                            return (
                                <Card key={category.value} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <CardHeader className="text-center">
                                        <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            {IconComponent && <IconComponent className="h-10 w-10 text-white"/>}
                                        </div>
                                        <CardTitle className="text-xl text-zion-blue">{category.label}</CardTitle>
                                        <CardDescription className="text-gray-600">
                                            {category.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className="text-2xl font-bold text-zion-cyan mb-2">
                                            {servicesInCategory}
                                        </div>
                                        <p className="text-gray-500 text-sm">Services Available</p>
                                        <Button 
                                            variant="outline" 
                                            className="mt-4 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                                            onClick={() => setSelectedCategory(category.label)}
                                        >
                                            Explore Category
                                            <ArrowRight className="h-4 w-4 ml-2"/>
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Why Choose Zion Tech Group */}
            <div className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Why Choose Zion Tech Group?
                        </h2>
                        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                            We deliver enterprise-grade solutions with startup agility and proven results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ZapIcon className="h-10 w-10 text-zion-cyan"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Immediate Deployment</h3>
                            <p className="text-zion-slate-light">All services are ready for immediate deployment with no setup delays</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-10 w-10 text-zion-cyan"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                            <p className="text-zion-slate-light">Bank-level security with SOC 2 compliance and 24/7 monitoring</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-10 w-10 text-zion-cyan"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Proven ROI</h3>
                            <p className="text-zion-slate-light">Average 300% ROI within 6 months of implementation</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-10 w-10 text-zion-cyan"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                            <p className="text-zion-slate-light">30-day money-back guarantee with free migration support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 md:p-12 text-white">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-zion-cyan mr-3"/>
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-zion-slate-light">{CONTACT_INFO.mobile}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-zion-cyan mr-3"/>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-zion-cyan mr-3"/>
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p className="text-zion-slate-light">{CONTACT_INFO.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="h-5 w-5 text-zion-cyan mr-3"/>
                                        <div>
                                            <p className="font-medium">Website</p>
                                            <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                                                {CONTACT_INFO.website}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                                <div className="space-y-4">
                                    <Link to="/contact">
                                        <Button className="w-full bg-white text-zion-blue hover:bg-gray-100">
                                            Request Custom Quote
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-zion-blue">
                                            Schedule Consultation
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                                            Get Technical Demo
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
                                    <h4 className="font-medium text-white mb-2">What's Included:</h4>
                                    <ul className="text-sm text-zion-slate-light space-y-1">
                                        <li>• 24/7 Technical Support</li>
                                        <li>• 99.9% Uptime Guarantee</li>
                                        <li>• SOC 2 Type II Compliant</li>
                                        <li>• 30-Day Money Back Guarantee</li>
                                        <li>• Free Migration Support</li>
                                        <li>• Custom Integration Services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link to="/contact">
                                <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                                    Start Your Transformation Today
                                    <ArrowRight className="h-5 w-5 ml-2"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}