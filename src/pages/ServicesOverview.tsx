import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Zap, 
  Globe, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Award,
  Clock,
  Target,
  BarChart3,
  Cpu,
  Lock,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  Palette,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  DollarSign,
  Users,
  Eye,
  ArrowUpRight,
  Grid,
  List,
  ChevronRight,
  ChevronDown,
  Info,
  Calendar,
  UserCheck,
  Globe,
  Layers,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  Zap,
  Target,
  Award,
  Clock,
  Users,
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesCatalog } from '../data/servicesCatalog';

// Enhanced category definitions with better organization
const serviceCategories = [
  {
    id: 'all',
    name: 'All Services',
    icon: Grid,
    color: 'from-blue-600 to-cyan-600',
    description: 'Complete portfolio of all services',
    count: 0
  },
  {
    id: 'Micro SaaS',
    name: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    color: 'from-purple-600 to-pink-600',
    description: 'Scalable software-as-a-service solutions',
    count: 0
  },
  {
    id: 'IT Services',
    name: 'IT Services',
    icon: Server,
    color: 'from-green-600 to-emerald-600',
    description: 'Enterprise IT infrastructure and consulting',
    count: 0
  },
  {
    id: 'AI Solutions',
    name: 'AI Solutions',
    icon: Brain,
    color: 'from-indigo-600 to-purple-600',
    description: 'Advanced AI and machine learning solutions',
    count: 0
  },
  {
    id: 'Cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    description: 'Security and compliance solutions',
    count: 0
  },
  {
    id: 'Cloud & DevOps',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-600',
    description: 'Cloud infrastructure and development operations',
    count: 0
  },
  {
    id: 'Emerging Tech',
    name: 'Emerging Technologies',
    icon: Sparkles,
    color: 'from-yellow-600 to-orange-600',
    description: 'Cutting-edge technologies and innovations',
    count: 0
  }
];

// Enhanced service features display
const ServiceCard = ({ service, viewMode }: { service: unknown; viewMode: 'grid' | 'list' }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getCategoryIcon = (category: string) => {
    const cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.icon : Grid;
  };

  const getCategoryColor = (category: string) => {
    const cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-600 to-gray-700';
  };

  if (viewMode === 'grid') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
      >
        {/* Service Header */}
        <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6' })}
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Service Content */}
        <div className="p-6">
          {/* Pricing */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-gray-900">{service.price}</div>
            <span className="text-sm text-gray-500 capitalize">per {service.billing}</span>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Key Features
            </h4>
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  {expanded ? 'Show less' : `+${service.features.length - 3} more features`}
                  {expanded ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
                </button>
              )}
              {expanded && service.features.slice(3).map((feature: string, idx: number) => (
                <div key={idx + 3} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={service.href}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg flex items-center justify-center"
          >
            {service.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    );
  }

  // List view
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Service Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
              {React.createElement(getCategoryIcon(service.category), { className: 'w-5 h-5 text-white' })}
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing and CTA */}
        <div className="lg:text-right">
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-900">{service.price}</div>
            <span className="text-sm text-gray-500 capitalize">per {service.billing}</span>
          </div>
          <a
            href={service.href}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            {service.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Sidebar component for better navigation
const ServicesSidebar = ({ 
  selectedCategory, 
  onCategoryChange, 
  categoriesWithCounts 
}: { 
  selectedCategory: string; 
  onCategoryChange: (category: string) => void; 
  categoriesWithCounts: unknown[];
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Filter className="w-5 h-5 mr-2 text-blue-600" />
        Service Categories
      </h3>
      <div className="space-y-2">
        {categoriesWithCounts.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
              selectedCategory === category.id
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                {React.createElement(category.icon, { className: 'w-4 h-4 text-white' })}
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>
      
      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <span>Total Services</span>
            <span className="font-semibold text-gray-900">
              {categoriesWithCounts.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Categories</span>
            <span className="font-semibold text-gray-900">{categoriesWithCounts.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Flatten all services from the catalog
  const allServices = useMemo(() => {
    return servicesCatalog.flatMap(category => category.items);
  }, []);

  // Calculate service counts for each category
  const categoriesWithCounts = useMemo(() => {
    return serviceCategories.map(cat => {
      const count = allServices.filter(service => {
        if (cat.id === 'all') return true;
        return service.category === cat.id;
      }).length;
      return { ...cat, count };
    });
  }, [allServices]);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allServices, searchQuery, selectedCategory]);

  return (
    <>
      <SEO 
        title="Services Overview | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI solutions, IT services, and Micro SaaS platforms. Discover innovative technology solutions for your business needs."
        keywords="AI solutions, IT services, Micro SaaS, cybersecurity, cloud services, digital transformation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Service Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete range of AI-powered solutions, IT services, and innovative Micro SaaS platforms designed to transform your business
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{allServices.length}+ Services</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServicesSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                categoriesWithCounts={categoriesWithCounts}
              />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Search and Filter Section */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services by name, description, or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                      title="Grid View"
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                      title="List View"
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Advanced Filters Toggle */}
                  <button
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Filter className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Filters</span>
                    {showAdvancedFilters ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>

                {/* Advanced Filters */}
                {showAdvancedFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">All Prices</option>
                          <option value="0-100">$0 - $100</option>
                          <option value="100-500">$100 - $500</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000+">$1,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Billing Cycle</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">All Cycles</option>
                          <option value="month">Monthly</option>
                          <option value="project">Project-based</option>
                          <option value="hour">Hourly</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="name">Name</option>
                          <option value="price-low">Price: Low to High</option>
                          <option value="price-high">Price: High to Low</option>
                          <option value="category">Category</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredServices.length} services
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Services Grid/List */}
              {filteredServices.length > 0 ? (
                viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredServices.map((service, index) => (
                      <ServiceCard key={service.id} service={service} viewMode={viewMode} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredServices.map((service, index) => (
                      <ServiceCard key={service.id} service={service} viewMode={viewMode} />
                    ))}
                  </div>
                )
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or browse all services
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our innovative solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/request-quote"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}