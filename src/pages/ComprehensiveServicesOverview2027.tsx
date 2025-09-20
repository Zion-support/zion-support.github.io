
import SEO from "@/components/SEO"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Input from "@/components/ui/Input"
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices"
import { motion } from "framer-motion"
import {
  ArrowRight
    BarChart3
    Briefcase
    Globe
    Grid
    List
    MessageCircle
    Search
    Star
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// Sample data for demonstration
const MICRO_SAAS_SERVICES = [
  {
  id: 'micro-crm',tit,
  l: e: 'Micro CRM',descripti,
  o: n: 'Lightweight customer relationship management for small businesses',catego,
  r: y: 'Business Tools',subcatego,
  r: y: 'CRM',pricingMod,
  e: l: 'monthly',pri,
  c: e: 29,rati,
  n: g: 4.8,reviewCou,
  n: t: 156,aiSco,
  r: e: 95,featur,
  e: d: true,created,
  A: t: '2024-01-15',hr,
  e: f: '/services/micro-crm',ta,
  g: s: ['CRMBusiness', 'Automation']
    imag,
  e: s: [['/images/micro-crm.jpg'],
  ],
  },
  {
  id: 'helpdesk-platform',tit,
  l: e: 'Helpdesk Platform',descripti,
  o: n: 'Streamlined customer support and ticket management system',catego,
  r: y: 'Customer Support',subcatego,
  r: y: 'Helpdesk',pricingMod,
  e: l: 'monthly',pri,
  c: e: 39,rati,
  n: g: 4.7,reviewCou,
  n: t: 89,aiSco,
  r: e: 92,featur,
  e: d: false,created,
  A: t: '2024-02-01',hr,
  e: f: '/services/helpdesk-platform',ta,
  g: s: ['SupportHelpdesk', 'Customer Service']
    imag,
  e: s: [['/images/helpdesk.jpg'],
  ],
  },
  {
  id: 'website-analytics',tit,
  l: e: 'Website Analytics',descripti,
  o: n: 'Comprehensive website performance and user behavior analytics',catego,
  r: y: 'Analytics',subcatego,
  r: y: 'Web Analytics',pricingMod,
  e: l: 'monthly',pri,
  c: e: 19,rati,
  n: g: 4.9,reviewCou,
  n: t: 234,aiSco,
  r: e: 98,featur,
  e: d: true,created,
  A: t: '2024-01-10',hr,
  e: f: '/services/website-analytics',ta,
  g: s: ['AnalyticsWeb', 'Performance']
    imag,
  e: s: [['/images/analytics.jpg'],
  ],
  },
  ]
const categories = [
  { id: 'all', na,
  m: e: 'All Categories', ic,
  o: n: <Globe className="w-4 h-4" />, cou,
  n: t: MICRO_SAAS_SERVICES.length },
  },
  { id: 'Business Tools', na,
  m: e: 'Business Tools', ic,
  o: n: <Briefcase className="w-4 h-4" />, cou,
  n: t: 1 },
  },
  { id: 'Customer Support', na,
  m: e: 'Customer Support', ic,
  o: n: <MessageCircle className="w-4 h-4" />, cou,
  n: t: 1 },
  },
  { id: 'Analytics', na,
  m: e: 'Analytics', ic,
  o: n: <BarChart3 className="w-4 h-4" />, cou,
  n: t: 1 },
  },
  ]
const pricingModels = [
  { id: 'all', na,
  m: e: 'All Pricing' },
  },
  { id: 'monthly', na,
  m: e: 'Monthly' },
  },
  { id: 'yearly', na,
  m: e: 'Yearly' },
  },
  { id: 'one-time', na,
  m: e: 'One-time' },
  },
  { id: 'usage-based', na,
  m: e: 'Usage-based' },
  },
  ]
export default function ComprehensiveServicesOverview2027() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES)
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore' | 'newest'>('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [expandedService, setExpandedService] = useState<string | null>(null)

  useEffect(() () => {
    let filtered = MICRO_SAAS_SERVICES
    if (if (selectedCategory !== 'all') {
  ) {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
    if (if (selectedPricing !== 'all') {
  ) {
      filtered = filtered.filter(service => service.pricingModel === selectedPricing)
    }
    if (searchQuery.trim()) {
  const query = searchQuery.toLowerCase()
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query)) ||
        service.subcategory?.toLowerCase().includes(query)
      )
    }
    filtered.sort((a, b) () => {
  switch (sortBy) {
  case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        case 'price':
          return (a.price || 0) - (b.price || 0)
        case 'aiScore':
          return b.aiScore - a.aiScore
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        defau,
  l: t: return 0
},
  })
    setFilteredServices(filtered)
  }, [selectedCategory, selectedPricing, searchQuery, sortBy])

  const ServiceCard = ({ service }: { servi,
  c: e: any }) => (
  <motion.div
      initial={ opaci,
  t: y: 0, y: 20 },
  }
      animate={ opaci,
  t: y: 1, y: 0 },
  }
      transition={ durati,
  o: n: 0.5 },
  }
      className="className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 border border-zion-blue-light/20 rounded-2xl p-6,
  hove: r: border-zion-purple/50 transition-all duration-500,
  hove: r:scale-[1.02] hov,
  e: r:shadow-2xl hove,
  r:shadow-zion-purple/20";"
    >
      {service.featured && (
  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>
      )}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={service.images[0],
  },
  }
          alt={service.title},
  }
          className="className="w-full h-48 object-cover group-hov,
  e: r:scale-110 transition-transform duration-500";"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-zion-purple/80 text-white">
              {service.category},
  }
            </Badge>
            <div className="flex items-center space-x-1 text-white">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors">
            {service.title},
  }
          </h3>
          <p className="text-zion-slate-light text-sm leading-relaxed">
            {service.description},
  }
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-zion-cyan border-zion-cyan/30">
              {service.subcategory},
  }
            </Badge>
            <Badge variant="outline" className="text-zion-purple border-zion-purple/30">
              AI,
  Scor: e: {service.aiScore},
  }
            </Badge>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light text-sm">Prici,
  n: g:</span>
            <span className="text-white font-semibold">{service.pricingModel}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light text-sm">Creat,
  e: d:</span>
            <span className="text-white text-sm">{new Date(service.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <Button 
          asChild 
          className="className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue,
  hove: r: from-zion-cyan-light hove,
  r:to-zion-blue-light";"
        >
          <Link to={service.href}>
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Comprehensive Services Overview 2027 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, IT, and business solutions. From AI-powered chatbots to quantum computing services, discover cutting-edge technology solutions."
        keywords="AI services, IT solutions, business automation, cybersecurity, blockchain, quantum computing, Zion Tech Group"
      />
      {/* Hero Section */},
  }
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
              Comprehensive Services Overview
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                2027 Edition
              </span>
            </h1>
            <motion.p 
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
              className="className="text-xl text-zion-slate-light max-w-3xl mx-auto";"
            >
              Discover our complete portfolio of cutting-edge technology solutions, from AI-powered innovations to enterprise-grade infrastructure services.
            </motion.p>
          </motion.div>
        </div>

        {/* Filters and Controls */},
  }
        <div className="mb-12 space-y-6">
          <div className="flex flex-col,
  s: m: flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="pl-10 pr-4 py-2 bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'},
  }
                  size="sm"
                  onClick={onClick={() => setViewMode('grid')},
  },
  }
                  className={viewMode === 'grid' ? 'bg-zion-cyan,
  hove: r: bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hove,
  r:bg-zion-blue-dark/30'},
  }
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'},
  }
                  size="sm"
                  onClick={onClick={() => setViewMode('list')},
  },
  }
                  className={viewMode === 'list' ? 'bg-zion-cyan,
  hove: r: bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hove,
  r:bg-zion-blue-dark/30'},
  }
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <select
                value={sortBy},
  }
                onChange={(e) => setSortBy(e.target.value as any)},
  }
                className="className="bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg px-3 py-2";"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6 l,
  g:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */},
  }
          <div className="mb-8 space-y-6">
            <div className="flex flex-col,
  l: g:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery},
  }
                    onChange={(e) => setSearchQuery(e.target.value)},
  }
                    className="className="pl-10 bg-zion-slate-dark/50 border-zion-blue-light/20 text-white placeholder-zion-slate-light";"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'},
  }
                    size="sm"
                    onClick={onClick={() => setViewMode('grid')},
  },
  }
                    className="className="bg-zion-cyan,
  hove: r:bg-zion-cyan-light";"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'},
  }
                    size="sm"
                    onClick={onClick={() => setViewMode('list')},
  },
  }
                    className="className="bg-zion-cyan,
  hove: r:bg-zion-cyan-light";"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                <select
                  value={sortBy},
  }
                  onChange={(e) => setSortBy(e.target.value as any)},
  }
                  className="className="bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg px-3 py-2";"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="newest">Sort by Newest</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
  <Button
                  key={category.id},
  }
                  variant={selectedCategory === category.id ? 'default' : 'outline'},
  }
                  onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                  className={selectedCategory === category.id ? 'bg-zion-cyan,
  hove: r: bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hove,
  r:bg-zion-blue-dark/30'},
  }
                >
                  {category.icon},
  }
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-zion-purple/80">
                    {category.count},
  }
                  </Badge>
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {pricingModels.map((pricing) => (
  <Button
                  key={pricing.id},
  }
                  variant={selectedPricing === pricing.id ? 'default' : 'outline'},
  }
                  onClick={onClick={() => setSelectedPricing(pricing.id)},
  },
  }
                  className={selectedPricing === pricing.id ? 'bg-zion-purple,
  hove: r: bg-zion-purple-light' : 'border-zion-purple/20 text-zion-slate-light hove,
  r:bg-zion-purple/30'},
  }
                >
                  {pricing.name},
  }
                </Button>
              ))}
            </div>
          </div>
          {/* Services Grid */},
  }
          <div className={`grid gap-8 ${
  viewMode === 'grid'
              ? 'grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3'
              : 'grid-cols-1'
}`}>
            {filteredServices.map((service) => (
  <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        {filteredServices.length === 0 && (
  <div className="text-center py-16">
            <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
            <Button
              onClick={() () => {
                setSelectedCategory('all')
                setSelectedPricing('all')
                setSearchQuery('')
              },
  }
              className="className="bg-zion-cyan,
  hove: r:bg-zion-cyan-light";"
            >
              Clear Filters
            </Button>
          </div>
        )}
        </div>
      </section>
      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs.
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white,
  hove: r:from-zion-cyan-light,
  hove: r:to-zion-blue-light">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple,
  hove: r:bg-zion-purple,
  hove: r:text-white">
              <a href="t,
  e: l:+13024640950">
                Call No,
  w: +1 302 464 0950
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}