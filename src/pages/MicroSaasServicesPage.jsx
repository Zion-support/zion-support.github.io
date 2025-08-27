import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube } from 'lucide-react';

const MicroSaasServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Mock data for demonstration
  const services = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence platform with machine learning insights",
      category: "AI & Analytics",
      pricing: "subscription",
      price: 299,
      rating: 4.8,
      aiScore: 95,
      features: ["Real-time data", "ML predictions", "Custom reports", "API access"]
    },
    {
      id: 2,
      title: "IoT Device Management",
      description: "Comprehensive IoT device monitoring and management solution",
      category: "IoT & Edge",
      pricing: "usage-based",
      price: 0.05,
      rating: 4.6,
      aiScore: 88,
      features: ["Device monitoring", "Remote control", "Data analytics", "Security"]
    },
    {
      id: 3,
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain tracking using blockchain technology",
      category: "Blockchain",
      pricing: "enterprise",
      price: 5000,
      rating: 4.9,
      aiScore: 92,
      features: ["Smart contracts", "Traceability", "Audit trails", "Multi-party access"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Globe className="w-4 h-4"/>, count: services.length },
    { id: 'ai', name: 'AI & Analytics', icon: <Brain className="w-4 h-4"/>, count: 1 },
    { id: 'iot', name: 'IoT & Edge', icon: <Network className="w-4 h-4"/>, count: 1 },
    { id: 'blockchain', name: 'Blockchain', icon: <Cube className="w-4 h-4"/>, count: 1 }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Pricing' },
    { id: 'subscription', name: 'Subscription' },
    { id: 'usage-based', name: 'Usage-Based' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory);
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const ServiceCard = ({ service }) => (
    <Card className="bg-zion-blue-dark border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-zion-purple"/>
            </div>
            <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
              {service.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              ${service.price}
            </div>
            <div className="text-sm text-zion-slate-light capitalize">
              per {service.pricing}
            </div>
          </div>
        </div>
        
        <CardTitle className="text-xl text-white group-hover:text-zion-purple transition-colors">
          {service.title}
        </CardTitle>
        
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-zion-slate-light">
            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current"/>
            {service.rating} ({service.aiScore} AI Score)
          </div>
          <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            AI-Powered
          </Badge>
        </div>

        <div>
          <h4 className="font-medium text-white mb-3">Key Features</h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-zion-slate-light">
                <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0"/>
                <span>{feature}</span>
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-sm text-zion-cyan font-medium">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

                  <div className="flex space-x-2">
            <Button variant="outline" className="flex-1 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white">
              Learn More
            </Button>
          <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our innovative micro SAAS solutions designed to transform your business operations. 
            From AI-powered analytics to blockchain solutions, we have the tools you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">{services.length}+</div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple">4.8</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">95%</div>
              <div className="text-zion-slate-light">AI Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-16 z-40 bg-zion-slate-dark/80 backdrop-blur-md border-b border-zion-blue-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4"/>
                <Input 
                  placeholder="Search services..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="pl-10 bg-zion-blue-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category.id} 
                  variant={selectedCategory === category.id ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setSelectedCategory(category.id)} 
                  className={selectedCategory === category.id
                    ? "bg-zion-purple text-white"
                    : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-purple hover:text-zion-purple"
                  }
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-zion-blue-light/20 text-zion-slate-light">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Pricing Filter */}
            <div className="flex gap-2">
              {pricingModels.map((model) => (
                <Button 
                  key={model.id} 
                  variant={selectedPricing === model.id ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setSelectedPricing(model.id)} 
                  className={selectedPricing === model.id
                    ? "bg-zion-cyan text-white"
                    : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan"
                  }
                >
                  {model.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="bg-zion-blue-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 text-sm focus:border-zion-purple focus:outline-none"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or filters</p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPricing('all');
              }} 
              className="bg-zion-purple text-white hover:bg-zion-purple-light"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-zion-slate-light">
                Showing <span className="text-zion-cyan font-medium">{filteredServices.length}</span> of{' '}
                <span className="text-zion-cyan font-medium">{services.length}</span> services
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <ServiceCard key={service.id} service={service}/>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-light hover:to-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2"/>
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Mail className="w-5 h-5 mr-2"/>
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServicesPage;
