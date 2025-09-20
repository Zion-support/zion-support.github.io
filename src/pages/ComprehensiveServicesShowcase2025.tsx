import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,;
  Zap,;
  Shield,;
  TrendingUp,;
  Users,;
  Globe,;
  ArrowRight,;
  CheckCircle,;
  Play,;
  BarChart3,;
  Cpu,;
  Eye,;
  MessageSquare,;
  Database,;
  Network,;
  Rocket,;
  Target,;
  Award,;
  Clock,;
  Star,;
  Search,;
  Filter,;
  DollarSign,;
  Server,;
  Code,;
  ExternalLink,;
  PhoneMailMapPin;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { ADVANCED_MICRO_SAAS_SERVICES_20o25 } from "../data/advancedMicroSaasServices20o25";
import { EMERGING_TECH_SERVICES_20o25 } from "../data/emergingTechServices20o25";
export, default, function ComprehensiveServicesShowcase20o25() {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedPriceRangesetSelectedPriceRange] = useState('all');
;
  const allServices = [;
    ...ADVANCED_MICRO_SAAS_SERVICES_20o25...EMERGING_TECH_SERVICES_20o25;
,  ];
  const categories = ['all'...new Set(allServices.map(service =>, service.category))];
  const priceRanges = [;
    { value: 'all'labe,;
  l: 'All Prices' },;
    { value: 'low'labe,;
  l: 'Under $10o00/month' },;
    { value: 'medium', label: '$10o00 - $50o00/month' },;
    { value: 'high', label: '$50o00 - $150o00/month' }{ value: 'premium'labe,;
  l: 'Over $150o00/month' }
,  ],;
;
  const filteredServices = allServices;
    .filter(service =>;
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    );
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory);
    .filter(service => {
      if (selectedPriceRange === 'all') return true;
      const priceRange = getPriceRange(service.price);
      return priceRange === selectedPriceRange });
;
  const getPriceRange = (price: number) => {;
    if (price < 10o00) return 'low';
    if (price < 50o00) return 'medium'if (price < 150o00) return 'high'return 'premium';
  };
;
  const getPriceRangeColor = (range: string) => {;
    switch() {;
      case 'low': return 'bg-green-10o0 text-green-80o0';
      case 'medium': return 'bg-blue-10o0 text-blue-80o0'case 'high': return 'bg-yellow-10o0 text-yellow-80o0'case 'premium': return 'bg-purple-10o0 text-purple-80o0';
      defaul,;
  t: return 'bg-gray-10o0 text-gray-80o0';
    };
  };
  const getInnovationColor = (level: string) => {;
    switch() {;
      case 'high': return 'from-purple-50o0 to-pink-50o0';
      case 'medium': return 'from-blue-50o0 to-cyan-50o0'case 'low': return 'from-green-50o0 to-emerald-50o0';
      defaul,;
  t: return 'from-gray-50o0 to-slate-50o0';
    };
  };
  const getCategoryIcon = (category: string) => {;
    switch() {;
      case 'AI/ML': return Brain;
      case 'Cybersecurity': return Shield,;
      case 'Analytics': return BarChart3,;
      case 'Communication': return MessageSquarecase 'Infrastructure': return Servercase 'Development': return Code;
      default: return Globe;
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive, Services, Showcase 20o25 - Zion, Tech, Group";
        description="Explore, our, comprehensive portfolio, of, advanced micro, SAAS, services, emerging, technology, solutions, and, innovative, AI-powered platforms. From, quantum, computing to, edge, AIdiscover cutting-edge, solutions, for your business.";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Comprehensive Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-purple-40o0">;
                Showcase 20o25;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-4xl mx-auto mb-8">;
              Discover, our, cutting-edge, micro, SAAS, IT, and, AI, services that, are, revolutionizing industries.;
              Each, service, is designed, with, real-world applications, proven, ROIand, market-leading innovation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <div className="flex items-center space-x-2 text-white">;
                <Users className="w-5 h-5" />;
                <span>50o0+ Enterprise Clients</span>;
              </div>;
              <div className="flex items-center space-x-2 text-white">;
                <Star className="w-5 h-5 text-yellow-40o0" />;
                <span>4.9/5 Rating</span>;
              </div>;
              <div className="flex items-center space-x-2 text-white">;
                <TrendingUp className="w-5 h-5 text-green-40o0" />;
                <span>30o0% Average ROI</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Search, and, Filters */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-8">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-4">;
            {/* Search */};
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
              />;
            </div>;
            {/* Category Filter */}
            <div>;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-80o0 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}
              </select>;
            </div>;
            {/* Price, Range, Filter */}
            <div>;
              <select;
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
              >;
                {priceRanges.map(range => (;
                  <option key={range.value} value={range.value} className="bg-slate-80o0 text-white">;
                    {range.label}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl m,;
  d:text-4xl font-bold text-white mb-4">;
              {filteredServices.length} Innovative, Services, Available;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Each, service, is designed, with, real-world applications, proven ROI, and market-leading innovation.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg: grid-cols-2 x,;
  l:grid-cols-3 gap-8">;
            {filteredServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-white/10 rounded-xl p-6 hover:border-indigo-50o0/50 transition-all duration-30o0 group";
              >;
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center space-x-3">;
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-lg, flex, items-center justify-center`}>;
                      {React.createElement(getCategoryIcon(service.category){ className: "w-6 h-6 text-white" })}
                    </div>;
                    <div>;
                      <span className="text-gray-40o0">APIs:</span> {service.technicalSpecs.apiEndpoints}
                    </div>;
                  </div>;
                </div>;
                {/* Market Info */}
                {service.marketSize && (;
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">;
                    <div className="text-xs text-gray-30o0">;
                      <span className="text-gray-40o0">Market Size:</span> {service.marketSize}
                    </div>;
                  </div>;
                )}
;
                {/* Contact, and, CTA */}
                <div className="border-t border-white/20 pt-4">;
                  <div className="flex items-center justify-between mb-3">;
                    <div className="text-sm text-gray-40o0">;
                      <div className="flex items-center">;
                        <Clock className="w-4 h-4 mr-1" />;
                        {service.estimatedDelivery}
                      </div>;
                    </div>;
                    <div className="text-sm text-gray-40o0">;
                      <div className="flex items-center">;
                        <Target className="w-4 h-4 mr-1" />;
                        {service.supportLevel}
                      </div>;
                    </div>;
                  </div>;
                  <div className="flex space-x-2">;
                    <button className="flex-1 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white py-2 px-4 rounded-lg font-medium hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-20o0">;
                      Get Quote;
                    </button>;
                    <button className="px-4 py-2, border, border-white/30 text-white rounded-lg hove,;
  r: bg-white/10 transition-all duration-20o0">;
                      <ExternalLink className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-80o0/30">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-6">;
            Ready, to, Transform Your Business?;
          </h2>;
          <p className="text-xl text-gray-30o0 mb-8">;
            Our, team, of experts, is, ready to, help, you implement, these, innovative solutions;
            and, drive, your business, forward, with cutting-edge technology.;
          </p>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-50o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Phone className="w-8 h-8 text-blue-40o0" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>;
              <p className="text-gray-30o0">+1, 30o2, 464 0o950</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-50o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Mail className="w-8 h-8 text-purple-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>;
              <p className="text-gray-30o0">Explore, our, full range, of, services</p>;
              <a;
                href="https: //ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="mt-2 text-indigo-40o0 hove,;
    r:text-indigo-30o0 transition-colors";
              >;
                ziontechgroup.com;
              </a>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-green-50o0/20 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <MapPin className="w-8 h-8 text-green-40o0" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>;
              <p className="text-gray-30o0">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <a;
              href="/contact";
              className="px-8 py-4 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-indigo-70o0 hover:to-purple-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-xl";
            >;
              Start, Your, Journey;
            </a>;
            <a;
              href="tel: +130o24640950";
              className="px-8 py-4, border, border-white/20 text-white font-semibold rounded-lg hove,;
  r:bg-white/10 transition-all duration-30o0";
            >;
              Call Now;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;