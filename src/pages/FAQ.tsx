import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Lock,
  BarChart3,
  Code,
  Server,
  Database,
  Cpu,
  Network,
  Smartphone,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Heart,
  BookOpen,
  GraduationCap,
  Factory,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  TrendingUp,
  TrendingDown,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck,
  UserClock,
  UserStar,
  UserHeart
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

const faqData: FAQItem[] = [
  {
    id: 'ai-services',
    question: 'What AI services does Zion Tech Group offer?',
    answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI-powered cybersecurity, and custom AI solution development for businesses.',
    category: 'AI Services',
    icon: Brain
  },
  {
    id: 'cybersecurity',
    question: 'How does Zion Tech Group ensure cybersecurity?',
    answer: 'We implement enterprise-grade security measures including zero-trust architecture, AI-powered threat detection, regular security audits, compliance with industry standards, and 24/7 monitoring.',
    category: 'Security',
    icon: Shield
  },
  {
    id: 'cloud-solutions',
    question: 'What cloud solutions are available?',
    answer: 'Our cloud services include cloud migration, infrastructure as code, container orchestration, serverless computing, multi-cloud strategy, and cloud security implementation.',
    category: 'Cloud',
    icon: Cloud
  },
  {
    id: 'pricing',
    question: 'How is pricing structured for your services?',
    answer: 'We offer flexible pricing models including project-based pricing, subscription plans, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'support',
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, dedicated account managers, comprehensive documentation, training programs, and ongoing maintenance and updates.',
    category: 'Support',
    icon: HelpCircle
  },
  {
    id: 'implementation',
    question: 'How long does it take to implement your solutions?',
    answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We provide detailed project timelines during planning.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'customization',
    question: 'Can you customize solutions for our specific needs?',
    answer: 'Absolutely! We specialize in custom development and can tailor any solution to meet your unique business requirements, industry standards, and compliance needs.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'maintenance',
    question: 'Do you provide ongoing maintenance and updates?',
    answer: 'Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and continuous improvement of your solutions.',
    category: 'Support',
    icon: HelpCircle
  },
  {
    id: 'ai-business-intelligence',
    question: 'What is your AI Business Intelligence platform?',
    answer: 'Our AI Business Intelligence platform provides real-time analytics, predictive insights, automated reporting, and data-driven decision making capabilities for businesses of all sizes.',
    category: 'AI Services',
    icon: BarChart3
  },
  {
    id: 'ai-customer-experience',
    question: 'How does your AI Customer Experience platform work?',
    answer: 'Our AI Customer Experience platform uses machine learning to analyze customer interactions, predict behavior, personalize experiences, and optimize engagement across all touchpoints.',
    category: 'AI Services',
    icon: Users
  },
  {
    id: 'quantum-computing',
    question: 'Do you offer quantum computing solutions?',
    answer: 'Yes, we provide quantum computing consulting, algorithm development, and hybrid quantum-classical solutions for complex computational problems in various industries.',
    category: 'AI Services',
    icon: Cpu
  },
  {
    id: 'micro-saas',
    question: 'What are your Micro SaaS solutions?',
    answer: 'We offer specialized Micro SaaS products including AI-powered tools, automation platforms, and industry-specific solutions designed for small to medium businesses.',
    category: 'General',
    icon: Code
  },
  {
    id: 'data-analytics',
    question: 'What data analytics capabilities do you provide?',
    answer: 'Our data analytics services include data visualization, statistical analysis, predictive modeling, business intelligence dashboards, and custom analytics solutions.',
    category: 'AI Services',
    icon: BarChart
  },
  {
    id: 'it-infrastructure',
    question: 'What IT infrastructure services do you offer?',
    answer: 'We provide comprehensive IT infrastructure services including network design, server management, cloud migration, security implementation, and ongoing maintenance.',
    category: 'IT Services',
    icon: Server
  },
  {
    id: 'compliance',
    question: 'How do you handle compliance and regulations?',
    answer: 'We ensure compliance with industry standards including GDPR, HIPAA, SOX, and other relevant regulations through our AI-powered compliance monitoring and automated reporting systems.',
    category: 'Security',
    icon: Shield
  },
  {
    id: 'training',
    question: 'Do you provide training for your solutions?',
    answer: 'Yes, we offer comprehensive training programs including user training, technical workshops, certification courses, and ongoing support to ensure successful adoption of our solutions.',
    category: 'Support',
    icon: GraduationCap
  },
  {
    id: 'integration',
    question: 'How do your solutions integrate with existing systems?',
    answer: 'Our solutions are designed with open APIs and standard protocols to seamlessly integrate with your existing systems, databases, and third-party applications.',
    category: 'General',
    icon: Network
  },
  {
    id: 'scalability',
    question: 'How scalable are your solutions?',
    answer: 'Our solutions are built with scalability in mind, supporting growth from small businesses to enterprise-level organizations with flexible architecture and cloud-native design.',
    category: 'General',
    icon: UserTrendingUp
  },
  {
    id: 'emergency-support',
    question: 'What emergency support options are available?',
    answer: 'We provide 24/7 emergency support with dedicated response teams, priority escalation, and guaranteed response times for critical issues affecting your business operations.',
    category: 'Support',
    icon: ShieldAlert
  }
];

const categories = ['All', 'AI Services', 'Security', 'Cloud', 'Support', 'General', 'IT Services'];

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about Zion Tech Group's AI services, cybersecurity solutions, and technology consulting."
        keywords="FAQ, frequently asked questions, AI services, cybersecurity, cloud solutions, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our AI services, cybersecurity solutions, and technology consulting
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {filteredFAQ.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.question}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.category}</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {activeItem === item.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {filteredFAQ.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any questions about our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
