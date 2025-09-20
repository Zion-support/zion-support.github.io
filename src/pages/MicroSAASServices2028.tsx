import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain
  Zap
  Shield
  TrendingUp
  Users
  Globe
  ArrowRight
  CheckCircle
  Play
  BarChart3
  Cpu
  Eye
  MessageSquare
  Database
  Network
  Rocket
  Target
  Award
  Clock
  Star
  Heart
  Lock
  Cloud
  Smartphone
  Monitor
  Wifi
  Bluetooth
  Satellite
  Atom
  Dna
  Microscope
  Flask
  TestTube
  Syringe
  Stethoscope
  HeartPulse
  BrainCircuit
  Leaf
  Space
  Handshake
  Calendar
  DollarSign
  Bitcoin
  Ethereum
  CreditCard
  Wallet
  Banknote
  Coins
  PiggyBank
  Safe
  Vault
  LockKeyhole
  Key
  Fingerprint
  QrCode
  Barcode
  Scan
  Camera
  VideoOff
  Mic
  MicOff
  Volume2
  VolumeX
  Building
  Truck
  Sparkles
  Crown
  Lightbulb
  Globe2
  Search
  Phone
  Mail
  FileText
  Image
  Video
  Music
  Code
  Palette
  ShoppingCart
  Truck
  Plane
  Ship
  Train
  Car
  Bike
  Bus
  Taxi
  Helicopter
  Rocket
  Satellite
  Telescope
  Microscope
  Flask
  TestTube
  Syringe
  Stethoscope
  HeartPulse
  BrainCircuit
  Eye
  Ear
  Hand
  Foot
  Bone
  Tooth
  Pill
  Bandage
  Thermometer
  Scale
  Calculator
  ChartBar
  PieChart
  LineChart
  Activity
  TrendingDown
  Minus
  Plus
  Equal
  Divide
  Percent
  Euro
  Pound
  Yen
  CreditCard
  Wallet
  Banknote
  Coins
  PiggyBank
  Safe
  Vault
  LockKeyhole
  Key
  Fingerprint
  QrCode
  Barcode
  Scan
  Camera
  VideoOff
  Mic
  MicOff
  Volume2
  VolumeX
  Building
  Leaf
  Space
  Handshake
  Calendar
} from "lucide-react"
const microSAASServices2028 = [
  // AI-Powered Content Creation
  {
  id: 'ai-content-creator-pro',na,
  m: e: 'AI Content Creator Pro',tagli,
  n: e: 'AI-powered content creation for all platforms',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Advanced AI content creation platform that generates high-quality articles, social media posts, marketing copy, and creative content across all platforms.'
    featur,
  e: s: [
  'AI article generationSocial media content creation'
      'Marketing copy optimizationSEO content optimization'
      'Multi-language supportContent scheduling'
      'Brand voice customizationPlagiarism detection'
      'Content analyticsTeam collaboration tools'
]
    popula,
  r: true,ic,
  o: n: FileText,col,
  o: r: 'from-blue-600 to-cyan-700',textCol,
  o: r: 'text-blue-400',li,
  n: k: '/micro-saas/ai-content-creator',marketPositi,
  o: n: 'Leading AI content creation platform with proven ROI for content marketers and businesses.',targetAudien,
  c: e: 'Content marketers, Digital agencies, Small businesses, Bloggers, Social media managers'
    trialDa,
  y: s: 14,setupTi,
  m: e: '1-2 days',catego,
  r: y: 'AI Content & Marketing',realServi,
  c: e: true,technolo,
  g: y: ['Natural language processingMachine learning', 'Content optimizationSEO algorithms', 'Multi-language AI']
    integratio,
  n: s: ['WordPressSocial media platforms', 'CMS systemsMarketing tools', 'Analytics platforms']
    useCas,
  e: s: ['Blog content creationSocial media marketing', 'Email marketingSEO content', 'Brand content']
    r,
  o: i: 'Content marketers achieve 300% ROI through increased engagement and reduced content creation time.',competito,
  r: s: ['Traditional content toolsBasic AI writing tools', 'Content management platforms']
    marketSi,
  z: e: '$4.2B content creation market',growthRa,
  t: e: '180% annual growth',rati,
  n: g: 4.8,revie,
  w: s: 456,custome,
  r: s: 234
}
  // AI Image Generator
  {
  id: 'ai-image-generator-plus',na,
  m: e: 'AI Image Generator Plus',tagli,
  n: e: 'Professional AI image generation for businesses',pri,
  c: e: '$199',peri,
  o: d: '/month',descripti,
  o: n: 'Professional AI image generation platform that creates high-quality, customizable images for marketing, design, and business needs.'
    featur,
  e: s: [
  'High-resolution image generationCustom style training'
      'Brand-specific image creationBatch image generation'
      'Commercial usage rightsStyle transfer capabilities'
      'Image editing toolsAPI integration'
      'Team collaborationUsage analytics'
]
    popula,
  r: true,ic,
  o: n: Image,col,
  o: r: 'from-purple-600 to-pink-700',textCol,
  o: r: 'text-purple-400',li,
  n: k: '/micro-saas/ai-image-generator',marketPositi,
  o: n: 'Professional AI image generation platform with commercial usage rights and brand customization.',targetAudien,
  c: e: 'Designers, Marketing agencies, E-commerce businesses, Content creators, Small businesses'
    trialDa,
  y: s: 7,setupTi,
  m: e: '1 day',catego,
  r: y: 'AI Design & Creative',realServi,
  c: e: true,technolo,
  g: y: ['Generative AIComputer vision', 'Style transferImage processing', 'Machine learning']
    integratio,
  n: s: ['Design toolsE-commerce platforms', 'Marketing toolsCMS systems', 'Social media']
    useCas,
  e: s: ['Marketing materialsProduct images', 'Social media graphicsWebsite design', 'Brand assets']
    r,
  o: i: 'Design agencies achieve 400% ROI through reduced design costs and faster project delivery.',competito,
  r: s: ['Open-source AI toolsBasic image generators', 'Stock photo services']
    marketSi,
  z: e: '$2.8B AI image generation market',growthRa,
  t: e: '250% annual growth',rati,
  n: g: 4.9,revie,
  w: s: 234,custome,
  r: s: 156
}
  // AI Video Creator
  {
  id: 'ai-video-creator-studio',na,
  m: e: 'AI Video Creator Studio',tagli,
  n: e: 'AI-powered video creation and editing platform',pri,
  c: e: '$399',peri,
  o: d: '/month',descripti,
  o: n: 'Professional AI video creation platform that generates, edits, and optimizes videos for marketing, social media, and business needs.'
    featur,
  e: s: [
  'AI video generationAutomated video editing'
      'Text-to-video conversionVideo optimization'
      'Multi-format exportBrand template library'
      'Voice-over generationMusic integration'
      'Analytics dashboardTeam collaboration'
]
    popula,
  r: false,ic,
  o: n: Video,col,
  o: r: 'from-red-600 to-orange-700',textCol,
  o: r: 'text-red-400',li,
  n: k: '/micro-saas/ai-video-creator',marketPositi,
  o: n: 'Leading AI video creation platform with professional editing capabilities and brand customization.',targetAudien,
  c: e: 'Video marketers, Content creators, Marketing agencies, Small businesses, Social media managers'
    trialDa,
  y: s: 14,setupTi,
  m: e: '2-3 days',catego,
  r: y: 'AI Video & Media',realServi,
  c: e: true,technolo,
  g: y: ['Computer visionNatural language processing', 'Video processingAI editing', 'Machine learning']
    integratio,
  n: s: ['Social media platformsVideo hosting', 'Marketing toolsCMS systems', 'Analytics platforms']
    useCas,
  e: s: ['Marketing videosSocial media content', 'Product demosTraining videos', 'Brand videos']
    r,
  o: i: 'Video marketers achieve 350% ROI through reduced production costs and increased engagement.',competito,
  r: s: ['Traditional video toolsBasic video editors', 'Video templates']
    marketSi,
  z: e: '$3.5B AI video market',growthRa,
  t: e: '220% annual growth',rati,
  n: g: 4.7,revie,
  w: s: 189,custome,
  r: s: 98
}
  // AI Code Generator
  {
  id: 'ai-code-generator-pro',na,
  m: e: 'AI Code Generator Pro',tagli,
  n: e: 'AI-powered code generation and development assistance',pri,
  c: e: '$499',peri,
  o: d: '/month',descripti,
  o: n: 'Advanced AI code generation platform that helps developers write, debug, and optimize code across multiple programming languages.'
    featur,
  e: s: [
  'Multi-language code generationCode completion and suggestions'
      'Bug detection and fixingCode optimization'
      'Documentation generationTesting automation'
      'Code review assistanceTeam collaboration'
      'Version control integrationPerformance analytics'
]
    popula,
  r: true,ic,
  o: n: Code,col,
  o: r: 'from-green-600 to-emerald-700',textCol,
  o: r: 'text-green-400',li,
  n: k: '/micro-saas/ai-code-generator',marketPositi,
  o: n: 'Leading AI code generation platform with support for 50+ programming languages and frameworks.',targetAudien,
  c: e: 'Software developers, Development teams, Startups, Tech companies, Freelance developers'
    trialDa,
  y: s: 21,setupTi,
  m: e: '2-3 days',catego,
  r: y: 'AI Development & Coding',realServi,
  c: e: true,technolo,
  g: y: ['Large language modelsCode analysis', 'Machine learningStatic analysis', 'AI optimization']
    integratio,
  n: s: ['Git repositoriesIDEs', 'CI/CD platformsProject management tools', 'Testing frameworks']
    useCas,
  e: s: ['Code generationBug fixing', 'Code reviewDocumentation', 'Testing automation']
    r,
  o: i: 'Development teams achieve 500% ROI through increased productivity and reduced development time.',competito,
  r: s: ['Open-source AI toolsBasic code editors', 'Traditional IDEs']
    marketSi,
  z: e: '$6.8B AI development market',growthRa,
  t: e: '280% annual growth',rati,
  n: g: 4.8,revie,
  w: s: 567,custome,
  r: s: 289
}
  // AI Design Assistant
  {
  id: 'ai-design-assistant',na,
  m: e: 'AI Design Assistant',tagli,
  n: e: 'AI-powered design creation and optimization',pri,
  c: e: '$249',peri,
  o: d: '/month',descripti,
  o: n: 'Intelligent AI design platform that creates logos, graphics, layouts, and visual assets with brand consistency and professional quality.'
    featur,
  e: s: [
  'Logo generation and designGraphic design creation'
      'Layout optimizationBrand consistency tools'
      'Template libraryDesign collaboration'
      'Export optimizationBrand guidelines'
      'Design analyticsTeam management'
]
    popula,
  r: false,ic,
  o: n: Palette,col,
  o: r: 'from-pink-600 to-rose-700',textCol,
  o: r: 'text-pink-400',li,
  n: k: '/micro-saas/ai-design-assistant',marketPositi,
  o: n: 'Professional AI design platform with brand consistency and collaboration features.',targetAudien,
  c: e: 'Designers, Marketing agencies, Small businesses, Startups, Brand managers'
    trialDa,
  y: s: 14,setupTi,
  m: e: '2-3 days',catego,
  r: y: 'AI Design & Creative',realServi,
  c: e: true,technolo,
  g: y: ['Computer visionDesign algorithms', 'Machine learningBrand recognition', 'AI optimization']
    integratio,
  n: s: ['Design toolsBrand platforms', 'Marketing toolsCMS systems', 'Social media']
    useCas,
  e: s: ['Logo designBrand graphics', 'Marketing materialsWebsite design', 'Social media assets']
    r,
  o: i: 'Design agencies achieve 300% ROI through faster design delivery and brand consistency.',competito,
  r: s: ['Traditional design toolsBasic design platforms', 'Logo generators']
    marketSi,
  z: e: '$3.2B AI design market',growthRa,
  t: e: '200% annual growth',rati,
  n: g: 4.6,revie,
  w: s: 234,custome,
  r: s: 123
}
  // AI E-commerce Optimizer
  {
  id: 'ai-ecommerce-optimizer',na,
  m: e: 'AI E-commerce Optimizer',tagli,
  n: e: 'AI-powered e-commerce optimization and automation',pri,
  c: e: '$349',peri,
  o: d: '/month',descripti,
  o: n: 'Comprehensive AI e-commerce platform that optimizes product recommendations, pricing, inventory, and customer experience.'
    featur,
  e: s: [
  'AI product recommendationsDynamic pricing optimization'
      'Inventory managementCustomer behavior analysis'
      'Personalization engineA/B testing automation'
      'Conversion optimizationAnalytics dashboard'
      'Multi-platform supportAPI integration'
]
    popula,
  r: true,ic,
  o: n: ShoppingCart,col,
  o: r: 'from-orange-600 to-red-700',textCol,
  o: r: 'text-orange-400',li,
  n: k: '/micro-saas/ai-ecommerce-optimizer',marketPositi,
  o: n: 'Leading AI e-commerce optimization platform with proven ROI for online retailers.',targetAudien,
  c: e: 'E-commerce businesses, Online retailers, Dropshipping stores, Marketplaces, Digital agencies'
    trialDa,
  y: s: 14,setupTi,
  m: e: '3-5 days',catego,
  r: y: 'AI E-commerce & Retail',realServi,
  c: e: true,technolo,
  g: y: ['Machine learningPredictive analytics', 'Personalization algorithmsOptimization engines', 'Real-time processing']
    integratio,
  n: s: ['ShopifyWooCommerce', 'MagentoBigCommerce', 'Analytics platforms']
    useCas,
  e: s: ['Product recommendationsPricing optimization', 'Inventory managementCustomer personalization', 'Conversion optimization']
    r,
  o: i: 'E-commerce businesses achieve 400% ROI through increased sales and reduced operational costs.',competito,
  r: s: ['Traditional e-commerce toolsBasic analytics platforms', 'Manual optimization tools']
    marketSi,
  z: e: '$8.9B AI e-commerce market',growthRa,
  t: e: '320% annual growth',rati,
  n: g: 4.8,revie,
  w: s: 345,custome,
  r: s: 178
}
  // AI Customer Service
  {
  id: 'ai-customer-service-pro',na,
  m: e: 'AI Customer Service Pro',tagli,
  n: e: 'AI-powered customer support and chatbot platform',pri,
  c: e: '$199',peri,
  o: d: '/month',descripti,
  o: n: 'Intelligent AI customer service platform that provides 24/7 support through chatbots, automated responses, and intelligent ticket routing.'
    featur,
  e: s: [
  'AI chatbot creationNatural language processing'
      'Automated ticket routingKnowledge base management'
      'Multi-language supportIntegration capabilities'
      'Analytics dashboardTeam collaboration'
      'Custom workflowsAPI access'
]
    popula,
  r: true,ic,
  o: n: MessageSquare,col,
  o: r: 'from-blue-600 to-indigo-700',textCol,
  o: r: 'text-blue-400',li,
  n: k: '/micro-saas/ai-customer-service',marketPositi,
  o: n: 'Leading AI customer service platform with advanced NLP and automation capabilities.',targetAudien,
  c: e: 'Customer service teams, Support departments, E-commerce businesses, SaaS companies, Small businesses'
    trialDa,
  y: s: 14,setupTi,
  m: e: '2-3 days',catego,
  r: y: 'AI Customer Service',realServi,
  c: e: true,technolo,
  g: y: ['Natural language processingMachine learning', 'Chatbot frameworksAutomation engines', 'AI routing']
    integratio,
  n: s: ['CRM systemsHelp desk platforms', 'E-commerce platformsSocial media', 'Messaging apps']
    useCas,
  e: s: ['Customer supportFAQ automation', 'Ticket routingCustomer engagement', 'Support analytics']
    r,
  o: i: 'Customer service teams achieve 350% ROI through reduced response times and improved customer satisfaction.',competito,
  r: s: ['Traditional help desk toolsBasic chatbot platforms', 'Manual support systems']
    marketSi,
  z: e: '$5.6B AI customer service market',growthRa,
  t: e: '240% annual growth',rati,
  n: g: 4.7,revie,
  w: s: 456,custome,
  r: s: 234
}
  // AI Analytics Platform
  {
  id: 'ai-analytics-platform',na,
  m: e: 'AI Analytics Platform',tagli,
  n: e: 'AI-powered business intelligence and analytics',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Advanced AI analytics platform that provides intelligent insights, predictive analytics, and automated reporting for business decision-making.'
    featur,
  e: s: [
  'AI-powered insightsPredictive analytics'
      'Automated reportingData visualization'
      'Real-time monitoringCustom dashboards'
      'Data integrationCollaboration tools'
      'Mobile accessAPI integration'
]
    popula,
  r: false,ic,
  o: n: BarChart3,col,
  o: r: 'from-emerald-600 to-teal-700',textCol,
  o: r: 'text-emerald-400',li,
  n: k: '/micro-saas/ai-analytics',marketPositi,
  o: n: 'Intelligent analytics platform with AI-powered insights and predictive capabilities.',targetAudien,
  c: e: 'Business analysts, Data scientists, Executives, Marketing teams, Operations managers'
    trialDa,
  y: s: 21,setupTi,
  m: e: '3-5 days',catego,
  r: y: 'AI Analytics & BI',realServi,
  c: e: true,technolo,
  g: y: ['Machine learningPredictive analytics', 'Data processingVisualization engines', 'AI insights']
    integratio,
  n: s: ['Data sourcesBusiness tools', 'CRM systemsMarketing platforms', 'Cloud services']
    useCas,
  e: s: ['Business intelligencePerformance monitoring', 'Predictive insightsData visualization', 'Automated reporting']
    r,
  o: i: 'Businesses achieve 400% ROI through improved decision-making and operational efficiency.',competito,
  r: s: ['Traditional BI toolsBasic analytics platforms', 'Manual reporting tools']
    marketSi,
  z: e: '$7.2B AI analytics market',growthRa,
  t: e: '260% annual growth',rati,
  n: g: 4.6,revie,
  w: s: 234,custome,
  r: s: 123
},
  ]
const,
  MicroSAASServices202: 8: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popularity')

  const categories = [
  { id: 'all', na,
  m: e: 'All Services', ic,
  o: n: Globe, col,
  o: r: 'from-zion-cyan to-zion-purple' },
  },
  { id: 'ai-content', na,
  m: e: 'AI Content', ic,
  o: n: FileText, col,
  o: r: 'from-zion-blue to-zion-cyan' },
  },
  { id: 'ai-design', na,
  m: e: 'AI Design', ic,
  o: n: Palette, col,
  o: r: 'from-zion-purple to-zion-pink' },
  },
  { id: 'ai-video', na,
  m: e: 'AI Video', ic,
  o: n: Video, col,
  o: r: 'from-zion-red to-zion-orange' },
  },
  { id: 'ai-development', na,
  m: e: 'AI Development', ic,
  o: n: Code, col,
  o: r: 'from-zion-green to-zion-emerald' },
  },
  { id: 'ai-ecommerce', na,
  m: e: 'AI E-commerce', ic,
  o: n: ShoppingCart, col,
  o: r: 'from-zion-orange to-zion-red' },
  },
  { id: 'ai-customer-service', na,
  m: e: 'AI Customer Service', ic,
  o: n: MessageSquare, col,
  o: r: 'from-zion-blue to-zion-indigo' },
  },
  { id: 'ai-analytics', na,
  m: e: 'AI Analytics', ic,
  o: n: BarChart3, col,
  o: r: 'from-zion-emerald to-zion-teal' },
  },
  ]
  const filteredServices = microSAASServices2028
    .filter(service () => {
  const matchesCategory = selectedCategory === 'all' ||
        service.category.toLowerCase().includes(selectedCategory.replace('- '))
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
})
    .sort((a, b) () => {
  switch (sortBy) {
  case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))
        case 'rating':
          return b.rating - a.rating
        case 'popularity':
        defau,
  l: t: return b.popular ? 1 : -1
},
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-5xl,
  m: d: text-7xl font-bold mb-6 text-gradient";"
          >
            Micro SAAS Services 2028
          </motion.h1>
          <motion.p
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto";"
          >
            Powerful, affordable, and intelligent micro SAAS solutions designed to transform your business operations
          </motion.p>
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
            className="className="flex flex-wrap justify-center gap-4";"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              🚀 AI-Powered Solutions
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              💰 Affordable Pricing
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              ⚡ Instant Setup
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */},
  }
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Category Filter */},
  }
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
  <motion.button
                  key={category.id},
  }
                  whileHover={ sca,
  l: e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
  selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light,
  hove: r:bg-zion-slate/70'
}`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name},
  }
                </motion.button>
              ))}
            </div>

            {/* Search and Sort */},
  }
            <div className="flex flex-col,
  s: m:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-64 px-4 py-2 pl-10 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/50";"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </div>
              <select
                value={sortBy},
  }
                onChange={(e) => setSortBy(e.target.value)},
  }
                className="className="px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan/50";"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Pri,
  c: e: Low to High</option>
                <option value="price-high">Pric,
  e: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
  <motion.div
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-6,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20";"
              >
                {/* Popular Badge */},
  },
  {service.popular && (
  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )},
  {/* Service Icon */},
  }
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */},
  }
                <h3 className="text-2xl font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                  {service.name},
  }
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {service.tagline},
  }
                </p>
                <p className="text-zion-slate-light text-sm mb-6">
                  {service.description},
  }
                </p>

                {/* Price */},
  }
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light">{service.period}</span>
                </div>

                {/* Features */},
  }
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature},
  }
                    </div>
                  ))},
  {service.features.length > 3 && (
  <div className="text-sm text-zion-slate-light">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Stats */},
  }
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {service.rating} ({service.reviews} reviews)
                  </div>
                  <div>{service.customers} customers</div>
                </div>

                {/* CTA Button */},
  }
                <Link
                  to={service.link},
  }
                  className="className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold text-center group-hov,
  e: r: shadow-lg group-hov,
  e: r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Market Info */},
  }
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

      {/* Contact Section */},
  }
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-4xl,
  m: d: text-5xl font-bold mb-6 text-gradient";"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto";"
          >
            Contact our team to discuss how our micro SAAS services can transform your business operations
          </motion.p>
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
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
export default MicroSAASServices2028