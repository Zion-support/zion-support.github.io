import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
=======
import { SEO              } from '../components/SEO';
import { Link              } from 'react-router-dom.ts';
import { Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  FileText,
  HelpCircle,
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  ChevronRight
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
} from 'lucide-react';

export default function Help(...args[]: any):  {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'How to create your first account',
          description: 'Step-by-step guide to setting up your Zion Tech Group account',
          url: '/help/account-creation'
        },
        {
          title: 'Understanding the marketplace',
          description: 'Learn how our AI and tech marketplace works',
          url: '/help/marketplace-guide'
        },
        {
          title: 'First steps for new users',
          description: 'Essential information to get you started quickly',
          url: '/help/first-steps'
        }
      ]
    },
    {
      id: 'account-management',
      title: 'Account Management',
      icon: Users,
      articles: [
        {
          title: 'Updating your profile information',
          description: 'How to keep your profile current and accurate',
          url: '/help/profile-updates'
        },
        {
          title: 'Security settings and two-factor authentication',
          description: 'Protect your account with enhanced security features',
          url: '/help/security-settings'
        },
        {
          title: 'Managing notifications and preferences',
          description: 'Customize how and when you receive updates',
          url: '/help/notifications'
        }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace Features',
      icon: Globe,
      articles: [
        {
          title: 'How to list your services',
          description: 'Create compelling service listings that attract clients',
          url: '/help/service-listings'
        },
        {
          title: 'Finding and hiring talent',
          description: 'Discover and connect with skilled professionals',
          url: '/help/hiring-talent'
        },
        {
          title: 'Payment and billing explained',
          description: 'Understanding our payment system and fees',
          url: '/help/payments'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Technology Services',
      icon: Settings,
      articles: [
        {
          title: 'Available AI solutions',
          description: 'Overview of our artificial intelligence services',
          url: '/help/ai-solutions'
        },
        {
          title: 'Cybersecurity services guide',
          description: 'Protect your business with our security solutions',
          url: '/help/cybersecurity'
        },
        {
          title: 'Cloud and infrastructure services',
          description: 'Understanding our cloud computing offerings',
          url: '/help/cloud-services'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: CreditCard,
      articles: [
        {
          title: 'Understanding your invoice',
          description: 'Breakdown of charges and payment terms',
          url: '/help/invoice-guide'
        },
        {
          title: 'Payment methods accepted',
          description: 'All the ways you can pay for our services',
          url: '/help/payment-methods'
        },
        {
          title: 'Billing disputes and refunds',
          description: 'How to resolve billing issues',
          url: '/help/billing-disputes'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      articles: [
        {
          title: 'Data protection and privacy',
          description: 'How we protect your information',
          url: '/help/data-protection'
        },
        {
          title: 'Security best practices',
          description: 'Tips to keep your account secure',
          url: '/help/security-best-practices'
        },
        {
          title: 'Reporting security issues',
          description: 'What to do if you find a security problem',
          url: '/help/report-security'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group?',
      answer: 'Getting started is easy! Simply create an account, browse our services, and contact us for a consultation. Our team will guide you through the process and help you choose the right solutions for your needs.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI development. Our solutions are tailored to your specific business requirements.'
    },
    {
      question: 'How quickly can you deliver a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple implementations can be completed in weeks, while complex enterprise solutions may take several months. We always provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive ongoing support including 24/7 monitoring, regular updates, maintenance, and technical support. Our support packages are designed to ensure your solutions continue performing optimally.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across all industries including healthcare, finance, manufacturing, retail, education, and government. Our AI solutions are adaptable to any sector and can be customized for specific industry requirements.'
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      available: true,
      responseTime: 'Immediate'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      available: true,
      responseTime: 'Within 1 hour'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us detailed questions',
      available: true,
      responseTime: 'Within 24 hours'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance',
      available: true,
      responseTime: 'Always available'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}help you?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get 
              the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-400 text-white border-cyan-400'
                  : 'bg-slate-800/50 text-gray-300 border-slate-600/50 hover: anyanyanyanyanyanyanyanyanyanyanyanyanyborder-cyan-400/50 hover:text-cyan-400'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category)              => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-white border-cyan-400'
                    : 'bg-slate-800/50 text-gray-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-400'
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-300">Most frequently accessed help content</p>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index)              => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={article.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 mt-4">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </section>
      )}

            className="text-center mb-12"

            <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
            <p className="text-gray-300">We're here to help when you need us</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
              {supportHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${
                    index !== supportHours.length - 1 ? 'border-b border-slate-700/50' : ''
                  }`}

                  <div className="flex items-center space-x-3">
                    <Clock className={`w-5 h-5 ${schedule.available ? 'text-green-400' : 'text-orange-400'}`} />
                    <span className="text-white font-medium">{schedule.day}</span>
=======
      {/* Help Categories */}
      {!searchQuery && (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial = {
  { opacity: 0,
  y: 30 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Help Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Browse help articles organized by topic and service
              </p>
            </motion.div>
            
            <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index)               => (
                <motion.div
                  key={category.id}
                  initial = {
  { opacity: 0,
  y: 30 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  viewport={{ once: true }}
                  transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Popular Articles:</h4>
                      <div className="space-y-3">
                        {category.articles.slice(0, 3).map((article, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                            <div>
                              <h5 className="text-white font-medium text-sm">{article.title}</h5>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-slate-400 text-xs flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="text-slate-400 text-xs">{article.difficulty}</span>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                      View All {category.name} Help
                    </button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Support Hours & Contact */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial = {
  { opacity: 0,
  x: -30 

}}
              whileInView = {
  { opacity: 1,
  x: 0 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours
              </h2>
              <div className="space-y-6">
                {supportHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{schedule.day}</h3>
                      <p className="text-slate-300">{schedule.hours}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.available 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {schedule.available ? 'Available' : 'Limited'}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
                <p className="text-slate-300 mb-4">
                  For critical issues outside business hours, we provide emergency support for enterprise customers.
                </p>
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Call Emergency Line
                  <Phone className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial = {
  { opacity: 0,
  x: 30 

}}
              whileInView = {
  { opacity: 1,
  x: 0 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone Support</h4>
                      <p className="text-slate-300">+1 302 464 0950</p>
                      <p className="text-slate-400 text-sm">Available during support hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email Support</h4>
                      <p className="text-slate-300">support@ziontechgroup.com</p>
                      <p className="text-slate-400 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Office Address</h4>
                      <p className="text-slate-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                      <p className="text-slate-400 text-sm">By appointment only</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Response Times</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">General inquiries:</span>
                      <span className="text-slate-400">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Technical issues:</span>
                      <span className="text-slate-400">4-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Critical issues:</span>
                      <span className="text-slate-400">1-2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mr-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                  <p className="text-xl text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
                {category.articles.map((article, articleIndex)              => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (articleIndex * 0.05) }}
                    className="group"
                  >
                    <Link to={article.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Help Fast</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the support you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/50">
                  {channel.responseTime}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Help Center</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our comprehensive help articles and guides
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {category.articles.length} articles available
                      </p>
                    </div>
                  </div>
                  {openCategories.includes(category.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {openCategories.includes(category.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"

                    <div className="p-6">
                      <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                        {category.articles.map((article, articleIndex)              => (
                          <a
                            key={articleIndex}
                            href={article.url}
                            className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 border border-slate-600/30 hover:border-cyan-400/50"

                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium">{article.title}</h4>
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                article.type === 'guide' ? 'bg-blue-500/20 text-blue-400' :
                                article.type === 'tutorial' ? 'bg-green-500/20 text-green-400' :
                                'bg-purple-500/20 text-purple-400'
                              }`}>
                                {article.type}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{article.description}</p>
                          </a>
                        ))}
                      </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Documentation',
                description: 'Comprehensive technical documentation and API references',
                url: '/help/documentation',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Video,
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for common tasks',
                url: '/help/videos',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Download,
                title: 'Downloads',
                description: 'Software, tools, and resources for your projects',
                url: '/help/downloads',
                color: 'from-purple-500 to-purple-600'

            ].map((resource, index)              => (
              <motion.a
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              More ways to learn and get support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8" />,
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for common tasks',
                link: '/tutorials'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Documentation',
                description: 'Comprehensive technical documentation and APIs',
                link: '/docs'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Forum',
                description: 'Connect with other users and share experiences',
                link: '/community'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                >
                  Explore
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;