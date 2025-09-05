import React from 'react';
import Head from 'next/head';
import {_Rocket, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Cpu, _Database, _Star, _Lightbulb, _Clock, _DollarSign} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function StartupToolsPage() {_const _tools = [
    {
      title: "Rapid Prototyping Platform", _description: "Fast-track your MVP development with our rapid prototyping tools", _features: [
        "Quick setup", _"Template library", _"Real-time collaboration", _"Instant deployment"
      ], _price: "$99/month", _icon: Lightbulb},
    {_title: "Startup AI Suite", _description: "AI-powered tools designed specifically for startup growth", _features: [
        "Customer insights", _"Market analysis", _"Growth optimization", _"Automated marketing"
      ], _price: "$199/month", _icon: Cpu},
    {_title: "Startup DevOps", _description: "Streamlined DevOps solutions for growing startups", _features: [
        "Automated deployment", _"Monitoring tools", _"Cost optimization", _"Scalable infrastructure"
      ], _price: "$149/month", _icon: Database}
  ];

  const _benefits = [
    {_icon: Zap, _title: "Fast Time-to-Market", _description: "Get your product to market quickly with our streamlined tools"},
    {_icon: DollarSign, _title: "Cost-Effective", _description: "Startup-friendly pricing that grows with your business"},
    {_icon: Users, _title: "Startup Community", _description: "Access to our network of startup founders and investors"},
    {_icon: Star, _title: "Proven Success", _description: "Tools that have helped hundreds of startups succeed"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Startup Tools - Zion Tech Group</title>
        <meta name="description" content="Innovative tools and platforms designed specifically for growing startups. Rapid prototyping, _AI solutions, _and DevOps automation." />
        <meta name="keywords" content="startup tools, _rapid prototyping, _startup AI, _startup DevOps, _Zion Tech Group" />
        <meta property="og:title" content="Startup Tools - Zion Tech Group" />
        <meta property="og:description" content="Innovative tools designed specifically for growing startups." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/startups" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/startups" />
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-5 mx-auto mb-8">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Startup Tools
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Innovative tools and platforms designed specifically for growing startups. 
              From rapid prototyping to AI-powered growth, _we help startups succeed.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Building</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {_/* Tools Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Startup Tools
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Essential tools designed to accelerate your startup's growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_tools.map((tool, _index) => (_<motion.div
                key={tool.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-purple-500/0 via-pink-400/10 to-purple-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 mb-6">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_tool.title}</h3>
                <p className="text-white/70 mb-6">{_tool.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_tool.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-purple-400 mb-4">{_tool.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Why Choose Startup Tools?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the advantages of our startup-focused technology solutions
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 flex-shrink-0">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Ready to Accelerate Your Startup?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our startup tools can help you build, grow, and succeed
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}