<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD
import { Search, Mail } from 'lucide-react';
// import { MICRO_SAAS_SERVICES, MicroSaasService, getMicroSaasServicesByCategory, getFeaturedMicroSaasServices } from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";
=======
import React, { useState, useMemo } from 'react';
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, MicroSaasService } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
import { 
  Search, 
  Filter, 
  Star, 
<<<<<<< HEAD
  ExternalLink, 
  Play, 
  FileText, 
  Shield, 
  Zap,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { MicroSaasPricingComparison } from '@/components/services/MicroSaasPricingComparison';
import { ServiceComparisonTable } from '@/components/services/ServiceComparisonTable';

interface ServiceCardProps {
  service: MicroSaasService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${service.price}/year`;
    } else if (service.pricingModel === 'one-time') {
      return `${service.currency}${service.price}`;
    } else {
      return `${service.currency}${service.price}`;
=======
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Code,
  Brain,
  Server,
  BarChart3,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory } from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Services" },
    { value: "AI Services", label: "AI Services" },
    { value: "IT Services", label: "IT Services" },
    { value: "Business Solutions", label: "Business Solutions" },
    { value: "Development Tools", label: "Development Tools" },
    { value: "Analytics", label: "Analytics" },
    { value: "Security", label: "Security" },
    { value: "Automation", label: "Automation" }
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-200", label: "$0 - $200" },
    { value: "200-500", label: "$200 - $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000+", label: "$1,000+" }
  ];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        matchesPrice = service.price >= min && service.price <= max;
      } else {
        matchesPrice = service.price >= min;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Services":
        return <Brain className="h-6 w-6 text-blue-500" />;
      case "IT Services":
        return <Server className="h-6 w-6 text-green-500" />;
      case "Business Solutions":
        return <Code className="h-6 w-6 text-purple-500" />;
      case "Development Tools":
        return <Code className="h-6 w-6 text-orange-500" />;
      case "Analytics":
        return <BarChart3 className="h-6 w-6 text-cyan-500" />;
      case "Security":
        return <Shield className="h-6 w-6 text-red-500" />;
      case "Automation":
        return <Zap className="h-6 w-6 text-yellow-500" />;
      default:
        return <Globe className="h-6 w-6 text-gray-500" />;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case "monthly":
        return "bg-blue-100 text-blue-800";
      case "yearly":
        return "bg-green-100 text-green-800";
      case "one-time":
        return "bg-purple-100 text-purple-800";
      case "usage-based":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
<<<<<<< HEAD
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
            <CardDescription className="text-zion-slate-light text-sm mb-3">
              {service.description}
            </CardDescription>
          </div>
          {service.featured && (
            <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-xs">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-zion-slate-light">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{service.rating}</span>
            <span>({service.reviewCount})</span>
          </div>
          {service.aiScore && (
            <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
              AI Score: {service.aiScore}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan font-semibold text-lg">
              {getPricingDisplay(service)}
            </span>
            <Badge className={getSupportLevelColor(service.supportLevel)}>
              {service.supportLevel}
            </Badge>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2">Key Features:</h4>
              <div className="grid grid-cols-1 gap-1">
                {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <CheckCircle className="h-3 w-3 text-zion-cyan" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              {service.features.length > 4 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-zion-cyan hover:text-zion-cyan-light mt-2"
                >
                  {isExpanded ? 'Show Less' : `Show ${service.features.length - 4} More`}
                </Button>
              )}
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Benefits:</h4>
              <div className="grid grid-cols-1 gap-1">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <TrendingUp className="h-3 w-3 text-zion-cyan" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Target Audience:</h4>
              <div className="flex flex-wrap gap-1">
                {service.targetAudience.slice(0, 3).map((audience, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                    {audience}
                  </Badge>
                ))}
              </div>
            </div>

            {service.freeTier && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">Free Tier Available</span>
                </div>
                <p className="text-green-300 text-sm mt-1">{service.freeTierLimits}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full space-y-3">
          <div className="flex gap-2">
            {service.website && (
              <Button asChild variant="outline" className="flex-1 border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <a href={service.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Site
                </a>
              </Button>
            )}
            {service.demoUrl && (
              <Button asChild variant="outline" className="flex-1 border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
          
          <div className="flex gap-2">
            {service.documentation && (
              <Button asChild variant="ghost" size="sm" className="flex-1 text-zion-slate-light hover:text-zion-cyan">
                <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Docs
                </a>
              </Button>
            )}
            <Button asChild variant="ghost" size="sm" className="flex-1 text-zion-slate-light hover:text-zion-cyan">
              <a href={`mailto:${service.author.email}?subject=Inquiry about ${service.title}`}>
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
<<<<<<< HEAD
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [filteredServices, setFilteredServices] = useState<any[]>([]);

  const categories = [
    { value: 'all', label: 'All Categories', icon: <Globe className="h-4 w-4" /> },
    { value: 'AI & ML', label: 'AI & Machine Learning', icon: <Zap className="h-4 w-4" /> },
    { value: 'Development', label: 'Development Tools', icon: <Code className="h-4 w-4" /> },
    { value: 'Business Tools', label: 'Business Tools', icon: <Building className="h-4 w-4" /> },
    { value: 'Security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { value: 'Analytics', label: 'Analytics', icon: <BarChart3 className="h-4 w-4" /> },
    { value: 'Communication', label: 'Communication', icon: <MessageSquare className="h-4 w-4" /> },
    { value: 'Productivity', label: 'Productivity', icon: <Calendar className="h-4 w-4" /> },
    { value: 'Marketing', label: 'Marketing', icon: <Mail className="h-4 w-4" /> },
    { value: 'Finance', label: 'Finance', icon: <DollarSign className="h-4 w-4" /> },
    { value: 'Healthcare', label: 'Healthcare', icon: <Heart className="h-4 w-4" /> },
    { value: 'Education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { value: 'E-commerce', label: 'E-commerce', icon: <ShoppingCart className="h-4 w-4" /> }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  useEffect(() => {
    let filtered: any[] = [];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (priceRange === '200+') {
          return service.pricing.starter >= 200;
        }
        return service.pricing.starter >= min && service.pricing.starter <= max;
      });
    }

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starter - a.pricing.starter);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const getPriceRange = (service: any) => {
    const { starter, professional, enterprise, currency } = service.pricing;
    return `${currency}${starter} - ${currency}${enterprise}`;
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.icon : <Globe className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions for your business needs. AI, security, analytics, and more with competitive pricing and expert support."
        keywords="micro saas, software as a service, business tools, AI solutions, security, analytics"
=======
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');

  const filteredServices = useMemo(() => {
    return MICRO_SAAS_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
      const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
      
      return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
    });
  }, [searchQuery, selectedCategory, selectedPricingModel, selectedSupportLevel]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    ...MICRO_SAAS_CATEGORIES.map(cat => ({ value: cat.name, label: cat.name }))
  ];

  const pricingModels = [
    { value: 'all', label: 'All Pricing' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'one-time', label: 'One-time' },
    { value: 'usage-based', label: 'Usage-based' }
  ];

  const supportLevels = [
    { value: 'all', label: 'All Support' },
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'enterprise', label: 'Enterprise' }
  ];

  return (
    <>
      <SEO 
        title="Micro SAAS Services & Solutions - ZionTech Group" 
        description="Discover innovative micro SAAS services, AI solutions, IT services, and business automation tools. Expert consulting and implementation services."
        keywords="micro SAAS, AI services, IT consulting, business automation, cloud migration, cybersecurity, blockchain"
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
      case "basic":
        return "bg-gray-100 text-gray-800";
      case "premium":
        return "bg-blue-100 text-blue-800";
      case "enterprise":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, and business automation tools."
        keywords="micro SAAS, AI services, IT services, business automation, Zion Tech Group"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-zion-purple/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-zion-blue/20 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan-light mb-8 leading-relaxed">
              Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services. 
              From AI-powered tools to enterprise security solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold px-8 py-3">
                <TrendingUp className="h-5 w-5 mr-2" />
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold px-8 py-3">
                <Award className="h-5 w-5 mr-2" />
                View Pricing
              </Button>
=======
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover innovative technology solutions that drive business growth. From AI-powered tools to enterprise IT services, 
            we provide cutting-edge solutions tailored to your needs.
          </p>
          
          {/* Contact Info */}
          <div className="bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-zion-cyan">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Middletown, DE</span>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
            </div>
=======
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade IT services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Stats Section */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">0+</div>
              <div className="text-zion-slate-light">Micro SAAS Services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple-light">12</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-blue-light">4.8</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan-light">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-zion-slate-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
              <Input
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-zion-slate border-zion-blue-light text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-blue-light">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-white hover:bg-zion-blue-dark">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      {category.label}
                    </div>
=======
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
<<<<<<< HEAD

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-40 bg-zion-slate border-zion-blue-light text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-blue-light">
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-dark">
=======
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
<<<<<<< HEAD

            {/* Sort Options */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-zion-slate border-zion-blue-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-blue-light">
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-white hover:bg-zion-blue-dark">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
=======
      {/* Filters Section */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  placeholder="Search services, features, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  {pricingModels.map(model => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Support" />
                </SelectTrigger>
                <SelectContent>
                  {supportLevels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
          </div>
        </div>
      </div>

      {/* Services Grid */}
<<<<<<< HEAD
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden bg-zion-slate-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-cyan text-zion-slate-dark font-semibold">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light">
                      {getCategoryIcon(service.category)}
                      <span className="ml-1">{service.category}</span>
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-zion-slate-light text-sm">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-zion-cyan" />
                    <span className="text-white font-semibold">{getPriceRange(service)}</span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-zion-cyan">Key Benefits:</h4>
                    <ul className="text-xs text-zion-slate-light space-y-1">
                      {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold"
                    >
                      <a href={service.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-zion-purple text-zion-purple-light hover:bg-zion-purple/10"
                    >
                      <a href={service.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20"
                    >
                      <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Docs
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20"
                    >
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
=======
      <div className="bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-slate-light">
              Filtered by your criteria. Click on any service to learn more.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-lg mb-4">
                No services match your current filters.
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
<<<<<<< HEAD
                  setPriceRange('all');
                  setSortBy('featured');
                }}
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Clear Filters
              </Button>
            </div>
=======
                  setSelectedPricingModel('all');
                  setSelectedSupportLevel('all');
                }}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
          )}
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Our micro SAAS solutions are designed to scale with your business. Get started today with expert support and implementation guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-slate-dark hover:bg-zion-cyan-light font-semibold px-8 py-3">
              <Clock className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Sales
=======
      {/* Comparison Table Section */}
      <div className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Service Comparison Table
            </h2>
            <p className="text-zion-slate-light">
              Compare all services side by side to find the perfect solution for your business.
            </p>
          </div>
          <ServiceComparisonTable />
        </div>
      </div>

      {/* Pricing Comparison Section */}
      <MicroSaasPricingComparison showTitle={false} />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <a href="mailto:kleber@ziontechgroup.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
            <Button 
              variant="outline" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <Badge variant="secondary" className={getPricingModelColor(service.pricingModel)}>
                      {service.pricingModel}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{service.rating}</span>
                    <span className="text-sm text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-sm text-gray-300 ml-1">
                      /{service.pricingModel === "one-time" ? "project" : service.pricingModel}
                    </span>
                  </div>
                  <Badge className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30">
                    {service.marketPrice}
                  </Badge>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <TrendingUp className="h-3 w-3 text-blue-400" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-3 w-3 text-zion-cyan" />
                    <span>{service.implementationTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-3 w-3 text-zion-purple" />
                    <span>{service.supportLevel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Shield className="h-3 w-3 text-green-400" />
                    <span>{service.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Award className="h-3 w-3 text-yellow-400" />
                    <span>AI Score: {service.aiScore}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan bg-zion-cyan/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <div className="p-4 pt-0 space-y-3">
                {/* Contact Information */}
                <div className="bg-white/10 rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Mail className="h-4 w-4 text-zion-cyan" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="h-4 w-4 text-zion-cyan" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <MapPin className="h-4 w-4 text-zion-cyan" />
                    <span className="line-clamp-1">{service.contactInfo.address}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  >
                    <a href={service.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <Button 
              variant="outline" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-center text-zion-cyan">
            <p className="text-sm">
              <MapPin className="h-4 w-4 inline mr-2" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
  );
}