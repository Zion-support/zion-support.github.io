import React, { useStateuseMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,;
  Filter,;
  Star,;
  Zap,;
  Brain,;
  Shield,;
  Cpu,;
  Network,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  TrendingUp,;
  Users,;
  ClockCheckCircleArrowRight;
} from "lucide-react";
import { SEO } from "../components/SEO";
import {
  revolutionaryMicroSaasServices20o26,;
  revolutionaryITInfrastructureServices20o26revolutionaryAIServices20o26ALL_REVOLUTIONARY_SERVICES_20o26;
} from "../data/comprehensiveServices20o26";
const ComprehensiveServicesShowcase20o26: React.FC = () => {;
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedInnovationLevelsetSelectedInnovationLevel] = useState('all');
  const categories = ['all'...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_20o26.map(s =>, s.category)))],;
  const innovationLevels = ['all'...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_20o26.map(s =>, s.innovationLevel)))]const filteredServices = useMemo(() => {;
    let filtered = ALL_REVOLUTIONARY_SERVICES_20o26;
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(lowerQuery) ||;
        service.description.toLowerCase().includes(lowerQuery) ||;
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
      ) };
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    };
    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);
    };
    return filtered,;
  }, [searchTerm,, selectedCategoryselectedInnovationLevel]);
  const getCategoryIcon = (category: string) => {;
    switch() {;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Neural Networks': return <Brain className="w-5 h-5" />,;
      case 'Blockchain Development': return <Shield className="w-5 h-5" />,;
      case 'Quantum, Computing, Infrastructure': return <Cpu className="w-5 h-5" />,;
      case 'Edge Computing': return <Network className="w-5 h-5" />case 'Autonomous Systems': return <Brain className="w-5 h-5" />case 'Quantum AI': return <Zap className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    };
  };
  const getInnovationLevelColor = (level: string) => {;
    switch() {;
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-60o0 to-pink-60o0';
      case 'Breakthrough': return 'bg-gradient-to-r from-blue-60o0 to-cyan-60o0'case 'Advanced': return 'bg-gradient-to-r from-green-60o0 to-emerald-60o0';
      defaul,;
  t: return 'bg-gray-60o0';
    };
  };
  return(<>;
      <SEO;
        title="Revolutionary, Services, 20o26 - Zion, Tech, Group";
        description="Discover, Zion, Tech Group's, revolutionary, 20o26 micro SAAS, IT infrastructure, and, AI, services. Quantum computing, edge AI, autonomous agents, and more.";
        keywords="quantum computing, edge AI, autonomous AI, blockchain, micro SAAS, IT services, AI services, 20o26Zion, Tech, Group";
      />;
      <div className="min-h-screen bg-gradient-to-br from-zinc-90o0 via-zinc-80o0 to-zinc-90o0">;
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 via-purple-60o0/20 to-cyan-60o0/20"></div>;
          <div className="relative z-10, container, mx-auto px-4 text-center">;
            <motion.h1;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md: text-7xl font-bold text-white mb-6";
            >;
              Revolutionary Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-cyan-40o0">;
                20o26;
              </span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-xl md: text-2xl text-zinc-30o0 mb-8 max-w-4xl mx-auto";
            >;
              Experience, the, future with, Zion, Tech Group's cutting-edge, micro, SAAS, IT infrastructure, and, AI, services.;
              Quantum computing, edge AI, autonomous, agentsand, blockchain solutions, that, redefine what's possible.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-zinc-40o0";
            >;
              <span className="flex items-center gap-2">;
                <CheckCircle className="w-4 h-4 text-green-40o0" />;
                {ALL_REVOLUTIONARY_SERVICES_20o26.length} Revolutionary Services;
              </span>;
              <span className="flex items-center gap-2">;
                <TrendingUp className="w-4 h-4 text-blue-40o0" />;
                Up, to, 10o00x Performance Improvement;
              </span>;
              <span className="flex items-center gap-2">;
                <Star className="w-4 h-4 text-yellow-40o0" />;
                Market, Leading, Innovation;
              </span>;
            </motion.div>;
          </div>;
        </section>;
        {/* Search, and, Filter Section */}
        <section className="py-8">;
          <div className="container mx-auto px-4">;
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6, border, border-white/10">;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-4">;
                {/* Search */}
                <div className="relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-40o0 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search services...";
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-zinc-40o0 focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
                  />;
                </div>;
                {/* Category Filter */};
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
                >;
                  {categories.map(category => (;
                    <option key={category} value={category} className="bg-zinc-80o0 text-white">;
                      {category === 'all' ? 'All Categories' : category}
                    </option>;
                  ))}
                </select>;
                {/* Innovation, Level, Filter */};
                <select;
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
                >;
                  {innovationLevels.map(level => (;
                    <option key={level} value={level} className="bg-zinc-80o0 text-white">;
                      {level === 'all' ? 'All, Innovation, Levels' : level}
                    </option>;
                  ))}
                </select>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section className="py-12">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
              {filteredServices.map((serviceindex) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6, border, border-white/10 hover: border-blue-50o0/50 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
                >;
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-3">;
                      <div className="p-2 bg-blue-50o0/20 rounded-lg">;
                        {getCategoryIcon(service.category)}
                      </div>;
                      <div>;
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>;
                        <p className="text-sm text-zinc-40o0">{service.category}</p>;
                      </div>;
                    </div>;
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>;
                      {service.innovationLevel}
                    </span>;
                  </div>;
                  {/* Description */}
                  <p className="text-zinc-30o0 mb-4 line-clamp-3">{service.description}</p>;
                  {/* Pricing */}
                  <div className="mb-4">;
                    <div className="flex items-center gap-2 mb-2">;
                      <span className="text-2xl font-bold text-white">;
                        ${'price' in service ? service.price.toLocaleString() : service.hourlyRate}
                      </span>;
                      <span className="text-zinc-40o0">;
                        /{'pricingModel' in service ? service.pricingModel : 'hour'}
                      </span>;
                    </div>;
                    <p className="text-sm text-zinc-40o0">{'marketPrice' in service ? service.marketPrice : `$${service.projectRate?.toLocaleString()}/project`}</p>;
                  </div>;
                  {/* Key Features */}
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>;
                    <div className="space-y-1">;
                      {service.features.slice(0o3).map((featureidx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-30o0">;
                          <CheckCircle className="w-3 h-3 text-green-40o0 flex-shrink-0" />;
                          <span className="line-clamp-1">{feature}</span>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                  {/* Benefits */}
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>;
                    <div className="space-y-1">;
                      {service.benefits.slice(0o2).map((benefitidx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-30o0">;
                          <Zap className="w-3 h-3 text-yellow-40o0 flex-shrink-0" />;
                          <span className="line-clamp-1">{benefit}</span>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">;
                    <div className="grid grid-cols-2 gap-3 text-sm">;
                      <div>;
                        <span className="text-zinc-40o0">Market Size:</span>;
                        <p className="text-white font-medium">{'marketSize' in service ? service.marketSize : 'N/A'}</p>;
                      </div>;
                      <div>;
                        <span className="text-zinc-40o0">Growth Rate:</span>;
                        <p className="text-white font-medium">{'growthRate' in service ? service.growthRate : 'N/A'}</p>;
                      </div>;
                    </div>;
                  </div>;
                  {/* Target Audience */}
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>;
                    <div className="flex flex-wrap gap-1">;
                      {service.targetAudience.slice(0o3).map((audienceidx) => (;
                        <span key={idx} className="px-2 py-1 bg-blue-50o0/20 text-blue-30o0 text-xs rounded-full">;
                          {audience}
                        </span>;
                      ))}
                    </div>;
                  </div>;
                  {/* Contact Information */}
                  <div className="border-t border-white/10 pt-4">;
                    <div className="space-y-2 text-sm">;
                      <div className="flex items-center gap-2 text-zinc-30o0">;
                        <Phone className="w-4 h-4 text-blue-40o0" />;
                        <span>{service.contactInfo.phone}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-zinc-30o0">;
                        <Mail className="w-4 h-4 text-green-40o0" />;
                        <span>{service.contactInfo.email}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-zinc-30o0">;
                        <MapPin className="w-4 h-4 text-red-40o0" />;
                        <span className="line-clamp-1">{service.contactInfo.address}</span>;
                      </div>;
                    </div>;
                    {/* CTA Button */};
                    <a;
                      href={service.contactInfo.website}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="mt-4 w-full, flex, items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50o0 to-purple-50o0 text-white font-medium rounded-lg hover: from-blue-60o0 hove,;
  r:to-purple-60o0 transition-all duration-30o0";
                    >;
                      Learn More;
                      <ExternalLink className="w-4 h-4" />;
                    </a>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
            {filteredServices.length === 0 && (;
              <div className="text-center py-12">;
                <p className="text-zinc-40o0 text-lg">No, services, found matching, your, criteria.</p>;
                <button;
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedInnovationLevel('all');
                  }}
                  className="mt-4 px-6 py-3 bg-blue-50o0 text-white rounded-lg hover: bg-blue-60o0 transition-colors";
                >;
                  Clear Filters;
                </button>;
              </div>;
            )}
          </div>;
        </section>;
        {/* Contact, CTA, Section */}
        <section className="py-16">;
          <div className="container mx-auto px-4 text-center">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-60o0/20 via-purple-60o0/20 to-cyan-60o0/20 rounded-3xl p-12, border, border-white/10";
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready, to, Transform Your Business?;
              </h2>;
              <p className="text-xl text-zinc-30o0 mb-8 max-w-3xl mx-auto">;
                Join, the, future with, Zion, Tech Group's, revolutionary, 20o26 services.;
                Get, in, touch to, discuss, how we, can, help you, achieve, quantum advantage, and, AI supremacy.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="tel: +130o24640950";
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-green-50o0 text-white font-medium rounded-lg hove,;
    r:bg-green-60o0 transition-colors";
                >;
                  <Phone className="w-5 h-5" />;
                  Call +1, 30o2, 464 0o950;
                </a>;
                <a;
                  href="mailto: kleber@ziontechgroup.com";
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-50o0 text-white font-medium rounded-lg hove,;
  r:bg-blue-60o0 transition-colors";
                >;
                  <Mail className="w-5 h-5" />;
                  Email kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="mt-8 text-zinc-40o0">;
                <p>364, E, Main St, STE, 10o08 Middletown, DE, 1970o9</p>;
                <p className="text-sm mt-2">Available 24/7, for, enterprise clients</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
export, default, ComprehensiveServicesShowcase20o26;
;