<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { 
  SERVICE_CATEGORIES, 
  MICRO_SERVICES, 
  MicroService, 
  ServiceCategory
} from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  TrendingUp,
  Mail,
  Phone,
  Globe,
  Award,
  Users,
  Zap,
  Filter,
  ArrowRight,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Lock
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const PricingCard: React.FC<{ service: MicroService }> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
            <CardDescription className="text-zion-slate-light text-sm line-clamp-2">
              {service.description}
            </CardDescription>
          </div>
          {service.featured && (
            <Badge variant="secondary" className="bg-zion-purple text-white text-xs">
              <Award className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{service.rating}</span>
            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
          </div>
          <Badge variant="outline" className="border-zion-purple text-zion-cyan text-xs">
            AI Score: {service.aiScore}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="text-center p-4 bg-zion-blue rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="text-white text-2xl font-bold">
                ${service.price.toLocaleString()}
              </span>
            </div>
            <div className="text-zion-slate-light text-sm">
              {service.pricingModel === 'monthly' ? 'per month' : 'one-time'}
            </div>
            <div className="text-zion-cyan text-xs mt-1">
              Market: {service.marketPrice}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-zion-slate-light text-sm">
            <Clock className="w-4 h-4" />
            <span>Delivery: {service.deliveryTime}</span>
          </div>

          <div className="flex flex-wrap gap-1 justify-center">
            {service.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Users className="w-4 h-4 text-zion-cyan" />
              <span>{service.author.name}</span>
              {service.author.verified && (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
            </div>
          </div>

          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </Button>

          {showDetails && (
            <div className="space-y-4 pt-3 border-t border-zion-blue-light">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-purple" />
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Key Benefits
                </h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zion-blue p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Contact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryPricingSection: React.FC<{ category: ServiceCategory }> = ({ category }) => {
  const services = MICRO_SERVICES.filter(service => service.category === category.id);
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${category.color} mb-6`}>
          <span className="text-3xl">{category.icon}</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>
        <p className="text-zion-slate-light max-w-2xl mx-auto">{category.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <PricingCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

const PricingComparisonTable: React.FC = () => {
  const featuredServices = MICRO_SERVICES.filter(service => service.featured);
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Services Comparison</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zion-blue-light">
              <th className="text-left p-4 text-zion-cyan font-semibold">Service</th>
              <th className="text-center p-4 text-zion-cyan font-semibold">Price</th>
              <th className="text-center p-4 text-zion-cyan font-semibold">Delivery Time</th>
              <th className="text-center p-4 text-zion-cyan font-semibold">AI Score</th>
              <th className="text-center p-4 text-zion-cyan font-semibold">Rating</th>
              <th className="text-center p-4 text-zion-cyan font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {featuredServices.map((service) => (
              <tr key={service.id} className="border-b border-zion-blue-light hover:bg-zion-blue-dark/50">
                <td className="p-4">
                  <div>
                    <div className="text-white font-semibold">{service.title}</div>
                    <div className="text-zion-slate-light text-sm">{service.subcategory}</div>
                  </div>
                </td>
                <td className="text-center p-4">
                  <div className="text-white font-bold">${service.price.toLocaleString()}</div>
                  <div className="text-zion-slate-light text-sm">{service.pricingModel}</div>
                </td>
                <td className="text-center p-4 text-zion-slate-light">{service.deliveryTime}</td>
                <td className="text-center p-4">
                  <Badge variant="outline" className="border-zion-purple text-zion-cyan">
                    {service.aiScore}
                  </Badge>
                </td>
                <td className="text-center p-4">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                  </div>
                  <div className="text-zion-slate-light text-sm">({service.reviewCount})</div>
                </td>
                <td className="text-center p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => window.location.href = `mailto:${service.contactInfo.email}`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
=======
import React, { useState } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Shield, 
  Clock,
  Phone,
  Mail,
  ExternalLink,
  BarChart3,
  ArrowUpRight,
  Users,
  Globe
} from 'lucide-react';
import { SEO } from '@/components/SEO';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857

export default function ServicesPricingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('all');

<<<<<<< HEAD
  const filteredServices = useMemo(() => {
    let services = MICRO_SERVICES;
    
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      services = services.filter(service => 
        service.title.toLowerCase().includes(lowercaseQuery) ||
        service.description.toLowerCase().includes(lowercaseQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    }
    
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }
    
    return services;
  }, [searchQuery, selectedCategory]);

  const totalValue = MICRO_SERVICES.reduce((sum, service) => sum + service.price, 0);
  const averagePrice = totalValue / MICRO_SERVICES.length;

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Services Pricing - Zion Tech Group" 
        description="Comprehensive pricing for all our IT and AI services. Compare features, benefits, and pricing to find the perfect solution for your business needs."
        keywords="IT services pricing, AI services cost, cybersecurity pricing, cloud services pricing, data analytics pricing, web development pricing"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark to-zion-blue py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services Pricing
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent pricing for all our professional IT and AI services. Compare features, benefits, and costs 
            to find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder:text-zion-slate-light focus:border-zion-purple focus:outline-none"
              />
            </div>
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              Get Custom Quote
            </Button>
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Building, 
  Smartphone, 
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock
} from "lucide-react";
import { EXPANDED_SERVICES, SERVICE_PRICING_TIERS, SERVICE_BENEFITS } from "@/data/expandedServices";

// Group services by category for better organization
const servicesByCategory = EXPANDED_SERVICES.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as { [key: string]: typeof EXPANDED_SERVICES });

// Pricing comparison features
const pricingFeatures = [
  "AI-Powered Solutions",
  "24/7 Support",
  "Global Coverage",
  "Custom Integration",
  "Training & Documentation",
  "Regular Updates",
  "Security Compliance",
  "Scalable Architecture"
];

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Object.keys(servicesByCategory);
  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : servicesByCategory[selectedCategory] || [];

  const getCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'AI Automation': <Zap className="h-5 w-5" />,
      'Customer Intelligence': <Users className="h-5 w-5" />,
      'Content Marketing': <TrendingUp className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Threat Intelligence': <Shield className="h-5 w-5" />,
      'Cloud Management': <Globe className="h-5 w-5" />,
      'DevOps': <Zap className="h-5 w-5" />,
      'Data Analytics': <TrendingUp className="h-5 w-5" />,
      'IoT & Predictive Analytics': <Zap className="h-5 w-5" />,
      'Business Intelligence': <TrendingUp className="h-5 w-5" />,
      'Digital Transformation': <Building className="h-5 w-5" />,
      'Edge Computing': <Globe className="h-5 w-5" />,
      'API Management': <Zap className="h-5 w-5" />,
      'Blockchain & Web3': <Zap className="h-5 w-5" />,
      'Mobile Development': <Smartphone className="h-5 w-5" />,
      'E-commerce': <ShoppingCart className="h-5 w-5" />,
      'Healthcare Technology': <Heart className="h-5 w-5" />,
      'FinTech': <TrendingUp className="h-5 w-5" />,
      'Education Technology': <GraduationCap className="h-5 w-5" />,
      'Supply Chain': <Truck className="h-5 w-5" />
    };
    return categoryIcons[category] || <Zap className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Services Pricing & Comparison
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Transparent pricing for all our IT & AI services. Choose the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-cyan">$1,999</div>
              <div className="text-sm">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-purple">4 Tiers</div>
              <div className="text-sm">Pricing Options</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-cyan">25+</div>
              <div className="text-sm">Services Available</div>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
=======
  const filteredServices = selectedCategory === 'all' 
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.services.includes(service)
      );

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'one-time': return <ArrowUpRight className="w-4 h-4" />;
      case 'monthly': return <Clock className="w-4 h-4" />;
      case 'hourly': return <Zap className="w-4 h-4" />;
      case 'project-based': return <BarChart3 className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateROI = (service: any) => {
    // Simple ROI calculation based on benefits mentioned
    const benefits = service.benefits;
    let roi = 0;
    
    benefits.forEach((benefit: string) => {
      if (benefit.includes('%')) {
        const percentage = parseInt(benefit.match(/\d+/)?.[0] || '0');
        roi += percentage;
      } else if (benefit.includes('reduce') || benefit.includes('decrease')) {
        roi += 15; // Conservative estimate for cost reduction
      } else if (benefit.includes('improve') || benefit.includes('increase')) {
        roi += 20; // Conservative estimate for improvement
      }
    });
    
    return Math.min(roi, 200); // Cap at 200% for realistic display
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Pricing & ROI - Zion Tech Group" 
        description="Compare our IT and AI service pricing with market rates. See detailed ROI analysis and value propositions for each solution."
        keywords="IT services pricing, AI services cost, cybersecurity pricing, cloud services pricing, ROI analysis, value proposition"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing & ROI Analysis
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent pricing for all our IT and AI services. Compare our competitive rates with market prices and see the real value we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <BarChart3 className="w-5 h-5 mr-2" />
              Calculate ROI
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-blue hover:bg-zion-blue-dark"
            >
              All Services ({ENHANCED_SERVICES.length})
            </Button>
            {SERVICE_CATEGORIES.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-zion-blue hover:bg-zion-blue-dark' : ''}
              >
                {category.icon} {category.name} ({category.services.length})
              </Button>
            ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Pricing Overview */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Total Services Value</h3>
            <p className="text-zion-cyan text-2xl font-bold">${totalValue.toLocaleString()}</p>
            <p className="text-zion-slate-light text-sm mt-2">Comprehensive service portfolio</p>
          </div>
          
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Average Service Price</h3>
            <p className="text-zion-cyan text-2xl font-bold">${Math.round(averagePrice).toLocaleString()}</p>
            <p className="text-zion-slate-light text-sm mt-2">Competitive market pricing</p>
          </div>
          
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Featured Services</h3>
            <p className="text-zion-cyan text-2xl font-bold">{MICRO_SERVICES.filter(s => s.featured).length}</p>
            <p className="text-zion-slate-light text-sm mt-2">Premium quality solutions</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-zion-blue-dark border-zion-blue-light">
            <TabsTrigger value="all" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              All Services
            </TabsTrigger>
            <TabsTrigger value="comparison" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              Comparison
            </TabsTrigger>
            <TabsTrigger value="categories" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              By Category
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              Get Quote
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-zion-purple' : 'border-zion-blue-light text-zion-cyan'}
              >
                All Categories
              </Button>
              {SERVICE_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-zion-purple' : 'border-zion-blue-light text-zion-cyan'}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <PricingCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-8">
            <PricingComparisonTable />
          </TabsContent>

          <TabsContent value="categories" className="space-y-12">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.id}>
                <CategoryPricingSection category={category} />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get a Custom Quote</h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
                Need a custom solution or have specific requirements? Our team will work with you to create 
                a tailored proposal that meets your exact needs and budget.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Email Consultation</h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    Send us your requirements and we'll provide a detailed proposal within 24 hours.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
                  >
                    Send Email
                  </Button>
                </div>
                
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Phone Consultation</h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    Schedule a call with our experts to discuss your project in detail.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => window.location.href = 'tel:+13024640950'}
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact CTA */}
      <div className="bg-zion-blue-dark border-t border-zion-blue-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Choose from our comprehensive range of services or contact us for a custom solution. 
            Our team is ready to help you succeed with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call for Consultation
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Mobile: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
=======
      {/* Contact Information Banner */}
      <div className="bg-zion-purple/20 border-b border-zion-purple/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">+1 302 464 0950</span>
              <Mail className="h-5 w-5 text-zion-cyan ml-4" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Pricing Tiers Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Tiers Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-zion-cyan text-xl">{key.charAt(0).toUpperCase() + key.slice(1)}</CardTitle>
                  <CardDescription className="text-zion-cyan-light text-lg font-semibold">{tier.range}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center mb-6">{tier.description}</p>
                  <div className="space-y-3">
                    {pricingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark text-white"
                    onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry', '_blank')}
                  >
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
=======
      {/* Pricing Table */}
      <div className="container mx-auto px-4 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-zion-blue text-white">
                <th className="p-4 text-left border-b">Service</th>
                <th className="p-4 text-center border-b">Our Price</th>
                <th className="p-4 text-center border-b">Market Price</th>
                <th className="p-4 text-center border-b">Savings</th>
                <th className="p-4 text-center border-b">ROI Estimate</th>
                <th className="p-4 text-center border-b">Support Level</th>
                <th className="p-4 text-center border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, index) => {
                const marketPriceRange = service.marketPrice;
                const marketPriceMin = parseInt(marketPriceRange.match(/\$([\d,]+)/)?.[1]?.replace(/,/g, '') || '0');
                const marketPriceMax = parseInt(marketPriceRange.match(/\$([\d,]+)/g)?.[1]?.replace(/[$,]/g, '') || '0');
                const marketPriceAvg = (marketPriceMin + marketPriceMax) / 2;
                const savings = marketPriceAvg > service.price ? Math.round(((marketPriceAvg - service.price) / marketPriceAvg) * 100) : 0;
                const roi = calculateROI(service);

                return (
                  <tr key={service.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 border-b">
                      <div>
                        <div className="font-semibold text-lg">{service.title}</div>
                        <div className="text-sm text-gray-600 mb-2">{service.description}</div>
                        <div className="flex items-center gap-2 mb-2">
                          {getPricingModelIcon(service.pricingModel)}
                          <Badge variant="outline" className="text-xs">
                            {getPricingModelLabel(service.pricingModel)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm">{service.rating} ({service.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="text-2xl font-bold text-green-600">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.pricingModel === 'monthly' ? '/month' : 
                         service.pricingModel === 'hourly' ? '/hour' : 
                         service.pricingModel === 'project-based' ? '/project' : ''}
                      </div>
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="text-lg font-medium text-gray-700">
                        {service.marketPrice}
                      </div>
                      <div className="text-sm text-gray-500">
                        Market Average
                      </div>
                    </td>
                    <td className="p-4 text-center border-b">
                      {savings > 0 ? (
                        <div className="text-green-600 font-bold">
                          {savings}% OFF
                        </div>
                      ) : (
                        <div className="text-gray-500">
                          Market Rate
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="font-bold text-blue-600">{roi}%</span>
                      </div>
                      <div className="text-xs text-gray-500">Estimated ROI</div>
                    </td>
                    <td className="p-4 text-center border-b">
                      <Badge className={getSupportLevelColor(service.supportLevel)}>
                        {service.supportLevel}
                      </Badge>
                    </td>
                    <td className="p-4 text-center border-b">
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found in this category</div>
            <Button onClick={() => setSelectedCategory('all')}>
              View All Services
            </Button>
          </div>
        )}
      </div>

      {/* Value Proposition Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our services are priced 15-40% below market rates while maintaining the highest quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Proven ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our solutions deliver measurable results with average ROI of 150-300% within the first year.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Enterprise Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enterprise-grade solutions with premium support, available to businesses of all sizes.
                </p>
              </CardContent>
            </Card>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          </div>
        </div>

<<<<<<< HEAD
        {/* Service Categories Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Services by Category</h2>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-white/10 border-white/20">
              <TabsTrigger value="all" className="text-white data-[state=active]:bg-zion-purple">
                All Services
              </TabsTrigger>
              {categories.slice(0, 5).map(category => (
                <TabsTrigger key={category} value={category} className="text-white data-[state=active]:bg-zion-purple">
                  {category.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                            {service.price && service.price <= 4999 ? 'Starter' : 
                             service.price && service.price <= 9999 ? 'Professional' : 
                             service.price && service.price <= 25000 ? 'Enterprise' : 'Custom'}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                      <CardDescription className="text-zion-cyan-light line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {/* Pricing and Details */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Price:</span>
                            <span className="font-semibold text-zion-cyan text-lg">
                              ${service.price?.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Availability:</span>
                            <span className="flex items-center gap-1 text-sm">
                              <Clock className="h-3 w-3" />
                              {service.availability}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Location:</span>
                            <span className="flex items-center gap-1 text-sm">
                              <Globe className="h-3 w-3" />
                              {service.location}
                            </span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-white/10 text-zion-cyan-light border-white/20 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Rating and AI Score */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm">{service.rating}</span>
                            <span className="text-xs text-zion-cyan-light">({service.reviewCount} reviews)</span>
                          </div>
                          {service.aiScore && (
                            <Badge className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                              AI Score: {service.aiScore}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                            onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Quote for ${service.title}`, '_blank')}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Get Quote
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Service Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose ZionTech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_BENEFITS).map(([key, benefit]) => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <p className="text-zion-cyan-light">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">What's included in the pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  All our services include implementation, training, documentation, and 24/7 support. 
                  Custom integrations and additional features can be added based on your requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Do you offer custom pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  Yes, we provide custom pricing for enterprise solutions and specialized requirements. 
                  Contact us for a personalized quote tailored to your business needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">What payment terms do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  We offer flexible payment terms including upfront payment, milestone-based payments, 
                  and monthly/annual subscription options for ongoing services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Is there a money-back guarantee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  We offer a satisfaction guarantee. If you're not completely satisfied with our services 
                  within the first 30 days, we'll work to make it right or provide a refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-zion-purple to-zion-blue rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 text-zion-cyan-light">
            Let's discuss your project requirements and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-zion-purple hover:bg-zion-cyan-light"
              onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Service Consultation`, '_blank')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
        </div>
=======
      {/* CTA Section */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact our team for a personalized consultation and custom pricing tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <BarChart3 className="w-5 h-5 mr-2" />
              Calculate Custom ROI
            </Button>
          </div>
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      </div>
    </div>
  );
}