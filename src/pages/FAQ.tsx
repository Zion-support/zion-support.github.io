import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  Users, 
  ShoppingCart, 
  Globe, 
  Shield, 
  Brain, 
  Code, 
  Cloud, 
  Lock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          id: 'general-1',
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, cybersecurity, cloud computing, and emerging technologies. We help businesses transform their digital infrastructure and stay ahead of technological innovation.'
        },
        {
          id: 'general-2',
          question: 'What services do you offer?',
          answer: 'We offer comprehensive technology services including AI development, cybersecurity solutions, cloud infrastructure, IT consulting, software development, data analytics, and emerging technology solutions like quantum computing and blockchain.'
        },
        {
          id: 'general-3',
          question: 'Do you work with small businesses?',
          answer: 'Yes, we work with businesses of all sizes, from startups to enterprise organizations. We tailor our solutions to meet the specific needs and budget constraints of each client.'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        {
          id: 'ai-1',
          question: 'What AI technologies do you specialize in?',
          answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, AI automation, and custom AI solution development. Our team has expertise in both traditional ML and cutting-edge AI technologies.'
        },
        {
          id: 'ai-2',
          question: 'Can you help integrate AI into existing systems?',
          answer: 'Absolutely! We specialize in integrating AI capabilities into existing business systems and workflows. We ensure seamless integration while maintaining system stability and performance.'
        },
        {
          id: 'ai-3',
          question: 'How do you ensure AI solutions are ethical and unbiased?',
          answer: 'We follow strict AI ethics guidelines and implement bias detection and mitigation techniques. All our AI solutions undergo rigorous testing to ensure fairness, transparency, and responsible AI practices.'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      questions: [
        {
          id: 'security-1',
          question: 'What cybersecurity services do you provide?',
          answer: 'We offer comprehensive cybersecurity services including security audits, penetration testing, threat detection, incident response, security training, compliance management, and ongoing security monitoring and support.'
        },
        {
          id: 'security-2',
          question: 'Do you help with compliance requirements?',
          answer: 'Yes, we help businesses meet various compliance requirements including SOC 2, ISO 27001, GDPR, HIPAA, and industry-specific regulations. We provide both assessment and implementation support.'
        },
        {
          id: 'security-3',
          question: 'How do you stay updated on security threats?',
          answer: 'We maintain active threat intelligence networks, participate in security research communities, and continuously monitor emerging threats to ensure our clients are protected against the latest security challenges.'
        }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      questions: [
        {
          id: 'cloud-1',
          question: 'What cloud platforms do you work with?',
          answer: 'We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help clients choose the best platform for their needs and optimize their cloud infrastructure.'
        },
        {
          id: 'cloud-2',
          question: 'Can you help migrate existing systems to the cloud?',
          answer: 'Yes, we specialize in cloud migration strategies and implementation. We assess your current infrastructure, plan the migration, and execute it with minimal downtime while ensuring data security and performance optimization.'
        },
        {
          id: 'cloud-3',
          question: 'Do you provide ongoing cloud management?',
          answer: 'We offer comprehensive cloud management services including monitoring, optimization, cost management, security updates, and 24/7 support to ensure your cloud infrastructure runs efficiently and securely.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Plans',
      icon: DollarSign,
      questions: [
        {
          id: 'pricing-1',
          question: 'How do you structure your pricing?',
          answer: 'Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We offer flexible engagement models including fixed-price projects, time and materials, and ongoing support contracts.'
        },
        {
          id: 'pricing-2',
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide a free initial consultation to understand your needs and discuss potential solutions. This helps us provide accurate project estimates and recommendations.'
        },
        {
          id: 'pricing-3',
          question: 'Are there ongoing costs after project completion?',
          answer: 'This depends on the type of project. Some solutions require ongoing maintenance and support, while others are self-contained. We\'ll clearly outline all costs during the planning phase.'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      icon: MessageCircle,
      questions: [
        {
          id: 'support-1',
          question: 'What support options do you offer?',
          answer: 'We offer multiple support tiers including 24/7 emergency support, regular maintenance windows, proactive monitoring, and dedicated support teams. We tailor our support to match your business needs and requirements.'
        },
        {
          id: 'support-2',
          question: 'How quickly do you respond to support requests?',
          answer: 'Response times vary by support tier, but we typically respond to critical issues within 1-2 hours and non-critical issues within 24 hours. We provide clear SLA commitments for all support levels.'
        },
        {
          id: 'support-3',
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training for all our solutions, including user training, administrator training, and ongoing education as systems evolve. We ensure your team can effectively use and maintain the solutions we implement.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);


  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find answers to common questions about our services, processes, and technology solutions. 
              Can't find what you're looking for? Contact our team for personalized assistance.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search questions, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {searchQuery ? (
            // Search Results
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl font-bold text-white mb-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Search Results ({filteredQuestions.length})
              </motion.h2>
              
              {filteredQuestions.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-slate-dark/70 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                      <p className="text-sm text-zion-cyan">{item.category}</p>
                    </div>
                    {openItems.has(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.has(item.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-zion-slate-light leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            // Category View
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-4">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-slate-dark/70 transition-colors duration-300"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                          {openItems.has(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          )}
                        </button>
                        
                        {openItems.has(item.id) && (
                          <motion.div
                            className="px-6 pb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-zion-slate-light leading-relaxed">{item.answer}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team is here to help. Get in touch with us for personalized assistance and expert guidance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 (555) 123-4567</p>
                <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM EST</p>
              </motion.div>
              
              <motion.div
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">support@ziontechgroup.com</p>
                <p className="text-zion-slate-light text-sm">24/7 support available</p>
              </motion.div>
              
              <motion.div
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MessageCircle className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-zion-slate-light">Available on our website</p>
                <p className="text-zion-slate-light text-sm">Instant responses</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
