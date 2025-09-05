import React from 'react';
import Head from 'next/head';
import {_Building, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Cpu, _Database, _Star, _Shield, _Scale, _Clock} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function EnterpriseSolutionsPage() {_const _solutions = [
    {
      title: "Enterprise AI Platform", _description: "Comprehensive AI platform designed for large-scale enterprise operations", _features: [
        "Scalable AI infrastructure", _"Enterprise-grade security", _"Custom model development", _"24/7 support"
      ], _price: "Custom Pricing", _icon: Cpu},
    {_title: "Quantum Security Suite", _description: "Enterprise-level quantum-resistant cybersecurity solutions", _features: [
        "Quantum-resistant encryption", _"Advanced threat detection", _"Compliance ready", _"Global deployment"
      ], _price: "Custom Pricing", _icon: Shield},
    {_title: "Enterprise DevOps", _description: "Comprehensive DevOps solutions for enterprise-scale operations", _features: [
        "CI/CD automation", _"Infrastructure as code", _"Monitoring & alerting", _"Performance optimization"
      ], _price: "Custom Pricing", _icon: Database}
  ];

  const _benefits = [
    {_icon: Scale, _title: "Enterprise Scale", _description: "Solutions designed to handle the largest enterprise workloads"},
    {_icon: Shield, _title: "Enterprise Security", _description: "Bank-level security and compliance for your critical operations"},
    {_icon: Users, _title: "Dedicated Support", _description: "24/7 dedicated support team for enterprise clients"},
    {_icon: Star, _title: "Custom Solutions", _description: "Tailored solutions designed specifically for your business needs"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise technology solutions including AI platforms, _quantum security, _and DevOps automation for large organizations." />
        <meta name="keywords" content="enterprise solutions, _enterprise AI, _enterprise security, _enterprise DevOps, _Zion Tech Group" />
        <meta property="og:title" content="Enterprise Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive enterprise technology solutions for large organizations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/enterprise" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/enterprise" />
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mx-auto mb-8">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Comprehensive technology solutions designed for enterprise-scale operations. 
              From AI platforms to quantum security, _we deliver the solutions your organization needs.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Enterprise Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {_/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for enterprise-scale operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_solutions.map((solution, _index) => (_<motion.div
                key={solution.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-blue-500/0 via-cyan-400/10 to-blue-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_solution.title}</h3>
                <p className="text-white/70 mb-6">{_solution.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_solution.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-blue-400 mb-4">{_solution.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Get Quote
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Why Choose Enterprise Solutions?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the advantages of our enterprise-grade technology solutions
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 flex-shrink-0">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can drive innovation and growth for your organization
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Enterprise Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}