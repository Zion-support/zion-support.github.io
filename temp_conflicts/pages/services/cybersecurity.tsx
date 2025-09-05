import React from 'react';
import Head from 'next/head';
import {_Shield, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Lock, _Cpu, _Database, _Globe, _Star, _Eye} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CybersecurityPage() {_const _services = [
    {
      title: "Advanced Threat Detection", _description: "AI-powered threat detection and response with real-time monitoring", _features: [
        "24/7 threat monitoring", _"AI-powered analysis", _"Real-time alerts", _"Automated response"
      ], _price: "$899/month", _icon: Eye},
    {_title: "Zero-Trust Architecture", _description: "Implement comprehensive zero-trust security across your organization", _features: [
        "Identity verification", _"Access control", _"Network segmentation", _"Continuous monitoring"
      ], _price: "$1, _199/month", _icon: Lock},
    {_title: "Incident Response", _description: "Rapid response and recovery from security incidents", _features: [
        "24/7 incident response", _"Forensic analysis", _"Recovery planning", _"Post-incident review"
      ], _price: "$699/month", _icon: Shield}
  ];

  const _benefits = [
    {_icon: Shield, _title: "Comprehensive Protection", _description: "Multi-layered security that protects against all types of threats"},
    {_icon: Zap, _title: "Real-Time Response", _description: "Instant detection and automated response to security threats"},
    {_icon: Users, _title: "Expert Team", _description: "24/7 support from cybersecurity experts and AI systems"},
    {_icon: Target, _title: "Compliance Ready", _description: "Meet all industry standards and regulatory requirements"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions including threat detection, _zero-trust architecture, _and incident response services." />
        <meta name="keywords" content="cybersecurity, _threat detection, _zero-trust, _incident response, _security, _Zion Tech Group" />
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-5 mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Protect your organization with cutting-edge cybersecurity solutions. 
              From advanced threat detection to zero-trust architecture, _we keep you secure.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Secure Your Business</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Security Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_services.map((service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-red-500/0 via-orange-400/10 to-red-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-4 mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-red-400 mb-4">{_service.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Why Choose Our Security?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the highest level of protection with our proven security approach
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-4 flex-shrink-0">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your organization from evolving threats
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Protected</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}