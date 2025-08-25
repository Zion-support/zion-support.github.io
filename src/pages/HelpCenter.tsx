import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen,
  Video,
  FileText,
  Users,
  Zap,
  Shield,
  Globe,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { id: 'quantum', name: 'Quantum Technology', icon: Zap, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: 10 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Network, count: 9 },
    { id: '5g', name: '5G Solutions', icon: Network, count: 6 },
    { id: 'general', name: 'General Support', icon: Users, count: 20 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'ai',
      question: "How does Zion Tech Group's AI solutions differ from competitors?",
      answer: "Our AI solutions are built on proprietary algorithms and quantum-enhanced processing capabilities. We combine traditional machine learning with quantum computing principles, resulting in faster processing, more accurate predictions, and superior scalability. Our AI systems are also designed with explainability and ethical AI principles at their core.",
      tags: ['AI', 'Machine Learning', 'Quantum Computing']
    },
    {
      id: 2,
      category: 'ai',
      question: "What industries can benefit from your AI autonomous systems?",
      answer: "Our AI autonomous systems are designed for cross-industry applications. We've successfully implemented solutions in healthcare (patient monitoring and diagnosis), manufacturing (predictive maintenance and quality control), financial services (fraud detection and risk assessment), retail (inventory management and customer service), and government (data analysis and process automation).",
      tags: ['AI', 'Autonomous Systems', 'Industry Solutions']
    },
    {
      id: 3,
      category: 'quantum',
      question: "How secure are quantum neural networks against cyber threats?",
      answer: "Quantum neural networks provide unprecedented security through quantum entanglement and superposition principles. They're resistant to traditional cryptographic attacks and can detect intrusion attempts in real-time. Our quantum systems also include quantum-safe encryption protocols that remain secure even against future quantum computers.",
      tags: ['Quantum Computing', 'Cybersecurity', 'Neural Networks']
    },
    {
      id: 4,
      category: 'cybersecurity',
      question: "What compliance standards does your SOC2 automation support?",
      answer: "Our SOC2 compliance automation covers all Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. We support SOC2 Type I and Type II certifications, with automated evidence collection, continuous monitoring, and real-time compliance reporting. Our system integrates with major compliance frameworks including ISO 27001, NIST, and GDPR.",
      tags: ['SOC2', 'Compliance', 'Automation']
    },
    {
      id: 5,
      category: 'infrastructure',
      question: "How do you ensure 99.99% uptime for 5G enterprise solutions?",
      answer: "Our 5G enterprise solutions achieve 99.99% uptime through redundant network architecture, AI-powered predictive maintenance, real-time monitoring, and automated failover systems. We use edge computing to reduce latency and implement load balancing across multiple network nodes. Our infrastructure includes backup power systems and geographically distributed data centers.",
      tags: ['5G', 'Network Infrastructure', 'Uptime']
    },
    {
      id: 6,
      category: 'cloud',
      question: "What cloud platforms do you support for migration?",
      answer: "We support migration to and from all major cloud platforms including AWS, Azure, Google Cloud Platform, IBM Cloud, and Oracle Cloud. Our cloud migration services include automated assessment tools, cost optimization analysis, security compliance verification, and seamless data migration with zero downtime. We also provide hybrid cloud solutions and multi-cloud management.",
      tags: ['Cloud Migration', 'Multi-Cloud', 'DevOps']
    },
    {
      id: 7,
      category: 'general',
      question: "How quickly can you respond to support requests?",
      answer: "We provide 24/7 support with guaranteed response times: Critical issues (system down) - 15 minutes, High priority (major functionality affected) - 1 hour, Medium priority (minor issues) - 4 hours, Low priority (general questions) - 24 hours. Our support team includes certified engineers and AI-powered diagnostic tools for faster resolution.",
      tags: ['Support', 'Response Time', '24/7']
    },
    {
      id: 8,
      category: 'general',
      question: "Do you offer training for our team on new technologies?",
      answer: "Yes, we provide comprehensive training programs including hands-on workshops, certification courses, and ongoing support. Our training covers AI implementation, quantum computing basics, cybersecurity best practices, and cloud infrastructure management. We also offer customized training programs tailored to your specific technology stack and business needs.",
      tags: ['Training', 'Certification', 'Workshops']
    }
  ];

  const resources = [
    {
      title: "AI Implementation Guide",
      description: "Step-by-step guide to implementing AI solutions in your organization",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
      rating: 4.8,
      downloads: "2.3k"
    },
    {
      title: "Quantum Computing Primer",
      description: "Introduction to quantum computing and its business applications",
      type: "Video",
      icon: Video,
      downloadUrl: "#",
      rating: 4.9,
      downloads: "1.8k"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Comprehensive security guidelines for enterprise environments",
      type: "PDF",
      icon: Shield,
      downloadUrl: "#",
      rating: 4.7,
      downloads: "3.1k"
    },
    {
      title: "5G Network Planning",
      description: "Strategic guide for 5G enterprise network implementation",
      type: "Interactive",
      icon: Network,
      downloadUrl: "#",
      rating: 4.6,
      downloads: "1.2k"
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our AI-powered support team",
      icon: MessageCircle,
      responseTime: "Immediate",
      availability: "24/7",
      action: "Start Chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      responseTime: "< 15 min",
      availability: "24/7",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Detailed technical assistance via email",
      icon: Mail,
      responseTime: "< 4 hours",
      availability: "24/7",
      action: "Send Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: BookOpen,
      responseTime: "Instant",
      availability: "Always",
      action: "Browse Docs",
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, access helpful resources, and get the support you need 
              to make the most of Zion Tech Group's innovative solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">500+</span> Help Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">24/7</span> Support
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">99%</span> Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300">Multiple ways to get the help you need, when you need it</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{channel.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400">{channel.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Available:</span>
                    <span className="text-green-400">{channel.availability}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find quick answers to common questions about our services and solutions</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4 inline mr-2" />
                {category.name}
                {category.count > 0 && (
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300 mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag) => (
                          <span key={tag} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-300">Download guides, watch tutorials, and access comprehensive documentation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">{resource.type}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{resource.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{resource.downloads} downloads</span>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  {resource.type === 'Video' ? (
                    <>
                      <Play className="w-4 h-4" />
                      Watch
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download
                    </>
                  )}
                </button>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is available 24/7 to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
