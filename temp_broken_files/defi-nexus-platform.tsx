import Head from 'next/head';
import {,
  TrendingUp, Brain, Shield, Zap, Target;
  BarChart3, Cpu, Globe, Users, Award;
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin,
} from 'lucide-react';
const contactInfo = {,
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com',};
const features = [,
  'Multi-chain DeFi aggregationAutomated yield optimization';
  'Liquidity pool managementCross-chain bridge services';
  'Smart contract auditingDeFi analytics dashboard';
  'Mobile app integrationStaking and governance',
];
const pricingPlans = [,
  {,
    name: 'Starter';
    price: 29;
    period: 'month';
    features: ['Basic DeFi tools3 blockchain networks', 'Yield trackingStandard support'];
    popular: false,};
  {,
    name: 'Professional';
    price: 99;
    period: 'month';
    features: ['Advanced DeFi toolsAll major networks', 'Automated strategiesAnalytics', 'Priority support'];
    popular: true,};
  {,
    name: 'Enterprise';
    price: 299;
    period: 'month';
    features: ['Custom DeFi solutionsWhite-label platform', 'API accessPriority support', 'Custom integrations'];
    popular: false,};
export default function DeFiNexusPlatform() {,
  return (,
    <Layout>,
      <Head>,
        <title>DeFi Nexus Platform | Zion Tech Group</title>,
        <meta name="description" content="Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services." />,
        <meta name="keywords" content="DeFi, blockchain, yield farming, liquidity, cross-chain, Zion Tech Group" />,
        <meta property="og: title" content="DeFi Nexus Platform - Zion Tech Group" />,
        <meta property="og:description" content="Comprehensive decentralized finance platform with multi-chain support." />,
        <meta property="og:url" content="https://ziontechgroup.com/defi-nexus-platform" />,
      {/* Hero Section */,}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>,
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">,
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>,
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>,
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>,
        <div className="relative z-10 text-center px-4 sm: px-6 lg:px-8 max-w-7xl mx-auto">,
          <div,
            className="mb-8",
          >,
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">,
              <TrendingUp className="w-4 h-4 mr-2" />,
              DeFi & Blockchain,
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">,
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">,
                DeFi Nexus,
              <br />,
              <span className="text-white">Platform</span>,
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
              Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services.,
            </p>,
          </div>,
          {/* CTA Buttons */}
          <div,
            className="flex flex-col sm: flex-row gap-4 justify-center items-center",
          >,
            <a,
              href="#pricing",
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105",
            >,
              <Target className="w-5 h-5 mr-2" />,
              Get Started,
            <a,
              href="#contact",
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-green-500/30 text-green-400 font-semibold text-lg hover:bg-green-500/10 transition-all duration-300",
            >,
              <Phone className="w-5 h-5 mr-2" />,
              Contact Sales,
            </a>,
          </div>,
        </div>,
      </section>,
      {/* Features Section */,}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div,
            whileInView={{ opacity: 1, y: 0 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Revolutionary DeFi Technology,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Experience the future of decentralized finance with multi-chain support, automated yield optimization, and comprehensive DeFi analytics.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {features.map((feature, index) => (,
              <div,
                key={index}
                whileInView={{ opacity: 1, y: 0 ,}}
                viewport={{ once: true ,}}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover: border-green-500/40 transition-all duration-300",
              >,
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">,
                  <CheckCircle className="w-6 h-6 text-white" />,
                <h3 className="text-lg font-semibold text-white mb-2">{feature,}</h3>,
              </div>,
            ))}
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div,
            whileInView={{ opacity: 1, y: 0 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Choose Your Plan,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (,
              <div,
                key={index}
                whileInView={{ opacity: 1, y: 0 ,}}
                viewport={{ once: true ,}}
                className={`relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-2xl p-8 ${,
                  plan.popular,
                    ? 'border-green-500/50 scale-105',
                    : 'border-green-500/20',
                }`}
              >,
                {plan.popular && (,
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">,
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">,
                      Most Popular,
                )}
                <div className="text-center mb-8">,
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>,
                  <div className="text-4xl font-bold text-white mb-2">,
                    ${plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>,
                <ul className="space-y-4 mb-8">,
                  {plan.features.map((feature, featureIndex) => (,
                    <li key={featureIndex} className="flex items-center text-gray-300">,
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />,
                      {feature}
                  ))}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover: from-green-600 hover:to-emerald-600 transition-all duration-300">,
                  Get Started,
                </button>,
              </div>,
            )),}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div,
            whileInView={{ opacity: 1, y: 0 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Ready to Transform DeFi?,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="text-center",
            >,
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <Phone className="w-8 h-8 text-white" />,
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>,
              <p className="text-gray-300">{contactInfo.mobile}</p>,
            </div>,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="text-center",
            >,
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <Mail className="w-8 h-8 text-white" />,
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>,
              <p className="text-gray-300">{contactInfo.email}</p>,
            </div>,
            <div,
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              className="text-center",
            >,
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <MapPin className="w-8 h-8 text-white" />,
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>,
              <p className="text-gray-300">{contactInfo.address}</p>,
            </div>,
          </div>,
        </div>,
      </section>,
    </Layout>,
  );
}
import React from "react";
const function DeFiNexusPlatform() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function DeFiNexusPlatform() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  );
};
export default function DeFiNexusPlatform() {;
}}}]