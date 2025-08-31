import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Video,
  Download,
  Users,
  Zap,
  Shield,
  Cloud,
  Brain,
  Atom,
  Rocket,
  Code,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Building2,
  Network,
  Briefcase,
  DollarSign,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Cpu,
  Database,
  Workflow,
  Palette,
  Monitor,
  Smartphone,
  Server,
  Lock,
  BarChart3,
  LifeBuoy,
  Settings,
  Tool,
  Wrench,
  Lightbulb,
  Target,
  Award
} from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface HelpCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  articles: number;
  color: string;
}

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const helpCategories: HelpCategory[] = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Quick start guides and onboarding information',
      icon: Rocket,
      articles: 12,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Help with AI and machine learning services',
      icon: Brain,
      articles: 18,
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Quantum computing platform support',
      icon: Atom,
      articles: 8,
      color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security platform and compliance help',
      icon: Shield,
      articles: 15,
      color: 'bg-red-500/20 text-red-400 border-red-500/30'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud & Infrastructure',
      description: 'Cloud services and infrastructure support',
      icon: Cloud,
      articles: 22,
      color: 'bg-green-500/20 text-green-400 border-green-500/30'
    },
    {
      id: 'billing-support',
      name: 'Billing & Support',
      description: 'Billing, account, and general support',
      icon: DollarSign,
      articles: 10,
      color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    }
  ];

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions. Our onboarding process includes a comprehensive assessment, custom implementation plan, and dedicated support throughout your journey.',
      category: 'getting-started',
      tags: ['onboarding', 'consultation', 'getting-started']
    },
    {
      id: '2',
      question: 'What AI services do you offer for enterprises?',
      answer: 'We offer a comprehensive suite of AI services including enterprise automation platforms, data analytics, business intelligence, cybersecurity solutions, autonomous research assistants, financial trading platforms, healthcare platforms, and quantum hybrid solutions. Each service is customizable to meet your specific business requirements.',
      category: 'ai-services',
      tags: ['AI', 'enterprise', 'automation', 'analytics']
    },
    {
      id: '3',
      question: 'How secure are your AI and quantum computing platforms?',
      answer: 'Security is our top priority. All our platforms implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR. Our quantum platforms also include quantum-resistant encryption protocols.',
      category: 'cybersecurity',
      tags: ['security', 'encryption', 'compliance', 'quantum']
    },
    {
      id: '4',
      question: 'Can you help with legacy system integration?',
      answer: 'Absolutely! We specialize in modernizing legacy systems and integrating them with cutting-edge AI and cloud solutions. Our team has extensive experience in enterprise architecture, data migration, and creating seamless integration pathways that preserve your existing investments while unlocking new capabilities.',
      category: 'cloud-infrastructure',
      tags: ['legacy', 'integration', 'migration', 'modernization']
    },
    {
      id: '5',
      question: 'What support options are available for enterprise clients?',
      answer: 'Enterprise clients receive premium support including 24/7 technical assistance, dedicated account managers, priority response times, custom training programs, and regular health checks. We also offer on-site support for critical implementations and emergency response services.',
      category: 'billing-support',
      tags: ['enterprise', 'support', '24/7', 'dedicated']
    },
    {
      id: '6',
      question: 'How do your quantum computing solutions work?',
      answer: 'Our quantum computing solutions combine classical and quantum computing approaches to solve complex problems that are intractable for traditional computers. We offer quantum edge computing, quantum neural networks, and hybrid platforms that can be deployed on-premises or in the cloud, depending on your security and performance requirements.',
      category: 'quantum-computing',
      tags: ['quantum', 'computing', 'hybrid', 'edge-computing']
    },
    {
      id: '7',
      question: 'What industries do you specialize in?',
      answer: 'We serve a wide range of industries including healthcare, financial services, manufacturing, government, retail, and emerging tech sectors. Our solutions are designed to be industry-agnostic while incorporating domain-specific expertise and compliance requirements for each sector.',
      category: 'getting-started',
      tags: ['industries', 'healthcare', 'finance', 'manufacturing']
    },
    {
      id: '8',
      question: 'How do you handle data privacy and compliance?',
      answer: 'We maintain strict data privacy standards and comply with all major regulations including GDPR, HIPAA, SOX, and industry-specific requirements. Our data handling practices include data minimization, purpose limitation, and robust consent management. We also provide compliance reporting and audit support.',
      category: 'cybersecurity',
      tags: ['privacy', 'compliance', 'GDPR', 'HIPAA']
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    if (selectedCategory !== 'all' && faq.category !== selectedCategory) return false;
    if (searchQuery) {
      return faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
             faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
             faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const quickActions = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/documentation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/training',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Download,
      title: 'Downloads',
      description: 'SDKs, tools, and resources',
      link: '/downloads',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other users',
      link: '/community',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@ziontechgroup.com',
      response: 'Within 4 hours',
      link: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: '+1 (302) 464-0950',
      response: 'Immediate',
      link: 'tel:+13024640950'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Available 24/7',
      response: 'Instant',
      link: '/chat'
    },
    {
      icon: MapPin,
      title: 'Office Hours',
      description: 'Middletown, DE',
      response: 'Mon-Fri 9AM-6PM EST',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Help & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get the help you need to succeed with Zion Tech Group. 
                Find answers, documentation, and connect with our support team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-300">Get started quickly with these helpful resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={action.link}
                  className="block bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{action.title}</h3>
                  <p className="text-gray-300 text-sm">{action.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Help Categories</h2>
            <p className="text-xl text-gray-300">Find help organized by topic and service area</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                  className={`w-full bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border transition-all duration-300 hover:scale-105 text-left ${
                    selectedCategory === category.id
                      ? 'border-cyan-500/50 bg-cyan-500/10'
                      : 'border-slate-700/50 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-400">{category.articles} articles</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find answers to common questions about our services</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-slate-700/50"
                  >
                    <p className="text-gray-300 leading-relaxed mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No FAQs match your current search. Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300">Multiple ways to get the help you need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <a
                  href={channel.link}
                  className="block bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-2">{channel.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{channel.response}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help. 
              We're committed to ensuring you get the most out of our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-300">Within 4 hours</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Support Quality</h3>
                <p className="text-gray-300">99% satisfaction</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;
