import React from 'react';
import { Link } from 'react-router-dom';
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
import { SEO } from "../components/SEOHead"';

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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get clear, competitive pricing for our comprehensive micro SAAS solutions. No hidden fees, no surprises - just exceptional value for your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2"/>
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/comprehensive-services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Building className="w-5 h-5 mr-2"/>
                View All Services
              </Button>
            </Link>
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Award,
  Zap as Lightning
} from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import Wifi from 'lucide-react/dist/esm/icons/wifi';
import { SEO } from "../components/SEOHead"';

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

export default function ServicesPricingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('all');

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
      <SEOHead 
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
=======
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan"/>
              <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Flexible pricing tiers designed to scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([tierName, tier], index) => (<Card key={tierName} className={`bg-zion-blue border-zion-blue-light ${index === 1 ? 'ring-2 ring-zion-cyan scale-105' : ''}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white">{tierName}</CardTitle>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.label}</div>
                  <CardDescription className="text-zion-slate-light">
                    Perfect for {tierName.toLowerCase()} businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                      <span className="text-white text-sm">Custom solution development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                      <span className="text-white text-sm">Technical support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                      <span className="text-white text-sm">Documentation & training</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                      <span className="text-white text-sm">Maintenance & updates</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <Phone className="w-4 h-4 mr-2"/>
                    Get Started
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </div>

      {/* Service-Specific Pricing */}
      <div className="bg-zion-blue-dark py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(servicesByCategory).map(([category, services]) => (<div key={category} className="bg-zion-blue rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (<div key={service.id} className="bg-zion-blue-dark rounded-lg p-4 border border-zion-blue-light">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-medium">{service.title}</h4>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan text-xs">
                          {service.pricingTier}
                        </Badge>
                      </div>
                      <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-zion-cyan"/>
                          <span className="text-white font-semibold">
                            {service.price?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                    </div>))}
                </div>
              </div>))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
                icon: <Zap className="w-8 h-8"/>,
                title: "Competitive Pricing",
                description: "Market-leading rates without compromising on quality or features"
            },
            {
                icon: <Shield className="w-8 h-8"/>,
                title: "No Hidden Fees",
                description: "Transparent pricing with clear breakdowns of all costs"
            },
            {
                icon: <Users className="w-8 h-8"/>,
                title: "Flexible Plans",
                description: "Customizable solutions that grow with your business needs"
            },
            {
                icon: <Building className="w-8 h-8"/>,
                title: "Proven ROI",
                description: "Measurable business outcomes and return on investment"
            }
        ].map((feature, index) => (<div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zion-cyan text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote tailored to your specific business requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2"/>
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2"/>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>);
}
