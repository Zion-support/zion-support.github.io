import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  FileText,
  Video,
  Download,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Brain,
  Code,
  Network
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-zion-cyan to-zion-blue',
      articles: [
        { title: 'How to create an account', href: '/help/account-creation', difficulty: 'Beginner' },
        { title: 'First steps after registration', href: '/help/first-steps', difficulty: 'Beginner' },
        { title: 'Understanding the dashboard', href: '/help/dashboard-guide', difficulty: 'Beginner' },
        { title: 'Profile setup guide', href: '/help/profile-setup', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      articles: [
        { title: 'AI Consciousness Simulator guide', href: '/help/ai-consciousness', difficulty: 'Intermediate' },
        { title: 'Setting up AI Autonomous Systems', href: '/help/ai-autonomous', difficulty: 'Advanced' },
        { title: 'Neural Network Architect basics', href: '/help/neural-networks', difficulty: 'Intermediate' },
        { title: 'AI Ethics Framework implementation', href: '/help/ai-ethics', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Micro SAAS Platform',
      icon: Code,
      color: 'from-zion-purple to-zion-cyan',
      articles: [
        { title: 'AI Business Intelligence setup', href: '/help/ai-bi-setup', difficulty: 'Intermediate' },
        { title: 'Customer Experience Hub configuration', href: '/help/cx-hub', difficulty: 'Intermediate' },
        { title: 'Supply Chain Optimizer guide', href: '/help/supply-chain', difficulty: 'Advanced' },
        { title: 'Cybersecurity Platform deployment', href: '/help/cybersecurity', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'IT Services',
      icon: Network,
      color: 'from-zion-blue to-zion-purple',
      articles: [
        { title: 'Infrastructure Management overview', href: '/help/infrastructure', difficulty: 'Intermediate' },
        { title: 'Digital Transformation roadmap', href: '/help/digital-transformation', difficulty: 'Advanced' },
        { title: 'Green IT Solutions implementation', href: '/help/green-it', difficulty: 'Intermediate' },
        { title: '5G Network Solutions guide', href: '/help/5g-solutions', difficulty: 'Advanced' }
      ]
    }
  ];

  const quickActions = [
    { title: 'Contact Support', icon: MessageCircle, href: '/contact', color: 'from-zion-cyan to-zion-blue' },
    { title: 'Live Chat', icon: MessageCircle, href: '/chat', color: 'from-zion-purple to-zion-cyan' },
    { title: 'Phone Support', icon: Phone, href: 'tel:+13024640950', color: 'from-zion-blue to-zion-purple' },
    { title: 'Email Support', icon: Mail, href: 'mailto:kleber@ziontechgroup.com', color: 'from-zion-cyan to-zion-green' }
  ];

  const resources = [
    { title: 'API Documentation', icon: FileText, href: '/api-docs', description: 'Complete API reference and examples' },
    { title: 'Video Tutorials', icon: Video, href: '/tutorials', description: 'Step-by-step video guides' },
    { title: 'Download Center', icon: Download, href: '/downloads', description: 'Software, tools, and resources' },
    { title: 'Community Forum', icon: Users, href: '/forum', description: 'Connect with other users' }
  ];

  const faqItems = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is simple! Create a free account, complete your profile, and explore our marketplace. You can immediately browse services, connect with professionals, or showcase your own expertise."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. Enterprise clients can also set up invoicing and payment terms."
    },
    {
      question: "How do you ensure service quality?",
      answer: "We implement a comprehensive verification system including profile verification, skill assessments, client reviews, and dispute resolution processes."
    },
    {
      question: "Is there a cost to use the platform?",
      answer: "Basic access to our marketplace is completely free. Premium features and advanced tools are available through our enterprise plans."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Help
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Center
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Find answers, get support, and learn how to make the most of Zion Tech Group's innovative technology solutions.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  className="w-full px-6 py-4 pl-14 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help Now?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get immediate assistance through our various support channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={action.href}
                  className="block bg-zion-slate/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {action.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Help Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse organized help articles and guides for different service areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <motion.div
                      key={article.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: articleIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={article.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-white group-hover:text-zion-cyan transition-colors duration-300">
                            {article.title}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                            {article.difficulty}
                          </span>
                          <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive library of resources to enhance your experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={resource.href}
                  className="block bg-zion-slate/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 h-full group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-zion-slate-light">
                    {resource.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Quick answers to common questions about our services and platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  {item.question}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Browse FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
