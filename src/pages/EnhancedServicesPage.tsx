<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { 
  Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, 
  Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, 
  ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, 
  Building, Factory, Store, Car, Plane, Ship, Home, Hospital, 
  Building2, GraduationCap, Calendar, FileText, BarChart3, 
  MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, 
  PieChart, Activity, Package, Wifi, ArrowRight, CheckCircle, 
  Award, Rocket, Lightbulb, Shield as ShieldIcon, Zap as ZapIcon,
  Brain as BrainIcon, Cloud as CloudIcon, Database as DatabaseIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '../data/comprehensiveServices';

const EnhancedServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [selectedSupport, setSelectedSupport] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Filter services based on search and filters
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || 
                          (selectedPricing === 'budget' && service.price < 1000) ||
                          (selectedPricing === 'mid-range' && service.price >= 1000 && service.price < 3000) ||
                          (selectedPricing === 'enterprise' && service.price >= 3000);
    const matchesSupport = selectedSupport === 'all' || service.supportLevel === selectedSupport;

    return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <BrainIcon className="w-6 h-6 text-blue-500" />;
      case 'Cybersecurity':
        return <ShieldIcon className="w-6 h-6 text-red-500" />;
      case 'Blockchain & Web3':
        return <ZapIcon className="w-6 h-6 text-yellow-500" />;
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6 text-purple-500" />;
      case 'Internet of Things':
        return <Wifi className="w-6 h-6 text-green-500" />;
      case 'Cloud & Infrastructure':
        return <CloudIcon className="w-6 h-6 text-gray-500" />;
      case 'Data & Analytics':
        return <DatabaseIcon className="w-6 h-6 text-indigo-500" />;
      default:
        return <Settings className="w-6 h-6 text-gray-400" />;
    }
  };

  const getPricingBadge = (price: number) => {
    if (price < 1000) return { text: 'Budget', color: 'bg-green-100 text-green-800' };
    if (price < 3000) return { text: 'Mid-Range', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Enterprise', color: 'bg-purple-100 text-purple-800' };
  };

  const getSupportBadge = (support: string) => {
    switch (support) {
      case 'basic':
        return { text: 'Basic', color: 'bg-gray-100 text-gray-800' };
      case 'premium':
        return { text: 'Premium', color: 'bg-blue-100 text-blue-800' };
      case 'enterprise':
        return { text: 'Enterprise', color: 'bg-purple-100 text-purple-800' };
      default:
        return { text: 'Standard', color: 'bg-gray-100 text-gray-800' };
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ENHANCED_SERVICES, 
  getServicesByCategory, 
  getPopularServices, 
  getNewServices, 
  getPremiumServices,
  type EnhancedService 
} from "@/data/enhancedServices";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Brain,
  Cloud,
  Code,
  Settings,
  BarChart3,
  ArrowRight,
  Play,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  DollarSign,
  Calendar
} from "lucide-react";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";

export default function EnhancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');

  const popularServices = getPopularServices();
  const newServices = getNewServices();
  const premiumServices = getPremiumServices();

  const categories = [
    { id: 'all', label: 'All Services', icon: <Zap className="h-4 w-4" /> },
    { id: 'AI', label: 'AI Services', icon: <Brain className="h-4 w-4" /> },
    { id: 'IT', label: 'IT Services', icon: <Settings className="h-4 w-4" /> },
    { id: 'SAAS', label: 'SAAS Solutions', icon: <Cloud className="h-4 w-4" /> },
    { id: 'Development', label: 'Development', icon: <Code className="h-4 w-4" /> },
    { id: 'Consulting', label: 'Consulting', icon: <Users className="h-4 w-4" /> },
    { id: 'Automation', label: 'Automation', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'Integration', label: 'Integration', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const pricingModels = [
    { id: 'all', label: 'All Pricing' },
    { id: 'hourly', label: 'Hourly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'project', label: 'Project-based' },
    { id: 'subscription', label: 'Subscription' }
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Most Popular' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest First' }
  ];

  const getFilteredServices = () => {
    let filtered = ENHANCED_SERVICES;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Pricing filter
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.price.pricingModel === selectedPricing);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price.min - b.price.min);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price.max - a.price.max);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt || Date.now()).getTime() - new Date(a.createdAt || Date.now()).getTime());
        break;
      default: // popularity
        filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    }

    return filtered;
  };

  const formatPrice = (service: EnhancedService) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;
      case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;
      case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;
      case 'Development': return <Code className="h-5 w-5 text-green-400" />;
      case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;
      case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;
      case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
    }
  };

  const filteredServices = getFilteredServices();

  return (
    <SimpleFuturisticBackground>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm font-medium text-zion-cyan">Premium Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI-powered solutions, enterprise IT services, and innovative SaaS platforms. 
              Each service is designed to drive innovation and accelerate your business growth.
            </p>
          </div>

          {/* Contact Information Banner */}
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-6 mb-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <div>
                  <div className="text-sm text-zion-slate-light">Phone</div>
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <div>
                  <div className="text-sm text-zion-slate-light">Email</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-zion-cyan" />
                <div>
                  <div className="text-sm text-zion-slate-light">Address</div>
                  <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Services Tabs */}
          <Tabs defaultValue="all" className="mb-16">
            <TabsList className="grid w-full grid-cols-5 bg-zion-blue-dark/50 border border-zion-purple/30 p-1 rounded-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2" />
                All
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Star className="h-4 w-4 mr-2" />
                Popular
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2" />
                New
              </TabsTrigger>
              <TabsTrigger value="premium" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Shield className="h-4 w-4 mr-2" />
                Premium
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Filter className="h-4 w-4 mr-2" />
                Custom
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ENHANCED_SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="premium" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-8">
              {/* Filters and Search */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Search Services</label>
                    <Input
                      placeholder="Search by name, description, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-zion-blue-dark/50 border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id} className="text-white">
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Pricing Model</label>
                    <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                      <SelectTrigger className="bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                        <SelectValue placeholder="Select pricing" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                        {pricingModels.map((pricing) => (
                          <SelectItem key={pricing.id} value={pricing.id} className="text-white">
                            {pricing.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                        {sortOptions.map((option) => (
                          <SelectItem key={option.id} value={option.id} className="text-white">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-zion-slate-light">
                  Showing {filteredServices.length} of {ENHANCED_SERVICES.length} services
                </p>
              </div>

              {/* Filtered Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
                  <Button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedPricing('all');
                      setSortBy('popularity');
                    }}
                    variant="outline"
                    className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Can't find exactly what you're looking for? Our team of experts can create custom solutions 
                tailored to your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact Our Team
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
                >
                  <Play className="h-4 w-4" />
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleFuturisticBackground>
  );
}

interface ServiceCardProps {
  service: EnhancedService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const formatPrice = (service: EnhancedService) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;
      case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;
      case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;
      case 'Development': return <Code className="h-5 w-5 text-green-400" />;
      case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;
      case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;
      case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Revolutionary Micro SAAS Services & AI Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Pricing</option>
              <option value="budget">Budget ($0-$999)</option>
              <option value="mid-range">Mid-Range ($1K-$2.9K)</option>
              <option value="enterprise">Enterprise ($3K+)</option>
            </select>

            {/* Support Level Filter */}
            <select
              value={selectedSupport}
              onChange={(e) => setSelectedSupport(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Support Levels</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="category">Category</option>
            </select>
            <span className="text-gray-500 text-sm">
              {sortedServices.length} services found
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => {
            const pricingBadge = getPricingBadge(service.price);
            const supportBadge = getSupportBadge(service.supportLevel);
            
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(service.category)}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-2xl font-bold text-blue-600">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">per {service.pricingModel}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${pricingBadge.color}`}>
                      {pricingBadge.text}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${supportBadge.color}`}>
                      {supportBadge.text}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {service.estimatedDelivery}
                    </span>
                  </div>

                  {/* Market Price Comparison */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Market Price:</span>
                      <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">Our Price:</span>
                      <span className="font-bold text-green-600">${service.price.toLocaleString()}/{service.pricingModel}</span>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500 italic">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact & CTA */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <Phone className="w-4 h-4" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Get Quote
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with Zion Tech Group today and discover how our innovative micro SAAS services can revolutionize your operations, enhance security, and drive growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">24/7 support available</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-300">Middletown, DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Our Website
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
                className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesPage;
=======
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/30 border border-zion-blue-light/20 backdrop-blur-sm">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {service.isPopular && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
          {service.isNew && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              <Zap className="h-3 w-3 mr-1" />
              New
            </Badge>
          )}
          {service.isPremium && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              <Shield className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>
        <div className="absolute top-4 right-4">
          {getCategoryIcon(service.category)}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="text-zion-slate-light line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-zion-cyan">
            {formatPrice(service)}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-white">{service.rating}</span>
            <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>

        {/* Market Price Comparison */}
        <div className="text-xs text-zion-slate-light bg-zion-blue-dark/50 rounded px-2 py-1">
          Market Average: {service.averageMarketPrice}
        </div>

        {/* Key Benefits */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-xs text-zion-slate-light flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery Time */}
        <div className="flex items-center gap-2 text-xs text-zion-slate-light">
          <Clock className="h-3 w-3" />
          {service.deliveryTime}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2"
            onClick={() => window.open(service.contactLink, '_blank')}
          >
            <ExternalLink className="h-3 w-3" />
            Get Quote
          </Button>
          {service.demoLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-2"
              onClick={() => window.open(service.demoLink, '_blank')}
            >
              <Play className="h-3 w-3" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
