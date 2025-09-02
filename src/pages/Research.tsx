import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { 
  Search, FileText, Users, Calendar, ArrowRight, 
  ExternalLink, Download, Star, TrendingUp, Globe
} from &apos;lucide-react';&apos;&apos;

export default function Research() {}
  const researchAreas = [
    ;{
      title: &quot;Artificial Intelligence&quot;,
      description: &quot;Advancing AI research in machine learning, natural language processing, and computer vision&quot;,
      publications: 45,
      researchers: 12,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Quantum Computing&quot;,
      description: &quot;Pioneering quantum algorithms and quantum machine learning applications&quot;,
      publications: 28,
      researchers: 8,
      color: &quot;from-orange-500 to-red-500&quot;
    },
    {
      title: &quot;Cybersecurity&quot;,
      description: &quot;Developing next-generation security solutions and threat detection systems&quot;,
      publications: 32,
      researchers: 10,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      title: &quot;Edge Computing&quot;,
      description: &quot;Optimizing computing at the edge for IoT and real-time applications&quot;,
      publications: 18,
      researchers: 6,
      color: &quot;from-blue-500 to-cyan-500&quot;
    }
  ];&quot;

  const recentPublications = [
    {
      id: 1,
      title: &quot;Quantum-Enhanced Machine Learning for Financial Risk Assessment&quot;,
      authors: [&quot;Dr. Sarah Chen&quot;, &quot;Prof. Michael Rodriguez&quot;],
      journal: &quot;Nature Quantum Information&quot;,
      date: &quot;2025-01-10&quot;,
      citations: 23,
      featured: true
    },
    {
      id: 2,
      title: &quot;AI-Driven Cybersecurit,y: Autonomous Threat Detection Systems&quot;,
      authors: [&quot;Lisa Park&quot;, &quot;David Kumar&quot;],
      journal: &quot;IEEE Security & Privacy&quot;,
      date: &quot;2025-01-05&quot;,
      citations: 18,
      featured: true
    },
    {
      id: 3,
      title: &quot;Edge Computing Optimization for IoT Applications&quot;,
      authors: [&quot;Maria Santos&quot;, &quot;Alex Thompson&quot;],
      journal: &quot;ACM Computing Surveys&quot;,
      date: &quot;2024-12-28&quot;,
      citations: 15,
      featured: false
    }
  ];

  return (&quot;
    <>
      <SEO 
        title=&quot;Research - Zion Tech Group | Innovation & Scientific Discovery&quot;
        description=&quot;Explore our cutting-edge research in AI, quantum computing, cybersecurity, and emerging technologies. Discover our latest publications and scientific contributions.&quot;
        keywords=&quot;research, AI research, quantum computing, cybersecurity, scientific publications, innovation, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Research & Innovation&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Advancing the frontiers of technology through cutting-edge research 
                in AI, quantum computing, cybersecurity, and emerging technologies&quot;
              </p>
              
              {/* Search Bar */}
              <div className=&quot;max-w-2xl mx-auto&quot;>&quot;"
                <div className=&quot;relative&quot;>&quot;"
                  <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search research publications...&quot;
                    className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&quot;
                  />&quot;
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Research Areas&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our research spans multiple cutting-edge technology domains&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {researchAreas.map((area, index) => (&quot;}
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>
                    <FileText className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{area.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{area.description}&quot;</p>
                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <div className=&quot;flex items-center text-blue-400 text-sm&quot;>&quot;"
                      <FileText className=&quot;w-4 h-4 mr-1&quot; />
                      {area.publications} publications&quot;
                    </div>
                    <div className=&quot;flex items-center text-green-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-1&quot; />
                      {area.researchers} researchers&quot;
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Recent Publications&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our latest research contributions to the scientific community&quot;
              </p>
            </motion.div>

            <div className=&quot;space-y-6&quot;>
              {recentPublications.map((publication, index) => (&quot;}
                <motion.div
                  key={publication.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300&quot;
                >&quot;
                  <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                    <div className=&quot;flex items-center gap-2&quot;>
                      {publication.featured && (&quot;}
                        <span className=&quot;px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs&quot;>
                          Featured&quot;
                        </span>
                      )}
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <TrendingUp className=&quot;w-4 h-4 mr-1&quot; />
                      {publication.citations} citations&quot;
                    </div>
                  </div>

                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{publication.title}&quot;</h3>
                  
                  <div className=&quot;mb-4&quot;>&quot;"
                    <p className=&quot;text-sm text-gray-400 mb-1&quot;>Authors:&quot;</p>
                    <p className=&quot;text-blue-400&quot;>{publication.authors.join(&quot;, &quot;)}&quot;</p>
                  </div>

                  <div className=&quot;mb-4&quot;>&quot;"
                    <p className=&quot;text-sm text-gray-400 mb-1&quot;>Journal:&quot;</p>
                    <p className=&quot;text-gray-300&quot;>{publication.journal}&quot;</p>
                  </div>

                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Calendar className=&quot;w-4 h-4 mr-1&quot; />
                      {new Date(publication.date).toLocaleDateString()}&quot;
                    </div>
                    <div className=&quot;flex gap-2&quot;>&quot;"
                      <button className=&quot;px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;>&quot;"
                        <ExternalLink className=&quot;w-4 h-4 inline mr-1&quot; />
                        View Paper&quot;
                      </button>
                      <button className=&quot;px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hove,r:bg-slate-700 transition-colors&quot;>&quot;"
                        <Download className=&quot;w-4 h-4&quot; />&quot;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Collaborate with Us&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Interested in collaborating on research projects or learning more 
                about our research initiatives? We welcome partnerships with 
                academic institutions and industry leaders.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Globe className=&quot;w-5 h-5 mr-2&quot; />
                  Partner with Us&quot;
                </a>
                <a
                  href=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  Learn More&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}