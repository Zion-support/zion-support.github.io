import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  Brain,;
  Cloud,;
  Shield,;
  Zap,;
  Globe,;
  Database,;
  Smartphone,;
  Rocket,;
  Cpu,;
  Network,;
  Lock,;
  BarChart3,;
  Users,;
  Target,;
  Award,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Search,;
  Filter,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  Shield as ShieldIcon;
} from "lucide-react"
import { ULTIMATE_INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from "../data/ultimateInnovativeServices2025"
export default function UltimateInnovativeServicesShowcase2025() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all'),;
  const [searchTerm, setSearchTerm] = useState<string>(''),;
  const [sortBy, setSortBy] = useState<string>('innovation'),;

  const filteredServices = useMemo(() => {;
    let filtered = ULTIMATE_INNOVATIVE_SERVICES_2025;

    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => service.category === selectedCategory),;
    };

    if (selectedSubcategory !== 'all') {;
      filtered = filtered.filter(service => service.subcategory === selectedSubcategory),;
    };

    if (searchTerm) {;
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      ),;
    };

    //[^;]*
    switch (sortBy) {;
      case 'price-low':;
        filtered = [...filtered].sort((a, b) => a.price - b.price),;
        break,;
      case 'price-high':;
        filtered = [...filtered].sort((a, b) => b.price - a.price),;
        break,;
      case 'roi':;
        filtered = [...filtered].sort((a, b) => {;
          const aRoi = parseInt(a.roi.split('%')[0]);
          const bRoi = parseInt(b.roi.split('%')[0]);
          return bRoi - aRoi,;
        }),;
        break,;
      case 'delivery':;
        filtered = [...filtered].sort((a, b) => {;
          const aWeeks = parseInt(a.estimatedDelivery.split('-')[0]);
          const bWeeks = parseInt(b.estimatedDelivery.split('-')[0]);
          return aWeeks - bWeeks,;
        }),;
        break,;
      default: //[^;]*
        filtered = [...filtered].sort((a, b) => {;
          const innovationOrder = ['RevolutionaryBreakthrough', 'Advanced']
          const aIndex = innovationOrder.indexOf(a.innovationLevel.split(' - ')[0]);
          const bIndex = innovationOrder.indexOf(b.innovationLevel.split(' - ')[0]);
          return aIndex - bIndex,;
        });
    };

    return filtered;
  }, [selectedCategory, selectedSubcategory, searchTerm, sortBy]);
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Automation': return <[^>]*/>
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />,;
      case 'Blockchain & Web3': return <Globe className="w-6 h-6" />,;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />,;
      case 'IoT & Edge Computing': return <Network className="w-6 h-6" />,;
      case 'Metaverse & AR/VR': return <Smartphone className="w-6 h-6" />,;
      case 'Robotics & Automation': return <Rocket className="w-6 h-6" />,;
      case 'Biotechnology': return <Database className="w-6 h-6" />,;
      case 'Space Technology': return <Zap className="w-6 h-6" />,;
      case 'Green Technology': return <BarChart3 className="w-6 h-6" />,;
      default: return <[^>]*/>
    };
  };
  const getInnovationBadge = (level: string) => {;
    const type = level.split(' - ')[0]
    switch (type) {;
      case 'Revolutionary':;
        return <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">🚀 Revolutionary</span>,;
      case 'Breakthrough':;
        return <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">💡 Breakthrough</span>,;
      case 'Advanced':;
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">⚡ Advanced</span>,;
      default: return <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">🔬 Innovative</[^>]*>
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">;
      {/* Header */};
      <div className="bg-white shadow-sm border-b">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
          <div className="text-center">;
            <motion.h1
              initial={{ opacity: 0, y: -20 }};
              animate={{ opacity: 1, y: 0 }};
              className="[^"]*"
            >;
              Ultimate Innovative Services 2025;
            </[^>]*>
            <motion.p
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.2 }};
              className="[^"]*"
            >;
              Discover the future of technology with our revolutionary micro SAAS services.;
              From AI and quantum computing to space technology and biotechnology.;
            </[^>]*>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }};
              animate={{ opacity: 1, scale: 1 }};
              transition={{ delay: 0.4 }};
              className="[^"]*"
            >;
              <div className="flex items-center gap-2 text-sm text-gray-600">;
                <[^>]*/>
                <span>10 Revolutionary Services</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-sm text-gray-600">;
                <[^>]*/>
                <span>300-1000% ROI</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-sm text-gray-600">;
                <[^>]*/>
                <span>Global Innovation Leader</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Filters and Search */};
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">;
          <div className="flex flex-col lg:flex-row gap-4 items-center">;
            {/* Search */};
            <div className="relative flex-1 max-w-md">;
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
            <div className="flex gap-2">;
              <select;
                value={selectedCategory};
                onChange={(e) => {;
                  setSelectedCategory(e.target.value)
                  setSelectedSubcategory('all')
                }};
                className="[^"]*"
              >;
                <option value="all">All Categories</[^>]*>
                {SERVICE_CATEGORIES.map(category => (;
                  <option key={category} value={category}>{category}</[^>]*>
                ))};
              </[^>]*>

              <select;
                value={selectedSubcategory};
                onChange={(e) => setSelectedSubcategory(e.target.value)};
                className="[^"]*"
              >;
                <option value="all">All Subcategories</[^>]*>
                {selectedCategory !== 'all' && SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES]?.map(subcategory => (;&& SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES]?.map(subcategory => (; SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES]?.map(subcategory => (
                  <option key={subcategory} value={subcategory}>{subcategory}</[^>]*>
                ))};
              </[^>]*>

              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="innovation">Sort by Innovation</[^>]*>
                <option value="roi">Sort by ROI</[^>]*>
                <option value="price-low">Price: Low to High</[^>]*>
                <option value="price-high">Price: High to Low</[^>]*>
                <option value="delivery">Fastest Delivery</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">;
          {filteredServices.map((service, index) => (;
            <motion.div
              key={service.id};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: index * 0.1 }};
              className="[^"]*"
            >;
              {/* Service Header */};
              <div className="p-6 border-b border-gray-100">;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center gap-3">;
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">;
                      {getCategoryIcon(service.category)};
                    </[^>]*>
                    <div>;
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">;
                        {service.title};
                      </[^>]*>
                      <p className="text-sm text-gray-500">{service.category}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  {getInnovationBadge(service.innovationLevel)};
                </[^>]*>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">;
                  {service.description};
                </[^>]*>

                {/* Price and ROI */};
                <div className="flex items-center justify-between">;
                  <div className="text-2xl font-bold text-blue-600">;
                    ${service.price.toLocaleString()};
                    <span className="text-sm font-normal text-gray-500">/month</[^>]*>
                  </[^>]*>
                  <div className="text-right">;
                    <div className="text-sm text-gray-500">ROI</[^>]*>
                    <div className="text-lg font-semibold text-green-600">{service.roi}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Service Details */};
              <div className="p-6">;
                {/* Key Features */};
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</[^>]*>
                  <div className="space-y-1">;
                    {service.features.slice(0, 3).map((feature, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">;
                        <[^>]*/>
                        <span className="line-clamp-1">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                    {service.features.length > 3 && (;&& (; (
                      <div className="text-sm text-blue-600 font-medium">;
                        +{service.features.length - 3} more features;
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>

                {/* Benefits */};
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</[^>]*>
                  <div className="space-y-1">;
                    {service.benefits.slice(0, 2).map((benefit, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">;
                        <[^>]*/>
                        <span className="line-clamp-1">{benefit}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Technical Specs */};
                {service.technicalSpecs && (;&& (; (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">;
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technical Specs</[^>]*>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">;
                      <div>;
                        <span className="font-medium">Uptime:</span> {service.technicalSpecs.uptime};
                      </[^>]*>
                      <div>;
                        <span className="font-medium">APIs:</span> {service.technicalSpecs.apiEndpoints};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                )};

                {/* Delivery and Support */};
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">;
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span>{service.estimatedDelivery}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span>{service.supportLevel.split(' ')[0]}</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Action Buttons */};
                <div className="flex gap-2">;
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;
                    <[^>]*/>
                    Contact Sales;
                  </[^>]*>
                  <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>

                {/* Contact Info */};
                <div className="mt-4 pt-4 border-t border-gray-100">;
                  <div className="flex items-center justify-between text-xs text-gray-500">;
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      <span>{service.contactInfo.email}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      <span>{service.contactInfo.phone}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* No Results */};
        {filteredServices.length === 0 && (;&& (; (
          <div className="text-center py-12">;
            <div className="text-gray-400 mb-4">;
              <[^>]*/>
            </[^>]*>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</[^>]*>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Contact Section */};
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="text-center">;
            <h2 className="text-3xl md:text-4xl font-bold mb-4">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
              Join the future of technology with our revolutionary services.;
              Get in touch to discuss how we can help you achieve unprecedented growth and innovation.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href={`tel:${ULTIMATE_INNOVATIVE_SERVICES_2025[0].contactInfo.phone}`};
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
              <a;
                href={`mailto:${ULTIMATE_INNOVATIVE_SERVICES_2025[0].contactInfo.email}`};
                className="[^"]*"
              >;
                <[^>]*/>
                Email Us;
              </[^>]*>
            </[^>]*>
            <div className="mt-8 text-blue-100">;
              <p className="text-lg font-medium mb-2">Zion Tech Group</[^>]*>
              <p className="text-sm">364 E Main St STE 1008, Middletown DE 19709</[^>]*>
              <p className="text-sm">https: //ziontechgroup.com</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};