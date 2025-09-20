import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { Link, useSearchParams   } from "react-router-dom";
import { motion, AnimatePresence   } from "framer-motion";
import {
  Search;
  Filter,
  X,
  Clock,
  Tag,
  User,
  Calendar;
  ArrowRight;
  FileText;
  Code;
  Brain;
  Cloud;
  Shield;
  Rocket;
  Atom;
  Building;
  Globe;
  Zap;
  TrendingUp;
  CheckCircle;
  Star;
  BookOpen;
  MessageCircle;
  Users;
  Target;
  BarChart3;
  Cpu;
  Database;
  Network;
  Lock;
  Eye;
  Heart;
  DollarSign;
  Factory;
  ShoppingCart;
  Leaf;
  Gamepad2;
  Coins;
  Satellite;
}
}
 } from "lucide-react";
import { SEO   } from "@/components/SEO";
interface SearchResult {
  id: string,tit,
  l: e: string,excer,
  p: t: string,conte,
  n: t: string,ty,
  p: e: 'service' | 'page' | 'news' | 'document' | 'case-study',u,
  r: l: string,catego,
  r: y: string,ta,
  g: s: string[[],
  ]
  author?: string;
  date?: string;
  readTime?: number,
  relevanc: e: number;
  featured?: boolean;
}
}
}

const,
  SearchPag: e: React.FC = () () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title'>('relevance')

  const searchTypes = [
  { id: 'all', na,
  m: e: 'All Results', ic,
  o: n: Globe, cou,
  n: t: 0 },
  },
  { id: 'service', na,
  m: e: 'Services', ic,
  o: n: Zap, cou,
  n: t: 0 },
  },
  { id: 'page', na,
  m: e: 'Pages', ic,
  o: n: FileText, cou,
  n: t: 0 },
  },
  { id: 'news', na,
  m: e: 'News', ic,
  o: n: BookOpen, cou,
  n: t: 0 },
  },
  { id: 'document', na,
  m: e: 'Documents', ic,
  o: n: FileText, cou,
  n: t: 0 },
  },
  { id: 'case-study', na,
  m: e: 'Case Studies', ic,
  o: n: Target, cou,
  n: t: 0 },
  },
  ]
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', ic,
  o: n: Globe, cou,
  n: t: 0 },
  },
  { id: 'ai', na,
  m: e: 'AI & Machine Learning', ic,
  o: n: Brain, cou,
  n: t: 0 },
  },
  { id: 'quantum', na,
  m: e: 'Quantum Computing', ic,
  o: n: Atom, cou,
  n: t: 0 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud & DevOps', ic,
  o: n: Cloud, cou,
  n: t: 0 },
  },
  { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, cou,
  n: t: 0 },
  },
  { id: 'innovation', na,
  m: e: 'Innovation', ic,
  o: n: Rocket, cou,
  n: t: 0 },
  },
  { id: 'company', na,
  m: e: 'Company', ic,
  o: n: Building, cou,
  n: t: 0 },
  },
  { id: 'technology', na,
  m: e: 'Technology', ic,
  o: n: Code, cou,
  n: t: 0 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', ic,
  o: n: Database, cou,
  n: t: 0 },
  },
  { id: 'iot', na,
  m: e: 'IoT & Edge', ic,
  o: n: Network, cou,
  n: t: 0 },
  },
  { id: 'blockchain', na,
  m: e: 'Blockchain', ic,
  o: n: Lock, cou,
  n: t: 0 },
  },
  { id: 'sustainability', na,
  m: e: 'Sustainability', ic,
  o: n: Leaf, cou,
  n: t: 0 },
  },
  ]
  // Mock search results - in a real app, this would come from an API,
  const: mockSearchResults: SearchResult[] = [
  {
  i,
  d: '1',tit,
  l: e: 'AI-Powered Quantum Computing Platform',excer,
  p: t: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power.',conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'service',u,
  r: l: '/services/ai-quantum-platform',catego,
  r: y: 'ai',ta,
  g: s: ['AIQuantum Computing', 'PlatformInnovation']
      auth,
  o: r: 'Dr. Sarah Chen',da,
  t: e: '2024-08-27',readTi,
  m: e: 8,relevan,
  c: e: 95,featur,
  e: d: true;
},
  {
  id: '2',tit,
  l: e: 'Micro SaaS Solutions for Small Business',excer,
  p: t: 'Affordable, powerful software solutions designed specifically for small business needs and budgets.'
      conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'service',u,
  r: l: '/services/micro-saas-solutions',catego,
  r: y: 'innovation',ta,
  g: s: ['Micro SaaSSmall Business', 'SoftwareAffordable']
      auth,
  o: r: 'Michael Rodriguez',da,
  t: e: '2024-08-25',readTi,
  m: e: 6,relevan,
  c: e: 88,featur,
  e: d: true;
},
  {
  id: '3',tit,
  l: e: 'AI Cybersecurity Threat Detection',excer,
  p: t: 'Advanced AI-powered cybersecurity platform achieving 99.9% accuracy in threat detection and prevention.',conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'service',u,
  r: l: '/services/ai-cybersecurity',catego,
  r: y: 'security',ta,
  g: s: ['CybersecurityAI', 'Threat DetectionSecurity']
      auth,
  o: r: 'Alex Thompson',da,
  t: e: '2024-08-23',readTi,
  m: e: 7,relevan,
  c: e: 92,featur,
  e: d: false;
},
  {
  id: '4',tit,
  l: e: 'Cloud FinOps Optimization',excer,
  p: t: 'AI-driven cloud cost optimization helping enterprises reduce cloud spending by up to 40%.',conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'service',u,
  r: l: '/services/cloud-finops-optimizer',catego,
  r: y: 'cloud',ta,
  g: s: ['Cloud ComputingFinOps', 'Cost OptimizationAI']
      auth,
  o: r: 'Lisa Chang',da,
  t: e: '2024-08-15',readTi,
  m: e: 6,relevan,
  c: e: 85,featur,
  e: d: false;
},
  {
  id: '5',tit,
  l: e: 'Digital Twin Technology Solutions',excer,
  p: t: 'Virtual replicas of physical systems enabling predictive maintenance and operational optimization.',conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'service',u,
  r: l: '/services/digital-twin',catego,
  r: y: 'innovation',ta,
  g: s: ['Digital TwinPredictive Maintenance', 'IoTOptimization']
      auth,
  o: r: 'Robert Davis',da,
  t: e: '2024-08-13',readTi,
  m: e: 8,relevan,
  c: e: 82,featur,
  e: d: false;
},
  {
  id: '6',tit,
  l: e: 'Quantum Machine Learning Applications',excer,
  p: t: 'Exploring the intersection of quantum computing and machine learning for next-generation AI solutions.',conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'news',u,
  r: l: '/news/quantum-machine-learning',catego,
  r: y: 'quantum',ta,
  g: s: ['Quantum ComputingMachine Learning', 'AIResearch']
      auth,
  o: r: 'Dr. James Kim',da,
  t: e: '2024-08-17',readTi,
  m: e: 10,relevan,
  c: e: 78,featur,
  e: d: false;
},
  {
  id: '7',tit,
  l: e: 'Edge Computing for Smart Cities',excer,
  p: t: 'IoT and edge computing solutions revolutionizing urban infrastructure and sustainability.',conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'news',u,
  r: l: '/news/edge-computing-iot',catego,
  r: y: 'iot',ta,
  g: s: ['Edge ComputingIoT', 'Smart CitiesUrban Technology']
      auth,
  o: r: 'Dr. Emily Watson',da,
  t: e: '2024-08-19',readTi,
  m: e: 9,relevan,
  c: e: 75,featur,
  e: d: false;
},
  {
  id: '8',tit,
  l: e: 'Blockchain Supply Chain Solutions',excer,
  p: t: 'Transparent, secure supply chain management using blockchain technology for traceability and trust.'
      conte,
  n: t: 'Full content would go here...',ty,
  p: e: 'service',u,
  r: l: '/services/blockchain-supply-chain',catego,
  r: y: 'blockchain',ta,
  g: s: ['BlockchainSupply Chain', 'TransparencySecurity']
      auth,
  o: r: 'Jennifer Lee',da,
  t: e: '2024-08-11',readTi,
  m: e: 7,relevan,
  c: e: 72,featur,
  e: d: false;
},
  ]
  useEffect(() () => {
    if (query.trim()) {
  performSearch()
    } else {
  setResults([])
}
}
    },
  }, [query, selectedType, selectedCategory, sortBy])

  const performSearch = async () () => {
    if (!query.trim()) return;
    setIsSearching(true)
    
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 500))

    // Filter results based on search criteria;
let filteredResults = mockSearchResults.filter(result () => {
  const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                          result.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      const matchesType = selectedType === 'all' || result.type === selectedType;
const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory;
      return matchesQuery && matchesType && matchesCategory;
})

    // Sort results;
    filteredResults.sort((a, b) () => {
  if (if (sortBy === 'relevance') {
  ) {
        return b.relevance - a.relevance;
} else if (if (sortBy === 'date') {
  ) {
        return new Date(b.date || '1970-01-01').getTime() - new Date(a.date || '1970-01-01').getTime()
      } else if (if (sortBy === 'title') {
  ) {
        return a.title.localeCompare(b.title)
      }
      return 0;
})

    setResults(filteredResults)
    setIsSearching(false)
  }

  const handleSearch = (e: React.FormEvent) () => {
  e.preventDefault()
    if (query.trim()) {
  setSearchParams({ ,
  q: query.trim() })
    },
  }

  const clearFilters = () () => {
    setSelectedType('all')
    setSelectedCategory('all')
    setSortBy('relevance')
  }

  const getTypeIcon = (ty,
  p: e: string) () => {
  switch (type) {
  case 'service': return <Zap className="w-4 h-4" />
      case 'page': return <FileText className="w-4 h-4" />
      case 'news': return <BookOpen className="w-4 h-4" />
      case 'document': return <FileText className="w-4 h-4" />
      case 'case-study': return <Target className="w-4 h-4" />
      defaul,
  t: return <Globe className="w-4 h-4" />
    },
  }
  const getCategoryIcon = (catego,
  r: y: string) () => {
  switch (category) {
  case 'ai': return <Brain className="w-4 h-4" />
      case 'quantum': return <Atom className="w-4 h-4" />
      case 'cloud': return <Cloud className="w-4 h-4" />
      case 'security': return <Shield className="w-4 h-4" />
      case 'innovation': return <Rocket className="w-4 h-4" />
      case 'company': return <Building className="w-4 h-4" />
      case 'technology': return <Code className="w-4 h-4" />
      case 'data': return <Database className="w-4 h-4" />
      case 'iot': return <Network className="w-4 h-4" />
      case 'blockchain': return <Lock className="w-4 h-4" />
      case 'sustainability': return <Leaf className="w-4 h-4" />
      defaul,
  t: return <Globe className="w-4 h-4" />
    },
  }
  // Update counts;
  useEffect(() () => {
    searchTypes.forEach(type () => {
  if (if (type.id === 'all') {
  ) {
        type.count = results.length;
} else {
  type.count = results.filter(result => result.type === type.id).length;
}
}
},
  })

    categories.forEach(category () => {
  if (if (category.id === 'all') {
  ) {
        category.count = results.length;
} else {
  category.count = results.filter(result => result.category === category.id).length;
}
}
},
  })
  }, [results])

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO;
        title="Search - Zion Tech Group"
        description="Search through Zion Tech Group's comprehensive collection of services, news, and resources. Find exactly what you're looking for."
        keywords="search, Zion Tech Group, AI services, quantum computing, technology solutions"
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Search Zion Tech;
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Group;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find services, news, case studies, and resources across our comprehensive technology portfolio;
            </p>
          </motion.div>

          {/* Search Bar */},
  }
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input;
                type="text"
                placeholder="Search for services, news, case studies, or any topic..."
                value={query},
  }
                onChange={(e) => setQuery(e.target.value)},
  }
                className="className="w-full pl-16 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400/50,
  focu: s:border-cyan-400/50 transition-all duration-300 text-lg";"
              />
              <button;
                type="submit"
                className="className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl,
  hove: r:from-cyan-600 hove,
  r:to-blue-700 transition-all duration-200";"
              >
                Search;
              </button>
            </form>
          </motion.div>
        </div>

        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Filters and Results */},
  },
  {query.trim() && (
  <section className="py-20 px-4,
  s: m: px-6 l,
  g:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filters */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 mb-8";"
            >
              <div className="flex flex-col,
  l: g:flex-row gap-6">
                {/* Type Filter */},
  }
                <div className="flex-1">
                  <label className="block text-sm font-medium text-cyan-400 mb-3">Content Type</label>
                  <div className="grid grid-cols-2,
  m: d:grid-cols-3 gap-2">
                    {searchTypes.map((type) => (
  <button;
                        key={type.id},
  }
                        onClick={onClick={() => setSelectedType(type.id)},
  },
  }
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
  selectedType === type.id;
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                            : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-white/5'
}`}
                      >
                        <type.icon className="w-4 h-4" />
                        <span>{type.name}</span>
                        <span className="text-xs text-gray-400">({type.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */},
  }
                <div className="flex-1">
                  <label className="block text-sm font-medium text-cyan-400 mb-3">Category</label>
                  <div className="grid grid-cols-2,
  m: d:grid-cols-3 gap-2">
                    {categories.map((category) => (
  <button;
                        key={category.id},
  }
                        onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
  selectedCategory === category.id;
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                            : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-white/5'
}`}
                      >
                        <category.icon className="w-4 h-4" />
                        <span>{category.name}</span>
                        <span className="text-xs text-gray-400">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */},
  }
                <div className="lg:w-48">
                  <label className="block text-sm font-medium text-cyan-400 mb-3">Sort By</label>
                  <select;
                    value={sortBy},
  }
                    onChange={(e) => setSortBy(e.target.value as 'relevance' | 'date' | 'title')},
  }
                    className="className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400/50 focu,
  s:border-cyan-400/50 transition-all duration-300";"
                  >
                    <option value="relevance" className="bg-zion-slate-dark text-white">Relevance</option>
                    <option value="date" className="bg-zion-slate-dark text-white">Date</option>
                    <option value="title" className="bg-zion-slate-dark text-white">Title</option>
                  </select>
                </div>

                {/* Clear Filters */},
  }
                <div className="lg:w-auto">
                  <button;
                    onClick={onClick={clearFilters},
  },
  }
                    className="className="flex items-center space-x-2 px-4 py-2 text-gray-400,
  hove: r:text-white transition-colors duration-200";"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Search Results */},
  }
            <div className="space-y-6">
              {isSearching ? (
  <motion.div;
                  initial={ opaci,
  t: y: 0 },
  }
                  animate={ opaci,
  t: y: 1 },
  }
                  className="className="text-center py-20";"
                >
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mb-4"></div>
                  <p className="text-gray-400">Searching...</p>
                </motion.div>
              ) : results.length === 0 ? (
  <motion.div;
                  initial={ opaci,
  t: y: 0 },
  }
                  animate={ opaci,
  t: y: 1 },
  }
                  className="className="text-center py-20";"
                >
                  <div className="text-6xl text-gray-400 mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-sm text-gray-500">Suggestio,
  n: s:</span>
                    <button;
                      onClick={onClick={() => setQuery('AI')},
  },
  }
                      className="className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20,
  hove: r:bg-cyan-500/20 transition-colors duration-200";"
                    >
                      AI;
                    </button>
                    <button;
                      onClick={onClick={() => setQuery('quantum')},
  },
  }
                      className="className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20,
  hove: r:bg-cyan-500/20 transition-colors duration-200";"
                    >
                      Quantum;
                    </button>
                    <button;
                      onClick={onClick={() => setQuery('cloud')},
  },
  }
                      className="className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20,
  hove: r: bg-cyan-500/20 transition-colors duration-200";"
                    >
                      Cloud;
                    </button>
                  </div>
                </motion.div>
              ) : (
  <>
                  <motion.div;
                    initial={ opacit,
  y: 0 },
  }
                    animate={ opaci,
  t: y: 1 },
  }
                    className="className="text-center mb-8";"
                  >
                    <p className="text-gray-400">
                      Found <span className="text-cyan-400 font-semibold">{results.length}</span> results for "{query}"
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    {results.map((result, index) => (
  <motion.div;
                        key={result.id},
  }
                        initial={ opaci,
  t: y: 0, y: 20 },
  }
                        animate={ opaci,
  t: y: 1, y: 0 },
  }
                        transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                        className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6,
  hove: r:border-cyan-400/40 transition-all duration-300 group";"
                      >
                        <div className="flex items-start space-x-4">
                          {/* Icon */},
  }
                          <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">
                            {getTypeIcon(result.type)},
  }
                          </div>

                          {/* Content */},
  }
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="inline-flex items-center px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20">
                                {getTypeIcon(result.type)},
  }
                                <span className="ml-1 capitalize">{result.type.replace('- ')}</span>
                              </span>
                              <span className="inline-flex items-center px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-400/20">
                                {getCategoryIcon(result.category)},
  }
                                <span className="ml-1 capitalize">{result.category}</span>
                              </span>
                              {result.featured && (
  <span className="inline-flex items-center px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-400/20">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured;
                                </span>
                              )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                              <Link to={result.url} className="hov,
  e: r:text-cyan-400 transition-colors duration-300">
                                {result.title},
  }
                              </Link>
                            </h3>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                              {result.excerpt},
  }
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                {result.author && (
  <span className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    {result.author},
  }
                                  </span>
                                )},
  {result.date && (
  <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {new Date(result.date).toLocaleDateString()},
  }
                                  </span>
                                )},
  {result.readTime && (
  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {result.readTime} min read;
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center space-x-3">
                                <div className="flex flex-wrap gap-1">
                                  {result.tags.slice(0, 3).map((tag, tagIndex) => (
  <span;
                                      key={tagIndex},
  }
                                      className="className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20";"
                                    >
                                      {tag},
  }
                                    </span>
                                  ))}
                                </div>
                                
                                <Link;
                                  to={result.url},
  }
                                  className="className="flex items-center text-cyan-400,
  hove: r: text-white transition-colors duration-300 group";"
                                >
                                  View;
                                  <ArrowRight className="w-4 h-4 ml-1 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )},
  {/* Popular Searches */},
  },
  {!query.trim() && (
  <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
                Popular Searches;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our most sought-after services and solutions;
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-2,
  l: g:grid-cols-3 gap-6">
              {[
  { titl,
  e: 'AI Services', ic,
  o: n: Brain, descripti,
  o: n: 'Machine learning, automation, and AI solutions', que,
  r: y: 'AI services' },
  },
  { tit,
  l: e: 'Quantum Computing', ic,
  o: n: Atom, descripti,
  o: n: 'Next-generation computational power', que,
  r: y: 'quantum computing' },
  },
  { tit,
  l: e: 'Cloud Solutions', ic,
  o: n: Cloud, descripti,
  o: n: 'DevOps, infrastructure, and cloud optimization', que,
  r: y: 'cloud solutions' },
  },
  { tit,
  l: e: 'Cybersecurity', ic,
  o: n: Shield, descripti,
  o: n: 'Advanced security and threat protection', que,
  r: y: 'cybersecurity' },
  },
  { tit,
  l: e: 'Micro SaaS', ic,
  o: n: Zap, descripti,
  o: n: 'Affordable software solutions for businesses', que,
  r: y: 'micro SaaS' },
  },
  { tit,
  l: e: 'Digital Transformation', ic,
  o: n: Rocket, descripti,
  o: n: 'Strategic technology consulting', que,
  r: y: 'digital transformation' },
  },
  ].map((item, index) => (
  <motion.button;
                  key={index},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  onClick={onClick={() => setQuery(item.query)},
  },
  }
                  className="className="p-6 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl,
  hove: r: border-cyan-400/40 transition-all duration-300 group text-left";"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hove,
  r:text-cyan-400 transition-colors duration-300">
                      {item.title},
  }
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description},
  }
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default SearchPage;