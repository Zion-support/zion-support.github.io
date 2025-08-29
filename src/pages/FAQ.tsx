import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Award,
  Globe,
  Building,
  Target,
  TrendingUp,
  Heart,
  ArrowRight,
  FileText,
  HelpCircle,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  MapPin,
  DollarSign
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'general-1',
    question: 'What services does Zion Tech Group offer?',
    answer: 'Zion Tech Group provides comprehensive technology solutions including AI & Analytics, Cloud & DevOps, Cybersecurity, Digital Twin technology, Micro SaaS solutions, and IT consulting. We specialize in digital transformation and emerging technologies.',
    category: 'General',
    tags: ['services', 'overview', 'technology']
  },
  {
    id: 'general-2',
    question: 'How long has Zion Tech Group been in business?',
    answer: 'Zion Tech Group has been delivering innovative technology solutions for over 15 years. We have successfully completed 500+ projects and serve clients across various industries worldwide.',
    category: 'General',
    tags: ['company', 'experience', 'history']
  },
  {
    id: 'general-3',
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including technology, healthcare, finance, manufacturing, retail, education, government, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.',
    category: 'General',
    tags: ['industries', 'clients', 'sectors']
  },

  // AI & Analytics
  {
    id: 'ai-1',
    question: 'What AI technologies do you specialize in?',
    answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, and large language models (LLMs). Our AI solutions include business intelligence, sales automation, and content generation.',
    category: 'AI & Analytics',
    tags: ['AI', 'machine learning', 'analytics', 'LLM']
  },
  {
    id: 'ai-2',
    question: 'How do you ensure AI model accuracy and fairness?',
    answer: 'We implement rigorous testing protocols, bias detection algorithms, and continuous monitoring systems. Our AI models undergo extensive validation using diverse datasets and are regularly updated to maintain accuracy and fairness.',
    category: 'AI & Analytics',
    tags: ['AI', 'accuracy', 'fairness', 'testing']
  },
  {
    id: 'ai-3',
    question: 'Can you integrate AI with existing business systems?',
    answer: 'Yes, we specialize in seamless AI integration with existing business systems. We use APIs, microservices architecture, and custom connectors to ensure smooth integration with your current infrastructure.',
    category: 'AI & Analytics',
    tags: ['AI', 'integration', 'systems', 'APIs']
  },

  // Cloud & DevOps
  {
    id: 'cloud-1',
    question: 'Which cloud platforms do you support?',
    answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud Platform, and hybrid cloud solutions. We also provide multi-cloud strategies and cloud migration services.',
    category: 'Cloud & DevOps',
    tags: ['cloud', 'AWS', 'Azure', 'GCP', 'migration']
  },
  {
    id: 'cloud-2',
    question: 'What DevOps practices do you implement?',
    answer: 'We implement CI/CD pipelines, infrastructure as code, automated testing, monitoring, and deployment strategies. Our DevOps approach focuses on automation, collaboration, and continuous improvement.',
    category: 'Cloud & DevOps',
    tags: ['DevOps', 'CI/CD', 'automation', 'testing']
  },
  {
    id: 'cloud-3',
    question: 'How do you handle cloud cost optimization?',
    answer: 'We use FinOps practices, automated scaling, resource monitoring, and cost analysis tools to optimize cloud spending. Our solutions typically reduce cloud costs by 20-40% while maintaining performance.',
    category: 'Cloud & DevOps',
    tags: ['cloud', 'cost optimization', 'FinOps', 'scaling']
  },

  // Cybersecurity
  {
    id: 'security-1',
    question: 'What security certifications do you have?',
    answer: 'We maintain ISO 27001, SOC 2 Type II, and other industry-recognized security certifications. Our team includes certified security professionals with expertise in various security frameworks.',
    category: 'Cybersecurity',
    tags: ['security', 'certifications', 'compliance', 'ISO']
  },
  {
    id: 'security-2',
    question: 'How do you protect against cyber threats?',
    answer: 'We implement multi-layered security including threat detection, intrusion prevention, encryption, access controls, and 24/7 monitoring. Our security solutions use AI-powered threat intelligence for proactive protection.',
    category: 'Cybersecurity',
    tags: ['security', 'threats', 'protection', 'monitoring']
  },
  {
    id: 'security-3',
    question: 'Do you provide incident response services?',
    answer: 'Yes, we offer 24/7 incident response services with guaranteed response times. Our team includes certified incident responders and we follow industry best practices for threat containment and recovery.',
    category: 'Cybersecurity',
    tags: ['security', 'incident response', '24/7', 'recovery']
  },

  // Digital Solutions
  {
    id: 'digital-1',
    question: 'What is Digital Twin technology?',
    answer: 'Digital Twin creates virtual replicas of physical systems, processes, or products. We use this technology for real-time monitoring, predictive maintenance, performance optimization, and simulation-based decision making.',
    category: 'Digital Solutions',
    tags: ['digital twin', 'monitoring', 'simulation', 'IoT']
  },
  {
    id: 'digital-2',
    question: 'How do you develop Micro SaaS solutions?',
    answer: 'We develop Micro SaaS solutions using modern technologies like React, Node.js, and cloud-native architectures. Our approach focuses on scalability, user experience, and rapid deployment.',
    category: 'Digital Solutions',
    tags: ['Micro SaaS', 'development', 'React', 'Node.js']
  },
  {
    id: 'digital-3',
    question: 'Can you customize solutions for specific business needs?',
    answer: 'Absolutely. We specialize in custom development tailored to your specific business requirements. We work closely with your team to understand your needs and deliver solutions that fit your workflow.',
    category: 'Digital Solutions',
    tags: ['customization', 'development', 'business needs', 'workflow']
  },

  // Pricing & Billing
  {
    id: 'pricing-1',
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Pricing depends on the scope, complexity, and duration of the project.',
    category: 'Pricing & Billing',
    tags: ['pricing', 'subscriptions', 'projects', 'enterprise']
  },
  {
    id: 'pricing-2',
    question: 'Do you offer free consultations?',
    answer: 'Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations for your project.',
    category: 'Pricing & Billing',
    tags: ['consultations', 'free', 'estimates', 'recommendations']
  },
  {
    id: 'pricing-3',
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including upfront payments, milestone-based payments, and monthly billing for ongoing services. We can work with your budget and payment preferences.',
    category: 'Pricing & Billing',
    tags: ['payment', 'terms', 'milestones', 'billing']
  },

  // Support & Maintenance
  {
    id: 'support-1',
    question: 'What support levels do you provide?',
    answer: 'We offer multiple support tiers including basic email support, priority phone support, and 24/7 dedicated support for enterprise clients. Response times vary by support level.',
    category: 'Support & Maintenance',
    tags: ['support', '24/7', 'response times', 'enterprise']
  },
  {
    id: 'support-2',
    question: 'Do you provide training for your solutions?',
    answer: 'Yes, we provide comprehensive training programs including user training, administrator training, and technical training. We also offer ongoing training as new features are released.',
    category: 'Support & Maintenance',
    tags: ['training', 'users', 'administrators', 'technical']
  },
  {
    id: 'support-3',
    question: 'How do you handle system updates and maintenance?',
    answer: 'We provide automated updates, scheduled maintenance windows, and proactive monitoring. All updates are tested in staging environments before production deployment to ensure stability.',
    category: 'Support & Maintenance',
    tags: ['updates', 'maintenance', 'monitoring', 'testing']
  }
];

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle, count: faqData.length },
  { id: 'General', name: 'General', icon: Building, count: faqData.filter(faq => faq.category === 'General').length },
  { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: faqData.filter(faq => faq.category === 'AI & Analytics').length },
  { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, count: faqData.filter(faq => faq.category === 'Cloud & DevOps').length },
  { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: faqData.filter(faq => faq.category === 'Cybersecurity').length },
  { id: 'Digital Solutions', name: 'Digital Solutions', icon: Rocket, count: faqData.filter(faq => faq.category === 'Digital Solutions').length },
  { id: 'Pricing & Billing', name: 'Pricing & Billing', icon: DollarSign, count: faqData.filter(faq => faq.category === 'Pricing & Billing').length },
  { id: 'Support & Maintenance', name: 'Support & Maintenance', icon: Users, count: faqData.filter(faq => faq.category === 'Support & Maintenance').length }
];

const supportChannels = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageSquare,
    color: 'from-blue-400 to-cyan-500',
    action: 'Start Chat',
    href: '/chat'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    icon: Phone,
    color: 'from-green-400 to-emerald-500',
    action: 'Call Now',
    href: 'tel:+1-555-0123'
  },
  {
    title: 'Email Support',
    description: 'Send us a detailed message',
    icon: Mail,
    color: 'from-purple-400 to-pink-500',
    action: 'Send Email',
    href: 'mailto:support@ziontechgroup.com'
  },
  {
    title: 'Documentation',
    description: 'Browse our comprehensive guides',
    icon: BookOpen,
    color: 'from-yellow-400 to-orange-500',
    action: 'View Docs',
    href: '/documentation'
  }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's technology services, AI solutions, cloud infrastructure, and cybersecurity offerings."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Find answers to common questions about our technology services and solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-400/25'
                    : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                View All Questions
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-lg mb-2">{faq.question}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                          {faq.category}
                        </span>
                        <div className="flex space-x-1">
                          {faq.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/30 text-slate-400 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {expandedItems.has(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.has(faq.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <div className="border-t border-slate-700/50 pt-4">
                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                
                {channel.href.startsWith('tel:') || channel.href.startsWith('mailto:') ? (
                  <a
                    href={channel.href}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors duration-200"
                  >
                    <span>{channel.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={channel.href}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors duration-200"
                  >
                    <span>{channel.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our technology solutions can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
