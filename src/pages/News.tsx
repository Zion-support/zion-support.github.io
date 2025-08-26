import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const News: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "Our latest AI platform transforms how businesses analyze data and make decisions, featuring advanced machine learning algorithms and real-time analytics.",
      category: "Product Launch",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "Zion Tech Group Named Top 10 AI Companies to Watch in 2025",
      excerpt: "Industry recognition for our innovative approach to artificial intelligence and machine learning solutions that are reshaping enterprise technology.",
      category: "Company News",
      date: "2025-01-10",
      readTime: "3 min read",
      image: "🏆",
      featured: false
    },
    {
      id: 3,
      title: "New Partnership with Global Cloud Provider Expands Our Reach",
      excerpt: "Strategic partnership announcement that will enable us to deliver enhanced cloud solutions to clients worldwide with improved scalability and performance.",
      category: "Partnerships",
      date: "2025-01-08",
      readTime: "4 min read",
      image: "🤝",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity Innovation: Zero-Trust Architecture Implementation Guide",
      excerpt: "Comprehensive guide on implementing zero-trust security architecture for modern enterprises, based on our successful client implementations.",
      category: "Technical Insights",
      date: "2025-01-05",
      readTime: "8 min read",
      image: "🔒",
      featured: false
    },
    {
      id: 5,
      title: "Digital Transformation Success Story: Manufacturing Industry Case Study",
      excerpt: "How we helped a leading manufacturer achieve 40% efficiency improvement through digital transformation and IoT integration.",
      category: "Case Studies",
      date: "2025-01-02",
      readTime: "6 min read",
      image: "🏭",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Quantum Computing in Enterprise Applications",
      excerpt: "Exploring the potential of quantum computing and how businesses can prepare for this revolutionary technology shift.",
      category: "Industry Insights",
      date: "2024-12-28",
      readTime: "7 min read",
      image: "⚛️",
      featured: false
    }
  ];

  const pressReleases = [
    {
      title: "Zion Tech Group Secures $25M Series B Funding Round",
      date: "2024-12-20",
      summary: "Funding will accelerate product development and expand market presence in North America and Europe."
    },
    {
      title: "New Executive Appointments Strengthen Leadership Team",
      date: "2024-12-15",
      summary: "Industry veterans join to drive innovation and strategic growth initiatives."
    },
    {
      title: "Zion Tech Group Achieves SOC 2 Type II Compliance",
      date: "2024-12-10",
      summary: "Security certification demonstrates commitment to protecting client data and maintaining highest security standards."
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Company News", 
    "Partnerships",
    "Technical Insights",
    "Case Studies",
    "Industry Insights"
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEO 
        title="News & Press - Zion Tech Group"
        description="Stay updated with the latest news, product launches, company updates, and industry insights from Zion Tech Group."
        keywords="news, press releases, company updates, AI news, technology news, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}News & Updates
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay informed about our latest innovations, company milestones, industry insights, 
              and the future of technology that we're helping to shape.
            </motion.p>
          </motion.div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Story</h2>
            </motion.div>
            
            {newsArticles.filter(article => article.featured).map((article) => (
              <motion.div
                key={article.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{formatDate(article.date)}</span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{article.image}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest developments and industry insights
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{article.image}</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{formatDate(article.date)}</span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official announcements and company milestones
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    <span className="text-blue-400 text-sm font-medium">Press Release</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {release.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{formatDate(release.date)}</span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300">
                      Read Full Release →
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-lg"
                  aria-label="Email address for newsletter"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;