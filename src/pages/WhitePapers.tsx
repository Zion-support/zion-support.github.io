

import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { FileText, Download, Calendar, User, ArrowRight, BookOpen, TrendingUp, Target, Brain, Cloud, Shield, Zap } from "lucide-react"
export,
  const: WhitePapers: React.FC = () () => {
  const whitePapers = [
    {
      i,
  d: 1,tit,
  l: e: 'AI-Powered Business Transformatio,
  n: A Comprehensive Guide 2025',descripti,
  o: n: 'Explore how artificial intelligence is revolutionizing business operations, from automation to decision-making processes.'
      catego,
  r: y: 'AI & Business',auth,
  o: r: 'Zion Tech Group Research Team',da,
  t: e: '2025-01-15',downloadCou,
  n: t: 1247,featur,
  e: d: true,ic,
  o: n: Brain,col,
  o: r: 'from-purple-500 to-pink-500'
    }, {
      id: 2,tit,
  l: e: 'Quantum Computing in Enterpris,
  e: Practical Applications and ROI',descripti,
  o: n: 'A detailed analysis of quantum computing applications in enterprise environments and their measurable business impact.',catego,
  r: y: 'Quantum Computing',auth,
  o: r: 'Dr. Sarah Chen',da,
  t: e: '2024-12-20',downloadCou,
  n: t: 892,featur,
  e: d: true,ic,
  o: n: Zap,col,
  o: r: 'from-blue-500 to-cyan-500'
    }, {
      id: 3,tit,
  l: e: 'Cybersecurity in the AI Er,
  a: Threats, Solutions, and Best Practices'
      descripti,
  o: n: 'Comprehensive guide to protecting AI systems and data in an increasingly connected digital landscape.',catego,
  r: y: 'Cybersecurity',auth,
  o: r: 'Marcus Rodriguez',da,
  t: e: '2024-11-30',downloadCou,
  n: t: 1563,featur,
  e: d: true,ic,
  o: n: Shield,col,
  o: r: 'from-green-500 to-emerald-500'
    }, {
      id: 4,tit,
  l: e: 'Cloud-Native Architectur,
  e: Building Scalable AI Applications',descripti,
  o: n: 'Best practices for designing and deploying AI applications in cloud environments for optimal performance and scalability.',catego,
  r: y: 'Cloud & DevOps',auth,
  o: r: 'Alex Thompson',da,
  t: e: '2024-10-25',downloadCou,
  n: t: 734,featur,
  e: d: false,ic,
  o: n: Cloud,col,
  o: r: 'from-blue-500 to-indigo-500'
    }, {
      id: 5,tit,
  l: e: 'Data Analytics Revolutio,
  n: From Insights to Actionable Intelligence',descripti,
  o: n: 'How modern data analytics platforms are transforming raw data into strategic business intelligence.',catego,
  r: y: 'Data Analytics',auth,
  o: r: 'Dr. Emily Watson',da,
  t: e: '2024-09-18',downloadCou,
  n: t: 1102,featur,
  e: d: false,ic,
  o: n: TrendingUp,col,
  o: r: 'from-orange-500 to-red-500'
    }, {
      id: 6,tit,
  l: e: 'Digital Twin Technolog,
  y: Bridging Physical and Digital Worlds',descripti,
  o: n: 'Comprehensive overview of digital twin applications across industries and their implementation strategies.',catego,
  r: y: 'Digital Twin',auth,
  o: r: 'James Wilson',da,
  t: e: '2024-08-12',downloadCou,
  n: t: 645,featur,
  e: d: false,ic,
  o: n: Target,col,
  o: r: 'from-purple-500 to-violet-500'
    }
  ]
  const categories = [
    { na,
  m: e: 'All', cou,
  n: t: whitePapers.length, acti,
  v: e: true }, { na,
  m: e: 'AI & Business', cou,
  n: t: whitePapers.filter(wp => wp.category === 'AI & Business').length, acti,
  v: e: false }, { na,
  m: e: 'Quantum Computing', cou,
  n: t: whitePapers.filter(wp => wp.category === 'Quantum Computing').length, acti,
  v: e: false }, { na,
  m: e: 'Cybersecurity', cou,
  n: t: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, acti,
  v: e: false }, { na,
  m: e: 'Cloud & DevOps', cou,
  n: t: whitePapers.filter(wp => wp.category === 'Cloud & DevOps').length, acti,
  v: e: false }, { na,
  m: e: 'Data Analytics', cou,
  n: t: whitePapers.filter(wp => wp.category === 'Data Analytics').length, acti,
  v: e: false }, { na,
  m: e: 'Digital Twin', cou,
  n: t: whitePapers.filter(wp => wp.category === 'Digital Twin').length, acti,
  v: e: false }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Research & Insights
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Research
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deep dive into cutting-edge technology research, industry insights, and practical implementation guides. 
              Our white papers provide comprehensive analysis and actionable strategies for modern businesses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <FileText className="w-5 h-5" />
                <span>{whitePapers.length} White Papers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Download className="w-5 h-5" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>Updated Monthly</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  category.active
                    ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                    : 'border-slate-600 text-gray-400,
  hove: r: border-slate-500 hove,
  r:text-gray-300'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research</h2>
            <p className="text-gray-400">Our most popular and impactful white papers</p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {whitePapers.filter(wp => wp.featured).map((paper) => (
              <motion.div
                key={paper.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6 }
                viewport={ on,
  c: e: true }
                className="className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:bg-slate-800/70";"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${paper.color} mb-4`}>
                  <paper.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full mb-3">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {paper.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{paper.author}</span>
                  <span>{new Date(paper.date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloadCount.toLocaleString()}</span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hove,
  r:scale-105">
                    Download
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Research Papers</h2>
            <p className="text-gray-400">Complete collection of our research and insights</p>
          </div>
          
          <div className="space-y-6">
            {whitePapers.map((paper) => (
              <motion.div
                key={paper.id}
                initial={ opaci,
  t: y: 0, x: -20 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6 }
                viewport={ on,
  c: e: true }
                className="className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6,
  hove: r: border-slate-600/50 transition-all duration-300,
  hove: r:bg-slate-800/50";"
              >
                <div className="flex flex-col,
  l: g:flex-row l,
  g:items-center gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                    <paper.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hov,
  e: r:text-cyan-400 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {paper.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(paper.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        {paper.downloadCount.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white font-medium rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-cyan-500/25">
                      Download PDF
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research insights. 
              Join thousands of professionals staying ahead of technology trends.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="className="flex-1 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500,
  focu: s:border-transparent";"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hove,
  r:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default WhitePapers