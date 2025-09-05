import React from 'react';
import Head from 'next/head';
import {_Rocket, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Cpu, _Database, _Star, _Satellite, _Planet} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function SpaceTechnologyPage() {_const _services = [
    {
      title: "Satellite Intelligence", _description: "Advanced satellite systems with AI-powered data analysis and optimization", _features: [
        "Satellite constellation management", _"Real-time data processing", _"AI-powered optimization", _"Global coverage"
      ], _price: "$2, _999/month", _icon: Satellite},
    {_title: "Space Resource Discovery", _description: "AI-powered exploration and resource identification in space", _features: [
        "Resource mapping", _"Exploration planning", _"Data analysis", _"Mission optimization"
      ], _price: "$3, _499/month", _icon: Planet},
    {_title: "Space Mission Planning", _description: "Intelligent mission planning and execution for space operations", _features: [
        "Mission design", _"Risk assessment", _"Resource optimization", _"Real-time monitoring"
      ], _price: "$1, _999/month", _icon: Rocket}
  ];

  const _benefits = [
    {_icon: Rocket, _title: "Cutting-Edge Technology", _description: "Latest space technology innovations and AI-powered systems"},
    {_icon: Globe, _title: "Global Reach", _description: "Access to space resources and global satellite coverage"},
    {_icon: Star, _title: "Future-Focused", _description: "Pioneering the next generation of space exploration"},
    {_icon: Zap, _title: "AI-Powered", _description: "Intelligent systems that optimize space operations"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Space Technology Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary space technology solutions including satellite intelligence, _resource discovery, _and mission planning services." />
        <meta name="keywords" content="space technology, _satellite intelligence, _space exploration, _space resources, _Zion Tech Group" />
        <meta property="og:title" content="Space Technology Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary space technology solutions for the future of exploration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/space-tech" />
        <link rel="canonical" href="https://ziontechgroup.com/services/space-tech" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-5 mx-auto mb-8">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Explore the final frontier with our revolutionary space technology solutions. 
              From satellite intelligence to space resource discovery, _we're pushing the boundaries of what's possible.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore Space</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {_/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Space Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge space technology services that redefine exploration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_services.map((service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-indigo-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-indigo-500/0 via-purple-400/10 to-indigo-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-4 mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-indigo-400 mb-4">{_service.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Why Space Technology?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the revolutionary advantages of space technology innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_benefits.map(_(benefit, _index) => (
              <motion.div
                key={benefit.title}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-4 flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{_benefit.title}</h3>
                  <p className="text-white/70">{_benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Ready to Explore Space?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join us in pioneering the future of space technology and exploration
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Launch Your Mission</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}