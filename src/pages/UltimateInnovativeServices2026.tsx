import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain
  Cloud
  Shield
  Server
  Zap
  Globe
  Cpu
  Database
  Network
  Lock
  Code
  Rocket
  Users
  Search
  Filter
  Star
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Play
  BookOpen
  MessageCircle
  Phone
  Mail
  MapPin
  Globe as GlobeIcon
  Atom
  Blockchain
  Heart
  Scale
  Factory
  Satellite
  ShoppingCart
  Building
  Truck
  Eye
  EyeOff
  ExternalLink
  Award
  Target
  Lightbulb
  Sparkles
  Zap as ZapIcon
  Brain as BrainIcon
  Dna
  Space
  Layers
  Monitor
  Smartphone
  Globe2
  Leaf
} from "lucide-react"
import SEO from "@/components/SEO"
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from "@/data/ultimateInnovativeServices2026"
export default function UltimateInnovativeServices2026() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const categories = [
  { id: 'all', na,
  m: e: 'All Services', ic,
  o: n: Zap, col,
  o: r: 'from-zion-cyan to-zion-blue' },
  },
  { id: 'quantum-ai', na,
  m: e: 'Quantum AI', ic,
  o: n: Atom, col,
  o: r: 'from-zion-purple to-zion-cyan' },
  },
  { id: 'neuromorphic-ai', na,
  m: e: 'Neuromorphic AI', ic,
  o: n: BrainIcon, col,
  o: r: 'from-zion-pink to-zion-purple' },
  },
  { id: 'synthetic-biology', na,
  m: e: 'Synthetic Biology', ic,
  o: n: Dna, col,
  o: r: 'from-zion-green to-zion-blue' },
  },
  { id: 'space-technology', na,
  m: e: 'Space Technology', ic,
  o: n: Space, col,
  o: r: 'from-zion-blue to-zion-purple' },
  },
  { id: 'advanced-materials', na,
  m: e: 'Advanced Materials', ic,
  o: n: Layers, col,
  o: r: 'from-zion-orange to-zion-red' },
  },
  { id: 'brain-computer-interface', na,
  m: e: 'Brain-Computer Interface', ic,
  o: n: Monitor, col,
  o: r: 'from-zion-purple to-zion-pink' },
  },
  { id: 'digital-twin', na,
  m: e: 'Digital Twin', ic,
  o: n: Globe2, col,
  o: r: 'from-zion-cyan to-zion-green' },
  },
  { id: 'extended-reality', na,
  m: e: 'Extended Reality', ic,
  o: n: Smartphone, col,
  o: r: 'from-zion-orange to-zion-purple' },
  },
  { id: 'edge-ai', na,
  m: e: 'Edge AI', ic,
  o: n: Cpu, col,
  o: r: 'from-zion-green to-zion-cyan' },
  },
  { id: 'federated-learning', na,
  m: e: 'Federated Learning', ic,
  o: n: Network, col,
  o: r: 'from-zion-purple to-zion-blue' },
  },
  { id: 'sustainable-technology', na,
  m: e: 'Sustainable Technology', ic,
  o: n: Leaf, col,
  o: r: 'from-zion-green to-zion-blue' },
  },
  ]
  const priceRanges = [
  { id: 'all', na,
  m: e: 'All Prices', ran,
  g: e: 'All' },
  },
  { id: 'under-10k', na,
  m: e: 'Under $10K', ran,
  g: e: 'Under $10,000' },
  { id: '10k-20k', na,
  m: e: '$10K - $20K', ran,
  g: e: '$10,000 - $20,000' },
  { id: 'over-20k', na,
  m: e: 'Over $20K', ran,
  g: e: 'Over $20,000' },
  },
  ]

  const sortOptions = [
  { id: 'featured', na,
  m: e: 'Featured' },
  },
  { id: 'price-low', na,
  m: e: 'Pric,
  e: Low to High' },
  },
  { id: 'price-high', na,
  m: e: 'Pric,
  e: High to Low' },
  },
  { id: 'innovation', na,
  m: e: 'Innovation Level' },
  },
  { id: 'roi', na,
  m: e: 'ROI Potential' },
  },
  ]
  const getCategoryIcon = (catego,
  r: y: string) () => {
  const cat = categories.find(c => c.id === category)
    return cat ? cat.icon : Zap
}

  const getCategoryColor = (catego,
  r: y: string) () => {
  const cat = categories.find(c => c.id === category)
    return cat ? cat.color : 'from-zion-cyan to-zion-blue'
}

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2026.filter(service () => {
  const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory)

    const matchesPrice = selectedPriceRange === 'all' ||
                        (selectedPriceRange === 'under-10k' && service.price < 10000) ||
                        (selectedPriceRange === '10k-20k' && service.price >= 10000 && service.price <= 20000) ||
                        (selectedPriceRange === 'over-20k' && service.price > 20000)

    return matchesSearch && matchesCategory && matchesPrice
})

  const sortedServices = [...filteredServices].sort((a, b) () => {
  switch (sortBy) {
  case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'innovation':
const innovationOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Advanced': 1 },
  }
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) -
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0)
      case 'roi':
const aROI = parseInt(a.roi.split('-')[0])
        const bROI = parseInt(b.roi.split('-')[0])
        return bROI - aROI,
  defaul: t: return 0
},
  })
  const toggleServiceExpansion = (service,
  I: d: string) () => {
  setExpandedService(expandedService === serviceId ? null : serviceId)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Ultimate Innovative Services 2026 | Zion Tech Group"
        description="Discover our revolutionary micro SAAS services including Quantum AI, Neuromorphic Computing, Synthetic Biology, Space Technology, and more cutting-edge solutions."
        keywords="quantum AI, neuromorphic computing, synthetic biology, space technology, brain-computer interface, digital twin, extended reality, edge AI, federated learning, sustainable technology"
      />

      {/* Hero Section */},
  }
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6">
              Ultimate Innovative Services
              <span className="block text-6xl,
  m: d:text-8xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS solutions that push the boundaries of technology.
              From Quantum AI to Brain-Computer Interfaces, discover the future of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={ sca,
  l: e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white";"
              >
                <Sparkles className="w-5 h-5" />
                <span>12 Revolutionary Services</span>
              </motion.div>
              <motion.div
                whileHover={ sca,
  l: e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white";"
              >
                <Award className="w-5 h-5" />
                <span>Industry-Leading Innovation</span>
              </motion.div>
              <motion.div
                whileHover={ sca,
  l: e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white";"
              >
                <Target className="w-5 h-5" />
                <span>Proven ROI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */},
  }
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="grid grid-cols-1 l,
  g:grid-cols-4 gap-6">
            {/* Search */},
  }
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white placeholder-zion-slate-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
                />
              </div>
            </div>

            {/* Category Filter */},
  }
            <div>
              <select
                value={selectedCategory},
  }
                onChange={(e) => setSelectedCategory(e.target.value)},
  }
                className="className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
              >
                {categories.map(category => (
  <option key={category.id} value={category.id} className="bg-zion-slate-800 text-white">
                    {category.name},
  }
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */},
  }
            <div>
              <select
                value={selectedPriceRange},
  }
                onChange={(e) => setSelectedPriceRange(e.target.value)},
  }
                className="className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
              >
                {priceRanges.map(range => (
  <option key={range.id} value={range.id} className="bg-zion-slate-800 text-white">
                    {range.name},
  }
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */},
  }
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-zion-slate-300">Sort,
  b: y:</span>
            {sortOptions.map(option => (
  <button
                key={option.id},
  }
                onClick={onClick={() => setSortBy(option.id)},
  },
  }
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
  sortBy === option.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-300,
  hove: r:bg-white/20'
}`}
              >
                {option.name},
  }
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */},
  }
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Revolutionary Services Found
            </h2>
            <p className="text-zion-slate-300 text-lg">
              Discover the future of technology with our cutting-edge micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => (
  <motion.div
                  key={service.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  animate={ opaci,
  t: y: 1, y: 0 },
  }
                  exit={ opaci,
  t: y: 0, y: -20 },
  }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                  className="className="group relative";"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-zion-slate-300/20 rounded-2xl p-6 h-full transition-all duration-300,
  hove: r: bg-white/10,
  hove: r:border-zion-cyan/50,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20">
                    {/* Service Header */},
  }
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category.toLowerCase())}`}>
                        {React.createElement(getCategoryIcon(service.category.toLowerCase()), {
  classNa,
  m: e: "w-6 h-6 text-white"
})}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${service.price.toLocaleString()},
  }
                        </div>
                        <div className="text-sm text-zion-slate-400">
                          {service.pricingModel},
  }
                        </div>
                      </div>
                    </div>

                    {/* Service Title and Description */},
  }
                    <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-zion-cyan transition-colors">
                      {service.title},
  }
                    </h3>
                    <p className="text-zion-slate-300 text-sm mb-4 line-clamp-3">
                      {service.description},
  }
                    </p>

                    {/* Innovation Level Badge */},
  }
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
  service.innovationLevel === 'Revolutionary'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : service.innovationLevel === 'Cutting-edge'
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
}`}>
                        {service.innovationLevel},
  }
                      </div>
                      <div className="text-xs text-zion-slate-400">
                        R,
  O: I: {service.roi},
  }
                      </div>
                    </div>

                    {/* Tags */},
  }
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
  <span
                          key={tagIndex},
  }
                          className="className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-md";"
                        >
                          {tag},
  }
                        </span>
                      ))},
  {service.tags.length > 3 && (
  <span className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-400 text-xs rounded-md">
                          +{service.tags.length - 3},
  }
                        </span>
                      )}
                    </div>

                    {/* Expand/Collapse Button */},
  }
                    <button
                      onClick={onClick={() => toggleServiceExpansion(service.id)},
  },
  }
                      className="className="w-full flex items-center justify-center gap-2 py-2 text-zion-cyan,
  hove: r:text-white transition-colors";"
                    >
                      {expandedService === service.id ? (
  <>
                          <EyeOff className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
  <>
                          <Eye className="w-4 h-4" />
                          Learn More
                        </>
                      )}
                    </button>

                    {/* Expanded Service Details */},
  }
                    <AnimatePresence>
                      {expandedService === service.id && (
  <motion.div
                          initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                          animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                          exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                          transition={ durati,
  o: n: 0.3 },
  }
                          className="className="mt-4 pt-4 border-t border-zion-slate-600/30";"
                        >
                          {/* Features */},
  }
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Key,
  Feature: s:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-start gap-2 text-xs text-zion-slate-300">
                                  <CheckCircle className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                                  {feature},
  }
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */},
  }
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Benefi,
  t: s:</h4>
                            <ul className="space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-start gap-2 text-xs text-zion-slate-300">
                                  <ZapIcon className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  {benefit},
  }
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Market Info */},
  }
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <span className="text-zion-slate-400">Market,
  Siz: e: </span>
                              <div className="text-white font-semibold">{service.marketSize}</div>
                            </div>
                            <div>
                              <span className="text-zion-slate-400">Delive,
  r: y:</span>
                              <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                            </div>
                          </div>

                          {/* Contact Button */},
  }
                          <div className="mt-4">
                            <Link
                              to="/contact"
                              className="className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg,
  hove: r: from-zion-blue hove,
  r:to-zion-cyan transition-all duration-200 font-semibold";"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Get Started
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */},
  },
  {filteredServices.length === 0 && (
  <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-zion-slate-300 mb-6">
                Try adjusting your search criteria or browse all our innovative services.
              </p>
              <button
                onClick={() () => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setSelectedPriceRange('all')
                },
  }
                className="className="px-6 py-3 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-blue transition-colors";"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-300 mb-8">
              Our revolutionary micro SAAS services are designed to give you a competitive edge.
              Contact us today to discuss how we can help you achieve breakthrough results.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg,
  hove: r:from-zion-blue,
  hove: r:to-zion-cyan transition-all duration-200 font-semibold text-lg";"
              >
                <MessageCircle className="w-5 h-5" />
                Start Your Journey
              </Link>
              <a
                href="t,
  e: l:+13024640950"
                className="className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-slate-300 text-white rounded-lg,
  hove: r:bg-white/20 transition-all duration-200 font-semibold text-lg";"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-zion-slate-400">
              <p>Mobi,
  l: e: +1 302 464 0950 | Ema,
  i: l: kleber@ziontechgroup.com</p>
              <p>Addres,
  s: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}