import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  CheckCircle,
  Star,
  Users,
  Zap
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      color: 'from-blue-500 to-indigo-500',
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI services, cloud computing, cybersecurity, and innovative micro SAAS solutions. We help businesses transform through cutting-edge technology.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'We have been providing technology solutions for over 15 years, with extensive experience in AI, cloud infrastructure, and digital transformation.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government sectors.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. We also have remote teams and serve clients globally.'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI automation, and custom AI model development.'
        },
        {
          question: 'How do you ensure AI model accuracy?',
          answer: 'We use rigorous testing methodologies, continuous monitoring, and validation processes to ensure our AI models meet the highest accuracy standards for your specific use case.'
        },
        {
          question: 'Can you integrate AI with existing systems?',
          answer: 'Yes, we specialize in seamless AI integration with existing business systems, ensuring minimal disruption while maximizing the benefits of AI implementation.'
        },
        {
          question: 'Do you provide AI training for our team?',
          answer: 'Absolutely! We offer comprehensive AI training programs to help your team understand and effectively use AI solutions in their daily operations.'
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.'
        },
        {
          question: 'Can you help with cloud migration?',
          answer: 'Yes, we provide comprehensive cloud migration services including assessment, planning, execution, and optimization to ensure a smooth transition.'
        },
        {
          question: 'What is your uptime guarantee?',
          answer: 'We provide a 99.9% uptime guarantee for our cloud infrastructure services, backed by our robust monitoring and redundancy systems.'
        }
      ]
    },
    {
      title: 'Support & Services',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500',
      questions: [
        {
          question: 'What support options are available?',
          answer: 'We offer 24/7 technical support, dedicated account managers, online documentation, training resources, and priority support for enterprise clients.'
        },
        {
          question: 'How quickly can you respond to issues?',
          answer: 'Our response times vary by priority: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (72 hours).'
        },
        {
          question: 'Do you offer custom development?',
          answer: 'Yes, we provide custom software development services tailored to your specific business requirements and technology stack.'
        },
        {
          question: 'What is your pricing model?',
          answer: 'We offer flexible pricing models including project-based, retainer, and subscription-based options to fit your budget and needs.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our services, solutions, and support. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any FAQs matching "{searchTerm}". Try different keywords or contact our support team.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is here to help. Get in touch with us for personalized assistance 
              and expert guidance on your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;