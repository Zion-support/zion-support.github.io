<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  Users2,
  HelpCircle
} from 'lucide-react';

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState(new Set([0]));
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = [
    {
      category: 'general',
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group provides comprehensive technology solutions including AI services, cybersecurity, cloud computing, digital transformation, and quantum technology solutions. We specialize in cutting-edge technologies that help businesses innovate and grow."
    },
    {
      category: 'general',
      question: "How can I get started with Zion Tech Group?",
      answer: "Getting started is easy! Simply contact us through our contact form, give us a call, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
    },
    {
      category: 'pricing',
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including project-based pricing, subscription services, and custom enterprise solutions. Pricing depends on the scope of work, complexity, and duration. Contact us for a personalized quote."
    },
    {
      category: 'pricing',
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your business needs and discuss potential solutions. This helps us provide accurate recommendations and pricing for your specific requirements."
    },
    {
      category: 'technical',
      question: "What technologies do you specialize in?",
      answer: "We specialize in AI and machine learning, quantum computing, blockchain, cybersecurity, cloud infrastructure, IoT, and emerging technologies. Our team stays current with the latest technological advancements."
    },
    {
      category: 'technical',
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely! We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes monitoring, updates, troubleshooting, and technical support."
    },
    {
      category: 'security',
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure development practices, regular security audits, and compliance with industry standards like GDPR, SOC 2, and ISO 27001."
    },
    {
      category: 'security',
      question: "What compliance standards do you meet?",
      answer: "We maintain compliance with major standards including GDPR, SOC 2 Type II, ISO 27001, HIPAA, and PCI DSS. Our security practices are regularly audited and updated to meet evolving requirements."
    },
    {
      category: 'support',
      question: "What is your response time for support requests?",
      answer: "We provide different support tiers with response times ranging from 1 hour for critical issues to 24 hours for general inquiries. Premium support clients receive priority response times and dedicated support channels."
    },
    {
      category: 'support',
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs to help your team effectively use and maintain the solutions we implement. This includes initial training, ongoing education, and access to our knowledge base."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },
    { id: 'pricing', name: 'Pricing', count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'technical', name: 'Technical', count: faqData.filter(item => item.category === 'technical').length },
    { id: 'security', name: 'Security', count: faqData.filter(item => item.category === 'security').length },
    { id: 'support', name: 'Support', count: faqData.filter(item => item.category === 'support').length }
  ];

  const filteredFAQ = useMemo(() => {
    return faqData.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
=======
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Users, ShoppingCart, Shield, Zap, Globe } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: FAQItem[];
}
const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
  const toggleCategory = (title: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(title)) {
      newOpenCategories.delete(title);
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
    } else {
      newOpenCategories.add(title);
    }
    setOpenCategories(newOpenCategories);
  };
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group's services, pricing, and support. 
              Can't find what you're looking for? Contact our team directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 futuristic-input text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/80 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="futuristic-card overflow-hidden group hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-medium text-white">{item.question}</span>
                    {expandedItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-zion-cyan" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                    )}
                  </button>
                  {expandedItems.has(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 border-t border-zion-slate-light/20"
                    >
                      <p className="text-zion-slate-light leading-relaxed mt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-zion-slate-light">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="futuristic-card bg-gradient-to-r from-zion-cyan to-zion-purple p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Still have questions?
              </h2>
              <p className="text-xl mb-8 text-zion-slate-lighter">
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
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-zion-purple-dark text-white rounded-lg font-medium hover:bg-zion-purple-darker transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
                Additional Resources
              </h2>
              <p className="futuristic-text text-lg max-w-2xl mx-auto">
                Explore our comprehensive resources to learn more about our services and solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
                <p className="text-zion-slate-light mb-4">
                  Access our comprehensive technical documentation and guides.
                </p>
                <Link
                  to="/docs"
                  className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                >
                  View Documentation →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
                <p className="text-zion-slate-light mb-4">
                  Learn through our video tutorials and webinars.
                </p>
                <Link
                  to="/webinars"
                  className="text-zion-purple hover:text-zion-purple-light font-medium transition-colors"
                >
                  Watch Videos →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light mb-4">
                  Join our community forum for discussions and support.
                </p>
                <Link
                  to="/community"
                  className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                >
                  Join Community →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
=======
  const faqCategories: FAQCategory[] = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
        },
        {
          question: "How does the AI talent matching work?",
          answer: "Our AI-powered matching system analyzes your project requirements, budget, and timeline to connect you with the most suitable tech professionals. The system considers skills, experience, availability, and past performance to ensure optimal matches."
        },
        {
          question: "What types of services do you offer?",
          answer: "We offer a wide range of services including AI development, software engineering, IT consulting, equipment rental, green IT solutions, and specialized tech services. Our marketplace covers everything from individual freelancers to enterprise solutions."
        },
        {
          question: "Is Zion Tech Group free to use?",
          answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. Some premium features and enterprise solutions may have associated costs."
        }
      ]
    },
    {
      title: "For Talent & Creators",
      icon: Users,
      questions: [
        {
          question: "How do I get started as a client?",
          answer: "Simply create an account, post your project requirements, and our AI will match you with suitable talent. You can also browse our talent directory, equipment listings, and service categories to find what you need."
        },
        {
          question: "What types of services can I offer?",
          answer: "You can offer any tech-related service including AI development, software engineering, data science, IT consulting, cybersecurity, cloud services, and more. We support both technical and business services."
        },
        {
          question: "How do I get hired?",
          answer: "Optimize your profile with relevant keywords, showcase your best work, and actively respond to client inquiries. You can also browse available projects and submit proposals to clients who match your skills."
        }
      ]
    },
    {
      title: "For Clients & Businesses",
      icon: ShoppingCart,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Use our search and filter tools to find professionals with the specific skills you need. You can also post detailed project requirements and let qualified talent come to you with proposals."
        },
        {
          question: "What types of projects can I post?",
          answer: "You can post any tech-related project including AI development, software development, IT consulting, data analysis, cybersecurity assessments, and more. Be specific about your requirements and timeline."
        },
        {
          question: "How do payments work?",
          answer: "We offer secure milestone-based payments. Set up payment milestones for your project, and funds are released as each milestone is completed and approved. This protects both clients and talent."
        }
      ]
    },
    {
      title: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How do you verify talent and clients?",
          answer: "We implement a comprehensive verification system including identity verification, skill assessments, portfolio reviews, and client feedback. All users must verify their email and can optionally complete additional verification steps."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "We have a dedicated dispute resolution team that helps mediate conflicts between clients and talent. We review project details, communication records, and deliverables to ensure fair outcomes for all parties."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use enterprise-grade security measures including encryption, secure payment processing, and regular security audits. We never share your personal information with third parties without your consent."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: Globe,
      questions: [
        {
          question: "What AI-powered features do you offer?",
          answer: "Our platform includes AI-powered talent matching, automated project recommendations, intelligent search algorithms, and predictive analytics to help you find the best matches for your needs."
        },
        {
          question: "Can I integrate with other tools?",
          answer: "Yes, we offer API access and integrations with popular project management tools, communication platforms, and payment systems. Enterprise clients can also request custom integrations."
        },
        {
          question: "Do you offer mobile apps?",
          answer: "Yes, we have mobile apps for both iOS and Android that provide full access to all platform features, including real-time messaging, project updates, and mobile-optimized browsing."
        }
      ]
    }
  ];
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );
  const filteredQuestions = allQuestions.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCategories = faqCategories.filter(category =>
    category.questions.some(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2"/>
            FAQ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions about Zion Tech Group's AI marketplace, 
            services, and platform features.
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        {/* Search Results */}
        {searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Search Results ({filteredQuestions.length})
            </h2>
            <div className="space-y-4">
              {filteredQuestions.map((item, index) => (
                <div key={index} className="bg-slate-800/50 border border-white/10 rounded-lg p-6">
                  <div className="text-sm text-green-400 mb-2">{item.category}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* FAQ Categories */}
        {!searchTerm && (
          <div className="space-y-6">
            {faqCategories.map((category) => (
              <div key={category.title} className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                  </div>
                  {openCategories.has(category.title) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openCategories.has(category.title) && (
                  <div className="border-t border-white/10">
                    <div className="p-6 space-y-6">
                      {category.questions.map((item, index) => (
                        <div key={index} className="border-l-4 border-green-500/50 pl-4">
                          <h3 className="text-lg font-semibold text-white mb-3">
                            {item.question}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Contact Support */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/support" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Support
            </a>
            <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
    </div>
  );
}
