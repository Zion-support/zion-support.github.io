import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter,
  Globe,
  Brain,
  Shield,
  Cloud,
  Zap,
  TrendingUp,
  Award,
  Users,
  Building,
  Lightbulb,
  BookOpen,
  ExternalLink
} from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: Globe, count: 25 },
    { id: 'company', name: 'Company News', icon: Building, count: 8 },
    { id: 'technology', name: 'Technology', icon: Brain, count: 6 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 5 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 3 },
    { id: 'partnerships', name: 'Partnerships', icon: Users, count: 3 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in Quantum AI Research',
      excerpt: 'Our research team has achieved a significant milestone in developing hybrid quantum-classical neural networks, potentially revolutionizing AI computing capabilities.',
      content: 'Zion Tech Group is proud to announce a major breakthrough in our quantum AI research program. Our team of researchers has successfully developed a hybrid quantum-classical neural network architecture that demonstrates unprecedented performance in complex computational tasks. This breakthrough represents a significant step forward in the field of quantum machine learning and opens new possibilities for solving previously intractable problems.',
      category: 'technology',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Research Officer',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Quantum Computing', 'AI Research', 'Breakthrough', 'Innovation'],
      featured: true,
      views: 15420,
      shares: 892
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      excerpt: 'We are honored to receive the prestigious Tech Innovation Award for our contributions to artificial intelligence and machine learning.',
      content: 'Zion Tech Group has been recognized as the Top AI Company at the prestigious Tech Innovation Awards ceremony held in San Francisco. This recognition highlights our commitment to advancing artificial intelligence technology and our track record of delivering innovative solutions to complex business challenges. The award committee specifically noted our work in autonomous systems and predictive analytics as groundbreaking achievements.',
      category: 'awards',
      author: 'Michael Rodriguez',
      authorRole: 'CEO',
      publishDate: '2024-01-12',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Award', 'Recognition', 'AI Leadership', 'Innovation'],
      featured: false,
      views: 8920,
      shares: 456
    },
    {
      id: 3,
      title: 'Strategic Partnership Announced with MIT Computer Science Lab',
      excerpt: 'We are excited to announce a groundbreaking partnership with MIT CSAIL to advance research in autonomous systems and cybersecurity.',
      content: 'Zion Tech Group is thrilled to announce a strategic research partnership with the Massachusetts Institute of Technology Computer Science and Artificial Intelligence Laboratory (MIT CSAIL). This collaboration will focus on advancing research in autonomous systems, cybersecurity, and next-generation AI algorithms. The partnership will combine our industry expertise with MIT\'s world-class research capabilities to accelerate innovation in these critical areas.',
      category: 'partnerships',
      author: 'Dr. Emily Watson',
      authorRole: 'VP of Research',
      publishDate: '2024-01-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Partnership', 'MIT', 'Research', 'Collaboration'],
      featured: false,
      views: 12450,
      shares: 678
    },
    {
      id: 4,
      title: 'New Office Opening in Singapore to Serve APAC Markets',
      excerpt: 'Expanding our global presence with a new office in Singapore to better serve our growing client base in the Asia-Pacific region.',
      content: 'Zion Tech Group is expanding its global footprint with the opening of a new office in Singapore. This strategic expansion will enable us to better serve our growing client base in the Asia-Pacific region and strengthen our presence in one of the world\'s most dynamic technology markets. The Singapore office will focus on AI solutions, cybersecurity services, and digital transformation consulting.',
      category: 'company',
      author: 'Jennifer Lee',
      authorRole: 'VP of International Operations',
      publishDate: '2024-01-08',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Expansion', 'Singapore', 'APAC', 'Global Growth'],
      featured: false,
      views: 7560,
      shares: 234
    },
    {
      id: 5,
      title: 'Industry Report: The Future of AI in Healthcare',
      excerpt: 'Our latest industry report explores how artificial intelligence is transforming healthcare delivery and improving patient outcomes.',
      content: 'Zion Tech Group has released its comprehensive industry report on "The Future of AI in Healthcare," analyzing current trends and predicting the evolution of AI-powered healthcare solutions. The report covers key areas including diagnostic AI, predictive analytics, personalized medicine, and operational efficiency. Our research indicates that AI adoption in healthcare could save up to $150 billion annually while significantly improving patient outcomes.',
      category: 'industry',
      author: 'Dr. Robert Kim',
      authorRole: 'Industry Analyst',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare', 'AI Report', 'Industry Analysis', 'Research'],
      featured: false,
      views: 18920,
      shares: 1234
    },
    {
      id: 6,
      title: 'Zion Tech Group Launches New Cybersecurity Platform',
      excerpt: 'Introducing our next-generation cybersecurity platform featuring AI-powered threat detection and automated response capabilities.',
      content: 'Zion Tech Group is proud to announce the launch of our next-generation cybersecurity platform, ZionShield Pro. This innovative platform combines advanced AI algorithms with real-time threat intelligence to provide comprehensive protection against evolving cyber threats. Key features include automated threat detection, intelligent response systems, and predictive analytics for proactive security management.',
      category: 'technology',
      author: 'Alex Thompson',
      authorRole: 'VP of Cybersecurity',
      publishDate: '2024-01-03',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Cybersecurity', 'Platform Launch', 'AI Security', 'Innovation'],
      featured: false,
      views: 11230,
      shares: 567
    },
    {
      id: 7,
      title: 'Employee Spotlight: Meet Our AI Research Team',
      excerpt: 'Get to know the brilliant minds behind our AI innovations and learn about their groundbreaking work.',
      content: 'In this special feature, we shine a spotlight on our exceptional AI research team, whose innovative work is driving the future of artificial intelligence. Meet the researchers, engineers, and scientists who are pushing the boundaries of what\'s possible in AI, from developing advanced neural networks to creating autonomous systems that can learn and adapt in real-time.',
      category: 'company',
      author: 'Maria Garcia',
      authorRole: 'HR Director',
      publishDate: '2024-01-01',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Team Spotlight', 'AI Research', 'Innovation', 'Company Culture'],
      featured: false,
      views: 6780,
      shares: 345
    },
    {
      id: 8,
      title: 'The Rise of Edge Computing: Industry Trends and Opportunities',
      excerpt: 'Exploring the growing importance of edge computing and how it\'s reshaping the technology landscape.',
      content: 'Edge computing is rapidly emerging as a critical technology trend that\'s reshaping how we process and analyze data. Our latest industry analysis explores the growing importance of edge computing, its applications across various sectors, and the opportunities it presents for businesses looking to optimize their operations. We examine key trends, challenges, and future developments in this exciting field.',
      category: 'industry',
      author: 'David Chen',
      authorRole: 'Technology Analyst',
      publishDate: '2023-12-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Edge Computing', 'Industry Trends', 'Technology', 'Analysis'],
      featured: false,
      views: 9450,
      shares: 456
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Stay updated with the latest news, insights, and developments from Zion Tech Group. 
            Discover our innovations, industry perspectives, and company milestones.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search news and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-slate-light/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                      : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredNews.filter(article => article.featured).length > 0 && (
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark rounded-2xl overflow-hidden"
            >
              {filteredNews.filter(article => article.featured).map((article) => (
                <div key={article.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan-dark/80 to-zion-blue-dark/80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  {/* Featured Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishDate)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {article.title}
                    </h2>
                    
                    <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white font-medium">{article.author}</span>
                        <span className="text-zion-slate-light text-sm">• {article.authorRole}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/news/${article.id}`}
                      className="inline-flex items-center gap-2 bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.publishDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white text-sm font-medium">{article.author}</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-slate-light/10 text-zion-slate-light text-xs rounded-full border border-zion-slate-light/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">
                    <span>{article.views.toLocaleString()} views</span>
                    <span>{article.shares} shares</span>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-white mb-2">No news articles found</h3>
              <p className="text-zion-slate-light mb-6">
                No articles match your search criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-bold rounded-xl hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                View All News
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates 
              from Zion Tech Group directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-white/50 transition-colors duration-300"
              />
              <button className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate-dark p-12 rounded-2xl border border-zion-slate-light/20"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Have questions about our news or want to learn more about Zion Tech Group? 
              Our team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-zion-cyan text-white hover:bg-zion-cyan-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
