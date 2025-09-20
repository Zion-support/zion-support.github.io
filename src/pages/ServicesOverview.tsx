import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Star, TrendingUp, Clock, Users, DollarSign, Globe, Shield, Bot, Cloud, BarChart3, Workflow, FileText, Sparkles, Building, Car, Leaf, Zap, Home, Scale, GraduationCap, ShoppingCart, Hotel } from "lucide-react"
import { SEO } from "@/components/SEO"
import { enhancedServices2025 } from "../../data/enhanced-2025-services"
import { specializedIndustryServices } from "../../data/specialized-industry-services"
import { allServices } from "../../data/services"
import { Link } from "react-router-dom"
export default function ServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  // Combine all services
  const allAvailableServices = [
    ...enhancedServices2025
    ...specializedIndustryServices
    ...allServices
  ]
  // Categories for filtering
  const categories = [
    { id: 'all', na,
  m: e: 'All Categories', ic,
  o: n: Globe }, { id: 'AI', na,
  m: e: 'AI & Machine Learning', ic,
  o: n: Bot }, { id: 'IT', na,
  m: e: 'IT & Infrastructure', ic,
  o: n: Cloud }, { id: 'Security', na,
  m: e: 'Security & Compliance', ic,
  o: n: Shield }, { id: 'Analytics', na,
  m: e: 'Analytics & BI', ic,
  o: n: BarChart3 }, { id: 'Automation', na,
  m: e: 'Automation', ic,
  o: n: Workflow }, { id: 'Fintech', na,
  m: e: 'Fintech', ic,
  o: n: DollarSign }, { id: 'Healthcare', na,
  m: e: 'Healthcare', ic,
  o: n: FileText }, { id: 'Education', na,
  m: e: 'Education', ic,
  o: n: GraduationCap }, { id: 'Marketing', na,
  m: e: 'Marketing', ic,
  o: n: ShoppingCart }, { id: 'Development', na,
  m: e: 'Development', ic,
  o: n: Building }, { id: 'SAAS', na,
  m: e: 'SAAS Solutions', ic,
  o: n: Cloud }
  ]
  // Industries for filtering
  const industries = [
    { id: 'all', na,
  m: e: 'All Industries', ic,
  o: n: Globe }, { id: 'Manufacturing', na,
  m: e: 'Manufacturing', ic,
  o: n: Building }, { id: 'Healthcare', na,
  m: e: 'Healthcare', ic,
  o: n: FileText }, { id: 'Legal', na,
  m: e: 'Legal', ic,
  o: n: Scale }, { id: 'Real Estate', na,
  m: e: 'Real Estate', ic,
  o: n: Home }, { id: 'Agriculture', na,
  m: e: 'Agriculture', ic,
  o: n: Leaf }, { id: 'Energy', na,
  m: e: 'Energy', ic,
  o: n: Zap }, { id: 'Transportation', na,
  m: e: 'Transportation', ic,
  o: n: Car }, { id: 'Retail', na,
  m: e: 'Retail', ic,
  o: n: ShoppingCart }, { id: 'Hospitality', na,
  m: e: 'Hospitality', ic,
  o: n: Hotel }, { id: 'Education', na,
  m: e: 'Education', ic,
  o: n: GraduationCap }, { id: 'Finance', na,
  m: e: 'Finance', ic,
  o: n: DollarSign }
  ]
  // Filter and sort services
  const filteredServices = allAvailableServices
    .filter(service () () => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline?.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      
      const matchesIndustry = selectedIndustry === 'all' || 
                             (service.industry && service.industry === selectedIndustry) ||
                             (!service.industry && selectedIndustry === 'all')
      
      return matchesSearch && matchesCategory && matchesIndustry
    })
    .sort((a, b) () => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return (a.pricing?.starter || 0) - (b.pricing?.starter || 0)
        case 'price-high':
          return (b.pricing?.starter || 0) - (a.pricing?.starter || 0)
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
        case 'new':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        defau,
  l: t: return 0
      }
    })
  const renderServiceCard = (servi,
  c: e: any) => (
    <motion.div
      key={service.id}
      className="className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20,
  hove: r: border-cyan-400/50 transition-all duration-300,
  hove: r:shadow-2xl,
  hove: r:shadow-cyan-500/20";"
      whileHover={ ,
  y: -5, sca,
  l: e: 1.02 }
      initial={ opaci,
  t: y: 0, y: 20 }
      animate={ opaci,
  t: y: 1, y: 0 }
      transition={ durati,
  o: n: 0.5 }
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl mb-2">{service.icon}</div>
        <div className="flex gap-2">
          {service.isPopular && (
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Popular
            </span>
          )}, {service.isNew && (
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
      {service.tagline && (
        <p className="text-cyan-400 text-sm mb-2 italic">"{service.tagline}"</p>
      )}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
      
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            ${service.pricing?.starter || service.price?.replace(/[^0-9]/g, '') || 'Contact'}
          </span>
          <span className="text-gray-400 text-sm">
            {service.pricing?.period || '/month'}
          </span>
        </div>
        {service.pricing?.professional && (
          <div className="text-sm text-gray-400 mt-1">
            P,
  r: o: ${service.pricing.professional}/month | Enterpri,
  s: e: ${service.pricing.enterprise}/month
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Key,
  Feature: s:</h4>
        <ul className="space-y-1">
          {(service.features || []).slice(0, 4).map((featu,
  r: e: string, ind,
  e: x: number) => (
            <li key={index} className="text-gray-300 text-xs flex items-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Benefi,
  t: s:</h4>
        <ul className="space-y-1">
          {(service.benefits || []).slice(0, 3).map((benef,
  i: t: string, ind,
  e: x: number) => (
            <li key={index} className="text-gray-300 text-xs flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {service.marketPosition && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg">
          <p className="text-gray-300 text-xs italic">"{service.marketPosition}"</p>
        </div>
      )}, {service.roi && (
        <div className="mb-4 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-xs font-semibold">R,
  O: I: {service.roi}</p>
        </div>
      )}

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.targetAudience?.slice(0, 3).map((audien,
  c: e: string, ind,
  e: x: number) => (
            <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
              {audience}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={service.link || `/services/${service.id}`}
          className="className="inline-flex items-center text-cyan-400,
  hove: r:text-cyan-300 transition-colors text-sm";"
        >
          Learn More →
        </Link>
        
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          {service.trialDays && (
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {service.trialDays}d trial
            </span>
          )}, {service.setupTime && (
            <span className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {service.setupTime}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Zion Tech Group - Complete Services Overview & Pricing"
        description="Explore our comprehensive range of AI, IT, and specialized industry services. Detailed pricing, features, and ROI information for all our technology solutions."
        keywords="AI services pricing, IT services, specialized industry solutions, technology consulting, digital transformation, service pricing"
        canonicalUrl="htt,
  p: s://ziontechgroup.com/services-overview"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="className="text-5xl,
  m: d:text-7xl font-bold text-white mb-6";"
            initial={ opacit,
  y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            Complete Services
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Overview
            </span>
          </motion.h1>
          
          <motion.p 
            className="className="text-xl text-gray-300 max-w-4xl mx-auto mb-8";"
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
          >
            Discover our comprehensive portfolio of cutting-edge technology services, complete with detailed pricing, features, and ROI information.
          </motion.p>

          <motion.div 
            className="className="flex flex-col,
  s: m: flex-row gap-4 justify-center";"
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
          >
            <Link
              to="/contact"
              className="className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105";"
            >
              Get Custom Quote
            </Link>
            <a
              href="t,
  e: l:+13024640950"
              className="className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-300";"
            >
              Call +1 (302) 464-0950
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4,
  s: m: px-6,
  l: g:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 l,
  g:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none focu,
  s:border-cyan-400";"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none focu,
  s:border-cyan-400";"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none focu,
  s:border-cyan-400";"
                >
                  {industries.map(industry => (
                    <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-cyan-400";"
                >
                  <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                  <option value="price-low" className="bg-slate-800 text-white">Pri,
  c: e: Low to High</option>
                  <option value="price-high" className="bg-slate-800 text-white">Pric,
  e: High to Low</option>
                  <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                  <option value="new" className="bg-slate-800 text-white">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4,
  s: m: px-6 l,
  g:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {filteredServices.length} Services Available
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {allAvailableServices.length} services
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6">
              {filteredServices.map(renderServiceCard)}
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4,
  s: m: px-6,
  l: g:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="className="text-4xl font-bold text-white mb-6";"
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="className="text-xl text-gray-300 mb-8";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            viewport={ on,
  c: e: true }
          >
            Contact us to discuss your specific needs and get a customized solution for your business.
          </motion.p>

          <motion.div 
            className="className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 mb-8";"
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            viewport={ on,
  c: e: true }
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="t,
  e: l: +13024640950" className="text-cyan-400,
  hove: r:text-cyan-300">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-cyan-400,
  hove: r:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="className="flex flex-col,
  s: m:flex-row gap-4 justify-center";"
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <Link
              to="/contact"
              className="className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105";"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/pricing"
              className="className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-300";"
            >
              View Detailed Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}