import React, { useState } from 'react';
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
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                  >
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
