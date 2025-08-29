import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight,
  Search,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  BookOpen,
  Video,
  FileText,
  Users,
  Shield,
  Zap,
  Globe,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>('general');
  const [expandedQuestions, setExpandedQuestions] = React.useState<{[key: string]: boolean}>({});

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-600',
      questions: [
        {
          id: 'general-1',
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI solutions, cloud computing, cybersecurity, and digital transformation services. We help businesses leverage cutting-edge technology to drive growth and innovation.'
        },
        {
          id: 'general-2',
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located in San Francisco, California, with offices and team members across the United States and globally to serve our international clients.'
        },
        {
          id: 'general-3',
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government sectors. Our solutions are designed to be industry-agnostic and adaptable to specific business needs.'
        },
        {
          id: 'general-4',
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group was founded in 2018 and has been delivering innovative technology solutions for over 5 years, helping hundreds of businesses transform their digital capabilities.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      questions: [
        {
          id: 'services-1',
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including machine learning models, natural language processing, computer vision, predictive analytics, AI chatbots, and custom AI solution development tailored to your business needs.'
        },
        {
          id: 'services-2',
          question: 'Do you provide cloud migration services?',
          answer: 'Yes, we offer complete cloud migration services including assessment, planning, execution, and optimization. We work with AWS, Azure, Google Cloud, and hybrid cloud solutions.'
        },
        {
          id: 'services-3',
          question: 'What cybersecurity services are available?',
          answer: 'Our cybersecurity services include security audits, penetration testing, threat detection, incident response, compliance management, and security awareness training for your team.'
        },
        {
          id: 'services-4',
          question: 'Do you offer consulting services?',
          answer: 'Yes, we provide strategic technology consulting, digital transformation roadmaps, technology assessments, and ongoing advisory services to help you make informed technology decisions.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Plans',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600',
      questions: [
        {
          id: 'pricing-1',
          question: 'How much do your services cost?',
          answer: 'Our pricing varies based on the scope and complexity of your project. We offer flexible pricing models including project-based, retainer, and subscription plans. Contact us for a customized quote.'
        },
        {
          id: 'pricing-2',
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide a free initial consultation to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations.'
        },
        {
          id: 'pricing-3',
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we communicate any changes or additional requirements before proceeding.'
        },
        {
          id: 'pricing-4',
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment terms and can work with you to create a payment schedule that fits your budget and project timeline.'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      questions: [
        {
          id: 'support-1',
          question: 'What support do you provide after project completion?',
          answer: 'We provide comprehensive post-launch support including bug fixes, updates, maintenance, and ongoing optimization. Our support packages can be customized to your needs.'
        },
        {
          id: 'support-2',
          question: 'Do you offer 24/7 support?',
          answer: 'Yes, we offer 24/7 support for critical systems and emergency situations. Our support team is available around the clock to ensure your systems remain operational.'
        },
        {
          id: 'support-3',
          question: 'How quickly do you respond to support requests?',
          answer: 'Response times vary by priority level. Critical issues are addressed within 1 hour, high priority within 4 hours, and standard requests within 24 hours.'
        },
        {
          id: 'support-4',
          question: 'Do you provide training for our team?',
          answer: 'Yes, we offer comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-indigo-500 to-purple-600',
      questions: [
        {
          id: 'security-1',
          question: 'What security measures do you implement?',
          answer: 'We implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, penetration testing, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.'
        },
        {
          id: 'security-2',
          question: 'Are you compliant with industry regulations?',
          answer: 'Yes, we maintain compliance with major industry regulations including SOC 2 Type II, ISO 27001, GDPR, HIPAA, and PCI DSS. We regularly update our compliance status.'
        },
        {
          id: 'security-3',
          question: 'How do you protect client data?',
          answer: 'We use industry-standard encryption, secure data centers, access controls, and regular security monitoring to protect all client data. We never share or sell client information.'
        },
        {
          id: 'security-4',
          question: 'Do you perform regular security audits?',
          answer: 'Yes, we conduct regular internal and third-party security audits, vulnerability assessments, and penetration testing to ensure our security measures remain effective.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Questions',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      questions: [
        {
          id: 'technical-1',
          question: 'What technologies do you use?',
          answer: 'We use modern, cutting-edge technologies including React, Node.js, Python, TensorFlow, AWS, Azure, Docker, Kubernetes, and many others. We choose the best technology for each specific use case.'
        },
        {
          id: 'technical-2',
          question: 'Do you work with legacy systems?',
          answer: 'Yes, we have extensive experience working with legacy systems and can help modernize them while ensuring business continuity and minimal disruption.'
        },
        {
          id: 'technical-3',
          question: 'How do you ensure scalability?',
          answer: 'We design all solutions with scalability in mind, using cloud-native architectures, microservices, and performance optimization techniques to handle growth and increased load.'
        },
        {
          id: 'technical-4',
          question: 'What is your development methodology?',
          answer: 'We use Agile development methodologies with continuous integration/continuous deployment (CI/CD), regular client feedback, and iterative development to ensure quality and timely delivery.'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.questions.some(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      action: 'Start Chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      action: 'Call Now'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      action: 'Send Email'
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      action: 'View Docs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group services, pricing, support, and technical information."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact our team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for questions, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-slate-400">{category.questions.length} questions</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Category Questions */}
              {expandedCategory === category.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-700"
                >
                  <div className="p-6 space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: questionIndex * 0.1 }}
                        className="bg-slate-700/30 rounded-xl border border-slate-600 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(item.id)}
                          className="w-full p-4 text-left hover:bg-slate-600/50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                            {expandedQuestions[item.id] ? (
                              <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {expandedQuestions[item.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-4"
                          >
                            <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <HelpCircle className="w-16 h-16 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your search terms or browse our categories above
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">{channel.title}</h3>
                <p className="text-slate-400 text-sm text-center mb-4">{channel.description}</p>
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Have a specific question or ready to discuss your project? Our team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
