import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  TrendingUp,
  Award,
  Rocket,
  Brain,
  Shield,
  Code,
  Globe,
  Zap,
  Lightbulb,
  Target,
  Users,
  Building,
  Star
} from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 25, icon: FileText },
    { id: 'company', name: 'Company Updates', count: 8, icon: Building },
    { id: 'technology', name: 'Technology', count: 10, icon: Code },
    { id: 'ai', name: 'AI & Innovation', count: 12, icon: Brain },
    { id: 'partnerships', name: 'Partnerships', count: 5, icon: Users },
    { id: 'awards', name: 'Awards & Recognition', count: 3, icon: Award }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Simulator',
      excerpt: 'Breakthrough technology that simulates human consciousness using quantum computing and advanced neural networks.',
      content: 'Zion Tech Group has achieved a major breakthrough in artificial intelligence with the launch of our revolutionary AI Consciousness Simulator. This cutting-edge technology combines quantum computing with advanced neural networks to create the most sophisticated consciousness simulation ever developed...',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/news/ai-consciousness-simulator.jpg',
      tags: ['AI', 'Consciousness', 'Quantum Computing', 'Breakthrough'],
      featured: true,
      views: 15420
    },
    {
      id: 2,
      title: 'Zion Tech Group Named "AI Innovator of the Year" 2025',
      excerpt: 'Recognition for our groundbreaking work in autonomous AI systems and quantum computing solutions.',
      content: 'Zion Tech Group has been honored with the prestigious "AI Innovator of the Year" award for 2025. This recognition celebrates our groundbreaking work in autonomous AI systems, quantum computing solutions, and our commitment to pushing the boundaries of what\'s possible in technology...',
      category: 'awards',
      author: 'Marketing Team',
      date: '2025-01-10',
      readTime: '3 min read',
      image: '/news/ai-innovator-award.jpg',
      tags: ['Award', 'Recognition', 'AI Innovation', 'Excellence'],
      featured: true,
      views: 12850
    },
    {
      id: 3,
      title: 'Strategic Partnership with Global Tech Leaders Announced',
      excerpt: 'New partnerships to accelerate innovation and expand our global technology ecosystem.',
      content: 'Zion Tech Group is excited to announce strategic partnerships with several global technology leaders. These collaborations will accelerate innovation, expand our technology ecosystem, and enable us to deliver even more powerful solutions to our clients worldwide...',
      category: 'partnerships',
      author: 'Lisa Park',
      date: '2025-01-08',
      readTime: '4 min read',
      image: '/news/strategic-partnerships.jpg',
      tags: ['Partnerships', 'Global Expansion', 'Innovation', 'Collaboration'],
      featured: false,
      views: 9870
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthrough: 1000x Performance Improvement',
      excerpt: 'Our quantum computing team achieves unprecedented performance improvements in algorithm optimization.',
      content: 'Zion Tech Group\'s quantum computing research team has achieved a major breakthrough, delivering 1000x performance improvements in algorithm optimization. This advancement opens new possibilities for complex problem-solving in fields ranging from drug discovery to financial modeling...',
      category: 'technology',
      author: 'Dr. James Kim',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/news/quantum-breakthrough.jpg',
      tags: ['Quantum Computing', 'Performance', 'Breakthrough', 'Research'],
      featured: false,
      views: 11230
    },
    {
      id: 5,
      title: 'New Office Opening in Amsterdam: European Expansion',
      excerpt: 'Expanding our European presence to better serve our growing client base across the continent.',
      content: 'Zion Tech Group is expanding its European presence with the opening of a new office in Amsterdam. This strategic location will enable us to better serve our growing client base across Europe and strengthen our partnerships with European technology leaders...',
      category: 'company',
      author: 'HR Team',
      date: '2025-01-03',
      readTime: '3 min read',
      image: '/news/amsterdam-office.jpg',
      tags: ['Expansion', 'Europe', 'Amsterdam', 'Growth'],
      featured: false,
      views: 7560
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity Platform Launches',
      excerpt: 'Revolutionary cybersecurity solution that uses AI to predict and prevent threats in real-time.',
      content: 'Zion Tech Group has launched a revolutionary AI-powered cybersecurity platform that represents a paradigm shift in threat detection and prevention. Our platform uses advanced machine learning algorithms to predict and prevent cyber threats before they can cause damage...',
      category: 'technology',
      author: 'Marcus Rodriguez',
      date: '2024-12-28',
      readTime: '5 min read',
      image: '/news/ai-cybersecurity.jpg',
      tags: ['Cybersecurity', 'AI', 'Threat Prevention', 'Innovation'],
      featured: false,
      views: 8930
    },
    {
      id: 7,
      title: 'Zion Tech Group Joins World Economic Forum Technology Pioneers',
      excerpt: 'Recognition as a technology pioneer for our contributions to AI and quantum computing.',
      content: 'Zion Tech Group has been selected to join the World Economic Forum\'s Technology Pioneers community. This prestigious recognition celebrates our contributions to AI and quantum computing, and our commitment to using technology to solve global challenges...',
      category: 'awards',
      author: 'Executive Team',
      date: '2024-12-25',
      readTime: '4 min read',
      image: '/news/wef-pioneers.jpg',
      tags: ['World Economic Forum', 'Technology Pioneers', 'Global Recognition', 'Innovation'],
      featured: false,
      views: 6540
    },
    {
      id: 8,
      title: 'New Research Collaboration with MIT Announced',
      excerpt: 'Partnership with MIT to advance research in autonomous AI systems and consciousness simulation.',
      content: 'Zion Tech Group is excited to announce a new research collaboration with the Massachusetts Institute of Technology (MIT). This partnership will focus on advancing research in autonomous AI systems and consciousness simulation, combining our expertise with MIT\'s world-class research capabilities...',
      category: 'partnerships',
      author: 'Research Team',
      date: '2024-12-20',
      readTime: '4 min read',
      image: '/news/mit-collaboration.jpg',
      tags: ['MIT', 'Research', 'Collaboration', 'AI Research'],
      featured: false,
      views: 7890
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Latest
              <span className="block text-zion-cyan">News & Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Stay informed about Zion Tech Group's latest innovations, breakthroughs, 
              and industry insights. Discover the future of technology as it happens.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>25+ Articles</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>100K+ Views</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>Featured Stories</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/20'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Stories</h2>
              <p className="text-zion-slate-light">Our most important and impactful news</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                    {/* Article Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-zion-cyan" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {article.author}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">
                          {article.views.toLocaleString()} views
                        </span>
                        <button className="flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-zion-slate-light">Stay updated with our latest developments and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                  {/* Article Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-zion-cyan" />
                  </div>
                  
                  <div className="p-6 flex-1">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-zion-slate-light text-sm">
                        {article.views.toLocaleString()} views
                      </span>
                      <button className="flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get the latest news, insights, and breakthroughs delivered directly to your inbox. 
              Never miss an important update from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
