<<<<<<< HEAD
import { Link  } from 'react-router-dom.ts';
import { Calendar, Clock, User, ArrowRight, ExternalLink  } from 'lucide-react';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter, 
  Clock,
  TrendingUp,
  Star,
  Eye,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [;
    { id: 'all', name: 'All News', count: 0 },;
    { id: 'ai', name: 'AI & Technology', count: 0 },;
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 0 },;
    { id: 'security', name: 'Security & Compliance', count: 0 },;
    { id: 'quantum', name: 'Quantum Computing', count: 0 },;
    { id: 'company', name: 'Company Updates', count: 0 };
  ];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default function News(...args[]):  {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our latest innovation combines machine learning with advanced threat detection to provide enterprise-grade security solutions.',
      content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI-powered cybersecurity platform. This cutting-edge solution leverages advanced machine learning algorithms to detect and prevent cyber threats in real-time, providing enterprise-grade security for organizations of all sizes.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Product Launch',
      tags['AI', 'Cybersecurity', 'Innovation'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 2,
      title: 'Zion Tech Group Expands Global Operations with New European Office',
      excerpt: 'Strategic expansion into European markets to better serve our growing international client base.',
      content: 'Zion Tech Group is excited to announce the opening of our new European office in London, UK. This strategic expansion will enable us to better serve our growing international client base and strengthen our presence in the European technology market.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '3 min read',
      category: 'Comp News',
      tags['Expansion', 'Global', 'Europe'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 3,
      title: 'The Future of Quantum Computing: Zion Tech Group\'s Research Initiative',
      excerpt: 'Exploring the potential of quantum computing to solve complex computational problems.',
      content: 'Zion Tech Group has launched a groundbreaking research initiative focused on quantum computing applications. Our team of quantum physicists and computer scientists are working to develop practical applications that could revolutionize industries from finance to healthcare.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Research',
      tags['Quantum Computing', 'Research', 'Innovation'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 4,
      title: 'Zion Tech Group Named Top 10 AI Companies to Watch in 2024',
      excerpt: 'Industry recognition for our innovative approach to artificial intelligence and machine learning.',
      content: 'Zion Tech Group has been recognized as one of the top 10 AI companies to watch in 2024 by TechInsights Magazine. This prestigious recognition highlights our innovative approach to artificial intelligence and machine learning solutions.',
      author: 'David Thompson',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Awards',
      tags['Awards', 'AI', 'Recognition'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 5,
      title: 'New Partnership: Zion Tech Group and CloudTech Solutions',
      excerpt: 'Strategic partnership to deliver integrated cloud and AI solutions to enterprise clients.',
      content: 'Zion Tech Group is pleased to announce a strategic partnership with CloudTech Solutions. This collaboration will enable us to deliver integrated cloud and AI solutions to enterprise clients, combining our expertise in artificial intelligence with CloudTech\'s cloud infrastructure capabilities.',
      author: 'Lisa Wang',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Partnerships',
      tags['Partnership', 'Cloud', 'Enterprise'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 6,
<<<<<<< HEAD
      title: 'Zion Tech Group\'s Commitment to Sustainable Technology',
      excerpt: 'How we\'re reducing our carbon footprint while advancing technology innovation.',
      content: 'At Zion Tech Group, we believe that technological advancement and environmental responsibility can go hand in hand. Our commitment to sustainable technology includes energy-efficient data centers, green computing practices, and developing AI solutions that help organizations reduce their environmental impact.',
      author: 'Alex Green',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Sustainability',
      tags['Sustainability', 'Green Tech', 'Environment'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=400';
    };
  ];

  const categories = [
    'All News',
    'Product Launch',
    'Comp News',
    'Research',
    'Awards',
    'Partnerships',;
    'Sustainability';
  ];

  const formatDate = (dateString: string)  => {;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })};

  return (
    <div className = "min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Stay informed about our latest innovations, comp updates, and industry insights
          </p>
=======
      title: 'Edge Computing Solutions for IoT Deployments',
      excerpt: 'New edge computing platform enables real-time processing for IoT devices, reducing latency and improving performance in industrial applications.',
      category: 'cloud',;
      author: 'David Kim',;
      date: '2024-11-18',;
      readTime: '5 min read',;
      featured: false,;
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Industrial'];
    };
  ];

  // Calculate category counts
  categories.forEach(category = > {;
    if (category.id === 'all') {;
      category.count = newsArticles.length;
    } else {
      category.count = newsArticles.filter(article => article.category === category.id).length;
    }
  });

  const filteredArticles = newsArticles.filter(article => {;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <Newspaper className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about the latest developments in AI, quantum computing, cloud technology, and company updates from Zion Tech Group.
              </p>
            </motion.div>
          </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Featured Story
            </h2>
            <p className="text-xl text-zion-slate-light">
              Our most important news and announcements
            </p>
          </div>

<<<<<<< HEAD
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
=======
        {/* Featured Articles */}
        {filteredArticles.filter(article => article.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.filter(article => article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  animate = {
  { opacity: 1,
  y: 0 






}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {article.category.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <a href={`/news/${article.id}`}>{article.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All News' : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          <div className="space-y-6">
            {filteredArticles.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {article.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      <a href={`/news/${article.id}`}>{article.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <a
                          href={`/news/${article.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-zion-slate-dark mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-zion-slate-light/20 text-zion-slate-dark px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-semibold transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-zion-slate-light">
              Find the news that matters most to you
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white text-zion-slate-dark rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors duration-300 shadow-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* All News Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              All News
            </h2>
            <p className="text-xl text-zion-slate-light">
              Stay up to date with everything happening at Zion Tech Group
=======
        {/* Newsletter Signup */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates from Zion Tech Group.
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article  => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zion-slate-dark mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    
                    <Link
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-medium text-sm transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest news, insights, and updates
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-zion-purple px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
<<<<<<< HEAD
            </div>
            <p className="text-sm text-white/70 mt-3">
              We respect your privacy. Unsubscribe at  time.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">
            Follow Us
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Get real-time updates and behind-the-scenes content
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/company/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-blue-600 font-semibold">LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-zion-slate-light" />
            </a>
            
            <a
              href="https://twitter.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-blue-400 font-semibold">Twitter</span>
              <ExternalLink className="w-4 h-4 text-zion-slate-light" />
            </a>
            
            <a
              href="https://facebook.com/ziontechgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-blue-600 font-semibold">Facebook</span>
              <ExternalLink className="w-4 h-4 text-zion-slate-light" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )};
=======;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
