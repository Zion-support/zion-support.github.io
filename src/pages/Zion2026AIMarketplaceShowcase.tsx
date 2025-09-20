import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ;
  Search,;
  Filter, ;
  Grid3X3, ;
  List, ;
  Star, ;
  TrendingUp, ;
  Users, ;
  Zap,;
  Shield,;
  BarChart3,;
  Code,;
  Globe,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink;
} from "lucide-react"
import { zion2026AIMarketplaceServices } from "../../data/zion-2026-ai-marketplace-services"
const Zion2026AIMarketplaceShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;

  const categories = ['allAI Marketplace', 'AI IntegrationAI Automation', 'AI AnalyticsAI Development']

  const filteredServices = useMemo(() => {;
    return zion2026AIMarketplaceServices.filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()),;
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      return matchesSearch && matchesCategory,;&& matchesCategory,; matchesCategory,
    }),;
  }, [searchTerm, selectedCategory]),;

  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI Marketplace': return Globe;
      case 'AI Integration': return Zap,;
      case 'AI Automation': return Shield,;
      case 'AI Analytics': return BarChart3,;
      case 'AI Development': return Code,;
      default: return Globe;
    };
  };
  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'AI Marketplace': return 'from-blue-500 to-cyan-500'
      case 'AI Integration': return 'from-purple-500 to-pink-500',;
      case 'AI Automation': return 'from-green-500 to-emerald-500',;
      case 'AI Analytics': return 'from-orange-500 to-red-500',;
      case 'AI Development': return 'from-indigo-500 to-blue-500',;
      default: return 'from-gray-500 to-slate-500'
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Zion AI Marketplace;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">;
                Services 2026;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Discover the future of AI services with our comprehensive marketplace platform. ;
              Connect, integrate, and optimize your AI solutions with cutting-edge tools and services.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Explore Services;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Learn More;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information Banner */};
      <section className="py-8 bg-gradient-to-r from-blue-600 to-cyan-600">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col md:flex-row items-center justify-between text-white">;
            <div className="flex items-center space-x-4 mb-4 md:mb-0">;
              <[^>]*/>
              <span className="font-semibold">+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">;
              <[^>]*/>
              <span className="font-semibold">kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex items-center space-x-4">;
              <[^>]*/>
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filter Section */};
      <section className="py-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl">;
            <div className="flex flex-col lg:flex-row gap-6">;
              {/* Search */};
              <div className="flex-1">;
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type="text"
                    placeholder="Search AI marketplace services..."
                    value={searchTerm};
                    onChange={(e) => setSearchTerm(e.target.value)};
                    className="[^"]*"
                  />;
                </[^>]*>
              </[^>]*>

              {/* Category Filter */};
              <div className="flex-shrink-0">;
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>;
                      {category === 'all' ? 'All Categories' : category}
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* View Mode Toggle */};
              <div className="flex-shrink-0">;
                <div className="flex bg-slate-700 rounded-lg p-1">;
                  <button;
                    onClick={() => setViewMode('grid')};
                    className={`p-2 rounded-md transition-colors ${;
                      viewMode === 'grid' ;
                        ? 'bg-blue-500 text-white' ;
                        : 'text-gray-400 hover:text-white'
                    }`};
                  >;
                    <[^>]*/>
                  </[^>]*>
                  <button;
                    onClick={() => setViewMode('list')};
                    className={`p-2 rounded-md transition-colors ${;
                      viewMode === 'list' ;
                        ? 'bg-blue-500 text-white' ;
                        : 'text-gray-400 hover:text-white'
                    }`};
                  >;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          {filteredServices.length === 0 ? (;
            <div className="text-center py-20">;
              <[^>]*/>
              <h3 className="text-xl text-gray-300 mb-2">No services found</[^>]*>
              <p className="text-gray-500">Try adjusting your search or filter criteria</[^>]*>
            </[^>]*>
          ) : (;
            <div className={viewMode === 'grid' ;
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }>;
              {filteredServices.map((service, index) => (;
                <motion.div
                  key={service.id};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.5, delay: index * 0.1 }};
                  className={`bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${;
                    viewMode === 'list' ? 'flex' : ''
                  }`};
                >;
                  {/* Service Header */};
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-4">;
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                        {React.createElement(getCategoryIcon(service.category), { ;
                          className: 'w-6 h-6 text-white' ;
                        })};
                      </[^>]*>
                      <span className="text-sm text-gray-400 font-medium">{service.category}</[^>]*>
                    </[^>]*>

                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</[^>]*>
                    <p className="text-gray-300 mb-4">{service.description}</[^>]*>

                    {/* Pricing */};
                    <div className="mb-4">;
                      <div className="flex items-center space-x-2 mb-2">;
                        <[^>]*/>
                        <span className="text-sm text-gray-400">Starting from</[^>]*>
                      </[^>]*>
                      <div className="text-2xl font-bold text-white">;
                        ${service.price.monthly};
                        <span className="text-sm text-gray-400 font-normal">/month</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    {/* Key Benefits */};
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</[^>]*>
                      <ul className="space-y-1">;
                        {service.benefits.slice(0, 3).map((benefit, idx) => (;
                          <li key={idx} className="text-sm text-gray-400 flex items-center">;
                            <[^>]*/>
                            {benefit};
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    {/* ROI and Market Size */};
                    <div className="grid grid-cols-2 gap-4 mb-4">;
                      <div className="text-center p-3 bg-slate-700 rounded-lg">;
                        <div className="text-sm text-gray-400 mb-1">ROI</[^>]*>
                        <div className="text-xs text-green-400 font-medium">{service.roi}</[^>]*>
                      </[^>]*>
                      <div className="text-center p-3 bg-slate-700 rounded-lg">;
                        <div className="text-sm text-gray-400 mb-1">Market Size</[^>]*>
                        <div className="text-xs text-blue-400 font-medium">{service.marketSize}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Action Buttons */};
                  <div className="p-6 bg-slate-700">;
                    <div className="flex space-x-3">;
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">;
                        Get Started;
                      </[^>]*>
                      <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">;
                        Learn More;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Contact CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business with AI?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Connect with our team to discover how Zion AI Marketplace services can drive innovation;
              efficiency, and growth for your organization.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Call Now: +1 302 464 0950</[^>]*>
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Email Us</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="mt-8 text-center">;
              <a ;
                href="https://[^;]*
                target="_blank" ;
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                <span>Visit our website</[^>]*>
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Zion2026AIMarketplaceShowcase;