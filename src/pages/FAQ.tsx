import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Brain, 
  Shield, 
  Zap, 
  Server, 
  Cloud, 
  Lock, 
  Users, 
  Phone, 
  Mail, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Globe,
  TrendingUp,
  Building2
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

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
      title: 'Getting Started',
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly at +1 (302) 464-0950. We\'ll schedule a consultation to understand your needs and provide a customized solution tailored to your business requirements.'
        },
        {
          question: 'What is the typical onboarding process?',
          answer: 'Our onboarding process includes: 1) Initial consultation and requirements gathering, 2) Solution design and proposal, 3) Implementation planning, 4) Setup and configuration, 5) Training and testing, 6) Go-live and ongoing support. The entire process typically takes 4-8 weeks depending on complexity.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We offer free initial consultations to understand your business needs and determine how our solutions can help. This includes a comprehensive assessment of your current technology stack and recommendations for improvement.'
        },
        {
          question: 'What information do I need to provide to get started?',
          answer: 'To get started, we typically need: your business requirements, current technology stack, team size, budget considerations, timeline preferences, and any specific challenges you\'re facing. We\'ll guide you through this process during our consultation.'
        }
      ]
    },
    {
      title: 'AI & Automation Services',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including: AI Enterprise Automation Platform, AI Data Analytics Platform, AI Business Intelligence, AI Cybersecurity Platform, AI Autonomous Research Assistant, AI Financial Trading Platform, AI Healthcare Platform, and AI Quantum Hybrid Platform. Each service is customizable to your specific needs.'
        },
        {
          question: 'How do you ensure AI model accuracy and reliability?',
          answer: 'We implement rigorous testing protocols, continuous monitoring, and validation processes. Our AI models undergo extensive training with quality data, regular performance evaluations, and continuous improvement cycles. We also provide transparency into model decisions and maintain human oversight for critical applications.'
        },
        {
          question: 'Can I integrate your AI services with my existing systems?',
          answer: 'Absolutely! Our AI services are designed with open APIs and flexible integration capabilities. We can integrate with most existing systems including CRMs, ERPs, databases, and custom applications. Our team handles the integration process to ensure seamless operation.'
        },
        {
          question: 'What kind of training do you provide for AI services?',
          answer: 'We provide comprehensive training including: initial setup training, user interface training, best practices for AI interaction, troubleshooting guides, and ongoing support. We also offer advanced training for power users and administrators.'
        }
      ]
    },
    {
      title: 'IT & Infrastructure',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      questions: [
        {
          question: 'What infrastructure services do you provide?',
          answer: 'Our infrastructure services include: IT Infrastructure Management, Cloud & DevOps Solutions, Cybersecurity Services, Digital Transformation, Edge Computing Solutions, Quantum Computing Solutions, and IoT Edge Computing. We handle everything from setup to ongoing maintenance.'
        },
        {
          question: 'Do you provide 24/7 infrastructure monitoring?',
          answer: 'Yes! We provide 24/7 infrastructure monitoring for all our enterprise customers. This includes real-time performance monitoring, automated alerting, proactive issue resolution, and round-the-clock support for critical infrastructure components.'
        },
        {
          question: 'How do you handle security and compliance?',
          answer: 'Security is our top priority. We implement enterprise-grade security measures including SOC 2 compliance, end-to-end encryption, regular security audits, penetration testing, and 24/7 security monitoring. We also help you maintain compliance with industry-specific regulations.'
        },
        {
          question: 'What is your disaster recovery approach?',
          answer: 'We implement comprehensive disaster recovery plans including: automated backups, redundant systems, geographic distribution, rapid recovery procedures, and regular testing. Our goal is to minimize downtime and ensure business continuity in any scenario.'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      questions: [
        {
          question: 'What Micro SaaS solutions do you offer?',
          answer: 'We offer a comprehensive suite of Micro SaaS solutions including: AI Sales Copilot, Cloud FinOps Optimizer, AI Compliance Assistant, Micro SaaS Platform, AI HR Management Platform, AI Customer Support Automation, and AI Workflow Orchestrator. Each solution is designed to solve specific business challenges.'
        },
        {
          question: 'Can I customize these solutions for my business?',
          answer: 'Yes! All our Micro SaaS solutions are highly customizable. We work with you to tailor the features, workflows, integrations, and user experience to match your specific business requirements and brand guidelines.'
        },
        {
          question: 'How do you handle updates and maintenance?',
          answer: 'We provide automatic updates and maintenance for all Micro SaaS solutions. This includes: regular feature updates, security patches, performance improvements, and bug fixes. All updates are tested thoroughly before deployment to ensure stability.'
        },
        {
          question: 'What kind of support do you provide for Micro SaaS?',
          answer: 'We provide comprehensive support including: 24/7 technical support, user training, documentation, video tutorials, community forums, and dedicated account management for enterprise customers. We\'re committed to your success with our solutions.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including: subscription-based pricing, usage-based pricing, and custom enterprise pricing. We work with you to find the most cost-effective solution that meets your needs and budget requirements.'
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes! We offer volume discounts for larger deployments and enterprise customers. The more services you use and the larger your team, the better rates we can provide. Contact our sales team for custom pricing quotes.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can accommodate custom payment terms for enterprise customers. We also offer annual billing with additional discounts for customers who prefer longer-term commitments.'
        },
        {
          question: 'Can I cancel or modify my subscription?',
          answer: 'Yes! You can modify or cancel your subscription at any time. We provide flexible terms and don\'t require long-term contracts. We\'ll work with you to ensure a smooth transition if you need to make changes.'
        }
      ]
    },
    {
      title: 'Support & Service',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      questions: [
        {
          question: 'What are your support response times?',
          answer: 'Our support response times are: Critical issues - immediate response, High priority - within 2 hours, Medium priority - within 4 hours, Low priority - within 24 hours. Enterprise customers receive priority support with dedicated account managers.'
        },
        {
          question: 'Do you provide training and onboarding?',
          answer: 'Yes! We provide comprehensive training and onboarding including: initial setup training, user training, administrator training, best practices workshops, and ongoing training for new features. We also offer custom training programs for enterprise customers.'
        },
        {
          question: 'What documentation do you provide?',
          answer: 'We provide extensive documentation including: user guides, API documentation, integration guides, troubleshooting guides, video tutorials, and best practice documents. All documentation is regularly updated and available 24/7.'
        },
        {
          question: 'Do you offer consulting services?',
          answer: 'Yes! We offer consulting services to help you optimize your technology strategy, implement best practices, and maximize the value of our solutions. Our consultants have deep expertise in AI, IT infrastructure, and digital transformation.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((item, questionIndex) => ({
      ...item,
      category: category.title,
      categoryIcon: category.icon,
      categoryColor: category.color,
      globalIndex: categoryIndex * 100 + questionIndex
    }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allQuestions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find quick answers to common questions about our services, 
              implementation process, and ongoing support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for questions, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchQuery ? (
            // Search Results
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Search Results
                </h2>
                <p className="text-gray-300">
                  Found {filteredQuestions.length} results for "{searchQuery}"
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredQuestions.map((item, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.categoryColor} rounded-lg flex items-center justify-center`}>
                          {item.categoryIcon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                          <p className="text-sm text-cyan-400">{item.category}</p>
                        </div>
                      </div>
                      {expandedItems.has(item.globalIndex) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {expandedItems.has(item.globalIndex) && (
                      <div className="px-6 pb-4">
                        <div className="pt-4 border-t border-slate-700/50">
                          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Categorized FAQs
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      return (
                        <div key={questionIndex} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                            {expandedItems.has(globalIndex) ? (
                              <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {expandedItems.has(globalIndex) && (
                            <div className="px-6 pb-4">
                              <div className="pt-4 border-t border-slate-700/50">
                                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-3">Send us a detailed message</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-3">Get instant help online</p>
              <span className="text-yellow-400 font-medium">
                Available on website
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Support
            </Link>
            <Link
              to="/support"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              <ArrowRight className="w-5 h-5 inline mr-2" />
              Visit Support Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
