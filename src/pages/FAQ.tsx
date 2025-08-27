import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a forward-thinking technology company specializing in AI-powered business solutions, cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge technology to drive growth and innovation."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. We serve clients globally and can work remotely with teams anywhere in the world."
        },
        {
          question: "What industries do you serve?",
          answer: "We work with businesses across all industries including healthcare, finance, manufacturing, retail, technology, and more. Our AI and technology solutions are adaptable to any sector."
        },
        {
          question: "How long has Zion Tech Group been in business?",
          answer: "Zion Tech Group has been delivering innovative technology solutions for over 15 years, helping hundreds of businesses transform their operations and achieve their digital goals."
        }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        {
          question: "What AI services do you offer?",
          answer: "We offer comprehensive AI services including custom AI model development, machine learning implementation, AI-powered automation, natural language processing, computer vision, and AI consulting for business transformation."
        },
        {
          question: "How quickly can you implement AI solutions?",
          answer: "Implementation timelines vary based on complexity. Simple AI integrations can be completed in 2-4 weeks, while complex custom AI systems may take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide training for AI systems?",
          answer: "Yes, we provide comprehensive training for your team on all AI systems we implement. This includes user training, technical documentation, and ongoing support to ensure successful adoption."
        },
        {
          question: "Can you work with existing AI systems?",
          answer: "Absolutely! We can integrate with, enhance, or replace existing AI systems. We'll assess your current setup and recommend the best approach for your business needs."
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      questions: [
        {
          question: "What cloud platforms do you support?",
          answer: "We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We'll recommend the best platform based on your specific requirements and budget."
        },
        {
          question: "How do you ensure cloud security?",
          answer: "We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance frameworks. We follow security best practices and can help you meet industry-specific compliance requirements."
        },
        {
          question: "Can you help migrate from on-premise to cloud?",
          answer: "Yes, cloud migration is one of our core services. We handle the entire process from assessment and planning to execution and optimization, ensuring minimal downtime and maximum efficiency."
        },
        {
          question: "What is your approach to DevOps?",
          answer: "We implement modern DevOps practices including CI/CD pipelines, infrastructure as code, automated testing, and monitoring. This ensures faster deployments, better quality, and improved reliability."
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      questions: [
        {
          question: "What security certifications do you have?",
          answer: "Our team holds various security certifications and we follow industry best practices. We can help you achieve compliance with SOC2, ISO 27001, HIPAA, GDPR, and other relevant standards."
        },
        {
          question: "How do you protect client data?",
          answer: "We implement multiple layers of security including encryption, access controls, regular security audits, and secure development practices. Client data security is our top priority."
        },
        {
          question: "Do you provide security audits?",
          answer: "Yes, we offer comprehensive security audits including vulnerability assessments, penetration testing, compliance reviews, and security recommendations for improvement."
        },
        {
          question: "What happens if there's a security incident?",
          answer: "We have incident response procedures in place and will work with you immediately to contain, investigate, and resolve any security issues. We also provide post-incident analysis and recommendations."
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      icon: Zap,
      questions: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models including subscription plans, project-based pricing, and custom enterprise solutions. Pricing depends on the scope, complexity, and duration of the project."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations."
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including upfront payments, milestone-based payments, and monthly billing for ongoing services. We can work with you to find the best payment structure."
        },
        {
          question: "Do you offer discounts for long-term contracts?",
          answer: "Yes, we offer volume discounts and special pricing for long-term partnerships. Contact us to discuss custom pricing for your specific needs."
        }
      ]
    },
    {
      title: 'Support & Maintenance',
      icon: Users,
      questions: [
        {
          question: "What support do you provide after implementation?",
          answer: "We provide comprehensive post-implementation support including technical support, maintenance, updates, and ongoing optimization. Support levels vary by service tier."
        },
        {
          question: "What are your response times for support?",
          answer: "Response times depend on your support tier. Standard support responds within 24 hours, priority support within 4 hours, and enterprise support within 2 hours during business hours."
        },
        {
          question: "Do you provide 24/7 support?",
          answer: "24/7 support is available for enterprise clients and as an add-on service. We also provide emergency support for critical issues outside of business hours."
        },
        {
          question: "How do you handle system updates and maintenance?",
          answer: "We handle all system updates, security patches, and maintenance automatically. We schedule maintenance during low-traffic periods and provide advance notice for any planned downtime."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's AI, cloud, and technology services."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, pricing, and how we can help 
              transform your business with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-lg"
              />
            </div>
            {searchQuery && (
              <p className="text-center text-gray-400 mt-4">
                Found {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {faqCategories.map((category, categoryIndex) => {
            const categoryQuestions = searchQuery 
              ? category.questions.filter(q => 
                  q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  q.answer.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : category.questions;

            if (categoryQuestions.length === 0) return null;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {categoryQuestions.map((item, questionIndex) => {
                    const globalIndex = faqCategories
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
                    const isExpanded = expandedItems.has(globalIndex);

                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200 rounded-xl"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help. 
              Get in touch with us for personalized assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl mb-4">
                  <info.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
