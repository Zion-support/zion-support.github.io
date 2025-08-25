<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, EnhancedService } from '@/data/enhancedServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import { ProductListing } from '@/types/listings';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
import { 
  ENHANCED_SERVICES, 
  getServicesByCategory, 
  getPopularServices, 
  getNewServices, 
  getPremiumServices,
  type EnhancedService 
} from "@/data/enhancedServices";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  Users, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, SAMPLE_SERVICES } from "@/data/sampleServices";

export default function EnhancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredServices = SAMPLE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === "low" && service.price > 3000) matchesPrice = false;
    if (priceRange === "medium" && (service.price < 3000 || service.price > 8000)) matchesPrice = false;
    if (priceRange === "high" && service.price < 8000) matchesPrice = false;
=======
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Users,
  Building,
  Mail,
  Phone,
  MapPin
=======
  Shield, 
  Zap, 
  TrendingUp, 
  Globe,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Users,
  Calendar
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp,
  Shield,
  Cloud,
  Database,
  Network, 
  Monitor,
  Eye,
  DollarSign,
  CheckCircle
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
=======
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db

  const filteredServices = ENHANCED_SERVICES.filter(service => {
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price && service.price < 5000) ||
                        (selectedPriceRange === 'medium' && service.price && service.price >= 5000 && service.price < 15000) ||
                        (selectedPriceRange === 'high' && service.price && service.price >= 15000);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'starter' && service.price && service.price <= 4999) ||
                        (priceRange === 'professional' && service.price && service.price > 4999 && service.price <= 14999) ||
                        (priceRange === 'enterprise' && service.price && service.price > 14999);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

<<<<<<< HEAD
<<<<<<< HEAD
  const getCategoryIcon = (icon: string) => {
    return <span className="text-2xl">{icon}</span>;
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      "from-purple-500 to-indigo-600",
      "from-cyan-500 to-blue-600", 
      "from-emerald-500 to-green-600",
      "from-amber-500 to-orange-600",
      "from-pink-500 to-rose-600",
      "from-violet-500 to-purple-600"
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      <SEO 
        title="Comprehensive Tech Services - Zion Tech Group" 
        description="Explore our complete range of AI, IT infrastructure, and micro SAAS services. From custom AI development to cybersecurity solutions, we have everything your business needs."
        keywords="AI services, IT services, micro SAAS, cybersecurity, cloud migration, digital transformation, Zion Tech Group"
      />
      <Header />
      
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Comprehensive Tech Services
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our complete ecosystem of AI, IT infrastructure, and micro SAAS solutions. 
                Expert-led services designed for the modern enterprise.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/30 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex items-center text-zion-cyan">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center text-zion-cyan">
                    <Mail className="h-5 w-5 mr-2" />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-zion-slate-light">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  364 E Main St STE 1008, Middletown, DE 19709
                </div>
              </div>
            </div>
=======
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
=======
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || 
                          (selectedPricing === 'budget' && service.price < 1000) ||
                          (selectedPricing === 'mid-range' && service.price >= 1000 && service.price < 3000) ||
                          (selectedPricing === 'enterprise' && service.price >= 3000);
    const matchesSupport = selectedSupport === 'all' || service.supportLevel === selectedSupport;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2

    return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
  });

<<<<<<< HEAD
  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'immediate': return <Zap className="w-4 h-4 text-green-500" />;
      case '1-2 weeks': return <Clock className="w-4 h-4 text-yellow-500" />;
      case '1 month': return <Calendar className="w-4 h-4 text-orange-500" />;
      case 'custom': return <Users className="w-4 h-4 text-blue-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enhanced IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of AI, cybersecurity, cloud, and specialized IT services. Expert solutions for modern businesses."
        keywords="AI services, cybersecurity, cloud solutions, IT consulting, digital transformation, healthcare IT, financial services IT"
=======
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai marketing':
        return <TrendingUp className="w-5 h-5" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'cloud services':
      case 'devops':
        return <Cloud className="w-5 h-5" />;
      case 'data analytics':
      case 'data management':
      case 'iot & analytics':
        return <Database className="w-5 h-5" />;
      case 'blockchain':
        return <Network className="w-5 h-5" />;
      case 'edge computing':
        return <Monitor className="w-5 h-5" />;
      case 'quantum computing':
        return <Monitor className="w-5 h-5" />;
      case 'ar/vr':
        return <Eye className="w-5 h-5" />;
      case 'fintech':
        return <DollarSign className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getPriceColor = (price: number) => {
    if (price <= 4999) return 'text-green-500';
    if (price <= 14999) return 'text-blue-500';
    return 'text-purple-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Enhanced IT & AI Services - ZionTech Group" 
        description="Discover our comprehensive range of innovative IT services, AI solutions, cybersecurity, cloud services, and cutting-edge technology solutions."
        keywords="AI services, IT solutions, cybersecurity, cloud services, blockchain, quantum computing, metaverse, fintech"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enhanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business. From AI automation to cybersecurity, we deliver innovative, scalable, and cost-effective services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <ExternalLink className="w-5 h-5 mr-2" />
              Request Quote
            </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-zion-blue-dark border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-purple/30 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ai-service">AI & Machine Learning</SelectItem>
                  <SelectItem value="it-service">IT Infrastructure</SelectItem>
                  <SelectItem value="saas-service">Micro SAAS Solutions</SelectItem>
                  <SelectItem value="talent">Tech Talent</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40 bg-zion-blue-dark border-zion-purple/30 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $3,000</SelectItem>
                  <SelectItem value="medium">$3,000 - $8,000</SelectItem>
                  <SelectItem value="high">Over $8,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
              <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((category, index) => (
                <Card key={category.id} className="overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`rounded-full w-14 h-14 bg-gradient-to-br ${getCategoryColor(index)} flex items-center justify-center`}>
                        {getCategoryIcon(category.icon)}
                      </div>
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        ${category.avgPrice.toLocaleString()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-xs text-zion-slate-light/70">
                          +{category.services.length - 3} more services
                        </div>
                      )}
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    >
                      <Link to={`/services?category=${category.id}`}>
                        Explore {category.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                Available Services ({filteredServices.length})
              </h2>
              <Link to="/request-quote">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-lg hover:border-zion-purple/50">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan text-xs">
                        {service.category.replace('-', ' ').toUpperCase()}
                      </Badge>
                      <div className="text-right">
                        <div className="text-lg font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        {service.currency === '$/hr' && (
                          <div className="text-xs text-zion-slate-light">per hour</div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
                          {tag}
                        </Badge>
                      ))}
                      {service.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
                          +{service.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-zion-blue hover:bg-zion-blue-light text-white"
                    >
                      <Link to={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-zion-slate-light text-lg mb-4">
                  No services found matching your criteria
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                  }}
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
                Choose the perfect plan for your business needs with transparent pricing and no hidden fees
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICE_PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`relative overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 ${
                  index === 1 ? 'ring-2 ring-zion-purple scale-105' : ''
                }`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-zion-purple text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-zion-cyan">{tier.currency}</span>
                      <span className="text-4xl font-bold text-white">{tier.price.toLocaleString()}</span>
                    </div>
                    <CardDescription className="text-zion-slate-light mt-2">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={`w-full ${
                        index === 1 
                          ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white' 
                          : 'bg-zion-blue hover:bg-zion-blue-light text-white'
                      }`}
                    >
                      <Link to="/request-quote">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of companies already leveraging our comprehensive tech solutions. 
              Get a free consultation and discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                asChild
              >
                <Link to="/request-quote">
                  <Users className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
=======
import React, { useState, useEffect } from 'react';
import { ENHANCED_MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES } from '../data/enhancedMicroSaasServices';
import { ENHANCED_IT_SERVICES, IT_SERVICE_CATEGORIES } from '../data/enhancedITServices';
import { ENHANCED_AI_SERVICES, AI_SERVICE_CATEGORIES } from '../data/enhancedAIServices';
import '../styles/futuristic.css';

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
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  competitors?: string[];
  marketSize?: string;
  roi?: string;
}

const EnhancedServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'micro-saas' | 'it-services' | 'ai-services'>('micro-saas');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'name'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');



  const getCurrentServices = () => {
    let services: Service[] = [];
    
    switch (activeTab) {
      case 'micro-saas':
        services = ENHANCED_MICRO_SAAS_SERVICES;
        break;
      case 'it-services':
        services = ENHANCED_IT_SERVICES;
        break;
      case 'ai-services':
        services = ENHANCED_AI_SERVICES;
        break;
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      services = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    services.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating || 0;
          bValue = b.rating || 0;
          break;
        case 'aiScore':
          aValue = a.aiScore || 0;
          bValue = b.aiScore || 0;
          break;
        case 'name':
          aValue = a.title;
          bValue = b.title;
          break;
        default:
          aValue = a.title;
          bValue = b.title;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return services;
  };

  const getCategories = () => {
    switch (activeTab) {
      case 'micro-saas':
        return MICRO_SAAS_CATEGORIES;
      case 'it-services':
        return IT_SERVICE_CATEGORIES;
      case 'ai-services':
        return AI_SERVICE_CATEGORIES;
      default:
        return [];
    }
  };

  const formatPrice = (price: number, currency: string, pricingModel: string) => {
    if (pricingModel === 'hourly') {
      return `${currency}${price}/hour`;
    } else if (pricingModel === 'per-user') {
      return `${currency}${price}/user/month`;
    } else if (pricingModel === 'per-project') {
      return `${currency}${price}`;
    } else {
      return `${currency}${price}/${pricingModel}`;
    }
  };

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'AI & Analytics': '🤖',
      'AI & Marketing': '📊',
      'AI & Customer Service': '💬',
      'AI & Sales': '💰',
      'AI & HR': '👥',
      'AI & Finance': '💳',
      'AI & Project Management': '📋',
      'AI & E-commerce': '🛒',
      'AI & Legal': '⚖️',
      'AI & Healthcare': '🏥',
      'Cloud Services': '☁️',
      'Security': '🔒',
      'DevOps': '⚙️',
      'Data & Analytics': '📈',
      'Networking': '🌐',
      'Support & Management': '🛠️',
      'Development': '💻',
      'Consulting': '💡',
      'AI & ML': '🧠'
    };
    return iconMap[category] || '🚀';
  };

  useEffect(() => {
    // Scroll to top when tab changes
    window.scrollTo(0, 0);
  }, [activeTab]);

  const currentServices = getCurrentServices();
  const categories = getCategories();

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain"></div>

      {/* Particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-futuristic mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI services, innovative Micro SAAS solutions, and comprehensive IT services 
            designed to transform your business and drive success in the digital age.
          </p>
        </div>

        {/* Service Type Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'micro-saas', label: 'Micro SAAS Services', icon: '💻' },
            { id: 'it-services', label: 'IT Services', icon: '🔧' },
            { id: 'ai-services', label: 'AI Services', icon: '🤖' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`btn-futuristic ${activeTab === tab.id ? 'neon-glow' : ''}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="glass p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [newSortBy, newSortOrder] = e.target.value.split('-');
                  setSortBy(newSortBy as any);
                  setSortOrder(newSortOrder as any);
                }}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              >
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Low-High</option>
                <option value="price-desc">Price High-Low</option>
                <option value="rating-desc">Rating High-Low</option>
                <option value="aiScore-desc">AI Score High-Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid-futuristic">
          {currentServices.map((service) => (
            <div key={service.id} className="card-futuristic hover-lift">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mr-3">
                  {getServiceIcon(service.category)}
                </div>
                <div className="text-right">
                  {service.featured && (
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white rounded-full mb-2">
                      Featured
                    </span>
                  )}
                  <div className="text-2xl font-bold text-gradient-primary">
                    {formatPrice(service.price, service.currency, service.pricingModel)}
                  </div>
                </div>
              </div>

              {/* Service Title and Category */}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-cyan-400">{service.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400">{service.subcategory}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {service.aiScore && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{service.aiScore}</div>
                    <div className="text-xs text-gray-400">AI Score</div>
                  </div>
                )}
                {service.rating && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{service.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                )}
                {service.marketSize && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{service.marketSize}</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </div>
                )}
                {service.roi && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/50 text-xs text-cyan-400 rounded-full border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-xs text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact and Action */}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
                  </div>
                  <button className="btn-futuristic text-sm px-4 py-2">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {currentServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
            <p className="text-gray-400">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="glass p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our team of experts to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              Schedule Free Consultation
            </button>
            <button className="btn-futuristic">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '50+', label: 'AI Services', icon: '🤖' },
            { number: '100+', label: 'Micro SAAS Solutions', icon: '💻' },
            { number: '25+', label: 'IT Services', icon: '🔧' },
            { number: '24/7', label: 'Support Available', icon: '🔄' }
          ].map((stat, index) => (
            <div key={index} className="card-futuristic text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
=======
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Automation': <Brain className="w-5 h-5" />,
      'Content AI': <Zap className="w-5 h-5" />,
      'Predictive Analytics': <TrendingUp className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Threat Intelligence': <Lock className="w-5 h-5" />,
      'Compliance': <Shield className="w-5 h-5" />,
      'Cloud Management': <Cloud className="w-5 h-5" />,
      'DevOps': <Zap className="w-5 h-5" />,
      'Containerization': <Database className="w-5 h-5" />,
      'Data Engineering': <Database className="w-5 h-5" />,
      'Data Governance': <Database className="w-5 h-5" />,
      'Business Intelligence': <TrendingUp className="w-5 h-5" />,
      'IoT': <Smartphone className="w-5 h-5" />,
      'Edge Computing': <Zap className="w-5 h-5" />,
      'Blockchain': <Lock className="w-5 h-5" />,
      'Web3': <Globe className="w-5 h-5" />,
      'Digital Transformation': <Building className="w-5 h-5" />,
      'System Modernization': <Zap className="w-5 h-5" />,
      'Healthcare AI': <Users className="w-5 h-5" />,
      'FinTech': <TrendingUp className="w-5 h-5" />,
      'Retail AI': <Building className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise IT & AI Services - Zion Tech Group" 
        description="Comprehensive enterprise IT services, AI solutions, cybersecurity, cloud management, and digital transformation services. Expert consulting and implementation worldwide."
        keywords="enterprise IT services, AI solutions, cybersecurity, cloud management, digital transformation, IT consulting"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity, 
            we deliver enterprise-grade services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              View Case Studies
=======
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Cutting-edge technology solutions designed to transform your business. From AI automation to quantum computing, 
            we deliver innovative services that drive growth and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
<<<<<<< HEAD
      <div className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Address</p>
              <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
=======
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-cyan">
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
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
=======
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
=======
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {ENHANCED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
<<<<<<< HEAD
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger>
=======
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
<<<<<<< HEAD
                <SelectItem value="low">Under $5,000</SelectItem>
                <SelectItem value="medium">$5,000 - $15,000</SelectItem>
                <SelectItem value="high">Over $15,000</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
=======
      {/* Contact Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
=======
                <SelectItem value="starter">Starter ($1,999 - $4,999)</SelectItem>
                <SelectItem value="professional">Professional ($5,000 - $14,999)</SelectItem>
                <SelectItem value="enterprise">Enterprise ($15,000+)</SelectItem>
              </SelectContent>
            </Select>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Filters and Search */}
      <div className="bg-white border-b py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pricing</SelectItem>
                  <SelectItem value="one-time">One-time</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="project-based">Project-based</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Support" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Support</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
      {/* Pricing Tiers Info */}
      <div className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([tier, info]) => (
              <Card key={tier} className="bg-zion-blue border-zion-blue-light text-white">
                <CardHeader>
                  <CardTitle className="text-zion-cyan capitalize">{tier}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">
                    ${info.min.toLocaleString()} - ${info.max.toLocaleString()}
                  </div>
                  <div className="space-y-2">
                    {tier === 'starter' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Essential features for small businesses
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Basic support and documentation
                        </div>
                      </>
                    )}
                    {tier === 'professional' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Advanced features and customization
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Priority support and training
                        </div>
                      </>
                    )}
                    {tier === 'enterprise' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Custom enterprise solutions
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Dedicated support team
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
          </div>
        </div>
      </div>

      {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zion-blue/10 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm text-zion-slate">
                          {service.category}
                        </CardDescription>
=======
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {getPricingModelLabel(service.pricingModel)}
                  </Badge>
                  <Badge className={getSupportLevelColor(service.supportLevel)}>
                    {service.supportLevel}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Market Price</div>
                    <div className="text-sm font-medium">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Rating and AI Score */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  {getAvailabilityIcon(service.availability)}
                  <span>Available: {service.availability}</span>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500 mt-1">
                        +{service.features.length - 3} more features
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
                      </div>
                    </div>
                    {service.featured && (
                      <Badge className="bg-zion-purple text-white">Featured</Badge>
                    )}
                  </div>
<<<<<<< HEAD
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zion-slate text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
=======
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span>{benefit}</span>
                      </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
                    ))}
                  </div>

<<<<<<< HEAD
                  <div className="flex items-center justify-between text-sm text-zion-slate">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-blue">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        AI Score: {service.aiScore}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
=======
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Contact Actions */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-2 border-t text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    <span>{service.contactInfo.website}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
        </div>

<<<<<<< HEAD
      {/* Pricing Tiers */}
      <div className="bg-zion-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Service Pricing Tiers</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Choose the right service level for your business needs. All tiers include our expert consultation and implementation support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`text-center ${key === 'professional' ? 'border-zion-purple shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-purple mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-blue hover:bg-zion-blue-dark">
                    Choose {tier.name}
                  </Button>
=======
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-zion-purple/20 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    {service.featured && (
                      <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zion-blue text-zion-cyan border-zion-blue-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between">
                      <div className={`text-2xl font-bold ${getPriceColor(service.price || 0)}`}>
                        ${service.price?.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Delivery: {service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>Location: {service.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>AI Score: {service.aiScore}/100</span>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                        <Mail className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
                </CardContent>
              </Card>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate">Serving clients worldwide with 24/7 support and local expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-grade security and compliance with industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation First</h3>
              <p className="text-zion-slate">Cutting-edge AI and emerging technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">Certified professionals with deep industry expertise</p>
            </div>
          </div>
=======

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise IT and AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              Download Brochure
            </Button>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedPricingModel('all');
              setSelectedSupportLevel('all');
            }}>
              Clear Filters
            </Button>
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the right technology solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions that drive real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};

export default EnhancedServicesPage;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7c3b
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
};

export default EnhancedServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
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
