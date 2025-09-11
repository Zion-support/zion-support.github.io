import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
import { ;
  COMPREHENSIVE_NEW_SERVICES_2025,;
  getNewServiceStats,;
  getNewServicesByType,;
  getNewServicesByCategory,;
  searchNewServices,;
  getFeaturedNewServices,;
  getTrendingNewServices,;
  getNewServicesWithFreeTier,;
  getNewBetaAccessServices,;
  NEW_SERVICE_CATEGORIES,;
  NEW_SERVICE_TYPES,;
  NEW_PRICING_TIERS,;
  NEW_INNOVATION_LEVELS,;
  NEW_SUPPORT_LEVELS;
} from '../data/comprehensiveNewServices2025';
import { ;
  Search, ;
  Filter, ;
  Star, ;
  Zap, ;
  Shield, ;
  TrendingUp, ;
  Clock, ;
  Users, ;
  DollarSign,;
  Phone,;
  Mail,;
  Globe,;
  MapPin,;
  CheckCircle,;
  ArrowRight,;
  Brain,;
  Server,;
  Smartphone,;
  Sparkles,;
  Rocket;
} from 'lucide-react';
;
const "ComprehensiveNewServicesShowcase2025": "React.FC = () => {;
  const [searchTerm", setSearchTerm] = useState('');
import {
  COMPREHENSIVE_NEW_SERVICES_2025,
  getNewServiceStats,
  getNewServicesByType,
  getNewServicesByCategory,
  searchNewServices,
  getFeaturedNewServices,
  getTrendingNewServices,
  getNewServicesWithFreeTier,
  getNewBetaAccessServices,
  NEW_SERVICE_CATEGORIES,
  NEW_SERVICE_TYPES,
  NEW_PRICING_TIERS,
  NEW_INNOVATION_LEVELS,
  NEW_SUPPORT_LEVELS
} from '../data/comprehensiveNewServices2025';
import {
  Search,
  Filter,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Phone,
  Mail,
  Globe,
  MapPin,
  CheckCircle,
  ArrowRight,
  Brain,
  Server,
  Smartphone,
  Sparkles,
  Rocket
} from 'lucide-react';
const "ComprehensiveNewServicesShowcase2025": React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(");
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
;
  const stats = getNewServiceStats();
;
  const filteredServices = useMemo(() => {;
    let services = COMPREHENSIVE_NEW_SERVICES_2025;
;
    if (searchTerm) {;
      services = searchNewServices(searchTerm);
    }
;
    if (selectedCategory !== 'all') {;
      services = services.filter(service => ;
        service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      );
    }
;
    if (selectedType !== 'all') {;
      const "serviceTypeMap": "{ ["key": string]: 'Micro SAAS' | 'IT Services' | 'AI Services' "} = {;
        'micro-saas': 'Micro SAAS',;
        'it-services': 'IT Services',;
        'ai-services': 'AI Services';
      };
      services = services.filter(service => ;
        service.serviceType === serviceTypeMap[selectedType];
      );
    }
;
    if (selectedPriceRange !== 'all') {;
      const "priceRanges": "{ ["key": string]: [number", number] } = {;
        'budget': "[0", 299],;
        'mid-range': "[300", 999],;
        'premium': "[1000", 2499],;
        'enterprise': "[2500", 999999];
  const stats = getNewServiceStats();
  const filteredServices = useMemo(() => {
    let services = COMPREHENSIVE_NEW_SERVICES_2025;
    if (searchTerm) {
      services = searchNewServices(searchTerm);
    }
    if (selectedCategory !== 'all') {
      services = services.filter(service =>
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    if (selectedType !== 'all') {
      const "serviceTypeMap": { [key: string]: 'Micro SAAS' | 'IT Services' | 'AI Services' } = {
        'micro-saas': 'Micro SAAS',
        'it-services': 'IT Services',
        'ai-services': 'AI Services'
      };
      services = services.filter(service =>
        service.serviceType === serviceTypeMap[selectedType]
      );
    }
    if (selectedPriceRange !== 'all') {
      const "priceRanges": { [key: string]: [number, number] } = {
        'budget': [0, 299],
        'mid-range': [300, 999],
        'premium': [1000, 2499],
        'enterprise': [2500, 999999]
      };
      const [min, max] = priceRanges[selectedPriceRange] || [0, 999999];
      services = services.filter(service => service.price >= min && service.price <= max);
    }
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
;
    if (selectedInnovationLevel !== 'all') {;
      services = services.filter(service => ;
        service.innovationLevel.toLowerCase() === selectedInnovationLevel;
      );
    }
;
    if (selectedSupportLevel !== 'all') {;
      services = services.filter(service => ;
        service.supportLevel.toLowerCase() === selectedSupportLevel;
      );
    }
;
    return services;
  }, [searchTerm, selectedCategory, selectedType, selectedPriceRange, selectedInnovationLevel, selectedSupportLevel]);
;
  const getServiceIcon = ("serviceType": "string) => {;
    switch (serviceType) {;
    if (selectedInnovationLevel !== 'all') {
      services = services.filter(service =>
        service.innovationLevel.toLowerCase() === selectedInnovationLevel
      );
    }
    if (selectedSupportLevel !== 'all') {
      services = services.filter(service =>
        service.supportLevel.toLowerCase() === selectedSupportLevel
      );
    }
    return services;
  }, [searchTerm, selectedCategory, selectedType, selectedPriceRange, selectedInnovationLevel, selectedSupportLevel]);
  const getServiceIcon = ("serviceType": string) => {
    switch (serviceType) {
      case 'Micro SAAS': return Smartphone;
      case 'AI Services': return Brain;
      case 'IT Services': return Server;
      "default": return Sparkles;
    "}
  };
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
;
  const getInnovationLevelColor = ("level": "string) => {;
    switch (level.toLowerCase()) {;
  const getInnovationLevelColor = ("level": string) => {
    switch (level.toLowerCase()) {
      case 'cutting-edge': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard': return 'bg-green-100 text-green-800 border-green-200';
      "default": return 'bg-gray-100 text-gray-800 border-gray-200';
    "}
  };
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
;
  const getSupportLevelColor = ("level": "string) => {;
    switch (level.toLowerCase()) {;
  const getSupportLevelColor = ("level": string) => {
    switch (level.toLowerCase()) {
      case 'enterprise': return 'bg-red-100 text-red-800 border-red-200';
      case 'premium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'standard': return 'bg-green-100 text-green-800 border-green-200';
      "default": return 'bg-gray-100 text-gray-800 border-gray-200';
    "}
  };
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
;
  return (;
    <div className="min-h-screen bg-gray-50">;
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center">;
            <h1 className="text-4xl "md": "text-6xl font-bold mb-6">;
              Revolutionary Technology Services 2025;
            </h1>;
            <p className="text-xl "md":text-2xl mb-8 max-w-4xl mx-auto">;
              Discover our cutting-edge portfolio of innovative micro SAAS services", AI-powered solutions, and advanced IT infrastructure designed to transform your business.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4 mb-8">;
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
                <div className="text-2xl font-bold">{stats.totalServices}</div>;
                <div className="text-sm opacity-90">Innovative Services</div>;
              </div>;
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
                <div className="text-2xl font-bold">{stats.cuttingEdgeServices}</div>;
                <div className="text-sm opacity-90">Cutting-Edge Solutions</div>;
              </div>;
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
                <div className="text-2xl font-bold">{stats.categories}</div>;
                <div className="text-sm opacity-90">Service Categories</div>;
              </div>;
            </div>;
            <div className="flex flex-col "sm": "flex-row gap-4 justify-center">;
              <Button size="lg" className="bg-white text-blue-900 "hover":bg-gray-100">;
                <Phone className="w-5 h-5 mr-2" />;
                +1 302 464 0950;
              </Button>;
              <Button size="lg" variant="outline" className="border-white text-white "hover":bg-white "hover":text-blue-900">;
                <Mail className="w-5 h-5 mr-2" />;
                kleber@ziontechgroup.com;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filters */"}
      <div className="bg-white border-b border-gray-200 py-8">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-6 gap-4">;
            <div className=""lg":col-span-2">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />;
                <Input;
                  placeholder="Search services...";
                  value={searchTerm"}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10";
                />;
              </div>;
            </div>;
            ;
            <Select value={selectedType} onValueChange={setSelectedType}>;
              <SelectTrigger>;
                <SelectValue placeholder="Service Type" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="all">All Types</SelectItem>;
                {NEW_SERVICE_TYPES.map(type => (;
                  <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl "md": text-6xl font-bold mb-6">
              Revolutionary Technology Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of innovative micro SAAS services, AI-powered solutions, and advanced IT infrastructure designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">{stats.totalServices}</div>
                <div className="text-sm opacity-90">Innovative Services</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">{stats.cuttingEdgeServices}</div>
                <div className="text-sm opacity-90">Cutting-Edge Solutions</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">{stats.categories}</div>
                <div className="text-sm opacity-90">Service Categories</div>
              </div>
            </div>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
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
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {NEW_SERVICE_TYPES.map(type => (
                  <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                    {type}
                  </SelectItem>;
                ))}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
              </SelectContent>;
            </Select>;
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
              <SelectTrigger>;
                <SelectValue placeholder="Category" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="all">All Categories</SelectItem>;
                {NEW_SERVICE_CATEGORIES.map(category => (;
                  <SelectItem key={category} value={category}>;
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {NEW_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>;
                ))}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
              </SelectContent>;
            </Select>;
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>;
              <SelectTrigger>;
                <SelectValue placeholder="Price Range" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="all">All Prices</SelectItem>;
                {NEW_PRICING_TIERS.map(tier => (;
                  <SelectItem key={tier.id} value={tier.id}>;
                    {tier.name} (${tier.min}-{tier.max === 999999 ? '∞' : "tier.max"});
                  </SelectItem>;
                ))}
              </SelectContent>;
            </Select>;
            <Select value={selectedInnovationLevel} onValueChange={setSelectedInnovationLevel}>;
              <SelectTrigger>;
                <SelectValue placeholder="Innovation Level" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="all">All Levels</SelectItem>;
                {NEW_INNOVATION_LEVELS.map(level => (;
                  <SelectItem key={level} value={level.toLowerCase()}>;
              </SelectContent>
            </Select>
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                {NEW_PRICING_TIERS.map(tier => (
                  <SelectItem key={tier.id} value={tier.id}>
                    {tier.name} (${tier.min}-{tier.max === 999999 ? '∞' : tier.max})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedInnovationLevel} onValueChange={setSelectedInnovationLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Innovation Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {NEW_INNOVATION_LEVELS.map(level => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>;
                ))}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
              </SelectContent>;
            </Select>;
            <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>;
              <SelectTrigger>;
                <SelectValue placeholder="Support Level" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="all">All Support</SelectItem>;
                {NEW_SUPPORT_LEVELS.map(level => (;
                  <SelectItem key={level} value={level.toLowerCase()}>;
              </SelectContent>
            </Select>
            <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Support Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Support</SelectItem>
                {NEW_SUPPORT_LEVELS.map(level => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>;
                ))}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
              </SelectContent>;
            </Select>;
          </div>;
        </div>;
      </div>;
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">;
        <div className="mb-8">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            {filteredServices.length} Services Found;
          </h2>;
          <p className="text-gray-600">;
            Discover innovative solutions tailored to your business needs;
          </p>;
        </div>;
        <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-8">;
          {filteredServices.map((service) => {;
            const ServiceIcon = getServiceIcon(service.serviceType);
            return (;
              <Card key={service.id"} className=""hover": "shadow-lg transition-shadow duration-300">;
                <CardHeader>;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">;
                      <ServiceIcon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex gap-2">;
                      <Badge className={getInnovationLevelColor(service.innovationLevel)"}>;
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {filteredServices.length} Services Found
          </h2>
          <p className="text-gray-600">
            Discover innovative solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const ServiceIcon = getServiceIcon(service.serviceType);
            return (
              <Card key={service.id} className=""hover": shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getInnovationLevelColor(service.innovationLevel)}>
                        {service.innovationLevel}
                      </Badge>;
                      {service.betaAccess && (;
                        <Badge className="bg-orange-100 text-orange-800 border-orange-200">;
                          Beta;
                        </Badge>;
                      )}
                    </div>;
                  </div>;
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>;
                  <CardDescription className="text-gray-600 mb-4">;
                    {service.description}
                  </CardDescription>;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-2xl font-bold text-blue-600">;
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm font-normal text-gray-500">/{service.pricingModel}</span>;
                    </div>;
                    <Badge className={getSupportLevelColor(service.supportLevel)}>;
                      {service.supportLevel}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
                    </Badge>;
                  </div>;
                </CardHeader>;
                <CardContent>;
                  <div className="space-y-4">;
                    <div>;
                      <h4 className="font-semibold text-gray-900 mb-2">Key "Features": "</h4>;
                      <ul className="text-sm text-gray-600 space-y-1">;
                        {service.features.slice(0", 3).map((feature, index) => (;
                          <li key={index} className="flex items-center">;
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key "Features": </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>;
                        ))}
                        {service.features.length > 3 && (;
                          <li className="text-blue-600 text-sm">;
                            +{service.features.length - 3} more features;
                          </li>;
                        )}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
                      </ul>;
                    </div>;
                    <div>;
                      <h4 className="font-semibold text-gray-900 mb-2">"ROI": "</h4>;
                      <p className="text-sm text-green-600 font-medium">{service.roi"}</p>;
                    </div>;
                    <div className="flex items-center justify-between text-sm text-gray-500">;
                      <div className="flex items-center">;
                        <Clock className="w-4 h-4 mr-1" />;
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">"ROI": </h4>
                      <p className="text-sm text-green-600 font-medium">{service.roi}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.estimatedDelivery}
                      </div>;
                      <div className="flex items-center">;
                        <TrendingUp className="w-4 h-4 mr-1" />;
                        {service.growthRate}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
                      </div>;
                    </div>;
                    <div className="pt-4 border-t border-gray-200">;
                      <div className="flex flex-col "sm": "flex-row gap-2">;
                        <Button className="flex-1 bg-blue-600 "hover":bg-blue-700">;
                          Learn More;
                          <ArrowRight className="w-4 h-4 ml-2" />;
                        </Button>;
                        <Button variant="outline" className="flex-1">;
                          Contact Sales;
                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardContent>;
              </Card>;
            );
          "})}
        </div>;
        {filteredServices.length === 0 && (;
          <div className="text-center py-12">;
            <div className="text-gray-400 mb-4">;
              <Search className="w-16 h-16 mx-auto" />;
            </div>;
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;
            <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>;
            <Button onClick={() => {;
              setSearchTerm('');
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex flex-col "sm": flex-row gap-2">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
            <Button onClick={() => {
              setSearchTerm(");
              setSelectedCategory('all');
              setSelectedType('all');
              setSelectedPriceRange('all');
              setSelectedInnovationLevel('all');
              setSelectedSupportLevel('all');
            }}>;
              Clear Filters;
            </Button>;
          </div>;
        )}
:src/pages/ComprehensiveNewServicesShowcase2025.tsx
      </div>;
      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center">;
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Contact our experts to discuss how our innovative services can drive your success.;
            </p>;
            <div className="grid grid-cols-1 "md": "grid-cols-3 gap-8 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Phone className="w-6 h-6" />;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>;
                <a href=""tel":+13024640950" className="text-blue-400 "hover":text-blue-300">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Mail className="w-6 h-6" />;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>;
                <a href=""mailto":kleber@ziontechgroup.com" className="text-blue-400 "hover":text-blue-300">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <MapPin className="w-6 h-6" />;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;
                <p className="text-gray-300">;
                  364 E Main St STE 1008<br />;
                  Middletown", DE 19709;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;
export default ComprehensiveNewServicesShowcase2025;
      </div>
      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss how our innovative services can drive your success.
            </p>
            <div className="grid grid-cols-1 "md": grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComprehensiveNewServicesShowcase2025;
import React,{ useState,useMemo } from 'react'; import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '../components/ui/card'; import { Badge } from '../components/ui/badge'; import { Button } from '../components/ui/button'; import { Input } from '../components/ui/input'; import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from '../components/ui/select'; import { Tabs,TabsContent,TabsList,TabsTrigger } from '../components/ui/tabs'; import { COMPREHENSIVE_NEW_SERVICES_2025,getNewServiceStats,getNewServicesByType,getNewServicesByCategory,searchNewServices,getFeaturedNewServices,getTrendingNewServices,getNewServicesWithFreeTier,getNewBetaAccessServices,NEW_SERVICE_CATEGORIES,NEW_SERVICE_TYPES,NEW_PRICING_TIERS,NEW_INNOVATION_LEVELS,NEW_SUPPORT_LEVELS } from '../data/comprehensiveNewServices2025'; import { Search,Filter,Star,Zap,Shield,TrendingUp,Clock,Users,DollarSign,Phone,Mail,Globe,MapPin,CheckCircle,ArrowRight,Brain,Server,Smartphone,Sparkles,Rocket } from 'lucide-react'; const ComprehensiveNewServicesShowcase2025: React.FC = () => { const [searchTerm,setSearchTerm] = useState("); const [selectedCategory,setSelectedCategory] = useState('all'); const [selectedType,setSelectedType] = useState('all'); const [selectedPriceRange,setSelectedPriceRange] = useState('all'); const [selectedInnovationLevel,setSelectedInnovationLevel] = useState('all'); const [selectedSupportLevel,setSelectedSupportLevel] = useState('all'); const stats = getNewServiceStats(); const filteredServices = useMemo(() => { let services = COMPREHENSIVE_NEW_SERVICES_2025; if (searchTerm) { services = searchNewServices(searchTerm)} if (selectedCategory !== 'all') { services = services.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()) )} if (selectedType !== 'all') { const serviceTypeMap: { [key: string]: 'Micro SAAS' | 'IT Services' | 'AI Services' } = { 'micro-saas': 'Micro SAAS','it-services': 'IT Services','ai-services': 'AI Services' };; services = services.filter(service => service.serviceType === serviceTypeMap[selectedType] )} if (selectedPriceRange !== 'all') { const priceRanges: { [key: string]: [number,number] } = { 'budget': [0,299],'mid-range': [300,999],'premium': [1000,2499],'enterprise': [2500,999999] };; const [min,max] = priceRanges[selectedPriceRange] || [0,999999]; services = services.filter(service => service.price >= min && service.price <= max)} if (selectedInnovationLevel !== 'all') { services = services.filter(service => service.innovationLevel.toLowerCase() === selectedInnovationLevel )} if (selectedSupportLevel !== 'all') { services = services.filter(service => service.supportLevel.toLowerCase() === selectedSupportLevel )} return services},[searchTerm,selectedCategory,selectedType,selectedPriceRange,selectedInnovationLevel,selectedSupportLevel]); const getServiceIcon = (serviceType: string) => { switch (serviceType) { case 'Micro SAAS': return Smartphone; case 'AI Services': return Brain; case 'IT Services': return Server; default: return Sparkles} }; const getInnovationLevelColor = (level: string) => { switch (level.toLowerCase()) { case 'cutting-edge': return 'bg-purple-100 text-purple-800 border-purple-200'; case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200'; case 'standard': return 'bg-green-100 text-green-800 border-green-200'; default: return 'bg-gray-100 text-gray-800 border-gray-200'} }; const getSupportLevelColor = (level: string) => { switch (level.toLowerCase()) { case 'enterprise': return 'bg-red-100 text-red-800 border-red-200'; case 'premium': return 'bg-orange-100 text-orange-800 border-orange-200'; case 'standard': return 'bg-green-100 text-green-800 border-green-200'; default: return 'bg-gray-100 text-gray-800 border-gray-200'} }; return ( <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="container mx-auto px-4"> <div className="text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> Revolutionary Technology Services 2025 </h1> <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"> Discover our cutting-edge portfolio of innovative micro SAAS services,AI-powered solutions,and advanced IT infrastructure designed to transform your business. </p> <div className="flex flex-wrap justify-center gap-4 mb-8"> <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3"> <div className="text-2xl font-bold">{stats.totalServices}</div> <div className="text-sm opacity-90">Innovative Services</div> </div> <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3"> <div className="text-2xl font-bold">{stats.cuttingEdgeServices}</div> <div className="text-sm opacity-90">Cutting-Edge Solutions</div> </div> <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3"> <div className="text-2xl font-bold">{stats.categories}</div> <div className="text-sm opacity-90">Service Categories</div> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100"> <Phone className="w-5 h-5 mr-2" /> +1 302 464 0950 </Button> <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900"> <Mail className="w-5 h-5 mr-2" /> kleber@ziontechgroup.com </Button> </div> </div> </div> </div> {} <div className="bg-white border-b border-gray-200 py-8"> <div className="container mx-auto px-4"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"> <div className="lg:col-span-2"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> <Input placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /> </div> </div> <Select value={selectedType} onValueChange={setSelectedType}> <SelectTrigger> <SelectValue placeholder="Service Type" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Types</SelectItem> {NEW_SERVICE_TYPES.map(type => ( <SelectItem key={type} value={type.toLowerCase().replace(' ','-')}> {type} </SelectItem> ))} </SelectContent> </Select> <Select value={selectedCategory} onValueChange={setSelectedCategory}> <SelectTrigger> <SelectValue placeholder="Category" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Categories</SelectItem> {NEW_SERVICE_CATEGORIES.map(category => ( <SelectItem key={category} value={category}> {category} </SelectItem> ))} </SelectContent> </Select> <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}> <SelectTrigger> <SelectValue placeholder="Price Range" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Prices</SelectItem> {NEW_PRICING_TIERS.map(tier => ( <SelectItem key={tier.id} value={tier.id}> {tier.name} (${tier.min}-{tier.max === 999999 ? '∞' : tier.max}) </SelectItem> ))} </SelectContent> </Select> <Select value={selectedInnovationLevel} onValueChange={setSelectedInnovationLevel}> <SelectTrigger> <SelectValue placeholder="Innovation Level" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Levels</SelectItem> {NEW_INNOVATION_LEVELS.map(level => ( <SelectItem key={level} value={level.toLowerCase()}> {level} </SelectItem> ))} </SelectContent> </Select> <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}> <SelectTrigger> <SelectValue placeholder="Support Level" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Support</SelectItem> {NEW_SUPPORT_LEVELS.map(level => ( <SelectItem key={level} value={level.toLowerCase()}> {level} </SelectItem> ))} </SelectContent> </Select> </div> </div> </div> {} <div className="container mx-auto px-4 py-12"> <div className="mb-8"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> {filteredServices.length} Services Found </h2> <p className="text-gray-600"> Discover innovative solutions tailored to your business needs </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {filteredServices.map((service) => { const ServiceIcon = getServiceIcon(service.serviceType); return ( <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300"> <CardHeader> <div className="flex items-center justify-between mb-4"> <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"> <ServiceIcon className="w-6 h-6 text-white" /> </div> <div className="flex gap-2"> <Badge className={getInnovationLevelColor(service.innovationLevel)}> {service.innovationLevel} </Badge> {service.betaAccess && ( <Badge className="bg-orange-100 text-orange-800 border-orange-200"> Beta </Badge> )} </div> </div> <CardTitle className="text-xl mb-2">{service.title}</CardTitle> <CardDescription className="text-gray-600 mb-4"> {service.description} </CardDescription> <div className="flex items-center justify-between mb-4"> <div className="text-2xl font-bold text-blue-600"> {service.currency}{service.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">/{service.pricingModel}</span> </div> <Badge className={getSupportLevelColor(service.supportLevel)}> {service.supportLevel} </Badge> </div> </CardHeader> <CardContent> <div className="space-y-4"> <div> <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4> <ul className="text-sm text-gray-600 space-y-1"> {service.features.slice(0,3).map((feature,index) => ( <li key={index} className="flex items-center"> <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {feature} </li> ))} {service.features.length > 3 && ( <li className="text-blue-600 text-sm"> +{service.features.length - 3} more features </li> )} </ul> </div> <div> <h4 className="font-semibold text-gray-900 mb-2">ROI:</h4> <p className="text-sm text-green-600 font-medium">{service.roi}</p> </div> <div className="flex items-center justify-between text-sm text-gray-500"> <div className="flex items-center"> <Clock className="w-4 h-4 mr-1" /> {service.estimatedDelivery} </div> <div className="flex items-center"> <TrendingUp className="w-4 h-4 mr-1" /> {service.growthRate} </div> </div> <div className="pt-4 border-t border-gray-200"> <div className="flex flex-col sm:flex-row gap-2"> <Button className="flex-1 bg-blue-600 hover:bg-blue-700"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </Button> <Button variant="outline" className="flex-1"> Contact Sales </Button> </div> </div> </div> </CardContent> </Card> )})} </div> {filteredServices.length === 0 && ( <div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-16 h-16 mx-auto" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3> <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p> <Button onClick={() => { setSearchTerm("); setSelectedCategory('all'); setSelectedType('all'); setSelectedPriceRange('all'); setSelectedInnovationLevel('all'); setSelectedSupportLevel('all')}}> Clear Filters </Button> </div> )} </div> {} <div className="bg-gray-900 text-white py-16"> <div className="container mx-auto px-4"> <div className="text-center"> <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Contact our experts to discuss how our innovative services can drive your success. </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"> <div className="text-center"> <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"> <Phone className="w-6 h-6" /> </div> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300"> +1 302 464 0950 </a> </div> <div className="text-center"> <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"> <Mail className="w-6 h-6" /> </div> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300"> kleber@ziontechgroup.com </a> </div> <div className="text-center"> <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"> <MapPin className="w-6 h-6" /> </div> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-gray-300"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> </div> </div> </div> </div> </div> </div> )}; export default ComprehensiveNewServicesShowcase2025;