import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  Eye,
  MessageCircle,
  Heart,
  Star,
  Zap,
  ArrowRight,
  Globe,
  Lock,
  ShieldCheck,
  FileCheck,
  AlertCircle,
  Calendar,
  Target,
  PieChart,
  Activity,
  BookOpen,
  Settings,
  Bell,
  Download,
  Upload,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Share2,
  Printer,
  Mail,
  Phone,
  Video,
  Camera,
  Mic,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  CreditCard,
  Wallet,
  PiggyBank,
  Building,
  Home,
  MapPin,
  Navigation,
  Compass,
  Globe2,
  World,
  Flag,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Tag,
  Label,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
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
  Indent,
  Outdent,
  ListOrdered,
  ListUnordered,
  Quote,
  Code,
  Link as LinkIcon,
  Image,
  Video as VideoIcon,
  Music,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  HardDrive,
  Archive,
  Inbox,
  Send,
  MailOpen,
  MailCheck,
  MailWarning,
  MailX,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  Voicemail,
  MessageSquare,
  MessageCircle as MessageCircleIcon,
  MessageSquare as MessageSquareIcon,
  MessageCircle as MessageCircleIcon2,
  MessageSquare as MessageSquareIcon2,
  MessageCircle as MessageCircleIcon3,
  MessageSquare as MessageSquareIcon3,
  MessageCircle as MessageCircleIcon4,
  MessageSquare as MessageSquareIcon4,
  MessageCircle as MessageCircleIcon5,
  MessageSquare as MessageSquareIcon5,
  MessageCircle as MessageCircleIcon6,
  MessageSquare as MessageSquareIcon6,
  MessageCircle as MessageCircleIcon7,
  MessageSquare as MessageSquareIcon7,
  MessageCircle as MessageCircleIcon8,
  MessageSquare as MessageSquareIcon8,
  MessageCircle as MessageCircleIcon9,
  MessageSquare as MessageSquareIcon9,
  MessageCircle as MessageCircleIcon10,
  MessageSquare as MessageSquareIcon10
} from 'lucide-react';

export default function AICustomerExperienceAnalytics() {
  const features = [
    {
      title: 'Real-time Sentiment Analysis',
      description: 'AI-powered analysis of customer feedback, reviews, and social media mentions in real-time',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Customer Journey Mapping',
      description: 'Visualize and analyze complete customer journeys across all touchpoints and channels',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Predictive Customer Behavior',
      description: 'Machine learning models that predict customer actions, churn risk, and lifetime value',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Multi-channel Analytics',
      description: 'Unified view of customer interactions across web, mobile, social, and offline channels',
      icon: Globe,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Automated Insights',
      description: 'AI-generated insights and recommendations for improving customer experience',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Personalization Engine',
      description: 'Real-time personalization recommendations based on customer behavior and preferences',
      icon: Users,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const benefits = [
    {
      title: 'Increase Customer Satisfaction',
      description: 'Data-driven insights help optimize every customer touchpoint',
      icon: Heart,
      metric: '35%',
      metricLabel: 'Satisfaction Boost'
    },
    {
      title: 'Reduce Customer Churn',
      description: 'Predictive analytics identify at-risk customers before they leave',
      icon: TrendingUp,
      metric: '40%',
      metricLabel: 'Churn Reduction'
    },
    {
      title: 'Improve Conversion Rates',
      description: 'Personalized experiences drive higher engagement and conversions',
      icon: Target,
      metric: '25%',
      metricLabel: 'Conversion Increase'
    },
    {
      title: 'Boost Customer Lifetime Value',
      description: 'Better experiences lead to higher retention and spending',
      icon: DollarSign,
      metric: '45%',
      metricLabel: 'CLV Increase'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 interactions/month',
        'Basic sentiment analysis',
        'Customer journey mapping',
        'Standard reporting',
        'Email alerts',
        '3 user accounts',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 interactions/month',
        'Advanced sentiment analysis',
        'Predictive analytics',
        'Multi-channel tracking',
        'Custom dashboards',
        'Unlimited user accounts',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited interactions',
        'Full analytics suite',
        'Custom AI models',
        'Dedicated support team',
        'On-premise deployment',
        'Custom integrations',
        'Training & certification',
        'SLA guarantees',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const analyticsMetrics = [
    'Customer Satisfaction Score (CSAT)',
    'Net Promoter Score (NPS)',
    'Customer Effort Score (CES)',
    'Customer Lifetime Value (CLV)',
    'Churn Rate',
    'Customer Acquisition Cost (CAC)',
    'Average Response Time',
    'First Contact Resolution',
    'Customer Journey Completion',
    'Cross-channel Engagement'
  ];

  const testimonials = [
    {
      name: 'Amanda Rodriguez',
      role: 'VP of Customer Experience',
      company: 'E-commerce Platform',
      content: 'The AI Customer Experience Analytics platform has transformed how we understand our customers. We\'ve increased our NPS by 35% and reduced churn by 40%.',
      rating: 5
    },
    {
      name: 'James Chen',
      role: 'Customer Success Director',
      company: 'SaaS Company',
      content: 'Real-time sentiment analysis and predictive insights have given us unprecedented visibility into customer needs. Our satisfaction scores have never been higher.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Manager',
      company: 'Retail Brand',
      content: 'The multi-channel analytics and personalization engine have revolutionized our customer engagement. Conversion rates are up 25% across all channels.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-rose-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium mb-6"
            >
              <Users className="h-4 w-4 mr-2" />
              AI-Powered Customer Experience Analytics
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Customer Experience
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transform customer insights with AI-powered analytics, real-time sentiment analysis, and predictive customer behavior modeling. Deliver exceptional experiences that drive growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Advanced Analytics Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI-powered platform provides comprehensive customer experience analytics with intelligent insights and predictive capabilities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Measurable Business Impact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See real results with our AI-powered customer experience analytics platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-pink-400 mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400 mb-3">{benefit.metricLabel}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose the plan that fits your customer interaction volume. All plans include our core AI analytics features.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-pink-500 ring-2 ring-pink-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Metrics Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Analytics Coverage
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Track all critical customer experience metrics with our AI-powered platform
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {analyticsMetrics.map((metric, index) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600 hover:border-pink-500/50 transition-all duration-300"
              >
                <BarChart3 className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300 font-medium">{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Trusted by Customer Experience Leaders
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See what customer experience professionals are saying about our platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-pink-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their customer experience with AI-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}