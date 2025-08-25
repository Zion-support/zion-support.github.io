<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import React, { useState, useMemo } from 'react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, ExpandedService } from '@/data/expandedServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  Users, 
  Shield, 
  Zap, 
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Lightbulb
} from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, type ExpandedService } from '@/data/expandedServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore'>('rating');

  const allServices = getAllServices();
  
  const filteredServices = allServices.filter(service => {
=======
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, TrendingUp, Shield, Zap, Database, Globe, Lock, Cloud, BarChart3, Smartphone, Link as LinkIcon } from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, FEATURED_SERVICES, NEW_SERVICES } from '@/data/expandedServices';
import { SEO } from '@/components/SEO';
import { TrustedBySection } from '@/components/TrustedBySection';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Automation": <Zap className="w-6 h-6" />,
  "Cybersecurity": <Shield className="w-6 h-6" />,
  "Cloud & DevOps": <Cloud className="w-6 h-6" />,
  "Data & Analytics": <BarChart3 className="w-6 h-6" />,
  "Digital Transformation": <TrendingUp className="w-6 h-6" />,
  "IoT & Edge Computing": <Smartphone className="w-6 h-6" />,
  "Blockchain & Web3": <LinkIcon className="w-6 h-6" />,
};

const pricingModelColors: Record<string, string> = {
  "subscription": "bg-blue-100 text-blue-800",
  "project-based": "bg-purple-100 text-purple-800",
  "one-time": "bg-green-100 text-green-800",
  "usage-based": "bg-orange-100 text-orange-800",
};

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = EXPANDED_SERVICES.filter(service => {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
=======
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredServices = EXPANDED_SERVICES.filter(service => {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
<<<<<<< HEAD
    
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
=======
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = service.price < 500;
    else if (priceRange === 'medium') matchesPrice = service.price >= 500 && service.price < 2000;
    else if (priceRange === 'high') matchesPrice = service.price >= 2000;
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
<<<<<<< HEAD
      case 'price':
        return a.pricing.amount - b.pricing.amount;
      case 'aiScore':
        return b.aiScore - a.aiScore;
=======
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
      default:
        return 0;
    }
  });

<<<<<<< HEAD
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
=======
  const getSubcategories = (category: string) => {
    if (category === 'all') return [];
    const service = EXPANDED_SERVICES.find(s => s.category === category);
    return service ? [service.subcategory] : [];
  };

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'monthly': return <Clock className="w-4 h-4" />;
      case 'hourly': return <Zap className="w-4 h-4" />;
      case 'project-based': return <Zap className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getPricingModelText = (model: string) => {
    switch (model) {
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return 'One-time';
    }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
<<<<<<< HEAD
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
=======
  const handleContactClick = (serviceId: string) => {
    // Scroll to contact section or open contact modal
    window.location.href = `https://ziontechgroup.com/contact?service=${serviceId}`;
  };

  return (
    <>
      <SEO 
        title="Enterprise Technology Services & Solutions | Zion Tech Group" 
        description="Discover our comprehensive suite of enterprise technology services including AI automation, cybersecurity, cloud solutions, data analytics, and digital transformation services."
        keywords="enterprise technology services, AI automation, cybersecurity, cloud solutions, data analytics, digital transformation, IoT, blockchain"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Technology Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity, 
            we provide comprehensive services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Search className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <LinkIcon className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                size="sm"
              >
                All Services
              </Button>
              {SERVICE_CATEGORIES.map((category) => (
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
<<<<<<< HEAD
                  className="bg-zion-purple hover:bg-zion-purple-dark"
=======
                  size="sm"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
=======
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Technology Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered services, cloud solutions, cybersecurity, and digital transformation consulting. 
            Built for modern businesses, powered by cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======

// Simple service data structure
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  tags: string[];
  rating: number;
  aiScore: number;
}

const SERVICES: Service[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-language support (50+ languages)", "Advanced NLP with GPT-4 integration", "Custom training on your data", "Analytics dashboard", "API integration", "24/7 customer support"],
    benefits: ["Reduce customer service costs by 60%", "24/7 availability", "Scalable customer support", "Improved customer satisfaction", "Data-driven insights"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    rating: 4.8,
    aiScore: 95
  },
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration solution with automated assessment, planning, and execution tools for seamless transition to cloud infrastructure.",
    category: "Cloud Services",
    subcategory: "Migration & Consulting",
    price: 4999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Automated workload assessment", "Cost optimization analysis", "Migration planning tools", "Execution automation", "Post-migration support", "Performance monitoring"],
    benefits: ["Reduce migration time by 40%", "Minimize downtime", "Optimize cloud costs", "Ensure compliance", "Risk mitigation"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "GCP", "DevOps"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Compliance",
    description: "Comprehensive security assessment and compliance framework for enterprise organizations with detailed reporting and remediation guidance.",
    category: "Security Services",
    subcategory: "Cybersecurity",
    price: 8999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Vulnerability assessment", "Penetration testing", "Compliance audit", "Security policy review", "Incident response planning", "Staff training"],
    benefits: ["Identify security gaps", "Meet compliance requirements", "Reduce breach risk", "Improve security posture", "Protect customer data"],
    tags: ["Cybersecurity", "Compliance", "Audit", "Security", "Risk Management"],
    rating: 4.9,
    aiScore: 96
  }
];

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Enterprise Solutions & Micro SAAS Services
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Discover our comprehensive range of enterprise-grade solutions, micro SAAS services, 
          and innovative technology offerings designed to accelerate your business growth.
        </p>
        
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Middletown DE 19709</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
  DollarSign, 
  CheckCircle, 
  Phone, 
  Mail, 
  Globe, 
  TrendingUp,
  Shield,
  Zap,
  Database,
  Code,
  Smartphone,
  Settings,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceComparisonTool } from '@/components/ServiceComparisonTool';

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredServices = useMemo(() => {
    return EXPANDED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricingModel]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'ai-score':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }, [filteredServices, sortBy]);

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || '🔧';
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price.toLocaleString()}/month`;
    } else if (model === 'hourly') {
      return `$${price.toLocaleString()}/hour`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of micro SAAS services, IT solutions, and AI-powered tools. 
            From development to cybersecurity, we deliver enterprise-grade solutions at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                Get Started Today
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-purple py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>https://ziontechgroup.com</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
      {/* Search and Filters */}
      <div className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services, features, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
<<<<<<< HEAD
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
=======
      {/* Contact Information Banner */}
      <section className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search services, features, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.icon} {category.name}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
                {SERVICE_CATEGORIES.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.icon} {category.name}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          </div>
        </div>

<<<<<<< HEAD
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
=======
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">Best AI Score</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.name} className="bg-white/10 border-zion-blue-light text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                    {category.count} Services
                  </Badge>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
<<<<<<< HEAD

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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
=======
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Available Services ({sortedServices.length})
            </h2>
            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {EXPANDED_SERVICES.length} services
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <Card key={service.id} className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
<<<<<<< HEAD
                  {service.featured && (
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
=======

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories(selectedCategory).map(sub => (
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-32 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $500</SelectItem>
                <SelectItem value="medium">$500 - $2K</SelectItem>
                <SelectItem value="high">Over $2K</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-40 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="aiScore">AI Score</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-slate-light">
              Explore our comprehensive technology solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
=======
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zion-purple text-white">
                      {getCategoryIcon(service.category)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-zion-blue-dark">
                      {service.subcategory}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-zion-blue-dark">{service.title}</CardTitle>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
<<<<<<< HEAD
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getPricingModelIcon(service.pricingModel)}
                      <span className="text-sm text-zion-slate-light">
                        {getPricingModelText(service.pricingModel)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-purple">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}
                    </div>
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">AI Score</span>
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                      {service.aiScore}/100
                    </Badge>
                  </div>

                  {/* Features Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          +{service.features.length - 3} more
                        </Badge>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
                  {/* Pricing and AI Score */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">AI Score</div>
                      <div className="text-lg font-bold text-zion-cyan">{service.aiScore}</div>
                    </div>
                  </div>

                  {/* Market Price Comparison */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>Market Price: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <Clock className="h-4 w-4" />
                      <span>Delivery: {service.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-zion-blue-dark mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-zion-purple">
                          +{service.features.length - 3} more features
                        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
                  <div>
                    <h4 className="font-semibold text-zion-blue-dark mb-2">Benefits:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Zap className="h-3 w-3 text-amber-500" />
                          <span>{benefit}</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                        </div>
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                        {tag}
                      </Badge>
                    ))}
                  </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
=======
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4">
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </Link>
                    
                    <div className="flex gap-2">
                      {service.website && (
                        <a 
                          href={service.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Website
                          </Button>
                        </a>
                      )}
                      
                      <Link to="/contact" className="flex-1">
                        <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                      {service.documentation && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>Documentation</span>
                        </div>
                      )}
                      {service.support && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>Support</span>
                        </div>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>{service.compliance.length} Compliance</span>
                        </div>
                      )}
                      {service.sla && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>SLA</span>
                        </div>
                      )}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
                    </div>
=======
                  {/* Contact Information */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-zion-purple rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {service.author.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-zion-blue-dark">{service.author.name}</div>
                          <div className="text-sm text-gray-500">{service.reviewCount} reviews</div>
                        </div>
                      </div>
                      {service.author.verified && (
                        <Badge className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="h-4 w-4" />
                        <span>{service.contactInfo.website}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                      Learn More
                    </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                  </div>
                </CardContent>
              </Card>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full mb-2">
                  {service.category}
                </span>
                <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full ml-2">
                  {service.subcategory}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">
                    {service.currency}{service.price}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.pricingModel}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-zion-slate-light'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm">({service.rating})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zion-cyan text-sm">AI Score:</span>
                  <span className="text-white font-semibold">{service.aiScore}%</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-zion-cyan">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-zion-cyan">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/services-pricing?service=${service.id}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 text-center block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <Link
              to="/categories"
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Browse All Categories
            </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filters.</p>
=======
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all categories</p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* All Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Services</h2>
            <p className="text-lg text-gray-600">
              Browse our comprehensive catalog of technology services and solutions
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-8 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              {SERVICE_CATEGORIES.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.icon} {category.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            {SERVICE_CATEGORIES.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">New Services</h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Stay ahead with our latest innovative solutions and cutting-edge technology services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEW_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="new" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right solutions and implement them successfully. 
            Get in touch for a free consultation and customized proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <LinkIcon className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <LinkIcon className="w-5 h-5 mr-2" />
              View Case Studies
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Contact us: <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
          </div>
        </div>
      </section>

      <TrustedBySection />
<<<<<<< HEAD
=======
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
=======
      {/* Service Categories Overview */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive technology service categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-white">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.subcategories.slice(0, 3).map((sub, index) => (
                      <div key={index} className="text-sm text-zion-slate-light flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {sub}
                      </div>
                    ))}
                    {category.subcategories.length > 3 && (
                      <div className="text-xs text-zion-cyan">
                        +{category.subcategories.length - 3} more services
                      </div>
                    )}
                  </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
          </div>
        </div>
      </div>

      {/* Service Comparison Tool */}
      <ServiceComparisonTool maxServices={4} />

      {/* Pricing Tiers */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-zion-blue-dark text-center mb-12">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <Card key={tier.name} className={`text-center ${tier.name === 'Professional' ? 'border-zion-purple shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue-dark">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-purple">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark">
                    Choose {tier.name}
                  </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
=======
      {/* CTA Section */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can accelerate your growth and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              Request Custom Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg border border-white/20 transition-all duration-300"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    </div>
=======
    </>
  );
}

interface ServiceCardProps {
  service: any;
  variant?: 'default' | 'new' | 'featured';
}

function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  const isNew = variant === 'new' || service.isNew;
  const isFeatured = variant === 'featured' || service.isFeatured;

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {categoryIcons[service.category]}
            <Badge variant="secondary" className="text-xs">
              {service.subcategory}
            </Badge>
          </div>
          <div className="flex gap-1">
            {isNew && (
              <Badge className="bg-green-500 text-white text-xs">
                <Clock className="w-3 h-3 mr-1" />
                New
              </Badge>
            )}
            {isFeatured && (
              <Badge className="bg-yellow-500 text-white text-xs">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-zion-blue">
              {service.currency}{service.price.toLocaleString()}
            </span>
            <Badge className={pricingModelColors[service.pricingModel]}>
              {service.pricingModel.replace('-', ' ')}
            </Badge>
          </div>
          
          <div className="text-sm text-gray-600">
            <p><strong>Market Price:</strong> {service.marketPrice}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{service.rating}</span>
              <span className="text-gray-400">({service.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>AI Score: {service.aiScore}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white"
          onClick={() => window.open(service.contactLink, '_blank')}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          Get Quote
        </Button>
      </CardFooter>
    </Card>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
=======
      </section>

      {/* Why Choose Zion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Technology Group?</h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Cutting-Edge Technology</h3>
              <p className="text-zion-slate-light">
                Leverage the latest AI, cloud, and security technologies to stay ahead of the competition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our certified professionals bring years of experience across industries and technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance standards to protect your business and data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">
                Serving clients worldwide with localized expertise and 24/7 support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">
                Track record of successful implementations and measurable business outcomes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation Focus</h3>
              <p className="text-zion-slate-light">
                Constantly evolving our solutions to meet emerging business challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
            <a href="tel:+13024640950">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
=======
      </div>

      {/* Why Choose Zion */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance standards</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-zion-purple">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
                Contact Us Now
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
  );
}