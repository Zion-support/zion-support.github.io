import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import MicroSAASCard from '../components/MicroSAASCard';
import { microSAASServices, categories, getServicesByCategory, getLiveServices, getBetaServices, getComingSoonServices } from '../data/micro-saas-services';
import { Search, Filter, Star, TrendingUp, Zap, Clock, Shield, ExternalLink } from 'lucide-react';

export default function EnhancedMicroSAAS() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = useMemo(() => {
    let services = microSAASServices;

    // Filter by tab
    switch (activeTab) {
      case 'live':
        services = getLiveServices();
        break;
      case 'beta':
        services = getBetaServices();
        break;
      case 'coming-soon':
        services = getComingSoonServices();
        break;
      default:
        services = microSAASServices;
    }

    // Filter by category
    if (selectedCategory !== 'All') {
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
    switch (sortBy) {
      case 'popularity':
        services = services.sort((a, b) => (b.users || 0) - (a.users || 0));
        break;
      case 'rating':
        services = services.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'price-low':
        services = services.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        services = services.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'name':
        services = services.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return services;
  }, [searchTerm, selectedCategory, sortBy, activeTab]);

  const stats = useMemo(() => {
    const live = getLiveServices().length;
    const beta = getBetaServices().length;
    const comingSoon = getComingSoonServices().length;
    const totalUsers = microSAASServices.reduce((sum, service) => sum + (service.users || 0), 0);
    const avgRating = microSAASServices.reduce((sum, service) => sum + (service.rating || 0), 0) / microSAASServices.length;

    return { live, beta, comingSoon, totalUsers, avgRating };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SAAS services designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, business automation, productivity tools, AI services, workflow automation" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Powerful, focused tools that solve specific business problems
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span>{stats.live} Live Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>{stats.totalUsers.toLocaleString()}+ Users</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>{stats.avgRating.toFixed(1)} Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                All Services
              </TabsTrigger>
              <TabsTrigger value="live" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Live ({stats.live})
              </TabsTrigger>
              <TabsTrigger value="beta" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Beta ({stats.beta})
              </TabsTrigger>
              <TabsTrigger value="coming-soon" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Coming Soon ({stats.comingSoon})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <MicroSAASCard
              key={service.id}
              title={service.title}
              description={service.description}
              category={service.category}
              pricing={service.pricing}
              features={service.features}
              tags={service.tags}
              demoUrl={service.demoUrl}
              documentationUrl={service.documentationUrl}
              githubUrl={service.githubUrl}
              status={service.status}
              rating={service.rating}
              users={service.users}
              onTryDemo={() => {
                if (service.demoUrl) {
                  window.open(service.demoUrl, '_blank');
                }
              }}
              onViewDetails={() => {
                // Navigate to service details page
                console.log('View details for:', service.id);
              }}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No services found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSortBy('popularity');
                setActiveTab('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We can build a custom micro SAAS service tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <a href="/contact">
                Get Custom Quote
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <a href="/about">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}