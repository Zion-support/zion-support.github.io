import React, { useState } from "react"
import { motion } from "framer-motion"
import { ;
  Search,;
  Filter, ;
  Star, ;
  TrendingUp, ;
  Zap, ;
  Shield, ;
  Brain, ;
  Globe, ;
  Leaf, ;
  Rocket,;
  Car,;
  Satellite,;
  Dna,;
  Wind,;
  Cloud,;
  Network,;
  DollarSign,;
  Clock,;
  Users,;
  Target,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  ExternalLink;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from "../data/innovativeMicroSaasServices2028"
import { EMERGING_TECH_INNOVATIVE_SERVICES_2028 } from "../data/emergingTechInnovativeServices2028"
export default function InnovativeServicesShowcase2028() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('All'),;
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All'),;

  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2028,;
    ...EMERGING_TECH_INNOVATIVE_SERVICES_2028
  ],;

  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))]
  const innovationLevels = ['All', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))]

  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel
    return matchesSearch && matchesCategory && matchesInnovationLevel;&& matchesCategory && matchesInnovationLevel; matchesCategory && matchesInnovationLevel
  });
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'Quantum Computing & AI':;
        return <[^>]*/>
      case 'Manufacturing & AI':;
        return <Zap className="w-6 h-6" />,;
      case 'Healthcare & AI':;
        return <Shield className="w-6 h-6" />,;
      case 'Financial Services & AI':;
        return <DollarSign className="w-6 h-6" />,;
      case 'Smart Cities & AI':;
        return <Globe className="w-6 h-6" />,;
      case 'Agriculture & AI':;
        return <Leaf className="w-6 h-6" />,;
      case 'Legal Services & AI':;
        return <Shield className="w-6 h-6" />,;
      case 'Education & AI':;
        return <Brain className="w-6 h-6" />,;
      case 'Real Estate & AI':;
        return <Globe className="w-6 h-6" />,;
      case 'Blockchain & Supply Chain':;
        return <Network className="w-6 h-6" />,;
      case 'Autonomous Vehicles & AI':;
        return <Car className="w-6 h-6" />,;
      case 'Space Technology & AI':;
        return <Satellite className="w-6 h-6" />,;
      case 'Biotechnology & AI':;
        return <Dna className="w-6 h-6" />,;
      case 'Renewable Energy & AI':;
        return <Wind className="w-6 h-6" />,;
      case 'Climate Technology & AI':;
        return <Cloud className="w-6 h-6" />,;
      case 'Quantum Internet & AI':;
        return <Network className="w-6 h-6" />,;
      default: return <[^>]*/>
    };
  };
  const getInnovationLevelColor = (level: string) => {;
    switch (level) {;
      case 'Revolutionary':;
        return 'bg-gradient-to-r from-purple-600 to-pink-600'
      case 'Advanced':;
        return 'bg-gradient-to-r from-blue-600 to-cyan-600',;
      case 'Innovative':;
        return 'bg-gradient-to-r from-green-600 to-emerald-600',;
      default: return 'bg-gradient-to-r from-gray-600 to-slate-600'
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge 2028 innovative micro SAAS services, AI solutions, and emerging technology platforms. Transform your business with revolutionary AI-powered solutions."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1 ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              2028 Innovative Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">;
                Showcase;
              </[^>]*>
            </[^>]*>
            <motion.p ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Discover our revolutionary micro SAAS services, AI-powered solutions, and cutting-edge emerging technologies that will transform your business in 2028 and beyond.;
            </[^>]*>
            <motion.div ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.4 }};
              className="[^"]*"
            >;
              <div className="flex items-center gap-2 text-green-400">;
                <[^>]*/>
                <span>100+ Innovative Services</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-blue-400">;
                <[^>]*/>
                <span>Market-Leading ROI</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-purple-400">;
                <[^>]*/>
                <span>Cutting-Edge Technology</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
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
            <div className="relative">;
              <[^>]*/>
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-800 text-white">;
                    {category};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Innovation Level Filter */};
            <div className="relative">;
              <[^>]*/>
              <select;
                value={selectedInnovationLevel};
                onChange={(e) => setSelectedInnovationLevel(e.target.value)};
                className="[^"]*"
              >;
                {innovationLevels.map(level => (;
                  <option key={level} value={level} className="bg-slate-800 text-white">;
                    {level};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {filteredServices.map((service, index) => (;
            <motion.div
              key={service.id};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: index * 0.1 }};
              className="[^"]*"
            >;
              {/* Service Header */};
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center gap-3">;
                  <div className="p-2 bg-blue-500/20 rounded-lg">;
                    {getCategoryIcon(service.category)};
                  </[^>]*>
                  <div>;
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">;
                      {service.title};
                    </[^>]*>
                    <p className="text-sm text-gray-400">{service.category}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>;
                  {service.innovationLevel};
                </[^>]*>
              </[^>]*>

              {/* Description */};
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">;
                {service.description};
              </[^>]*>

              {/* Key Features */};
              <div className="mb-4">;
                <h4 className="text-sm font-medium text-white mb-2">Key Features</[^>]*>
                <div className="space-y-1">;
                  {service.features.slice(0, 3).map((feature, idx) => (;
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">;
                      <[^>]*/>
                      <span>{feature}</[^>]*>
                    </[^>]*>
                  ))};
                  {service.features.length > 3 && (;&& (; (
                    <div className="text-xs text-gray-500">;
                      +{service.features.length - 3} more features;
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>

              {/* Benefits */};
              <div className="mb-4">;
                <h4 className="text-sm font-medium text-white mb-2">Key Benefits</[^>]*>
                <div className="space-y-1">;
                  {service.benefits.slice(0, 2).map((benefit, idx) => (;
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">;
                      <[^>]*/>
                      <span>{benefit}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Pricing and ROI */};
              <div className="flex items-center justify-between mb-4">;
                <div>;
                  <div className="text-2xl font-bold text-white">;
                    ${service.price.toLocaleString()};
                    <span className="text-sm text-gray-400">/month</[^>]*>
                  </[^>]*>
                  <div className="text-xs text-gray-400">Market: {service.marketPrice}</[^>]*>
                </[^>]*>
                <div className="text-right">;
                  <div className="text-lg font-bold text-green-400">{service.roi}</[^>]*>
                  <div className="text-xs text-gray-400">ROI</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Technical Specs */};
              <div className="mb-4">;
                <h4 className="text-sm font-medium text-white mb-2">Technology Stack</[^>]*>
                <div className="flex flex-wrap gap-1">;
                  {service.technicalSpecs?.technology.slice(0, 4).map((tech, idx) => (;
                    <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">;
                      {tech};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Contact and Action */};
              <div className="flex items-center justify-between pt-4 border-t border-white/20">;
                <div className="flex items-center gap-4 text-sm text-gray-400">;
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span>{service.contactInfo.phone}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span>{service.contactInfo.email}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <a;
                  href={service.contactInfo.website};
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  Learn More;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* No Results */};
        {filteredServices.length === 0 && (;&& (; (
          <div className="text-center py-12">;
            <div className="text-gray-400 text-lg mb-2">No services found</[^>]*>
            <div className="text-gray-500">Try adjusting your search criteria or filters</[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Contact Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">;
          <div className="text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">;
              Contact our team of experts to learn how our innovative 2028 services can revolutionize your operations;
              increase efficiency, and drive unprecedented growth.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <div className="flex items-center gap-2 text-white">;
                <[^>]*/>
                <span>+1 302 464 0950</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-white">;
                <[^>]*/>
                <span>kleber@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-white">;
                <[^>]*/>
                <a ;
                  href="https://[^;]*
                  target="_blank" ;
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  ziontechgroup.com
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="mt-6 text-sm text-gray-400">;
              Address: 364 E Main St STE 1008, Middletown DE 19709;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};