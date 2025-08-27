import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Search,
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Brain,
  Shield,
  Code,
  Zap,
  Lightbulb,
  Target,
  Building,
  BarChart3,
  Globe,
  CheckCircle,
  Play,
  Pause,
  Stop,
  FileText,
  Video,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';

const Support: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Support', count: 25, icon: HelpCircle },
    { id: 'technical', name: 'Technical Issues', count: 10, icon: Code },
    { id: 'billing', name: 'Billing & Accounts', count: 5, icon: Building },
    { id: 'general', name: 'General Questions', count: 8, icon: HelpCircle },
    { id: 'feature', name: 'Feature Requests', count: 2, icon: Lightbulb }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form, email, or phone. We\'ll schedule a consultation to understand your needs and recommend the best solutions. Our onboarding process typically takes 1-2 weeks depending on the complexity of your requirements.',
      category: 'general',
      tags: ['Getting Started', 'Onboarding', 'Consultation']
    },
    {
      id: 2,
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including AI business automation, autonomous trading platforms, consciousness simulation, healthcare diagnosis, content creation, and supply chain optimization. Each service is customized to meet your specific business needs and can be deployed as standalone solutions or integrated into existing systems.',
      category: 'technical',
      tags: ['AI Services', 'Business Automation', 'Customization']
    },
    {
      id: 3,
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. All our solutions implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, zero-trust architecture, and regular security audits. We maintain SOC2 compliance and follow industry best practices for data protection and privacy.',
      category: 'technical',
      tags: ['Security', 'Encryption', 'Compliance', 'SOC2']
    },
    {
      id: 4,
      question: 'What is your pricing structure?',
      answer: 'Our pricing is transparent and based on the specific services and scale you require. We offer flexible pricing models including subscription-based, project-based, and custom enterprise pricing. Contact our sales team for a detailed quote tailored to your needs.',
      category: 'billing',
      tags: ['Pricing', 'Transparency', 'Flexible Models', 'Custom Quotes']
    },
    {
      id: 5,
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 technical support for all our enterprise clients. Our support team is available around the clock to handle any urgent issues. We also offer different support tiers including basic support, priority support, and dedicated account management.',
      category: 'general',
      tags: ['24/7 Support', 'Enterprise', 'Support Tiers', 'Account Management']
    },
    {
      id: 6,
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! Our services are designed to integrate seamlessly with existing systems and infrastructure. We use industry-standard APIs and protocols, and our team will work closely with your IT team to ensure smooth integration. We also provide comprehensive documentation and training.',
      category: 'technical',
      tags: ['Integration', 'APIs', 'Existing Systems', 'Documentation']
    },
    {
      id: 7,
      question: 'What is your implementation timeline?',
      answer: 'Implementation timelines vary depending on the complexity and scope of the project. Simple AI integrations can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during the planning phase and keep you updated throughout the process.',
      category: 'general',
      tags: ['Implementation', 'Timeline', 'Project Planning', 'Updates']
    },
    {
      id: 8,
      question: 'Do you offer training and support for my team?',
      answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain our solutions. This includes initial training, ongoing support, documentation, and access to our knowledge base. We also offer certification programs for advanced users.',
      category: 'general',
      tags: ['Training', 'Team Support', 'Documentation', 'Certification']
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const supportChannels = [
    {
      name: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-zion-cyan to-zion-purple',
      action: 'Start Chat',
      actionUrl: '#chat'
    },
    {
      name: 'Email Support',
      description: 'Send us detailed questions and get comprehensive responses',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      color: 'from-zion-purple to-zion-blue',
      action: 'Send Email',
      actionUrl: 'mailto:support@ziontechgroup.com'
    },
    {
      name: 'Phone Support',
      description: 'Call us directly for urgent technical issues',
      icon: Phone,
      availability: 'Business Hours',
      responseTime: 'Immediate',
      color: 'from-zion-blue to-zion-green',
      action: 'Call Now',
      actionUrl: 'tel:+13024640950'
    },
    {
      name: 'Knowledge Base',
      description: 'Access our comprehensive documentation and guides',
      icon: BookOpen,
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-zion-green to-zion-emerald',
      action: 'Browse Docs',
      actionUrl: '/resources'
    }
  ];

  const supportResources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete guide to getting started with our services',
      icon: BookOpen,
      type: 'PDF Guide',
      size: '2.1 MB',
      downloads: 1540
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API reference and examples',
      icon: Code,
      type: 'Online Docs',
      size: 'Web',
      downloads: 890
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      icon: Video,
      type: 'Video Series',
      size: '2.5 GB',
      downloads: 2340
    },
    {
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      icon: HelpCircle,
      type: 'PDF Guide',
      size: '1.8 MB',
      downloads: 1120
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              How Can We
              <span className="block text-zion-cyan">Help You?</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Get the support you need through multiple channels. Our expert team is here to help 
              with technical issues, questions, and guidance on using our services.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <HelpCircle className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>25+ Support Topics</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>4hr Response Time</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Channels</h2>
            <p className="text-zion-slate-light">Choose the best way to get the help you need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
                  <p className="text-zion-slate-light mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Availability:</span>
                      <span className="text-zion-cyan">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Response:</span>
                      <span className="text-zion-cyan">{channel.responseTime}</span>
                    </div>
                  </div>

                  <a
                    href={channel.actionUrl}
                    className={`inline-block w-full py-3 px-4 bg-gradient-to-r ${channel.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    {channel.action}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zion-slate-light">Find quick answers to common questions</p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/20'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-zion-cyan/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {faq.question}
                    </h3>
                    {expandedFAQ === faq.id ? (
                      <Minus className="w-5 h-5 text-zion-cyan" />
                    ) : (
                      <Plus className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-300" />
                    )}
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Resources</h2>
            <p className="text-zion-slate-light">Download helpful guides and documentation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-zion-slate-light mb-4 text-sm">{resource.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Type:</span>
                      <span className="text-zion-cyan">{resource.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Size:</span>
                      <span className="text-zion-cyan">{resource.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Downloads:</span>
                      <span className="text-zion-cyan">{resource.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Can't find what you're looking for? Our support team is ready to help you 
              with any questions or technical issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
