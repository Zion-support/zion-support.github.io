import React from "react"
import { motion } from "framer-motion"
import {
  Brain
  Atom
  Lock
  Wifi
  Shield
  Eye
  Globe2
  Leaf
  Zap
  Rocket
  Cpu
  Database
  Network
  Code
  Users
  BarChart3
  TrendingUp
  Lightbulb
  Target
  Award
} from "lucide-react"
const,
  InnovativeService: s: React.FC = () () => {
  const innovations = [
    {
      i,
  d: 'ai-automation',tit,
  l: e: 'AI Business Automation',descripti,
  o: n: 'Revolutionary AI-powered business process automation that transforms your operations',ic,
  o: n: Brain,featur,
  e: s: [
        'Intelligent workflow automationPredictive analytics integration'
        'Real-time decision makingScalable AI infrastructure'
      ]
      benefit,
  s: ['300% efficiency increase24/7 autonomous operation', 'Cost reduction up to 60%']
      col,
  o: r: 'from-zion-cyan to-zion-purple'
    }, {
      id: 'quantum-computing',tit,
  l: e: 'Quantum Computing Services',descripti,
  o: n: 'Next-generation quantum computing solutions for complex problem-solving',ic,
  o: n: Atom,featur,
  e: s: [
        'Quantum algorithm optimizationCryptographic security'
        'Molecular simulationFinancial modeling'
      ]
      benefit,
  s: ['1000x faster computationUnbreakable encryption', 'Revolutionary breakthroughs']
      col,
  o: r: 'from-zion-purple to-zion-blue'
    }, {
      id: 'blockchain',tit,
  l: e: 'Enterprise Blockchain',descripti,
  o: n: 'Secure, scalable blockchain solutions for enterprise applications'
      ic,
  o: n: Lock,featur,
  e: s: [
        'Smart contract developmentDeFi platform creation'
        'Supply chain transparencyDigital asset management'
      ]
      benefit,
  s: ['Immutable securityTransparent operations', 'Reduced costs']
      col,
  o: r: 'from-zion-blue to-zion-green'
    }, {
      id: 'iot-edge',tit,
  l: e: 'IoT Edge Computing',descripti,
  o: n: 'Intelligent IoT solutions with edge computing for real-time processing',ic,
  o: n: Wifi,featur,
  e: s: [
        'Edge AI processingReal-time analytics'
        'Predictive maintenanceSmart city solutions'
      ]
      benefit,
  s: ['Reduced latencyLower bandwidth costs', 'Enhanced security']
      col,
  o: r: 'from-zion-green to-zion-emerald'
    }, {
      id: 'cybersecurity',tit,
  l: e: 'Zero Trust Security',descripti,
  o: n: 'Advanced cybersecurity platform with zero-trust architecture',ic,
  o: n: Shield,featur,
  e: s: [
        'Multi-factor authenticationBehavioral analytics'
        'Threat intelligenceIncident response automation'
      ]
      benefit,
  s: ['99.99% threat preventionReal-time monitoring', 'Compliance ready']
      col,
  o: r: 'from-zion-emerald to-zion-cyan'
    }, {
      id: 'digital-twin',tit,
  l: e: 'Digital Twin Technology',descripti,
  o: n: 'Create virtual replicas of physical systems for simulation and optimization',ic,
  o: n: Eye,featur,
  e: s: [
        '3D modeling and simulationReal-time monitoring'
        'Predictive maintenancePerformance optimization'
      ]
      benefit,
  s: ['Reduced downtimeOptimized performance', 'Cost savings']
      col,
  o: r: 'from-zion-cyan to-zion-purple'
    }, {
      id: 'metaverse',tit,
  l: e: 'Metaverse & VR',descripti,
  o: n: 'Immersive virtual reality and metaverse development platform',ic,
  o: n: Globe2,featur,
  e: s: [
        'VR application developmentMetaverse platform creation'
        '3D content creationVirtual event hosting'
      ]
      benefit,
  s: ['Enhanced user engagementNew revenue streams', 'Innovative experiences']
      col,
  o: r: 'from-zion-purple to-zion-blue'
    }, {
      id: 'green-tech',tit,
  l: e: 'Green Tech Solutions',descripti,
  o: n: 'Sustainable technology solutions for environmental impact reduction',ic,
  o: n: Leaf,featur,
  e: s: [
        'Renewable energy optimizationCarbon footprint tracking'
        'Sustainable infrastructureGreen data centers'
      ]
      benefit,
  s: ['Environmental impactCost savings', 'Regulatory compliance']
      col,
  o: r: 'from-zion-blue to-zion-green'
    }
  ]
  const stats = [
    { lab,
  e: l: 'Innovation Projects', val,
  u: e: '500+', ic,
  o: n: Rocket }, { lab,
  e: l: 'AI Models Deployed', val,
  u: e: '1000+', ic,
  o: n: Brain }, { lab,
  e: l: 'Quantum Breakthroughs', val,
  u: e: '50+', ic,
  o: n: Atom }, { lab,
  e: l: 'Client Success Rate', val,
  u: e: '99.8%', ic,
  o: n: Award }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-gradient mb-6">
              Cutting-Edge
              <span className="block text-zion-cyan">Innovations</span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover the future of technology with Zion Tech Group's revolutionary innovations.
              From AI automation to quantum computing, we're building tomorrow's solutions today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={ sca,
  l: e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg,
  hove: r: shadow-xl transition-all duration-300";"
              >
                Explore Innovations
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl,
  hove: r: bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 m,
  d:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our portfolio of cutting-edge innovations that are reshaping industries
              and creating new possibilities for the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="group relative";"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 h-full,
  hove: r: border-zion-cyan/40 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <innovation.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                    {innovation.title}
                  </h3>

                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {innovation.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3">Key,
  Feature: s:</h4>
                    <ul className="space-y-2">
                      {innovation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3">Benefi,
  t: s:</h4>
                    <ul className="space-y-2">
                      {innovation.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light">
                          <TrendingUp className="w-4 h-4 text-zion-green mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={ sca,
  l: e: 1.02 }
                    whileTap={ sca,
  l: e: 0.98 }
                    className="className="w-full py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl,
  hove: r: bg-gradient-to-r,
  hove: r:from-zion-cyan/30 hove,
  r:to-zion-purple/30 transition-all duration-300";"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of technology with Zion Tech Group. Let's build something amazing together.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg,
  hove: r: shadow-xl transition-all duration-300";"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl,
  hove: r: bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default InnovativeServices