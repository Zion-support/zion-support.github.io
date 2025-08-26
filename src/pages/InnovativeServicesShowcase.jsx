import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube, Award, ShieldCheck } from 'lucide-react';

const InnovativeServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Mock data for demonstration
  const services = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      description: "Advanced analytics platform with machine learning capabilities for business intelligence",
      category: "AI & Analytics",
      price: 15000,
      currency: "$",
      pricingModel: "month",
      estimatedDelivery: "2-4 weeks",
      supportLevel: "24/7 Premium",
      features: ["Real-time analytics", "ML predictions", "Custom dashboards", "API integration"]
    },
    {
      id: 2,
      title: "IoT Edge Computing Solution",
      description: "Edge computing platform for IoT devices with real-time processing capabilities",
      category: "IoT & Edge Computing",
      price: 25000,
      currency: "$",
      pricingModel: "month",
      estimatedDelivery: "4-6 weeks",
      supportLevel: "Business Hours",
      features: ["Edge processing", "Device management", "Data analytics", "Security protocols"]
    },
    {
      id: 3,
      title: "Blockchain Supply Chain Platform",
      description: "Transparent and secure supply chain management using blockchain technology",
      category: "Blockchain & Web3",
      price: 30000,
      currency: "$",
      pricingModel: "month",
      estimatedDelivery: "6-8 weeks",
      supportLevel: "24/7 Enterprise",
      features: ["Smart contracts", "Traceability", "Audit trails", "Multi-party access"]
    }
  ];

  const categories = ["AI & Analytics", "IoT & Edge Computing", "Blockchain & Web3", "Cybersecurity", "Green Technology"];

  const getCategoryIcon = (category) => {
    const categoryIcons = {
      'AI & Analytics': <Brain className="h-5 w-5 text-blue-600"/>,
      'IoT & Edge Computing': <Network className="h-5 w-5 text-green-600"/>,
      'Blockchain & Web3': <Cube className="h-5 w-5 text-purple-600"/>,
      'Cybersecurity': <Shield className="h-5 w-5 text-red-600"/>,
      'Green Technology': <Leaf className="h-5 w-5 text-emerald-600"/>
    };
    return categoryIcons[category] || <Zap className="h-5 w-5 text-gray-600"/>;
  };

  const getPriceRangeColor = (price) => {
    if (price < 15000) return 'bg-green-100 text-green-800 border-green-200';
    if (price < 25000) return 'bg-blue-100 text-blue-800 border-blue-200';
    return 'bg-purple-100 text-purple-800 border-purple-200';
  };

  const getPriceRangeLabel = (price) => {
    if (price < 15000) return 'Starter';
    if (price < 25000) return 'Professional';
    return 'Enterprise';
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && service.price < 15000) ||
                        (priceRange === 'medium' && service.price >= 15000 && service.price < 25000) ||
                        (priceRange === 'high' && service.price >= 25000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2"/>
                <span>{services.length}+ Services</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2"/>
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2"/>
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
                <Input 
                  placeholder="Search services..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="pl-10"
                />
              </div>
              
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $15K</option>
                <option value="medium">$15K - $25K</option>
                <option value="high">$25K+</option>
              </select>

              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(service.category)}
                      <Badge className={getPriceRangeColor(service.price)}>
                        {getPriceRangeLabel(service.price)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1"/>
                        {service.estimatedDelivery}
                      </span>
                      <span className="flex items-center">
                        <ShieldCheck className="w-4 h-4 mr-1"/>
                        {service.supportLevel}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" variant="outline">
                        Learn More
                      </Button>
                      <Button className="flex-1">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our innovative services help you stay ahead of the competition and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2"/>
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2"/>
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase;
