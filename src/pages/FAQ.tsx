<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap, 
  Shield, 
  Users, 
  Award, 
  Globe, 
  Lightbulb 
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<any>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      name: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to drive innovation and growth.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally with operations in 25+ countries.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government sectors. Our solutions are adaptable to any industry that can benefit from AI and digital transformation.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group was founded in 2018 and has been delivering innovative technology solutions for over 5 years. We have successfully completed 500+ projects and serve 100+ enterprise clients.'
        }
      ]
    },
    {
      name: 'AI & Technology Services',
      icon: Zap,
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including AI Business Intelligence, AI Sales Copilot, AI Compliance Assistant, LLM Content Studio, and custom AI solutions. Our AI services help automate processes, gain insights, and transform business operations.'
        },
        {
          question: 'How do you ensure AI solutions are ethical and secure?',
          answer: 'We follow strict AI ethics guidelines and implement enterprise-grade security measures. All our AI solutions include bias detection, explainability features, and comply with industry standards and regulations.'
        },
        {
          question: 'Can you customize AI solutions for our specific needs?',
          answer: 'Absolutely! We specialize in custom AI solutions tailored to your specific business requirements. Our team works closely with you to understand your needs and develop solutions that deliver measurable results.'
        },
        {
          question: 'What is the typical timeline for AI project implementation?',
          answer: 'AI project timelines vary based on complexity and scope. Simple AI integrations can take 4-8 weeks, while complex enterprise AI solutions may take 3-6 months. We provide detailed project timelines during the planning phase.'
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Shield,
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. Our team has certifications in multiple cloud platforms and can help you choose the best solution for your needs.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance frameworks. Our cloud solutions are ISO 27001 certified and SOC 2 Type II compliant.'
        },
        {
          question: 'What DevOps practices do you implement?',
          answer: 'We implement modern DevOps practices including CI/CD pipelines, Infrastructure as Code, automated testing, monitoring, and continuous deployment. This ensures faster delivery and higher quality software.'
        },
        {
          question: 'Can you help optimize our cloud costs?',
          answer: 'Yes! Our Cloud FinOps Optimizer service helps analyze cloud spending, identify optimization opportunities, and implement cost-saving measures. We typically help clients reduce cloud costs by 20-40%.'
        }
      ]
    },
    {
      name: 'Support & Services',
      icon: MessageCircle,
      questions: [
        {
          question: 'What support options do you provide?',
          answer: 'We provide 24/7 technical support, dedicated account managers, emergency response services, and comprehensive documentation. Our support team is available through phone, email, and our support portal.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We provide different response time SLAs based on issue priority. Critical issues receive immediate attention, while standard requests are typically resolved within 4-8 hours. Emergency support is available 24/7.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes! We provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing education as new features are added.'
        },
        {
          question: 'What is your support availability?',
          answer: 'We provide 24/7 support for critical issues and business hours support for general inquiries. Our emergency support team is always available for urgent system problems and outages.'
        }
      ]
    },
    {
      name: 'Pricing & Billing',
      icon: Award,
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and custom enterprise agreements. We work with you to find the most cost-effective solution for your needs.'
        },
        {
          question: 'Do you offer free trials or demos?',
          answer: 'Yes! We offer free demos of our services and can provide proof-of-concept projects. We also offer pilot programs to help you evaluate our solutions before full implementation.'
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We offer flexible payment terms including monthly, quarterly, and annual billing cycles. Enterprise clients can benefit from custom payment schedules and volume discounts.'
        },
        {
          question: 'Do you provide detailed cost estimates?',
          answer: 'Absolutely! We provide detailed cost estimates and project timelines during the planning phase. We believe in transparency and will clearly outline all costs before starting any project.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (302) 464-0950',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'kleber@ziontechgroup.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Schedule an in-person consultation'
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's services, support, and technology solutions."
        keywords="FAQ, frequently asked questions, Zion Tech Group, support, help"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Find quick answers to common questions about our services, support, and technology solutions.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for questions or topics..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openItems.includes(`${categoryIndex}-${questionIndex}`);
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: questionIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(`${categoryIndex}-${questionIndex}`)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
                              <div className="px-6 pb-4">
                                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
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
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you get the information you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{method.details}</p>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
>>>>>>> origin/main
