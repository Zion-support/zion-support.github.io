<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
import { 
  Search, 
  Filter, 
  Star, 
<<<<<<< HEAD
=======
<<<<<<< HEAD
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
  Globe, 
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Import service data
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../data/specializedITInfrastructureServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_NEW_SERVICES,
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: '$0 - $500/month' },
    { value: '500-1000', label: '$500 - $1,000/month' },
    { value: '1000-2000', label: '$1,000 - $2,000/month' },
    { value: '2000+', label: '$2,000+/month' }
  ];

  // Helper function to get service price
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
    }
    if (service.price && typeof service.price === 'object' && service.price.monthly) {
      return service.price.monthly;
    }
    return 0;
  };

  // Helper function to get service tags
  const getServiceTags = (service: any) => {
    if (service.tags && Array.isArray(service.tags)) {
      return service.tags;
    }
    return [];
  };

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const serviceTitle = 'title' in service ? service.title : 'name' in service ? service.name : '';
      const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           getServiceTags(service).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const servicePrice = getServicePrice(service);
      const matchesPrice = selectedPriceRange === 'all' || 
        (selectedPriceRange === '0-500' && servicePrice <= 500) ||
        (selectedPriceRange === '500-1000' && servicePrice > 500 && servicePrice <= 1000) ||
        (selectedPriceRange === '1000-2000' && servicePrice > 1000 && servicePrice <= 2000) ||
        (selectedPriceRange === '2000+' && servicePrice > 2000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return getServicePrice(a) - getServicePrice(b);
        case 'price-high':
          return getServicePrice(b) - getServicePrice(a);
        case 'innovation':
          const aTags = getServiceTags(a);
          const bTags = getServiceTags(b);
          return bTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length - 
                 aTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length;
        case 'name':
          const aTitle = 'title' in a ? a.title : 'name' in a ? a.name : '';
          const bTitle = 'title' in b ? b.title : 'name' in b ? b.name : '';
          return aTitle.localeCompare(bTitle);
        default:
          return 0;
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  Users, 
  Zap, 
  Shield, 
  Code, 
  BarChart3,
  Bot,
  Globe,
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Lock,
  Settings,
  DollarSign,
  Clock,
  Target,
  Award,
  Globe2,
  Cpu,
  Heart,
  Eye,
  ExternalLink,
  Play,
  BookOpen,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '@/data/enhancedInnovativeServices';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '@/data/innovativeMicroSaasServices';
import { motion } from 'framer-motion';
import EnhancedSEO from '@/components/EnhancedSEO';

// Combine all services
const ALL_SERVICES = [
  ...ENHANCED_INNOVATIVE_SERVICES,
  ...COMPREHENSIVE_SERVICES,
  ...INNOVATIVE_MICRO_SAAS_SERVICES
] as any[];

const categoryIcons = {
  'AI & Legal Tech': FileText,
  'AI & FinTech': DollarSign,
  'AI & Healthcare': Heart,
  'Cybersecurity & Quantum': Shield,
  'AI & Supply Chain': Building,
  'AI & Energy': Zap,
  'AI & Customer Experience': Users,
  'Quantum & AI': Cpu,
  'AI & Data Governance': Database,
  'AI & HR Tech': Users,
  'AI & Machine Learning': Brain,
  'AI & Business Intelligence': BarChart3,
  'AI & Marketing Automation': Target,
  'AI & CRM': Users,
  'AI & ERP': Building,
  'AI & Project Management': Code,
  'AI & Autonomous Systems': Bot,
  'AI & Research': Brain,
  'AI & Content Generation': FileText,
  'AI & Voice Technology': Smartphone,
  'AI & Video Generation': Eye,
  'AI & Threat Intelligence': Shield,
  'AI & Cloud Management': Cloud,
  'AI & DevOps': Code
};

const categoryColors = {
  'AI & Legal Tech': 'from-blue-500 to-indigo-500',
  'AI & FinTech': 'from-green-500 to-emerald-500',
  'AI & Healthcare': 'from-red-500 to-pink-500',
  'Cybersecurity & Quantum': 'from-purple-500 to-violet-500',
  'AI & Supply Chain': 'from-orange-500 to-red-500',
  'AI & Energy': 'from-yellow-500 to-orange-500',
  'AI & Customer Experience': 'from-pink-500 to-rose-500',
  'Quantum & AI': 'from-cyan-500 to-blue-500',
  'AI & Data Governance': 'from-indigo-500 to-purple-500',
  'AI & HR Tech': 'from-teal-500 to-green-500',
  'AI & Machine Learning': 'from-purple-500 to-pink-500',
  'AI & Business Intelligence': 'from-indigo-500 to-purple-500',
  'AI & Marketing Automation': 'from-pink-500 to-rose-500',
  'AI & CRM': 'from-blue-500 to-cyan-500',
  'AI & ERP': 'from-green-500 to-emerald-500',
  'AI & Project Management': 'from-orange-500 to-red-500',
  'AI & Autonomous Systems': 'from-purple-500 to-violet-500',
  'AI & Research': 'from-cyan-500 to-blue-500',
  'AI & Content Generation': 'from-indigo-500 to-purple-500',
  'AI & Voice Technology': 'from-teal-500 to-green-500',
  'AI & Video Generation': 'from-pink-500 to-rose-500',
  'AI & Threat Intelligence': 'from-red-500 to-pink-500',
  'AI & Cloud Management': 'from-blue-500 to-cyan-500',
  'AI & DevOps': 'from-orange-500 to-red-500'
};

const supportLevelColors = {
  'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'
};

export default function ComprehensiveServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');

  const filteredServices = useMemo(() => {
    let filtered = ALL_SERVICES;

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price <= 1000;
          });
          break;
        case 'medium':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price > 1000 && price <= 3000;
          });
          break;
        case 'high':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price > 3000;
          });
          break;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      }
    }
  };

<<<<<<< HEAD
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
=======
<<<<<<< HEAD
  const getServiceColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return 'from-blue-500 to-purple-600';
      case 'Quantum Computing':
        return 'from-purple-500 to-pink-600';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-600';
      case 'IT Infrastructure':
        return 'from-green-500 to-emerald-600';
      case 'Space Technology':
        return 'from-indigo-500 to-blue-600';
      case 'Neurotechnology':
        return 'from-pink-500 to-red-600';
      case 'Autonomous Systems':
        return 'from-yellow-500 to-orange-600';
      case 'Blockchain & Web3':
        return 'from-cyan-500 to-blue-600';
      case 'Internet of Things':
        return 'from-emerald-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
=======
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    }
  };

  return (
    <>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <SEOHead 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge technology services including AI, Quantum Computing, Cybersecurity, IT Infrastructure, and more. Transform your business with innovative solutions."
        keywords="technology services, AI services, quantum computing, cybersecurity, IT infrastructure, micro SaaS, autonomous systems, space technology, neurotechnology"
        image="/images/services-overview-og.jpg"
        canonical="https://ziontechgroup.com/comprehensive-services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Cutting-Edge Technology Solutions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our extensive range of innovative technology services designed to accelerate your business growth, 
              enhance security, and drive digital transformation. From AI-powered solutions to quantum computing, 
              we deliver cutting-edge technology that gives you a competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>500+ Services Available</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span>Industry Leading Innovation</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                <span>Global Support</span>
              </div>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              <EnhancedSEO
          title="Comprehensive Services Overview | Zion Tech Group"
          description="Explore our complete portfolio of AI-powered services, IT solutions, and innovative micro SAAS platforms. From legal tech to quantum computing, discover how we can transform your business."
          keywords="AI services, IT solutions, micro SAAS, cybersecurity, quantum computing, legal tech, fintech, healthcare AI, supply chain, energy management, comprehensive services"
          image="/images/comprehensive-services-overview-og.jpg"
          url="https://ziontechgroup.com/comprehensive-services-overview"
          type="website"
        />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-blue/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Complete Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent leading-tight">
              Comprehensive Services Overview
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed">
              Discover our complete portfolio of AI-powered services, IT solutions, and innovative micro SAAS platforms designed to transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 text-zion-purple" />
                <span className="text-zion-purple text-sm font-medium">{ALL_SERVICES.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-zion-cyan" />
                <span className="text-zion-cyan text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-zion-blue" />
                <span className="text-zion-blue text-sm font-medium">Enterprise Ready</span>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range Filter */}
              <Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $1k/month</SelectItem>
                  <SelectItem value="high">Over $3k/month</SelectItem>
                </SelectContent>
              </Select>

              {/* Support Level Filter */}
              <Select value={selectedSupportLevel} onChange={(e) => setSelectedSupportLevel(e.target.value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Support Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Support Levels</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Services Count */}
          <div className="text-center mb-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Services Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{ALL_SERVICES.length}</div>
                  <div className="text-zion-slate-light">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length}</div>
                  <div className="text-zion-slate-light">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-blue mb-2">{filteredServices.length}</div>
                  <div className="text-zion-slate-light">Filtered Results</div>
                </div>
              </div>
            </div>
          </div>

          {/* All Services */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">All Services</h2>
              <span className="text-zion-slate-light">
                {filteredServices.length} of {ALL_SERVICES.length} services
              </span>
            </div>
            
            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'}`}>
                            {React.createElement(categoryIcons[service.category as keyof typeof categoryIcons] || Settings, { 
                              className: "h-6 w-6 text-white" 
                            })}
                          </div>
                          <div className="text-right">
                            {service.supportLevel && (
                              <Badge className={`${supportLevelColors[service.supportLevel as keyof typeof supportLevelColors] || 'bg-gray-500'} text-white mb-2`}>
                                {service.supportLevel}
                              </Badge>
                            )}
                            <div className="text-2xl font-bold text-zion-cyan">
                              {formatPrice(service.price)}/{getServicePricingModel(service)}
                            </div>
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {service.estimatedDelivery && (
                            <div className="flex items-center gap-2 text-zion-slate-light">
                              <Clock className="h-4 w-4" />
                              <span>{service.estimatedDelivery}</span>
                            </div>
                          )}
                          {service.marketPrice && (
                            <div className="flex items-center gap-2 text-zion-slate-light">
                              <Target className="h-4 w-4" />
                              <span>{service.marketPrice}</span>
                            </div>
                          )}
                        </div>
                        
                        {service.features && service.features.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-white/10 text-zion-slate-light border-white/20">
                                  {feature}
                                </Badge>
                              ))}
                              {service.features.length > 3 && (
                                <Badge variant="secondary" className="bg-white/10 text-zion-slate-light border-white/20">
                                  +{service.features.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {'technologyStack' in service && service.technologyStack && service.technologyStack.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-white text-sm">Technology Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologyStack.slice(0, 4).map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                                  {tech}
                                </Badge>
                              ))}
                              {service.technologyStack.length > 4 && (
                                <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                                  +{service.technologyStack.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                      
                      <CardFooter className="pt-0">
                        <div className="w-full space-y-3">
                          <Button 
                            className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white"
                            asChild
                          >
                            <a href={'websiteUrl' in service ? service.websiteUrl : service.contactInfo?.website || 'https://ziontechgroup.com'} target="_blank" rel="noopener noreferrer">
                              Learn More
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          
                          <div className="flex gap-2">
                            {'demoUrl' in service && service.demoUrl && (
                              <Button variant="outline" size="sm" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                                <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <Play className="mr-2 h-4 w-4" />
                                  Demo
                                </a>
                              </Button>
                            )}
                            {'documentationUrl' in service && service.documentationUrl && (
                              <Button variant="outline" size="sm" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                                <a href={service.documentationUrl} target="_blank" rel="noopener noreferrer">
                                  <BookOpen className="mr-2 h-4 w-4" />
                                  Docs
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Contact our team to learn more about these innovative services and how they can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-zion-purple mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-zion-blue mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white" asChild>
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20" asChild>
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            </div>
          </div>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};

export default ComprehensiveServicesOverview;
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
