import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOOptimizer2025 from '../components/SEOOptimizer2025';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  User, 
  Tag, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Brain,
  Rocket,
  Target,
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts, getBlogCategories } from '../data/blog-posts';

const UltimateContentShowcase2025 = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('featured');

  useEffect(() => {
    setFeaturedPosts(getFeaturedBlogPosts());
    setRecentPosts(getRecentBlogPosts(6));
    setCategories(getBlogCategories());
  }, []);

  const contentSections = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      description: 'Discover the latest breakthroughs in artificial intelligence that are reshaping our world',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('ai')))
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Explore the quantum realm and its revolutionary applications',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('quantum')))
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Fortress',
      description: 'Protect your digital assets with cutting-edge security solutions',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('security')))
    },
    {
      id: 'sustainability',
      title: 'Green Technology',
      description: 'Building a sustainable future through innovative technology',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('green') || tag.toLowerCase().includes('sustainable')))
    }
  ];

  const stats = [
    { label: 'Total Articles', value: '48+', icon: BookOpen },
    { label: 'Categories', value: '12+', icon: Tag },
    { label: 'Featured Content', value: '25+', icon: Star },
    { label: 'Expert Authors', value: '15+', icon: User }
  ];

  const features = [
    {
      title: 'Expert Insights',
      description: 'Content written by industry leaders and technology experts',
      icon: Award
    },
    {
      title: 'Latest Trends',
      description: 'Stay ahead with cutting-edge technology insights',
      icon: TrendingUp
    },
    {
      title: 'Practical Guides',
      description: 'Actionable strategies you can implement today',
      icon: Target
    },
    {
      title: 'Future Vision',
      description: 'Explore tomorrow\'s technology today',
      icon: Rocket
    }
  ];

  return (
    <>
      <SEOOptimizer2025
        title="Ultimate Tech Showcase 2025 - Revolutionary Technology Insights"
        description="Discover the most comprehensive collection of technology insights, AI breakthroughs, and future innovations. Stay ahead with expert analysis and cutting-edge research."
        keywords={[
          "AI Revolution 2025",
          "Quantum Computing",
          "Cybersecurity",
          "Green Technology",
          "Business Automation",
          "Cloud Computing",
          "Technology Trends",
          "Innovation",
          "Digital Transformation",
          "Future Tech"
        ]}
        canonicalUrl="https://yourdomain.com/ultimate-content-showcase-2025"
        ogImage="/images/og-ultimate-tech-showcase-2025.jpg"
        articleAuthor="Tech Innovation Team"
        articleSection="Technology"
        articleTags={["Technology", "AI", "Innovation", "Future Tech", "Showcase"]}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Content
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover the most comprehensive collection of technology insights, 
              AI breakthroughs, and future innovations
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[120px]"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Explore Content
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Latest
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Content Categories
            </h2>
            <p className="text-xl text-gray-300">
              Dive deep into specialized technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <div className="flex items-center text-purple-400 font-semibold">
                  <span>{section.posts.length} Articles</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-300">
              Handpicked articles showcasing the latest in technology innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 6).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-yellow-400 flex items-center">
                      <Star className="w-4 h-4 fill-current" />
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <span>{post.publishDate}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Content?
            </h2>
            <p className="text-xl text-gray-300">
              Quality insights that drive innovation and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Knowledge?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already leveraging our insights 
              to stay ahead in the rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Start Reading Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Get Notified
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default UltimateContentShowcase2025;