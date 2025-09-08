import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  MessageSquare, 
  Mail, 
  Phone, 
  Users,
  BookOpen,
  Video,
  Shield,
  Cloud,
  Brain,
  Network,
  Database,
  Zap,
  Globe,
  Settings,
  Code,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Crosshair,
  Radar,
  Satellite,
  Telescope,
  Microscope,
  Binoculars,
  Camera,
  Video2,
  Film,
  Tv,
  Radio,
  Speaker,
  Headphones,
  Mic,
  Phone2,
  Smartphone2,
  Tablet,
  Laptop,
  Watch,
  Clock2,
  Calendar2,
  User2,
  Users2,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState('general');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'training',
      title: 'Training & Support',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const faqData = {
    general: [
      {
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology company specializing in AI, cybersecurity, cloud computing, and emerging technologies. We provide innovative solutions, consulting services, and training programs to help businesses transform and succeed in the digital age.'
      },
      {
        question: 'Where are you located?',
        answer: 'We have offices in multiple locations and serve clients globally. Our headquarters is in the United States, and we have a strong presence in key technology hubs around the world.'
      },
      {
        question: 'How can I contact your team?',
        answer: 'You can reach us through multiple channels: email at contact@ziontechgroup.com, phone at +1 (555) 123-4567, or through our contact form on the website. We typically respond within 24 hours.'
      },
      {
        question: 'Do you work with startups and small businesses?',
        answer: 'Yes, we work with organizations of all sizes, from startups to Fortune 500 companies. We offer scalable solutions and flexible engagement models to meet different business needs and budgets.'
      }
    ],
    services: [
      {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of services including AI development, cybersecurity solutions, cloud migration, data analytics, IoT implementation, quantum computing consulting, and custom software development. We also provide training and certification programs.'
      },
      {
        question: 'Do you provide custom development services?',
        answer: 'Absolutely! We specialize in custom software development tailored to your specific business requirements. Our team works closely with you to understand your needs and deliver solutions that drive real business value.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve clients across various industries including healthcare, finance, manufacturing, retail, transportation, and more. Our solutions are designed to be industry-agnostic while addressing specific sector challenges.'
      },
      {
        question: 'How do you ensure project quality?',
        answer: 'We follow industry best practices including agile methodologies, continuous testing, code reviews, and regular client feedback sessions. Our team includes certified professionals with extensive experience in their respective domains.'
      }
    ],
    'ai-ml': [
      {
        question: 'What AI technologies do you specialize in?',
        answer: 'We specialize in machine learning, deep learning, natural language processing, computer vision, predictive analytics, and AI-powered automation. We work with both traditional ML algorithms and cutting-edge neural network architectures.'
      },
      {
        question: 'Can you help implement AI in existing systems?',
        answer: 'Yes, we specialize in AI integration with legacy systems. We assess your current infrastructure, identify opportunities for AI enhancement, and implement solutions that work seamlessly with your existing technology stack.'
      },
      {
        question: 'How do you ensure AI model accuracy and fairness?',
        answer: 'We implement rigorous testing protocols, bias detection algorithms, and continuous monitoring systems. Our AI models undergo extensive validation and are regularly updated to maintain accuracy and fairness.'
      },
      {
        question: 'What AI frameworks do you use?',
        answer: 'We work with popular frameworks including TensorFlow, PyTorch, Scikit-learn, and cloud-based AI services. We choose the best tools for each specific use case to ensure optimal performance and scalability.'
      }
    ],
    cybersecurity: [
      {
        question: 'What cybersecurity services do you provide?',
        answer: 'We offer comprehensive cybersecurity services including threat assessment, penetration testing, security architecture design, incident response, compliance auditing, and security awareness training for your team.'
      },
      {
        question: 'How do you stay updated with security threats?',
        answer: 'We maintain active threat intelligence feeds, participate in security communities, attend industry conferences, and continuously research emerging threats. Our team is certified in the latest security technologies and methodologies.'
      },
      {
        question: 'Do you provide 24/7 security monitoring?',
        answer: 'Yes, we offer 24/7 security monitoring and incident response services. Our Security Operations Center (SOC) provides round-the-clock protection and immediate response to any security incidents.'
      },
      {
        question: 'What compliance standards do you support?',
        answer: 'We support various compliance standards including SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, and industry-specific regulations. We help you achieve and maintain compliance through proper security controls.'
      }
    ],
    cloud: [
      {
        question: 'Which cloud platforms do you work with?',
        answer: 'We work with all major cloud platforms including AWS, Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your needs and optimize costs.'
      },
      {
        question: 'How do you ensure cloud security?',
        answer: 'We implement security best practices including identity and access management, encryption, network security, and compliance controls. We also provide ongoing security monitoring and regular security assessments.'
      },
      {
        question: 'Can you help with cloud migration?',
        answer: 'Yes, we provide end-to-end cloud migration services including assessment, planning, migration execution, and post-migration optimization. We ensure minimal downtime and risk during the migration process.'
      },
      {
        question: 'How do you optimize cloud costs?',
        answer: 'We analyze your cloud usage patterns, identify cost optimization opportunities, implement auto-scaling, and provide cost monitoring tools. We help you achieve the best performance at the lowest cost.'
      }
    ],
    training: [
      {
        question: 'What training programs do you offer?',
        answer: 'We offer comprehensive training programs in AI, cybersecurity, cloud computing, data analytics, and emerging technologies. Our programs include online courses, live workshops, hands-on labs, and certification preparation.'
      },
      {
        question: 'Are your training programs certified?',
        answer: 'Yes, many of our training programs lead to industry-recognized certifications. We partner with leading certification bodies and provide preparation for exams from AWS, Microsoft, CompTIA, and other organizations.'
      },
      {
        question: 'Do you provide corporate training?',
        answer: 'Yes, we offer customized corporate training programs tailored to your organization\'s specific needs. We can deliver training on-site, virtually, or through our learning management system.'
      },
      {
        question: 'How do you support ongoing learning?',
        answer: 'We provide access to our knowledge base, video tutorials, community forums, and regular webinars. We also offer ongoing support and mentoring to help you continue learning and growing your skills.'
      }
    ]
  };

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFilteredFAQs = (categoryId: string) => {
    const faqs = faqData[categoryId as keyof typeof faqData] || [];
    if (!searchQuery) return faqs;
    
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Answers to
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                {' '}Common Questions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get quick answers to frequently asked questions about our services, 
              technologies, and how we can help your business succeed.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer ${
                  openCategory === category.id ? 'border-blue-500/50 bg-slate-800/70' : ''
                }`}
                onClick={() => setOpenCategory(category.id)}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} w-fit mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <div className="text-sm text-gray-400">
                  {getFilteredFAQs(category.id).length} questions
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            <motion.div
              key={openCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {faqCategories.find(c => c.id === openCategory)?.title}
                </h2>
                
                <div className="space-y-4">
                  {getFilteredFAQs(openCategory).map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                        onClick={() => toggleItem(`${openCategory}-${index}`)}
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            expandedItems.has(`${openCategory}-${index}`) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedItems.has(`${openCategory}-${index}`) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {getFilteredFAQs(openCategory).length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-gray-400 text-lg mb-4">
                      No questions found matching your search criteria.
                    </div>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Clear search
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm">Get help via email</p>
                <a href="mailto:support@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 text-sm">
                  support@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400 text-sm">Call us directly</p>
                <a href="tel:+15551234567" className="text-green-400 hover:text-green-300 text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400 text-sm">Chat with our team</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Support
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="/knowledge-base"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Browse Knowledge Base
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
