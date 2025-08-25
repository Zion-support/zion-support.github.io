import React, { useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
<<<<<<< HEAD
=======
<<<<<<< HEAD
  DollarSign, 
  Globe, 
  Mail, 
  Phone,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Smartphone,
  Database,
  Link as LinkIcon
} from 'lucide-react';
import { expandedServiceCategories, Service, getAllServices } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore'>('rating');

  const allServices = getAllServices();
  
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.pricing.amount - b.pricing.amount;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const formatPrice = (service: Service) => {
    const { pricing } = service;
    switch (pricing.type) {
      case 'monthly':
        return `$${pricing.amount.toLocaleString()}/month`;
      case 'hourly':
        return `$${pricing.hourlyRate}/hour`;
      case 'project':
        return `$${pricing.amount.toLocaleString()}`;
      default:
        return `$${pricing.amount.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = expandedServiceCategories.find(cat => cat.name === categoryName);
    return category?.icon || '🔧';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Tech Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS, IT services, and AI solutions designed to transform your business. 
            From AI chatbots to cloud migration, we provide enterprise-grade solutions at competitive prices.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for services, features, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg border-0 bg-white/10 text-white placeholder:text-gray-300"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="bg-zion-purple hover:bg-zion-purple-dark"
              >
                All Services
              </Button>
              {expandedServiceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
                  className="bg-zion-purple hover:bg-zion-purple-dark"
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-600">
              Showing {sortedServices.length} of {allServices.length} services
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'price' | 'aiScore')}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="rating">Rating</option>
                <option value="price">Price</option>
                <option value="aiScore">AI Score</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Users,
  Building,
  Smartphone,
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, SERVICE_BENEFITS } from "@/data/expandedServices";

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'starter' && service.price && service.price <= 4999) ||
                        (selectedPriceRange === 'professional' && service.price && service.price > 4999 && service.price <= 9999) ||
                        (selectedPriceRange === 'enterprise' && service.price && service.price > 9999 && service.price <= 25000) ||
                        (selectedPriceRange === 'custom' && service.price && service.price > 25000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getPriceRange = (price: number) => {
    if (price <= 4999) return 'starter';
    if (price <= 9999) return 'professional';
    if (price <= 25000) return 'enterprise';
    return 'custom';
  };

  const getCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'AI Automation': <Zap className="h-5 w-5" />,
      'Customer Intelligence': <Users className="h-5 w-5" />,
      'Content Marketing': <TrendingUp className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Threat Intelligence': <Shield className="h-5 w-5" />,
      'Cloud Management': <Globe className="h-5 w-5" />,
      'DevOps': <Zap className="h-5 w-5" />,
      'Data Analytics': <TrendingUp className="h-5 w-5" />,
      'IoT & Predictive Analytics': <Zap className="h-5 w-5" />,
      'Business Intelligence': <TrendingUp className="h-5 w-5" />,
      'Digital Transformation': <Building className="h-5 w-5" />,
      'Edge Computing': <Globe className="h-5 w-5" />,
      'API Management': <Zap className="h-5 w-5" />,
      'Blockchain & Web3': <Zap className="h-5 w-5" />,
      'Mobile Development': <Smartphone className="h-5 w-5" />,
      'E-commerce': <ShoppingCart className="h-5 w-5" />,
      'Healthcare Technology': <Heart className="h-5 w-5" />,
      'FinTech': <TrendingUp className="h-5 w-5" />,
      'Education Technology': <GraduationCap className="h-5 w-5" />,
      'Supply Chain': <Truck className="h-5 w-5" />
    };
    return categoryIcons[category] || <Zap className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            ZionTech Group Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Comprehensive IT & AI Solutions for Modern Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-cyan">25+</div>
              <div className="text-sm">Services Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-purple">Global</div>
              <div className="text-sm">Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-cyan">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-purple/20 border-b border-zion-purple/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">+1 302 464 0950</span>
              <Mail className="h-5 w-5 text-zion-cyan ml-4" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All Price Ranges" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Price Ranges</SelectItem>
                <SelectItem value="starter">Starter ($1,999 - $4,999)</SelectItem>
                <SelectItem value="professional">Professional ($5,000 - $9,999)</SelectItem>
                <SelectItem value="enterprise">Enterprise ($10,000 - $25,000)</SelectItem>
                <SelectItem value="custom">Custom ($25,000+)</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Pricing Tiers Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Service Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-zion-cyan">{key.charAt(0).toUpperCase() + key.slice(1)}</CardTitle>
                  <CardDescription className="text-zion-cyan-light">{tier.range}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">
              Available Services ({filteredServices.length})
            </h2>
            <div className="text-zion-cyan-light">
              Showing {filteredServices.length} of {EXPANDED_SERVICES.length} services
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Badge className="absolute top-3 right-3 bg-zion-purple text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                    <span className="text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-zion-purple transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 mt-2">
                        {service.shortDescription}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Brain className="h-4 w-4" />
                      {service.aiScore}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      {getCategoryIcon(service.category)} {service.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {service.subcategory}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-purple">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Delivery */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        {formatPrice(service)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.pricing.details}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.deliveryTime}
                      </div>
                      <div className="text-xs text-gray-500">Delivery</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Contact and Actions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        {service.contactEmail}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        {service.contactPhone}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                        Get Quote
                      </Button>
                      {service.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={service.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    <Badge className="absolute top-2 right-2 bg-zion-purple text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                    {getCategoryIcon(service.category)}
                    <span className="text-xs text-white">{service.category}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {getPriceRange(service.price || 0)}
                    </Badge>
                  </div>
                  <CardDescription className="text-zion-cyan-light line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/10 text-zion-cyan-light border-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan-light">Price:</span>
                        <span className="font-semibold text-zion-cyan">
                          ${service.price?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan-light">Availability:</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {service.availability}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan-light">Location:</span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          {service.location}
                        </span>
                      </div>
                    </div>

                    {/* Rating and AI Score */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{service.rating}</span>
                        <span className="text-xs text-zion-cyan-light">({service.reviewCount} reviews)</span>
                      </div>
                      {service.aiScore && (
                        <Badge className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                          AI Score: {service.aiScore}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                        onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`, '_blank')}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                        onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution. 
            Get in touch for a personalized consultation and quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          
          <div className="mt-8 text-zion-slate-light">
            <p className="mb-2">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p>
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>

      <TrustedBySection />
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>

        {/* Service Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose ZionTech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_BENEFITS).map(([key, benefit]) => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <p className="text-zion-cyan-light">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-zion-purple to-zion-blue rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 text-zion-cyan-light">
            Let's discuss how our innovative solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-zion-purple hover:bg-zion-cyan-light"
              onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation`, '_blank')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
}