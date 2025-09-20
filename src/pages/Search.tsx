import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { Link } from "react-router-dom"
import {
  Search
  Filter,
  Grid,
  List,
  Star,
  Eye,
  ExternalLink,
  Clock,
  User,
  Tag,
  Calendar,
  FileText,
  Code,
  Cloud,
  Shield,
  Bot,
  Database,
  Server,
  Monitor,
  Smartphone,
  Package,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
  Zap
  Globe
  Target
  BarChart3
  Settings
  Palette
  Cpu
  HardDrive
  Network
  Lightbulb
  Settings as Cog
  BookOpen
  Video
  Headphones
  DollarSign
  Percent
  X
  Plus
  Minus
  RefreshCw
  RotateCcw
  Maximize2
  Minimize2
  Volume2
  VolumeX
  Power
  PowerOff
  Battery
  BatteryCharging
  BatteryFull
  BatteryLow
  BatteryMedium
  BatteryEmpty
  Wifi
  WifiOff
  Signal
  SignalOff
  Bluetooth
  BluetoothOff
  Lock
  Unlock
  Key
  Fingerprint
  QrCode
  Barcode
  Camera
  Image
  File
  Folder
  Archive
  Trash2
  Edit
  Copy
  Share
  Link as LinkIcon
  Bookmark
  BookmarkPlus
  BookmarkMinus
  Flag
  Report
  ThumbsUp
  ThumbsDown
  Smile
  Frown
  Meh
  Heart
  HeartOff
  HeartHandshake
  Gift
  CreditCard
  Wallet
  Receipt
  Calculator
  TrendingDown
  Activity
  PieChart
  LineChart
  BarChart
  ScatterChart
  Radar
  Gauge
  Thermometer
  Droplets
  Sun
  Moon
  Cloud as CloudIcon
  CloudRain
  CloudLightning
  CloudSnow
  Wind
  Umbrella
  Snowflake
  Fire
  Leaf
  Tree
  Flower
  Seedling
  Sprout
  Plant
  TreePine
  Mountain
  MountainSnow
  Volcano
  Island
  Beach
  Desert
  Forest
  Jungle
  Ocean
  River
  Lake
  Water
  Fish
  Bird
  Cat
  Dog
  Horse
  Cow
  Pig
  Sheep
  Goat
  Chicken
  Duck
  Turkey
  Eagle
  Hawk
  Owl
  Crow
  Sparrow
  Robin
  Bluebird
  Cardinal
  Goldfinch
  Hummingbird
  Woodpecker
  Seagull
  Pelican
  Flamingo
  Penguin
  Ostrich
  Emu
  Kiwi
  Toucan
  Parrot
  Macaw
  Cockatoo
  Canary
  Finch
} from "lucide-react"
export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches, setPopularSearches] = useState<string[]>([])
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', cou,
  n: t: 0 },
  },
  { id: 'ai-ml', na,
  m: e: 'AI & Machine Learning', cou,
  n: t: 0 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud Solutions', cou,
  n: t: 0 },
  },
  { id: 'security', na,
  m: e: 'Security & Compliance', cou,
  n: t: 0 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', cou,
  n: t: 0 },
  },
  { id: 'development', na,
  m: e: 'Development Tools', cou,
  n: t: 0 },
  },
  { id: 'hardware', na,
  m: e: 'Hardware & Equipment', cou,
  n: t: 0 },
  },
  { id: 'services', na,
  m: e: 'Services', cou,
  n: t: 0 },
  },
  { id: 'blog', na,
  m: e: 'Blog Posts', cou,
  n: t: 0 },
  },
  { id: 'documentation', na,
  m: e: 'Documentation', cou,
  n: t: 0 },
  },
  ]
  const types = [
  { id: 'all', na,
  m: e: 'All Types', cou,
  n: t: 0 },
  },
  { id: 'software', na,
  m: e: 'Software', cou,
  n: t: 0 },
  },
  { id: 'service', na,
  m: e: 'Services', cou,
  n: t: 0 },
  },
  { id: 'hardware', na,
  m: e: 'Hardware', cou,
  n: t: 0 },
  },
  { id: 'article', na,
  m: e: 'Articles', cou,
  n: t: 0 },
  },
  { id: 'guide', na,
  m: e: 'Guides', cou,
  n: t: 0 },
  },
  { id: 'case-study', na,
  m: e: 'Case Studies', cou,
  n: t: 0 },
  },
  ]
  // Mock search data - in a real app, this would come from an API
const mockSearchData = [
  // AI & Machine Learning
    {
  id: 'ai-chatbot',tit,
  l: e: 'AI Chatbot Platform',catego,
  r: y: 'ai-ml',ty,
  p: e: 'software',ic,
  o: n: Bot,descripti,
  o: n: 'Intelligent chatbot platform with natural language processing capabilities for customer service automation.',conte,
  n: t: 'Our AI chatbot platform leverages advanced natural language processing to provide human-like conversations. Features include multi-language support, sentiment analysis, and seamless integration with existing systems.'
      ta,
  g: s: ['AIChatbot', 'NLPAutomation', 'Customer Service']
      u,
  r: l: '/marketplace/ai-chatbot',rati,
  n: g: 4.8,revie,
  w: s: 156,da,
  t: e: '2024-01-15',auth,
  o: r: 'Zion Tech Team',readTi,
  m: e: '5 min read'
},
  {
  id: 'ml-pipeline',tit,
  l: e: 'Machine Learning Pipeline Automation',catego,
  r: y: 'ai-ml',ty,
  p: e: 'software',ic,
  o: n: BarChart3,descripti,
  o: n: 'Automated machine learning pipeline for data scientists and ML engineers.',conte,
  n: t: 'Streamline your machine learning workflows with our automated pipeline solution. Features include autoML capabilities, model versioning, A/B testing, and performance monitoring.'
      ta,
  g: s: ['Machine LearningAutomation', 'Data ScienceMLOps', 'Pipeline']
      u,
  r: l: '/marketplace/ml-pipeline',rati,
  n: g: 4.9,revie,
  w: s: 89,da,
  t: e: '2024-01-10',auth,
  o: r: 'AI Team',readTi,
  m: e: '8 min read'
}
    // Cloud Solutions
    {
  id: 'cloud-migration',tit,
  l: e: 'Cloud Migration Service',catego,
  r: y: 'cloud',ty,
  p: e: 'service',ic,
  o: n: Cloud,descripti,
  o: n: 'Professional cloud migration and optimization services for enterprise organizations.',conte,
  n: t: 'Our expert team provides comprehensive cloud migration services including infrastructure assessment, migration planning, data migration, and ongoing optimization.'
      ta,
  g: s: ['Cloud MigrationAWS', 'AzureGCP', 'DevOpsEnterprise']
      u,
  r: l: '/services/cloud-migration',rati,
  n: g: 4.9,revie,
  w: s: 67,da,
  t: e: '2024-01-08',auth,
  o: r: 'Cloud Team',readTi,
  m: e: '12 min read'
}
    // Security & Compliance
    {
  id: 'threat-detection',tit,
  l: e: 'Advanced Threat Detection System',catego,
  r: y: 'security',ty,
  p: e: 'software',ic,
  o: n: Shield,descripti,
  o: n: 'AI-powered threat detection and response system for enterprise security.',conte,
  n: t: 'Protect your organization with our advanced threat detection system that uses machine learning to identify and respond to security threats in real-time.',ta,
  g: s: ['CybersecurityThreat Detection', 'AI SecuritySOC', 'Enterprise']
      u,
  r: l: '/marketplace/threat-detection',rati,
  n: g: 4.9,revie,
  w: s: 178,da,
  t: e: '2024-01-12',auth,
  o: r: 'Security Team',readTi,
  m: e: '10 min read'
}
    // Data & Analytics
    {
  id: 'data-warehouse',tit,
  l: e: 'Enterprise Data Warehouse Solution',catego,
  r: y: 'data',ty,
  p: e: 'software',ic,
  o: n: Database,descripti,
  o: n: 'Scalable data warehouse with advanced analytics and business intelligence capabilities.',conte,
  n: t: 'Transform your data into actionable insights with our enterprise data warehouse solution. Features include real-time processing, advanced analytics, and multi-cloud support.'
      ta,
  g: s: ['Data WarehouseBig Data', 'AnalyticsBusiness Intelligence', 'Enterprise']
      u,
  r: l: '/marketplace/data-warehouse',rati,
  n: g: 4.7,revie,
  w: s: 92,da,
  t: e: '2024-01-05',auth,
  o: r: 'Data Team',readTi,
  m: e: '15 min read'
}
    // Development Tools
    {
  id: 'code-generator',tit,
  l: e: 'AI-Powered Code Generator',catego,
  r: y: 'development',ty,
  p: e: 'software',ic,
  o: n: Code,descripti,
  o: n: 'Intelligent code generation and assistance tool for developers.',conte,
  n: t: 'Boost your productivity with our AI-powered code generator that provides intelligent code completion, bug detection, and documentation generation.'
      ta,
  g: s: ['Code GenerationAI', 'DevelopmentProductivity', 'IDE Integration']
      u,
  r: l: '/marketplace/code-generator',rati,
  n: g: 4.8,revie,
  w: s: 234,da,
  t: e: '2024-01-18',auth,
  o: r: 'Dev Team',readTi,
  m: e: '6 min read'
}
    // Blog Posts
    {
  id: 'ai-trends-2024',tit,
  l: e: 'Top AI Trends to Watch in 2024',catego,
  r: y: 'ai-ml',ty,
  p: e: 'article',ic,
  o: n: TrendingUp,descripti,
  o: n: 'Explore the most significant artificial intelligence trends that will shape the technology landscape in 2024.',conte,
  n: t: 'As we move into 2024, artificial intelligence continues to evolve at an unprecedented pace. From generative AI to autonomous systems, discover the key trends that will drive innovation and transformation across industries.'
      ta,
  g: s: ['AI Trends2024', 'TechnologyInnovation', 'Future']
      u,
  r: l: '/blog/ai-trends-2024',rati,
  n: g: 4.7,revie,
  w: s: 45,da,
  t: e: '2024-01-20',auth,
  o: r: 'AI Research Team',readTi,
  m: e: '12 min read'
},
  {
  id: 'cloud-security-best-practices',tit,
  l: e: 'Cloud Security Best Practices for 2024',catego,
  r: y: 'security',ty,
  p: e: 'guide',ic,
  o: n: Shield,descripti,
  o: n: 'Comprehensive guide to implementing robust cloud security measures in modern enterprise environments.',conte,
  n: t: 'Learn the essential cloud security best practices that every organization should implement to protect their data and infrastructure in 2024.',ta,
  g: s: ['Cloud SecurityBest Practices', 'EnterpriseCybersecurity', 'Guide']
      u,
  r: l: '/blog/cloud-security-best-practices-2024',rati,
  n: g: 4.8,revie,
  w: s: 78,da,
  t: e: '2024-01-17',auth,
  o: r: 'Security Team',readTi,
  m: e: '18 min read'
}
    // Case Studies
    {
  id: 'manufacturing-ai-case-study',tit,
  l: e: 'AI Transformation in Manufacturin,
  g: A Case Study',catego,
  r: y: 'ai-ml',ty,
  p: e: 'case-study',ic,
  o: n: Factory,descripti,
  o: n: 'How a Fortune 500 manufacturing company achieved 40% efficiency improvement through AI implementation.',conte,
  n: t: 'Discover how we helped a leading manufacturing company implement AI solutions to optimize production processes, reduce costs, and improve overall efficiency.'
      ta,
  g: s: ['Case StudyManufacturing', 'AI ImplementationEfficiency', 'ROI']
      u,
  r: l: '/case-studies/manufacturing-ai-transformation',rati,
  n: g: 4.9,revie,
  w: s: 23,da,
  t: e: '2024-01-14',auth,
  o: r: 'Case Study Team',readTi,
  m: e: '20 min read'
},
  ]
  useEffect(() () => {
    // Load recent searches from localStorage
const saved = localStorage.getItem('recentSearches')
    if (if (saved) {
  ) {
      setRecentSearches(JSON.parse(saved))
    }

    // Set popular searches
    setPopularSearches([
  'AI solutionsCloud migration'
      'CybersecurityData analytics'
      'Machine learningDevOps services'
      'Green ITDigital transformation'
])
  }, [])

  const performSearch = async (que,
  r: y: string) () => {
  if (!query.trim()) {
  setSearchResults([])
      return
}

    setIsSearching(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Filter mock data based on search query
const filtered = mockSearchData.filter(item () => {
  const searchTerm = query.toLowerCase()
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.content.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    })

    // Apply category and type filters
let results = filtered
    if (if (selectedCategory !== 'all') {
  ) {
      results = results.filter(item => item.category === selectedCategory)
    }
    if (if (selectedType !== 'all') {
  ) {
      results = results.filter(item => item.type === selectedType)
    }

    setSearchResults(results)
    setIsSearching(false)

    // Save to recent searches
    if (query.trim() && !recentSearches.includes(query.trim())) {
  const newRecent = [[query.trim(), ...recentSearches.slice(0, 4)],
  ]
      setRecentSearches(newRecent)
      localStorage.setItem('recentSearches', JSON.stringify(newRecent))
    },
  }

  const handleSearch = (e: React.FormEvent) () => {
  e.preventDefault()
    performSearch(searchQuery)
  }

  const handleQuickSearch = (que,
  r: y: string) () => {
  setSearchQuery(query)
    performSearch(query)
  }

  const toggleItemExpansion = (item,
  I: d: string) () => {
  setExpandedItem(expandedItem === itemId ? null : itemId)
  }
  const getCategoryColor = (catego,
  r: y: string) () => {
  switch (category) {
  case 'ai-ml': return 'bg-purple-500/20 text-purple-400'
      case 'cloud': return 'bg-blue-500/20 text-blue-400'
      case 'security': return 'bg-red-500/20 text-red-400'
      case 'data': return 'bg-green-500/20 text-green-400'
      case 'development': return 'bg-orange-500/20 text-orange-400'
      case 'hardware': return 'bg-gray-500/20 text-gray-400'
      case 'services': return 'bg-cyan-500/20 text-cyan-400'
      case 'blog': return 'bg-pink-500/20 text-pink-400'
      case 'documentation': return 'bg-indigo-500/20 text-indigo-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const getTypeColor = (ty,
  p: e: string) () => {
  switch (type) {
  case 'software': return 'bg-blue-500/20 text-blue-400'
      case 'service': return 'bg-green-500/20 text-green-400'
      case 'hardware': return 'bg-orange-500/20 text-orange-400'
      case 'article': return 'bg-purple-500/20 text-purple-400'
      case 'guide': return 'bg-cyan-500/20 text-cyan-400'
      case 'case-study': return 'bg-pink-500/20 text-pink-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const renderStars = (rati,
  n: g: number) () => {
  const stars = [[],
  ]
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0, i < fullStars, i++) {
  stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)
    }
    
    if (if (hasHalfStar) {
  ) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current" />)
    }
    
const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0, i < emptyStars, i++) {
  stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />)
    }
    
    return stars
}

  const formatDate = (dateStri,
  n: g: string) () => {
  return new Date(dateString).toLocaleDateString('en-US', {
  ye,
  a: r: 'numeric',mon,
  t: h: 'short',d,
  a: y: 'numeric'
})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Search - Zion Tech Group"
        description="Search our comprehensive collection of technology solutions, services, articles, and resources. Find exactly what you need to accelerate your digital transformation."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Search className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Find What You <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Need</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Search our comprehensive collection of technology solutions, services,
  articles, and resources to accelerate your digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Form */},
  }
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for solutions, services, articles, or resources..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full pl-14 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2,
  focu: s:ring-green-400/20 transition-all duration-200 text-lg";"
                />
                <button
                  type="submit"
                  className="className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Search Options */},
  },
  {!searchQuery && searchResults.length === 0 && (
  <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Recent Searches */},
  },
  {recentSearches.length > 0 && (
  <div className="mb-12">
                  <h3 className="text-xl font-bold text-white mb-6">Recent Searches</h3>
                  <div className="flex flex-wrap gap-3">
                    {recentSearches.map((search, index) => (
  <button
                        key={index},
  }
                        onClick={onClick={() => handleQuickSearch(search)},
  },
  }
                        className="className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 text-gray-300 rounded-lg,
  hove: r: bg-slate-700/50 hove,
  r:text-white transition-all duration-200";"
                      >
                        {search},
  }
                      </button>
                    ))}
                  </div>
                </div>
              )},
  {/* Popular Searches */},
  }
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((search, index) => (
  <button
                      key={index},
  }
                      onClick={onClick={() => handleQuickSearch(search)},
  },
  }
                      className="className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-400 rounded-lg,
  hove: r: from-green-500/30,
  hove: r:to-blue-500/30 hove,
  r:border-green-400/50 transition-all duration-200";"
                    >
                      {search},
  }
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Categories */},
  }
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Browse by Category</h3>
                <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                  {categories.slice(1).map((category) => (
  <button
                      key={category.id},
  }
                      onClick={() () => {
                        setSelectedCategory(category.id)
                        setSearchQuery(category.name)
                        performSearch(category.name)
                      },
  }
                      className="className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl,
  hove: r: border-green-400/50 transition-all duration-300 hove,
  r:scale-105 text-left";"
                    >
                      <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>
                      <p className="text-gray-300 text-sm">Explore {category.name.toLowerCase()} solutions and resources</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )},
  {/* Search Results */},
  },
  {searchQuery && (
  <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Results Header */},
  }
              <div className="flex flex-col,
  l: g: flex-row,
  l: g:items-center l,
  g:justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Search Results for "{searchQuery}"
                  </h2>
                  <p className="text-gray-300">
                    {isSearching ? 'Searching...' : `${searchResults.length} results found`}
                  </p>
                </div>

                {/* Filters and View Mode */},
  }
                <div className="flex items-center gap-4 mt-4,
  l: g:mt-0">
                  {/* Category Filter */},
  }
                  <select
                    value={selectedCategory},
  }
                    onChange={(e) () => {
  setSelectedCategory(e.target.value)
                      performSearch(searchQuery)
                    },
  }
                    className="className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                  >
                    {categories.map((category) => (
  <option key={category.id} value={category.id}>
                        {category.name},
  }
                      </option>
                    ))}
                  </select>

                  {/* Type Filter */},
  }
                  <select
                    value={selectedType},
  }
                    onChange={(e) () => {
  setSelectedType(e.target.value)
                      performSearch(searchQuery)
                    },
  }
                    className="className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                  >
                    {types.map((type) => (
  <option key={type.id} value={type.id}>
                        {type.name},
  }
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */},
  }
                  <div className="flex items-center gap-2">
                    <button
                      onClick={onClick={() => setViewMode('grid')},
  },
  }
                      className={`p-2 rounded-lg transition-all duration-200 ${
  viewMode === 'grid' 
                          ? 'bg-green-400/20 text-green-400' 
                          : 'bg-slate-800/50 text-gray-400,
  hove: r:text-white'
}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={onClick={() => setViewMode('list')},
  },
  }
                      className={`p-2 rounded-lg transition-all duration-200 ${
  viewMode === 'list' 
                          ? 'bg-green-400/20 text-green-400' 
                          : 'bg-slate-800/50 text-gray-400,
  hove: r:text-white'
}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Loading State */},
  },
  {isSearching && (
  <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-4">
                    <RefreshCw className="w-8 h-8 text-green-400 animate-spin" />
                  </div>
                  <p className="text-gray-300">Searching for "{searchQuery}"...</p>
                </div>
              )},
  {/* No Results */},
  },
  {!isSearching && searchResults.length === 0 && (
  <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-full mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or browse our categories instead.
                  </p>
                  <button
                    onClick={onClick={() => setSearchQuery('')},
  },
  }
                    className="className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                  >
                    Start New Search
                  </button>
                </div>
              )},
  {/* Search Results */},
  },
  {!isSearching && searchResults.length > 0 && (
  <>
                  {viewMode === 'grid' ? (
  <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                      {searchResults.map((item, index) => (
  <motion.div
                          key={item.id},
  }
                          initial={ opaci,
  t: y: 0, y: 20 },
  }
                          animate={ opaci,
  t: y: 1, y: 0 },
  }
                          transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                          className="className="group";"
                        >
                          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r: border-green-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                            <div className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                                  {categories.find(c => c.id === item.category)?.name},
  }
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                                  {types.find(t => t.id === item.type)?.name},
  }
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-3 mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                                  <item.icon className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hov,
  e: r:text-green-400 transition-colors duration-200">
                                  {item.title},
  }
                                </h3>
                              </div>
                              
                              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                                {item.description},
  }
                              </p>
                              
                              {item.rating && (
  <div className="flex items-center gap-2 mb-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    {renderStars(item.rating)},
  }
                                    <span className="text-gray-400">({item.reviews})</span>
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                  <Calendar className="w-4 h-4" />
                                  {formatDate(item.date)},
  }
                                </div>
                                <div className="flex items-center gap-2">
                                  <button className="p-2 text-gray-400,
  hove: r:text-white transition-colors duration-200">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.slice(0, 3).map((tag, tagIndex) => (
  <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                    {tag},
  }
                                  </span>
                                ))}
                              </div>
                              
                              <Link
                                to={item.url},
  }
                                className="className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105 text-center block";"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
  <div className="space-y-4">
                      {searchResults.map((item, index) => (
  <motion.div
                          key={item.id},
  }
                          initial={ opaci,
  t: y: 0, x: -20 },
  }
                          animate={ opaci,
  t: y: 1, x: 0 },
  }
                          transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                          className="className="group";"
                        >
                          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r:border-green-400/50 transition-all duration-300 p-6">
                            <div className="flex items-center gap-6">
                              <div className="flex-shrink-0">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                                  <item.icon className="w-8 h-8 text-green-400" />
                                </div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                                    {categories.find(c => c.id === item.category)?.name},
  }
                                  </span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                                    {types.find(t => t.id === item.type)?.name},
  }
                                  </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-green-400 transition-colors duration-200 mb-2">
                                  {item.title},
  }
                                </h3>
                                
                                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                                  {item.description},
  }
                                </p>
                                
                                {item.rating && (
  <div className="flex items-center gap-4 text-sm mb-3">
                                    <div className="flex items-center gap-1">
                                      {renderStars(item.rating)},
  }
                                      <span className="text-gray-400 ml-1">({item.reviews})</span>
                                    </div>
                                    <div className="text-gray-400">•</div>
                                    <div className="text-gray-400">{item.readTime}</div>
                                  </div>
                                )}
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {item.tags.map((tag, tagIndex) => (
  <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                      {tag},
  }
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex-shrink-0 text-right">
                                <div className="flex items-center gap-2 mb-3">
                                  <button className="p-2 text-gray-400,
  hove: r:text-white transition-colors duration-200">
                                    <Eye className="w-5 h-5" />
                                  </button>
                                </div>
                                <Link
                                  to={item.url},
  }
                                  className="className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}