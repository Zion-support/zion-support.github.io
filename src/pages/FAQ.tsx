import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  Shield,
  Users,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Code,
  Building,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'general-1',
    question: 'What is Zion Tech Group?',
    answer: 'Zion Tech Group is the world\'s first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with innovative companies, offering cutting-edge technology solutions across AI, cybersecurity, cloud computing, and emerging technologies.',
    category: 'General',
    icon: Building
  },
  {
    id: 'general-2',
    question: 'How does the Zion marketplace work?',
    answer: 'Our marketplace operates as a free platform where businesses can discover and connect with tech talent, purchase innovative solutions, and access cutting-edge equipment. We facilitate secure transactions and ensure quality through our verification system.',
    category: 'General',
    icon: Users
  },
  {
    id: 'general-3',
    question: 'Is Zion Tech Group free to use?',
    answer: 'Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to technology and innovation. Some premium features and enterprise solutions may have associated costs.',
    category: 'General',
    icon: Heart
  },

  // Services
  {
    id: 'services-1',
    question: 'What AI services do you offer?',
    answer: 'We offer comprehensive AI services including machine learning implementation, natural language processing, computer vision, predictive analytics, AI consulting, and custom AI solution development. Our AI experts specialize in both traditional and cutting-edge AI technologies.',
    category: 'Services',
    icon: Brain
  },
  {
    id: 'services-2',
    question: 'Do you provide cybersecurity services?',
    answer: 'Absolutely! Our cybersecurity services include penetration testing, security audits, incident response, compliance consulting, threat intelligence, and security infrastructure design. We work with leading security experts to protect your digital assets.',
    category: 'Services',
    icon: Shield
  },
  {
    id: 'services-3',
    question: 'What cloud and DevOps services are available?',
    answer: 'We offer cloud migration, infrastructure as code, CI/CD pipeline setup, container orchestration, cloud security, cost optimization, and 24/7 cloud monitoring. Our DevOps experts help streamline your development and deployment processes.',
    category: 'Services',
    icon: Cloud
  },
  {
    id: 'services-4',
    question: 'Do you offer quantum computing services?',
    answer: 'Yes! We provide quantum computing consulting, algorithm development, quantum software development, and integration services. Our quantum experts help businesses explore the potential of next-generation computing technologies.',
    category: 'Services',
    icon: Rocket
  },

  // Marketplace
  {
    id: 'marketplace-1',
    question: 'How do I find talent on the marketplace?',
    answer: 'Browse our talent directory by skills, experience, or location. You can view profiles, portfolios, and reviews. Contact talent directly through our secure messaging system or post job requirements for qualified professionals to respond.',
    category: 'Marketplace',
    icon: Users
  },
  {
    id: 'marketplace-2',
    question: 'What types of equipment are available?',
    answer: 'We offer a wide range of high-tech equipment including servers, networking gear, AI/ML hardware, IoT devices, quantum computers, and specialized testing equipment. All equipment is verified and comes with warranty options.',
    category: 'Marketplace',
    icon: Zap
  },
  {
    id: 'marketplace-3',
    question: 'How do you ensure quality on the marketplace?',
    answer: 'We implement a comprehensive verification system including background checks, skill assessments, portfolio reviews, and customer feedback. All marketplace participants are thoroughly vetted to maintain high quality standards.',
    category: 'Marketplace',
    icon: Shield
  },

  // Technical Support
  {
    id: 'support-1',
    question: 'What support do you provide?',
    answer: 'We offer 24/7 technical support, documentation, video tutorials, community forums, and dedicated account managers for enterprise clients. Our support team consists of technical experts who can help with any platform or service-related questions.',
    category: 'Support',
    icon: HelpCircle
  },
  {
    id: 'support-2',
    question: 'How can I get help with a specific service?',
    answer: 'Contact our support team through live chat, email, or phone. For service-specific issues, we\'ll connect you with the appropriate technical expert. We also offer scheduled consultation calls for complex technical questions.',
    category: 'Support',
    icon: MessageCircle
  },
  {
    id: 'support-3',
    question: 'Do you offer training and onboarding?',
    answer: 'Yes! We provide comprehensive onboarding sessions, training webinars, documentation, and personalized guidance to help you get the most out of our platform and services.',
    category: 'Support',
    icon: Clock
  },

  // Security & Privacy
  {
    id: 'security-1',
    question: 'How do you protect my data?',
    answer: 'We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with international security standards. Your data privacy and security are our top priorities.',
    category: 'Security',
    icon: Lock
  },
  {
    id: 'security-2',
    question: 'What compliance standards do you meet?',
    answer: 'We maintain compliance with GDPR, SOC 2, ISO 27001, and other international standards. Our platform undergoes regular audits and we provide compliance documentation for enterprise clients.',
    category: 'Security',
    icon: Shield
  }
];

const categories = ['All', 'General', 'Services', 'Marketplace', 'Support', 'Security'];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Find answers to common questions about Zion Tech Group, our services, and marketplace platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white border border-zion-cyan/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container-responsive py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                          <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-6 h-6 text-zion-cyan" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-zion-slate-light" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="border-t border-zion-cyan/20 pt-4">
                          <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search or category filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-responsive py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-zion-slate-light mb-8 text-lg">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              <Link
                to="/help-center"
                className="px-8 py-4 bg-white/10 border border-zion-cyan/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-5 h-5" />
                Visit Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}