import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  ChevronDown,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Zap,
  Shield,
  Cloud,
  Brain,
  Lock,
  Rocket,
  Cpu,
  TrendingUp,
  Leaf,
  User,
  Briefcase,
  Wrench,
  ShoppingCart
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const helpCategories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 156 },
    { id: 'getting-started', name: 'Getting Started', icon: Zap, count: 23 },
    { id: 'marketplace', name: 'Marketplace', icon: ShoppingCart, count: 34 },
    { id: 'services', name: 'Services', icon: Briefcase, count: 28 },
    { id: 'account', name: 'Account & Billing', icon: User, count: 19 },
    { id: 'technical', name: 'Technical Support', icon: Wrench, count: 32 },
    { id: 'security', name: 'Security & Privacy', icon: Shield, count: 20 }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group?",
      answer: "Getting started is easy! Simply create an account, browse our marketplace for products and services, and contact our team for personalized assistance. We offer free consultations to help you find the right solutions for your business needs.",
      category: "getting-started",
      tags: ["onboarding", "account", "consultation"]
    },
    {
      id: 2,
      question: "What types of services do you offer?",
      answer: "We offer a comprehensive range of technology services including AI & Analytics, Cybersecurity, Cloud Solutions, Quantum Computing, Blockchain, IoT & Edge Computing, Digital Marketing, and more. Our services are tailored for businesses of all sizes.",
      category: "services",
      tags: ["services", "ai", "cybersecurity", "cloud"]
    },
    {
      id: 3,
      question: "How do I purchase products from the marketplace?",
      answer: "Browse our marketplace, add items to your cart, and proceed to checkout. We accept major credit cards, bank transfers, and offer flexible payment plans for enterprise customers. All transactions are secure and encrypted.",
      category: "marketplace",
      tags: ["purchase", "payment", "checkout", "security"]
    },
    {
      id: 4,
      question: "What is your refund and return policy?",
      answer: "We offer a 30-day satisfaction guarantee for most products and services. Digital products may have different terms. Contact our support team within 30 days for refund requests. Enterprise contracts have specific terms outlined in your agreement.",
      category: "account",
      tags: ["refund", "return", "policy", "guarantee"]
    },
    {
      id: 5,
      question: "How do I contact technical support?",
      answer: "Technical support is available 24/7 through multiple channels: live chat on our website, email at support@ziontechgroup.com, or phone at +1 302 464 0950. For urgent issues, use our priority support line.",
      category: "technical",
      tags: ["support", "contact", "urgent", "24/7"]
    },
    {
      id: 6,
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, SOC 2 compliance, and advanced threat detection. Your data and transactions are protected by industry-leading security protocols.",
      category: "security",
      tags: ["security", "encryption", "compliance", "audit"]
    },
    {
      id: 7,
      question: "Do you offer custom development services?",
      answer: "Yes! We specialize in custom software development, AI solutions, and technology consulting. Our team of experts can build tailored solutions for your specific business requirements. Contact us for a free consultation and quote.",
      category: "services",
      tags: ["custom", "development", "consulting", "quote"]
    },
    {
      id: 8,
      question: "What are your business hours?",
      answer: "Our main office is open Monday-Friday, 9 AM - 6 PM EST. However, our support team and marketplace are available 24/7. For urgent matters outside business hours, use our emergency support line.",
      category: "getting-started",
      tags: ["hours", "support", "emergency", "availability"]
    }
  ];

  const quickActions = [
    {
      title: "Create Account",
      description: "Sign up for a free account to access our marketplace",
      icon: User,
      link: "/signup",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Browse Services",
      description: "Explore our comprehensive service offerings",
      icon: Briefcase,
      link: "/services",
      color: "from-zion-purple to-zion-red"
    },
    {
      title: "Contact Sales",
      description: "Get in touch with our sales team for enterprise solutions",
      icon: MessageCircle,
      link: "/contact",
      color: "from-zion-green to-zion-cyan"
    },
    {
      title: "View Documentation",
      description: "Access technical documentation and guides",
      icon: BookOpen,
      link: "/docs",
      color: "from-zion-orange to-zion-purple"
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "Instant",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message for complex issues",
      icon: Mail,
      availability: "24/7",
      responseTime: "Within 4 hours",
      color: "from-zion-purple to-zion-red"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      availability: "9 AM - 6 PM EST",
      responseTime: "Immediate",
      color: "from-zion-green to-zion-cyan"
    },
    {
      title: "Video Call",
      description: "Schedule a screen sharing session for complex issues",
      icon: Video,
      availability: "By appointment",
      responseTime: "Within 24 hours",
      color: "from-zion-orange to-zion-purple"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How Can We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Help You?</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions, get technical support, and access resources to help you succeed with Zion Tech Group.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help topics, FAQs, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quick Actions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={action.link}>
                  <div className={`bg-gradient-to-br ${action.color} p-6 rounded-lg text-center group-hover:shadow-lg transition-all duration-300`}>
                    <action.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                    <p className="text-white/80 text-sm">{action.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Support Channels
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-br ${channel.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-center mb-2">{channel.title}</h3>
                <p className="text-zion-slate-light text-sm text-center mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Response:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-zinc-700/50 text-white border border-zion-cyan/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {helpCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-700/50 transition-colors duration-200"
                >
                  <h3 className="text-white font-semibold text-lg">{faq.question}</h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-zion-slate-light mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Contact us through any of our support channels for personalized assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-700/50 rounded-lg p-6 border border-zion-cyan/20">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-zion-slate-light text-sm mb-3">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-zinc-700/50 rounded-lg p-6 border border-zion-cyan/20">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-zion-slate-light text-sm mb-3">Send us a detailed message</p>
                <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  support@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-zinc-700/50 rounded-lg p-6 border border-zion-cyan/20">
                <MessageCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                <p className="text-zion-slate-light text-sm mb-3">Get instant help online</p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Support
              </Link>
              <Link to="/faq" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">
                View All FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}