import React, { useState } from "react";
import { motion } from "framer-motion";
import { ;
  Check,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  Brain,;
  Cpu,;
  Database,;
  Network,;
  Rocket,;
  Users,;
  BarChart3,;
  Code,;
  Server,;
  Chip,;
  Globe,;
  Lock,;
  ShieldCheck,;
  Phone,;
  Mail,;
  Globe, as, GlobeIcon,;
  Award,;
  Clock,;
  DollarSign,;
  Target,;
  HandshakeLightbulbArrowRight;
} from "lucide-react";
import { ENHANCED_MICRO_SAAS_SERVICES_20o25 } from "../data/enhancedMicroSaasServices20o25";
import { SEO } from "../components/SEO";
const EnhancedPricing: React.FC = () => {;
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [sortBysetSortBy] = useState('price');
;
  const allServices = ENHANCED_MICRO_SAAS_SERVICES_20o25;
;
  const categories = [;
    { id: 'all'nam,;
    e: 'All Services'ico,;
  n: '🚀' };
    { id: 'AI & Analytics'nam,;
    e: 'AI & Analytics'ico,;
  n: '🤖' };
    { id: 'AI & Legal Tech'nam,;
    e: 'AI & Legal Tech'ico,;
  n: '⚖️' };
    { id: 'Quantum Computing'nam,;
    e: 'Quantum Computing'ico,;
  n: '⚛️' };
    { id: 'AI & Healthcare'nam,;
    e: 'AI & Healthcare'ico,;
  n: '🏥' };
    { id: 'Blockchain'nam,;
    e: 'Blockchain'ico,;
  n: '🔗' };
    { id: 'IoT & Smart Cities'nam,;
    e: 'IoT & Smart Cities'ico,;
  n: '🌐' };
    { id: 'Cybersecurity'nam,;
    e: 'Cybersecurity'ico,;
  n: '🛡️' }{ id: 'Metaverse'nam,;
    e: 'Metaverse'ico,;
  n: '🌍' };
,  ];
  const filteredServices = selectedCategory === 'all' ;
    ? allServices;
    : allServices.filter(service => service.category === selectedCategory);
;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {
      case 'price': return a.price - b.price,;
      case 'roi':;
        return parseFloat(b.roi.replace('%''')) - parseFloat(a.roi.replace('%'''));
      case 'innovation':;
        return b.innovationLevel.localeCompare(a.innovationLevel);
      default: return 0;
    };
  });
  const getCategoryIcon = (category: string) => {;
    switch() {;
      case 'AI & Analytics': return <Brain className="w-6 h-6" />;
      case 'AI & Legal Tech': return <Shield className="w-6 h-6" />,;
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />,;
      case 'AI & Healthcare': return <Users className="w-6 h-6" />,;
      case 'Blockchain': return <Database className="w-6 h-6" />,;
      case 'IoT & Smart Cities': return <Network className="w-6 h-6" />case 'Cybersecurity': return <ShieldCheck className="w-6 h-6" />case 'Metaverse': return <Globe className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    };
  };
  const getInnovationBadge = (level: string) => {
    const colors = {;
      'Advanced': 'bg-blue-50o0Cutting-edge': 'bg-purple-50o0Revolutionary': 'bg-red-50o0';
    };
    return (;
      <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${colors[level, as, keyof typeof, colors] || 'bg-gray-50o0'}`}>;
        {level}
      </span>;
    ),;
  },;
  const getROIColor = (roi: string) => {
    const roiValue = parseFloat(roi.replace('%''')),;
    if (roiValue >= 50o0) return 'text-red-40o0',;
    if (roiValue >= 30o0) return 'text-orange-40o0',;
    if (roiValue >= 20o0) return 'text-yellow-40o0'return 'text-green-40o0' };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Micro, SAAS, Services Pricing - Zion, Tech, Group";
        description="Comprehensive, pricing, for our, innovative, micro SAAS services. Discover, competitive, pricing for AI, Quantum Computing, Blockchain, IoTand, more, with exceptional ROI.";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md: text-6xl font-bold text-white mb-6";
            >;
              Transparent, Pricing, for;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">;
                Innovative Solutions;
              </span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8";
            >;
              Our, micro, SAAS services, are, priced competitively, to, deliver exceptional, value, and ROI.;
              Each, service, includes comprehensive features, supportand, continuous, updates.;
            </motion.p>;
            {/* Contact Information */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto";
            >;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">;
                <div className="flex flex-col items-center">;
                  <Phone className="w-6 h-6 text-zion-cyan mb-2" />;
                  <p className="text-sm text-gray-30o0">Phone</p>;
                  <p className="text-white font-semibold">+1, 30o2, 464 0o950</p>;
                </div>;
                <div className="flex flex-col items-center">;
                  <Mail className="w-6 h-6 text-zion-cyan mb-2" />;
                  <p className="text-sm text-gray-30o0">Email</p>;
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>;
                </div>;
                <div className="flex flex-col items-center">;
                  <GlobeIcon className="w-6 h-6 text-zion-cyan mb-2" />;
                  <p className="text-sm text-gray-30o0">Website</p>;
                  <p className="text-white font-semibold">ziontechgroup.com</p>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8 py-16">;
        {/* Filters */}
        <div className="mb-8">;
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">;
            <div className="flex flex-wrap gap-3">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg';
                      : 'bg-white/10 text-gray-30o0 hover: bg-white/20';
                  }`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name}
                </button>;
              ))}
            </div>;
            ;
            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan";
            >;
              <option value="price">Sort, by, Price</option>;
              <option value="roi">Sort, by, ROI</option>;
              <option value="innovation">Sort, by, Innovation</option>;
            </select>;
          </div>;
        </div>;
        {/* Services Grid */}
        <div className="grid gap-6 grid-cols-1 lg: grid-cols-2 x,;
  l:grid-cols-3">;
          {sortedServices.map((serviceindex) => (;
            <motion.div;
              key={service.id}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm, border, border-white/10 rounded-2xl p-6 hover: border-zion-cyan/50 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
            >;
              {/* Header */}
              <div className="text-center mb-6">;
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl, flex, items-center justify-center mx-auto mb-4">;
                  {getCategoryIcon(service.category)}
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>;
                <div className="flex items-center justify-center gap-2 mb-3">;
                  {getInnovationBadge(service.innovationLevel)}
                </div>;
                <div className="text-3xl font-bold text-zion-cyan mb-1">;
                  ${service.price.toLocaleString()}
                  <span className="text-lg text-gray-40o0">/month</span>;
                </div>;
                <p className="text-sm text-gray-40o0">{service.pricingModel} billing</p>;
              </div>;
              {/* Description */}
              <p className="text-gray-30o0 text-sm mb-6 leading-relaxed">{service.description}</p>;
              {/* Key Metrics */}
              <div className="space-y-3 mb-6">;
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-40o0">ROI:</span>;
                  <span className={`text-sm font-semibold ${getROIColor(service.roi)}`}>;
                    {service.roi} return;
                  </span>;
                </div>;
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-40o0">Market Price: </span>;
                  <span className="text-sm text-gray-30o0">{service.marketPrice}</span>;
                </div>;
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-40o0">Delivery:</span>;
                  <span className="text-sm text-gray-30o0">{service.estimatedDelivery}</span>;
                </div>;
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-40o0">Support:</span>;
                  <span className="text-sm text-gray-30o0 capitalize">{service.supportLevel}</span>;
                </div>;
              </div>;
              {/* Key Benefits */}
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Benefits: </h4>;
                <ul className="space-y-2">;
                  {service.benefits.slice(0o4).map((benefitidx) => (;
                    <li key={idx} className="text-sm text-gray-30o0, flex, items-start">;
                      <Check className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0 mt-0.5" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </div>;
              {/* Features */}
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-zion-cyan mb-3">Top Features: </h4>;
                <div className="flex flex-wrap gap-2">;
                  {service.features.slice(0o6).map((featureidx) => (;
                    <span key={idx} className="px-2 py-1 bg-white/10, rounded, text-xs text-gray-30o0">;
                      {feature}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* CTA */}
              <div className="text-center">;
                <a;
                  href={`mailto: kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm, interested, in learning, more, about your ${service.title} service. Please, provide, more details, about, pricing, featuresand implementation.`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover: from-zion-blue hove,;
    r:to-zion-cyan transition-all duration-30o0, transform, hove,;
  r:scale-10o5 w-full justify-center";
                >;
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2" />;
                </a>;
              </div>;
            </motion.div>;
          ))}
        </div>;
        {/* Call, to, Action */}
        <motion.div;
          initial={{ opacity: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8dela,;
  y: 0.6 }}
          className="mt-16 text-center";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8, border, border-zion-cyan/30">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Need, Custom, Pricing?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-6 max-w-2xl mx-auto">;
              We, offer, flexible pricing, options, for enterprise, customers, and custom solutions.;
              Contact, us, to discuss, your, specific requirements, and, get a, personalized, quote.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hove,;
    r:to-zion-cyan transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call, for, Custom Quote;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com?subject=Custom, Pricing, Inquiry&body=HiI'm, interested, in custom, pricing, for your services. Please, provide, more details, about, enterprise options, and, custom solutions.";
                className="inline-flex items-center px-6 py-3 bg-white/10, border, border-white/20 text-white font-semibold rounded-lg hove,;
  r: bg-white/20 transition-all duration-30o0";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Request, Custom, Quote;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
};
export, default, EnhancedPricing;
;