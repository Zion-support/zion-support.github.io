import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail, HelpCircle, BookOpen, Video, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    // General Questions
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect innovators, talent, and cutting-edge technology worldwide, providing comprehensive AI solutions, cybersecurity services, cloud infrastructure, and digital transformation consulting.",
      category: "general"
    },
    {
      question: "Where is Zion Tech Group located?",
      answer: "Zion Tech Group is headquartered in Delaware, USA, with a global presence serving clients worldwide through our digital platform and remote services.",
      category: "general"
    },
    {
      question: "How can I contact Zion Tech Group?",
      answer: "You can contact us through multiple channels: Email at info@ziontechgroup.com, phone at +1 (302) 464-0950, or through our contact form on the website. We also offer live chat support during business hours.",
      category: "general"
    },

    // Services Questions
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer a comprehensive range of technology services including AI solutions, cybersecurity, cloud & DevOps, IT consulting, infrastructure management, digital transformation, and quantum computing services. Our services are tailored for enterprises, startups, and organizations of all sizes.",
      category: "services"
    },
    {
      question: "Do you provide AI consulting services?",
      answer: "Yes, we specialize in AI consulting and implementation. Our AI services include machine learning solutions, natural language processing, computer vision, AI workflow automation, and custom AI development for specific business needs.",
      category: "services"
    },
    {
      question: "What cybersecurity services do you offer?",
      answer: "Our cybersecurity services include security audits, penetration testing, incident response, compliance consulting (SOC 2, GDPR, HIPAA), security awareness training, and ongoing security monitoring and management.",
      category: "services"
    },
    {
      question: "Do you provide cloud migration services?",
      answer: "Yes, we offer comprehensive cloud migration services including assessment, planning, migration execution, and post-migration optimization. We work with AWS, Azure, Google Cloud, and other major cloud providers.",
      category: "services"
    },

    // Pricing & Billing
    {
      question: "How does Zion Tech Group pricing work?",
      answer: "We offer flexible pricing models including project-based pricing, retainer agreements, and subscription plans. Pricing varies based on service complexity, project scope, and ongoing support requirements. Contact us for a personalized quote.",
      category: "pricing"
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations tailored to your specific requirements.",
      category: "pricing"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and digital payments. For enterprise clients, we offer net payment terms and can accommodate various billing cycles.",
      category: "pricing"
    },

    // Technical Support
    {
      question: "What kind of technical support do you provide?",
      answer: "We provide 24/7 technical support for critical systems, regular business hours support for general inquiries, and dedicated support teams for enterprise clients. Support includes troubleshooting, maintenance, and optimization services.",
      category: "support"
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we offer comprehensive training programs for all our solutions. This includes user training, administrator training, and ongoing education to ensure your team can effectively use and maintain the implemented solutions.",
      category: "support"
    },
    {
      question: "What is your response time for support requests?",
      answer: "Our response times vary by priority level: Critical issues (P1) - 1 hour, High priority (P2) - 4 hours, Medium priority (P3) - 24 hours, Low priority (P4) - 48 hours. Enterprise clients receive priority support.",
      category: "support"
    },

    // Partnership & Careers
    {
      question: "How can I become a partner with Zion Tech Group?",
      answer: "We welcome partnerships with technology companies, consultants, and service providers. Partnership opportunities include reseller agreements, technology partnerships, and strategic alliances. Contact our partnerships team to discuss opportunities.",
      category: "partnership"
    },
    {
      question: "Do you hire remote workers?",
      answer: "Yes, we have a distributed team and hire remote workers worldwide. We offer competitive compensation, flexible work arrangements, and opportunities for growth in cutting-edge technology fields.",
      category: "partnership"
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, PyTorch, and many more. We stay current with emerging technologies and industry trends.",
      category: "partnership"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },
    { id: 'services', name: 'Services', count: faqData.filter(item => item.category === 'services').length },
    { id: 'pricing', name: 'Pricing & Billing', count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'support', name: 'Technical Support', count: faqData.filter(item => item.category === 'support').length },
    { id: 'partnership', name: 'Partnership & Careers', count: faqData.filter(item => item.category === 'partnership').length },
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group's services, pricing, and support. 
              Can't find what you're looking for? Contact our team directly.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions and answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
=======
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronDown,
  BookOpen,
  Shield,
  Zap,
  Users,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          id: 1,
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI services, micro SAAS solutions, IT services, and emerging technologies. We help businesses transform their digital operations through innovative technology solutions.'
        },
        {
          id: 2,
          question: 'Where is Zion Tech Group located?',
          answer: 'We have offices in multiple locations worldwide, with our headquarters in San Francisco, California. We serve clients globally and have a distributed team of experts.'
        },
        {
          id: 3,
          question: 'How can I contact Zion Tech Group?',
          answer: 'You can reach us through multiple channels: email at contact@ziontechgroup.com, phone at +1 (555) 123-4567, or through our contact form on the website. We typically respond within 24 hours.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Zap,
      questions: [
        {
          id: 4,
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, and AI consulting. Our solutions are tailored to specific industry needs.'
        },
        {
          id: 5,
          question: 'What is micro SAAS and how can it help my business?',
          answer: 'Micro SAAS refers to specialized, focused software-as-a-service solutions that address specific business needs. These solutions are cost-effective, easy to implement, and provide immediate value without the complexity of enterprise software.'
        },
        {
          id: 6,
          question: 'Do you provide IT consulting services?',
          answer: 'Yes, we offer comprehensive IT consulting services including digital transformation, cloud migration, cybersecurity assessment, infrastructure optimization, and technology strategy development.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Plans',
      icon: Shield,
      questions: [
        {
          id: 7,
          question: 'How do you structure your pricing?',
          answer: 'Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We offer flexible engagement models including fixed-price projects, time and materials, and ongoing support contracts.'
        },
        {
          id: 8,
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide a free initial consultation to understand your needs and discuss potential solutions. This helps us provide accurate project estimates and recommendations.'
        },
        {
          id: 9,
          question: 'Are there ongoing costs after project completion?',
          answer: 'This depends on the type of project. Some solutions require ongoing maintenance and support, while others are self-contained. We\'ll clearly outline all costs during the planning phase.'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      icon: Users,
      questions: [
        {
          id: 10,
          question: 'What kind of support do you provide?',
          answer: 'We offer comprehensive support including 24/7 technical support, regular maintenance updates, performance monitoring, and emergency response. Support levels can be customized based on your needs.'
        },
        {
          id: 11,
          question: 'How quickly do you respond to support requests?',
          answer: 'Response times vary by support tier. Premium support clients receive responses within 2 hours, while standard support clients receive responses within 24 hours. Emergency issues are addressed immediately.'
        },
        {
          id: 12,
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training for all our solutions. This includes user training, administrator training, and ongoing education as new features are released.'
        }
      ]
    }
  ];

  const toggleItem = (itemId: number) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);


  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HelpCircle className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Frequently Asked <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and how we can help transform your business.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  {expandedItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedItems.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
<<<<<<< HEAD
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </div>
          )}
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-xl mb-8 text-zion-cyan-light">
              Our expert team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-zion-cyan rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan-dark text-white rounded-lg font-medium hover:bg-zion-cyan-darker transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-zion-purple-dark text-white rounded-lg font-medium hover:bg-zion-purple-darker transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
=======
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-slate-dark/30 transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <Minus className="w-5 h-5 text-zion-cyan" />
                        ) : (
                          <Plus className="w-5 h-5 text-zion-cyan" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-zion-slate-light leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* No Results */}
          {filteredCategories.length === 0 && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or browse our categories below
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Questions</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Live Chat</h3>
                <p className="text-zion-slate-light mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                  Start Chat
                </button>
              </div>
              
              <div className="text-center">
                <Mail className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Email Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Send us a detailed message
                </p>
                <Link 
                  to="/contact"
                  className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  Send Email
                </Link>
              </div>
              
              <div className="text-center">
                <Phone className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Phone Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Call us directly for immediate assistance
                </p>
                <a 
                  href="tel:+15551234567"
                  className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-12">
              Explore our knowledge base, documentation, and community resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Documentation', description: 'Comprehensive guides and API references', link: '/docs' },
                { icon: Globe, title: 'Knowledge Base', description: 'Articles, tutorials, and best practices', link: '/knowledge' },
                { icon: Users, title: 'Community', description: 'Connect with other users and developers', link: '/community' },
                { icon: Shield, title: 'Support Portal', description: 'Submit tickets and track requests', link: '/support' }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <resource.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{resource.description}</p>
                  <Link 
                    to={resource.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors text-sm font-medium"
                  >
                    Learn More
                    <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />
                  </Link>
                </motion.div>
              ))}
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Access our comprehensive technical documentation and guides.
            </p>
            <Link
              to="/docs"
              className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
            >
              View Documentation →
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-zion-purple/10 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-zion-purple" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 mb-4">
              Learn through our video tutorials and webinars.
            </p>
            <Link
              to="/webinars"
              className="text-zion-purple hover:text-zion-purple-dark font-medium"
            >
              Watch Videos →
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Users2 className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 mb-4">
              Join our community forum for discussions and support.
            </p>
            <Link
              to="/community"
              className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
            >
              Join Community →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
