<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Search, Mail } from 'lucide-react';
// import { MICRO_SAAS_SERVICES, MicroSaasService, getMicroSaasServicesByCategory, getFeaturedMicroSaasServices } from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";
=======
import React, { useState, useMemo } from 'react';
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, MicroSaasService } from '@/data/microSaasServices';
=======
import React, { useState, useMemo } from 'react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getMicroSaasServicesByCategory, searchMicroSaasServices } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
import { 
  Search, 
  Filter, 
  Star, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  ExternalLink, 
  Play, 
  FileText, 
  Shield, 
  Zap,
  Globe,
=======
  ExternalLink, 
  Play, 
  BookOpen, 
  Code, 
  Shield,
  Zap,
  Brain,
  Database,
  Lock,
  Network,
  Cloud,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory, getServicesBySubcategory } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Star, 
  Clock, 
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Smartphone, 
  Eye,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const categories = [
  { id: 'AI Services', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-indigo-600' },
  { id: 'IT Services', icon: <Cloud className="w-5 h-5" />, color: 'from-blue-500 to-cyan-600' },
  { id: 'Innovative Solutions', icon: <Zap className="w-5 h-5" />, color: 'from-green-500 to-emerald-600' }
];

const pricingModels = [
  { value: 'monthly', label: 'Monthly Subscription' },
  { value: 'one-time', label: 'One-time Payment' },
  { value: 'yearly', label: 'Yearly Subscription' },
  { value: 'per-user', label: 'Per User' },
  { value: 'usage-based', label: 'Usage Based' }
];

const supportLevels = [
  { value: 'basic', label: 'Basic Support' },
  { value: 'standard', label: 'Standard Support' },
  { value: 'premium', label: 'Premium Support' },
  { value: 'enterprise', label: 'Enterprise Support' }
];
=======
  ExternalLink, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Database,
  Lock,
  BarChart3,
  MessageSquare,
  Calendar,
  Circle,
  CheckCircle
} from 'lucide-react';

const categories = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)));
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
<<<<<<< HEAD
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
<<<<<<< HEAD
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
=======
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPricing && matchesSupport && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : <Globe className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price}/month`;
    if (model === 'yearly') return `$${price}/year`;
    if (model === 'per-user') return `$${price}/user`;
    if (model === 'usage-based') return `$${price}/usage`;
    return `$${price}`;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
<<<<<<< HEAD
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
=======
  Sparkles
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory, getServicesByTag } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
import { 
  Search, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Play,
  FileText,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
=======
  Clock, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowRight,
  Play,
  Mail,
  ExternalLink
} from 'lucide-react';
import { 
  MICRO_SAAS_SERVICES, 
  SERVICE_CATEGORIES, 
  getServicesByCategory,
  getPopularServices,
  getNewServices,
  type MicroSaasService 
} from '@/data/microSaasServices';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  const categories = ['all', 'AI', 'IT', 'Development', 'Analytics', 'Security', 'Automation', 'Integration', 'Consulting'];
  const allTags = Array.from(new Set(MICRO_SAAS_SERVICES.flatMap(service => service.tags)));

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
<<<<<<< HEAD
<<<<<<< HEAD
        service.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
=======
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
<<<<<<< HEAD
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

<<<<<<< HEAD
    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (priceRange === '200+') {
          return service.pricing.starter >= 200;
        }
        return service.pricing.starter >= min && service.pricing.starter <= max;
      });
=======
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredServices = useMemo(() => {
    let services = MICRO_SAAS_SERVICES;

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      services = services.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
    }

    // Sort services
    switch (sortBy) {
<<<<<<< HEAD
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
=======
    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(service =>
        selectedTags.some(tag => service.tags.includes(tag))
      );
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-6 w-6" />;
      case 'IT': return <Cloud className="h-6 w-6" />;
      case 'Development': return <Code className="h-6 w-6" />;
      case 'Analytics': return <Database className="h-6 w-6" />;
      case 'Security': return <Shield className="h-6 w-6" />;
      case 'Automation': return <Zap className="h-6 w-6" />;
      case 'Integration': return <Network className="h-6 w-6" />;
      case 'Consulting': return <Users className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      case 'Analytics': return 'from-orange-500 to-red-500';
      case 'Security': return 'from-red-500 to-pink-500';
      case 'Automation': return 'from-indigo-500 to-purple-500';
      case 'Integration': return 'from-teal-500 to-blue-500';
      case 'Consulting': return 'from-gray-500 to-slate-500';
      default: return 'from-zion-purple to-zion-cyan';
    }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
<<<<<<< HEAD
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
=======
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore' | 'newest'>('rating');

  const filteredServices = useMemo(() => {
    let services = MICRO_SAAS_SERVICES;
    
    if (selectedCategory !== 'all') {
      services = getMicroSaasServicesByCategory(selectedCategory);
    }
    
    if (searchQuery) {
      services = searchMicroSaasServices(searchQuery);
    }
    
    // Sort services
    services.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.pricing.monthly - b.pricing.monthly;
        case 'aiScore':
=======
      const category = SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory);
      if (category) {
        filtered = filtered.filter(service => service.category === category.name);
      }
    }

    // Filter by pricing model
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricing);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'ai-score':
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
<<<<<<< HEAD
    
    return services;
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Zap className="w-5 h-5" />;
      case 'Analytics':
        return <BarChart3 className="w-5 h-5" />;
      case 'Security':
        return <Shield className="w-5 h-5" />;
      case 'Cloud Services':
        return <Globe className="w-5 h-5" />;
      case 'Data Services':
        return <Database className="w-5 h-5" />;
      case 'Marketing':
        return <TrendingUp className="w-5 h-5" />;
          case 'Productivity':
      return <Circle className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services':
        return 'from-purple-500 to-pink-500';
      case 'Analytics':
        return 'from-blue-500 to-cyan-500';
      case 'Security':
        return 'from-red-500 to-orange-500';
      case 'Cloud Services':
        return 'from-indigo-500 to-purple-500';
      case 'Data Services':
        return 'from-green-500 to-emerald-500';
      case 'Marketing':
        return 'from-yellow-500 to-orange-500';
      case 'Productivity':
        return 'from-teal-500 to-blue-500';
      default:
        return 'from-gray-500 to-slate-500';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, and business automation tools."
        keywords="micro SAAS, AI services, IT services, business automation, Zion Tech Group"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
        description="Discover innovative micro SAAS services for AI, IT, development, analytics, security, and automation. Transform your business with cutting-edge solutions."
        keywords="micro SAAS, AI services, IT services, development tools, analytics, security, automation, Zion Tech Group"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
    <div className="min-h-screen bg-background">
      <SEO 
        title="Micro SAAS Services & Solutions - Zion Tech Group" 
        description="Discover our comprehensive range of AI services, IT solutions, and innovative technology services. Expert consulting, development, and support for your business needs."
        keywords="AI services, IT solutions, micro SAAS, technology consulting, cloud migration, cybersecurity, blockchain, IoT, AR/VR"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions for your business needs. AI services, analytics, security, and more with competitive pricing and expert support."
        keywords="micro SAAS, AI services, business solutions, cloud services, cybersecurity, analytics"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  TrendingUp,
  Clock,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Lightbulb
} from "lucide-react";
import Target from "lucide-react/dist/esm/icons/target";
import { 
  MICRO_SAAS_SERVICES, 
  getMicroSaasServicesByCategory, 
  getFeaturedMicroSaasServices,
  searchMicroSaasServices,
  type MicroSaasService 
} from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";

interface ServiceCardProps {
  service: MicroSaasService;
  formatPrice: (price: number, model: string) => string;
  getCategoryIcon: (category: string) => React.ReactNode;
  getPricingModelLabel: (model: string) => string;
}

function ServiceCard({ service, formatPrice, getCategoryIcon, getPricingModelLabel }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group bg-zion-slate/30 backdrop-blur-md border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 overflow-hidden">
      <div className="relative">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {service.featured && (
            <Badge className="bg-zion-cyan text-zion-slate-dark">
              Featured
            </Badge>
          )}
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30">
            {service.category}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-zion-blue text-white">
            {formatPrice(service.price, service.pricingModel)}
          </Badge>
=======
      case 'price-low':
        services = [...services].sort((a, b) => (a.pricing.monthly || 0) - (b.pricing.monthly || 0));
        break;
      case 'price-high':
        services = [...services].sort((a, b) => (b.pricing.monthly || 0) - (a.pricing.monthly || 0));
        break;
      case 'rating':
        services = [...services].sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        services = [...services].sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return services;
  }, [searchQuery, selectedCategory, sortBy]);

  const categories = [
    { value: 'all', label: 'All Services', icon: <Globe className="h-4 w-4" /> },
    { value: 'AI Services', label: 'AI Services', icon: <Zap className="h-4 w-4" /> },
    { value: 'IT Services', label: 'IT Services', icon: <Shield className="h-4 w-4" /> },
    { value: 'Micro SAAS', label: 'Micro SAAS', icon: <Users className="h-4 w-4" /> },
    { value: 'Development', label: 'Development', icon: <Code className="h-4 w-4" /> },
  ];

  const renderPricing = (service: MicroSaasService) => {
    if (service.pricing.custom) {
      return (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Custom Pricing</p>
          <p className="text-xs text-muted-foreground">{service.pricing.custom}</p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <span className="text-2xl font-bold text-primary">{service.pricing.currency}</span>
          <span className="text-2xl font-bold">{service.pricing.monthly}</span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {service.pricing.currency}{service.pricing.yearly}/year
        </p>
      </div>
    );
  };

  const renderServiceCard = (service: MicroSaasService) => (
    <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/40 overflow-hidden">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {service.featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-md">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{service.rating}</span>
          <span className="text-xs text-gray-300">({service.reviewCount})</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
        </div>
      </div>

      <CardHeader className="pb-3">
<<<<<<< HEAD
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <span className="text-sm text-zion-slate-light">{service.subcategory}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-white">{service.rating}</span>
            <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-slate-light line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Globe className="h-4 w-4" />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center gap-2 text-zion-slate-light">
            <Clock className="h-4 w-4" />
            <span>{service.availability}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-16 h-2 bg-zion-slate rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
                style={{ width: `${service.aiScore}%` }}
              ></div>
            </div>
            <span className="text-sm text-zion-cyan font-medium">{service.aiScore}%</span>
          </div>
          <span className="text-sm text-zion-slate-light">AI Score</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-purple-light">
              {tag}
            </Badge>
          ))}
          {service.tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-zion-slate/30 text-zion-slate-light">
              +{service.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost" 
            className="w-full text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10"
          >
            {isExpanded ? 'Show Less' : 'Show More Details'}
            <ArrowRight className={`h-4 w-4 ml-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </Button>

          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-zion-purple/20">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-zion-cyan" />
                  Key Features
                </h4>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-zion-cyan" />
                  Benefits
                </h4>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-purple-light rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-zion-cyan" />
                  Target Audience
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 3).map((audience, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-blue/30 text-zion-blue-light">
                      {audience}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zion-slate-light">Market Price:</span>
                  <div className="text-white font-medium">{service.marketPrice}</div>
                </div>
                <div>
                  <span className="text-zion-slate-light">Pricing Model:</span>
                  <div className="text-white font-medium">{getPricingModelLabel(service.pricingModel)}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-zion-purple/20">
          <div className="flex gap-2">
            <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
              <ExternalLink className="h-4 w-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MicroSaasServicesPage() {
  const [services, setServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPricingModel, setSelectedPricingModel] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)));
  const pricingModels = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.pricingModel)));

  useEffect(() => {
    let filteredServices = MICRO_SAAS_SERVICES;

    // Apply search filter
    if (searchQuery) {
      filteredServices = searchMicroSaasServices(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filteredServices = filteredServices.filter(service => service.category === selectedCategory);
    }

    // Apply pricing model filter
    if (selectedPricingModel !== "all") {
      filteredServices = filteredServices.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filteredServices = [...filteredServices].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredServices = [...filteredServices].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredServices = [...filteredServices].sort((a, b) => b.rating - a.rating);
        break;
      case "ai-score":
        filteredServices = [...filteredServices].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case "featured":
      default:
        filteredServices = [...filteredServices].sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    setServices(filteredServices);
  }, [searchQuery, selectedCategory, selectedPricingModel, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return <Brain className="h-6 w-6" />;
      case "IT Services":
        return <Zap className="h-6 w-6" />;
      case "AI Services":
        return <Brain className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case "monthly":
        return "Monthly";
      case "yearly":
        return "Yearly";
      case "one-time":
        return "One-time";
      case "usage-based":
        return "Usage-based";
      default:
        return model;
    }
  };

  const formatPrice = (price: number, model: string) => {
    if (model === "monthly" || model === "yearly") {
      return `$${price}/${model === "monthly" ? "mo" : "yr"}`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services & Solutions - Zion Tech Group" 
        description="Discover innovative micro SAAS services, IT solutions, and AI services. Transform your business with our cutting-edge technology solutions."
        keywords="micro SAAS, AI services, IT solutions, cloud migration, cybersecurity, DevOps automation, AI development"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 mt-2">
              {service.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-zion-purple/10 text-zion-purple hover:bg-zion-purple/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Pricing */}
        <div className="bg-gradient-to-r from-zion-blue-dark/10 to-zion-purple/10 p-3 rounded-lg border border-zion-blue/20">
          {renderPricing(service)}
        </div>

        {/* Key Benefits */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-zion-cyan" />
            Key Benefits
          </h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Audience */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Users className="h-4 w-4 text-zion-cyan" />
            Perfect For
          </h4>
          <div className="flex flex-wrap gap-1">
            {service.targetAudience.slice(0, 2).map((audience, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {audience}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <div className="px-6 pb-6 space-y-3">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
            <a href={service.website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </a>
          </Button>
          {service.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3" />
            <a href={`mailto:${service.contactEmail}`} className="hover:text-zion-cyan transition-colors">
              {service.contactEmail}
            </a>
          </div>
          {service.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <a href={`tel:${service.phone}`} className="hover:text-zion-cyan transition-colors">
                {service.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <SEO 
        title="Micro SAAS Services & IT Solutions - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services, AI solutions, IT services, and development solutions. Transform your business with cutting-edge technology."
        keywords="micro SAAS, AI services, IT services, software development, cloud migration, cybersecurity, project management"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30"></div>
        
<<<<<<< HEAD
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
=======
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-zion-cyan/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-zion-cyan mr-4 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our cutting-edge micro SAAS solutions. From AI-powered automation to enterprise-grade security, 
            we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-black font-semibold px-8 py-3">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3">
              <BookOpen className="h-5 w-5 mr-2" />
              View Documentation
            </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Micro SAAS Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our cutting-edge AI services, IT solutions, and innovative technology services. 
            Expert consulting, development, and support tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 animate-pulse"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge micro SAAS services. From AI-powered solutions to enterprise-grade security, 
            we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
      {/* Stats Section */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
<<<<<<< HEAD
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
=======
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}</div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple">8</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">4.8</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple">24/7</div>
              <div className="text-zion-slate-light">Support</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
      {/* Contact Info Bar */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark py-20">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8 leading-relaxed">
              Transform your business with our innovative micro SAAS solutions, cutting-edge AI services, and comprehensive IT solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
                AI & Machine Learning
              </Badge>
              <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30 px-4 py-2 text-lg">
                IT Services
              </Badge>
              <Badge variant="secondary" className="bg-zion-blue/20 text-zion-blue-light border-zion-blue/30 px-4 py-2 text-lg">
                Cloud Solutions
              </Badge>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
      <div className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered services, 
            IT solutions, and innovative micro SAAS platforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">AI Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">IT Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">Micro SAAS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Code className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">Development</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-4">
              Contact our team for personalized consultation and pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Phone className="h-4 w-4 mr-2" />
                +1 302 464 0950
              </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Filters and Search */}
      <div className="py-8 bg-zion-slate-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
=======
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
              <Input
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                className="pl-10 bg-zion-slate border-zion-blue-light text-white placeholder-zion-slate-light"
=======
      {/* Search and Filters */}
      <div className="py-8 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <Input
                placeholder="Search services by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-zion-slate-dark/50 border-zion-purple/30 text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
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
=======
      {/* Filters Section */}
      <div className="bg-white border-b py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
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
=======
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-zion-purple/20 focus:border-zion-purple/40"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
                />
              </div>
            </div>
            
<<<<<<< HEAD
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
=======
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white/5 border-zion-purple/20">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        {category.icon}
                        {category.label}
                      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

<<<<<<< HEAD
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
=======
            <div className="flex flex-wrap gap-3">
              <span className="text-white font-medium flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Categories:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-black hover:bg-zion-cyan-light'
                      : 'border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </Button>
              ))}
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-white font-medium">Popular Tags:</span>
              {allTags.slice(0, 15).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagToggle(tag)}
                  className={`${
                    selectedTags.includes(tag)
                      ? 'bg-zion-purple text-white hover:bg-zion-purple-light'
                      : 'border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
                className="pl-10"
=======
                className="pl-10 bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-zion-slate/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate/30 border-zion-purple/30 text-white placeholder:text-zion-slate-light"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
<<<<<<< HEAD
<<<<<<< HEAD
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>{category.id}</SelectItem>
=======
              <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-purple/30 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
              <SelectTrigger className="bg-zion-slate/30 border-zion-purple/30 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
                ))}
              </SelectContent>
            </Select>

<<<<<<< HEAD
<<<<<<< HEAD
            <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
              <SelectTrigger>
                <SelectValue placeholder="All Pricing Models" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing Models</SelectItem>
                {pricingModels.map(model => (
                  <SelectItem key={model.value} value={model.value}>{model.label}</SelectItem>
=======
            <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
              <SelectTrigger className="bg-zion-slate/30 border-zion-purple/30 text-white">
                <SelectValue placeholder="All Pricing Models" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="all">All Pricing Models</SelectItem>
                {pricingModels.map(model => (
                  <SelectItem key={model} value={model}>{getPricingModelLabel(model)}</SelectItem>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
                ))}
              </SelectContent>
            </Select>

<<<<<<< HEAD
            <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
              <SelectTrigger>
                <SelectValue placeholder="All Support Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Support Levels</SelectItem>
                {supportLevels.map(level => (
                  <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min Price"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-24"
              />
              <span className="text-gray-500">-</span>
              <Input
                type="number"
                placeholder="Max Price"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-24"
              />
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-40 bg-zion-blue-dark border-zion-purple/30 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price">Lowest Price</SelectItem>
                <SelectItem value="aiScore">AI Score</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-zion-slate/30 border-zion-purple/30 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">AI Score</SelectItem>
              </SelectContent>
            </Select>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
          </div>
        </div>
      </div>

      {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center`}>
                      <div className="text-white">
                        {getCategoryIcon(service.category)}
                      </div>
                    </div>
                    <Badge variant="secondary" className={getSupportLevelColor(service.supportLevel)}>
                      {service.supportLevel}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
                    {service.description}
                  </CardDescription>
                </CardHeader>

<<<<<<< HEAD
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
=======
                <CardContent className="pt-0">
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    {service.freeTrial && (
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {service.freeTrialDays}-day free trial
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span>({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.setupTime}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      Get Started
                    </Button>
                    <div className="flex gap-2">
                      {service.website && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Website
                        </Button>
                      )}
                      {service.demoUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="w-4 h-4" />
                        <span>{service.author.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
<<<<<<< HEAD
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
=======
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Our Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              {filteredServices.length} services found. Each solution is designed to solve specific business challenges and drive growth.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
<<<<<<< HEAD
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
=======
              <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPricingModel('all');
                  setSelectedSupportLevel('all');
                  setPriceRange([0, 10000]);
                }}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
              >
                Clear All Filters
              </Button>
            </div>
<<<<<<< HEAD
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTags([]);
              }} className="bg-zion-cyan hover:bg-zion-cyan-light text-black">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-zion-slate-dark/50 border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="flex items-center gap-2">
                        {service.freeTier && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Free Tier
                          </Badge>
                        )}
                        {service.apiAvailable && (
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            API
                          </Badge>
                        )}
                        <Badge className={`${
                          service.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          'bg-gray-500/20 text-gray-400 border-gray-500/30'
                        }`}>
                          {service.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-slate-light leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-zion-purple/20 text-zion-slate-light border-zion-purple/30">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-zion-slate/50 text-zion-slate-light">
                            +{service.features.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Pricing</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-white">
                          <span className="text-2xl font-bold">{service.pricing.currency}{service.pricing.monthly}</span>
                          <span className="text-zion-slate-light text-sm">/month</span>
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          <div>Yearly: {service.pricing.currency}{service.pricing.yearly}</div>
                          <div>Enterprise: {service.pricing.currency}{service.pricing.enterprise}</div>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-zion-slate-light'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 pt-0">
                    <div className="flex flex-wrap gap-2 w-full">
                      <Button asChild className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-black">
                        <a href={service.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Service
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                        <a href={service.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                    
                    <div className="flex gap-2 w-full">
                      <Button asChild variant="outline" size="sm" className="flex-1 border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                        <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Docs
                        </a>
                      </Button>
                      {service.apiAvailable && (
                        <Button asChild variant="outline" size="sm" className="flex-1 border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                          <a href={`${service.documentation}/api`} target="_blank" rel="noopener noreferrer">
                            <Code className="h-4 w-4 mr-2" />
                            API
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
          )}
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-white/5 border-zion-purple/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
          </div>
        </div>

        {/* Services Grid */}
<<<<<<< HEAD
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
=======
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/80 backdrop-blur-md border-zion-purple/30 hover:border-zion-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 to-transparent"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      AI Score: {service.aiScore}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light mt-2">
                    {service.description}
                  </CardDescription>
                </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
<<<<<<< HEAD
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
=======
                <div className="bg-zion-blue-light/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-slate-light text-sm">Starting at</span>
                    <span className="text-zion-cyan font-bold text-lg">
                      {service.pricing.currency}{service.pricing.monthly}/mo
                    </span>
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {service.pricing.currency}{service.pricing.yearly}/year (save {Math.round((1 - service.pricing.yearly / (service.pricing.monthly * 12)) * 100)}%)
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm">
                    {service.rating} ({service.reviewCount} reviews)
                  </span>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-zion-cyan text-sm cursor-pointer hover:underline">
                        +{service.features.length - 3} more features
                      </div>
                    )}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
                  </div>
                </div>

                {/* Tags */}
<<<<<<< HEAD
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan bg-zion-cyan/10">
=======
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-purple-light">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

<<<<<<< HEAD
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
=======
              <CardFooter className="flex flex-col gap-3">
                <div className="flex gap-2 w-full">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window.open(service.demo, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                    onClick={() => window.open(service.website, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between w-full text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">+1 302 464 0950</span>
                  </div>
                </div>
              </CardFooter>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
<<<<<<< HEAD
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
=======
          <div className="text-center py-20">
            <div className="text-zion-slate-light text-xl mb-4">No services found</div>
            <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
          </div>
        )}
      </div>

<<<<<<< HEAD
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
=======
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS services to drive growth, 
            improve efficiency, and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light font-semibold px-8 py-3">
              <ArrowRight className="h-5 w-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple font-semibold px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              Schedule Consultation
=======
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our expert team is ready to help you implement the perfect technology solution. 
            Get in touch for a free consultation and discover how we can accelerate your digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-3xl p-12 text-center border border-zion-purple/30">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our micro SAAS solutions are designed to scale with your business. Get started today with a free consultation 
            and discover how our services can drive growth and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-zion-slate/50 backdrop-blur-md border border-zion-purple/20">
            <TabsTrigger value="all" className="text-white data-[state=active]:bg-zion-purple/20">All Services</TabsTrigger>
            <TabsTrigger value="ai" className="text-white data-[state=active]:bg-zion-purple/20">AI & ML</TabsTrigger>
            <TabsTrigger value="it" className="text-white data-[state=active]:bg-zion-purple/20">IT Services</TabsTrigger>
            <TabsTrigger value="solutions" className="text-white data-[state=active]:bg-zion-purple/20">Solutions</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.category === "AI & Machine Learning" || s.category === "AI Services").map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="it" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.category === "IT Services").map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="solutions" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.subcategory.includes("Solution") || s.subcategory.includes("Platform")).map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  formatPrice={formatPrice}
                  getCategoryIcon={getCategoryIcon}
                  getPricingModelLabel={getPricingModelLabel}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {services.length === 0 && (
          <div className="text-center py-20">
            <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedPricingModel("all");
                setSortBy("featured");
              }}
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-purple-dark via-zion-blue-dark to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your specific needs and discover how our micro SAAS services can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-5 w-5 mr-2" />
              +1 302 464 0950
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
            </Button>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map(renderServiceCard)}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all categories
            </p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our team of experts can create tailored solutions to meet your specific business needs. 
            Let's discuss how we can help transform your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light mb-3">Get in touch for detailed quotes</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light mb-3">Speak directly with our team</p>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Globe className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light mb-3">Our headquarters</p>
              <p className="text-zion-cyan">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
=======

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') return `${currency}${price}/month`;
    if (model === 'yearly') return `${currency}${price}/year`;
    if (model === 'usage-based') return `${currency}${price}/usage`;
    return `${currency}${price}`;
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS services, IT solutions, and AI-powered tools for your business. Expert consulting, development, and automation services."
        keywords="micro SAAS, AI services, IT consulting, business automation, cloud migration, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
        {/* Hero Section with Futuristic Design */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Micro SAAS Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with cutting-edge AI services, IT solutions, and intelligent automation tools
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-sm">
                  🤖 AI-Powered Solutions
                </Badge>
                <Badge variant="secondary" className="bg-zion-blue/20 text-zion-cyan border-zion-blue/30 px-4 py-2 text-sm">
                  💻 IT Infrastructure
                </Badge>
                <Badge variant="secondary" className="bg-zion-cyan/20 text-white border-zion-cyan/30 px-4 py-2 text-sm">
                  ⚡ Business Automation
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-zion-blue-dark/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                    <Input
                      placeholder="Search services, features, or use cases..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light focus:border-zion-cyan"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    <SelectItem value="all">All Categories</SelectItem>
                    {SERVICE_CATEGORIES.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="All Pricing" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    <SelectItem value="all">All Pricing Models</SelectItem>
                    <SelectItem value="monthly">Monthly Subscription</SelectItem>
                    <SelectItem value="yearly">Yearly Subscription</SelectItem>
                    <SelectItem value="one-time">One-time Payment</SelectItem>
                    <SelectItem value="usage-based">Usage-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <span className="text-zion-slate-light">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="ai-score">AI Score</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-zion-slate-light">
                  {filteredServices.length} services found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Featured Services
                </span>
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our most popular and innovative solutions trusted by businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {popularServices.map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        Popular
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-zion-cyan">
                          {formatPrice(service.price, service.currency, service.pricingModel)}
                        </span>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-zion-blue/20 text-zion-slate-light text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        {service.demoLink && (
                          <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                  All Services
                </span>
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Explore our comprehensive collection of micro SAAS services and solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        {service.isPopular && (
                          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                            Popular
                          </Badge>
                        )}
                        {service.isNew && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                            New
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-zion-cyan">
                          {formatPrice(service.price, service.currency, service.pricingModel)}
                        </span>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-zion-slate-light">
                        <p><strong>Market Price:</strong> {service.marketPrice}</p>
                        <p><strong>Target:</strong> {service.targetAudience.slice(0, 2).join(', ')}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-zion-blue/20 text-zion-slate-light text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        {service.demoLink && (
                          <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zion-slate-light text-lg">No services found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPricing('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our experts to discuss your specific needs and find the perfect solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
  );
}