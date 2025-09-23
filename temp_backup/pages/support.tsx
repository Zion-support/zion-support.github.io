import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Globe,
  FileText,
  Play,
  Star,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const supportCategories = [
  {
    title: 'Technical Support',
    icon: <Headphones className="w-8 h-8 text-cyan-400" />,
    description: 'Get help with our platforms and services',
    items: [
      'Platform troubleshooting',
      'API integration support',
      'Performance optimization',
      'Security configuration',
      'Deployment assistance'
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-400/30'
  },
  {
    title: 'Documentation',
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    description: 'Comprehensive guides and references',
    items: [
      'Getting started guides',
      'API documentation',
      'Best practices',
      'Troubleshooting guides',
      'Video tutorials'
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/30'
  },
  {
    title: 'Training & Onboarding',
    icon: <Video className="w-8 h-8 text-emerald-400" />,
    description: 'Learn to use our platforms effectively',
    items: [
      'Live training sessions',
      'On-demand courses',
      'Certification programs',
      'Custom workshops',
      'Team onboarding'
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-400/30'
  },
  {
    title: 'Community Support',
    icon: <Users className="w-8 h-8 text-orange-400" />,
    description: 'Connect with other users and experts',
    items: [
      'User forums',
      'Knowledge sharing',
      'Peer support',
      'Expert Q&A',
      'Success stories'
    ],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-400/30'
  }
];

const supportChannels = [
  {
    name: 'Live Chat',
    icon: <MessageCircle className="w-6 h-6" />,
    description: 'Instant support during business hours',
    availability: '24/7',
    responseTime: '< 5 minutes',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-400/30'
  },
  {
    name: 'Email Support',
    icon: <Mail className="w-6 h-6" />,
    description: 'Detailed technical assistance',
    availability: '24/7',
    responseTime: '< 4 hours',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-400/30'
  },
  {
    name: 'Phone Support',
    icon: <Phone className="w-6 h-6" />,
    description: 'Direct conversation with experts',
    availability: '9 AM - 6 PM EST',
    responseTime: 'Immediate',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-400/30'
  },
  {
    name: 'Ticket System',
    icon: <FileText className="w-6 h-6" />,
    description: 'Track and manage support requests',
    availability: '24/7',
    responseTime: '< 2 hours',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-400/30'
  }
];

const faqItems = [
  {
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply contact our team through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
  },
  {
    question: 'What kind of technical support do you provide?',
    answer: 'We provide comprehensive technical support including platform troubleshooting, API integration assistance, performance optimization, security configuration, and deployment support. Our team of experts is available 24/7.'
  },
  {
    question: 'Do you offer training for your platforms?',
    answer: 'Yes! We offer live training sessions, on-demand courses, certification programs, and custom workshops. We also provide team onboarding to ensure your team can use our platforms effectively.'
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We pride ourselves on fast response times. Live chat responses are typically under 5 minutes, email support within 4 hours, and our ticket system responds within 2 hours. Phone support is immediate during business hours.'
  },
  {
    question: 'Is there a community where I can connect with other users?',
    answer: 'Absolutely! We have active user forums, knowledge sharing platforms, peer support groups, and expert Q&A sessions. Our community is a great place to learn from other users and share experiences.'
  }
];

export default function Support() {
  return (
    <Layout>
      <SEO
        title="Support | Zion Tech Group"
        description="Get comprehensive technical support, documentation, training, and community assistance for all Zion Tech Group platforms and services."
        keywords={["technical support", "customer service", "help documentation", "training", "community support", "Zion Tech Group"]}
      />

    <Layout 
      title="Support - Zion Tech Group"
      description="Get comprehensive support for all Zion Tech Group services. 24/7 assistance, documentation, and expert guidance to ensure your success."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to connect with our expert support team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center`}>
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">Availability: {channel.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">Response: {channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Help
                </button>
              </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is AI Consciousness Evolution?",
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence."
              },
              {
                question: "How does Quantum Neural Ecosystem work?",
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power."
              },
              {
                question: "What makes Space Resource Intelligence unique?",
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization."
              },
              {
                question: "How secure is your Quantum Cybersecurity platform?",
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."
              },
              {
                question: "Can I integrate your AI with my existing systems?",
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."
              },
              {
                question: "What support do you offer for enterprise deployments?",
                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
=======
      {/* FAQs */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and solutions.
            </p>
          </motion.div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No FAQs found matching your search.</p>
              <p className="text-white/50 text-sm mt-2">Try adjusting your search terms or contact us directly.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Support Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Access comprehensive documentation, guides, and learning materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{resource.category}</span>
                    <a
                      href={resource.downloadUrl}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or technical issues.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-white/70 mb-2">+1 302 464 0950</p>
                <p className="text-white/50 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-white/70 mb-2">support@ziontechgroup.com</p>
                <p className="text-white/50 text-sm">Response within 4 hours</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
                <p className="text-white/70 mb-2">Wilmington, DE</p>
                <p className="text-white/50 text-sm">Available for in-person meetings</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Contact Support Team
              </Link>
              <Link href="/docs" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
