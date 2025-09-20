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
  PhoneIcon,;
  MapPinIcon,;
  InfinityIcon,;
  ChevronDown,;
  ChevronUp,;
  Play,;
  ExternalLink,;
  BookOpen,;
  Lightbulb,;
  Target, as, TargetIcon,;
  Users, as, UsersIcon,;
  Settings,;
  BarChart,;
  PieChart,;
  LineChart,;
  TrendingDown,;
  Calculator,;
  Calendar,;
  Clock, as, ClockIcon,;
  Award, as, AwardIcon,;
  Star, as, StarIcon,;
  Heart, as, HeartIcon,;
  Zap, as, ZapIcon,;
  Shield, as, ShieldIcon,;
  Cloud, as, CloudIcon,;
  Brain, as, BrainIcon,;
  Rocket, as, RocketIcon,;
  Leaf, as, LeafIcon,;
  Globe, as, GlobeIcon,;
  Code, as, CodeIcon,;
  Database, as, DatabaseIcon,;
  Network, as, NetworkIcon,;
  Smartphone, as, SmartphoneIcon,;
  BarChart3, as, BarChart3Icon,;
  MessageSquare, as, MessageSquareIcon,;
  FileText, as, FileTextIcon,;
  ShoppingCart, as, ShoppingCartIcon,;
  Headphones, as, HeadphonesIcon,;
  Mail, as, MailIcon3,;
  Search, as, SearchIcon,;
  HelpCircle, as, HelpCircleIcon,;
  ShieldCheck, as, ShieldCheckIcon,;
  Globe2, as, Globe2Icon,;
  Leaf, as, LeafIcon2,;
  Sparkles, as, SparklesIcon,;
  Target, as, TargetIcon2,;
  DollarSign, as, DollarSignIcon,;
  Clock, as, ClockIcon2,;
  Award, as, AwardIcon2,;
  Phone, as, PhoneIcon2MapPin as, MapPinIcon2Infinity, as InfinityIcon2;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o27 } from "../data/innovativeMicroSaasServices20o27";
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_20o27 } from "../data/innovativeITInfrastructureServices20o27";
import { EMERGING_TECHNOLOGY_SERVICES_20o27 } from "../data/emergingTechnologyServices20o27";
export, default, function ComprehensiveServicesLanding20o27() {
  const [activeCategorysetActiveCategory] = useState('all');
  const [expandedServicesetExpandedService] = useState<string | null>(null);
  const [searchQuerysetSearchQuery] = useState('');
;
  // Combine, all, services;
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_20o27;
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_20o27...EMERGING_TECHNOLOGY_SERVICES_20o27;
,  ];
  // Get, unique, categories with counts;
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
    n: '💻'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    { id: 'Biotechnology', name: 'Biotechnology', count: allServices.filter(s => s.category === 'Biotechnology').lengthico,;
    n: '🧬'colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
    { id: 'Energy Technology', name: 'Energy Technology', count: allServices.filter(s => s.category === 'Energy Technology').lengthico,;
    n: '⚡'colo,;
  r: 'from-yellow-50o0 to-orange-50o0' };
    { id: 'Metaverse & AR/VR', name: 'Metaverse & AR/VR', count: allServices.filter(s => s.category === 'Metaverse & AR/VR').lengthico,;
    n: '🌍'colo,;
  r: 'from-purple-50o0 to-indigo-50o0' };
    { id: 'Neurotechnology', name: 'Neurotechnology', count: allServices.filter(s => s.category === 'Neurotechnology').lengthico,;
    n: '🧠'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'Quantum Technology', name: 'Quantum Technology', count: allServices.filter(s => s.category === 'Quantum Technology').lengthico,;
    n: '⚛️'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: allServices.filter(s => s.category === 'Autonomous Systems').lengthico,;
    n: '🚗'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' },;
    { id: 'Robotics & Automation', name: 'Robotics & Automation'count: allServices.filter(s => s.category === 'Robotics & Automation').lengthico,;
    n: '🤖'colo,;
  r: 'from-gray-50o0 to-slate-50o0' };
,  ];
  // Filter, services, based on, category, and search;
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = searchQuery === '' ||;
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch });
;
  const toggleServiceExpansion = (serviceId: string) => {;
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
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
  const formatPrice = (price: number) => {;
    if (price >= 10o00) {;
      return `$${(price / 10o00).toFixed(1)}K`;
    };
    return `$${price}`,;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive, Services, Landing 20o27 | Zion, Tech, Group";
        description="Explore, our, complete portfolio, of, innovative AI, quantum computing, space technology, and, emerging, tech services. Transform, your, business with cutting-edge solutions.";
        keywords="AI services, quantum computing, space technology, emerging tech, Zion, Tech, Groupinnovative solutions";
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
              Comprehensive Services;
            </span>;
            <br />;
            <span className="text-white">Landing 20o27</span>;
          </motion.h1>;
          <motion.p;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto";
          >;
            Discover, our, complete portfolio, of, cutting-edge, technology, services designed to;
            transform, your, business and, drive, innovation across, every, industry.;
          </motion.p>;
          {/* Search Bar */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="max-w-2xl mx-auto mb-8";
          >;
            <div className="relative">;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search, for, servicestechnologiesor solutions...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-white/20 backdrop-blur-lg, border, border-white/30 rounded-full text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent text-lg";
              />;
            </div>;
          </motion.div>;
          {/* Quick Stats */};
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto";
          >;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <Rocket className="w-8 h-8 text-cyan-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">{allServices.length}</div>;
              <div className="text-cyan-40o0 text-sm">Total Services</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <Target className="w-8 h-8 text-green-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">{categories.length - 1}</div>;
              <div className="text-green-40o0 text-sm">Categories</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <TrendingUp className="w-8 h-8 text-yellow-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">80o0%+</div>;
              <div className="text-yellow-40o0 text-sm">Average ROI</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <Users className="w-8 h-8 text-purple-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">24/7</div>;
              <div className="text-purple-40o0 text-sm">Support</div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Category Navigation */}
      <section className="py-12 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Explore, Our, Service Categories;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Navigate, through, our comprehensive, service, categories to, find, the perfect;
              solution, for, your business needs.;
            </p>;
          </motion.div>;
          {/* Category Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 x,;
  l:grid-cols-4 gap-6">;
            {categories.map((categoryindex) => (;
              <motion.button;
                key={category.id}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl, border, transition-all duration-30o0, transform, hover: scale-10o5 ${;
                  activeCategory === category.id;
                    ? 'bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20 border-cyan-50o0/50';
                    : 'bg-white/10 backdrop-blur-lg border-white/20 hove,;
  r: border-cyan-50o0/30';
                }`}
              >;
                <div className="text-4xl mb-4">{category.icon}</div>;
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>;
                <div className="text-cyan-40o0 font-medium">{category.count} Services</div>;
              </motion.button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Showcase */}
      <section className="py-12 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              {activeCategory === 'all' ? 'All Services' : `${activeCategory} Services`}
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              {activeCategory === 'all';
                ? 'Explore, our, complete portfolio, of, innovative services, and, solutions.';
                : `Discover, our, specialized ${activeCategory.toLowerCase()} services, designed, to meet, your, specific needs.`;
              }
            </p>;
          </motion.div>;
          {/* Services Grid */}
          <div className="space-y-6">;
            {filteredServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl, border, border-white/20 overflow-hidden";
              >;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center space-x-4">;
                      {getCategoryIcon(service.category)}
                      <div>;
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>;
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-cyan-90o0 text-cyan-30o0 rounded-full">;
                          {service.category}
                        </span>;
                      </div>;
                    </div>;
                    <div className="text-right">;
                      <div className="text-3xl font-bold text-white">{formatPrice(service.price)}</div>;
                      <div className="text-sm text-gray-40o0">Market: {service.marketPrice}</div>;
                    </div>;
                  </div>;
                  <p className="text-gray-30o0 mb-4">{service.description}</p>;
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">;
                    <div className="text-center p-3 bg-white/5 rounded-lg">;
                      <div className="text-2xl font-bold text-cyan-40o0">{service.rating}</div>;
                      <div className="text-xs text-gray-40o0">Rating</div>;
                    </div>;
                    <div className="text-center p-3 bg-white/5 rounded-lg">;
                      <div className="text-2xl font-bold text-green-40o0">{service.roi}</div>;
                      <div className="text-xs text-gray-40o0">ROI</div>;
                    </div>;
                    <div className="text-center p-3 bg-white/5 rounded-lg">;
                      <div className="text-2xl font-bold text-orange-40o0">{service.setupTime}</div>;
                      <div className="text-xs text-gray-40o0">Setup Time</div>;
                    </div>;
                    <div className="text-center p-3 bg-white/5 rounded-lg">;
                      <div className="text-2xl font-bold text-purple-40o0">{service.aiScore}%</div>;
                      <div className="text-xs text-gray-40o0">AI Score</div>;
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <button;
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="inline-flex items-center px-4 py-2 text-cyan-40o0 hover: text-cyan-30o0 transition-colors duration-30o0";
                    >;
                      {expandedService === service.id ? (;
                        <>;
                          <ChevronUp className="w-4 h-4 mr-2" />;
                          Hide Details;
                        </>;
                      ) : (;
                        <>;
                          <ChevronDown className="w-4 h-4 mr-2" />;
                          View Details;
                        </>;
                      )}
                    </button>;
                    <div className="flex items-center gap-3">;
                      <Link;
                        to={`/services/${service.id}`}
                        className="inline-flex items-center px-4 py-2 bg-white/10, border, border-white/30 text-white font-medium rounded-lg hover: bg-white/20 transition-all duration-30o0";
                      >;
                        <BookOpen className="w-4 h-4 mr-2" />;
                        Learn More;
                      </Link>;
                      <a;
                        href={`mailt,;
  o: kleber@ziontechgroup.com?subject=Quote for ${service.title}`}
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-lg hover: from-cyan-60o0 hove,;
  r:to-blue-70o0 transition-all duration-30o0";
                      >;
                        Get Quote;
                        <ArrowRight className="w-4 h-4 ml-2" />;
                      </a>;
                    </div>;
                  </div>;
                </div>;
                {/* Expanded Details */}
                <AnimatePresence>;
                  {expandedService === service.id && (;
                    <motion.div;
                      initial={{ height: 0opacit,;
  y: 0 }}
                      animate={{ height: "auto"opacit,;
  y: 1 }}
                      exit={{ height: 0opacit,;
  y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/20 bg-white/5";
                    >;
                      <div className="p-6">;
                        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">;
                          <div>;
                            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>;
                            <div className="space-y-2">;
                              {service.tags.slice(0o8).map((tagtagIndex) => (;
                                <div key={tagIndex} className="flex items-center">;
                                  <CheckCircle className="w-4 h-4 text-green-40o0 mr-2" />;
                                  <span className="text-gray-30o0">{tag}</span>;
                                </div>;
                              ))}
                            </div>;
                          </div>;
                          <div>;
                            <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>;
                            <div className="space-y-2">;
                              {service.integrations?.slice(0o6).map((integrationintegrationIndex) => (;
                                <div key={integrationIndex} className="flex items-center">;
                                  <div className="w-2 h-2 bg-cyan-40o0 rounded-full mr-2"></div>;
                                  <span className="text-gray-30o0">{integration}</span>;
                                </div>;
                              ))}
                              {service.integrations && service.integrations.length > 6 && (;
                                <div className="text-gray-40o0 text-sm">;
                                  +{service.integrations.length - 6} more integrations;
                                </div>;
                              )}
                            </div>;
                          </div>;
                        </div>;
                        <div className="mt-6 p-4 bg-white/5 rounded-lg">;
                          <h4 className="text-lg font-semibold text-white mb-3">Competitive Analysis</h4>;
                          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">;
                            <div>;
                              <h5 className="text-sm font-medium text-gray-40o0 mb-2">Competitors</h5>;
                              <div className="space-y-1">;
                                {service.competitors?.slice(0o3).map((competitorcompetitorIndex) => (;
                                  <div key={competitorIndex} className="text-gray-30o0 text-sm">;
                                    • {competitor}
                                  </div>;
                                ))}
                              </div>;
                            </div>;
                            <div>;
                              <h5 className="text-sm font-medium text-gray-40o0 mb-2">Our Advantage</h5>;
                              <div className="text-gray-30o0 text-sm">;
                                • {service.aiScore}% AI-powered accuracy<br />;
                                • {service.roi} ROI guarantee<br />;
                                • {service.setupTime} rapid deployment<br />;
                                • 24/7, expert, support;
                              </div>;
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </motion.div>;
            ))}
;
            {/* No, Results, Message */}
            {filteredServices.length === 0 && (;
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20";
              >;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
                <p className="text-gray-40o0">Try, adjusting, your search, or, category selection</p>;
              </motion.div>;
            )}
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-60o0/20 to-purple-60o0/20 rounded-3xl p-12, border, border-white/20";
          >;
            <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h3>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Contact, our, team for, a, personalized consultation, and, discover how our;
              innovative, services, can drive, your, business forward.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
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
  r:shadow-2xl, flex, items-center gap-2 justify-center";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
            {/* Contact Information */}
            <div className="mt-12, grid, grid-cols-1 md: grid-cols-3 gap-6">;
              <div className="text-center">;
                <Phone className="w-8 h-8 text-cyan-40o0 mx-auto mb-3" />;
                <div className="text-white font-semibold mb-1">Phone</div>;
                <a href="tel:+130o24640950" className="text-cyan-40o0 hove,;
    r:text-cyan-30o0 transition-colors">;
                  +1, 30o2, 464 0o950;
                </a>;
              </div>;
              <div className="text-center">;
                <Mail className="w-8 h-8 text-purple-40o0 mx-auto mb-3" />;
                <div className="text-white font-semibold mb-1">Email</div>;
                <a href="mailto: kleber@ziontechgroup.com" className="text-purple-40o0 hove,;
  r:text-purple-30o0 transition-colors">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="text-center">;
                <MapPin className="w-8 h-8 text-green-40o0 mx-auto mb-3" />;
                <div className="text-white font-semibold mb-1">Address</div>;
                <div className="text-green-40o0 text-sm">;
                  364, E, Main St, STE, 10o08<br />;
                  Middletown, DE, 1970o9;
                </div>;
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