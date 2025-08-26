import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
    },
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including autonomous business systems, machine learning solutions, natural language processing, computer vision, and custom AI development tailored to your specific needs."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while comprehensive AI solutions typically take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We provide 24/7 support and maintenance for all our solutions. Our team is always available to help with any issues, updates, or questions you may have."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve clients across all industries including healthcare, finance, manufacturing, retail, technology, and government. Our solutions are designed to be industry-agnostic and highly customizable."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure APIs, SOC2 compliance, and regular security audits. Your data security and privacy are our top priorities."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: BookOpen,
      articles: 12
    },
    {
      title: "AI Solutions",
      description: "Understanding and using our AI-powered services",
      icon: HelpCircle,
      articles: 25
    },
    {
      title: "Technical Support",
      description: "Troubleshooting and technical assistance",
      icon: MessageCircle,
      articles: 18
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and demonstrations",
      icon: Video,
      articles: 15
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 4 hours",
      icon: Mail,
      contact: "support@ziontechgroup.com",
      responseTime: "4 hours"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      contact: "+1 (302) 464-0950",
      responseTime: "Immediate"
    },
    {
      title: "Live Chat",
      description: "Real-time chat with our support team",
      icon: MessageCircle,
      contact: "Available 24/7",
      responseTime: "Instant"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to FAQs, tutorials, and contact information for expert assistance."
        keywords="help center, support, FAQ, contact, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Help Center
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Find answers to your questions, learn how to use our services, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Help Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400">{category.articles} articles</span>
                  <ArrowRight className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
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

      {/* Contact Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Need More Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                  <div className="text-lg font-semibold text-cyan-400">{method.contact}</div>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  Response time: {method.responseTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Our expert team is here to help you succeed with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
