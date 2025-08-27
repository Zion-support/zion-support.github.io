import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Newspaper,
  Star,
  Share2
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
    category: "Product Updates",
    date: "2025-01-15",
    author: "Press Team",
    source: "Company Press Release",
    description: "Our new AI-powered cybersecurity platform combines machine learning with quantum-resistant encryption to provide unprecedented protection against emerging threats.",
    content: "Zion Tech Group is excited to announce the launch of our revolutionary AI-powered cybersecurity platform. This cutting-edge solution leverages advanced machine learning algorithms and quantum-resistant encryption to provide comprehensive protection against the most sophisticated cyber threats...",
    readTime: "5 min read",
    views: 2847,
    tags: ["AI", "Cybersecurity", "Product Launch", "Innovation"],
    image: "/api/placeholder/400/250",
    isFeatured: true,
    isBreaking: false
  },
  {
    id: 2,
    title: "Zion Tech Group Named 'AI Innovation Company of the Year' at Tech Awards 2024",
    category: "Awards & Recognition",
    date: "2024-12-20",
    author: "Marketing Team",
    source: "Industry Awards",
    description: "We're honored to receive the prestigious 'AI Innovation Company of the Year' award for our groundbreaking work in artificial intelligence and quantum computing.",
    content: "Zion Tech Group has been recognized as the 'AI Innovation Company of the Year' at the prestigious Tech Awards 2024. This recognition highlights our commitment to pushing the boundaries of artificial intelligence and quantum computing...",
    readTime: "3 min read",
    views: 1956,
    tags: ["Awards", "AI", "Recognition", "Innovation"],
    image: "/api/placeholder/400/250",
    isFeatured: true,
    isBreaking: false
  },
  {
    id: 3,
    title: "Partnership Announced: Zion Tech Group and Global Tech Leaders Join Forces",
    category: "Partnerships",
    date: "2024-12-10",
    author: "Business Development",
    source: "Company Press Release",
    description: "Strategic partnership announced with leading technology companies to accelerate innovation in AI, quantum computing, and cybersecurity solutions.",
    content: "Zion Tech Group is pleased to announce a strategic partnership with several leading technology companies. This collaboration will accelerate innovation in artificial intelligence, quantum computing, and cybersecurity solutions...",
    readTime: "4 min read",
    views: 1623,
    tags: ["Partnerships", "Collaboration", "Innovation", "Technology"],
    image: "/api/placeholder/400/250",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: 4,
    title: "Breakthrough in Quantum Computing Research: New Algorithm Achieves 99.9% Accuracy",
    category: "Research & Development",
    date: "2024-11-28",
    author: "Dr. James Kim",
    source: "Research Papers",
    description: "Our quantum computing research team has achieved a major breakthrough with a new algorithm that achieves 99.9% accuracy in complex calculations.",
    content: "Zion Tech Group's quantum computing research team has achieved a significant breakthrough in quantum algorithm development. Our new algorithm achieves 99.9% accuracy in complex quantum calculations...",
    readTime: "7 min read",
    views: 3421,
    tags: ["Quantum Computing", "Research", "Breakthrough", "Algorithm"],
    image: "/api/placeholder/400/250",
    isFeatured: false,
    isBreaking: true
  },
  {
    id: 5,
    title: "Customer Success Story: How TechCorp Increased Efficiency by 300% with Our AI Solutions",
    category: "Customer Success Stories",
    date: "2024-11-15",
    author: "Customer Success Team",
    source: "Customer Case Study",
    description: "Learn how TechCorp leveraged our AI solutions to achieve a 300% increase in operational efficiency and transform their business processes.",
    content: "TechCorp, a leading technology company, has achieved remarkable results using Zion Tech Group's AI solutions. Their implementation of our machine learning platform resulted in a 300% increase in operational efficiency...",
    readTime: "6 min read",
    views: 2189,
    tags: ["Customer Success", "AI", "Case Study", "Efficiency"],
    image: "/api/placeholder/400/250",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: 6,
    title: "Industry Report: The Future of AI in Enterprise Technology",
    category: "Industry Insights",
    date: "2024-11-05",
    author: "Research Team",
    source: "Industry Reports",
    description: "Our latest industry report explores the transformative impact of AI on enterprise technology and provides insights into future trends.",
    content: "Zion Tech Group has released our comprehensive industry report on 'The Future of AI in Enterprise Technology.' This detailed analysis explores how artificial intelligence is transforming enterprise operations...",
    readTime: "8 min read",
    views: 1876,
    tags: ["Industry Report", "AI", "Enterprise", "Trends"],
    image: "/api/placeholder/400/250",
    isFeatured: false,
    isBreaking: false
  }
];

const categories = [
  'All',
  'Company News',
  'Product Updates',
  'Industry Insights',
  'Awards & Recognition',
  'Partnerships',
  'Research & Development',
  'Market Trends'
];

const sources = [
  'All Sources',
  'Company Press Releases',
  'Industry Reports',
  'Technology News',
  'Research Papers',
  'Partner Updates',
  'Customer Success Stories'
];

const timeframes = [
  'All Time',
  'Last 24 Hours',
  'Last Week',
  'Last Month',
  'Last 3 Months',
  'Last Year'
];

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All Sources');
  const [selectedTimeframe, setSelectedTimeframe] = useState('All Time');

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSource = selectedSource === 'All Sources' || article.source === selectedSource;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSource && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.isFeatured);
  const regularNews = filteredNews.filter(article => !article.isFeatured);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Newspaper className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="text-gradient block">News</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Stay updated with the latest news, product updates, and industry insights 
              from Zion Tech Group. Discover how we're shaping the future of technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Newspaper className="w-4 h-4" />
                <span>{newsArticles.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <TrendingUp className="w-4 h-4" />
                <span>Latest Updates</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Globe className="w-4 h-4" />
                <span>Industry Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300"
              >
                {sources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              Showing {filteredNews.length} of {newsArticles.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Highlighted stories and important updates from Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <div className="text-center">
                      <Newspaper className="w-16 h-16 text-zion-cyan mx-auto mb-2" />
                      <p className="text-zion-slate-light text-sm">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {article.category}
                      </span>
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                        Featured
                      </span>
                      {article.isBreaking && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                          Breaking
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded border border-zion-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6 text-zion-slate-light text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4 text-zion-cyan" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-zion-cyan" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-zion-cyan" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="text-zion-slate-light text-xs">
                          {article.source}
                        </span>
                      </div>
                      
                      <a
                        href={`/news/${article.id}`}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All News</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse through all our latest news articles and stay informed about 
              technology trends, company updates, and industry developments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {article.category}
                  </span>
                  {article.isBreaking && (
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                      Breaking
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{article.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded border border-zion-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-zion-slate-light text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zion-cyan" />
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zion-cyan" />
                    {article.readTime}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-xs">{article.source}</span>
                  <a
                    href={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our News</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest news, product updates, 
              and industry insights directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Newsletter
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Press Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
