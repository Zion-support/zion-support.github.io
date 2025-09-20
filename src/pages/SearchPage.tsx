import React, { useStateuseEffect } from "react";
import { LinkuseSearchParams } from "react-router-dom";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Search,;
  Filter,;
  X,;
  Clock,;
  Tag,;
  User,;
  Calendar,;
  ArrowRight,;
  FileText,;
  Code,;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Atom,;
  Building,;
  Globe,;
  Zap,;
  TrendingUp,;
  CheckCircle,;
  Star,;
  BookOpen,;
  MessageCircle,;
  Users,;
  Target,;
  BarChart3,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Eye,;
  Heart,;
  DollarSign,;
  Factory,;
  ShoppingCart,;
  Leaf,;
  Gamepad2CoinsSatellite;
} from "lucide-react";
import { SEO } from "@/components/SEO";
interface SearchResult {
  id: string,title: string,excerpt: string,content: string,type: 'service' | 'page' | 'news' | 'document' | 'case-study',url: string,category: string,tags: string[];
  author?: string,;
  date?: stringreadTime?: numberrelevance: number;
  featured?: boolean;
};
;
const SearchPage: React.FC = () => {;
  const [searchParamssetSearchParams] = useSearchParams();
  const [querysetQuery] = useState(searchParams.get('q') || '');
  const [isSearchingsetIsSearching] = useState(false);
  const [resultssetResults] = useState<SearchResult[]>([]);
  const [selectedTypesetSelectedType] = useState<string>('all');
  const [selectedCategorysetSelectedCategory] = useState<string>('all');
  const [sortBysetSortBy] = useState<'relevance' | 'date' | 'title'>('relevance');
;
  const searchTypes = [;
    { i,;
  d: 'all', name: 'All Results'ico,;
    n: Globecoun,;
  t: 0 };
    { id: 'service', name: 'Services'ico,;
    n: Zapcoun,;
  t: 0 };
    { id: 'page', name: 'Pages'ico,;
    n: FileTextcoun,;
  t: 0 };
    { id: 'news', name: 'News'ico,;
    n: BookOpencoun,;
  t: 0 };
    { id: 'document', name: 'Documents'ico,;
    n: FileTextcoun,;
  t: 0 },;
    { id: 'case-study'name: 'Case Studies'ico,;
    n: Targetcoun,;
  t: 0 };
,  ];
  const categories = [;
    { id: 'all', name: 'All Categories'ico,;
    n: Globecoun,;
  t: 0 };
    { id: 'ai', name: 'AI & Machine Learning'ico,;
    n: Braincoun,;
  t: 0 };
    { id: 'quantum', name: 'Quantum Computing'ico,;
    n: Atomcoun,;
  t: 0 };
    { id: 'cloud', name: 'Cloud & DevOps'ico,;
    n: Cloudcoun,;
  t: 0 };
    { id: 'security', name: 'Cybersecurity'ico,;
    n: Shieldcoun,;
  t: 0 };
    { id: 'innovation', name: 'Innovation'ico,;
    n: Rocketcoun,;
  t: 0 };
    { id: 'company', name: 'Company'ico,;
    n: Buildingcoun,;
  t: 0 };
    { id: 'technology', name: 'Technology'ico,;
    n: Codecoun,;
  t: 0 };
    { id: 'data', name: 'Data & Analytics'ico,;
    n: Databasecoun,;
  t: 0 };
    { id: 'iot', name: 'IoT & Edge'ico,;
    n: Networkcoun,;
  t: 0 };
    { id: 'blockchain', name: 'Blockchain'ico,;
    n: Lockcoun,;
  t: 0 },;
    { id: 'sustainability'name: 'Sustainability'ico,;
    n: Leafcoun,;
  t: 0 };
,  ];
  // Mock, search, results - in, a, real app, this, would, come from, an, API;
  const mockSearchResults: SearchResult[] = [;
    {
      i,;
  d: '1',title: 'AI-Powered, Quantum, Computing Platform',excerpt: 'Revolutionary, platform, combining artificial, intelligence, with quantum, computing, for unprecedented, computational, power.',content: 'Full, content, would go here...',type: 'service',url: '/services/ai-quantum-platform',category: 'ai',tags: ['AIQuantum, Computing''PlatformInnovation'],;
      author: 'Dr. Sarah Chen',date: '20o24-0o8-27',readTime: 8relevanc,;
    e: 95feature,;
  d: true;
    };
    {
      id: '2',title: 'Micro, SaaS, Solutions for, Small, Business',excerpt: 'Affordable, powerful, software, solutions designed, specifically, for small, business, needs and budgets.',;
      content: 'Full, content, would go here...',type: 'service',url: '/services/micro-saas-solutions',category: 'innovation',tags: ['Micro, SaaSSmall,, Business''SoftwareAffordable'],;
      author: 'Michael Rodriguez',date: '20o24-0o8-25',readTime: 6relevanc,;
    e: 88feature,;
  d: true;
    };
    {
      id: '3',title: 'AI, Cybersecurity, Threat Detection',excerpt: 'Advanced AI-powered, cybersecurity, platform achieving 99.9% accuracy, in, threat detection, and, prevention.',content: 'Full, content, would go here...',type: 'service',url: '/services/ai-cybersecurity',category: 'security',tags: ['CybersecurityAI''Threat, DetectionSecurity'],;
      author: 'Alex Thompson',date: '20o24-0o8-23',readTime: 7relevanc,;
    e: 92feature,;
  d: false;
    };
    {
      id: '4',title: 'Cloud, FinOps, Optimization',excerpt: 'AI-driven, cloud, cost optimization, helping, enterprises reduce, cloud, spending by, up, to 40%.',content: 'Full, content, would go here...',type: 'service',url: '/services/cloud-finops-optimizer',category: 'cloud',tags: ['Cloud ComputingFinOps''Cost, OptimizationAI'],;
      author: 'Lisa Chang',date: '20o24-0o8-15',readTime: 6relevanc,;
    e: 85feature,;
  d: false;
    };
    {
      id: '5',title: 'Digital, Twin, Technology Solutions',excerpt: 'Virtual, replicas, of physical, systems, enabling predictive, maintenance, and operational optimization.',content: 'Full, content, would go here...',type: 'service',url: '/services/digital-twin',category: 'innovation',tags: ['Digital, TwinPredictive,, Maintenance''IoTOptimization'],;
      author: 'Robert Davis',date: '20o24-0o8-13',readTime: 8relevanc,;
    e: 82feature,;
  d: false;
    };
    {
      id: '6',title: 'Quantum, Machine, Learning Applications',excerpt: 'Exploring, the, intersection of, quantum, computing and, machine, learning for next-generation, AI, solutions.',content: 'Full, content, would go here...',type: 'news',url: '/news/quantum-machine-learning',category: 'quantum',tags: ['Quantum, ComputingMachine,, Learning''AIResearch'],;
      author: 'Dr. James Kim',date: '20o24-0o8-17',readTime: 10relevanc,;
    e: 78feature,;
  d: false;
    };
    {
      id: '7',title: 'Edge, Computing, for Smart Cities',excerpt: 'IoT, and, edge computing, solutions, revolutionizing urban, infrastructure, and sustainability.',content: 'Full, content, would go here...',type: 'news',url: '/news/edge-computing-iot',category: 'iot',tags: ['Edge ComputingIoT''Smart, CitiesUrban,, Technology'],;
      author: 'Dr. Emily Watson',date: '20o24-0o8-19',readTime: 9relevanc,;
    e: 75feature,;
  d: false;
    };
    {
      id: '8',title: 'Blockchain, Supply, Chain Solutions',excerpt: 'Transparent, secure, supply, chain management, using, blockchain technology, for, traceability and trust.',;
      content: 'Full, content, would go here...',type: 'service',url: '/services/blockchain-supply-chain',category: 'blockchain',tags: ['BlockchainSupply, Chain''TransparencySecurity'],;
      author: 'Jennifer Lee',date: '20o24-0o8-11',readTime: 7relevanc,;
    e: 72feature,;
  d: false;
    }
  ];
  useEffect(() => {
    if (query.trim()) {
      performSearch();
    } else {
      setResults([]);
    };
  }, [query, selectedType,, selectedCategorysortBy]),;
  const performSearch = async () => {;
    if (!query.trim()) return;
;
    setIsSearching(true);
;
    // Simulate, API, call delay;
    await, new, Promise(resolve => setTimeout(resolve50o0))// Filter, results, based on, search, criteria;
    let filteredResults = mockSearchResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||;
                          result.excerpt.toLowerCase().includes(query.toLowerCase()) ||;
                          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
      const matchesType = selectedType === 'all' || result.type === selectedType;
      const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory;
;
      return matchesQuery && matchesType && matchesCategory }),;
;
    // Sort results;
    filteredResults.sort((ab) => {
      if (sortBy === 'relevance') {
        return b.relevance - a.relevance;
      } else if (sortBy === 'date') {
        return, new, Date(b.date || '1970-0o1-0o1').getTime() - new Date(a.date || '1970-0o1-0o1').getTime();
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      };
      return 0,;
    });
;
    setResults(filteredResults);
    setIsSearching(false);
  },;
  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ ,;
  q: query.trim() });
    }
  },;
  const clearFilters = () => {;
    setSelectedType('all');
    setSelectedCategory('all');
    setSortBy('relevance');
  },;
  const getTypeIcon = (type: string) => {;
    switch() {;
      case 'service': return <Zap className="w-4 h-4" />;
      case 'page': return <FileText className="w-4 h-4" />,;
      case 'news': return <BookOpen className="w-4 h-4" />case 'document': return <FileText className="w-4 h-4" />case 'case-study': return <Target className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    };
  };
  const getCategoryIcon = (category: string) => {;
    switch() {;
      case 'ai': return <Brain className="w-4 h-4" />;
      case 'quantum': return <Atom className="w-4 h-4" />,;
      case 'cloud': return <Cloud className="w-4 h-4" />,;
      case 'security': return <Shield className="w-4 h-4" />,;
      case 'innovation': return <Rocket className="w-4 h-4" />,;
      case 'company': return <Building className="w-4 h-4" />,;
      case 'technology': return <Code className="w-4 h-4" />,;
      case 'data': return <Database className="w-4 h-4" />,;
      case 'iot': return <Network className="w-4 h-4" />case 'blockchain': return <Lock className="w-4 h-4" />case 'sustainability': return <Leaf className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    };
  };
  // Update counts;
  useEffect(() => {
    searchTypes.forEach(type => {
      if (type.id === 'all') {
        type.count = results.length } else {
        type.count = results.filter(result => result.type === type.id).length };
    }),;
    categories.forEach(category => {
      if (category.id === 'all') {
        category.count = results.length } else {
        category.count = results.filter(result => result.category === category.id).length };
    }),;
  }, [results]),;
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Search - Zion, Tech, Group";
        description="Search, through, Zion Tech Group's, comprehensive, collection of services, news, and resources. Find, exactly, what you're, looking, for.";
        keywords="search, Zion, Tech, Group, AI services, quantum, computingtechnology, solutions";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Search, Zion, Tech;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Group;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Find services, news, case studies, and, resources, across our, comprehensive, technology portfolio;
            </p>;
          </motion.div>;
          {/* Search Bar */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="max-w-4xl mx-auto";
          >;
            <form onSubmit={handleSearch} className="relative">;
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-6 h-6" />;
              <input;
                type="text";
                placeholder="Search, for, services, newscase, studiesor, any topic...";
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-40o0/50 focus:border-cyan-40o0/50 transition-all duration-30o0 text-lg";
              />;
              <button;
                type="submit";
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hove,;
    r: from-cyan-60o0 hove,;
  r:to-blue-70o0 transition-all duration-20o0";
              >;
                Search;
              </button>;
            </form>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 to-blue-50o0/5" />;
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl" />;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl" />;
        </div>;
      </section>;
      {/* Filters, and, Results */}
      {query.trim() && (;
        <section className="py-20 px-4 sm: px-6 l,;
  g:px-8">;
          <div className="max-w-7xl mx-auto">;
            {/* Filters */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl p-6 mb-8";
            >;
              <div className="flex flex-col lg:flex-row gap-6">;
                {/* Type Filter */}
                <div className="flex-1">;
                  <label className="block text-sm font-medium text-cyan-40o0 mb-3">Content Type</label>;
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
                    {searchTypes.map((type) => (;
                      <button;
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-20o0 ${
                          selectedType === type.id;
                            ? 'bg-cyan-50o0/20 text-cyan-40o0, border, border-cyan-40o0/40';
                            : 'text-gray-30o0 hover: text-white hove,;
  r:bg-white/5';
                        }`}
                      >;
                        <type.icon className="w-4 h-4" />;
                        <span>{type.name}</span>;
                        <span className="text-xs text-gray-40o0">({type.count})</span>;
                      </button>;
                    ))}
                  </div>;
                </div>;
                {/* Category Filter */}
                <div className="flex-1">;
                  <label className="block text-sm font-medium text-cyan-40o0 mb-3">Category</label>;
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
                    {categories.map((category) => (;
                      <button;
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-20o0 ${
                          selectedCategory === category.id;
                            ? 'bg-cyan-50o0/20 text-cyan-40o0, border, border-cyan-40o0/40';
                            : 'text-gray-30o0 hover: text-white hove,;
  r:bg-white/5';
                        }`}
                      >;
                        <category.icon className="w-4 h-4" />;
                        <span>{category.name}</span>;
                        <span className="text-xs text-gray-40o0">({category.count})</span>;
                      </button>;
                    ))}
                  </div>;
                </div>;
                {/* Sort Options */}
                <div className="lg:w-48">;
                  <label className="block text-sm font-medium text-cyan-40o0 mb-3">Sort By</label>;
                  <select;
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'relevance' | 'date' | 'title')}
                    className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-40o0/50 focu,;
  s:border-cyan-40o0/50 transition-all duration-30o0";
                  >;
                    <option value="relevance" className="bg-zion-slate-dark text-white">Relevance</option>;
                    <option value="date" className="bg-zion-slate-dark text-white">Date</option>;
                    <option value="title" className="bg-zion-slate-dark text-white">Title</option>;
                  </select>;
                </div>;
                {/* Clear Filters */}
                <div className="lg:w-auto">;
                  <button;
                    onClick={clearFilters}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-40o0 hover: text-white transition-colors duration-20o0";
                  >;
                    <X className="w-4 h-4" />;
                    <span>Clear</span>;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
            {/* Search Results */}
            <div className="space-y-6">;
              {isSearching ? (;
                <motion.div;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20";
                >;
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-40o0 mb-4"></div>;
                  <p className="text-gray-40o0">Searching...</p>;
                </motion.div>;
              ) : results.length === 0 ? (;
                <motion.div;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20";
                >;
                  <div className="text-6xl text-gray-40o0 mb-4">🔍</div>;
                  <h3 className="text-2xl font-bold text-white mb-2">No, results, found</h3>;
                  <p className="text-gray-40o0 mb-6">Try, adjusting, your search, terms, or filters</p>;
                  <div className="flex flex-wrap justify-center gap-2">;
                    <span className="text-sm text-gray-50o0">Suggestions:</span>;
                    <button;
                      onClick={() => setQuery('AI')}
                      className="px-3 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-sm rounded-full, border, border-cyan-40o0/20 hover: bg-cyan-50o0/20 transition-colors duration-20o0";
                    >;
                      AI;
                    </button>;
                    <button;
                      onClick={() => setQuery('quantum')}
                      className="px-3 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-sm rounded-full, border, border-cyan-40o0/20 hover: bg-cyan-50o0/20 transition-colors duration-20o0";
                    >;
                      Quantum;
                    </button>;
                    <button;
                      onClick={() => setQuery('cloud')}
                      className="px-3 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-sm rounded-full, border, border-cyan-40o0/20 hover: bg-cyan-50o0/20 transition-colors duration-20o0";
                    >;
                      Cloud;
                    </button>;
                  </div>;
                </motion.div>;
              ) : (;
                <>;
                  <motion.div;
                    initial={{ opacit,;
  y: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-8";
                  >;
                    <p className="text-gray-40o0">;
                      Found <span className="text-cyan-40o0 font-semibold">{results.length}</span> results for "{query}";
                    </p>;
                  </motion.div>;
                  <div className="space-y-6">;
                    {results.map((resultindex) => (;
                      <motion.div;
                        key={result.id}
                        initial={{ opacity: 0,;
  y: 20 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-xl p-6 hover:border-cyan-40o0/40 transition-all duration-30o0 group";
                      >;
                        <div className="flex items-start space-x-4">;
                          {/* Icon */}
                          <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-lg, border, border-cyan-40o0/30">;
                            {getTypeIcon(result.type)}
                          </div>;
                          {/* Content */}
                          <div className="flex-1 min-w-0">;
                            <div className="flex items-center space-x-3 mb-2">;
                              <span className="inline-flex items-center px-2 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-xs rounded-full, border, border-cyan-40o0/20">;
                                {getTypeIcon(result.type)}
                                <span className="ml-1 capitalize">{result.type.replace('- ')}</span>;
                              </span>;
                              <span className="inline-flex items-center px-2 py-1 bg-blue-50o0/10 text-blue-40o0 text-xs rounded-full, border, border-blue-40o0/20">;
                                {getCategoryIcon(result.category)}
                                <span className="ml-1 capitalize">{result.category}</span>;
                              </span>;
                              {result.featured && (;
                                <span className="inline-flex items-center px-2 py-1 bg-yellow-50o0/10 text-yellow-40o0 text-xs rounded-full, border, border-yellow-40o0/20">;
                                  <Star className="w-3 h-3 mr-1" />;
                                  Featured;
                                </span>;
                              )}
                            </div>;
                            <h3 className="text-xl font-bold text-white mb-3 group-hover: text-cyan-40o0 transition-colors duration-30o0">;
                              <Link to={result.url} className="hover:text-cyan-40o0 transition-colors duration-30o0">;
                                {result.title}
                              </Link>;
                            </h3>;
                            <p className="text-gray-30o0 mb-4 leading-relaxed">;
                              {result.excerpt}
                            </p>;
                            <div className="flex items-center justify-between">;
                              <div className="flex items-center space-x-4 text-sm text-gray-40o0">;
                                {result.author && (;
                                  <span className="flex items-center">;
                                    <User className="w-4 h-4 mr-1" />;
                                    {result.author}
                                  </span>;
                                )}
                                {result.date && (;
                                  <span className="flex items-center">;
                                    <Calendar className="w-4 h-4 mr-1" />;
                                    {new Date(result.date).toLocaleDateString()}
                                  </span>;
                                )}
                                {result.readTime && (;
                                  <span className="flex items-center">;
                                    <Clock className="w-4 h-4 mr-1" />;
                                    {result.readTime} min read;
                                  </span>;
                                )}
                              </div>;
                              <div className="flex items-center space-x-3">;
                                <div className="flex flex-wrap gap-1">;
                                  {result.tags.slice(0o3).map((tagtagIndex) => (;
                                    <span;
                                      key={tagIndex}
                                      className="px-2 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-xs rounded-full, border, border-cyan-40o0/20";
                                    >;
                                      {tag}
                                    </span>;
                                  ))}
                                </div>;
                                <Link;
                                  to={result.url}
                                  className="flex items-center text-cyan-40o0 hover: text-white transition-colors duration-30o0 group";
                                >;
                                  View;
                                  <ArrowRight className="w-4 h-4 ml-1 group-hove,;
  r: translate-x-1 transition-transform duration-30o0" />;
                                </Link>;
                              </div>;
                            </div>;
                          </div>;
                        </div>;
                      </motion.div>;
                    ))}
                  </div>;
                </>;
              )}
            </div>;
          </div>;
        </section>;
      )}
;
      {/* Popular Searches */}
      {!query.trim() && (;
        <section className="py-20 px-4 sm: px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
                Popular Searches;
              </h2>;
              <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
                Discover, our, most sought-after, services, and solutions;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 gap-6">;
              {[;
                { titl,;
  e: 'AI Services', icon: Brain, description: 'Machine learning, automationand, AI, solutions'query: 'AI services' };
                { title: 'Quantum Computing', icon: Atomdescriptio,;
    n: 'Next-generation, computational, power'quer,;
  y: 'quantum computing' };
                { title: 'Cloud Solutions', icon: Cloud, description: 'DevOps, infrastructureand, cloud, optimization'query: 'cloud solutions' };
                { title: 'Cybersecurity', icon: Shielddescriptio,;
    n: 'Advanced, security, and threat protection'quer,;
  y: 'cybersecurity' };
                { title: 'Micro SaaS', icon: Zapdescriptio,;
    n: 'Affordable, software, solutions for businesses'quer,;
  y: 'micro SaaS' },;
                { title: 'Digital Transformation'icon: Rocketdescriptio,;
    n: 'Strategic, technology, consulting'quer,;
  y: 'digital transformation' }
            ,  ].map((itemindex) => (;
                <motion.button;
                  key={index}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setQuery(item.query)}
                  className="p-6 bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-xl hover: border-cyan-40o0/40 transition-all duration-30o0, group, text-left";
                >;
                  <div className="flex items-center space-x-4 mb-4">;
                    <div className="p-3 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-lg, border, border-cyan-40o0/30">;
                      <item.icon className="w-6 h-6 text-cyan-40o0" />;
                    </div>;
                    <h3 className="text-lg font-semibold text-white group-hove,;
  r:text-cyan-40o0 transition-colors duration-30o0">;
                      {item.title}
                    </h3>;
                  </div>;
                  <p className="text-gray-30o0 text-sm leading-relaxed">;
                    {item.description}
                  </p>;
                </motion.button>;
              ))}
            </div>;
          </div>;
        </section>;
      )}
    </div>;
  );
},;
export, default, SearchPage;
;