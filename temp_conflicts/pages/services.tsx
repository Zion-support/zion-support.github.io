import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Users, _Target, _Star, _Zap, _Globe, _TrendingUp, _CheckCircle, _ArrowRight, _ExternalLink, _Sparkles} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {_const _mainServices = [
    {
      icon: Brain, _title: "AI Business Intelligence", _description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.", _features: [
        "Real-time data processing", _"Predictive analytics", _"Custom AI models", _"Interactive dashboards", _"Automated reporting"
      ], _price: "$499/month", _color: "from-purple-500 to-pink-500", _href: "/ai-business-intelligence"},
    {_icon: Shield, _title: "Quantum Cybersecurity", _description: "Future-proof your security with quantum-resistant encryption and AI-powered threat detection.", _features: [
        "Quantum-resistant encryption", _"AI threat detection", _"Zero-trust architecture", _"24/7 monitoring", _"Compliance ready"
      ], _price: "$799/month", _color: "from-red-500 to-orange-500", _href: "/quantum-cybersecurity"},
    {_icon: Users, _title: "AI Customer Experience", _description: "Deliver personalized customer experiences at scale with intelligent automation and insights.", _features: [
        "Customer journey mapping", _"AI personalization", _"Sentiment analysis", _"Automated support", _"Behavioral insights"
      ], _price: "$399/month", _color: "from-green-500 to-teal-500", _href: "/ai-customer-experience"},
    {_icon: Database, _title: "Edge Computing Orchestration", _description: "Deploy and manage applications at the edge with intelligent orchestration and optimization.", _features: [
        "Edge node management", _"IoT device management", _"Real-time monitoring", _"Load balancing", _"Auto-scaling"
      ], _price: "$349/month", _color: "from-yellow-500 to-orange-500", _href: "/edge-computing-orchestration"},
    {_icon: Rocket, _title: "Space Technology Innovation", _description: "Accelerate space exploration with cutting-edge AI and quantum technology solutions.", _features: [
        "Satellite management", _"AI mission planning", _"Quantum communication", _"Resource optimization", _"Risk assessment"
      ], _price: "$2, _499/month", _color: "from-violet-500 to-purple-500", _href: "/space-technology"},
    {_icon: Atom, _title: "Neural Interface Development", _description: "Build the future of human-computer interaction with advanced neural interfaces.", _features: [
        "BCI development tools", _"Neural signal processing", _"AI pattern recognition", _"Real-time analysis", _"Custom algorithms"
      ], _price: "$899/month", _color: "from-pink-500 to-rose-500", _href: "/neural-interface"}
  ];

  const _specializedServices = [
    {_title: "AI Autonomous Systems", _description: "Build self-managing, _self-optimizing systems that adapt and evolve", _icon: Brain, _color: "from-blue-500 to-cyan-500"},
    {_title: "Quantum Machine Learning", _description: "Leverage quantum computing for unprecedented ML performance", _icon: Atom, _color: "from-purple-500 to-pink-500"},
    {_title: "AI-Powered DevOps", _description: "Automate and optimize your development and deployment processes", _icon: Cpu, _color: "from-green-500 to-emerald-500"},
    {_title: "Blockchain AI Integration", _description: "Combine blockchain security with AI intelligence for next-gen applications", _icon: Shield, _color: "from-orange-500 to-red-500"}
  ];

  const _industries = [
    "Finance & Banking",
    "Healthcare & Life Sciences",
    "Manufacturing & Industry 4.0",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Education & Research",
    "Government & Defense"
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services — Zion Tech Group | AI, _Quantum Computing & Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive AI, _quantum computing, _and technology services. Transform your business with cutting-edge solutions." />
        <meta property="og:title" content="Zion Tech Group Services" />
        <meta property="og:description" content="AI, _quantum computing, _and technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, _quantum computing, _technology solutions, _business intelligence, _cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI, _quantum computing, _and technology solutions designed to transform 
              your business and drive innovation across every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {_/* Main Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Core Technology Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI and quantum technology solutions, _each designed to address specific business challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_mainServices.map((service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{_service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {_service.features.map((feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{_feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-blue-400">{_service.price}</div>
                  <a
                    href={_service.href}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Specialized Services */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Specialized Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced technology solutions for specific use cases and emerging opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_specializedServices.map(_(service, _index) => (
              <motion.div
                key={service.title}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{_service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Industries We Serve */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our technology solutions are designed to work across all industries, 
              with specialized expertise in key sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {_industries.map(_(industry, _index) => (
              <motion.div
                key={industry}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.05}}
                viewport={_{ once: true}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{_industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-slate-300 leading-relaxed">
                Access to the latest AI, quantum computing, and emerging technologies 
                that give you a competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-slate-300 leading-relaxed">
                World-class engineers, scientists, and consultants with deep expertise 
                in AI, quantum computing, and industry applications.
              </p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.3}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-slate-300 leading-relaxed">
                Track record of successful implementations across 500+ projects 
                with measurable business impact and ROI.
              </p>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI and quantum technology solutions can help 
              you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
