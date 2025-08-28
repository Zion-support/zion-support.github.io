import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Building, 
  Target, 
  Rocket, 
  Star,
  Cpu,
  Lock,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  TrendingUp,
  Award,
  Code,
  Truck,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  Globe,
  Tag,
  Calendar,
  MapPin,
  Package,
  FileText,
  Video,
  GraduationCap,
  TestTube
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  icon: any;
  tags: string[];
  featured?: boolean;
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // All searchable content
  const allContent: SearchResult[] = [
    // Main Pages
    { id: 'home', title: 'Home', description: 'Main landing page', path: '/', category: 'Main Pages', icon: Globe, tags: ['home', 'landing', 'main'] },
    { id: 'about', title: 'About Us', description: 'Company information and mission', path: '/about', category: 'Main Pages', icon: Users, tags: ['company', 'about', 'mission'] },
    { id: 'contact', title: 'Contact', description: 'Get in touch with us', path: '/contact', category: 'Main Pages', icon: MessageCircle, tags: ['contact', 'support', 'help'] },
    { id: 'careers', title: 'Careers', description: 'Job opportunities and career growth', path: '/careers', category: 'Main Pages', icon: Users, tags: ['jobs', 'careers', 'hiring'] },
    { id: 'partners', title: 'Partners', description: 'Partnership opportunities', path: '/partners', category: 'Main Pages', icon: Users, tags: ['partnerships', 'collaboration'] },
    { id: 'team', title: 'Team', description: 'Meet our team members', path: '/team', category: 'Main Pages', icon: Users, tags: ['team', 'people', 'leadership'] },
    { id: 'news', title: 'News', description: 'Latest company updates', path: '/news', category: 'Main Pages', icon: BookOpen, tags: ['news', 'updates', 'announcements'] },
    { id: 'events', title: 'Events', description: 'Upcoming events and webinars', path: '/events', category: 'Main Pages', icon: Calendar, tags: ['events', 'webinars', 'conferences'] },
    { id: 'blog', title: 'Blog', description: 'Industry insights and articles', path: '/blog', category: 'Main Pages', icon: BookOpen, tags: ['blog', 'articles', 'insights'] },
    { id: 'faq', title: 'FAQ', description: 'Frequently asked questions', path: '/faq', category: 'Main Pages', icon: HelpCircle, tags: ['faq', 'questions', 'help'] },
    { id: 'help', title: 'Help Center', description: 'Support and documentation', path: '/help', category: 'Main Pages', icon: HelpCircle, tags: ['help', 'support', 'documentation'] },
    { id: 'sitemap', title: 'Sitemap', description: 'Complete site navigation', path: '/sitemap', category: 'Main Pages', icon: MapPin, tags: ['navigation', 'sitemap', 'structure'] },

    // Core Services
    { id: 'services', title: 'Services Overview', description: 'All our services', path: '/services', category: 'Core Services', icon: Zap, tags: ['services', 'overview', 'all'] },
    { id: 'services2026', title: '2026 Services', description: 'Revolutionary AI & Quantum Solutions', path: '/services2026', category: 'Core Services', icon: Star, tags: ['2026', 'ai', 'quantum', 'revolutionary'], featured: true },
    { id: 'services2027', title: '2027 Services', description: 'Cutting-edge Innovation & Emerging Tech', path: '/services2027', category: 'Core Services', icon: Star, tags: ['2027', 'innovation', 'emerging', 'tech'], featured: true },
    { id: 'ai-services', title: 'AI Services', description: 'Artificial Intelligence solutions', path: '/ai-services', category: 'Core Services', icon: Brain, tags: ['ai', 'artificial intelligence', 'machine learning'] },
    { id: 'it-services', title: 'IT Services', description: 'Information Technology services', path: '/it-services', category: 'Core Services', icon: Building, tags: ['it', 'information technology', 'infrastructure'] },
    { id: 'micro-saas', title: 'Micro SaaS', description: 'Software as a Service solutions', path: '/micro-saas', category: 'Core Services', icon: ShoppingCart, tags: ['saas', 'software', 'micro'] },
    { id: 'comprehensive-services', title: 'Comprehensive Services', description: 'Full-service solutions', path: '/comprehensive-services', category: 'Core Services', icon: Zap, tags: ['comprehensive', 'full-service', 'complete'] },
    { id: 'mobile-launch', title: 'Mobile Launch', description: 'Mobile app development', path: '/mobile-launch', category: 'Core Services', icon: Smartphone, tags: ['mobile', 'app', 'development'] },
    { id: 'analytics', title: 'Analytics', description: 'Data analytics services', path: '/analytics', category: 'Core Services', icon: BarChart3, tags: ['analytics', 'data', 'insights'] },

    // AI & Machine Learning
    { id: 'ai-bi', title: 'AI Business Intelligence', description: 'Advanced analytics & ML insights', path: '/services/ai-business-intelligence', category: 'AI & ML', icon: Brain, tags: ['ai', 'business intelligence', 'analytics', 'ml'] },
    { id: 'ai-compliance', title: 'AI Compliance Assistant', description: 'Automated regulatory compliance', path: '/services/ai-compliance-assistant', category: 'AI & ML', icon: Shield, tags: ['ai', 'compliance', 'regulatory', 'automation'] },
    { id: 'ai-sales', title: 'AI Sales Copilot', description: 'Intelligent sales optimization', path: '/services/ai-sales-copilot', category: 'AI & ML', icon: Users, tags: ['ai', 'sales', 'optimization', 'copilot'] },
    { id: 'ai-seo', title: 'AI-Powered SEO', description: 'Machine learning SEO optimization', path: '/services/ai-seo', category: 'AI & ML', icon: Search, tags: ['ai', 'seo', 'optimization', 'machine learning'] },
    { id: 'ai-interview', title: 'Interview Assessment AI', description: 'AI-powered candidate evaluation', path: '/services/interview-assessment', category: 'AI & ML', icon: Users, tags: ['ai', 'interview', 'assessment', 'hiring'] },
    { id: 'ai-content', title: 'AI Content Generator', description: 'Automated content creation', path: '/services/ai-content-generator', category: 'AI & ML', icon: PenTool, tags: ['ai', 'content', 'generation', 'automation'] },
    { id: 'ai-support', title: 'AI Customer Support', description: 'Intelligent support automation', path: '/services/ai-customer-support', category: 'AI & ML', icon: MessageCircle, tags: ['ai', 'customer support', 'automation'] },
    { id: 'ai-research', title: 'AI Autonomous Research', description: 'AI-powered research tools', path: '/services/ai-autonomous-research-assistant', category: 'AI & ML', icon: Brain, tags: ['ai', 'research', 'autonomous', 'tools'] },
    { id: 'ai-supply-chain', title: 'AI Supply Chain Optimization', description: 'Supply chain AI solutions', path: '/services/ai-supply-chain-optimization', category: 'AI & ML', icon: TrendingUp, tags: ['ai', 'supply chain', 'optimization'] },
    { id: 'ai-marketing', title: 'AI Content Marketing Suite', description: 'Marketing automation platform', path: '/services/ai-content-marketing-suite', category: 'AI & ML', icon: PenTool, tags: ['ai', 'marketing', 'automation', 'content'] },
    { id: 'ai-quantum', title: 'AI Quantum Hybrid Platform', description: 'Quantum-AI integration', path: '/services/ai-quantum-hybrid-platform', category: 'AI & ML', icon: Atom, tags: ['ai', 'quantum', 'hybrid', 'integration'] },
    { id: 'ai-cybersecurity', title: 'AI Cybersecurity Platform', description: 'AI-powered security', path: '/services/ai-cybersecurity-platform', category: 'AI & ML', icon: Shield, tags: ['ai', 'cybersecurity', 'security', 'platform'] },
    { id: 'ai-healthcare', title: 'AI Healthcare Platform', description: 'Healthcare AI solutions', path: '/services/ai-healthcare-platform', category: 'AI & ML', icon: Heart, tags: ['ai', 'healthcare', 'medical', 'platform'] },

    // Cloud & DevOps
    { id: 'cloud-devops', title: 'Cloud DevOps', description: 'Infrastructure automation & scaling', path: '/services/cloud-devops', category: 'Cloud & DevOps', icon: Cloud, tags: ['cloud', 'devops', 'infrastructure', 'automation'] },
    { id: 'it-infrastructure', title: 'IT Infrastructure', description: 'Enterprise infrastructure solutions', path: '/services/it-infrastructure', category: 'Cloud & DevOps', icon: Server, tags: ['it', 'infrastructure', 'enterprise', 'solutions'] },
    { id: 'finops', title: 'FinOps Advisor', description: 'Cloud cost optimization', path: '/services/finops-advisor', category: 'Cloud & DevOps', icon: DollarSign, tags: ['finops', 'cloud', 'cost', 'optimization'] },
    { id: 'cloud-finops', title: 'Cloud FinOps Optimizer', description: 'Financial operations automation', path: '/services/cloud-finops-optimizer', category: 'Cloud & DevOps', icon: BarChart3, tags: ['cloud', 'finops', 'financial', 'automation'] },
    { id: 'digital-twin', title: 'Digital Twin', description: 'Virtual system replicas', path: '/services/digital-twin', category: 'Cloud & DevOps', icon: Eye, tags: ['digital twin', 'virtual', 'replicas', 'simulation'] },
    { id: 'digital-transformation', title: 'Digital Transformation', description: 'Strategic technology consulting', path: '/services/digital-transformation', category: 'Cloud & DevOps', icon: Zap, tags: ['digital transformation', 'strategy', 'consulting'] },

    // Cybersecurity
    { id: 'security-headers', title: 'Security Headers & CSP', description: 'Web security hardening', path: '/services/security-headers-csp', category: 'Cybersecurity', icon: Lock, tags: ['security', 'headers', 'csp', 'web security'] },
    { id: 'dsr-portal', title: 'DSR Privacy Portal', description: 'GDPR/CCPA compliance', path: '/services/dsr-portal', category: 'Cybersecurity', icon: Shield, tags: ['dsr', 'privacy', 'gdpr', 'ccpa', 'compliance'] },
    { id: 'zero-trust', title: 'Zero Trust Network Access', description: 'Advanced security architecture', path: '/services/zero-trust-network-access', category: 'Cybersecurity', icon: Shield, tags: ['zero trust', 'network', 'security', 'architecture'] },
    { id: 'ai-cyber', title: 'AI Cybersecurity', description: 'AI-powered security solutions', path: '/services/ai-cybersecurity', category: 'Cybersecurity', icon: Shield, tags: ['ai', 'cybersecurity', 'security', 'ai-powered'] },

    // Emerging Technologies
    { id: 'quantum-computing', title: 'Quantum Computing', description: 'Next-gen computational power', path: '/services/quantum-computing', category: 'Emerging Tech', icon: Atom, tags: ['quantum', 'computing', 'next-gen', 'computational'] },
    { id: 'iot-edge', title: 'IoT Edge Computing', description: 'Smart device networks', path: '/services/iot-edge-computing', category: 'Emerging Tech', icon: Network, tags: ['iot', 'edge computing', 'smart devices', 'networks'] },
    { id: 'quantum-ml', title: 'Quantum Machine Learning', description: 'Quantum ML algorithms', path: '/services/quantum-machine-learning', category: 'Emerging Tech', icon: Atom, tags: ['quantum', 'machine learning', 'ml', 'algorithms'] },
    { id: 'sustainable-tech', title: 'Sustainable Technology', description: 'Green tech solutions', path: '/services/sustainable-technology', category: 'Emerging Tech', icon: Heart, tags: ['sustainable', 'green tech', 'environmental', 'solutions'] },

    // Data & Analytics
    { id: 'data-analytics', title: 'Data Analytics', description: 'Business intelligence & insights', path: '/services/data-analytics', category: 'Data & Analytics', icon: BarChart3, tags: ['data', 'analytics', 'business intelligence', 'insights'] },
    { id: 'business-intelligence', title: 'Business Intelligence', description: 'Performance metrics & reporting', path: '/services/business-intelligence', category: 'Data & Analytics', icon: TrendingUp, tags: ['business intelligence', 'bi', 'metrics', 'reporting'] },
    { id: 'ai-predictive', title: 'AI Predictive Maintenance', description: 'Predictive analytics', path: '/services/ai-predictive-maintenance', category: 'Data & Analytics', icon: TrendingUp, tags: ['ai', 'predictive', 'maintenance', 'analytics'] },
    { id: 'website-analytics', title: 'Website Analytics', description: 'Web performance tracking', path: '/services/website-analytics', category: 'Data & Analytics', icon: BarChart3, tags: ['website', 'analytics', 'performance', 'tracking'] },

    // Micro SaaS Solutions
    { id: 'micro-saas-platform', title: 'Micro SaaS Platform', description: 'Niche software solutions', path: '/services/micro-saas-solutions', category: 'Micro SaaS', icon: ShoppingCart, tags: ['micro saas', 'platform', 'niche', 'software'] },
    { id: 'micro-crm', title: 'Micro CRM', description: 'Customer relationship management', path: '/services/micro-crm', category: 'Micro SaaS', icon: Users, tags: ['micro crm', 'customer', 'relationship', 'management'] },
    { id: 'helpdesk', title: 'Helpdesk Platform', description: 'Customer support system', path: '/services/helpdesk', category: 'Micro SaaS', icon: MessageCircle, tags: ['helpdesk', 'support', 'customer', 'system'] },
    { id: 'email-sequencer', title: 'Email Sequencer', description: 'Email automation tools', path: '/services/email-sequencer', category: 'Micro SaaS', icon: MessageCircle, tags: ['email', 'sequencer', 'automation', 'tools'] },
    { id: 'podcast-transcription', title: 'Podcast Transcription', description: 'Audio processing services', path: '/services/podcast-transcription', category: 'Micro SaaS', icon: MessageCircle, tags: ['podcast', 'transcription', 'audio', 'processing'] },
    { id: 'returns-management', title: 'Returns Management', description: 'E-commerce returns handling', path: '/services/returns-management', category: 'Micro SaaS', icon: ShoppingCart, tags: ['returns', 'management', 'e-commerce', 'handling'] },

    // Industry Solutions
    { id: 'enterprise-solutions', title: 'Enterprise Solutions', description: 'Large business solutions', path: '/solutions/enterprise', category: 'Industry Solutions', icon: Building, tags: ['enterprise', 'solutions', 'large business', 'corporate'] },
    { id: 'healthcare-solutions', title: 'Healthcare Solutions', description: 'Healthcare industry solutions', path: '/solutions/healthcare', category: 'Industry Solutions', icon: Heart, tags: ['healthcare', 'solutions', 'medical', 'industry'] },
    { id: 'manufacturing-solutions', title: 'Manufacturing Solutions', description: 'Manufacturing optimization', path: '/solutions/manufacturing', category: 'Industry Solutions', icon: Cpu, tags: ['manufacturing', 'solutions', 'optimization', 'production'] },
    { id: 'financial-solutions', title: 'Financial Solutions', description: 'Financial services technology', path: '/solutions/financial', category: 'Industry Solutions', icon: DollarSign, tags: ['financial', 'solutions', 'fintech', 'technology'] },
    { id: 'government-solutions', title: 'Government Solutions', description: 'Public sector technology', path: '/solutions/government', category: 'Industry Solutions', icon: Building, tags: ['government', 'solutions', 'public sector', 'technology'] },
    { id: 'retail-solutions', title: 'Retail Solutions', description: 'Retail technology solutions', path: '/solutions/retail', category: 'Industry Solutions', icon: ShoppingCart, tags: ['retail', 'solutions', 'technology', 'commerce'] },

    // Marketplace
    { id: 'marketplace', title: 'Marketplace', description: 'Digital marketplace', path: '/marketplace', category: 'Marketplace', icon: ShoppingCart, tags: ['marketplace', 'digital', 'platform'] },
    { id: 'marketplace-products', title: 'Products', description: 'Digital products', path: '/marketplace/products', category: 'Marketplace', icon: Package, tags: ['products', 'digital', 'marketplace'] },
    { id: 'marketplace-talent', title: 'Talent', description: 'Expert talent pool', path: '/marketplace/talent', category: 'Marketplace', icon: Users, tags: ['talent', 'experts', 'pool', 'marketplace'] },
    { id: 'marketplace-equipment', title: 'Equipment', description: 'Technology equipment', path: '/marketplace/equipment', category: 'Marketplace', icon: Server, tags: ['equipment', 'technology', 'hardware', 'marketplace'] },
    { id: 'marketplace-services', title: 'Services', description: 'Professional services', path: '/marketplace/services', category: 'Marketplace', icon: Zap, tags: ['services', 'professional', 'marketplace'] },

    // Resources
    { id: 'documentation', title: 'Documentation', description: 'Technical documentation', path: '/docs', category: 'Resources', icon: FileText, tags: ['documentation', 'technical', 'docs', 'guides'] },
    { id: 'developers', title: 'Developers', description: 'Developer resources', path: '/developers', category: 'Resources', icon: Code, tags: ['developers', 'resources', 'api', 'sdk'] },
    { id: 'white-papers', title: 'White Papers', description: 'Industry research', path: '/white-papers', category: 'Resources', icon: FileText, tags: ['white papers', 'research', 'industry', 'insights'] },
    { id: 'webinars', title: 'Webinars', description: 'Educational content', path: '/webinars', category: 'Resources', icon: Video, tags: ['webinars', 'educational', 'content', 'learning'] },
    { id: 'training', title: 'Training', description: 'Skill development', path: '/training', category: 'Resources', icon: GraduationCap, tags: ['training', 'skills', 'development', 'learning'] },
    { id: 'support', title: 'Support', description: 'Technical support', path: '/support', category: 'Resources', icon: HelpCircle, tags: ['support', 'technical', 'help', 'assistance'] },
    { id: 'research-development', title: 'Research & Development', description: 'R&D initiatives', path: '/research-development', category: 'Resources', icon: TestTube, tags: ['research', 'development', 'r&d', 'initiatives'] }
  ];

  // Available categories
  const categories = ['all', ...Array.from(new Set(allContent.map(item => item.category)))];

  // Available tags
  const allTags = Array.from(new Set(allContent.flatMap(item => item.tags)));
  const popularTags = allTags.slice(0, 20); // Show top 20 tags

  // Filtered results
  const filteredResults = useMemo(() => {
    let results = allContent;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(item => item.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      results = results.filter(item =>
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }

    return results;
  }, [searchQuery, selectedCategory, selectedTags]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 1000);
    }
  };

  // Handle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full mb-6">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Search Zion Tech Group
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Find the services, solutions, and information you need across our comprehensive platform
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, solutions, or information..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 transition-all duration-200"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-white font-medium">Filters:</span>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              {(selectedCategory !== 'all' || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-slate-300">
              {searchQuery ? `Found ${filteredResults.length} results for "${searchQuery}"` : `Showing ${filteredResults.length} items`}
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={result.path}
                    className="block p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <result.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      {result.featured && (
                        <Star className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {result.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                      {result.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded">
                        {result.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredResults.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
