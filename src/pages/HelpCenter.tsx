import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Video,
  Download,
  ExternalLink,
  Star,
  HelpCircle,
  Settings,
  Users,
  Shield,
  Zap
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0]));

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      description: 'New to Zion Tech Group? Start here',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Zap,
      description: 'AI and machine learning services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical issues and troubleshooting',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'billing-account',
      title: 'Billing & Account',
      icon: Users,
      description: 'Account management and billing',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      icon: Shield,
      description: 'Security features and compliance',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const faqs = {
    'getting-started': [
      {
        question: "How do I get started with Zion Tech Group services?",
        answer: "Getting started is easy! Simply contact our team through our contact form or call us at +1 (302) 464-0950. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
      },
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer a comprehensive range of AI-powered services including AI autonomous systems, quantum technology solutions, cybersecurity services, IT infrastructure, cloud DevOps, and specialized industry solutions for healthcare, finance, manufacturing, and more."
      },
      {
        question: "How long does it take to implement your solutions?",
        answer: "Implementation timelines vary depending on the complexity of the solution. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes! We offer free initial consultations to understand your business needs and provide recommendations. This includes a comprehensive assessment of your current technology infrastructure and a roadmap for improvement."
      }
    ],
    'ai-services': [
      {
        question: "What makes your AI services different from competitors?",
        answer: "Our AI services are built on cutting-edge quantum technology and proprietary algorithms. We focus on autonomous systems that can operate independently, learn continuously, and provide measurable business value. Our solutions are also designed with explainable AI principles for transparency."
      },
      {
        question: "Can your AI solutions integrate with existing systems?",
        answer: "Absolutely! Our AI solutions are designed with open architecture and can integrate with virtually any existing system through APIs, webhooks, and custom connectors. We ensure seamless integration without disrupting your current operations."
      },
      {
        question: "How do you ensure AI model accuracy and reliability?",
        answer: "We use advanced validation techniques, continuous monitoring, and human-in-the-loop approaches. Our models undergo rigorous testing and are continuously improved based on real-world performance data. We also provide transparency into model decisions."
      },
      {
        question: "What industries do you specialize in for AI solutions?",
        answer: "We have deep expertise in healthcare, financial services, manufacturing, retail, and government sectors. Our AI solutions are tailored to industry-specific challenges and compliance requirements."
      }
    ],
    'technical-support': [
      {
        question: "What support channels do you offer?",
        answer: "We provide 24/7 technical support through multiple channels: phone support, email support, live chat, and our comprehensive knowledge base. Enterprise clients also get dedicated technical account managers."
      },
      {
        question: "How quickly do you respond to support requests?",
        answer: "We guarantee response times based on issue severity: Critical issues (system down) - 15 minutes, High priority - 2 hours, Medium priority - 4 hours, Low priority - 24 hours. Enterprise clients get priority support."
      },
      {
        question: "Do you provide remote and on-site support?",
        answer: "Yes, we offer both remote and on-site support. Most issues can be resolved remotely for faster resolution. For complex issues requiring physical presence, we can dispatch technicians to your location."
      },
      {
        question: "What documentation and training do you provide?",
        answer: "We provide comprehensive documentation, video tutorials, webinars, and hands-on training sessions. Our knowledge base includes step-by-step guides, troubleshooting tips, and best practices for all our solutions."
      }
    ],
    'billing-account': [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, bank transfers, and ACH payments. Enterprise clients can also set up invoicing with net 30 or net 60 payment terms. We also offer flexible payment plans for larger projects."
      },
      {
        question: "Can I change my service plan?",
        answer: "Yes, you can upgrade, downgrade, or modify your service plan at any time. Changes take effect at the start of your next billing cycle. We'll work with you to ensure a smooth transition."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services within the first 30 days, we'll provide a full refund. After 30 days, refunds are handled on a case-by-case basis."
      },
      {
        question: "How do I access my billing information?",
        answer: "You can access your billing information through our client portal, where you can view invoices, payment history, and update payment methods. You'll also receive monthly billing statements via email."
      }
    ],
    'security-compliance': [
      {
        question: "What security certifications do you have?",
        answer: "We maintain SOC2 Type II compliance, ISO 27001 certification, and are GDPR compliant. We also undergo regular third-party security audits and penetration testing to ensure the highest security standards."
      },
      {
        question: "How do you protect customer data?",
        answer: "We use enterprise-grade encryption, implement zero-trust architecture, and maintain strict access controls. All data is encrypted in transit and at rest. We also provide detailed security documentation and compliance reports."
      },
      {
        question: "Do you offer compliance consulting?",
        answer: "Yes, we provide comprehensive compliance consulting services including SOC2 preparation, GDPR compliance, HIPAA compliance for healthcare, and industry-specific regulatory compliance. Our experts help you navigate complex compliance requirements."
      },
      {
        question: "What happens in case of a security incident?",
        answer: "We have a comprehensive incident response plan with 24/7 monitoring. In case of any security incident, we immediately notify affected clients, implement containment measures, and provide detailed incident reports and remediation steps."
      }
    ]
  };

  const resources = [
    {
      title: "User Guides",
      description: "Step-by-step guides for all our services",
      icon: FileText,
      count: "25+ guides",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Video Tutorials",
      description: "Visual learning resources and demos",
      icon: Video,
      count: "50+ videos",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "API Documentation",
      description: "Complete API reference and examples",
      icon: Zap, // Changed from Code to Zap as Code is not imported
      count: "100+ endpoints",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "White Papers",
      description: "In-depth technical and industry insights",
      icon: Download,
      count: "15+ papers",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const toggleFaq = (index: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFaqs(newExpanded);
  };

  const filteredFaqs = faqs[activeCategory as keyof typeof faqs] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {" "}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Find answers to your questions, get technical support, and access comprehensive resources 
              to make the most of Zion Tech Group's innovative solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or contact support..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Support</h3>
              <p className="text-cyan-100 mb-4">Get immediate help from our experts</p>
              <a href="tel:+13024640950" className="inline-block bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                +1 (302) 464-0950
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-purple-100 mb-4">Chat with our support team</p>
              <button className="inline-block bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Start Chat
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-green-100 mb-4">Send us a detailed message</p>
              <a href="mailto:support@ziontechgroup.com" className="inline-block bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                support@ziontechgroup.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories and FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Help Categories</h3>
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{category.title}</div>
                          <div className="text-sm opacity-80">{category.description}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {categories.find(c => c.id === activeCategory)?.title} - Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border border-gray-700/50 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="text-white font-medium">{faq.question}</span>
                        {expandedFaqs.has(index) ? (
                          <ChevronDown className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-cyan-400" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedFaqs.has(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-gray-800/20 border-t border-gray-700/50">
                              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Access comprehensive documentation, tutorials, and resources to help you succeed with our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{resource.count}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our expert support team is here to help you succeed. Contact us for personalized assistance 
                with any questions or technical issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Support
                </a>
                <button className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
