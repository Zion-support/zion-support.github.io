import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Brain,
  Shield,
  Cpu,
  Rocket
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      title: 'AI-Powered Business Transformation: A Comprehensive Guide',
      description: 'Learn how artificial intelligence is revolutionizing business operations and discover practical implementation strategies for your organization.',
      category: 'AI & Machine Learning',
      date: 'December 2024',
      downloads: '2,847',
      rating: 4.9,
      featured: true,
      icon: Brain,
      fileSize: '2.4 MB',
      pages: 45
    },
    {
      title: 'Quantum Computing: The Future of Enterprise Technology',
      description: 'Explore the potential of quantum computing in enterprise environments and understand how to prepare your business for the quantum revolution.',
      category: 'Quantum Computing',
      date: 'November 2024',
      downloads: '1,923',
      rating: 4.8,
      featured: true,
      icon: Cpu,
      fileSize: '3.1 MB',
      pages: 52
    },
    {
      title: 'Cybersecurity in the AI Era: Threats and Solutions',
      description: 'Understand the evolving cybersecurity landscape and learn how AI is both a threat and a solution for modern organizations.',
      category: 'Cybersecurity',
      date: 'October 2024',
      downloads: '3,156',
      rating: 4.7,
      featured: false,
      icon: Shield,
      fileSize: '2.8 MB',
      pages: 38
    },
    {
      title: 'Digital Twin Technology: Implementation Strategies',
      description: 'Comprehensive guide to implementing digital twin technology in manufacturing, infrastructure, and smart city applications.',
      category: 'Digital Twin',
      date: 'September 2024',
      downloads: '1,654',
      rating: 4.6,
      featured: false,
      icon: Rocket,
      fileSize: '2.1 MB',
      pages: 41
    },
    {
      title: 'Micro SaaS: Building Profitable Products',
      description: 'Learn the strategies for building and scaling successful micro SaaS products in today\'s competitive market.',
      category: 'Business Strategy',
      date: 'August 2024',
      downloads: '2,341',
      rating: 4.8,
      featured: false,
      icon: TrendingUp,
      fileSize: '1.9 MB',
      pages: 35
    },
    {
      title: 'IoT Edge Computing: Real-Time Intelligence at the Edge',
      description: 'Discover how edge computing is transforming IoT applications and enabling real-time decision making.',
      category: 'IoT & Edge Computing',
      date: 'July 2024',
      downloads: '1,876',
      rating: 4.5,
      featured: false,
      icon: Cpu,
      fileSize: '2.6 MB',
      pages: 43
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Twin',
    'Business Strategy',
    'IoT & Edge Computing'
  ];

  const benefits = [
    'Expert insights from industry leaders',
    'Comprehensive research and analysis',
    'Practical implementation strategies',
    'Latest industry trends and developments',
    'Free access to premium content',
    'Professional development resources'
  ];

  return (
    <>
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive white papers on AI, quantum computing, cybersecurity, and emerging technologies. Expert insights and practical strategies for business transformation."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Expert White Papers
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                White Papers
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  & Research
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Access our comprehensive collection of white papers on AI, quantum computing, 
                cybersecurity, and emerging technologies. Expert insights and practical strategies 
                to transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Download Papers
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured White Papers
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our most popular and comprehensive research papers on cutting-edge technologies 
                and business transformation strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.filter(wp => wp.featured).map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-blue-400/30 rounded-xl p-6 hover:scale-105 transition-all duration-200 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
                >
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                    <paper.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>
                  <p className="text-slate-300 mb-4">{paper.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {paper.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Users className="w-4 h-4 mr-2" />
                      {paper.downloads} downloads
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Star className="w-4 h-4 mr-2" />
                      {paper.rating}/5 rating
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <FileText className="w-4 h-4 mr-2" />
                      {paper.fileSize} • {paper.pages} pages
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All White Papers
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Browse our complete collection of research papers and industry insights 
                to stay ahead of the technology curve.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <paper.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    {paper.featured && (
                      <div className="flex items-center text-yellow-400 text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>
                  <p className="text-slate-300 mb-4">{paper.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>{paper.date}</span>
                    <span>{paper.downloads} downloads</span>
                    <span>{paper.rating}/5</span>
                  </div>
                  
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download White Paper
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Download Our White Papers?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our white papers provide valuable insights, research, and practical strategies 
                to help you stay ahead in the rapidly evolving technology landscape.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Stay Informed with Expert Research
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Don't miss out on valuable insights and research. Download our white papers 
                and gain a competitive edge in your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Download All Papers
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}