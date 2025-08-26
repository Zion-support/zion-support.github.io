import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  NewspaperIcon,
  TrendingUpIcon as TrendingUp,
  LightbulbIcon,
  StarIcon,
  GlobeAltIcon as Globe,
  ShieldCheckIcon as Shield,
  BoltIcon as Zap,
  HeartIcon
} from '@heroicons/react/24/outline';

const News: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
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
  Globe
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
=======
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 67 },
    { id: 'company', name: 'Company News', icon: Building, count: 23 },
    { id: 'technology', name: 'Technology', icon: Zap, count: 18 },
    { id: 'partnerships', name: 'Partnerships', icon: Globe, count: 12 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 8 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 6 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 67 },
    { id: '2025', name: '2025', count: 23 },
    { id: '2024', name: '2024', count: 28 },
    { id: '2023', name: '2023', count: 16 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum Neural Network Platform",
      excerpt: "The company introduces a breakthrough quantum computing solution that combines neural networks with quantum processing for unprecedented computational power.",
      content: "Zion Tech Group today announced the launch of its revolutionary Quantum Neural Network Platform, marking a significant milestone in the convergence of quantum computing and artificial intelligence. This breakthrough technology represents a paradigm shift in computational capabilities, enabling organizations to solve complex problems that were previously impossible with classical computing methods...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-20",
      readTime: "5 min read",
      category: "technology",
      tags: ["quantum-computing", "ai", "innovation", "breakthrough"],
      featured: true,
      image: "/news/quantum-neural-network.jpg",
      views: 15420,
      shares: 892
    },
    {
      id: 2,
      title: "Zion Tech Group Named 'AI Company of the Year' at Tech Excellence Awards",
      excerpt: "The company receives prestigious recognition for its contributions to artificial intelligence and autonomous systems innovation.",
      content: "Zion Tech Group has been honored with the 'AI Company of the Year' award at the prestigious Tech Excellence Awards 2025. This recognition celebrates the company's groundbreaking work in artificial intelligence, autonomous systems, and quantum technology solutions that are transforming industries worldwide...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-18",
      readTime: "4 min read",
      category: "awards",
      tags: ["awards", "recognition", "ai", "excellence"],
      featured: true,
      image: "/news/tech-excellence-award.jpg",
      views: 12850,
      shares: 756
    },
    {
      id: 3,
      title: "Strategic Partnership with Global Healthcare Consortium Announced",
      excerpt: "Zion Tech Group partners with leading healthcare organizations to deploy AI-powered diagnostic and treatment optimization systems.",
      content: "Zion Tech Group has announced a strategic partnership with the Global Healthcare Consortium, a coalition of leading healthcare organizations worldwide. This collaboration will focus on deploying advanced AI-powered diagnostic systems, treatment optimization platforms, and predictive healthcare analytics to improve patient outcomes globally...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-15",
      readTime: "6 min read",
      category: "partnerships",
      tags: ["healthcare", "partnership", "ai", "diagnostics"],
      featured: false,
      image: "/news/healthcare-partnership.jpg",
      views: 9870,
      shares: 543
    },
    {
      id: 4,
      title: "New AI Autonomous Research Assistant Surpasses Human Performance Benchmarks",
      excerpt: "Zion Tech Group's latest AI research tool demonstrates superior capabilities in scientific literature analysis and research synthesis.",
      content: "Zion Tech Group has announced that its new AI Autonomous Research Assistant has achieved breakthrough performance, surpassing human benchmarks in scientific literature analysis, research synthesis, and hypothesis generation. This advanced AI system represents a significant leap forward in research automation and knowledge discovery...",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-12",
      readTime: "7 min read",
      category: "technology",
      tags: ["ai-research", "automation", "scientific-discovery", "innovation"],
      featured: false,
      image: "/news/ai-research-assistant.jpg",
      views: 11230,
      shares: 678
    },
    {
      id: 5,
      title: "Zion Tech Group Expands Global Operations with New European Headquarters",
      excerpt: "The company establishes a new European headquarters in Amsterdam to better serve European clients and expand its international presence.",
      content: "Zion Tech Group has announced the expansion of its global operations with the establishment of a new European headquarters in Amsterdam, Netherlands. This strategic expansion will enable the company to better serve its growing European client base and strengthen its position in the European technology market...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-10",
      readTime: "5 min read",
      category: "company",
      tags: ["expansion", "europe", "global-operations", "amsterdam"],
      featured: false,
      image: "/news/european-hq.jpg",
      views: 8760,
      shares: 432
    },
    {
      id: 6,
      title: "Breakthrough in SOC2 Compliance Automation Technology",
      excerpt: "Zion Tech Group introduces automated compliance monitoring system that reduces audit time by 90%.",
      content: "Zion Tech Group has achieved a major breakthrough in compliance automation with the introduction of its new SOC2 Compliance Automation Technology. This innovative system streamlines the compliance process, reducing audit preparation time by 90% while maintaining the highest standards of security and compliance...",
      author: "Alex Thompson",
      publishDate: "2025-01-08",
      readTime: "6 min read",
      category: "technology",
      tags: ["compliance", "automation", "soc2", "security"],
      featured: false,
      image: "/news/soc2-automation.jpg",
      views: 9450,
      shares: 521
    },
    {
      id: 7,
      title: "Zion Tech Group Named to Fortune 500 Fastest-Growing Companies List",
      excerpt: "The company ranks #47 on Fortune's list of fastest-growing companies, recognizing its rapid expansion and innovation.",
      content: "Zion Tech Group has been named to Fortune magazine's prestigious list of the 500 fastest-growing companies in America. Ranking #47 on the list, this recognition highlights the company's exceptional growth trajectory, innovative technology solutions, and strong market position in the rapidly evolving AI and quantum technology sectors...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-05",
      readTime: "4 min read",
      category: "awards",
      tags: ["fortune-500", "growth", "recognition", "success"],
      featured: false,
      image: "/news/fortune-500.jpg",
      views: 13420,
      shares: 789
    },
    {
      id: 8,
      title: "New 5G Enterprise Solutions Division Launched",
      excerpt: "Zion Tech Group establishes dedicated division for next-generation 5G enterprise networking and infrastructure solutions.",
      content: "Zion Tech Group has announced the launch of its new 5G Enterprise Solutions Division, dedicated to providing cutting-edge 5G networking and infrastructure solutions for enterprise clients. This new division will focus on delivering high-speed, low-latency connectivity solutions that enable the next generation of enterprise applications...",
      author: "Jennifer Lee",
      publishDate: "2025-01-03",
      readTime: "5 min read",
      category: "company",
      tags: ["5g", "networking", "enterprise", "infrastructure"],
      featured: false,
      image: "/news/5g-solutions.jpg",
      views: 7890,
      shares: 445
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
=======
  const categories = [
    "All News",
    "Product Launch",
    "Research & Development",
    "Cybersecurity",
    "Industry Insights",
    "Company News",
    "Product Updates"
  ];

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.publishDate.startsWith(selectedYear);
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
=======
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Award,
  Globe,
  Building,
  Users,
  Star,
  Eye,
  Share2,
  Filter,
  ChevronDown,
  ExternalLink,
  Play,
  ImageIcon,
  Video,
  FileText
} from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 89, color: 'from-gray-500 to-slate-500' },
    { id: 'company', name: 'Company News', icon: Building, count: 23, color: 'from-blue-500 to-cyan-500' },
    { id: 'industry', name: 'Industry Updates', icon: Globe, count: 31, color: 'from-green-500 to-emerald-500' },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 12, color: 'from-yellow-500 to-orange-500' },
    { id: 'partnerships', name: 'Partnerships', icon: Users, count: 18, color: 'from-purple-500 to-pink-500' },
    { id: 'technology', name: 'Technology', icon: TrendingUp, count: 25, color: 'from-red-500 to-rose-500' }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Zion Tech Group Named Top AI Solutions Provider by TechCrunch 2025",
      excerpt: "Leading technology publication recognizes Zion Tech Group for innovative AI solutions and exceptional client success rates in enterprise digital transformation.",
      author: "Zion Tech Group",
      publishDate: "2025-01-15",
      readTime: "3 min read",
      category: "awards",
      tags: ["Awards", "AI", "Recognition", "TechCrunch"],
      image: "/api/placeholder/600/400",
      views: "15.2k",
      type: "press-release",
      featured: true,
      externalLink: "https://techcrunch.com/2025/01/15/zion-tech-group-ai-solutions"
    },
    {
      id: 2,
      title: "Major Partnership Announced with Fortune 500 Healthcare Provider",
      excerpt: "Zion Tech Group enters strategic partnership to deploy AI-powered healthcare analytics across 50+ medical facilities, improving patient outcomes and operational efficiency.",
      author: "Zion Tech Group",
      publishDate: "2025-01-12",
      readTime: "4 min read",
      category: "partnerships",
      tags: ["Partnership", "Healthcare", "AI", "Fortune 500"],
      image: "/api/placeholder/600/400",
      views: "12.8k",
      type: "announcement",
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Platform',
      excerpt: 'Our latest quantum computing platform combines AI and quantum mechanics to solve previously unsolvable problems.',
      category: 'Product Launch',
      date: '2024-08-25',
      readTime: '5 min read',
      image: '🚀',
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum Edge Computing Platform',
      excerpt: 'Our latest quantum computing solution delivers unprecedented performance for distributed applications, marking a major milestone in edge computing technology.',
      date: '2025-01-15',
      category: 'Product Launch',
      image: '/images/news/quantum-edge-launch.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'New Cybersecurity Framework for Quantum Threats',
      excerpt: 'Introducing quantum-safe security protocols to protect against future quantum computing threats.',
      category: 'Security',
      date: '2024-08-15',
      readTime: '7 min read',
      image: '🔒',
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: "Zion Tech Group Named Top AI Solutions Provider 2025",
      excerpt: "Leading technology research firm recognizes Zion Tech Group for excellence in AI-powered business solutions and innovation.",
      content: "Zion Tech Group has been recognized as a Top AI Solutions Provider for 2025 by TechResearch Insights, a leading technology research and advisory firm. This recognition highlights our commitment to delivering cutting-edge AI solutions that drive real business value...",
      author: "Zion Tech Group",
      publishDate: "2025-01-20",
      readTime: "3 min read",
      views: "5.2k",
      category: "Awards & Recognition",
      tags: ["Award", "AI Solutions", "Recognition", "2025"],
      featured: true,
      image: "/images/news/award-2025.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 2,
      title: "New Quantum Neural Network Platform Launch",
      excerpt: "Revolutionary quantum computing platform now available for enterprise customers, offering unprecedented computational power.",
      content: "Zion Tech Group is excited to announce the launch of our revolutionary Quantum Neural Network Platform, a breakthrough in quantum computing technology that combines the power of quantum mechanics with advanced neural network architectures...",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-18",
      readTime: "5 min read",
      views: "3.8k",
      category: "Product Updates",
      tags: ["Quantum Computing", "Neural Networks", "Product Launch", "Innovation"],
      featured: true,
      image: "/images/news/quantum-platform-launch.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 3,
      title: "Partnership with Global Tech Leaders Announced",
      excerpt: "Strategic collaboration to accelerate AI adoption across enterprise markets and drive innovation in emerging technologies.",
      content: "Zion Tech Group is pleased to announce a strategic partnership with leading global technology companies to accelerate the adoption of AI solutions across enterprise markets. This collaboration will focus on developing next-generation AI technologies...",
      author: "James Wilson",
      publishDate: "2025-01-15",
      readTime: "4 min read",
      views: "2.9k",
      category: "Partnerships",
      tags: ["Partnership", "AI Adoption", "Enterprise", "Collaboration"],
      featured: false,
      image: "/images/news/partnership-announcement.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 4,
      title: "AI Research Breakthrough in Autonomous Systems",
      excerpt: "New research demonstrates significant improvements in AI autonomous decision-making capabilities and operational efficiency.",
      content: "Our research team has achieved a major breakthrough in AI autonomous systems, demonstrating significant improvements in decision-making capabilities and operational efficiency. The research, published in leading AI journals, shows...",
      author: "Dr. Michael Rodriguez",
      publishDate: "2025-01-12",
      readTime: "6 min read",
      views: "4.1k",
      category: "Research & Development",
      tags: ["Research", "AI", "Autonomous Systems", "Breakthrough"],
      featured: false,
      image: "/images/news/ai-research-breakthrough.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 5,
      title: "Industry Report: AI Adoption in Manufacturing 2025",
      excerpt: "Comprehensive analysis of AI adoption trends in manufacturing sector reveals significant growth opportunities and challenges.",
      content: "Zion Tech Group has released a comprehensive industry report analyzing AI adoption trends in the manufacturing sector for 2025. The report, based on data from over 500 manufacturing companies worldwide, reveals significant growth opportunities...",
      author: "Lisa Thompson",
      publishDate: "2025-01-10",
      readTime: "7 min read",
      views: "3.3k",
      category: "Industry Insights",
      tags: ["Industry Report", "Manufacturing", "AI Adoption", "Trends"],
      featured: false,
      image: "/images/news/manufacturing-ai-report.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation Tool Update",
      excerpt: "Enhanced compliance automation platform now supports additional regulatory frameworks and improved reporting capabilities.",
      content: "We're excited to announce a major update to our SOC2 Compliance Automation Tool, which now supports additional regulatory frameworks and provides enhanced reporting capabilities. The update includes...",
      author: "Alex Kim",
      publishDate: "2025-01-08",
      readTime: "4 min read",
      views: "2.7k",
      category: "Product Updates",
      tags: ["SOC2", "Compliance", "Automation", "Update"],
      featured: false,
      image: "/images/news/soc2-update.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 7,
      title: "Market Analysis: Quantum Computing Investment Trends",
      excerpt: "Analysis of global quantum computing investment patterns shows accelerating growth and emerging market opportunities.",
      content: "Our market analysis team has released a comprehensive report on global quantum computing investment trends, revealing accelerating growth and emerging market opportunities. The analysis covers...",
      author: "David Park",
      publishDate: "2025-01-05",
      readTime: "8 min read",
      views: "2.4k",
      category: "Market Trends",
      tags: ["Market Analysis", "Quantum Computing", "Investment", "Trends"],
      featured: false,
      image: "/images/news/quantum-investment-trends.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 8,
      title: "Customer Success Story: Fortune 500 Digital Transformation",
      excerpt: "How a Fortune 500 company achieved 40% operational efficiency improvement using our AI solutions.",
      content: "We're proud to share the success story of how one of our Fortune 500 clients achieved a 40% improvement in operational efficiency using our AI-powered digital transformation solutions. The project involved...",
      author: "Emily Johnson",
      publishDate: "2025-01-03",
      readTime: "5 min read",
      views: "3.6k",
      category: "Company News",
      tags: ["Customer Success", "Digital Transformation", "AI Solutions", "Case Study"],
      featured: false,
      image: "/images/news/fortune500-success.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 9,
      title: "New Office Opening in Silicon Valley",
      excerpt: "Expansion into Silicon Valley strengthens our presence in the heart of technology innovation and talent acquisition.",
      content: "Zion Tech Group is excited to announce the opening of our new office in Silicon Valley, strengthening our presence in the heart of technology innovation and talent acquisition. The new facility will serve as...",
      author: "Zion Tech Group",
      publishDate: "2024-12-30",
      readTime: "3 min read",
      views: "2.1k",
      category: "Company News",
      tags: ["Expansion", "Silicon Valley", "Office Opening", "Growth"],
      featured: false,
      image: "/images/news/silicon-valley-office.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 10,
      title: "AI Ethics and Responsible AI Development",
      excerpt: "Commitment to ethical AI development and responsible technology deployment in all our solutions.",
      content: "Zion Tech Group reaffirms our commitment to ethical AI development and responsible technology deployment. We believe that AI technology should be developed and deployed in ways that benefit humanity while minimizing potential risks...",
      author: "Dr. Sarah Chen",
      publishDate: "2024-12-28",
      readTime: "6 min read",
      views: "2.8k",
      category: "Company News",
      tags: ["AI Ethics", "Responsible AI", "Technology", "Commitment"],
      featured: false,
      image: "/images/news/ai-ethics-commitment.jpg",
      externalLink: null,
      isPressRelease: false
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news and updates from Zion Tech Group delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
=======
      {/* Press Contact CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Press & Media Inquiries</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For press releases, media interviews, or company information, please contact our communications team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Press Team
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Media Kit
=======
      {/* Recent News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-300">Stay updated with our newest announcements and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.slice(3).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* News Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getNewsTypeColor(news.type)} text-white`}>
                    {news.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>

                {/* News Image */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-cyan-400/50" />
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(news.category)} text-white`}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                    {news.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {news.author}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </span>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {news.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {news.externalLink ? (
                    <a
                      href={news.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {sortedNews.length > 9 && (
            <div className="text-center mt-12">
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-cyan-500/50">
                Load More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access our press kit, company logos, executive bios, and media contact information for journalists and media professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
=======
      title: 'AI-Powered Business Intelligence Suite Update',
      excerpt: 'Enhanced analytics capabilities with real-time insights and predictive modeling.',
      category: 'Product Update',
      date: '2024-08-10',
      readTime: '4 min read',
      image: '📊'
    },
    {
      id: 5,
      title: 'Zion Tech Group Recognized as Top AI Company',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to ethical AI development.',
      category: 'Awards',
      date: '2024-08-05',
      readTime: '2 min read',
      image: '🏆'
    },
    {
      id: 6,
      title: 'New Office Opening in Silicon Valley',
      excerpt: 'Expanding our presence to better serve West Coast clients and tap into local tech talent.',
      category: 'Company',
      date: '2024-07-30',
      readTime: '3 min read',
      image: '🏢'
    },
    {
      id: 7,
      title: 'Cybersecurity Workshop Series Launch',
      excerpt: 'Free educational workshops to help businesses understand and implement cybersecurity best practices.',
      category: 'Events',
      date: '2024-07-25',
      readTime: '6 min read',
      image: '🎓'
    },
    {
      id: 8,
      title: 'AI Ethics Guidelines Publication',
      excerpt: 'Our comprehensive framework for responsible AI development and deployment.',
      category: 'Research',
      date: '2024-07-20',
      readTime: '8 min read',
      image: '📋'
    },
    {
      id: 9,
      title: 'Client Success Story: Manufacturing AI Implementation',
      excerpt: 'How we helped a major manufacturer increase efficiency by 40% using AI-powered automation.',
      category: 'Case Study',
      date: '2024-07-15',
      readTime: '5 min read',
      image: '🏭'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: NewspaperIcon },
    { id: 'company', name: 'Company News', icon: NewspaperIcon },
    { id: 'partnerships', name: 'Partnerships', icon: UserIcon },
    { id: 'research', name: 'Research & Development', icon: LightbulbIcon },
    { id: 'awards', name: 'Awards & Recognition', icon: StarIcon },
    { id: 'expansion', name: 'Business Expansion', icon: GlobeIcon },
    { id: 'ethics', name: 'AI Ethics', icon: ShieldIcon },
    { id: 'quantum', name: 'Quantum Technology', icon: ZapIcon },
    { id: 'healthcare', name: 'Healthcare AI', icon: HeartIcon },
    { id: 'financial', name: 'Financial Results', icon: CalendarIcon },
    { id: 'governance', name: 'Corporate Governance', icon: UserIcon }
  ];

  // Combine all news sources
  const allNews = [...breakingNews, ...latestNews, ...pressReleases];
  const featuredNews = allNews.filter(article => article.priority === 'breaking');
  const recentNews = allNews.slice(0, 3);

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
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </section>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {featuredArticle && (
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
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-400" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border border-gray-700/50 hover:border-green-400/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      {/* Featured News */}
      {featuredNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <article
                key={item.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {item.category}
                    </span>
                    {item.isPressRelease && (
                      <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                        Press Release
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {item.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(item.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {item.readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Eye className="w-4 h-4 mr-2" />
                      {item.views}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest insights, product launches, and industry developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
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
=======
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      excerpt: 'Recognition for our groundbreaking work in autonomous AI systems and machine learning solutions that are transforming industries worldwide.',
      date: '2025-01-10',
      category: 'Awards',
      image: '/images/news/ai-awards.jpg'
    },
    {
      id: 3,
      title: 'Partnership Announced with Leading Healthcare Provider',
      excerpt: 'Strategic collaboration to deploy AI-powered diagnostic tools across multiple healthcare facilities, improving patient outcomes and operational efficiency.',
      date: '2025-01-05',
      category: 'Partnerships',
      image: '/images/news/healthcare-partnership.jpg'
    },
    {
      id: 4,
      title: 'New Research Paper on Quantum Machine Learning Published',
      excerpt: 'Our research team publishes groundbreaking findings on the intersection of quantum computing and machine learning algorithms.',
      date: '2024-12-28',
      category: 'Research',
      image: '/images/news/quantum-ml-research.jpg'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations',
      excerpt: 'Opening new offices in Europe and Asia to better serve our growing international client base and accelerate global innovation.',
      date: '2024-12-20',
      category: 'Company News',
      image: '/images/news/global-expansion.jpg'
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions Achieve Industry Certification',
      excerpt: 'Our advanced cybersecurity platform receives SOC2 Type II certification, demonstrating the highest standards of security and compliance.',
      date: '2024-12-15',
      category: 'Security',
      image: '/images/news/cybersecurity-certification.jpg'
    }
  ];

  const categories = ['All', 'Product Launch', 'Awards', 'Partnerships', 'Research', 'Company News', 'Security'];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="News & Updates - Zion Tech Group" 
        description="Stay updated with the latest news, press releases, and announcements from Zion Tech Group"
        keywords="news, updates, press releases, announcements, Zion Tech Group"
        canonical="https://ziontechgroup.com/news"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest developments, product launches, partnerships, 
            and innovations from Zion Tech Group as we continue to shape the future of technology.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured News</h2>
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.excerpt}</p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Latest News Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <div key={item.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit & Media */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/20 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Press Kit & Media Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Journalists and media professionals can access our press kit, company logos, 
              high-resolution images, and executive bios for media coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/press-kit.zip"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
              >
                Download Press Kit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-medium"
              >
                Contact PR Team
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, product updates, 
            and insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Subscribe
=======
      {/* Regular News */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {item.category}
                  </span>
                  {item.isPressRelease && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                      Press Release
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.publishDate)}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Press Room CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Press & Media Inquiries
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, 
              high-resolution images, and contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Media Relations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
