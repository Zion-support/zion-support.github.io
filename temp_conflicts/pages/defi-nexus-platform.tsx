import React from 'react';
import Head from 'next/head';
import {_TrendingUp, _Brain, _Shield, _Zap, _Target, _BarChart3, _Cpu, _Globe, _Users, _Award, _CheckCircle, _ArrowRight, _Star, _Phone, _Mail, _MapPin} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _features = [
  'Multi-chain DeFi aggregation',
  'Automated yield optimization',
  'Liquidity pool management',
  'Cross-chain bridge services',
  'Smart contract auditing',
  'DeFi analytics dashboard',
  'Mobile app integration',
  'Staking and governance'
];

const _pricingPlans = [
  {_name: 'Starter', _price: 29, _period: 'month', _features: ['Basic DeFi tools', _'3 blockchain networks', _'Yield tracking', _'Standard support'], _popular: false},
  {_name: 'Professional', _price: 99, _period: 'month', _features: ['Advanced DeFi tools', _'All major networks', _'Automated strategies', _'Analytics', _'Priority support'], _popular: true},
  {_name: 'Enterprise', _price: 299, _period: 'month', _features: ['Custom DeFi solutions', _'White-label platform', _'API access', _'Priority support', _'Custom integrations'], _popular: false}
];

export default function DeFiNexusPlatform() {_return (_<Layout>
      <Head>
        <title>DeFi Nexus Platform | Zion Tech Group</title>
        <meta name="description" content="Comprehensive decentralized finance platform providing yield farming, _liquidity provision, _and cross-chain DeFi services." />
        <meta name="keywords" content="DeFi, _blockchain, _yield farming, _liquidity, _cross-chain, _Zion Tech Group" />
        <meta property="og:title" content="DeFi Nexus Platform - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive decentralized finance platform with multi-chain support." />
        <meta property="og:url" content="https://ziontechgroup.com/defi-nexus-platform" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {_/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              DeFi & Blockchain
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                DeFi Nexus
              </span>
              <br />
              <span className="text-white">Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive decentralized finance platform providing yield farming, _liquidity provision, _and cross-chain DeFi services.
            </p>
          </motion.div>

          {_/* CTA Buttons */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-green-500/30 text-green-400 font-semibold text-lg hover:bg-green-500/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary DeFi Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of decentralized finance with multi-chain support, _automated yield optimization, _and comprehensive DeFi analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_features.map((feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{_feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className={_`relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 scale-105' 
                    : 'border-green-500/20'}`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{_plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${_plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{_plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform DeFi?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.1}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{_contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{_contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.3}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{_contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}