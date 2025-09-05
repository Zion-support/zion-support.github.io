import React from 'react';
import Head from 'next/head';
import {_Shield, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Cpu, _Database, _Star, _Building, _Rocket, _Factory} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function SolutionsPage() {_const _solutionCategories = [
    {
      title: "Enterprise Solutions", _description: "Comprehensive technology solutions for large enterprises", _icon: Building, _color: "from-blue-500 to-cyan-500", _href: "/solutions/enterprise", _features: [
        "Scalable architecture", _"Enterprise security", _"24/7 support", _"Custom development"
      ]},
    {_title: "Startup Tools", _description: "Innovative tools and platforms for growing startups", _icon: Rocket, _color: "from-purple-500 to-pink-500", _href: "/solutions/startups", _features: [
        "Rapid prototyping", _"Cost-effective solutions", _"Scalable growth", _"Modern tech stack"
      ]},
    {_title: "Industry Specialized", _description: "Tailored solutions for specific industry requirements", _icon: Factory, _color: "from-emerald-500 to-teal-500", _href: "/solutions/industry", _features: [
        "Industry expertise", _"Compliance ready", _"Best practices", _"Domain knowledge"
      ]}
  ];

  const _benefits = [
    {_icon: Target, _title: "Tailored Solutions", _description: "Custom solutions designed specifically for your business needs"},
    {_icon: Zap, _title: "Rapid Implementation", _description: "Quick deployment and fast time-to-value"},
    {_icon: Users, _title: "Expert Support", _description: "24/7 support from our team of technology experts"},
    {_icon: Star, _title: "Proven Results", _description: "Track record of successful implementations and transformations"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Technology Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for enterprises, _startups, _and specialized industries. Custom solutions designed for your business needs." />
        <meta name="keywords" content="technology solutions, _enterprise solutions, _startup tools, _industry solutions, _Zion Tech Group" />
        <meta property="og:title" content="Technology Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology solutions for your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business. 
              From enterprise-scale deployments to startup innovation, _we deliver results.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {_/* Solutions Categories */}
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
              Solution Categories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the right solution category for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_solutionCategories.map((category, _index) => (
              <motion.div
                key={category.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className={_`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${category.color.replace('from-', _'from-').replace('to-', _'to-')}/0 via-${_category.color.split('-')[1]}-400/10 to-${_category.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={_`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-4 mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_category.title}</h3>
                <p className="text-white/70 mb-6">{_category.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_category.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={_category.href}
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Learn More
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
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the advantages of working with Zion Tech Group
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive innovation and growth for your organization
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}