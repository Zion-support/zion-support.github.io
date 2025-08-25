<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Clock, DollarSign, Users, ArrowRight, Search, Filter, LayoutGrid, List } from 'lucide-react';
import { comprehensiveServices, serviceCategories, serviceSubcategories } from '@/data/comprehensiveServices';
=======
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Star, Clock, MapPin, Mail, Phone, ExternalLink, ArrowRight, CheckCircle, Shield, Zap, Globe, Database, Code, Brain, Lock, Cloud, BarChart3, Eye, Users, TrendingUp } from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from "@/data/comprehensiveServices";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
=======
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  COMPREHENSIVE_SERVICES, 
  SERVICE_CATEGORIES, 
  SERVICE_PRICING_TIERS,
  CONTACT_INFO,
  SERVICE_GUARANTEES
} from '@/data/comprehensiveServices';
import { ProductListing } from '@/types/listings';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
<<<<<<< HEAD
<<<<<<< HEAD
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    return comprehensiveServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
<<<<<<< HEAD
      return matchesSearch && matchesCategory && matchesSubcategory;
=======
      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 5000) ||
        (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 5000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 15000) ||
        (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 15000);
      
      return matchesSearch && matchesCategory && matchesPrice;
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const getSubcategoriesForCategory = (category: string) => {
    if (category === 'all') return [];
    return serviceSubcategories[category as keyof typeof serviceSubcategories] || [];
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      <SEO 
        title="All Services - Zion Tech Group" 
        description="Explore our comprehensive suite of AI services, IT solutions, Micro SAAS platforms, and digital transformation services."
        keywords="AI services, IT services, Micro SAAS, digital transformation, business solutions, technology services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            All Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto">
            Discover our complete portfolio of technology solutions designed to transform your business. 
            From AI-powered insights to enterprise infrastructure, we have everything you need to succeed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full border border-zion-purple/30">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-zion-purple font-medium">{category.name}</span>
                <Badge variant="secondary" className="bg-zion-purple/30 text-white">
                  {category.count}
                </Badge>
              </div>
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Award,
  Mail,
  Phone,
  Search,
  Filter,
  ExternalLink,
  Code,
  Database,
  Network,
  Server,
  Cpu,
  Monitor
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SAAS_CATEGORIES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_IT_CATEGORIES } from '../data/specializedITServices';

export default function ComprehensiveServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
  const allCategories = [...INNOVATIVE_SAAS_CATEGORIES, ...SPECIALIZED_IT_CATEGORIES];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'AI & Customer Service': Users,
      'Content Management': BarChart3,
      'DevOps & Automation': Zap,
      'API & Integration': Code,
      'Data & Analytics': Database,
      'Network Security': Network
    };
    return iconMap[category] || Globe;
  };

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && service.price.starter <= 200) ||
      (priceRange === 'mid-range' && service.price.starter > 200 && service.price.starter <= 500) ||
      (priceRange === 'premium' && service.price.starter > 500);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const ServiceCard = ({ service }: { service: any }) => {
    const CategoryIcon = getCategoryIcon(service.category);
    
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <CategoryIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-zion-blue-dark bg-zion-blue-light px-2 py-1 rounded">
                {service.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-zion-blue-dark mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </h3>
            <p className="text-zion-slate text-sm mb-3">
              {service.description}
            </p>
          </div>
          {service.status === 'Active' && (
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Active
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{service.rating}</span>
            <span className="text-zion-slate text-sm">({service.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-zion-cyan" />
              <span className="text-sm font-semibold text-zion-blue-dark">
                Starting at ${service.price.starter}/month
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zion-slate" />
              <span className="text-zion-slate text-sm">{service.deliveryTime}</span>
            </div>
          </div>

          <div className="text-xs text-zion-slate mb-3">
            Market Price: {service.marketPrice}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Key Features:</h4>
          <div className="grid grid-cols-2 gap-1">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate">
                <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Target Audience:</h4>
          <div className="flex flex-wrap gap-1">
            {service.targetAudience.slice(0, 3).map((audience: string, idx: number) => (
              <span key={idx} className="text-xs bg-zion-blue-light text-zion-blue-dark px-2 py-1 rounded">
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a 
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zion-cyan hover:text-zion-cyan-light text-sm flex items-center group"
          >
            Learn More <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-2">
            <a 
              href={`mailto:${service.contactInfo.email}`}
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              Get Quote
            </a>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete range of IT services designed to transform your business. From AI development to cybersecurity, we have the expertise you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <Input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="high">$15,000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-zion-blue-light hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {SERVICE_CATEGORIES.find(cat => cat.id === service.category)?.name || 'Service'}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-zion-slate-light">{service.rating || 4.5}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-semibold text-lg">
                        {getPriceDisplay(service)}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {service.priceType || 'Project-based'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration || '2-4 weeks'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>2-5 people</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.tags?.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
=======
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price! < 3000) ||
                        (selectedPriceRange === 'medium' && service.price! >= 3000 && service.price! < 7000) ||
                        (selectedPriceRange === 'high' && service.price! >= 7000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getPriceRangeLabel = (price: number) => {
    if (price < 3000) return 'Low';
    if (price < 7000) return 'Medium';
    return 'High';
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.id === category);
    return categoryData?.icon || '🔧';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Tech Services - Zion Tech Group" 
        description="Discover our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for modern businesses."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT services, micro SAAS"
        canonical="https://ziontechgroup.com/services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <GradientHeading className="text-5xl md:text-6xl mb-6">
              Comprehensive Tech Services
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI, cybersecurity, cloud, and digital transformation solutions. 
              Expert services designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="py-8 bg-zion-blue-light border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-cyan/20 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search services, technologies, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light h-12 text-lg"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="bg-zion-purple hover:bg-zion-purple-dark border-zion-purple"
                >
                  All Categories
                </Button>
                {SERVICE_CATEGORIES.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-zion-purple hover:bg-zion-purple-dark border-zion-purple"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button
                  variant={selectedPriceRange === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('all')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  All Prices
                </Button>
                <Button
                  variant={selectedPriceRange === 'low' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('low')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  Under $3,000
                </Button>
                <Button
                  variant={selectedPriceRange === 'medium' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('medium')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  $3,000 - $7,000
                </Button>
                <Button
                  variant={selectedPriceRange === 'high' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('high')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  Over $7,000
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-zion-slate-light text-lg">
                Find the perfect solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className="relative">
                    <img 
                      src={service.images[0]} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.featured && (
                      <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                        Featured
                      </Badge>
                    )}
                    <Badge className="absolute top-4 left-4 bg-zion-cyan text-white">
                      {getPriceRangeLabel(service.price!)}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{getCategoryIcon(service.category.toLowerCase().replace(/\s+/g, '-'))}</span>
                      <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zion-blue-light text-zion-slate-light text-xs">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
                          {tag}
                        </Badge>
                      ))}
                    </div>
<<<<<<< HEAD
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                  <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let our team of experts help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Link to="/request-quote">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
          </div>
        </div>
      </div>
    );
  };

  const CategoryCard = ({ category }: { category: any }) => {
    const IconComponent = getCategoryIcon(category.label);
    
    return (
      <div className="bg-white rounded-xl p-6 border border-zion-blue-light hover:shadow-lg transition-shadow cursor-pointer"
           onClick={() => setSelectedCategory(category.value)}>
        <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-zion-blue-dark mb-2 text-center">
          {category.label}
        </h3>
        <p className="text-sm text-zion-slate text-center">
          {category.description}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services - Zion Tech Group" 
        description="Explore our complete portfolio of micro SAAS services and specialized IT solutions designed to transform your business operations."
        keywords="comprehensive services, micro SAAS, IT solutions, AI services, cybersecurity, cloud computing, Zion Tech Group"
        url="https://ziontechgroup.com/services/comprehensive"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Complete Solutions for Every Business Need
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            From AI-powered business intelligence to enterprise-grade cybersecurity, 
            discover our complete portfolio of innovative services designed to accelerate 
            your digital transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
=======
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_SERVICES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing tier
    if (selectedPricingTier !== 'all') {
      const tier = SERVICE_PRICING_TIERS[selectedPricingTier as keyof typeof SERVICE_PRICING_TIERS];
      if (tier) {
        filtered = filtered.filter(service => {
          const discountedPrice = service.price * (1 - tier.discount);
          if (selectedPricingTier === 'startup') return discountedPrice <= 5000;
          if (selectedPricingTier === 'smb') return discountedPrice <= 15000;
          return true; // enterprise
        });
      }
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPricingTier, sortBy]);

  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier) {
      return price * (1 - pricingTier.discount);
    }
    return price;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. Expert consulting, development, and support for businesses of all sizes."
        keywords="IT services, AI services, micro SAAS, technology consulting, cybersecurity, cloud migration, data analytics"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge micro SAAS solutions, expert IT consulting, 
            and innovative AI services. From startups to enterprises, we deliver results that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>Certified Professionals</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
            </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category to find 
              the perfect solution for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCategories.map((category) => (
              <CategoryCard key={category.value} category={category} />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
            ))}
=======
      {/* Contact Banner */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-zion-blue">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-zion-slate">
              <Clock className="w-4 h-4" />
              <span>{CONTACT_INFO.businessHours}</span>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Search and Filters */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-zion-purple"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-zion-slate-light w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('all');
                }}
                className="bg-zion-blue-light border-zion-purple/20 text-white rounded-md px-3 py-2 focus:border-zion-purple focus:ring-zion-purple"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
=======
      {/* Search and Filters */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate w-5 h-5" />
                <Input
                  placeholder="Search services, technologies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-zion-blue-light focus:border-zion-blue"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

<<<<<<< HEAD
              {/* Subcategory Filter */}
              {selectedCategory !== 'all' && (
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="bg-zion-blue-light border-zion-purple/20 text-white rounded-md px-3 py-2 focus:border-zion-purple focus:ring-zion-purple"
                >
                  <option value="all">All Subcategories</option>
                  {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {comprehensiveServices.length} services
            </p>
=======
      {/* Filters Section */}
      <section className="py-12 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-zion-blue-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="all">All Categories</option>
                  {allCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">Search Services</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border border-zion-blue-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate" />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-zion-blue-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $200/month)</option>
                  <option value="mid-range">Mid-Range ($201 - $500/month)</option>
                  <option value="premium">Premium ($500+/month)</option>
                </select>
              </div>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid/List */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }>
              {filteredServices.map((service) => (
                <Card key={service.id} className={`bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}>
                  <div className={`relative overflow-hidden rounded-t-lg ${
                    viewMode === 'list' ? 'lg:w-1/3' : ''
                  }`}>
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        viewMode === 'list' ? 'h-48 lg:h-full' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-zion-purple text-white">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                        {service.subcategory}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${viewMode === 'list' ? 'lg:pl-6' : ''}`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Pricing and Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-zion-cyan" />
                          <span className="text-white font-bold text-xl">
                            {service.currency}{service.price}
                          </span>
                          <span className="text-zion-slate-light">
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Delivery and Contact */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Users className="w-4 h-4" />
                          <span>{service.targetAudience.length} target audiences</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
=======
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover the perfect solution for your business needs from our comprehensive portfolio 
              of innovative services and solutions.
            </p>
          </div>
          
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-blue-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate mb-6">
                Try adjusting your filters or search terms to find the services you need.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceRange('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
            </div>
=======
              {/* Pricing Tier Filter */}
              <select
                value={selectedPricingTier}
                onChange={(e) => setSelectedPricingTier(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="all">All Pricing Tiers</option>
                {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
                  <option key={key} value={key}>
                    {tier.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zion-cyan text-white">
                      {service.subcategory}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-zion-blue line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-zion-slate mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing and AI Score */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price || 0)}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-zion-slate">AI Score:</div>
                      <div className="w-12 h-6 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{service.aiScore}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="flex items-center justify-between text-sm text-zion-slate mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="mb-4 p-3 bg-zion-slate-light rounded-lg">
                    <div className="text-sm font-semibold text-zion-blue mb-2">Pricing Tiers:</div>
                    <div className="space-y-1 text-xs">
                      {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
                        <div key={key} className="flex justify-between">
                          <span>{tier.name}:</span>
                          <span className="font-semibold">
                            {formatPrice(getDiscountedPrice(service.price || 0, key))}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                      <Link to={`/services/${service.id}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                      <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                        Get Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-zion-slate mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all our services
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPricingTier('all');
              }}>
                Clear Filters
              </Button>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
          )}
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact CTA */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Contact us today to discuss your project requirements and get a personalized quote for any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry">
                Contact Sales Team
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+13024640950">
                Call +1 (302) 464-0950
              </a>
            </Button>
=======
      {/* Pricing Overview */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services are priced competitively with flexible plans to fit businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">Budget Solutions</h3>
              <div className="text-3xl font-bold text-zion-cyan mb-2">$99 - $200</div>
              <div className="text-zion-slate text-sm mb-4">per month</div>
              <p className="text-zion-slate text-sm">
                Perfect for startups and small businesses looking to get started with essential services.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-zion-cyan">
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">Professional Solutions</h3>
              <div className="text-3xl font-bold text-zion-cyan mb-2">$201 - $500</div>
              <div className="text-zion-slate text-sm mb-4">per month</div>
              <p className="text-zion-slate text-sm">
                Ideal for growing businesses that need advanced features and scalability.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">Enterprise Solutions</h3>
              <div className="text-3xl font-bold text-zion-cyan mb-2">$500+</div>
              <div className="text-zion-slate text-sm mb-4">per month</div>
              <p className="text-zion-slate text-sm">
                Comprehensive solutions for large organizations with complex requirements.
              </p>
            </div>
=======
      {/* Service Guarantees */}
      <section className="bg-zion-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We stand behind every service with comprehensive guarantees and ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark rounded-lg">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee}</h3>
              </div>
            ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Contact our team to discuss your requirements and get personalized recommendations 
              for the services that best fit your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Call Us</h3>
              <p className="text-zion-slate mb-3">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950"
                className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
              >
                Call Now →
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Email Us</h3>
              <p className="text-zion-slate mb-3">kleber@ziontechgroup.com</p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
              >
                Send Email →
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Visit Us</h3>
              <p className="text-zion-slate mb-3">364 E Main St STE 1008<br />Middletown DE 19709</p>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
              >
                Visit Website →
              </a>
=======
      {/* Pricing Tiers Explanation */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Flexible Pricing Tiers</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Choose the pricing tier that best fits your business size and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`p-8 rounded-lg border-2 ${
                key === 'smb' 
                  ? 'border-zion-blue bg-zion-blue/5 scale-105' 
                  : 'border-zion-slate-light'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                  <p className="text-zion-slate">{tier.description}</p>
                  {key === 'smb' && (
                    <Badge className="mt-2 bg-zion-cyan text-white">Most Popular</Badge>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-zion-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-sm text-zion-slate mb-2">
                    {tier.discount > 0 ? `${tier.discount * 100}% discount applied` : 'Standard pricing'}
                  </div>
                  <Button asChild className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                    <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${tier.name} pricing tier`}>
                      Get {tier.name} Pricing
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how our comprehensive IT and AI services can drive your business forward. 
            Get a free consultation and customized solution proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">Round-the-clock technical support and emergency response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations and ROI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-zion-slate-light">Work around your schedule with minimal disruption</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that have already transformed their operations 
            with our comprehensive services and solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
=======
      {/* Footer Contact Info */}
      <section className="bg-zion-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a href={CONTACT_INFO.website} className="hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>{CONTACT_INFO.businessHours}</p>
                <p className="text-zion-cyan font-semibold">{CONTACT_INFO.emergencySupport}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>
                <a href={CONTACT_INFO.website} className="block hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                  Main Website
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2 text-sm">
                <p>✓ Certified professionals</p>
                <p>✓ Industry experience</p>
                <p>✓ Proven methodologies</p>
                <p>✓ Ongoing support</p>
                <p>✓ Competitive pricing</p>
              </div>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount} reviews)</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price?.toLocaleString()}
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          Starting Price
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.availability}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {service.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-zion-purple" />
                        <span className="text-zion-slate-light text-sm">AI Score: {service.aiScore}%</span>
                      </div>
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                        asChild
                      >
                        <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Flexible Pricing Options</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Choose the service level that best fits your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`bg-zion-blue border p-8 text-center relative ${
                  index === 1 ? 'border-zion-purple scale-105 shadow-xl shadow-zion-purple/20' : 'border-zion-blue-light'
                }`}>
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-purple text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild
                  >
                    <a href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry">
                      Get Started
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Why Choose Zion Tech Group?</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                We deliver cutting-edge solutions with proven expertise and exceptional support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
                <p className="text-zion-slate-light">Leverage the latest AI technologies to gain competitive advantages</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-grade security and compliance for your most critical systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light">Quick implementation with minimal disruption to your operations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-zion-slate-light">24/7 technical support and dedicated account management</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Get in touch with our experts today for a free consultation and discover how our services can drive your success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-zion-slate-light mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-zion-slate-light">
                <Clock className="inline h-4 w-4 mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
  );
}