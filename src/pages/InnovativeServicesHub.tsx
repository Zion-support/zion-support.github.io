import React from "react"
import { motion } from "framer-motion"
import {
  Rocket
  Brain
  Zap
  Globe
  Shield
  Cpu
  Database
  Network
  Lock
  TrendingUp
  Users
  ArrowRight
  Star
  Clock
  DollarSign
  Target
  Phone
  Mail
  MapPin
  ExternalLink
  Lightbulb
  Code
  Cloud
  Server
  Smartphone
  Monitor
  Wifi
  Key
  BarChart3
  Globe2
  ShieldCheck
} from "lucide-react"
const,
  InnovativeServicesHu: b: React.FC = () () => {
  const serviceCategories = [
    {
      i,
  d: 'ultimate-2025',tit,
  l: e: 'Ultimate Innovative Services 2025',descripti,
  o: n: 'Revolutionary micro SAAS, IT, and AI services that push the boundaries of technology'
      ic,
  o: n: Rocket,col,
  o: r: 'from-blue-600 to-purple-600',rou,
  t: e: '/ultimate-services-2025',featur,
  e: s: ['AI-Powered SolutionsQuantum Computing', 'Blockchain InnovationEdge Computing']
      sta,
  t: s: { service,
  s: 10, avgR,
  O: I: '500%', innovati,
  o: n: 'Revolutionary' }
    }, {
      id: 'advanced-2026',tit,
  l: e: 'Advanced Innovative Services 2026',descripti,
  o: n: 'Cutting-edge futuristic technologies including brain-computer interfaces and space mining',ic,
  o: n: Brain,col,
  o: r: 'from-purple-600 to-pink-600',rou,
  t: e: '/advanced-services-2026',featur,
  e: s: ['Brain-Computer InterfacesSpace Mining', 'Synthetic BiologyFusion Energy']
      sta,
  t: s: { service,
  s: 10, avgR,
  O: I: '1000%', innovati,
  o: n: 'Futuristic' }
    }, {
      id: 'core-it',tit,
  l: e: 'Core IT & Infrastructure',descripti,
  o: n: 'Enterprise-grade IT solutions and infrastructure services for modern businesses',ic,
  o: n: Server,col,
  o: r: 'from-green-600 to-teal-600',rou,
  t: e: '/services',featur,
  e: s: ['Cloud ServicesCybersecurity', 'IT InfrastructureDigital Transformation']
      sta,
  t: s: { service,
  s: 15, avgR,
  O: I: '300%', innovati,
  o: n: 'Enterprise' }
    }, {
      id: 'green-tech',tit,
  l: e: 'Green Technology Solutions',descripti,
  o: n: 'Sustainable and eco-friendly technology solutions for a better future',ic,
  o: n: Globe,col,
  o: r: 'from-emerald-600 to-green-600',rou,
  t: e: '/green-it',featur,
  e: s: ['Renewable EnergyCarbon Reduction', 'Sustainable ComputingGreen AI']
      sta,
  t: s: { service,
  s: 8, avgR,
  O: I: '400%', innovati,
  o: n: 'Sustainable' }
    }
  ]
  const featuredServices = [
    {
      tit,
  l: e: 'Quantum AI Neural Networks',descripti,
  o: n: 'Revolutionary AI powered by quantum computing principles',catego,
  r: y: 'AI & Quantum',pri,
  c: e: '$50,000'
      r,
  o: i: '800%',delive,
  r: y: '6 months'
    }, {
      tit,
  l: e: 'Brain-Computer Interface Platform',descripti,
  o: n: 'Direct neural interface for human-computer interaction',catego,
  r: y: 'Neurotech',pri,
  c: e: '$100,000'
      r,
  o: i: '1200%',delive,
  r: y: '12 months'
    }, {
      tit,
  l: e: 'Autonomous Space Mining System',descripti,
  o: n: 'AI-powered space exploration and resource extraction',catego,
  r: y: 'Space Tech',pri,
  c: e: '$500,000'
      r,
  o: i: '2000%',delive,
  r: y: '18 months'
    }
  ]
  const const containerVariants = { = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.1
      }
    }
  }
  const const itemVariants = { = {
    hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 }
    visib,
  l: e: {
      ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
        duratio,
  n: 0.5
      }
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.div
        className="className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20";"
        initial={ opaci,
  t: y: 0 }
        animate={ opaci,
  t: y: 1 }
        transition={ durati,
  o: n: 0.8 }
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6";"
            initial={ ,
  y: -50, opaci,
  t: y: 0 }
            animate={ y: 0, opaci,
  t: y: 1 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
          >
            Innovative Services Hub
          </motion.h1>
          <motion.p
            className="className="text-xl,
  m: d: text-2xl text-indigo-100 max-w-4xl mx-auto mb-8";"
            initial={ ,
  y: 50, opaci,
  t: y: 0 }
            animate={ y: 0, opaci,
  t: y: 1 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
          >
            Discover the future of technology with our comprehensive portfolio of innovative services
          </motion.p>
          <motion.div
            className="className="flex flex-wrap justify-center gap-4 text-sm";"
            initial={ sca,
  l: e: 0.8, opaci,
  t: y: 0 }
            animate={ sca,
  l: e: 1, opaci,
  t: y: 1 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
          >
            <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200">
              🚀 40+ Services
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200">
              💰 500%+ ROI
            </span>
            <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-pink-200">
              ⚡ Cutting-Edge Tech
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200">
              🌍 Global Impact
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="className="container mx-auto px-4 py-16";"
        initial={ opaci,
  t: y: 0, y: 20 }
        animate={ opaci,
  t: y: 1, y: 0 }
        transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 }
      >
        <div className="grid grid-cols-1,
  m: d:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-blue-400 mb-2">40+</div>
            <div className="text-slate-300">Innovative Services</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-green-400 mb-2">500%+</div>
            <div className="text-slate-300">Average ROI</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-slate-300">Technology Categories</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-slate-300">Global Clients</div>
          </div>
        </div>
      </motion.div>

      {/* Service Categories */}
      <motion.div
        className="className="container mx-auto px-4 py-16";"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Service Categories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From revolutionary AI to sustainable green technology, discover the perfect solution for your business
          </p>
        </div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 gap-8">
          {serviceCategories.map((category) () => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.id}
                className="className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50,
  hove: r: border-blue-500/50 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-blue-500/20";"
                variants={itemVariants}
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hov,
  e: r:text-blue-300 transition-colors mb-2">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-3">Key,
  Feature: s:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{category.stats.services}</div>
                    <div className="text-xs text-slate-400">Services</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{category.stats.avgROI}</div>
                    <div className="text-xs text-slate-400">Avg ROI</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{category.stats.innovation}</div>
                    <div className="text-xs text-slate-400">Level</div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={category.route}
                  className="className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r: from-blue-700,
  hove: r:to-purple-700 text-white font-bold rounded-xl transition-all duration-300,
  hove: r:scale-105 group-hove,
  r:gap-3";"
                >
                  Explore {category.title}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Featured Services */}
      <motion.div
        className="className="container mx-auto px-4 py-16";"
        initial={ opaci,
  t: y: 0, y: 20 }
        animate={ opaci,
  t: y: 1, y: 0 }
        transition={ durati,
  o: n: 0.6, del,
  a: y: 1.2 }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Revolutionary Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our most innovative and high-impact solutions that are transforming industries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              className="className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50,
  hove: r: border-blue-500/50 transition-all duration-300";"
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 1.4 + index * 0.1 }
              whileHover={ y: -5, sca,
  l: e: 1.02 }
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm text-yellow-400 font-medium">Featured</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{service.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Catego,
  r: y:</span>
                  <span className="text-blue-400">{service.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Pri,
  c: e:</span>
                  <span className="text-green-400 font-bold">{service.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">R,
  O: I:</span>
                  <span className="text-purple-400 font-bold">{service.roi}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Delive,
  r: y:</span>
                  <span className="text-orange-400">{service.delivery}</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r: from-blue-700,
  hove: r:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hove,
  r:scale-105">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="className="bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 border-t border-slate-700/50";"
        initial={ opaci,
  t: y: 0, y: 50 }
        animate={ opaci,
  t: y: 1, y: 0 }
        transition={ durati,
  o: n: 0.8, del,
  a: y: 1.6 }
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team of innovation experts is ready to help you implement these cutting-edge solutions.
              Get in touch today to start your journey into the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-slate-300 mb-3">Speak directly with our experts</p>
              <a href="t,
  e: l:+13024640950" className="text-blue-400,
  hove: r:text-blue-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-slate-300 mb-3">Send us a detailed message</p>
              <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-purple-400 hove,
  r:text-purple-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300 mb-3">Come see our innovation center</p>
              <p className="text-green-400 font-medium">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="htt,
  p: s: //ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600,
  hove: r:from-indigo-700,
  hove: r:to-purple-700 text-white font-bold rounded-xl transition-all duration-300,
  hove: r:scale-105,
  hove: r:shadow-2xl hove,
  r:shadow-indigo-500/25";"
            >
              Visit Our Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default InnovativeServicesHub