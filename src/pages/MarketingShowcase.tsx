import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Bot, Shield, Cloud, Database, Globe, Smartphone, Monitor, Settings, Users, Zap, Code, Building,
  ArrowRight, Brain, Lock, Cpu, Network, Palette, BarChart3, Target, Rocket, Lightbulb, TrendingUp,
  Heart, Briefcase, Home, Truck, UserCheck, MessageCircle, FileText, Calendar, CheckCircle, Star,
  Phone, Mail, ExternalLink, DollarSign, Clock, Users2, Award, Globe2
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  price: number;
  currency: string;
  pricingModel: string;
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const SERVICES: Service[] = [
  {
    id: "ai-financial-advisory",
    title: "AI-Powered Financial Advisory Platform",
    description: "Intelligent wealth management with AI-driven investment recommendations and portfolio optimization.",
    category: "Financial Technology",
    subcategory: "Wealth Management",
    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    features: ["AI investment recommendations", "Portfolio optimization", "Risk assessment", "Tax optimization"],
    benefits: ["Increase returns by 15-25%", "Reduce fees by 30%", "24/7 monitoring"],
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$3,500 - $12,000/month",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-healthcare-diagnostic",
    title: "AI Healthcare Diagnostic Platform",
    description: "Advanced diagnostic assistance with AI-powered medical image analysis and treatment planning.",
    category: "Healthcare Technology",
    subcategory: "Diagnostic AI",
    icon: <Heart className="h-8 w-8 text-red-500" />,
    features: ["AI diagnostic assistance", "Medical image analysis", "Treatment recommendations", "HIPAA compliance"],
    benefits: ["Improve accuracy by 30%", "Reduce errors by 40%", "Faster decisions"],
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$4,200 - $15,000/month",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-legal-research",
    title: "AI Legal Research Assistant",
    description: "Automated legal research with case law analysis and contract review using AI.",
    category: "Legal Technology",
    subcategory: "Legal Research",
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    features: ["Case law research", "Contract analysis", "Document generation", "Compliance checking"],
    benefits: ["Reduce research time by 70%", "Improve outcomes", "Automated compliance"],
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,800 - $8,500/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-real-estate-analytics",
    title: "AI Real Estate Analytics Platform",
    description: "Market analysis and investment optimization using AI-powered predictive analytics.",
    category: "Real Estate Technology",
    subcategory: "Market Analytics",
    icon: <Home className="h-8 w-8 text-indigo-500" />,
    features: ["Market analysis", "Property value prediction", "Investment opportunities", "Risk assessment"],
    benefits: ["Improve returns by 20-35%", "Reduce research time by 80%", "Better decisions"],
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,800 - $5,500/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization",
    description: "Intelligent supply chain management with AI-powered demand forecasting and optimization.",
    category: "Supply Chain Technology",
    subcategory: "Optimization",
    icon: <Truck className="h-8 w-8 text-orange-500" />,
    features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Risk mitigation"],
    benefits: ["Reduce costs by 25-40%", "Improve efficiency by 30%", "Better visibility"],
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$3,200 - $10,000/month",
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-hr-recruitment",
    title: "AI HR & Recruitment Platform",
    description: "Intelligent recruitment automation with AI-powered candidate screening and analytics.",
    category: "Human Resources Technology",
    subcategory: "Recruitment",
    icon: <UserCheck className="h-8 w-8 text-purple-500" />,
    features: ["AI candidate screening", "Skills assessment", "Performance tracking", "Retention prediction"],
    benefits: ["Improve hiring quality by 40%", "Reduce time by 60%", "Better retention"],
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,500 - $4,500/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

const MarketingShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(SERVICES.map(service => service.category)))];
  
  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of AI-powered solutions designed to revolutionize your operations, 
            increase efficiency, and drive growth across all business functions.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Website</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Mail className="mr-2 h-5 w-5" />
              Request Demo
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {service.subcategory}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <Star className="h-3 w-3 mr-2 text-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <p className="text-sm text-gray-400">Market: {service.marketPrice}</p>
                  <p className="text-xs text-gray-500 mt-1">Delivery: {service.estimatedDelivery}</p>
                </div>

                {/* Contact Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-black">
                    <Phone className="mr-2 h-3 w-3" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-black">
                    <Mail className="mr-2 h-3 w-3" />
                    Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of AI experts is ready to help you implement these innovative solutions 
              and drive your business forward with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Mail className="mr-2 h-5 w-5" />
                Request Custom Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingShowcase;