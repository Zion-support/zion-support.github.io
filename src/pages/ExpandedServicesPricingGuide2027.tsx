import React, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
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
  Smartphone, as, Mobile,;
  Server, as, Infrastructure,;
  Monitor, as, Analytics,;
  Zap, as, Lightning,;
  Users2,;
  Award, as, Trophy,;
  Clock, as, Time,;
  DollarSign, as, Money,;
  TrendingUp, as, Growth,;
  Eye, as, Vision,;
  Handshake, as, Partnership,;
  Building, as, Enterprise,;
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
  Smartphone, as, IoT,;
  Server, as, Edge,;
  Monitor, as, Healthcare,;
  Cpu, as, FinTech,;
  ChevronRight,;
  InfoAlertTriangleZap;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import {;
  ALL_EXPANDED_SERVICES_PRICINGtype ExpandedServicePricing;
} from "@/data/expandedServicesPricing20o27";
const ExpandedServicesPricingGuide20o27: React.FC = () => {;
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [searchQuerysetSearchQuery] = useState('');
  const [expandedServicesetExpandedService] = useState<string | null>(null);
  const [filteredPricingsetFilteredPricing] = useState<ExpandedServicePricing[]>(ALL_EXPANDED_SERVICES_PRICING);
;
  const categories = ['AllCybersecurity', 'Data AnalyticsCloud & DevOps''IoT & Edge, ComputingFinancial, Technology''Healthcare, Technology']useEffect(() => {;
    let pricing = ALL_EXPANDED_SERVICES_PRICING;
    if (selectedCategory !== 'All') {
      pricing = pricing.filter(p => p.category === selectedCategory);
    };
    if() {
      pricing = pricing.filter(p =>;
        p.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      ) };
    setFilteredPricing(pricing);
  }, [selectedCategorysearchQuery]),;
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'Cybersecurity':;
        return Shield;
      case 'Data Analytics': return BarChart3,;
      case 'Cloud & DevOps':;
        return Cloud,;
      case 'IoT & Edge Computing':;
        return IoTcase 'Financial Technology':;
        return FinTechcase 'Healthcare Technology':;
        return Healthcare;
      default: return Rocket;
    };
  };
  const getCategoryColor = (category: string) => {
    switch() {;
      case 'Cybersecurity':;
        return 'from-red-50o0 to-pink-60o0';
      case 'Data Analytics': return 'from-blue-50o0 to-cyan-60o0',;
      case 'Cloud & DevOps':;
        return 'from-indigo-50o0 to-purple-60o0',;
      case 'IoT & Edge Computing':;
        return 'from-green-50o0 to-emerald-60o0'case 'Financial Technology':;
        return 'from-yellow-50o0 to-orange-60o0'case 'Healthcare Technology':;
        return 'from-teal-50o0 to-blue-60o0';
      default: return 'from-gray-50o0 to-slate-60o0';
    };
  };
  const getMarketPositionColor = (position: string) => {
    switch() {;
      case 'leader':;
        return 'bg-green-10o0 text-green-80o0';
      case 'challenger': return 'bg-blue-10o0 text-blue-80o0'case 'niche':;
        return 'bg-purple-10o0 text-purple-80o0'case 'emerging':;
        return 'bg-yellow-10o0 text-yellow-80o0';
      defaul,;
  t: return 'bg-gray-10o0 text-gray-80o0';
    };
  };
  const renderPricingCard = (pricing: ExpandedServicePricing) => {;
    const CategoryIcon = getCategoryIcon(pricing.category);
    const categoryColor = getCategoryColor(pricing.category);
;
    return (;
      <motion.div;
        key={pricing.serviceId}
        initial={{ opacity: 0,;
  y: 20 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark: bg-slate-80o0 rounded-xl shadow-lg hove,;
    r:shadow-xl transition-all duration-30o0, border, border-gray-20o0 dar,;
  k:border-slate-70o0 overflow-hidden";
      >;
        {/* Header */}
        <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>;
          <div className="flex items-center justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <CategoryIcon className="w-8 h-8" />;
              <div>;
                <h3 className="text-xl font-bold">{pricing.serviceName}</h3>;
                <p className="text-sm opacity-90">{pricing.category}</p>;
              </div>;
            </div>;
            <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">;
              {pricing.subcategory}
            </span>;
          </div>;
        </div>;
        {/* Content */}
        <div className="p-6">;
          {/* Pricing Tiers */}
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-90o0 dark:text-white mb-4">Pricing Tiers</h4>;
            <div className="space-y-4">;
              {/* Starter */}
              <div className="border border-gray-20o0 dark: border-slate-60o0 rounded-lg p-4">;
                <div className="flex items-center justify-between mb-2">;
                  <h5 className="font-semibold text-gray-90o0 dar,;
  k:text-white">Starter</h5>;
                  <span className="text-2xl font-bold text-blue-60o0">;
                    ${pricing.pricingTiers.starter.price.toLocaleString()}
                    <span className="text-sm text-gray-50o0">/month</span>;
                  </span>;
                </div>;
                <p className="text-sm text-gray-60o0 dark: text-gray-30o0 mb-3">;
                  Setup fe,;
  e: ${pricing.pricingTiers.starter.setupFee.toLocaleString()}
                </p>;
                <div className="space-y-2">;
                  {pricing.pricingTiers.starter.features.slice(0o3).map((featureindex) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-green-50o0" />;
                      <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                  {pricing.pricingTiers.starter.features.length > 3 && (;
                    <button;
                      onClick={() => setExpandedService(expandedService === pricing.serviceId + '-starter' ? null : pricing.serviceId + '-starter')}
                      className="text-sm text-blue-60o0 dark: text-blue-40o0 hove,;
  r:underline";
                    >;
                      {expandedService === pricing.serviceId + '-starter' ? 'Show less' : `+${pricing.pricingTiers.starter.features.length - 3} more features`}
                    </button>;
                  )}
                </div>;
                <AnimatePresence>;
                  {expandedService === pricing.serviceId + '-starter' && (;
                    <motion.div;
                      initial={{ opacity: 0heigh,;
  t: 0 }}
                      animate={{ opacity: 1heigh,;
  t: 'auto' }}
                      exit={{ opacity: 0heigh,;
  t: 0 }}
                      className="mt-3 pt-3 border-t border-gray-20o0 dark: border-slate-60o0";
                    >;
                      <div className="space-y-2">;
                        {pricing.pricingTiers.starter.features.slice(3).map((featureindex) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <CheckCircle className="w-4 h-4 text-green-50o0" />;
                            <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                          </div>;
                        ))}
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
              {/* Professional */}
              <div className="border-2 border-blue-50o0 rounded-lg p-4 bg-blue-50 dark: bg-blue-90o0/20">;
                <div className="flex items-center justify-between mb-2">;
                  <div className="flex items-center space-x-2">;
                    <h5 className="font-semibold text-gray-90o0 dar,;
  k:text-white">Professional</h5>;
                    <span className="px-2 py-1 bg-blue-50o0 text-white text-xs rounded-full">Popular</span>;
                  </div>;
                  <span className="text-2xl font-bold text-blue-60o0">;
                    ${pricing.pricingTiers.professional.price.toLocaleString()}
                    <span className="text-sm text-gray-50o0">/month</span>;
                  </span>;
                </div>;
                <p className="text-sm text-gray-60o0 dark: text-gray-30o0 mb-3">;
                  Setup fe,;
  e: ${pricing.pricingTiers.professional.setupFee.toLocaleString()}
                </p>;
                <div className="space-y-2">;
                  {pricing.pricingTiers.professional.features.slice(0o3).map((featureindex) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-green-50o0" />;
                      <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                  {pricing.pricingTiers.professional.features.length > 3 && (;
                    <button;
                      onClick={() => setExpandedService(expandedService === pricing.serviceId + '-professional' ? null : pricing.serviceId + '-professional')}
                      className="text-sm text-blue-60o0 dark: text-blue-40o0 hove,;
  r:underline";
                    >;
                      {expandedService === pricing.serviceId + '-professional' ? 'Show less' : `+${pricing.pricingTiers.professional.features.length - 3} more features`}
                    </button>;
                  )}
                </div>;
                <AnimatePresence>;
                  {expandedService === pricing.serviceId + '-professional' && (;
                    <motion.div;
                      initial={{ opacity: 0heigh,;
  t: 0 }}
                      animate={{ opacity: 1heigh,;
  t: 'auto' }}
                      exit={{ opacity: 0heigh,;
  t: 0 }}
                      className="mt-3 pt-3 border-t border-blue-20o0 dark: border-blue-70o0";
                    >;
                      <div className="space-y-2">;
                        {pricing.pricingTiers.professional.features.slice(3).map((featureindex) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <CheckCircle className="w-4 h-4 text-green-50o0" />;
                            <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                          </div>;
                        ))}
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
              {/* Enterprise */}
              <div className="border border-gray-20o0 dark: border-slate-60o0 rounded-lg p-4">;
                <div className="flex items-center justify-between mb-2">;
                  <h5 className="font-semibold text-gray-90o0 dar,;
  k:text-white">Enterprise</h5>;
                  <span className="text-2xl font-bold text-blue-60o0">;
                    ${pricing.pricingTiers.enterprise.price.toLocaleString()}
                    <span className="text-sm text-gray-50o0">/month</span>;
                  </span>;
                </div>;
                <p className="text-sm text-gray-60o0 dark: text-gray-30o0 mb-3">;
                  Setup fe,;
  e: ${pricing.pricingTiers.enterprise.setupFee.toLocaleString()}
                </p>;
                <div className="space-y-2">;
                  {pricing.pricingTiers.enterprise.features.slice(0o3).map((featureindex) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-green-50o0" />;
                      <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                  {pricing.pricingTiers.enterprise.features.length > 3 && (;
                    <button;
                      onClick={() => setExpandedService(expandedService === pricing.serviceId + '-enterprise' ? null : pricing.serviceId + '-enterprise')}
                      className="text-sm text-blue-60o0 dark: text-blue-40o0 hove,;
  r:underline";
                    >;
                      {expandedService === pricing.serviceId + '-enterprise' ? 'Show less' : `+${pricing.pricingTiers.enterprise.features.length - 3} more features`}
                    </button>;
                  )}
                </div>;
                <AnimatePresence>;
                  {expandedService === pricing.serviceId + '-enterprise' && (;
                    <motion.div;
                      initial={{ opacity: 0heigh,;
  t: 0 }}
                      animate={{ opacity: 1heigh,;
  t: 'auto' }}
                      exit={{ opacity: 0heigh,;
  t: 0 }}
                      className="mt-3 pt-3 border-t border-gray-20o0 dark: border-slate-60o0";
                    >;
                      <div className="space-y-2">;
                        {pricing.pricingTiers.enterprise.features.slice(3).map((featureindex) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <CheckCircle className="w-4 h-4 text-green-50o0" />;
                            <span className="text-sm text-gray-60o0 dark: text-gray-30o0">{feature}</span>;
                          </div>;
                        ))}
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            </div>;
          </div>;
          {/* Market Comparison */}
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-90o0 dark: text-white mb-3">Market Position</h4>;
            <div className="bg-gray-50 dar,;
  k:bg-slate-70o0 rounded-lg p-4">;
              <div className="flex items-center justify-between mb-2">;
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getMarketPositionColor(pricing.marketComparison.marketPosition)}`}>;
                  {pricing.marketComparison.marketPosition.toUpperCase()}
                </span>;
                <span className="text-sm text-gray-60o0 dark:text-gray-30o0">;
                  vs {pricing.marketComparison.competitors.join()}
                </span>;
              </div>;
              <p className="text-sm text-gray-60o0 dark: text-gray-30o0 mb-2">;
                <strong>Price Advantag,;
  e:</strong> {pricing.marketComparison.priceAdvantage}
              </p>;
              <p className="text-sm text-gray-60o0 dark: text-gray-30o0">;
                <strong>Value Propositio,;
  n:</strong> {pricing.marketComparison.valueProposition}
              </p>;
            </div>;
          </div>;
          {/* ROI Analysis */}
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-90o0 dark: text-white mb-3">ROI Analysis</h4>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="bg-green-50 dar,;
    k:bg-green-90o0/20 rounded-lg p-3">;
                <h6 className="font-semibold text-green-80o0 dar,;
  k:text-green-20o0 mb-2">Payback Period</h6>;
                <p className="text-lg font-bold text-green-60o0">{pricing.roiAnalysis.paybackPeriod}</p>;
              </div>;
              <div className="bg-blue-50 dark: bg-blue-90o0/20 rounded-lg p-3">;
                <h6 className="font-semibold text-blue-80o0 dar,;
  k:text-blue-20o0 mb-2">Annual ROI</h6>;
                <p className="text-lg font-bold text-blue-60o0">{pricing.roiAnalysis.annualROI}</p>;
              </div>;
              <div className="bg-purple-50 dark: bg-purple-90o0/20 rounded-lg p-3">;
                <h6 className="font-semibold text-purple-80o0 dar,;
    k:text-purple-20o0 mb-2">ROI Category</h6>;
                <p className="text-sm text-purple-60o0 dar,;
  k:text-purple-30o0">;
                  {parseInt(pricing.roiAnalysis.annualROI) >= 50o0 ? 'Exceptional' :;
                   parseInt(pricing.roiAnalysis.annualROI) >= 30o0 ? 'Excellent' :;
                   parseInt(pricing.roiAnalysis.annualROI) >= 20o0 ? 'Good' : 'Standard'}
                </p>;
              </div>;
            </div>;
          </div>;
          {/* Implementation Details */}
          <div className="mb-6">;
            <h4 className="font-semibold text-gray-90o0 dark: text-white mb-3">Implementation</h4>;
            <div className="grid grid-cols-2 gap-4 text-sm">;
              <div>;
                <p className="text-gray-50o0 dar,;
    k:text-gray-40o0">Setup Time</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{pricing.implementation.setupTime}</p>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark: text-gray-40o0">Training Required</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{pricing.implementation.trainingRequired}</p>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark:text-gray-40o0">Complexity</p>;
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  pricing.implementation.integrationComplexity === 'low' ? 'bg-green-10o0 text-green-80o0' :;
                  pricing.implementation.integrationComplexity === 'medium' ? 'bg-yellow-10o0 text-yellow-80o0' :;
                  'bg-red-10o0 text-red-80o0';
                }`}>;
                  {pricing.implementation.integrationComplexity.toUpperCase()}
                </span>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark: text-gray-40o0">Support</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{pricing.implementation.supportIncluded}</p>;
              </div>;
            </div>;
          </div>;
          {/* Contact, and, Actions */}
          <div className="border-t border-gray-20o0 dark: border-slate-70o0 pt-4">;
            <div className="flex items-center justify-between mb-3">;
              <div className="flex items-center space-x-2 text-sm text-gray-50o0 dar,;
  k:text-gray-40o0">;
                <Phone className="w-4 h-4" />;
                <span>{pricing.contactInfo.phone}</span>;
              </div>;
            </div>;
            <div className="flex space-x-2">;
              <a;
                href={`mailto: ${pricing.contactInfo.email}`}
                className="flex-1 bg-blue-60o0 hover:bg-blue-70o0 text-white text-center py-2 px-4 rounded-lg transition-colors duration-20o0, flex, items-center justify-center space-x-2";
              >;
                <Mail className="w-4 h-4" />;
                <span>Get Pricing</span>;
              </a>;
              <a;
                href={pricing.contactInfo.website}
                target="_blank";
                rel="noopener noreferrer";
                className="flex-1 bg-gray-10o0 hover: bg-gray-20o0 dark:bg-slate-70o0 dark:hove,;
    r:bg-slate-60o0 text-gray-70o0 dar,;
  k:text-gray-30o0 text-center py-2 px-4 rounded-lg transition-colors duration-20o0, flex, items-center justify-center space-x-2";
              >;
                <ExternalLink className="w-4 h-4" />;
                <span>Learn More</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
    );
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-10o0 dark: from-slate-90o0 dar,;
    k:via-slate-80o0 dar,;
  k:to-slate-90o0">;
      <SEO;
        title="Expanded, Services, Pricing Guide 20o27 - Zion, Tech, Group";
        description="Comprehensive, pricing, guide for, our, expanded innovative services. Compare, pricing, tiers, ROI analysis, and, market, positioning across, all, service categories.";
        keywords="pricing guide, service pricing, ROI analysis, market comparison, cybersecurity pricing, data, analytics, pricingcloud DevOps pricing";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md: text-6xl font-bold text-gray-90o0 dar,;
    k:text-white mb-6";
            >;
              Expanded Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-60o0 to-purple-60o0">;
                Pricing, Guide, 20o27;
              </span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-xl text-gray-60o0 dark: text-gray-30o0 mb-8 max-w-3xl mx-auto";
            >;
              Comprehensive, pricing, information, ROI, analysisand, market comparisons, for, all our, expanded, innovative services.;
              Find, the, perfect pricing, tier, for your, business, needs.;
            </motion.p>;
            {/* Contact Info */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.4 }}
              className="bg-white dark: bg-slate-80o0 rounded-2xl shadow-xl p-6 inline-block";
            >;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                <div className="flex items-center space-x-3">;
                  <Phone className="w-5 h-5 text-blue-60o0" />;
                  <div>;
                    <p className="text-sm text-gray-50o0 dark:text-gray-40o0">Phone</p>;
                    <p className="font-semibold text-gray-90o0 dar,;
    k:text-white">+1, 30o2, 464 0o950</p>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Mail className="w-5 h-5 text-blue-60o0" />;
                  <div>;
                    <p className="text-sm text-gray-50o0 dark: text-gray-40o0">Email</p>;
                    <p className="font-semibold text-gray-90o0 dark:text-white">kleber@ziontechgroup.com</p>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <MapPin className="w-5 h-5 text-blue-60o0" />;
                  <div>;
                    <p className="text-sm text-gray-50o0 dark:text-gray-40o0">Address</p>;
                    <p className="font-semibold text-gray-90o0 dar,;
    k:text-white">364, E, Main St, STE, 10o08</p>;
                    <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">Middletown, DE, 1970o9</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8 py-16">;
        {/* Filters, and, Search */}
        <div className="bg-white dark: bg-slate-80o0 rounded-2xl shadow-lg p-6 mb-8">;
          <div className="flex flex-col lg:flex-row lg:items-center l,;
    g:justify-between space-y-4 l,;
  g:space-y-0">;
            {/* Search */}
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search pricing...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2, border, border-gray-30o0 dark: border-slate-60o0 rounded-lg focus:ring-2 focus:ring-blue-50o0 focus:border-transparent dar,;
    k:bg-slate-70o0 dar,;
  k:text-white";
                />;
              </div>;
            </div>;
            {/* Category Filter */}
            <div className="flex items-center space-x-4">;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2, border, border-gray-30o0 dark: border-slate-60o0 rounded-lg focus:ring-2 focus:ring-blue-50o0 focus:border-transparent dar,;
    k:bg-slate-70o0 dar,;
  k:text-white";
              >;
                {categories.map((category) => (;
                  <option key={category} value={category}>;
                    {category}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;
        {/* Pricing Count */}
        <div className="mb-8">;
          <p className="text-gray-60o0 dark:text-gray-30o0">;
            Showing {filteredPricing.length} of {ALL_EXPANDED_SERVICES_PRICING.length} pricing plans;
          </p>;
        </div>;
        {/* Pricing Grid */}
        {filteredPricing.length > 0 ? (;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">;
            {filteredPricing.map((pricing) => renderPricingCard(pricing))}
          </div>;
        ) : (;
          <div className="text-center py-16">;
            <div className="text-gray-40o0 dark: text-gray-50o0 mb-4">;
              <Search className="w-16 h-16 mx-auto" />;
            </div>;
            <h3 className="text-lg font-semibold text-gray-90o0 dar,;
    k:text-white mb-2">No, pricing, plans found</h3>;
            <p className="text-gray-60o0 dar,;
  k:text-gray-30o0">;
              Try, adjusting, your search, criteria, or category filter;
            </p>;
          </div>;
        )}
      </div>;
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-6">;
            Ready, to, Get Started?;
          </h2>;
          <p className="text-xl text-blue-10o0 mb-8 max-w-2xl mx-auto">;
            Our, pricing, is designed, to, provide maximum, value, at competitive rates.;
            Contact, us, today to, discuss, your specific, needs, and get, a, customized quote.;
          </p>;
          <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">;
            <a;
              href="mailto: kleber@ziontechgroup.com";
              className="bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hove,;
    r:bg-gray-10o0 transition-colors duration-20o0, flex, items-center space-x-2";
            >;
              <Mail className="w-5 h-5" />;
              <span>Get, Custom, Quote</span>;
            </a>;
            <a;
              href="tel: +130o24640950";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,;
    r:bg-white hove,;
  r:text-blue-60o0 transition-colors duration-20o0, flex, items-center space-x-2";
            >;
              <Phone className="w-5 h-5" />;
              <span>Call, Sales, Team</span>;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
export, default, ExpandedServicesPricingGuide20o27;
;