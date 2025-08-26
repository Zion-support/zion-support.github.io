import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  Cpu, 
  Network,
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, InnovativeService, getServicesByCategory, getTopRatedServices } from '@/data/innovativeServices2025';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = [
    { id: 'all', label: 'All Services', icon: Globe },
    { id: 'AI Services', label: 'AI Services', icon: Brain },
    { id: 'IT Services', label: 'IT Services', icon: Cpu },
    { id: 'Micro SAAS', label: 'Micro SAAS', icon: Zap },
    { id: 'Business Solutions', label: 'Business Solutions', icon: TrendingUp },
    { id: 'Development Tools', label: 'Development Tools', icon: Code },
    { id: 'Security', label: 'Security', icon: Shield },
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: '0-100', label: '$0 - $100/month' },
    { id: '100-500', label: '$100 - $500/month' },
    { id: '500-1000', label: '$500 - $1,000/month' },
    { id: '1000-5000', label: '$1,000 - $5,000/month' },
    { id: '5000+', label: '$5,000+/month' },
  ];

  const sortOptions = [
    { id: 'rating', label: 'Highest Rated' },
    { id: 'aiScore', label: 'Highest AI Score' },
    { id: 'price', label: 'Lowest Price' },
    { id: 'newest', label: 'Newest' },
  ];

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || (() => {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      const monthlyPrice = service.price.monthly || 0;
      if (selectedPriceRange === '5000+') return monthlyPrice >= 5000;
      return monthlyPrice >= min && monthlyPrice <= max;
    })();

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'price':
        return (a.price.monthly || 0) - (b.price.monthly || 0);
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  const topRatedServices = getTopRatedServices(6);
  const aiServices = getServicesByCategory('AI Services');
  const itServices = getServicesByCategory('IT Services');
  const microSaasServices = getServicesByCategory('Micro SAAS');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Cpu;
      case 'Micro SAAS': return Zap;
      case 'Business Solutions': return TrendingUp;
      case 'Development Tools': return Code;
      case 'Security': return Shield;
      default: return Globe;
    }
  };

  const formatPrice = (price: any) => {
    if (price.monthly && price.yearly) {
      return `$${price.monthly.toLocaleString()}/month or $${price.yearly.toLocaleString()}/year`;
    } else if (price.monthly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.yearly) {
      return `$${price.yearly.toLocaleString()}/year`;
    } else if (price.oneTime) {
      return `$${price.oneTime.toLocaleString()} one-time`;
    }
    return 'Contact for pricing';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI, IT, and Micro SAAS solutions that transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Globe className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-blue-200">
                <Phone className="h-4 w-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Mail className="h-4 w-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <MapPin className="h-4 w-4" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-blue-200 font-medium">Trusted by 1000+ Companies Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.id} value={range.id}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our most popular and highest-rated innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {React.createElement(getCategoryIcon(service.category), { className: "h-6 w-6 text-blue-400" })}
                    <div>
                      <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-blue-200">
                        {service.subcategory}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-600 text-white">
                    {service.aiScore}/100
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                  </div>
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    {service.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="text-white font-medium">
                    {formatPrice(service.price)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-400/30">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-400">
                    <strong className="text-white">Unique Value:</strong> {service.uniqueValue}
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    <strong className="text-white">Competitors:</strong> {service.competitors.join(', ')}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(service.website, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open(service.contactLink, '_blank')}
                  >
                    Contact
                  </Button>
                </div>

                {service.demoLink && (
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                    onClick={() => window.open(service.demoLink, '_blank')}
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Request Demo
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="ai-services" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger value="ai-services" className="text-white data-[state=active]:bg-blue-600">
              <Brain className="mr-2 h-4 w-4" />
              AI Services
            </TabsTrigger>
            <TabsTrigger value="it-services" className="text-white data-[state=active]:bg-blue-600">
              <Cpu className="mr-2 h-4 w-4" />
              IT Services
            </TabsTrigger>
            <TabsTrigger value="micro-saas" className="text-white data-[state=active]:bg-blue-600">
              <Zap className="mr-2 h-4 w-4" />
              Micro SAAS
            </TabsTrigger>
            <TabsTrigger value="all-services" className="text-white data-[state=active]:bg-blue-600">
              <Globe className="mr-2 h-4 w-4" />
              All Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai-services" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="it-services" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="micro-saas" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all-services" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our innovative services to stay ahead of the competition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard: React.FC<{ service: InnovativeService }> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Cpu;
      case 'Micro SAAS': return Zap;
      case 'Business Solutions': return TrendingUp;
      case 'Development Tools': return Code;
      case 'Security': return Shield;
      default: return Globe;
    }
  };

  const formatPrice = (price: any) => {
    if (price.monthly && price.yearly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.monthly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.yearly) {
      return `$${price.yearly.toLocaleString()}/year`;
    } else if (price.oneTime) {
      return `$${price.oneTime.toLocaleString()} one-time`;
    }
    return 'Contact for pricing';
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {React.createElement(getCategoryIcon(service.category), { className: "h-5 w-5 text-blue-400" })}
            <div>
              <CardTitle className="text-white text-base">{service.title}</CardTitle>
              <CardDescription className="text-blue-200 text-sm">
                {service.subcategory}
              </CardDescription>
            </div>
          </div>
          <Badge className="bg-green-600 text-white text-xs">
            {service.aiScore}/100
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-gray-300 text-sm line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{service.rating}</span>
            <span className="text-gray-400 text-xs">({service.reviewCount})</span>
          </div>
          <Badge variant="outline" className="border-blue-400 text-blue-400 text-xs">
            {service.status}
          </Badge>
        </div>

        <div className="text-white font-medium text-sm">
          {formatPrice(service.price)}
        </div>

        <div className="flex flex-wrap gap-1">
          {service.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-400/30 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2 pt-2">
          <Button 
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
            onClick={() => window.open(service.website, '_blank')}
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            Website
          </Button>
          <Button 
            size="sm"
            variant="outline" 
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-xs"
            onClick={() => window.open(service.contactLink, '_blank')}
          >
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InnovativeServicesShowcase;