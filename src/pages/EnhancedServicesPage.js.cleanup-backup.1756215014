<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Star, Clock, Globe, Shield, Zap, Brain, Database, Cloud, Leaf, DollarSign, Eye, Users, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
const EnhancedServicesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const [availability, setAvailability] = useState('all');
    const filteredServices = ENHANCED_SERVICES.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesPrice = priceRange === 'all' ||
            (priceRange === 'low' && service.price < 10000) ||
            (priceRange === 'medium' && service.price >= 10000 && service.price < 25000) ||
            (priceRange === 'high' && service.price >= 25000);
        const matchesAvailability = availability === 'all' || service.availability === availability;
        return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
    });
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'AI & Machine Learning': return _jsx(Brain, { className: "w-5 h-5" });
            case 'Cybersecurity': return _jsx(Shield, { className: "w-5 h-5" });
            case 'Cloud & DevOps': return _jsx(Cloud, { className: "w-5 h-5" });
            case 'Data & Analytics': return _jsx(Database, { className: "w-5 h-5" });
            case 'Blockchain & Web3': return _jsx(Zap, { className: "w-5 h-5" });
            case 'IoT & Edge Computing': return _jsx(Eye, { className: "w-5 h-5" });
            case 'Quantum Computing': return _jsx(Brain, { className: "w-5 h-5" });
            case 'AR/VR & Metaverse': return _jsx(Eye, { className: "w-5 h-5" });
            case 'Green Tech & Sustainability': return _jsx(Leaf, { className: "w-5 h-5" });
            case 'FinTech & Digital Banking': return _jsx(DollarSign, { className: "w-5 h-5" });
            default: return _jsx(Zap, { className: "w-5 h-5" });
        }
    };
    const getAvailabilityIcon = (availability) => {
        switch (availability) {
            case 'immediate': return _jsx(Clock, { className: "w-4 h-4 text-green-500" });
            case 'within-week': return _jsx(Clock, { className: "w-4 h-4 text-yellow-500" });
            case 'within-month': return _jsx(Clock, { className: "w-4 h-4 text-orange-500" });
            default: return _jsx(Clock, { className: "w-4 h-4 text-gray-500" });
        }
    };
    const getAvailabilityText = (availability) => {
        switch (availability) {
            case 'immediate': return 'Available Now';
            case 'within-week': return 'Within 1 Week';
            case 'within-month': return 'Within 1 Month';
            default: return 'Contact for Availability';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark", children: [_jsx(SEO, { title: "Enhanced Tech Services - Zion Tech Group", description: "Discover cutting-edge AI, cybersecurity, cloud, blockchain, and emerging technology services. Expert solutions for modern enterprises.", keywords: "AI services, cybersecurity, cloud solutions, blockchain, quantum computing, metaverse, sustainability, fintech", canonical: "https://ziontechgroup.com/enhanced-services" }), _jsxs("div", { className: "relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90" }), _jsxs("div", { className: "relative z-10 container mx-auto px-4 py-20 text-center", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-white mb-6", children: ["Next-Generation", _jsx("span", { className: "block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Tech Services" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Transform your business with cutting-edge AI, cybersecurity, blockchain, quantum computing, and emerging technology solutions. Expert services delivered globally with proven results." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Button, { size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white", children: "Get Started Today" }), _jsx(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: "View Case Studies" })] })] })] }), _jsx("div", { className: "bg-zion-blue-light border-b border-zion-blue", children: _jsx("div", { className: "container mx-auto px-4 py-6", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-white text-lg font-semibold mb-2", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-zion-slate-light", children: "Speak with our technology experts today" })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [_jsxs("div", { className: "flex items-center gap-2 text-zion-cyan", children: [_jsx(Globe, { className: "w-4 h-4" }), _jsx("span", { children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center gap-2 text-zion-cyan", children: [_jsx(Users, { className: "w-4 h-4" }), _jsx("span", { children: "kleber@ziontechgroup.com" })] })] })] }) }) }), _jsx("div", { className: "bg-zion-blue-dark border-b border-zion-blue-light", children: _jsx("div", { className: "container mx-auto px-4 py-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: [_jsx("div", { children: _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "bg-zion-blue border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "All Categories" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), ENHANCED_SERVICE_CATEGORIES.map(category => (_jsx(SelectItem, { value: category.value, children: category.label }, category.value)))] })] }) }), _jsx("div", { children: _jsx(Input, { placeholder: "Search services...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light" }) }), _jsx("div", { children: _jsxs(Select, { value: priceRange, onValueChange: setPriceRange, children: [_jsx(SelectTrigger, { className: "bg-zion-blue border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Price Range" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Prices" }), _jsx(SelectItem, { value: "low", children: "Under $10K" }), _jsx(SelectItem, { value: "medium", children: "$10K - $25K" }), _jsx(SelectItem, { value: "high", children: "Over $25K" })] })] }) }), _jsx("div", { children: _jsxs(Select, { value: availability, onValueChange: setAvailability, children: [_jsx(SelectTrigger, { className: "bg-zion-blue border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Availability" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Availability" }), _jsx(SelectItem, { value: "immediate", children: "Available Now" }), _jsx(SelectItem, { value: "within-week", children: "Within 1 Week" }), _jsx(SelectItem, { value: "within-month", children: "Within 1 Month" })] })] }) }), _jsxs("div", { className: "text-zion-cyan text-sm", children: [filteredServices.length, " services found"] })] }) }) }), _jsx("div", { className: "container mx-auto px-4 py-12", children: _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: filteredServices.map((service) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2 text-zion-cyan", children: [getCategoryIcon(service.category), _jsx("span", { className: "text-sm font-medium", children: service.category })] }), _jsx(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-cyan border-zion-purple/30", children: service.pricingModel })] }), _jsx(CardTitle, { className: "text-xl text-white mb-2 line-clamp-2", children: service.title }), _jsx(CardDescription, { className: "text-zion-slate-light line-clamp-3", children: service.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "text-2xl font-bold text-zion-cyan", children: ["$", service.price.toLocaleString(), _jsxs("span", { className: "text-sm text-zion-slate-light font-normal", children: ["/", service.pricingModel === 'subscription' ? 'month' : 'project'] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }), _jsx("span", { className: "text-white font-medium", children: service.rating }), _jsxs("span", { className: "text-zion-slate-light text-sm", children: ["(", service.reviewCount, ")"] })] })] }), _jsxs("div", { className: "bg-zion-blue/30 rounded-lg p-3", children: [_jsx("p", { className: "text-sm text-zion-slate-light mb-1", children: "Market Price:" }), _jsx("p", { className: "text-zion-cyan font-medium", children: service.marketPrice })] }), _jsxs("div", { children: [_jsxs("h4", { className: "text-white font-semibold mb-2 flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }), "Key Features"] }), _jsxs("div", { className: "space-y-1", children: [service.features.slice(0, 3).map((feature, index) => (_jsxs("div", { className: "flex items-center gap-2 text-sm text-zion-slate-light", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-zion-cyan rounded-full" }), feature] }, index))), service.features.length > 3 && (_jsxs("div", { className: "text-zion-cyan text-sm font-medium", children: ["+", service.features.length - 3, " more features"] }))] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Benefits" }), _jsx("div", { className: "space-y-1", children: service.benefits.slice(0, 2).map((benefit, index) => (_jsxs("div", { className: "flex items-center gap-2 text-sm text-zion-slate-light", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-green-400 rounded-full" }), benefit] }, index))) })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: service.tags.slice(0, 4).map((tag, index) => (_jsx(Badge, { variant: "outline", className: "text-xs border-zion-purple/30 text-zion-cyan", children: tag }, index))) }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light", children: [getAvailabilityIcon(service.availability), getAvailabilityText(service.availability)] }), _jsxs("div", { className: "flex items-center gap-1 text-zion-slate-light", children: [_jsx(Globe, { className: "w-4 h-4" }), service.location] })] }), _jsxs("div", { className: "bg-zion-blue/20 rounded-lg p-3 space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Users, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-white", children: service.author.name })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Globe, { className: "w-4 h-4 text-zion-cyan" }), _jsx("a", { href: service.contactInfo.website, className: "text-zion-cyan hover:underline", children: service.contactInfo.website.replace('https://', '') })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Users, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-cyan", children: service.contactInfo.email })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { className: "flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white", children: "Get Quote" }), _jsx(Button, { variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: "Learn More" })] })] })] }, service.id))) }) }), _jsx("div", { className: "bg-zion-blue border-t border-zion-blue-light", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Transparent Pricing Tiers" }), _jsx("p", { className: "text-zion-slate-light max-w-2xl mx-auto", children: "Choose the right service level for your business needs. All our services come with comprehensive support and proven results." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: Object.entries(PRICING_TIERS).map(([key, tier]) => (_jsxs(Card, { className: `bg-zion-blue-dark border-zion-blue-light ${key === 'professional' ? 'border-zion-purple/50 scale-105' : ''}`, children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(CardTitle, { className: "text-2xl text-white", children: tier.name }), _jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: tier.price })] }), _jsxs(CardContent, { children: [_jsx("ul", { className: "space-y-3", children: tier.features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }), feature] }, index))) }), _jsx(Button, { className: "w-full mt-6 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white", children: "Get Started" })] })] }, key))) })] }) }), _jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark", children: _jsxs("div", { className: "container mx-auto px-4 py-16 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-zion-slate-light max-w-2xl mx-auto mb-8", children: "Our team of technology experts is ready to help you implement cutting-edge solutions that drive real business results. Contact us today for a free consultation." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "bg-white text-zion-purple hover:bg-zion-slate-light", children: "Schedule Consultation" }), _jsx(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10", children: "Download Brochure" })] }), _jsxs("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center", children: [_jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-white mb-2", children: "+1 302 464 0950" }), _jsx("div", { className: "text-zion-slate-light", children: "Phone Support" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-white mb-2", children: "kleber@ziontechgroup.com" }), _jsx("div", { className: "text-zion-slate-light", children: "Email Support" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-white mb-2", children: "Global" }), _jsx("div", { className: "text-zion-slate-light", children: "Service Coverage" })] })] })] }) })] }));
};
export default EnhancedServicesPage;
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, CONTACT_INFO } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Star, Globe, Phone, Mail, MapPin, ExternalLink, TrendingUp, Shield, Cloud, Brain, Database, Code, Zap, Heart, DollarSign, Link, Users, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
export default function EnhancedServicesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');
    const filteredServices = ENHANCED_SERVICES.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' ||
            service.category.toLowerCase().includes(selectedCategory.toLowerCase());
        const matchesPrice = selectedPriceRange === 'all' ||
            (selectedPriceRange === 'basic' && service.price <= 2000) ||
            (selectedPriceRange === 'professional' && service.price > 2000 && service.price <= 8000) ||
            (selectedPriceRange === 'enterprise' && service.price > 8000);
        return matchesSearch && matchesCategory && matchesPrice;
    });
    const getCategoryIcon = (category) => {
        switch (category.toLowerCase()) {
            case 'ai automation':
            case 'ai & machine learning':
                return <Brain className="w-5 h-5"/>;
            case 'cloud management':
            case 'cloud & infrastructure':
                return <Cloud className="w-5 h-5"/>;
            case 'cybersecurity':
            case 'security framework':
                return <Shield className="w-5 h-5"/>;
            case 'data engineering':
            case 'data & analytics':
                return <Database className="w-5 h-5"/>;
            case 'business intelligence':
                return <TrendingUp className="w-5 h-5"/>;
            case 'developer tools':
            case 'development & devops':
                return <Code className="w-5 h-5"/>;
            case 'digital transformation':
                return <Zap className="w-5 h-5"/>;
            case 'healthcare technology':
                return <Heart className="w-5 h-5"/>;
            case 'financial technology':
                return <DollarSign className="w-5 h-5"/>;
            case 'blockchain':
                return <Link className="w-5 h-5"/>;
            case 'quantum computing':
                return <Zap className="w-5 h-5"/>;
            default:
                return <Code className="w-5 h-5"/>;
        }
    };
    const getPriceRange = (price) => {
        if (price <= 2000)
            return 'basic';
        if (price <= 8000)
            return 'professional';
        return 'enterprise';
    };
    return (<div className="min-h-screen bg-background">
      <SEO title="Enhanced IT & AI Services - Zion Tech Group" description="Discover our comprehensive suite of AI services, IT solutions, and micro SAAS offerings. From AI automation to quantum computing readiness." keywords="AI services, IT solutions, micro SAAS, cybersecurity, cloud computing, data analytics, Zion Tech Group" canonical="https://ziontechgroup.com/enhanced-services"/>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enhanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Comprehensive micro SAAS solutions, IT services, and AI-powered innovations to transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light" onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Overview */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Service Pricing Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([tier, info]) => (<Card key={tier} className="bg-zion-blue border-zion-blue-light">
                <CardHeader className="text-center">
                  <CardTitle className="text-zion-cyan capitalize">{tier}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {info.range}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white">{info.description}</p>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5"/>
              <Input placeholder="Search services, technologies, or keywords..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"/>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Categories"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {ENHANCED_SERVICE_CATEGORIES.map(category => (<SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>))}
              </SelectContent>
            </Select>
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Prices"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="basic">Basic ($500 - $2,000)</SelectItem>
                <SelectItem value="professional">Professional ($2,000 - $8,000)</SelectItem>
                <SelectItem value="enterprise">Enterprise ($8,000+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (<Card key={service.id} className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(service.category)}
                      <Badge variant={getPriceRange(service.price) === 'enterprise' ? 'default' : 'secondary'}>
                        {getPriceRange(service.price)}
                      </Badge>
                    </div>
                    {service.featured && (<Badge variant="default" className="bg-zion-purple">
                        Featured
                      </Badge>)}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-zion-slate">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-zion-slate">({service.reviewCount} reviews)</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-blue">
                        {service.currency}{service.price?.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate">
                        {service.availability}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (<Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-zion-slate">
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4"/>
                      {service.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4"/>
                      AI Score: {service.aiScore}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zion-slate-light">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate">By {service.author.name}</span>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore by Category
          </h2>
          <Tabs defaultValue="ai-ml" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-zion-blue-dark">
              {ENHANCED_SERVICE_CATEGORIES.slice(0, 6).map(category => (<TabsTrigger key={category.value} value={category.value} className="text-zion-slate-light data-[state=active]:text-zion-cyan">
                  {category.label}
                </TabsTrigger>))}
            </TabsList>
            
            {ENHANCED_SERVICE_CATEGORIES.slice(0, 6).map(category => (<TabsContent key={category.value} value={category.value} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ENHANCED_SERVICES
                .filter(service => service.category.toLowerCase().includes(category.value.toLowerCase()))
                .slice(0, 6)
                .map(service => (<Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white">
                        <CardHeader>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <CardDescription className="text-zion-slate-light">
                            {service.description.substring(0, 100)}...
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan font-bold">
                              {service.currency}{service.price?.toLocaleString()}
                            </span>
                            <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>))}
                </div>
              </TabsContent>))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Expertise</h3>
              <p className="text-zion-slate-light">
                Industry-leading solutions with proven track records and customer success stories
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">
                Cutting-edge AI and emerging technologies to keep you ahead of the competition
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-zion-slate-light">
                Personalized service with dedicated account managers and 24/7 technical support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light">
                Measurable business outcomes and rapid return on investment for all solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12">
              Get in touch with our experts to discuss your needs and discover how our services can drive your success
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <Phone className="w-6 h-6"/>
                <div className="text-left">
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm">{CONTACT_INFO.mobile}</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <Mail className="w-6 h-6"/>
                <div className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm">{CONTACT_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <MapPin className="w-6 h-6"/>
                <div className="text-left">
                  <div className="font-semibold">Address</div>
                  <div className="text-sm">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light" onClick={() => window.open(`tel:${CONTACT_INFO.mobile}`, '_self')}>
                <Phone className="w-5 h-5 mr-2"/>
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" onClick={() => window.open(`mailto:${CONTACT_INFO.email}`, '_self')}>
                <Mail className="w-5 h-5 mr-2"/>
                Send Email
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" onClick={() => window.open(CONTACT_INFO.website, '_blank')}>
                <ExternalLink className="w-5 h-5 mr-2"/>
                Visit Website
              </Button>
            </div>

            <div className="mt-12 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <h3 className="text-xl font-bold text-white mb-4">Special Enterprise Offerings</h3>
              <p className="text-zion-slate-light mb-4">
                For enterprise clients, we offer custom solution development, dedicated support teams, and comprehensive implementation services.
              </p>
              <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Enterprise%20Inquiry`, '_self')}>
                Request Enterprise Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
