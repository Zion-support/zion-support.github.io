import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Building
} from 'lucide-react';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e899

import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Brain, Cloud, Lock, Zap, Users, BarChart3, FileImage, Code, Shield as ShieldIcon, Server, TrendingUp, MessageCircle, Video, FileText, Heart } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
import { useEffect, useState } from "react";
import { EXPANDED_SERVICES } from "@/data/expandedServices";

import { ProductListing } from "@/types/listings";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Brain, Cloud, Lock, Zap, Users, BarChart3, FileImage, Code, Shield as ShieldIcon, Server, TrendingUp, MessageCircle, Video, FileText, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";
import { InnovativeServicesShowcase } from "@/components/InnovativeServicesShowcase";
import { ComprehensivePricingComparison } from "@/components/ComprehensivePricingComparison";
import { EmergingTechnologyShowcase } from "@/components/EmergingTechnologyShowcase";

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'fintech', name: 'FinTech', icon: DollarSign, color: 'from-zion-green to-zion-cyan' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Brain, color: 'from-zion-red to-zion-purple' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Shield, color: 'from-zion-blue to-zion-purple' },
    { id: 'edtech', name: 'EdTech', icon: BookOpen, color: 'from-zion-orange to-zion-blue' },
    { id: 'marketing-ai', name: 'Marketing AI', icon: TrendingUp, color: 'from-zion-pink to-zion-cyan' },
    { id: 'sales-ai', name: 'Sales AI', icon: Users, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support-ai', name: 'Customer Support AI', icon: MessageCircle, color: 'from-zion-cyan to-zion-blue' },
    { id: 'project-management-ai', name: 'Project Management AI', icon: Rocket, color: 'from-zion-purple to-zion-orange' },
    { id: 'inventory-ai', name: 'Inventory AI', icon: Database, color: 'from-zion-blue to-zion-green' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services - Zion Tech Group" 
        description="Comprehensive range of IT and AI services to transform your business operations."
      />
      
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-8 px-4 md:px-8 mb-8 border-b border-zion-purple/30">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
              Zion Micro SAAS Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered analytics to quantum computing, 
              discover the future of business technology with our comprehensive micro SAAS platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length - 1}+</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">$2.5B+</div>
                <div className="text-zion-slate-light">Total Market Value</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Advanced Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="card-futuristic group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                          {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4 mb-6">
                      {/* Category & Innovation Level */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge' 
                            ? 'bg-zion-cyan/20 text-zion-cyan' 
                            : 'bg-zion-purple/20 text-zion-purple'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>

                      {/* ROI & Market Price */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-zion-green">
                          <TrendingUp className="w-4 h-4" />
                          <span>ROI: {service.roi}</span>
                        </div>
                        <div className="text-zion-slate-light">
                          Market: {service.marketPrice}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          <span>{service.supportLevel}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/services/${service.id}`}
                        className="btn-futuristic px-4 py-2 text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Enhanced Innovative Services Showcase */}
      <InnovativeServicesShowcase />

      {/* Comprehensive Pricing Comparison */}
      <ComprehensivePricingComparison />

      {/* Emerging Technology Showcase */}
      <EmergingTechnologyShowcase />

      {/* Specialized Services Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Specialized Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive range of IT and AI services to transform your business operations.
              From automation to cybersecurity, we've got you covered.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our services page is currently under development.
              </p>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">Cybersecurity</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $99/month</p>
                </div>
              </div>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Cloud className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">Cloud Solutions</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $49/month</p>
                </div>
              </div>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">Business Tools</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $29/month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 backdrop-blur-sm">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg shadow-zion-purple/25">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 backdrop-blur-sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Sales
            <Link to="/comprehensive-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zion-blue mb-4">IT & AI Services</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find expert technology service providers for your business needs, from AI development to infrastructure management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 border border-zion-blue-light">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-zion-blue mb-2">{service.title}</h3>
                <p className="text-zion-slate-light">{service.description}</p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-zion-purple">
                  ${service.price?.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-zion-blue/10 text-zion-blue text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
      <DynamicListingPage 
        title="Comprehensive Micro SAAS Solutions"
        description="Find the perfect AI-powered tools and services to accelerate your business growth. All services include free trials and expert support."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 19, max: 5000 }}
      />
      
      <TrustedBySection />
    </>
  );
};

export default ServicesPage;