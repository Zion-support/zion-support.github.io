import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  BarChart3, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Code, 
  Database, 
  Network, 
  Smartphone, 
  MessageSquare, 
  FileText, 
  ShoppingCart, 
  Search, 
  Clock, 
  Camera, 
  CreditCard, 
  Globe, 
  Monitor, 
  Server, 
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Settings,
  Terminal,
  GitBranch,
  Container,
  Layers,
  HardDrive,
  Wifi,
  Router,
  Key,
  Eye,
  AlertTriangle,
  PieChart,
  LineChart,
  Activity,
  Lightbulb,
  Rocket,
  Workflow,
  Cpu,
  Atom,
  Bot,
  MessageCircle,
  Headphones,
  Video,
  Image,
  File,
  Folder,
  Archive,
  Edit,
  Plus,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Volume,
  Volume2,
  VolumeX,
  Mute,
  Unmute,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1
} from 'lucide-react';

export default function AIServices() {
  const aiServiceCategories = [
    {
      category: 'AI-Powered Business Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Advanced analytics and business intelligence solutions powered by artificial intelligence',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics.',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization', 'Automated Reporting', 'API Integration'],
          pricing: 'From $2,999/month',
          marketPrice: '$5,000-10,000/month',
          benefits: ['Make data-driven decisions', 'Predict future trends', 'Improve business performance'],
          link: '/services/ai-business-intelligence'
        },
        {
          name: 'Predictive Analytics Suite',
          description: 'Machine learning models that predict customer behavior, market trends, and business outcomes.',
          features: ['Customer Behavior Prediction', 'Market Trend Analysis', 'Risk Assessment', 'Demand Forecasting', 'Churn Prediction'],
          pricing: 'From $1,999/month',
          marketPrice: '$3,000-6,000/month',
          benefits: ['Increase revenue by 25%', 'Reduce customer churn', 'Optimize inventory management'],
          link: '/services/predictive-analytics'
        },
        {
          name: 'Real-time Analytics Dashboard',
          description: 'Live business intelligence dashboards with AI-powered insights and automated alerts.',
          features: ['Real-time Data Processing', 'Automated Alerts', 'Custom Dashboards', 'Mobile Access', 'Data Export'],
          pricing: 'From $1,499/month',
          marketPrice: '$2,500-5,000/month',
          benefits: ['Monitor KPIs in real-time', 'Respond to changes faster', 'Improve decision making'],
          link: '/services/real-time-analytics'
        }
      ]
    },
    {
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Intelligent automation solutions that streamline business processes and workflows',
      services: [
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent business process automation with custom workflows and integrations.',
          features: ['Custom Workflows', 'API Integrations', 'Task Automation', 'Performance Analytics', 'Team Collaboration'],
          pricing: 'From $2,499/month',
          marketPrice: '$4,000-8,000/month',
          benefits: ['Reduce manual tasks by 85%', 'Increase productivity by 60%', 'Streamline operations'],
          link: '/services/ai-workflow-orchestrator'
        },
        {
          name: 'Intelligent Document Processing',
          description: 'AI-powered document processing platform that automatically extracts, categorizes, and analyzes information.',
          features: ['OCR Technology', 'Natural Language Processing', 'Automated Classification', 'Data Extraction', 'Compliance Monitoring'],
          pricing: 'From $1,499/month',
          marketPrice: '$2,500-5,000/month',
          benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Improve organization'],
          link: '/services/ai-document-processing'
        },
        {
          name: 'RPA Solutions',
          description: 'Robotic Process Automation that automates repetitive tasks and business processes.',
          features: ['Task Automation', 'Process Mining', 'Bot Management', 'Exception Handling', 'Performance Monitoring'],
          pricing: 'From $999/month',
          marketPrice: '$1,500-3,000/month',
          benefits: ['Reduce operational costs', 'Eliminate human errors', 'Scale operations efficiently'],
          link: '/services/rpa-solutions'
        }
      ]
    },
    {
      category: 'AI-Powered Customer Experience',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      description: 'AI-driven solutions that enhance customer interactions and improve satisfaction',
      services: [
        {
          name: 'AI Customer Support Suite',
          description: 'Intelligent customer support platform with chatbots, sentiment analysis, and automated responses.',
          features: ['AI Chatbots', 'Sentiment Analysis', 'Automated Responses', 'Knowledge Base', 'Multi-channel Support'],
          pricing: 'From $1,999/month',
          marketPrice: '$3,000-6,000/month',
          benefits: ['Improve response time by 80%', 'Increase customer satisfaction', 'Reduce support costs'],
          link: '/services/ai-customer-support'
        },
        {
          name: 'Personalization Engine',
          description: 'AI-powered personalization that delivers tailored experiences to each customer.',
          features: ['Customer Profiling', 'Content Personalization', 'Product Recommendations', 'Behavioral Analysis', 'A/B Testing'],
          pricing: 'From $2,499/month',
          marketPrice: '$4,000-8,000/month',
          benefits: ['Increase conversion rates by 40%', 'Improve customer engagement', 'Boost revenue'],
          link: '/services/personalization-engine'
        },
        {
          name: 'AI Marketing Automation',
          description: 'Intelligent marketing automation that personalizes campaigns and optimizes customer journeys.',
          features: ['Personalization Engine', 'Predictive Customer Scoring', 'A/B Testing Automation', 'Multi-channel Campaigns', 'ROI Analytics'],
          pricing: 'From $2,499/month',
          marketPrice: '$4,000-8,000/month',
          benefits: ['Increase marketing ROI by 50%', 'Improve campaign performance', 'Automate marketing workflows'],
          link: '/services/ai-marketing-automation'
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Intelligent security solutions that protect data and ensure regulatory compliance',
      services: [
        {
          name: 'AI Threat Detection',
          description: 'Advanced threat detection system that uses machine learning to identify and prevent security breaches.',
          features: ['Threat Detection', 'Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'Security Analytics'],
          pricing: 'From $3,999/month',
          marketPrice: '$6,000-12,000/month',
          benefits: ['Detect threats 5x faster', 'Reduce false positives', 'Improve security posture'],
          link: '/services/ai-threat-detection'
        },
        {
          name: 'Fraud Prevention System',
          description: 'AI-powered fraud detection and prevention system for financial transactions and user activities.',
          features: ['Real-time Fraud Detection', 'Risk Scoring', 'Transaction Monitoring', 'Behavioral Analysis', 'Alert Management'],
          pricing: 'From $2,999/month',
          marketPrice: '$5,000-10,000/month',
          benefits: ['Reduce fraud losses by 70%', 'Improve detection accuracy', 'Minimize false positives'],
          link: '/services/fraud-prevention'
        },
        {
          name: 'AI Compliance Monitor',
          description: 'Automated compliance monitoring system that ensures adherence to regulations and standards.',
          features: ['Compliance Monitoring', 'Audit Trails', 'Policy Management', 'Risk Assessment', 'Reporting'],
          pricing: 'From $1,999/month',
          marketPrice: '$3,000-6,000/month',
          benefits: ['Ensure regulatory compliance', 'Reduce audit preparation time', 'Minimize compliance risks'],
          link: '/services/ai-compliance-monitor'
        }
      ]
    }
  ];

  const stats = [
    { number: '200+', label: 'AI Models Deployed', icon: Brain },
    { number: '95%', label: 'Accuracy Rate', icon: Target },
    { number: '50+', label: 'AI Solutions', icon: Code },
    { number: '24/7', label: 'AI Monitoring', icon: Clock }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful AI implementations with measurable business outcomes.'
    },
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'Cutting-edge machine learning and AI technologies for maximum impact.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick deployment with minimal disruption to your business operations.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance for all AI solutions.'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Advanced AI services including business intelligence, automation, customer experience, and security solutions. Machine learning and artificial intelligence for modern businesses."
        keywords="AI services, machine learning, artificial intelligence, business intelligence, automation, customer experience, AI security, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence. From predictive analytics 
              to intelligent automation, we deliver AI solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/20">
                  <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="space-y-16">
            {aiServiceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                    <p className="text-gray-300 mt-2">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-500/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-white">{service.pricing}</span>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        </div>
                        <p className="text-sm text-green-400 font-medium">Save up to 40% vs market rates</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.link}
                        className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide cutting-edge AI solutions that deliver measurable business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our AI solutions to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300">
                Ready to discuss your AI needs? Contact us today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}