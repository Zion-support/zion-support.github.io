import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail, HelpCircle, BookOpen, Video, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const faqData: FAQItem[] = [
    // General Questions
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect innovators, talent, and cutting-edge technology worldwide, providing comprehensive AI solutions, cybersecurity services, cloud infrastructure, and digital transformation consulting.",
      category: "general"
    },
    {
      question: "Where is Zion Tech Group located?",
      answer: "Zion Tech Group is headquartered in Delaware, USA, with a global presence serving clients worldwide through our digital platform and remote services.",
      category: "general"
    },
    {
      question: "How can I contact Zion Tech Group?",
      answer: "You can contact us through multiple channels: Email at info@ziontechgroup.com, phone at +1 (302) 464-0950, or through our contact form on the website. We also offer live chat support during business hours.",
      category: "general"
    },
    // Services Questions
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer a comprehensive range of technology services including AI solutions, cybersecurity, cloud & DevOps, IT consulting, infrastructure management, digital transformation, and quantum computing services. Our services are tailored for enterprises, startups, and organizations of all sizes.",
      category: "services"
    },
    {
      question: "Do you provide AI consulting services?",
      answer: "Yes, we specialize in AI consulting and implementation. Our AI services include machine learning solutions, natural language processing, computer vision, AI workflow automation, and custom AI development for specific business needs.",
      category: "services"
    },
    {
      question: "What cybersecurity services do you offer?",
      answer: "Our cybersecurity services include security audits, penetration testing, incident response, compliance consulting (SOC 2, GDPR, HIPAA), security awareness training, and ongoing security monitoring and management.",
      category: "services"
    },
    {
      question: "Do you provide cloud migration services?",
      answer: "Yes, we offer comprehensive cloud migration services including assessment, planning, migration execution, and post-migration optimization. We work with AWS, Azure, Google Cloud, and other major cloud providers.",
      category: "services"
    },
    // Pricing & Billing
    {
      question: "How does Zion Tech Group pricing work?",
      answer: "We offer flexible pricing models including project-based pricing, retainer agreements, and subscription plans. Pricing varies based on service complexity, project scope, and ongoing support requirements. Contact us for a personalized quote.",
      category: "pricing"
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations tailored to your specific requirements.",
      category: "pricing"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and digital payments. For enterprise clients, we offer net payment terms and can accommodate various billing cycles.",
      category: "pricing"
    },
    // Technical Support
    {
      question: "What kind of technical support do you provide?",
      answer: "We provide 24/7 technical support for critical systems, regular business hours support for general inquiries, and dedicated support teams for enterprise clients. Support includes troubleshooting, maintenance, and optimization services.",
      category: "support"
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we offer comprehensive training programs for all our solutions. This includes user training, administrator training, and ongoing education to ensure your team can effectively use and maintain the implemented solutions.",
      category: "support"
    },
    {
      question: "What is your response time for support requests?",
      answer: "Our response times vary by priority level: Critical issues (P1) - 1 hour, High priority (P2) - 4 hours, Medium priority (P3) - 24 hours, Low priority (P4) - 48 hours. Enterprise clients receive priority support.",
      category: "support"
    },
    // Partnership & Careers
    {
      question: "How can I become a partner with Zion Tech Group?",
      answer: "We welcome partnerships with technology companies, consultants, and service providers. Partnership opportunities include reseller agreements, technology partnerships, and strategic alliances. Contact our partnerships team to discuss opportunities.",
      category: "partnership"
    },
    {
      question: "Do you hire remote workers?",
      answer: "Yes, we have a distributed team and hire remote workers worldwide. We offer competitive compensation, flexible work arrangements, and opportunities for growth in cutting-edge technology fields.",
      category: "partnership"
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, PyTorch, and many more. We stay current with emerging technologies and industry trends.",
      category: "partnership"
    }
  ];
  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },
    { id: 'services', name: 'Services', count: faqData.filter(item => item.category === 'services').length },
    { id: 'pricing', name: 'Pricing & Billing', count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'support', name: 'Technical Support', count: faqData.filter(item => item.category === 'support').length },
    { id: 'partnership', name: 'Partnership & Careers', count: faqData.filter(item => item.category === 'partnership').length },
  ];
  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };
<<<<<<< HEAD

=======
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group's services, pricing, and support. 
              Can't find what you're looking for? Contact our team directly.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions and answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>
        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  {expandedItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedItems.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </div>
          )}
        </motion.div>
        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-xl mb-8 text-zion-cyan-light">
              Our expert team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-zion-cyan rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan-dark text-white rounded-lg font-medium hover:bg-zion-cyan-darker transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-zion-purple-dark text-white rounded-lg font-medium hover:bg-zion-purple-darker transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Access our comprehensive technical documentation and guides.
            </p>
            <Link
              to="/docs"
              className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
            >
              View Documentation →
            </Link>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-zion-purple/10 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-zion-purple" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 mb-4">
              Learn through our video tutorials and webinars.
            </p>
            <Link
              to="/webinars"
              className="text-zion-purple hover:text-zion-purple-dark font-medium"
            >
              Watch Videos →
            </Link>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Users2 className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 mb-4">
              Join our community forum for discussions and support.
            </p>
            <Link
              to="/community"
              className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
            >
              Join Community →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default FAQ;
