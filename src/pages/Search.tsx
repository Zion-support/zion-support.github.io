import React, { useStateuseEffect  from "react";
import { motion } from "framer-moti, on";import { SEO } from "../components/S, EO";import { Link } from "react-router-d, om";import { SearchFilter;
  Grid;
  List;
  Star;
  Eye;
  ExternalLink;
  Clock;
  User;
  Tag;
  Calendar;
  FileText;
  Code;
  Cloud;
  Shield;
  Bot;
  Database;
  Server;
  Monitor;
  Smartphone;
  Package;
  Users;
  TrendingUp;
  Award;
  CheckCircle;
  ArrowRight;
  ChevronDown;
  ChevronUp;
  Zap;
  Globe;
  Target;
  BarChart3;
  Settings;
  Palette;
  Cpu;
  HardDrive;
  Network;
  Lightbulb;
  Settings, as, Cog;
  BookOpen;
  Video;
  Headphones;
  DollarSign;
  Percent;
  X;
  Plus;
  Minus;
  RefreshCw;
  RotateCcw;
  Maximize2;
  Minimize2;
  Volume2;
  VolumeX;
  Power;
  PowerOff;
  Battery;
  BatteryCharging;
  BatteryFull;
  BatteryLow;
  BatteryMedium;
  BatteryEmpty;
  Wifi;
  WifiOff;
  Signal;
  SignalOff;
  Bluetooth;
  BluetoothOff;
  Lock;
  Unlock;
  Key;
  Fingerprint;
  QrCode;
  Barcode;
  Camera;
  Image;
  File;
  Folder;
  Archive;
  Trash2;
  Edit;
  Copy;
  Share;
  Link, as, LinkIcon;
  Bookmark;
  BookmarkPlus;
  BookmarkMinus;
  Flag;
  Report;
  ThumbsUp;
  ThumbsDown;
  Smile;
  Frown;
  Meh;
  Heart;
  HeartOff;
  HeartHandshake;
  Gift;
  CreditCard;
  Wallet;
  Receipt;
  Calculator;
  TrendingDown;
  Activity;
  PieChart;
  LineChart;
  BarChart;
  ScatterChart;
  Radar;
  Gauge;
  Thermometer;
  Droplets;
  Sun;
  Moon;
  Cloud, as, CloudIcon;
  CloudRain;
  CloudLightning;
  CloudSnow;
  Wind;
  Umbrella;
  Snowflake;
  Fire;
  Leaf;
  Tree;
  Flower;
  Seedling;
  Sprout;
  Plant;
  TreePine;
  Mountain;
  MountainSnow;
  Volcano;
  Island;
  Beach;
  Desert;
  Forest;
  Jungle;
  Ocean;
  River;
  Lake;
  Water;
  Fish;
  Bird;
  Cat;
  Dog;
  Horse;
  Cow;
  Pig;
  Sheep;
  Goat;
  Chicken;
  Duck;
  Turkey;
  Eagle;
  Hawk;
  Owl;
  Crow;
  Sparrow;
  Robin;
  Bluebird;
  Cardinal;
  Goldfinch;
  Hummingbird;
  Woodpecker;
  Seagull;
  Pelican;
  Flamingo;
  Penguin;
  Ostrich;
  Emu;
  Kiwi;
  Toucan;
  Parrot;
  Macaw;
  Cockatoo;
  Canary;
  Finch;
} from "lucide-react";export, default, function SearchPage() {
;
  const [searchQuer;y;
   , setSearchQuery] = useState('')const [searchResultssetSearchResults] = useState<any[]>([])const [isSearching;
   , setIsSearching] = useState(false);
  const [selectedCategory;
   , setSelectedCategory] = useState('all')const [selectedTypesetSelectedType] = useState('all')const [viewModesetViewMode] = useState<'grid' | 'list'>('grid')const [expandedItemsetExpandedItem] = useState<string | null>(null)const [recentSearches;
   , setRecentSearches] = useState<string[]>([]);
  const [popularSearches;
   , setPopularSearches] = useState<string[]>([]);
  const categories = [;
    { id: 'all, ', name: 'All Categories'; coun,;
  t: 0 };
    { id: 'ai-ml, ', name: 'AI & Machine Learning, 'count: 0 }{ id: 'cloud, ', name: 'Cloud Solutions, 'count: 0 }{ id: 'security, ', name: 'Security & Compliance, 'count: 0 }{ id: 'data, ', name: 'Data & Analytics, 'count: 0 }{ id: 'development, ', name: 'Development Tools, 'count: 0 }{ id: 'hardware, ', name: 'Hardware & Equipment, 'count: 0 }{ id: 'services, ', name: 'Services, 'count: 0 }{ id: 'blog, ', name: 'Blog Posts, 'count: 0 },;
    { id: 'documentation, ', name: 'Documentation'coun,;
  t: 0 };
,  ]const types = [;
    { id: 'all, ', name: 'All Types'; coun,;
  t: 0 };
    { id: 'software, ', name: 'Software, 'count: 0 }{ id: 'service, ', name: 'Services, 'count: 0 }{ id: 'hardware, ', name: 'Hardware, 'count: 0 }{ id: 'article, ', name: 'Articles, 'count: 0 }{ id: 'guide, ', name: 'Guides, 'count: 0 },;
    { id: 'case-study, ', name: 'Case Studies'coun,;
  t: 0 };
,  ]// Mock, search, data - in, a, real appthis, would, come from, an, API;
  const mockSearchData = [;
    // AI & Machine Learning;
    {
      id: 'ai-chatbot, ',title: 'AI, Chatbot, Platform, ',category: 'ai-ml, ',type: 'software',;
    icon: Bot,;
    description: 'Intelligent, chatbot, platform with, natural, language processing, capabilities, for customer, service, automation., ',content: 'Our, AI, chatbot platform, leverages, advanced natural, language, processing to, provide, human-like conversations. Features, include, multi-language suppor, t, sentiment analysis, and, seamless, integration with, existing, systems.',;
      tags: ['AIChatbot, ', 'NLPAutomation''Customer, Service'],;
      url: '/marketplace/ai-chatbot, ',rating: 4.8,;
    reviews: 15, 6,date: '20o24-0o1-15, ',author: 'Zion, Tech, Team, 'readTime: '5, min, read';
    }{
      id: 'ml-pipeline, ',title: 'Machine, Learning, Pipeline Automation, ',category: 'ai-ml, ',type: 'software, ',icon: BarChart3,;
    description: 'Automated, machine, learning pipeline, for, data scientists, and, ML engineers., ',content: 'Streamline, your, machine learning, workflows, with our, automated, pipeline solution. Features, include, autoML capabilitie, s, model versioning, A/B testing, and, performance, monitoring.',;
      tags: ['Machine LearningAutomation, ', 'Data, ScienceMLOps''Pipeline'],;
      url: '/marketplace/ml-pipeline, ',rating: 4.9,;
    reviews: 8, 9,date: '20o24-0o1-10, ',author: 'AI Team, 'readTime: '8, min, read';
    }// Cloud Solutions;
    {
      id: 'cloud-migration, ',title: 'Cloud, Migration, Service, ',category: 'cloud, ',type: 'service, ',icon: Cloud,;
    description: 'Professional, cloud, migration and, optimization, services for, enterprise, organizations., ',content: 'Our, expert, team provides, comprehensive, cloud migration, services, including infrastructure assessmen, t, migration planning, data migration, and, ongoing, optimization.',;
      tags: ['Cloud MigrationAWS, ',, 'AzureGCP''DevOpsEnterprise'],;
      url: '/services/cloud-migration, ',rating: 4.9,;
    reviews: 6, 7,date: '20o24-0o1-0o8, ',author: 'Cloud Team, 'readTime: '12, min, read';
    }// Security & Compliance;
    {
      id: 'threat-detection, ',title: 'Advanced, Threat, Detection System, ',category: 'security, ',type: 'software, ',icon: Shield,;
    description: 'AI-powered, threat, detection and, response, system for, enterprise, security., ',content: 'Protect, your, organization with, our, advanced threat, detection, system that, uses, machine learning, to, identify and, respond, to security, threats, in real-time., ',tags: ['CybersecurityThreat Detection, ', 'AI, SecuritySOC''Enterprise'],;
      url: '/marketplace/threat-detection, ',rating: 4.9,;
    reviews: 17, 8,date: '20o24-0o1-12, ',author: 'Security Team, 'readTime: '10, min, read';
    }// Data & Analytics;
    {
      id: 'data-warehouse, ',title: 'Enterprise, Data, Warehouse Solution, ',category: 'data, ',type: 'software, ',icon: Database,;
    description: 'Scalable, data, warehouse with, advanced, analytics and, business, intelligence capabilities., ',content: 'Transform, your, data into, actionable, insights with, our, enterprise data, warehouse, solution. Features, include, real-time processin, g, advanced analytics, and multi-cloud support.',;
      tags: ['Data, WarehouseBig, Data, ', 'AnalyticsBusiness, Intelligence''Enterprise'],;
      url: '/marketplace/data-warehouse, ',rating: 4.7,;
    reviews: 9, 2,date: '20o24-0o1-0o5, ',author: 'Data Team, 'readTime: '15, min, read';
    }// Development Tools;
    {
      id: 'code-generator, ',title: 'AI-Powered, Code, Generator, ',category: 'development, ',type: 'software, ',icon: Code,;
    description: 'Intelligent, code, generation and, assistance, tool for developers., ',content: 'Boost, your, productivity with, our, AI-powered, code, generator that, provides, intelligent code completio, n, bug detection, and, documentation, generation.',;
      tags: ['Code GenerationAI, ', 'DevelopmentProductivity''IDE, Integration'],;
      url: '/marketplace/code-generator, ',rating: 4.8,;
    reviews: 23, 4,date: '20o24-0o1-18, ',author: 'Dev Team, 'readTime: '6, min, read';
    }// Blog Posts;
    {
      id: 'ai-trends-20o24, ',title: 'Top, AI, Trends to, Watch, in 20o24, ',category: 'ai-ml, ',type: 'article, ',icon: TrendingUp,;
    description: 'Explore, the, most significant, artificial, intelligence trends, that, will shape, the, technology landscape, in, 20o24., ',content: 'As, we, move into 20o2, 4, artificial, intelligence, continues to, evolve, at an, unprecedented, pace. From, generative, AI to, autonomous, systems, discover, the, key trends, that, will drive, innovation, and transformation, across, industries.',;
      tags: ['AI Trends20o24, ',, 'TechnologyInnovation''Future'],;
      url: '/blog/ai-trends-20o24, ',rating: 4.7,;
    reviews: 4, 5,date: '20o24-0o1-20, ',author: 'AI, Research, Team, 'readTime: '12, min, read';
    }{
      id: 'cloud-security-best-practices, ',title: 'Cloud, Security, Best Practices, for, 20o24, ',category: 'security, ',type: 'guide, ',icon: Shield,;
    description: 'Comprehensive, guide, to implementing, robust, cloud security, measures, in modern, enterprise, environments., ',content: 'Learn, the, essential cloud, security, best practices, that, every organization, should, implement to, protect, their data, and, infrastructure in 20o24., ',tags: ['Cloud, SecurityBest, Practices, ',, 'EnterpriseCybersecurity''Guide'],;
      url: '/blog/cloud-security-best-practices-20o24, ',rating: 4.8,;
    reviews: 7, 8,date: '20o24-0o1-17, ',author: 'Security Team, 'readTime: '18, min, read';
    }// Case Studies;
    {
      id: 'manufacturing-ai-case-study, ',title: 'AI, Transformation, in Manufacturin,;
  g: A, Case, Study, ',category: 'ai-ml, ',type: 'case-study, ',icon: Factory,;
    description: 'How, a, Fortune 50o0, manufacturing, company achieved 40% efficiency, improvement, through AI implementation., ',content: 'Discover, how, we helped, a, leading manufacturing, company, implement AI, solutions, to optimize, production, processe, s, reduce costs, and, improve, overall efficiency.',;
      tags: ['Case StudyManufacturing, ', 'AI, ImplementationEfficiency''ROI'],;
      url: '/case-studies/manufacturing-ai-transformation, ',rating: 4.9,;
    reviews: 2, 3,date: '20o24-0o1-14, ',author: 'Case, Study, Team, 'readTime: '20, min, read';
    }
  ]useEffect(() => {;
    // Load, recent, searches from localStorage;
    const saved = localStorage.getItem('recentSearches')if() {
      setRecentSearches(JSON.parse(saved)) };
;
    // Set, popular, searches;
    setPopularSearches([;
      'AI, solutionsCloud, migration''CybersecurityData analytics''Machine, learningDevOps, services')'Green, ITDigital, transformation';
  ,  ])}, []),;
  const performSearch = async (query: string) => {;
    if (!query.trim()) {;
      setSearchResults([])return;
   }
;
    setIsSearching(true)// Simulate, API, delay;
    await, new, Promise(resolve => setTimeout(resolve;
    50o0)),;
    // Filter, mock, data based, on, search query;
    const filtered = mockSearchData.filter(item => {;
      const searchTerm = query.toLowerCase();
      return (;
        item.title.toLowerCase().includes(searchTerm) ||;
        item.description.toLowerCase().includes(searchTerm) ||;
        item.content.toLowerCase().includes(searchTerm) ||;
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      );
    });
;
    // Apply, category, and type filters;
    let results  = filtere;d;
    if (selectedCategory !== 'all') {
      results = results.filter(item => item.category === selectedCategory)}if() {
      results = results.filter(item => item.type === selectedType)};
    setSearchResults(results)setIsSearching(false)// Save, to, recent searches;
    if (query.trim() && !recentSearches.includes(query.trim())) {
      const newRecent  = [query.trim(); ...recentSearches.slice(0;
   , 4)],;
      setRecentSearches(newRecent);
      localStorage.setItem('recentSearches'JSON.stringify(newRecent)) }
  },;
  const handleSearch = () => {;
    e.preventDefault()performSearch(searchQuery);  },;
  const handleQuickSearch = () => {;
    setSearchQuery(quer;y);
    performSearch(query);  },;
  const toggleItemExpansion = () => {;
    setExpandedItem(expandedItem === itemId ? null : itemI;d);  };
  const getCategoryColor = () => {
    switch (category) {;
      case 'ai-ml': return 'bg-purple-50o0/20 text-purple-40o0';
      case 'cloud': return 'bg-blue-50o0/20 text-blue-40o0, ',;
      case 'security': return 'bg-red-50o0/20 text-red-40o0',;
      case 'data': return 'bg-green-50o0/20 text-green-40o0',;
      case 'development': return 'bg-orange-50o0/20 text-orange-40o0'case 'hardware': return 'bg-gray-50o0/20 text-gray-40o0'case 'services': return 'bg-cyan-50o0/20 text-cyan-40o0';
  }case 'blog': return 'bg-pink-50o0/20 text-pink-40o0';
      case 'documentation': return 'bg-indigo-50o0/20 text-indigo-40o0';
      default: return 'bg-slate-50o0/20 text-slate-40o0';
   ,;
     };
  }const getTypeColor = () => {;
    switch (type) {;
      case 'software': return 'bg-blue-50o0/20 text-blue-40o0';
      case 'service': return 'bg-green-50o0/20 text-green-40o0, 'case 'hardware': return 'bg-orange-50o0/20 text-orange-40o0'case 'article': return 'bg-purple-50o0/20 text-purple-40o0';
  }case 'guide': return 'bg-cyan-50o0/20 text-cyan-40o0';
      case 'case-study': return 'bg-pink-50o0/20 text-pink-40o0';
      default: return 'bg-slate-50o0/20 text-slate-40o0';
   ,;
     };
  }const renderStars = () => {;
    const stars = [];
    const fullStars  = Math.floor(rating);
    const hasHalfStar  = rating % 1 !== ;0;
;
    for (let i = 0;
    i < fullStarsi++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-40o0 fill-current" />)}
    if() {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-40o0 fill-current" />)};
    const emptyStars  = 5 - Math.ceil(rating)for (let i = 0;
    i < emptyStarsi++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-40o0" />)}
    return stars;
  };
;
  const formatDate = () => {
    return, new, Date(dateString).toLocaleDateString('en-US, ', {;
      year: 'numeric, 'month: 'short';da,;
  y: 'numeric';
    })},;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Search - Zion, Tech, Group";
        description="Search, our, comprehensive collection, of, technology solutionsservices, articlesand resources. Find, exactly, what you, need, to accelerate, your, digital transformation.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8}}
            className="text-center";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-2xl mb-6">;
              <Search className="w-10 h-10 text-green-40o0" />;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Find, What, You <span className="bg-gradient-to-r from-green-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Need</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Search, our, comprehensive collection, of, technology solutions,;
    servicesarticlesand, resources, to accelerate, your, digital transformation.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search Form */}
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <div className="max-w-4xl mx-auto">;
            <form onSubmit={handleSearch} className="relative">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-40o0" />;
                <input;
                  type="text";
                  placeholder="Search, for, solutionsservicesarticlesor resources...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focus:ring-2 focus:ring-green-40o0/20 transition-all duration-20o0 text-lg";
                />;
                <button;
                  type="submit";
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5";
                >;
                  Search;
                </button>;
              </div>;
            </form>;
          </div>;
        </div>;
      </section>;
      {/* Quick, Search, Options */}
      {!searchQuery && searchResults.length === 0 && (;
        <section className="py-16">;
          <div className="container mx-auto px-6">;
            <div className="max-w-6xl mx-auto">;
              {/* Recent Searches */}
              {recentSearches.length > 0 && (;
                <div className="mb-12">;
                  <h3 className="text-xl font-bold text-white mb-6">Recent Searches</h3>;
                  <div className="flex flex-wrap gap-3">;
                    {recentSearches.map((searchindex) => (;
                      <button;
                        key={index}
                        onClick={() => handleQuickSearch(search)}
                        className="px-4 py-2 bg-slate-80o0/50, border, border-slate-60o0/50 text-gray-30o0 rounded-lg hover: bg-slate-70o0/50 hove,;
  r:text-white transition-all duration-20o0";
                      >;
                        {search}
                      </button>;
                    ))}
                  </div>;
                </div>;
              )}
;
              {/* Popular Searches */}
              <div className="mb-12">;
                <h3 className="text-xl font-bold text-white mb-6">Popular Searches</h3>;
                <div className="flex flex-wrap gap-3">;
                  {popularSearches.map((searchindex) => (;
                    <button;
                      key={index}
                      onClick={() => handleQuickSearch(search)}
                      className="px-4 py-2 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20, border, border-green-40o0/30 text-green-40o0 rounded-lg hover: from-green-50o0/30 hove,;
    r:to-blue-50o0/30 hove,;
  r:border-green-40o0/50 transition-all duration-20o0";
                    >;
                      {search}
                    </button>;
                  ))}
                </div>;
              </div>;
              {/* Search Categories */}
              <div>;
                <h3 className="text-xl font-bold text-white mb-6">Browse, by, Category</h3>;
                <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                  {categories.slice(1).map((category) => (;
                    <button;
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id)setSearchQuery(category.name)performSearch(category.name)}}
                      className="p-6 bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50, border, border-slate-60o0/50 rounded-xl hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 text-left";
                    >;
                      <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>;
                      <p className="text-gray-30o0 text-sm">Explore {category.name.toLowerCase()} solutions, and, resources</p>;
                    </button>;
                  ))}
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      )}
;
      {/* Search Results */}
      {searchQuery && (;
        <section className="py-16">;
          <div className="container mx-auto px-6">;
            <div className="max-w-6xl mx-auto">;
              {/* Results Header */}
              <div className="flex flex-col lg: flex-row l,;
    g:items-center l,;
  g:justify-between mb-8">;
                <div>;
                  <h2 className="text-3xl font-bold text-white mb-2">;
                    Search, Results, for "{searchQuery}";
                  </h2>;
                  <p className="text-gray-30o0">;
                    {isSearching ? 'Searching...' : `${searchResults.length} results found`}
                  </p>;
                </div>;
                {/* Filters, and, View Mode */}
                <div className="flex items-center gap-4 mt-4 lg: mt-0">;
                  {/* Category Filter */};
                  <select;
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value)performSearch(searchQuery)}}
                    className="px-4 py-2 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                  >;
                    {categories.map((category) => (;
                      <option key={category.id} value={category.id}>;
                        {category.name}
                      </option>;
                    ))}
                  </select>;
                  {/* Type Filter */};
                  <select;
                    value={selectedType}
                    onChange={(e) => {
                      setSelectedType(e.target.value)performSearch(searchQuery)}}
                    className="px-4 py-2 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                  >;
                    {types.map((type) => (;
                      <option key={type.id} value={type.id}>;
                        {type.name}
                      </option>;
                    ))}
                  </select>;
                  {/* View, Mode, Toggle */}
                  <div className="flex items-center gap-2">;
                    <button;
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-20o0 ${
                        viewMode === 'grid';
                          ? 'bg-green-40o0/20 text-green-40o0';
                          : 'bg-slate-80o0/50 text-gray-40o0 hover: text-white';
                      }`}
                    >;
                      <Grid className="w-5 h-5" />;
                    </button>;
                    <button;
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-20o0 ${
                        viewMode === 'list';
                          ? 'bg-green-40o0/20 text-green-40o0';
                          : 'bg-slate-80o0/50 text-gray-40o0 hover: text-white';
                      }`}
                    >;
                      <List className="w-5 h-5" />;
                    </button>;
                  </div>;
                </div>;
              </div>;
              {/* Loading State */}
              {isSearching && (;
                <div className="text-center py-12">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-full mb-4">;
                    <RefreshCw className="w-8 h-8 text-green-40o0 animate-spin" />;
                  </div>;
                  <p className="text-gray-30o0">Searching for "{searchQuery}"...</p>;
                </div>;
              )}
;
              {/* No Results */}
              {!isSearching && searchResults.length === 0 && (;
                <div className="text-center py-12">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-50o0/20 to-slate-50o0/20 rounded-full mb-4">;
                    <Search className="w-8 h-8 text-gray-40o0" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">No, results, found</h3>;
                  <p className="text-gray-30o0 mb-6">;
                    Try, adjusting, your search, terms, or browse, our, categories instead.;
                  </p>;
                  <button;
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5";
                  >;
                    Start, New, Search;
                  </button>;
                </div>;
              )}
;
              {/* Search Results */}
              {!isSearching && searchResults.length > 0 && (;
                <>;
                  {viewMode === 'grid' ? (;
                    <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                      {searchResults.map((itemindex) => (;
                        <motion.div;
                          key={item.id}
                          initial={{ opacity: 0,;
  y: 20 }}
                          animate={{ opacity: 1,;
  y: 0 }}
                          transition={{ duration: 0.5dela,;
  y: index * 0.1}}
                          className="group";
                        >;
                          <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 overflow-hidden">;
                            <div className="p-6">;
                              <div className="flex items-center gap-3 mb-4">;
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                                  {categories.find(c => c.id === item.category)?.name}
                                </span>;
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                                  {types.find(t => t.id === item.type)?.name}
                                </span>;
                              </div>;
                              <div className="flex items-center gap-3 mb-4">;
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-xl">;
                                  <item.icon className="w-6 h-6 text-green-40o0" />;
                                </div>;
                                <h3 className="text-lg font-bold text-white group-hover: text-green-40o0 transition-colors duration-20o0">;
                                  {item.title}
                                </h3>;
                              </div>;
                              <p className="text-gray-30o0 text-sm mb-4 leading-relaxed line-clamp-3">;
                                {item.description}
                              </p>;
                              {item.rating && (;
                                <div className="flex items-center gap-2 mb-4 text-sm">;
                                  <div className="flex items-center gap-1">;
                                    {renderStars(item.rating)}
                                    <span className="text-gray-40o0">({item.reviews})</span>;
                                  </div>;
                                </div>;
                              )}
;
                              <div className="flex items-center justify-between mb-4">;
                                <div className="flex items-center gap-2 text-gray-40o0 text-sm">;
                                  <Calendar className="w-4 h-4" />;
                                  {formatDate(item.date)}
                                </div>;
                                <div className="flex items-center gap-2">;
                                  <button className="p-2 text-gray-40o0 hover: text-white transition-colors duration-20o0">;
                                    <Eye className="w-4 h-4" />;
                                  </button>;
                                </div>;
                              </div>;
                              <div className="flex flex-wrap gap-2 mb-4">;
                                {item.tags.slice(0o3).map((tagtagIndex) => (;
                                  <span key={tagIndex} className="px-2 py-1 bg-slate-70o0/50 text-gray-30o0 text-xs rounded">;
                                    {tag}
                                  </span>;
                                ))}
                              </div>;
                              ;
                              <Link;
                                to={item.url}
                                className="w-full px-4 py-2 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5 text-center block";
                              >;
                                View Details;
                              </Link>;
                            </div>;
                          </div>;
                        </motion.div>;
                      ))}
                    </div>;
                  ) : (;
                    <div className="space-y-4">;
                      {searchResults.map((itemindex) => (;
                        <motion.div;
                          key={item.id}
                          initial={{ opacity: 0,;
  x: -20 }}
                          animate={{ opacity: 1,;
  x: 0 }}
                          transition={{ duration: 0.5dela,;
  y: index * 0.1}}
                          className="group";
                        >;
                          <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 hover: border-green-40o0/50 transition-all duration-30o0 p-6">;
                            <div className="flex items-center gap-6">;
                              <div className="flex-shrink-0">;
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-xl">;
                                  <item.icon className="w-8 h-8 text-green-40o0" />;
                                </div>;
                              </div>;
                              <div className="flex-1 min-w-0">;
                                <div className="flex items-center gap-3 mb-2">;
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                                    {categories.find(c => c.id === item.category)?.name}
                                  </span>;
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                                    {types.find(t => t.id === item.type)?.name}
                                  </span>;
                                </div>;
                                <h3 className="text-xl font-bold text-white group-hover: text-green-40o0 transition-colors duration-20o0 mb-2">;
                                  {item.title}
                                </h3>;
                                <p className="text-gray-30o0 text-sm mb-3 leading-relaxed">;
                                  {item.description}
                                </p>;
                                {item.rating && (;
                                  <div className="flex items-center gap-4 text-sm mb-3">;
                                    <div className="flex items-center gap-1">;
                                      {renderStars(item.rating)}
                                      <span className="text-gray-40o0 ml-1">({item.reviews})</span>;
                                    </div>;
                                    <div className="text-gray-40o0">•</div>;
                                    <div className="text-gray-40o0">{item.readTime}</div>;
                                  </div>;
                                )}
;
                                <div className="flex flex-wrap gap-2 mb-3">;
                                  {item.tags.map((tagtagIndex) => (;
                                    <span key={tagIndex} className="px-2 py-1 bg-slate-70o0/50 text-gray-30o0 text-xs rounded">;
                                      {tag}
                                    </span>;
                                  ))}
                                </div>;
                              </div>;
                              <div className="flex-shrink-0 text-right">;
                                <div className="flex items-center gap-2 mb-3">;
                                  <button className="p-2 text-gray-40o0 hover: text-white transition-colors duration-20o0">;
                                    <Eye className="w-5 h-5" />;
                                  </button>;
                                </div>;
                                <Link;
                                  to={item.url}
                                  className="px-6 py-2 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5";
                                >;
                                  View Details;
                                </Link>;
                              </div>;
                            </div>;
                          </div>;
                        </motion.div>;
                      ),;
    )}
                    </div>;
                  )}
                </>;
              )}
            </div>;
          </div>;
        </section>;
      )}
    </div>;
  );
};
;