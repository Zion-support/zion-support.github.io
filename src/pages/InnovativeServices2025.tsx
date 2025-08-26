import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  Globe,
  Zap,
  Shield,
  Brain,
  Cpu,
  Database,
  Lock,
  Cloud,
  BarChart3,
  TrendingUp,
  Rocket,
  Leaf,
  Eye,
  Code,
  Network,
  Cube,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, INNOVATIVE_SERVICE_CATEGORIES } from '@/data/innovativeServices2025';

export default function InnovativeServices2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="h-6 w-6 text-blue-500" />;
      case 'Quantum Computing':
        return <Cpu className="h-6 w-6 text-purple-500" />;
      case 'Blockchain & DeFi':
        return <Cube className="h-6 w-6 text-green-500" />;
      case 'IoT & Analytics':
        return <Database className="h-6 w-6 text-orange-500" />;
      case 'Cybersecurity':
        return <Shield className="h-6 w-6 text-red-500" />;
      default:
        return <Sparkles className="h-6 w-6 text-gray-500" />;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic':
        return 'bg-gray-100 text-gray-800';
      case 'standard':
        return 'bg-blue-100 text-blue-800';
      case 'premium':
        return 'bg-purple-100 text-purple-800';
      case 'enterprise':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Innovative Services 2025 - Zion Tech Group"
        description="Discover cutting-edge AI, Quantum Computing, Blockchain, IoT, and Cybersecurity solutions for 2025. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, blockchain solutions, IoT analytics, cybersecurity automation, 2025 technology"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="block">Innovative Services</span>
              <span className="block text-zion-cyan">2025 & Beyond</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-zion-cyan-light">
              Transform your business with cutting-edge AI, Quantum Computing, Blockchain, IoT, and Cybersecurity solutions. 
              Stay ahead of the competition with next-generation technology.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-zion-purple hover:bg-zion-cyan-light"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Innovative Services 2025 Consultation', '_blank')}
              >
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search innovative services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-zion-purple focus:outline-none focus:ring-1 focus:ring-zion-purple"
            >
              <option value="all">All Categories</option>
              {INNOVATIVE_SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <CardTitle className="text-lg group-hover:text-zion-purple transition-colors">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={getSupportLevelColor(service.supportLevel)}>
                    {service.supportLevel}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm text-gray-600">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Starting Price:</span>
                    <span className="text-lg font-bold text-zion-purple">
                      ${service.price.toLocaleString()}/{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Market Price:</span>
                    <span className="text-sm text-gray-600">{service.marketPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Delivery:</span>
                    <span className="text-sm text-gray-600">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-zion-purple hover:bg-zion-purple-dark"
                    onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`, '_blank')}
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Innovative Services 2025 Consultation', '_blank')}
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}