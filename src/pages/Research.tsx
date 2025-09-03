<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  Search, FileText, Users, Calendar, ArrowRight, ;
  ExternalLink, Download, Star, TrendingUp, Globe;
} from 'lucide-react';
;
export default function Research() {;
  const researchAreas = [;
    {;
      title: "Artificial Intelligence",;
      description: "Advancing AI research in machine learning, natural language processing, and computer vision",;
      publications: 45,;
      researchers: 12,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Quantum Computing",;
      description: "Pioneering quantum algorithms and quantum machine learning applications",;
      publications: 28,;
      researchers: 8,;
      color: "from-orange-500 to-red-500";
    },;
    {;
      title: "Cybersecurity",;
      description: "Developing next-generation security solutions and threat detection systems",;
      publications: 32,;
      researchers: 10,;
      color: "from-green-500 to-emerald-500";
    },;
    {;
      title: "Edge Computing",;
      description: "Optimizing computing at the edge for IoT and real-time applications",;
      publications: 18,;
      researchers: 6,;
      color: "from-blue-500 to-cyan-500";
    }
  ];
;
  const recentPublications = [;
    {;
      id: 1,;
      title: "Quantum-Enhanced Machine Learning for Financial Risk Assessment",;
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],;
      journal: "Nature Quantum Information",;
      date: "2025-01-10",;
      citations: 23,;
      featured: true;
    },;
    {;
      id: 2,;
      title: "AI-Driven Cybersecurity: Autonomous Threat Detection Systems",;
      authors: ["Lisa Park", "David Kumar"],;
      journal: "IEEE Security & Privacy",;
      date: "2025-01-05",;
      citations: 18,;
      featured: true;
    },;
    {;
      id: 3,;
      title: "Edge Computing Optimization for IoT Applications",;
      authors: ["Maria Santos", "Alex Thompson"],;
      journal: "ACM Computing Surveys",;
      date: "2024-12-28",;
      citations: 15,;
      featured: false;
    }
  ];
;
  return (;
    <>;
      <SEO ;
        title="Research - Zion Tech Group | Innovation & Scientific Discovery";
        description="Explore our cutting-edge research in AI, quantum computing, cybersecurity, and emerging technologies. Discover our latest publications and scientific contributions.";
        keywords="research, AI research, quantum computing, cybersecurity, scientific publications, innovation, Zion Tech Group";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Research & Innovation;
              </h1>;
              <p className="text-xl text-gray-300 mb-8">;
                Advancing the frontiers of technology through cutting-edge research ;
                in AI, quantum computing, cybersecurity, and emerging technologies;
              </p>;
              ;
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">;
                <div className="relative">;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search research publications...";
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  />;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Research Areas */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Research Areas</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our research spans multiple cutting-edge technology domains;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {researchAreas.map((area, index) => (;
                <motion.div;
=======
import {SEO } from '@/components/SEO';

export default function Research() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Research - Zion Tech Group" description="Professional Research services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Research</h1>
        <p className="text-gray-300 text-lg">
          Professional Research services to help your business grow.
        </p>
      </div>
    </div>
=======
<<<<<<< HEAD
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

=======
import { motion, } from 'framer-motion';
import { SEO, } from '../components/SEO';
import { 
  Search, FileText, Users, Calendar, ArrowRight, ExternalLink, Download, Star, TrendingUp, Globe
} from 'lucide-react';
export default function Research() {
  const researchAreas = [
<<<<<<< HEAD
    {
=======
  {
>>>>>>> main
      title: "Artificial Intelligence", description: "Advancing AI research in machine learning, natural language processing, and computer vision",
      publications: 45, researchers: 12,
      color: "from-purple-500 to-pink-500"
    }, {
      title: "Quantum Computing",
      description: "Pioneering quantum algorithms and quantum machine learning applications", publications: 28,
      researchers: 8, color: "from-orange-500 to-red-500"
    },
    {
      title: "Cybersecurity", description: "Developing next-generation security solutions and threat detection systems",
      publications: 32, researchers: 10,
      color: "from-green-500 to-emerald-500"
    }, {
      title: "Edge Computing",
      description: "Optimizing computing at the edge for IoT and real-time applications", publications: 18,
      researchers: 6, color: "from-blue-500 to-cyan-500"
<<<<<<< HEAD
    }
=======
    };
>>>>>>> main
  ];
>>>>>>> main
  const recentPublications = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      id: 1,
      title: &quot;Quantum-Enhanced Machine Learning for Financial Risk Assessment&quot;,
      authors: [&quot;Dr. Sarah Chen&quot;, &quot;Prof. Michael Rodriguez&quot;],
      journal: &quot;Nature Quantum Information&quot;,
      date: &quot;2025-01-10&quot;,
      citations: 23,
=======
      id: 1, title: "Quantum-Enhanced Machine Learning for Financial Risk Assessment",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"], journal: "Nature Quantum Information",
=======
  {
      id: 1, title: "Quantum-Enhanced Machine Learning for Financial Risk Assessment",
      authors: ["Dr. Sarah Chen,Prof. Michael Rodriguez"], journal: "Nature Quantum Information",
>>>>>>> main
      date: "2025-01-10", citations: 23,
>>>>>>> main
      featured: true
    }, {
      id: 2,
<<<<<<< HEAD
      title: &quot;AI-Driven Cybersecurit,y: Autonomous Threat Detection Systems&quot;,
      authors: [&quot;Lisa Park&quot;, &quot;David Kumar&quot;],
      journal: &quot;IEEE Security & Privacy&quot;,
      date: &quot;2025-01-05&quot;,
      citations: 18,
=======
<<<<<<< HEAD
      title: "AI-Driven Cybersecurity: Autonomous Threat Detection Systems", authors: ["Lisa Park", "David Kumar"], journal: "IEEE Security & Privacy",
=======
      title: "AI-Driven Cybersecurity: Autonomous Threat Detection Systems", authors: ["Lisa Park,David Kumar"], journal: "IEEE Security & Privacy",
>>>>>>> main
      date: "2025-01-05", citations: 18,
>>>>>>> main
      featured: true
    }, {
      id: 3,
<<<<<<< HEAD
      title: &quot;Edge Computing Optimization for IoT Applications&quot;,
      authors: [&quot;Maria Santos&quot;, &quot;Alex Thompson&quot;],
      journal: &quot;ACM Computing Surveys&quot;,
      date: &quot;2024-12-28&quot;,
      citations: 15,
=======
<<<<<<< HEAD
      title: "Edge Computing Optimization for IoT Applications", authors: ["Maria Santos", "Alex Thompson"], journal: "ACM Computing Surveys",
=======
      title: "Edge Computing Optimization for IoT Applications", authors: ["Maria Santos,Alex Thompson"], journal: "ACM Computing Surveys",
>>>>>>> main
      date: "2024-12-28", citations: 15,
>>>>>>> main
      featured: false
    };
  ];
<<<<<<< HEAD

  return (&quot;
=======
  return (
>>>>>>> main
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
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Research & Innovation&quot;
=======
              initial={{ opacity: 0, y: 20 }
              animate={{ opacity: 1, y: 0 }
              transition={{ duration: 0.8 }
              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Research & Innovation
>>>>>>> main
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
<<<<<<< HEAD
                    type=&quot;text&quot;
                    placeholder=&quot;Search research publications...&quot;
                    className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&quot;
                  />&quot;
=======
                    type="text"
                    placeholder="Search research publications..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
>>>>>>> main
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Research Areas&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our research spans multiple cutting-edge technology domains&quot;
=======
              initial={{ opacity: 0, y: 20 }
              whileInView={{ opacity: 1, y: 0 }
              transition={{ duration: 0.8 }
              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Research Areas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our research spans multiple cutting-edge technology domains
>>>>>>> main
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {researchAreas.map((area, index) => (&quot;}
                <motion.div
>>>>>>> main
                  key={area.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>;
                    <FileText className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>;
                  <p className="text-gray-300 text-sm mb-4">{area.description}</p>;
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center text-blue-400 text-sm">;
                      <FileText className="w-4 h-4 mr-1" />;
                      {area.publications} publications;
                    </div>;
                    <div className="flex items-center text-green-400 text-sm">;
                      <Users className="w-4 h-4 mr-1" />;
                      {area.researchers} researchers;
                    </div>;
                  </div>;
                </motion.div>;
=======
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
=======
                  initial={{ opacity: 0, y: 20 }
                  whileInView={{ opacity: 1, y: 0 }
                  transition={{ duration: 0.8, delay: index * 0.1 }
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                ></motion>
>>>>>>> main
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>
                    <FileText className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
<<<<<<< HEAD
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{area.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{area.description}&quot;</p>
                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <div className=&quot;flex items-center text-blue-400 text-sm&quot;>&quot;"
                      <FileText className=&quot;w-4 h-4 mr-1&quot; />
                      {area.publications} publications&quot;
=======
                  <h3 className="text-xl font-bold text-white mb-2"></h>{area.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-400 text-sm">
                      <FileText className="w-4 h-4 mr-1" />
                      {area.publications} publications
>>>>>>> main
                    </div>
                    <div className=&quot;flex items-center text-green-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-1&quot; />
                      {area.researchers} researchers&quot;
                    </div>
                  </div>
                </motion.div>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

        {/* Recent Publications */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Recent Publications</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our latest research contributions to the scientific community;
              </p>;
            </motion.div>;

            <div className="space-y-6">;
              {recentPublications.map((publication, index) => (;
                <motion.div;
=======
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Recent Publications&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our latest research contributions to the scientific community&quot;
=======
              initial={{ opacity: 0, y: 20 }
              whileInView={{ opacity: 1, y: 0 }
              transition={{ duration: 0.8 }
              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Recent Publications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest research contributions to the scientific community
>>>>>>> main
              </p>
            </motion.div>

            <div className=&quot;space-y-6&quot;>
              {recentPublications.map((publication, index) => (&quot;}
                <motion.div
>>>>>>> main
                  key={publication.id}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300";
                >;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-2">;
                      {publication.featured && (;
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">;
                          Featured;
                        </span>;
                      )}
                    </div>;
                    <div className="flex items-center text-gray-400 text-sm">;
                      <TrendingUp className="w-4 h-4 mr-1" />;
                      {publication.citations} citations;
                    </div>;
                  </div>;

                  <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>;
                  ;
                  <div className="mb-4">;
                    <p className="text-sm text-gray-400 mb-1">Authors:</p>;
                    <p className="text-blue-400">{publication.authors.join(", ")}</p>;
                  </div>;

                  <div className="mb-4">;
                    <p className="text-sm text-gray-400 mb-1">Journal:</p>;
                    <p className="text-gray-300">{publication.journal}</p>;
                  </div>;

                  <div className="flex items-center justify-between">;
                    <div className="flex items-center text-gray-400 text-sm">;
                      <Calendar className="w-4 h-4 mr-1" />;
                      {new Date(publication.date).toLocaleDateString()}
                    </div>;
                    <div className="flex gap-2">;
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">;
                        <ExternalLink className="w-4 h-4 inline mr-1" />;
                        View Paper;
                      </button>;
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors">;
                        <Download className="w-4 h-4" />;
                      </button>;
                    </div>;
                  </div>;
                </motion.div>;
=======
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300&quot;
                >&quot;
                  <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                    <div className=&quot;flex items-center gap-2&quot;>
                      {publication.featured && (&quot;}
                        <span className=&quot;px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs&quot;>
                          Featured&quot;
=======
                  initial={{ opacity: 0, y: 20 }
                  whileInView={{ opacity: 1, y: 0 }
                  transition={{ duration: 0.8, delay: index * 0.1 }
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                ></motion>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {publication.featured && (
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">
                          Featured
>>>>>>> main
                        </span>
                      )}
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <TrendingUp className=&quot;w-4 h-4 mr-1&quot; />
                      {publication.citations} citations&quot;
                    </div>
                  </div>

<<<<<<< HEAD
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{publication.title}&quot;</h3>
                  
                  <div className=&quot;mb-4&quot;>&quot;"
                    <p className=&quot;text-sm text-gray-400 mb-1&quot;>Authors:&quot;</p>
                    <p className=&quot;text-blue-400&quot;>{publication.authors.join(&quot;, &quot;)}&quot;</p>
                  </div>

                  <div className=&quot;mb-4&quot;>&quot;"
                    <p className=&quot;text-sm text-gray-400 mb-1&quot;>Journal:&quot;</p>
                    <p className=&quot;text-gray-300&quot;>{publication.journal}&quot;</p>
=======
                  <h3 className="text-xl font-bold text-white mb-2"></h>{publication.title}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Authors: </p>
<<<<<<< HEAD
                    <p className="text-blue-400">{publication.authors.join(", ")}</p>
=======
                    <p className="text-blue-400">{publication.authors.join(,)}</p>
>>>>>>> main
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Journal: </p>
                    <p className="text-gray-300">{publication.journal}</p>
>>>>>>> main
                  </div>

                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Calendar className=&quot;w-4 h-4 mr-1&quot; />
                      {new Date(publication.date).toLocaleDateString()}&quot;
                    </div>
<<<<<<< HEAD
                    <div className=&quot;flex gap-2&quot;>&quot;"
                      <button className=&quot;px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;>&quot;"
                        <ExternalLink className=&quot;w-4 h-4 inline mr-1&quot; />
                        View Paper&quot;
=======
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4 inline mr-1" />
                        View Paper
>>>>>>> main
                      </button>
                      <button className=&quot;px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hove,r:bg-slate-700 transition-colors&quot;>&quot;"
                        <Download className=&quot;w-4 h-4&quot; />&quot;
                      </button>
                    </div>
                  </div>
                </motion.div>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Collaborate with Us;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Interested in collaborating on research projects or learning more ;
                about our research initiatives? We welcome partnerships with ;
                academic institutions and industry leaders.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105";
                >;
                  <Globe className="w-5 h-5 mr-2" />;
                  Partner with Us;
                </a>;
                <a;
                  href="/about";
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200";
                >;
                  <ArrowRight className="w-5 h-5 mr-2" />;
                  Learn More;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
=======
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Collaborate with Us&quot;
=======
              initial={{ opacity: 0, y: 20 }
              whileInView={{ opacity: 1, y: 0 }
              transition={{ duration: 0.8 }
              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-6">
                Collaborate with Us
>>>>>>> main
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
>>>>>>> main
>>>>>>> main
  );
}