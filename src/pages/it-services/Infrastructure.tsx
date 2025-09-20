import React from "react"
import { motion } from "framer-motion"
import { Server, Network, Shield, Zap, ArrowRight, Cloud, Database, Cpu, Users, BarChart3, CheckCircle, Globe } from "lucide-react"
export default function Infrastructure() {
  const features = [
    {
      ic,
  o: n: Server,tit,
  l: e: 'Scalable Infrastructure',descripti,
  o: n: 'Build robust systems that grow with your business'
    }, {
      ic,
  o: n: Network,tit,
  l: e: 'Network Management',descripti,
  o: n: 'Optimize connectivity and performance'
    }, {
      ic,
  o: n: Shield,tit,
  l: e: 'Security First',descripti,
  o: n: 'Protect your infrastructure with enterprise-grade security'
    }, {
      ic,
  o: n: Zap,tit,
  l: e: 'High Performance',descripti,
  o: n: 'Lightning-fast systems and applications'
    }
  ]
  const services = [
    {
      tit,
  l: e: 'Server Management',descripti,
  o: n: 'Comprehensive server administration and optimization',ic,
  o: n: Server
    }, {
      tit,
  l: e: 'Network Design',descripti,
  o: n: 'Custom network architecture and implementation',ic,
  o: n: Network
    }, {
      tit,
  l: e: 'Cloud Migration',descripti,
  o: n: 'Seamless transition to cloud infrastructure',ic,
  o: n: Cloud
    }, {
      tit,
  l: e: 'Disaster Recovery',descripti,
  o: n: 'Business continuity and backup solutions',ic,
  o: n: Shield
    }
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Server className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-medium">IT Infrastructure</span>
            </div>

            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Build Your Digital
              <span className="text-gradient"> Foundation</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Create a robust, scalable, and secure IT infrastructure that powers
              your business growth and digital transformation.
            </p>

            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Infrastructure Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Infrastructure Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Enterprise-grade infrastructure that scales with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6,
  hove: r: border-zion-cyan/40 transition-all duration-300 group";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hove,
  r:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive IT infrastructure solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8,
  hove: r: border-zion-cyan/40 transition-all duration-300 group";"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hove,
  r:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-center relative overflow-hidden";"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Infrastructure?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Create a solid foundation for your digital transformation journey.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold,
  hove: r:bg-gray-100 transition-colors duration-300">
                  Get Infrastructure Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold,
  hove: r:bg-white hove,
  r:text-orange-600 transition-colors duration-300">
                  Contact Infrastructure Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}