import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Star, TrendingUp, Clock, Users, DollarSign, Globe, Shield, Bot, Cloud, BarChart3, Workflow, FileText, Sparkles, Building, Car, Leaf, Zap, Home, Scale, GraduationCap, ShoppingCart, Hotel } from "lucide-react"
import { SEO } from "@/components/SEO"
import { enhancedServices2025 } from "../../data/enhanced-2025-services"
import { specializedIndustryServices } from "../../data/specialized-industry-services"
import { allServices } from "../../data/services"
import { Link } from "react-router-dom"
export default function ServicesOverview() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedIndustry, setSelectedIndustry] = useState('all'),;
  const [sortBy, setSortBy] = useState('name'),;

  //[^;]*
  const allAvailableServices = [;
    ...enhancedServices2025
    ...specializedIndustryServices
    ...allServices
  ];
  //[^;]*
  const categories = [;
    { id: 'all', name: 'All Categories', icon: Globe };
    { id: 'AI', name: 'AI & Machine Learning', icon: Bot };
    { id: 'IT', name: 'IT & Infrastructure', icon: Cloud };
    { id: 'Security', name: 'Security & Compliance', icon: Shield };
    { id: 'Analytics', name: 'Analytics & BI', icon: BarChart3 };
    { id: 'Automation', name: 'Automation', icon: Workflow };
    { id: 'Fintech', name: 'Fintech', icon: DollarSign };
    { id: 'Healthcare', name: 'Healthcare', icon: FileText };
    { id: 'Education', name: 'Education', icon: GraduationCap };
    { id: 'Marketing', name: 'Marketing', icon: ShoppingCart };
    { id: 'Development', name: 'Development', icon: Building };
    { id: 'SAAS', name: 'SAAS Solutions', icon: Cloud };
  ];
  //[^;]*
  const industries = [;
    { id: 'all', name: 'All Industries', icon: Globe };
    { id: 'Manufacturing', name: 'Manufacturing', icon: Building };
    { id: 'Healthcare', name: 'Healthcare', icon: FileText };
    { id: 'Legal', name: 'Legal', icon: Scale };
    { id: 'Real Estate', name: 'Real Estate', icon: Home };
    { id: 'Agriculture', name: 'Agriculture', icon: Leaf };
    { id: 'Energy', name: 'Energy', icon: Zap };
    { id: 'Transportation', name: 'Transportation', icon: Car };
    { id: 'Retail', name: 'Retail', icon: ShoppingCart };
    { id: 'Hospitality', name: 'Hospitality', icon: Hotel };
    { id: 'Education', name: 'Education', icon: GraduationCap };
    { id: 'Finance', name: 'Finance', icon: DollarSign };
  ];
  //[^;]*
  const filteredServices = allAvailableServices;
    .filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tagline?.toLowerCase().includes(searchTerm.toLowerCase()),;
      ;
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      ;
      const matchesIndustry = selectedIndustry === 'all' || 
                             (service.industry && service.industry === selectedIndustry) ||;&& service.industry === selectedIndustry) ||; service.industry === selectedIndustry) ||
                             (!service.industry && selectedIndustry === 'all'),;&& selectedIndustry === 'all'),; selectedIndustry === 'all'),
      ;
      return matchesSearch && matchesCategory && matchesIndustry,;&& matchesCategory && matchesIndustry,; matchesCategory && matchesIndustry,
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'name':;
          return a.name.localeCompare(b.name),;
        case 'price-low':;
          return (a.pricing?.starter || 0) - (b.pricing?.starter || 0),
        case 'price-high':;
          return (b.pricing?.starter || 0) - (a.pricing?.starter || 0),
        case 'popular':;
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0),
        case 'new':;
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0),
        default: return 0;
      };
    });
  const renderServiceCard = (service: any) => (;
    <motion.div
      key={service.id};
      className="[^"]*"
      whileHover={{ y: -5, scale: 1.02 }};
      initial={{ opacity: 0, y: 20 }};
      animate={{ opacity: 1, y: 0 }};
      transition={{ duration: 0.5 }};
    >;
      <div className="flex items-start justify-between mb-4">;
        <div className="text-4xl mb-2">{service.icon}</[^>]*>
        <div className="flex gap-2">;
          {service.isPopular && (;&& (; (
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full">;
              Popular;
            </[^>]*>
          )};
          {service.isNew && (;&& (; (
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full">;
              New;
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>
      ;
      <h3 className="text-xl font-bold text-white mb-2">{service.name}</[^>]*>
      {service.tagline && (;&& (; (
        <p className="text-cyan-400 text-sm mb-2 italic">"{service.tagline}"</[^>]*>
      )};
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</[^>]*>
      ;
      <div className="mb-4">;
        <div className="flex items-center justify-between">;
          <span className="text-2xl font-bold text-cyan-400">;
            ${service.pricing?.starter || service.price?.replace(/[^0-9]/g, '') || 'Contact'}
          </[^>]*>
          <span className="text-gray-400 text-sm">;
            {service.pricing?.period || '/month'}
          </[^>]*>
        </[^>]*>
        {service.pricing?.professional && (;&& (; (
          <div className="text-sm text-gray-400 mt-1">;
            Pro: ${service.pricing.professional}/month | Enterprise: ${service.pricing.enterprise}/month;
          </[^>]*>
        )};
      </[^>]*>

      <div className="mb-4">;
        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</[^>]*>
        <ul className="space-y-1">;
          {(service.features || []).slice(0, 4).map((feature: string, index: number) => (
            <li key={index} className="text-gray-300 text-xs flex items-center">;
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></[^>]*>
              {feature};
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      <div className="mb-4">;
        <h4 className="text-white font-semibold mb-2 text-sm">Benefits:</[^>]*>
        <ul className="space-y-1">;
          {(service.benefits || []).slice(0, 3).map((benefit: string, index: number) => (
            <li key={index} className="text-gray-300 text-xs flex items-center">;
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></[^>]*>
              {benefit};
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {service.marketPosition && (;&& (; (
        <div className="mb-4 p-3 bg-white/5 rounded-lg">;
          <p className="text-gray-300 text-xs italic">"{service.marketPosition}"</[^>]*>
        </[^>]*>
      )};

      {service.roi && (;&& (; (
        <div className="mb-4 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">;
          <p className="text-green-400 text-xs font-semibold">ROI: {service.roi}</[^>]*>
        </[^>]*>
      )};

      <div className="mb-4">;
        <div className="flex flex-wrap gap-2">;
          {service.targetAudience?.slice(0, 3).map((audience: string, index: number) => (;
            <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">;
              {audience};
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      <div className="flex items-center justify-between">;
        <Link;
          to={service.link || `/services/${service.id}`}
          className="[^"]*"
        >;
          Learn More →;
        </[^>]*>
        ;
        <div className="flex items-center space-x-2 text-xs text-gray-400">;
          {service.trialDays && (;&& (; (
            <span className="flex items-center">;
              <[^>]*/>
              {service.trialDays}d trial;
            </[^>]*>
          )};
          {service.setupTime && (;&& (; (
            <span className="flex items-center">;
              <[^>]*/>
              {service.setupTime};
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO ;
        title="Zion Tech Group - Complete Services Overview & Pricing"
        description="Explore our comprehensive range of AI, IT, and specialized industry services. Detailed pricing, features, and ROI information for all our technology solutions."
        keywords="AI services pricing, IT services, specialized industry solutions, technology consulting, digital transformation, service pricing"
        canonicalUrl="https://ziontechgroup.com/services-overview"
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.h1 ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            Complete Services;
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Overview;
            </[^>]*>
          </[^>]*>
          ;
          <motion.p ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            Discover our comprehensive portfolio of cutting-edge technology services, complete with detailed pricing, features, and ROI information.;
          </[^>]*>

          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              Get Custom Quote;
            </[^>]*>
            <a;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              Call +1 (302) 464-0950;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Filters Section */};
      <section className="px-4 sm:px-6 lg:px-8 mb-12">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">;
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
              {/* Search */};
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>

              {/* Category Filter */};
              <div>;
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map(category => (;
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">;
                      {category.name};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Industry Filter */};
              <div>;
                <select;
                  value={selectedIndustry};
                  onChange={(e) => setSelectedIndustry(e.target.value)};
                  className="[^"]*"
                >;
                  {industries.map(industry => (;
                    <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">;
                      {industry.name};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Sort By */};
              <div>;
                <select;
                  value={sortBy};
                  onChange={(e) => setSortBy(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="name" className="bg-slate-800 text-white">Sort by Name</[^>]*>
                  <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</[^>]*>
                  <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</[^>]*>
                  <option value="popular" className="bg-slate-800 text-white">Most Popular</[^>]*>
                  <option value="new" className="bg-slate-800 text-white">Newest First</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="px-4 sm:px-6 lg:px-8 mb-16">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-3xl font-bold text-white">;
              {filteredServices.length} Services Available;
            </[^>]*>
            <div className="text-gray-400">;
              Showing {filteredServices.length} of {allAvailableServices.length} services;
            </[^>]*>
          </[^>]*>

          {filteredServices.length === 0 ? (;
            <div className="text-center py-20">;
              <div className="text-6xl mb-4">🔍</[^>]*>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</[^>]*>
              <p className="text-gray-400">Try adjusting your search criteria or filters</[^>]*>
            </[^>]*>
          ) : (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {filteredServices.map(renderServiceCard)};
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="px-4 sm:px-6 lg:px-8 py-20">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.h2 ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            Ready to Get Started?;
          </[^>]*>
          ;
          <motion.p ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            viewport={{ once: true }};
          >;
            Contact us to discuss your specific needs and get a customized solution for your business.;
          </[^>]*>

          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
            viewport={{ once: true }};
          >;
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">;
              <div className="text-3xl mb-4">📞</[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</[^>]*>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">;
                +1 (302) 464-0950;
              </[^>]*>
            </[^>]*>
            ;
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">;
              <div className="text-3xl mb-4">✉️</[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            ;
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">;
              <div className="text-3xl mb-4">📍</[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</[^>]*>
              <p className="text-gray-300 text-sm">;
                364 E Main St STE 1008<[^>]*/>
                Middletown DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
            viewport={{ once: true }};
          >;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              Schedule a Consultation;
            </[^>]*>
            <Link;
              to="/pricing"
              className="[^"]*"
            >;
              View Detailed Pricing;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};