<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  ShoppingCart, 
  BarChart3, 
  Zap,
  Link as LinkIcon,
  Network,
  Monitor,
  Smartphone
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, MICRO_SAAS_SUBCATEGORIES } from "@/data/microSaasServices";

// Service category icons mapping
const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI Services': <Zap className="w-6 h-6" />,
  'Business Solutions': <BarChart3 className="w-6 h-6" />,
  'Cybersecurity': <Shield className="w-6 h-6" />,
  'Cloud Services': <Cloud className="w-6 h-6" />,
  'Data Services': <Database className="w-6 h-6" />,
  'Development': <Code className="w-6 h-6" />,
  'E-commerce': <ShoppingCart className="w-6 h-6" />,
  'Marketing': <BarChart3 className="w-6 h-6" />,
  'Integration': <LinkIcon className="w-6 h-6" />,
  'Blockchain': <Network className="w-6 h-6" />,
  'IoT': <Monitor className="w-6 h-6" />,
  'Hardware': <Smartphone className="w-6 h-6" />
};

// Service highlights with benefits and features
const serviceHighlights = [
  {
    title: "AI-Powered Solutions",
    description: "Cutting-edge artificial intelligence services that transform your business operations",
    benefits: ["Automation", "Intelligence", "Efficiency", "Innovation"],
    icon: <Zap className="w-8 h-8 text-zion-cyan" />
  },
  {
    title: "Enterprise Security",
    description: "Comprehensive cybersecurity solutions to protect your digital assets",
    benefits: ["24/7 Monitoring", "Threat Detection", "Compliance", "Risk Management"],
    icon: <Shield className="w-8 h-8 text-zion-purple" />
  },
  {
    title: "Cloud Excellence",
    description: "Scalable cloud solutions for modern business infrastructure",
    benefits: ["Scalability", "Reliability", "Cost Optimization", "Performance"],
    icon: <Cloud className="w-8 h-8 text-zion-blue" />
  },
  {
    title: "Data Intelligence",
    description: "Transform raw data into actionable business insights",
    benefits: ["Analytics", "Visualization", "Predictions", "Reporting"],
    icon: <Database className="w-8 h-8 text-zion-green" />
  }
];

// Pricing tiers for different service categories
const pricingTiers = [
  {
    name: "Starter",
    price: "$199",
    description: "Perfect for small businesses and startups",
    features: ["Basic AI Services", "Standard Support", "Core Features", "Email Support"],
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    description: "Ideal for growing businesses",
    features: ["Advanced AI Services", "Priority Support", "Custom Features", "Phone Support", "Training"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$2,499+",
    description: "For large organizations with complex needs",
    features: ["Full AI Suite", "24/7 Support", "Custom Development", "Dedicated Manager", "On-site Training"],
    popular: false
  }
];

export default function MicroSaasServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(MICRO_SAAS_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter services by category
  const filteredListings = selectedCategory === 'all' 
    ? listings 
    : listings.filter(service => service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Professional, innovative, and cost-effective technology services designed to accelerate your business growth
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-dark/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-zion-cyan text-lg font-semibold mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-zion-slate-light">Mobile</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Zap, Shield, Globe, Code, Users, TrendingUp, CheckCircle, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getMicroSaasServicesByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: MICRO_SAAS_SERVICES.length },
  { id: 'AI Services', name: 'AI Services', icon: <Zap className="w-5 h-5" />, count: getMicroSaasServicesByCategory('AI Services').length },
  { id: 'IT Services', name: 'IT Services', icon: <Code className="w-5 h-5" />, count: getMicroSaasServicesByCategory('IT Services').length },
  { id: 'Business Solutions', name: 'Business Solutions', icon: <TrendingUp className="w-5 h-5" />, count: getMicroSaasServicesByCategory('Business Solutions').length }
];

const pricingModels = [
  { id: 'all', name: 'All Pricing' },
  { id: 'monthly', name: 'Monthly' },
  { id: 'yearly', name: 'Yearly' },
  { id: 'one-time', name: 'One-time' },
  { id: 'usage-based', name: 'Usage-based' }
];

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore' | 'newest'>('rating');

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing model
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricing);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query)) ||
        service.subcategory.toLowerCase().includes(query)
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price':
          return a.price - b.price;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [selectedCategory, selectedPricing, searchQuery, sortBy]);

  const ServiceCard = ({ service }: { service: MicroSaasService }) => (
    <div className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-purple/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-purple/20">
      {/* Featured Badge */}
      {service.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Service Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-zion-purple/80 text-white">
              {service.category}
            </Badge>
            <div className="flex items-center space-x-1 text-white">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Service Highlights */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility, ensuring your business stays ahead of the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-zion-slate-light mb-4">{highlight.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {highlight.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zion-blue-light rounded-full text-zion-cyan text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-zion-blue rounded-lg p-8 border-2 ${
                tier.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-zion-cyan text-4xl font-bold mb-2">{tier.price}</div>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    tier.popular 
                      ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                      : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                  }`}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              From AI-powered solutions to enterprise security, we cover every aspect of modern technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MICRO_SAAS_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedCategory === category.value
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-zion-cyan mr-3">
                    {categoryIcons[category.label] || <Code className="w-6 h-6" />}
                  </div>
                  <h3 className="text-white text-lg font-semibold">{category.label}</h3>
                </div>
                {MICRO_SAAS_SUBCATEGORIES[category.value as keyof typeof MICRO_SAAS_SUBCATEGORIES] && (
                  <div className="flex flex-wrap gap-2">
                    {MICRO_SAAS_SUBCATEGORIES[category.value as keyof typeof MICRO_SAAS_SUBCATEGORIES].map((sub) => (
                      <span key={sub} className="px-2 py-1 bg-zion-blue-light rounded text-zion-cyan text-xs">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : `${MICRO_SAAS_CATEGORIES.find(c => c.value === selectedCategory)?.label} Services`}
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of professional technology services
            </p>
          </div>
          
          <DynamicListingPage 
            title=""
            description=""
            categorySlug="micro-saas-services"
            listings={filteredListings}
            categoryFilters={MICRO_SAAS_CATEGORIES}
            initialPrice={{ min: 199, max: 6000 }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Contact Details */}
          <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-zion-slate-light mb-1">Mobile</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-1">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-1">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-zion-slate-light mb-2">Visit our website for more information</p>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                https://ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MICRO_SAAS_SERVICES, 
  SERVICE_CATEGORIES, 
  type MicroSaasService 
} from '@/data/microSaasServices';
import { 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  CheckCircle,
  ExternalLink,
  Play,
  FileText,
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') return `${currency}${price}/month`;
    if (model === 'yearly') return `${currency}${price}/year`;
    if (model === 'one-time') return `${currency}${price}`;
    return `${currency}${price}`;
  };

  const ServiceCard = ({ service }: { service: MicroSaasService }) => (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm hover:from-zion-blue-dark/70 hover:to-zion-slate/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20">
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
              {service.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
            {service.category}
          </Badge>
          <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan">
            {service.subcategory}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        {/* Pricing */}
        <div className="flex items-center justify-between p-3 bg-zion-blue/20 rounded-lg border border-zion-blue-light/20">
          <div>
            <div className="text-2xl font-bold text-white">
              {formatPrice(service.zionPrice, service.currency, service.pricingModel)}
            </div>
            <div className="text-sm text-zion-slate-light">
              Market: {service.currency}{service.averageMarketPrice}
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-600 text-white">
              Save {service.savings}%
            </Badge>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
          <div className="grid grid-cols-2 gap-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                <CheckCircle className="w-3 h-3 text-zion-cyan" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Service Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
            {service.title}
          </h3>
          <p className="text-zion-slate-light text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* AI Score */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-zion-cyan" />
            <span className="text-sm text-zion-slate-light">AI Score:</span>
            <span className="text-zion-cyan font-bold">{service.aiScore}%</span>
          </div>
          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
            {service.subcategory}
          </Badge>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">{service.currency}{service.price}</span>
            <span className="text-zion-slate-light text-sm ml-1">/{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'yearly' ? 'year' : 'incident'}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-zion-slate-light">Market Price:</p>
            <p className="text-sm text-zion-cyan font-medium">{service.marketPrice}</p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-white">Key Features:</p>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light/30 text-zion-slate-light">
                {feature}
              </Badge>
            ))}
            {service.features.length > 3 && (
              <Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                +{service.features.length - 3} more
              </Badge>
            )}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          </div>
        </div>

        {/* Benefits */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                <TrendingUp className="w-3 h-3 text-zion-cyan" />
                <span>{benefit}</span>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        <div className="space-y-2">
          <p className="text-sm font-medium text-white">Benefits:</p>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span className="text-xs text-zion-slate-light">{benefit}</span>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-zion-slate-light">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span>{service.rating}</span>
            <span>({service.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-zion-cyan" />
            <span>AI Score: {service.aiScore}</span>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        {/* Target Audience */}
        <div>
          <p className="text-sm font-medium text-white mb-2">Perfect for:</p>
          <div className="flex flex-wrap gap-2">
            {service.targetAudience.slice(0, 3).map((audience, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                {audience}
              </Badge>
            ))}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          </div>
        </div>

        {/* Action Buttons */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            asChild
          >
            <Link to={service.contactLink}>
              Get Started
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </Button>
          
          {service.demoLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <a href={service.demoLink} target="_blank" rel="noopener noreferrer">
                <Play className="w-3 h-3" />
              </a>
            </Button>
          )}
          
          {service.documentationLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <a href={service.documentationLink} target="_blank" rel="noopener noreferrer">
                <FileText className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEO 
        title="Micro SAAS Services & AI Solutions - Zion Tech Group" 
        description="Discover cutting-edge AI services, IT solutions, and micro SAAS tools. Save up to 55% on enterprise-grade technology solutions."
        keywords="AI services, IT consulting, micro SAAS, cloud migration, cybersecurity, DevOps automation"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-zion-cyan" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Micro SAAS & AI Services
              </h1>
              <Sparkles className="w-8 h-8 text-zion-cyan" />
            </div>
            
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions, professional IT services, and affordable micro SAAS tools. 
              <span className="text-zion-cyan font-semibold"> Save up to 55% </span> 
              on enterprise-grade technology solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple">55%</div>
                <div className="text-zion-slate-light">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"
                asChild
              >
                <Link to="/contact">
                  Get Free Consultation
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"
                asChild
              >
                <Link to="/request-quote">
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('all')}
                    className={selectedCategory === 'all' ? 'bg-zion-purple text-white' : 'border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'}
                  >
                    All Services
                  </Button>
                  {SERVICE_CATEGORIES.map((category) => (
                    <Button
                      key={category.name}
                      variant={selectedCategory === category.name ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category.name)}
                      className={selectedCategory === category.name ? 'bg-zion-purple text-white' : 'border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'}
                    >
                      {category.icon} {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        <div className="flex space-x-3 pt-4">
          <Button 
            asChild 
            className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          >
            <Link to={service.website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
          >
            <a href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}>
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS services and solutions in AI, IT, and business automation. Transform your business with cutting-edge technology."
        keywords="micro SAAS, AI services, IT solutions, business automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our innovative micro SAAS solutions. From AI-powered automation to enterprise IT services, 
              we provide cutting-edge technology that drives growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-light hover:to-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/50 border-b border-zion-blue-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-16 z-40 bg-zion-slate-dark/80 backdrop-blur-md border-b border-zion-blue-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-zion-purple text-white" 
                    : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-purple hover:text-zion-purple"
                  }
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-zion-blue-light/20 text-zion-slate-light">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Pricing Filter */}
            <div className="flex gap-2">
              {pricingModels.map((model) => (
                <Button
                  key={model.id}
                  variant={selectedPricing === model.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPricing(model.id)}
                  className={selectedPricing === model.id 
                    ? "bg-zion-cyan text-white" 
                    : "border-zion-blue-light/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan"
                  }
                >
                  {model.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-zion-blue-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 text-sm focus:border-zion-purple focus:outline-none"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or filters</p>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedPricing('all');
            }} className="bg-zion-purple text-white hover:bg-zion-purple-light">
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-zion-slate-light">
                Showing <span className="text-zion-cyan font-medium">{filteredServices.length}</span> of{' '}
                <span className="text-zion-cyan font-medium">{MICRO_SAAS_SERVICES.length}</span> services
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-slate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Our Experts
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="tel:+13024640950">
                  <Globe className="w-5 h-5 mr-2" />
                  Call +1 (302) 464-0950
                </a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-level security and compliance for your business data</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-zion-slate-light">Cutting-edge artificial intelligence for maximum efficiency</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-zion-slate-light">Round-the-clock expert support and consultation</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5241
    </>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-light hover:to-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
  );
}