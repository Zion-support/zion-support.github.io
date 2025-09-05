import React from 'react';
import Head from 'next/head';
import {_Database, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Cpu, _Server, _Star, _Network, _Cloud} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function EdgeComputingPage() {_const _services = [
    {
      title: "Edge Orchestration", _description: "Intelligent edge computing orchestration and management platform", _features: [
        "Multi-edge management", _"Load balancing", _"Resource optimization", _"Real-time monitoring"
      ], _price: "$799/month", _icon: Network},
    {_title: "Edge AI Deployment", _description: "Deploy and manage AI models at the edge for optimal performance", _features: [
        "Model optimization", _"Edge deployment", _"Performance monitoring", _"Auto-scaling"
      ], _price: "$1, _199/month", _icon: Cpu},
    {_title: "IoT Edge Solutions", _description: "Comprehensive IoT edge computing solutions for connected devices", _features: [
        "Device management", _"Data processing", _"Real-time analytics", _"Security integration"
      ], _price: "$599/month", _icon: Server}
  ];

  const _benefits = [
    {_icon: Zap, _title: "Ultra-Low Latency", _description: "Process data closer to the source for instant response times"},
    {_icon: Globe, _title: "Global Distribution", _description: "Deploy applications worldwide with edge computing infrastructure"},
    {_icon: Target, _title: "Cost Optimization", _description: "Reduce bandwidth costs and improve resource utilization"},
    {_icon: Star, _title: "Scalable Architecture", _description: "Easily scale your edge computing resources as needed"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Edge Computing Services - Zion Tech Group</title>
        <meta name="description" content="Advanced edge computing solutions including orchestration, _AI deployment, _and IoT edge services for optimal performance." />
        <meta name="keywords" content="edge computing, _edge orchestration, _edge AI, _IoT edge, _distributed computing, _Zion Tech Group" />
        <meta property="og:title" content="Edge Computing Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced edge computing solutions for optimal performance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/edge-computing" />
        <link rel="canonical" href="https://ziontechgroup.com/services/edge-computing" />
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-5 mx-auto mb-8">
              <Database className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Transform your applications with cutting-edge edge computing solutions. 
              From intelligent orchestration to AI deployment, _we optimize performance at the edge.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Optimize Performance</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Edge Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive edge computing services designed for optimal performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_services.map((service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-emerald-500/0 via-teal-400/10 to-emerald-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-emerald-400 mb-4">{_service.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Why Edge Computing?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the revolutionary advantages of edge computing technology
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 flex-shrink-0">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Ready to Optimize Performance?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our edge computing solutions can transform your application performance
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Optimizing</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}