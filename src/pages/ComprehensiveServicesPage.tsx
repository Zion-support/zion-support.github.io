import React, { useState } from 'react';
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Brain, Cloud, Database, Shield, Settings, Zap, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart,
  Phone, Mail, MapPin, Globe, Star, DollarSign, Clock, Users, Search, Filter, Building
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, PRICING_TIERS } from '@/data/comprehensiveServices';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-ac34
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
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricingTier === 'all' || service.pricingTier === selectedPricingTier;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricingTier]);

  const getCategoryIcon = (categoryName: string) => {
    return '💼';
  const [activeTab, setActiveTab] = useState('micro-saas');

  // Combine all services for search
  const allServices: Service[] = [
    ...MICRO_SAAS_SERVICES.map(service => ({
      ...service,
      type: 'Micro SAAS',
      pricing: service.pricing
    })),
    ...ENHANCED_IT_SERVICES.map(service => ({
      ...service,
      type: 'IT Services',
      pricing: service.pricing
    })),
    ...ENHANCED_AI_SERVICES.map(service => ({
      ...service,
      type: 'AI Services',
      pricing: service.pricing
    }))
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Content & Marketing': <FileText className="h-6 w-6" />,
      'Finance & Accounting': <BarChart3 className="h-6 w-6" />,
      'Project Management': <Settings className="h-6 w-6" />,
      'Customer Support': <MessageSquare className="h-6 w-6" />,
      'Analytics & BI': <BarChart3 className="h-6 w-6" />,
      'HR & Recruitment': <Users className="h-6 w-6" />,
      'Cybersecurity': <Shield className="h-6 w-6" />,
      'Cloud Management': <Cloud className="h-6 w-6" />,
      'Marketing Automation': <Zap className="h-6 w-6" />,
      'Developer Tools': <Code className="h-6 w-6" />,
      'AI & Machine Learning': <Brain className="h-6 w-6" />,
      'Cloud Services': <Cloud className="h-6 w-6" />,
      'Data & Analytics': <Database className="h-6 w-6" />,
      'Digital Transformation': <TrendingUp className="h-6 w-6" />,
      'DevOps': <Settings className="h-6 w-6" />,
      'Network Infrastructure': <Network className="h-6 w-6" />,
      'Mobile Development': <MobileIcon className="h-6 w-6" />,
      'Web Development': <WebIcon className="h-6 w-6" />,
      'IT Consulting': <Monitor className="h-6 w-6" />,
      'Conversational AI': <MessageSquare className="h-6 w-6" />,
      'Computer Vision': <Eye className="h-6 w-6" />,
      'Predictive Analytics': <TrendingUp className="h-6 w-6" />,
      'Process Automation': <Zap className="h-6 w-6" />,
      'Customer Analytics': <Users className="h-6 w-6" />,
      'Voice AI': <MessageSquare className="h-6 w-6" />,
      'Data Quality': <Database className="h-6 w-6" />,
      'Language AI': <Globe className="h-6 w-6" />,
      'Recommendation Systems': <Star className="h-6 w-6" />
    };
    return iconMap[category] || <Settings className="h-6 w-6" />;
  };

  const getServiceTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Micro SAAS': 'bg-blue-100 text-blue-800',
      'IT Services': 'bg-green-100 text-green-800',
      'AI Services': 'bg-purple-100 text-purple-800'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
              <SEO 
          title="Comprehensive Micro SAAS Solutions - Zion Tech Group" 
          description="Discover our extensive portfolio of innovative micro SAAS, IT, and AI services designed to transform your business operations and drive growth"
          keywords="micro SAAS, IT services, AI solutions, Zion Tech Group"
          url="https://ziontechgroup.com/comprehensive-services"
        />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of innovative micro SAAS, IT, and AI services designed to transform your business operations and drive growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-zion-blue-dark py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Pricing Tier" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Tiers</SelectItem>
                {Object.keys(PRICING_TIERS).map(tier => (
                  <SelectItem key={tier} value={tier}>{tier}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg flex items-center justify-center text-zion-cyan mb-3">
                      <Building className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-2xl font-bold text-white">
                        {service.price?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* AI Score */}
                  {service.aiScore && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">AI Score:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-zion-blue-light rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                            style={{ width: `${service.aiScore}%` }}
                          ></div>
                        </div>
                        <span className="text-zion-cyan font-medium">{service.aiScore}%</span>
                      </div>
                    </div>
                  )}

                  {/* Availability and Location */}
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-zion-slate-light text-lg mb-4">
                No services found matching your criteria
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPricingTier('all');
                }}
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-zion-blue-dark py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver innovative, scalable, and cost-effective solutions that drive real business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation First",
                description: "Cutting-edge AI and technology solutions that keep you ahead of the competition"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security and compliance for all our solutions and services"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account management for enterprise clients"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-cyan text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our micro SAAS solutions can drive innovation, efficiency, and growth for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
    <>
      <SEO 
        title="Comprehensive Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS, IT services, and AI solutions. Transform your business with cutting-edge technology."
        keywords="micro SAAS, IT services, AI solutions, technology services, business solutions"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business with our complete suite of micro SAAS solutions, 
              professional IT services, and cutting-edge AI technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl">🤖</span>
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl">⚡</span>
                <span>Micro SAAS Platform</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl">🔧</span>
                <span>Professional IT Services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white px-8 py-3">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Link to="/request-quote">Request Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark/50 border border-zion-purple/20">
                <TabsTrigger value="micro-saas" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                  <span className="text-2xl mr-2">⚡</span>
                  Micro SAAS Services
                </TabsTrigger>
                <TabsTrigger value="it-services" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                  <span className="text-2xl mr-2">🔧</span>
                  IT Services
                </TabsTrigger>
                <TabsTrigger value="ai-services" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                  <span className="text-2xl mr-2">🤖</span>
                  AI Solutions
                </TabsTrigger>
              </TabsList>

              {/* Search and Filter */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-zion-purple/20 text-white placeholder-zion-slate-light"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-zion-slate-light" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-zion-blue-dark/50 border border-zion-purple/20 text-white rounded-md px-3 py-2"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Micro SAAS Services */}
              <TabsContent value="micro-saas" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MICRO_SAAS_SERVICES
                    .filter(service => 
                      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                    .map((service) => (
                    <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          {service.badge && (
                            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold">
                            {service.pricing.currency}{service.pricing.monthly}/month
                          </span>
                          <span className="text-zion-slate-light text-sm">
                            {service.pricing.currency}{service.pricing.yearly}/year
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <TrendingUp className="h-3 w-3 text-zion-cyan" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <Link to={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* IT Services */}
              <TabsContent value="it-services" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ENHANCED_IT_SERVICES
                    .filter(service => 
                      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                    .map((service) => (
                    <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          {service.badge && (
                            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold">
                            {service.pricing.currency}{service.pricing.hourly}/hr
                          </span>
                          <span className="text-zion-slate-light text-sm">
                            {service.pricing.currency}{service.pricing.project} project
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Timeline:</h4>
                          <p className="text-zion-slate-light text-sm">{service.timeline}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <Link to={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* AI Services */}
              <TabsContent value="ai-services" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ENHANCED_AI_SERVICES
                    .filter(service => 
                      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                    .map((service) => (
                    <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          {service.badge && (
                            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold">
                            {service.pricing.currency}{service.pricing.monthly}/month
                          </span>
                          <span className="text-zion-slate-light text-sm">
                            {service.pricing.currency}{service.pricing.yearly}/year
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <TrendingUp className="h-3 w-3 text-zion-cyan" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <Link to={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect solution 
              for your business needs. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3" asChild>
                <Link to="/contact">Contact Our Experts</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3" asChild>
                <Link to="/request-quote">Request Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-ac34
  );
}