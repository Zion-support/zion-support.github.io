=======
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
=======
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, ComprehensiveService } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from '@/data/expandedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Cloud,
  Brain,
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { ADDITIONAL_MICRO_SAAS, ADDITIONAL_IT_SERVICES, ADDITIONAL_AI_SERVICES } from '@/data/additionalServices';

      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 5000) ||
        (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 5000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 15000) ||
        (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 15000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const getSubcategoriesForCategory = (category: string) => {
    if (category === 'all') return [];
    return serviceSubcategories[category as keyof typeof serviceSubcategories] || [];
  };

  return (
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Award,
  Mail,
  Phone,
  Search,
  Filter,
  ExternalLink,
  Code,
  Database,
  Network,
  Server,
  Cpu,
  Monitor
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SAAS_CATEGORIES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_IT_CATEGORIES } from '../data/specializedITServices';

export default function ComprehensiveServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES, ...ADDITIONAL_MICRO_SAAS, ...ADDITIONAL_IT_SERVICES, ...ADDITIONAL_AI_SERVICES];
  const allCategories = [...INNOVATIVE_SAAS_CATEGORIES, ...SPECIALIZED_IT_CATEGORIES];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'AI & Customer Service': Users,
      'Content Management': BarChart3,
      'DevOps & Automation': Zap,
      'API & Integration': Code,
      'Data & Analytics': Database,
      'Network Security': Network
    };
    return iconMap[category] || Globe;
  };

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && service.price.starter <= 200) ||
      (priceRange === 'mid-range' && service.price.starter > 200 && service.price.starter <= 500) ||
      (priceRange === 'premium' && service.price.starter > 500);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const ServiceCard = ({ service }: { service: any }) => {
    const CategoryIcon = getCategoryIcon(service.category);
    
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <CategoryIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-zion-blue-dark bg-zion-blue-light px-2 py-1 rounded">
                {service.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-zion-blue-dark mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </h3>
            <p className="text-zion-slate text-sm mb-3">
              {service.description}
            </p>
          </div>
          {service.status === 'Active' && (
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Active
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{service.rating}</span>
            <span className="text-zion-slate text-sm">({service.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-zion-cyan" />
              <span className="text-sm font-semibold text-zion-blue-dark">
                Starting at ${service.price.starter}/month
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zion-slate" />
              <span className="text-zion-slate text-sm">{service.deliveryTime}</span>
            </div>
          </div>

          <div className="text-xs text-zion-slate mb-3">
            Market Price: {service.marketPrice}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Key Features:</h4>
          <div className="grid grid-cols-2 gap-1">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate">
                <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Target Audience:</h4>
          <div className="flex flex-wrap gap-1">
            {service.targetAudience.slice(0, 3).map((audience: string, idx: number) => (
              <span key={idx} className="text-xs bg-zion-blue-light text-zion-blue-dark px-2 py-1 rounded">
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a 
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zion-cyan hover:text-zion-cyan-light text-sm flex items-center group"
          >
            Learn More <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-2">
            <a 
              href={`mailto:${service.contactInfo.email}`}
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              Get Quote
            </a>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete range of IT services designed to transform your business. From AI development to cybersecurity, we have the expertise you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <Input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="high">$15,000+</option>
            </select>
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Link as LinkIcon, 
  Zap,
  Settings,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from "@/data/comprehensiveServices";
import { SEO } from "@/components/SEO";

export default function ComprehensiveServicesPage() {
=======
  DollarSign, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Award,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface FilterState {
  search: string;
  category: string;
  pricingModel: string;
  priceRange: string;
}

export default function ComprehensiveServicesPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    pricingModel: '',
    priceRange: ''
  });

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesCategory = !filters.category || service.category === filters.category;
      const matchesPricingModel = !filters.pricingModel || service.pricingModel === filters.pricingModel;
      
      let matchesPriceRange = true;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          matchesPriceRange = service.price >= min && service.price <= max;
        } else {
          matchesPriceRange = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPricingModel && matchesPriceRange;
    });
  }, [filters]);

  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);
  const categories = SERVICE_CATEGORIES;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Zap className="h-5 w-5" />;
      case 'Cloud & DevOps':
        return <Globe className="h-5 w-5" />;
      case 'Cybersecurity':
        return <Shield className="h-5 w-5" />;
      case 'Data & Analytics':
        return <TrendingUp className="h-5 w-5" />;
      case 'Web & Mobile Development':
        return <ArrowUpRight className="h-5 w-5" />;
      case 'Blockchain & Web3':
        return <Award className="h-5 w-5" />;
      case 'IoT & Hardware':
        return <Users className="h-5 w-5" />;
      case 'Digital Transformation':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <ArrowUpRight className="h-5 w-5" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time':
        return 'One-time';
      case 'subscription':
        return 'Subscription';
      case 'usage-based':
        return 'Usage-based';
      case 'project-based':
        return 'Project-based';
      default:
        return model;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  TrendingUp, 
  Monitor, 
  Link as LinkIcon,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Globe,
  Zap,
  Users,
  Circle,
  BarChart3,
  Lock,
  Server,
  Code,
  Smartphone,
  Network,
  Wallet,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { ALL_EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from "@/data/expandedServices";

const ComprehensiveServicesPage = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return <Brain className="h-6 w-6 text-blue-500" />;
      case 'cybersecurity':
        return <Shield className="h-6 w-6 text-red-500" />;
      case 'cloud services':
      case 'devops':
        return <Cloud className="h-6 w-6 text-green-500" />;
      case 'data analytics':
        return <Database className="h-6 w-6 text-purple-500" />;
      case 'digital transformation':
        return <TrendingUp className="h-6 w-6 text-orange-500" />;
      case 'iot & edge computing':
        return <Monitor className="h-6 w-6 text-cyan-500" />;
      case 'blockchain & web3':
        return <Wallet className="h-6 w-6 text-yellow-500" />;
      default:
        return <Code className="h-6 w-6 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cybersecurity':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'cloud services':
      case 'devops':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'data analytics':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'digital transformation':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'iot & edge computing':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'blockchain & web3':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zion-cyan">
              Transform your business with cutting-edge technology services from ZionTech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark font-semibold">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-purple text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
=======
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              kleber@ziontechgroup.com
            </Button>
=======
      {/* Contact Information Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zion-purple" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zion-purple" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zion-purple" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-zion-purple" />
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-purple hover:underline font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose ZionTech Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ZionTech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, scalable, and cost-effective technology solutions that drive real business transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zion-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with 10+ years of experience in cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Circle className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored approaches designed specifically for your business needs and objectives</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
              <p className="text-gray-600">Agile methodology ensuring quick turnaround times without compromising quality</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and measurable business outcomes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPANDED_SERVICE_CATEGORIES.map((category) => {
              let linkPath = `/services/${category.value}`;
              if (category.value === 'ai-ml') linkPath = '/ai-services';
              if (category.value === 'cybersecurity') linkPath = '/cybersecurity-services';
              
              return (
                <Card key={category.value} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      {getCategoryIcon(category.label)}
                    </div>
                    <CardTitle className="text-xl">{category.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      Cutting-edge solutions in {category.label.toLowerCase()} to drive innovation and growth
                    </p>
                    <Link to={linkPath}>
                      <Button variant="outline" className="w-full">
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      {getCategoryIcon(service.category)}
                      <span className="ml-2">{service.category}</span>
                    </Badge>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
=======
  Globe, 
  Shield, 
  Cloud, 
  Database,
  Code,
  BarChart3,
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Zap,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_SERVICES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing tier
    if (selectedPricingTier !== 'all') {
      const tier = SERVICE_PRICING_TIERS[selectedPricingTier as keyof typeof SERVICE_PRICING_TIERS];
      if (tier) {
        filtered = filtered.filter(service => {
          const discountedPrice = service.price * (1 - tier.discount);
          if (selectedPricingTier === 'startup') return discountedPrice <= 5000;
          if (selectedPricingTier === 'smb') return discountedPrice <= 15000;
          return true; // enterprise
        });
      }
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPricingTier, sortBy]);

  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier) {
      return price * (1 - pricingTier.discount);
    }
    return price;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. Expert consulting, development, and support for businesses of all sizes."
        keywords="IT services, AI services, micro SAAS, technology consulting, cybersecurity, cloud migration, data analytics"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge micro SAAS solutions, expert IT consulting, 
            and innovative AI services. From startups to enterprises, we deliver results that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>Certified Professionals</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
            </Button>
=======
const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-6 w-6" />,
  "Cloud & DevOps": <Cloud className="h-6 w-6" />,
  "Cybersecurity": <Shield className="h-6 w-6" />,
  "Data & Analytics": <BarChart3 className="h-6 w-6" />,
  "Web & Mobile Development": <Smartphone className="h-6 w-6" />,
  "Digital Transformation": <TrendingUp className="h-6 w-6" />,
  "Blockchain & Web3": <Code className="h-6 w-6" />,
  "IoT & Edge Computing": <Server className="h-6 w-6" />
};

const pricingModelColors = {
  "one-time": "bg-blue-100 text-blue-800",
  "monthly": "bg-green-100 text-green-800",
  "hourly": "bg-yellow-100 text-yellow-800",
  "project-based": "bg-purple-100 text-purple-800"
};

const supportLevelColors = {
  "basic": "bg-gray-100 text-gray-800",
  "premium": "bg-blue-100 text-blue-800",
  "enterprise": "bg-purple-100 text-purple-800"
};

export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter services based on search and filters
  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'under-5k') matchesPrice = (service.price || 0) < 5000;
    else if (priceRange === '5k-15k') matchesPrice = (service.price || 0) >= 5000 && (service.price || 0) < 15000;
    else if (priceRange === '15k-30k') matchesPrice = (service.price || 0) >= 15000 && (service.price || 0) < 30000;
    else if (priceRange === 'over-30k') matchesPrice = (service.price || 0) >= 30000;

    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    const categoryKey = selectedCategory as keyof typeof EXPANDED_SERVICE_SUBCATEGORIES;
    return EXPANDED_SERVICE_SUBCATEGORIES[categoryKey] || [];
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Globe className="w-5 h-5" />,
      'DevOps': <Code className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'Blockchain': <Blockchain className="w-5 h-5" />,
      'IoT': <Cpu className="w-5 h-5" />,
      'Hardware': <Cpu className="w-5 h-5" />,
      'Business Automation': <BarChart3 className="w-5 h-5" />,
      'Business Solutions': <BarChart3 className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact for pricing';
    return `$${price.toLocaleString()}`;
  };

  const getDeliveryTime = (availability: string) => {
    return availability || 'Contact for timeline';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of professional IT services, AI solutions, and technology consulting. From AI development to cybersecurity, cloud migration to blockchain solutions."
        keywords="IT services, AI development, cybersecurity, cloud migration, blockchain, IoT, mobile development, web development, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional IT & AI Services
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions delivered by expert professionals. From AI development to cybersecurity, 
            cloud infrastructure to blockchain solutions - we've got your business covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-cyan">
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
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-5k">Under $5,000</SelectItem>
                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                <SelectItem value="over-30k">Over $30,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Professional Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Expert solutions tailored to your business needs with competitive pricing and guaranteed quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(service.category)}
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                        {service.subcategory}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${viewMode === 'list' ? 'lg:pl-6' : ''}`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Pricing and Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-zion-cyan" />
                          <span className="text-white font-bold text-xl">
                            {service.currency}{service.price}
                          </span>
                          <span className="text-zion-slate-light">
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Delivery and Contact */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Users className="w-4 h-4" />
                          <span>{service.targetAudience.length} target audiences</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-3xl mx-auto">
            Let our expert team help you leverage cutting-edge technology to achieve your business goals. 
            Get a free consultation and customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-zion-cyan">ZionTech Group</h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner for innovative technology solutions. We specialize in AI, cybersecurity, 
                cloud services, and digital transformation to help businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan/80">
                  <Globe className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zion-cyan">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesPage;
