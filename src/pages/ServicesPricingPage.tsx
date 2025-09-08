import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle   } from '@/components/ui/card';
import { Badge   } from '@/components/ui/badge';
import { Button   } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger   } from '@/components/ui/tabs';
import { Check, 
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
  } from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_PRICING_TIERS, SERVICE_BENEFITS   } from '@/data/expandedServices';
// Group services by category for better organization
const servicesByCategory = EXPANDED_SERVICES.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service?.category]?.push(service);
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
export default function ServicesPricingPage(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = Object.keys(servicesByCategory);
  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : servicesByCategory[selectedCategory] || [];
  const getCategoryIcon = (category: string)   => {
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
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Pricing Tiers Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Tiers Overview</h2>
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier])   => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-zion-cyan text-xl">{key.charAt(0).toUpperCase() + key.slice(1)}</CardTitle>
                  <CardDescription className="text-zion-cyan-light text-lg font-semibold">{tier.range}</CardDescription>
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
              <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service)   => (
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
        {/* Service Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose ZionTech Group?</h2>
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_BENEFITS).map(([key, benefit])   => (
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
