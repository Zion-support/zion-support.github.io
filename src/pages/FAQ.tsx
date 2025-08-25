import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  HelpCircle,
  Brain,
  Cpu,
  Shield,
  Zap,
  Rocket,
  Building,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([]);

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const categories = [
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Zap },
    { id: 'business', name: 'Business Solutions', icon: Building },
    { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign },
    { id: 'support', name: 'Support & Contact', icon: Users }
  ];

  const faqs = [
    // General Questions
    {
      id: 'faq-1',
      category: 'general',
      question: 'What is Zion Tech Group?',
      answer: 'Zion Tech Group is a leading technology company specializing in AI, quantum computing, cybersecurity, and autonomous business systems. We help businesses of all sizes leverage cutting-edge technology to drive innovation and growth.',
      tags: ['Company', 'Overview', 'Technology']
    },
    {
      id: 'faq-2',
      category: 'general',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, government, and more. Our solutions are designed to be industry-agnostic while providing industry-specific optimizations and compliance features.',
      tags: ['Industries', 'Healthcare', 'Finance', 'Manufacturing']
    },
    {
      id: 'faq-3',
      category: 'general',
      question: 'Where are you located?',
      answer: 'We are headquartered in the United States with offices in multiple locations. We serve clients globally and can provide both remote and on-site services depending on your needs.',
      tags: ['Location', 'Global', 'Remote']
    },

    // AI Services
    {
      id: 'faq-4',
      category: 'ai-services',
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including autonomous business systems, AI-powered business intelligence, marketing automation, workflow automation, research assistance, and more. Our AI solutions are designed to work autonomously while providing human oversight capabilities.',
      tags: ['AI', 'Autonomous Systems', 'Business Intelligence', 'Automation']
    },
    {
      id: 'faq-5',
      category: 'ai-services',
      question: 'How do AI autonomous systems work?',
      answer: 'AI autonomous systems use advanced machine learning algorithms to make decisions and take actions without human intervention. They can analyze data, identify patterns, and execute tasks automatically while maintaining safety and compliance standards.',
      tags: ['AI', 'Autonomous', 'Machine Learning', 'Decision Making']
    },
    {
      id: 'faq-6',
      category: 'ai-services',
      question: 'Can AI systems replace human workers?',
      answer: 'Our AI systems are designed to augment human capabilities, not replace them. They handle repetitive tasks and data analysis, allowing humans to focus on creative problem-solving, strategy, and customer relationships.',
      tags: ['AI', 'Human Augmentation', 'Collaboration', 'Workplace']
    },

    // Quantum Technology
    {
      id: 'faq-7',
      category: 'quantum',
      question: 'What is quantum computing?',
      answer: 'Quantum computing uses quantum mechanical phenomena to process information in ways that classical computers cannot. It can solve complex problems exponentially faster, particularly in areas like cryptography, optimization, and scientific simulations.',
      tags: ['Quantum Computing', 'Technology', 'Performance', 'Applications']
    },
    {
      id: 'faq-8',
      category: 'quantum',
      question: 'Is quantum computing ready for business use?',
      answer: 'While quantum computing is still in development, we offer quantum-ready solutions and hybrid approaches that combine classical and quantum computing. We help businesses prepare for the quantum future while delivering immediate value.',
      tags: ['Quantum', 'Business', 'Hybrid', 'Future-Ready']
    },

    // Cybersecurity
    {
      id: 'faq-9',
      category: 'cybersecurity',
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC2, ISO 27001, and GDPR.',
      tags: ['Security', 'Encryption', 'Compliance', 'Standards']
    },
    {
      id: 'faq-10',
      category: 'cybersecurity',
      question: 'Do you provide SOC2 compliance services?',
      answer: 'Yes, we offer comprehensive SOC2 compliance services including automated compliance management, security assessment, and ongoing monitoring. We help businesses achieve and maintain SOC2 certification.',
      tags: ['SOC2', 'Compliance', 'Security', 'Certification']
    },

    // Cloud & Infrastructure
    {
      id: 'faq-11',
      category: 'cloud',
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud Platform, and private cloud solutions. We can also help with multi-cloud strategies and hybrid cloud deployments.',
      tags: ['Cloud', 'AWS', 'Azure', 'GCP', 'Multi-cloud']
    },
    {
      id: 'faq-12',
      category: 'cloud',
      question: 'How do you handle cloud migration?',
      answer: 'Our cloud migration process includes assessment, planning, migration execution, and optimization. We ensure minimal downtime and provide comprehensive testing and validation throughout the process.',
      tags: ['Cloud Migration', 'Planning', 'Execution', 'Testing']
    },

    // Business Solutions
    {
      id: 'faq-13',
      category: 'business',
      question: 'What is digital transformation?',
      answer: 'Digital transformation is the process of using digital technologies to fundamentally change how businesses operate and deliver value to customers. It involves rethinking business models, processes, and customer experiences.',
      tags: ['Digital Transformation', 'Business Models', 'Processes', 'Customer Experience']
    },
    {
      id: 'faq-14',
      category: 'business',
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on complexity and scope. Simple integrations can be completed in 2-4 weeks, while complex enterprise solutions typically take 3-6 months. We provide detailed project plans and regular updates.',
      tags: ['Implementation', 'Timeline', 'Project Planning', 'Updates']
    },

    // Pricing & Billing
    {
      id: 'faq-15',
      category: 'pricing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and custom enterprise solutions. We work with each client to find the most cost-effective approach for their needs.',
      tags: ['Pricing', 'Subscription', 'Project-Based', 'Enterprise']
    },
    {
      id: 'faq-16',
      category: 'pricing',
      question: 'Do you offer free consultations?',
      answer: 'Yes, we provide free initial consultations to understand your business needs and recommend appropriate solutions. This helps ensure we can deliver the most value for your investment.',
      tags: ['Consultation', 'Free', 'Business Needs', 'Value']
    },

    // Support & Contact
    {
      id: 'faq-17',
      category: 'support',
      question: 'What support do you provide after implementation?',
      answer: 'We provide comprehensive post-launch support including maintenance, updates, training, and 24/7 technical support. We also offer monitoring, performance optimization, and continuous improvement services.',
      tags: ['Support', 'Maintenance', 'Training', '24/7']
    },
    {
      id: 'faq-18',
      category: 'support',
      question: 'How can I contact your support team?',
      answer: 'You can reach our support team through multiple channels: phone, email, live chat, and our help center. We typically respond within 4 hours for email inquiries and immediately for urgent issues.',
      tags: ['Contact', 'Support', 'Response Time', 'Channels']
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const searchMatch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return searchMatch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : HelpCircle;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about our services, technology solutions, 
              and how we can help transform your business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-20">
              <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No questions found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords or browse our help categories.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => {
                const CategoryIcon = getCategoryIcon(faq.category);
                return (
                  <div key={faq.id} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          <CategoryIcon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {faq.question}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-500/30">
                              {getCategoryName(faq.category)}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {faq.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {expandedFAQs.includes(faq.id) ? (
                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedFAQs.includes(faq.id) && (
                      <div className="px-6 pb-6 border-t border-gray-700">
                        <p className="text-gray-300 pt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find the answer you're looking for? Our expert team is here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Contact Support</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get in touch with our technical experts
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Contact Us
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Help Center</h3>
              <p className="text-gray-400 text-sm mb-4">
                Browse our comprehensive help resources
              </p>
              <Link
                to="/help"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Visit Help Center
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <button className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300">
                Start Chat
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Support
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Browse Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
