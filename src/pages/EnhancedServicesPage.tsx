import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, EnhancedService } from '@/data/enhancedServices';
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
=======
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Users,
  Building,
  Mail,
  Phone,
  MapPin
=======
  Shield, 
  Zap, 
  TrendingUp, 
  Globe,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Users,
  Calendar
=======
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp,
  Shield,
  Cloud,
  Database,
  Network, 
  Monitor,
  Eye,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
=======
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
=======
import React, { useState, useEffect } from 'react';
import { 
  Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, 
  Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, 
  ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, 
  Building, Factory, Store, Car, Plane, Ship, Home, Hospital, 
  Building2, GraduationCap, Calendar, FileText, BarChart3, 
  MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, 
  PieChart, Activity, Package, Wifi, ArrowRight, CheckCircle, 
  Award, Rocket, Lightbulb, Shield as ShieldIcon, Zap as ZapIcon,
  Brain as BrainIcon, Cloud as CloudIcon, Database as DatabaseIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '../data/comprehensiveServices';

const EnhancedServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [selectedSupport, setSelectedSupport] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Filter services based on search and filters
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'starter' && service.price && service.price <= 4999) ||
                        (priceRange === 'professional' && service.price && service.price > 4999 && service.price <= 14999) ||
                        (priceRange === 'enterprise' && service.price && service.price > 14999);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
=======
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || 
                          (selectedPricing === 'budget' && service.price < 1000) ||
                          (selectedPricing === 'mid-range' && service.price >= 1000 && service.price < 3000) ||
                          (selectedPricing === 'enterprise' && service.price >= 3000);
    const matchesSupport = selectedSupport === 'all' || service.supportLevel === selectedSupport;

    return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai marketing':
        return <TrendingUp className="w-5 h-5" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'cloud services':
      case 'devops':
        return <Cloud className="w-5 h-5" />;
      case 'data analytics':
      case 'data management':
      case 'iot & analytics':
        return <Database className="w-5 h-5" />;
      case 'blockchain':
        return <Network className="w-5 h-5" />;
      case 'edge computing':
        return <Monitor className="w-5 h-5" />;
      case 'quantum computing':
        return <Monitor className="w-5 h-5" />;
      case 'ar/vr':
        return <Eye className="w-5 h-5" />;
      case 'fintech':
        return <DollarSign className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getPriceColor = (price: number) => {
    if (price <= 4999) return 'text-green-500';
    if (price <= 14999) return 'text-blue-500';
    return 'text-purple-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Enhanced IT & AI Services - ZionTech Group" 
        description="Discover our comprehensive range of innovative IT services, AI solutions, cybersecurity, cloud services, and cutting-edge technology solutions."
        keywords="AI services, IT solutions, cybersecurity, cloud services, blockchain, quantum computing, metaverse, fintech"
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
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

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Automation': <Brain className="w-5 h-5" />,
      'Content AI': <Zap className="w-5 h-5" />,
      'Predictive Analytics': <TrendingUp className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Threat Intelligence': <Lock className="w-5 h-5" />,
      'Compliance': <Shield className="w-5 h-5" />,
      'Cloud Management': <Cloud className="w-5 h-5" />,
      'DevOps': <Zap className="w-5 h-5" />,
      'Containerization': <Database className="w-5 h-5" />,
      'Data Engineering': <Database className="w-5 h-5" />,
      'Data Governance': <Database className="w-5 h-5" />,
      'Business Intelligence': <TrendingUp className="w-5 h-5" />,
      'IoT': <Smartphone className="w-5 h-5" />,
      'Edge Computing': <Zap className="w-5 h-5" />,
      'Blockchain': <Lock className="w-5 h-5" />,
      'Web3': <Globe className="w-5 h-5" />,
      'Digital Transformation': <Building className="w-5 h-5" />,
      'System Modernization': <Zap className="w-5 h-5" />,
      'Healthcare AI': <Users className="w-5 h-5" />,
      'FinTech': <TrendingUp className="w-5 h-5" />,
      'Retail AI': <Building className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise IT & AI Services - Zion Tech Group" 
        description="Comprehensive enterprise IT services, AI solutions, cybersecurity, cloud management, and digital transformation services. Expert consulting and implementation worldwide."
        keywords="enterprise IT services, AI solutions, cybersecurity, cloud management, digital transformation, IT consulting"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity, 
            we deliver enterprise-grade services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              View Case Studies
=======
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Cutting-edge technology solutions designed to transform your business. From AI automation to quantum computing, 
            we deliver innovative services that drive growth and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
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

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-cyan">
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
=======
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <BrainIcon className="w-6 h-6 text-blue-500" />;
      case 'Cybersecurity':
        return <ShieldIcon className="w-6 h-6 text-red-500" />;
      case 'Blockchain & Web3':
        return <ZapIcon className="w-6 h-6 text-yellow-500" />;
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6 text-purple-500" />;
      case 'Internet of Things':
        return <Wifi className="w-6 h-6 text-green-500" />;
      case 'Cloud & Infrastructure':
        return <CloudIcon className="w-6 h-6 text-gray-500" />;
      case 'Data & Analytics':
        return <DatabaseIcon className="w-6 h-6 text-indigo-500" />;
      default:
        return <Settings className="w-6 h-6 text-gray-400" />;
    }
  };

  const getPricingBadge = (price: number) => {
    if (price < 1000) return { text: 'Budget', color: 'bg-green-100 text-green-800' };
    if (price < 3000) return { text: 'Mid-Range', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Enterprise', color: 'bg-purple-100 text-purple-800' };
  };

  const getSupportBadge = (support: string) => {
    switch (support) {
      case 'basic':
        return { text: 'Basic', color: 'bg-gray-100 text-gray-800' };
      case 'premium':
        return { text: 'Premium', color: 'bg-blue-100 text-blue-800' };
      case 'enterprise':
        return { text: 'Enterprise', color: 'bg-purple-100 text-purple-800' };
      default:
        return { text: 'Standard', color: 'bg-gray-100 text-gray-800' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Revolutionary Micro SAAS Services & AI Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {ENHANCED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
      {/* Contact Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
=======
                <SelectItem value="starter">Starter ($1,999 - $4,999)</SelectItem>
                <SelectItem value="professional">Professional ($5,000 - $14,999)</SelectItem>
                <SelectItem value="enterprise">Enterprise ($15,000+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Info */}
      <div className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([tier, info]) => (
              <Card key={tier} className="bg-zion-blue border-zion-blue-light text-white">
                <CardHeader>
                  <CardTitle className="text-zion-cyan capitalize">{tier}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">
                    ${info.min.toLocaleString()} - ${info.max.toLocaleString()}
                  </div>
                  <div className="space-y-2">
                    {tier === 'starter' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Essential features for small businesses
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Basic support and documentation
                        </div>
                      </>
                    )}
                    {tier === 'professional' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Advanced features and customization
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Priority support and training
                        </div>
                      </>
                    )}
                    {tier === 'enterprise' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Custom enterprise solutions
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Dedicated support team
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {getPricingModelLabel(service.pricingModel)}
                  </Badge>
                  <Badge className={getSupportLevelColor(service.supportLevel)}>
                    {service.supportLevel}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Market Price</div>
                    <div className="text-sm font-medium">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Rating and AI Score */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  {getAvailabilityIcon(service.availability)}
                  <span>Available: {service.availability}</span>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500 mt-1">
                        +{service.features.length - 3} more features
                      </div>
                    </div>
                    {service.featured && (
                      <Badge className="bg-zion-purple text-white">Featured</Badge>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Contact Actions */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-2 border-t text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    <span>{service.contactInfo.website}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-zion-purple/20 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    {service.featured && (
                      <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zion-blue text-zion-cyan border-zion-blue-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between">
                      <div className={`text-2xl font-bold ${getPriceColor(service.price || 0)}`}>
                        ${service.price?.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Delivery: {service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>Location: {service.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>AI Score: {service.aiScore}/100</span>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                        <Mail className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedPricingModel('all');
              setSelectedSupportLevel('all');
            }}>
              Clear Filters
            </Button>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Pricing</option>
              <option value="budget">Budget ($0-$999)</option>
              <option value="mid-range">Mid-Range ($1K-$2.9K)</option>
              <option value="enterprise">Enterprise ($3K+)</option>
            </select>

            {/* Support Level Filter */}
            <select
              value={selectedSupport}
              onChange={(e) => setSelectedSupport(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Support Levels</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="category">Category</option>
            </select>
            <span className="text-gray-500 text-sm">
              {sortedServices.length} services found
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => {
            const pricingBadge = getPricingBadge(service.price);
            const supportBadge = getSupportBadge(service.supportLevel);
            
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(service.category)}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-2xl font-bold text-blue-600">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">per {service.pricingModel}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${pricingBadge.color}`}>
                      {pricingBadge.text}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${supportBadge.color}`}>
                      {supportBadge.text}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {service.estimatedDelivery}
                    </span>
                  </div>

                  {/* Market Price Comparison */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Market Price:</span>
                      <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">Our Price:</span>
                      <span className="font-bold text-green-600">${service.price.toLocaleString()}/{service.pricingModel}</span>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500 italic">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact & CTA */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <Phone className="w-4 h-4" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Get Quote
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions that drive real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
=======
      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with Zion Tech Group today and discover how our innovative micro SAAS services can revolutionize your operations, enhance security, and drive growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">24/7 support available</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-300">Middletown, DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Our Website
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
                className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
}
=======
}
=======
};

export default EnhancedServicesPage;
