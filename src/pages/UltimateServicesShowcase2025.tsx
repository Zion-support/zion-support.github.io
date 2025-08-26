import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cloud, 
  Lock, 
  BarChart3,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award,
  Rocket,
  Target,
  DollarSign,
  Calendar,
  ArrowRight,
  Play,
  Download,
  MessageCircle
} from 'lucide-react';
import { ULTIMATE_ZION_SERVICES_2025 } from '@/data/ultimateZionServices2025';
import { ULTIMATE_ZION_IT_SERVICES_2025 } from '@/data/ultimateZionITServices2025';
import { ULTIMATE_ZION_AI_SERVICES_2025 } from '@/data/ultimateZionAIServices2025';

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
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  demoUrl?: string;
  caseStudies?: string[];
  websiteUrl?: string;
  marketTrend: string;
  industryFocus: string[];
  scalability: string;
  customizationLevel: string;
  specialOffer?: string;
  freeTrial?: string;
}

const UltimateServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  // Combine all services
  const allServices: Service[] = [
    ...ULTIMATE_ZION_SERVICES_2025,
    ...ULTIMATE_ZION_IT_SERVICES_2025,
    ...ULTIMATE_ZION_AI_SERVICES_2025
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  // Get unique support levels
  const supportLevels = ['all', ...Array.from(new Set(allServices.map(service => service.supportLevel)))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPriceRange = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'low' && service.price < 1000) ||
      (selectedPriceRange === 'medium' && service.price >= 1000 && service.price < 5000) ||
      (selectedPriceRange === 'high' && service.price >= 5000);
    
    const matchesSupportLevel = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;

    return matchesSearch && matchesCategory && matchesPriceRange && matchesSupportLevel;
  });

  // Filter services by tab
  const getServicesByTab = (tab: string) => {
    switch (tab) {
      case 'ai':
        return allServices.filter(service => service.category.includes('AI'));
      case 'it':
        return allServices.filter(service => service.category.includes('Cloud') || service.category.includes('DevOps') || service.category.includes('Security') || service.category.includes('Network') || service.category.includes('Managed') || service.category.includes('Digital') || service.category.includes('IoT') || service.category.includes('Blockchain'));
      case 'micro-saas':
        return allServices.filter(service => service.category.includes('Business Intelligence') || service.category.includes('Marketing') || service.category.includes('Customer Service') || service.category.includes('Financial') || service.category.includes('Legal') || service.category.includes('Education') || service.category.includes('Cybersecurity') || service.category.includes('Supply Chain') || service.category.includes('Human Resources') || service.category.includes('Real Estate'));
      default:
        return allServices;
    }
  };

  const tabServices = getServicesByTab(activeTab);

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'project-based') {
      return `${currency}${price.toLocaleString()}+`;
    }
    return `${currency}${price.toLocaleString()}/${model}`;
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-800';
      case 'premium':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'bg-gradient-to-r from-purple-500 to-pink-500';
    if (category.includes('Cloud') || category.includes('DevOps')) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (category.includes('Security')) return 'bg-gradient-to-r from-red-500 to-orange-500';
    if (category.includes('Business')) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    return 'bg-gradient-to-r from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 via-zion-purple-dark/90 to-zion-slate-dark/90 z-10" />
        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ultimate Services Showcase 2025
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of AI-powered micro SAAS solutions, enterprise IT services, and cutting-edge artificial intelligence platforms designed to transform your business operations and drive innovation.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-cyan/70">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan/70">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%+</div>
              <div className="text-zion-cyan/70">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">Global</div>
              <div className="text-zion-cyan/70">Reach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30">
            <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              All Services ({allServices.length})
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              AI Services ({allServices.filter(s => s.category.includes('AI')).length})
            </TabsTrigger>
            <TabsTrigger value="it" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              IT Services ({allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps') || s.category.includes('Security') || s.category.includes('Network') || s.category.includes('Managed') || s.category.includes('Digital') || s.category.includes('IoT') || s.category.includes('Blockchain')).length})
            </TabsTrigger>
            <TabsTrigger value="micro-saas" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              Micro SAAS ({allServices.filter(s => s.category.includes('Business Intelligence') || s.category.includes('Marketing') || s.category.includes('Customer Service') || s.category.includes('Financial') || s.category.includes('Legal') || s.category.includes('Education') || s.category.includes('Cybersecurity') || s.category.includes('Supply Chain') || s.category.includes('Human Resources') || s.category.includes('Real Estate')).length})
            </TabsTrigger>
          </TabsList>

          {/* Search and Filters */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search services, features, or use cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-zion-purple/30 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-zion-purple/30 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-zion-purple/30 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $1,000</SelectItem>
                  <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                  <SelectItem value="high">$5,000+</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-zion-purple/30 text-white">
                  <SelectValue placeholder="Support Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Support Levels</SelectItem>
                  {supportLevels.filter(level => level !== 'all').map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Services Grid */}
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tabServices.map((service) => (
                <Card key={service.id} className="bg-zion-purple/10 backdrop-blur-sm border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`${getCategoryColor(service.category)} text-white px-3 py-1 text-xs font-medium`}>
                        {service.category}
                      </Badge>
                      <Badge className={`${getSupportLevelColor(service.supportLevel)} px-3 py-1 text-xs font-medium`}>
                        {service.supportLevel}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-zion-cyan/70 line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {formatPrice(service.price, service.currency, service.pricingModel)}
                      </div>
                      <div className="text-sm text-zion-cyan/70">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* Special Offers */}
                    {service.specialOffer && (
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-green-400">
                          <Award className="h-4 w-4" />
                          <span className="text-sm font-medium">{service.specialOffer}</span>
                        </div>
                      </div>
                    )}

                    {/* Free Trial */}
                    {service.freeTrial && (
                      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Rocket className="h-4 w-4" />
                          <span className="text-sm font-medium">{service.freeTrial}</span>
                        </div>
                      </div>
                    )}

                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-zion-cyan" />
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-zion-cyan/60">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-zion-cyan" />
                        Key Benefits
                      </h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                            <Target className="h-3 w-3 text-blue-400" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Delivery */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center bg-zion-purple/20 rounded-lg p-3">
                        <div className="text-zion-cyan font-semibold">ROI</div>
                        <div className="text-white">{service.roi}</div>
                      </div>
                      <div className="text-center bg-zion-purple/20 rounded-lg p-3">
                        <div className="text-zion-cyan font-semibold">Delivery</div>
                        <div className="text-white">{service.estimatedDelivery}</div>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Brain className="h-4 w-4 text-zion-cyan" />
                        Technology
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technology.slice(0, 4).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="bg-zion-purple/30 text-zion-cyan border-zion-purple/50 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {service.technology.length > 4 && (
                          <Badge variant="secondary" className="bg-zion-purple/30 text-zion-cyan border-zion-purple/50 text-xs">
                            +{service.technology.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-4">
                      <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact Sales
                      </Button>
                      
                      <div className="flex gap-2">
                        {service.demoUrl && (
                          <Button variant="outline" className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                            <Play className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        )}
                        <Button variant="outline" className="flex-1 border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                          <Download className="h-4 w-4 mr-2" />
                          Brochure
                        </Button>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="pt-4 border-t border-zion-purple/30">
                      <div className="text-center text-sm text-zion-cyan/70">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Phone className="h-3 w-3" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="h-3 w-3" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm rounded-2xl border border-zion-purple/30 p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Join thousands of organizations worldwide that have already transformed their operations with Zion Tech Group's innovative AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4">
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zion-slate-dark border-t border-zion-purple/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-zion-cyan/70 mb-4">
                Transforming businesses through innovative AI and IT solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
                <a href="#" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-zion-cyan/70">
                <li><a href="#" className="hover:text-zion-cyan transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-zion-cyan transition-colors">IT Services</a></li>
                <li><a href="#" className="hover:text-zion-cyan transition-colors">Micro SAAS</a></li>
                <li><a href="#" className="hover:text-zion-cyan transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-zion-cyan/70">
                <li><a href="#" className="hover:text-zion-cyan transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-zion-cyan transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-zion-cyan transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-zion-cyan transition-colors">Retail</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-zion-cyan/70">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-purple/30 mt-8 pt-8 text-center text-zion-cyan/70">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UltimateServicesShowcase2025;