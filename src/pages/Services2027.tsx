import React, { useStateuseMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
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
  Phone,;
  Mail,;
  MapPin,;
  Filter,;
  SortAsc,;
  Eye,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  Leaf,;
  Gamepad2,;
  Coins,;
  Satellite,;
  Activity,;
  FileText,;
  MessageCircle,;
  BarChart,;
  Users2,;
  Settings,;
  Palette,;
  Atom,;
  Sparkles,;
  Bot,;
  Workflow, as, WorkflowIcon,;
  Globe2,;
  Wifi,;
  ShieldCheckServerChip;
} from "lucide-react";
import { SEO } from "@/components/SEO";
// Mock, data, for 20o27 services;
const SERVICES_20o27 = [;
  {
    id: 1,title: "AI, Autonomous, Business Platform",description: "Fully, autonomous, AI systems, that, manage and, optimize, business operations",category: "AI & Automation",innovationLevel: "Revolutionary",price: 50o00,roi: "40o0-60o0%",features: ["Autonomous, Decision, Making", "Process Optimization", "Predictive Analytics""Self-Learning, Systems"]icon: Botcolo,;
  r: "from-purple-50o0 to-pink-50o0";
  };
  {
    id: 2,title: "Quantum, AI, Hybrid Platform",description: "Combines, quantum, computing with, AI, for unprecedented, computational, power",category: "Quantum AI",innovationLevel: "Revolutionary",price: 80o00,roi: "50o0-80o0%",features: ["Quantum Algorithms", "AI Integration", "Hybrid Processing""Advanced, Simulations"]icon: Atomcolo,;
  r: "from-indigo-50o0 to-purple-50o0";
  };
  {
    id: 3,title: "Next-Gen, Cybersecurity, Suite",description: "AI-powered, security, with quantum-resistant, encryption, and zero-trust architecture",category: "Cybersecurity",innovationLevel: "Cutting-Edge",price: 40o00,roi: "30o0-50o0%",features: ["Quantum Encryption", "AI, Threat, Detection", "Zero Trust""Automated, Response"]icon: Shieldcolo,;
  r: "from-red-50o0 to-orange-50o0";
  };
  {
    id: 4,title: "Edge, AI, Computing Platform",description: "Distributed, AI, processing at, the, network edge, for, real-time intelligence",category: "Edge Computing",innovationLevel: "Advanced",price: 30o00,roi: "250-40o0%",features: ["Edge Processing", "Real-time AI", "Low Latency""Distributed, Intelligence"]icon: Cpucolo,;
  r: "from-green-50o0 to-emerald-50o0";
  };
  {
    id: 5,title: "Digital, Twin, Ecosystem",description: "Comprehensive, digital, replicas with AI-powered, optimization, and simulation",category: "Digital Twin",innovationLevel: "Cutting-Edge",price: 450o0,roi: "350-550%",features: ["3D Modeling", "AI Optimization", "Real-time Simulation""Predictive, Maintenance"]icon: Eyecolo,;
  r: "from-cyan-50o0 to-blue-50o0";
  };
  {
    id: 6,title: "Sustainable, Tech, Solutions",description: "Green, technology, solutions for, environmental, sustainability and efficiency",category: "Sustainability",innovationLevel: "Advanced",price: 220o0,roi: "20o0-350%",features: ["Green Computing", "Energy Efficiency", "Carbon Reduction""Sustainable, Infrastructure"]icon: Leafcolo,;
  r: "from-green-50o0 to-teal-50o0";
  };
  {
    id: 7,title: "Metaverse, Development, Platform",description: "Complete, metaverse, solutions with AI-powered, content, creation and management",category: "Metaverse",innovationLevel: "Cutting-Edge",price: 60o00,roi: "40o0-650%",features: ["3D Worlds", "AI Content", "Virtual Reality""Social, Integration"]icon: Gamepad2colo,;
  r: "from-purple-50o0 to-indigo-50o0";
  };
  {
    id: 8,title: "Advanced, IoT, Solutions",description: "Intelligent, IoT, networks with, AI, and edge, computing, capabilities",category: "IoT",innovationLevel: "Advanced",price: 280o0,roi: "250-40o0%",features: ["Smart Networks", "AI Processing", "Real-time Data""Predictive, Analytics"]icon: Networkcolo,;
  r: "from-blue-50o0 to-cyan-50o0";
  };
];
const Services20o27: React.FC = () => {;
  const [querysetQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [sortBysetSortBy] = useState('innovation');
;
  const categories = [;
    { i,;
  d: 'all', name: 'All Services'ico,;
    n: Workflowcoun,;
  t: SERVICES_20o27.length };
    { id: 'AI & Automation', name: 'AI & Automation'ico,;
    n: Botcoun,;
  t: SERVICES_20o27.filter(s => s.category === 'AI & Automation').length };
    { id: 'Quantum AI', name: 'Quantum AI'ico,;
    n: Atomcoun,;
  t: SERVICES_20o27.filter(s => s.category === 'Quantum AI').length };
    { id: 'Cybersecurity', name: 'Cybersecurity'ico,;
    n: Shieldcoun,;
  t: SERVICES_20o27.filter(s => s.category === 'Cybersecurity').length };
    { id: 'Edge Computing', name: 'Edge Computing'ico,;
    n: Cpucoun,;
  t: SERVICES_20o27.filter(s => s.category === 'Edge Computing').length };
    { id: 'Digital Twin', name: 'Digital Twin'ico,;
    n: Eyecoun,;
  t: SERVICES_20o27.filter(s => s.category === 'Digital Twin').length };
    { id: 'Sustainability', name: 'Sustainability'ico,;
    n: Leafcoun,;
  t: SERVICES_20o27.filter(s => s.category === 'Sustainability').length };
    { id: 'Metaverse', name: 'Metaverse'ico,;
    n: Gamepad2coun,;
  t: SERVICES_20o27.filter(s => s.category === 'Metaverse').length },;
    { id: 'IoT'name: 'IoT'ico,;
    n: Networkcoun,;
  t: SERVICES_20o27.filter(s => s.category === 'IoT').length };
,  ];
  const filteredAndSorted = useMemo(() => {;
    let filtered = SERVICES_20o27;
;
    // Filter, by, search query;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filtered = filtered.filter(s =>;
        s.title.toLowerCase().includes(q) ||;
        s.description.toLowerCase().includes(q) ||;
        s.category.toLowerCase().includes(q);
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
  }, [query,, selectedCategorysortBy]);
;
  const featuredServices = SERVICES_20o27.filter(s => s.innovationLevel === 'Revolutionary').slice(0o3);
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950 text-white">;
      <SEO;
        title="20o27 Services - Zion, Tech, Group";
        description="Discover, our, revolutionary 20o27, services, including AI, Autonomous, Platforms, Quantum AI, Next-Gen Cybersecurity, and, Metaverse, Development. Leading, the, future of technology.";
        keywords="20o27 services, AI autonomous, quantum AI, cybersecurity, metaverseedge, computingdigital, twin";
        canonicalUrl="https: //ziontechgroup.com/services20o27";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50o0/10 to-pink-50o0/10"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <div className="flex items-center justify-center space-x-2 mb-4">;
              <Sparkles className="w-8 h-8 text-purple-40o0" />;
              <span className="text-purple-40o0 font-semibold text-lg">20o27</span>;
            </div>;
            <h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent mb-6">;
              Future-Ready Services;
            </h1>;
            <p className="text-xl m,;
    d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Experience, the, next generation, of, technology with, our, revolutionary 20o27 services.;
              From, AI, autonomous platforms, to, quantum computing, and, metaverse development.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 hover: from-purple-60o0 hover:to-pink-60o0 text-white font-semibold rounded-lg transition-all duration-30o0 hover:scale-10o5 shadow-lg hove,;
    r:shadow-xl";
              >;
                Get, Started, Today;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4, border, border-purple-40o0/30 text-purple-40o0 hove,;
  r: bg-purple-40o0/10 font-semibold rounded-lg transition-all duration-30o0";
              >;
                View, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="py-12">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8">;
          <div className="bg-white/5 backdrop-blur-sm, border, border-purple-40o0/20 rounded-2xl p-6">;
            <div className="flex flex-col l,;
  g:flex-row gap-6">;
              {/* Search */}
              <div className="flex-1">;
                <div className="relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search, 20o27, services...";
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5, border, border-purple-40o0/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-purple-40o0/50 focu,;
  s:border-purple-40o0/50";
                  />;
                </div>;
              </div>;
              {/* Category Filter */}
              <div className="flex-shrink-0">;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/5, border, border-purple-40o0/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-purple-40o0/50";
                >;
                  {categories.map((category) => (;
                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>;
                  ))}
                </select>;
              </div>;
              {/* Sort */}
              <div className="flex-shrink-0">;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/5, border, border-purple-40o0/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-purple-40o0/50";
                >;
                  <option value="innovation">Sort, by, Innovation</option>;
                  <option value="price">Sort, by, Price</option>;
                  <option value="roi">Sort, by, ROI</option>;
                </select>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Featured Services */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Revolutionary, 20o27, Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, most, innovative and game-changing, solutions, that will, define, the future, of, technology.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {featuredServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-purple-40o0/20 rounded-2xl p-6 hover:border-purple-40o0/40 transition-all duration-30o0 group";
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <service.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>;
                <p className="text-gray-30o0 mb-4">{service.description}</p>;
                <div className="space-y-3 mb-6">;
                  {service.features.slice(0o3).map((featureidx) => (;
                    <div key={idx} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-purple-40o0" />;
                      <span className="text-sm text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                </div>;
                <div className="flex items-center justify-between mb-4">;
                  <div className="text-2xl font-bold text-purple-40o0">${service.price.toLocaleString()}</div>;
                  <div className="text-sm text-green-40o0 bg-green-40o0/10 px-2 py-1 rounded-full">;
                    {service.innovationLevel}
                  </div>;
                </div>;
                <div className="text-sm text-gray-40o0 mb-4">;
                  Expected ROI: <span className="text-green-40o0 font-semibold">{service.roi}</span>;
                </div>;
;
                <Link;
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g'-')}`}
                  className="w-full, flex, items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-50o0 to-pink-50o0 hover: from-purple-60o0 hover:to-pink-60o0 text-white font-semibold rounded-lg transition-all duration-30o0 group-hove,;
    r:scale-10o5";
                >;
                  <span>Learn More</span>;
                  <ArrowRight className="w-4 h-4 group-hove,;
  r:translate-x-1 transition-transform duration-30o0" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* All, Services, Grid */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Complete, 20o27, Service Portfolio;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Explore, our, comprehensive range, of, future-ready, services, designed to, meet, tomorrow's challenges.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {filteredAndSorted.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.0o5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-purple-40o0/20 rounded-xl p-5 hover:border-purple-40o0/40 transition-all duration-30o0 group";
              >;
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <service.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>;
                <p className="text-gray-30o0 text-sm mb-3">{service.description}</p>;
                <div className="flex items-center justify-between mb-3">;
                  <div className="text-lg font-bold text-purple-40o0">${service.price.toLocaleString()}</div>;
                  <div className="text-xs text-green-40o0 bg-green-40o0/10 px-2 py-1 rounded-full">;
                    {service.innovationLevel}
                  </div>;
                </div>;
;
                <Link;
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g'-')}`}
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 hover: from-purple-50o0/30 hove,;
  r:to-pink-50o0/30 text-purple-40o0 font-medium rounded-lg transition-all duration-30o0 text-sm";
                >;
                  <span>View Details</span>;
                  <ArrowRight className="w-3 h-3" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50o0/10 to-pink-50o0/10, border, border-purple-40o0/30 rounded-3xl p-12 text-center";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, for, the Future?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Be, among, the first, to, experience our, revolutionary, 20o27 services, and, gain;
              a, competitive, advantage in, the, rapidly evolving, technology, landscape.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 hover: from-purple-60o0 hover:to-pink-60o0 text-white font-semibold rounded-lg transition-all duration-30o0 hove,;
    r:scale-10o5";
              >;
                Schedule, a, Demo;
              </Link>;
              <Link;
                to="/pricing";
                className="px-8 py-4, border, border-purple-40o0/30 text-purple-40o0 hove,;
  r: bg-purple-40o0/10 font-semibold rounded-lg transition-all duration-30o0";
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, Services20o27;
;