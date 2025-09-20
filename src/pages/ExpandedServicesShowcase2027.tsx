import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  Search,;
  Filter,;
  Grid3X3,;
  List,;
  ChevronDown,;
  ChevronUp,;
  Star,;
  Users,;
  Globe,;
  Lock,;
  Code,;
  BarChart3,;
  Target,;
  Rocket,;
  Lightbulb,;
  Award,;
  Clock,;
  DollarSign,;
  TrendingUp,;
  Eye,;
  Handshake,;
  Building,;
  ShieldCheck,;
  Network2,;
  Smartphone as Mobile,;
  Server as Infrastructure,;
  Monitor as Analytics,;
  Zap as Lightning,;
  Users2,;
  Award as Trophy,;
  Clock as Time,;
  DollarSign as Money,;
  TrendingUp as Growth,;
  Eye as Vision,;
  Handshake as Partnership,;
  Building as Enterprise,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  CheckCircle,;
  ArrowRight,;
  Shield,;
  Brain,;
  Cloud,;
  Database,;
  Smartphone,;
  Server,;
  Monitor,;
  Cpu,;
  Network,;
  Smartphone as IoT,;
  Server as Edge,;
  Monitor as Healthcare,;
  Cpu as FinTech;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import {;
  ALL_EXPANDED_SERVICES_2027,;
  EXPANDED_SERVICE_CATEGORIES,;
  getExpandedServicesByCategory,;
  searchExpandedServices,;
  type ExpandedService2027;
} from "@/data/expandedInnovativeServices2027"
const ExpandedServicesShowcase2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [expandedService, setExpandedService] = useState<string | null>(null),;
  const [filteredServices, setFilteredServices] = useState<ExpandedService2027[]>(ALL_EXPANDED_SERVICES_2027),;

  useEffect(() => {;
    let services = getExpandedServicesByCategory(selectedCategory)
    if (searchQuery) {;
      services = searchExpandedServices(searchQuery),;
    };
    setFilteredServices(services),;
  }, [selectedCategory, searchQuery]),;

  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'Cybersecurity':;
        return Shield;
      case 'Data Analytics':;
        return BarChart3,;
      case 'Cloud & DevOps':;
        return Cloud,;
      case 'IoT & Edge Computing':;
        return IoT,;
      case 'Financial Technology':;
        return FinTech,;
      case 'Healthcare Technology':;
        return Healthcare,;
      default: return Rocket;
    };
  };
  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'Cybersecurity':;
        return 'from-red-500 to-pink-600'
      case 'Data Analytics':;
        return 'from-blue-500 to-cyan-600',;
      case 'Cloud & DevOps':;
        return 'from-indigo-500 to-purple-600',;
      case 'IoT & Edge Computing':;
        return 'from-green-500 to-emerald-600',;
      case 'Financial Technology':;
        return 'from-yellow-500 to-orange-600',;
      case 'Healthcare Technology':;
        return 'from-teal-500 to-blue-600',;
      default: return 'from-gray-500 to-slate-600'
    };
  };
  const formatPrice = (pricing: ExpandedService2027['pricing']) => {;
    if (pricing.model === 'Transaction Fees + Governance') {;
      return 'Free + Transaction Fees'
    };
    return `$${pricing.basePrice.toLocaleString()}/month`
  },;

  const renderServiceCard = (service: ExpandedService2027) => {;
    const CategoryIcon = getCategoryIcon(service.category)
    const categoryColor = getCategoryColor(service.category)

    return (
      <motion.div
        key={service.id};
        initial={{ opacity: 0, y: 20 }};
        animate={{ opacity: 1, y: 0 }};
        transition={{ duration: 0.5 }};
        className="[^"]*"
      >;
        {/* Header */};
        <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>;
          <div className="flex items-center justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <[^>]*/>
              <div>;
                <h3 className="text-xl font-bold">{service.name}</[^>]*>
                <p className="text-sm opacity-90">{service.category}</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex items-center space-x-2">;
              <[^>]*/>
              <span className="font-semibold">{service.rating}</[^>]*>
              <span className="text-sm opacity-90">({service.reviews})</[^>]*>
            </[^>]*>
          </[^>]*>
          <p className="text-sm opacity-90">{service.subcategory}</[^>]*>
        </[^>]*>

        {/* Content */};
        <div className="p-6">;
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">;
            {service.description};
          </[^>]*>

          {/* Pricing */};
          <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 mb-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <p className="text-sm text-gray-500 dark:text-gray-400">Starting Price</[^>]*>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">;
                  {formatPrice(service.pricing)};
                </[^>]*>
              </[^>]*>
              <div className="text-right">;
                <p className="text-sm text-gray-500 dark:text-gray-400">Market Price</[^>]*>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">;
                  {service.marketPrice};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Key Features */};
          <div className="mb-4">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</[^>]*>
            <div className="space-y-1">;
              {service.features.slice(0, 3).map((feature, index) => (;
                <div key={index} className="flex items-center space-x-2">;
                  <[^>]*/>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                </[^>]*>
              ))};
              {service.features.length > 3 && (;&& (; (
                <button;
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="[^"]*"
                >;
                  {expandedService === service.id ? 'Show less' : `+${service.features.length - 3} more features`}
                </[^>]*>
              )};
            </[^>]*>
          </[^>]*>

          {/* Expanded Features */};
          <AnimatePresence>;
            {expandedService === service.id && (;&& (; (
              <motion.div
                initial={{ opacity: 0, height: 0 }};
                animate={{ opacity: 1, height: 'auto' }};
                exit={{ opacity: 0, height: 0 }};
                className="[^"]*"
              >;
                <div className="space-y-1">;
                  {service.features.slice(3).map((feature, index) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <[^>]*/>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            )};
          </[^>]*>

          {/* Benefits */};
          <div className="mb-4">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits</[^>]*>
            <div className="grid grid-cols-2 gap-2">;
              {service.benefits.slice(0, 4).map((benefit, index) => (;
                <div key={index} className="flex items-center space-x-2">;
                  <div className="w-2 h-2 bg-green-500 rounded-full"></[^>]*>
                  <span className="text-xs text-gray-600 dark: text-gray-300 line-clamp-2">;
                    {benefit};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>

          {/* Technical Specs */};
          <div className="mb-4">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Specs</[^>]*>
            <div className="grid grid-cols-2 gap-4 text-sm">;
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Uptime</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{service.technicalSpecs.uptime}</[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">API Endpoints</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{service.technicalSpecs.apiEndpoints}</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* ROI and Setup */};
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">;
            <div>;
              <p className="text-gray-500 dark:text-gray-400">ROI</[^>]*>
              <p className="font-semibold text-green-600">{service.roi}</[^>]*>
            </[^>]*>
            <div>;
              <p className="text-gray-500 dark:text-gray-400">Setup Time</[^>]*>
              <p className="font-semibold text-gray-900 dark:text-white">{service.setupTime}</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Contact and Actions */};
          <div className="border-t border-gray-200 dark:border-slate-700 pt-4">;
            <div className="flex items-center justify-between mb-3">;
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">;
                <[^>]*/>
                <span>{service.contactInfo.phone}</[^>]*>
              </[^>]*>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${;
                service.status === 'active' ? 'bg-green-100 text-green-800' :;
                service.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :;
                'bg-gray-100 text-gray-800'
              }`}>;
                {service.status.toUpperCase()};
              </[^>]*>
            </[^>]*>

            <div className="flex space-x-2">;
              <a;
                href={`mailto:${service.contactInfo.email}`};
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Contact</[^>]*>
              </[^>]*>
              <a;
                href={service.contactInfo.website};
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Learn More</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    );
  };
  const renderServiceList = (service: ExpandedService2027) => {;
    const CategoryIcon = getCategoryIcon(service.category)
    const categoryColor = getCategoryColor(service.category)

    return (
      <motion.div
        key={service.id};
        initial={{ opacity: 0, x: -20 }};
        animate={{ opacity: 1, x: 0 }};
        transition={{ duration: 0.5 }};
        className="[^"]*"
      >;
        <div className="flex items-start space-x-4">;
          {/* Icon and Category */};
          <div className={`bg-gradient-to-r ${categoryColor} p-3 rounded-lg text-white flex-shrink-0`}>;
            <[^>]*/>
          </[^>]*>

          {/* Content */};
          <div className="flex-1 min-w-0">;
            <div className="flex items-start justify-between mb-2">;
              <div>;
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{service.name}</[^>]*>
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.category} • {service.subcategory}</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2">;
                <[^>]*/>
                <span className="text-sm font-semibold">{service.rating}</[^>]*>
                <span className="text-xs text-gray-500">({service.reviews})</[^>]*>
              </[^>]*>
            </[^>]*>

            <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">;
              {service.description};
            </[^>]*>

            {/* Key Info */};
            <div className="grid grid-cols-4 gap-4 mb-3 text-sm">;
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Price</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{formatPrice(service.pricing)}</[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">ROI</[^>]*>
                <p className="font-semibold text-green-600">{service.roi}</[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Setup</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{service.setupTime}</[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Status</[^>]*>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${;
                  service.status === 'active' ? 'bg-green-100 text-green-800' :;
                  service.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :;
                  'bg-gray-100 text-gray-800'
                }`}>;
                  {service.status.toUpperCase()};
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Actions */};
            <div className="flex items-center space-x-3">;
              <a;
                href={`mailto:${service.contactInfo.email}`};
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Contact Sales</[^>]*>
              </[^>]*>
              <a;
                href={service.contactInfo.website};
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Learn More</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">;
      <SEO;
        title="Expanded Innovative Services 2027 - Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced micro SAAS, IT infrastructure, and AI services. From quantum cybersecurity to healthcare AI, explore cutting-edge solutions."
        keywords="micro SAAS, IT services, AI services, cybersecurity, data analytics, cloud DevOps, IoT, fintech, healthcare technology"
      />;

      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              Expanded Innovative Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">;
                2027;
              </[^>]*>
            </[^>]*>
            <motion.p
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Discover our comprehensive portfolio of advanced micro SAAS, IT infrastructure, and AI services.;
              From quantum cybersecurity to healthcare AI, explore cutting-edge solutions that drive innovation and growth.;
            </[^>]*>

            {/* Contact Info */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.4 }};
              className="[^"]*"
            >;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <div>;
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</[^>]*>
                    <p className="font-semibold text-gray-900 dark:text-white">+1 302 464 0950</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <div>;
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</[^>]*>
                    <p className="font-semibold text-gray-900 dark:text-white">kleber@ziontechgroup.com</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <div>;
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</[^>]*>
                    <p className="font-semibold text-gray-900 dark:text-white">364 E Main St STE 1008</[^>]*>
                    <p className="font-semibold text-gray-900 dark:text-white">Middletown DE 19709</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        {/* Filters and Search */};
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">;
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">;
            {/* Search */};
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
            </[^>]*>

            {/* Category Filter */};
            <div className="flex items-center space-x-4">;
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {EXPANDED_SERVICE_CATEGORIES.map((category) => (;
                  <option key={category} value={category}>;
                    {category};
                  </[^>]*>
                ))};
              </[^>]*>

              {/* View Mode Toggle */};
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">;
                <button;
                  onClick={() => setViewMode('grid')};
                  className={`p-2 rounded-md transition-colors duration-200 ${;
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`};
                >;
                  <[^>]*/>
                </[^>]*>
                <button;
                  onClick={() => setViewMode('list')};
                  className={`p-2 rounded-md transition-colors duration-200 ${;
                    viewMode === 'list'
                      ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`};
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Services Count */};
        <div className="mb-8">;
          <p className="text-gray-600 dark:text-gray-300">;
            Showing {filteredServices.length} of {ALL_EXPANDED_SERVICES_2027.length} services;
          </[^>]*>
        </[^>]*>

        {/* Services Grid/List */};
        {filteredServices.length > 0 ? (;
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>;
            {filteredServices.map((service) =>;
              viewMode === 'grid' ? renderServiceCard(service) : renderServiceList(service)
            )};
          </[^>]*>
        ) : (;
          <div className="text-center py-16">;
            <div className="text-gray-400 dark:text-gray-500 mb-4">;
              <[^>]*/>
            </[^>]*>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No services found</[^>]*>
            <p className="text-gray-600 dark:text-gray-300">;
              Try adjusting your search criteria or category filter;
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* CTA Section */};
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Transform Your Business?;
          </[^>]*>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
            Our innovative services are designed to drive growth, efficiency, and competitive advantage.;
            Contact us today to discuss how we can help you achieve your goals.;
          </[^>]*>
          <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">;
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="[^"]*"
            >;
              <[^>]*/>
              <span>Get Started</[^>]*>
            </[^>]*>
            <a;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              <[^>]*/>
              <span>Call Now</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ExpandedServicesShowcase2027;