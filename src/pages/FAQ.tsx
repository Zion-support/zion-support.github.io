import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  Shield,
  Zap,
  Cloud,
  Brain,
  Rocket,
  Users,
  Globe,
  Lock,
  HelpCircle,
  Mail,
  Phone,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories: FAQCategory[] = [
    {
      id: 'general',
      name: 'General',
      icon: <HelpCircle className="w-6 h-6" />,
      description: 'Basic questions about Zion Tech Group',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'services',
      name: 'Services',
      icon: <Zap className="w-6 h-6" />,
      description: 'Questions about our service offerings',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai',
      name: 'AI & Analytics',
      icon: <Brain className="w-6 h-6" />,
      description: 'AI and data analytics services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      description: 'Cloud computing and DevOps solutions',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      description: 'Security and compliance services',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'support',
      name: 'Support',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Technical support and customer service',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const faqData: FAQItem[] = [
    // General
    {
      id: 'what-is-zion',
      question: 'What is Zion Tech Group?',
      answer: 'Zion Tech Group is a leading technology consulting company specializing in AI, cloud computing, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to drive innovation and growth.',
      category: 'general',
      tags: ['company', 'about', 'overview']
    },
    {
      id: 'where-located',
      question: 'Where is Zion Tech Group located?',
      answer: 'We are headquartered in the United States with offices in major tech hubs and serve clients globally through our remote-first approach and strategic partnerships.',
      category: 'general',
      tags: ['location', 'offices', 'global']
    },
    {
      id: 'company-size',
      question: 'How large is your company?',
      answer: 'Zion Tech Group is a growing company with a team of experienced professionals across various technology domains. We maintain a lean, agile structure to provide personalized service while leveraging our extensive network of experts.',
      category: 'general',
      tags: ['size', 'team', 'structure']
    },

    // Services
    {
      id: 'service-offerings',
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer a comprehensive range of services including AI and machine learning solutions, cloud infrastructure and DevOps, cybersecurity services, digital transformation consulting, IoT solutions, and custom software development.',
      category: 'services',
      tags: ['services', 'offerings', 'portfolio']
    },
    {
      id: 'custom-solutions',
      question: 'Do you provide custom solutions?',
      answer: 'Yes, we specialize in creating custom technology solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop solutions that drive real business value.',
      category: 'services',
      tags: ['custom', 'tailored', 'solutions']
    },
    {
      id: 'industry-focus',
      question: 'What industries do you serve?',
      answer: 'We serve clients across various industries including healthcare, finance, manufacturing, retail, education, and technology. Our solutions are adaptable to meet the unique challenges of different sectors.',
      category: 'services',
      tags: ['industries', 'sectors', 'clients']
    },

    // AI & Analytics
    {
      id: 'ai-capabilities',
      question: 'What AI capabilities do you offer?',
      answer: 'Our AI services include machine learning model development, natural language processing, computer vision, predictive analytics, recommendation systems, and AI strategy consulting. We help businesses implement AI solutions that deliver measurable results.',
      category: 'ai',
      tags: ['AI', 'machine learning', 'analytics']
    },
    {
      id: 'data-privacy',
      question: 'How do you handle data privacy in AI projects?',
      answer: 'Data privacy is paramount in all our AI projects. We implement strict data governance practices, ensure compliance with regulations like GDPR and CCPA, and use privacy-preserving techniques when possible.',
      category: 'ai',
      tags: ['privacy', 'compliance', 'GDPR']
    },
    {
      id: 'ai-roi',
      question: 'How do you measure AI project ROI?',
      answer: 'We establish clear KPIs and success metrics at the start of each project. ROI is measured through improved efficiency, cost savings, revenue growth, and other business metrics relevant to your specific use case.',
      category: 'ai',
      tags: ['ROI', 'metrics', 'measurement']
    },

    // Cloud & DevOps
    {
      id: 'cloud-providers',
      question: 'Which cloud providers do you work with?',
      answer: 'We work with all major cloud providers including AWS, Azure, and Google Cloud Platform. We help you choose the best platform for your needs and can also implement multi-cloud strategies for optimal performance and cost efficiency.',
      category: 'cloud',
      tags: ['AWS', 'Azure', 'GCP', 'multi-cloud']
    },
    {
      id: 'devops-benefits',
      question: 'What are the benefits of implementing DevOps?',
      answer: 'DevOps implementation leads to faster software delivery, improved collaboration between development and operations teams, increased deployment frequency, reduced failure rates, and faster recovery from failures.',
      category: 'cloud',
      tags: ['DevOps', 'automation', 'deployment']
    },
    {
      id: 'cost-optimization',
      question: 'How do you optimize cloud costs?',
      answer: 'We implement various cost optimization strategies including right-sizing resources, implementing auto-scaling, using reserved instances, monitoring usage patterns, and implementing cost governance policies.',
      category: 'cloud',
      tags: ['cost', 'optimization', 'savings']
    },

    // Cybersecurity
    {
      id: 'security-standards',
      question: 'What security standards do you follow?',
      answer: 'We follow industry best practices and standards including ISO 27001, SOC 2, NIST Cybersecurity Framework, and OWASP guidelines. Our security approach is comprehensive and continuously updated to address emerging threats.',
      category: 'security',
      tags: ['standards', 'compliance', 'best practices']
    },
    {
      id: 'incident-response',
      question: 'Do you provide incident response services?',
      answer: 'Yes, we offer 24/7 incident response services including threat detection, rapid response, forensic analysis, and recovery assistance. We also help develop incident response plans and conduct security training.',
      category: 'security',
      tags: ['incident response', 'threats', 'recovery']
    },
    {
      id: 'compliance-help',
      question: 'Can you help with compliance requirements?',
      answer: 'Absolutely. We help businesses achieve and maintain compliance with various regulations including HIPAA, PCI DSS, SOX, and industry-specific requirements. Our team includes compliance experts who understand the technical and regulatory landscape.',
      category: 'security',
      tags: ['compliance', 'HIPAA', 'PCI DSS', 'SOX']
    },

    // Support
    {
      id: 'support-hours',
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support for critical issues and business hours support for general inquiries. Premium support plans include dedicated support managers and faster response times.',
      category: 'support',
      tags: ['support', 'hours', 'availability']
    },
    {
      id: 'response-time',
      question: 'What is your typical response time?',
      answer: 'Response times vary by support tier: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours). Premium clients receive faster response times.',
      category: 'support',
      tags: ['response', 'SLA', 'priority']
    },
    {
      id: 'training-offered',
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we offer comprehensive training programs including user training, administrator training, and technical training. We also provide documentation, video tutorials, and ongoing support to ensure successful adoption.',
      category: 'support',
      tags: ['training', 'documentation', 'adoption']
    }
  ];

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryStats = (categoryId: string) => {
    if (categoryId === 'all') {
      return faqData.length;
    }
    return faqData.filter(item => item.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Find answers to common questions about Zion Tech Group's services, 
              solutions, and how we can help transform your business with cutting-edge technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left group ${
                  selectedCategory === category.id
                    ? 'border-cyan-500 bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                    : 'border-slate-600/30 bg-white/5 hover:border-slate-500/50 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  {category.description}
                </p>
                <div className="text-cyan-400 font-medium text-sm">
                  {getCategoryStats(category.id)} questions
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Questions' : categories.find(c => c.id === selectedCategory)?.name + ' Questions'}
              </h3>
              <span className="text-slate-400">
                {filteredFAQs.length} of {faqData.length} questions
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <AnimatePresence>
              {filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/5 border border-slate-600/30 rounded-xl overflow-hidden backdrop-blur-md"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.question}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="capitalize">{item.category}</span>
                        <div className="flex gap-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 text-slate-400">
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedItems.has(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-600/30">
                          <p className="text-slate-300 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No questions found
              </h3>
              <p className="text-slate-400">
                Try adjusting your search terms or browse by category to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Support</h4>
                  <p className="text-slate-400 text-sm">support@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone Support</h4>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Response Time</h4>
                  <p className="text-slate-400 text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
