import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, ArrowRight, Download, Calendar, User, 
  Brain, Atom, Shield, Rocket, Cpu, Database
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: &quot;The Future of Autonomous AI Systems&quot;,
      description: &quot;A comprehensive analysis of autonomous AI systems and their potential to revolutionize technology and business operations.&quot;,
      author: &quot;Zion Tech Group AI Team&quot;,
      date: &quot;2025&quot;,
      category: &quot;AI & Machine Learning&quot;,
      icon: Brain,
      color: &quot;from-purple-500 to-pink-500&quot;,
      downloadUrl: &quot;mailto:kleber@ziontechgroup.com?subject=Request: The Future of Autonomous AI Systems&quot;
    },
    {
      title: &quot;Quantum Computing in Cybersecurity&quot;,
      description: &quot;Exploring the intersection of quantum computing and cybersecurity, including quantum-resistant encryption and threat detection.&quot;,
      author: &quot;Zion Tech Group Research&quot;,
      date: &quot;2025&quot;,
      category: &quot;Quantum Computing&quot;,
      icon: Atom,
      color: &quot;from-blue-500 to-cyan-500&quot;,
      downloadUrl: &quot;mailto:kleber@ziontechgroup.com?subject=Request: Quantum Computing in Cybersecurity&quot;
    },
    {
      title: &quot;Next-Generation Space Technology&quot;,
      description: &quot;Innovations in space technology including AI-powered satellite systems and autonomous space exploration.&quot;,
      author: &quot;Zion Tech Group Space Division&quot;,
      date: &quot;2025&quot;,
      category: &quot;Space Technology&quot;,
      icon: Rocket,
      color: &quot;from-indigo-500 to-purple-500&quot;,
      downloadUrl: &quot;mailto:kleber@ziontechgroup.com?subject=Request: Next-Generation Space Technology&quot;
    },
    {
      title: &quot;Edge Computing Architecture&quot;,
      description: &quot;Modern edge computing architectures and their applications in IoT, AI deployment, and distributed systems.&quot;,
      author: &quot;Zion Tech Group Engineering&quot;,
      date: &quot;2025&quot;,
      category: &quot;Edge Computing&quot;,
      icon: Database,
      color: &quot;from-emerald-500 to-teal-500&quot;,
      downloadUrl: &quot;mailto:kleber@ziontechgroup.com?subject=Request: Edge Computing Architecture&quot;
    },
    {
      title: &quot;DevOps Automation Strategies&quot;,
      description: &quot;Advanced DevOps automation strategies for modern software development and deployment pipelines.&quot;,
      author: &quot;Zion Tech Group DevOps Team&quot;,
      date: &quot;2025&quot;,
      category: &quot;DevOps&quot;,
      icon: Cpu,
      color: &quot;from-yellow-500 to-orange-500&quot;,
      downloadUrl: &quot;mailto:kleber@ziontechgroup.com?subject=Request: DevOps Automation Strategies&quot;
    },
    {
      title: &quot;Cybersecurity in the AI Era&quot;,
      description: &quot;Comprehensive cybersecurity strategies for protecting AI systems and infrastructure in the modern digital landscape.&quot;,
      author: &quot;Zion Tech Group Security&quot;,
      date: &quot;2025&quot;,
      category: &quot;Cybersecurity&quot;,
      icon: Shield,
      color: &quot;from-red-500 to-orange-500&quot;,
      downloadUrl: &quot;mailto:kleber@ziontechgroup.com?subject=Request: Cybersecurity in the AI Era&quot;
    }
  ];

  const categories = [&quot;All&quot;, &quot;AI & Machine Learning&quot;, &quot;Quantum Computing&quot;, &quot;Space Technology&quot;, &quot;Edge Computing&quot;, &quot;DevOps&quot;, &quot;Cybersecurity&quot;];
  const [selectedCategory, setSelectedCategory] = React.useState(&quot;All&quot;);

  const filteredWhitepapers = selectedCategory === &quot;All&quot; 
    ? whitepapers 
    : whitepapers.filter(paper => paper.category === selectedCategory);

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Whitepapers - Zion Tech Group | Research & Insights</title>
        <meta name=&quot;description&quot; content=&quot;Access comprehensive whitepapers on AI, quantum computing, cybersecurity, space technology, and more from Zion Tech Group.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;whitepapers, research, AI, quantum computing, cybersecurity, space technology, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Whitepapers - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive research and insights on cutting-edge technology.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/whitepapers&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/whitepapers&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mx-auto mb-8&quot;>
              <FileText className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent&quot;>
              Whitepapers & Research
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Deep insights and research on cutting-edge technology topics. 
              Download our comprehensive whitepapers to stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=&quot;py-10 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredWhitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${paper.color.replace('from-', 'from-').replace('to-', 'to-')}/0 via-${paper.color.split('-')[1]}-400/10 to-${paper.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} p-4 mb-6`}>
                  <paper.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <div className=&quot;mb-4&quot;>
                  <span className=&quot;inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 mb-3&quot;>
                    {paper.category}
                  </span>
                </div>
                
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{paper.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{paper.description}</p>
                
                <div className=&quot;flex items-center justify-between text-sm text-white/60 mb-6&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <User className=&quot;w-4 h-4&quot; />
                    <span>{paper.author}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Calendar className=&quot;w-4 h-4&quot; />
                    <span>{paper.date}</span>
                  </div>
                </div>
                
                <motion.a
                  href={paper.downloadUrl}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300&quot;
                >
                  <Download className=&quot;w-4 h-4 inline mr-2&quot; />
                  Request Download
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Need Custom Research?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss your specific research needs and create custom whitepapers tailored to your industry
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Discuss Research Needs</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}