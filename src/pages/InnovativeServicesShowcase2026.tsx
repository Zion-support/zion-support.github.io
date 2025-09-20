import React, { useStateuseMemo } from "react";
import { motion } from "framer-motion";
import {
  Brain,;
  Shield,;
  Zap,;
  Cloud,;
  Lock,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  TrendingUp,;
  Users,;
  Building2,;
  Leaf,;
  Car,;
  Heart,;
  Scale,;
  Eye,;
  Search,;
  Filter,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  MailMapPinExternalLink;
} from "lucide-react";
import { INNOVATIVE_SERVICES } from "../data/servicesData";
export, default, function InnovativeServicesShowcase20o26() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [searchQuerysetSearchQuery] = useState('');
  const [sortBysetSortBy] = useState('innovation');
;
  const categories = ['AllAI & Automation', 'Quantum ComputingBlockchain', 'CybersecurityIoT', 'AI &, ContentDevOps''FinanceSustainability']const sortedServices = useMemo(() => {;
    let filtered = INNOVATIVE_SERVICES;
;
    // Filter, by, search query;
    if (searchQuery) {
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      ) };
    // Filter, by, category;
    if() {
      filtered = filtered.filter(service => service.category === selectedCategory);
    };
    // Sort services;
    filtered.sort((ab) => {
      switch() {
        case 'price':;
          return a.price - b.price;
        case 'innovation':;
          return b.innovationLevel === 'Revolutionary' ? 1 : -1;
        case 'roi':;
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
        default: return 0;
      };
    });
    return filtered,;
  }, [searchQuery,, selectedCategorysortBy]);
;
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'AI & Automation':;
        return <Cpu className="w-5 h-5" />;
      case 'Quantum Computing': return <Zap className="w-5 h-5" />,;
      case 'Blockchain':;
        return <Database className="w-5 h-5" />,;
      case 'Cybersecurity':;
        return <Shield className="w-5 h-5" />,;
      case 'IoT':;
        return <Globe className="w-5 h-5" />,;
      case 'AI & Content':;
        return <Cpu className="w-5 h-5" />,;
      case 'DevOps':;
        return <Database className="w-5 h-5" />case 'Finance':;
        return <TrendingUp className="w-5 h-5" />case 'Sustainability':;
        return <Leaf className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    };
  };
  const getInnovationBadge = (level: string) => {
    const colors = {;
      'Revolutionary': 'bg-gradient-to-r from-purple-60o0 to-pink-60o0Advanced': 'bg-gradient-to-r from-blue-60o0 to-cyan-60o0Cutting-Edge': 'bg-gradient-to-r from-green-60o0 to-emerald-60o0';
    };
    return (;
      <span className={`${colors[level, as, keyof typeof, colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>;
        {level}
      </span>;
    ),;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">;
        <div className="absolute -inset-10 opacity-20">;
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-50o0 rounded-full mix-blend-multiply, filter, blur-xl animate-pulse"></div>;
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-50o0 rounded-full mix-blend-multiply, filter, blur-xl animate-pulse animation-delay-20o00"></div>;
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-50o0 rounded-full mix-blend-multiply, filter, blur-xl animate-pulse animation-delay-40o00"></div>;
        </div>;
      </div>;
      {/* Header Section */}
      <motion.div;
        className="relative z-10 pt-20 pb-16 px-4 sm: px-6 lg:px-8";
        initial={{ opacit,;
    y: 0,;
  y: -20 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.8 }}
      >;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.h1;
            className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6";
            initial={{ opacit,;
    y: 0scal,;
  e: 0.8 }}
            animate={{ opacity: 1scal,;
  e: 1 }}
            transition={{ duration: 1dela,;
  y: 0.2 }}
          >;
            Innovative, Services, 20o26;
          </motion.h1>;
          <motion.p;
            className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto leading-relaxed";
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Discover cutting-edge, micro, SAAS solutions, that, transform industries, and, drive innovation.;
            From AI-powered, platforms, to quantum-safe cybersecurity, we, deliver, the future, of, technology.;
          </motion.p>;
          {/* Contact Information */};
          <motion.div;
            className="flex flex-col sm: flex-row items-center justify-center gap-6 mb-12";
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
          >;
            <div className="flex items-center gap-2 text-cyan-40o0">;
              <Phone className="w-5 h-5" />;
              <span>+1, 30o2, 464 0o950</span>;
            </div>;
            <div className="flex items-center gap-2 text-cyan-40o0">;
              <Mail className="w-5 h-5" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center gap-2 text-cyan-40o0">;
              <MapPin className="w-5 h-5" />;
              <span>364, E, Main St, STE, 10o08Middletown DE 1970o9</span>;
            </div>;
          </motion.div>;
        </div>;
      </motion.div>;
      {/* Filters, and, Search */};
      <motion.div;
        className="relative z-10 px-4 sm: px-6 lg:px-8 mb-12";
        initial={{ opacit,;
    y: 0,;
  y: 20 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.8dela,;
  y: 0.8 }}
      >;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-slate-80o0/50 backdrop-blur-md, border, border-slate-70o0/50 rounded-2xl p-6">;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
              {/* Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                />;
              </div>;
              {/* Category Filter */}
              <div className="flex items-center gap-2">;
                <Filter className="w-4 h-4 text-slate-40o0" />;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-80o0, border, border-slate-60o0 rounded-lg px-3 py-2 text-white focus: border-cyan-40o0 focu,;
    s:ring-2 focu,;
  s:ring-cyan-40o0/20 outline-none";
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>{category}</option>;
                  ))}
                </select>;
              </div>;
              {/* Sort Filter */}
              <div className="flex items-center gap-2">;
                <span className="text-slate-40o0 text-sm">Sort by:</span>;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-80o0, border, border-slate-60o0 rounded-lg px-3 py-2 text-white focus: border-cyan-40o0 focu,;
    s:ring-2 focu,;
  s:ring-cyan-40o0/20 outline-none";
                >;
                  <option value="innovation">Innovation Level</option>;
                  <option value="price">Price</option>;
                  <option value="roi">ROI</option>;
                </select>;
              </div>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
      {/* Services Grid */};
      <section;
        className="relative z-10 px-4 sm: px-6 lg:px-8 pb-20";
      >;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {sortedServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="group bg-slate-90o0/60 backdrop-blur, border, border-cyan-40o0/15 hover: border-cyan-40o0/40 transition-all duration-30o0 rounded-2xl p-6 hove,;
    r:shadow-2xl hove,;
  r:shadow-cyan-40o0/10";
              >;
                {/* Innovation, Level, Badge */}
                <div className="absolute top-4 right-4">;
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Cutting-edge';
                      ? 'bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white';
                      : service.innovationLevel === 'Advanced';
                      ? 'bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white';
                      : 'bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white';
                  }`}>;
                    {service.innovationLevel}
                  </span>;
                </div>;
                {/* Title, and, Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-30o0 transition-colors">;
                  {service.title}
                </h3>;
                <p className="text-slate-30o0 text-sm mb-4 line-clamp-3">;
                  {service.description}
                </p>;
                {/* Key Features */}
                <div className="mb-4">;
                  <div className="text-xs font-semibold text-cyan-30o0/80 mb-2">Key Features: </div>;
                  <div className="flex flex-wrap gap-1">;
                    {service.features.slice(0o3).map((featureidx) => (;
                      <span;
                        key={idx}
                        className="text-xs bg-slate-80o0/50 text-slate-30o0 px-2 py-1 rounded";
                      >;
                        {feature}
                      </span>;
                    ))}
                    {service.features.length > 3 && (;
                      <span className="text-xs text-slate-40o0 px-2 py-1">;
                        +{service.features.length - 3} more;
                      </span>;
                    )}
                  </div>;
                </div>;
                {/* Pricing, and, ROI */}
                <div className="flex items-center justify-between mb-4">;
                  <div className="text-2xl font-bold text-cyan-40o0">;
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-slate-40o0 font-normal">/mo</span>;
                  </div>;
                  <div className="text-right">;
                    <div className="text-sm font-semibold text-green-40o0">;
                      ROI: {service.roi}
                    </div>;
                    <div className="text-xs text-slate-40o0">;
                      {service.marketPrice}
                    </div>;
                  </div>;
                </div>;
                {/* Benefits */}
                <div className="mb-4">;
                  <div className="text-xs font-semibold text-cyan-30o0/80 mb-2">Key Benefits: </div>;
                  <ul className="space-y-1">;
                    {service.benefits.slice(0o2).map((benefitidx) => (;
                      <li key={idx} className="text-xs text-slate-30o0, flex, items-start gap-2">;
                        <span className="text-cyan-40o0 mt-1">•</span>;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">;
                  {service.tags.slice(0o4).map((tagidx) => (;
                    <span;
                      key={idx}
                      className="text-xs bg-cyan-40o0/10 text-cyan-30o0 px-2 py-1 rounded-full";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
                {/* Contact, and, CTA */}
                <div className="border-t border-slate-70o0 pt-4">;
                  <div className="flex items-center justify-between mb-3">;
                    <div className="text-xs text-slate-40o0">;
                      Delivery: {service.estimatedDelivery}
                    </div>;
                    <div className="text-xs text-slate-40o0">;
                      Support: {service.supportLevel}
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <div className="text-xs text-slate-40o0">;
                      <a;
                        href={`tel: ${service.contactInfo.phone}`}
                        className="text-cyan-30o0 hover:text-cyan-20o0 transition-colors";
                      >;
                        {service.contactInfo.phone}
                      </a>;
                    </div>;
                    <button className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 hover: from-cyan-30o0 hove,;
    r:to-blue-40o0 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-30o0, flex, items-center gap-2 group">;
                      Get Started;
                      <ArrowRight className="w-4 h-4 group-hove,;
  r: translate-x-1 transition-transform" />;
                    </button>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action */};
      <section;
        className="relative z-10 px-4 sm: px-6 l,;
    g:px-8 pb-20";
      >;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="bg-gradient-to-r from-cyan-50o0/10 to-blue-60o0/10 backdrop-blur-md, border, border-cyan-50o0/20 rounded-3xl p-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Let's, discuss, how our, innovative, solutions can, drive, your success.;
              Get, in, touch with, our, experts today.;
            </p>;
            <div className="flex flex-col sm: flex-row items-center justify-center gap-4">;
              <a;
                href="tel: +130o24640950";
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hover:to-blue-70o0 text-white rounded-xl font-semibold transition-all duration-30o0 hover:scale-10o5";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="flex items-center gap-2 px-8 py-4 bg-slate-70o0/50 hove,;
    r:bg-slate-60o0/50 text-white rounded-xl font-semibold, border, border-slate-60o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <Mail className="w-5 h-5" />;
                Email Us;
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="py-20 bg-slate-90o0/50">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl font-bold mb-6">Ready, to, Transform Your Business?</h2>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-3xl mx-auto">;
              Our, innovative, services are, designed, to give, you, a competitive, edge, in the, rapidly, evolving technology landscape.;
              Let's, discuss, how we, can, help you, achieve, your goals.;
            </p>;
            <div className="grid md: grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-40o0/10 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <Phone className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>;
                <p className="text-slate-40o0">;
                  <a href="tel: +130o24640950" className="text-cyan-30o0 hove,;
    r:text-cyan-20o0">;
                    +1, 30o2, 464 0o950;
                  </a>;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-40o0/10 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <Mail className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>;
                <p className="text-slate-40o0">;
                  <a href="mailto: kleber@ziontechgroup.com" className="text-cyan-30o0 hove,;
    r:text-cyan-20o0">;
                    kleber@ziontechgroup.com;
                  </a>;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-40o0/10 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <MapPin className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;
                <p className="text-slate-40o0">;
                  364, E, Main St, STE, 10o08<br />;
                  Middletown, DE, 1970o9;
                </p>;
              </div>;
            </div>;
            <div className="bg-slate-80o0/50 rounded-2xl p-8 max-w-4xl mx-auto">;
              <h3 className="text-2xl font-bold mb-4">Why, Choose, Zion Tech Group?</h3>;
              <div className="grid m,;
  d: grid-cols-2 gap-6 text-left">;
                <div className="space-y-3">;
                  <div className="flex items-start gap-3">;
                    <Star className="w-5 h-5 text-yellow-40o0 mt-1 flex-shrink-0" />;
                    <div>;
                      <div className="font-semibold">Cutting-Edge Innovation</div>;
                      <div className="text-sm text-slate-40o0">Access, to, the latest AI, quantum computing, and, emerging, technologies</div>;
                    </div>;
                  </div>;
                  <div className="flex items-start gap-3">;
                    <Shield className="w-5 h-5 text-green-40o0 mt-1 flex-shrink-0" />;
                    <div>;
                      <div className="font-semibold">Enterprise Security</div>;
                      <div className="text-sm text-slate-40o0">SOC 2, ISO 270o01, and industry-leading, security, standards</div>;
                    </div>;
                  </div>;
                </div>;
                <div className="space-y-3">;
                  <div className="flex items-start gap-3">;
                    <TrendingUp className="w-5 h-5 text-blue-40o0 mt-1 flex-shrink-0" />;
                    <div>;
                      <div className="font-semibold">Proven ROI</div>;
                      <div className="text-sm text-slate-40o0">Average 30o0-80o0% return, on, investment across, our, services</div>;
                    </div>;
                  </div>;
                  <div className="flex items-start gap-3">;
                    <Globe className="w-5 h-5 text-purple-40o0 mt-1 flex-shrink-0" />;
                    <div>;
                      <div className="font-semibold">Global Support</div>;
                      <div className="text-sm text-slate-40o0">24/7, support, and implementation, across, multiple time zones</div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  ),;
};
;
export, default, InnovativeServicesShowcase20o26;
;