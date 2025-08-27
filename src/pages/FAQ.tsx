import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  Clock,
  Users,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle
} from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud computing, cybersecurity, and digital transformation services. We help businesses leverage cutting-edge technology to drive innovation and growth."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. We also have remote teams and serve clients globally."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government sectors. Our solutions are designed to be industry-agnostic and customizable."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What AI services do you offer?",
          answer: "We offer comprehensive AI services including machine learning models, natural language processing, computer vision, predictive analytics, AI workflow automation, and custom AI solution development tailored to your business needs."
        },
        {
          question: "Do you provide cloud migration services?",
          answer: "Yes, we offer end-to-end cloud migration services including assessment, planning, migration execution, and post-migration optimization. We work with AWS, Azure, and Google Cloud platforms."
        },
        {
          question: "What cybersecurity solutions do you offer?",
          answer: "Our cybersecurity portfolio includes threat detection, vulnerability assessment, compliance automation, zero-trust architecture, security monitoring, and incident response services."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models including project-based pricing, monthly subscriptions, and custom enterprise solutions. Pricing depends on the scope, complexity, and duration of the project."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations."
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including upfront payments, milestone-based payments, and monthly billing for ongoing services. Enterprise clients may qualify for extended payment terms."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "What support do you provide after project completion?",
          answer: "We provide comprehensive post-project support including maintenance, updates, troubleshooting, and ongoing optimization. Support levels can be customized based on your needs."
        },
        {
          question: "Do you offer 24/7 support?",
          answer: "Yes, we offer 24/7 support for critical systems and enterprise clients. Standard support hours are Monday-Friday 9 AM-6 PM EST, with emergency support available 24/7."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "Response times vary by priority level: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), Low priority (48 hours). Enterprise clients receive priority response times."
        }
      ]
    },
    {
      category: "Technology & Security",
      questions: [
        {
          question: "What technologies do you use?",
          answer: "We use cutting-edge technologies including React, Node.js, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and many more. We choose the best technology stack for each project."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement enterprise-grade security measures including encryption, access controls, regular security audits, compliance monitoring, and secure development practices. We're SOC2 compliant and follow industry best practices."
        },
        {
          question: "Do you comply with industry regulations?",
          answer: "Yes, we maintain compliance with various industry regulations including SOC2, GDPR, HIPAA, and others. We can help you achieve and maintain compliance for your specific industry requirements."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@ziontechgroup.com",
      response: "Within 4 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our experts",
      contact: "+1 (302) 464-0950",
      response: "Immediate response"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available on website",
      response: "Real-time support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's services, pricing, support, and technology solutions." />
        <meta name="keywords" content="FAQ, frequently asked questions, Zion Tech Group, support, help, technology services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact our team directly.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for questions or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={category.category} className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    {category.category === "General" && <Users className="w-6 h-6 text-blue-600" />}
                    {category.category === "Services" && <Zap className="w-6 h-6 text-blue-600" />}
                    {category.category === "Pricing & Billing" && <CheckCircle className="w-6 h-6 text-blue-600" />}
                    {category.category === "Support & Maintenance" && <Clock className="w-6 h-6 text-blue-600" />}
                    {category.category === "Technology & Security" && <Shield className="w-6 h-6 text-blue-600" />}
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const index = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(index);
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}
                          className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                          >
                            <span className="font-semibold text-slate-900 pr-4">
                              {item.question}
                            </span>
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-slate-600 leading-relaxed">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Still Need Help?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center p-6 bg-slate-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-slate-600 mb-3">{method.description}</p>
                    <p className="font-medium text-slate-900 mb-2">{method.contact}</p>
                    <p className="text-sm text-slate-500">{method.response}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact our team to discuss your project requirements and get a personalized solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Sales
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
