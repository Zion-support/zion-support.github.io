import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const HelpCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { id: 'general', name: 'General', icon: '❓' },
    { id: 'technical', name: 'Technical', icon: '🔧' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'api', name: 'API', icon: '📡' }
  ];

  const faqs = {
    general: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive technology solutions including AI and machine learning, cloud computing and DevOps, cybersecurity, digital transformation, web development, and data analytics services. Our team specializes in enterprise-grade solutions that drive business innovation and growth."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! You can contact us through our contact form, call us directly, or schedule a consultation. Our team will assess your needs and provide a customized solution proposal tailored to your business objectives."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve clients across various industries including healthcare, finance, manufacturing, retail, technology, and more. Our solutions are designed to be industry-agnostic and can be customized for specific sector requirements."
      },
      {
        question: "Do you offer remote/offsite services?",
        answer: "Yes, we provide both remote and on-site services. Our team can work remotely for most projects, and we also offer on-site consulting and implementation services when required. We use modern collaboration tools to ensure seamless communication."
      }
    ],
    technical: [
      {
        question: "What technologies do you use for development?",
        answer: "We use cutting-edge technologies including React, Node.js, Python, AWS, Azure, Kubernetes, Docker, and more. Our tech stack is constantly evolving to incorporate the latest innovations and best practices in software development."
      },
      {
        question: "How do you ensure code quality and security?",
        answer: "We follow industry best practices including code reviews, automated testing, security audits, and continuous integration/deployment. Our development process includes multiple layers of quality assurance and security validation."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely! We specialize in system integration and can work with your existing infrastructure, databases, and third-party applications. We'll assess your current setup and design solutions that seamlessly integrate with your existing systems."
      },
      {
        question: "What is your development methodology?",
        answer: "We follow Agile and DevOps methodologies, ensuring rapid delivery, continuous improvement, and close collaboration with clients. Our process includes regular updates, feedback loops, and iterative development cycles."
      }
    ],
    billing: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including project-based pricing, hourly rates, and subscription-based services. Pricing depends on project scope, complexity, and duration. We'll provide detailed quotes after understanding your requirements."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. We can structure payments based on project milestones or provide monthly payment options. We're committed to making our services accessible to businesses of all sizes."
      },
      {
        question: "What is included in your service packages?",
        answer: "Our service packages include project planning, development, testing, deployment, documentation, and post-launch support. We also provide training and knowledge transfer to ensure your team can maintain and extend the solutions."
      },
      {
        question: "Do you offer maintenance and support contracts?",
        answer: "Yes, we offer comprehensive maintenance and support contracts that include regular updates, bug fixes, security patches, and technical support. We can customize support levels based on your needs and budget."
      }
    ],
    security: [
      {
        question: "How do you protect client data and intellectual property?",
        answer: "We implement enterprise-grade security measures including encryption, secure development practices, regular security audits, and compliance with industry standards. We sign comprehensive NDAs and follow strict data protection protocols."
      },
      {
        question: "What security certifications do you have?",
        answer: "We maintain SOC 2 Type II compliance and follow industry security standards. Our team includes certified security professionals, and we regularly undergo third-party security assessments and penetration testing."
      },
      {
        question: "How do you handle data privacy and GDPR compliance?",
        answer: "We're fully GDPR compliant and implement data privacy best practices. We provide data processing agreements, ensure data minimization, and implement proper consent management systems for all client projects."
      },
      {
        question: "What security measures do you implement in your solutions?",
        answer: "Our solutions include multi-factor authentication, role-based access control, encryption at rest and in transit, regular security updates, and comprehensive logging and monitoring. We follow OWASP security guidelines."
      }
    ],
    api: [
      {
        question: "Do you provide API documentation?",
        answer: "Yes, we provide comprehensive API documentation including endpoints, parameters, response formats, authentication methods, and code examples. We also offer interactive API testing tools and SDKs for popular programming languages."
      },
      {
        question: "What API standards do you follow?",
        answer: "We follow RESTful API design principles and OpenAPI specifications. Our APIs are designed for scalability, security, and ease of integration. We also support GraphQL for complex data querying requirements."
      },
      {
        question: "Do you offer API support and maintenance?",
        answer: "Yes, we provide ongoing API support including monitoring, performance optimization, version management, and backward compatibility. We also offer API analytics and usage insights to help optimize your integration."
      },
      {
        question: "Can you help with third-party API integrations?",
        answer: "Absolutely! We have extensive experience integrating with popular third-party services including payment gateways, CRM systems, marketing platforms, and more. We can handle complex integration scenarios and ensure reliable data flow."
      }
    ]
  };

  const supportChannels = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "support@ziontechgroup.com",
      responseTime: "24 hours"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our technical team",
      contact: "+1 (302) 464-0950",
      responseTime: "Immediate"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Real-time assistance during business hours",
      contact: "Available on website",
      responseTime: "Instant"
    },
    {
      icon: "📚",
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      contact: "Self-service",
      responseTime: "Always available"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new clients",
      type: "PDF Guide",
      download: "#"
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      type: "Interactive Docs",
      download: "#"
    },
    {
      title: "Best Practices",
      description: "Industry best practices and recommendations",
      type: "Whitepaper",
      download: "#"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      type: "Video Series",
      download: "#"
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group Support"
        description="Get help and support for Zion Tech Group services. Find answers to frequently asked questions, access documentation, and contact our support team."
        keywords="help center, support, FAQ, documentation, Zion Tech Group, customer service"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Help You?
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find answers to common questions, access helpful resources, and get the support you need. 
              Our team is here to help you succeed with our technology solutions.
            </motion.p>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-lg text-lg"
                  aria-label="Search help center"
                />
                <button className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Support Channels
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need, when you need it
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-5xl mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{channel.description}</p>
                  <div className="text-blue-400 font-medium mb-2">{channel.contact}</div>
                  <div className="text-gray-400 text-sm">Response: {channel.responseTime}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to the most common questions about our services
              </p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </motion.div>
            
            {/* FAQ Items */}
            <motion.div 
              className="max-w-4xl mx-auto space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {faqs[activeCategory as keyof typeof faqs]?.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download guides, documentation, and resources to help you succeed
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">📚</div>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 text-center">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.download}
                    className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Download
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Still Need Help?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Contact Support
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpCenter;