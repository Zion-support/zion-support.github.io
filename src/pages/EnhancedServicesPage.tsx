<<<<<<< HEAD
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
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
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

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
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesPage;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7c3b
