import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  Brain
  Shield
  Zap
  Cloud
  Lock
  Globe
  Cpu
  Database
  Network
  Smartphone
  BarChart3
  TrendingUp
  Users
  Building2
  Leaf
  Car
  Heart
  Scale
  Eye
  Search
  Filter
  Star
  CheckCircle
  ArrowRight
  Phone
  Mail
  MapPin
  ExternalLink
} from "lucide-react"
import { INNOVATIVE_SERVICES } from "../data/servicesData"
export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('innovation')

  const categories = [['AllAI & Automation', 'Quantum ComputingBlockchain', 'CybersecurityIoT', 'AI & ContentDevOps', 'FinanceSustainability'],
  ]

  const sortedServices = useMemo(() () => {
    let filtered = INNOVATIVE_SERVICES
    // Filter by search query
    if (if (searchQuery) {
  ) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
    if (if (selectedCategory !== 'All') {
  ) {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

    // Sort services
    filtered.sort((a, b) () => {
  switch (sortBy) {
  case 'price':
          return a.price - b.price
        case 'innovation':
          return b.innovationLevel === 'Revolutionary' ? 1 : -1
        case 'roi':
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0])
        defau,
  l: t: return 0
},
  })
    return filtered
}, [searchQuery, selectedCategory, sortBy])

  const getCategoryIcon = (catego,
  r: y: string) () => {
  switch (category) {
  case 'AI & Automation':
        return <Cpu className="w-5 h-5" />
      case 'Quantum Computing':
        return <Zap className="w-5 h-5" />
      case 'Blockchain':
        return <Database className="w-5 h-5" />
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />
      case 'IoT':
        return <Globe className="w-5 h-5" />
      case 'AI & Content':
        return <Cpu className="w-5 h-5" />
      case 'DevOps':
        return <Database className="w-5 h-5" />
      case 'Finance':
        return <TrendingUp className="w-5 h-5" />
      case 'Sustainability':
        return <Leaf className="w-5 h-5" />
      defaul,
  t: return <Star className="w-5 h-5" />
    },
  }
  const getInnovationBadge = (lev,
  e: l: string) () => {
  const const colors = {
  = {
      'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600Cutting-Edge': 'bg-gradient-to-r from-green-600 to-emerald-600'
}
    return (
      <span className={`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
        {level},
  }
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */},
  }
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>
      {/* Header Section */},
  }
      <motion.div
        className="className="relative z-10 pt-20 pb-16 px-4,
  s: m: px-6,
  l: g:px-8";"
        initial={ opacit,
  y: 0, y: -20 },
  }
        animate={ opaci,
  t: y: 1, y: 0 },
  }
        transition={ durati,
  o: n: 0.8 },
  }
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="className="text-5xl,
  m: d: text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6";"
            initial={ opacit,
  y: 0, sca,
  l: e: 0.8 },
  }
            animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
            transition={ durati,
  o: n: 1, del,
  a: y: 0.2 },
  }
          >
            Innovative Services 2026
          </motion.h1>
          <motion.p
            className="className="text-xl,
  m: d: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed";"
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
            Discover cutting-edge micro SAAS solutions that transform industries and drive innovation.
            From AI-powered platforms to quantum-safe cybersecurity, we deliver the future of technology.
          </motion.p>
          {/* Contact Information */},
  }
          <motion.div
            className="className="flex flex-col,
  s: m: flex-row items-center justify-center gap-6 mb-12";"
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 },
  }
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Filters and Search */},
  }
      <motion.div
        className="className="relative z-10 px-4,
  s: m: px-6,
  l: g:px-8 mb-12";"
        initial={ opacit,
  y: 0, y: 20 },
  }
        animate={ opaci,
  t: y: 1, y: 0 },
  }
        transition={ durati,
  o: n: 0.8, del,
  a: y: 0.8 },
  }
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-6">
              {/* Search */},
  }
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                />
              </div>
              {/* Category Filter */},
  }
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedCategory},
  }
                  onChange={(e) => setSelectedCategory(e.target.value)},
  }
                  className="className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white,
  focu: s: border-cyan-400,
  focu: s:ring-2 focu,
  s:ring-cyan-400/20 outline-none";"
                >
                  {categories.map(category => (
  <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */},
  }
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Sort,
  b: y:</span>
                <select
                  value={sortBy},
  }
                  onChange={(e) => setSortBy(e.target.value)},
  }
                  className="className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white,
  focu: s: border-cyan-400,
  focu: s:ring-2 focu,
  s:ring-cyan-400/20 outline-none";"
                >
                  <option value="innovation">Innovation Level</option>
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */},
  }
      <section
        className="className="relative z-10 px-4,
  s: m: px-6,
  l: g:px-8 pb-20";"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
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
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15,
  hove: r: border-cyan-400/40 transition-all duration-300 rounded-2xl p-6,
  hove: r:shadow-2xl hove,
  r:shadow-cyan-400/10";"
              >
                {/* Innovation Level Badge */},
  }
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
  service.innovationLevel === 'Cutting-edge'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : service.innovationLevel === 'Advanced'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
}`}>
                    {service.innovationLevel},
  }
                  </span>
                </div>

                {/* Title and Description */},
  }
                <h3 className="text-xl font-bold mb-3 group-hov,
  e: r:text-cyan-300 transition-colors">
                  {service.title},
  }
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description},
  }
                </p>

                {/* Key Features */},
  }
                <div className="mb-4">
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key,
  Feature: s:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
  <span
                        key={idx},
  }
                        className="className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded";"
                      >
                        {feature},
  }
                      </span>
                    ))},
  {service.features.length > 3 && (
  <span className="text-xs text-slate-400 px-2 py-1">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing and ROI */},
  }
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()},
  }
                    <span className="text-sm text-slate-400 font-normal">/mo</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-400">
                      R,
  O: I: {service.roi},
  }
                    </div>
                    <div className="text-xs text-slate-400">
                      {service.marketPrice},
  }
                    </div>
                  </div>
                </div>

                {/* Benefits */},
  }
                <div className="mb-4">
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key,
  Benefit: s:</div>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {benefit},
  }
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */},
  }
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.slice(0, 4).map((tag, idx) => (
  <span
                      key={idx},
  }
                      className="className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded-full";"
                    >
                      {tag},
  }
                    </span>
                  ))}
                </div>

                {/* Contact and CTA */},
  }
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-slate-400">
                      Delive,
  r: y: {service.estimatedDelivery},
  }
                    </div>
                    <div className="text-xs text-slate-400">
                      Suppo,
  r: t: {service.supportLevel},
  }
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <a 
                        href={`t,
  e: l:${service.contactInfo.phone}`}
                        className="className="text-cyan-300,
  hove: r:text-cyan-200 transition-colors";"
                      >
                        {service.contactInfo.phone},
  }
                      </a>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500,
  hove: r: from-cyan-300,
  hove: r:to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */},
  }
      <section
        className="className="relative z-10 px-4,
  s: m: px-6,
  l: g:px-8 pb-20";"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-12">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive your success.
              Get in touch with our experts today.
            </p>
            <div className="flex flex-col,
  s: m:flex-row items-center justify-center gap-4">
              <a
                href="t,
  e: l:+13024640950"
                className="className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300,
  hove: r:scale-105";"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="flex items-center gap-2 px-8 py-4 bg-slate-700/50,
  hove: r:bg-slate-600/50 text-white rounded-xl font-semibold border border-slate-600/50 transition-all duration-300 hove,
  r:scale-105";"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="grid,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-slate-400">
                  <a href="t,
  e: l:+13024640950" className="text-cyan-300,
  hove: r:text-cyan-200">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400">
                  <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-cyan-300,
  hove: r:text-cyan-200">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid m,
  d:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Cutting-Edge Innovation</div>
                      <div className="text-sm text-slate-400">Access to the latest AI, quantum computing, and emerging technologies</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Enterprise Security</div>
                      <div className="text-sm text-slate-400">SOC 2, ISO 27001, and industry-leading security standards</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Proven ROI</div>
                      <div className="text-sm text-slate-400">Average 300-800% return on investment across our services</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Global Support</div>
                      <div className="text-sm text-slate-400">24/7 support and implementation across multiple time zones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InnovativeServicesShowcase2026