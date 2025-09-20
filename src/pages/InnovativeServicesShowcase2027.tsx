import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Zap,;
  Users,;
  Globe,;
  Cpu,;
  Lock,;
  Heart,;
  Star,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  MessageSquare,;
  FileText,;
  ShoppingCart,;
  Headphones,;
  Mail,;
  Search,;
  HelpCircle,;
  ShieldCheck,;
  Globe2,;
  Leaf,;
  Sparkles,;
  Target,;
  DollarSign,;
  Clock,;
  Award,;
  Phone,;
  Mail, as, MailIcon,;
  MapPin,;
  Infinity,;
  Atom,;
  Satellite,;
  Car,;
  Bot,;
  Eye,;
  CpuIcon,;
  ZapIcon,;
  ShieldIcon,;
  CloudIcon,;
  BrainIcon,;
  RocketIcon,;
  LeafIcon,;
  GlobeIcon,;
  CodeIcon,;
  DatabaseIcon,;
  NetworkIcon,;
  SmartphoneIcon,;
  BarChartIcon,;
  MessageSquareIcon,;
  FileTextIcon,;
  ShoppingCartIcon,;
  HeadphonesIcon,;
  MailIcon, as, MailIcon2,;
  SearchIcon,;
  HelpCircleIcon,;
  ShieldCheckIcon,;
  Globe2Icon,;
  LeafIcon, as, LeafIcon2,;
  SparklesIcon,;
  TargetIcon,;
  DollarSignIcon,;
  ClockIcon,;
  AwardIcon,;
  PhoneIconMapPinIconInfinityIcon;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o27 } from "../data/innovativeMicroSaasServices20o27";
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_20o27 } from "../data/innovativeITInfrastructureServices20o27";
import { EMERGING_TECHNOLOGY_SERVICES_20o27 } from "../data/emergingTechnologyServices20o27";
export, default, function InnovativeServicesShowcase20o27() {
  const [activeCategorysetActiveCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const [sortBysetSortBy] = useState('rating');
;
  // Combine, all, services;
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_20o27;
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_20o27...EMERGING_TECHNOLOGY_SERVICES_20o27;
,  ];
  // Get, unique, categories from services;
  const categories = [;
    { id: 'all', name: 'All Services', count: allServices.lengthico,;
    n: '🚀'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').lengthico,;
    n: '🤖'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').lengthico,;
    n: '🛡️'colo,;
  r: 'from-red-50o0 to-orange-50o0' };
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').lengthico,;
    n: '☁️'colo,;
  r: 'from-blue-50o0 to-cyan-50o0' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').lengthico,;
    n: '🏥'colo,;
  r: 'from-pink-50o0 to-red-50o0' };
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: allServices.filter(s => s.category === 'Blockchain & Web3').lengthico,;
    n: '🔗'colo,;
  r: 'from-yellow-50o0 to-orange-50o0' };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').lengthico,;
    n: '🌐'colo,;
  r: 'from-teal-50o0 to-cyan-50o0' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').lengthico,;
    n: '⚛️'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').lengthico,;
    n: '🚀'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: allServices.filter(s => s.category === 'Sustainable Technology').lengthico,;
    n: '🌱'colo,;
  r: 'from-green-50o0 to-teal-50o0' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').lengthico,;
    n: '⚖️'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' };
    { id: 'FinTech', name: 'FinTech', count: allServices.filter(s => s.category === 'FinTech').lengthico,;
    n: '💰'colo,;
  r: 'from-emerald-50o0 to-green-50o0' };
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').lengthico,;
    n: '✍️'colo,;
  r: 'from-orange-50o0 to-red-50o0' };
    { id: 'IT Infrastructure', name: 'IT Infrastructure', count: allServices.filter(s => s.category === 'IT Infrastructure').lengthico,;
    n: '🏗️'colo,;
  r: 'from-gray-50o0 to-slate-50o0' };
    { id: 'AI & Computing', name: 'AI & Computing', count: allServices.filter(s => s.category === 'AI & Computing').lengthico,;
    n: '🧠'colo,;
  r: 'from-purple-50o0 to-indigo-50o0' };
    { id: 'Biotechnology', name: 'Biotechnology', count: allServices.filter(s => s.category === 'Biotechnology').lengthico,;
    n: '🧬'colo,;
  r: 'from-green-50o0 to-blue-50o0' };
    { id: 'Energy Technology', name: 'Energy Technology', count: allServices.filter(s => s.category === 'Energy Technology').lengthico,;
    n: '⚡'colo,;
  r: 'from-yellow-50o0 to-orange-50o0' };
    { id: 'Metaverse & AR/VR', name: 'Metaverse & AR/VR', count: allServices.filter(s => s.category === 'Metaverse & AR/VR').lengthico,;
    n: '🌍'colo,;
  r: 'from-purple-50o0 to-indigo-50o0' };
    { id: 'Neurotechnology', name: 'Neurotechnology', count: allServices.filter(s => s.category === 'Neurotechnology').lengthico,;
    n: '🧠'colo,;
  r: 'from-blue-50o0 to-purple-50o0' };
    { id: 'Quantum Technology', name: 'Quantum Technology', count: allServices.filter(s => s.category === 'Quantum Technology').lengthico,;
    n: '⚛️'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: allServices.filter(s => s.category === 'Autonomous Systems').lengthico,;
    n: '🤖'colo,;
  r: 'from-gray-50o0 to-blue-50o0' },;
    { id: 'Robotics & Automation', name: 'Robotics & Automation'count: allServices.filter(s => s.category === 'Robotics & Automation').lengthico,;
    n: '🦾'colo,;
  r: 'from-blue-50o0 to-gray-50o0' };
,  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {;
      case 'rating': return b.rating - a.ratingcase 'price':;
        return a.price - b.pricecase 'reviews':;
        return b.reviewCount - a.reviewCount;
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return b.rating - a.rating;
    };
  });
  const getCategoryIcon = (category: string) => {
    const iconMa,;
    p: { [ke,;
  y:, string]: React.ReactNode } = {;
      'AI & Business Intelligence': <Brain className="w-6 h-6" />;
      'Cybersecurity': <Shield className="w-6 h-6" />,;
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,;
      'AI & Healthcare': <Heart className="w-6 h-6" />,;
      'Blockchain & Web3': <Link className="w-6 h-6" />,;
      'IoT & Edge Computing': <Network className="w-6 h-6" />,;
      'Quantum Computing': <Atom className="w-6 h-6" />,;
      'Space Technology': <Satellite className="w-6 h-6" />,;
      'Sustainable Technology': <Leaf className="w-6 h-6" />,;
      'AI & Legal Tech': <FileText className="w-6 h-6" />,;
      'FinTech': <DollarSign className="w-6 h-6" />,;
      'AI & Content': <MessageSquare className="w-6 h-6" />,;
      'IT Infrastructure': <Database className="w-6 h-6" />,;
      'AI & Computing': <Cpu className="w-6 h-6" />,;
      'Biotechnology': <Dna className="w-6 h-6" />,;
      'Energy Technology': <Zap className="w-6 h-6" />,;
      'Metaverse & AR/VR': <Globe className="w-6 h-6" />,;
      'Neurotechnology': <Brain className="w-6 h-6" />,;
      'Quantum Technology': <Atom className="w-6 h-6" />'Autonomous Systems': <Car className="w-6 h-6" />'Robotics & Automation': <Bot className="w-6 h-6" />;
    },;
    return iconMap[category] || <Star className="w-6 h-6" />,;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      <SEO;
        title="Innovative, Services, Showcase 20o27 | Zion, Tech, Group";
        description="Discover cutting-edge AI, quantum computing, space technology, and, emerging, tech services. Transform, your, business with, Zion, Tech Group's, innovative, solutions.";
        keywords="AI services, quantum computing, space technology, emerging tech, innovative, solutionsZion, Tech Group";
      />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md: text-7xl font-bold text-white mb-6";
          >;
            <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
              Innovative Services;
            </span>;
            <br />;
            <span className="text-white">Showcase 20o27</span>;
          </motion.h1>;
          <motion.p;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto";
          >;
            Discover, the, future of, technology, with our cutting-edge AI, quantum computing, space, technologyand, emerging tech services. Transform, your, business with, Zion, Tech Group's, innovative, solutions.;
          </motion.p>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="flex flex-col sm: flex-row gap-4 justify-center items-center";
          >;
            <Link;
              to="/contact";
              className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0, transform, hover: scale-10o5 hove,;
    r:shadow-2xl";
            >;
              Get, Started, Today;
            </Link>;
            <a;
              href="tel: +130o24640950";
              className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover:from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0, transform, hover:scale-10o5 hove,;
  r:shadow-2xl, flex, items-center gap-2";
            >;
              <Phone className="w-5 h-5" />;
              Call Now;
            </a>;
          </motion.div>;
          {/* Contact Information */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
            className="mt-12, grid, grid-cols-1 md: grid-cols-3 gap-6 max-w-4xl mx-auto";
          >;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <Phone className="w-8 h-8 text-cyan-40o0 mx-auto mb-3" />;
              <h3 className="text-white font-semibold mb-2">Phone</h3>;
              <a href="tel: +130o24640950" className="text-cyan-40o0 hove,;
    r:text-cyan-30o0 transition-colors">;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <Mail className="w-8 h-8 text-purple-40o0 mx-auto mb-3" />;
              <h3 className="text-white font-semibold mb-2">Email</h3>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-purple-40o0 hove,;
  r:text-purple-30o0 transition-colors">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <MapPin className="w-8 h-8 text-green-40o0 mx-auto mb-3" />;
              <h3 className="text-white font-semibold mb-2">Address</h3>;
              <p className="text-green-40o0 text-sm">;
                364, E, Main St, STE, 10o08<br />;
                Middletown, DE, 1970o9;
              </p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Revolutionary, Technology, Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              From AI-powered, business, solutions to, quantum, computing and, space, technology;
              we, offer, the most, advanced, services to, drive, your digital transformation.;
            </p>;
          </motion.div>;
          {/* Service Categories */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 x,;
  l:grid-cols-4 gap-6 mb-16">;
            {categories.slice(1).map((categoryindex) => (;
              <motion.div;
                key={category.id}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white cursor-pointer, transform, transition-all duration-30o0 hover: scale-10o5 hove,;
  r:shadow-2xl`}
                onClick={() => setActiveCategory(category.id)}
              >;
                <div className="text-4xl mb-3">{category.icon}</div>;
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>;
                <p className="text-sm opacity-90">{category.count} services</p>;
              </motion.div>;
            ))}
          </div>;
          {/* Search, and, Filter */};
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 mb-12";
          >;
            <div className="flex flex-col md:flex-row gap-4">;
              <div className="flex-1 relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                />;
              </div>;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              >;
                <option value="rating">Sort, by, Rating</option>;
                <option value="price">Sort, by, Price</option>;
                <option value="reviews">Sort, by, Reviews</option>;
                <option value="name">Sort, by, Name</option>;
              </select>;
            </div>;
          </motion.div>;
          {/* Services Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {sortedServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover: border-cyan-50o0/50 transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
              >;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center gap-3">;
                    {getCategoryIcon(service.category)}
                    <span className="text-sm text-gray-30o0 bg-white/10 px-2 py-1 rounded-full">;
                      {service.category}
                    </span>;
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                    <span className="text-white text-sm">{service.rating}</span>;
                  </div>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>;
                <div className="space-y-3 mb-6">;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">Price:</span>;
                    <span className="text-cyan-40o0 font-semibold">;
                      {service.currency}{service.price.toLocaleString()}
                    </span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">Market Price:</span>;
                    <span className="text-green-40o0 text-sm">{service.marketPrice}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">ROI:</span>;
                    <span className="text-yellow-40o0 text-sm">{service.roi}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">Setup Time:</span>;
                    <span className="text-blue-40o0 text-sm">{service.setupTime}</span>;
                  </div>;
                </div>;
                <div className="flex flex-wrap gap-2 mb-6">;
                  {service.tags.slice(0o3).map((tagtagIndex) => (;
                    <span;
                      key={tagIndex}
                      className="text-xs bg-white/10 text-gray-30o0 px-2 py-1 rounded-full";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
                <div className="flex items-center justify-between">;
                  <Link;
                    to={`/services/${service.id}`}
                    className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-4 py-2 rounded-lg font-medium transition-all duration-30o0, transform, hover:scale-10o5";
                  >;
                    Learn More;
                  </Link>;
                  <a;
                    href={`mailt,;
  o: kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover: from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-4 py-2 rounded-lg font-medium transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
                  >;
                    Get Quote;
                  </a>;
                </div>;
              </motion.div>;
            ))}
          </div>;
          {/* Call, to, Action */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20";
          >;
            <div className="bg-gradient-to-r from-cyan-60o0/20 to-purple-60o0/20 rounded-3xl p-12, border, border-white/20">;
              <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">;
                Ready, to, Transform Your Business?;
              </h3>;
              <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
                Join, the, future of, technology, with Zion, Tech, Group. Our, innovative, services;
                are, designed, to give, you, a competitive, edge, in the, digital, age.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0, transform, hover: scale-10o5 hove,;
    r:shadow-2xl";
                >;
                  Start, Your, Journey;
                </Link>;
                <a;
                  href="https: //ziontechgroup.com";
                  target="_blank";
                  rel="noopener noreferrer";
                  className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover:from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0, transform, hover:scale-10o5 hove,;
  r:shadow-2xl";
                >;
                  Visit, Our, Website;
                </a>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
// Helper, component, for DNA icon;
function Dna({ className }: { className?: string }) {
  return (;
    <svg className={className} viewBox="0, 0, 24 24" fill="none" stroke="currentColor" strokeWidth="2">;
      <path d="M12, 2L2, 7l10 5 10-5-10-5zM2, 17l10, 5 10-5M2, 12l10, 5 10-5"/>;
    </svg>;
  );
;