import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { 
    Search
    Filter, 
    TrendingUp, 
    Shield, 
    Zap, 
    Globe, 
    Users, 
    BarChart3
    DollarSign
    Heart
    GraduationCap
    Target
    Settings
    Package
    CheckCircle
    Star
    ArrowRight
    Phone
    Mail
    MapPin
    ExternalLink
    Plus
    Database
    Layers
} from "lucide-react"
import { 
    comprehensiveServicesIndex2025
    getServiceStats, 
    getServicesByCategory
    getServicesBySource
    ServiceIndex 
} from "../data/comprehensive-services-index-2025"
const,
  ComprehensiveServicesDashboard202: 5: React.FC = () () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [selectedSource, setSelectedSource] = useState<string>('all')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    const stats = getServiceStats()
    const categories = stats.categoryBreakdown
    const filteredServices = useMemo(() () => {
        let filtered = comprehensiveServicesIndex2025
        if (if (searchTerm) {) {
            filtered = filtered.filter(service =>
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (if (selectedCategory !== 'all') {) {
            filtered = filtered.filter(service => service.category === selectedCategory)
        }

        if (if (selectedSource !== 'all') {) {
            filtered = filtered.filter(service => service.source === selectedSource)
        }

        return filtered
    }, [searchTerm, selectedCategory, selectedSource])

    const getCategoryColor = (catego,
  r: y: string) () => {
        const,
  const: colors: { [ke,
  y: string]: string } = { = {
            'fintech': 'from-green-500 to-emerald-600healthtech': 'from-red-500 to-pink-600edutech': 'from-purple-500 to-violet-600martech': 'from-pink-500 to-rose-600micro-saas': 'from-blue-500 to-indigo-600ai-services': 'from-cyan-500 to-blue-600it-services': 'from-slate-500 to-gray-600emerging-tech': 'from-orange-500 to-yellow-600Fintech': 'from-green-500 to-emerald-600Healthtech': 'from-red-500 to-pink-600Edutech': 'from-purple-500 to-violet-600Martech': 'from-pink-500 to-rose-600Micro SaaS': 'from-blue-500 to-indigo-600AI Services': 'from-cyan-500 to-blue-600IT Services': 'from-slate-500 to-gray-600'
        }
        return colors[category] || 'from-gray-500 to-gray-600'
    }

    const getCategoryIcon = (catego,
  r: y: string) () => {
        const,
  const: icons: { [ke,
  y: string]: React.ReactNode } = { = {
            'fintech': <DollarSign className="w-5 h-5" />
            'healthtech': <Heart className="w-5 h-5" />
            'edutech': <GraduationCap className="w-5 h-5" />
            'martech': <Target className="w-5 h-5" />
            'micro-saas': <Settings className="w-5 h-5" />
            'ai-services': <Zap className="w-5 h-5" />
            'it-services': <Shield className="w-5 h-5" />
            'emerging-tech': <TrendingUp className="w-5 h-5" />
            'Fintech': <DollarSign className="w-5 h-5" />
            'Healthtech': <Heart className="w-5 h-5" />
            'Edutech': <GraduationCap className="w-5 h-5" />
            'Martech': <Target className="w-5 h-5" />
            'Micro SaaS': <Settings className="w-5 h-5" />
            'AI Services': <Zap className="w-5 h-5" />
            'IT Services': <Shield className="w-5 h-5" />
        }
        return icons[category] || <Globe className="w-5 h-5" />
    }

    const getSourceBadge = (sour,
  c: e: string) () => {
        const const badges = { = {
            'existing': { colo,
  r: 'bg-blue-100 text-blue-800', te,
  x: t: 'Existing' }
            'new': { col,
  o: r: 'bg-green-100 text-green-800', te,
  x: t: 'New' }
            'pricing-guide': { col,
  o: r: 'bg-purple-100 text-purple-800', te,
  x: t: 'Pricing Guide' }
        }
        const badge = badges[source as keyof typeof badges] || { col,
  o: r: 'bg-gray-100 text-gray-800', te,
  x: t: source }
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                {badge.text}
            </span>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <Helmet>
                <title>Comprehensive Services Dashboard 2025 - Zion Tech Group</title>
                <meta name="description" content="Complete overview of all our innovative technology services, micro SAAS solutions, and AI-powered platforms. Comprehensive dashboard with statistics and search capabilities." />
                <meta name="keywords" content="services dashboard, micro SAAS, IT services, AI services, fintech, healthtech, edutech, martech, business solutions overview" />
                <link rel="canonical" href="htt,
  p: s://ziontechgroup.com/comprehensive-services-dashboard-2025" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={ opacit,
  y: 0, y: 20 }
                        animate={ opaci,
  t: y: 1, y: 0 }
                        transition={ durati,
  o: n: 0.8 }
                    >
                        <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
                            Comprehensive Services Dashboard 2025
                        </h1>
                        <p className="text-xl m,
  d:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                            Complete overview of our innovative technology solutions portfolio. Discover, explore, and compare all our services in one place.
                        </p>
                        <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center space-x-2 text-white">
                                <Database className="w-5 h-5 text-blue-400" />
                                <span>{stats.total} Total Services</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white">
                                <Layers className="w-5 h-5 text-green-400" />
                                <span>{stats.categories} Categories</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white">
                                <Plus className="w-5 h-5 text-yellow-400" />
                                <span>{stats.new} New Services</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Banner */}
            <section className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
                    <div className="flex flex-col,
  m: d:flex-row justify-between items-center space-y-4 m,
  d:space-y-0">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span>+1 302 464 0950</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span>kleber@ziontechgroup.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>364 E Main St STE 1008, Middletown DE 19709</span>
                            </div>
                        </div>
                        <a
                            href="htt,
  p: s: //ziontechgroup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="className="inline-flex items-center space-x-2 text-blue-600 hove,
  r:text-blue-700 font-medium";"
                        >
                            <span>Visit Our Website</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 px-4,
  s: m: px-6,
  l: g:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Services Overview</h2>
                    <div className="grid grid-cols-1,
  m: d:grid-cols-2,
  l: g:grid-cols-4 gap-6">
                        <motion.div
                            initial={ opacit,
  y: 0, y: 20 }
                            animate={ opaci,
  t: y: 1, y: 0 }
                            transition={ durati,
  o: n: 0.5, del,
  a: y: 0.1 }
                            className="className="bg-white rounded-xl p-6 shadow-lg border border-gray-100";"
                        >
                            <div className="flex items-center space-x-3">
                                <Database className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-600">Total Services</p>
                                    <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={ opaci,
  t: y: 0, y: 20 }
                            animate={ opaci,
  t: y: 1, y: 0 }
                            transition={ durati,
  o: n: 0.5, del,
  a: y: 0.2 }
                            className="className="bg-white rounded-xl p-6 shadow-lg border border-gray-100";"
                        >
                            <div className="flex items-center space-x-3">
                                <Layers className="w-8 h-8 text-green-600" />
                                <div>
                                    <p className="text-sm text-gray-600">Categories</p>
                                    <p className="text-2xl font-bold text-gray-800">{stats.categories}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={ opaci,
  t: y: 0, y: 20 }
                            animate={ opaci,
  t: y: 1, y: 0 }
                            transition={ durati,
  o: n: 0.5, del,
  a: y: 0.3 }
                            className="className="bg-white rounded-xl p-6 shadow-lg border border-gray-100";"
                        >
                            <div className="flex items-center space-x-3">
                                <Plus className="w-8 h-8 text-yellow-600" />
                                <div>
                                    <p className="text-sm text-gray-600">New Services</p>
                                    <p className="text-2xl font-bold text-gray-800">{stats.new}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={ opaci,
  t: y: 0, y: 20 }
                            animate={ opaci,
  t: y: 1, y: 0 }
                            transition={ durati,
  o: n: 0.5, del,
  a: y: 0.4 }
                            className="className="bg-white rounded-xl p-6 shadow-lg border border-gray-100";"
                        >
                            <div className="flex items-center space-x-3">
                                <BarChart3 className="w-8 h-8 text-purple-600" />
                                <div>
                                    <p className="text-sm text-gray-600">Existing Services</p>
                                    <p className="text-2xl font-bold text-gray-800">{stats.existing}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 px-4,
  s: m: px-6,
  l: g:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col l,
  g:flex-row gap-6">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg,
  focu: s: ring-2,
  focu: s:ring-blue-500 focu,
  s:border-transparent";"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex-shrink-0">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="className="px-4 py-3 border border-gray-300 rounded-lg,
  focu: s: ring-2,
  focu: s:ring-blue-500 focu,
  s:border-transparent";"
                            >
                                <option value="all">All Categories</option>
                                {categories.map(category => (
                                    <option key={category.name} value={category.name}>
                                        {category.name} ({category.count})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Source Filter */}
                        <div className="flex-shrink-0">
                            <select
                                value={selectedSource}
                                onChange={(e) => setSelectedSource(e.target.value)}
                                className="className="px-4 py-3 border border-gray-300 rounded-lg,
  focu: s: ring-2,
  focu: s:ring-blue-500 focu,
  s:border-transparent";"
                            >
                                <option value="all">All Sources</option>
                                <option value="existing">Existing Services</option>
                                <option value="new">New Services</option>
                                <option value="pricing-guide">Pricing Guide</option>
                            </select>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex-shrink-0">
                            <div className="flex border border-gray-300 rounded-lg">
                                <button
                                    onClick={onClick={() => setViewMode('grid')}
                                    className={`px-4 py-3 rounded-l-lg ${
                                        viewMode === 'grid' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-white text-gray-600,
  hove: r:bg-gray-50'
                                    }`}
                                >
                                    Grid
                                </button>
                                <button
                                    onClick={onClick={() => setViewMode('list')}
                                    className={`px-4 py-3 rounded-r-lg ${
                                        viewMode === 'list' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-white text-gray-600,
  hove: r:bg-gray-50'
                                    }`}
                                >
                                    List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Display */}
            <section className="py-12 px-4,
  s: m: px-6 l,
  g:px-8">
                <div className="max-w-7xl mx-auto">
                    {filteredServices.length === 0 ? (
                        <div className="text-center py-12">
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {filteredServices.length} Services Found
                                </h3>
                                <p className="text-gray-600">
                                    Showing {filteredServices.length} of {stats.total} total services
                                </p>
                            </div>

                            {viewMode === 'grid' ? (
                                <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
                                    {filteredServices.map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            initial={ opaci,
  t: y: 0, y: 20 }
                                            animate={ opaci,
  t: y: 1, y: 0 }
                                            transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                                            className="className="bg-white rounded-2xl shadow-lg,
  hove: r:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100";"
                                        >
                                            {/* Service Header */}
                                            <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                                                    {getSourceBadge(service.source)}
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                                <p className="text-blue-100 text-sm">{service.category}</p>
                                            </div>

                                            {/* Service Content */}
                                            <div className="p-6">
                                                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                                                
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-lg font-semibold text-gray-800">{service.pricing}</span>
                                                    <span className="text-sm text-gray-500">Starting price</span>
                                                </div>

                                                <a
                                                    href={service.link}
                                                    className="className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium,
  hove: r: from-blue-700 hove,
  r:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2";"
                                                >
                                                    <span>Learn More</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {filteredServices.map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            initial={ opaci,
  t: y: 0, x: -20 }
                                            animate={ opaci,
  t: y: 1, x: 0 }
                                            transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                                            className="className="bg-white rounded-xl p-6 shadow-lg border border-gray-100,
  hove: r:shadow-xl transition-all duration-300";"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                                                        {getCategoryIcon(service.category)}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{service.name}</h3>
                                                        <p className="text-gray-600 mb-2">{service.description}</p>
                                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                            <span>{service.category}</span>
                                                            <span>•</span>
                                                            <span>{service.pricing}</span>
                                                            <span>•</span>
                                                            {getSourceBadge(service.source)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href={service.link}
                                                    className="className="bg-blue-600 text-white px-4 py-2 rounded-lg,
  hove: r:bg-blue-700 transition-colors";"
                                                >
                                                    View Details
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
                        Ready to Explore Our Services?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get in touch with our team to discuss how our innovative solutions can transform your business
                    </p>
                    <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                        <a
                            href="t,
  e: l:+13024640950"
                            className="className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium,
  hove: r:bg-gray-100 transition-colors";"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call +1 302 464 0950</span>
                        </a>
                        <a
                            href="mail,
  t: o:kleber@ziontechgroup.com"
                            className="className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium,
  hove: r:bg-white hove,
  r:text-blue-600 transition-colors";"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4,
  s: m: px-6,
  l: g:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                            <p className="text-gray-400 mb-4">
                                Leading provider of innovative technology solutions and micro SAAS services.
                            </p>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>364 E Main St STE 1008</p>
                                <p>Middletown DE 19709</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Pho,
  n: e: +1 302 464 0950</p>
                                <p>Ema,
  i: l: kleber@ziontechgroup.com</p>
                                <p>Websit,
  e: ziontechgroup.com</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>• Micro SAAS Solutions</p>
                                <p>• AI-Powered Services</p>
                                <p>• IT Infrastructure</p>
                                <p>• Emerging Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy, 2025 Zion Tech Group. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ComprehensiveServicesDashboard2025