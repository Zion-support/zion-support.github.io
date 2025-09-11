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

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
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
  Users,
  BookOpen,
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
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from "@/data/comprehensiveServices";
import { SEO } from "@/components/SEO";
=======
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Globe,
  Code,
  Database,
  Brain,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Cloud,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Network,
  HardDrive,
  Eye,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Database as DataIcon,
  Shield as SecurityIcon,
  Cloud as CloudIcon,
  Zap as AutomationIcon,
  Brain as AIIcon,
  BarChart3 as AnalyticsIcon,
  MessageSquare as ChatIcon,
  FileText as ContentIcon,
  Settings as ConfigIcon
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { ENHANCED_IT_SERVICES } from '@/data/enhancedITServices';
import { ENHANCED_AI_SERVICES } from '@/data/enhancedAIServices';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  badge?: string;
  link: string;
  pricing?: any;
  features?: string[];
  benefits?: string[];
}

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES] || [];
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000' },
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-', label: 'Over $10,000' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. From AI chatbots to cloud optimization, cybersecurity to blockchain development."
        keywords="AI services, IT consulting, cloud services, cybersecurity, data analytics, web development, blockchain, IoT, Zion Tech Group"
=======
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'category':
        return sorted.sort((a, b) => a.category.localeCompare(b.category));
      default:
        return sorted;
    }
  }, [filteredServices, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Comprehensive Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions designed to transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+13024640950" className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light">
                <Phone className="h-4 w-4" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light">
                <Mail className="h-4 w-4" />
                kleber@ziontechgroup.com
=======
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Tech & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our innovative micro SAAS solutions, cutting-edge IT services, and AI-powered platforms designed to transform your business operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Services
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>{CONTACT_INFO.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {CONTACT_INFO.website}
              </a>
            </div>
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
=======
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover the perfect solution for your business needs from our comprehensive portfolio 
              of innovative services and solutions.
            </p>
          </div>
          
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-blue-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate mb-6">
                Try adjusting your filters or search terms to find the services you need.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceRange('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
=======
              {/* Pricing Tier Filter */}
              <select
                value={selectedPricingTier}
                onChange={(e) => setSelectedPricingTier(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="all">All Pricing Tiers</option>
                {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
                  <option key={key} value={key}>
                    {tier.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zion-cyan text-white">
                      {service.subcategory}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-zion-blue line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-zion-slate mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
=======
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-zion-cyan">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-bold text-lg">{service.price?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.availability}</span>
=======
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative solutions that deliver exceptional value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-zion-purple/20">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(service.category)}>
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
      {/* Services Grid */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zion-slate-light text-lg">No services match your current filters.</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setPriceRange('all');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">Your trusted partner for innovative technology solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">Cutting-edge AI, blockchain, and emerging technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with years of industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">Enterprise-grade solutions with comprehensive support</p>
            </div>
          </div>
        </div>
      </section>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-zion-slate mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all our services
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPricingTier('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how our comprehensive IT and AI services can drive your business forward. 
            Get a free consultation and customized solution proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">Round-the-clock technical support and emergency response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations and ROI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-zion-slate-light">Work around your schedule with minimal disruption</p>
=======
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-zion-purple" />
                      </div>
                      <span className="text-sm text-zion-slate-light">AI Score: {service.aiScore}</span>
                    </div>
                    <Link to={`/services?service=${service.id}`}>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
=======

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BarChart3 className="h-4 w-4" />
                      <span>AI Score: {service.aiScore}%</span>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Price:</span>
                      <span className="text-white font-semibold">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Market Price:</span>
                      <span className="text-zion-cyan">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Delivery:</span>
                      <span className="text-white">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-zion-slate-light ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Button>
                  <div className="text-center text-sm text-zion-slate-light">
                    <div>Contact: {service.contactInfo.phone}</div>
                    <div>{service.contactInfo.email}</div>
                  </div>
                </CardFooter>
=======
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-0"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white border-0">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <p>📧 {service.contactInfo.email}</p>
                    <p>📱 {service.contactInfo.phone}</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-zion-slate-light mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search terms or filters</p>
          </motion.div>
        )}

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Our team of experts is ready to help you implement the perfect solution for your business needs.
                Get in touch today for a free consultation and quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-zion-slate-light">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Website</div>
                  <div className="text-zion-slate-light">ziontechgroup.com</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <ArrowUpRight className="h-5 w-5 mr-2" />
                Start Your Project Today
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
=======
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
=======
      </div>

      {/* Pricing Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with flexible engagement models to fit your budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Starter</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$2,499</div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic AI Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Security Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Cloud Migration Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic Analytics Dashboard</span>
                  </li>
                </ul>
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-zion-purple relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Professional</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$7,999</div>
                <CardDescription>Ideal for growing companies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced AI Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Comprehensive Security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Full Cloud Migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom Analytics Platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>24/7 Support</span>
                  </li>
                </ul>
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$19,999</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom AI Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Enterprise Security Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Multi-Cloud Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced Analytics & ML</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dedicated Team</span>
                  </li>
                </ul>
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-3xl mx-auto">
            Let our expert team help you leverage cutting-edge technology to achieve your business goals. 
            Get a free consultation and discover how we can drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark font-semibold">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Schedule Consultation
              </Button>
            </Link>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Comprehensive Services Consultation"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </a>
                  <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Services
                  </a>
                  <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </a>
                  <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro SAAS Services
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
=======

import { ComprehensiveServicesShowcase } from '@/components/ComprehensiveServicesShowcase';
import { ServicesComparisonTable } from '@/components/ServicesComparisonTable';
import { ServicesBenefitsShowcase } from '@/components/ServicesBenefitsShowcase';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive Tech Services - Zion Tech Group" 
        description="Discover our cutting-edge micro SAAS services, enterprise IT solutions, and advanced AI capabilities. Transform your business with innovative technology solutions."
        keywords="AI services, IT services, micro SAAS, cloud migration, cybersecurity, DevOps, machine learning, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />
      
      <ComprehensiveServicesShowcase />
      <ServicesBenefitsShowcase />
      <ServicesComparisonTable />
    </div>
=======
  const [activeTab, setActiveTab] = useState('micro-saas');

export default ComprehensiveServicesPage;
