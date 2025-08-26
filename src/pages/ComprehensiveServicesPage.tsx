import React, { useState } from 'react';
<<<<<<< HEAD
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from '@/data/expandedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
=======
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
<<<<<<< HEAD
  Globe, 
  Shield, 
  Zap, 
  Database, 
  Code, 
  Smartphone,
  Blockchain,
  Cpu,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
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
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl leading-tight">
                    {service.title}
                  </CardTitle>
                  {service.subcategory && (
                    <Badge variant="outline" className="text-zion-cyan border-zion-cyan/30 w-fit">
                      {service.subcategory}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </CardDescription>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Price:</span>
                      <span className="text-zion-cyan font-semibold text-lg">
                        {formatPrice(service.price)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Delivery:</span>
                      <span className="text-zion-cyan text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {getDeliveryTime(service.availability)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Location:</span>
                      <span className="text-zion-cyan text-sm flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {service.location || 'Global'}
                      </span>
                    </div>

                    {service.aiScore && (
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">AI Score:</span>
                        <span className="text-zion-cyan text-sm font-semibold">
                          {service.aiScore}/100
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-zion-slate-light border-zion-slate-light/30">
                        {tag}
                      </Badge>
                    ))}
                    {service.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs text-zion-slate-light border-zion-slate-light/30">
                        +{service.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Rating */}
                  {service.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating!) 
                                ? 'text-amber-400 fill-current' 
                                : 'text-zion-slate-light'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">
                No services match your current filters
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setPriceRange('all');
                }}
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Clear All Filters
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
              We deliver professional, enterprise-grade solutions with proven expertise and competitive pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light text-sm">
                Bank-level security protocols and compliance with industry standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Cutting-Edge AI</h3>
              <p className="text-zion-slate-light text-sm">
                Latest AI/ML technologies and proven implementation methodologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Reach</h3>
              <p className="text-zion-slate-light text-sm">
                Services available worldwide with local expertise and support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Proven Quality</h3>
              <p className="text-zion-slate-light text-sm">
                High customer satisfaction ratings and successful project delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-cyan text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for a free consultation and customized solution proposal
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-zion-blue-dark/20 rounded-lg p-4 border border-zion-blue-light/30">
              <Phone className="w-6 h-6 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Call Us</div>
              <div className="text-zion-cyan">+1 302 464 0950</div>
            </div>
            
            <div className="bg-zion-blue-dark/20 rounded-lg p-4 border border-zion-blue-light/30">
              <Mail className="w-6 h-6 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Email Us</div>
              <div className="text-zion-cyan">kleber@ziontechgroup.com</div>
            </div>
            
            <div className="bg-zion-blue-dark/20 rounded-lg p-4 border border-zion-blue-light/30">
              <MapPin className="w-6 h-6 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Visit Us</div>
              <div className="text-zion-cyan text-sm">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Mail className="w-5 h-5 mr-2" />
              Request Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
=======
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