import React, { useState, useMemo } from "react"
import { Link   } from "react-router-dom";
import { motion   } from "framer-motion";
import {
  Search;
  ArrowRight,
  DollarSign,
  ExternalLink,
  Workflow,
  MessageSquare,
  Globe,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Zap,
  Rocket,
  Heart,
  Lock,
  Users,
  BarChart3;
  Target;
  TrendingUp;
  Award;
  Star;
  CheckCircle;
  Clock;
  Phone;
  Mail;
  MapPin;
  Filter;
  SortAsc;
  Eye;
  Code;
  Database;
  Network;
  Smartphone;
  Leaf;
  Gamepad2;
  Coins;
  Satellite;
  Activity;
  FileText;
  MessageCircle;
  BarChart;
  Users2;
  Settings;
  Palette;
  Atom;
  Sparkles;
  Bot;
  Workflow as WorkflowIcon;
  Globe2;
  Wifi;
  ShieldCheck;
  Server;
  Chip;
}
}
 } from "lucide-react";
import { SEO   } from "@/components/SEO";
// Mock data for 2027 services;
const SERVICES_2027 = [
  {
  id: 1,tit,
  l: e: "AI Autonomous Business Platform",descripti,
  o: n: "Fully autonomous AI systems that manage and optimize business operations",catego,
  r: y: "AI & Automation",innovationLev,
  e: l: "Revolutionary",pri,
  c: e: 5000,r,
  o: i: "400-600%",featur,
  e: s: ["Autonomous Decision Making", "Process Optimization", "Predictive Analytics", "Self-Learning Systems"]
    ic,
  o: n: Bot,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  id: 2,tit,
  l: e: "Quantum AI Hybrid Platform",descripti,
  o: n: "Combines quantum computing with AI for unprecedented computational power",catego,
  r: y: "Quantum AI",innovationLev,
  e: l: "Revolutionary",pri,
  c: e: 8000,r,
  o: i: "500-800%",featur,
  e: s: ["Quantum Algorithms", "AI Integration", "Hybrid Processing", "Advanced Simulations"]
    ic,
  o: n: Atom,col,
  o: r: "from-indigo-500 to-purple-500"
},
  {
  id: 3,tit,
  l: e: "Next-Gen Cybersecurity Suite",descripti,
  o: n: "AI-powered security with quantum-resistant encryption and zero-trust architecture",catego,
  r: y: "Cybersecurity",innovationLev,
  e: l: "Cutting-Edge",pri,
  c: e: 4000,r,
  o: i: "300-500%",featur,
  e: s: ["Quantum Encryption", "AI Threat Detection", "Zero Trust", "Automated Response"]
    ic,
  o: n: Shield,col,
  o: r: "from-red-500 to-orange-500"
},
  {
  id: 4,tit,
  l: e: "Edge AI Computing Platform",descripti,
  o: n: "Distributed AI processing at the network edge for real-time intelligence",catego,
  r: y: "Edge Computing",innovationLev,
  e: l: "Advanced",pri,
  c: e: 3000,r,
  o: i: "250-400%",featur,
  e: s: ["Edge Processing", "Real-time AI", "Low Latency", "Distributed Intelligence"]
    ic,
  o: n: Cpu,col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  id: 5,tit,
  l: e: "Digital Twin Ecosystem",descripti,
  o: n: "Comprehensive digital replicas with AI-powered optimization and simulation",catego,
  r: y: "Digital Twin",innovationLev,
  e: l: "Cutting-Edge",pri,
  c: e: 4500,r,
  o: i: "350-550%",featur,
  e: s: ["3D Modeling", "AI Optimization", "Real-time Simulation", "Predictive Maintenance"]
    ic,
  o: n: Eye,col,
  o: r: "from-cyan-500 to-blue-500"
},
  {
  id: 6,tit,
  l: e: "Sustainable Tech Solutions",descripti,
  o: n: "Green technology solutions for environmental sustainability and efficiency",catego,
  r: y: "Sustainability",innovationLev,
  e: l: "Advanced",pri,
  c: e: 2200,r,
  o: i: "200-350%",featur,
  e: s: ["Green Computing", "Energy Efficiency", "Carbon Reduction", "Sustainable Infrastructure"]
    ic,
  o: n: Leaf,col,
  o: r: "from-green-500 to-teal-500"
},
  {
  id: 7,tit,
  l: e: "Metaverse Development Platform",descripti,
  o: n: "Complete metaverse solutions with AI-powered content creation and management",catego,
  r: y: "Metaverse",innovationLev,
  e: l: "Cutting-Edge",pri,
  c: e: 6000,r,
  o: i: "400-650%",featur,
  e: s: ["3D Worlds", "AI Content", "Virtual Reality", "Social Integration"]
    ic,
  o: n: Gamepad2,col,
  o: r: "from-purple-500 to-indigo-500"
},
  {
  id: 8,tit,
  l: e: "Advanced IoT Solutions",descripti,
  o: n: "Intelligent IoT networks with AI and edge computing capabilities",catego,
  r: y: "IoT",innovationLev,
  e: l: "Advanced",pri,
  c: e: 2800,r,
  o: i: "250-400%",featur,
  e: s: ["Smart Networks", "AI Processing", "Real-time Data", "Predictive Analytics"]
    ic,
  o: n: Network,col,
  o: r: "from-blue-500 to-cyan-500"
},
  ]
const,
  Services202: 7: React.FC = () () => {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('innovation')
  
const categories = [
  { id: 'all', na,
  m: e: 'All Services', ic,
  o: n: Workflow, cou,
  n: t: SERVICES_2027.length },
  },
  { id: 'AI & Automation', na,
  m: e: 'AI & Automation', ic,
  o: n: Bot, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'AI & Automation').length },
  },
  { id: 'Quantum AI', na,
  m: e: 'Quantum AI', ic,
  o: n: Atom, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'Quantum AI').length },
  },
  { id: 'Cybersecurity', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'Cybersecurity').length },
  },
  { id: 'Edge Computing', na,
  m: e: 'Edge Computing', ic,
  o: n: Cpu, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'Edge Computing').length },
  },
  { id: 'Digital Twin', na,
  m: e: 'Digital Twin', ic,
  o: n: Eye, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'Digital Twin').length },
  },
  { id: 'Sustainability', na,
  m: e: 'Sustainability', ic,
  o: n: Leaf, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'Sustainability').length },
  },
  { id: 'Metaverse', na,
  m: e: 'Metaverse', ic,
  o: n: Gamepad2, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'Metaverse').length },
  },
  { id: 'IoT', na,
  m: e: 'IoT', ic,
  o: n: Network, cou,
  n: t: SERVICES_2027.filter(s => s.category === 'IoT').length },
  },
  ]
  const filteredAndSorted = useMemo(() () => {
    let filtered = SERVICES_2027;
    // Filter by search query;
    if (query.trim()) {
  const q = query.trim().toLowerCase()
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      )
    }
    
    // Filter by category;
    if (if (selectedCategory !== 'all') {
  ) {
      filtered = filtered.filter(s => s.category === selectedCategory)
    }
    
    // Sort services;
    switch (sortBy) {
  case 'price':
        return filtered.sort((a, b) => a.price - b.price)
      case 'innovation':
        return filtered.sort((a, b) () => {
  const innovationLevels = { 'Revolutionary': 3, 'Cutting-Edge': 2, 'Advanced': 1 },
  }
          return (innovationLevels[b.innovationLevel as keyof typeof innovationLevels] || 0) - (innovationLevels[a.innovationLevel as keyof typeof innovationLevels] || 0)
        })
      case 'roi':
        return filtered.sort((a, b) () => {
  const aROI = parseInt(a.roi.split('-')[0])
          const bROI = parseInt(b.roi.split('-')[0])
          return bROI - aROI;
})
      defau,
  l: t: return filtered;
},
  }, [query, selectedCategory, sortBy])

  const featuredServices = SERVICES_2027.filter(s => s.innovationLevel === 'Revolutionary').slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO;
        title="2027 Services - Zion Tech Group" 
        description="Discover our revolutionary 2027 services including AI Autonomous Platforms, Quantum AI, Next-Gen Cybersecurity, and Metaverse Development. Leading the future of technology." 
        keywords="2027 services, AI autonomous, quantum AI, cybersecurity, metaverse, edge computing, digital twin"
        canonicalUrl="htt,
  p: s://ziontechgroup.com/services2027"
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-purple-400 font-semibold text-lg">2027</span>
            </div>
            <h1 className="text-4xl,
  m: d: text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Future-Ready Services;
            </h1>
            <p className="text-xl,
  m: d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the next generation of technology with our revolutionary 2027 services. 
              From AI autonomous platforms to quantum computing and metaverse development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500,
  hove: r:from-purple-600,
  hove: r:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300,
  hove: r:scale-105 shadow-lg,
  hove: r:shadow-xl";"
              >
                Get Started Today;
              </Link>
              <Link;
                to="/services"
                className="className="px-8 py-4 border border-purple-400/30 text-purple-400 hove,
  r:bg-purple-400/10 font-semibold rounded-lg transition-all duration-300";"
              >
                View All Services;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */},
  }
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6">
            <div className="flex flex-col l,
  g:flex-row gap-6">
              {/* Search */},
  }
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input;
                    type="text"
                    placeholder="Search 2027 services..."
                    value={query},
  }
                    onChange={(e) => setQuery(e.target.value)},
  }
                    className="className="w-full pl-10 pr-4 py-3 bg-white/5 border border-purple-400/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-purple-400/50 focu,
  s:border-purple-400/50";"
                  />
                </div>
              </div>

              {/* Category Filter */},
  }
              <div className="flex-shrink-0">
                <select;
                  value={selectedCategory},
  }
                  onChange={(e) => setSelectedCategory(e.target.value)},
  }
                  className="className="px-4 py-3 bg-white/5 border border-purple-400/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-purple-400/50";"
                >
                  {categories.map((category) => (
  <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */},
  }
              <div className="flex-shrink-0">
                <select;
                  value={sortBy},
  }
                  onChange={(e) => setSortBy(e.target.value)},
  }
                  className="className="px-4 py-3 bg-white/5 border border-purple-400/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-purple-400/50";"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="price">Sort by Price</option>
                  <option value="roi">Sort by ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */},
  }
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Revolutionary 2027 Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative and game-changing solutions that will define the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
  <motion.div;
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6,
  hove: r:border-purple-400/40 transition-all duration-300 group";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
  <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-purple-400">${service.price.toLocaleString()}</div>
                  <div className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {service.innovationLevel},
  }
                  </div>
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  Expected,
  RO: I: <span className="text-green-400 font-semibold">{service.roi}</span>
                </div>

                <Link;
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500,
  hove: r: from-purple-600,
  hove: r:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 group-hov,
  e: r:scale-105";"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */},
  }
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Complete 2027 Service Portfolio;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of future-ready services designed to meet tomorrow's challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {filteredAndSorted.map((service, index) => (
  <motion.div;
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.05 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-5,
  hove: r:border-purple-400/40 transition-all duration-300 group";"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-bold text-purple-400">${service.price.toLocaleString()}</div>
                  <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {service.innovationLevel},
  }
                  </div>
                </div>

                <Link;
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="className="flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20,
  hove: r: from-purple-500/30 hove,
  r:to-pink-500/30 text-purple-400 font-medium rounded-lg transition-all duration-300 text-sm";"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-3xl p-12 text-center";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready for the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be among the first to experience our revolutionary 2027 services and gain;
              a competitive advantage in the rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500,
  hove: r:from-purple-600,
  hove: r:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300,
  hove: r:scale-105";"
              >
                Schedule a Demo;
              </Link>
              <Link;
                to="/pricing"
                className="className="px-8 py-4 border border-purple-400/30 text-purple-400 hove,
  r:bg-purple-400/10 font-semibold rounded-lg transition-all duration-300";"
              >
                View Pricing;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Services2027;