import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Search,
  MessageCircle,
  BookOpen,
  Phone,
  Mail,
  Clock,
  Users,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Globe,
  Rocket
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'General',
    'AI Services',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Pricing & Billing',
    'Support & Training',
    'Technical'
  ];

  const faqs = [
    {
      id: 1,
      category: 'General',
      question: "What is Zion Tech Group and what services do you offer?",
      answer: "Zion Tech Group is a leading technology consulting and solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation. We offer comprehensive services including AI enterprise orchestration, cybersecurity suites, cloud DevOps, digital twin solutions, IoT edge computing, blockchain enterprise solutions, and specialized micro SaaS applications. Our team of experts helps businesses leverage cutting-edge technology to drive innovation and competitive advantage.",
      tags: ['company', 'services', 'overview']
    },
    {
      id: 2,
      category: 'General',
      question: "How can I get started with Zion Tech Group services?",
      answer: "Getting started is easy! You can begin by scheduling a free consultation call where we'll discuss your business needs and technology goals. We offer a comprehensive assessment to understand your current infrastructure and recommend the best solutions. You can also explore our service catalog, request a quote, or schedule a demo of specific solutions. Our team will guide you through the entire process from initial consultation to implementation.",
      tags: ['getting-started', 'consultation', 'assessment']
    },
    {
      id: 3,
      category: 'AI Services',
      question: "What AI services do you provide and how do they benefit businesses?",
      answer: "Our AI services include AI Enterprise Orchestrator for workflow automation, AI Business Intelligence for data-driven insights, AI Cybersecurity Suite for threat detection, AI Healthcare Predictive Analytics, AI Financial Compliance Assistant, and AI Supply Chain Optimization. These services help businesses automate processes, gain predictive insights, enhance security, improve decision-making, and optimize operations. We use state-of-the-art machine learning models and ensure responsible AI implementation.",
      tags: ['AI', 'automation', 'intelligence', 'machine-learning']
    },
    {
      id: 4,
      category: 'AI Services',
      question: "How do you ensure AI solutions are ethical and compliant?",
      answer: "We prioritize ethical AI development through comprehensive governance frameworks, bias detection and mitigation, transparent model development, regular audits, and compliance with industry standards like GDPR, HIPAA, and SOC2. Our AI Ethics Guardian Platform monitors AI systems for fairness, accountability, and transparency. We also provide training on responsible AI use and maintain detailed documentation of all AI decision-making processes.",
      tags: ['AI ethics', 'compliance', 'governance', 'responsible AI']
    },
    {
      id: 5,
      category: 'Cybersecurity',
      question: "What cybersecurity solutions do you offer for enterprise protection?",
      answer: "Our cybersecurity portfolio includes AI-powered threat detection and response, zero-trust network architecture, incident response platforms, compliance management tools, penetration testing services, security audits, and 24/7 security monitoring. We provide comprehensive protection against modern cyber threats including ransomware, phishing, advanced persistent threats, and insider threats. Our solutions are designed to meet enterprise security requirements and regulatory compliance standards.",
      tags: ['cybersecurity', 'threat-detection', 'zero-trust', 'compliance']
    },
    {
      id: 6,
      category: 'Cybersecurity',
      question: "How do you handle cybersecurity incidents and provide support?",
      answer: "We provide 24/7 cybersecurity incident response with our AI-powered incident management platform. Our team follows industry-standard incident response procedures including immediate threat containment, forensic analysis, system recovery, and post-incident reporting. We offer incident response training, tabletop exercises, and continuous monitoring to prevent future incidents. Our support team is available around the clock for emergency situations.",
      tags: ['incident-response', 'support', 'monitoring', 'training']
    },
    {
      id: 7,
      category: 'Cloud & Infrastructure',
      question: "What cloud and infrastructure services do you provide?",
      answer: "Our cloud and infrastructure services include cloud migration, DevOps automation, infrastructure as code, container orchestration, serverless architecture, multi-cloud management, and edge computing solutions. We help businesses optimize cloud costs, improve performance, enhance security, and achieve scalability. Our team specializes in AWS, Azure, Google Cloud, and hybrid cloud environments, providing end-to-end infrastructure management and optimization.",
      tags: ['cloud', 'infrastructure', 'DevOps', 'migration']
    },
    {
      id: 8,
      category: 'Cloud & Infrastructure',
      question: "How do you help optimize cloud costs and performance?",
      answer: "We use our FinOps Advisor platform to analyze cloud spending, identify optimization opportunities, implement cost-saving strategies, and monitor performance metrics. Our approach includes rightsizing resources, implementing auto-scaling, optimizing storage costs, using reserved instances, and monitoring unused resources. We provide detailed cost analysis reports and recommendations for ongoing optimization to ensure maximum ROI from cloud investments.",
      tags: ['cost-optimization', 'FinOps', 'performance', 'ROI']
    },
    {
      id: 9,
      category: 'Pricing & Billing',
      question: "What are your pricing models and payment options?",
      answer: "We offer flexible pricing models including project-based pricing, monthly subscriptions, usage-based pricing, and enterprise licensing. Payment options include monthly billing, quarterly payments, and annual contracts with volume discounts. We provide transparent pricing with no hidden fees and offer custom pricing for enterprise clients. All pricing includes implementation, training, and ongoing support. Contact our sales team for a personalized quote based on your specific needs.",
      tags: ['pricing', 'billing', 'payment', 'subscription']
    },
    {
      id: 10,
      category: 'Pricing & Billing',
      question: "Do you offer free trials or pilot programs?",
      answer: "Yes, we offer free trials for most of our SaaS solutions and pilot programs for enterprise services. Free trials typically last 14-30 days with full functionality. Pilot programs are customized to your business needs and can run for 30-90 days. We also provide proof-of-concept projects for complex implementations. These programs help you evaluate our solutions before making a full commitment, ensuring the right fit for your organization.",
      tags: ['free-trial', 'pilot', 'proof-of-concept', 'evaluation']
    },
    {
      id: 11,
      category: 'Support & Training',
      question: "What support and training options do you provide?",
      answer: "We provide comprehensive support including 24/7 technical support, dedicated account managers, online knowledge base, video tutorials, live training sessions, and certification programs. Our training covers product usage, best practices, advanced features, and industry-specific applications. We offer both in-person and virtual training options, customized to your team's needs. Support is available through multiple channels including phone, email, chat, and our support portal.",
      tags: ['support', 'training', 'certification', 'knowledge-base']
    },
    {
      id: 12,
      category: 'Support & Training',
      question: "How do you ensure successful implementation and adoption?",
      answer: "We follow a proven implementation methodology including detailed planning, phased rollout, comprehensive training, change management support, and ongoing optimization. Our team works closely with your staff throughout the process, providing hands-on guidance and support. We conduct regular check-ins, gather feedback, and make adjustments to ensure successful adoption. Our success metrics include user adoption rates, performance improvements, and ROI achievement.",
      tags: ['implementation', 'adoption', 'change-management', 'success']
    },
    {
      id: 13,
      category: 'Technical',
      question: "What are your system requirements and integration capabilities?",
      answer: "Our solutions are designed to work with modern web browsers and support integration with popular business systems including CRM platforms, ERP systems, accounting software, and collaboration tools. We provide REST APIs, webhooks, and pre-built connectors for seamless integration. System requirements vary by solution but generally include modern browsers, stable internet connection, and standard business hardware. We can customize integrations for specific business needs.",
      tags: ['system-requirements', 'integration', 'APIs', 'connectors']
    },
    {
      id: 14,
      category: 'Technical',
      question: "How do you handle data security and privacy compliance?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with international standards like ISO 27001, SOC2, and GDPR. Our data centers are located in secure facilities with redundant systems and disaster recovery capabilities. We provide detailed privacy policies, data processing agreements, and regular compliance reports. Customer data is never shared with third parties without explicit consent.",
      tags: ['data-security', 'privacy', 'compliance', 'encryption']
    },
    {
      id: 15,
      category: 'Technical',
      question: "What is your approach to scalability and performance optimization?",
      answer: "We design all solutions with scalability in mind, using cloud-native architecture, microservices, and auto-scaling capabilities. Our performance optimization includes database optimization, CDN integration, caching strategies, and load balancing. We conduct regular performance testing and monitoring to ensure optimal performance under various load conditions. Our infrastructure automatically scales to handle increased demand while maintaining performance standards.",
      tags: ['scalability', 'performance', 'optimization', 'monitoring']
    }
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's AI services, cybersecurity solutions, cloud infrastructure, and technology consulting services." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, cybersecurity, cloud computing, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, solutions, and how we can help 
              transform your business with cutting-edge technology.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openItems.has(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.has(faq.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No questions found</h3>
              <p className="text-slate-300">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-300 mb-8">
              Can't find what you're looking for? Our expert team is here to help. 
              Get in touch with us for personalized assistance and support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white">Live Chat</h3>
                <p className="text-slate-300 text-sm">Get instant answers from our support team</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Phone Support</h3>
                <p className="text-slate-300 text-sm">Speak directly with our experts</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Email Support</h3>
                <p className="text-slate-300 text-sm">Send us a detailed message</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Visit Support Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Links & Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services"
              className="group p-6 bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-slate-300 text-sm">Explore our comprehensive service portfolio</p>
            </Link>
            
            <Link
              to="/case-studies"
              className="group p-6 bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
              <p className="text-slate-300 text-sm">See how we've helped other businesses</p>
            </Link>
            
            <Link
              to="/training"
              className="group p-6 bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
              <p className="text-slate-300 text-sm">Learn from our expert-led training programs</p>
            </Link>
            
            <Link
              to="/documentation"
              className="group p-6 bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-slate-300 text-sm">Access technical guides and APIs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
