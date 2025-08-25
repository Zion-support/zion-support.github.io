import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, BookOpen, Users, Shield, Zap, Brain, Globe, Building } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: 45 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 12 },
    { id: 'services', name: 'Services', icon: Zap, count: 8 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 10 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Building, count: 7 },
    { id: 'general', name: 'General', icon: Users, count: 8 }
  ];

  const faqData = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group offers a comprehensive range of technology services including AI and machine learning solutions, quantum computing platforms, cybersecurity services, infrastructure management, blockchain solutions, and emerging technology consulting. We specialize in enterprise-grade solutions that help businesses transform their operations and stay ahead of technological advancements.",
      category: "services",
      tags: ["Services", "Overview", "Technology"]
    },
    {
      id: 2,
      question: "How does your AI Autonomous Business Manager work?",
      answer: "Our AI Autonomous Business Manager is an advanced platform that uses machine learning algorithms to automate decision-making processes, optimize business operations, and provide strategic insights. It continuously learns from your business data to improve performance and can handle complex tasks like resource allocation, process optimization, and predictive analytics without human intervention.",
      category: "ai",
      tags: ["AI", "Business Automation", "Machine Learning"]
    },
    {
      id: 3,
      question: "What is quantum neural network technology?",
      answer: "Quantum neural networks combine the principles of quantum computing with artificial neural networks to create more powerful and efficient machine learning systems. This technology can process complex data patterns faster than classical computers and solve optimization problems that are currently intractable. Our platform provides tools for developing, training, and deploying quantum neural networks for various applications.",
      category: "ai",
      tags: ["Quantum Computing", "Neural Networks", "Machine Learning"]
    },
    {
      id: 4,
      question: "How do you ensure SOC2 compliance?",
      answer: "We provide comprehensive SOC2 compliance automation tools that help organizations achieve and maintain compliance with security standards. Our platform includes automated risk assessments, continuous monitoring, compliance reporting, and audit trail management. We also offer consulting services to help organizations implement proper security controls and processes.",
      category: "security",
      tags: ["SOC2", "Compliance", "Security", "Automation"]
    },
    {
      id: 5,
      question: "What are your 5G enterprise solutions?",
      answer: "Our 5G enterprise solutions include network optimization platforms, edge computing infrastructure, IoT device management, and real-time analytics capabilities. We help businesses leverage 5G technology to improve connectivity, enable new applications, and create more efficient operational processes. Our solutions are designed for enterprise-scale deployments with security and reliability in mind.",
      category: "infrastructure",
      tags: ["5G", "Enterprise", "Network Optimization", "IoT"]
    },
    {
      id: 6,
      question: "How can I get started with your services?",
      answer: "Getting started is easy! You can contact our sales team through our website, schedule a consultation call, or request a demo of our solutions. We'll assess your needs, recommend the best approach, and help you implement our technology step by step. We also offer training and support to ensure successful adoption.",
      category: "general",
      tags: ["Getting Started", "Consultation", "Support"]
    },
    {
      id: 7,
      question: "Do you provide custom development services?",
      answer: "Yes, we offer custom development services for clients with specific requirements that aren't met by our standard solutions. Our team of experienced developers and engineers can create tailored applications, integrate existing systems, or develop entirely new solutions. We work closely with clients throughout the development process to ensure the final product meets their exact needs.",
      category: "services",
      tags: ["Custom Development", "Tailored Solutions", "Integration"]
    },
    {
      id: 8,
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including 24/7 technical support, dedicated account managers, online documentation, training programs, and community forums. Our support team consists of certified professionals who are experts in our technologies. We also offer different support tiers to meet various business needs and response time requirements.",
      category: "general",
      tags: ["Support", "Technical Help", "Training"]
    },
    {
      id: 9,
      question: "How secure are your AI systems?",
      answer: "Security is a top priority for all our AI systems. We implement multiple layers of security including encryption, access controls, audit logging, and regular security assessments. Our AI models are trained on secure, isolated data environments, and we follow industry best practices for AI security. We also provide tools for organizations to implement their own security policies and controls.",
      category: "security",
      tags: ["AI Security", "Encryption", "Access Control", "Compliance"]
    },
    {
      id: 10,
      question: "Can you help with legacy system integration?",
      answer: "Absolutely! We specialize in helping organizations integrate new technologies with existing legacy systems. Our team has extensive experience with various platforms, databases, and enterprise systems. We use modern integration techniques and APIs to ensure smooth connectivity while preserving your existing investments and minimizing disruption to ongoing operations.",
      category: "infrastructure",
      tags: ["Legacy Integration", "System Migration", "APIs"]
    },
    {
      id: 11,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, telecommunications, and government sectors. Our solutions are designed to be industry-agnostic while providing specific features and compliance requirements for each sector. We have case studies and references across multiple industries to demonstrate our expertise.",
      category: "general",
      tags: ["Industries", "Healthcare", "Finance", "Manufacturing"]
    },
    {
      id: 12,
      question: "How do you handle data privacy and GDPR compliance?",
      answer: "We are fully compliant with GDPR and other international data privacy regulations. Our platform includes built-in privacy controls, data anonymization tools, and consent management systems. We provide comprehensive data governance features and work with clients to ensure their data handling practices meet all regulatory requirements. We also offer privacy impact assessments and compliance consulting services.",
      category: "security",
      tags: ["GDPR", "Data Privacy", "Compliance", "Data Governance"]
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularQuestions = faqData.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our services, technology solutions, and how we can help 
            transform your business with cutting-edge AI and emerging technologies.
          </p>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-gray-800/50 border border-gray-700'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Questions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Popular Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {popularQuestions.map((item) => (
            <div key={item.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
              <p className="text-gray-300 text-sm line-clamp-3">{item.answer}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => toggleItem(item.id)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">All Questions</h2>
        <div className="space-y-4">
          {filteredFAQ.map((item) => (
            <div key={item.id} className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. 
            Contact us directly or explore our resources for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              <MessageCircle className="w-4 h-4 mr-2 inline" />
              Contact Support
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              <BookOpen className="w-4 h-4 mr-2 inline" />
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Additional Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-cyan-500/50 transition-all duration-200">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
            <p className="text-gray-300 mb-4">Comprehensive guides and technical documentation for all our products and services.</p>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Browse Docs
            </button>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-cyan-500/50 transition-all duration-200">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Community</h3>
            <p className="text-gray-300 mb-4">Join our community forum to ask questions and connect with other users.</p>
            <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
              Join Community
            </button>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-cyan-500/50 transition-all duration-200">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Support</h3>
            <p className="text-gray-300 mb-4">Get direct support from our technical team for complex issues and custom solutions.</p>
            <button className="text-green-400 hover:text-green-300 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
