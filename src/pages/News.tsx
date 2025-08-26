import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Newspaper,
  Award,
  TrendingUp,
  Globe,
  Building
} from 'lucide-react';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 18 },
    { id: 'company', name: 'Company News', count: 6 },
    { id: 'partnerships', name: 'Partnerships', count: 4 },
    { id: 'awards', name: 'Awards & Recognition', count: 3 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'industry', name: 'Industry Insights', count: 2 }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Named Top AI Solutions Provider 2025',
      excerpt: 'Leading technology research firm recognizes Zion Tech Group for excellence in AI-powered business solutions and innovation.',
      category: 'awards',
      author: 'Press Team',
      date: '2025-01-20',
      readTime: '3 min read',
      views: '5.2k',
      tags: ['Award', 'AI', 'Recognition', '2025'],
      featured: true,
      type: 'Press Release'
    },
    {
      id: 2,
      title: 'Strategic Partnership with Microsoft Announced',
      excerpt: 'Zion Tech Group and Microsoft join forces to deliver cutting-edge AI and cloud solutions to enterprise clients worldwide.',
      category: 'partnerships',
      author: 'Business Development',
      date: '2025-01-18',
      readTime: '4 min read',
      views: '4.8k',
      tags: ['Partnership', 'Microsoft', 'AI', 'Cloud'],
      featured: false,
      type: 'Company News'
    },
    {
      id: 3,
      title: 'New Quantum Computing Division Launched',
      excerpt: 'Zion Tech Group establishes dedicated quantum computing division to accelerate research and development in quantum technologies.',
      category: 'technology',
      author: 'Technology Team',
      date: '2025-01-15',
      readTime: '5 min read',
      views: '3.9k',
      tags: ['Quantum Computing', 'Innovation', 'Technology', 'R&D'],
      featured: false,
      type: 'Company News'
    },
    {
      id: 4,
      title: 'Global Expansion: New Offices in London and Tokyo',
      excerpt: 'Zion Tech Group expands international presence with new offices in key technology hubs to better serve global clients.',
      category: 'company',
      author: 'Operations Team',
      date: '2025-01-12',
      readTime: '4 min read',
      views: '3.2k',
      tags: ['Expansion', 'Global', 'London', 'Tokyo'],
      featured: false,
      type: 'Company News'
    },
    {
      id: 5,
      title: 'Record Revenue Growth in Q4 2024',
      excerpt: 'Zion Tech Group reports exceptional financial performance with 45% year-over-year revenue growth in the fourth quarter.',
      category: 'company',
      author: 'Finance Team',
      date: '2025-01-10',
      readTime: '3 min read',
      views: '4.1k',
      tags: ['Financial', 'Growth', 'Q4 2024', 'Revenue'],
      featured: false,
      type: 'Company News'
    },
    {
      id: 6,
      title: 'Partnership with Stanford University for AI Research',
      excerpt: 'Collaborative research initiative focuses on ethical AI development and autonomous systems research.',
      category: 'partnerships',
      author: 'Research Team',
      date: '2025-01-08',
      readTime: '6 min read',
      views: '2.8k',
      tags: ['Research', 'Stanford', 'AI Ethics', 'Collaboration'],
      featured: false,
      type: 'Press Release'
    },
    {
      id: 7,
      title: 'Cybersecurity Innovation Award Received',
      excerpt: 'Zion Tech Group recognized for breakthrough cybersecurity solutions at annual industry conference.',
      category: 'awards',
      author: 'Security Team',
      date: '2025-01-05',
      readTime: '3 min read',
      views: '2.5k',
      tags: ['Cybersecurity', 'Award', 'Innovation', 'Security'],
      featured: false,
      type: 'Company News'
    },
    {
      id: 8,
      title: 'New AI-Powered Platform Launch',
      excerpt: 'Revolutionary AI platform designed to automate complex business processes and decision-making.',
      category: 'technology',
      author: 'Product Team',
      date: '2025-01-03',
      readTime: '5 min read',
      views: '3.7k',
      tags: ['AI Platform', 'Automation', 'Product Launch', 'Innovation'],
      featured: false,
      type: 'Product News'
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const filteredNews = selectedCategory === 'all' 
    ? regularNews 
    : regularNews.filter(item => item.category === selectedCategory);

  const searchFilteredNews = filteredNews.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      company: 'from-blue-500 to-cyan-500',
      partnerships: 'from-green-500 to-emerald-500',
      awards: 'from-yellow-500 to-orange-500',
      technology: 'from-purple-500 to-pink-500',
      industry: 'from-indigo-500 to-blue-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Company News
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Stay updated with the latest news, announcements, and developments 
            from Zion Tech Group.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-gray-300">Latest company announcements and updates</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                      {featuredNews.type}
                    </span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(featuredNews.category)} text-white text-sm rounded-full`}>
                      {featuredNews.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredNews.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{featuredNews.excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredNews.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(featuredNews.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredNews.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-2" />
                      {featuredNews.views} views
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/news/${featuredNews.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Newspaper className="h-24 w-24 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-gray-300">Stay informed with our latest company updates and industry insights</p>
          </div>
          
          {searchFilteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchFilteredNews.map((item) => (
                <article key={item.id} className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs rounded-full`}>
                        {item.category.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {item.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-gray-400">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {item.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(item.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.readTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No news found matching your search criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Company Highlights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones and achievements that define our journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">15+ Awards</h3>
              <p className="text-gray-300 text-sm">Industry recognition for innovation and excellence</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Globe className="h-16 w-16 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">25+ Countries</h3>
              <p className="text-gray-300 text-sm">Global presence and international reach</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Building className="h-16 w-16 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">500+ Clients</h3>
              <p className="text-gray-300 text-sm">Trusted by businesses worldwide</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">45% Growth</h3>
              <p className="text-gray-300 text-sm">Year-over-year revenue growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Press Resources</h2>
          <p className="text-xl text-gray-300 mb-8">
            Journalists and media professionals can access our press kit, 
            company information, and media contacts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Press Team
            </Link>
            <Link
              to="/about"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Company Information
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest company news and announcements delivered to your inbox. 
            Never miss an important update from Zion Tech Group.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;