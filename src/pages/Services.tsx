import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail as MailIcon,
  MapPin,
  Phone,
  Rocket,
  Search,
  Star,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Get unique categories from services with dynamic generation
  const generateCategories = () => {
    const categoryIcons: { [key: string]: string } = {
      'AI & Business Intelligence': '🤖',
      'AI & Marketing': '📈',
      'AI & Healthcare': '🏥',
      'AI & Legal Tech': '⚖️',
      'AI & Real Estate': '🏠',
      'AI & Operations': '⚙️',
      'AI & Green Tech': '🌿',
      'AI & Autonomous Systems': '🚗',
      'AI & FinTech': '💰',
      'AI & Environmental Tech': '🌍',
      'AI & Content': '✍️',
      'AI & Customer Support': '💬',
      'AI & HR': '👥',
      'AI & Research': '🔬',
      'AI & Metaverse': '🌍',
      'AI & Space Tech': '🛸',
      'AI & Development': '💻',
      'AI & Education': '🎓',
      'AI & Entertainment': '🎮',
      'AI & Emerging Technology': '🚀',
      'Cybersecurity': '🛡️',
      'Cloud & DevOps': '☁️',
      'Quantum Computing': '⚛️',
      'IoT & Edge Computing': '🌐',
      'Blockchain & Web3': '🔗',
      'Digital Twin': '🔄',
      'Space Technology': '🚀',
      'Sustainable Technology': '🌱',
      'IT Infrastructure': '🏗️',
      'Emerging Technology': '🚀'
    };

    const categoryColors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Marketing': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-pink-500 to-red-500',
      'AI & Legal Tech': 'from-blue-500 to-indigo-500',
      'AI & Real Estate': 'from-yellow-500 to-orange-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & Green Tech': 'from-green-500 to-emerald-500',
      'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'AI & Environmental Tech': 'from-teal-500 to-green-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & Customer Support': 'from-blue-500 to-purple-500',
      'AI & HR': 'from-indigo-500 to-blue-500',
      'AI & Research': 'from-purple-500 to-violet-500',
      'AI & Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Space Tech': 'from-indigo-500 to-purple-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'AI & Education': 'from-blue-500 to-indigo-500',
      'AI & Entertainment': 'from-purple-500 to-pink-500',
      'AI & Emerging Technology': 'from-violet-500 to-purple-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Space Technology': 'from-purple-500 to-pink-500',
      'Sustainable Technology': 'from-green-500 to-teal-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-violet-500 to-purple-500'
    };

    return [
      { id: 'all', name: 'All Services', count: COMPREHENSIVE_SERVICES_INDEX_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
      ...SERVICE_CATEGORIES_2030.map(category => ({
        id: category,
        name: category,
        count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === category).length,
        icon: categoryIcons[category] || '🔧',
        color: categoryColors[category] || 'from-gray-500 to-slate-500'
      }))
    ];
  };

  const categories = generateCategories();

  // Filter services based on active category and search term
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return b.rating - a.rating;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : '🚀';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.color : 'from-cyan-500 to-blue-500';
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Innovative Technology Services 2030 | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI, IT infrastructure, and emerging technology services. From micro SAAS solutions to revolutionary 2030 technology platforms."
        keywords="AI services, IT infrastructure, emerging technology, micro SAAS, quantum computing, space technology, neural interfaces, holographic workspace, digital twins, cybersecurity, blockchain, sustainable technology"
        image="https://ziontechgroup.com/images/services-hero.jpg"
        url="https://ziontechgroup.com/services"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Revolutionary Technology Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                for the Future
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-lg text-gray-300"
            >
              Explore our comprehensive portfolio of {COMPREHENSIVE_SERVICES_INDEX_2030.length}+ cutting-edge AI, IT infrastructure, and emerging technology services. 
              From micro SAAS solutions to revolutionary 2030 technology platforms.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center rounded-full border border-gray-300 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2030.totalServices}+</div>
              <div className="text-sm text-gray-400">Total Services</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400">{SERVICE_STATISTICS_2030.totalCategories}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-pink-400">{SERVICE_STATISTICS_2030.aiServices}</div>
              <div className="text-sm text-gray-400">AI Services</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-emerald-400">{SERVICE_STATISTICS_2030.featuredServices}</div>
              <div className="text-sm text-gray-400">Featured</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-400">{SERVICE_STATISTICS_2030.averageRating}/5</div>
              <div className="text-sm text-gray-400">Avg Rating</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-400">${SERVICE_STATISTICS_2030.averagePrice}</div>
              <div className="text-sm text-gray-400">Avg Price</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-red-400">{SERVICE_STATISTICS_2030.emergingTechServices}</div>
              <div className="text-sm text-gray-400">Emerging Tech</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-gray-300 bg-white/10 px-10 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </form>
            </div>

            {/* Sort and Filter */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full border border-gray-300 bg-white/10 px-4 py-3 text-white backdrop-blur-sm focus:border-cyan-500 focus:outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="newest">Sort by Newest</option>
                <option value="aiScore">Sort by AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className="ml-2 rounded-full bg-white/20 px-2 py-1 text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {currentServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
                  >
                    {/* Service Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.images[0] || 'https://ziontechgroup.com/images/service-placeholder.jpg'}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                          {service.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 text-sm text-gray-300 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Service Details */}
                      <div className="mb-4 space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">AI Score:</span>
                          <span className="font-medium text-cyan-400">{service.aiScore}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium text-white">{service.rating}</span>
                            <span className="text-gray-400">({service.reviewCount})</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Setup:</span>
                          <span className="font-medium text-emerald-400">{service.setupTime}</span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 text-xs font-bold text-white">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <nav className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                            : 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-300 mb-8"
          >
            Join thousands of businesses already leveraging our cutting-edge technology services to drive innovation and growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
