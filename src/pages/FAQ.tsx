import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ChevronDown, ChevronRight, HelpCircle, 
  MessageCircle, Phone, Mail, ArrowRight, Star,
  CheckCircle, Info, AlertCircle, Lightbulb
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('general');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      description: 'Basic information about Zion Tech Group and our services',
      icon: Info,
      questions: [
        {
          id: 'what-is-zion-tech-group',
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in artificial intelligence, machine learning, and digital transformation solutions. We help businesses of all sizes leverage cutting-edge AI technology to improve operations, enhance customer experiences, and drive innovation.',
          tags: ['company', 'services', 'overview']
        },
        {
          id: 'where-are-you-located',
          question: 'Where are you located?',
          answer: 'We have offices in multiple locations including New York (headquarters), San Francisco, and London. We serve clients globally and can provide remote support and implementation services regardless of your location.',
          tags: ['locations', 'global', 'support']
        },
        {
          id: 'how-long-have-you-been-in-business',
          question: 'How long have you been in business?',
          answer: 'Zion Tech Group was founded in 2009, giving us over 15 years of experience in the technology industry. We have successfully delivered AI solutions to hundreds of clients across various industries.',
          tags: ['experience', 'history', 'track-record']
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services & Solutions',
      description: 'Questions about our AI platform and services',
      icon: Lightbulb,
      questions: [
        {
          id: 'what-ai-services-do-you-offer',
          question: 'What AI services do you offer?',
          answer: 'We offer a comprehensive suite of AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI-powered business intelligence, and custom AI solution development. Our platform supports both pre-trained models and custom development based on your specific needs.',
          tags: ['AI services', 'machine learning', 'custom solutions']
        },
        {
          id: 'can-you-build-custom-ai-models',
          question: 'Can you build custom AI models for my business?',
          answer: 'Yes! We specialize in developing custom AI models tailored to your specific business requirements. Our team works closely with you to understand your needs, prepare your data, and build models that deliver real business value. We support various industries including healthcare, finance, manufacturing, and retail.',
          tags: ['custom models', 'development', 'tailored solutions']
        },
        {
          id: 'how-long-does-ai-implementation-take',
          question: 'How long does AI implementation typically take?',
          answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex custom AI solutions may take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the process.',
          tags: ['timeline', 'implementation', 'project-management']
        }
      ]
    },
    {
      id: 'pricing-billing',
      title: 'Pricing & Billing',
      description: 'Information about our pricing plans and billing',
      icon: Star,
      questions: [
        {
          id: 'what-are-your-pricing-plans',
          question: 'What are your pricing plans?',
          answer: 'We offer flexible pricing options including pay-as-you-go plans, monthly subscriptions, and enterprise packages. Pricing is based on usage, features, and support level. We also provide custom enterprise solutions with dedicated support. Contact our sales team for a personalized quote based on your specific needs.',
          tags: ['pricing', 'plans', 'subscriptions', 'enterprise']
        },
        {
          id: 'do-you-offer-free-trials',
          question: 'Do you offer free trials?',
          answer: 'Yes, we offer free trials for most of our services. This allows you to test our platform and see how it can benefit your business before making a commitment. Our trial period typically lasts 14-30 days depending on the service.',
          tags: ['free trial', 'testing', 'evaluation']
        },
        {
          id: 'what-payment-methods-do-you-accept',
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards, bank transfers, and can arrange payment plans for larger enterprise contracts. All payments are processed securely, and we provide detailed invoices for all transactions.',
          tags: ['payment', 'billing', 'invoicing']
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      description: 'Getting help with technical issues and platform usage',
      icon: HelpCircle,
      questions: [
        {
          id: 'what-support-channels-are-available',
          question: 'What support channels are available?',
          answer: 'We provide multiple support channels including 24/7 phone support, email support, live chat on our platform, and a comprehensive knowledge base. For enterprise clients, we also offer dedicated support managers and priority response times.',
          tags: ['support', 'channels', '24/7', 'enterprise']
        },
        {
          id: 'how-fast-do-you-respond-to-support-requests',
          question: 'How fast do you respond to support requests?',
          answer: 'Response times vary by priority level. Emergency issues get immediate attention, technical support requests are typically resolved within 4 hours, and general inquiries within 24 hours. Enterprise clients receive priority support with faster response times.',
          tags: ['response time', 'priority', 'support-levels']
        },
        {
          id: 'do-you-provide-training',
          question: 'Do you provide training for your platform?',
          answer: 'Yes, we offer comprehensive training programs including onboarding sessions, user training, administrator training, and ongoing support. We also provide video tutorials, documentation, and can arrange custom training sessions for your team.',
          tags: ['training', 'onboarding', 'documentation', 'tutorials']
        }
      ]
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Information about our security measures and compliance',
      icon: CheckCircle,
      questions: [
        {
          id: 'what-security-measures-do-you-have',
          question: 'What security measures do you have in place?',
          answer: 'We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards. Our platform is hosted on secure cloud infrastructure with redundant backups and disaster recovery procedures.',
          tags: ['security', 'encryption', 'authentication', 'audits']
        },
        {
          id: 'what-compliance-certifications-do-you-have',
          question: 'What compliance certifications do you have?',
          answer: 'We maintain several compliance certifications including ISO 27001 (Information Security), SOC 2 Type II (Security, Availability, Confidentiality), GDPR compliance, and HIPAA compliance for healthcare applications. We regularly update our compliance status and can provide detailed compliance reports.',
          tags: ['compliance', 'certifications', 'ISO 27001', 'SOC 2', 'GDPR']
        },
        {
          id: 'how-do-you-protect-my-data',
          question: 'How do you protect my data?',
          answer: 'Your data is protected through multiple layers of security including encryption at rest and in transit, access controls, regular security monitoring, and strict data handling procedures. We never share your data with third parties and maintain strict confidentiality agreements.',
          tags: ['data protection', 'privacy', 'confidentiality', 'encryption']
        }
      ]
    },
    {
      id: 'integration-deployment',
      title: 'Integration & Deployment',
      description: 'Questions about integrating and deploying our solutions',
      icon: ArrowRight,
      questions: [
        {
          id: 'can-i-integrate-with-existing-systems',
          question: 'Can I integrate with my existing systems?',
          answer: 'Yes, our platform is designed for easy integration with existing business systems. We support standard APIs, webhooks, and can build custom integrations for proprietary systems. Our team works with your IT team to ensure smooth integration and minimal disruption.',
          tags: ['integration', 'APIs', 'existing systems', 'customization']
        },
        {
          id: 'what-deployment-options-are-available',
          question: 'What deployment options are available?',
          answer: 'We offer multiple deployment options including cloud-based SaaS, on-premises deployment, and hybrid solutions. We can deploy on your preferred cloud provider (AWS, Azure, Google Cloud) or your own infrastructure. Our team handles the entire deployment process.',
          tags: ['deployment', 'cloud', 'on-premises', 'hybrid']
        },
        {
          id: 'how-long-does-deployment-take',
          question: 'How long does deployment take?',
          answer: 'Deployment time depends on the complexity and deployment option chosen. Cloud deployments typically take 1-2 weeks, while on-premises deployments may take 3-6 weeks. We provide detailed deployment schedules and keep you informed throughout the process.',
          tags: ['deployment timeline', 'cloud', 'on-premises', 'planning']
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.questions.length > 0);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Support',
      value: '+1 (555) 123-4567',
      description: '24/7 technical support',
      action: 'Call Now',
      actionType: 'phone'
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@ziontechgroup.com',
      description: 'Get help via email',
      action: 'Send Email',
      actionType: 'email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Available on platform',
      description: 'Real-time assistance',
      action: 'Start Chat',
      actionType: 'chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's AI services, pricing, support, and platform. Get the information you need to make informed decisions."
        keywords="FAQ, frequently asked questions, AI services, support, pricing, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/faq"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find quick answers to common questions about our AI services, platform, pricing, and support. Can't find what you're looking for? Contact our team directly.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {/* Category Questions */}
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6 border-t border-white/10"
                  >
                    <div className="space-y-4 pt-6">
                      {category.questions.map((q, questionIndex) => (
                        <motion.div
                          key={q.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: questionIndex * 0.1 }}
                          className="bg-white/5 rounded-lg border border-white/10"
                        >
                          <button
                            onClick={() => toggleQuestion(q.id)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-white pr-4">{q.question}</h3>
                            {expandedQuestions.has(q.id) ? (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {expandedQuestions.has(q.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-6 pb-4 border-t border-white/10"
                            >
                              <div className="pt-4">
                                <p className="text-gray-300 leading-relaxed mb-4">{q.answer}</p>
                                <div className="flex flex-wrap gap-2">
                                  {q.tags.map((tag, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
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

          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-4">No FAQ items found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help with any questions or issues.
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <div className="text-lg font-semibold text-blue-400 mb-6">{method.value}</div>
                
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive documentation, tutorials, and support resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Documentation Center',
                description: 'Comprehensive guides and API references for all our services.',
                link: '/documentation',
                icon: '📚'
              },
              {
                title: 'Video Tutorials',
                description: 'Step-by-step video guides to help you get started quickly.',
                link: '/tutorials',
                icon: '🎥'
              },
              {
                title: 'Knowledge Base',
                description: 'Searchable database of articles and troubleshooting guides.',
                link: '/knowledge-base',
                icon: '🔍'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other users and share solutions.',
                link: '/community',
                icon: '👥'
              },
              {
                title: 'Support Tickets',
                description: 'Create and track support requests for complex issues.',
                link: '/support',
                icon: '🎫'
              },
              {
                title: 'Training Programs',
                description: 'Professional training and certification courses.',
                link: '/training',
                icon: '🎓'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {resource.description}
                </p>
                
                <a
                  href={resource.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
