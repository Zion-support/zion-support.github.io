<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState } from 'react';
import { Search, Star, Users, Zap, Brain, Shield, Settings, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

import { motion } from 'framer-motion';
import ComprehensiveServicesShowcase from '../components/ComprehensiveServicesShowcase';
import { 
  Brain, 
  Code, 
  Zap, 
  Shield,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Users
} from 'lucide-react';

const ComprehensiveServices = () => {
  const stats = [
    { icon: Brain, number: "50+", label: "AI Solutions", color: "text-cyan-400" },
    { icon: Code, number: "100+", label: "IT Services", color: "text-purple-400" },
    { icon: Zap, number: "75+", label: "Micro SAAS", color: "text-green-400" },
    { icon: Shield, number: "25+", label: "Security Tools", color: "text-orange-400" }
  ];

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Advanced IT Infrastructure",
      description: "Comprehensive technology solutions that ensure reliability, security, and scalability for your business.",
      features: ["Cloud Migration", "DevOps Automation", "Network Security", "Data Management"]
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Micro SAAS Excellence",
      description: "Scalable software solutions designed for modern businesses, from startups to enterprises.",
      features: ["Business Automation", "Customer Management", "Financial Tools", "Team Collaboration"]
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: "Quantum-Ready Security",
      description: "Future-proof cybersecurity solutions that protect against current and emerging threats.",
      features: ["Threat Detection", "Encryption", "Compliance", "Incident Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">
                Tech Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our complete portfolio of cutting-edge technology solutions designed to 
              transform your business and accelerate your digital transformation journey.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-16">
        <ComprehensiveServicesShowcase />
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
              <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServices;
=======
import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, PRICING_TIERS } from '@/data/comprehensiveServices';
import { ProductListing } from '@/types/listings';
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
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Users,
  Building,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter services based on search and filters
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.name;
    
    const matchesPricing = selectedPricingTier === 'all' || 
      (service.price && service.price >= PRICING_TIERS[selectedPricingTier as keyof typeof PRICING_TIERS]?.min && 
       service.price <= PRICING_TIERS[selectedPricingTier as keyof typeof PRICING_TIERS]?.max);

    return matchesSearch && matchesCategory && matchesPricing;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'ai-score':
        return (b.aiScore || 0) - (a.aiScore || 0);
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return <Zap className="w-5 h-5" />;
      case 'IT Services': return <Shield className="w-5 h-5" />;
      case 'Business Solutions': return <TrendingUp className="w-5 h-5" />;
      case 'Digital Solutions': return <Globe className="w-5 h-5" />;
      case 'Specialized Solutions': return <Building className="w-5 h-5" />;
      case 'IoT Solutions': return <BarChart3 className="w-5 h-5" />;
      case 'Education Solutions': return <Users className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Comprehensive Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services including AI solutions, IT services, business automation, and specialized industry solutions."
        keywords="micro SAAS, AI services, IT solutions, business automation, digital transformation"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business with our innovative, scalable, and cost-effective micro SAAS solutions. 
            From AI-powered automation to enterprise-grade security, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark py-4 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-cyan text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing</SelectItem>
                {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                  <SelectItem key={key} value={key}>
                    {tier.label} (${tier.min}-${tier.max})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">AI Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-zion-cyan">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm font-medium">{service.category}</span>
                    </div>
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
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
                      <ExternalLink className="w-4 h-4" />
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
                icon: <TrendingUp className="w-8 h-8" />,
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
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
