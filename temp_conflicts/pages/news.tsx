import React from 'react';
  const featuredNews = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.',
      author: 'Press Team',
      date: '2025-01-15',
      author: 'Dr. Kleber',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Consciousness', 'Breakthrough', 'Innovation'],
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems',
      excerpt: 'Our quantum team achieves significant milestone in solving previously impossible computational challenges.',
      author: 'Research Team',
      date: '2025-01-12',
      category: 'Research',
      readTime: '6 min read',
      image: '/news/quantum-breakthrough.jpg',
      tags: ['Quantum Computing', 'Research', 'Breakthrough'],
      icon: <Atom className=&quot;w-6 h-6&quot; />,
      featured: true
    },
    {
      title: 'Cybersecurity Partnership with Global Tech Leaders',
      excerpt: 'Strategic collaboration to advance AI-powered threat detection and response systems.',
      author: 'Partnerships Team',
      date: '2025-01-10',
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 7 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ];

  Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink,
  TrendingUp, Lightbulb, Rocket, Globe, Shield, Zap,
  Clock, BookOpen, Video, Podcast, FileText, Search
} from 'lucide-react';
import Link from 'next/link';
  return (
    <UltraFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name=&quot;description&quot; content=&quot;Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies.&quot; />
        </Head>

      id: 1,
      title: &quot;Zion Tech Group Launches Revolutionary Quantum AI Platform&quot;,
      excerpt: &quot;Our latest quantum AI platform combines quantum computing with artificial intelligence to deliver unprecedented performance and capabilities for enterprise applications.&quot;,
      category: &quot;Product Launch&quot;,
      author: &quot;Zion Tech Group Team&quot;,
      date: &quot;2025-01-15&quot;,
      readTime: &quot;5 min read&quot;,
      image: &quot;/images/news/quantum-ai-launch.jpg&quot;,
      tags: [&quot;Quantum Computing&quot;, &quot;AI&quot;, &quot;Product Launch&quot;]
    },
    {
      id: 2,
      title: &quot;New Partnership with Global Healthcare Consortium&quot;,
      excerpt: &quot;We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.&quot;,
      category: &quot;Partnership&quot;,
      author: &quot;Business Development&quot;,
      date: &quot;2025-01-12&quot;,
      readTime: &quot;4 min read&quot;,
      image: &quot;/images/news/healthcare-partnership.jpg&quot;,
      tags: [&quot;Healthcare&quot;, &quot;Partnership&quot;, &quot;AI&quot;]
    },
    {
      id: 3,
      title: &quot;Breakthrough in Autonomous Cybersecurity Systems&quot;,
      excerpt: &quot;Our research team has achieved a major breakthrough in autonomous cybersecurity, developing systems that can detect and respond to threats in real-time without human intervention.&quot;,
      category: &quot;Research&quot;,
      author: &quot;Research Team&quot;,
      date: &quot;2025-01-10&quot;,
      readTime: &quot;6 min read&quot;,
      image: &quot;/images/news/cybersecurity-breakthrough.jpg&quot;,
      tags: [&quot;Cybersecurity&quot;, &quot;Research&quot;, &quot;Autonomous Systems&quot;]
    },
    {
      id: 4,
      title: &quot;Space Technology Division Expands Operations&quot;,
      excerpt: &quot;Our space technology division is expanding operations to support growing demand for satellite operations, space resource mining, and orbital analytics services.&quot;,
      category: &quot;Company News&quot;,
      author: &quot;Space Technology Team&quot;,
      date: &quot;2025-01-08&quot;,
      readTime: &quot;3 min read&quot;,
      image: &quot;/images/news/space-expansion.jpg&quot;,
      tags: [&quot;Space Technology&quot;, &quot;Expansion&quot;, &quot;Satellites&quot;]
    },
    {
      id: 5,
      title: &quot;AI Ethics and Governance Framework Released&quot;,
      excerpt: &quot;We've published our comprehensive AI ethics and governance framework, setting new standards for responsible AI development and deployment in enterprise environments.&quot;,
      category: &quot;Policy&quot;,
      author: &quot;AI Ethics Team&quot;,
      date: &quot;2025-01-05&quot;,
      readTime: &quot;7 min read&quot;,
      image: &quot;/images/news/ai-ethics-framework.jpg&quot;,
      tags: [&quot;AI Ethics&quot;, &quot;Governance&quot;, &quot;Policy&quot;]
    },
    {
      id: 6,
      title: &quot;Financial Services Innovation Award Winner&quot;,
      excerpt: &quot;Zion Tech Group has been recognized as the winner of the Financial Services Innovation Award for our quantum financial modeling and risk assessment platforms.&quot;,
      category: &quot;Awards&quot;,
      author: &quot;Marketing Team&quot;,
      date: &quot;2025-01-03&quot;,
      readTime: &quot;3 min read&quot;,
      image: &quot;/images/news/financial-award.jpg&quot;,
      tags: [&quot;Awards&quot;, &quot;Financial Services&quot;, &quot;Quantum Computing&quot;]
export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, optimization, and scientific research.',
      category: 'Company News',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Quantum Computing', 'Innovation'],
import Head from 'next/head';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: &quot;Zion Tech Group Launches New AI-Powered Automation Platform&quot;,
      excerpt: &quot;Our latest innovation brings autonomous decision-making capabilities to enterprise environments, revolutionizing how businesses operate.&quot;,
      date: &quot;2025-01-19&quot;,
      category: &quot;Company News&quot;,
      author: &quot;Zion Tech Group&quot;,
      readTime: &quot;3 min read&quot;,
      image: &quot;🚀&quot;,
      featured: true
    },
    {
      id: 2,
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className=&quot;py-20&quot;>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=&quot;text-center mb-12&quot;
              >
                <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                  Featured Story
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden&quot;
              >
                <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-0&quot;>
                  <div className=&quot;p-8 lg:p-12&quot;>
                    <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                      <span className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full&quot;>
                        {featuredArticle.category}
                      </span>
                      <span className=&quot;text-gray-400 text-sm&quot;>
                        <Calendar className=&quot;w-4 h-4 inline mr-1&quot; />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className=&quot;text-2xl lg:text-3xl font-bold text-white mb-4&quot;>
                      {featuredArticle.title}
                    </h3>
                    <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                      {featuredArticle.excerpt}
                    </p>
                    <div className=&quot;flex items-center space-x-4 mb-6&quot;>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <User className=&quot;w-4 h-4 text-gray-400&quot; />
                        <span className=&quot;text-gray-400&quot;>{featuredArticle.author}</span>
                      </div>
                    </div>
                    <div className=&quot;flex flex-wrap gap-2 mb-6&quot;>
                      {featuredArticle.tags.map((tag) => (
                        <span
                          key={tag}
                          className=&quot;bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700/50&quot;
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300&quot;
                    >
                      Read Full Article
                      <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                    </Link>
                  </div>
                  <div className=&quot;relative h-64 lg:h-auto&quot;>
                    <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center&quot;>
                      <Newspaper className=&quot;w-24 h-24 text-purple-400&quot; />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className=&quot;py-12 bg-black/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name}
                  <span className=&quot;ml-2 text-sm opacity-75&quot;>({category.count})</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* News Grid */}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                Latest News
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Stay updated with our latest developments and breakthroughs
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
        {/* CTA Section */}
        <section className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden&quot;
                >
                  <div className=&quot;relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center&quot;>
                    <Newspaper className=&quot;w-16 h-16 text-purple-400&quot; />
                  </div>
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                      <span className=&quot;bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full&quot;>
                        {article.category}
                      </span>
                      <span className=&quot;text-gray-400 text-xs&quot;>
                        <Calendar className=&quot;w-3 h-3 inline mr-1&quot; />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3 line-clamp-2&quot;>
                      {article.title}
                    </h3>
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                      {article.excerpt}
                    </p>
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <User className=&quot;w-4 h-4 text-gray-400&quot; />
                        <span className=&quot;text-gray-400 text-sm&quot;>{article.author}</span>
                      </div>
                    </div>
                    <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className=&quot;bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30&quot;
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/news/${article.id}`}
                      className=&quot;inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;
                    >
                      Read More
                      <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                    </Link>
                  </div>
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=&quot;text-center mb-16&quot;
            >
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6&quot;>
                <Newspaper className=&quot;w-4 h-4 mr-2&quot; />
        <section className=&quot;relative py-20 px-4&quot;>
          <div className=&quot;container mx-auto max-w-6xl&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
                Latest News & Updates
              </div>
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6&quot;>
                News & Press
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
                Stay updated with the latest developments, breakthroughs, and innovations 
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>

        {/* Category Filter */}
        <section className=&quot;py-10 px-4&quot;>
          <div className=&quot;container mx-auto max-w-6xl&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;flex flex-wrap justify-center gap-4&quot;
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === &quot;All News&quot;
                      ? &quot;bg-gradient-to-r from-blue-500 to-purple-600 text-white&quot;
                      : &quot;bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600&quot;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, Clock, User, Tag, 
  ArrowRight, ExternalLink, TrendingUp, 
  BookOpen, Globe, Video
} from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'ai', name: 'AI & Consciousness', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'enterprise', name: 'Enterprise IT', count: 5 },
    { id: 'research', name: 'Research & Development', count: 3 },
    { id: 'industry', name: 'Industry Insights', count: 2 }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in artificial consciousness technology promises to revolutionize how businesses interact with AI systems, enabling unprecedented levels of understanding and collaboration.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/images/news/ai-consciousness-launch.jpg',
      featured: true,
      tags: ['AI Consciousness', 'Platform Launch', 'Innovation']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Achieving 1000+ Qubit Stability',
      excerpt: 'Our quantum research team has achieved a major milestone in quantum computing stability, opening new possibilities for complex computational problems.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Breakthrough']
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: 'Enterprise AI Adoption: Trends and Best Practices for 2024',
      excerpt: 'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.',
      category: 'enterprise',
      author: 'Jennifer Kim',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '/images/news/enterprise-ai-trends.jpg',
      tags: ['Enterprise AI', 'Best Practices', '2024 Trends']
    },
    {
      id: 4,
      title: 'The Future of Autonomous Business Systems',
      excerpt: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.',
      category: 'research',
      author: 'Dr. Alex Thompson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/images/news/autonomous-systems.jpg',
      tags: ['Autonomous Systems', 'Future of Work', 'Innovation']
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.',
      category: 'enterprise',
      author: 'Marcus Johnson',
      date: '2024-01-05',
      readTime: '5 min read',
      image: '/images/news/ai-cybersecurity.jpg',
      tags: ['Cybersecurity', 'AI Security', 'Digital Protection']
    },
    {
      id: 6,
      title: 'Quantum Machine Learning: Bridging Two Revolutionary Technologies',
      excerpt: 'Our research team explores the intersection of quantum computing and machine learning, revealing exciting possibilities for the future.',
      category: 'quantum',
      author: 'Dr. Elena Petrova',
      date: '2024-01-03',
      readTime: '8 min read',
      image: '/images/news/quantum-ml.jpg',
      tags: ['Quantum ML', 'Research', 'Technology Convergence']
    }
  ];

  const industryInsights = [
    {
      id: 7,
      title: 'The Rise of Conscious AI: Ethical Considerations and Business Impact',
      excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.',
      category: 'industry',
      author: 'Dr. Robert Chang',
      date: '2024-01-01',
      readTime: '6 min read',
      tags: ['AI Ethics', 'Business Impact', 'Consciousness']
    },
    {
      id: 8,
      title: 'Micro-SaaS Revolution: How Small Teams Are Building Big Solutions',
      excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.',
      category: 'industry',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '4 min read',
      tags: ['Micro-SaaS', 'Startups', 'Software Industry']
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Consciousness Summit 2024',
      type: 'Conference',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco, CA',
      description: 'Join industry leaders and researchers for a deep dive into the future of AI consciousness technology.',
      registration: 'https://ziontechgroup.com/events/ai-consciousness-summit-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      type: 'Workshop',
      date: '2024-02-22',
      time: '1:00 PM - 5:00 PM',
      location: 'Virtual',
      description: 'Hands-on workshop covering quantum computing fundamentals and practical applications.',
      registration: 'https://ziontechgroup.com/events/quantum-workshop'
    }
  ];

  const filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-cyan-500 to-blue-500',
      quantum: 'from-purple-500 to-pink-500',
      enterprise: 'from-green-500 to-emerald-500',
      research: 'from-orange-500 to-red-500',
      industry: 'from-indigo-500 to-purple-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12&quot;
          >
            Stay updated with the latest developments in AI consciousness, quantum computing, 
            and emerging technologies from Zion Tech Group.
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=&quot;max-w-4xl mx-auto&quot;
          >
            <div className=&quot;relative mb-8&quot;>
              <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search news and insights...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300&quot;
              />
            </div>
            
            <div className=&quot;flex flex-wrap gap-3 justify-center&quot;>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
    'All News',
    'Company News',
    'Partnerships',
    'AI & Ethics',
    'Quantum Technology',
    'Space Technology',
    'Micro SAAS',
    'IT Services',
    'Metaverse',
    'Industry Insights'
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
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6&quot;
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8&quot;
          >
            Stay updated with the latest developments in AI, quantum computing, space technology, and more from Zion Tech Group.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=&quot;flex flex-wrap justify-center gap-4&quot;
          >
            <a href=&quot;#featured&quot; className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2&quot;>
              <span>Read Featured News</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </Link>
            <a href=&quot;#insights&quot; className=&quot;border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300&quot;>
              Industry Insights
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=&quot;py-8 border-b border-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap gap-2 justify-center&quot;>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section id=&quot;featured&quot; className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Featured News
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our most important announcements and breakthrough developments.
            </p>
          </motion.div>
          
          <div className=&quot;grid lg:grid-cols-3 gap-8&quot;>
            {featuredNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden&quot;
              >
                <div className=&quot;h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center&quot;>
                  <Newspaper className=&quot;w-16 h-16 text-purple-400&quot; />
                </div>
                <div className=&quot;p-6&quot;>
                  <div className=&quot;flex items-center gap-2 mb-3&quot;>
                    <span className=&quot;text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full&quot;>
                      {article.category}
                    </span>
                    <span className=&quot;text-xs text-gray-400&quot;>{article.readTime}</span>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3 line-clamp-2&quot;>
                    {article.title}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                    {article.excerpt}
                  </p>
                  <div className=&quot;flex items-center justify-between text-sm text-gray-400 mb-4&quot;>
                    <span className=&quot;flex items-center gap-1&quot;>
                      <User className=&quot;w-4 h-4&quot; />
                      {article.author}
                    </span>
                    <span className=&quot;flex items-center gap-1&quot;>
                      <Calendar className=&quot;w-4 h-4&quot; />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className=&quot;text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded&quot;>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={`/news/${article.id}`} className=&quot;inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;>
                    <span>Read More</span>
                    <ArrowRight className=&quot;w-4 h-4&quot; />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Recent News
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Stay current with our latest developments and industry updates.
            </p>
          </motion.div>
          
          <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
            {recentNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center gap-2 mb-3&quot;>
                  <span className=&quot;text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full&quot;>
                    {article.category}
                  </span>
                  <span className=&quot;text-xs text-gray-400&quot;>{article.readTime}</span>
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-3 line-clamp-2&quot;>
                  {article.title}
                </h3>
                <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-2&quot;>
                  {article.excerpt}
                </p>
                <div className=&quot;flex items-center justify-between text-sm text-gray-400 mb-4&quot;>
                  <span className=&quot;flex items-center gap-1&quot;>
                    <User className=&quot;w-4 h-4&quot; />
                    {article.author}
                  </span>
                  <span className=&quot;flex items-center gap-1&quot;>
                    <Calendar className=&quot;w-4 h-4&quot; />
                    {formatDate(article.date)}
                  </span>
                </div>
                <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className=&quot;text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded&quot;>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/news/${article.id}`} className=&quot;inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;>
                  <span>Read More</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section id=&quot;insights&quot; className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Industry Insights
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Deep analysis and thought leadership on emerging technologies and industry trends.
            </p>
          </motion.div>
          
          <div className=&quot;grid lg:grid-cols-3 gap-8&quot;>
            {industryInsights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center gap-2 mb-3&quot;>
                  <span className=&quot;text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full&quot;>
                    {insight.category}
                  </span>
                  <span className=&quot;text-xs text-gray-400&quot;>{insight.readTime}</span>
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-3 line-clamp-2&quot;>
                  {insight.title}
                </h3>
                <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                  {insight.excerpt}
                </p>
                <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                  {insight.tags.map((tag, idx) => (
                    <span key={idx} className=&quot;text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded&quot;>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href=&quot;#&quot; className=&quot;inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;>
                  <span>Read Insight</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900 to-black&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Stay Updated
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300&quot;>
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

}
                    <div className=&quot;flex items-center gap-3 mb-4&quot;>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className=&quot;text-gray-400 text-sm flex items-center gap-1&quot;>
                        <Calendar className=&quot;w-4 h-4&quot; />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {article.title}
                    </h3>
                    
                    <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                      {article.excerpt}
                    </p>
                    
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <User className=&quot;w-4 h-4&quot; />
                          {article.author}
                        </span>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-4 h-4&quot; />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <ArrowRight className=&quot;w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300&quot; />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-4xl md:text-5xl font-bold text-center mb-16&quot;
          >
            Latest News
          </motion.h2>
          
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredNews.slice(2, 8).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group cursor-pointer&quot;
              >
                <div className=&quot;h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300&quot;>
                  <div className=&quot;aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center&quot;>
                    <BookOpen className=&quot;w-12 h-12 text-cyan-400&quot; />
                  </div>
                  
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center gap-2 mb-3&quot;>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2&quot;>
                      {article.title}
                    </h3>
                    
                    <p className=&quot;text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3&quot;>
                      {article.excerpt}
                    </p>
                    
                    <div className=&quot;flex items-center justify-between text-sm text-gray-400&quot;>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <User className=&quot;w-4 h-4&quot; />
                        {article.author}
                      </span>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <Clock className=&quot;w-4 h-4&quot; />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-4xl md:text-5xl font-bold text-center mb-16&quot;
          >
            Upcoming Events
          </motion.h2>
          
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start gap-4&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0&quot;>
                    {event.type === 'Conference' ? <Globe className=&quot;w-8 h-8&quot; /> : <Video className=&quot;w-8 h-8&quot; />}
                  </div>
                  
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center gap-2 mb-2&quot;>
                      <span className=&quot;px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full&quot;>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-xl font-bold mb-3&quot;>
                      {event.title}
                    </h3>
                    
                    <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                      {event.description}
                    </p>
                    
                    <div className=&quot;space-y-2 text-sm text-gray-400 mb-4&quot;>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Calendar className=&quot;w-4 h-4&quot; />
                        {formatDate(event.date)} at {event.time}
                      </div>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Globe className=&quot;w-4 h-4&quot; />
                        {event.location}
                      </div>
                    </div>
                    
                    <a
                      href={event.registration}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
                    >
                      Register Now
                      <ExternalLink className=&quot;w-4 h-4&quot; />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Stay Updated
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Get the latest news, insights, and updates delivered directly to your inbox.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email address&quot;
                className=&quot;flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;>
                Subscribe
              </button>
            </div>
            
            <p className=&quot;text-sm text-gray-400 mt-4&quot;>
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-4&quot;>Latest News</h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className=&quot;bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <div className=&quot;flex items-center gap-4 mb-4&quot;>
                    <span className=&quot;px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30&quot;>
                      {article.category}
                    </span>
                  </div>
                  <h3 className=&quot;text-xl font-semibold mb-3 line-clamp-2&quot;>{article.title}</h3>
                  <p className=&quot;text-gray-400 mb-4 line-clamp-3&quot;>{article.excerpt}</p>
                  <div className=&quot;flex items-center justify-between text-sm text-gray-500 mb-4&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <Calendar className=&quot;w-4 h-4&quot; />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <Clock className=&quot;w-4 h-4&quot; />
                      {article.readTime}
                    </div>
                  </div>
                  <button className=&quot;w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2&quot;>
                    Read More
                    <ArrowRight className=&quot;w-4 h-4&quot; />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                Stay Updated
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto mb-8&quot;>
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className=&quot;text-4xl font-bold mb-6&quot;>Stay Updated</h2>
              <p className=&quot;text-xl text-gray-400 mb-8&quot;>
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto&quot;>
                <input
                  type=&quot;email&quot;
                  placeholder=&quot;Enter your email&quot;
                  className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50&quot;
                />
                <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;>
                  Subscribe
                </button>
              </div>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group&quot;
                >
                  <div className=&quot;flex items-center gap-2 mb-3&quot;>
                    <span className=&quot;px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium&quot;>
                      {release.category}
                    </span>
                    <span className=&quot;text-gray-400 text-sm&quot;>{release.readTime}</span>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300&quot;>
                    {release.title}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                    {release.excerpt}
                  </p>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Calendar className=&quot;w-4 h-4 text-gray-400&quot; />
                    <span className=&quot;text-gray-400 text-sm&quot;>{release.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                News Categories
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore news by category to find updates in your areas of interest.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;>
              {newsCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-center group cursor-pointer&quot;
                >
                  <div className=&quot;w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20&quot;>
                    <div className=&quot;text-purple-400 group-hover:text-purple-300 transition-colors duration-300&quot;>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className=&quot;text-sm font-semibold text-white mb-1&quot;>
                    {category.name}
                  </h3>
                  <p className=&quot;text-gray-400 text-xs&quot;>{category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Recent News
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Stay updated with our latest announcements and developments.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {recentNews.map((news, index) => (
                <motion.article
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group&quot;
                >
                  <div className=&quot;flex items-center gap-2 mb-3&quot;>
                    <span className=&quot;px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium&quot;>
                      {news.category}
                    </span>
                    <span className=&quot;text-gray-400 text-sm&quot;>{news.readTime}</span>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300&quot;>
                    {news.title}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                    {news.excerpt}
                  </p>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <User className=&quot;w-4 h-4 text-gray-400&quot; />
                      <span className=&quot;text-gray-400 text-sm&quot;>{news.author}</span>
                    </div>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <Calendar className=&quot;w-4 h-4 text-gray-400&quot; />
                      <span className=&quot;text-gray-400 text-sm&quot;>{news.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Media Inquiries
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                For press inquiries, media interviews, or additional information, 
                please contact our communications team.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Media Team
                  <Mic className=&quot;ml-2 w-5 h-5&quot; />
                </Link>
                <a
                  href=&quot;/press&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300&quot;
                >
                  Press Kit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Ready to Stay Informed?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Explore our latest research, industry insights, and technology breakthroughs 
              that are shaping the future of AI and quantum computing.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link 
                href=&quot;/blog&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Explore Our Blog
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <Link 
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300&quot;
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
      {/* Call to Action */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Get in Touch
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2&quot;>
                <span>Contact Us</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a href=&quot;/about&quot; className=&quot;border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300&quot;>
                About Zion Tech Group
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
      title: &quot;Partnership with TechCorp Announced for Cloud Infrastructure&quot;,
      excerpt: &quot;Strategic collaboration to deliver next-generation cloud automation solutions for enterprise clients worldwide.&quot;,
      date: &quot;2025-01-18&quot;,
      category: &quot;Partnerships&quot;,
      author: &quot;Sarah Chen&quot;,
      readTime: &quot;2 min read&quot;,
      image: &quot;🤝&quot;
    },
    {
      id: 3,
      title: &quot;AI Ethics Guidelines Released for Responsible Development&quot;,
      excerpt: &quot;Comprehensive framework ensuring our AI solutions are developed with transparency, fairness, and societal benefit in mind.&quot;,
      date: &quot;2025-01-17&quot;,
      category: &quot;Innovation&quot;,
      author: &quot;Dr. Emily Watson&quot;,
      readTime: &quot;4 min read&quot;,
      image: &quot;⚖️&quot;
    },
    {
      id: 4,
      title: &quot;New Office Opening in Singapore&quot;,
      excerpt: &quot;Expanding our global presence to better serve clients in the Asia-Pacific region with local expertise and support.&quot;,
      date: &quot;2025-01-16&quot;,
      category: &quot;Company News&quot;,
      author: &quot;Marcus Rodriguez&quot;,
      readTime: &quot;2 min read&quot;,
      image: &quot;🌏&quot;
    },
    {
      id: 5,
      title: &quot;Machine Learning Model Achieves 99.7% Accuracy&quot;,
      excerpt: &quot;Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI performance.&quot;,
      date: &quot;2025-01-15&quot;,
      category: &quot;Technology&quot;,
      author: &quot;Dr. James Wilson&quot;,
      readTime: &quot;5 min read&quot;,
      image: &quot;🧠&quot;
    },
    {
      id: 6,
      title: &quot;Annual Sustainability Report Published&quot;,
      excerpt: &quot;Comprehensive overview of our environmental impact and commitment to sustainable technology development.&quot;,
      date: &quot;2025-01-14&quot;,
      category: &quot;Sustainability&quot;,
      author: &quot;Lisa Park&quot;,
      readTime: &quot;6 min read&quot;,
      image: &quot;🌱&quot;
    },
    {
      id: 7,
      title: &quot;Customer Success Story: Retail Automation&quot;,
      excerpt: &quot;How we helped a major retailer increase efficiency by 300% through intelligent automation systems.&quot;,
      date: &quot;2025-01-13&quot;,
      category: &quot;Case Studies&quot;,
      author: &quot;Alex Thompson&quot;,
      readTime: &quot;4 min read&quot;,
      image: &quot;📊&quot;
    },
    {
      id: 8,
      title: &quot;New Research Paper on Autonomous Systems&quot;,
      excerpt: &quot;Published in leading AI journal, our research explores the future of self-managing technology infrastructure.&quot;,
      date: &quot;2025-01-12&quot;,
      category: &quot;Research&quot;,
      author: &quot;Prof. Maria Garcia&quot;,
      readTime: &quot;7 min read&quot;,
      image: &quot;📚&quot;
    }
  ];

  const categories = [&quot;All&quot;, &quot;Company News&quot;, &quot;Partnerships&quot;, &quot;Innovation&quot;, &quot;Technology&quot;, &quot;Sustainability&quot;, &quot;Case Studies&quot;, &quot;Research&quot;];

  return (
    <>
      <Head>
        <title>News | Zion Tech Group - Latest Updates & Insights</title>
        <meta name=&quot;description&quot; content=&quot;Stay informed with the latest news, company updates, and industry insights from Zion Tech Group.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;News - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Latest company news, partnerships, and technology insights.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <section className=&quot;text-center mb-16&quot;>
            <h1 className=&quot;text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent&quot;>
              Latest News
            </h1>
            <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto&quot;>
              Stay updated with company news, partnerships, innovations, and industry insights
            </p>
          </section>

          <section className=&quot;mx-auto max-w-6xl&quot;>
            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-3 mb-12&quot;>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    category === &quot;All&quot;
                      ? &quot;bg-cyan-400 text-white border-cyan-400&quot;
                      : &quot;bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50&quot;
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className=&quot;bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30&quot;>
                <div className=&quot;flex items-start gap-6&quot;>
                  <div className=&quot;text-6xl&quot;>{article.image}</div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center gap-2 mb-3&quot;>
                      <span className=&quot;px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50&quot;>
                        Featured
                      </span>
                      <span className=&quot;px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30&quot;>
                        {article.category}
                      </span>
                    </div>
                    <h2 className=&quot;text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors&quot;>
                      {article.title}
                    </h2>
                    <p className=&quot;text-white/80 mb-4 text-lg leading-relaxed&quot;>
                      {article.excerpt}
                    </p>
                    <div className=&quot;flex items-center gap-4 text-sm text-white/60 mb-4&quot;>
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200&quot;>
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* News Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105&quot;>
                  <div className=&quot;text-4xl mb-4 text-center&quot;>{article.image}</div>
                  <div className=&quot;mb-3&quot;>
                    <span className=&quot;inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30&quot;>
                      {article.category}
                    </span>
                  </div>
                  <h3 className=&quot;text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors&quot;>
                    {article.title}
                  </h3>
                  <p className=&quot;text-white/70 mb-4 text-sm leading-relaxed&quot;>
                    {article.excerpt}
                  </p>
                  <div className=&quot;flex items-center justify-between text-sm text-white/50 mb-4&quot;>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className=&quot;text-xs text-white/60 mb-4&quot;>
                    By {article.author}
                  </div>
                  <button className=&quot;w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200&quot;>
                    Read More
                  </button>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className=&quot;text-center mt-16&quot;>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-cyan-400&quot;>Stay in the Loop</h2>
                <p className=&quot;text-white/70 mb-6&quot;>
                  Get the latest news and updates delivered directly to your inbox. Never miss an important announcement.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
                  <input
                    type=&quot;email&quot;
                    placeholder=&quot;Enter your email&quot;
                    className=&quot;flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50&quot;
                  />
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200&quot;>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
