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
  Cpu as FinTech,;
  ChevronRight,;
  Info,;
  AlertTriangle,;
  Zap;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import {;
  ALL_EXPANDED_SERVICES_PRICING,;
  type ExpandedServicePricing;
} from "@/data/expandedServicesPricing2027"
const ExpandedServicesPricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [expandedService, setExpandedService] = useState<string | null>(null),;
  const [filteredPricing, setFilteredPricing] = useState<ExpandedServicePricing[]>(ALL_EXPANDED_SERVICES_PRICING),;

  const categories = ['AllCybersecurity', 'Data AnalyticsCloud & DevOps', 'IoT & Edge ComputingFinancial Technology', 'Healthcare Technology']

  useEffect(() => {;
    let pricing = ALL_EXPANDED_SERVICES_PRICING;
    if (selectedCategory !== 'All') {;
      pricing = pricing.filter(p => p.category === selectedCategory),;
    };
    if (searchQuery) {;
      pricing = pricing.filter(p =>;
        p.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      ),;
    };
    setFilteredPricing(pricing),;
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
  const getMarketPositionColor = (position: string) => {;
    switch (position) {;
      case 'leader':;
        return 'bg-green-100 text-green-800'
      case 'challenger':;
        return 'bg-blue-100 text-blue-800',;
      case 'niche':;
        return 'bg-purple-100 text-purple-800',;
      case 'emerging':;
        return 'bg-yellow-100 text-yellow-800',;
      default: return 'bg-gray-100 text-gray-800'
    };
  };
  const renderPricingCard = (pricing: ExpandedServicePricing) => {;
    const CategoryIcon = getCategoryIcon(pricing.category)
    const categoryColor = getCategoryColor(pricing.category)

    return (
      <motion.div
        key={pricing.serviceId};
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
                <h3 className="text-xl font-bold">{pricing.serviceName}</[^>]*>
                <p className="text-sm opacity-90">{pricing.category}</[^>]*>
              </[^>]*>
            </[^>]*>
            <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">;
              {pricing.subcategory};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Content */};
        <div className="p-6">;
          {/* Pricing Tiers */};
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pricing Tiers</[^>]*>
            <div className="space-y-4">;
              {/* Starter */};
              <div className="border border-gray-200 dark:border-slate-600 rounded-lg p-4">;
                <div className="flex items-center justify-between mb-2">;
                  <h5 className="font-semibold text-gray-900 dark:text-white">Starter</[^>]*>
                  <span className="text-2xl font-bold text-blue-600">;
                    ${pricing.pricingTiers.starter.price.toLocaleString()};
                    <span className="text-sm text-gray-500">/month</[^>]*>
                  </[^>]*>
                </[^>]*>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">;
                  Setup fee: ${pricing.pricingTiers.starter.setupFee.toLocaleString()};
                </[^>]*>
                <div className="space-y-2">;
                  {pricing.pricingTiers.starter.features.slice(0, 3).map((feature, index) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <[^>]*/>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                  {pricing.pricingTiers.starter.features.length > 3 && (;&& (; (
                    <button;
                      onClick={() => setExpandedService(expandedService === pricing.serviceId + '-starter' ? null : pricing.serviceId + '-starter')}
                      className="[^"]*"
                    >;
                      {expandedService === pricing.serviceId + '-starter' ? 'Show less' : `+${pricing.pricingTiers.starter.features.length - 3} more features`}
                    </[^>]*>
                  )};
                </[^>]*>

                <AnimatePresence>;
                  {expandedService === pricing.serviceId + '-starter' && (;&& (; (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }};
                      animate={{ opacity: 1, height: 'auto' }};
                      exit={{ opacity: 0, height: 0 }};
                      className="[^"]*"
                    >;
                      <div className="space-y-2">;
                        {pricing.pricingTiers.starter.features.slice(3).map((feature, index) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <[^>]*/>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>

              {/* Professional */};
              <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">;
                <div className="flex items-center justify-between mb-2">;
                  <div className="flex items-center space-x-2">;
                    <h5 className="font-semibold text-gray-900 dark:text-white">Professional</[^>]*>
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">Popular</[^>]*>
                  </[^>]*>
                  <span className="text-2xl font-bold text-blue-600">;
                    ${pricing.pricingTiers.professional.price.toLocaleString()};
                    <span className="text-sm text-gray-500">/month</[^>]*>
                  </[^>]*>
                </[^>]*>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">;
                  Setup fee: ${pricing.pricingTiers.professional.setupFee.toLocaleString()};
                </[^>]*>
                <div className="space-y-2">;
                  {pricing.pricingTiers.professional.features.slice(0, 3).map((feature, index) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <[^>]*/>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                  {pricing.pricingTiers.professional.features.length > 3 && (;&& (; (
                    <button;
                      onClick={() => setExpandedService(expandedService === pricing.serviceId + '-professional' ? null : pricing.serviceId + '-professional')}
                      className="[^"]*"
                    >;
                      {expandedService === pricing.serviceId + '-professional' ? 'Show less' : `+${pricing.pricingTiers.professional.features.length - 3} more features`}
                    </[^>]*>
                  )};
                </[^>]*>

                <AnimatePresence>;
                  {expandedService === pricing.serviceId + '-professional' && (;&& (; (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }};
                      animate={{ opacity: 1, height: 'auto' }};
                      exit={{ opacity: 0, height: 0 }};
                      className="[^"]*"
                    >;
                      <div className="space-y-2">;
                        {pricing.pricingTiers.professional.features.slice(3).map((feature, index) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <[^>]*/>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>

              {/* Enterprise */};
              <div className="border border-gray-200 dark:border-slate-600 rounded-lg p-4">;
                <div className="flex items-center justify-between mb-2">;
                  <h5 className="font-semibold text-gray-900 dark:text-white">Enterprise</[^>]*>
                  <span className="text-2xl font-bold text-blue-600">;
                    ${pricing.pricingTiers.enterprise.price.toLocaleString()};
                    <span className="text-sm text-gray-500">/month</[^>]*>
                  </[^>]*>
                </[^>]*>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">;
                  Setup fee: ${pricing.pricingTiers.enterprise.setupFee.toLocaleString()};
                </[^>]*>
                <div className="space-y-2">;
                  {pricing.pricingTiers.enterprise.features.slice(0, 3).map((feature, index) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <[^>]*/>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                  {pricing.pricingTiers.enterprise.features.length > 3 && (;&& (; (
                    <button;
                      onClick={() => setExpandedService(expandedService === pricing.serviceId + '-enterprise' ? null : pricing.serviceId + '-enterprise')}
                      className="[^"]*"
                    >;
                      {expandedService === pricing.serviceId + '-enterprise' ? 'Show less' : `+${pricing.pricingTiers.enterprise.features.length - 3} more features`}
                    </[^>]*>
                  )};
                </[^>]*>

                <AnimatePresence>;
                  {expandedService === pricing.serviceId + '-enterprise' && (;&& (; (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }};
                      animate={{ opacity: 1, height: 'auto' }};
                      exit={{ opacity: 0, height: 0 }};
                      className="[^"]*"
                    >;
                      <div className="space-y-2">;
                        {pricing.pricingTiers.enterprise.features.slice(3).map((feature, index) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <[^>]*/>
                            <span className="text-sm text-gray-600 dark: text-gray-300">{feature}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Market Comparison */};
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Market Position</[^>]*>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">;
              <div className="flex items-center justify-between mb-2">;
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getMarketPositionColor(pricing.marketComparison.marketPosition)}`}>;
                  {pricing.marketComparison.marketPosition.toUpperCase()};
                </[^>]*>
                <span className="text-sm text-gray-600 dark:text-gray-300">;
                  vs {pricing.marketComparison.competitors.join()};
                </[^>]*>
              </[^>]*>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">;
                <strong>Price Advantage:</strong> {pricing.marketComparison.priceAdvantage};
              </[^>]*>
              <p className="text-sm text-gray-600 dark:text-gray-300">;
                <strong>Value Proposition:</strong> {pricing.marketComparison.valueProposition};
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* ROI Analysis */};
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">ROI Analysis</[^>]*>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">;
                <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2">Payback Period</[^>]*>
                <p className="text-lg font-bold text-green-600">{pricing.roiAnalysis.paybackPeriod}</[^>]*>
              </[^>]*>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">;
                <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Annual ROI</[^>]*>
                <p className="text-lg font-bold text-blue-600">{pricing.roiAnalysis.annualROI}</[^>]*>
              </[^>]*>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">;
                <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">ROI Category</[^>]*>
                <p className="text-sm text-purple-600 dark:text-purple-300">;
                  {parseInt(pricing.roiAnalysis.annualROI) >= 500 ? 'Exceptional' :;
                   parseInt(pricing.roiAnalysis.annualROI) >= 300 ? 'Excellent' :;
                   parseInt(pricing.roiAnalysis.annualROI) >= 200 ? 'Good' : 'Standard'}
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Implementation Details */};
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Implementation</[^>]*>
            <div className="grid grid-cols-2 gap-4 text-sm">;
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Setup Time</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{pricing.implementation.setupTime}</[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Training Required</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{pricing.implementation.trainingRequired}</[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Complexity</[^>]*>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${;
                  pricing.implementation.integrationComplexity === 'low' ? 'bg-green-100 text-green-800' :;
                  pricing.implementation.integrationComplexity === 'medium' ? 'bg-yellow-100 text-yellow-800' :;
                  'bg-red-100 text-red-800'
                }`}>;
                  {pricing.implementation.integrationComplexity.toUpperCase()};
                </[^>]*>
              </[^>]*>
              <div>;
                <p className="text-gray-500 dark:text-gray-400">Support</[^>]*>
                <p className="font-semibold text-gray-900 dark:text-white">{pricing.implementation.supportIncluded}</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Contact and Actions */};
          <div className="border-t border-gray-200 dark:border-slate-700 pt-4">;
            <div className="flex items-center justify-between mb-3">;
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">;
                <[^>]*/>
                <span>{pricing.contactInfo.phone}</[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="flex space-x-2">;
              <a;
                href={`mailto:${pricing.contactInfo.email}`};
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Get Pricing</[^>]*>
              </[^>]*>
              <a;
                href={pricing.contactInfo.website};
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
        title="Expanded Services Pricing Guide 2027 - Zion Tech Group"
        description="Comprehensive pricing guide for our expanded innovative services. Compare pricing tiers, ROI analysis, and market positioning across all service categories."
        keywords="pricing guide, service pricing, ROI analysis, market comparison, cybersecurity pricing, data analytics pricing, cloud DevOps pricing"
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
              Expanded Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">;
                Pricing Guide 2027;
              </[^>]*>
            </[^>]*>
            <motion.p
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Comprehensive pricing information, ROI analysis, and market comparisons for all our expanded innovative services.;
              Find the perfect pricing tier for your business needs.;
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

      {/* Pricing Section */};
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
                  placeholder="Search pricing..."
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
                {categories.map((category) => (;
                  <option key={category} value={category}>;
                    {category};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Pricing Count */};
        <div className="mb-8">;
          <p className="text-gray-600 dark:text-gray-300">;
            Showing {filteredPricing.length} of {ALL_EXPANDED_SERVICES_PRICING.length} pricing plans;
          </[^>]*>
        </[^>]*>

        {/* Pricing Grid */};
        {filteredPricing.length > 0 ? (;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredPricing.map((pricing) => renderPricingCard(pricing))};
          </[^>]*>
        ) : (;
          <div className="text-center py-16">;
            <div className="text-gray-400 dark:text-gray-500 mb-4">;
              <[^>]*/>
            </[^>]*>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No pricing plans found</[^>]*>
            <p className="text-gray-600 dark:text-gray-300">;
              Try adjusting your search criteria or category filter;
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* CTA Section */};
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Get Started?;
          </[^>]*>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
            Our pricing is designed to provide maximum value at competitive rates.;
            Contact us today to discuss your specific needs and get a customized quote.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">;
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="[^"]*"
            >;
              <[^>]*/>
              <span>Get Custom Quote</[^>]*>
            </[^>]*>
            <a;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              <[^>]*/>
              <span>Call Sales Team</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ExpandedServicesPricingGuide2027;