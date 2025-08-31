import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  DollarSign,
  Users2,
  Lightbulb,
  Handshake,
  BookOpen,
  Video,
  PenTool,
  Palette,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Navigation,
  Compass2,
  Map,
  Location,
  Home,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star2,
  Heart2,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Tongue,
  Kiss,
  Wink2,
  Grin,
  Joy,
  Sunglasses,
  Confused,
  Neutral,
  Expressionless,
  Unamused,
  RollingEyes,
  Zany,
  Hugging,
  Nerd,
  Cool,
  Party,
  Sleepy,
  Sick,
  Vomiting,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  PregnantWoman,
  BreastFeeding,
  PersonWithTurban,
  PersonWithSkullcap,
  WomanWithHeadscarf,
  PersonWithVeil,
  PersonWithCrown,
  PersonWithTiara,
  PersonWithGraduationCap,
  PersonWithTuxedo,
  PersonWithDress,
  PersonWithSuit,
  PersonWithTurban2,
  PersonWithSkullcap2,
  WomanWithHeadscarf2,
  PersonWithVeil2,
  PersonWithCrown2,
  PersonWithTiara2,
  PersonWithGraduationCap2,
  PersonWithTuxedo2,
  PersonWithDress2,
  PersonWithSuit2,
  Cloud,
  Wifi,
  Link,
  Truck,
  MessageCircle,
  Tag,
  User,
  Eye as EyeIcon,
  MessageCircle as MessageCircleIcon,
  Share2,
  Bookmark,
  ExternalLink,
  Play,
  Mic,
  Camera,
  FileText,
  Image
} from 'lucide-react';

export function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in Quantum AI Integration',
      excerpt: 'Our research team has successfully developed a hybrid quantum-classical AI system that demonstrates unprecedented performance in complex optimization problems.',
      type: 'Press Release',
      publishDate: '2025-01-20',
      author: 'Zion Tech Group',
      category: 'Company News',
      tags: ['Quantum Computing', 'AI', 'Innovation', 'Research'],
      image: '/images/news/quantum-ai-breakthrough.jpg',
      featured: true,
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Top 10 AI Innovation Company by TechReview 2025',
      excerpt: 'Leading technology publication recognizes our contributions to artificial intelligence and machine learning innovation.',
      type: 'Award',
      publishDate: '2025-01-18',
      author: 'Zion Tech Group',
      category: 'Recognition',
      tags: ['Award', 'AI', 'Innovation', 'Recognition'],
      image: '/images/news/top-10-ai-company.jpg',
      featured: true,
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'New Partnership with Global Healthcare Consortium Announced',
      excerpt: 'Strategic collaboration to develop AI-powered healthcare solutions for improved patient outcomes and operational efficiency.',
      type: 'Partnership',
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      category: 'Partnerships',
      tags: ['Healthcare', 'Partnership', 'AI', 'Innovation'],
      image: '/images/news/healthcare-partnership.jpg',
      featured: true,
      readTime: '4 min read'
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: 'Zion Tech Group Expands European Operations with New Office in Berlin',
      excerpt: 'Strategic expansion to better serve our growing European client base and tap into the region\'s thriving tech ecosystem.',
      type: 'Company Update',
      publishDate: '2025-01-12',
      author: 'Zion Tech Group',
      category: 'Company News',
      tags: ['Expansion', 'Europe', 'Growth', 'International'],
      image: '/images/news/berlin-office-expansion.jpg',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'New AI-Powered Cybersecurity Platform Launches',
      excerpt: 'Revolutionary security solution combines machine learning with advanced threat detection for enterprise-grade protection.',
      type: 'Product Launch',
      publishDate: '2025-01-10',
      author: 'Zion Tech Group',
      category: 'Product News',
      tags: ['Cybersecurity', 'AI', 'Product Launch', 'Security'],
      image: '/images/news/ai-cybersecurity-platform.jpg',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Zion Tech Group CEO Kleber Santos Featured in Forbes Technology',
      excerpt: 'Exclusive interview discussing the future of AI, quantum computing, and digital transformation in enterprise.',
      type: 'Media Coverage',
      publishDate: '2025-01-08',
      author: 'Forbes Technology',
      category: 'Media',
      tags: ['Media Coverage', 'CEO', 'AI', 'Technology'],
      image: '/images/news/forbes-interview.jpg',
      readTime: '2 min read'
    },
    {
      id: 7,
      title: 'Annual Sustainability Report 2024 Released',
      excerpt: 'Comprehensive overview of our environmental initiatives and commitment to sustainable technology development.',
      type: 'Report',
      publishDate: '2025-01-05',
      author: 'Zion Tech Group',
      category: 'Sustainability',
      tags: ['Sustainability', 'Report', 'Environment', 'ESG'],
      image: '/images/news/sustainability-report-2024.jpg',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Zion Tech Group Sponsors Major Quantum Computing Conference',
      excerpt: 'Supporting the advancement of quantum technologies through sponsorship of the International Quantum Computing Summit.',
      type: 'Event',
      publishDate: '2025-01-03',
      author: 'Zion Tech Group',
      category: 'Events',
      tags: ['Event', 'Quantum Computing', 'Sponsorship', 'Conference'],
      image: '/images/news/quantum-conference-sponsorship.jpg',
      readTime: '3 min read'
    },
    {
      id: 9,
      title: 'New Research Paper on AI Ethics Published',
      excerpt: 'Groundbreaking research on responsible AI development and ethical considerations in artificial intelligence.',
      type: 'Research',
      publishDate: '2024-12-28',
      author: 'Dr. Sarah Chen',
      category: 'Research',
      tags: ['Research', 'AI Ethics', 'Responsible AI', 'Academic'],
      image: '/images/news/ai-ethics-research.jpg',
      readTime: '8 min read'
    }
  ];

  const newsCategories = [
    { name: 'Company News', count: 8, icon: Building },
    { name: 'Product News', count: 5, icon: Rocket },
    { name: 'Partnerships', count: 4, icon: Handshake },
    { name: 'Research', count: 6, icon: TestTube },
    { name: 'Awards', count: 3, icon: Award },
    { name: 'Events', count: 4, icon: Calendar },
    { name: 'Media Coverage', count: 7, icon: Newspaper },
    { name: 'Sustainability', count: 2, icon: Leaf }
  ];

  const newsTypes = [
    { name: 'Press Release', icon: FileText, color: 'text-blue-400' },
    { name: 'Product Launch', icon: Rocket, color: 'text-green-400' },
    { name: 'Partnership', icon: Handshake, color: 'text-purple-400' },
    { name: 'Award', icon: Award, color: 'text-yellow-400' },
    { name: 'Research', icon: TestTube, color: 'text-cyan-400' },
    { name: 'Event', icon: Calendar, color: 'text-pink-400' },
    { name: 'Media Coverage', icon: Newspaper, color: 'text-orange-400' },
    { name: 'Company Update', icon: Building, color: 'text-indigo-400' }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getNewsTypeIcon = (type: string) => {
    const newsType = newsTypes.find(nt => nt.name === type);
    return newsType ? newsType.icon : FileText;
  };

  const getNewsTypeColor = (type: string) => {
    const newsType = newsTypes.find(nt => nt.name === type);
    return newsType ? newsType.color : 'text-zion-slate-light';
  };

  const NewsCard = ({ news, featured = false }: { news: any; featured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group ${featured ? 'lg:col-span-2' : ''} bg-zion-slate-darker rounded-lg border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden`}
    >
      <div className="relative">
        <div className="aspect-video bg-zion-slate-dark flex items-center justify-center">
          <div className="text-zion-cyan text-4xl">📷</div>
        </div>
        {featured && (
          <div className="absolute top-4 left-4 bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-zion-slate-dark/80 ${getNewsTypeColor(news.type)}`}>
            {news.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xs text-zion-cyan font-semibold">{news.category}</span>
          <span className="text-xs text-zion-slate-light">•</span>
          <span className="text-xs text-zion-slate-light">{news.readTime}</span>
        </div>
        
        <h3 className={`font-bold mb-3 group-hover:text-zion-cyan transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {news.title}
        </h3>
        
        <p className="text-zion-slate-light mb-4 line-clamp-3">{news.excerpt}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-zion-cyan" />
            </div>
            <div>
              <div className="text-sm font-semibold">{news.author}</div>
              <div className="text-xs text-zion-slate-light">{formatDate(news.publishDate)}</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {news.tags.slice(0, 3).map((tag: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-zion-slate-dark border border-zion-purple/20 rounded-full text-xs text-zion-slate-light">
                {tag}
              </span>
            ))}
          </div>
          <Link 
            to={`/news/${news.id}`}
            className="text-zion-cyan hover:text-zion-cyan/80 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
          >
            Read More
            <ArrowRight className="inline h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-slate-darker to-zion-slate-dark"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Zion Tech <span className="text-zion-cyan">News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Stay updated with the latest company news, product launches, partnerships, and industry insights.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Subscribe to News
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Media Inquiries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured News</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our most important announcements and breakthrough developments.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <NewsCard key={news.id} news={news} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6">Latest News</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {recentNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Search */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-4">Search News</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search news..."
                      className="w-full pl-10 pr-4 py-2 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                    />
                  </div>
                </div>

                {/* News Types */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-4">News Types</h3>
                  <div className="space-y-3">
                    {newsTypes.map((type) => (
                      <div key={type.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zion-slate-darker transition-colors">
                        <type.icon className={`h-4 w-4 ${type.color}`} />
                        <span className="text-sm">{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-3">
                    {newsCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={`/news/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-zion-slate-darker transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-4 w-4 text-zion-cyan" />
                          <span className="group-hover:text-zion-cyan transition-colors">{category.name}</span>
                        </div>
                        <span className="text-sm text-zion-slate-light bg-zion-slate-darker px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-3">Stay Informed</h3>
                  <p className="text-sm text-zion-slate-light mb-4">
                    Get the latest news and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                    />
                    <button className="w-full px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Press Kit */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-3">Press Resources</h3>
                  <div className="space-y-3">
                    <Link to="/press-kit" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-slate-darker transition-colors group">
                      <FileText className="h-4 w-4 text-zion-cyan" />
                      <span className="group-hover:text-zion-cyan transition-colors">Press Kit</span>
                    </Link>
                    <Link to="/media-assets" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-slate-darker transition-colors group">
                      <Image className="h-4 w-4 text-zion-cyan" />
                      <span className="group-hover:text-zion-cyan transition-colors">Media Assets</span>
                    </Link>
                    <Link to="/contact" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-slate-darker transition-colors group">
                      <Mail className="h-4 w-4 text-zion-cyan" />
                      <span className="group-hover:text-zion-cyan transition-colors">Media Inquiries</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Stay Connected
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zion-slate-light mb-8"
          >
            Follow us on social media and subscribe to our newsletter for the latest updates and insights.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Contact Media Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
