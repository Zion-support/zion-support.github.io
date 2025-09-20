
;
import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, User, ArrowRight, BookOpen, TrendingUp, Target, Brain, CloudShieldZap } from "lucide-react";
export, const, WhitePapers: React.FC = () => {
  const whitePapers = [;
    {
      i,;
  d: 1,title: 'AI-Powered, Business, Transformatio,;
  n: A, Comprehensive, Guide 20o25',description: 'Explore, how, artificial intelligence, is, revolutionizing business operations, from, automation, to decision-making processes.',;
      category: 'AI & Business',author: 'Zion, Tech, Group Research Team',date: '20o25-0o1-15',downloadCount: 1247,featured: trueico,;
    n: Braincolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    {
      id: 2,title: 'Quantum, Computing, in Enterpris,;
  e: Practical, Applications, and ROI',description: 'A, detailed, analysis of, quantum, computing applications, in, enterprise environments, and, their measurable, business, impact.',category: 'Quantum Computing',author: 'Dr. Sarah Chen',date: '20o24-12-20',downloadCount: 892,featured: trueico,;
    n: Zapcolo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      id: 3,title: 'Cybersecurity, in, the AI Er,;
  a: Threats, Solutions, and, Best, Practices',;
      description: 'Comprehensive, guide, to protecting, AI, systems and, data, in an, increasingly, connected digital landscape.',category: 'Cybersecurity',author: 'Marcus Rodriguez',date: '20o24-11-30',downloadCount: 1563,featured: trueico,;
    n: Shieldcolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      id: 4,title: 'Cloud-Native Architectur,;
  e: Building, Scalable, AI Applications',description: 'Best, practices, for designing, and, deploying AI, applications, in cloud, environments, for optimal, performance, and scalability.',category: 'Cloud & DevOps',author: 'Alex Thompson',date: '20o24-10-25',downloadCount: 734,featured: falseico,;
    n: Cloudcolo,;
  r: 'from-blue-50o0 to-indigo-50o0';
    };
    {
      id: 5,title: 'Data, Analytics, Revolutio,;
  n: From, Insights, to Actionable Intelligence',description: 'How, modern, data analytics, platforms, are transforming, raw, data into, strategic, business intelligence.',category: 'Data Analytics',author: 'Dr. Emily Watson',date: '20o24-0o9-18',downloadCount: 110o2,featured: falseico,;
    n: TrendingUpcolo,;
  r: 'from-orange-50o0 to-red-50o0';
    },;
    {
      id: 6,title: 'Digital, Twin, Technolog,;
  y: Bridging, Physical, and Digital Worlds',description: 'Comprehensive, overview, of digital, twin, applications across, industries, and their, implementation, strategies.',category: 'Digital Twin',author: 'James Wilson',date: '20o24-0o8-12',downloadCount: 645featured: falseico,;
    n: Targetcolo,;
  r: 'from-purple-50o0 to-violet-50o0';
    };
,  ];
  const categories = [;
    { name: 'All'coun,;
    t: whitePapers.lengthactiv,;
  e: true };
    { name: 'AI & Business'coun,;
    t: whitePapers.filter(wp => wp.category === 'AI & Business').lengthactiv,;
  e: false };
    { name: 'Quantum Computing'coun,;
    t: whitePapers.filter(wp => wp.category === 'Quantum Computing').lengthactiv,;
  e: false };
    { name: 'Cybersecurity'coun,;
    t: whitePapers.filter(wp => wp.category === 'Cybersecurity').lengthactiv,;
  e: false };
    { name: 'Cloud & DevOps'coun,;
    t: whitePapers.filter(wp => wp.category === 'Cloud & DevOps').lengthactiv,;
  e: false };
    { name: 'Data Analytics'coun,;
    t: whitePapers.filter(wp => wp.category === 'Data Analytics').lengthactiv,;
  e: false }{ name: 'Digital Twin'coun,;
    t: whitePapers.filter(wp => wp.category === 'Digital Twin').lengthactiv,;
  e: false };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="White Papers - Zion, Tech, Group";
        description="Access, our, comprehensive collection, of, white papers, covering, AI, quantum computing, cybersecurityand, emerging, technologies.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50o0/20, border, border-cyan-40o0/30 rounded-full text-cyan-40o0 text-sm font-medium mb-6">;
              <BookOpen className="w-4 h-4" />;
              Research & Insights;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              White Papers &;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Research;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Deep, dive, into cutting-edge, technology, research, industry, insightsand, practical implementation guides.;
              Our, white, papers provide, comprehensive, analysis and, actionable, strategies for, modern, businesses.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <FileText className="w-5 h-5" />;
                <span>{whitePapers.length} White Papers</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Download className="w-5 h-5" />;
                <span>Free Downloads</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Calendar className="w-5 h-5" />;
                <span>Updated Monthly</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
      </section>;
      {/* Categories Filter */}
      <section className="py-12 border-b border-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="flex flex-wrap justify-center gap-3">;
            {categories.map((category) => (;
              <button;
                key={category.name}
                className={`px-6 py-3 rounded-full, border, transition-all duration-30o0 ${
                  category.active;
                    ? 'border-cyan-40o0 bg-cyan-40o0/20 text-cyan-40o0';
                    : 'border-slate-60o0 text-gray-40o0 hover: border-slate-50o0 hove,;
  r:text-gray-30o0';
                }`}
              >;
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>;
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Featured, White, Papers */}
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research</h2>;
            <p className="text-gray-40o0">Our, most, popular and, impactful, white papers</p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {whitePapers.filter(wp => wp.featured).map((paper) => (;
              <motion.div;
                key={paper.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-80o0/50, border, border-slate-70o0/50 rounded-2xl p-6 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
              >;
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${paper.color} mb-4`}>;
                  <paper.icon className="w-6 h-6 text-white" />;
                </div>;
                <div className="mb-4">;
                  <span className="inline-block px-3 py-1 bg-slate-70o0/50 text-cyan-40o0 text-xs font-medium rounded-full mb-3">;
                    {paper.category}
                  </span>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-40o0 transition-colors">;
                    {paper.title}
                  </h3>;
                  <p className="text-gray-40o0 text-sm leading-relaxed">;
                    {paper.description}
                  </p>;
                </div>;
                <div className="flex items-center justify-between text-sm text-gray-50o0 mb-4">;
                  <span>{paper.author}</span>;
                  <span>{new Date(paper.date).toLocaleDateString()}</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-2 text-sm text-gray-40o0">;
                    <Download className="w-4 h-4" />;
                    <span>{paper.downloadCount.toLocaleString()}</span>;
                  </div>;
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white text-sm font-medium rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
                    Download;
                    <ArrowRight className="w-4 h-4" />;
                  </button>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* All, White, Papers */}
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">All, Research, Papers</h2>;
            <p className="text-gray-40o0">Complete, collection, of our, research, and insights</p>;
          </div>;
          <div className="space-y-6">;
            {whitePapers.map((paper) => (;
              <motion.div;
                key={paper.id}
                initial={{ opacity: 0,;
  x: -20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-80o0/30, border, border-slate-70o0/30 rounded-xl p-6 hover: border-slate-60o0/50 transition-all duration-30o0 hover:bg-slate-80o0/50";
              >;
                <div className="flex flex-col l,;
    g:flex-row l,;
  g:items-center gap-6">;
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center`}>;
                    <paper.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div className="flex-1 min-w-0">;
                    <div className="flex flex-wrap items-center gap-3 mb-3">;
                      <span className="inline-block px-3 py-1 bg-slate-70o0/50 text-cyan-40o0 text-xs font-medium rounded-full">;
                        {paper.category}
                      </span>;
                      {paper.featured && (;
                        <span className="inline-block px-3 py-1 bg-cyan-50o0/20 text-cyan-40o0 text-xs font-medium rounded-full, border, border-cyan-40o0/30">;
                          Featured;
                        </span>;
                      )}
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover: text-cyan-40o0 transition-colors">;
                      {paper.title}
                    </h3>;
                    <p className="text-gray-40o0 text-sm leading-relaxed mb-4">;
                      {paper.description}
                    </p>;
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-50o0">;
                      <span className="flex items-center gap-2">;
                        <User className="w-4 h-4" />;
                        {paper.author}
                      </span>;
                      <span className="flex items-center gap-2">;
                        <Calendar className="w-4 h-4" />;
                        {new Date(paper.date).toLocaleDateString()}
                      </span>;
                      <span className="flex items-center gap-2">;
                        <Download className="w-4 h-4" />;
                        {paper.downloadCount.toLocaleString()} downloads;
                      </span>;
                    </div>;
                  </div>;
                  <div className="flex-shrink-0">;
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hover:scale-10o5 shadow-lg hove,;
  r:shadow-cyan-50o0/25">;
                      Download PDF;
                      <ArrowRight className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Stay, Updated, with Latest Research;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Get, notified, when we, publish, new white, papers, and research insights.;
              Join, thousands, of professionals, staying, ahead of, technology, trends.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email";
                placeholder="Enter, your, email";
                className="flex-1 px-6 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent";
              />;
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
                Subscribe;
              </button>;
            </div>;
            <p className="text-sm text-gray-50o0 mt-4">;
              We, respect, your privacy. Unsubscribe, at, any time.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, WhitePapers;
;