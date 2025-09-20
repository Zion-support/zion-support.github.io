import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import { Link   } from "react-router-dom";
import {
  Brain;
  Cloud;
  Shield;
  Server;
  Zap;
  Globe;
  Cpu;
  Database;
  Network;
  Lock;
  Code;
  Rocket;
  Users;
  Search;
  Filter;
  Star;
  TrendingUp;
  DollarSign;
  Clock;
  CheckCircle;
  ArrowRight;
  Play;
  BookOpen;
  MessageCircle;
  Phone;
  Mail;
  MapPin;
  Globe as GlobeIcon;
  Atom;
  Blockchain;
  Heart;
  Scale;
  Factory;
  Satellite;
  ShoppingCart;
  Building;
  Truck;
  Eye;
  EyeOff;
  ExternalLink;
  Award;
  Target;
  Lightbulb;
  Sparkles;
  Zap as ZapIcon;
  Brain as BrainIcon;
  Dna;
  Space;
  Layers;
  Monitor;
  Smartphone;
  Globe2;
  Leaf;
  BarChart3;
  PieChart;
  TrendingDown;
  Activity;
  Shield as ShieldIcon;
  Lock as LockIcon;
  Key;
  Database as DatabaseIcon;
  Server as ServerIcon;
  Wifi;
  Smartphone as SmartphoneIcon;
  Monitor as MonitorIcon;
  Globe as GlobeIcon2;
  Cpu as CpuIcon;
  Brain as BrainIcon2;
  Atom as AtomIcon;
  Rocket as RocketIcon;
  Satellite as SatelliteIcon;
  Dna as DnaIcon;
  Layers as LayersIcon;
  Monitor as MonitorIcon2;
  Smartphone as SmartphoneIcon2;
  Globe as GlobeIcon3;
  Cpu as CpuIcon2;
  Network as NetworkIcon;
  Leaf as LeafIcon;
}
}
 } from "lucide-react";
import SEO from "@/components/SEO"
import { ULTIMATE_INNOVATIVE_SERVICES_2026   } from "@/data/ultimateInnovativeServices2026";
export default function ComprehensiveServicesOverview2026() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const serviceCategories = [
  {
  id: 'quantum-ai',na,
  m: e: 'Quantum AI & Computing',descripti,
  o: n: 'Revolutionary quantum computing solutions combined with artificial intelligence',ic,
  o: n: AtomIcon,col,
  o: r: 'from-purple-500 to-cyan-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Quantum AI'),marketSi,
  z: e: '$1.7 billion by 2027',avgR,
  O: I: '500-2000%',innovationLev,
  e: l: 'Revolutionary'
},
  {
  id: 'neuromorphic-ai',na,
  m: e: 'Neuromorphic AI',descripti,
  o: n: 'Brain-inspired computing systems that mimic human neural networks',ic,
  o: n: BrainIcon2,col,
  o: r: 'from-pink-500 to-purple-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Neuromorphic AI'),marketSi,
  z: e: '$8.3 billion by 2027',avgR,
  O: I: '300-800%',innovationLev,
  e: l: 'Cutting-edge'
},
  {
  id: 'synthetic-biology',na,
  m: e: 'Synthetic Biology AI',descripti,
  o: n: 'AI-powered design and engineering of biological systems',ic,
  o: n: DnaIcon,col,
  o: r: 'from-green-500 to-blue-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Synthetic Biology'),marketSi,
  z: e: '$13.4 billion by 2027',avgR,
  O: I: '400-1200%',innovationLev,
  e: l: 'Revolutionary'
},
  {
  id: 'space-technology',na,
  m: e: 'Space Technology AI',descripti,
  o: n: 'Autonomous space operations and satellite management systems',ic,
  o: n: SatelliteIcon,col,
  o: r: 'from-blue-500 to-purple-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Space Technology'),marketSi,
  z: e: '$469.8 billion by 2027',avgR,
  O: I: '600-2000%',innovationLev,
  e: l: 'Revolutionary'
},
  {
  id: 'advanced-materials',na,
  m: e: 'Advanced Materials AI',descripti,
  o: n: 'AI-powered discovery and design of next-generation materials',ic,
  o: n: LayersIcon,col,
  o: r: 'from-orange-500 to-red-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Advanced Materials'),marketSi,
  z: e: '$1.2 trillion by 2027',avgR,
  O: I: '500-1500%',innovationLev,
  e: l: 'Cutting-edge'
},
  {
  id: 'brain-computer-interface',na,
  m: e: 'Brain-Computer Interface',descripti,
  o: n: 'Direct neural communication between human brain and computers',ic,
  o: n: MonitorIcon2,col,
  o: r: 'from-purple-500 to-pink-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Brain-Computer Interface'),marketSi,
  z: e: '$3.7 billion by 2027',avgR,
  O: I: '800-3000%',innovationLev,
  e: l: 'Revolutionary'
},
  {
  id: 'digital-twin',na,
  m: e: 'Digital Twin AI',descripti,
  o: n: 'Virtual replicas of physical systems with real-time monitoring',ic,
  o: n: GlobeIcon3,col,
  o: r: 'from-cyan-500 to-green-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Digital Twin'),marketSi,
  z: e: '$86.1 billion by 2028',avgR,
  O: I: '400-1200%',innovationLev,
  e: l: 'Advanced'
},
  {
  id: 'extended-reality',na,
  m: e: 'Extended Reality AI',descripti,
  o: n: 'Immersive VR, AR, and MR experiences powered by AI'
      ic,
  o: n: SmartphoneIcon2,col,
  o: r: 'from-orange-500 to-purple-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Extended Reality'),marketSi,
  z: e: '$125.2 billion by 2027',avgR,
  O: I: '500-1500%',innovationLev,
  e: l: 'Advanced'
},
  {
  id: 'edge-ai',na,
  m: e: 'Edge AI Intelligence',descripti,
  o: n: 'AI processing at the edge of networks for real-time decision making',ic,
  o: n: CpuIcon2,col,
  o: r: 'from-green-500 to-cyan-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Edge AI'),marketSi,
  z: e: '$15.7 billion by 2027',avgR,
  O: I: '400-1200%',innovationLev,
  e: l: 'Advanced'
},
  {
  id: 'federated-learning',na,
  m: e: 'Federated Learning AI',descripti,
  o: n: 'Collaborative AI training across distributed data sources',ic,
  o: n: NetworkIcon,col,
  o: r: 'from-purple-500 to-blue-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Federated Learning'),marketSi,
  z: e: '$2.3 billion by 2027',avgR,
  O: I: '500-1500%',innovationLev,
  e: l: 'Advanced'
},
  {
  id: 'sustainable-technology',na,
  m: e: 'Sustainable Technology AI',descripti,
  o: n: 'AI solutions for environmental sustainability and green innovation',ic,
  o: n: LeafIcon,col,
  o: r: 'from-green-500 to-blue-500',servic,
  e: s: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Sustainable Technology'),marketSi,
  z: e: '$1.2 trillion by 2027',avgR,
  O: I: '300-800%',innovationLev,
  e: l: 'Advanced'
},
  ]
  const filteredCategories = selectedCategory === 'all'
    ? serviceCategories;
    : serviceCategories.filter(cat => cat.id === selectedCategory)

  const toggleCategoryExpansion = (category,
  I: d: string) () => {
  setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }
  const totalServices = ULTIMATE_INNOVATIVE_SERVICES_2026.length;
const totalMarketSize = '$3.2+ trillion'
const avgROI = '400-1500%'
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO;
        title="Comprehensive Services Overview 2026 | Zion Tech Group"
        description="Explore our complete portfolio of revolutionary micro SAAS services across 11 cutting-edge technology categories. From Quantum AI to Sustainable Technology."
        keywords="comprehensive services, quantum AI, neuromorphic computing, synthetic biology, space technology, brain-computer interface, digital twin, extended reality, edge AI, federated learning, sustainable technology"
      />

      {/* Hero Section */},
  }
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">
        <div className="absolute inset-0 bg-black/20"></div>
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
  o: n: 0.8 },
  }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6">
              Comprehensive Services;
              <span className="block text-6xl,
  m: d:text-8xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Overview 2026;
              </span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of revolutionary micro SAAS services across 11 cutting-edge technology categories.
              From Quantum AI to Sustainable Technology, we're shaping the future of innovation.
            </p>

            {/* Stats Grid */},
  }
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div;
                whileHover={ scal,
  e: 1.05 },
  }
                className="className="bg-white/20 backdrop-blur-sm rounded-xl p-6";"
              >
                <div className="text-4xl font-bold text-white mb-2">{totalServices}</div>
                <div className="text-white/80">Revolutionary Services</div>
              </motion.div>
              <motion.div;
                whileHover={ sca,
  l: e: 1.05 },
  }
                className="className="bg-white/20 backdrop-blur-sm rounded-xl p-6";"
              >
                <div className="text-4xl font-bold text-white mb-2">{totalMarketSize}</div>
                <div className="text-white/80">Total Market Size</div>
              </motion.div>
              <motion.div;
                whileHover={ sca,
  l: e: 1.05 },
  }
                className="className="bg-white/20 backdrop-blur-sm rounded-xl p-6";"
              >
                <div className="text-4xl font-bold text-white mb-2">{avgROI}</div>
                <div className="text-white/80">Average ROI</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */},
  }
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-zion-slate-300">Filter our services by technology category</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button;
              onClick={onClick={() => setSelectedCategory('all')},
  },
  }
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
  selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-white/10 text-zion-slate-300,
  hove: r:bg-white/20'
}`}
            >
              All Categories;
            </button>
            {serviceCategories.map(category => (
  <button;
                key={category.id},
  }
                onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                className={`px-6 py-3 rounded-lg transition-all duration-200 ${
  selectedCategory === category.id;
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-300,
  hove: r:bg-white/20'
}`}
              >
                {category.name},
  }
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */},
  }
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-4">
              {filteredCategories.length} Technology Categories;
            </h2>
            <p className="text-zion-slate-300 text-lg">
              Each category represents a breakthrough in technology innovation;
            </p>
          </div>

          <div className="space-y-8">
            <AnimatePresence>
              {filteredCategories.map((category, index) => (
  <motion.div;
                  key={category.id},
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
                  className="className="bg-white/5 backdrop-blur-sm border border-zion-slate-300/20 rounded-2xl p-6";"
                >
                  {/* Category Header */},
  }
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-zion-slate-300 max-w-2xl">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate-400 mb-1">Market Size</div>
                      <div className="text-lg font-bold text-zion-cyan">{category.marketSize}</div>
                      <div className="text-sm text-zion-slate-400 mt-1">Avg,
  RO: I: {category.avgROI}</div>
                    </div>
                  </div>

                  {/* Innovation Level Badge */},
  }
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
  category.innovationLevel === 'Revolutionary'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : category.innovationLevel === 'Cutting-edge'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
}`}>
                      {category.innovationLevel},
  }
                    </div>
                    <div className="text-zion-slate-400">
                      {category.services.length} service{category.services.length !== 1 ? 's' : ''},
  }
                    </div>
                  </div>

                  {/* Services Preview */},
  }
                  <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-4 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
  <div key={service.id} className="bg-zion-slate-800/50 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                        <div className="text-zion-cyan font-bold text-lg mb-2">
                          ${service.price.toLocaleString()},
  }
                        </div>
                        <div className="text-xs text-zion-slate-400 line-clamp-2">
                          {service.description},
  }
                        </div>
                      </div>
                    ))},
  {category.services.length > 3 && (
  <div className="bg-zion-slate-800/50 rounded-lg p-4 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl text-zion-cyan font-bold mb-2">
                            +{category.services.length - 3},
  }
                          </div>
                          <div className="text-sm text-zion-slate-400">More Services</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expand/Collapse Button */},
  }
                  <button;
                    onClick={onClick={() => toggleCategoryExpansion(category.id)},
  },
  }
                    className="className="w-full flex items-center justify-center gap-2 py-3 text-zion-cyan,
  hove: r:text-white transition-colors border-t border-zion-slate-600/30";"
                  >
                    {expandedCategory === category.id ? (
  <>
                        <EyeOff className="w-4 h-4" />
                        Show Less;
                      </>
                    ) : (
  <>
                        <Eye className="w-4 h-4" />
                        View All Services;
                      </>
                    )}
                  </button>

                  {/* Expanded Services Details */},
  }
                  <AnimatePresence>
                    {expandedCategory === category.id && (
  <motion.div;
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
                        className="className="mt-6 pt-6 border-t border-zion-slate-600/30";"
                      >
                        <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-6">
                          {category.services.map((service, serviceIndex) => (
  <div key={service.id} className="bg-zion-slate-800/30 rounded-lg p-6 border border-zion-slate-600/30">
                              <div className="flex items-start justify-between mb-4">
                                <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                                <div className="text-right">
                                  <div className="text-xl font-bold text-zion-cyan">
                                    ${service.price.toLocaleString()},
  }
                                  </div>
                                  <div className="text-sm text-zion-slate-400">
                                    {service.pricingModel},
  }
                                  </div>
                                </div>
                              </div>

                              <p className="text-zion-slate-300 text-sm mb-4">{service.description}</p>

                              <div className="flex items-center gap-2 mb-4">
                                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
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

                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.tags.slice(0, 3).map((tag, tagIndex) => (
  <span;
                                    key={tagIndex},
  }
                                    className="className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-md";"
                                  >
                                    {tag},
  }
                                  </span>
                                ))}
                              </div>

                              <Link;
                                to="/contact"
                                className="className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg,
  hove: r: from-zion-blue hove,
  r:to-zion-cyan transition-all duration-200 font-semibold text-sm";"
                              >
                                <MessageCircle className="w-4 h-4" />
                                Get Started;
                              </Link>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact CTA */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center px-4,
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
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-zion-slate-300 mb-8">
              Our comprehensive portfolio of revolutionary micro SAAS services is designed to transform your business.
              Contact us today to discover how we can help you achieve breakthrough results.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg,
  hove: r:from-zion-blue,
  hove: r:to-zion-cyan transition-all duration-200 font-semibold text-lg";"
              >
                <MessageCircle className="w-5 h-5" />
                Start Your Journey;
              </Link>
              <a;
                href="t,
  e: l:+13024640950"
                className="className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-slate-300 text-white rounded-lg,
  hove: r:bg-white/20 transition-all duration-200 font-semibold text-lg";"
              >
                <Phone className="w-5 h-5" />
                Call Now;
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