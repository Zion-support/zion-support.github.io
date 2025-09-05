import React from 'react';
import Head from 'next/head';
import {_Factory, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Cpu, _Database, _Star, _Shield, _Building2, _Car} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function IndustrySolutionsPage() {_const _industries = [
    {
      title: "Financial Services", _description: "AI-powered solutions for banking, _insurance, _and fintech companies", _features: [
        "Fraud detection", _"Risk assessment", _"Compliance automation", _"Customer insights"
      ], _icon: Building2, _color: "from-green-500 to-emerald-500"},
    {_title: "Healthcare", _description: "Technology solutions for healthcare providers and pharmaceutical companies", _features: [
        "Patient data analytics", _"Drug discovery AI", _"Telemedicine platforms", _"Security compliance"
      ], _icon: Shield, _color: "from-blue-500 to-cyan-500"},
    {_title: "Manufacturing", _description: "Smart manufacturing solutions with IoT and AI integration", _features: [
        "Predictive maintenance", _"Quality control", _"Supply chain optimization", _"Automation systems"
      ], _icon: Factory, _color: "from-orange-500 to-red-500"}
  ];

  const _benefits = [
    {_icon: Target, _title: "Industry Expertise", _description: "Deep understanding of your industry's unique challenges and requirements"},
    {_icon: Shield, _title: "Compliance Ready", _description: "Solutions designed to meet industry-specific regulations and standards"},
    {_icon: Users, _title: "Domain Knowledge", _description: "Team with extensive experience in your industry vertical"},
    {_icon: Star, _title: "Best Practices", _description: "Proven solutions based on industry best practices and standards"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Industry Specialized Solutions - Zion Tech Group</title>
        <meta name="description" content="Tailored technology solutions for specific industries including financial services, _healthcare, _manufacturing, _and more." />
        <meta name="keywords" content="industry solutions, _financial services, _healthcare, _manufacturing, _specialized solutions, _Zion Tech Group" />
        <meta property="og:title" content="Industry Specialized Solutions - Zion Tech Group" />
        <meta property="og:description" content="Tailored technology solutions for specific industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/industry" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/industry" />
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
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Industry Specialized Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry. 
              From financial services to healthcare, _we understand your unique challenges.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Industry Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {_/* Industries Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Specialized solutions designed for your industry's unique requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_industries.map((industry, _index) => (
              <motion.div
                key={industry.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className={_`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${industry.color.replace('from-', _'from-').replace('to-', _'to-')}/0 via-${_industry.color.split('-')[1]}-400/10 to-${_industry.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={_`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} p-4 mb-6`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_industry.title}</h3>
                <p className="text-white/70 mb-6">{_industry.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_industry.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Why Industry Specialized?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the advantages of our industry-focused approach
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
              Ready for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry expertise can solve your unique challenges
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Industry Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}