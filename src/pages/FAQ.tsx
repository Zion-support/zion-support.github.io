import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp,
  Brain,
  Shield,
  Cpu,
  Cloud,
  Users,
  Zap
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "AI Solutions",
      icon: Brain,
      faqs: [
        {
          question: "What AI services does Zion Tech Group offer?",
          answer: "We offer comprehensive AI solutions including machine learning platforms, natural language processing, computer vision, predictive analytics, autonomous systems, and custom AI development tailored to your business needs."
        },
        {
          question: "How accurate are your AI models?",
          answer: "Our AI models typically achieve 90-98% accuracy depending on the use case. We continuously monitor and improve model performance through retraining and optimization."
        },
        {
          question: "Can you integrate AI with our existing systems?",
          answer: "Yes! We specialize in seamless AI integration with existing enterprise systems, databases, and workflows. Our solutions are designed to work with your current infrastructure."
        }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      faqs: [
        {
          question: "What security measures do you implement?",
          answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, SOC2 compliance, regular security audits, and 24/7 threat monitoring."
        },
        {
          question: "Do you provide compliance certifications?",
          answer: "Yes, we help clients achieve and maintain various compliance standards including SOC2, ISO 27001, GDPR, HIPAA, and industry-specific requirements."
        },
        {
          question: "How do you handle data breaches?",
          answer: "We have comprehensive incident response plans, immediate notification procedures, and dedicated security teams to handle any security incidents quickly and effectively."
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      faqs: [
        {
          question: "Which cloud platforms do you support?",
          answer: "We support all major cloud platforms including AWS, Azure, Google Cloud Platform, and hybrid cloud solutions. We can also deploy on-premises or in edge computing environments."
        },
        {
          question: "What is your uptime guarantee?",
          answer: "We guarantee 99.9% uptime for all cloud services with automatic failover, load balancing, and disaster recovery capabilities."
        },
        {
          question: "How do you optimize cloud costs?",
          answer: "We use advanced monitoring tools, auto-scaling, and cost optimization strategies to reduce cloud expenses by 20-40% while maintaining performance."
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: Users,
      faqs: [
        {
          question: "How long does implementation typically take?",
          answer: "Implementation timelines vary: simple integrations (2-4 weeks), standard solutions (1-3 months), complex enterprise systems (3-6 months). We provide detailed timelines during consultation."
        },
        {
          question: "What support do you provide after launch?",
          answer: "We provide 24/7 support, regular maintenance, performance monitoring, updates, training, and continuous improvement services to ensure your solution remains effective."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we offer comprehensive training programs including user training, technical training, and ongoing support to ensure your team can effectively use and maintain the solutions."
        }
      ]
    },
    {
      title: "Pricing & Contracts",
      icon: Zap,
      faqs: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing including monthly subscriptions, project-based pricing, and enterprise agreements. Pricing depends on scope, complexity, and support requirements."
        },
        {
          question: "Do you offer free trials or demos?",
          answer: "Yes, we offer free consultations, product demos, and pilot programs to help you evaluate our solutions before making a commitment."
        },
        {
          question: "What is included in your contracts?",
          answer: "Our contracts include service delivery, support, maintenance, updates, training, and clear terms for project scope, timelines, and deliverables."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.title }))
  );

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="FAQ - Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI solutions, cybersecurity, cloud services, and implementation processes."
        keywords="FAQ, frequently asked questions, AI solutions, cybersecurity, cloud services, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Find answers to common questions about our AI solutions, cybersecurity, cloud services, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchTerm && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Search Results for "{searchTerm}"
            </h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  >
                    <div>
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                      <div className="text-sm text-cyan-400 mt-1">{faq.category}</div>
                    </div>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-6 w-6 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-cyan-400" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      {!searchTerm && (
        <>
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`py-16 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-gray-800/30' : ''}`}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <category.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * category.faqs.length + faqIndex;
                    return (
                      <div key={faqIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-white">{faq.question}</span>
                          {expandedFaq === globalIndex ? (
                            <ChevronUp className="h-6 w-6 text-cyan-400" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-cyan-400" />
                          )}
                        </button>
                        {expandedFaq === globalIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find the answer you're looking for? Our expert team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">Contact Support</h3>
              <p className="text-gray-300 mb-4">Get help from our technical experts</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Consultation</h3>
              <p className="text-gray-300 mb-4">Book a call with our solutions team</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our AI-powered solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
