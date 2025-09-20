import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain, Zap, Shield, Users, Globe, ArrowRight, CheckCircle, Star
  Server, Cloud, Database, Network, Lock, Code, Rocket, Building
  Search, Phone, Mail, Cpu, Monitor, Smartphone, Wifi, Bluetooth
  Satellite, Atom, Leaf, Space, Handshake, Calendar, DollarSign
  BarChart3, Target, Award, Clock, Heart, Truck, Sparkles, Crown
  Lightbulb, Globe2, FileText, Image, Video, Code, Palette
  ShoppingCart, MessageSquare, Eye, Ear, Hand, Foot, Bone, Tooth
  Pill, Bandage, Thermometer, Scale, Calculator, ChartBar, PieChart
  LineChart, Activity, TrendingDown, Minus, Plus, Equal, Divide
  Percent, Euro, Pound, Yen, CreditCard, Wallet, Banknote, Coins
  PiggyBank, Safe, Vault, LockKeyhole, Key, Fingerprint, QrCode
  Barcode, Scan, Camera, VideoOff, Mic, MicOff, Volume2, VolumeX
} from "lucide-react"
const itServices2028 = [
  {
    id: 'quantum-cloud-infrastructure',na,
  m: e: 'Quantum Cloud Infrastructure',tagli,
  n: e: 'Next-generation quantum-ready cloud infrastructure',pri,
  c: e: '$45,999'
    peri,
  o: d: '/month',descripti,
  o: n: 'Revolutionary quantum-ready cloud infrastructure that provides unprecedented performance, security, and scalability for enterprise applications.'
    featur,
  e: s: [
      'Quantum-ready computing nodesAdvanced AI optimization'
      'Zero-latency networkingQuantum encryption'
      'Auto-scaling infrastructureReal-time monitoring'
      'Disaster recoveryGlobal CDN'
      'API managementDevOps automation'
    ]
    popula,
  r: true,ic,
  o: n: Cloud,col,
  o: r: 'from-blue-600 to-cyan-700',catego,
  r: y: 'Cloud & Infrastructure',realServi,
  c: e: true,marketSi,
  z: e: '$18.5B cloud infrastructure market',growthRa,
  t: e: '320% annual growth',rati,
  n: g: 4.9,revie,
  w: s: 89,custome,
  r: s: 45
  }, {
    id: 'ai-powered-cybersecurity',na,
  m: e: 'AI-Powered Cybersecurity Suite',tagli,
  n: e: 'Intelligent threat detection and response',pri,
  c: e: '$32,999'
    peri,
  o: d: '/month',descripti,
  o: n: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.'
    featur,
  e: s: [
      'AI threat detectionBehavioral analysis'
      'Zero-trust architectureAutomated incident response'
      'Threat intelligenceCompliance automation'
      'Security analyticsPenetration testing'
      'Vulnerability assessmentSecurity training'
    ]
    popula,
  r: true,ic,
  o: n: Shield,col,
  o: r: 'from-red-600 to-pink-700',catego,
  r: y: 'Cybersecurity',realServi,
  c: e: true,marketSi,
  z: e: '$15.2B cybersecurity market',growthRa,
  t: e: '280% annual growth',rati,
  n: g: 4.8,revie,
  w: s: 234,custome,
  r: s: 156
  }, {
    id: 'quantum-database-platform',na,
  m: e: 'Quantum Database Platform',tagli,
  n: e: 'Quantum-powered database management system',pri,
  c: e: '$28,999'
    peri,
  o: d: '/month',descripti,
  o: n: 'Revolutionary quantum database platform that provides unprecedented speed, security, and scalability for enterprise data management.'
    featur,
  e: s: [
      'Quantum query optimizationReal-time data processing'
      'Advanced encryptionAuto-scaling storage'
      'Multi-model supportData analytics'
      'Backup automationDisaster recovery'
      'Performance monitoringAPI integration'
    ]
    popula,
  r: false,ic,
  o: n: Database,col,
  o: r: 'from-green-600 to-emerald-700',catego,
  r: y: 'Database & Storage',realServi,
  c: e: true,marketSi,
  z: e: '$8.9B database market',growthRa,
  t: e: '240% annual growth',rati,
  n: g: 4.7,revie,
  w: s: 123,custome,
  r: s: 67
  }, {
    id: 'ai-network-optimization',na,
  m: e: 'AI Network Optimization',tagli,
  n: e: 'Intelligent network performance and security',pri,
  c: e: '$22,999'
    peri,
  o: d: '/month',descripti,
  o: n: 'AI-powered network optimization platform that automatically manages, secures, and optimizes enterprise network infrastructure.'
    featur,
  e: s: [
      'AI network monitoringAutomatic optimization'
      'Traffic analysisSecurity automation'
      'Performance tuningBandwidth management'
      'Quality of serviceNetwork analytics'
      'Alert managementReporting tools'
    ]
    popula,
  r: true,ic,
  o: n: Network,col,
  o: r: 'from-purple-600 to-indigo-700',catego,
  r: y: 'Networking',realServi,
  c: e: true,marketSi,
  z: e: '$12.3B network management market',growthRa,
  t: e: '260% annual growth',rati,
  n: g: 4.8,revie,
  w: s: 189,custome,
  r: s: 98
  }, {
    id: 'quantum-devops-automation',na,
  m: e: 'Quantum DevOps Automation',tagli,
  n: e: 'Next-generation development and operations automation',pri,
  c: e: '$35,999'
    peri,
  o: d: '/month',descripti,
  o: n: 'Advanced quantum-powered DevOps platform that automates software development, testing, deployment, and operations processes.'
    featur,
  e: s: [
      'AI-powered CI/CDAutomated testing'
      'Deployment automationPerformance monitoring'
      'Error trackingTeam collaboration'
      'Version controlInfrastructure as code'
      'Security scanningCompliance automation'
    ]
    popula,
  r: true,ic,
  o: n: Rocket,col,
  o: r: 'from-orange-600 to-red-700',catego,
  r: y: 'DevOps & Automation',realServi,
  c: e: true,marketSi,
  z: e: '$9.8B DevOps market',growthRa,
  t: e: '300% annual growth',rati,
  n: g: 4.9,revie,
  w: s: 267,custome,
  r: s: 134
  }, {
    id: 'ai-data-analytics-platform',na,
  m: e: 'AI Data Analytics Platform',tagli,
  n: e: 'Intelligent business intelligence and analytics',pri,
  c: e: '$25,999'
    peri,
  o: d: '/month',descripti,
  o: n: 'Comprehensive AI-powered data analytics platform that provides real-time insights, predictive analytics, and automated reporting.'
    featur,
  e: s: [
      'Real-time data processingAI-powered insights'
      'Predictive analyticsData visualization'
      'Automated reportingCustom dashboards'
      'Data integrationCollaboration tools'
      'Mobile accessAPI integration'
    ]
    popula,
  r: false,ic,
  o: n: BarChart3,col,
  o: r: 'from-emerald-600 to-teal-700',catego,
  r: y: 'Data & Analytics',realServi,
  c: e: true,marketSi,
  z: e: '$11.2B data analytics market',growthRa,
  t: e: '220% annual growth',rati,
  n: g: 4.6,revie,
  w: s: 156,custome,
  r: s: 89
  }
]
const,
  ITServices202: 8: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', na,
  m: e: 'All Services', ic,
  o: n: Globe, col,
  o: r: 'from-zion-cyan to-zion-purple' }, { id: 'cloud', na,
  m: e: 'Cloud & Infrastructure', ic,
  o: n: Cloud, col,
  o: r: 'from-zion-blue to-zion-cyan' }, { id: 'cybersecurity', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, col,
  o: r: 'from-zion-red to-zion-pink' }, { id: 'database', na,
  m: e: 'Database & Storage', ic,
  o: n: Database, col,
  o: r: 'from-zion-green to-zion-emerald' }, { id: 'networking', na,
  m: e: 'Networking', ic,
  o: n: Network, col,
  o: r: 'from-zion-purple to-zion-indigo' }, { id: 'devops', na,
  m: e: 'DevOps & Automation', ic,
  o: n: Rocket, col,
  o: r: 'from-zion-orange to-zion-red' }, { id: 'analytics', na,
  m: e: 'Data & Analytics', ic,
  o: n: BarChart3, col,
  o: r: 'from-zion-emerald to-zion-teal' }
  ]
  const filteredServices = itServices2028.filter(service () () => {
    const matchesCategory = selectedCategory === 'all' ||
      service.category.toLowerCase().includes(selectedCategory.replace('- '))
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-5xl,
  m: d: text-7xl font-bold mb-6 text-gradient";"
          >
            IT Services 2028
          </motion.h1>
          <motion.p
            initial={ opacit,
  y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            className="className="text-xl,
  m: d: text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto";"
          >
            Cutting-edge IT solutions powered by quantum computing and artificial intelligence
          </motion.p>
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            className="className="flex flex-wrap justify-center gap-4";"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              🚀 Quantum-Ready Infrastructure
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              🛡️ AI-Powered Security
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              💡 Intelligent Automation
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={ sca,
  l: e: 1.05 }
                  whileTap={ sca,
  l: e: 0.95 }
                  onClick={onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light,
  hove: r:bg-zion-slate/70'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="className="w-64 px-4 py-2 pl-10 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/50";"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={ opaci,
  t: y: 0, y: 30 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-6,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20";"
              >
                {/* Popular Badge */}, {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}, {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {service.tagline}
                </p>
                <p className="text-zion-slate-light text-sm mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </div>
                  ))}, {service.features.length > 3 && (
                    <div className="text-sm text-zion-slate-light">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {service.rating} ({service.reviews} reviews)
                  </div>
                  <div>{service.customers} customers</div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/it-services/${service.id}`}
                  className="className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold text-center group-hov,
  e: r: shadow-lg group-hov,
  e: r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Market Info */}
                <div className="mt-6 pt-6 border-t border-zion-slate/30">
                  <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                    <div>
                      <div className="font-semibold text-zion-cyan">Market Size</div>
                      <div>{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-zion-cyan">Growth Rate</div>
                      <div>{service.growthRate}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-4xl,
  m: d: text-5xl font-bold mb-6 text-gradient";"
          >
            Ready to Transform Your IT Infrastructure?
          </motion.h2>
          <motion.p
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            className="className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto";"
          >
            Contact our team of IT experts to discuss how our innovative services can revolutionize your technology infrastructure
          </motion.p>
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            className="className="flex flex-col,
  s: m: flex-row gap-4 justify-center";"
          >
            <a
              href="t,
  e: l:+13024640950"
              className="className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a
              href="mail,
  t: o:kleber@ziontechgroup.com"
              className="className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:shadow-lg hove,
  r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default ITServices2028