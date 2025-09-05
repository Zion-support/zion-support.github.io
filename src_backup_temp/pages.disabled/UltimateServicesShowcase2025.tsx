import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
:src/pages/UltimateServicesShowcase2025.tsx
import { ;
  ULTIMATE_COMPREHENSIVE_SERVICES_2025,;
  getUltimateServiceStats,;
  getUltimateServicesByType,;
  getUltimateServicesByCategory,;
  searchUltimateServices,;
  getFeaturedUltimateServices,;
  getTrendingUltimateServices,;
  getUltimateServicesWithFreeTier,;
  getUltimateBetaAccessServices,;
  ULTIMATE_SERVICE_CATEGORIES,;
  SERVICE_TYPES,;
  ULTIMATE_PRICING_TIERS,;
  ULTIMATE_INNOVATION_LEVELS,;
  ULTIMATE_SUPPORT_LEVELS;
} from '../data/ultimateComprehensiveServices2025';
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
  ArrowRight;
} from 'lucide-react';
;
const "UltimateServicesShowcase2025": "React.FC = () => {;
  const [searchTerm", setSearchTerm] = useState('');
import {
  ULTIMATE_COMPREHENSIVE_SERVICES_2025,
  getUltimateServiceStats,
  getUltimateServicesByType,
  getUltimateServicesByCategory,
  searchUltimateServices,
  getFeaturedUltimateServices,
  getTrendingUltimateServices,
  getUltimateServicesWithFreeTier,
  getUltimateBetaAccessServices,
  ULTIMATE_SERVICE_CATEGORIES,
  SERVICE_TYPES,
  ULTIMATE_PRICING_TIERS,
  ULTIMATE_INNOVATION_LEVELS,
  ULTIMATE_SUPPORT_LEVELS
} from '../data/ultimateComprehensiveServices2025';
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
  ArrowRight
} from 'lucide-react';
const "UltimateServicesShowcase2025": React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(");
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
:src/pages/UltimateServicesShowcase2025.tsx
;
  const stats = getUltimateServiceStats();
;
  const filteredServices = useMemo(() => {;
    let services = ULTIMATE_COMPREHENSIVE_SERVICES_2025;
;
    if (searchTerm) {;
      services = searchUltimateServices(searchTerm);
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
        'budget': "[1000", 2999],;
        'mid-range': "[3000", 6999],;
        'enterprise': "[7000", 999999];
  const stats = getUltimateServiceStats();
  const filteredServices = useMemo(() => {
    let services = ULTIMATE_COMPREHENSIVE_SERVICES_2025;
    if (searchTerm) {
      services = searchUltimateServices(searchTerm);
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
        'budget': [1000, 2999],
        'mid-range': [3000, 6999],
        'enterprise': [7000, 999999]
      };
      const [min, max] = priceRanges[selectedPriceRange] || [0, 999999];
      services = services.filter(service => service.price >= min && service.price <= max);
    }
:src/pages/UltimateServicesShowcase2025.tsx
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
  const featuredServices = getFeaturedUltimateServices(6);
  const trendingServices = getTrendingUltimateServices(6);
  const freeTierServices = getUltimateServicesWithFreeTier();
  const betaAccessServices = getUltimateBetaAccessServices();
:src/pages/UltimateServicesShowcase2025.tsx
;
  const getServiceTypeColor = ("serviceType": "string) => {;
    switch (serviceType) {;
  const getServiceTypeColor = ("serviceType": string) => {
    switch (serviceType) {
      case 'Micro SAAS': return 'bg-blue-100 text-blue-800';
      case 'IT Services': return 'bg-green-100 text-green-800';
      case 'AI Services': return 'bg-purple-100 text-purple-800';
      "default": return 'bg-gray-100 text-gray-800';
    "}
  };
:src/pages/UltimateServicesShowcase2025.tsx
;
  const getInnovationLevelColor = ("level": "string) => {;
    switch (level.toLowerCase()) {;
  const getInnovationLevelColor = ("level": string) => {
    switch (level.toLowerCase()) {
      case 'revolutionary': return 'bg-red-100 text-red-800';
      case 'cutting-edge': return 'bg-orange-100 text-orange-800';
      case 'advanced': return 'bg-yellow-100 text-yellow-800';
      "default": return 'bg-gray-100 text-gray-800';
    "}
  };
:src/pages/UltimateServicesShowcase2025.tsx
;
  const getSupportLevelColor = ("level": "string) => {;
    switch (level.toLowerCase()) {;
  const getSupportLevelColor = ("level": string) => {
    switch (level.toLowerCase()) {
      case 'enterprise': return 'bg-purple-100 text-purple-800';
      case 'premium': return 'bg-blue-100 text-blue-800';
      case 'standard': return 'bg-green-100 text-green-800';
      "default": return 'bg-gray-100 text-gray-800';
    "}
  };
:src/pages/UltimateServicesShowcase2025.tsx
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">;
        <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 py-8">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              Ultimate Services Showcase 2025;
            </h1>;
            <p className="text-xl text-gray-600 mb-8">;
              Discover our comprehensive portfolio of Micro SAAS", IT Services, and AI Solutions;
            </p>;
            ;
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">;
              <div className="flex items-center gap-2 text-gray-600">;
                <Phone className="h-5 w-5" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-600">;
                <Mail className="h-5 w-5" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-600">;
                <MapPin className="h-5 w-5" />;
                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </div>;
            {/* Statistics */}
            <div className="grid grid-cols-2 "md": "grid-cols-4 gap-4 mb-8">;
              <div className="bg-blue-50 p-4 rounded-lg">;
                <div className="text-2xl font-bold text-blue-600">{stats.totalServices"}</div>;
                <div className="text-sm text-blue-800">Total Services</div>;
              </div>;
              <div className="bg-green-50 p-4 rounded-lg">;
                <div className="text-2xl font-bold text-green-600">{stats.serviceTypes[0].count}</div>;
                <div className="text-sm text-green-800">Micro SAAS</div>;
              </div>;
              <div className="bg-purple-50 p-4 rounded-lg">;
                <div className="text-2xl font-bold text-purple-600">{stats.serviceTypes[1].count}</div>;
                <div className="text-sm text-purple-800">IT Services</div>;
              </div>;
              <div className="bg-orange-50 p-4 rounded-lg">;
                <div className="text-2xl font-bold text-orange-600">{stats.serviceTypes[2].count}</div>;
                <div className="text-sm text-orange-800">AI Services</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 py-8">;
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">;
          <div className="flex items-center gap-2 mb-4">;
            <Filter className="h-5 w-5 text-gray-600" />;
            <h2 className="text-lg font-semibold text-gray-900">Filter Services</h2>;
          </div>;
          ;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 "xl":grid-cols-6 gap-4">;
            <div>;
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
                <Input;
                  placeholder="Search services...";
                  value={searchTerm"}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10";
                />;
              </div>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>;
              <Select value={selectedType} onValueChange={setSelectedType}>;
                <SelectTrigger>;
                  <SelectValue placeholder="All Types" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="all">All Types</SelectItem>;
                  {SERVICE_TYPES.map(type => (;
                    <SelectItem key={type.id} value={type.id}>;
                      {type.name} ({type.count});
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>;
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
                <SelectTrigger>;
                  <SelectValue placeholder="All Categories" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="all">All Categories</SelectItem>;
                  {ULTIMATE_SERVICE_CATEGORIES.map(category => (;
                    <SelectItem key={category} value={category}>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ultimate Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive portfolio of Micro SAAS, IT Services, and AI Solutions
            </p>
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            {/* Statistics */}
            <div className="grid grid-cols-2 "md": grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{stats.totalServices}</div>
                <div className="text-sm text-blue-800">Total Services</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{stats.serviceTypes[0].count}</div>
                <div className="text-sm text-green-800">Micro SAAS</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{stats.serviceTypes[1].count}</div>
                <div className="text-sm text-purple-800">IT Services</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{stats.serviceTypes[2].count}</div>
                <div className="text-sm text-orange-800">AI Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {SERVICE_TYPES.map(type => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {ULTIMATE_SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>;
                  ))}
:src/pages/UltimateServicesShowcase2025.tsx
                </SelectContent>;
              </Select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>;
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>;
                <SelectTrigger>;
                  <SelectValue placeholder="All Prices" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="all">All Prices</SelectItem>;
                  {ULTIMATE_PRICING_TIERS.map(tier => (;
                    <SelectItem key={tier.id} value={tier.id}>;
                      {tier.name} ({tier.range});
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-700 mb-2">Innovation Level</label>;
              <Select value={selectedInnovationLevel} onValueChange={setSelectedInnovationLevel}>;
                <SelectTrigger>;
                  <SelectValue placeholder="All Levels" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="all">All Levels</SelectItem>;
                  {ULTIMATE_INNOVATION_LEVELS.map(level => (;
                    <SelectItem key={level.id} value={level.id}>;
                      {level.name} ({level.count});
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-700 mb-2">Support Level</label>;
              <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>;
                <SelectTrigger>;
                  <SelectValue placeholder="All Support" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="all">All Support</SelectItem>;
                  {ULTIMATE_SUPPORT_LEVELS.map(level => (;
                    <SelectItem key={level.id} value={level.id}>;
                      {level.name} ({level.count});
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
          </div>;
        </div>;
        {/* Tabs Section */}
        <Tabs defaultValue="all" className="w-full">;
          <TabsList className="grid w-full grid-cols-5">;
            <TabsTrigger value="all">All Services ({filteredServices.length})</TabsTrigger>;
            <TabsTrigger value="featured">Featured ({featuredServices.length})</TabsTrigger>;
            <TabsTrigger value="trending">Trending ({trendingServices.length})</TabsTrigger>;
            <TabsTrigger value="free">Free Tier ({freeTierServices.length})</TabsTrigger>;
            <TabsTrigger value="beta">Beta Access ({betaAccessServices.length})</TabsTrigger>;
          </TabsList>;
          <TabsContent value="all" className="mt-6">;
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
              {filteredServices.map((service) => (;
                <Card key={service.id"} className=""hover": "shadow-lg transition-shadow duration-300">;
                  <CardHeader>;
                    <div className="flex items-start justify-between mb-2">;
                      <Badge className={getServiceTypeColor(service.serviceType)"}>;
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  {ULTIMATE_PRICING_TIERS.map(tier => (
                    <SelectItem key={tier.id} value={tier.id}>
                      {tier.name} ({tier.range})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Innovation Level</label>
              <Select value={selectedInnovationLevel} onValueChange={setSelectedInnovationLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {ULTIMATE_INNOVATION_LEVELS.map(level => (
                    <SelectItem key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Support Level</label>
              <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="All Support" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Support</SelectItem>
                  {ULTIMATE_SUPPORT_LEVELS.map(level => (
                    <SelectItem key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Tabs Section */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Services ({filteredServices.length})</TabsTrigger>
            <TabsTrigger value="featured">Featured ({featuredServices.length})</TabsTrigger>
            <TabsTrigger value="trending">Trending ({trendingServices.length})</TabsTrigger>
            <TabsTrigger value="free">Free Tier ({freeTierServices.length})</TabsTrigger>
            <TabsTrigger value="beta">Beta Access ({betaAccessServices.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className=""hover": shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getServiceTypeColor(service.serviceType)}>
                        {service.serviceType}
                      </Badge>;
                      <div className="flex gap-1">;
                        {service.freeTier && (;
                          <Badge variant="outline" className="text-green-600 border-green-600">;
                            Free Tier;
                          </Badge>;
                        )}
                        {service.betaAccess && (;
                          <Badge variant="outline" className="text-blue-600 border-blue-600">;
                            Beta;
                          </Badge>;
                        )}
                      </div>;
                    </div>;
                    <CardTitle className="text-lg">{service.title}</CardTitle>;
                    <CardDescription className="text-sm text-gray-600">;
                      {service.description}
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-2xl font-bold text-green-600">;
                          {service.currency}{service.price.toLocaleString()}
:src/pages/UltimateServicesShowcase2025.tsx
                        </span>;
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>;
                      </div>;
                      ;
                      <div className="flex flex-wrap gap-2">;
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>;
                        </span>
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>
                          {service.innovationLevel}
                        </Badge>;
                        <Badge className={getSupportLevelColor(service.supportLevel)}>;
                          {service.supportLevel}
:src/pages/UltimateServicesShowcase2025.tsx
                        </Badge>;
                      </div>;
                      <div className="text-sm text-gray-600">;
                        <div className="flex items-center gap-1 mb-1">;
                          <TrendingUp className="h-4 w-4" />;
                          <span>"ROI": "{service.roi"}</span>;
                        </div>;
                        <div className="flex items-center gap-1 mb-1">;
                          <Clock className="h-4 w-4" />;
                          <span>"Delivery": "{service.estimatedDelivery"}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <DollarSign className="h-4 w-4" />;
                          <span>"Market": "{service.marketPrice"}</span>;
                        </div>;
                      </div>;
                      <div className="flex flex-wrap gap-1">;
                        {service.tags.slice(0, 3).map((tag) => (;
                          <Badge key={tag} variant="outline" className="text-xs">;
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>"ROI": {service.roi}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-1">
                          <Clock className="h-4 w-4" />
                          <span>"Delivery": {service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>"Market": {service.marketPrice}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>;
                        ))}
                        {service.tags.length > 3 && (;
                          <Badge variant="outline" className="text-xs">;
                            +{service.tags.length - 3} more;
                          </Badge>;
                        )}
:src/pages/UltimateServicesShowcase2025.tsx
                      </div>;
                      <div className="pt-3 border-t">;
                        <div className="flex items-center justify-between">;
                          <div className="text-sm text-gray-600">;
                            <div className="flex items-center gap-1">;
                              <Users className="h-4 w-4" />;
                              <span>{service.targetAudience.length} audiences</span>;
                            </div>;
                          </div>;
                          <Button size="sm" className="bg-blue-600 "hover": "bg-blue-700">;
                            Learn More;
                            <ArrowRight className="h-4 w-4 ml-1" />;
                          </Button>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              ))"}
            </div>;
          </TabsContent>;
          <TabsContent value="featured" className="mt-6">;
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
              {featuredServices.map((service) => (;
                <Card key={service.id"} className=""hover": "shadow-lg transition-shadow duration-300 border-2 border-yellow-200">;
                  <CardHeader>;
                    <div className="flex items-start justify-between mb-2">;
                      <Badge className="bg-yellow-100 text-yellow-800">;
                        <Star className="h-3 w-3 mr-1" />;
                        Featured;
                      </Badge>;
                      <Badge className={getServiceTypeColor(service.serviceType)"}>;
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{service.targetAudience.length} audiences</span>
                            </div>
                          </div>
                          <Button size="sm" className="bg-blue-600 "hover": bg-blue-700">
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <Card key={service.id} className=""hover": shadow-lg transition-shadow duration-300 border-2 border-yellow-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge className={getServiceTypeColor(service.serviceType)}>
                        {service.serviceType}
                      </Badge>;
                    </div>;
                    <CardTitle className="text-lg">{service.title}</CardTitle>;
                    <CardDescription className="text-sm text-gray-600">;
                      {service.description}
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-2xl font-bold text-green-600">;
                          {service.currency}{service.price.toLocaleString()}
:src/pages/UltimateServicesShowcase2025.tsx
                        </span>;
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>;
                      </div>;
                      ;
                      <div className="flex flex-wrap gap-2">;
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>;
                        </span>
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>
                          {service.innovationLevel}
                        </Badge>;
                        <Badge className={getSupportLevelColor(service.supportLevel)}>;
                          {service.supportLevel}
:src/pages/UltimateServicesShowcase2025.tsx
                        </Badge>;
                      </div>;
                      <div className="text-sm text-gray-600">;
                        <div className="flex items-center gap-1 mb-1">;
                          <TrendingUp className="h-4 w-4" />;
                          <span>"ROI": "{service.roi"}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <DollarSign className="h-4 w-4" />;
                          <span>"Market": "{service.marketPrice"}</span>;
                        </div>;
                      </div>;
                      <Button size="sm" className="w-full bg-blue-600 "hover": "bg-blue-700">;
                        Get Started;
                        <ArrowRight className="h-4 w-4 ml-1" />;
                      </Button>;
                    </div>;
                  </CardContent>;
                </Card>;
              ))"}
            </div>;
          </TabsContent>;
          <TabsContent value="trending" className="mt-6">;
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
              {trendingServices.map((service) => (;
                <Card key={service.id"} className=""hover": "shadow-lg transition-shadow duration-300 border-2 border-green-200">;
                  <CardHeader>;
                    <div className="flex items-start justify-between mb-2">;
                      <Badge className="bg-green-100 text-green-800">;
                        <TrendingUp className="h-3 w-3 mr-1" />;
                        Trending;
                      </Badge>;
                      <Badge className={getServiceTypeColor(service.serviceType)"}>;
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>"ROI": {service.roi}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>"Market": {service.marketPrice}</span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-blue-600 "hover": bg-blue-700">
                        Get Started
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingServices.map((service) => (
                <Card key={service.id} className=""hover": shadow-lg transition-shadow duration-300 border-2 border-green-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-green-100 text-green-800">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                      <Badge className={getServiceTypeColor(service.serviceType)}>
                        {service.serviceType}
                      </Badge>;
                    </div>;
                    <CardTitle className="text-lg">{service.title}</CardTitle>;
                    <CardDescription className="text-sm text-gray-600">;
                      {service.description}
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-2xl font-bold text-green-600">;
                          {service.currency}{service.price.toLocaleString()}
:src/pages/UltimateServicesShowcase2025.tsx
                        </span>;
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>;
                      </div>;
                      ;
                      <div className="flex flex-wrap gap-2">;
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>;
                        </span>
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>
                          {service.innovationLevel}
                        </Badge>;
                        <Badge className={getSupportLevelColor(service.supportLevel)}>;
                          {service.supportLevel}
:src/pages/UltimateServicesShowcase2025.tsx
                        </Badge>;
                      </div>;
                      <div className="text-sm text-gray-600">;
                        <div className="flex items-center gap-1 mb-1">;
                          <TrendingUp className="h-4 w-4" />;
                          <span>"ROI": "{service.roi"}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <DollarSign className="h-4 w-4" />;
                          <span>"Market": "{service.marketPrice"}</span>;
                        </div>;
                      </div>;
                      <Button size="sm" className="w-full bg-green-600 "hover": "bg-green-700">;
                        Join Trend;
                        <ArrowRight className="h-4 w-4 ml-1" />;
                      </Button>;
                    </div>;
                  </CardContent>;
                </Card>;
              ))"}
            </div>;
          </TabsContent>;
          <TabsContent value="free" className="mt-6">;
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
              {freeTierServices.map((service) => (;
                <Card key={service.id"} className=""hover": "shadow-lg transition-shadow duration-300 border-2 border-green-200">;
                  <CardHeader>;
                    <div className="flex items-start justify-between mb-2">;
                      <Badge className="bg-green-100 text-green-800">;
                        <CheckCircle className="h-3 w-3 mr-1" />;
                        Free Tier;
                      </Badge>;
                      <Badge className={getServiceTypeColor(service.serviceType)"}>;
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>"ROI": {service.roi}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>"Market": {service.marketPrice}</span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-green-600 "hover": bg-green-700">
                        Join Trend
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="free" className="mt-6">
            <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
              {freeTierServices.map((service) => (
                <Card key={service.id} className=""hover": shadow-lg transition-shadow duration-300 border-2 border-green-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Free Tier
                      </Badge>
                      <Badge className={getServiceTypeColor(service.serviceType)}>
                        {service.serviceType}
                      </Badge>;
                    </div>;
                    <CardTitle className="text-lg">{service.title}</CardTitle>;
                    <CardDescription className="text-sm text-gray-600">;
                      {service.description}
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-2xl font-bold text-green-600">;
                          {service.currency}{service.price.toLocaleString()}
:src/pages/UltimateServicesShowcase2025.tsx
                        </span>;
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>;
                      </div>;
                      ;
                      <div className="flex flex-wrap gap-2">;
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>;
                        </span>
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>
                          {service.innovationLevel}
                        </Badge>;
                        <Badge className={getSupportLevelColor(service.supportLevel)}>;
                          {service.supportLevel}
:src/pages/UltimateServicesShowcase2025.tsx
                        </Badge>;
                      </div>;
                      <div className="text-sm text-gray-600">;
                        <div className="flex items-center gap-1 mb-1">;
                          <TrendingUp className="h-4 w-4" />;
                          <span>"ROI": "{service.roi"}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <DollarSign className="h-4 w-4" />;
                          <span>"Market": "{service.marketPrice"}</span>;
                        </div>;
                      </div>;
                      <Button size="sm" className="w-full bg-green-600 "hover": "bg-green-700">;
                        Start Free Trial;
                        <ArrowRight className="h-4 w-4 ml-1" />;
                      </Button>;
                    </div>;
                  </CardContent>;
                </Card>;
              ))"}
            </div>;
          </TabsContent>;
          <TabsContent value="beta" className="mt-6">;
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
              {betaAccessServices.map((service) => (;
                <Card key={service.id"} className=""hover": "shadow-lg transition-shadow duration-300 border-2 border-blue-200">;
                  <CardHeader>;
                    <div className="flex items-start justify-between mb-2">;
                      <Badge className="bg-blue-100 text-blue-800">;
                        <Zap className="h-3 w-3 mr-1" />;
                        Beta Access;
                      </Badge>;
                      <Badge className={getServiceTypeColor(service.serviceType)"}>;
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>"ROI": {service.roi}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>"Market": {service.marketPrice}</span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-green-600 "hover": bg-green-700">
                        Start Free Trial
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="beta" className="mt-6">
            <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
              {betaAccessServices.map((service) => (
                <Card key={service.id} className=""hover": shadow-lg transition-shadow duration-300 border-2 border-blue-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        <Zap className="h-3 w-3 mr-1" />
                        Beta Access
                      </Badge>
                      <Badge className={getServiceTypeColor(service.serviceType)}>
                        {service.serviceType}
                      </Badge>;
                    </div>;
                    <CardTitle className="text-lg">{service.title}</CardTitle>;
                    <CardDescription className="text-sm text-gray-600">;
                      {service.description}
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-2xl font-bold text-green-600">;
                          {service.currency}{service.price.toLocaleString()}
:src/pages/UltimateServicesShowcase2025.tsx
                        </span>;
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>;
                      </div>;
                      ;
                      <div className="flex flex-wrap gap-2">;
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>;
                        </span>
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getInnovationLevelColor(service.innovationLevel)}>
                          {service.innovationLevel}
                        </Badge>;
                        <Badge className={getSupportLevelColor(service.supportLevel)}>;
                          {service.supportLevel}
:src/pages/UltimateServicesShowcase2025.tsx
                        </Badge>;
                      </div>;
                      <div className="text-sm text-gray-600">;
                        <div className="flex items-center gap-1 mb-1">;
                          <TrendingUp className="h-4 w-4" />;
                          <span>"ROI": "{service.roi"}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <DollarSign className="h-4 w-4" />;
                          <span>"Market": "{service.marketPrice"}</span>;
                        </div>;
                      </div>;
                      <Button size="sm" className="w-full bg-blue-600 "hover": "bg-blue-700">;
                        Request Beta Access;
                        <ArrowRight className="h-4 w-4 ml-1" />;
                      </Button>;
                    </div>;
                  </CardContent>;
                </Card>;
              ))"}
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;
      {/* Contact CTA Section */}
      <div className="bg-blue-600 text-white py-16">;
        <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 text-center">;
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>;
          <p className="text-xl mb-8 text-blue-100">;
            Contact us today to discuss your specific needs and get a customized solution;
          </p>;
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">;
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 "hover":bg-gray-100">;
              <Phone className="h-5 w-5 mr-2" />;
              Call +1 302 464 0950;
            </Button>;
            <Button size="lg" variant="outline" className="border-white text-white "hover":bg-white "hover":text-blue-600">;
              <Mail className="h-5 w-5 mr-2" />;
              Email kleber@ziontechgroup.com;
            </Button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
"};
;
export default UltimateServicesShowcase2025;
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>"ROI": {service.roi}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>"Market": {service.marketPrice}</span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-blue-600 "hover": bg-blue-700">
                        Request Beta Access
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Contact CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your specific needs and get a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UltimateServicesShowcase2025;
import React,{ useState,useMemo } from 'react'; import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '../components/ui/card'; import { Badge } from '../components/ui/badge'; import { Button } from '../components/ui/button'; import { Input } from '../components/ui/input'; import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from '../components/ui/select'; import { Tabs,TabsContent,TabsList,TabsTrigger } from '../components/ui/tabs'; import { ULTIMATE_COMPREHENSIVE_SERVICES_2025,getUltimateServiceStats,getUltimateServicesByType,getUltimateServicesByCategory,searchUltimateServices,getFeaturedUltimateServices,getTrendingUltimateServices,getUltimateServicesWithFreeTier,getUltimateBetaAccessServices,ULTIMATE_SERVICE_CATEGORIES,SERVICE_TYPES,ULTIMATE_PRICING_TIERS,ULTIMATE_INNOVATION_LEVELS,ULTIMATE_SUPPORT_LEVELS } from '../data/ultimateComprehensiveServices2025'; import { Search,Filter,Star,Zap,Shield,TrendingUp,Clock,Users,DollarSign,Phone,Mail,Globe,MapPin,CheckCircle,ArrowRight } from 'lucide-react'; const UltimateServicesShowcase2025: React.FC = () => { const [searchTerm,setSearchTerm] = useState("); const [selectedCategory,setSelectedCategory] = useState('all'); const [selectedType,setSelectedType] = useState('all'); const [selectedPriceRange,setSelectedPriceRange] = useState('all'); const [selectedInnovationLevel,setSelectedInnovationLevel] = useState('all'); const [selectedSupportLevel,setSelectedSupportLevel] = useState('all'); const stats = getUltimateServiceStats(); const filteredServices = useMemo(() => { let services = ULTIMATE_COMPREHENSIVE_SERVICES_2025; if (searchTerm) { services = searchUltimateServices(searchTerm)} if (selectedCategory !== 'all') { services = services.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()) )} if (selectedType !== 'all') { const serviceTypeMap: { [key: string]: 'Micro SAAS' | 'IT Services' | 'AI Services' } = { 'micro-saas': 'Micro SAAS','it-services': 'IT Services','ai-services': 'AI Services' };; services = services.filter(service => service.serviceType === serviceTypeMap[selectedType] )} if (selectedPriceRange !== 'all') { const priceRanges: { [key: string]: [number,number] } = { 'budget': [1000,2999],'mid-range': [3000,6999],'enterprise': [7000,999999] };; const [min,max] = priceRanges[selectedPriceRange] || [0,999999]; services = services.filter(service => service.price >= min && service.price <= max)} if (selectedInnovationLevel !== 'all') { services = services.filter(service => service.innovationLevel.toLowerCase() === selectedInnovationLevel )} if (selectedSupportLevel !== 'all') { services = services.filter(service => service.supportLevel.toLowerCase() === selectedSupportLevel )} return services},[searchTerm,selectedCategory,selectedType,selectedPriceRange,selectedInnovationLevel,selectedSupportLevel]); const featuredServices = getFeaturedUltimateServices(6); const trendingServices = getTrendingUltimateServices(6); const freeTierServices = getUltimateServicesWithFreeTier(); const betaAccessServices = getUltimateBetaAccessServices(); const getServiceTypeColor = (serviceType: string) => { switch (serviceType) { case 'Micro SAAS': return 'bg-blue-100 text-blue-800'; case 'IT Services': return 'bg-green-100 text-green-800'; case 'AI Services': return 'bg-purple-100 text-purple-800'; default: return 'bg-gray-100 text-gray-800'} }; const getInnovationLevelColor = (level: string) => { switch (level.toLowerCase()) { case 'revolutionary': return 'bg-red-100 text-red-800'; case 'cutting-edge': return 'bg-orange-100 text-orange-800'; case 'advanced': return 'bg-yellow-100 text-yellow-800'; default: return 'bg-gray-100 text-gray-800'} }; const getSupportLevelColor = (level: string) => { switch (level.toLowerCase()) { case 'enterprise': return 'bg-purple-100 text-purple-800'; case 'premium': return 'bg-blue-100 text-blue-800'; case 'standard': return 'bg-green-100 text-green-800'; default: return 'bg-gray-100 text-gray-800'} }; return ( <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> {} <div className="bg-white shadow-sm border-b"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div className="text-center"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Ultimate Services Showcase 2025 </h1> <p className="text-xl text-gray-600 mb-8"> Discover our comprehensive portfolio of Micro SAAS,IT Services,and AI Solutions </p> {} <div className="flex flex-wrap justify-center gap-6 mb-8"> <div className="flex items-center gap-2 text-gray-600"> <Phone className="h-5 w-5" /> <span>+1 302 464 0950</span> </div> <div className="flex items-center gap-2 text-gray-600"> <Mail className="h-5 w-5" /> <span>kleber@ziontechgroup.com</span> </div> <div className="flex items-center gap-2 text-gray-600"> <MapPin className="h-5 w-5" /> <span>364 E Main St STE 1008 Middletown DE 19709</span> </div> </div> {} <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"> <div className="bg-blue-50 p-4 rounded-lg"> <div className="text-2xl font-bold text-blue-600">{stats.totalServices}</div> <div className="text-sm text-blue-800">Total Services</div> </div> <div className="bg-green-50 p-4 rounded-lg"> <div className="text-2xl font-bold text-green-600">{stats.serviceTypes[0].count}</div> <div className="text-sm text-green-800">Micro SAAS</div> </div> <div className="bg-purple-50 p-4 rounded-lg"> <div className="text-2xl font-bold text-purple-600">{stats.serviceTypes[1].count}</div> <div className="text-sm text-purple-800">IT Services</div> </div> <div className="bg-orange-50 p-4 rounded-lg"> <div className="text-2xl font-bold text-orange-600">{stats.serviceTypes[2].count}</div> <div className="text-sm text-orange-800">AI Services</div> </div> </div> </div> </div> </div> {} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div className="bg-white rounded-lg shadow-sm p-6 mb-8"> <div className="flex items-center gap-2 mb-4"> <Filter className="h-5 w-5 text-gray-600" /> <h2 className="text-lg font-semibold text-gray-900">Filter Services</h2> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Search</label> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> <Input placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /> </div> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label> <Select value={selectedType} onValueChange={setSelectedType}> <SelectTrigger> <SelectValue placeholder="All Types" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Types</SelectItem> {SERVICE_TYPES.map(type => ( <SelectItem key={type.id} value={type.id}> {type.name} ({type.count}) </SelectItem> ))} </SelectContent> </Select> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Category</label> <Select value={selectedCategory} onValueChange={setSelectedCategory}> <SelectTrigger> <SelectValue placeholder="All Categories" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Categories</SelectItem> {ULTIMATE_SERVICE_CATEGORIES.map(category => ( <SelectItem key={category} value={category}> {category} </SelectItem> ))} </SelectContent> </Select> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label> <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}> <SelectTrigger> <SelectValue placeholder="All Prices" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Prices</SelectItem> {ULTIMATE_PRICING_TIERS.map(tier => ( <SelectItem key={tier.id} value={tier.id}> {tier.name} ({tier.range}) </SelectItem> ))} </SelectContent> </Select> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Innovation Level</label> <Select value={selectedInnovationLevel} onValueChange={setSelectedInnovationLevel}> <SelectTrigger> <SelectValue placeholder="All Levels" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Levels</SelectItem> {ULTIMATE_INNOVATION_LEVELS.map(level => ( <SelectItem key={level.id} value={level.id}> {level.name} ({level.count}) </SelectItem> ))} </SelectContent> </Select> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Support Level</label> <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}> <SelectTrigger> <SelectValue placeholder="All Support" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Support</SelectItem> {ULTIMATE_SUPPORT_LEVELS.map(level => ( <SelectItem key={level.id} value={level.id}> {level.name} ({level.count}) </SelectItem> ))} </SelectContent> </Select> </div> </div> </div> {} <Tabs defaultValue="all" className="w-full"> <TabsList className="grid w-full grid-cols-5"> <TabsTrigger value="all">All Services ({filteredServices.length})</TabsTrigger> <TabsTrigger value="featured">Featured ({featuredServices.length})</TabsTrigger> <TabsTrigger value="trending">Trending ({trendingServices.length})</TabsTrigger> <TabsTrigger value="free">Free Tier ({freeTierServices.length})</TabsTrigger> <TabsTrigger value="beta">Beta Access ({betaAccessServices.length})</TabsTrigger> </TabsList> <TabsContent value="all" className="mt-6"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {filteredServices.map((service) => ( <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300"> <CardHeader> <div className="flex items-start justify-between mb-2"> <Badge className={getServiceTypeColor(service.serviceType)}> {service.serviceType} </Badge> <div className="flex gap-1"> {service.freeTier && ( <Badge variant="outline" className="text-green-600 border-green-600"> Free Tier </Badge> )} {service.betaAccess && ( <Badge variant="outline" className="text-blue-600 border-blue-600"> Beta </Badge> )} </div> </div> <CardTitle className="text-lg">{service.title}</CardTitle> <CardDescription className="text-sm text-gray-600"> {service.description} </CardDescription> </CardHeader> <CardContent> <div className="space-y-3"> <div className="flex items-center justify-between"> <span className="text-2xl font-bold text-green-600"> {service.currency}{service.price.toLocaleString()} </span> <span className="text-sm text-gray-500">/{service.pricingModel}</span> </div> <div className="flex flex-wrap gap-2"> <Badge className={getInnovationLevelColor(service.innovationLevel)}> {service.innovationLevel} </Badge> <Badge className={getSupportLevelColor(service.supportLevel)}> {service.supportLevel} </Badge> </div> <div className="text-sm text-gray-600"> <div className="flex items-center gap-1 mb-1"> <TrendingUp className="h-4 w-4" /> <span>ROI: {service.roi}</span> </div> <div className="flex items-center gap-1 mb-1"> <Clock className="h-4 w-4" /> <span>Delivery: {service.estimatedDelivery}</span> </div> <div className="flex items-center gap-1"> <DollarSign className="h-4 w-4" /> <span>Market: {service.marketPrice}</span> </div> </div> <div className="flex flex-wrap gap-1"> {service.tags.slice(0,3).map((tag) => ( <Badge key={tag} variant="outline" className="text-xs"> {tag} </Badge> ))} {service.tags.length > 3 && ( <Badge variant="outline" className="text-xs"> +{service.tags.length - 3} more </Badge> )} </div> <div className="pt-3 border-t"> <div className="flex items-center justify-between"> <div className="text-sm text-gray-600"> <div className="flex items-center gap-1"> <Users className="h-4 w-4" /> <span>{service.targetAudience.length} audiences</span> </div> </div> <Button size="sm" className="bg-blue-600 hover:bg-blue-700"> Learn More <ArrowRight className="h-4 w-4 ml-1" /> </Button> </div> </div> </div> </CardContent> </Card> ))} </div> </TabsContent> <TabsContent value="featured" className="mt-6"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {featuredServices.map((service) => ( <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-200"> <CardHeader> <div className="flex items-start justify-between mb-2"> <Badge className="bg-yellow-100 text-yellow-800"> <Star className="h-3 w-3 mr-1" /> Featured </Badge> <Badge className={getServiceTypeColor(service.serviceType)}> {service.serviceType} </Badge> </div> <CardTitle className="text-lg">{service.title}</CardTitle> <CardDescription className="text-sm text-gray-600"> {service.description} </CardDescription> </CardHeader> <CardContent> <div className="space-y-3"> <div className="flex items-center justify-between"> <span className="text-2xl font-bold text-green-600"> {service.currency}{service.price.toLocaleString()} </span> <span className="text-sm text-gray-500">/{service.pricingModel}</span> </div> <div className="flex flex-wrap gap-2"> <Badge className={getInnovationLevelColor(service.innovationLevel)}> {service.innovationLevel} </Badge> <Badge className={getSupportLevelColor(service.supportLevel)}> {service.supportLevel} </Badge> </div> <div className="text-sm text-gray-600"> <div className="flex items-center gap-1 mb-1"> <TrendingUp className="h-4 w-4" /> <span>ROI: {service.roi}</span> </div> <div className="flex items-center gap-1"> <DollarSign className="h-4 w-4" /> <span>Market: {service.marketPrice}</span> </div> </div> <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700"> Get Started <ArrowRight className="h-4 w-4 ml-1" /> </Button> </div> </CardContent> </Card> ))} </div> </TabsContent> <TabsContent value="trending" className="mt-6"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {trendingServices.map((service) => ( <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-2 border-green-200"> <CardHeader> <div className="flex items-start justify-between mb-2"> <Badge className="bg-green-100 text-green-800"> <TrendingUp className="h-3 w-3 mr-1" /> Trending </Badge> <Badge className={getServiceTypeColor(service.serviceType)}> {service.serviceType} </Badge> </div> <CardTitle className="text-lg">{service.title}</CardTitle> <CardDescription className="text-sm text-gray-600"> {service.description} </CardDescription> </CardHeader> <CardContent> <div className="space-y-3"> <div className="flex items-center justify-between"> <span className="text-2xl font-bold text-green-600"> {service.currency}{service.price.toLocaleString()} </span> <span className="text-sm text-gray-500">/{service.pricingModel}</span> </div> <div className="flex flex-wrap gap-2"> <Badge className={getInnovationLevelColor(service.innovationLevel)}> {service.innovationLevel} </Badge> <Badge className={getSupportLevelColor(service.supportLevel)}> {service.supportLevel} </Badge> </div> <div className="text-sm text-gray-600"> <div className="flex items-center gap-1 mb-1"> <TrendingUp className="h-4 w-4" /> <span>ROI: {service.roi}</span> </div> <div className="flex items-center gap-1"> <DollarSign className="h-4 w-4" /> <span>Market: {service.marketPrice}</span> </div> </div> <Button size="sm" className="w-full bg-green-600 hover:bg-green-700"> Join Trend <ArrowRight className="h-4 w-4 ml-1" /> </Button> </div> </CardContent> </Card> ))} </div> </TabsContent> <TabsContent value="free" className="mt-6"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {freeTierServices.map((service) => ( <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-2 border-green-200"> <CardHeader> <div className="flex items-start justify-between mb-2"> <Badge className="bg-green-100 text-green-800"> <CheckCircle className="h-3 w-3 mr-1" /> Free Tier </Badge> <Badge className={getServiceTypeColor(service.serviceType)}> {service.serviceType} </Badge> </div> <CardTitle className="text-lg">{service.title}</CardTitle> <CardDescription className="text-sm text-gray-600"> {service.description} </CardDescription> </CardHeader> <CardContent> <div className="space-y-3"> <div className="flex items-center justify-between"> <span className="text-2xl font-bold text-green-600"> {service.currency}{service.price.toLocaleString()} </span> <span className="text-sm text-gray-500">/{service.pricingModel}</span> </div> <div className="flex flex-wrap gap-2"> <Badge className={getInnovationLevelColor(service.innovationLevel)}> {service.innovationLevel} </Badge> <Badge className={getSupportLevelColor(service.supportLevel)}> {service.supportLevel} </Badge> </div> <div className="text-sm text-gray-600"> <div className="flex items-center gap-1 mb-1"> <TrendingUp className="h-4 w-4" /> <span>ROI: {service.roi}</span> </div> <div className="flex items-center gap-1"> <DollarSign className="h-4 w-4" /> <span>Market: {service.marketPrice}</span> </div> </div> <Button size="sm" className="w-full bg-green-600 hover:bg-green-700"> Start Free Trial <ArrowRight className="h-4 w-4 ml-1" /> </Button> </div> </CardContent> </Card> ))} </div> </TabsContent> <TabsContent value="beta" className="mt-6"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {betaAccessServices.map((service) => ( <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-2 border-blue-200"> <CardHeader> <div className="flex items-start justify-between mb-2"> <Badge className="bg-blue-100 text-blue-800"> <Zap className="h-3 w-3 mr-1" /> Beta Access </Badge> <Badge className={getServiceTypeColor(service.serviceType)}> {service.serviceType} </Badge> </div> <CardTitle className="text-lg">{service.title}</CardTitle> <CardDescription className="text-sm text-gray-600"> {service.description} </CardDescription> </CardHeader> <CardContent> <div className="space-y-3"> <div className="flex items-center justify-between"> <span className="text-2xl font-bold text-green-600"> {service.currency}{service.price.toLocaleString()} </span> <span className="text-sm text-gray-500">/{service.pricingModel}</span> </div> <div className="flex flex-wrap gap-2"> <Badge className={getInnovationLevelColor(service.innovationLevel)}> {service.innovationLevel} </Badge> <Badge className={getSupportLevelColor(service.supportLevel)}> {service.supportLevel} </Badge> </div> <div className="text-sm text-gray-600"> <div className="flex items-center gap-1 mb-1"> <TrendingUp className="h-4 w-4" /> <span>ROI: {service.roi}</span> </div> <div className="flex items-center gap-1"> <DollarSign className="h-4 w-4" /> <span>Market: {service.marketPrice}</span> </div> </div> <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700"> Request Beta Access <ArrowRight className="h-4 w-4 ml-1" /> </Button> </div> </CardContent> </Card> ))} </div> </TabsContent> </Tabs> </div> {} <div className="bg-blue-600 text-white py-16"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2> <p className="text-xl mb-8 text-blue-100"> Contact us today to discuss your specific needs and get a customized solution </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100"> <Phone className="h-5 w-5 mr-2" /> Call +1 302 464 0950 </Button> <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600"> <Mail className="h-5 w-5 mr-2" /> Email kleber@ziontechgroup.com </Button> </div> </div> </div> </div> )}; export default UltimateServicesShowcase2025;