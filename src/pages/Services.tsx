import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  Cloud, ;
  Shield, ;
  Rocket, ;
  Zap, ;
  Users, ;
  Globe, ;
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
  MessageCircle,;
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
  Mail as MailIcon,;
  MapPin,;
  Infinity,;
  Truck,;
  Atom,;
  Scale,;
  BookOpen,;
  PenTool,;
  Play,;
  GitFork,;
  Server,;
  Building,;
  Factory,;
  Car,;
  Settings;
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_SERVICES_2030 } from "../data/comprehensiveServices2030"
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from "../data/comprehensivePricingGuide2030"
export default function Services() {;
  const [activeCategory, setActiveCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [sortBy, setSortBy] = useState('rating')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  //[^;]*
  const categories = [;
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' };
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' };
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' };
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' };
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' };
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' };
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' };
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' };
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' };
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' };
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' };
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' };
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' };
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' };
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' };
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' };
  ];
  const filteredServices = COMPREHENSIVE_SERVICES_2030.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'rating':;
        return b.rating - a.rating,;
      case 'price':;
        return a.price - b.price,;
      case 'reviews':;
        return b.reviewCount - a.reviewCount,;
      case 'name':;
        return a.title.localeCompare(b.title),;
      default: return 0;
    };
  });
  //[^;]*
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {;
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },;

  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Business Intelligence':;
        return <[^>]*/>
      case 'Cybersecurity':;
        return <Shield className="w-6 h-6" />,;
      case 'Cloud & DevOps':;
        return <Cloud className="w-6 h-6" />,;
      case 'AI & Marketing':;
        return <TrendingUp className="w-6 h-6" />,;
      case 'Quantum Computing':;
        return <Atom className="w-6 h-6" />,;
      case 'IoT & Edge Computing':;
        return <Cpu className="w-6 h-6" />,;
      case 'Blockchain & Web3':;
        return <GitFork className="w-6 h-6" />,;
      case 'AI & Healthcare':;
        return <Heart className="w-6 h-6" />,;
      case 'FinTech':;
        return <DollarSign className="w-6 h-6" />,;
      case 'Digital Twin':;
        return <Globe className="w-6 h-6" />,;
      case 'Space Technology':;
        return <Rocket className="w-6 h-6" />,;
      case 'Sustainable Technology':;
        return <Leaf className="w-6 h-6" />,;
      case 'AI & Content':;
        return <PenTool className="w-6 h-6" />,;
      case 'AI & Customer Support':;
        return <MessageCircle className="w-6 h-6" />,;
      case 'AI & HR':;
        return <Users className="w-6 h-6" />,;
      case 'AI & Legal Tech':;
        return <Scale className="w-6 h-6" />,;
      case 'AI & Research':;
        return <BookOpen className="w-6 h-6" />,;
      case 'AI & Green Tech':;
        return <Leaf className="w-6 h-6" />,;
      case 'AI & Metaverse':;
        return <Globe2 className="w-6 h-6" />,;
      case 'AI & Space Tech':;
        return <Rocket className="w-6 h-6" />,;
      case 'AI & Operations':;
        return <Settings className="w-6 h-6" />,;
      case 'AI & Development':;
        return <Code className="w-6 h-6" />,;
      case 'AI & Education':;
        return <Users className="w-6 h-6" />,;
      case 'AI & Entertainment':;
        return <Play className="w-6 h-6" />,;
      default:;
        return <[^>]*/>
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Comprehensive AI & Technology Services - Zion Tech Group"
        description="Explore our comprehensive suite of AI-powered services including autonomous systems, quantum computing, blockchain solutions, and cutting-edge technology innovations. Transform your business with Zion Tech Group."
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-16 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Revolutionary;
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> AI Services</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Discover our comprehensive suite of cutting-edge AI solutions, from autonomous business operations to quantum computing and blockchain technology.;
            </[^>]*>
            ;
            {/* Search Bar */};
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
            </[^>]*>

            {/* Stats */};
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-cyan-400">{COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length}+</[^>]*>
                <div className="text-gray-400">Services Available</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="text-3xl font-bold text-blue-400">500+</[^>]*>
                <div className="text-gray-400">Happy Clients</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="text-3xl font-bold text-purple-400">99.9%</[^>]*>
                <div className="text-gray-400">Satisfaction Rate</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="text-3xl font-bold text-green-400">24/7</[^>]*>
                <div className="text-gray-400">Support</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Filters Section */};
      <section className="py-8 border-b border-slate-700/50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
            {/* Category Filter */};
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (;
                <button;
                  key={category.id};
                  onClick={() => setActiveCategory(category.id)};
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${;
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`};
                >;
                  <span className="mr-2">{category.icon}</[^>]*>
                  {category.name} ({category.count});
                </[^>]*>
              ))};
            </[^>]*>

            {/* Sort Options */};
            <div className="flex items-center space-x-4">;
              <label className="text-gray-300 text-sm">Sort by:</[^>]*>
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="rating">Rating</[^>]*>
                <option value="price">Price</[^>]*>
                <option value="reviews">Reviews</[^>]*>
                <option value="name">Name</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          {currentServices.length === 0 ? (;
            <div className="text-center py-16">;
              <div className="text-6xl mb-4">🔍</[^>]*>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</[^>]*>
              <p className="text-gray-400">Try adjusting your search or filter criteria</[^>]*>
            </[^>]*>
          ) : (;
            <>;
              <AnimatePresence mode="wait">;
                <motion.div
                  key={`${activeCategory}-${searchTerm}-${sortBy}-${currentPage}`};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  exit={{ opacity: 0, y: -20 }};
                  transition={{ duration: 0.3 }};
                  className="[^"]*"
                >;
                  {currentServices.map((service, index) => (;
                    <motion.div
                      key={service.id};
                      initial={{ opacity: 0, y: 20 }};
                      animate={{ opacity: 1, y: 0 }};
                      transition={{ duration: 0.3, delay: index * 0.1 }};
                      className="[^"]*"
                    >;
                      {/* Featured Badge */};
                      {service.featured && (;&& (; (
                        <div className="absolute top-4 right-4 z-10">;
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">;
                            <[^>]*/>
                            Featured;
                          </[^>]*>
                        </[^>]*>
                      )};

                      {/* Service Image */};
                      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">;
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></[^>]*>
                        <div className="absolute inset-0 flex items-center justify-center">;
                          {getCategoryIcon(service.category)};
                        </[^>]*>
                      </[^>]*>

                      {/* Service Content */};
                      <div className="p-6">;
                        <div className="flex items-center justify-between mb-3">;
                          <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">;
                            {service.category};
                          </[^>]*>
                          <div className="flex items-center space-x-1">;
                            <[^>]*/>
                            <span className="text-sm text-gray-300">{service.rating}</[^>]*>
                            <span className="text-sm text-gray-500">({service.reviewCount})</[^>]*>
                          </[^>]*>
                        </[^>]*>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                          {service.title};
                        </[^>]*>
                        ;
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">;
                          {service.description};
                        </[^>]*>

                        {/* Tags */};
                        <div className="flex flex-wrap gap-2 mb-4">;
                          {service.tags.slice(0, 3).map((tag) => (;
                            <span;
                              key={tag};
                              className="[^"]*"
                            >;
                              {tag};
                            </[^>]*>
                          ))};
                          {service.tags.length > 3 && (;&& (; (
                            <span className="text-xs text-gray-500">+{service.tags.length - 3} more</[^>]*>
                          )};
                        </[^>]*>

                        {/* Pricing & CTA */};
                        <div className="flex items-center justify-between">;
                          <div>;
                            <div className="text-2xl font-bold text-white">;
                              {service.currency}{service.price.toLocaleString()};
                            </[^>]*>
                            <div className="text-sm text-gray-400">;
                              {service.marketPrice};
                            </[^>]*>
                          </[^>]*>
                          <Link;
                            to={`/services/${service.id}`};
                            className="[^"]*"
                          >;
                            Learn More;
                            <[^>]*/>
                          </[^>]*>
                        </[^>]*>

                        {/* AI Score */};
                        <div className="mt-4 pt-4 border-t border-slate-700">;
                          <div className="flex items-center justify-between">;
                            <span className="text-sm text-gray-400">AI Score</[^>]*>
                            <div className="flex items-center space-x-2">;
                              <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">;
                                <div;
                                  className="[^"]*"
                                  style={{ width: `${service.aiScore}%` }};
                                ></[^>]*>
                              </[^>]*>
                              <span className="text-sm font-bold text-cyan-400">{service.aiScore}%</[^>]*>
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Pagination */};
              {totalPages > 1 && (;&& (; (
                <div className="mt-16 flex justify-center">;
                  <div className="flex items-center space-x-2">;
                    <button;
                      onClick={() => handlePageChange(currentPage - 1)};
                      disabled={currentPage === 1};
                      className="[^"]*"
                    >;
                      Previous;
                    </[^>]*>
                    ;
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (;
                      <button;
                        key={page};
                        onClick={() => handlePageChange(page)};
                        className={`px-4 py-2 rounded-lg transition-colors ${;
                          currentPage === page;
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`};
                      >;
                        {page};
                      </[^>]*>
                    ))};
                    ;
                    <button;
                      onClick={() => handlePageChange(currentPage + 1)};
                      disabled={currentPage === totalPages};
                      className="[^"]*"
                    >;
                      Next;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              )};
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Transform Your Business?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Get in touch with our experts to discuss how our AI solutions can revolutionize your operations.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/request-quote"
              className="[^"]*"
            >;
              <[^>]*/>
              Request Quote;
            </[^>]*>
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              <[^>]*/>
              Contact Us;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
