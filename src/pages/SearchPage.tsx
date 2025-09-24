import React, { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ;
  Search,;
  Filter, ;
  X, ;
  Clock, ;
  Tag, ;
  User, ;
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
  Gamepad2,;
  Coins,;
  Satellite;
} from "lucide-react"
import { SEO } from "@/components/SEO"
interface SearchResult {;
  id: string,title: string,excerpt: string,content: string,type: 'service' | 'page' | 'news' | 'document' | 'case-study',url: string,category: string,tags: string[]
  author?: string,;
  date?: string,;
  readTime?: number,;
  relevance: number;
  featured?: boolean;
};

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams(),;
  const [query, setQuery] = useState(searchParams.get('q') || ''),
  const [isSearching, setIsSearching] = useState(false),;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [selectedType, setSelectedType] = useState<string>('all'),;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title'>('relevance'),;

  const searchTypes = [;
    { id: 'all', name: 'All Results', icon: Globe, count: 0 };
    { id: 'service', name: 'Services', icon: Zap, count: 0 };
    { id: 'page', name: 'Pages', icon: FileText, count: 0 };
    { id: 'news', name: 'News', icon: BookOpen, count: 0 };
    { id: 'document', name: 'Documents', icon: FileText, count: 0 };
    { id: 'case-study', name: 'Case Studies', icon: Target, count: 0 };
  ];
  const categories = [;
    { id: 'all', name: 'All Categories', icon: Globe, count: 0 };
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 0 };
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 };
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 };
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 };
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 0 };
    { id: 'company', name: 'Company', icon: Building, count: 0 };
    { id: 'technology', name: 'Technology', icon: Code, count: 0 };
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 0 };
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: 0 };
    { id: 'blockchain', name: 'Blockchain', icon: Lock, count: 0 };
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, count: 0 };
  ];
  //[^;]*
  const mockSearchResults: SearchResult[] = [;
    {;
      id: '1',title: 'AI-Powered Quantum Computing Platform',excerpt: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power.',content: 'Full content would go here...',type: 'service',url: '/services/ai-quantum-platform',category: 'ai',tags: ['AIQuantum Computing', 'PlatformInnovation'],;
      author: 'Dr. Sarah Chen',date: '2024-08-27',readTime: 8,relevance: 95,featured: true;
    };
    {;
      id: '2',title: 'Micro SaaS Solutions for Small Business',excerpt: 'Affordable, powerful software solutions designed specifically for small business needs and budgets.',;
      content: 'Full content would go here...',type: 'service',url: '/services/micro-saas-solutions',category: 'innovation',tags: ['Micro SaaSSmall Business', 'SoftwareAffordable'],;
      author: 'Michael Rodriguez',date: '2024-08-25',readTime: 6,relevance: 88,featured: true;
    };
    {;
      id: '3',title: 'AI Cybersecurity Threat Detection',excerpt: 'Advanced AI-powered cybersecurity platform achieving 99.9% accuracy in threat detection and prevention.',content: 'Full content would go here...',type: 'service',url: '/services/ai-cybersecurity',category: 'security',tags: ['CybersecurityAI', 'Threat DetectionSecurity'],;
      author: 'Alex Thompson',date: '2024-08-23',readTime: 7,relevance: 92,featured: false;
    };
    {;
      id: '4',title: 'Cloud FinOps Optimization',excerpt: 'AI-driven cloud cost optimization helping enterprises reduce cloud spending by up to 40%.',content: 'Full content would go here...',type: 'service',url: '/services/cloud-finops-optimizer',category: 'cloud',tags: ['Cloud ComputingFinOps', 'Cost OptimizationAI'],;
      author: 'Lisa Chang',date: '2024-08-15',readTime: 6,relevance: 85,featured: false;
    };
    {;
      id: '5',title: 'Digital Twin Technology Solutions',excerpt: 'Virtual replicas of physical systems enabling predictive maintenance and operational optimization.',content: 'Full content would go here...',type: 'service',url: '/services/digital-twin',category: 'innovation',tags: ['Digital TwinPredictive Maintenance', 'IoTOptimization'],;
      author: 'Robert Davis',date: '2024-08-13',readTime: 8,relevance: 82,featured: false;
    };
    {;
      id: '6',title: 'Quantum Machine Learning Applications',excerpt: 'Exploring the intersection of quantum computing and machine learning for next-generation AI solutions.',content: 'Full content would go here...',type: 'news',url: '/news/quantum-machine-learning',category: 'quantum',tags: ['Quantum ComputingMachine Learning', 'AIResearch'],;
      author: 'Dr. James Kim',date: '2024-08-17',readTime: 10,relevance: 78,featured: false;
    };
    {;
      id: '7',title: 'Edge Computing for Smart Cities',excerpt: 'IoT and edge computing solutions revolutionizing urban infrastructure and sustainability.',content: 'Full content would go here...',type: 'news',url: '/news/edge-computing-iot',category: 'iot',tags: ['Edge ComputingIoT', 'Smart CitiesUrban Technology'],;
      author: 'Dr. Emily Watson',date: '2024-08-19',readTime: 9,relevance: 75,featured: false;
    };
    {;
      id: '8',title: 'Blockchain Supply Chain Solutions',excerpt: 'Transparent, secure supply chain management using blockchain technology for traceability and trust.',;
      content: 'Full content would go here...',type: 'service',url: '/services/blockchain-supply-chain',category: 'blockchain',tags: ['BlockchainSupply Chain', 'TransparencySecurity'],;
      author: 'Jennifer Lee',date: '2024-08-11',readTime: 7,relevance: 72,featured: false;
    };
  ];
  useEffect(() => {;
    if (query.trim()) {;
      performSearch(),;
    } else {;
      setResults([]),;
    };
  }, [query, selectedType, selectedCategory, sortBy]),;

  const performSearch = async () => {;
    if (!query.trim()) return,;

    setIsSearching(true),;
    ;
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 500)),;

    //[^;]*
    let filteredResults = mockSearchResults.filter(result => {;
      const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||;
                          result.excerpt.toLowerCase().includes(query.toLowerCase()) ||;
                          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())),;
      const matchesType = selectedType === 'all' || result.type === selectedType
      const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory
      ;
      return matchesQuery && matchesType && matchesCategory,;&& matchesType && matchesCategory,; matchesType && matchesCategory,
    }),;

    //[^;]*
    filteredResults.sort((a, b) => {;
      if (sortBy === 'relevance') {;
        return b.relevance - a.relevance,;
      } else if (sortBy === 'date') {;
        return new Date(b.date || '1970-01-01').getTime() - new Date(a.date || '1970-01-01').getTime(),
      } else if (sortBy === 'title') {;
        return a.title.localeCompare(b.title),;
      };
      return 0,;
    }),;

    setResults(filteredResults),;
    setIsSearching(false),;
  },;

  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault()
    if (query.trim()) {;
      setSearchParams({ q: query.trim() });
    };
  },;

  const clearFilters = () => {;
    setSelectedType('all'),;
    setSelectedCategory('all'),;
    setSortBy('relevance'),;
  },;

  const getTypeIcon = (type: string) => {;
    switch (type) {;
      case 'service': return <[^>]*/>
      case 'page': return <FileText className="w-4 h-4" />,;
      case 'news': return <BookOpen className="w-4 h-4" />,;
      case 'document': return <FileText className="w-4 h-4" />,;
      case 'case-study': return <Target className="w-4 h-4" />,;
      default: return <[^>]*/>
    };
  };
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'ai': return <[^>]*/>
      case 'quantum': return <Atom className="w-4 h-4" />,;
      case 'cloud': return <Cloud className="w-4 h-4" />,;
      case 'security': return <Shield className="w-4 h-4" />,;
      case 'innovation': return <Rocket className="w-4 h-4" />,;
      case 'company': return <Building className="w-4 h-4" />,;
      case 'technology': return <Code className="w-4 h-4" />,;
      case 'data': return <Database className="w-4 h-4" />,;
      case 'iot': return <Network className="w-4 h-4" />,;
      case 'blockchain': return <Lock className="w-4 h-4" />,;
      case 'sustainability': return <Leaf className="w-4 h-4" />,;
      default: return <[^>]*/>
    };
  };
  //[^;]*
  useEffect(() => {;
    searchTypes.forEach(type => {;
      if (type.id === 'all') {;
        type.count = results.length,;
      } else {;
        type.count = results.filter(result => result.type === type.id).length,;
      };
    }),;

    categories.forEach(category => {;
      if (category.id === 'all') {;
        category.count = results.length,;
      } else {;
        category.count = results.filter(result => result.category === category.id).length,;
      };
    }),;
  }, [results]),;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO ;
        title="Search - Zion Tech Group"
        description="Search through Zion Tech Group's comprehensive collection of services, news, and resources. Find exactly what you're looking for."
        keywords="search, Zion Tech Group, AI services, quantum computing, technology solutions"
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Search Zion Tech;
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Group;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Find services, news, case studies, and resources across our comprehensive technology portfolio;
            </[^>]*>
          </[^>]*>

          {/* Search Bar */};
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.2 }};
            className="[^"]*"
          >;
            <form onSubmit={handleSearch} className="relative">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search for services, news, case studies, or any topic..."
                value={query};
                onChange={(e) => setQuery(e.target.value)};
                className="[^"]*"
              />;
              <button;
                type="submit"
                className="[^"]*"
              >;
                Search;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Background Elements */};
        <div className="absolute inset-0 -z-10">;
          <[^>]*/>
          <[^>]*/>
          <[^>]*/>
        </[^>]*>
      </[^>]*>

      {/* Filters and Results */};
      {query.trim() && (;&& (; (
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            {/* Filters */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6 }};
              className="[^"]*"
            >;
              <div className="flex flex-col lg:flex-row gap-6">;
                {/* Type Filter */};
                <div className="flex-1">;
                  <label className="block text-sm font-medium text-cyan-400 mb-3">Content Type</[^>]*>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
                    {searchTypes.map((type) => (;
                      <button;
                        key={type.id};
                        onClick={() => setSelectedType(type.id)};
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${;
                          selectedType === type.id
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`};
                      >;
                        <[^>]*/>
                        <span>{type.name}</[^>]*>
                        <span className="text-xs text-gray-400">({type.count})</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Category Filter */};
                <div className="flex-1">;
                  <label className="block text-sm font-medium text-cyan-400 mb-3">Category</[^>]*>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
                    {categories.map((category) => (;
                      <button;
                        key={category.id};
                        onClick={() => setSelectedCategory(category.id)};
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${;
                          selectedCategory === category.id
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`};
                      >;
                        <[^>]*/>
                        <span>{category.name}</[^>]*>
                        <span className="text-xs text-gray-400">({category.count})</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Sort Options */};
                <div className="lg:w-48">;
                  <label className="block text-sm font-medium text-cyan-400 mb-3">Sort By</[^>]*>
                  <select;
                    value={sortBy};
                    onChange={(e) => setSortBy(e.target.value as 'relevance' | 'date' | 'title')};
                    className="[^"]*"
                  >;
                    <option value="relevance" className="bg-zion-slate-dark text-white">Relevance</[^>]*>
                    <option value="date" className="bg-zion-slate-dark text-white">Date</[^>]*>
                    <option value="title" className="bg-zion-slate-dark text-white">Title</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Clear Filters */};
                <div className="lg:w-auto">;
                  <button;
                    onClick={clearFilters};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    <span>Clear</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Search Results */};
            <div className="space-y-6">;
              {isSearching ? (;
                <motion.div
                  initial={{ opacity: 0 }};
                  animate={{ opacity: 1 }};
                  className="[^"]*"
                >;
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mb-4"></[^>]*>
                  <p className="text-gray-400">Searching...</[^>]*>
                </[^>]*>
              ) : results.length === 0 ? (;
                <motion.div
                  initial={{ opacity: 0 }};
                  animate={{ opacity: 1 }};
                  className="[^"]*"
                >;
                  <div className="text-6xl text-gray-400 mb-4">🔍</[^>]*>
                  <h3 className="text-2xl font-bold text-white mb-2">No results found</[^>]*>
                  <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</[^>]*>
                  <div className="flex flex-wrap justify-center gap-2">;
                    <span className="text-sm text-gray-500">Suggestions:</[^>]*>
                    <button;
                      onClick={() => setQuery('AI')};
                      className="[^"]*"
                    >;
                      AI;
                    </[^>]*>
                    <button;
                      onClick={() => setQuery('quantum')};
                      className="[^"]*"
                    >;
                      Quantum;
                    </[^>]*>
                    <button;
                      onClick={() => setQuery('cloud')};
                      className="[^"]*"
                    >;
                      Cloud;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ) : (;
                <>;
                  <motion.div
                    initial={{ opacity: 0 }};
                    animate={{ opacity: 1 }};
                    className="[^"]*"
                  >;
                    <p className="text-gray-400">;
                      Found <span className="text-cyan-400 font-semibold">{results.length}</span> results for "{query}"
                    </[^>]*>
                  </[^>]*>

                  <div className="space-y-6">;
                    {results.map((result, index) => (;
                      <motion.div
                        key={result.id};
                        initial={{ opacity: 0, y: 20 }};
                        animate={{ opacity: 1, y: 0 }};
                        transition={{ duration: 0.6, delay: index * 0.1 }};
                        className="[^"]*"
                      >;
                        <div className="flex items-start space-x-4">;
                          {/* Icon */};
                          <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">;
                            {getTypeIcon(result.type)};
                          </[^>]*>

                          {/* Content */};
                          <div className="flex-1 min-w-0">;
                            <div className="flex items-center space-x-3 mb-2">;
                              <span className="inline-flex items-center px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20">;
                                {getTypeIcon(result.type)};
                                <span className="ml-1 capitalize">{result.type.replace('- ')}</[^>]*>
                              </[^>]*>
                              <span className="inline-flex items-center px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-400/20">;
                                {getCategoryIcon(result.category)};
                                <span className="ml-1 capitalize">{result.category}</[^>]*>
                              </[^>]*>
                              {result.featured && (;&& (; (
                                <span className="inline-flex items-center px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-400/20">;
                                  <[^>]*/>
                                  Featured;
                                </[^>]*>
                              )};
                            </[^>]*>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">;
                              <Link to={result.url} className="hover:text-cyan-400 transition-colors duration-300">;
                                {result.title};
                              </[^>]*>
                            </[^>]*>

                            <p className="text-gray-300 mb-4 leading-relaxed">;
                              {result.excerpt};
                            </[^>]*>

                            <div className="flex items-center justify-between">;
                              <div className="flex items-center space-x-4 text-sm text-gray-400">;
                                {result.author && (;&& (; (
                                  <span className="flex items-center">;
                                    <[^>]*/>
                                    {result.author};
                                  </[^>]*>
                                )};
                                {result.date && (;&& (; (
                                  <span className="flex items-center">;
                                    <[^>]*/>
                                    {new Date(result.date).toLocaleDateString()};
                                  </[^>]*>
                                )};
                                {result.readTime && (;&& (; (
                                  <span className="flex items-center">;
                                    <[^>]*/>
                                    {result.readTime} min read;
                                  </[^>]*>
                                )};
                              </[^>]*>

                              <div className="flex items-center space-x-3">;
                                <div className="flex flex-wrap gap-1">;
                                  {result.tags.slice(0, 3).map((tag, tagIndex) => (;
                                    <span;
                                      key={tagIndex};
                                      className="[^"]*"
                                    >;
                                      {tag};
                                    </[^>]*>
                                  ))};
                                </[^>]*>
                                ;
                                <Link;
                                  to={result.url};
                                  className="[^"]*"
                                >;
                                  View;
                                  <[^>]*/>
                                </[^>]*>
                              </[^>]*>
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              )};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* Popular Searches */};
      {!query.trim() && (;&& (; (
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Popular Searches;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
                Discover our most sought-after services and solutions;
              </[^>]*>
            </[^>]*>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {[;
                { title: 'AI Services', icon: Brain, description: 'Machine learning, automation, and AI solutions', query: 'AI services' };
                { title: 'Quantum Computing', icon: Atom, description: 'Next-generation computational power', query: 'quantum computing' };
                { title: 'Cloud Solutions', icon: Cloud, description: 'DevOps, infrastructure, and cloud optimization', query: 'cloud solutions' };
                { title: 'Cybersecurity', icon: Shield, description: 'Advanced security and threat protection', query: 'cybersecurity' };
                { title: 'Micro SaaS', icon: Zap, description: 'Affordable software solutions for businesses', query: 'micro SaaS' };
                { title: 'Digital Transformation', icon: Rocket, description: 'Strategic technology consulting', query: 'digital transformation' };
              ].map((item, index) => (;
                <motion.button
                  key={index};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  onClick={() => setQuery(item.query)};
                  className="[^"]*"
                >;
                  <div className="flex items-center space-x-4 mb-4">;
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">;
                      <[^>]*/>
                    </[^>]*>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">;
                      {item.title};
                    </[^>]*>
                  </[^>]*>
                  <p className="text-gray-300 text-sm leading-relaxed">;
                    {item.description};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  );
},;

export default SearchPage;