import React, { useState } from "react"
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, CONTACT_INFO } from "@/data/enhancedServices"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {;
  Search,;
  Filter,;
  Star,;
  Clock,;
  Globe,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  TrendingUp,;
  Shield,;
  Cloud,;
  Brain,;
  Database,;
  Code,;
  Zap,;
  Heart,;
  DollarSign,;
  Link,;
  Users,;
  CheckCircle;
} from "lucide-react"
import SEO from "@/components/SEO"
export default function EnhancedServicesPage() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedPriceRange, setSelectedPriceRange] = useState('all'),;

  const filteredServices = ENHANCED_SERVICES.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;

    const matchesCategory = selectedCategory === 'all' ||;
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase()),;

    const matchesPrice = selectedPriceRange === 'all' ||;
                        (selectedPriceRange === 'basic' && service.price <= 2000) ||;&& service.price <= 2000) ||; service.price <= 2000) ||
                        (selectedPriceRange === 'professional' && service.price > 2000 && service.price <= 8000) ||;&& service.price > 2000 && service.price <= 8000) ||; service.price > 2000 && service.price <= 8000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 8000 && service.price <= 25000) ||;&& service.price > 8000 && service.price <= 25000) ||; service.price > 8000 && service.price <= 25000) ||
                        (selectedPriceRange === 'premium' && service.price > 25000);&& service.price > 25000); service.price > 25000)
    return matchesSearch && matchesCategory && matchesPrice;&& matchesCategory && matchesPrice; matchesCategory && matchesPrice
  });
  const getCategoryIcon = (category: string) => {;
    switch (category.toLowerCase()) {;
      case 'ai automation':;
      case 'ai & machine learning':;
        return <[^>]*/>
      case 'cloud management':;
      case 'cloud & infrastructure':;
        return <Cloud className="w-5 h-5" />,;
      case 'cybersecurity':;
      case 'security framework':;
        return <Shield className="w-5 h-5" />,;
      case 'data engineering':;
      case 'data & analytics':;
        return <Database className="w-5 h-5" />,;
      case 'business intelligence':;
        return <TrendingUp className="w-5 h-5" />,;
      case 'developer tools':;
      case 'development & devops':;
        return <Code className="w-5 h-5" />,;
      case 'digital transformation':;
        return <Zap className="w-5 h-5" />,;
      case 'healthcare technology':;
        return <Heart className="w-5 h-5" />,;
      case 'financial technology':;
        return <DollarSign className="w-5 h-5" />,;
      case 'blockchain':;
        return <Link className="w-5 h-5" />,;
      case 'quantum computing':;
        return <Zap className="w-5 h-5" />,;
      default: return <[^>]*/>
    };
  };
  const getPriceRange = (price: number) => {;
    if (price <= 2000) return 'basic'
    if (price <= 8000) return 'professional',;
    if (price <= 25000) return 'enterprise',;
    return 'premium'
  },;

  return (
    <div className="min-h-screen bg-background">;
      <SEO;
        title="Enhanced IT & AI Services - Zion Tech Group"
        description="Discover our comprehensive suite of AI services, IT solutions, and micro SAAS offerings. From AI automation to quantum computing readiness."
        keywords="AI services, IT solutions, micro SAAS, cybersecurity, cloud computing, data analytics, Zion Tech Group"
        canonical="https://ziontechgroup.com/enhanced-services"
      />;

      {/* Hero Section */};
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-4xl md:text-6xl font-bold mb-6">;
            Enhanced IT & AI Services;
          </[^>]*>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
            Comprehensive micro SAAS solutions, IT services, and AI-powered innovations to transform your business;
          </[^>]*>
          <div className="flex flex-wrap justify-center gap-4">;
            <Button;
              size="lg"
              className="[^"]*"
              onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })};
            >;
              Explore Services;
            </[^>]*>
            <Button;
              size="lg"
              variant="outline"
              className="[^"]*"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })};
            >;
              Get in Touch;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Tiers Overview */};
      <section className="py-16 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Service Pricing Tiers;
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">;
            {Object.entries(SERVICE_PRICING_TIERS).map(([tier, info]) => (;
              <Card key={tier} className="bg-zion-blue border-zion-blue-light">;
                <CardHeader className="text-center">;
                  <CardTitle className="text-zion-cyan capitalize">{tier}</[^>]*>
                  <CardDescription className="text-zion-slate-light">;
                    {info.range};
                  </[^>]*>
                </[^>]*>
                <CardContent className="text-center">;
                  <p className="text-white">{info.description}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Overview & Benefits */};
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Why Choose Zion Tech Group Services?;
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle className="text-zion-cyan">AI-Powered Solutions</[^>]*>
              </[^>]*>
              <CardContent className="text-center">;
                <p className="text-white">Cutting-edge AI and machine learning services with proven results and continuous innovation.</[^>]*>
              </[^>]*>
            </[^>]*>

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle className="text-zion-cyan">Enterprise Security</[^>]*>
              </[^>]*>
              <CardContent className="text-center">;
                <p className="text-white">World-class cybersecurity solutions with compliance frameworks and 24/7 monitoring.</[^>]*>
              </[^>]*>
            </[^>]*>

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle className="text-zion-cyan">Cloud Excellence</[^>]*>
              </[^>]*>
              <CardContent className="text-center">;
                <p className="text-white">Multi-cloud expertise with cost optimization and seamless hybrid solutions.</[^>]*>
              </[^>]*>
            </[^>]*>

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle className="text-zion-cyan">Data Intelligence</[^>]*>
              </[^>]*>
              <CardContent className="text-center">;
                <p className="text-white">Advanced analytics and machine learning pipelines for actionable business insights.</[^>]*>
              </[^>]*>
            </[^>]*>

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle className="text-zion-cyan">DevOps Excellence</[^>]*>
              </[^>]*>
              <CardContent className="text-center">;
                <p className="text-white">Modern development practices with automated CI/CD and microservices architecture.</[^>]*>
              </[^>]*>
            </[^>]*>

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle className="text-zion-cyan">Innovation First</[^>]*>
              </[^>]*>
              <CardContent className="text-center">;
                <p className="text-white">Pioneering emerging technologies like quantum computing, blockchain, and AR/VR.</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <section className="py-8 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md:flex-row gap-4">;
            <div className="flex-1 relative">;
              <[^>]*/>
              <Input;
                placeholder="Search services, technologies, or keywords..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">;
                <[^>]*/>
              </[^>]*>
              <SelectContent>;
                <SelectItem value="all">All Categories</[^>]*>
                {ENHANCED_SERVICE_CATEGORIES.map(category => (;
                  <SelectItem key={category.value} value={category.value}>;
                    {category.label};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>;
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">;
                <[^>]*/>
              </[^>]*>
              <SelectContent>;
                <SelectItem value="all">All Prices</[^>]*>
                <SelectItem value="basic">Basic ($500 - $2,000)</[^>]*>
                <SelectItem value="professional">Professional ($2,000 - $8,000)</[^>]*>
                <SelectItem value="enterprise">Enterprise ($8,000 - $25,000)</[^>]*>
                <SelectItem value="premium">Premium ($25,000+)</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section id="services-grid" className="py-16 bg-background">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-zion-blue mb-4">;
              {filteredServices.length} Services Available;
            </[^>]*>
            <p className="text-zion-slate text-lg">;
              Find the perfect solution for your business needs;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredServices.map((service) => (;
              <Card key={service.id} className="h-full hover:shadow-xl transition-shadow duration-300">;
                <CardHeader>;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-2">;
                      {getCategoryIcon(service.category)};
                      <Badge variant={getPriceRange(service.price) === 'enterprise' ? 'default' : 'secondary'}>
                        {getPriceRange(service.price)};
                      </[^>]*>
                    </[^>]*>
                    {service.featured && (;&& (; (
                      <Badge variant="default" className="bg-zion-purple">;
                        Featured;
                      </[^>]*>
                    )};
                  </[^>]*>
                  <CardTitle className="text-xl mb-2">{service.title}</[^>]*>
                  <CardDescription className="text-sm text-zion-slate">;
                    {service.description};
                  </[^>]*>
                </[^>]*>
                <CardContent className="space-y-4">;
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span className="text-sm font-medium">{service.rating}</[^>]*>
                      <span className="text-sm text-zion-slate">({service.reviewCount} reviews)</[^>]*>
                    </[^>]*>
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-zion-blue">;
                        {service.currency}{service.price?.toLocaleString()};
                      </[^>]*>
                      <div className="text-sm text-zion-slate">;
                        {service.availability};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="flex flex-wrap gap-2">;
                    {service.tags.slice(0, 3).map((tag, index) => (;
                      <Badge key={index} variant="outline" className="text-xs">;
                        {tag};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <div className="flex items-center justify-between text-sm text-zion-slate">;
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      {service.location};
                    </[^>]*>
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      AI Score: {service.aiScore};
                    </[^>]*>
                  </[^>]*>

                  <div className="pt-4 border-t border-zion-slate-light">;
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-zion-slate">By {service.author.name}</[^>]*>
                      <Button;
                        size="sm"
                        className="[^"]*"
                        onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })};
                      >;
                        Get Quote;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Categories Tabs */};
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Explore by Category;
          </[^>]*>
          <Tabs defaultValue="ai-ml" className="w-full">;
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-zion-blue-dark">;
              {ENHANCED_SERVICE_CATEGORIES.slice(0, 6).map(category => (;
                <TabsTrigger;
                  key={category.value};
                  value={category.value};
                  className="[^"]*"
                >;
                  {category.label};
                </[^>]*>
              ))};
            </[^>]*>

            {ENHANCED_SERVICE_CATEGORIES.slice(0, 6).map(category => (;
              <TabsContent key={category.value} value={category.value} className="mt-8">;
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                  {ENHANCED_SERVICES;
                    .filter(service => service.category.toLowerCase().includes(category.value.toLowerCase()));
                    .slice(0, 6)
                    .map(service => (;
                      <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white">;
                        <CardHeader>;
                          <CardTitle className="text-lg">{service.title}</[^>]*>
                          <CardDescription className="text-zion-slate-light">;
                            {service.description.substring(0, 100)}...;
                          </[^>]*>
                        </[^>]*>
                        <CardContent>;
                          <div className="flex items-center justify-between">;
                            <span className="text-zion-cyan font-bold">;
                              {service.currency}{service.price?.toLocaleString()};
                            </[^>]*>
                            <Button;
                              size="sm"
                              variant="outline"
                              className="[^"]*"
                            >;
                              Learn More;
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-16 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Why Choose Zion Tech Group Services?;
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">Proven Expertise</[^>]*>
              <p className="text-zion-slate-light">;
                Industry-leading solutions with proven track records and customer success stories;
              </[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</[^>]*>
              <p className="text-zion-slate-light">;
                Cutting-edge AI and emerging technologies to keep you ahead of the competition;
              </[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</[^>]*>
              <p className="text-zion-slate-light">;
                Personalized service with dedicated account managers and 24/7 technical support;
              </[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">ROI Focused</[^>]*>
              <p className="text-zion-slate-light">;
                Measurable business outcomes and rapid return on investment for all solutions;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section id="contact-section" className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl font-bold text-white mb-8">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-12">;
              Get in touch with our experts to discuss your needs and discover how our services can drive your success;
            </[^>]*>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">;
              <div className="flex items-center justify-center gap-3 text-zion-cyan">;
                <[^>]*/>
                <div className="text-left">;
                  <div className="font-semibold">Phone</[^>]*>
                  <div className="text-sm">{CONTACT_INFO.mobile}</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">;
                <[^>]*/>
                <div className="text-left">;
                  <div className="font-semibold">Email</[^>]*>
                  <div className="text-sm">{CONTACT_INFO.email}</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">;
                <[^>]*/>
                <div className="text-left">;
                  <div className="font-semibold">Address</[^>]*>
                  <div className="text-sm">{CONTACT_INFO.address}</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Button;
                size="lg"
                className="[^"]*"
                onClick={() => window.open(`tel:${CONTACT_INFO.mobile}`, '_self')};
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
              <Button;
                size="lg"
                variant="outline"
                className="[^"]*"
                onClick={() => window.open(`mailto:${CONTACT_INFO.email}`, '_self')};
              >;
                <[^>]*/>
                Send Email;
              </[^>]*>
              <Button;
                size="lg"
                variant="outline"
                className="[^"]*"
                onClick={() => window.open(CONTACT_INFO.website, '_blank')};
              >;
                <[^>]*/>
                Visit Website;
              </[^>]*>
            </[^>]*>

            <div className="mt-12 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">;
              <h3 className="text-xl font-bold text-white mb-4">Special Enterprise Offerings</[^>]*>
              <p className="text-zion-slate-light mb-4">;
                For enterprise clients, we offer custom solution development, dedicated support teams, and comprehensive implementation services.;
              </[^>]*>
              <Button;
                className="[^"]*"
                onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Enterprise%20Inquiry`, '_self')};
              >;
                Request Enterprise Consultation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};