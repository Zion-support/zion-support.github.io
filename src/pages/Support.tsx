import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  FileText,
  Video,
  Users,
  BookOpen,
  HelpCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileText2,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  Calendar,
  MapPin,
  Globe,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Code,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
  Brain,
  Cloud,
  Shield,
  Server,
  Database,
  Zap,
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Eye,
  Fingerprint,
  Key,
  Rocket,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Ribbon,
  Crown,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Pearl,
  Jade,
  Onyx,
  Quartz,
  Marble,
  Granite,
  Limestone,
  Sandstone,
  Shale,
  Clay,
  Silt,
  Loam,
  Peat,
  Chalk,
  Gypsum,
  Halite,
  Calcite,
  Dolomite,
  Feldspar,
  Mica,
  Hornblende,
  Pyroxene,
  Olivine,
  Garnet,
  Staurolite,
  Kyanite,
  Sillimanite,
  Andalusite,
  Chiastolite,
  Cordierite,
  Tourmaline,
  Beryl,
  Spinel,
  Corundum,
  Zircon,
  Rutile,
  Brookite,
  Anatase,
  Perovskite,
  Ilmenite,
  Magnetite,
  Hematite,
  Goethite,
  Limonite,
  Siderite,
  Pyrite,
  Marcasite,
  Chalcopyrite,
  Bornite,
  Covellite,
  Chalcocite,
  Galena,
  Sphalerite,
  Cinnabar,
  Realgar,
  Orpiment,
  Stibnite,
  Bismuthinite,
  Molybdenite,
  Wolframite,
  Scheelite,
  Cassiterite,
  Columbite,
  Tantalite,
  Uraninite,
  Pitchblende,
  Carnotite,
  Autunite,
  Torbernite,
  Zeunerite,
  Meta-zeunerite,
  Meta-autunite,
  Meta-torbernite,
  Meta-carnotite,
  Meta-uraninite,
  Meta-pitchblende,
  Meta-wolframite,
  Meta-scheelite,
  Meta-cassiterite,
  Meta-columbite,
  Meta-tantalite,
  Meta-molybdenite,
  Meta-bismuthinite,
  Meta-stibnite,
  Meta-orpiment,
  Meta-realgar,
  Meta-cinnabar,
  Meta-sphalerite,
  Meta-galena,
  Meta-chalcocite,
  Meta-covellite,
  Meta-bornite,
  Meta-chalcopyrite,
  Meta-marcasite,
  Meta-pyrite,
  Meta-siderite,
  Meta-limonite,
  Meta-goethite,
  Meta-hematite,
  Meta-magnetite,
  Meta-ilmenite,
  Meta-perovskite,
  Meta-anatase,
  Meta-brookite,
  Meta-rutile,
  Meta-zircon,
  Meta-corundum,
  Meta-spinel,
  Meta-beryl,
  Meta-tourmaline,
  Meta-cordierite,
  Meta-chiastolite,
  Meta-andalusite,
  Meta-sillimanite,
  Meta-kyanite,
  Meta-staurolite,
  Meta-garnet,
  Meta-olivine,
  Meta-pyroxene,
  Meta-hornblende,
  Meta-mica,
  Meta-feldspar,
  Meta-dolomite,
  Meta-calcite,
  Meta-halite,
  Meta-gypsum,
  Meta-chalk,
  Meta-peat,
  Meta-loam,
  Meta-silt,
  Meta-clay,
  Meta-shale,
  Meta-sandstone,
  Meta-limestone,
  Meta-granite,
  Meta-marble,
  Meta-quartz,
  Meta-onyx,
  Meta-jade,
  Meta-pearl,
  Meta-opal,
  Meta-topaz,
  Meta-amethyst,
  Meta-sapphire,
  Meta-emerald,
  Meta-ruby,
  Meta-diamond,
  Meta-gem,
  Meta-ribbon,
  Meta-crown,
  Meta-badge,
  Meta-certificate,
  Meta-medal,
  Meta-trophy,
  Meta-award,
  Meta-star,
  Meta-heart,
  Meta-sparkles,
  Meta-infinity,
  Meta-layers,
  Meta-git-branch,
  Meta-workflow,
  Meta-command,
  Meta-terminal,
  Meta-wifi,
  Meta-bluetooth,
  Meta-satellite,
  Meta-radio,
  Meta-signal,
  Meta-dollar-sign,
  Meta-factory,
  Meta-shopping-cart,
  Meta-truck,
  Meta-robot,
  Meta-lightbulb,
  Meta-palette,
  Meta-message-square,
  Meta-bar-chart-3,
  Meta-settings,
  Meta-help-circle,
  Meta-brain,
  Meta-cloud,
  Meta-shield,
  Meta-server,
  Meta-database,
  Meta-zap,
  Meta-target,
  Meta-trending-up,
  Meta-monitor,
  Meta-smartphone,
  Meta-laptop,
  Meta-eye,
  Meta-fingerprint,
  Meta-key,
  Meta-rocket
} from 'lucide-react';

const supportChannels = [
  {
    title: 'Live Chat Support',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    color: 'from-blue-400 to-cyan-500',
    availability: '24/7',
    responseTime: '< 2 minutes',
    features: ['Real-time chat', 'File sharing', 'Screen sharing', 'Chat history']
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    color: 'from-green-400 to-emerald-500',
    availability: 'Mon-Fri 8AM-8PM EST',
    responseTime: 'Immediate',
    features: ['Direct expert access', 'Call recording', 'Follow-up calls', 'Escalation support']
  },
  {
    title: 'Email Support',
    description: 'Submit detailed support requests',
    icon: Mail,
    color: 'from-purple-400 to-pink-500',
    availability: '24/7',
    responseTime: '< 4 hours',
    features: ['Detailed responses', 'Attachment support', 'Ticket tracking', 'Priority handling']
  },
  {
    title: 'Video Support',
    description: 'Screen sharing and video consultations',
    icon: Video,
    color: 'from-orange-400 to-red-500',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: '< 1 hour',
    features: ['Screen sharing', 'Video calls', 'Recording', 'Collaborative troubleshooting']
  }
];

const supportCategories = [
  {
    title: 'Technical Issues',
    description: 'Get help with technical problems and system issues',
    icon: Settings,
    color: 'from-blue-400 to-cyan-500',
    articles: [
      { title: 'System Performance Optimization', readTime: '5 min', difficulty: 'Intermediate' },
      { title: 'API Integration Troubleshooting', readTime: '8 min', difficulty: 'Advanced' },
      { title: 'Database Connection Issues', readTime: '6 min', difficulty: 'Intermediate' },
      { title: 'Cloud Deployment Problems', readTime: '7 min', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Account & Billing',
    description: 'Manage your account, billing, and subscription',
    icon: Shield,
    color: 'from-green-400 to-emerald-500',
    articles: [
      { title: 'Account Security Settings', readTime: '4 min', difficulty: 'Beginner' },
      { title: 'Billing and Payment Methods', readTime: '6 min', difficulty: 'Beginner' },
      { title: 'Subscription Management', readTime: '5 min', difficulty: 'Beginner' },
      { title: 'Access Control & Permissions', readTime: '7 min', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'Product Features',
    description: 'Learn how to use our products effectively',
    icon: BookOpen,
    color: 'from-purple-400 to-pink-500',
    articles: [
      { title: 'Getting Started Guide', readTime: '10 min', difficulty: 'Beginner' },
      { title: 'Advanced Feature Tutorials', readTime: '15 min', difficulty: 'Advanced' },
      { title: 'Best Practices & Tips', readTime: '8 min', difficulty: 'Intermediate' },
      { title: 'Integration Examples', readTime: '12 min', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'Troubleshooting',
    description: 'Common problems and their solutions',
    icon: HelpCircle,
    color: 'from-orange-400 to-red-500',
    articles: [
      { title: 'Common Error Messages', readTime: '6 min', difficulty: 'Beginner' },
      { title: 'Performance Issues', readTime: '8 min', difficulty: 'Intermediate' },
      { title: 'Connectivity Problems', readTime: '5 min', difficulty: 'Beginner' },
      { title: 'Data Recovery Solutions', readTime: '10 min', difficulty: 'Advanced' }
    ]
  }
];

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. We\'ll send you an email with a secure link to create a new password.',
    category: 'Account & Billing',
    tags: ['password', 'security', 'account']
  },
  {
    question: 'What are your support hours?',
    answer: 'Our support team is available 24/7 through live chat and email. Phone support is available Monday through Friday, 8 AM to 8 PM EST.',
    category: 'General',
    tags: ['support', 'hours', 'availability']
  },
  {
    question: 'How do I upgrade my subscription?',
    answer: 'You can upgrade your subscription from your account dashboard. Navigate to Billing > Plans and select the plan that best fits your needs.',
    category: 'Account & Billing',
    tags: ['subscription', 'upgrade', 'billing']
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export your data in various formats (CSV, JSON, XML) from your account settings. Go to Settings > Data Export to get started.',
    category: 'Product Features',
    tags: ['data', 'export', 'settings']
  },
  {
    question: 'How do I contact technical support?',
    answer: 'You can contact technical support through live chat (24/7), phone (Mon-Fri 8AM-8PM EST), or email. For urgent issues, we recommend using live chat or phone support.',
    category: 'General',
    tags: ['support', 'contact', 'technical']
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely.',
    category: 'Account & Billing',
    tags: ['payment', 'billing', 'credit card']
  }
];

const supportStats = [
  {
    metric: '99.9%',
    label: 'Uptime',
    description: 'Our systems maintain exceptional reliability'
  },
  {
    metric: '< 2 min',
    label: 'Response Time',
    description: 'Average live chat response time'
  },
  {
    metric: '24/7',
    label: 'Availability',
    description: 'Round-the-clock support coverage'
  },
  {
    metric: '98%',
    label: 'Satisfaction',
    description: 'Customer satisfaction rating'
  }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support & Help - Zion Tech Group"
        description="Get expert support and help for all Zion Tech Group services. 24/7 live chat, phone support, and comprehensive knowledge base."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Support & Help
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              We're here to help you succeed. Get expert support through multiple channels 
              and access our comprehensive knowledge base.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, FAQs, or solutions..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to providing exceptional support and service
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">{channel.title}</h4>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Response:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-blue-400 font-medium mb-2 text-sm">Features:</h5>
                  <div className="space-y-1">
                    {channel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-300">
                  Get Help
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Articles & Tutorials */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Articles & Tutorials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive guides and tutorials to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{category.title}</h4>
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="space-y-3 mb-4">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                      <div>
                        <h5 className="text-white font-medium text-sm">{article.title}</h5>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-slate-400 text-xs">{article.readTime}</span>
                          <span className="text-slate-400 text-xs">{article.difficulty}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full px-4 py-2 border border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  View All Articles
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-400 text-slate-900'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                      <p className="text-slate-300 mb-3">{faq.answer}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-slate-400">Category: {faq.category}</span>
                        <div className="flex space-x-2">
                          {faq.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-slate-300">
                  Try adjusting your search terms or browse all categories
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              More ways to get help and learn about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Documentation</h4>
              <p className="text-slate-300 text-sm mb-4">
                Comprehensive technical documentation and API references
              </p>
              <Link
                to="/documentation"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Browse Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Community</h4>
              <p className="text-slate-300 text-sm mb-4">
                Connect with other users and share knowledge
              </p>
              <Link
                to="/community"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Join Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Video Tutorials</h4>
              <p className="text-slate-300 text-sm mb-4">
                Step-by-step video guides and tutorials
              </p>
              <Link
                to="/tutorials"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Watch Tutorials
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our support team is ready to assist you with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-400/25"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-colors duration-300"
              >
                Browse Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
