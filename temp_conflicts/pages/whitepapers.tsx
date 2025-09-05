import React from 'react';
import Head from 'next/head';
import {_FileText, _ArrowRight, _Download, _Calendar, _User, _Brain, _Atom, _Shield, _Rocket, _Cpu, _Database} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function WhitepapersPage() {_const _whitepapers = [
    {
      title: "The Future of Autonomous AI Systems", _description: "A comprehensive analysis of autonomous AI systems and their potential to revolutionize technology and business operations.", _author: "Zion Tech Group AI Team", _date: "2025", _category: "AI & Machine Learning", _icon: Brain, _color: "from-purple-500 to-pink-500", _downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: The Future of Autonomous AI Systems"},
    {_title: "Quantum Computing in Cybersecurity", _description: "Exploring the intersection of quantum computing and cybersecurity, _including quantum-resistant encryption and threat detection.", _author: "Zion Tech Group Research", _date: "2025", _category: "Quantum Computing", _icon: Atom, _color: "from-blue-500 to-cyan-500", _downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Quantum Computing in Cybersecurity"},
    {_title: "Next-Generation Space Technology", _description: "Innovations in space technology including AI-powered satellite systems and autonomous space exploration.", _author: "Zion Tech Group Space Division", _date: "2025", _category: "Space Technology", _icon: Rocket, _color: "from-indigo-500 to-purple-500", _downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Next-Generation Space Technology"},
    {_title: "Edge Computing Architecture", _description: "Modern edge computing architectures and their applications in IoT, _AI deployment, _and distributed systems.", _author: "Zion Tech Group Engineering", _date: "2025", _category: "Edge Computing", _icon: Database, _color: "from-emerald-500 to-teal-500", _downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Edge Computing Architecture"},
    {_title: "DevOps Automation Strategies", _description: "Advanced DevOps automation strategies for modern software development and deployment pipelines.", _author: "Zion Tech Group DevOps Team", _date: "2025", _category: "DevOps", _icon: Cpu, _color: "from-yellow-500 to-orange-500", _downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: DevOps Automation Strategies"},
    {_title: "Cybersecurity in the AI Era", _description: "Comprehensive cybersecurity strategies for protecting AI systems and infrastructure in the modern digital landscape.", _author: "Zion Tech Group Security", _date: "2025", _category: "Cybersecurity", _icon: Shield, _color: "from-red-500 to-orange-500", _downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Cybersecurity in the AI Era"}
  ];

  const _categories = ["All", "AI & Machine Learning", "Quantum Computing", "Space Technology", "Edge Computing", "DevOps", "Cybersecurity"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const _filteredWhitepapers = selectedCategory === "All" 
    ? whitepapers 
    : whitepapers.filter(paper => paper.category === selectedCategory);

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Whitepapers - Zion Tech Group | Research & Insights</title>
        <meta name="description" content="Access comprehensive whitepapers on AI, _quantum computing, _cybersecurity, _space technology, _and more from Zion Tech Group." />
        <meta name="keywords" content="whitepapers, _research, _AI, _quantum computing, _cybersecurity, _space technology, _Zion Tech Group" />
        <meta property="og:title" content="Whitepapers - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive research and insights on cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/whitepapers" />
        <link rel="canonical" href="https://ziontechgroup.com/whitepapers" />
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Whitepapers & Research
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Deep insights and research on cutting-edge technology topics. 
              Download our comprehensive whitepapers to stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {_/* Category Filter */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map((category) => (_<button
                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {_/* Whitepapers Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_filteredWhitepapers.map(_(paper, _index) => (
              <motion.div
                key={paper.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className={_`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${paper.color.replace('from-', _'from-').replace('to-', _'to-')}/0 via-${_paper.color.split('-')[1]}-400/10 to-${_paper.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={_`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} p-4 mb-6`}>
                  <paper.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 mb-3">
                    {_paper.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{_paper.title}</h3>
                <p className="text-white/70 mb-6">{_paper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{_paper.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{_paper.date}</span>
                  </div>
                </div>
                
                <motion.a
                  href={_paper.downloadUrl}
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  Request Download
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Custom Research?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific research needs and create custom whitepapers tailored to your industry
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Research Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}