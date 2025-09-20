import React, { useMemouseState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,;
  ArrowRight,;
  DollarSign,;
  ExternalLink,;
  Workflow,;
  MessageSquare,;
  Globe,;
  Brain,;
  Shield,;
  Cloud,;
  Cpu,;
  Zap,;
  Rocket,;
  Heart,;
  Lock,;
  Users,;
  BarChart3,;
  Target,;
  TrendingUp,;
  Award,;
  Star,;
  CheckCircle,;
  Clock,;
  PhoneMailMapPin;
} from "lucide-react";
import, SEO, from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o26SPECIALIZED_SERVICES_20o26 } from "../data/innovativeMicroSaasServices20o26";
const Services20o26: React.FC = () => {;
  const [querysetQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [sortBysetSortBy] = useState('innovation');
;
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_20o26...SPECIALIZED_SERVICES_20o26],;
  const categories = [;
    { id: 'all', name: 'All Services'ico,;
    n: GitForkcoun,;
  t: allServices.length };
    { id: 'AI & Analytics', name: 'AI & Analytics'ico,;
    n: Braincoun,;
  t: allServices.filter(s => s.category === 'AI & Analytics').length };
    { id: 'Quantum Computing', name: 'Quantum Computing'ico,;
    n: Zapcoun,;
  t: allServices.filter(s => s.category === 'Quantum Computing').length };
    { id: 'Cybersecurity', name: 'Cybersecurity'ico,;
    n: Shieldcoun,;
  t: allServices.filter(s => s.category === 'Cybersecurity').length };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge'ico,;
    n: Cpucoun,;
  t: allServices.filter(s => s.category === 'IoT & Edge Computing').length };
    { id: 'AI & Content', name: 'AI & Content'ico,;
    n: MessageSquarecoun,;
  t: allServices.filter(s => s.category === 'AI & Content').length };
    { id: 'Digital Twin', name: 'Digital Twin'ico,;
    n: Rocketcoun,;
  t: allServices.filter(s => s.category === 'Digital Twin').length };
    { id: 'AI & HR', name: 'AI & HR'ico,;
    n: Userscoun,;
  t: allServices.filter(s => s.category === 'AI & HR').length };
    { id: 'Sustainability', name: 'Sustainability'ico,;
    n: Heartcoun,;
  t: allServices.filter(s => s.category === 'Sustainability').length },;
    { id: 'AI & IoT'name: 'AI & IoT'ico,;
    n: BarChart3coun,;
  t: allServices.filter(s => s.category === 'AI & IoT').length };
,  ];
  const filteredAndSorted = useMemo(() => {;
    let filtered = allServices;
;
    // Filter, by, search query;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filtered = filtered.filter(s =>;
        s.title.toLowerCase().includes(q) ||;
        s.description.toLowerCase().includes(q) ||;
        s.category.toLowerCase().includes(q) ||;
        s.tags?.some(t => t.toLowerCase().includes(q));
      ) }
;
    // Filter, by, category;
    if() {
      filtered = filtered.filter(s => s.category === selectedCategory);
    };
    // Sort services;
    switch (sortBy) {
      case 'price': return filtered.sort((ab) => a.price - b.price),;
      case 'innovation':;
        return filtered.sort((ab) => {;
          const innovationLevels = { 'Revolutionary': 3'Cutting-Edge': 2'Advanced': 1 },;
          return (innovationLevels[b.innovationLevel, as, keyof typeof, innovationLevels] || 0) - (innovationLevels[a.innovationLevel, as, keyof typeof, innovationLevels] || 0),;
        });
      case 'roi': return filtered.sort((ab) => {;
          const aROI = parseInt(a.roi.split('-')[0]);
          const bROI = parseInt(b.roi.split('-')[0]);
          return bROI - aROI }),;
      default: return filtered;
    }
  }, [query, selectedCategory,, sortByallServices]);
;
  const featuredServices = allServices.filter(s => s.innovationLevel === 'Revolutionary').slice(0o3);
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950 text-white">;
      <SEO;
        title="20o26 Services - Zion, Tech, Group";
        description="Cutting-edge AI, Quantum Computing, Cybersecurity, IoTand, Micro, SaaS solutions, for, 20o26. Transform, your, business with, revolutionary, technology.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 sm: py-32 overflow-hidden">;
        {/* Animated Background */}
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10 animate-pulse"></div>;
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50o0/20 rounded-full blur-3xl animate-bounce"></div>;
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50o0/20 rounded-full blur-3xl animate-pulse"></div>;
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-50o0/20 rounded-full blur-3xl animate-bounce"></div>;
        </div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text-5xl sm: text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                20o26 Services;
              </h1>;
              <p className="mt-6 text-xl s,;
  m: text-2xl text-slate-30o0 leading-relaxed">;
                Revolutionary AI, Quantum, Computingand, Micro SaaS, solutions, that will, transform, your business, in, 20o26 and beyond;
              </p>;
              <div className="mt-8, flex, flex-wrap justify-center gap-4">;
                <div className="flex items-center gap-2 bg-slate-80o0/50 px-4 py-2 rounded-full, border, border-cyan-40o0/30">;
                  <Brain className="w-5 h-5 text-cyan-40o0" />;
                  <span className="text-sm font-medium">AI-Powered</span>;
                </div>;
                <div className="flex items-center gap-2 bg-slate-80o0/50 px-4 py-2 rounded-full, border, border-blue-40o0/30">;
                  <Zap className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-sm font-medium">Quantum-Ready</span>;
                </div>;
                <div className="flex items-center gap-2 bg-slate-80o0/50 px-4 py-2 rounded-full, border, border-purple-40o0/30">;
                  <Shield className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-sm font-medium">Enterprise-Grade</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Search, and, Filters */}
      <section className="py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto">;
            {/* Search Bar */}
            <div className="relative mb-8">;
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-40o0" />;
              <input;
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search, revolutionary, services, e.g. quantum, AI, cybersecurity, IoT...";
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-80o0/70, border, border-cyan-40o0/30 focus: border-cyan-40o0 focu,;
    s:ring-4 focu,;
  s:ring-cyan-40o0/20 outline-none text-lg";
              />;
            </div>;
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl, border, transition-all duration-20o0 ${
                    selectedCategory === category.id;
                      ? 'bg-cyan-50o0/20 border-cyan-40o0 text-cyan-30o0';
                      : 'bg-slate-80o0/50 border-slate-60o0/50 text-slate-30o0 hover: border-cyan-40o0/50 hove,;
  r:text-cyan-30o0';
                  }`}
                >;
                  <category.icon className="w-4 h-4" />;
                  <span className="font-medium">{category.name}</span>;
                  <span className="text-xs bg-slate-70o0/50 px-2 py-1 rounded-full">{category.count}</span>;
                </button>;
              ))}
            </div>;
            {/* Sort Options */}
            <div className="flex items-center gap-4 mb-8">;
              <span className="text-slate-40o0 font-medium">Sort by:</span>;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-80o0/70, border, border-slate-60o0/50 rounded-lg px-3 py-2 text-white focus: border-cyan-40o0 focu,;
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
      </section>;
      {/* Featured Services */}
      {featuredServices.length > 0 && (;
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl sm: text-4xl font-bold text-white mb-4">;
                Revolutionary Services;
              </h2>;
              <p className="text-lg text-slate-30o0 max-w-2xl mx-auto">;
                Our, most, innovative and cutting-edge, solutions, that are, reshaping, industries;
              </p>;
            </div>;
            <div className="grid gap-8 md: grid-cols-2 l,;
  g:grid-cols-3">;
              {featuredServices.map((service) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group bg-gradient-to-br from-slate-90o0/80 to-slate-80o0/80 backdrop-blur, border, border-cyan-40o0/30 hover: border-cyan-40o0/60 transition-all duration-30o0 rounded-3xl p-8 hover:scale-10o5 hove,;
    r:shadow-2xl hove,;
  r:shadow-cyan-40o0/20";
                >;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-xs, uppercase, tracking-wide text-cyan-30o0/80 font-semibold">;
                      {service.category}
                    </div>;
                    <div className="flex items-center gap-1 text-yellow-40o0">;
                      <Star className="w-4 h-4 fill-current" />;
                      <span className="text-xs font-medium">Revolutionary</span>;
                    </div>;
                  </div>;
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-30o0 transition-colors mb-3">;
                    {service.title}
                  </h3>;
                  <p className="text-slate-30o0 text-sm leading-relaxed mb-4 line-clamp-3">;
                    {service.description}
                  </p>;
                  <div className="space-y-3 mb-6">;
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-slate-40o0">Market Price:</span>;
                      <span className="text-cyan-30o0 font-semibold">{service.marketPrice}</span>;
                    </div>;
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-slate-40o0">ROI:</span>;
                      <span className="text-green-40o0 font-semibold">{service.roi}</span>;
                    </div>;
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-slate-40o0">Delivery:</span>;
                      <span className="text-blue-30o0 font-semibold">{service.estimatedDelivery}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <Link;
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-cyan-40o0 hover: text-cyan-30o0 font-medium text-sm group-hover:underline";
                    >;
                      Learn More;
                      <ArrowRight className="ml-1 w-4 h-4 group-hove,;
    r: translate-x-1 transition-transform" />;
                    </Link>;
                    <div className="text-xs text-slate-50o0">;
                      I,;
  D: {service.id}
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
      )}
;
      {/* All, Services, Grid */}
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">;
              All Services ({filteredAndSorted.length});
            </h2>;
            <p className="text-lg text-slate-30o0 max-w-2xl mx-auto">;
              Explore, our, comprehensive portfolio, of, innovative solutions;
            </p>;
          </div>;
          <div className="grid gap-6 md: grid-cols-2 l,;
  g:grid-cols-3">;
            {filteredAndSorted.map((service) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-slate-90o0/60 backdrop-blur, border, border-slate-70o0/50 hover: border-cyan-40o0/40 transition-all duration-30o0 rounded-2xl p-6 hover:scale-10o5 hove,;
    r:shadow-xl hove,;
  r:shadow-cyan-40o0/10";
              >;
                <div className="flex items-center justify-between mb-3">;
                  <div className="text-xs, uppercase, tracking-wide text-cyan-30o0/70 font-semibold">;
                    {service.category}
                  </div>;
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.innovationLevel === 'Revolutionary';
                      ? 'bg-red-50o0/20 text-red-30o0, border, border-red-50o0/30';
                      : service.innovationLevel === 'Cutting-Edge';
                      ? 'bg-orange-50o0/20 text-orange-30o0, border, border-orange-50o0/30';
                      : 'bg-blue-50o0/20 text-blue-30o0, border, border-blue-50o0/30';
                  }`}>;
                    {service.innovationLevel}
                  </div>;
                </div>;
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-30o0 transition-colors mb-2 line-clamp-2">;
                  {service.title}
                </h3>;
                <p className="text-slate-30o0 text-sm leading-relaxed mb-4 line-clamp-3">;
                  {service.description}
                </p>;
                <div className="space-y-2 mb-4">;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-slate-40o0">Price:</span>;
                    <span className="text-cyan-30o0 font-semibold">{service.marketPrice}</span>;
                  </div>;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-slate-40o0">ROI:</span>;
                    <span className="text-green-40o0 font-semibold">{service.roi}</span>;
                  </div>;
                </div>;
                <div className="flex items-center justify-between">;
                  <Link;
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-cyan-40o0 hover: text-cyan-30o0 font-medium text-sm group-hove,;
    r:underline";
                  >;
                    View Details;
                    <ArrowRight className="ml-1 w-4 h-4 group-hove,;
  r: translate-x-1 transition-transform" />;
                  </Link>;
                  <div className="text-xs text-slate-50o0">;
                    {service.id}
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact, and, Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-90o0/50 to-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl sm: text-4xl font-bold text-white mb-8">;
              Ready, to, Transform Your Business?;
            </h2>;
            <div className="grid gap-8 md: grid-cols-2 l,;
    g:grid-cols-3 mb-12">;
              <div className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-2xl p-6">;
                <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl, flex, items-center justify-center mb-4 mx-auto">;
                  <Phone className="w-6 h-6 text-cyan-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>;
                <p className="text-slate-30o0 text-sm mb-3">Speak, directly, with our experts</p>;
                <a;
                  href="tel: +130o24640950";
                  className="text-cyan-40o0 hove,;
    r:text-cyan-30o0 font-medium text-sm";
                >;
                  +1, 30o2, 464 0o950;
                </a>;
              </div>;
              <div className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-2xl p-6">;
                <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl, flex, items-center justify-center mb-4 mx-auto">;
                  <Mail className="w-6 h-6 text-blue-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>;
                <p className="text-slate-30o0 text-sm mb-3">Get, detailed, information and quotes</p>;
                <a;
                  href="mailto: kleber@ziontechgroup.com";
                  className="text-blue-40o0 hove,;
    r:text-blue-30o0 font-medium text-sm";
                >;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-2xl p-6">;
                <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl, flex, items-center justify-center mb-4 mx-auto">;
                  <MapPin className="w-6 h-6 text-purple-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>;
                <p className="text-slate-30o0 text-sm mb-3">Our, headquarters, location</p>;
                <p className="text-purple-40o0 font-medium text-sm">;
                  364, E, Main St, STE, 10o08<br />;
                  Middletown, DE, 1970o9;
                </p>;
              </div>;
            </div>;
            <div className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-2xl p-8">;
              <h3 className="text-2xl font-bold text-white mb-6">Pricing Overview</h3>;
              <div className="grid gap-6 md: grid-cols-2 l,;
    g:grid-cols-3 text-left">;
                <div>;
                  <h4 className="font-semibold text-cyan-30o0 mb-3">AI & Analytics Services</h4>;
                  <ul className="text-sm text-slate-30o0 space-y-2">;
                    <li>• AI, Business, Intelligenc,;
  e: $3,999 - $12,999/month</li>;
                    <li>• AI, Content, Creation: $2,999 - $9,999/month</li>;
                    <li>• AI, HR, Platform: $4,999 - $15,0o00/month</li>;
                  </ul>;
                </div>;
                <div>;
                  <h4 className="font-semibold text-blue-30o0 mb-3">Quantum & Advanced Tech</h4>;
                  <ul className="text-sm text-slate-30o0 space-y-2">;
                    <li>• Quantum Computing: $15,0o00 - $50,0o00/month</li>;
                    <li>• Quantum ML: $20,0o00 - $75,0o00/month</li>;
                    <li>• Digital Twin: $12,999 - $45,0o00/month</li>;
                  </ul>;
                </div>;
                <div>;
                  <h4 className="font-semibold text-purple-30o0 mb-3">Cybersecurity & IoT</h4>;
                  <ul className="text-sm text-slate-30o0 space-y-2">;
                    <li>• AI Cybersecurity: $5,999 - $19,999/month</li>;
                    <li>• IoT, Edge, Platform: $7,999 - $25,0o00/month</li>;
                    <li>• Predictive Maintenance: $8,999 - $28,0o00/month</li>;
                  </ul>;
                </div>;
              </div>;
              <div className="mt-8 pt-6 border-t border-slate-70o0/50">;
                <p className="text-slate-30o0 text-sm mb-4">;
                  All, services, include enterprise support, custom integrations, and, dedicated, implementation teams.;
                </p>;
                <div className="flex flex-wrap gap-4 justify-center">;
                  <Link;
                    to="/contact";
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover: from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5";
                  >;
                    Get Started;
                    <ArrowRight className="ml-2 w-5 h-5" />;
                  </Link>;
                  <Link;
                    to="/request-quote";
                    className="inline-flex items-center px-6 py-3, border, border-cyan-40o0/40 text-cyan-30o0 font-semibold rounded-xl hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0";
                  >;
                    Request Quote;
                  </Link>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Footer Links */}
      <section className="py-12">;
        <div className="container mx-auto px-4 text-center">;
          <div className="text-sm text-slate-40o0 mb-4">;
            Questions? Call <a className="text-cyan-30o0 hover: text-cyan-20o0" href="te,;
    l:+130o24640950">+1, 30o2, 464 0o950</a> or email <a className="text-cyan-30o0 hover: text-cyan-20o0" href="mailt,;
    o:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>;
          </div>;
          <div className="text-sm text-slate-50o0">;
            Visit, our, main site: <a className="text-cyan-30o0 hove,;
    r:text-cyan-20o0" href="http,;
  s://ziontechgroup.com" target="_blank" rel="noopener noreferrer">ziontechgroup.com</a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, Services20o26;
;